#! /bin/sh

echo "run wap_supplicant"
ENABLE_ETH=$1

config_path=/config/wpa
config_file=$config_path/wpa_supplicant.conf

if [ -d $config_path ];then
	echo $config_path
else
	mkdir $config_path
fi

if [ -f $config_file ];then
	echo $config_file
else
	echo "update_config=1">>$config_file
	echo "ap_scan=1">>$config_file
	echo "ctrl_interface=/var/run/wp">>$config_file
fi

var_run_path=/var/run
var_run_wpa_path=$var_run_path/wpa_supplicant

if [ -d $var_run_path ];then
	echo $var_run_path
else
	mkdir $var_run_path
fi

if [ -d $var_run_wpa_path ];then
	echo $var_run_wpa_path
else
	mkdir $var_run_wpa_path
fi
chmod -R 777 /var

#support dual network cards
echo "ENABLE_ETH=$ENABLE_ETH"
if [ $ENABLE_ETH -eq 1 ];then
	echo $ENABLE_ETH
else
busybox ifconfig eth0 down
fi

ifconfig wlan0 up
while [ true ]
do
/app/bin/wpa_supplicant -Dnl80211 -iwlan0 -c $config_file
if [ -f "/tmp/kill_wpa" ]; then
	rm -rf /var/run/wp
	break;
fi
sleep 1
done
