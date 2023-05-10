#! bin/sh

echo "----"
export LD_LIBRARY_PATH='/app/lib:/basic/lib/'
NetConfigFile=/config/Network/General/Network.conf
#PCType value
Router=0
Bridge=1

#PCType=`grep PCType $NetConfigFile | cut -d= -f2`
PCType=`/app/bin/inifile_wr r /config/Network/General/Network.conf "PC" "Type" "$Bridge"`
echo "PCType=$PCType"

#default to diable ROUTER
if [ "$PCType" = "$Router" ]
then :
else
	PCType=$Bridge
fi
echo "PCType=$PCType"

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

LanPriority=`grep "LanPriority" $NetConfigFile | cut -d "=" -f2`
echo "LanPriority:$LanPriority"
if [ -z $LanPriority ];then
	LanPriority=0
fi

PcVlanEnable=`grep "PcVlanEnable" $NetConfigFile | cut -d "=" -f2`
echo "PcVlanEnable:$PcVlanEnable"
if [ -z $PcVlanEnable ];then
	PcVlanEnable=0
fi

PcVid=`grep "PcVid" $NetConfigFile | cut -d "=" -f2`
echo "PcVid:$PcVid"
if [ -z $PcVid ];then
	PcVid=1
fi

PcPriority=`grep "PcPriority" $NetConfigFile | cut -d "=" -f2`
echo "PcPriority:$PcPriority"
if [ -z $PcPriority ];then
	PcPriority=0
fi

Gtype=`cat /proc/misc/hwver | cut -d. -f8`
echo "Gtype:$Gtype"
if [ $Gtype = "1" ];then
	if [ "$PCType" = "$Bridge" ];then
		echo "Bridge mode" 		
		if [ "$LanVlanEnable" -eq "0" ] && [ "$PcVlanEnable" -eq "0" ];	then
			#Set VLAN to default value,if LVAN is disable
			echo "0 0 being set"
			echo 0x10    > /proc/rtl8367_cfg/rtl8367_port_accept_all_set
			echo 0x01    > /proc/rtl8367_cfg/rtl8367_port_accept_all_set
			echo 0x03    > /proc/rtl8367_cfg/rtl8367_port_accept_all_set
			echo 0x03	 >/proc/rtl8367_cfg/rtl8367_port_egrFilterEnable_set
			exit 0
		fi 
				
		if [ "$LanVlanEnable" -eq "1" ] && [ "$PcVlanEnable" -eq "0" ];then
			echo "1 0 being set"			
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_clr_vlan_cfg_t
			
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			
			echo 0x01 >/proc/rtl8367_cfg/rtl8367_port_untag_cfg 
			echo 0x03 >/proc/rtl8367_cfg/rtl8367_port_untag_cfg
			
			echo 1 > /proc/rtl8367_cfg/rtl8367_port_vlanid_set
			
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_clr_vlan_cfg_t
			
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			echo 0x10 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			
			echo 0x10 >/proc/rtl8367_cfg/rtl8367_port_untag_cfg
			
			echo "$LanVid" > /proc/rtl8367_cfg/rtl8367_port_vlanid_set
			
			echo 0x10 >/proc/rtl8367_cfg/rtl8367_port_set
			echo "$LanVid" >/proc/rtl8367_cfg/rtl8367_vlanid_set
			echo "$LanPriority" >/proc/rtl8367_cfg/rtl8367_pri_set
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_pvid_set
			
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_tagmode_set
			echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_accept_untagonly_set
			
			exit 0
		fi  
		
		if [ "$LanVlanEnable" -eq "0" ] && [ "$PcVlanEnable" -eq "1" ];then
			echo "0 1 being set"
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_clr_vlan_cfg_t
			echo 0x10 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_untag_cfg
			echo 0x10 > /proc/rtl8367_cfg/rtl8367_port_untag_cfg
			echo 1 > /proc/rtl8367_cfg/rtl8367_port_vlanid_set
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_clr_vlan_cfg_t
			echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			echo 0x10 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_untag_cfg
			echo "$PcVid" > /proc/rtl8367_cfg/rtl8367_port_vlanid_set
			echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_set
			echo "$PcVid" > /proc/rtl8367_cfg/rtl8367_vlanid_set
			echo "$PcPriority" > /proc/rtl8367_cfg/rtl8367_pri_set
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_pvid_set
			echo 0x10 > /proc/rtl8367_cfg/rtl8367_port_accept_untagonly_set
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_accept_all_set
			
			exit 0
		fi
	
		if [ "$LanVlanEnable" -eq "1" ] && [ "$PcVlanEnable" -eq "1" ];then
			echo "1 1 being set"
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_clr_vlan_cfg_t
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg         #Port1 Port3 is membership
			echo 0x10 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			if [ "$LanVid" -eq "$PcVid" ];then
				echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
				echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_untag_cfg
			fi
			echo 0x10 > /proc/rtl8367_cfg/rtl8367_port_untag_cfg
			echo "$LanVid" > /proc/rtl8367_cfg/rtl8367_port_vlanid_set
			
			if [ ! "$LanVid" -eq "$PcVid" ];then
				echo "!="
				echo 0x01 > /proc/rtl8367_cfg/rtl8367_clr_vlan_cfg_t
				echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg         #Port1 Port0 is membership
				echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_mbr_cfg
			
				echo 0x03 > /proc/rtl8367_cfg/rtl8367_port_untag_cfg
				echo "$PcVid" > /proc/rtl8367_cfg/rtl8367_port_vlanid_set
			fi	
			#Cfg LanVid LanPriority 
			#echo 0x01    > /proc/rtl8367_cfg/rtl8367_port_set           
			#echo "$LanVid" > /proc/rtl8367_cfg/rtl8367_vlanid_set      
			#echo "$LanPriority" > /proc/rtl8367_cfg/rtl8367_pri_set
			#echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_pvid_set
			
			#Set Port3 has Port1's VLANID and Pri
			echo 0x10    > /proc/rtl8367_cfg/rtl8367_port_set
			echo "$LanVid" > /proc/rtl8367_cfg/rtl8367_vlanid_set
			echo "$LanPriority" > /proc/rtl8367_cfg/rtl8367_pri_set
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_pvid_set
			
			#Cfg PcVid PcPriority 
			echo 0x03    > /proc/rtl8367_cfg/rtl8367_port_set
			echo "$PcVid" > /proc/rtl8367_cfg/rtl8367_vlanid_set
			echo "$PcPriority" > /proc/rtl8367_cfg/rtl8367_pri_set
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_pvid_set
			
			#Port1 tag enable
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_tagmode_set 
			echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_accept_tagonly_set
			#echo 0x01 > /proc/rtl8367_cfg/rtl8367_port_accept_all_set
			exit 0
		fi
	else
		echo 0x10    > /proc/rtl8367_cfg/rtl8367_port_accept_all_set
		echo 0x01    > /proc/rtl8367_cfg/rtl8367_port_accept_all_set
		echo 0x03    > /proc/rtl8367_cfg/rtl8367_port_accept_all_set
		echo 0x03    > /proc/rtl8367_cfg/rtl8367_port_egrFilterEnable_set

	fi
	exit 0
