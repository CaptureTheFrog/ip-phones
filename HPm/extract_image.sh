#!/bin/sh

in=$1
out=_$1_extracted
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
dd if=$in of=$out/rootfs.temp bs=1024 count=4032 skip=3584 2>/dev/null
echo "Extracting rootfs filesystem..."
unsquashfs -q -d $out/rootfs $out/rootfs.temp && rm $out/rootfs.temp
echo "Extracting config partition..."
dd if=$in of=$out/config.temp bs=1024 count=512 skip=7616 2>/dev/null
echo "Extracting config filesystem..."
jefferson -d $out/config $out/config.temp 1>/dev/null && rm $out/config.temp
echo "Extracting basic partition..."
dd if=$in of=$out/basic.temp bs=1024 count=512 skip=8128 2>/dev/null
echo "Extracting basic filesystem..."
unsquashfs -q -d $out/basic $out/basic.temp && rm $out/basic.temp
echo "Extracting app partition..."
dd if=$in of=$out/app.temp bs=1024 count=7744 skip=8640 2>/dev/null
echo "Extracting app filesystem..."
unsquashfs -q -d $out/app $out/app.temp && rm $out/app.temp

echo "Done"