#! /bin/sh

echo "run netcast"

while [ true ]
do
/app/bin/netcast
if [ -f "/tmp/kill_netcast" ]; then
	break;
fi 
sleep 1
done
