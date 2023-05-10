PhonToneInfo1 = "Phone Tones Page"
PhonToneInfo2 = "tone format as:"

PhoneRingInfo1 = "Custom ringtone type:"
PhoneRingInfo2 = "WAV，codec: PCMU or PCMA，sample rate: 8000hz，broadcast rate: 64kbps, single channel."
PhoneRingInfo3 = "ring tone file name length：not more than 26 chars"

PageDescription1 = "Page Introduction："
WarningDescription = "Warning："
NoteLabel = "Note："
NoteContent = ["Max length of characters for input box:"
								,"255: Broadsoft Phonebook server address"
								,"127: Remote Phonebook URL & AUTOP Manual Update Server URL"
								,"63: The rest of input boxes"]


//-------------------------------网页帮助页面介绍文档-----------------------------------
StatusDes="Status Page"
AccountBDes="Account-Basic Page"
AccountADes="Account-Advance Page"
NetworkBDes="Network-Basic Page"
NetworkADes="Network-Advance Page"
PhoneTLDes="Phone-Time/Language Page"
PhonePrefDes="Phone-Preference Page"
PhoneCFDes="Phone-CallFeature Page"
PhoneVoiceDes="Phone-Voice Page"
PhoneKeyDisDes="Phone-Key/Display Page"
PhoneRingDes="Phone-Ring Page"
PhoneDialPlanDes="Phone-Dial Page"
PhoneBookDes="PhoneBook Page"
RemoteBookDes="PhoneBook-RemoteBook Page"
CallLogDes="PhoneBook-CallLog Page"
UpgradeBDes="Upgrade-Basic Page"
UpgradeADes="Upgrade-Advance Page"
SecurityBDes="Security-Basic Page"
SecurityADes="Security-Advance Page"
TalkingDes=""


