#***********************************************************************
# DHCP.sh
#
# Shell script to excute DHCP Configurations
#
# Copyright .... TECHNOLOGY CO.,LTD
#
# Revision History:
#***********************************************************************

echo "---------------------------------------"
echo "DHCP configuration"
echo "---------------------------------------"

killall -9 udhcpc udhcpd pptpd pppoe pppd > /dev/null 2>&1


export PATH=/usr/bin:/bin:/usr/sbin:/sbin:

strResolveFile=/etc/resolv.conf

strWanIface=esw0

#*****************************************************
/sbin/iptables -t nat -F > /dev/null 2>&1
/usr/sbin/udhcpc -b -i $strWanIface -a -s /basic/scripts/default.script &

