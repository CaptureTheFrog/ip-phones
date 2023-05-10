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

#测试中发现使用UDP协议的时候VPN客户端与服务端的连接偶尔会断开，错误显示为：
#read UDPv4: Connection reset by peer (WSAECONNRESET) (code=10054)
#但是把openvpn进程Kill掉重新连接一次就恢复正常，还没分析出具体原因，
#目前暂时的规避方法是启动后过几秒再重新连接，待后面有时间可以研究一下Openvpn
#的开源代码具体跟踪一下
sleep 5
echo "restart vpn."
killall -9 openvpn > /dev/null 
/app/bin/openvpn --daemon --cipher DES-CBC --config /config/openvpn/vpn.conf 

else
echo "vpn is disabled."
fi