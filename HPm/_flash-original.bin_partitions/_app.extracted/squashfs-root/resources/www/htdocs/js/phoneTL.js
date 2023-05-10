var TimeSplit = "/";
var PoundSplit = "#";
var reSubmitTZ = 0;

function LoadLang()
{
	var tmp = TimeAndLang;
	LoadCommonResources(tmp);

	document.getElementById("tDate").innerHTML = DateLabel;
	document.getElementById("tTime").innerHTML = Time;
	document.getElementById("tType").innerHTML = Type;
	document.getElementById("tMonth").innerHTML = Month;
	document.getElementById("tMonth1").innerHTML = Month;
	document.getElementById("tMonth2").innerHTML = Month;
	document.getElementById("tDay").innerHTML = Day;
	document.getElementById("tDay1").innerHTML = Day;
	document.getElementById("tDay2").innerHTML = Day;
	document.getElementById("tHour").innerHTML = Hour;
	document.getElementById("tHour1").innerHTML = Hour;
	document.getElementById("tHour2").innerHTML = Hour;
	document.getElementById("tYear").innerHTML = Year;
	document.getElementById("tMinute").innerHTML = Minute;
	document.getElementById("tSecond").innerHTML = Second;
				
	document.getElementById("tStartTime").innerHTML = StartTime;
	document.getElementById("tEndTime").innerHTML = EndTime;

	document.getElementById("tOffSet").innerHTML = OffSet;
	//document.getElementById("tDHCPTimeEnable").innerHTML = DHCPTimeEnable;
	document.getElementById("tTimeFormat").innerHTML = TimeFormat;
	document.getElementById("tDateFormat").innerHTML = DateFormat;
	document.getElementById("tDisplayMode").innerHTML = DisplayMode;
	document.getElementById("tPrimaryNTPServer").innerHTML = PrimaryNTPServer;
	document.getElementById("tSecondryNTPServer").innerHTML = SecondryNTPServer;
	document.getElementById("tTimeZone").innerHTML = TimeZone;

	document.getElementById("tUpdateInterval").innerHTML = UpdateInterval;
	document.getElementById("tDayLightSaving").innerHTML = DayLightSaving;
	document.getElementById("tTimeSetting").innerHTML = TimeSetting;
	//document.getElementById("tTimeSettingType").innerHTML = TimeSettingType;
	//document.getElementById("tLanguage").innerHTML = Language;
	document.getElementById("tManual").innerHTML = Manual;
	document.getElementById("tAuto").innerHTML = Auto;
	document.getElementById("tByDate").innerHTML = ByDate;

	document.getElementById("tByWeek").innerHTML = ByWeek;
	document.getElementById("tStartMonth").innerHTML = StartMonth;
	document.getElementById("tStartWeekOfMonth").innerHTML = StartWeekOfMonth;
	document.getElementById("tStartDayOfWeek").innerHTML = StartDayOfWeek;
	document.getElementById("tStartHour").innerHTML = StartHour;
	document.getElementById("tEndMonth").innerHTML = EndMonth;
	document.getElementById("tEndWeekOfMonth").innerHTML = EndWeekOfMonth;
	document.getElementById("tEndDayOfWeek").innerHTML = EndDayOfWeek;
	document.getElementById("tEndHour").innerHTML = EndHour;
	document.getElementById("tWebLanguage").innerHTML = WebLanguage;
	document.getElementById("tLanguageType").innerHTML = document.getElementById("tLanguageType1").innerHTML = Type;
	document.getElementById("tLCDLanguage").innerHTML = LCDLanguage;
	document.getElementById("tNTPIntervalRange").innerHTML = "(>= 3600"+SecondAbbr+")";
	document.getElementById("tDTSActiveType").innerHTML = FunctionActive;
	document.getElementById("tOffRange").innerHTML = "(-300~300"+Minutes+")";
	return true;
}
function GetRealSaveTypeOfDST(tmpValue)
{
	var f2 = document.forms["hiddenValForm"];
	if("1" != tmpValue && "0" != tmpValue)
	{
		var PrevLenth = f2.hcStartDateTime.value.split(TimeSplit);
		tmpValue = 0;
		if(4 == PrevLenth.length)
		{tmpValue = 1;}
		else if(3 == PrevLenth.length)
		{tmpValue = 0;}
	}
	return tmpValue;
}

function SubLoadCfg()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	
	f2.hcWebLanguage.value = TransEmptyStrTo0(f2.hcWebLanguage.value);
	f1.cWebLanguage.value = f2.hcWebLanguage.value;
	f2.hcLCDLanguage.value = TransEmptyStrTo0(f2.hcLCDLanguage.value);
	f1.cLCDLanguage.value = f2.hcLCDLanguage.value;
