#! /bin/sh

echo "----"
export LD_LIBRARY_PATH='/app/lib:/basic/lib/'

PPPoEConfigFile=/etc/ppp/pppoe.conf
NetConfigFile=/config/Network/General/Network.conf
#LANType value
DHCP=0
PPPoE=1
StaticIP=2

Iface=eth0
echo "Iface=$Iface"

#LANType=`/app/bin/inifile_wr r $NetConfigFile "LAN" "Type" "$DHCP"`
#echo "LANType=$LANType"

if [ "$1" = "stop" ];then
	killall -9 pppoe-connect > /dev/null 2>&1    
    killall -9 pppoe > /dev/null 2>&1 
    killall -9 pppd > /dev/null 2>&1
elif [ "$1" = "start" ];then
	/sbin/ifconfig $Iface 0.0.0.1
	
	killall -9 pppoe-connect > /dev/null 2>&1    
    killall -9 pppoe > /dev/null 2>&1 
    killall -9 pppd > /dev/null 2>&1

	username=`/app/bin/inifile_wr r $NetConfigFile "PPPOE" "User" " "`
	password=`/app/bin/inifile_wr r $NetConfigFile "PPPOE" "Pwd" " "`
	password=`/app/bin/aes_dec $password`
	echo "username=$username"
	echo "password=$password"
	
	echo $username "*" $password > /etc/ppp/pap-secrets
	echo $username "*" $password > /etc/ppp/chap-secrets

	sed /USER/s/USER.*/USER=$username/ /etc/ppp/pppoe.conf > /tmp/pppoe_sh.$$ 
	
	last=`grep "USER=" $PPPoEConfigFile`
	echo "last=$last"
	
	new="USER=$username"
	echo "new=$new"
	
	sed "/USER/ c\\$new" $PPPoEConfigFile > /tmp/pppoe_sh.$$
	cp /tmp/pppoe_sh.$$ $PPPoEConfigFile
	rm /tmp/pppoe_sh.$$
	#-----------------------------------------------------------    
	/app/bin/pppoe-connect $Iface &		
else
	echo "pppoe nothing to be done!"
fi

