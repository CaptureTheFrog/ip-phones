#! /bin/sh

echo "run phone"

while [ true ]
do
/app/bin/phone
if [ -f "/tmp/kill_phone" ]; then
	break;
fi 
sleep 1
done
