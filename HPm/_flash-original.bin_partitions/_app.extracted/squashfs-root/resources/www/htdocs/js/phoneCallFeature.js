function LoadLang()
{
	var tmp = Phone + "-" + CallFeature;
	LoadCommonResources(tmp);
	document.getElementById("tForwardAlways").innerHTML = ForwardAlways;
	document.getElementById("tAlwaysTarget").innerHTML = TargetNumber;
	document.getElementById("tAlwaysOnCode").innerHTML = OnCode;
	document.getElementById("tAlwaysOffCode").innerHTML = OffCode;
	document.getElementById("tForwardBusy").innerHTML = ForwardBusy;
	document.getElementById("tBusyTarget").innerHTML = TargetNumber;
	document.getElementById("tBusyOnCode").innerHTML = OnCode;
	document.getElementById("tBusyOffCode").innerHTML = OffCode;
	document.getElementById("tForwardNoAnswer").innerHTML = ForwardNoAnswer;
	document.getElementById("tNoAnswerRingTime").innerHTML = NoAnswerRingTime;
	document.getElementById("tNoAnswerTarget").innerHTML = TargetNumber;
	document.getElementById("tNoAnswerOnCode").innerHTML = OnCode;
	document.getElementById("tNoAnswerOffCode").innerHTML = OffCode;
	document.getElementById("tCallWaitingEnable").innerHTML = CallWaitingEnable;
	document.getElementById("tCallWaitingTone").innerHTML = CallWaitingTone;
	document.getElementById("tCallWaitingOnCode").innerHTML = ("undefined" != typeof(OnCode))?OnCode:"On Code";
	document.getElementById("tCallWaitingOffCode").innerHTML = ("undefined" != typeof(OffCode))?OffCode:"Off Code";
	document.getElementById("tSemiAttendedTrans").innerHTML = SemiAttendedTrans;
	document.getElementById("tBlindTransOnHook").innerHTML = BlindTransOnHook;
	document.getElementById("tAttendedTransOnHook").innerHTML = AttendedTransOnHook;
	document.getElementById("tTransOnConferenceHang").innerHTML = TransOnConferenceHang;
	document.getElementById("tFwdInternational").innerHTML = FwdInternational;
	document.getElementById("tAutoRedialEnableLabel").innerHTML = AutoRedial;
	document.getElementById("tAutoRedialIntervalLabel").innerHTML = AutoRedialInterval;
	document.getElementById("tAutoRedialTimesLabel").innerHTML = AutoRedialTimes;
	document.getElementById("tAutoRedialIntervalRange").innerHTML = "(1~300"+SecondAbbr+")";
	document.getElementById("tAutoRedialTimesRange").innerHTML = "(1~100)";
	document.getElementById("tReturnCodeRefuse").innerHTML = ("undefined" != typeof(ReturnCodeRefuse))?ReturnCodeRefuse:"Return Code Refuse";
	document.getElementById("tReturnCodeDND").innerHTML = ("undefined" != typeof(ReturnCodeDND))?ReturnCodeDND:"Return Code DND";
	document.getElementById("tDNDEnable").innerHTML = document.getElementById("tDND").innerHTML = DND;
	document.getElementById("tDNDOnCode").innerHTML = DNDOnCode;
	document.getElementById("tDNDOffCode").innerHTML = DNDOffCode;
	document.getElementById("tIntercomAllow").innerHTML = FunctionActive;
	document.getElementById("tIntercomMute").innerHTML = IntercomMute;
	document.getElementById("tIntercomTone").innerHTML = IntercomTone;
	document.getElementById("tIntercomBarge").innerHTML = IntercomBarge;
	document.getElementById("tHideDTMF").innerHTML = HideDTMF;
	document.getElementById("tHideDTMFDelay").innerHTML = HideDTMFDelay;
	document.getElementById("tDTMFRepetition").innerHTML = DTMFRepetition;
	document.getElementById("tDTMFReplaceTrans").innerHTML = DTMFReplaceTrans;
	document.getElementById("tTransSendDTMF").innerHTML = TransSendDTMF;
	document.getElementById("tPlayHoldTone").innerHTML = PlayHoldTone;
	document.getElementById("tPlayHoldToneDelay").innerHTML = PlayHoldToneDelay;
	document.getElementById("tPasswdCall").innerHTML = PasswdCall;
	document.getElementById("tPasswdPrefix").innerHTML = PasswdPrefix;
	document.getElementById("tPasswdLength").innerHTML = PasswdLength;
	document.getElementById("tLogOnWizard").innerHTML = LogOnWizard;
	document.getElementById("tAutoRedial").innerHTML = AutoRedial;
	document.getElementById("tEmergency").innerHTML = Emergency;
	document.getElementById("tCallCompletion").innerHTML = CallCompletion;
	document.getElementById("tTimeoutForDialnowRule").innerHTML = TimeoutForDialnowRule;
	document.getElementById("tRFC2543Hold").innerHTML = RFC2543Hold;
	document.getElementById("tUseOutboundProxy").innerHTML = UseOutboundProxy;
	document.getElementById("tIsDeal180").innerHTML = IsDeal180;
	document.getElementById("tAllowMute").innerHTML = AllowMute;
	document.getElementById("tAutoAnswerDelay").innerHTML = AutoAnswerDelay;
	document.getElementById("tSIPNotify").innerHTML = SIPNotify;
	document.getElementById("tSaveCallHistory").innerHTML = SaveCallHistory;
	document.getElementById("tMulticastCodec").innerHTML = MulticastCodec;
	document.getElementById("tKeydownCallDelay").innerHTML = KeydownCallDelay;
	document.getElementById("tFlashHookTime").innerHTML = FlashHookTime;
	document.getElementById("tSRemoteName").innerHTML = SRemoteName;
	document.getElementById("tSRemoteNameFlashTime").innerHTML = SRemoteNameFlashTime;
	document.getElementById("tBusyToneDelay").innerHTML = BusyToneDelay;
	document.getElementById("tCallPickUp").innerHTML = CallPickUp;
	document.getElementById("tVisualBLFPickUpAlert").innerHTML = VisualBLFPickUpAlert;
	document.getElementById("tCallPark").innerHTML = CallPark;
	document.getElementById("tEnableCallPark").innerHTML = FunctionActive;
	document.getElementById("tCallParkAccount").innerHTML = Account;
	document.getElementById("tCallParkTarget").innerHTML = Target;
	document.getElementById("tForwardTransfer").innerHTML = ForwardTransfer;
	document.getElementById("tCallWaiting").innerHTML = CallWaiting;
	document.getElementById("tOthers").innerHTML = Others;
	document.getElementById("tIntercom").innerHTML = Intercom;
	document.getElementById("tHotLine").innerHTML = HotLine;
	document.getElementById("tACD").innerHTML = ACD;
	document.getElementById("tACDActAuto").innerHTML = ACDActAuto;
	document.getElementById("tACDActAutoTimer").innerHTML = ACDActAutoTimer;
	document.getElementById("tACDLoginAuto").innerHTML = ACDPwdRequired;
	document.getElementById("tACDActAutoTimerRange").innerHTML = "(0~180"+SecondAbbr+")";
	document.getElementById("tHotLineNumber").innerHTML = NumberLabel;
	document.getElementById("tHotLineDelay").innerHTML = Delay;
	document.getElementById("tHotLineEnable").innerHTML = FunctionActive;
	document.getElementById("tRemoteControl").innerHTML = RemoteControl;
	
	document.getElementById("tKeypadLock").innerHTML = KeypadLock;
	document.getElementById("tKeypadLockType").innerHTML = KeypadLockType;
	document.getElementById("tKeypadUnLockPIN").innerHTML = KeypadUnlockPIN;
	document.getElementById("tKeypadLockTimeout").innerHTML = KeypadLockTimeout;
	document.getElementById("tKeypadLockTimeoutRange").innerHTML = "(0~3600" + SecondAbbr + ")" ;
	document.getElementById("tEmergencyCall").innerHTML = Emergency;
	
	document.getElementById("tKeyAsSend").innerHTML = document.getElementById("tKeyAsSendSetting").innerHTML = KeyAsSend;
	document.getElementById("tCallCompletion").innerHTML = document.getElementById("tCallCompletionEnabled").innerHTML = CallCompletion;
	document.getElementById("tAllowedIPList").innerHTML = AllowedAccessIPList;
	
	document.getElementById("tAccount").innerHTML = document.getElementById("tDNDAccount").innerHTML= ("undefined" != typeof(Account))?Account:"Account";
	document.getElementById("tMode").innerHTML = ("undefined" != typeof(Mode))?Mode:"Mode";
	document.getElementById("tFeatureKeySync").innerHTML = ("undefined" != typeof(FeatureKeySync))?FeatureKeySync:"FeatureKeySync";
	document.getElementById("tModeSelect").innerHTML = ("undefined" != typeof(Mode))?Mode:"Mode";
	document.getElementById("tPhone").innerHTML = ("undefined" != typeof(Phone))?Phone:"Phone";
	document.getElementById("tCustom").innerHTML = ("undefined" != typeof(Custom))?Custom:"Custom";
	document.getElementById("tEarlyDtmf").innerHTML = ("undefined" != typeof(EarlyDtmf))?EarlyDtmf:"Early DTMF";
	document.getElementById("tDirectIP").innerHTML = ("undefined" != typeof(DirectIP))?DirectIP:"Direct IP";
		
	if("undefined" != typeof(CallSettings)){document.getElementById("tCallSettings").innerHTML = CallSettings};	
	if("undefined" != typeof(ForcedVoice)){document.getElementById("tVsipIsOpenForcedVoice").innerHTML = ForcedVoice};
	if("undefined" != typeof(DialingMatchTpye)){document.getElementById("tVsipDialingMatchType").innerHTML = DialingMatchTpye};	
	if("undefined" != typeof(MissedCallTone)){document.getElementById("tVsipMissedCallTone").innerHTML = MissedCallTone};
	if("undefined" != typeof(LongDistancePhoneCallPrefix)){document.getElementById("tLongDistanceMobilePrefix").innerHTML = LongDistancePhoneCallPrefix};	
	if("undefined" != typeof(ChooseOutGoingLine)){document.getElementById("tVsipIsOpenChooseOutgingLine").innerHTML = ChooseOutGoingLine};
	if("undefined" != typeof(CallerLocation)){document.getElementById("tVsipCallerLocation").innerHTML = CallerLocation};	
}

