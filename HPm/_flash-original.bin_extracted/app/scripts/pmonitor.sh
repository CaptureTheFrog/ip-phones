#! /bin/sh

echo "run pmonitor"

while [ true ]
do
/app/bin/pmonitor
if [ -f "/tmp/kill_pmonitor" ]; then
	break;
fi 
sleep 1
done
