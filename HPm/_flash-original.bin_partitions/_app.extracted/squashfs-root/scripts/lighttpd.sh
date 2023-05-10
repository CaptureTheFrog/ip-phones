#! /bin/sh

echo "run lighttpd"

while [ true ]
do
/app/bin/lighttpd -D -f /app/config/web/lighttpd.conf -m /app/lib/
if [ -f "/tmp/kill_lighttpd" ]; then
	break;
fi 
sleep 1
done
