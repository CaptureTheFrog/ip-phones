#!/bin/sh
#***********************************************************************
# network.sh
#***********************************************************************

export LD_LIBRARY_PATH='/app/lib:/basic/lib/:/tmp'

Bridge=1
Router=0
IPnotExist="NO"

strConfigFile=/config/Network/General/Network.conf
PCType=`/app/bin/inifile_wr r /config/Network/General/Network.conf "PC" "Type" "$Bridge"`
RouterIP=`/app/bin/inifile_wr r /config/Network/General/Network.conf "PC" "RouterIP" "$IPnotExist"`
echo "RouterIP:$RouterIP"

flow=60
burst=20

if [ "$RouterIP" = "$IPnotExist" ];then
	exit 0
fi

if [ "$PCType" = "$Router" ];then
	`/app/bin/iptables -A FORWARD -s $RouterIP -m limit --limit $flow/s --limit-burst $burst -j ACCEPT`
	`/app/bin/iptables -A FORWARD -s $RouterIP -j DROP`
	`/app/bin/iptables -A FORWARD -d $RouterIP -m limit --limit $flow/s --limit-burst $burst -j ACCEPT`
	`/app/bin/iptables -A FORWARD -d $RouterIP -j DROP`
fi
