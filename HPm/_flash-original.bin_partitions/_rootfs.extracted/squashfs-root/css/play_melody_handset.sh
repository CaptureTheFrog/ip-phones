#!/bin/sh

# define environment variables for DUA_PARAM_xx (hex), UT_xx, UE_xx
# setUTUE.sh has been created on host by (cd tools/dua && source mkSetUTUE)
source /css/setUTUE.sh

echo " "
echo "--------------- play a melody ---------------"

dua << dua_init
	set unit	{UT_WBHF,0} DUA_PARAM_UMT_EXEC_GEN UT_WBHF_MODE_HANDSET
			$UT_WBHF,0
			$DUA_ANY
			$DUA_PARAM_UMT_EXEC_GEN
			$UT_WBHF_MODE_HANDSET
	melody		{UT_WBHF,0} UE_IPI
			$UT_WBHF,0
			$UE_IPI

	wait 11

    quit
dua_init
