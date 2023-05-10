var str = '<script language="javascript" src="..\/js\/cookieProcess.js?ver='+web_version+'"><\/script>'+'<script language="javascript" src="..\/css\/description.js?ver='+web_version+'"><\/script>';
document.write(str);

var MenuLinkNum = 50;
var UserNameExistTime = "s360000";
// 300 seconds
var ClientSessionIdExistTime = "s360000";
var VersionTest = "1.220.0.103";
var timeGap4Refresh = 0;
var MathRandNum4Ref = 100;
var ThisPage = "";
var SubmitBtn=[""];
var NotGetResponse = 0;
var NotGetResponseNum = 0;
var PageMaxIDLimit=80;
var SplitSymbol = "&";
var SubsExpireMin=120;
var PortRangeMin=1024;
var PortRangeMax=65535;
var UpgradeDisableLeftFlag = 0;

function LongCheckStatus(desDivName)
{
	if(1 == NotGetResponse)
	{
		{StatusCheck(desDivName);
		 NotGetResponseNum = 0;
		 NotGetResponse = 0;
		}
	}
	else
	{
		NotGetResponseNum++;
		if(NotGetResponseNum >= 3)
		{
		 NotGetResponse = 1;
		}
	}
}

function ResetNotGetResponse()
{
	clearInterval(interObj[1]);
	interObj[1] = setInterval("LongCheckStatus('divUpgradeStatus')", 4000);
	NotGetResponse = 0;
	NotGetResponseNum = 0;
}

function getOs()
{ 
    var OsObject = ""; 
    if(navigator.userAgent.indexOf("MSIE")>0) { 
         return "MSIE";
    }
    if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ 
         return "Firefox"; 
    } 
    if(isSafari=navigator.userAgent.indexOf("Safari")>0) { 
         return "Safari"; 
    }  
    if(isCamino=navigator.userAgent.indexOf("Camino")>0){ 
         return "Camino"; 
    } 
    if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){ 
         return "Gecko"; 
    }
   return "MSIE";
}

function ConfirmF5Jump()
{
	return true;
}

function GetRandNum()
{
	return Math.ceil(Math.random()*100000000+10);
}

function ClickLogOut()
{
	setCookie("LogOutCookieFlag", "1", "s20");
	Relocate("/fcgi/do?id=1");
	return false;
}

var check=function(e, destURL){
   e = e||window.event;
   //alert(e.which||e.keyCode);
   if((e.which||e.keyCode)==116){
    if(e.preventDefault){
    	if(!ConfirmF5Jump())
    	{
    	e.preventDefault();}
    }
    else{
    	if(!ConfirmF5Jump())
    	{event.keyCode = 0;
    	e.returnValue=false;}
		}
   }
}

function checkFileInputSts(tmpInputID, tmpCancelKeyID)
{
	if("" == document.getElementById(tmpInputID).value)
		return false;
	else return true;
}
function checkFileInputCancelSts(tmpInputID, tmpCancelKeyID)
{
	var activeFlag = checkFileInputSts(tmpInputID, tmpCancelKeyID);
	if(true == activeFlag) document.getElementById(tmpCancelKeyID).disabled = false;
	else if(false == activeFlag) document.getElementById(tmpCancelKeyID).disabled = true;		
}

PwdKeyFirst = [true, true, true, true, true, true];
function KeyFirstDelete(desID, fID)
{
	if(document.getElementById(desID) && PwdKeyFirst[fID])
	{
		document.getElementById(desID).value = "";
		PwdKeyFirst[fID] = false;
	}
}

var UserNameChangeFlag =false;
function UserNameChange()
{
	UserNameChangeFlag =true;
}

function SetInputFocusFunc()
{
	for(var i =0; i < PageMaxIDLimit; i++)
	{
		if(document.getElementById(i))
		{
			document.getElementById(i).onfocus = function(){return onInputEdit(this.id);};
		}
	}
}

function SetPageCookie()
{
	if(!document.getElementById("hcSessionIdNow"))
	{
		return;
	}
	var sessionId = document.getElementById("hcSessionIdNow").value;
	if("" != sessionId)
	{
		setCookie("SessionId", sessionId, ClientSessionIdExistTime);
		document.getElementById("hcSessionIdNow").value = "";
	}
}

// 与调整页面显示有关的函数
function DelayShow()
{
	if(document.getElementById("mid_cont1"))
	{document.getElementById("mid_cont1").style.display = "None";}
	if(document.getElementById("mid_cont2"))
	{document.getElementById("mid_cont2").style.display = "";}
	if(document.getElementById("tPageLogOut"))
	{document.getElementById('tPageLogOut').style.display = "";}
	AutoHeightOfBody();
}

function AutoHeightOfBody()
{
	// chrome
	var l1=21, l2=29;
	var l3=28;
	//return;
	if("MSIE" == getOs())
	{
		l1 = 23;
		l2=27;
	}
	else if("Firefox" == getOs())
	{
		l1 = 20;
		l2=30;		
	}
	var minMidHeight = 500;
	var flagHeightToo = 0;
	if(document.getElementById("midWhole") && Number(document.getElementById("midWhole").scrollHeight > minMidHeight))
	{
		flagHeightToo = 1;
		minMidHeight = Number(document.getElementById("midWhole").scrollHeight)+65;
	}
	
	if(document.getElementById("leftMenu") && document.getElementById("midWhole"))
	{document.getElementById("leftMenu").style.height=(minMidHeight+l1)+"px";
	 }
	if(document.getElementById("rightMir") && document.getElementById("midWhole"))
	{document.getElementById("rightMir").style.height=(minMidHeight+l1)+"px";
	 }
	if(document.getElementById("rightHelpCont") && document.getElementById("midWhole"))
	{document.getElementById("rightHelpCont").style.height=(minMidHeight-l2)+"px";
	}

	if(flagHeightToo)
	{
		if(document.getElementById("mid_cont1")){document.getElementById("mid_cont1").style.height = document.getElementById("mid_cont2").style.height = (minMidHeight-l3)+"px"}
		if(document.getElementById("midWhole")){document.getElementById("midWhole").style.height = (minMidHeight)+"px"}
	}
}

var alertColor = "pink";
function onInputEdit(thisID)
{
	if(document.getElementById(thisID))
	{
		document.getElementById(thisID).style.backgroundColor = "";
		return;
	}
	
	if(document.getElementsByName(thisID))
	{
		var tmpArr = document.getElementsByName(thisID);
		tmpArr[0].style.backgroundColor = "";
		return;
	}
}

function SetPageMenuAction(aMenu1, thisPageAID)
{
  var menu_ul = $('.menu > li > ul'),
         menu_a  = $('.menu > li > a');
  
  menu_ul.hide();
  SetAOfThisPageFocus(aMenu1, thisPageAID);

  menu_a.click(function(e) {
		if (UpgradeDisableLeftFlag) 
		{
			menu_ul.hide();
			return false;
		}
		
		e.preventDefault();
		if(!$(this).hasClass('active')) {
			menu_a.removeClass('active');
			menu_ul.filter(':visible').slideUp('normal');
			$(this).addClass('active').next().stop(true,true).slideDown('normal');
		} else {
			$(this).removeClass('active');
			$(this).next().stop(true,true).slideUp('normal');
		}
	});
}

