var PageRefDesURL = 'do?id=4&id=3';

function LoadLang()
{
	var tmp = Voice;
	LoadCommonResources(tmp);
	document.getElementById("tEchoCanceller").innerHTML = EchoCanceller;
	document.getElementById("tEchoCanceller1").innerHTML = EchoCanceller;
	document.getElementById("tJitterType").innerHTML = JitterType;
	document.getElementById("tJitterBuffer").innerHTML = JitterBuffer;
	document.getElementById("tTone").innerHTML = Tone;
	document.getElementById("tMicVolume").innerHTML = MicVolume;
	document.getElementById("tHeadSet").innerHTML = HeadSet;
	document.getElementById("tMinDelay").innerHTML = MinDelay;
	document.getElementById("tMaxDelay").innerHTML = MaxDelay;
	document.getElementById("tNormalDelay").innerHTML = NormalDelay;
	document.getElementById("tKeyPressSound").innerHTML = KeyPressSound;
	
	document.getElementById("tSendPressSound").innerHTML = SendPressSound;
	document.getElementById("tRedialTone").innerHTML = RedialTone;
	document.getElementById("tHeadsetSendVolume").innerHTML = HeadsetSendVolume;
	document.getElementById("tHandsetSendVolume").innerHTML = HandsetSendVolume;
	document.getElementById("tHandoffSendVolume").innerHTML = HandoffSendVolume;
	document.getElementById("tHeadsetPrior").innerHTML = HeadsetPrior;
	document.getElementById("tDualHeadset").innerHTML = DualHeadset;
	document.getElementById("tRingerDeviceForHeadset").innerHTML = RingerDeviceForHeadset;

	if("undefined" != typeof(PLATFORMID) && PLATFORMID == 0)
	{
		//platform ac495l only surport to set min in range of 0~280,max(0~300),normal(0~280)
		document.getElementById("tDelayRange1").innerHTML = "(0~280"+SecondMilliAbbr+")";
		document.getElementById("tDelayRange2").innerHTML = "(0~300"+SecondMilliAbbr+")";
		document.getElementById("tDelayRange3").innerHTML = "(0~280"+SecondMilliAbbr+")";
	}
	else
	{
		document.getElementById("tDelayRange1").innerHTML = "(0~1000"+SecondMilliAbbr+")";
		document.getElementById("tDelayRange2").innerHTML = "(0~1000"+SecondMilliAbbr+")";
		document.getElementById("tDelayRange3").innerHTML = "(0~1000"+SecondMilliAbbr+")";
	}
	document.getElementById("tVAD").innerHTML = VAD;
	document.getElementById("tCNG").innerHTML = CNG;
	document.getElementById("tSidetone").innerHTML = ("undefined" != typeof(Sidetone))?Sidetone:"Sidetone";
	document.getElementById("tSidetoneHandset").innerHTML = ("undefined" != typeof(SidetoneHandset))?SidetoneHandset:"Handset Sidetone";
	document.getElementById("tSidetoneHeadset").innerHTML = ("undefined" != typeof(SidetoneHeadset))?SidetoneHeadset:"Headset Sidetone";
}

function LoadCfg()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	LoadLang();
//	if(document.getElementById("hcVolumeReqReboot") &&
//	1 == f2.hcVolumeReqReboot.value)
//	{
//		document.getElementById("mid_cont1").style.display = "";
//		document.getElementById("mid_cont2").style.display = "none";
//		document.getElementById("PageUL").style.display = "none";
//		document.getElementById("tPageLogOut").style.display = "none";
//		document.getElementById("tShowForAutoP").innerHTML = RebootingWarning;
//		AutoHeightOfBody();
//		RebootOfSetVol();
//	}
//	else
	{
		LoadCfg2();
	}

}

function LoadCfg2()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];	
	DelayShow();
	f1.cEchoCanceller.options.add(new Option(Disabled, 0));
	f1.cVAD.options.add(new Option(Disabled, 0));
	f1.cCNG.options.add(new Option(Disabled, 0));
	f1.cKeyPressSound.options.add(new Option(Disabled, 0));
	f1.cSendPressSound.options.add(new Option(Disabled, 0));
	f1.cHeadsetPrior.options.add(new Option(Disabled, 0));
	f1.cDualHeadset.options.add(new Option(Disabled, 0));
	f1.cRingerDeviceForHeadset.options.add(new Option(Disabled, 0));

	f1.cEchoCanceller.options.add(new Option(Enabled, 1));
	f1.cVAD.options.add(new Option(Enabled, 1));
	f1.cCNG.options.add(new Option(Enabled, 1));
	f1.cKeyPressSound.options.add(new Option(Enabled, 1));
	f1.cSendPressSound.options.add(new Option(Enabled, 1));
	f1.cHeadsetPrior.options.add(new Option(Enabled, 1));
	f1.cDualHeadset.options.add(new Option(Enabled, 1));
	f1.cRingerDeviceForHeadset.options.add(new Option(Enabled, 1));
	
	f1.cJitterType.options.add(new Option(Fixed, 0));
	f1.cJitterType.options.add(new Option(Adaptive, 1));
	SubLoadCfg();	
}

