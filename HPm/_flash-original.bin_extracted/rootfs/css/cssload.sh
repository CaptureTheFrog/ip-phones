#!/bin/sh

#Set AMPOUTSEL1 (22) register to 0x0 to avoid click/pop during css reload
amixer sset 'Output Mux1' 'MUTE' >& /dev/null
amixer sset 'Output Mux0' 'MUTE' >& /dev/null
#Set AFEAMPEN register (register 14) to 0x0 to avoid click/pop during css reload
amixer sset 'SINGIN0_EN' 'off' >& /dev/null
amixer sset 'SINGIN1_EN' 'off' >& /dev/null
amixer sset 'DIFFIN0_EN' 'off' >& /dev/null
amixer sset 'DIFFIN1_EN' 'off' >& /dev/null
amixer sset 'AMPOUT3_EN' 'off' >& /dev/null
amixer sset 'AMPOUT2_EN' 'off' >& /dev/null
amixer sset 'AMPOUT1_EN' 'off' >& /dev/null
amixer sset 'AMPOUT0_EN' 'off' >& /dev/null
amixer sset 'ULTRA_WB_EN' 'off' >& /dev/null

#Kill app_dsp if it is already running
killall app_dsp >& /dev/null
sleep 2
killall cssd >& /dev/null
sleep 2

if grep "disable_css=on" /proc/cmdline 2>&1 > /dev/null ; then
   echo "CSS is disabled in uboot,exiting... "
   exit 0
fi

echo 1 > /sys/bus/platform/devices/8000000.css/load

version=`uname -r`
case "$version" in
    *"3.4"*)

    if [ ! -e /etc/udev ] ; then
        # No udev to load firmware - do it manually
        echo 1 > /sys/class/firmware/8000000.css/loading
        cat /lib/firmware/css-loader > /sys/class/firmware/8000000.css/data
        echo 0 > /sys/class/firmware/8000000.css/loading
    fi
    ;;
esac


STATE=

while :

do
	# check if CSS loaded
	if [ -d /sys/bus/platform/devices/8000000.css ]
	then
        	STATE=`cat /sys/bus/platform/devices/8000000.css/state`
	fi

	if [ "$STATE" != "loaded" ]
	then
		#Wait for around 5ms for css to load
		usleep 5000

        	continue
	else
		#Wait for css services to start running
		usleep 400000

		#Start app_dsp in background
		app_dsp &
                cssd -m 1 &

		#Wait for app_dsp to finish. Removing this
		#usleep may result in loud pop/click during
		#cssload
		usleep 50000

		break
	fi
done


#Set AMPOUTSEL1 (22) register to 0x20
amixer sset 'Output Mux0' 'DAC0' >& /dev/null
amixer sset 'Output Mux1' 'DAC0_INV' >& /dev/null

#Set AMPOUTSEL2 (34)register to 0x31
amixer sset 'Output Mux2' 'DAC1' >& /dev/null
amixer sset 'Output Mux3' 'DAC1_INV' >& /dev/null

#Set LQSD_CFG1 register to 0xF0
amixer sset 'AFE_DITHER_ON' 'off' >& /dev/null
amixer sset 'MUTE_REQ_INT_EN' 'off' >& /dev/null
amixer sset 'MUTE_STAT_EN' 'off' >& /dev/null
amixer sset 'ADC2_EN' 'off' >& /dev/null
amixer sset 'DAC0_EN' 'on' >& /dev/null
amixer sset 'DAC1_EN' 'on' >& /dev/null
amixer sset 'ADC0_EN' 'on' >& /dev/null
amixer sset 'ADC1_EN' 'on' >& /dev/null

#Set AFECFG1 register to 0xFE
amixer sset 'MICPWR0_EN' 'on' >& /dev/null
amixer sset 'MICPWR0_CURR_LIM_EN' 'off' >& /dev/null
amixer sset 'MICPWR1_EN' 'on' >& /dev/null
amixer sset 'MICPWR1_CURR_LIM_EN' 'on' >& /dev/null
amixer sset 'VREF_EN' 'on' >& /dev/null
amixer sset 'VREF_LVL' 'VCCA/2' >& /dev/null


#Set AFEAMPEN (14) register to 0xFF
amixer sset 'DIFFIN1_EN' 'on' >& /dev/null
amixer sset 'DIFFIN0_EN' 'on' >& /dev/null
amixer sset 'SINGIN1_EN' 'on' >& /dev/null
amixer sset 'SINGIN0_EN' 'on' >& /dev/null
amixer sset 'AMPOUT3_EN' 'on' >& /dev/null
amixer sset 'AMPOUT2_EN' 'on' >& /dev/null
amixer sset 'AMPOUT1_EN' 'on' >& /dev/null
amixer sset 'AMPOUT0_EN' 'on' >& /dev/null
