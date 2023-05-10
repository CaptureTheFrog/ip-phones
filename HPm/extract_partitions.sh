#!/bin/sh

in=$1
out=_$1_partitions
rm -r $out 2>/dev/null
mkdir $out

echo "Extracting u-boot partition..."
dd if=$in of=$out/u-boot bs=1024 count=320 skip=0 2>/dev/null
echo "Extracting u-boot-env partition..."
dd if=$in of=$out/u-boot-env bs=1024 count=64 skip=320 2>/dev/null
echo "Extracting user-env partition..."
dd if=$in of=$out/user-env bs=1024 count=320 skip=384 2>/dev/null
echo "Extracting kernel partition..."
dd if=$in of=$out/kernel bs=1024 count=2816 skip=704 2>/dev/null
echo "Extracting devtree partition..."
dd if=$in of=$out/devtree bs=1024 count=64 skip=3520 2>/dev/null
echo "Extracting rootfs partition..."
dd if=$in of=$out/rootfs bs=1024 count=4032 skip=3584 2>/dev/null
echo "Extracting config partition..."
dd if=$in of=$out/config bs=1024 count=512 skip=7616 2>/dev/null
echo "Extracting basic partition..."
dd if=$in of=$out/basic bs=1024 count=512 skip=8128 2>/dev/null
echo "Extracting app partition..."
dd if=$in of=$out/app bs=1024 count=7744 skip=8640 2>/dev/null

echo "Done"