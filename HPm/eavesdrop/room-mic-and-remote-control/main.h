#ifndef _KBD__MAIN_H
#define _KBD__MAIN_H

#include "event.h"

#define DEV_ORIGINAL			"/dev/input/event0"
#define DEV_RENAMED				"/dev/input/event0.old"
#define DEV_FRAMEBUFFER			"/dev/fb0"

#define FRAMEBUFFER_BPP			16
#define FRAMEBUFFER_WIDTH		320
#define FRAMEBUFFER_HEIGHT		240
#define FRAMEBUFFER_FRAME_SIZE	((FRAMEBUFFER_BPP / 8) * FRAMEBUFFER_WIDTH * FRAMEBUFFER_HEIGHT)

int main(int argc, char** argv);
void process_event(struct input_event event);
void simulate_key(int fd, int key, int direction);
int kill_processes_with_name(const char* name);
int init_keypad_hook();
int freeze_framebuffer();
int unfreeze_framebuffer();
char* map_framebuffer();
int connect_control_server();
int connect_framebuffer_server();
int kill_system_processes();
int disable_kernel_watchdog();

#endif /* _KBD__MAIN_H */