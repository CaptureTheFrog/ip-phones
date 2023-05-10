#!/bin/sh

if [ $# -lt 2 ];
  then echo "Usage: $0 <freq> <volume (0..0x7fff, 0x4000=0dB)>"; exit 1
fi

((a=$1*16384))
((f=$a/1000))

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
	Melody		{UT_WBHF,0} UE_IPI
			$UT_WBHF,0
			$UE_IPI
	play		{UT_WBHF,0} UE_IPI
			$UT_WBHF,0
			$UE_IPI
			$f
			$2

    quit
dua_init