function LoadCfg()
{
	LoadLang();
	if(MODELID)
	{
		if("51" == MODELID|| "50" == MODELID)
		{
			document.getElementById('PhoneCF_divCallPickUp').style.display = "none";
			document.getElementById('trVisualBLFPickUpAlert').style.display = "none";
			document.getElementById('PhoneCF_divACD').style.display = "none";
			document.getElementById('trCallParkAccount').style.display = "none";
		}	
	}
	DelayShow();
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	f1.cForwardAlways.options.add(new Option(Disabled, 0));
	f1.cForwardBusy.options.add(new Option(Disabled, 0));
	f1.cForwardNoAnswer.options.add(new Option(Disabled, 0));
	f1.cCallWaitingEnable.options.add(new Option(Disabled, 0));
	f1.cAutoRedialEnable.options.add(new Option(Disabled, 0));
	f1.cCallWaitingTone.options.add(new Option(Disabled, 0));
	f1.cDNDEnabled.options.add(new Option(Disabled, 0));
	f1.cSemiAttendedTrans.options.add(new Option(Disabled, 0));
	f1.cBlindTransOnHook.options.add(new Option(Disabled, 0));	
	f1.cAttendedTransOnHook.options.add(new Option(Disabled, 0));
	f1.cTransOnConferenceHang.options.add(new Option(Disabled, 0));
	f1.cFwdInternational.options.add(new Option(Disabled, 0));
	f1.cVisualBLFPickUpAlert.options.add(new Option(Disabled, 0));
	f1.cEnableCallPark.options.add(new Option(Disabled, 0));
	
	f1.cForwardAlways.options.add(new Option(Enabled, 1));
	f1.cForwardBusy.options.add(new Option(Enabled, 1));
	f1.cForwardNoAnswer.options.add(new Option(Enabled, 1));
	f1.cCallWaitingEnable.options.add(new Option(Enabled, 1));
	f1.cAutoRedialEnable.options.add(new Option(Enabled, 1));
	f1.cCallWaitingTone.options.add(new Option(Enabled, 1));
	f1.cDNDEnabled.options.add(new Option(Enabled, 1));
	f1.cSemiAttendedTrans.options.add(new Option(Enabled, 1));
	f1.cBlindTransOnHook.options.add(new Option(Enabled, 1));	
	f1.cAttendedTransOnHook.options.add(new Option(Enabled, 1));
	f1.cTransOnConferenceHang.options.add(new Option(Enabled, 1));
	f1.cFwdInternational.options.add(new Option(Enabled, 1));
	f1.cVisualBLFPickUpAlert.options.add(new Option(Enabled, 1));
	f1.cEnableCallPark.options.add(new Option(Enabled, 1));
	f1.cCallParkAccount.options.add(new Option(Auto, 0));
	for(var i=1; i <= f2.hcAccountNum.value; i++)
	{
		var tmp = Account+i;
		f1.cCallParkAccount.options.add(new Option(tmp, i));
	}
	
	var arrReturnCodeText = f2.hcReturnCode_OptionTextList.value.split(SplitSymbol);
	var arrReturnCodeValue = f2.hcReturnCode_OptionValueList.value.split(SplitSymbol);
	for(var i=0; i < f2.hcReturnCode_OptionNum.value; i++)
	{
		f1.cReturnCodeRefuse.options.add(new Option(arrReturnCodeText[i], arrReturnCodeValue[i]));
		f1.cReturnCodeDND.options.add(new Option(arrReturnCodeText[i], arrReturnCodeValue[i]));
	}
	
	f1.cMulticastCodec.options.add(new Option("PCMU", 0));
	f1.cMulticastCodec.options.add(new Option("PCMA", 8));
	f1.cMulticastCodec.options.add(new Option("G722", 9));
	f1.cMulticastCodec.options.add(new Option("G729", 18));
	f1.cBusyToneDelay.options.add(new Option("0", 0));
	f1.cBusyToneDelay.options.add(new Option("3", 1));
	f1.cBusyToneDelay.options.add(new Option("5", 2));
	f1.cDTMFRepetition.options.add(new Option(1, 0));
	f1.cDTMFRepetition.options.add(new Option(2, 1));
	f1.cDTMFRepetition.options.add(new Option(3, 2));
	f1.cIntercomAllow.options.add(new Option(Disabled, 0));
	f1.cIntercomMute.options.add(new Option(Disabled, 0));	
	f1.cIntercomTone.options.add(new Option(Disabled, 0));
	f1.cIntercomBarge.options.add(new Option(Disabled, 0));
	f1.cHideDTMF.options.add(new Option(Disabled, 0));	
	f1.cHideDTMFDelay.options.add(new Option(Disabled, 0));
	f1.cDTMFReplaceTrans.options.add(new Option(Disabled, 0));	
	f1.cPlayHoldTone.options.add(new Option(Disabled, 0));
	f1.cPasswdCall.options.add(new Option(Disabled, 0));
	f1.cHotLineEnable.options.add(new Option(Disabled, 0));	
	f1.cACDActAuto.options.add(new Option(Disabled, 0));
	f1.cACDLoginAuto.options.add(new Option(Disabled, 0));
	f1.cCallCompletion.options.add(new Option(Disabled, 0));
	f1.cKeyAsSend.options.add(new Option(Disabled, 0));
	f1.cRFC2543Hold.options.add(new Option(Disabled, 0));
	f1.cUseOutboundProxy.options.add(new Option(Disabled, 0));
	f1.cIsDeal180.options.add(new Option(Disabled, 0));
	f1.cAllowMute.options.add(new Option(Disabled, 0));
	f1.cSIPNotify.options.add(new Option(Disabled, 0));
	f1.cSaveCallHistory.options.add(new Option(Disabled, 0));
	f1.cSRemoteName.options.add(new Option(Disabled, 0));
	f1.cLogOnWizard.options.add(new Option(Disabled, 0));
	
	f1.cIntercomAllow.options.add(new Option(Enabled, 1));
	f1.cIntercomMute.options.add(new Option(Enabled, 1));	
	f1.cIntercomTone.options.add(new Option(Enabled, 1));
	f1.cIntercomBarge.options.add(new Option(Enabled, 1));
	f1.cHideDTMF.options.add(new Option(Enabled, 1));	
	f1.cHideDTMFDelay.options.add(new Option(Enabled, 1));
	
	f1.cDTMFReplaceTrans.options.add(new Option(Enabled, 1));	
	f1.cPlayHoldTone.options.add(new Option(Enabled, 1));
	f1.cPasswdCall.options.add(new Option(Enabled, 1));
	f1.cHotLineEnable.options.add(new Option(Enabled, 1));	
	f1.cACDActAuto.options.add(new Option(Enabled, 1));
	f1.cACDLoginAuto.options.add(new Option(Enabled, 1));
	f1.cCallCompletion.options.add(new Option(Enabled, 1));
	f1.cKeyAsSend.options.add(new Option('#', 1));
	f1.cKeyAsSend.options.add(new Option('*', 2));
	f1.cRFC2543Hold.options.add(new Option(Enabled, 1));
	f1.cUseOutboundProxy.options.add(new Option(Enabled, 1));
	f1.cIsDeal180.options.add(new Option(Enabled, 1));
	f1.cAllowMute.options.add(new Option(Enabled, 1));
	f1.cSIPNotify.options.add(new Option(Enabled, 1));
	f1.cSaveCallHistory.options.add(new Option(Enabled, 1));
	f1.cSRemoteName.options.add(new Option(Enabled, 1));
	f1.cLogOnWizard.options.add(new Option(Enabled, 1));
	
	f1.cKeypadLockType.options.add(new Option(Disabled, 0));	
	f1.cKeypadLockType.options.add(new Option(FunctionKey, 1));
	f1.cKeypadLockType.options.add(new Option(KeyAll, 2));
	
	var i = 0;
	var accountCnt = f2.hcAccountNum.value;
	var accountTxt = "";
	
	f1.cCurAccount.options.add(new Option(AllAccount, 65535));//ACCOUNT_ALL
	f1.cDNDCurAccount.options.add(new Option(AllAccount, 65535));//ACCOUNT_ALL
	while(i < accountCnt)
	{
		accountTxt = Account + " " + (i + 1);
		f1.cCurAccount.options.add(new Option(accountTxt, i));
		f1.cDNDCurAccount.options.add(new Option(accountTxt, i));
		i++;
	}
	
	f1.cFeatureKeySync.options.add(new Option(Disabled,"0"));
	f1.cFeatureKeySync.options.add(new Option(Enabled,"1"));	
	
	for(var i=0; i < 21; i++)
	{
		f1.cNoAnswerRingTime.options.add(new Option(i*6, i*6));
	}	
	
	f1.cEarlyDtmf.options.add(new Option(Disabled,"0"));
	f1.cEarlyDtmf.options.add(new Option(Enabled,"1"));
	f1.cDirectIP.options.add(new Option(Disabled,"0"));
	f1.cDirectIP.options.add(new Option(Enabled,"1"));
	
	document.getElementById("trEmergencyCall").style.display = "none";
//Android
	document.getElementById("cVsipIsOpenForcedVoice").options.add(new Option(Disabled, 0));	
	document.getElementById("cVsipIsOpenForcedVoice").options.add(new Option(Enabled, 1));
	document.getElementById("cVsipIsOpenChooseOutgingLine").options.add(new Option(Disabled, 0));	
	document.getElementById("cVsipIsOpenChooseOutgingLine").options.add(new Option(Enabled, 1));
	document.getElementById("cVsipMissedCallTone").options.add(new Option(Disabled, 0));	
	document.getElementById("cVsipMissedCallTone").options.add(new Option(Enabled, 1));
	if("undefined" != typeof(NameOrNumber)){document.getElementById("cVsipDialingMatchType").options.add(new Option(NameOrNumber, 1));}
	else{document.getElementById("cVsipDialingMatchType").options.add(new Option("Name or Number", 1));}
	if("undefined" != typeof(FullName)){document.getElementById("cVsipDialingMatchType").options.add(new Option(FullName, 2));}
	else{document.getElementById("cVsipDialingMatchType").options.add(new Option("Name", 2));}
	if("undefined" != typeof(NumberLabel)){document.getElementById("cVsipDialingMatchType").options.add(new Option(NumberLabel, 3));}	
	else{document.getElementById("cVsipDialingMatchType").options.add(new Option("Number", 3));}
	
	SubLoadCfg();
}

