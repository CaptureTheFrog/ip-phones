#! /bin/sh

NetConfigFile=/config/Network/General/Network.conf

LLDPEnable=`grep "LLDPEnable" $NetConfigFile | cut -d "=" -f2`
if [ "$LLDPEnable" -eq "1" ];then
	/app/bin/lldpd
else
	rm /config/lldp_get_vlan -rf
fi