function RebootOfSetVol()
{
	$.ajax({
		url: '/fcgi/do?id=9&id=1&Operation=ForceReboot',
		cache: false,
		success: function(html){
			ReStartCheckReboot();
			interObj[1] = setInterval("LongCheckStatus('divRebootStatus')", 4000);
		},
		error: function(html)
		{
			ReStartCheckReboot();
			interObj[1] = setInterval("LongCheckStatus('divRebootStatus')", 4000);
		}
	});
}

function ReStartCheckReboot()
{
	setInterval("StatusCheck('divRebootStatus')", 3000);
}

function StatusCheck(strDivName)
{
	var desURL = 'do?id=6&id=1&Operation=GetDivContent&DivName=' + strDivName;
	$.ajax({
		url: desURL,
		cache: false,
		success: function(html){
			ResetNotGetResponse();
			if("" == html)
			{
				if(strDivName == "divRebootStatus")
				{					
					ReStartCheckReboot();
				}
				return;
			}
			if(strDivName == "divRebootStatus")
			{
				OnStsActOfReboot(html);
				ReStartCheckReboot()
			}
		},
		error: function(html){
			ResetNotGetResponse();
			if(strDivName == "divRebootStatus")
			{
				ReStartCheckReboot();
			}
		}
	});
}

var rebootflag = 0;
function OnStsActOfReboot(html)
{
	ResetDivInnerHTML("divRebootStatus");
	$("#divRebootStatus").append(html);
	if(document.getElementById("hcRebootStatus_Div") && 
	document.getElementById("hcRebootStatus_Div").value == 0)
	{
		SetPageCookie();
		if(0 == rebootflag)
		{
			rebootflag = 1;
			setTimeout("Relocate('/fcgi/do?id=4&id=3')", 7000);
		}
	}
}

function SubLoadCfg()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	f1.cCNG.value = f2.hcCNG.value = TransEmptyStrTo0(f2.hcCNG.value);
	f1.cDualHeadset.value = f2.hcDualHeadset.value = TransEmptyStrTo0(f2.hcDualHeadset.value);
	f1.cEchoCanceller.value = f2.hcEchoCanceller.value = TransEmptyStrTo0(f2.hcEchoCanceller.value);
	f1.cHandoffSendVolume.value = f2.hcHandoffSendVolume.value;
	f1.cHandsetSendVolume.value = f2.hcHandsetSendVolume.value;
	f1.cHeadsetPrior.value = f2.hcHeadsetPrior.value = TransEmptyStrTo0(f2.hcHeadsetPrior.value);
	f1.cHeadsetSendVolume.value = f2.hcHeadsetSendVolume.value;
	f1.cJitterType.value = f2.hcJitterType.value = TransEmptyStrTo0(f2.hcJitterType.value);
	f1.cMaxDelay.value = f2.hcMaxDelay.value;
	f1.cMinDelay.value = f2.hcMinDelay.value;
	
	f1.cNormalDelay.value = f2.hcNormalDelay.value;
	f1.cRedialTone.value = f2.hcRedialTone.value;
	f1.cRingerDeviceForHeadset.value = f2.hcRingerDeviceForHeadset.value = TransEmptyStrTo0(f2.hcRingerDeviceForHeadset.value);
	f1.cSendPressSound.value = f2.hcSendPressSound.value = TransEmptyStrTo0(f2.hcSendPressSound.value);
	f1.cKeyPressSound.value = f2.hcKeyPressSound.value = TransEmptyStrTo0(f2.hcKeyPressSound.value);
	f1.cVAD.value = f2.hcVAD.value = TransEmptyStrTo0(f2.hcVAD.value);
	f1.cSidetoneHandset.value = f2.hcSidetoneHandset.value = TransEmptyStrTo0(f2.hcSidetoneHandset.value);
	f1.cSidetoneHeadset.value = f2.hcSidetoneHeadset.value = TransEmptyStrTo0(f2.hcSidetoneHeadset.value);
	ResetAllInputColor();
	CheckJitterInputAvail();
}

function CheckJitterInput()
{
	var f1 = document.forms["body_form"];
	if(1 == f1.cJitterType.value
	&& Number(f1.cMinDelay.value) > Number(f1.cMaxDelay.value))
	{
		return true;
	}
	return false;
}

