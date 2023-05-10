#! /bin/sh

export LD_LIBRARY_PATH='/app/lib:/basic/lib/'

#create directory
mkdir -p /tmp/webup/
mkdir -p /tmp/download/
mkdir -p /var/ipc/
mkdir -p /var/run/
mount --bind /tmp/download/ /app/resources/www/htdocs/download/

#start syslogd server
is_valid_ip() {
	IP=$1
	ret=`echo $IP |grep "^[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}$"`
	if [ "$ret" = "$IP" ]; then
		FIELD1=$(echo $IP|cut -d. -f1)
		FIELD2=$(echo $IP|cut -d. -f2)
		FIELD3=$(echo $IP|cut -d. -f3)
		FIELD4=$(echo $IP|cut -d. -f4)
		if [ $FIELD1 -gt 0 ] && [ $FIELD1 -lt 255 ]  && [ $FIELD2 -ge 0 ] && [ $FIELD2 -lt 255 ]  && [ $FIELD3 -ge 0 ] && [ $FIELD3 -lt 255 ]  && [ $FIELD4 -gt 0 ] && [ $FIELD4 -lt 255 ]; then 
			echo "1"
		else
			echo "0"
		fi
	else
		echo "0"
	fi
}

RemoteSyslog=`/app/bin/inifile_wr r /config/Phone/General/Setting.conf "LOGLEVEL" "RemoteSyslog" ""`
RemoteServer=`/app/bin/inifile_wr r /config/Phone/General/Setting.conf "LOGLEVEL" "RemoteServer" ""`
if [ $RemoteSyslog == 1 ];then
	ip=$RemoteServer
	ret=$(is_valid_ip $ip)
	if [ $ret -eq 1 ]; then
		syslogd -R $ip -S -O /tmp/Messages -s 100 -b2 &
		OIFS=$IFS
		IFS='.'
		set $ip;
	else
		syslogd -S -O /tmp/Messages -s 100 -b2 &
	fi
else
	syslogd -S -O /tmp/Messages -s 100 -b2 &
fi

#start sync tool
#./sync  src_dir dst_dir 
/app/bin/sync /app/factory /config 

/app/bin/cfgactive

#set MAC
ifconfig eth0 down
MACADDR=`cat /tmp/env.conf |grep HWA_0 | cut -d' ' -f2`
ifconfig eth0 hw ether $MACADDR
ifconfig eth0 0.0.0.1 up

#cp web config
cp -f /app/config/web/group /etc

#custom check
/app/scripts/custom_check.sh

#8021X check
/app/scripts/8021x_check.sh



#run router function
/app/scripts/route_check.sh 

#run lldp function
/app/scripts/lldp_check.sh 
#run vlan function
/app/scripts/vlan_check.sh 

#run qos
/app/scripts/qos.sh

#run network
/app/scripts/network.sh

#run openvpn
/app/scripts/openvpn.sh 