function SetAOfThisPageFocus(aMenu1, thisPageAID)
{
	var menu_ul_Js = $('.menu > li > ul'),
		  menu_a_Js  = $('.menu > li > a');
	menu_a_Js.removeClass('active');
	menu_ul_Js.filter(':visible').slideUp('normal');
	// 这里展开的时间设为10ms为了兼容IE6
	var tmpTime = 0;
	var tmpMenuDelayT = 0;
	if("MSIE" == getOs())
	{if("6.0" == $.browser.version || "8.0" == $.browser.version)
	{
		tmpTime = 1;
	}
	if("6.0" == $.browser.version){ tmpMenuDelayT = 200;}
	}//200ms
	{$(aMenu1).addClass('active').next().stop(true, true).slideDown(tmpTime);}
	if(document.getElementById(thisPageAID))
	{document.getElementById(thisPageAID).style.fontWeight = "bold";
	document.getElementById(thisPageAID).style.color = ThisSelectedPageColorOfA;}
	if(document.getElementById("PageUL"))
	{sleep(tmpMenuDelayT); document.getElementById("PageUL").style.display = "";}
	
}

function SetInputBGColor(thisID)
{
	if(document.getElementById(thisID))
	{
		document.getElementById(thisID).style.backgroundColor = alertColor;
		document.getElementById("WarningDiv").style.display = "";
		document.getElementById("WarningDiv").innerHTML = PleaseCheckSubmitData;
		return;
	}
	if(document.getElementsByName(thisID))
	{
		var tmpArr = document.getElementsByName(thisID);
		tmpArr[0].style.backgroundColor = alertColor;
		document.getElementById("WarningDiv").style.display = "";
		document.getElementById("WarningDiv").innerHTML = PleaseCheckSubmitData;
		return;
	}
}
 
function setDisabled(DOMObj, f)
{
	DOMObj.disabled = f;
	DOMObj.style.backgroundColor = f ? "#EDEDED" : "#FFFFFF";
}
function SetAllLiElementDisabled(flag)
{
	UpgradeDisableLeftFlag = flag;
	if(true == flag) {}
	else flag = false;

}
function HideAllLiElement(flag)
{
	if(true == flag) {}
	else flag = false;
	
	var li_list = document.getElementsByTagName("li");
	for(var i = 0; i < document.getElementsByTagName("li").length; i ++)
	{
		var tmpStr = "";
		for(var j = 0; j <= 7; j ++)
		{
			tmpStr = "link" + j;
			if(tmpStr == li_list[i].id) break;
		}
		if(tmpStr == li_list[i].id) continue;
		if(li_list[i]) li_list[i].style.display = flag ? "none" : "";
	}		
}
function ResetAllInputColor()
{
	var f1 = document.forms["body_form"];
	for(var i = 0; i < f1.length; i ++)
	{
		if("text" == f1.elements[i].type || "password" == f1.elements[i].type )
		{
			f1.elements[i].style.backgroundColor = "";
			f1.elements[i].onclick = function () { return onInputEdit(this.id); };	
			f1.elements[i].onfocus = function () { return onInputEdit(this.id); };	
		}	
		document.getElementById("WarningDiv").innerHTML = "";
	}
}

function ResetAllInputColorById(MaxID)
{
	var i = 1;
	for(; i <= MaxID; i++)
	{
		onInputEdit(i);
	}
	document.getElementById("WarningDiv").innerHTML = "";
}

function SegToLineOfStr(destStr, destLen, lineLen)
{
	var lineGap = "<br>";
	var strDest=String(destStr);
	var strRet=String();
	var strLine=String();
	if(lineLen > destLen)
	{
		return destStr;
	}
	if(strDest.length <= destLen)
	{
		return destStr;
	}
	
	while(strDest.length > 0)
	{
		if(strDest.length > lineLen)
		{
			strLine = strDest.substr(0, lineLen);
			strDest = strDest.substr(lineLen, strDest.length-lineLen);
		}
		else{strLine = strDest;
			strDest = "";}
		strRet += strLine;
		strRet += lineGap;
	}
	return strRet;
}

function AbbreviationStr(destStr, destLen)
{
	var strDest=String(destStr);
	var strRet=String();
	if(strDest.length <= destLen)
	{
		return destStr;
	}
	var i=0;
	var j=0;
	for(;j<destLen-2;){
		var wchr=strDest.charCodeAt(j);
		strRet += String.fromCharCode(wchr);
		if(strDest.charCodeAt(i) < 0x080)
		{
			i += 1;
　　}
　	else if(strDest.charCodeAt(i) < 0x0800)
		{
　　	i += 2;
　　}
		else
		{
			i += 3;
		}
		j++;	
	}
	
	strRet += ".";
	strRet += ".";
	return strRet;
}

function UnicodeToUTF8(strInUni){
	if(null==strInUni)
	return null;
	var strUni=String(strInUni);
	var strUTF8=String();
	for(var i=0;i<strUni.length;i++){
		var wchr=strUni.charCodeAt(i);
		if(wchr<0x80){
			strUTF8+=strUni.charAt(i);
			}else if(wchr<0x800){
				var chr1=wchr&0xff;
				var chr2=(wchr>>8)&0xff;
				strUTF8+=String.fromCharCode(0xC0|(chr2<<2)|((chr1>>6)&0x3));
				strUTF8+=String.fromCharCode(0x80|(chr1&0x3F));
			}
			else{var chr1=wchr&0xff;
				var chr2=(wchr>>8)&0xff;
				strUTF8+=String.fromCharCode(0xE0|(chr2>>4));
				strUTF8+=String.fromCharCode(0x80|((chr2<<2)&0x3C)|((chr1>>6)&0x3));
				strUTF8+=String.fromCharCode(0x80|(chr1&0x3F));
				}
	}
	return strUTF8;
}

var dotNumArr = [0, 0];
var dotTxtArr = ["", ""];
var timeCntArr =[0, 0];
// 升级/18000秒timeout
var total = 800;
var interObj = new Array();

function ResetDivInnerHTML(divName)
{
	if(document.getElementById(divName))
		document.getElementById(divName).innerHTML = "";
}

