#!/bin/sh
initpwd=$(pwd)


rm -r "$initpwd/fs" 2> /dev/null
rm "$initpwd/initrd.img" 2> /dev/null
rm "$initpwd/uramdisk.img" 2> /dev/null
cp -r "$initpwd/../_nand-original.bin.extracted/_40000.jffs2.extracted" "$initpwd/fs"
mkdir "$initpwd/fs/bin"

cd ~/busybox-1.36.0
make CROSS_COMPILE=mips-linux-gnu-
cp ./busybox "$initpwd/fs/bin/busybox"
qemu-mips ./busybox --list-full | xargs -I '$' ln -s "../bin/busybox" "$initpwd/fs/$"

cd "$initpwd/fs"; find . | cpio -ov | gzip -6 > ../initrd.img
echo "Created initrd.img"

mkimage -A mips -T ramdisk -C gzip -d "$initpwd/initrd.img" "$initpwd/uramdisk.img"
echo "Created uramdisk.img"

cd "$initpwd"