function SubLoadCfg()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	
	f1.cAlwaysOffCode.value = f2.hcAlwaysOffCode.value;
	f1.cAlwaysOnCode.value = f2.hcAlwaysOnCode.value;
	f1.cAlwaysTarget.value = f2.hcAlwaysTarget.value;
	
	f1.cAttendedTransOnHook.value = f2.hcAttendedTransOnHook.value = TransEmptyStrTo0(f2.hcAttendedTransOnHook.value);
	f1.cAutoAnswerDelay.value = f2.hcAutoAnswerDelay.value = TransEmptyStrTo0(f2.hcAutoAnswerDelay.value);
	f1.cAutoRedialEnable.value = f2.hcAutoRedialEnable.value = TransEmptyStrTo0(f2.hcAutoRedialEnable.value);
	f1.cAutoRedialInterval.value = f2.hcAutoRedialInterval.value = TransEmptyStrTo0(f2.hcAutoRedialInterval.value);
	f1.cAutoRedialTimes.value = f2.hcAutoRedialTimes.value = TransEmptyStrTo0(f2.hcAutoRedialTimes.value);	
	
	f1.cBlindTransOnHook.value = f2.hcBlindTransOnHook.value = TransEmptyStrTo0(f2.hcBlindTransOnHook.value);
	f1.cBusyOffCode.value = f2.hcBusyOffCode.value;
	f1.cBusyOnCode.value = f2.hcBusyOnCode.value;
	f1.cBusyTarget.value = f2.hcBusyTarget.value;
	
	f1.cBusyToneDelay.value = f2.hcBusyToneDelay.value = TransEmptyStrTo0(f2.hcBusyToneDelay.value);
	f1.cCallCompletion.value = f2.hcCallCompletion.value = TransEmptyStrTo0(f2.hcCallCompletion.value);
	f1.cCallWaitingEnable.value = f2.hcCallWaitingEnable.value = TransEmptyStrTo0(f2.hcCallWaitingEnable.value);
	f1.cCallWaitingTone.value = f2.hcCallWaitingTone.value = TransEmptyStrTo0(f2.hcCallWaitingTone.value);
	f1.cCallWaitingOnCode.value = f2.hcCallWaitingOnCode.value;
	f1.cCallWaitingOffCode.value = f2.hcCallWaitingOffCode.value;
	
	f1.cDNDOffCode.value = f2.hcDNDOffCode.value;
	f1.cDNDOnCode.value = f2.hcDNDOnCode.value;
	f1.cDTMFRepetition.value = f2.hcDTMFRepetition.value = TransEmptyStrTo0(f2.hcDTMFRepetition.value);
	f1.cDTMFReplaceTrans.value = f2.hcDTMFReplaceTrans.value = TransEmptyStrTo0(f2.hcDTMFReplaceTrans.value);
	f1.cEmergency.value = f2.hcEmergency.value;
	//f1.cEnableLogo.value = f2.hcEnableLogo.value;
			
	f1.cFlashHookTime.value = f2.hcFlashHookTime.value;
	f1.cForwardAlways.value = f2.hcForwardAlways.value = TransEmptyStrTo0(f2.hcForwardAlways.value);
	f1.cForwardBusy.value = f2.hcForwardBusy.value = TransEmptyStrTo0(f2.hcForwardBusy.value);
	f1.cForwardNoAnswer.value = f2.hcForwardNoAnswer.value = TransEmptyStrTo0(f2.hcForwardNoAnswer.value);
	f1.cFwdInternational.value = f2.hcFwdInternational.value = TransEmptyStrTo0(f2.hcFwdInternational.value);
	f1.cHideDTMF.value = f2.hcHideDTMF.value = TransEmptyStrTo0(f2.hcHideDTMF.value);
	f1.cHideDTMFDelay.value = f2.hcHideDTMFDelay.value = TransEmptyStrTo0(f2.hcHideDTMFDelay.value);
	f1.cHotLineDelay.value = f2.hcHotLineDelay.value = TransEmptyStrTo0(f2.hcHotLineDelay.value);
	f1.cHotLineEnable.value = f2.hcHotLineEnable.value = TransEmptyStrTo0(f2.hcHotLineEnable.value);
	f1.cHotLineNumber.value = f2.hcHotLineNumber.value;
	f1.cACDActAuto.value = f2.hcACDActAuto.value = TransEmptyStrTo0(f2.hcACDActAuto.value);
	f1.cACDLoginAuto.value = f2.hcACDLoginAuto.value = TransEmptyStrTo0(f2.hcACDLoginAuto.value);
	f1.cACDActAutoTimer.value = f2.hcACDActAutoTimer.value = TransEmptyStrTo0(f2.hcACDActAutoTimer.value);
	f1.cIntercomAllow.value = f2.hcIntercomAllow.value = TransEmptyStrTo0(f2.hcIntercomAllow.value);
	f1.cIntercomBarge.value = f2.hcIntercomBarge.value = TransEmptyStrTo0(f2.hcIntercomBarge.value);
	f1.cIntercomMute.value = f2.hcIntercomMute.value = TransEmptyStrTo0(f2.hcIntercomMute.value);
	f1.cIntercomTone.value = f2.hcIntercomTone.value = TransEmptyStrTo0(f2.hcIntercomTone.value);
	f1.cIsDeal180.value = f2.hcIsDeal180.value = TransEmptyStrTo0(f2.hcIsDeal180.value);

	f1.cKeydownCallDelay.value = f2.hcKeydownCallDelay.value;
	f1.cLogOnWizard.value = f2.hcLogOnWizard.value = TransEmptyStrTo0(f2.hcLogOnWizard.value);
	f1.cMulticastCodec.value = f2.hcMulticastCodec.value = TransEmptyStrTo0(f2.hcMulticastCodec.value);
	f1.cNoAnswerOffCode.value = f2.hcNoAnswerOffCode.value;
	f1.cNoAnswerOnCode.value = f2.hcNoAnswerOnCode.value;
	f1.cNoAnswerTarget.value = f2.hcNoAnswerTarget.value;
	f1.cPasswdCall.value = f2.hcPasswdCall.value = TransEmptyStrTo0(f2.hcPasswdCall.value);
	f1.cPasswdLength.value = f2.hcPasswdLength.value;
	f1.cPasswdPrefix.value = f2.hcPasswdPrefix.value;
	f1.cPlayHoldTone.value = f2.hcPlayHoldTone.value = TransEmptyStrTo0(f2.hcPlayHoldTone.value);

	f1.cPlayHoldToneDelay.value = f2.hcPlayHoldToneDelay.value;
	f1.cRFC2543Hold.value = f2.hcRFC2543Hold.value = TransEmptyStrTo0(f2.hcRFC2543Hold.value);
	f1.cDNDEnabled.value = f2.hcDNDEnabled.value = TransEmptyStrTo0(f2.hcDNDEnabled.value);
	f1.cReturnCodeDND.value = f2.hcReturnCodeDND.value = TransEmptyStrTo(f2.hcReturnCodeDND.value, Number(486));
	f1.cReturnCodeRefuse.value = f2.hcReturnCodeRefuse.value = TransEmptyStrTo(f2.hcReturnCodeRefuse.value, Number(486));
	f1.cSIPNotify.value = f2.hcSIPNotify.value = TransEmptyStrTo0(f2.hcSIPNotify.value);
	f1.cSRemoteName.value = f2.hcSRemoteName.value = TransEmptyStrTo0(f2.hcSRemoteName.value);
	f1.cSRemoteNameFlashTime.value = f2.hcSRemoteNameFlashTime.value;
	f1.cSaveCallHistory.value = f2.hcSaveCallHistory.value = TransEmptyStrTo0(f2.hcSaveCallHistory.value);
	f1.cSemiAttendedTrans.value = f2.hcSemiAttendedTrans.value = TransEmptyStrTo0(f2.hcSemiAttendedTrans.value);
	f1.cTimeoutForDialnowRule.value = f2.hcTimeoutForDialnowRule.value;
	f1.cTransOnConferenceHang.value = f2.hcTransOnConferenceHang.value = TransEmptyStrTo0(f2.hcTransOnConferenceHang.value);
	f1.cTransSendDTMF.value = f2.hcTransSendDTMF.value;
	f1.cUseOutboundProxy.value = f2.hcUseOutboundProxy.value = TransEmptyStrTo0(f2.hcUseOutboundProxy.value);
	f1.cVisualBLFPickUpAlert.value = f2.hcVisualBLFPickUpAlert.value = TransEmptyStrTo0(f2.hcVisualBLFPickUpAlert.value);
	f1.cEnableCallPark.value = f2.hcEnableCallPark.value = TransEmptyStrTo0(f2.hcEnableCallPark.value);
	f1.cCallParkAccount.value = f2.hcCallParkAccount.value = TransEmptyStrTo0(f2.hcCallParkAccount.value);
	f1.cCallParkTarget.value = f2.hcCallParkTarget.value;
	f2.hcNoAnswerRingTime.value = TransEmptyStrTo0(f2.hcNoAnswerRingTime.value);
	f1.cNoAnswerRingTime.value = f2.hcNoAnswerRingTime.value = TransStrToIndex(f2.hcNoAnswerRingTime.value, "0", "21", "6", "1");
	f1.cAllowMute.value = f2.hcAllowMute.value = TransEmptyStrTo0(f2.hcAllowMute.value);
	f1.cAllowedIPList.value = f2.hcAllowedIPList.value;
	f2.hcKeyAsSend.value = f2.hcKeyAsSend.value = TransEmptyStrTo(f2.hcKeyAsSend.value,"2");
	f1.cKeyAsSend.value = f2.hcKeyAsSend.value = TransEmptyStrTo0(f2.hcKeyAsSend.value);
	f1.cCallCompletion.value = f2.hcCallCompletion.value = TransEmptyStrTo0(f2.hcCallCompletion.value);
	
	f1.cKeypadLockType.value = f2.hcKeypadLockType.value = TransEmptyStrTo0(f2.hcKeypadLockType.value);
	f1.cKeypadUnLockPIN.value = "********";
	f1.cKeypadLockTimeout.value = f2.hcKeypadLockTimeout.value;
	f1.cEmergencyCall.value = f2.hcEmergencyCall.value	
	
	f1.cCurAccount.value = f1.cDNDCurAccount.value = f2.hcCurAccount.value;
	if(65535 == f1.cCurAccount.value)
	{
		document.getElementById("cModeType").innerHTML = ("undefined" != typeof(Phone))?Phone:"Phone";
		document.getElementById("cModePhone").checked = "checked";
	}
	else
	{
		document.getElementById("cModeType").innerHTML = ("undefined" != typeof(Custom))?Custom:"Custom";
		document.getElementById("cModeCustom").checked = "checked";
	}
	f1.cFeatureKeySync.value = f2.hcFeatureKeySync.value = TransEmptyStrTo0(f2.hcFeatureKeySync.value);
	f1.cEarlyDtmf.value = f2.hcEarlyDtmf.value = TransEmptyStrTo(f2.hcEarlyDtmf.value, "0");
	f1.cDirectIP.value = f2.hcDirectIP.value = TransEmptyStrTo(f2.hcDirectIP.value, "0");
	
	ResetAllInputColor();
	for(var i=0; i < PwdKeyFirst.length; i++) { PwdKeyFirst[i] = true; }