function SetInputLengthLimit()
{
	var i=0;
	var inputList=document.getElementsByTagName("input");
 	for(var i=0;i<inputList.length && inputList[i];i++)
 	{
 		if("text"==inputList[i].type)  
    {
    	inputList[i].maxLength=63;
    }
 	}
}
function LoadCompLabel()
{
	if(document.getElementById("tCompanyLabel") && ("undefined" != typeof(CompanyDesc)))
	{
		if("" != CompanyDesc)
		{
			document.getElementById("tCompanyLabel").style.display = "";
			document.getElementById("tCompanyLabel").innerHTML = CompanyDesc;
		}
	}	
}
function InitGlobalVars()
{
	if("undefined" != typeof(OEMID) && "136" == OEMID)
	{SubsExpireMin = 60}
}
function LoadCommonResources(innerTitle)
{
	InitGlobalVars()
	//document.title=TitleDesc;
	LoadCompLabel();
	if(document.getElementById("leftMenu")){
	document.getElementById("tMenu10").innerHTML = Status;
	document.getElementById("tMenu11").innerHTML = Basic;
	document.getElementById("tMenu20").innerHTML = Account;
	document.getElementById("tMenu21").innerHTML = Basic;
	document.getElementById("tMenu22").innerHTML = Advance;
	document.getElementById("tMenu30").innerHTML = Network;
	document.getElementById("tMenu31").innerHTML = Basic;
	document.getElementById("tMenu32").innerHTML = Advance;
	document.getElementById("tMenu40").innerHTML = Phone;
	document.getElementById("tMenu41").innerHTML = TimeAndLang;
	document.getElementById("tMenu42").innerHTML = CallFeature;
	document.getElementById("tMenu43").innerHTML = Voice;
	document.getElementById("tMenu441").innerHTML = KeyAndDisplay;
	document.getElementById("tMenu59").innerHTML = ExtKey;
	document.getElementById("tMenu442").innerHTML = ("undefined" != typeof(DSSKey))?DSSKey:"DSS Key";
	document.getElementById("tMenu45").innerHTML = RingTones;
	document.getElementById("tMenu46").innerHTML = Tones;
	document.getElementById("tMenu47").innerHTML = DialPlan;
	document.getElementById("tMenu48").innerHTML = SMS;
	document.getElementById("tMenu410").innerHTML = ActionURL;
	document.getElementById("tMenu49").innerHTML = Preference;
	document.getElementById("tMenu412").innerHTML = Multicast;
	document.getElementById("tMenu50").innerHTML = PhoneBook;
	document.getElementById("tMenu51").innerHTML = AddressBook;
	document.getElementById("tMenu52").innerHTML = CallLog;
	document.getElementById("tMenu54").innerHTML = RemoteBook;
	document.getElementById("tMenu55").innerHTML = "LDAP";
	document.getElementById("tMenu56").innerHTML = Broadsoft;
	document.getElementById("tMenu60").innerHTML = Upgrade;
	document.getElementById("tMenu61").innerHTML = Basic;
	document.getElementById("tMenu62").innerHTML = Advance;
	document.getElementById("tMenu70").innerHTML = Security;
	document.getElementById("tMenu71").innerHTML = Basic;
	document.getElementById("tMenu72").innerHTML = Advance;}

	document.getElementById("tInnerTitle").innerHTML = innerTitle;
	document.getElementById("tInnerTitle").style.fontWeight = 'bold';
	
	document.getElementById("tHelp").innerHTML = Help;
	if(document.getElementById("pageDescriptionTop"))
	{
		document.getElementById("pageDescriptionTop").innerHTML = PageDescription1;
	}
	if(document.getElementById("warningDescription"))
	{
		document.getElementById("warningDescription").innerHTML = WarningDescription;
	}
	if(document.getElementById("fieldDescriptionTop"))
		document.getElementById("fieldDescriptionTop").innerHTML = FieldDescription;
	if(document.getElementById("tSubmitShortcut"))
	{
		document.getElementById("tSubmitShortcut").innerHTML = ShortcutSubmit;
		if(document.getElementById("fPageSubmit")){document.getElementById("fPageSubmit").value = SubmitLabel;}
		if(document.getElementById("fPageCancel")){document.getElementById("fPageCancel").value = CancelLabel;}		
	}
	var tmpObj = document.getElementById("tfieldNote")
	if(tmpObj){tmpObj.innerHTML=NoteLabel};
	var tmpObj = document.getElementById("fieldNote");
	if(tmpObj){
		var tmpCont="";
		for(var i=0; i<NoteContent.length;i++)
		{tmpCont+=(NoteContent[i]+"<br>");}
		tmpObj.innerHTML=tmpCont;
	};
	
	if(document.getElementById("tPageLogOut"))
	{
		document.getElementById("tPageLogOut").innerHTML = LogOut;
	}
	if(document.getElementById("submit_form"))
	{
		if(document.getElementById("PageSubmit")){document.getElementById("PageSubmit").value = SubmitLabel;}
		if(document.getElementById("PageCancel")){document.getElementById("PageCancel").value = CancelLabel;}		
	}
	SetPageCookie();
	AttachKeyEvent();
	if("Firefox" == getOs())
	{
		timeGap4Refresh = 50;
	}
	else if("MSIE" == getOs())
	{
		if(($.browser.version == "6.0"))
		{
			timeGap4Refresh = 50;}
	}
	else
	{
		timeGap4Refresh = 50;
	}
	document.getElementById("midWhole").onmousemove = MouseMove;
	SetInputFocusFunc();
	SetInputLengthLimit();
	AuthorityDifShow();
}

function DoForm3SubmitPageChange(fEle)
{
	MathRandNum4Ref = GetRandNum();
	fEle.submit();
	setTimeout("RefreshRelocate()", timeGap4Refresh);
}

function DoForm3SubmitNoRef(fEle)
{
	MathRandNum4Ref = GetRandNum();
	fEle.action = PageRefDesURL+"&RefRand="+MathRandNum4Ref;
	if(document.getElementById("PageSubmit"))
	{document.getElementById("PageSubmit").disabled = true;}
	if(document.getElementById("fPageSubmit"))
	{document.getElementById("fPageSubmit").disabled = true;}	
	for(var i=0; i < SubmitBtn.length; i++)
	{
		if(document.getElementById(SubmitBtn[i])){
	document.getElementById(SubmitBtn[i]).disabled = true;}
	}
	fEle.submit();
}

function AttachKeyEvent()
{
	if(document.addEventListener){
   document.addEventListener("keydown",check,false);
	}
	else{
   document.attachEvent("onkeydown",check);
  }	
}

var DataCheckResult = "DataCheck=Err";
function OnSubmit(bFlag)
{
	var f3 = document.forms["submit_form"];
	var strSubmData = CheckCommitData();
	if(DataCheckResult == strSubmData)
	{
		return;
	}
	strSubmData = "begin&Operation=Submit" + strSubmData + "&SubmitData=end";
	f3.SubmitData.value = strSubmData;
	DoForm3Submit(f3, bFlag);
}

function SetConfigVal(cArrays1)
{	
	for(var i=0; i < cArrays1.length/2; i++)
	{
		if(document.getElementById(cArrays1[2*i+1]))
		{
			if(document.getElementById(cArrays1[2*i])){document.getElementById(cArrays1[2*i]).value = ShowDecode(document.getElementById(cArrays1[2*i+1]).value)}
			else if(document.getElementsByName(cArrays1[2*i])[0]){document.getElementsByName(cArrays1[2*i])[0].value = ShowDecode(document.getElementById(cArrays1[2*i+1]).value)}
		}
	}
}

