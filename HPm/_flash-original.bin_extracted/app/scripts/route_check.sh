#! /bin/sh

echo "----"
export LD_LIBRARY_PATH='/app/lib:/basic/lib/'
mkdir -p /var/run/

NetConfigFile=/config/Network/General/Network.conf
ResolveFile=/etc/resolv.conf
DhcpConfigFile=/etc/udhcpd.conf
NetConfigFile=/config/Network/General/Network.conf
#LANType value
DHCP=0
PPPoE=1
StaticIP=2
#PCType value
Router=0
Bridge=1
Unkown=255

#Vlan cfg read
LanVlanEnable=`grep "LanVlanEnable" $NetConfigFile | cut -d "=" -f2`
echo "LanVlanEnable:$LanVlanEnable"

#PCType=`grep PCType $NetConfigFile | cut -d= -f2`
PCType=`/app/bin/inifile_wr r /config/Network/General/Network.conf "PC" "Type" "$Bridge"`
echo "PCType=$PCType"

#LANType=`grep  LANType $NetConfigFile | cut -d= -f2`
LANType=`/app/bin/inifile_wr r /config/Network/General/Network.conf "LAN" "Type" "$DHCP"`
echo "LANType=$LANType"


LanVlanEnable=`grep "LanVlanEnable" $NetConfigFile | cut -d "=" -f2`
echo "LanVlanEnable:$LanVlanEnable"
if [ -z $LanVlanEnable ];then
	LanVlanEnable=0
fi

LanVid=`grep "LanVid" $NetConfigFile | cut -d "=" -f2`
echo "LanVid:$LanVid"
if [ -z $LanVid ];then
	LanVid=1
fi

#default to dhcp client
if [ "$LANType" = "$PPPoE" -o "$LANType" = "$StaticIP" ]
then :
else
	LANType=$DHCP
fi
echo "LANType=$LANType"

#default to diable ROUTER
if [ "$PCType" = "$Router" ]
then :
else
	PCType=$Bridge
fi

echo "PCType=$PCType"
Gtype=`cat /proc/misc/hwver | cut -d. -f8`
Gtype=0  #¨°¨°?ao¨ª¨¬?¡ã?¡À??¡ä¡Á???¨¨Y¡ê??Y?¨¨??Gtype¨¦¨¨???a0
if [ $Gtype = "1" ];then 
	if [ "$PCType" = "$Router" ];then
		echo 0x01 > /proc/misc/eeprom_wp
		echo 0x01 > /proc/ssp/iic
		echo 0x01 > /proc/misc/rtl8367_reset
		echo 0x02 > /proc/misc/eeprom_wp
	else
		echo 0x01 > /proc/misc/eeprom_wp
		if [ "$LanVlanEnable" = "1" ];then
			echo "SW Vlan enable"
			echo 0x01 > /proc/ssp/iic
			/basic/bin/configtitanswitch port 2 enable
		else
			echo 0x03 > /proc/ssp/iic
		fi
		echo 0x01 > /proc/misc/rtl8367_reset
		echo 0x02 > /proc/misc/eeprom_wp
	fi
fi

#shutdown bridge interface
/app/bin/iptables -t nat -F > /dev/null 2>&1

#check current mode
CpmacDriver=`lsmod |grep cpmac |cut -d" " -f1`
echo "CpmacDriver=$CpmacDriver"

EswtichDriver=`lsmod |grep eswitch |cut -d" " -f1`
echo "EswtichDriver=$EswtichDriver"

if [ "$CpmacDriver" = "cpmac" ];then
	CurrenNetMode=$Router
	NetIfaceName="eth0"
	WANNetIfaceName="eth1"
	if [ "$LANType" = "$PPPoE" ];then
		NetIfaceName="ppp0"
	fi
elif [ "$EswtichDriver" = "eswitch" ];then
	CurrenNetMode=$Bridge
	NetIfaceName="esw0"   
else
	CurrenNetMode=$Unkown
fi

echo "CurrenNetMode=$CurrenNetMode"
echo "NetIfaceName=$NetIfaceName"

#driver insmod failed
if [ "$CurrenNetMode" -eq "$Unkown" ];then
	exit 1
fi

#Bridge/router Mode Enable
if [ "$PCType" -eq "$Bridge" ]
then
	echo "load bridge config"
	echo 1 > /proc/net/firewall_start