//Android	
	f1.cVsipIsOpenForcedVoice.value = f2.hcVsipIsOpenForcedVoice.value = TransEmptyStrTo0(f2.hcVsipIsOpenForcedVoice.value);
	f1.cVsipIsOpenChooseOutgingLine.value = f2.hcVsipIsOpenChooseOutgingLine.value = TransEmptyStrTo0(f2.hcVsipIsOpenChooseOutgingLine.value);	
	f1.cVsipMissedCallTone.value = f2.hcVsipMissedCallTone.value = TransEmptyStrTo0(f2.hcVsipMissedCallTone.value);
	f1.cLongDistanceMobilePrefix.value = f2.hcLongDistanceMobilePrefix.value;
	f1.cVsipCallerLocation.value = f2.hcVsipCallerLocation.value;
	f1.cVsipDialingMatchType.value = f2.hcVsipDialingMatchType.value = TransEmptyStrTo(f2.hcVsipDialingMatchType.value, "1"); 
	
	CheckCallWaiting();
	CheckIntcomSts();
	CheckHotLineSts();	
	CheckACDActAutoSts();
}

function CheckCallWaiting()
{
	var f1 = document.forms["body_form"];
	if(0 == f1.cCallWaitingEnable.value)
	{
		setDisabled(f1.cCallWaitingTone, true);
	}
	else
	{
		setDisabled(f1.cCallWaitingTone, false);
	}
}

function CheckForwardTarget()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var validFlag = true;
	if(1 == f1.cForwardAlways.value && "" == f1.cAlwaysTarget.value)
	{
		SetInputBGColor("cAlwaysTarget");
		validFlag =  false;
	}
	if(1 == f1.cForwardBusy.value && "" == f1.cBusyTarget.value)
	{	
		SetInputBGColor("cBusyTarget");	
		validFlag =  false;
	}
	if(1 == f1.cForwardNoAnswer.value && "" == f1.cNoAnswerTarget.value)
	{	
		SetInputBGColor("cNoAnswerTarget");
		validFlag =  false;
	}
	if(false == validFlag) return false;
	else	return true;
}

function CheckForwardCode()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var validFlag = true;
	if(("" != f1.cAlwaysOnCode.value && "" == f1.cAlwaysOffCode.value) || ("" == f1.cAlwaysOnCode.value && "" != f1.cAlwaysOffCode.value))
	{
			if("" == f1.cAlwaysOnCode.value) SetInputBGColor("cAlwaysOnCode");
			if("" == f1.cAlwaysOffCode.value) SetInputBGColor("cAlwaysOffCode");
			validFlag = false;
	}
	if(("" != f1.cBusyOnCode.value && "" == f1.cBusyOffCode.value) || ("" == f1.cBusyOnCode.value && "" != f1.cBusyOffCode.value))
	{
			if("" == f1.cBusyOnCode.value) SetInputBGColor("cBusyOnCode");
			if("" == f1.cBusyOffCode.value) SetInputBGColor("cBusyOffCode");
			validFlag = false;
	}
	if(("" != f1.cNoAnswerOnCode.value && "" == f1.cNoAnswerOffCode.value) || ("" == f1.cNoAnswerOnCode.value && "" != f1.cNoAnswerOffCode.value))
	{
			if("" == f1.cNoAnswerOnCode.value) SetInputBGColor("cNoAnswerOnCode");
			if("" == f1.cNoAnswerOffCode.value) SetInputBGColor("cNoAnswerOffCode");
			validFlag = false;
	}	
	if(false == validFlag) return false;
	else	return true;
}