//Format Setting
	f2.hcTimeFormat.value = TransEmptyStrTo0(f2.hcTimeFormat.value);
	f1.cTimeFormat.value = f2.hcTimeFormat.value;
	f2.hcDateFormat.value = TransEmptyStrTo0(f2.hcDateFormat.value);
	f1.cDateFormat.value = f2.hcDateFormat.value;
	f2.hcDisplayMode.value = TransEmptyStrTo0(f2.hcDisplayMode.value);
	f1.cDisplayMode.value = f2.hcDisplayMode.value;

//Type setting
	f2.hcByManualTime.value = TransEmptyStrTo(f2.hcByManualTime.value,"1");
	var tmpValue = f2.hcByManualTime.value;
	if(tmpValue == "1") 
	{
		// 1 : Auto  0:Manual  //by default,it should be 1:Auto
		 f1.cByManualTime[1].checked = true;
	}
	else
	{
		f1.cByManualTime[0].checked = true;
	}
	var tmpSysTime = f2.hcSetManualDateTime.value+"/";
	var arrSysTime = tmpSysTime.split(TimeSplit);
	
	if(f2.hcByManualTime.value == "0") 
	{
		f1.cYear.value = arrSysTime[0];

		if("undefined" != typeof(MODELID) && "47" == MODELID)
		{
			f1.cMonth.value = arrSysTime[1];
		}
		else
		{
			f1.cMonth.value = Number(arrSysTime[1])+1;
		}
		
		f1.cDay.value = arrSysTime[2];
		f1.cHour.value = arrSysTime[3];
		f1.cMinute.value = arrSysTime[4];
		f1.cSecond.value= arrSysTime[5];
	}
	else if(f2.hcByManualTime.value == "1") 
	{
		f1.cYear.value = "";
		f1.cMonth.value = "";
		f1.cDay.value = "";
		f1.cHour.value = "";
		f1.cMinute.value = "";
		f1.cSecond.value= "";
	}	
	
	//f1.cDHCPTimeEnable.value = f2.hcDHCPTimeEnable.value;
//ntp settings
	var tmpValue1 = f2.hcTimeZoneNameIndex.value;
	var TimeZoneCur = FindTzByIdx(tmpValue1);
	if(TimeZoneCur != f2.hcTimeZone.value)
	{
		var tzid = FindIdByTz(f2.hcTimeZone.value);	
		
		//alert(InvalidTimeZoneWarning + "("+ f2.hcTimeZone.value + " " +f2.hcTimeZoneName.value + ")" +SubmitAgainWarning);
		reSubmitTZ = 1;
		f1.cTimeZone.value = tzid;
	}
	else{f1.cTimeZone.value = tmpValue1;}
	f1.cPrimaryNTPServer.value = f2.hcPrimaryNTPServer.value;
	f1.cSecondryNTPServer.value = f2.hcSecondryNTPServer.value;
	tmpValue = f2.hcStartDateTime.value;
	tmpValue = f2.hcEndDateTime.value;
	f1.cUpdateInterval.value = f2.hcUpdateInterval.value;
	
