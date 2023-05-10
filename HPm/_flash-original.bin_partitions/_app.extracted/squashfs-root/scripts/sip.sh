#!/bin/sh
#run sip
while [ true ]
do
/app/bin/sip -a $1
if [ -f "/tmp/kill_sip" ]; then
	break;
fi 
sleep 1
done


