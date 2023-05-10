#! /bin/sh

#run cssload.sh
/css/cssload.sh

#run tools
/app/scripts/tools.sh

#insmod drivers
/app/scripts/drivers.sh

#start lighttpd server
#/app/scripts/lighttpd.sh &

#start cfgd_server
#/app/bin/cfgd_server & 

#run netconfig
#/app/scripts/netconfig.sh &

#run telnetd
#/usr/sbin/telnetd &

#run autop
#/app/scripts/autop.sh &

#run acgVoice
#sh /app/scripts/acgVoice.sh  &

#run phone"
#sh /app/scripts/phone.sh  &

#run sip
#sh /app/scripts/sip.sh  0 &
#sh /app/scripts/sip.sh  1 &
#sh /app/scripts/sip.sh  2 &
#sh /app/scripts/sip.sh  16 &

#run pmonitor"
sh /app/scripts/pmonitor.sh  &

#run snmp
#sh /app/scripts/snmp.sh  &

#run rcpe
#sh /app/scripts/rcpe.sh  &

#run netcat
#sh /app/scripts/netcast.sh  &

/app/scripts/dhcp_setup.sh

