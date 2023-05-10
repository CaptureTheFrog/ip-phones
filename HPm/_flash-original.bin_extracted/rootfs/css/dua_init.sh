#!/bin/sh

# define environment variables for DUA_PARAM_xx (hex), UT_xx, UE_xx
# setUTUE.sh has been created on host by (cd tools/dua && source mkSetUTUE)

source /css/setUTUE.sh

echo " "
echo "--------------- dua_init -------"

# app_dsp started by cssreload script
# app_dsp &
# sleep 3

daif write 106 0x001F
daif write 132 0x5DA4

units="$UT_WBHF $UT_PCMHD $UT_PCMFD $UT_TRACE $UT_ATU $UT_TOGTEST"

for unit in ${units}
do
    source /css/dua_alloc.sh ${unit} 0
done

if [[ "$UT_MIDI" != "" && "$UT_WBHF_MODE_HANDSET" != "" ]]; then

    source /css/dua_alloc.sh $UT_MIDI 0
    dua << dua_init_midi
    set
        $UT_WBHF,0
        $DUA_ANY
        $DUA_PARAM_UMT_EXEC_GEN
        $UT_WBHF_MODE_HANDSET   # HANDSET = $UT_WBHF_MODE_HANDSET;  DCLASS = $UT_WBHF_MODE_D_CLASS
    set
        $UT_MIDI,0
        $DUA_ANY
        $DUA_PARAM_UMT_EXEC_GEN
        1
    set
        $UT_MIDI,0
        $UE_ACL
        904C    # DSPA_ADDR_OFFS_ACL_VOL
        2000    # +12dB

    onnect  # {UT_MIDI,0}    assume connection 0 is created
        $UT_MIDI,0
        $DUA_UNDEF
    onnect  # {UT_WBHF,0}
        $UT_WBHF,0
        0
dua_init_midi
fi
