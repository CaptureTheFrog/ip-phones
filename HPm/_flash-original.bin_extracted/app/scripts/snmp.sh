#***********************************************************************
# snmp.sh
#
# Shell script to excute Lan Configurations
#
# Copyright 2012-2020 XIAMEN RINGSLINK NETWORK TECHNOLOGY CO.,LTD
#
# Revision History:
#***********************************************************************

# !/bin/bash

SNMPDCONF=/config/snmpd.conf
network_config_path=/config/Network/General/Network.conf

SECTION=" SNMP ";
ENABLE_KEY="Enable";
PORT_KEY="Port";
ADDRESS_KEY="TrustedAddress";
 
snmp_enable=`cat $network_config_path | awk 'BEGIN{FS="=";OFS=":";}/\['"$SECTION"'\]/,/\[.*[^('"$SECTION"')].*\]/{gsub(/[[:blank:]]*/,"",$1);if(NF==2 && $1=="'$ENABLE_KEY'"){gsub(/^[[:blank:]]*/,"",$2);gsub(/[[:blank:]]*$/,"",$2);print $2;}}'`

snmp_port=`cat $network_config_path | awk 'BEGIN{FS="=";OFS=":";}/\['"$SECTION"'\]/,/\[.*[^('"$SECTION"')].*\]/{gsub(/[[:blank:]]*/,"",$1);if(NF==2 && $1=="'$PORT_KEY'"){gsub(/^[[:blank:]]*/,"",$2);gsub(/[[:blank:]]*$/,"",$2);print $2;}}'`

trust_address=`cat $network_config_path | awk 'BEGIN{FS="=";OFS=":";}/\['"$SECTION"'\]/,/\[.*[^('"$SECTION"')].*\]/{gsub(/[[:blank:]]*/,"",$1);if(NF==2 && $1=="'$ADDRESS_KEY'"){gsub(/^[[:blank:]]*/,"",$2);gsub(/[[:blank:]]*$/,"",$2);print $2;}}'`

echo "SNMP_PARAM:snpm_enbale=["$snmp_enable"],snmp_port=["$snmp_port"], snmp_trusted_address=["$trust_address"]"

RTP_SECTION="RTPPORT";
MAX_PORT_KEY="Max";
MIN_PORT_KEY="Min";

rpt_max_port=`cat $network_config_path | awk 'BEGIN{FS="=";OFS=":";}/\['"$RTP_SECTION"'\]/,/\[.*[^('"$RTP_SECTION"')].*\]/{gsub(/[[:blank:]]*/,"",$1);if(NF==2 && $1=="'$MAX_PORT_KEY'"){gsub(/^[[:blank:]]*/,"",$2);gsub(/[[:blank:]]*$/,"",$2);print $2;}}'`
rpt_min_port=`cat $network_config_path | awk 'BEGIN{FS="=";OFS=":";}/\['"$RTP_SECTION"'\]/,/\[.*[^('"$RTP_SECTION"')].*\]/{gsub(/[[:blank:]]*/,"",$1);if(NF==2 && $1=="'$MIN_PORT_KEY'"){gsub(/^[[:blank:]]*/,"",$2);gsub(/[[:blank:]]*$/,"",$2);print $2;}}'`

echo "rpt_max_port=["$rpt_max_port"],rpt_min_port=["$rpt_min_port"]"

if [ "$snmp_enable" -eq "1" ] 
then
echo "start snmpd"
if [ "$snmp_port" -eq "0" ]
then
snmp_port=161
fi
if [ -z $trust_address ]
then
trust_address=0.0.0.0
fi

if [ $snmp_port -ge $rpt_min_port ] && [ $snmp_port -le $rpt_max_port ]
then
    echo "snmp_port is between the rpt port,exit."
    return
fi


echo "syslocation Server Room" > $SNMPDCONF
echo "syscontact Sysadmin (root@localhost)" >> $SNMPDCONF
echo "agentaddress udp:0.0.0.0:"$snmp_port >> $SNMPDCONF
echo "rwcommunity public "$trust_address >> $SNMPDCONF
killall -9 snmpd > /dev/null 
/app/bin/snmpd -c $SNMPDCONF &

else
killall -9 snmpd > /dev/null 
echo "stop snmpd"
fi