function CheckCommitData()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var strSubmData = "";
	var flag = false;
//	if(f1.cAllowMute.value != f2.hcAllowMute.value)
//	{
//		strSubmData = strSubmData + "&cAllowMute=" + f1.cAllowMute.value;
//	}
	if(!CheckForwardTarget())
	{
		alert(ForwardTargetWarning);
		return DataCheckResult;
	}
	if(!CheckForwardCode())
	{
		alert(WarningInvalidCodeSetting);
		return DataCheckResult;
	}	
	if(f1.cAlwaysOffCode.value != f2.hcAlwaysOffCode.value)
	{
		if(!NotContainInvalid(f1.cAlwaysOffCode.value))
		{
			SetInputBGColor("cAlwaysOffCode");
			flag = true;
		}		
		strSubmData = strSubmData + "&cAlwaysOffCode=" + PostEncode(f1.cAlwaysOffCode.value);
	}
	if(f1.cAlwaysOnCode.value != f2.hcAlwaysOnCode.value)
	{
		if(!NotContainInvalid(f1.cAlwaysOnCode.value))
		{
			SetInputBGColor("cAlwaysOnCode");
			flag = true;
		}
		strSubmData = strSubmData + "&cAlwaysOnCode=" + PostEncode(f1.cAlwaysOnCode.value);
	}
	if(f1.cAlwaysTarget.value != f2.hcAlwaysTarget.value)
	{
		if(!IsAValidDialedNumber(f1.cAlwaysTarget.value))
		{
			SetInputBGColor("cAlwaysTarget");
			flag = true;
		}
		strSubmData = strSubmData + "&cAlwaysTarget=" + PostEncode(f1.cAlwaysTarget.value);
	}
//	if(f1.cAttendedTransOnHook.value != f2.hcAttendedTransOnHook.value)
//	{
//		strSubmData = strSubmData + "&cAttendedTransOnHook=" + f1.cAttendedTransOnHook.value;
//	}
	if(f1.cAutoAnswerDelay.value != f2.hcAutoAnswerDelay.value)
	{
		if(!CheckRangeOfNumber(f1.cAutoAnswerDelay.value, 0, 5) || "" == f1.cAutoAnswerDelay.value)
		{
			SetInputBGColor("cAutoAnswerDelay");
			flag = true;
		}		
		strSubmData = strSubmData + "&cAutoAnswerDelay=" + Number(f1.cAutoAnswerDelay.value);
	}
	
	if(f1.cAutoRedialEnable.value != f2.hcAutoRedialEnable.value)
	{
		strSubmData = strSubmData + "&cAutoRedialEnable=" + f1.cAutoRedialEnable.value;
	}
	if(f1.cAutoRedialInterval.value != f2.hcAutoRedialInterval.value)
	{
		if(!NotContainInvalid(f1.cAutoRedialInterval.value) || !CheckRangeOfNumber(f1.cAutoRedialInterval.value, 1, 300) || "" == f1.cAutoRedialInterval.value)    
		{
			SetInputBGColor("cAutoRedialInterval");
			flag = true;
		}
		strSubmData = strSubmData + "&cAutoRedialInterval=" + Number(f1.cAutoRedialInterval.value);
	}
	if(f1.cAutoRedialTimes.value != f2.hcAutoRedialTimes.value)
	{
		if(!NotContainInvalid(f1.cAutoRedialTimes.value) || !CheckRangeOfNumber(f1.cAutoRedialTimes.value, 1, 100) || "" == f1.cAutoRedialTimes.value)    
		{
			SetInputBGColor("cAutoRedialTimes");
			flag = true;
		}
		strSubmData = strSubmData + "&cAutoRedialTimes=" + Number(f1.cAutoRedialTimes.value);
	}
//	if(f1.cBlindTransOnHook.value != f2.hcBlindTransOnHook.value)
//	{
//		strSubmData = strSubmData + "&cBlindTransOnHook=" + f1.cBlindTransOnHook.value;
//	}
	if(f1.cBusyOffCode.value != f2.hcBusyOffCode.value)
	{
		if(!NotContainInvalid(f1.cBusyOffCode.value))
		{
			SetInputBGColor("cBusyOffCode");
			flag = true;
		}
		strSubmData = strSubmData + "&cBusyOffCode=" + PostEncode(f1.cBusyOffCode.value);
	}
	if(f1.cBusyOnCode.value != f2.hcBusyOnCode.value)
	{
		if(!NotContainInvalid(f1.cBusyOnCode.value))
		{
			SetInputBGColor("cBusyOnCode");
			flag = true;
		}
		strSubmData = strSubmData + "&cBusyOnCode=" + PostEncode(f1.cBusyOnCode.value);
	}
	if(f1.cBusyTarget.value != f2.hcBusyTarget.value)
	{
		if(!IsAValidDialedNumber(f1.cBusyTarget.value))
		{
			SetInputBGColor("cBusyTarget");
			flag = true;
		}		
		strSubmData = strSubmData + "&cBusyTarget=" + PostEncode(f1.cBusyTarget.value);
	}

//	if(f1.cBusyToneDelay.value != f2.hcBusyToneDelay.value)
//	{
//		strSubmData = strSubmData + "&cBusyToneDelay=" + f1.cBusyToneDelay.value;
//	}
//	if(f1.cCallCompletion.value != f2.hcCallCompletion.value)
//	{
//		strSubmData = strSubmData + "&cCallCompletion=" + f1.cCallCompletion.value;
//	}
	if(f1.cCallWaitingEnable.value != f2.hcCallWaitingEnable.value)
	{
		strSubmData = strSubmData + "&cCallWaitingEnable=" + PostEncode(f1.cCallWaitingEnable.value);
	}
	if(f1.cCallWaitingTone.value != f2.hcCallWaitingTone.value)
	{
		strSubmData = strSubmData + "&cCallWaitingTone=" + f1.cCallWaitingTone.value;
	}	
	if(f1.cCallWaitingOnCode.value != f2.hcCallWaitingOnCode.value)
	{
		if(!NotContainInvalid(f1.cCallWaitingOnCode.value))
		{
			SetInputBGColor("cCallWaitingOnCode");
			flag = true;
		}		
		strSubmData = strSubmData + "&cCallWaitingOnCode=" + PostEncode(f1.cCallWaitingOnCode.value);
	}
	if(f1.cCallWaitingOffCode.value != f2.hcCallWaitingOffCode.value)
	{
		if(!NotContainInvalid(f1.cCallWaitingOffCode.value))
		{
			SetInputBGColor("cCallWaitingOffCode");
			flag = true;
		}
		strSubmData = strSubmData + "&cCallWaitingOffCode=" + PostEncode(f1.cCallWaitingOffCode.value);
	}
	if(("" != f1.cCallWaitingOnCode.value && "" == f1.cCallWaitingOffCode.value)||("" == f1.cCallWaitingOnCode.value && "" != f1.cCallWaitingOffCode.value) )
	{
		SetInputBGColor("cCallWaitingOnCode");
		SetInputBGColor("cCallWaitingOffCode");
		flag = true;
		alert(WarningInvalidCodeSetting);
	}
	
	if(f1.cDNDEnabled.value != f2.hcDNDEnabled.value)
	{
		strSubmData = strSubmData + "&cDNDEnabled=" + PostEncode(f1.cDNDEnabled.value);
	}	
	
	if(f1.cDNDOffCode.value != f2.hcDNDOffCode.value)
	{
		if(!NotContainInvalid(f1.cDNDOffCode.value))
		{
			SetInputBGColor("cDNDOffCode");
			flag = true;
		}		
		strSubmData = strSubmData + "&cDNDOffCode=" + PostEncode(f1.cDNDOffCode.value);
	}
	if(f1.cDNDOnCode.value != f2.hcDNDOnCode.value)
	{
		if(!NotContainInvalid(f1.cDNDOnCode.value))
		{
			SetInputBGColor("cDNDOnCode");
			flag = true;
		}
		strSubmData = strSubmData + "&cDNDOnCode=" + PostEncode(f1.cDNDOnCode.value);
	}
	if(("" != f1.cDNDOnCode.value && "" == f1.cDNDOffCode.value)||("" == f1.cDNDOnCode.value && "" != f1.cDNDOffCode.value) )
	{
		SetInputBGColor("cDNDOnCode");
		SetInputBGColor("cDNDOffCode");
		flag = true;
		alert(WarningInvalidCodeSetting);
	}
