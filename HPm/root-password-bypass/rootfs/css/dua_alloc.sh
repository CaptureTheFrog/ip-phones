#!/bin/sh

# allocate unit {$1,$2} and set idle mode

dua << dua_allo_idle
    allocate    # {$1,$2}
                $1
                $2
    set
                $1,$2
                $DUA_ANY
                $DUA_PARAM_UMT_EXEC_GEN
                0
    quit
dua_allo_idle
