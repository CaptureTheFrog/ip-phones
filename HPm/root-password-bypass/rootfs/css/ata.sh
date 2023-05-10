#!/bin/sh

killall app_dsp >& /dev/null
ln -fs /lib/firmware/css-loader-ata /lib/firmware/css-loader
/css/cssload.sh
sleep 2
callManager-ata
