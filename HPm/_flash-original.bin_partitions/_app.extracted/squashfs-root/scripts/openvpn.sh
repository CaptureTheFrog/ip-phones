#***********************************************************************
# openvpn.sh
#
# Shell script to excute Lan Configurations
#
# Copyright 2012-2020 XIAMEN RINGSLINK NETWORK TECHNOLOGY CO.,LTD
#
# Revision History:
#***********************************************************************

# !/bin/bash

network_config_path=/config/Network/General/Network.conf

SECTION=" VPN ";
ENABLE_KEY="Enable";
 
vpn_enable=`cat $network_config_path | awk 'BEGIN{FS="=";OFS=":";}/\['"$SECTION"'\]/,/\[.*[^('"$SECTION"')].*\]/{gsub(/[[:blank:]]*/,"",$1);if(NF==2 && $1=="'$ENABLE_KEY'"){gsub(/^[[:blank:]]*/,"",$2);gsub(/[[:blank:]]*$/,"",$2);print $2;}}'`

echo "VPN_PARAM:vpn_enbale=["$vpn_enable"]"

if [ "$vpn_enable" -eq "1" ] 
then
echo "start vpn."
killall -9 openvpn > /dev/null 
/app/bin/openvpn --daemon --cipher DES-CBC --config /config/openvpn/vpn.conf 

#�����з���ʹ��UDPЭ���ʱ��VPN�ͻ��������˵�����ż����Ͽ���������ʾΪ��
#read UDPv4: Connection reset by peer (WSAECONNRESET) (code=10054)
#���ǰ�openvpn����Kill����������һ�ξͻָ���������û����������ԭ��
#Ŀǰ��ʱ�Ĺ�ܷ�������������������������ӣ���������ʱ������о�һ��Openvpn
#�Ŀ�Դ����������һ��
sleep 5
echo "restart vpn."
killall -9 openvpn > /dev/null 
/app/bin/openvpn --daemon --cipher DES-CBC --config /config/openvpn/vpn.conf 

else
echo "vpn is disabled."
fi