#! /bin/sh

NetConfigFile=/config/Network/General/Network.conf

Mode=`grep "ModeOf8021X" $NetConfigFile | cut -d "=" -f2`
Id=`grep "Identity" $NetConfigFile | cut -d "=" -f2`
Pwd=`grep "PwdMd5" $NetConfigFile | cut -d "=" -f2`
if [ "$Mode" -eq "0" ];then
	echo "0==Mode"
else
	config_file=/etc/xsupplicant.conf
	rm $config_file
	echo "ModeOf8021X = "$Mode>>$config_file
	echo "Identity = "$Id>>$config_file
	echo "Password = "$Pwd>>$config_file
	echo "start 8021x client"
	/app/bin/8021x -c $config_file -d 0&
fi
