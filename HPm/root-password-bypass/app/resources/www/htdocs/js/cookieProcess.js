function getsec(str)
{
   //alert(str);
   var str1=str.substring(1,str.length)*1;
   var str2=str.substring(0,1);
   if (str2=="s")
   {
    return str1*1000;
   }
   else if (str2=="h")
   {
    return str1*60*60*1000;
   }
   else if (str2=="d")
   {
   	return str1*24*60*60*1000;
   }
}
	
function setCookie(cooName,cooValue,time)
{
	// 设置超时时刻为当前时间加上超时时间
	// 都是转换为标准GMT时间
  var strsec = getsec(time);
  var exp = new Date(); 
  exp.setTime(exp.getTime() + strsec*1);
  document.cookie = cooName + "="+ escape (cooValue) + ";expires=" + exp.toGMTString()+";path=/";
}

function getCookie(cooName)
{
    var arr,reg=new RegExp("(^| )"+cooName+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return (arr[2]);
    else
        return "";
}

function delCookie(cooName)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(cooName);
    if(cval!=null)
        document.cookie= cooName + "="+cval+";expires="+exp.toGMTString()+";path=/";
}