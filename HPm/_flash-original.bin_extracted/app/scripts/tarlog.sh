#! /bin/sh


log=`find /config -name log.tgz`
echo "log=$log"
if [ -n "$log" ];then
   mv $log /config/log_last.tgz
fi


while [ TRUE ]
do
  sleep 3
  tar -czf /tmp/log_x.tgz /tmp/Messages /tmp/Messages.0 /tmp/Messages.1
  mv -f /tmp/log_x.tgz /config/log.tgz
done