//DST settings---DTS mistype for DST
	f2.hcDTSActiveType.value = TransEmptyStrTo0(f2.hcDTSActiveType.value);
	f1.cDTSActiveType.value = f2.hcDTSActiveType.value;
	f1.cOffSet.value = f2.hcOffSet.value;
	f2.hcDayLightSavingType.value = TransEmptyStrTo0(f2.hcDayLightSavingType.value);
	tmpValue = f2.hcDayLightSavingType.value;
	var dayLightSavingT = GetRealSaveTypeOfDST(tmpValue);
	if(dayLightSavingT == "1")
	{
		//1:By week 0:By Date
		f1.cDayLightSavingType[1].checked = true;
	}
	else
	{
		f1.cDayLightSavingType[0].checked = true;
	}
	var arrStartDateTime = f2.hcStartDateTime.value.split(TimeSplit);
	var arrEndDateTime = f2.hcEndDateTime.value.split(TimeSplit);
	SetByWeekItemDef();
	SetByDateItemDef();
	if(dayLightSavingT == "0")
	{
		var numOfDateTimeItem = 3;
		if("" != f2.hcStartDateTime.value)
		{
			f1.cStMonth.value = arrStartDateTime[0];
			f1.cStDay.value = arrStartDateTime[1];
			f1.cStHour.value = arrStartDateTime[2];
		}
		if("" != f2.hcEndDateTime.value)
		{
			f1.cEdMonth.value = arrEndDateTime[0];
			f1.cEdDay.value = arrEndDateTime[1];
			f1.cEdHour.value = arrEndDateTime[2];
		}
	}
	else
	{
		if("" != f2.hcStartDateTime.value)
		{
			f1.cStartMonth.value = arrStartDateTime[0];
			f1.cStartWeekOfMonth.value = arrStartDateTime[1];
			f1.cStartDayOfWeek.value = arrStartDateTime[2];
			tmp = arrStartDateTime[3];
			f1.cStartHour.value = tmp;
		}
		if("" != f2.hcEndDateTime.value)
		{
			f1.cEndMonth.value = arrEndDateTime[0];
			f1.cEndWeekOfMonth.value = arrEndDateTime[1];
			f1.cEndDayOfWeek.value = arrEndDateTime[2];
			tmp = arrEndDateTime[3];
			f1.cEndHour.value = tmp;
		}
	}
	DoChangeByManualTime();
	ResetAllInputColor();
}
function LoadCfg()
{
	LoadLang();
	DelayShow();
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var arrDFTypes = DateFormatTypes.split(SplitSymbol);
	// 格式规定好
	for(var i=0; i<arrDFTypes.length; i++)
	{
		f1.cDateFormat.options.add(new Option(arrDFTypes[i], i));
	}

	f1.cTimeFormat.options.add(new Option(TwelveHours, 0));
	f1.cTimeFormat.options.add(new Option(TwentyfourHours, 1));
	f1.cDisplayMode.options.add(new Option(Disabled, 0));
	f1.cDisplayMode.options.add(new Option(DayLabel, 1));
	f1.cDisplayMode.options.add(new Option(DateLabel, 2));
	f1.cDisplayMode.options.add(new Option(Rolling, 3));

	var arrPhoneLangListTemp = f2.hcPhoneLanguageList.value;
	var arrWebLangListTemp = f2.hcWebLanguageList.value;
	var arrLCDLangList = arrPhoneLangListTemp.split(SplitSymbol);
	
	for(var i=0; i<arrLCDLangList.length; i++)
	{
		arrLCDLangList[i] = ShowDecode(arrLCDLangList[i]);
	}
	var arrWebLangList = arrWebLangListTemp.split(SplitSymbol);
	var PhoneLangNum = f2.hcPhoneLanguageNum.value;
	var WebLangNum = f2.hcWebLanguageNum.value;	
	
	if("undefined" != typeof(MODELID))
	{
		if("47" == MODELID)
		{
			for(var i=0; i<PhoneLangNum; i=i+2)
			{
				f1.cLCDLanguage.options.add(new Option(arrLCDLangList[i+1], arrLCDLangList[i]));
			}
		}
		else
		{
			for(var i=0; i<PhoneLangNum; i++)
			{
				var j;
				for(j=0; j<(arrLangStringMap.length/3); j++)
				{
					if(arrLCDLangList[2*i+1] == arrLangStringMap[3*j+2])
					{
						f1.cLCDLanguage.options.add(new Option(arrLangStringMap[3*j], arrLCDLangList[2*i]));
						break;
					}	
				}
			}
		}	
	}	
	
	for(var i=0; i<WebLangNum; i++)
	{
		var j;
		for(j=0; j<(arrLangStringMap.length/3); j++)
		{
			if(arrWebLangList[2*i+1] == arrLangStringMap[3*j+1])
			{
				f1.cWebLanguage.options.add(new Option(arrLangStringMap[3*j], arrWebLangList[2*i]));
				break;
			}
		}
	}
	
	f1.cDTSActiveType.options.add(new Option(Disabled, 0));
	f1.cDTSActiveType.options.add(new Option(Enabled, 1));
	f1.cDTSActiveType.options.add(new Option(Auto, 2));
	var MustSet = f2.hcMustSetManualTime.value;
	if(1 == MustSet)
	{
		var req = "do?id=4&id=1&Operation=GetDivContent&DivName=divSetManualTime";
		$.ajax({
			url: req,  
			cache: false,
			success: function(html){
			}
		});
	}
	var MustDelay = f2.hcMustDelayPostDTS.value;
	if(1 == MustDelay)
	{
		var req = "do?id=4&id=1&Operation=GetDivContent&DivName=divDelayPostDTS";
		$.ajax({
			url: req,  
			cache: false,
			success: function(html){
			}
		});
	}	
	if("undefined" != typeof(MODELID))
	{
		if("59" == MODELID)
		{
			f1.cDisplayMode.options.remove(3); //R59 has no rolling mode	
			f1.cDisplayMode.options.add(new Option(DayLabel + " " + DateLabel, 4));	
		}	
		if("63" == MODELID || "65" == MODELID || "67" == MODELID)
		{
			f1.cDisplayMode.options.remove(3); //R63G R65G R67G has no rolling mode	
		}	
	}
	AddOptionsOfTZ();
	AddOptionsOfWeekItem();
	SubLoadCfg();
}
function AddOptionsOfTZ()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var tmpValue = f2.hcTimeZoneList.value;
	var tmpValue1 = f2.hcTimeZoneNameList.value;
	var desValue;
	var tzList = tmpValue.split(SplitSymbol);
	var tzNameList = tmpValue1.split(PoundSplit);
	var tzListNum = f2.hcTimeZoneNum.value;
	var isInExist = false;
	for(var i=0; i < tzListNum; i++)
	{
		f1.cTimeZone.options.add(new Option(tzList[i]+" "+tzNameList[i], i));
	}
}
function FindTzByIdx(id)
{
	var f2 = document.forms["hiddenValForm"];
	var tmpValue = f2.hcTimeZoneList.value;
	var tzList = tmpValue.split(SplitSymbol);
	return tzList[id];	
}

