#! /bin/sh

#mount app partition
mount -n /dev/mtdblock8 /app -t squashfs -o ro


#mkdir
mkdir -p /tmp/var/ipc

export LD_LIBRARY_PATH=/app/lib:/basic/lib

#start network          
                           
if [ ! -f "/app/version.conf" ];then
        sh /basic/scripts/basic.sh &                       
else                                                       
        sh /app/scripts/app.sh  &   
fi 

sleep 3