//	if(f1.cDTMFRepetition.value != f2.hcDTMFRepetition.value)
//	{
//		strSubmData = strSubmData + "&cDTMFRepetition=" + f1.cDTMFRepetition.value;
//	}
//	if(f1.cDTMFReplaceTrans.value != f2.hcDTMFReplaceTrans.value)
//	{
//		strSubmData = strSubmData + "&cDTMFReplaceTrans=" + f1.cDTMFReplaceTrans.value;
//	}
//	if(f1.cEmergency.value != f2.hcEmergency.value)
//	{
//		strSubmData = strSubmData + "&cEmergency=" + f1.cEmergency.value;
//	}
//	if(f1.cEnableLogo.value != f2.hcEnableLogo.value)
//	{
//		strSubmData = strSubmData + "&cEnableLogo=" + f1.cEnableLogo.value;
//	}
//	if(f1.cFlashHookTime.value != f2.hcFlashHookTime.value)
//	{
//		strSubmData = strSubmData + "&cFlashHookTime=" + f1.cFlashHookTime.value;
//	}
	if(f1.cForwardAlways.value != f2.hcForwardAlways.value)
	{
		strSubmData = strSubmData + "&cForwardAlways=" + f1.cForwardAlways.value;
	}
	if(f1.cForwardBusy.value != f2.hcForwardBusy.value)
	{
		strSubmData = strSubmData + "&cForwardBusy=" + f1.cForwardBusy.value;
	}
	if(f1.cForwardNoAnswer.value != f2.hcForwardNoAnswer.value)
	{
		strSubmData = strSubmData + "&cForwardNoAnswer=" + f1.cForwardNoAnswer.value;
	}
//	if(f1.cFwdInternational.value != f2.hcFwdInternational.value)
//	{
//		strSubmData = strSubmData + "&cFwdInternational=" + f1.cFwdInternational.value;
//	}
//	if(f1.cHideDTMF.value != f2.hcHideDTMF.value)
//	{
//		strSubmData = strSubmData + "&cHideDTMF=" + f1.cHideDTMF.value;
//	}
//	if(f1.cHideDTMFDelay.value != f2.hcHideDTMFDelay.value)
//	{
//		strSubmData = strSubmData + "&cHideDTMFDelay=" + f1.cHideDTMFDelay.value;
//	}
	if(f1.cHotLineEnable.value != f2.hcHotLineEnable.value)
	{
		strSubmData = strSubmData + "&cHotLineEnable=" + f1.cHotLineEnable.value;
	}
	if(1 == f1.cHotLineEnable.value && "" == f1.cHotLineNumber.value)
	{
			SetInputBGColor("cHotLineNumber");
			document.getElementById("WarningDiv").innerHTML += "<br>:"+ValueEmptyWarning;
			flag = true;
	}
	if(f1.cHotLineNumber.value != f2.hcHotLineNumber.value)
	{
		var t1 = f1.cHotLineNumber.value;
		if(!IsAValidDialedNumber(t1) || !CheckLengthOfNumber(t1, 0, 63))
		{
			SetInputBGColor("cHotLineNumber");
			flag = true;
		}
		strSubmData = strSubmData + "&cHotLineNumber=" + f1.cHotLineNumber.value;
	}
	if(f1.cHotLineDelay.value != f2.hcHotLineDelay.value)
	{
		if(!CheckRangeOfNumber(f1.cHotLineDelay.value, 0, 5) || "" == f1.cHotLineDelay.value)
		{
			SetInputBGColor("cHotLineDelay");
			flag = true;
		}			
		strSubmData = strSubmData + "&cHotLineDelay=" + Number(f1.cHotLineDelay.value);
	}
	if(f1.cACDActAuto.value != f2.hcACDActAuto.value)
	{
		strSubmData = strSubmData + "&cACDActAuto=" + f1.cACDActAuto.value;
	}
	if(f1.cACDLoginAuto.value != f2.hcACDLoginAuto.value)
	{
		strSubmData = strSubmData + "&cACDLoginAuto=" + f1.cACDLoginAuto.value;
	}
	
	if(0 == f1.cACDActAuto.value)
	{
		f1.cACDActAutoTimer.value = f2.hcACDActAutoTimer.value;
		strSubmData = strSubmData + "&cACDActAutoTimer=" + Number(f1.cACDActAutoTimer.value);
	}	
	
	if(1 == f1.cACDActAuto.value && "" == f1.cACDActAutoTimer.value)
	{
			SetInputBGColor("cACDActAutoTimer");
			document.getElementById("WarningDiv").innerHTML += "<br>:"+ValueEmptyWarning;
			flag = true;
	}
	if(1 == f1.cACDActAuto.value && f1.cACDActAutoTimer.value != f2.hcACDActAutoTimer.value)
	{
		if(!CheckRangeOfNumber(f1.cACDActAutoTimer.value, 0, 180))
		{
			SetInputBGColor("cACDActAutoTimer");
			flag = true;
		}	
		strSubmData = strSubmData + "&cACDActAutoTimer=" + Number(f1.cACDActAutoTimer.value);
	}	
	if(f1.cIntercomAllow.value != f2.hcIntercomAllow.value)
	{
		strSubmData = strSubmData + "&cIntercomAllow=" + f1.cIntercomAllow.value;
	}
//	if(f1.cIntercomBarge.value != f2.hcIntercomBarge.value)
//	{
//		strSubmData = strSubmData + "&cIntercomBarge=" + f1.cIntercomBarge.value;
//	}
	if(f1.cIntercomMute.value != f2.hcIntercomMute.value)
	{
		strSubmData = strSubmData + "&cIntercomMute=" + f1.cIntercomMute.value;
	}
//	if(f1.cIntercomTone.value != f2.hcIntercomTone.value)
//	{
//		strSubmData = strSubmData + "&cIntercomTone=" + f1.cIntercomTone.value;
//	}
//	if(f1.cIsDeal180.value != f2.hcIsDeal180.value)
//	{
//		strSubmData = strSubmData + "&cIsDeal180=" + f1.cIsDeal180.value;
//	}
//	if(f1.cKeydownCallDelay.value != f2.hcKeydownCallDelay.value)
//	{
//		strSubmData = strSubmData + "&cKeydownCallDelay=" + f1.cKeydownCallDelay.value;
//	}
//	if(f1.cLogOnWizard.value != f2.hcLogOnWizard.value)
//	{
//		strSubmData = strSubmData + "&cLogOnWizard=" + f1.cLogOnWizard.value;
//	}
	if(f1.cMulticastCodec.value != f2.hcMulticastCodec.value)
	{
		strSubmData = strSubmData + "&cMulticastCodec=" + f1.cMulticastCodec.value;
	}
	if(f1.cNoAnswerOffCode.value != f2.hcNoAnswerOffCode.value)
	{
		if(!NotContainInvalid(f1.cNoAnswerOffCode.value))
		{
			SetInputBGColor("cNoAnswerOffCode");
			flag = true;
		}		
		strSubmData = strSubmData + "&cNoAnswerOffCode=" + PostEncode(f1.cNoAnswerOffCode.value);
	}
	if(f1.cNoAnswerOnCode.value != f2.hcNoAnswerOnCode.value)
	{
		if(!NotContainInvalid(f1.cNoAnswerOnCode.value))
		{
			SetInputBGColor("cNoAnswerOnCode");
			flag = true;
		}		
		strSubmData = strSubmData + "&cNoAnswerOnCode=" + PostEncode(f1.cNoAnswerOnCode.value);
	}
	if(f1.cNoAnswerRingTime.value != f2.hcNoAnswerRingTime.value)
	{
		strSubmData = strSubmData + "&cNoAnswerRingTime=" + f1.cNoAnswerRingTime.value;
	}
	if(f1.cNoAnswerTarget.value != f2.hcNoAnswerTarget.value)
	{
		if(!IsAValidDialedNumber(f1.cNoAnswerTarget.value))
		{
			SetInputBGColor("cNoAnswerTarget");
			flag = true;
		}		
		strSubmData = strSubmData + "&cNoAnswerTarget=" + PostEncode(f1.cNoAnswerTarget.value);
	}
//	if(f1.cPasswdCall.value != f2.hcPasswdCall.value)
//	{
//		strSubmData = strSubmData + "&cPasswdCall=" + f1.cPasswdCall.value;
//	}
//	if(f1.cPasswdLength.value != f2.hcPasswdLength.value)
//	{
//		strSubmData = strSubmData + "&cPasswdLength=" + f1.cPasswdLength.value;
//	}
//	if(f1.cPasswdPrefix.value != f2.hcPasswdPrefix.value)
//	{
//		strSubmData = strSubmData + "&cPasswdPrefix=" + f1.cPasswdPrefix.value;
//	}
//	
//	if(f1.cPlayHoldTone.value != f2.hcPlayHoldTone.value)
//	{
//		strSubmData = strSubmData + "&cPlayHoldTone=" + f1.cPlayHoldTone.value;
//	}
//	if(f1.cPlayHoldToneDelay.value != f2.hcPlayHoldToneDelay.value)
//	{
//		strSubmData = strSubmData + "&cPlayHoldToneDelay=" + f1.cPlayHoldToneDelay.value;
//	}
//	if(f1.cRFC2543Hold.value != f2.hcRFC2543Hold.value)
//	{
//		strSubmData = strSubmData + "&cRFC2543Hold=" + f1.cRFC2543Hold.value;
//	}
	if(f1.cReturnCodeDND.value != f2.hcReturnCodeDND.value)
	{
		strSubmData = strSubmData + "&cReturnCodeDND=" + f1.cReturnCodeDND.value;
	}
	if(f1.cReturnCodeRefuse.value != f2.hcReturnCodeRefuse.value)
	{
		strSubmData = strSubmData + "&cReturnCodeRefuse=" + f1.cReturnCodeRefuse.value;
	}
