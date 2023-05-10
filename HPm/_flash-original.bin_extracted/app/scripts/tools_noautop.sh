#! /bin/sh


#start syslogd server
#syslogd -S -O /tmp/Messages -s 100 -b5 &

#start sync tool
#./sync -s src_dir -d dst_dir [-l 7]
#/app/bin/sync -s /app/factory -d /config 
#/app/bin/cfgactive

#cp web config
cp -f /app/config/web/group /etc

#start lighttpd server
/app/bin/lighttpd -D -f /app/config/web/lighttpd.conf -m /app/lib/ &

#start cfgd_server
/app/bin/cfgd_server & 

#run netconfig
/app/bin/netconfig &

#run telnetd
/usr/sbin/telnetd &

#run autop
#/app/bin/autop &