#! /bin/sh

echo "run autop"

while [ true ]
do
/app/bin/autop
if [ -f "/tmp/kill_autop" ]; then
	break;
fi 
sleep 1
done
