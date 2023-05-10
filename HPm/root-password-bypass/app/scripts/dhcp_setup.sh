#! bin/sh
echo "------------------------DHCP Iptables setup-------------------------------------"
export LD_LIBRARY_PATH='/app/lib:/basic/lib/'
NetConfigFile=/config/Network/General/Network.conf
DhcpConfigFile=/etc/udhcpd.conf

Router=0
Bridge=1

PCType=`/app/bin/inifile_wr r /config/Network/General/Network.conf "PC" "Type" "$Bridge"`
echo "PCType=$PCType"

LanVlanEnable=`grep "LanVlanEnable" $NetConfigFile | cut -d "=" -f2`
echo "LanVlanEnable:$LanVlanEnable"
LanVid=`grep "LanVid" $NetConfigFile | cut -d "=" -f2`
echo "LanVid:$LanVid"

EnableDHCP=`grep "EnableDHCP" $NetConfigFile | cut -d "=" -f2`
echo "EnableDHCP=$EnableDHCP"
if [ -z $EnableDHCP ];then
		EnableDHCP=1
fi

#R65 not router mode here
#if [ "$PCType" -eq "$Router" ]
#then
#	echo "router setup"
#	killall -9 udhcpd 2>/dev/null  2>&1
#	udhcpd $DhcpConfigFile >/dev/null 2>&1
#fi
