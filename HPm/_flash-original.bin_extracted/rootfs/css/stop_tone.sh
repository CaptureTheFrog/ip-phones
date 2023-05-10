#!/bin/sh

# define environment variables for DUA_PARAM_xx (hex), UT_xx, UE_xx
# setUTUE.sh has been created on host by (cd tools/dua && source mkSetUTUE)
source /css/setUTUE.sh

echo " "
echo "--------------- stop a melody ---------------"

dua << dua_init
	Melody		{UT_WBHF,0} UE_IPI
			$UT_WBHF,0
			$UE_IPI
    quit
dua_init