else
	echo "router config"
		
	EnableDHCP=`grep "EnableDHCP" $NetConfigFile | cut -d "=" -f2`
	echo "EnableDHCP=$EnableDHCP"
	
	StartIP=`grep "StartIP" $NetConfigFile | cut -d "=" -f2`
	echo "StartIP=$StartIP"
	
	EndIP=`grep "EndIP" $NetConfigFile | cut -d "=" -f2`
	echo "EndIP=$EndIP"
	
	LanMask=`grep "LANSubnetMask" $NetConfigFile | cut -d "=" -f2`
	echo "LanMask=$LanMask"
	
	LANIP=`grep "RouterIP" $NetConfigFile | cut -d "=" -f2`
	echo "LANIP=$LANIP"
	
	Lease=`grep "DHCPLeaseTime" $NetConfigFile | cut -d "=" -f2`
	echo "Lease=$Lease"
	
	#default set
	if [ -z $EnableDHCP ];then
		EnableDHCP=1
	fi
	echo "EnableDHCP=$EnableDHCP" 
	
	if [ -z $Lease ];then
		Lease=8000
	fi
	echo "Lease=$Lease"
	
	if [ -z $StartIP -o -z $EndIP ];then
		StartIP=10.0.0.100
		EndIP=10.0.0.200
	fi
	echo "StartIP=$StartIP" 	
	echo "EndIP=$EndIP" 
	
	if [ -z $LanMask ];then
		LanMask=255.255.255.0
	fi
	echo "LanMask=$LanMask" 
	
	if [ -z $LANIP ];then
		LANIP=10.0.0.1
	fi
	echo "LANIP=$LANIP" 	

	/sbin/route del default gw $LANIP > /dev/null 2>&1
	echo "NetIfaceName=$NetIfaceName"
	echo "LANIP=$LANIP"
	echo "LanMask=$LanMask"	
	
	/sbin/ifconfig $WANNetIfaceName $LANIP netmask $LanMask >/dev/null 2>&1	
	# DELETE LAN DEFAULT ROUTE
	echo > $DhcpConfigFile
	echo "start $StartIP" >> $DhcpConfigFile
	echo "end $EndIP" >> $DhcpConfigFile
	echo "interface	eth1" >> $DhcpConfigFile
	echo "remaining	no" >> $DhcpConfigFile
	echo "auto_time	120" >> $DhcpConfigFile
	echo "lease_file /var/udhcpd.leases" >> $DhcpConfigFile
	echo "pidfile /var/run/udhcpd.pid" >> $DhcpConfigFile	
	echo "option subnet $LanMask" >> $DhcpConfigFile
	echo "option router $LANIP" >> $DhcpConfigFile
	echo "option lease $Lease " >> $DhcpConfigFile
	
	strDNS=`grep "nameserver" $ResolveFile | cut -d "r" -f3`
	echo "strDNS=$strDNS"
	
	if [ -z "$strDNS" ];then
		echo "DNS is NULL, try again"
		sleep 2
		strDNS=`grep "nameserver" $ResolveFile | cut -d "r" -f3`
	fi
	
	for i in $strDNS; do 			
	    echo "option    dns     $i" >> $DhcpConfigFile
	done     
	
	#if [ "$EnableDHCP"  -eq "1" ];then  
	#    killall -9 udhcpd 2>/dev/null  2>&1
	#    udhcpd $DhcpConfigFile >/dev/null 2>&1	
	#else     
	#    killall -9 udhcpd 2>/dev/null 2>&1
	#fi                 
	
	echo "NetIfaceName=$NetIfaceName"
	
	/app/bin/iptables -t nat -F
	if [ "$LanVlanEnable" -eq "1" ]
	then
	  /app/bin/iptables -t nat -A POSTROUTING -o "$NetIfaceName.$LanVid" -j MASQUERADE
	else
	  /app/bin/iptables -t nat -A POSTROUTING -o $NetIfaceName -j MASQUERADE
	fi
	
	RemoteSyslog=`/app/bin/inifile_wr r /config/Phone/General/Setting.conf "LOGLEVEL" "RemoteSyslog" ""`
	if [ $RemoteSyslog == 0 ]
	then
		echo 1 > /proc/net/firewall_start
	fi
	echo 1 > /proc/sys/net/ipv4/ip_forward		

fi                   



