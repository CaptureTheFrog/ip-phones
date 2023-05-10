#! /bin/sh

echo "run acgVoice"

while [ true ]
do
/app/bin/vaMain
if [ -f "/tmp/kill_acgVoice" ]; then
	break;
fi 
sleep 1
done