//-------------------------------网页帮助字段说明文档-----------------------------------
FieldDescription = "Field Description："
//FieldDescription1 = "说明字段所涉及到的使用功能及限制条件。"
//var FieldDescription1 = new Array(new Array())
//FieldDescription1[0] = ["fieldDescription", "说明字段所涉及到的使用功能及限制条件。"];
var FieldDescription1 = [
 ["fieldDescription", "Describe the field's utility and confine"],
 ////状态页面
 ["tProductInfo","Show the detail information of the phone's current model, MAC address, firmware version and hardware version"],
 ["tNetworkInfo","Show the detail information of the phone's network config"],
 ["tAccountInfo","Show the detail information of the phone's account registration status and sip server"],
 ////账号-基本页面
 //SIP帐号
// ["tSIPAccount"," "],
 ["tAccountStatus","Description of user registration status"],
// ["tAccount"," "],
// ["tAccountActive"," "],
 ["tDisplayLabel","The name showing on the LCD of the phone"],
 ["tDisplayName","The local phone name showing on the other phone when calling"],
 ["tRegisterName","The user name provided by ISP"],
 ["tUserName","The register name provided by ISP"],
 ["tPassword","Password provided by ISP"],
 //SIP服务器
 ["tSIPServer","Sip server address provided by ISP"],
// ["tServerIP"," "]
 //呼出代理服务器
 ["tEnableProxyServer","It is used to process signals and help the multi-media data streams to go through the firewall/NAT when there is firewall/NAT."],
 ["tServerIP1","Outbound proxy server"],
 ["tBakServerIP","A back up outbound proxy server"],
 ["tTransportType","There are three options as TCP,UDP,TLS.The registration packet will be encapsulated using selected protocols.TLS(Transport Layer Security) is encrypted."],
 ////账号-高级页面
 //编解码
 ["tCodecs","The audio codecs used during the call"],
 //订阅
 ["tSubscribeRegister","The phone will send a subscribe packet to sip server when it registers an account successfully and the server will response all the information belong to this phone when the server support it."],
 ["tMWISubscribe","The phone will send subscribe packet to sip server for the subscribing of the account voice mail when it registers an account successfully and the MWI subscribe is enabled."],
 //DTMF
 ["tDTMFType","The type to send DTMF by press digit key during the call, including Inband, RFC2833, SIP Info and so on"],
 //呼叫
 ["tAutoAnswer","The setting to enable/disable the auto answer"],
 ["tPRACK","Set to enable/disable Provisioning Response Acknowledge."],
 ["tPTime","Set interval time(in milliseconds) for Ptime(Packetization Time) which is used to configure duration of audio data in each RTP packet."],
 ["tAnonymCall","Set to enable/disable Anonymous Call."],
 ["tAnonymCallReject","Set to enable/disable Anonymous Rejection Call."],
//加密
 ["tVoiceEncry","Setting to enable or disable SRTP/encryption of voice packets"],
 ["tRegisterExpire","The value indicates how long should the SIP phone send registration request to the server.Although the final registration period should be negotiated with registrar"],
 ["tUDPKeepAliveMsg","SIP phone will periodically send UDP KeepAlive packet to the server in case the server may shutdown UDP port."],
 ["tUDPAliveMsgInterval","Set Interval for UDP KeepAlive Message"],
 ["tRPort","Rport(Remote port) is a parameter used for NAT Traversal"],
 ////网络-基本
 ["tDHCP","Make request to DHCP server automatically to get IP address, subnet mask, gateway, DNS etc."],
 ["tStaticIP","Set the IP address, subnet mask, gateway, DNS etc manually"],
 ////网络-高级
 ["tSNMPActive","Set to enable or disable SNMP,SNMP(Simple Network Management Protocols) is Internet-standard protocol for managing devices on IP networks"],
 ["tSNMPPort","Set port value for SNMP Server"],
 ["tSNMPTrustedIPAddr","Set SNMP server address"],
 ["tVLANActive1","Set to enable or disable VLAN(Virtual Local Area Network)"],
 ["tVID1","Set VLAN ID"],
 ["tPrior1","Set Priority Value for the VLAN"],
 ["tTR069","TR-069(Technical Report 069) is a technical specification entitled CPE WAN Management Protocol (CWMP).It defines an application layer protocol for remote management of end-user devices."],
 ["tTR069Active","Set to enable or disable TR069"],
 ["tTR069Version","Set TR069 version"],
 ["tTR069ACSURL","Set TR069 server URL"],
 ["tTR069ACSUser","Set user name used to connect to TR069 server"],
 ["tTR069ACSPWD","Set password to connect to TR069 server"],
 ["tTR069InformPerActive","Set to enable or disable Periodic inform for TR069"],
 ["tTR069InformPeriod","Set the interval for TR069 periodic inform"],
 ["tDDNS","DDNS is dynamic domain name system, it specifies that the dynamic IP address of phone is mapped to a fixed domain name by DDNS server"], 
 ////话机-时间/语言
 //网页语言
 ["tWebLanguage","Select the language of web page"],
 //时间设置
 ["tTimeFormat","Set phone's time to 12-hour or 24-hour"],
 ["tDateFormat","Set the display format of date"],
 ["tHeadSetMode","Set to enable or disable Headset mode,If enable the phone will by default set to Headset mode"],
 ["tKeyPressSound","Set key press sound volume"],
 //类型
 ["tManual","Set time and date manually"],
 ["tAuto","Require time and date automatically by SNTP"],
 //NTP
 ["tTimeZone","Select the timezone in which you locate"],
 ["tPrimaryNTPServer","Set the primary server of getting SNTP time"],
 ["tSecondryNTPServer","Set the second server of getting SNTP time"],
 ["tUpdateInterval","Set the interval time of checking phone's local time with SNTP server"],
 ["tDayLightSaving","Daylight saving time, the time in the summer days when sun rises early will be adjusted forward to save daylight. The DST will take effects during the period that set by user."],
 ["tOffSet","Positive offset indicates the time will be faster than standard local time."],
 ////话机-基本设置
 ////话机-通话特性
 //呼叫前转
 ["tForwardTransfer","Set the forward call transfer"],
 ["tForwardAlways","Setting to enable/disable the always forward transfer"],
 ["tAlwaysTarget","The target number of always forward transfer"],
 ["tAlwaysOnCode","The feature code to enable always forward of line*, phone enable the always forward by sending this code to server, (some chars, like @, is not supported)"],
 ["tAlwaysOffCode","The feature code to disable always forward of line*, phone disable the always forward by sending this code to server, (some chars, like @, is not supported)"],
 ["tForwardBusy","Setting to enable/disable the busy forward transfer"],
 ["tBusyTarget","The target number of busy forward transfer"],
 ["tBusyOnCode","The feature code to enable busy forward of line*, phone enable the busy forward by sending this code to server, (some chars, like @, is not supported)"],
 ["tBusyOffCode","The feature code to disable busy forward of line*, phone disable the busy forward by sending this code to server, (some chars, like @, is not supported)"],
 ["tForwardNoAnswer","Setting to enable/disable the no answer forward transfer"],
 ["tNoAnswerRingTime","The waiting ring time of no answer forward transfer"],
 ["tNoAnswerTarget","The target number of no answer forward transfer"],
 ["tNoAnswerOnCode","The feature code to enable no answer forward of line*, phone enable the no answer forward by sending this code to server, (some chars, like @, is not supported)"],
 ["tNoAnswerOffCode","The feature code to disable no answer forward of line*, phone disable the no answer forward by sending this code to server, (some chars, like @, is not supported)"],
 //呼叫等待
 ["tCallWaitingEnable","The setting to enable the busy waiting of new incoming call"],
 ["tCallWaitingTone","Set the tone to prompting a new call on current call(when call waiting is enabled)"],
 //免打扰
 ["tReturnCodeDND","Set the return code when DND is active."],
 ["tDNDOnCode","Set the feature code to enable DND, the DND is enabled by sending this code to server."],
 ["tDNDOffCode","Set the feature code to disable DND, the DND is disabled by sending this code to server."],
 //呼叫驻留
 ["tEnableCallPark","Set to enable or disable call park utility."],
 ["tCallParkAccount","Set the account using call park."],
 ["tCallParkTarget","Set the target number of call park."],
 ["tIntercomAllow","Set to Enable or Disable Intercom which determine whether to accept incoming Intercom call or not"],
 ["tIntercomMute","If enable, when there is an incoming Intercom mute call,the device will be picked up automatically and the local party set to be Mute."],
 ["tHotLineEnable","Set to Enable or Disable HotLine,if Enable the Phone will dial out HotLine Number automatically when offhook for specific time configured by HotLine Delay time."],
 ["tHotLineNumber","Set HotLine Number"],
 ["tHotLineDelay","Set HotLine delay time"],
 ["tReturnCodeRefuse","Set Return Code after you refuse the incoming phone call."],
 ["tAutoAnswerDelay","Set Auto Answer Delay time for Auto Answer"], 
 ////话机-声音页面
 //回音消除
 ["tEchoCanceller","Setting of echo canceller"],
 ["tJitterBuffer","This is a shared data buffer, voice packets are captured to store here and are sent to smooth voice processor."],
 ["tMicVolume","Set Volume of microphone"],
 ////话机-按键/显示页面
 ["tSoftKey","Customize phone button function on idle state"],
 ["tBacklightIntens","Set backlight intense level for Screen LCD"],
 ["tBacklightTime","Set Backlight effect time,after the specific time backlight will go off automatically to save energy."],
 ////话机-铃声页面      自定义铃声格式：WAV，PCMU或PCMA编码，采样率8000hz，播放速率64kbps, 单通道。  铃声文件名长度限制：不能大于26个英文字符 
 ////话机-信号音页面    信号音格式如下:freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration][,freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration]] 
 ////话机-拨号规则页面
 //规则
 ["tRules","User can customize the value of prefix and replace in replace rule.The prefix value would be replaced by replaced string. Such as replace 10 by 1016 and it will make a call of 1016 when dialing 10."],
 ["tAreaCode","User can set the max length(1~15), min length(1~15) of areacode.With areacode In this length range, the phone will add the areacode set by user automatically before the number dialed by user."],
 ["tAccount1","User can customize the account using the dial rule, it will take effect only to this account specified."],
 ////电话簿-地址簿页面
 //联系人
 ["tContactModify","Add Contact/Black List, the name of a Contact or a Black List contact should not be empty.Modify Contact/Black List: select the item wanted, make modify and submit it."],
 ["MToBL","The Contact in Black List can be drag out of Black List and the Contact can be drag into Black List."],
 ["Contact_Delete","Delete Contact/BlackList. Click delete to delete one, more than one or all contacts selected."],
 ["tGroups","Display all local contacts' Group"],
 ["tContactsExportImport","Import or export XML format contact into local phoneBook"],
 ["tBlackListExportImport","Import or export XML format contact into black list"],
 ////电话簿-远程地址簿页面
 ["tRemotePhoneBook","Set remote phoneBook parameters like remote XML PhoneBook URL"],
 ////电话薄-通话记录页面
 //呼叫记录
 ["tCallHistory","Including received, dialed, missed, forwarded and all call history logs, click delete to delete one item, more than one items and all items, click certain to make sure."],
 ////升级-基本页面
 ["tUpgrade","Select the new firmware version distributed by ISP from local disk and upgrade the phone"],
 ["tFirmwareVersion","Display the current firmware version of current device."],
 ["tHardwareVersion","Display the current hardware version of current device."],
 ["tResetFactory","It will reset this device's all setting to the default configuration."],
 ["tReboot","Reboot the device when you click it"],
 ////升级-高级页面
 //PNP选项
 ["tPNPOption","The device will send request to server to get auto provision url when it's enabled."],
 //DHCP选项
 ["tDHCPOption","The DHCP option specified"],
 //手动更新服务器
 ["tManualUpdateServer","Specify the autop server's URL address of this device manually."],
 //自动更新
 ["tAutoPNowNotice","Click here to go on the auto provision immediately."],
 ["tClearMD5","Reset MD5 Value for configure file so that the phone will be forced to download and apply configure file during the next Provisioning process."], 
 //系统日志
 ["tSystemLogLevel","Select a level of the logs to export(It will take effect after reboot)"],
 ["tExportLog","Export the phone's logs to local PC"],
 //PCAP
 ["tPCAP","Click start to capture the phone's packet, click stop to stop capture, and click export to export the PCAP file to local PC after stop it."],
 //其他
 ["tConfigTar","Click export to export phone's current configuration, select a .tgz config file to import/overwrite the config of phone."],
 ////安全-基本页面
 ////安全-高级页面
 ["tWebCert","Display all Web Server Certificates that are trusted by Local Party.These Certificates should be used to verify specific server before establish of HTTPS connections."],
 ["tWebCertUpload","Upload Web Server Certificate"],
 ["tPhoneCert","Display all the Client Certificates that are used to be verified by the Web Server.These Certificates should be used to verify Local Party to certain Web Server."],
 ["tPhoneCertUpload","Upload Client Certificate"]
 // 隐藏的定制页面
// ["",""], 
]
