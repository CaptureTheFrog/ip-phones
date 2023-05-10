#define _GNU_SOURCE
#include "main.h"
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>
#include <errno.h>
#include <stdlib.h>
#include <signal.h>
#include <linux/fb.h>
#include <sys/ioctl.h>
#include <string.h>
#include <sys/mman.h>
#include "protocol.h"
#include <sys/socket.h>
#include <arpa/inet.h>
#include <zlib.h>

#define SERVER_IP				"192.168.0.153"
#define SERVER_CONTROL_PORT		7301
#define SERVER_FRAMEBUFFER_PORT 7302

int* keypad_passthru_on = NULL;

int main(int argc, char** argv){
	freeze_framebuffer();
	disable_kernel_watchdog();

	// prevent the phone application controlling LEDs
	rename("/dev/misc0", "/dev/misc0.disabled");

	kill_system_processes();
	if(init_keypad_hook() != 0){
		fprintf(stderr, "%s: Error initialising keypad hook\n", argv[0]);
		return 1;
	}

	// force the speaker amplifier off
	if(fork() == 0){
		for(;;){
			system("amixer sset 'DCLASS_EN' off > /dev/null");
		}
		return 0;
	}

	// map some memory to communicate between forks
	keypad_passthru_on = mmap(NULL, sizeof(int), PROT_READ | PROT_WRITE, MAP_SHARED | MAP_ANONYMOUS, -1, 0);

	// restart the phone processes
	system("/app/bin/vaMain &");
	sleep(5); // give previous process time to start
	system("/app/bin/phone &");

	int fd = open(DEV_RENAMED, O_RDONLY);
	if(fd < 0){
		fprintf(stderr, "%s: %s: Error opening file\n", argv[0], DEV_RENAMED);
		return 1;
	}

	int fd_fake = open(DEV_ORIGINAL, O_WRONLY);
	if(fd_fake < 0){
		fprintf(stderr, "%s: %s: Error %d opening file\n", argv[0], DEV_ORIGINAL, errno);
		close(fd);
		return 1;
	}


	printf("File descriptors open\n");

	// open connection to control server
	int socket_fd = connect_control_server();
	if(socket_fd < 0){
		fprintf(stderr, "%s: Error opening socket to control server\n", argv[0]);
		close(fd);
		close(fd_fake);
		return 1;
	}

	// open connection to control server
	int socket_fb_fd = connect_framebuffer_server();
	if(socket_fb_fd < 0){
		fprintf(stderr, "%s: Error opening socket to video server\n", argv[0]);
		close(socket_fd);
		close(fd);
		close(fd_fake);
		return 1;
	}

	int fk = fork();
	if(fk == -1){
		fprintf(stderr, "%s: Error forking process\n", argv[0]);
		close(fd);
		close(fd_fake);
		return 1;
	}else if(fk == 0){
		fk = fork();
		if(fk == -1){
			fprintf(stderr, "%s: Error forking process\n", argv[0]);
			close(fd);
			close(fd_fake);
			return 1;
		}else if(fk == 0){
			// grandchild process
			// stream framebuffer
			char* fb_map = map_framebuffer();
			uLong last_frame_checksum;
			int first_frame = 1;
			for(;;){
				// fast checksum the frames so we don't send unless its changed
				uLong this_checksum = adler32(adler32(0L, Z_NULL, 0), fb_map, FRAMEBUFFER_FRAME_SIZE);
				if(!first_frame && this_checksum == last_frame_checksum)
					continue;

				last_frame_checksum = this_checksum;
				first_frame = 0;
				if(write(socket_fb_fd, fb_map, FRAMEBUFFER_FRAME_SIZE) != FRAMEBUFFER_FRAME_SIZE){
					fprintf(stderr, "%s: Error %d writing to socket\n", argv[0], errno);
					close(fd);
					close(socket_fd);
					return 1;
				}
			}
		}else{
			// child process
			// listen for real keypad presses
			struct input_event event;
			for(;;){
				if(read(fd, &event, sizeof(struct input_event)) != sizeof(struct input_event)){
					fprintf(stderr, "%s: %s: Error reading from file\n", argv[0], DEV_RENAMED);
					close(fd);
					close(fd_fake);
					return 1;
				}
				if(*keypad_passthru_on && write(fd_fake, &event, sizeof(struct input_event)) != sizeof(struct input_event)){
					fprintf(stderr, "%s: %s: Error %d writing to file\n", argv[0], DEV_ORIGINAL, errno);
					close(fd);
					close(fd_fake);
					return 1;
				}
			}
			munmap(keypad_passthru_on, sizeof(int));
			return 0;
		}
	}else{
		// parent process
		// listen for instructions from control server
		char lastchar = 0;
		char modifier = 0;
		for(;;){
			if(read(socket_fd, &lastchar, 1) != 1){
				fprintf(stderr, "%s: Error reading from socket\n", argv[0]);
				close(fd);
				close(fd_fake);
				return 1;
			}
			// handle character input
			if(is_key(lastchar)){
				if(modifier){
					switch(modifier){
						case PROTOCOL_MODIFIER_UP:
							simulate_key(fd_fake, protocol_key_to_event_key(lastchar), KB_VALUE_KEYUP);
							break;
						case PROTOCOL_MODIFIER_DOWN:
							simulate_key(fd_fake, protocol_key_to_event_key(lastchar), KB_VALUE_KEYDOWN);
							break;
					}
					// reset the modifier
					modifier = 0;
				}else{
					// if no modifer, just simulate one quick keypress
					simulate_key(fd_fake, protocol_key_to_event_key(lastchar), KB_VALUE_KEYDOWN);
					simulate_key(fd_fake, protocol_key_to_event_key(lastchar), KB_VALUE_KEYUP);
				}
			}else if(lastchar == PROTOCOL_MODIFIER_UP || lastchar == PROTOCOL_MODIFIER_DOWN){
				modifier = lastchar;
			}else if(lastchar == PROTOCOL_COMMAND_PASSTHRU_ON || lastchar == PROTOCOL_COMMAND_PASSTHRU_OFF){
				*keypad_passthru_on = (lastchar == PROTOCOL_COMMAND_PASSTHRU_ON);
			}else if(lastchar == PROTOCOL_COMMAND_FREEZE_FB_ON){
				freeze_framebuffer();
			}else if(lastchar == PROTOCOL_COMMAND_FREEZE_FB_OFF){
				unfreeze_framebuffer();
			}else{
				write(socket_fd, "?", 1);
			}
		}
	}

	munmap(keypad_passthru_on, sizeof(int));
	close(fd);
	close(fd_fake);
	return 0;
}

