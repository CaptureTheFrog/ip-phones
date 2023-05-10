#!/bin/sh
#***********************************************************************
# qos.sh
#***********************************************************************
export LD_LIBRARY_PATH=/app/lib:/basic/lib
CONFDIR=/config/Network/General
IPTABLES=/app/bin/iptables
SIPCFG=$CFGDIR/Network.cfg
NETWORKCONF=$CONFDIR/Network.conf

#get configuration from file, and delete spaces
minrtpport=`grep Min $NETWORKCONF |cut -d '=' -f2|sed 's/ //g'`
maxrtpport=`grep Max $NETWORKCONF |cut -d '=' -f2|sed 's/ //g'`

signalqosval=`grep SignalTos $NETWORKCONF |cut -d '=' -f2`
rtpqosval=`grep RtpTos $NETWORKCONF |cut -d '=' -f2`

if [ -z $signalqosval ]
then
	signalqosval="0"
fi
if [ -z $rtpqosval ]
then
	rtpqosval="0"
fi

echo "minrtpport is: " $minrtpport
echo "maxrtpport is: " $maxrtpport

echo "signalqosval is: " $signalqosval
echo "rtpqosval is: " $rtpqosval

$IPTABLES -t mangle -F
$IPTABLES -t mangle -A OUTPUT -p udp --source-port $minrtpport:$maxrtpport -j DSCP --set-dscp $rtpqosval
$IPTABLES -t mangle -A OUTPUT -p udp --destination-port 5060 -j DSCP --set-dscp $signalqosval

QosSetPort ()
{
        port=$1
        if [ "$port" -ne "5060" -a "$port" -le "65536" -a "$port" -ge "1" ]
        then
        	$IPTABLES -t mangle -L | grep "udp dpt:$port" >/dev/null
        	if [ "$?" -ne "0" ]
        	then
	       		$IPTABLES -t mangle -A OUTPUT -p udp --destination-port $port -j DSCP --set-dscp $signalqosval
        	fi
        fi 
}

SIPCONFFILES="/config/Network/Sip/SipAccount0.conf /config/Network/Sip/SipAccount1.conf /config/Network/Sip/SipAccount2.conf /config/Network/Sip/SipAccount3.conf /config/Network/Sip/SipAccount4.conf /config/Network/Sip/SipAccount5.conf"
#获取outboundport 或者 bakoutboundport
port1=5060
port2=5060
for j in $port1 $port2
do
	QosSetPort $j
done	
