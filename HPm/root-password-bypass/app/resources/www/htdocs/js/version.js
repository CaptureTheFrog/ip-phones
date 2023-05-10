var web_version = "1.0.1.84"
var str = '<script language="javascript" src="..\/js\/common.js?ver='+web_version+'"><\/script>';
document.write(str);
str = '<link rel="stylesheet" href="../css/menu.css?ver='+web_version+'">';
document.write(str);
str = '<link rel="stylesheet" href="../css/config.css?ver='+web_version+'">';
document.write(str);
if("networkB" == ThisPage)
{var str = '<script language="javascript" src="..\/js\/networkB.js?ver='+web_version+'"><\/script>'; document.write(str);}
else if("TL" == ThisPage)
{var str = '<script language="javascript" src="..\/js\/phoneTL.js?ver='+web_version+'"><\/script>'; document.write(str);}
else if("phoneVoice" == ThisPage)
{var str = '<script language="javascript" src="..\/js\/phoneVoice.js?ver='+web_version+'"><\/script>'; document.write(str);}
else if("phoneCallFeature" == ThisPage)
{var str = '<script language="javascript" src="..\/js\/phoneCallFeature.js?ver='+web_version+'"><\/script>'; document.write(str);}
else if("accountA" == ThisPage)
{var str = '<script language="javascript" src="..\/js\/accountA.js?ver='+web_version+'"><\/script>'; document.write(str);}