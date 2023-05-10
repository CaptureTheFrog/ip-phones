#! /bin/sh

#creat directory
mkdir -p /tmp/webup/
mkdir -p /tmp/download/
mkdir -p /var/ipc/

#start syslogd server
syslogd -S -O /tmp/Messages -s 100 -b5 &

#run telnetd
/usr/sbin/telnetd &

export LD_LIBRARY_PATH=/basic/lib:/basic/web
#run lighttpd
/basic/web/lighttpd -D -f /basic/web/lighttpd.conf -m /basic/web/ &

#run basicPhone
/basic/bin/basicPhone 