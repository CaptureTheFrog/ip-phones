#! /bin/sh

#create directory
mkdir -p /config/Custom/Pictures/
mkdir -p /config/Custom/Lang/Web/ ; mkdir -p /config/Custom/Lang/LCD/
#mount the custom png
LOGO_FILE=/config/Custom/Pictures/header.png
if [ -e $LOGO_FILE ];then
mount --bind $LOGO_FILE /app/resources/www/htdocs/Image/head.png
fi
#mount the custom web body lang
WEB_LANG=/config/Custom/Lang/Web/ClientTestLang.js
if [ -e $WEB_LANG ];then
mount --bind $WEB_LANG /app/resources/www/htdocs/lang/ENGLISH.js
fi
#mount the custom web note lang
WEB_NOTE_LANG=/config/Custom/Lang/Web/Note_ClientTestLang.js
if [ -e $WEB_NOTE_LANG ];then
mount --bind $WEB_NOTE_LANG /app/resources/www/htdocs/note/Note_ENGLISH.js
fi
#mount the custom LCD lang
LANG_LCD=/config/Custom/Lang/LCD/ClientTestLang_LCD.txt
if [ -e $LANG_LCD ];then
mount --bind $LANG_LCD /app/resources/Language/ENGLISH.txt
fi