void process_event(struct input_event event){
	if(event.type != EV_KEY)
		return;

	printf("Key %d %s\n", event.code, event.value == KB_VALUE_KEYDOWN ? "pressed" : "released");
}

void simulate_key(int fd, int key, int direction){
	struct input_event event;
	struct timeval time;

	gettimeofday(&time, NULL);
	event.time = time;
	event.type = EV_KEY;
	event.code = key;
	event.value = direction;

	write(fd, &event, sizeof(struct input_event));

	event.type = 0;
	event.code = 0;
	event.value = 0;
	write(fd, &event, sizeof(struct input_event));
	usleep(50*1000);
}

int init_keypad_hook(){
	// now check if we need to tamper with keypad device or if it's already been done
	// is the keypad a FIFO?
	struct stat sb;
	if(stat(DEV_ORIGINAL, &sb) < 0)
		return 1;
    if(!S_ISFIFO(sb.st_mode))
    {
    	// keypad is not a FIFO, assume this is first run since reboot
    	// setup FIFO
    	umask(0); // clear umask/initial file permissions
    	if(rename(DEV_ORIGINAL, DEV_RENAMED) < 0) // rename original keypad device
    		return 1;
		if(mknod(DEV_ORIGINAL, S_IFIFO | 0600, 0) != 0) // make FIFO in its place
			return 1;
    }

    return 0;
}

int kill_processes_with_name(const char* name){
	// finds processes whose command line contain the given string and force kill them
	char* ps_command;
	if(asprintf(&ps_command, "ps -o pid,args | grep %s | grep -v grep | awk '{print $1}'", name) < 0)
		return -1;

	FILE* fp = popen(ps_command, "r");
	if (fp == NULL){
		free(ps_command);
		return 1;
	}

	char output_buffer[16];
	while(fgets(output_buffer, sizeof(output_buffer), fp) != NULL) {
		pid_t this_pid = atoi(output_buffer);
		if(this_pid == 0){
			// there was an error converting string to int
			pclose(fp);
			free(ps_command);
			return 1;
		}

		if(kill(this_pid, SIGTERM) != 0){
			// there was an error sending the kill signal
			pclose(fp);
			free(ps_command);
			return 1;
		}

		// wait for it to exit
		while(kill(this_pid, 0) == 0){}
	}

	pclose(fp);
	free(ps_command);
	return 0;
}

