#!/bin/sh

# define environment variables for DUA_PARAM_xx (hex), UT_xx, UE_xx
# setUTUE.sh has been created on host by (cd tools/dua && source mkSetUTUE)
source /css/setUTUE.sh

echo " "

dua << dua_init
	set unit	{UT_WBHF,0} DUA_PARAM_UMT_EXEC_GEN UT_WBHF_MODE_SPEAKER
			$UT_WBHF,0
			$DUA_ANY
			$DUA_PARAM_UMT_EXEC_GEN
			$UT_WBHF_MODE_SPEAKER

	set unit	{UT_PCMFD,0} DUA_PARAM_UMT_EXEC_GEN UT_PCMFD_MODE_DEFAULT
			$UT_PCMFD,0
			$DUA_ANY
			$DUA_PARAM_UMT_EXEC_GEN
			$UT_PCMFD_MODE_DEFAULT


	o
	$UT_WBHF, 0
	-1

	o
	$UT_PCMFD, 0
	0

	w 1

    quit
dua_init



daif write 132 0x5DA4
daif write 106 0x1F