fi
echo "Gtype is disable"
if [ "$PCType" = "$Bridge" ];then
	if [ "$LanVlanEnable" -eq "0" ] && [ "$PcVlanEnable" -eq "0" ]
	then
		echo "exit vlan set"
		exit 0
	fi

	echo "start set bridge vlan"
	/sbin/ifconfig esw0 0.0.0.1 up
	/basic/bin/configtitanswitch port 2 PVID 1
	/basic/bin/configtitanswitch port 1 PVID 1
	/basic/bin/configtitanswitch port 3 PVID 1	
	
	if [ "$LanVlanEnable" -eq "1" ] && [ "$PcVlanEnable" -eq "1" ]
	then
		/basic/bin/configtitanswitch addvlan $PcVid memberports 3 untagports 2
		/basic/bin/configtitanswitch port 2 PVID $PcVid
		/basic/bin/configtitanswitch port 2 inprio 0 outprio $PcPriority
			
		/basic/bin/configtitanswitch addvlan $LanVid memberports 7 untagports 6
		/basic/bin/configtitanswitch port 3 PVID $LanVid
		/basic/bin/configtitanswitch port 3 inprio 0 outprio $LanPriority
		
		/basic/bin/configtitanswitch vlanfwdallconfig $PcVid fwdallmultports 3 fwdunregmultports 3
		/basic/bin/configtitanswitch vlanfwdallconfig $LanVid fwdallmultports 5 fwdunregmultports 5
	elif [ "$LanVlanEnable" -eq "1" ] && [ "$PcVlanEnable" -eq "0" ]
	then
		/basic/bin/configtitanswitch addvlan $LanVid memberports 5 untagports 4
		/basic/bin/configtitanswitch port 3 PVID $LanVid
		/basic/bin/configtitanswitch port 3 inprio 0 outprio $LanPriority
		
		/basic/bin/configtitanswitch addvlan 1 memberports 3 untagports 3
	
		/basic/bin/configtitanswitch vlanfwdallconfig 1 fwdallmultports 3 fwdunregmultports 3
		/basic/bin/configtitanswitch vlanfwdallconfig $LanVid fwdallmultports 5 fwdunregmultports 5
	elif [ "$LanVlanEnable" -eq "0" ] && [ "$PcVlanEnable" -eq "1" ]
	then
		/basic/bin/configtitanswitch addvlan $PcVid memberports 7 untagports 6
		/basic/bin/configtitanswitch port 2 PVID $PcVid
		/basic/bin/configtitanswitch port 2 inprio 0 outprio $PcPriority
		/basic/bin/configtitanswitch addvlan 1 memberports 5 untagports 5
	
		/basic/bin/configtitanswitch vlanfwdallconfig $PcVid fwdallmultports 3 fwdunregmultports 3
		/basic/bin/configtitanswitch vlanfwdallconfig 1 fwdallmultports 5 fwdunregmultports 5
	fi
	
else
	if [ "$LanVlanEnable" -eq "1" ];then
		echo "set route vlan start"
		interface="eth0"                                                                           
	    /sbin/ifconfig $interface 0.0.0.0 up                                                             
	    /sbin/vconfig add $interface $LanVid
	    /sbin/ifconfig $interface.$LanVid 0.0.0.1 up
	    /sbin/vconfig set_egress_map "$interface.$LanVid" 0 $LanPriority 
	fi
fi