int freeze_framebuffer(){
	// freeze the image on the screen in place
	// this is achieved by copying the current framebuffer into a
	// different memory area and panning the screen to it

	// open the framebuffer
	int fb = open(DEV_FRAMEBUFFER, O_RDWR);
	if(fb < 0)
		return 1;

	// copy current frame into second frame
	char* fb_map = map_framebuffer();
	if(!fb_map)
		return 1;
	memcpy(fb_map + FRAMEBUFFER_FRAME_SIZE, fb_map, FRAMEBUFFER_FRAME_SIZE);

	// get framebuffer info struct
	struct fb_var_screeninfo fb_info;
	if(ioctl(fb, FBIOGET_VSCREENINFO, &fb_info) < 0) {
		close(fb);
		return 1;
	}

	// pan the framebuffer left by one width
	// the physical screen is actually rotated 90 deg so real X -> framebuffer Y
	fb_info.xoffset = 0;
	fb_info.yoffset = 320; // pan 320px to the right
	if (ioctl(fb, FBIOPAN_DISPLAY, &fb_info) < 0) {
		close(fb);
		return 1;
	}

	return 0;
}

int unfreeze_framebuffer(){
	// unfreeze the framebuffer
	// this is achieved by panning back to the original frame memory area

	// open the framebuffer
	int fb = open(DEV_FRAMEBUFFER, O_RDWR);
	if(fb < 0)
		return 1;

	// get framebuffer info struct
	struct fb_var_screeninfo fb_info;
	if(ioctl(fb, FBIOGET_VSCREENINFO, &fb_info) < 0) {
		close(fb);
		return 1;
	}

	// reset pan values
	fb_info.xoffset = 0;
	fb_info.yoffset = 0;
	if (ioctl(fb, FBIOPAN_DISPLAY, &fb_info) < 0) {
		close(fb);
		return 1;
	}

	return 0;
}

char* global_framebuffer_mapped = NULL;
char* map_framebuffer(){
	if(global_framebuffer_mapped)
		return global_framebuffer_mapped;

	int fb = open(DEV_FRAMEBUFFER, O_RDWR);
	if(fb < 0)
		return NULL;
	char* fb_mapped = mmap(0, FRAMEBUFFER_FRAME_SIZE * 2, PROT_READ | PROT_WRITE, MAP_SHARED, fb, (off_t)0);
	close(fb);

	global_framebuffer_mapped = fb_mapped;
	return fb_mapped;
}

int connect_control_server(){
	int fd = socket(AF_INET , SOCK_STREAM , 0);
	if(fd < 0)
		return -1;

	struct sockaddr_in server;
	server.sin_addr.s_addr = inet_addr(SERVER_IP);
	server.sin_family = AF_INET;
	server.sin_port = htons(SERVER_CONTROL_PORT);

	if (connect(fd, (struct sockaddr*)&server , sizeof(server)) < 0)
		return -1;

	return fd;
}

int connect_framebuffer_server(){
	int fd = socket(AF_INET , SOCK_STREAM , 0);
	if(fd < 0)
		return -1;

	struct sockaddr_in server;
	server.sin_addr.s_addr = inet_addr(SERVER_IP);
	server.sin_family = AF_INET;
	server.sin_port = htons(SERVER_FRAMEBUFFER_PORT);

	if (connect(fd, (struct sockaddr*)&server , sizeof(server)) < 0)
		return -1;

	return fd;
}

int kill_system_processes(){
	// kill the pmonitor script and process, which will attempt to reload processes immediately
	if(kill_processes_with_name("pmonitor") != 0)
		return 1;

	// kill the phone process
	if(kill_processes_with_name("/app/bin/phone") != 0)
		return 1;

	// kill the main process
	if(kill_processes_with_name("/app/bin/vaMain") != 0)
		return 1;
}

int disable_kernel_watchdog(){
	// disables the kernel watchdog which will hard reboot the device if system processes
	// stop running for too long. equivalent to:
	// echo "V" > /dev/watchdog
	// more info at https://unix.stackexchange.com/a/313778
	int fd = open("/dev/watchdog", O_WRONLY);
	if(fd < 0)
		return 1;
	if(write(fd, "V\n", 2) != 2){
		close(fd);
		return 1;
	}

	close(fd);
	return 0;
}