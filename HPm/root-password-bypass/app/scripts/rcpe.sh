#! /bin/sh

echo "run rcpe"

while [ true ]
do
/app/bin/rcpe
if [ -f "/tmp/kill_rcpe" ]; then
	break;
fi 
sleep 1
done
