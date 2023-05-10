#! /bin/sh     

process="pmonitor phone sip vaMain lighttpd fcgiserver.fcgi cfgd_server netconfig autop rcpe snmpd extd netcast"
`echo 5 >/proc/misc/bklight` 
for pname in $process
do
	touch /tmp/kill_$pname
	killall $pname
done

#将进程杀一遍
for i in 1 2 3 4 5 6 7 8 9 10
do
	for pname in $process
	do
		echo "--kill $pname --"
		output=`ps | grep $pname | grep -v grep` 
		if [ -n "$output" ];then
			set -- $output  
			pid=$1
			echo "pid = $pid"
			kill -9 $pid         
		fi
	done
	
	continue_flag=0

	for pname in $process
	do
		output=`ps | grep $pname | grep -v grep` 
		if [ -n "$output" ];then
			echo "kill failed: $output"
			continue_flag=1
			break;      
		fi
	done

	if [ $continue_flag -eq 1 ];then
		sleep 1
		#close watch dog
		`echo 0x0 >/proc/misc/dog` 
		continue;
	fi

	break;
done

#close watch dog
`echo 0x0 >/proc/misc/dog` 
`echo 5 >/proc/misc/bklight` 
exit 0