//	if(f1.cSIPNotify.value != f2.hcSIPNotify.value)
//	{
//		strSubmData = strSubmData + "&cSIPNotify=" + f1.cSIPNotify.value;
//	}
//	if(f1.cSRemoteName.value != f2.hcSRemoteName.value)
//	{
//		strSubmData = strSubmData + "&cSRemoteName=" + f1.cSRemoteName.value;
//	}
//	if(f1.cSRemoteNameFlashTime.value != f2.hcSRemoteNameFlashTime.value)
//	{
//		strSubmData = strSubmData + "&cSRemoteNameFlashTime=" + f1.cSRemoteNameFlashTime.value;
//	}
//	if(f1.cSaveCallHistory.value != f2.hcSaveCallHistory.value)
//	{
//		strSubmData = strSubmData + "&cSaveCallHistory=" + f1.cSaveCallHistory.value;
//	}
//	if(f1.cSemiAttendedTrans.value != f2.hcSemiAttendedTrans.value)
//	{
//		strSubmData = strSubmData + "&cSemiAttendedTrans=" + f1.cSemiAttendedTrans.value;
//	}
//	if(f1.cTimeoutForDialnowRule.value != f2.hcTimeoutForDialnowRule.value)
//	{
//		strSubmData = strSubmData + "&cTimeoutForDialnowRule=" + f1.cTimeoutForDialnowRule.value;
//	}
//	if(f1.cTransOnConferenceHang.value != f2.hcTransOnConferenceHang.value)
//	{
//		strSubmData = strSubmData + "&cTransOnConferenceHang=" + f1.cTransOnConferenceHang.value;
//	}
//	if(f1.cTransSendDTMF.value != f2.hcTransSendDTMF.value)
//	{
//		strSubmData = strSubmData + "&cTransSendDTMF=" + f1.cTransSendDTMF.value;
//	}
//	if(f1.cUseOutboundProxy.value != f2.hcUseOutboundProxy.value)
//	{
//		strSubmData = strSubmData + "&cUseOutboundProxy=" + f1.cUseOutboundProxy.value;
//	}
	//  && !CheckFakeDiff(f1.cEnableCallPark.value, f2.hcEnableCallPark.value)
	if(f1.cVisualBLFPickUpAlert.value != f2.hcVisualBLFPickUpAlert.value)
	{
		strSubmData = strSubmData + "&cVisualBLFPickUpAlert=" + f1.cVisualBLFPickUpAlert.value;
	}
	if(f1.cEnableCallPark.value != f2.hcEnableCallPark.value)
	{
		strSubmData = strSubmData + "&cEnableCallPark=" + f1.cEnableCallPark.value;
	}
	if("1" == f1.cEnableCallPark.value) 
	{
		if("" == f1.cCallParkTarget.value) 
		{
				SetInputBGColor("cCallParkTarget");
				flag = true;
		}
	}
	if(f1.cCallParkAccount.value != f2.hcCallParkAccount.value)
	{
		strSubmData = strSubmData + "&cCallParkAccount=" + f1.cCallParkAccount.value;
	}
	if(f1.cCallParkTarget.value != f2.hcCallParkTarget.value)
	{
		if(!IsAValidDialedNumber(f1.cCallParkTarget.value))
		{
			SetInputBGColor("cCallParkTarget");
			flag = true;
		}		
		strSubmData = strSubmData + "&cCallParkTarget=" + f1.cCallParkTarget.value;
	}
	if(f1.cAllowedIPList.value != f2.hcAllowedIPList.value)
	{
		if(!NotContainInvalid255(f1.cAllowedIPList.value))
		{
			SetInputBGColor("cAllowedIPList");
			flag = true;
		}
		strSubmData = strSubmData + "&cAllowedIPList=" + f1.cAllowedIPList.value;
	}
	if(f1.cKeyAsSend.value != f2.hcKeyAsSend.value)
	{
		strSubmData = strSubmData + "&cKeyAsSend=" + f1.cKeyAsSend.value;
	}
	if(f1.cCallCompletion.value != f2.hcCallCompletion.value)
	{
		strSubmData = strSubmData + "&cCallCompletion=" + f1.cCallCompletion.value;
	}
	
	if(f1.cKeypadLockType.value != f2.hcKeypadLockType.value)
	{
		strSubmData = strSubmData + "&cKeypadLockType=" + f1.cKeypadLockType.value;
	}
	if(!PwdKeyFirst[0] && "********" != f1.cKeypadUnLockPIN.value)
	{
		if(!NotContainInvalid(f1.cKeypadUnLockPIN.value))
		{
			SetInputBGColor("cKeypadUnLockPIN");
			flag = true;
		}
		if(f1.cKeypadUnLockPIN.value.length > 15)
		{
			SetInputBGColor("cKeypadUnLockPIN");
			alert(WarningPasswdTooLong);
			flag = true;
		}
		if(false == isASCIICase(f1.cKeypadUnLockPIN.value) )
		{
			flag = true;
			SetInputBGColor("cKeypadUnLockPIN");
			alert(WarningASCCaseAllowed); 
		}
		if(false == isValidCharsCase(f1.cKeypadUnLockPIN.value) )
		{
			flag = true;
			SetInputBGColor("cKeypadUnLockPIN");
			alert("Password contain invalid chars !"); 
		}
		strSubmData = strSubmData + "&cKeypadUnLockPIN=" + PostEncode(f1.cKeypadUnLockPIN.value);
	}
	if(f1.cKeypadLockTimeout.value != f2.hcKeypadLockTimeout.value && "" != f1.cKeypadLockType.value)
	{
		if(!CheckRangeOfNumber(f1.cKeypadLockTimeout.value, 0, 3600) || "" == f1.cKeypadLockTimeout.value)
		{
			SetInputBGColor("cKeypadLockTimeout");
			flag = true;
		}	
		strSubmData = strSubmData + "&cKeypadLockTimeout=" + Number(f1.cKeypadLockTimeout.value);
	}
	if(f1.cEmergencyCall.value != f2.hcEmergencyCall.value)
	{
		if(!NotContainInvalid255(f1.cEmergencyCall.value))
		{
			SetInputBGColor("cEmergencyCall");
			flag = true;
		}
		strSubmData = strSubmData + "&cEmergencyCall=" + PostEncode(f1.cEmergencyCall.value);
	}
	
	if(f1.cFeatureKeySync.value != f2.hcFeatureKeySync.value)
	{
		strSubmData = strSubmData + "&cFeatureKeySync=" + f1.cFeatureKeySync.value;
	}
	
	if(f1.cEarlyDtmf.value != f2.hcEarlyDtmf.value)
	{
		strSubmData = strSubmData + "&cEarlyDtmf=" + f1.cEarlyDtmf.value;
	}
	if(f1.cDirectIP.value != f2.hcDirectIP.value)
	{
		strSubmData = strSubmData + "&cDirectIP=" + f1.cDirectIP.value;
	}
	
	if(f2.hcVsipIsOpenForcedVoice.value != f1.cVsipIsOpenForcedVoice.value) 
	{
		strSubmData = strSubmData + "&cVsipIsOpenForcedVoice=" + f1.cVsipIsOpenForcedVoice.value;
	}
	if(f2.hcVsipIsOpenChooseOutgingLine.value != f1.cVsipIsOpenChooseOutgingLine.value) 
	{
		strSubmData = strSubmData + "&cVsipIsOpenChooseOutgingLine=" + f1.cVsipIsOpenChooseOutgingLine.value;
	}	
	if(f2.hcVsipCallerLocation.value != f1.cVsipCallerLocation.value) 
	{
		if(!NotContainInvalid255(f1.cVsipCallerLocation.value))
		{
			SetInputBGColor("cVsipCallerLocation");
			ErrFlag = true;
		}		
		strSubmData = strSubmData + "&cVsipCallerLocation=" + f1.cVsipCallerLocation.value;
	}	
	if(f2.hcVsipMissedCallTone.value != f1.cVsipMissedCallTone.value) 
	{
		strSubmData = strSubmData + "&cVsipMissedCallTone=" + f1.cVsipMissedCallTone.value;
	}		
	if(f2.hcLongDistanceMobilePrefix.value != f1.cLongDistanceMobilePrefix.value) 
	{
		if(!NotContainInvalid255(f1.cLongDistanceMobilePrefix.value))
		{
			SetInputBGColor("cLongDistanceMobilePrefix");
			ErrFlag = true;
		}	
		strSubmData = strSubmData + "&cLongDistanceMobilePrefix=" + f1.cLongDistanceMobilePrefix.value;
	}	
	if(f2.hcVsipDialingMatchType.value != f1.cVsipDialingMatchType.value) 
	{
		strSubmData = strSubmData + "&cVsipDialingMatchType=" + f1.cVsipDialingMatchType.value;
	}		
	
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
	
	if(f1.cForwardAlways.value != f2.hcForwardAlways.value
		 || f1.cAlwaysOffCode.value != f2.hcAlwaysOffCode.value
		 || f1.cAlwaysOnCode.value != f2.hcAlwaysOnCode.value
		 || f1.cAlwaysTarget.value != f2.hcAlwaysTarget.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cForwardNoAnswer.value != f2.hcForwardNoAnswer.value
		 || f1.cNoAnswerRingTime.value != f2.hcNoAnswerRingTime.value
		 || f1.cAutoAnswerDelay.value != f2.hcAutoAnswerDelay.value
		 || f1.cNoAnswerOffCode.value != f2.hcNoAnswerOffCode.value
		 || f1.cNoAnswerOnCode.value != f2.hcNoAnswerOnCode.value
		 || f1.cNoAnswerTarget.value != f2.hcNoAnswerTarget.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cAutoRedialEnable.value != f2.hcAutoRedialEnable.value
			|| f1.cAutoRedialInterval.value != f2.hcAutoRedialInterval.value
			|| f1.cAutoRedialTimes.value != f2.hcAutoRedialTimes.value)
	{
		dataChangedWarnFlag = 1;
	}

	if(f1.cForwardBusy.value != f2.hcForwardBusy.value
	   || f1.cBusyOffCode.value != f2.hcBusyOffCode.value
		 || f1.cBusyOnCode.value != f2.hcBusyOnCode.value
		 || f1.cBusyTarget.value != f2.hcBusyTarget.value)
	{
		dataChangedWarnFlag = 1;
	}

	if(f1.cCallWaitingEnable.value != f2.hcCallWaitingEnable.value
			|| f1.cCallWaitingTone.value != f2.hcCallWaitingTone.value
			|| f1.cCallWaitingOnCode.value != f2.hcCallWaitingOnCode.value
			|| f1.cCallWaitingOffCode.value != f2.hcCallWaitingOffCode.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cDNDEnabled.value != f2.hcDNDEnabled.value
		 || f1.cDNDOffCode.value != f2.hcDNDOffCode.value
		 || f1.cDNDOnCode.value != f2.hcDNDOnCode.value)
	{
		dataChangedWarnFlag = 1;
	}	

	if(f1.cHotLineDelay.value != f2.hcHotLineDelay.value
		 || f1.cHotLineEnable.value != f2.hcHotLineEnable.value
		 || f1.cHotLineNumber.value != f2.hcHotLineNumber.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cACDActAuto.value != f2.hcACDActAuto.value
		 || f1.cACDLoginAuto.value != f2.hcACDLoginAuto.value
		 || f1.cACDActAutoTimer.value != f2.hcACDActAutoTimer.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cIntercomAllow.value != f2.hcIntercomAllow.value
		 || f1.cIntercomMute.value != f2.hcIntercomMute.value)
	{
		dataChangedWarnFlag = 1;
	}
		
	if(f1.cReturnCodeDND.value != f2.hcReturnCodeDND.value)
	{
		dataChangedWarnFlag = 1;
	}
	if(f1.cReturnCodeRefuse.value != f2.hcReturnCodeRefuse.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cVisualBLFPickUpAlert.value != f2.hcVisualBLFPickUpAlert.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cEnableCallPark.value != f2.hcEnableCallPark.value
		 || f1.cCallParkAccount.value != f2.hcCallParkAccount.value
		 || f1.cCallParkTarget.value != f2.hcCallParkTarget.value)
	{
		dataChangedWarnFlag = 1;
	}

	if(f1.cAllowedIPList.value != f2.hcAllowedIPList.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if( f1.cKeypadLockType.value != f2.hcKeypadLockType.value ||
			(!PwdKeyFirst[0] && "********" != f1.cKeypadUnLockPIN.value) ||
			f1.cKeypadLockTimeout.value != f2.hcKeypadLockTimeout.value ||
			f1.cEmergencyCall.value != f2.hcEmergencyCall.value )
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cKeyAsSend.value != f2.hcKeyAsSend.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cCallCompletion.value != f2.hcCallCompletion.value)
	{
		dataChangedWarnFlag = 1;
	}
	
	if(f1.cFeatureKeySync.value != f2.hcFeatureKeySync.value)
	{
		dataChangedWarnFlag = 1;
	}	
	if(f1.cEarlyDtmf.value != f2.hcEarlyDtmf.value)
	{
		dataChangedWarnFlag = 1;
	}
	if(f1.cDirectIP.value != f2.hcDirectIP.value)
	{
		dataChangedWarnFlag = 1;
	}
	if(f1.cMulticastCodec.value != f2.hcMulticastCodec.value)
	{
		dataChangedWarnFlag = 1;
	}