function FindIdByTz(tmptzValue)
{
	var f2 = document.forms["hiddenValForm"];
	var tmpValue = f2.hcTimeZoneList.value;
	var tzListNum = f2.hcTimeZoneNum.value;
	var tzList = tmpValue.split(SplitSymbol);
	for(var i=0; i < tzListNum; i++)
	{
		if(tmptzValue == tzList[i])
		{
			return i;
		}
	}
	return -1;
}

function FindTzNameByIdx(id)
{
	var f2 = document.forms["hiddenValForm"];
	var tmpValue1 = f2.hcTimeZoneNameList.value;
	var tzNameList = tmpValue1.split(PoundSplit);
	return tzNameList[id];
}
function AddOptionsOfWeekItem()
{
	var f1 = document.forms["body_form"];
	var tmpSplit = "&";
	var arrMonths = AllMonths.split(tmpSplit);
	var arrWeekDays = AllWeekDays.split(tmpSplit);
	
	for(var i=0; i<12; i++)
	{
		f1.cStartMonth.options.add(new Option(arrMonths[i], i+1));
		f1.cEndMonth.options.add(new Option(arrMonths[i], i+1));
	}	
	
	for(var i=1; i<=5; i++)
	{
		f1.cStartWeekOfMonth.options.add(new Option(AllDTSIdx[i-1], i));
		f1.cEndWeekOfMonth.options.add(new Option(AllDTSIdx[i-1], i));
	}
	
	f1.cStartDayOfWeek.options.add(new Option(arrWeekDays[0], 7));
	f1.cEndDayOfWeek.options.add(new Option(arrWeekDays[0], 7));	
	for(var i=0; i<6; i++)
	{
		f1.cStartDayOfWeek.options.add(new Option(arrWeekDays[(i+1)%7], i+1));
		f1.cEndDayOfWeek.options.add(new Option(arrWeekDays[(i+1)%7], i+1));
	}
}
function SetByWeekItemDef()
{
	var f1 = document.forms["body_form"];
	f1.cStartMonth.value = 1;
	f1.cStartWeekOfMonth.value = 1;
	f1.cStartDayOfWeek.value = 1;
	f1.cStartHour.value = 0;
	
	f1.cEndMonth.value = 12;
	f1.cEndWeekOfMonth.value = 4;
	f1.cEndDayOfWeek.value = 7;
	f1.cEndHour.value = 23;
}
function SetByDateItemDef()
{
	var f1 = document.forms["body_form"];
	f1.cStMonth.value = 1;
	f1.cStDay.value = 1;
	f1.cStHour.value = 0;
	f1.cEdMonth.value = 12;
	f1.cEdDay.value = 31;
	f1.cEdHour.value = 23;
}
function DoChangeByManualTime()
{
	var f1 = document.forms["body_form"];
	// on the page 0:DHCP 1:STATIC IP 2:PPPOE
	if(f1.cByManualTime[0].checked)
	{
		SetManualType();
	}
	else
	{
		SetAutoType();
		CheckDTSActive();
	}
}
function SetManualType()
{
	var f1 = document.forms["body_form"];
	f1.cYear.disabled = false;
	f1.cMonth.disabled = false;
	f1.cDay.disabled = false;
	f1.cHour.disabled = false;
	f1.cMinute.disabled = false;
	f1.cSecond.disabled = false;
	
	f1.cPrimaryNTPServer.disabled = true;
	f1.cSecondryNTPServer.disabled = true;
	f1.cUpdateInterval.disabled = true;
	f1.cTimeZone.disabled = true;
	setDayLightSavingTypeDisabled(true);
	f1.cDTSActiveType.disabled = true;
	
	f1.cStMonth.disabled = true;
	f1.cStDay.disabled = true;
	f1.cStHour.disabled = true;
	f1.cEdMonth.disabled = true;
	f1.cEdDay.disabled = true;
	f1.cEdHour.disabled = true;
	
	f1.cStartMonth.disabled = true;
	f1.cStartWeekOfMonth.disabled = true;
	f1.cStartDayOfWeek.disabled = true;
	f1.cStartHour.disabled = true;
	f1.cEndMonth.disabled = true;
	f1.cEndWeekOfMonth.disabled = true;
	f1.cEndDayOfWeek.disabled = true;
	f1.cEndHour.disabled = true;
	f1.cOffSet.disabled = true;
}
function SetAutoType()
{
	var f1 = document.forms["body_form"];
	f1.cYear.disabled = true;
	f1.cMonth.disabled = true;
	f1.cDay.disabled = true;
	f1.cHour.disabled = true;
	f1.cMinute.disabled = true;
	f1.cSecond.disabled = true;	
	
	f1.cPrimaryNTPServer.disabled = false;
	f1.cSecondryNTPServer.disabled = false;
	f1.cUpdateInterval.disabled = false;
	f1.cTimeZone.disabled = false;
	f1.cDTSActiveType.disabled = false;
	setDayLightSavingTypeDisabled(false);
	f1.cOffSet.disabled = false;
	DoChangeDayLightSavingType();
}
function setDayLightSavingTypeDisabled(flag)
{
	var f1 = document.forms["body_form"];
	f1.cDayLightSavingType[0].disabled = flag;
	f1.cDayLightSavingType[1].disabled = flag;	
}
function CheckDTSActive()
{
	var f1 = document.forms["body_form"];
	if(0 == f1.cDTSActiveType.value || 2 == f1.cDTSActiveType.value)
	{SetSavingDateSts(true);SetSavingWeekSts(true);setDayLightSavingTypeDisabled(true);f1.cOffSet.disabled = true;}
	else{DoChangeDayLightSavingType();setDayLightSavingTypeDisabled(false);f1.cOffSet.disabled = false;}
}
function DoChangeDayLightSavingType()
{
	var f1 = document.forms["body_form"];
	// on the page for PC Port 0:Bridge 1:Router
	if(f1.cDayLightSavingType[0].checked)
	{
		SetSavingByDate();
	}
	else
	{
		SetSavingByWeek();
	}
}
function SetSavingByDate()
{
	var f1 = document.forms["body_form"];
	SetSavingDateSts(false);
	SetSavingWeekSts(true);
}
function SetSavingDateSts(flag)
{
	var f1 = document.forms["body_form"];
	f1.cStMonth.disabled = flag;
	f1.cStDay.disabled = flag;
	f1.cStHour.disabled = flag;
	f1.cEdMonth.disabled = flag;
	f1.cEdDay.disabled = flag;
	f1.cEdHour.disabled = flag;	
}
function SetSavingWeekSts(flag)
{
	var f1 = document.forms["body_form"];
	f1.cStartMonth.disabled = flag;
	f1.cStartWeekOfMonth.disabled = flag;
	f1.cStartDayOfWeek.disabled = flag;
	f1.cStartHour.disabled = flag;
	f1.cEndMonth.disabled = flag;
	f1.cEndWeekOfMonth.disabled = flag;
	f1.cEndDayOfWeek.disabled = flag;
	f1.cEndHour.disabled = flag;
}
function SetSavingByWeek()
{
	var f1 = document.forms["body_form"];
	SetSavingDateSts(true);
	SetSavingWeekSts(false);
}
function CheckCommitData()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var strSubmData = "";
	var flag = false;
	var DTSTypeChanged = false;
	
	if(f1.cWebLanguage.value != f2.hcWebLanguage.value)
	{
		strSubmData = strSubmData + "&cWebLanguage=" + f1.cWebLanguage.value;
	}
	if(f1.cLCDLanguage.value != f2.hcLCDLanguage.value)
	{
		strSubmData = strSubmData + "&cLCDLanguage=" + PostEncode(f1.cLCDLanguage.value);
	}	
	
	if(f1.cDTSActiveType.value != f2.hcDTSActiveType.value)
	{
		strSubmData = strSubmData + "&cDTSActiveType=" + f1.cDTSActiveType.value;
	}	
			
	// default value
	if( f1.cByManualTime[1].checked == true && f2.hcByManualTime.value == 0)
	{
		strSubmData = strSubmData + "&cByManualTime=1";
	}
	
	if( f1.cByManualTime[0].checked == true )
	{
		if(f2.hcByManualTime.value == 1)
		{
			strSubmData = strSubmData + "&cByManualTime=0";			
		}
//		if(!IsAnInterger(f1.cYear.value) && !CheckRangeOfNumber(f1.cYear.value, 1970, 2037))		
//		{
//			SetInputBGColor("cYear");
//			flag = true;			
//		}
		var DateRightResult = IsDateRight(f1.cYear.value, f1.cMonth.value, f1.cDay.value);
		if(1 == DateRightResult[0])
		{
			SetInputBGColor("cYear");
			flag = true;
		}
		
		if(1 == DateRightResult[1])
		{
			SetInputBGColor("cMonth");
			flag = true;
		}

		if(1 == DateRightResult[2])
		{
			SetInputBGColor("cDay");
			flag = true;
		}
		
		if(false == IsHour(f1.cHour.value))
		{
			SetInputBGColor("cHour");
			flag = true;
		}
		
		if(false == IsMinuteOrSec(f1.cMinute.value))
		{
			SetInputBGColor("cMinute");
			flag = true;
		}
		
		if(false == IsMinuteOrSec(f1.cSecond.value))
		{
			SetInputBGColor("cSecond");
			flag = true;
		}
		
		if("undefined" != typeof(MODELID))
		{
			if("47" == MODELID)
			{
				var tmpMonth = Number(f1.cMonth.value);	
			}
			else
			{
				var tmpMonth = Number(f1.cMonth.value)-1;
			}	
		}

		var tmpStr = f1.cYear.value + TimeSplit
							+ tmpMonth + TimeSplit
							+ f1.cDay.value + TimeSplit
							+ f1.cHour.value + TimeSplit
							+ f1.cMinute.value + TimeSplit
							+ f1.cSecond.value;
		if(flag)
		{
		}  //hcByManualTime = 0 : manual ,1 :Auto
		else if(1 == f2.hcByManualTime.value)
		{
			if(!confirm(ManualSetTimeWarning))
			{
				SubLoadCfg();
				return DataCheckResult;
			}
		}
		if(f2.hcSetManualDateTime.value != tmpStr)
		{
			strSubmData += "&cSetManualDateTime=";
			strSubmData = strSubmData + tmpStr;
		}
		// 可以根据情况特殊处理，check只用来验证数据
	}
	 
	tmpValue = f2.hcDayLightSavingType.value;
	var DSTRealTOri = GetRealSaveTypeOfDST(tmpValue);
	var ErrVal = false;
	if("0" != tmpValue && "1" != tmpValue)
	{
		ErrVal = true;
	}
	if( f1.cDayLightSavingType[0].checked == true && (1 == DSTRealTOri || true == ErrVal))
	{
		DTSTypeChanged = true;
		strSubmData = strSubmData + "&cDayLightSavingType=0";
	}
	else if( f1.cDayLightSavingType[1].checked == true && (0 == DSTRealTOri || true == ErrVal)) 
	{
		DTSTypeChanged = true;
		strSubmData = strSubmData + "&cDayLightSavingType=1";
	}
	
	if(f1.cDateFormat.value != f2.hcDateFormat.value)
	{
		strSubmData = strSubmData + "&cDateFormat=" + f1.cDateFormat.value;
	}
	if(f1.cOffSet.value != f2.hcOffSet.value&&1==f1.cDTSActiveType.value)
	{
		if(!IsInRangeIncMinus(f1.cOffSet.value, 300, 300))
		{
			SetInputBGColor("cOffSet");
			flag = true;
		}
		// to do
		strSubmData = strSubmData + "&cOffSet=" + Number(f1.cOffSet.value);
	}
	if(false == f1.cPrimaryNTPServer.disabled)
	{ 
		if(f1.cPrimaryNTPServer.value != f2.hcPrimaryNTPServer.value)
		{
			if(!NotContainInvalid_NotEmpty(f1.cPrimaryNTPServer.value))
			{
				SetInputBGColor("cPrimaryNTPServer");
				flag = true;
			}
		strSubmData = strSubmData + "&cPrimaryNTPServer=" + f1.cPrimaryNTPServer.value;
		}
	}
	if(false == f1.cPrimaryNTPServer.disabled)
	{	
		if(f1.cSecondryNTPServer.value != f2.hcSecondryNTPServer.value)
		{
		if(!NotContainInvalid(f1.cSecondryNTPServer.value))
		{
			SetInputBGColor("cSecondryNTPServer");
			flag = true;
		}		
		strSubmData = strSubmData + "&cSecondryNTPServer=" + f1.cSecondryNTPServer.value;
		}
	}

	if(f1.cTimeFormat.value != f2.hcTimeFormat.value)
	{
		strSubmData = strSubmData + "&cTimeFormat=" + f1.cTimeFormat.value;
	}
	if(f1.cDisplayMode.value != f2.hcDisplayMode.value)
	{
		strSubmData = strSubmData + "&cDisplayMode=" + f1.cDisplayMode.value;
	}

	if(f1.cTimeZone.value != f2.hcTimeZoneNameIndex.value)
	{
		if(Number(f1.cTimeZone.value) < 0 || "" == f1.cTimeZone.value)
		{
		}
		else{strSubmData = strSubmData + "&cTimeZone=" + FindTzByIdx(f1.cTimeZone.value);
		strSubmData = strSubmData + "&cTimeZoneName=" + PostEncode(FindTzNameByIdx(f1.cTimeZone.value));}
	}
	
	if(f1.cUpdateInterval.value != f2.hcUpdateInterval.value)
	{
		if(!IsAnInterger(f1.cUpdateInterval.value) || Number(f1.cUpdateInterval.value) < 3600)
		{
			SetInputBGColor("cUpdateInterval");
			flag = true;
		}
		strSubmData = strSubmData + "&cUpdateInterval=" + Number(f1.cUpdateInterval.value);
	}

	var tmpFlag = 0;
	if(f1.cDayLightSavingType[0].checked == true)
	{
		tmpFlag = 0;
	}
	else
	{
		tmpFlag = 1;
	}
	
	if(1==f1.cDTSActiveType.value)
	{strSubmData = GetSubmitDTSTime(strSubmData, tmpFlag, DTSTypeChanged);}
	if(DataCheckResult == strSubmData)
	{flag = true;}
	if(true == flag)
	{
		return DataCheckResult;
	}
	return strSubmData;
}
function CheckDataChanged(destURL)
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var dataChangedWarnFlag = 0;
	var tmpValue = f2.hcDayLightSavingType.value;
	var DSTRealTOri = GetRealSaveTypeOfDST(tmpValue);
	var dayLightSavingT = GetRealSaveTypeOfDST(tmpValue);
	var ErrVal = false;

	if(f1.cWebLanguage.value != f2.hcWebLanguage.value
			||f1.cWebLanguage.value != f2.hcWebLanguage.value
	  	||f1.cDateFormat.value != f2.hcDateFormat.value
	  	||f1.cTimeFormat.value != f2.hcTimeFormat.value
	  	||f1.cDisplayMode.value != f2.hcDisplayMode.value)
		dataChangedWarnFlag = 1;

	if(f1.cByManualTime[0].checked == true && f2.hcByManualTime.value == 1 )
		dataChangedWarnFlag = 1;
	if(f1.cByManualTime[0].checked == true)
	{
		var tmpMonth = Number(f1.cMonth.value)-1;
		if("undefined" != typeof(MODELID))
		{
			if("47" == MODELID)
			{
				var tmpMonth = Number(f1.cMonth.value);	
			}
			else
			{
				var tmpMonth = Number(f1.cMonth.value)-1;
			}	
		}
		var tmpStr = f1.cYear.value + TimeSplit
							+ tmpMonth + TimeSplit
							+ f1.cDay.value + TimeSplit
							+ f1.cHour.value + TimeSplit
							+ f1.cMinute.value + TimeSplit
							+ f1.cSecond.value;
		if(f2.hcSetManualDateTime.value != tmpStr || 1 == f2.hcByManualTime.value)
		dataChangedWarnFlag = 1;
	}
	if( f1.cByManualTime[1].checked == true && f2.hcByManualTime.value == 0)
		dataChangedWarnFlag = 1;	

	if(f1.cTimeZone.value != f2.hcTimeZoneNameIndex.value && "1" != reSubmitTZ)
		dataChangedWarnFlag = 1;
	if(f1.cPrimaryNTPServer.value != f2.hcPrimaryNTPServer.value 
		|| f1.cSecondryNTPServer.value != f2.hcSecondryNTPServer.value
		|| f1.cUpdateInterval.value != f2.hcUpdateInterval.value)
		dataChangedWarnFlag = 1;
	if(f1.cDTSActiveType.value != f2.hcDTSActiveType.value)
			dataChangedWarnFlag = 1;
	if(f1.cOffSet.value != f2.hcOffSet.value && 1 == f1.cDTSActiveType.value)
		dataChangedWarnFlag = 1;
	if(f1.cDayLightSavingType[0].checked == true && "0" != dayLightSavingT)
		dataChangedWarnFlag = 1;
	if(f1.cDayLightSavingType[1].checked == true && "1" != dayLightSavingT) 
		dataChangedWarnFlag = 1;

	if(true == f1.cDayLightSavingType[0].checked || true == f1.cDayLightSavingType[1].checked )
	{
		if(f1.cDayLightSavingType[0].checked == true)
		{
			if(true == CheckStartDTChange(0) || true == CheckEndDTChange(0))
			dataChangedWarnFlag = 1;
		}
		else
		{
			if(true == CheckStartDTChange(1) || true == CheckEndDTChange(1))
			dataChangedWarnFlag = 1;
		}
	}
	if(0 == dataChangedWarnFlag)
	{
		Relocate(destURL);
		return false;
	}
	if(!confirm(SavePageConfirm))
	{
		return false;
	}
	else
	{
		Relocate(destURL);
		return false;
	}
}
function GetSubmitDTSTime(strSubmData, tmpFlag, flagChange)
{
	var f1 = document.forms["body_form"];
	if(0 == tmpFlag)
	{
		var tmpF = false;
		if(!IsMonth(f1.cStMonth.value))
		{SetInputBGColor("cStMonth");tmpF = true;}
		if(!IsMonth(f1.cEdMonth.value))
		{SetInputBGColor("cEdMonth");tmpF = true;}
		if(!IsDay(f1.cStMonth.value, f1.cStDay.value))
		{SetInputBGColor("cStDay");tmpF = true;}
		if(!IsDay(f1.cEdMonth.value, f1.cEdDay.value))
		{SetInputBGColor("cEdDay");tmpF = true;}
		if(!IsHour(f1.cStHour.value))
		{SetInputBGColor("cStHour");tmpF = true;}
		if(!IsHour(f1.cEdHour.value))
		{SetInputBGColor("cEdHour");tmpF = true;}
		if(true == tmpF)
		{
			return DataCheckResult;
		}
		if(true == flagChange || CheckStartDTChange(0))
		{
			strSubmData += "&cStartDateTime=";
			strSubmData += ValueOfStartDT(0);
		}
		if(true == flagChange || CheckEndDTChange(0))
		{
			strSubmData += "&cEndDateTime=";
			strSubmData += ValueOfEndDT(0);
		}
	}
	else
	{
		if(!IsHour(f1.cStartHour.value))
		{SetInputBGColor("cStartHour");}
		if(!IsHour(f1.cEndHour.value))
		{SetInputBGColor("cEndHour");}
		if(!IsHour(f1.cStartHour.value) || !IsHour(f1.cEndHour.value))
		{return DataCheckResult;}		
		if(true == flagChange || CheckStartDTChange(1))
		{
			strSubmData += "&cStartDateTime=";
			strSubmData += ValueOfStartDT(1);
		}
		if(true == flagChange || CheckEndDTChange(1))
		{
			strSubmData += "&cEndDateTime=";
			strSubmData += ValueOfEndDT(1);
		}
	}
	return strSubmData;
}
function ChangeLang(LangType)
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	var strSubmData = "begin";

	var targetCfg = "cWebLanguage";
	if(!LangType)
	{
		strSubmData = strSubmData + "&cWebLanguage=" + f1.cWebLanguage.value;
	}
	else if('LCD' == LangType)
	{
		strSubmData = strSubmData + "&cLCDLanguage=" + PostEncode(f1.cLCDLanguage.value);
	}
	strSubmData = strSubmData + "&Operation=Submit";
	strSubmData = strSubmData + "&SubmitData=end";
	f3.SubmitData.value = strSubmData;
	DoForm3Submit(f3);
}
function ValueOfStartDT(flag)
{
	var f1 = document.forms["body_form"];
	var res = "";
	if(flag == "0")
	{
		res = res + Number(f1.cStMonth.value) + TimeSplit;
		res = res + Number(f1.cStDay.value) + TimeSplit;
		res = res + Number(f1.cStHour.value);
	}
	else
	{
		res = res + f1.cStartMonth.value + TimeSplit;
		res = res + f1.cStartWeekOfMonth.value + TimeSplit;
		res = res + f1.cStartDayOfWeek.value + TimeSplit;
		res = res + Number(f1.cStartHour.value);
	}
	return res;	
}
function ValueOfEndDT(flag)
{
	var f1 = document.forms["body_form"];
	var res = "";
	if(flag == "0")
	{
		res = res + Number(f1.cEdMonth.value) + TimeSplit;
		res = res + Number(f1.cEdDay.value) + TimeSplit;
		res = res + Number(f1.cEdHour.value);
	}
	else
	{
		res = res + f1.cEndMonth.value + TimeSplit;
		res = res + f1.cEndWeekOfMonth.value + TimeSplit;
		res = res + f1.cEndDayOfWeek.value + TimeSplit;
		res = res + Number(f1.cEndHour.value);
	}
	return res;
}
//夏令时时间是否改变
function CheckStartDTChange(flag)
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	if(1 != f1.cDTSActiveType.value)
	{
		return false;
	}
	if("" == f2.hcStartDateTime.value)
	{
		return true;
	}
	var arrStartDateTime = f2.hcStartDateTime.value.split(TimeSplit);
	
	if("0" == flag)
	{
		if(f1.cStMonth.value != arrStartDateTime[0]
		||f1.cStDay.value != arrStartDateTime[1]
		||f1.cStHour.value != arrStartDateTime[2])
		{
			return true;
		}
	}
	else
	{
		if(f1.cStartMonth.value != arrStartDateTime[0]
		||f1.cStartWeekOfMonth.value != arrStartDateTime[1]
		||f1.cStartDayOfWeek.value != arrStartDateTime[2]
		||f1.cStartHour.value != arrStartDateTime[3])
		{
			return true;
		}
	}
	return false;	
}
function CheckEndDTChange(flag)
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	if(1 != f1.cDTSActiveType.value)
	{
		return false;
	}
	if("" == f2.hcEndDateTime.value)
	{
		return true;
	}	
	var arrEndDateTime = f2.hcEndDateTime.value.split(TimeSplit);
	
	if("0" == flag)
	{
		if(f1.cEdMonth.value != arrEndDateTime[0]
		||f1.cEdDay.value != arrEndDateTime[1]
		||f1.cEdHour.value != arrEndDateTime[2])
		{
			return true;
		}
	}
	else
	{
		if(f1.cEndMonth.value != arrEndDateTime[0]
		||f1.cEndWeekOfMonth.value != arrEndDateTime[1]
		||f1.cEndDayOfWeek.value != arrEndDateTime[2]
		||f1.cEndHour.value != arrEndDateTime[3])
		{
			return true;
		}
	}
	return false;
}