#! /bin/sh

echo "run netconfig"

while [ true ]
do
/app/bin/netconfig
if [ -f "/tmp/kill_netconfig" ]; then
	break;
fi 
sleep 1
done