//Android	
	if(f2.hcVsipIsOpenForcedVoice.value != f1.cVsipIsOpenForcedVoice.value) 
	{
		dataChangedWarnFlag = 1;
	}
	if(f2.hcVsipIsOpenChooseOutgingLine.value != f1.cVsipIsOpenChooseOutgingLine.value) 
	{
		dataChangedWarnFlag = 1;
	}
	if(f2.hcVsipDialingMatchType.value != f1.cVsipDialingMatchType.value) 
	{
		dataChangedWarnFlag = 1;
	}	
	if(f2.hcVsipCallerLocation.value != f1.cVsipCallerLocation.value) 
	{
		dataChangedWarnFlag = 1;
	}	
	if(f2.hcVsipMissedCallTone.value != f1.cVsipMissedCallTone.value) 
	{
		dataChangedWarnFlag = 1;
	}	
	if(f2.hcLongDistanceMobilePrefix.value != f1.cLongDistanceMobilePrefix.value) 
	{
		dataChangedWarnFlag = 1;
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

function CheckIntcomSts()
{
	var f1 = document.forms["body_form"];	
	if(0 == f1.cIntercomAllow.value)
	{
		setDisabled(f1.cIntercomMute, true);
	}
	else
	{
		setDisabled(f1.cIntercomMute, false);
	}
}

function CheckHotLineSts()
{
	var f1 = document.forms["body_form"];	
	if(0 == f1.cHotLineEnable.value)
	{
		setDisabled(f1.cHotLineNumber, true);
		setDisabled(f1.cHotLineDelay, true);
	}
	else
	{
		setDisabled(f1.cHotLineNumber, false);
		setDisabled(f1.cHotLineDelay, false);
	}
}

function CheckACDActAutoSts()
{
	var f1 = document.forms["body_form"];	
	if(0 == f1.cACDActAuto.value)
	{
		setDisabled(f1.cACDActAutoTimer, true);
	}
	else
	{
		setDisabled(f1.cACDActAutoTimer, false);
	}
}

function ChangeAccountPage()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	var strSubmData = "begin";
	if(f1.cCurAccount.value != f2.hcCurAccount.value)
	{
		strSubmData = strSubmData + "&cCurAccount=" + f1.cCurAccount.value;
	}
	if(f1.cDNDCurAccount.value != f2.hcCurAccount.value)
	{
		strSubmData = strSubmData + "&cCurAccount=" + f1.cDNDCurAccount.value;
	}
	
	strSubmData = strSubmData + "&Operation=Submit";
	strSubmData += "&SubmitData=end";
	f3.SubmitData.value = strSubmData;
	DoForm3Submit(f3);
}

function CheckPhone()
{
	var f1 = document.forms["body_form"];	
	var f3 = document.forms["submit_form"];
	
	if(f1.cDNDCurAccount.value != 65535)
	{
		f1.cCurAccount.value = 65535;
		f1.cDNDCurAccount.value = 65535;
		var strSubmData = "begin";
		strSubmData = strSubmData + "&cCurAccount=" + f1.cCurAccount.value;
		strSubmData = strSubmData + "&Operation=Submit";
		strSubmData += "&SubmitData=end";
		f3.SubmitData.value = strSubmData;
		DoForm3Submit(f3);
	}
}

function CheckCustom()
{
	var f1 = document.forms["body_form"];	
	var f3 = document.forms["submit_form"];
	if(65535 == f1.cCurAccount.value)
	{
		f1.cCurAccount.value = 0;
		f1.cDNDCurAccount.value = 0;
		setDisabled(f1.cCurAccount, false);
		setDisabled(f1.cDNDCurAccount, false);
		
		var strSubmData = "begin";
		strSubmData = strSubmData + "&cCurAccount=" + f1.cCurAccount.value;
		strSubmData = strSubmData + "&Operation=Submit";
		strSubmData += "&SubmitData=end";
		f3.SubmitData.value = strSubmData;
		DoForm3Submit(f3);
	}
}