function CheckJitterInputAvail()
{
	var f1 = document.forms["body_form"];
	//0-fixed,1-adaptive
	if(1 == f1.cJitterType.value)
	{
		f1.cMinDelay.disabled = false;
		f1.cNormalDelay.disabled = true;
		f1.cMaxDelay.disabled = false;
	}
	else
	{
		f1.cMinDelay.disabled = true;
		f1.cNormalDelay.disabled = false;
		f1.cMaxDelay.disabled = true;
	}
}

var flagMic = false;
var flagJitter = false;
function CheckCommitData()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	var strSubmData = "";
	var flag = false;
	flagMic = false;
	var RangeofMaxDelay = 0;
	var RangeofMinDelay = 0;
	var RangeofNormalDelay = 0;
	if("undefined" != typeof(PLATFORMID) && PLATFORMID == 0)
	{
		RangeofMaxDelay = 300;
		RangeofMinDelay = 280;
		RangeofNormalDelay = 280;
	}
	else
	{
		RangeofMaxDelay = 1000;
		RangeofMinDelay = 1000;
		RangeofNormalDelay = 1000;
	}
	// generated by code
	if(f1.cCNG.value != f2.hcCNG.value)
	{
		strSubmData = strSubmData + "&cCNG=" + f1.cCNG.value;
	}
//	if(f1.cDualHeadset.value != f2.hcDualHeadset.value)
//	{
//		strSubmData = strSubmData + "&cDualHeadset=" + f1.cDualHeadset.value;
//	}
	if(f1.cEchoCanceller.value != f2.hcEchoCanceller.value)
	{
		strSubmData = strSubmData + "&cEchoCanceller=" + f1.cEchoCanceller.value;
	}
	if(f1.cHandoffSendVolume.value != f2.hcHandoffSendVolume.value)
	{
		if(!CheckRangeOfNumber(f1.cHandoffSendVolume.value, 1, 15))
		{
			SetInputBGColor("cHandoffSendVolume");
			flag = true;
		}
		strSubmData = strSubmData + "&cHandoffSendVolume=" + Trans2Number(f1.cHandoffSendVolume.value);
		if(!flag)
		{
			flagMic = true;
		}
	}
	if(f1.cHandsetSendVolume.value != f2.hcHandsetSendVolume.value)
	{
		if(!CheckRangeOfNumber(f1.cHandsetSendVolume.value, 1, 15))
		{
			SetInputBGColor("cHandsetSendVolume");
			flag = true;
		}		
		strSubmData = strSubmData + "&cHandsetSendVolume=" + Trans2Number(f1.cHandsetSendVolume.value);
		if(!flag)
		{
			flagMic = true;
		}		
	}
//	if(f1.cHeadsetPrior.value != f2.hcHeadsetPrior.value)
//	{
//		strSubmData = strSubmData + "&cHeadsetPrior=" + f1.cHeadsetPrior.value;
//	}
	if(f1.cHeadsetSendVolume.value != f2.hcHeadsetSendVolume.value)
	{
		if(!CheckRangeOfNumber(f1.cHeadsetSendVolume.value, 1, 15))
		{
			SetInputBGColor("cHeadsetSendVolume");
			flag = true;
		}		
		strSubmData = strSubmData + "&cHeadsetSendVolume=" + Trans2Number(f1.cHeadsetSendVolume.value);
		if(!flag)
		{
			flagMic = true;
		}		
	}
	if(f1.cJitterType.value != f2.hcJitterType.value)
	{
		strSubmData = strSubmData + "&cJitterType=" + f1.cJitterType.value;
	}
//	if(f1.cKeyPressSound.value != f2.hcKeyPressSound.value)
//	{
//		strSubmData = strSubmData + "&cKeyPressSound=" + f1.cKeyPressSound.value;
//	}
	if(f1.cJitterType.value == 1)
	{
		//Adative
		if(f1.cMaxDelay.value != f2.hcMaxDelay.value)
		{
			if(!CheckRangeOfNumber(f1.cMaxDelay.value, 0, RangeofMaxDelay) 
				|| "" == f1.cMaxDelay.value)
			{
				SetInputBGColor("cMaxDelay");
				flag = true;
			}
			strSubmData = strSubmData + "&cMaxDelay=" + Trans2Number(f1.cMaxDelay.value);
		}
		if(f1.cMinDelay.value != f2.hcMinDelay.value)
		{
			if(!CheckRangeOfNumber(f1.cMinDelay.value, 0, RangeofMinDelay)
				|| "" == f1.cMinDelay.value)
			{
				SetInputBGColor("cMinDelay");
				flag = true;
			}
			strSubmData = strSubmData + "&cMinDelay=" + Trans2Number(f1.cMinDelay.value);
		}
	}
	else
	{
		//fixed
		if(f1.cNormalDelay.value != f2.hcNormalDelay.value)
		{
			if(!CheckRangeOfNumber(f1.cNormalDelay.value, 0, RangeofNormalDelay) 
				|| "" == f1.cNormalDelay.value)
			{
				SetInputBGColor("cNormalDelay");
				flag = true;
			}
			strSubmData = strSubmData + "&cNormalDelay=" + Trans2Number(f1.cNormalDelay.value);
	}
	}