function DoForm3Submit(fEle, bFlag)
{
	DoForm3SubmitNoRef(fEle);
	// 不会马上发GET请求去清掉浏览器的POST状态
	bFlag = false;
	if(bFlag == false)
	{
	}else{setTimeout("RefreshRelocate()", timeGap4Refresh);}	
}

function RefreshRelocate()
{
	//return;	
	var SameReqURL = PageRefDesURL+"&RefRand="+MathRandNum4Ref;
	window.location = SameReqURL;
}

function Relocate(destURL, destRandNum)
{
	var tmpRand = destRandNum;
	if(undefined == tmpRand)
	{
		tmpRand = GetRandNum();
	}
	window.location = destURL+"&RefRand="+tmpRand;
}

function CheckDataChangedMulti(destURL)
{
	if(1 == UpgradeDisableLeftFlag)
	{
		return false;
	}
	var f1 = document.forms["body_form"];
	var f3 = document.forms["submit_form"];
	var strSubmData = CheckCommitData();
	var strAccountData = "&cCurAccount=";
	if(document.getElementById("hcCurAccount"))
	{
		strAccountData += f1.cCurAccount.value;
	}
	else
	{
		strAccountData += "-1";
	}
	if("" == strSubmData || (strAccountData+"&cAccountActive=1&ForceTo=1") == strSubmData
	|| strAccountData == strSubmData)
	{
		Relocate(destURL);
		return false;
	}
	if(!confirm(SavePageConfirm))
	{
		//alert(PleaseSubmitManually);
		return false;
	}
	else
	{
		Relocate(destURL);
		return false;
	}
}
// sleep函数
function sleep(numberMillis) {var now = new Date();var exitTime = now.getTime() + numberMillis;while (true) {now = new Date();if (now.getTime() > exitTime)return;}}

function CheckDataChanged(destURL)
{
	return CheckDataChangedMulti(destURL);
}
// 将字符串转化成为数字
// Number(value)

function TransEmptyStrTo0(str)
{
	return TransEmptyStrTo(str, "0");
}

function TransEmptyStrTo(str, destV)
{
	if(str == "")
	{
		return destV;
	}
	else
	{
		return str;
		}
}

function Trans0ToEmptyStr(str)
{
	return TransToEmptyStr(str, "0");
}

function TransToEmptyStr(str, destV)
{
	if(str == destV)
	{
		return "";
	}
	else
	{
		return str;
	}	
}

function CheckFakeDiff(postData1, postData2)
{
	if("0" == postData1 && "" == postData2)
	{
		return true;
	}
	return false;
}

function CheckLength(destStr, destLen)
{	
　var byteLen=0;
	var len=destStr.length;
　if(null != destStr)
	{
　　for(var i=0; i<len; i++)
		{
　　　if(destStr.charCodeAt(i) < 0x080){
　　　	byteLen += 1;
　　	}
　		else if(destStr.charCodeAt(i) < 0x0800)
			{
　　		byteLen += 2;
　　	}
			else
			{
				byteLen += 3;
			}
		}
		return byteLen;
	}
　else{
　　return 0;
　}	
		
}

function DoCallFailedAction()
{
	return;
}
function WebMakeCall(desNumber, desContName, desLineID, byAccountName)
{
	var lineTag = "lineID";
	if(true == byAccountName)
	{
		lineTag = "line";
	}
	request="do?action=MakeCall&number="+desNumber+"&name="+desContName+"&"+lineTag+"="+desLineID;
	$.ajax({  
		url: request,  
		cache: false,
		success: function(html){
			$(divWebCallRes).append(html);
			var f2 = document.forms["hiddenValForm_Div"];
			if(document.getElementById("hcSingleResult"))
			{
				if("-1" == document.getElementById("hcSingleResult").value)
				{
					DoCallFailedAction();
					alert(CallFailedWarn);
				}
				else if("1" == document.getElementById("hcSingleResult").value)
				{
					alert(PhoneTalkingWarning);
				}
				else
				{
					alert(SendSuccess);
				}
			}
			ResetDivInnerHTML("divWebCallRes");
		}
	});	
}

function WebCallEnd()
{
	request="do?action=CallEnd";
	$.ajax({  
		url: request,  
		cache: false,
		success: function(html){
			$(divWebCallRes).append(html);
			var f2 = document.forms["hiddenValForm_Div"];
			if(document.getElementById("hcSingleResult"))
			{
				if("-1" == document.getElementById("hcSingleResult").value)
				{
					DoCallFailedAction();
					alert(CallFailedWarn);
				}
				else
				{
					alert(SendSuccess);
				}
			}
			ResetDivInnerHTML("divWebCallRes");			
		}
	});	
}

function CheckDivStatus(divName, request)
{
	var DivName = "#" + divName;
	//alert(request);
	//alert(DivName);
	$.ajax({  
		url: request,  
		cache: false,
		success: function(html){
			$(DivName).append(html);
			var f1 = document.forms["body_form"];
			var f2 = document.forms["hiddenValForm_Div"];
		
			// 	LINE_STATE_UNKNOW = -1,
			//	LINE_STATE_DISABLE = 0,
			//	LINE_STATE_REGISTERING,
			//	LINE_STATE_REGISTERED,
			//	LINE_STATE_REGISTER_FAIL,
			//  for line status
			//alert(f2.hcStatus_Div.value);
			//var tmp = ;
			if(document.getElementById('hcStatus_Div'))
			{
				//alert("have");
				//alert(document.getElementById('hcStatus_Div').value);
				OnStatusAction(f2.hcStatus_Div.value);
			}
			else
			{
				//alert("not have");
				OnStatusAction("Undefined");
			}		
			ResetDivInnerHTML(divName);
		}
	});
}
// load的方式不能强制刷新div，若浏览器有缓存的话
//	$(DivName).load(request,function(){
//		var f1 = document.forms["body_form"];
//		var f2 = document.forms["hiddenValForm_Div"];
//		
//		// 	LINE_STATE_UNKNOW = -1,
//		//	LINE_STATE_DISABLE = 0,
//		//	LINE_STATE_REGISTERING,
//		//	LINE_STATE_REGISTERED,
//		//	LINE_STATE_REGISTER_FAIL,
//		//  for line status
//		//alert(f2.hcStatus_Div.value);
//		//var tmp = ;
//		if(document.getElementById('hcStatus_Div'))
//		{
//			OnStatusAction(f2.hcStatus_Div.value);
//		}
//		else
//		{
//			OnStatusAction("Undefined");
//		}
//		
//		ResetDivInnerHTML(divName);
//
//	});


//调试所用，用于打印一个对象
function writeObj(obj){
	var description = "";
	for(var i in obj){
		var property=obj[i];
		description+=i+" = "+property+"\n";
	}
	alert(description); 
}


