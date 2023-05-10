#!/bin/sh

in=$1
out=${1%/}.bin
rm $out 2>/dev/null
echo "Creating base image..."
dd if=/dev/zero of=$out bs=1M count=16 2>/dev/null

echo "Adding u-boot partition..."
dd if=$in/u-boot of=$out bs=1K count=320 seek=0 conv=notrunc 2>/dev/null
echo "Adding u-boot-env partition..."
dd if=$in/u-boot-env of=$out bs=1K count=64 seek=320 conv=notrunc 2>/dev/null
echo "Adding user-env partition..."
dd if=$in/user-env of=$out bs=1K count=320 seek=384 conv=notrunc 2>/dev/null
echo "Adding kernel partition..."
dd if=$in/kernel of=$out bs=1K count=2816 seek=704 conv=notrunc 2>/dev/null
echo "Adding devtree partition..."
dd if=$in/devtree of=$out bs=1K count=64 seek=3520 conv=notrunc 2>/dev/null

echo "Building rootfs filesystem..."
mksquashfs $in/rootfs $in/rootfs.temp -comp xz -b 128K -quiet
echo "Adding rootfs partition..."
dd if=$in/rootfs.temp of=$out bs=1K count=4032 seek=3584 conv=notrunc 2>/dev/null #&& rm $in/rootfs.temp


echo "Building config filesystem..."
mkfs.jffs2 -l -r $in/config -o $in/config.temp -s 65536 -e 4 -p524288 1>/dev/null
echo "Adding config partition..."
dd if=$in/config.temp of=$out bs=1K count=512 seek=7616 conv=notrunc 2>/dev/null #&& rm $in/config.temp

echo "Building basic filesystem..."
mksquashfs $in/basic $in/basic.temp -comp gzip -b 128K -quiet
echo "Adding basic partition..."
dd if=$in/basic.temp of=$out bs=1K count=512 seek=8128 conv=notrunc 2>/dev/null #&& rm $in/basic.temp


echo "Building app filesystem..."
mksquashfs $in/app $in/app.temp -comp gzip -b 128K -quiet
echo "Adding app partition..."
dd if=$in/app.temp of=$out bs=1K count=7744 seek=8640 conv=notrunc 2>/dev/null #&& rm $in/app.temp

echo "Done"