//	if(f1.cRedialTone.value != f2.hcRedialTone.value)
//	{
//		strSubmData = strSubmData + "&cRedialTone=" + PostEncode(f1.cRedialTone.value);
//	}
//	if(f1.cRingerDeviceForHeadset.value != f2.hcRingerDeviceForHeadset.value)
//	{
//		strSubmData = strSubmData + "&cRingerDeviceForHeadset=" + f1.cRingerDeviceForHeadset.value;
//	}
//	if(f1.cSendPressSound.value != f2.hcSendPressSound.value)
//	{
//		strSubmData = strSubmData + "&cSendPressSound=" + f1.cSendPressSound.value;
//	}
	if(f1.cVAD.value != f2.hcVAD.value)
	{
		strSubmData = strSubmData + "&cVAD=" + f1.cVAD.value;
	}
	if(f1.cSidetoneHandset.value != f2.hcSidetoneHandset.value)
	{
		if(!CheckRangeOfNumber(f1.cSidetoneHandset.value, 0, 7))
		{
			SetInputBGColor("cSidetoneHandset");
			flag = true;
		}		
		strSubmData = strSubmData + "&cSidetoneHandset=" + Trans2Number(f1.cSidetoneHandset.value);	
	}
	if(f1.cSidetoneHeadset.value != f2.hcSidetoneHeadset.value)
	{
		if(!CheckRangeOfNumber(f1.cSidetoneHeadset.value, 0, 7))
		{
			SetInputBGColor("cSidetoneHeadset");
			flag = true;
		}		
		strSubmData = strSubmData + "&cSidetoneHeadset=" + Trans2Number(f1.cSidetoneHeadset.value);	
	}
	
	if(true == flag)
	{
		return DataCheckResult;
	}
	else
	{
		if(f1.cJitterType.value == 1 
			&& CheckJitterInput())
		{
			flagJitter = true;
			return DataCheckResult;
		}
		if(true == flagMic)
		{strSubmData = "&cVolumeReqReboot=1"+strSubmData;}
	}
	return strSubmData;
}

function OnSubmit()
{
	var f3 = document.forms["submit_form"];
	var strSubmData = CheckCommitData();
	if(DataCheckResult == strSubmData)
	{
		if(true == flagJitter)
		{alert(JitterDelaySizeWarning);flagJitter=false;}
		return;
	}
	strSubmData = "begin&Operation=Submit" + strSubmData + "&SubmitData=end";
	if(true == flagMic)
	{
		if(confirm(MicVolumeWarning))
		{
			f3.SubmitData.value = strSubmData;
			DoForm3Submit(f3);}
		else
		{
			SubLoadCfg();
			flagMic = false;
		}
	}
	else{f3.SubmitData.value=strSubmData;DoForm3Submit(f3);}
}

function CheckDataChangedDel(destURL)
{
	var f3 = document.forms["submit_form"];
	var strSubmData = CheckCommitData();
	if("" == strSubmData)
	{
		Relocate(destURL);
		return false;
	}
	var confirmStr = SavePageConfirm;
	if(DataCheckResult == strSubmData)
	{
		confirmStr = SavePageConfirm+"\n"+PleaseCorrectWarning;
		if(true == flagJitter)
		{confirmStr = confirmStr+"\n("+JitterDelaySizeWarning+")";}
	}
	else if(true == flagMic)
	{confirmStr = SavePageConfirm+"\n"+MicVolumeWarning;}
	
	if(confirm(confirmStr))
	{
		if(DataCheckResult == strSubmData)
		{
			flagMic = false;
			flagJitter = false;
			return false;
		}
		var tmpStr;
		if(false == flagMic)
		{
		tmpStr = "begin&Operation=Submit&DestURL=" + PostEncode(destURL) + strSubmData + "&SubmitData=end";
		PageRefDesURL = destURL;
		f3.SubmitData.value = tmpStr;
		DoForm3SubmitPageChange(f3);}
		else
		{tmpStr = "begin&Operation=Submit"+strSubmData+"&SubmitData=end";
		f3.SubmitData.value = tmpStr;
		DoForm3Submit(f3);}
		return false;
	}
	else
	{
		Relocate(destURL);
		return false;
	}
}