function GetDivContent(divName, request, hcDivVar)
{
	var DivName = "#" + divName;
	//alert(request);
	//alert(DivName);
	$.ajax({
		url: request,  
		cache: false,
		success: function(html){
			$(DivName).append(html);
			var f1 = document.forms["body_form"];
			var f2 = document.forms["hiddenValForm_Div"];
		
			if(document.getElementById(hcDivVar))
			{
				OnFindDivVarAction(hcDivVar, document.getElementById(hcDivVar).value);
			} //服务器不运行情况to do
			else
			{
				OnFindDivVarAction(hcDivVar, "");
			}
			ResetDivInnerHTML(divName);
		}
	});
}

function GetPhoneUse4Export()
{
	if(document.getElementById("hcPhoneUse_Div"))
	{
		if("true" == document.getElementById("hcPhoneUse_Div").value)
		{alert(PhoneIsBusyWarning);return true;}		
	} //服务器不运行情况to do
	return false;
}

function OnRebootCom(desURL)
{
	var destURL;
	var failedForce = false;
	if('do?id=9&id=1&Operation=ForceReboot' == desURL)
	{
		destURL = desURL;
		failedForce = true;
	}
	else
	{
		destURL = 'do?id=6&id=1&Operation=GetDivContent&DivName=divReboot';
	}
	$.ajax({
		url: destURL,
		cache: false,
		success: function(html){
			// 重启的函数复用，若不是强制重启，需要先判断话机状态，若状态为通话中
			// 则append获取状态，并提示，若强制重启，不需要判断
			if(false == failedForce)
			{$("#divRebootStatus").append(html);
			if(GetPhoneUse4Export())
			{
				DoRebootConflict();
				return;
			}}
			ResetDivInnerHTML("divRebootStatus");
			ReStartCheckReboot();
			interObj[1] = setInterval("LongCheckStatus('divRebootStatus')", 4000);
			DoRebootNotConflict();
		},
		error: function(html)
		{
			if(false == failedForce)
			{$("#divRebootStatus").append(html);
			if(GetPhoneUse4Export())
			{
				DoRebootConflict();
				return;
			}}
			ResetDivInnerHTML("divRebootStatus");
			ReStartCheckReboot();
			interObj[1] = setInterval("LongCheckStatus('divRebootStatus')", 4000);
			DoRebootNotConflict();
		}
	});

	return;
}
//用同一套编解码方式
function PostEncodeIncTimeSplit(postStr)
{	
	postStr = postStr.replace(new RegExp(/(`)/g),'`A');
	postStr = postStr.replace(new RegExp(/(&)/g),'`B');
	postStr = postStr.replace(new RegExp(/(=)/g),'`C');
	postStr = postStr.replace(new RegExp(/( )/g),'`D');
	postStr = postStr.replace(new RegExp(/(\r\n)/g),'`E');
	postStr = postStr.replace(new RegExp(/(\')/g),'`F');
	postStr = postStr.replace(new RegExp(/(%)/g),'`G');
	postStr = postStr.replace(new RegExp(/(\/)/g),'`H');
	postStr = postStr.replace(new RegExp(/(\$)/g),'`I');
	postStr = postStr.replace(new RegExp(/(#)/g),'`J');
	postStr = postStr.replace(new RegExp(/(\+)/g),'`K');
	
	return postStr;
}

function PostEncode(postStr)
{	
	return PostEncodeIncTimeSplit(postStr)
}

function ShowDecode(postStr)
{
	return ShowDecodeIncTimeSplit(postStr)
}

function ShowDecodeIncTimeSplit(postStr)
{
	postStr = postStr.replace(new RegExp(/(`A)/g),'`');
	postStr = postStr.replace(new RegExp(/(`B)/g),'&');
	postStr = postStr.replace(new RegExp(/(`C)/g),'=');
	postStr = postStr.replace(new RegExp(/(`D)/g),' ');
	postStr = postStr.replace(new RegExp(/(`E)/g),'\r\n');
	postStr = postStr.replace(new RegExp(/(`F)/g),'\'');
	postStr = postStr.replace(new RegExp(/(`G)/g),'%');
	postStr = postStr.replace(new RegExp(/(`H)/g),'/');
	postStr = postStr.replace(new RegExp(/(`I)/g),'$');
	postStr = postStr.replace(new RegExp(/(`J)/g),'#');
	postStr = postStr.replace(new RegExp(/(`K)/g),'+');
	
	return postStr;
}

function ReplaceSpaceWithPlus(str)
{
	str = str.replace(new RegExp(/( )/g), '+');
	return str;
}

function CheckServerSetup()
{
	$.ajax({
	url: '/fcgi/do?id=6&id=1&Operation=GetDivContent&DivName=divRebootStatus',
	cache: false,
	success: function(html){
		//alert(html);
		$("#divForceReboot").append(html);
		if(document.getElementById("hcRebootStatus_Div")
			&& document.getElementById("hcRebootStatus_Div").value == "0")
		{
			//alert("not possible?");
			rebootflag = 1;
			clearInterval(interObjReboot);
			if(document.getElementById("hcSessionIdNow"))
			{
				var sessionId = document.getElementById("hcSessionIdNow").value;
				if("" != sessionId)
				{
					setCookie("SessionId", sessionId, ClientSessionIdExistTime);
				}
			}
			setTimeout("Relocate('/fcgi/do?id=1')", 2500);
		}
		ResetDivInnerHTML("divForceReboot");
	}
	});
}
function DownCookie_Force(desDivId)
{
	var pwDesDiv = "#"+desDivId;
	var destURL = 'do?id=6&id=1&Operation=GetDivContent&DivName=divUpgradeStatus';
	$.ajax({
		url: destURL,
		cache: false,
		success: function(html){
			ResetDivInnerHTML(desDivId);
			$(pwDesDiv).append(html);
			SetPageCookie();
		},
		error: function(html)
		{}
	});
}
function BeforeUpTO(desURL)
{
	alert(FileNotExistWarning);
	Relocate(desURL);
}

// 验证数据格式
// 验证IP是否合法
function CheckIpAddr_Simp(ipStr)
{
    var strlength= ipStr.length;
    if(ipStr == "")
    {
    		return false;
    }
  	if(strlength>15||(strlength <7 && strlength >0)) //IP的字段长度的限制 
    { 
        //SetInputBGColor(DestEleId);
        return false;
    } 
    var patrn =/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;//正则表达式，\d为数字,{1,3}一位或为三位. 
    if(!patrn.exec(ipStr)){ 
        //SetInputBGColor(DestEleId);
        return false;
    }
    var laststr; 
    laststr= ipStr.split(".");    //用.把字符串str分开 
    var last_patrn=/^\d{1,3}$/; 
    if(parseInt(laststr[0])>255||parseInt(laststr[1])>255||parseInt(laststr[2])>255||parseInt(laststr[3])>255) //判断IP每位的大小 
    {
    		//SetInputBGColor(DestEleId);
        return false; 
    } 
    if(!last_patrn.exec(laststr[3])) 
    { 
        //SetInputBGColor(DestEleId);
        return false;
    } 
    return true; 	
}
function CheckIpAddr(ipStr, DestEleId){
	if(!CheckIpAddr_Simp(ipStr))
	{SetInputBGColor(DestEleId);return false;}
	return true;
}

function BinValOfNum(Val)
{
	var tmp = parseFloat(Val).toString(2);
	if(0 == tmp)
	{return "00000000";}
	if(tmp.length < 8)
	{
		tmpZ = ""
		var i=0;
		while(i<8-tmp.length)
		{
			tmpZ = "0"+tmpZ;
			i++;			
		}
		tmp = tmpZ + tmp;		
	}
	return tmp;//格式化输出(补零) 
}

function BitAndEach(a1, a2)
{
	if((0 != a1 && 1 != a1)
		|| (0 != a2 && 1 != a2))
	{return "NotValid";}
	if(1 == a1 && 1 == a2)
	{return 1;}
	else{return 0;}
}

function BitAnd(str1, str2)
{
	var desLen = str1.length > str2.length ? str1.length:str2.length;
	var retStr = "";
	for(var i=0; i < desLen; i++)
	{
		retStr = BitAndEach(str1.charAt(str1.length-i-1), str2.charAt(str2.length-i-1))+retStr;
	}
	return retStr;
}

function CheckSubMaskV4(ipStr, subnetMask)
{
	if(!CheckIpAddr_Simp(ipStr) || !CheckIpAddr_Simp(subnetMask))
	{
		return false;
	}
	if("255.255.255.255" == subnetMask
	||"255.255.255.254" == subnetMask
	||"0.0.0.0" == subnetMask)
	{
		return false;
	}
	var subMArr = subnetMask.split(".");
	var subMBinStr = BinValOfNum(subMArr[0])+BinValOfNum(subMArr[1])+BinValOfNum(subMArr[2])+BinValOfNum(subMArr[3]);
	if(-1 != subMBinStr.indexOf("01"))return false; 
	var ipArr = ipStr.split(".");
	var ipBinStr = BinValOfNum(ipArr[0])+BinValOfNum(ipArr[1])+BinValOfNum(ipArr[2])+BinValOfNum(ipArr[3]);
	if(ipBinStr == ipBinStr & subMBinStr)
	{return false;}
	return true;
}

function IsDigitOrAlphabet(desStr)
{
	var Regx = /^[A-Za-z0-9]*$/;
	if (Regx.test(desStr))
	{
		return true;
	}
	else
	{
		return false;
	}	
}

// 主机名长度，可以
function IsHostNameValid(postData, DestEleId)
{
	if(!CheckLengthOfData(postData, 0, 63))
	{
		//alert(NotAValidHostName);
		SetInputBGColor(DestEleId);
		return false;
	}
	
	if(!IsHostNameValidChars(postData))
	{
		SetInputBGColor(DestEleId);
		return false;
	}
	return true;
}

function IsHostNameValidChars(postData)
{
	for(i = 0;i < postData.length;i++)
	{		
		n = postData.charCodeAt(i);                                                                    
    if(!((n >= 48 && n <= 57) || (n >= 65 && n <= 90) || (n >= 97 && n <= 122) || n == 95 || n == 40 ||  n == 41)) 
    {
      return false;
    }
  }
 return true;
}

function IsDigitOrAlphabetMouseSign(postData)
{
	//support 0-9 a-z A-Z @.+-
	for(i = 0;i < postData.length;i++)
	{		
		n = postData.charCodeAt(i);                                                                    
		if(!((n >= 48 && n <= 57) || (n >= 65 && n <= 90) || (n >= 97 && n <= 122) || 64 == n || 46 == n || 43 == n || 45 == n))
		{
			return false;
		}
  }
 return true;
}

function IsAValidDialedNumber(postData)
{
	if(!CheckLengthOfData(postData, 0, 63))
	{
		return false;
	}
	
	if(!IsDigitOrAlphabetMouseSign(postData))
	{
		return false;
	}
	return true;		
}

function CheckFileFormat(uploadFileName, fileType, expandLenth)
{
	if(uploadFileName == "")
	{
		return false;
	}
	var fileExpand = uploadFileName.substring(uploadFileName.length - expandLenth, uploadFileName.length);
	if (fileExpand.toUpperCase() != fileType)
	{
		//alert(FileFormatWarning);
		return false;
	}
	return true;
}

function Trans2Number(postData)
{
	if("" == postData)
	{
		return postData;
	}
	return Number(postData);
}

function IsAnInterger(postData, DestEleId)
{
 var Letters = "1234567890";
 var i; 
 var c;
 
 for( i = 0; i < postData.length; i ++ ) 
 {
  c = postData.charAt( i );
  if (-1 == Letters.indexOf( c )) 
  {
  	return false;        	
  }
 }
 
 if(!CheckLengthOfData(postData, 0, 63))
 {
	return false;
 }
 return true;
}
var re_alpha_digit=/^[A-Za-z0-9]*$/;
var re_alpha_digit_dot_line=/^[A-Za-z0-9.-]*$/
function CheckStrByRange(destStr, range, MaxLen)
{
	if(false == range.test(destStr)){
		return false;
	}
	if(!CheckLengthOfData(destStr, 0, Number(MaxLen)))
  {
		return false;
  }
	return true;
}

function NotContainInvalid(postData)
{
	if(!CheckLengthOfData(postData, 0, 63))
	{
		return false;
	}
  return NotContainInvalid_Sub(postData);
}

function NotContainInvalid127(postData)
{
	if(!CheckLengthOfData(postData, 0, 127))
	{
		return false;
	}
  return NotContainInvalid_Sub(postData);
}

function NotContainInvalid255(postData)
{
	if(!CheckLengthOfData(postData, 0, 255))
	{
		return false;
	}
  return NotContainInvalid_Sub(postData);
}

function NotContainInvalidWLen(postData, desLen)
{
	if(!CheckLengthOfData(postData, 0, desLen))
	{
		return false;
	}
  return NotContainInvalid_Sub(postData);
}

function NotContainInvalid_Sub(postData)
{
	// var Letters = "&=\'%*#^<>|＇＂";
	var Letters = "&=\'%";
  var i,c;
  for( i = 0; i < postData.length; i++ )
  { 
    c = postData.charCodeAt( i );
    for(j=0;j<Letters.length;j++)
    {
    	if(c == Letters.charCodeAt(j))
    	{return false;}
    }
  }
  return true;
}

function NotContainInvalid_NotEmpty(postData)
{
	if(!CheckLengthOfData(postData, 1, 63))
	{
		return false;
	}
	 
  return NotContainInvalid_Sub(postData);	
}

var arrDTMFVal = ["*","#","A","B","C","D"]; /*valid value for DTMF 0~9,*,#,A,B,C,D ----case sensitive*/
function IsDTMFValueValid(postData)
{
	var tmpChar;
	var flag = false;
	var iMax = Number(postData.length);
	var jMax = Number(arrDTMFVal.length);

	for(var i = 0; i < iMax; i++)
	{
		flag = false;
		tmpChar = postData.charAt(i);
		for(var j = 0; j < jMax; j++)
		{
			if((Number(tmpChar)>= 0 && Number(tmpChar) <= 9) || arrDTMFVal[j] == tmpChar)
			{
				flag = true;
				break;		
			}			
		}
		if(flag == false) return flag;		
	}	

	return flag;		
}

var DaysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 日期控件验证，
function IsDateRight(postDataY, postDataM, postDataD)
{
	var Letters = "1234567890";
  var i;
  var result = [0, 0, 0];
  var c1, c2, c3;
  //var hasDigit; 
  for( i = 0; i < postDataY.length; i ++ ) 
  {
  	c1 = postDataY.charAt( i );
  	c2 = postDataM.charAt( i );
  	c3 = postDataD.charAt( i );
  	if(-1 == Letters.indexOf(c1) && !result[0])
  	{
  		result[0] = 1;
  	}
  	if(-1 == Letters.indexOf(c2) && !result[1])
  	{
  		result[1] = 1;
  	}
  	if(-1 == Letters.indexOf(c3) && !result[2])
  	{
  		result[2] = 1;
  	}
  }
  
  if(!result[0] && (Number(postDataY) < 1970 || Number(postDataY) > 2037))
  {
    result[0] = 1;
  }
  
  if(!result[1] && (Number(postDataM) <=0 || Number(postDataM) > 12))
  {
    result[1] = 1;
  }
  
  if(!result[2] && 0 == postDataD.length)
  {
    result[2] = 1;
  }
  if(!result[2] && (Number(postDataD) > 31 || Number(postDataD) < 1))
  {
    result[2] = 1;
  }  
  
  if((!result[0] && !result[1] && !result[2]) && (Number(postDataD) <= 0 || Number(postDataD) > DaysOfMonth[Number(postDataM)-1]))
  {
  	result[2] = 1;
  	if(2 == Number(postDataM) && 29 == Number(postDataD))
  	{
  		if(0 == Number(postDataY) % 100)
  		{
  			if(0 == Number(postDataY) % 400)
  			{
  				result[2] = 0;
  			}
  		}
  		else if(0 == Number(postDataY) % 4)
  		{
  			result[2] = 0;
  		}
  	}
  }
  
  if(postDataY.length > 4 || postDataY.length < 1)
  {
  	result[0] = 1;
  }
  if(postDataM.length > 2 || postDataM.length < 1)
  {
  	result[1] = 1;
  }
  if(postDataD.length > 2 || postDataD.length < 1)
  {
  	result[2] = 1;
  } 
  return result;
}

function IsInRangeIncMinus(postData, minusNum, posiNum)
{
	if("" == postData){return false;}
	var len1 = minusNum.length;
	var len2 = posiNum.length;
	var NumStr = postData.substring(1, postData.length);
	if("-" == postData.charAt(0))
	{
		if(!IsAnInterger(NumStr) || NumStr.length > len1)
		{
			return false;
		}
		if(Number(NumStr) > minusNum)
		{
			return false;
		}
		return true;
	}
	else if("+" == postData.charAt(0))
	{
	}
	else
	{
		NumStr = postData;
	}
	if(!IsAnInterger(NumStr) || NumStr.length > len2)
	{
		return false;
	}
	if(Number(NumStr) > posiNum)
	{
		return false;
	}
	return true;
}

function StripPosit(str)
{
	if("" == postData){return false;}
	var NumStr = postData.substring(1, postData.length);
	if("-" == postData.charAt(0))
	{
		if(!IsAnInterger(NumStr) || NumStr.length > len1)
		{
			return false;
		}
		if(Number(NumStr) > minusNum)
		{
			return false;
		}
		return true;
	}
	else if("+" == postData.charAt(0))
	{
	}
}

function IsMonth(postDataM)
{
	if(!IsAnInterger(postDataM))
	return false;
	if(Number(postDataM) > 12 || Number(postDataM) < 1)
	{
		return false;
	}
	if(postDataM.length > 2 || postDataM.length < 1)
	{return false;}
	return true;
}

function IsDay(postDataM, postDataD)
{
	var DayNum;
	if(Number(postDataM) < 1 || Number(postDataM) > 12)
	{
		DayNum = 31;
	}
	else{DayNum = DaysOfMonth[Number(postDataM)-1];}
	if(!IsAnInterger(postDataD))
	return false;
	if(Number(postDataD) > DayNum || Number(postDataD) < 1)
	{
		return false;
	}
	if(postDataD.length > 2 || postDataD.length < 1)
	{return false;}
	return true;	
}

function IsHour(postData)
{
	var Letters = "1234567890";
  var i; 
  var c;
  //var hasDigit; 
  for( i = 0; i < postData.length; i ++ ) 
  { 
      c = postData.charAt( i ); 
      if (-1 == Letters.indexOf( c )) 
      {
       return false;
      }
  }
	
	if(0)
	{
		if(Number(postData) > 12 || Number(postData) < 0)
		return false;
	}
	else
	{
		if(Number(postData) > 23 || Number(postData) < 0)
		{
			//alert(InvalidTimeWarning);
			return false;
		}
	}
	
  if(postData.length > 2 || postData.length < 1)
  {
  	return false;
  }	
	
	return true;
}

function IsMinuteOrSec(postData)
{
	if(!IsAnInterger(postData))
	{
		//alert(InvalidTimeWarning);
		return false;		
	}
	
	if(Number(postData) > 59 || Number(postData) < 0)
	{
		//alert(InvalidTimeWarning);
		return false;		
	}
	
  if(postData.length > 2 || postData.length < 1)
  {
  	return false;
  }	
	
	return true;
}

function CheckLengthOfData(postData, min_num, max_num)
{
	var len = CheckLength(postData);
	if(len < min_num || len > max_num)
	{
		return false;
	}
	
	return true;	
}

function CheckLengthOfNumber(postData, min_num, max_num)
{
	return CheckLengthOfData(postData, min_num, max_num);
}

function CheckRangeOfNumber(postData, min_num, max_num)
{
	if(!IsAnInterger(postData))
	{
		return false;
	}
	if(Number(postData) > max_num || Number(postData) < min_num)
	{
		return false;
	}
	return true;
}

function IsPort(postData)
{
	if(!IsAnInterger(postData))
	{
		return false;
	}
	
	if(0 == postData.length)
	{
		return true;
	}
	
	if(Number(postData) > 65535 || Number(postData) <= 0 || postData.length < 0 || postData.length > 5)
	{
		//alert(DataRangeWarning);
		return false;
	}
	
	return true;
}

function IsContactOrGroupName(destStr)
{
	if(!CheckLengthOfData(destStr, 1, 63))
	{
		return false;
	}
	return true;
}

function IsGroupDescription(postData)
{
	if(!CheckLengthOfData(postData, 0, 63))
	{
		return false;
	}
	  
	/*var Letters = "&=%";
  var i,c;
  for( i = 0; i < postData.length; i++ )
  {
  	c = postData.charCodeAt(i);
    for(j=0;j<Letters.length;j++)
    {
    	if(c == Letters.charCodeAt(j))
      {return false;}
    }
  } */
  return true;		
}

function MouseMove(event)
{
	//var ev=event.target||event.srcElement;
	var evTmp = event || window.event;
	ev = evTmp.target||evTmp.srcElement;
	var CurrentID=ev.id;
	var i=0;
	if(!document.getElementById("fieldDescription"))
	{
		return;
	}
	while(true)
	{
		if( i == Number(FieldDescription1.length) )
		{
			document.getElementById("fieldDescription").innerHTML = "";
			break;
		}
		else if( FieldDescription1[i][0] == CurrentID )
		{
			//AutoHelpPosition("MouseInvoke");
			if(document.getElementById("fieldDescription"))
				document.getElementById("fieldDescription").innerHTML = FieldDescription1[i][1];
			break;
		}
		i++;
	}
}
document.onkeypress = onChangeBPAction;  
document.onkeydown = onChangeBPAction;  
function onChangeBPAction(e){
	var eveBackSpace = e ||window.event;   
	var eveobj = eveBackSpace.target || eveBackSpace.srcElement;
	if(eveBackSpace.keyCode == 8)
	{
		var eveobjType = eveobj.type || eveobj.getAttibut('type');
		if(eveBackSpace.keyCode == 8&& eveobjType == "password")
			{				
				eveobj.value =  "";           //eveobj.value.substr(0,eveobj.value.length-1); 
				return false;
			}
	}
}	
var lastScrollPos = -1;
window.onscroll = function(){
	var flag = false;
	var tmpScrollPos;
	var tmpL = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
	if(-1 != lastScrollPos)
	{
		tmpScrollPos = tmpL;
		if(tmpScrollPos - lastScrollPos > 50 || lastScrollPos - tmpScrollPos > 50)
		{
			flag = true;
			lastScrollPos=tmpScrollPos;
		}
	}
	else
	{
		lastScrollPos = tmpL;
	}
	if(flag && document.getElementById("gapOfHelp")){setTimeout("AutoHelpPosition('ScrollInvoke')", 500);}
}

function AutoHelpPosition(invoker)
{
	var minusLen = 180;
	if(invoker == "ScrollInvoke")
	{
		minusLen = 160;
	}
	var len = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
	len = len-minusLen;
	if(len < 0){len = 0;}
	document.getElementById("gapOfHelp").style.height = len+"px";	
}

function isASCIICase(str)
{
	var c,charCode;
	for(var i = 0; i < str.length;i++)
	{
		c = str.charAt( i ); 
		charCode = c.charCodeAt();
		if( charCode < 0 || charCode > 128)
		{
			return false;
		}		
	}
	return true;
 } 
 
 //只允许输入字母和数字
 function isValidCharsCase(str)
{
	var c,charCode;
	for(var i = 0; i < str.length;i++)
	{
		c = str.charAt( i ); 
		charCode = c.charCodeAt();
		if((charCode < 48) || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97) || (charCode > 122))
		{
			return false;
		}
	}
	return true;
 } 
 
 function IsPortUsed(comparingPort, comparedPort)
 {	
 	comparingPortPair = comparingPort.split('~');
	for(var i = 0; i < comparedPort.length; i ++)
	{
		if(comparedPort[i])
		{
			comparedPortPair = comparedPort[i].split('~');
			if( Number(comparingPortPair[0]) > Number(comparedPortPair[1]) || 
					(Number(comparingPortPair[1]) < Number(comparedPortPair[0])) ) continue;
			return true;
		}			
	}
	return false;
 }

/********************************************
* parameter 1: the data of configuration;
* parameter 2: mininum value;
* parameter 3: maxnum value;
* parameter 4: increment value;
* parameter 5: increment value;
* parameter 6: the way of get integer(0-Upward, 1-downward, 2-rounded)
********************************************/
function TransStrToIndex(str, min_val, max_val, num, get_int_way)
{
	Number(str);
	num=Number(num);
	min_val=Number(min_val);
	max_val=Number(max_val);
	get_int_way=Number(get_int_way);
	for(var i= min_val; i < max_val; i++)
	{
		if(str == i*num)
		{
			return str;
		}
	}	
	if(get_int_way == 0)
	{
		str = (Math.ceil(str/num) + parseInt(1))*num;
	}
	if(get_int_way == 1)
	{
		str = (Math.floor(str/num) + parseInt(1))*num;
	}
	if(get_int_way == 2)
	{
		str = (Math.round(str/num) + parseInt(1))*num;
	}
		
	return str;
}

/********************************************
* author:Zalman
* function:choose a right OnSubmit function to call
********************************************/
function ChooseOnSubmit()
{
  try 
	{
    if(typeof(eval(OnSubmitWithWarn)) == "function") 
		{
			return OnSubmitWithWarn();
		}
	} catch(e){}
	return OnSubmit();
}

function CulBLFNum(GetBLFNum, OtherPageBLFNum, MaxBLFNum)
{
	//判断是否大于最大值
	if(parseInt(GetBLFNum) + parseInt(OtherPageBLFNum) > MaxBLFNum)
	{
		return false;
	}
	return true;
}

/******************
* author:Zalman
* Parameters:1.fileID 2.UpLimit 3.LowerLimit
* return value:
* -3--file too small
* -2--file too large
* -1--file not found
* 0--normal file
******************/
function CheckFileSize(tmpInputFileID, UpLimit, LowerLimit)
{
	var fileInput = null;
	try 
	{
		fileInput = $('#'+tmpInputFileID)[0];
		if ("undefined" == typeof(fileInput)
			|| "undefined" == typeof(fileInput.files[0])
			|| "undefined" == typeof(fileInput.files[0].size))
		{
			return 0;
		}		
		var byteSize  = fileInput.files[0].size;
		var MbyteSize = Math.ceil(byteSize / 1024);// Size returned in KB.
		if(MbyteSize >= UpLimit)
		{
			//file too large
			return -2;
		}
		else if (MbyteSize < LowerLimit)
		{
			//file too small
			return -3;
		}
		else if (0 == MbyteSize)
		{
			return -1;
		}
		return 0;
	} catch (e)
	{
		return 0;
	}
}

//通过权限动态加载css文件以区别显示
function AuthorityDifShow()
{
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	if(document.getElementById("hcCurUserType") && "user" == document.getElementById("hcCurUserType").value)
	{
	link.href = "../css/user.css";
	}
	else
	{
		link.href = "../css/admin.css";
	}
	link.rel = 'stylesheet';
	link.type = 'text/css';
	head.appendChild(link);
}

function OnBackToPrevPage()
{
	history.back(-1);
}
