PhonToneInfo1 = "Toestel tonen pagina"
PhonToneInfo2 = "Tonen formaat als: "

PhoneRingInfo1 = "Eigen belsignaal type: "
PhoneRingInfo2 = "WAV，codec: PCMU of PCMA，sample rate: 8000hz，broadcast rate: 64kbps, single channel."
PhoneRingInfo3 = "Belsignaal bestand lengte: niet meer dan 26 karakters"

PageDescription1 = "Pagina introductie："
WarningDescription = "Waarschuwing："
NoteLabel = "Opmerking："
NoteContent = ["Max aantal karakters van de velden:","255 karakters: Broadsoft Phonebook server adres","127: Extern telefoonboek URL & Autoprovision  URL","63: De overige velden"]

//-------------------------------网页帮助页面介绍文档-----------------------------------
StatusDes="Status pagina"
AccountBDes="Account- Basis pagina"
AccountADes="Account- Geavanceerde pagina"
NetworkBDes="Netwerk - Basis pagina"
NetworkADes="Netwerk - Geavanceerde pagina"
PhoneTLDes="Toestel - tijd/taal pagina"
PhonePrefDes="Toestel - instellingen pagina"
PhoneCFDes="Toestel - Oproep instellingen paginae"
PhoneVoiceDes="Toestel - Audio instellingen pagina"
PhoneKeyDisDes="Toestel - Toetsen/Display pagina"
PhoneRingDes="Toestel - Belsignaal pagina"
PhoneDialPlanDes="Toestel- Kiezen pagina"
PhoneBookDes="Telefoonboek  pagina"
RemoteBookDes="Telefoonboek - Extern telefoonboek pagina"
CallLogDes="Telefoonboek - Oproeplijst pagina"
UpgradeBDes="Service - Basis pagina"
UpgradeADes="Service - Geavanceerde pagina"
SecurityBDes="Beveiliging - Basis pagina"
SecurityADes="Beveiliging - Geavanceerde pagina"
TalkingDes=""

//-------------------------------网页帮助字段说明文档-----------------------------------
FieldDescription = "Beschrijving："
//FieldDescription1 = "说明字段所涉及到的使用功能及限制条件。"
//var FieldDescription1 = new Array(new Array())
//FieldDescription1[0] = ["fieldDescription", "说明字段所涉及到的使用功能及限制条件。"];
var FieldDescription1 = [
 ["fieldDescription", "Beschrijving van de velden en eventuele beperkingen"],
 ////状态页面
 ["tProductInfo","Laat de detail informatie van het toestel zien : Model, MAC adres, firmware versie en hardware versie"],
 ["tNetworkInfo","Laat de detail informatie van het netwerk zien"],
 ["tAccountInfo","Laat de de detail informatie van de account, registratie status en SIP server zien"],
 ////账号-基本页面
 //SIP帐号
// ["tSIPAccount"," "],
 ["tAccountStatus","Registratie status"],
// ["tAccount"," "],
// ["tAccountActive"," "],
 ["tDisplayLabel","De naam in het display van het toestel"],
 ["tDisplayName","Display naam bij gesprekspartner"],
 ["tRegisterName","De accountnaam verstrekt door provider"],
 ["tUserName","De gebruikersnaam verstrekt door provider"],
 ["tPassword","Wachtwoord verstrekt door provider"],
 //SIP服务器
 ["tSIPServer","Sip server adres verstrekt door provider"],
// ["tServerIP"," "]
 //呼出代理服务器
 ["tEnableProxyServer","Helpt de data door de firewall/NAT"],
 ["tServerIP1","Outbound proxy server"],
 ["tBakServerIP","Een back-up outbound proxy server"],
 ["tTransportType","Er zijn 3 mogelijkheden TCP,UDP,TLS. De packetten zullen dit protocol gebruiken.TLS (Transport Layer Securiry) is encrypted."],
 ////账号-高级页面
 //编解码
 ["tCodecs","De audio codecs die gebruikt worden tijdens het gesprek"],
 //订阅
 ["tSubscribeRegister","Het toestel stuurt een  subscribe packet naar de  sip server wanneer het succelvol is geregistreerd en de server zal antwoorden met de informatie dat behoort bij het toestel, wanneer de server dit ondersteund."],
 ["tMWISubscribe","Het toestel stuurt een subscribe packet naar de sip server voor abonneren voor de voicemail wanneer het toestel is geregistreerd en MWI is beschikbaar."],
 //DTMF
 ["tDTMFType","Het type  DTMF bij drukken van een toets tijdens het gesprek: Inband, RFC2833, SIP Info,  etc.."],
 //呼叫
 ["tAutoAnswer","In/Uitschakelen van automatisch aannemen"],
 ["tPRACK","In/Uitschakelen Provisioning Response Acknowledge."],
 ["tPTime","Tijds interval instellen(in miliseconden) voor Ptime(Packetization Time) welke is gebruikt voor def audio data in een RTP packet."],
 ["tAnonymCall","In/Uitschakelen Anonieme oproepen."],
 ["tAnonymCallReject","In/Uitschakelen om anonieme oproepen af te wijzen."],
 //加密
 ["tVoiceEncry","In/Uit schakelen SRTP/encryption voor voice packets"],
 ["tRegisterExpire","Deze waarde geeft aan hoe lang de SIP toestel een registratie verzoek stuurt naar de server"],
 ["tUDPKeepAliveMsg","SIP toestel stuurt periodiek UDP KeepAlive packet naar de server als de server de UDP port afsluit."],
 ["tUDPAliveMsgInterval","Instellen  Interval voor UDP KeepAlive Message"],
 ["tRPort","Rport(Remote port) is een parameter die gebruikt wordt voor NAT Traversal"],
 ////网络-基本
 ["tDHCP","Doet een verzoek bij de DHCP server om automatisch een  IP adres, subnet mask, gateway, DNS etc te krijgen."],
 ["tStaticIP","Handmatig het IP adres, subnet mask, gateway, DNS etc"],
 ////网络-高级
 ["tSNMPActive","In/Uit schakelen SNMP,SNMP(Simple Network Management Protocols) is Internet-standard protocol voor programmeren van toestellen op een IP networks"],
 ["tSNMPPort","Instellen poort voor SNMP Server"],
 ["tSNMPTrustedIPAddr","Instellen SNMP server adres"],
 ["tVLANActive1","In/Uit schakelen VLAN(Virtual Local Area Network)"],
 ["tVID1","Instellen VLAN ID"],
 ["tPrior1","Instellen Priority waarde voor VLAN"],
 ["tTR069","TR-069(Technical Report 069) is een technische specificatie CPE WAN Management Protocol (CWMP)."],
 ["tTR069Active","In/Uitschakelen TR069"],
 ["tTR069Version","Instellen TR069 versie"],
 ["tTR069ACSURL","Instellen TR069 server URL"],
 ["tTR069ACSUser","Instellen gebruikersnaam voor verbinden met de TR069 server"],
 ["tTR069ACSPWD","Instellen wachtwoord voor verbinden met  de TR069 server"],
 ["tTR069InformPerActive","In/Uitschakelen periodic inform voor TR069"],
 ["tTR069InformPeriod","Instellen interval voor TR069 periodiek inform"],
 ["tDDNS","DDNS is dynamic domain name system, it specifies that the dynamic IP address of phone is mapped to a fixed domain name by DDNS server"], 
 ////话机-时间/语言
 //网页语言
 ["tWebLanguage","Selecteer de taal van de webpagina"],
 //时间设置
 ["tTimeFormat","Instellen toestel tijd naar 12-uur of 24-uur"],
 ["tDateFormat","Instellen formaat van de datum"],
 ["tHeadSetMode","In/Uit schakelen Headset mode, indien ingeschakeld het toestel staat dan standaard in de  Headset mode"],
 ["tKeyPressSound","Instellen toets toon volume"],
 //类型
 ["tManual","Instellen datum en tijd handmatig"],
 ["tAuto","Datum en tijd automatisch ontvangen bij SNTP"],
 //NTP
 ["tTimeZone","Selecteer de tijdzone waarin u zich bevindt"],
 ["tPrimaryNTPServer","Instellen van de primaire SNTP server"],
 ["tSecondryNTPServer","Instellen van de secundaire SNTP servertime"],
 ["tUpdateInterval","Instellen interval voor bij SNTP server"],
 ["tDayLightSaving","Zomertijd instellen."],
 ["tOffSet","Positief compenseren de tijd zal sneller zijn dan de lokale tijd."],
 ////话机-基本设置
 ////话机-通话特性
 //呼叫前转
 ["tForwardTransfer","Instellen doorschakeling"],
 ["tForwardAlways","In/Uitschakelen direct doorschakelen"],
 ["tAlwaysTarget","Het doel van de direct doorschakelen"],
 ["tAlwaysOnCode","De functie code om direct doorschakelen van lijn* in te schakelen, toestel gebruikt deze code om door te schakelen te activeren, (sommige karakters, als @, worden niet ondersteund)"],
 ["tAlwaysOffCode","De functie code om direct doorschakelen van lijn* uit te schakelen, toestel gebruikt deze code om door te schakelen te de-activeren, (sommige karakters, als @, worden niet ondersteund)"],
 ["tForwardBusy","In/Uitschakelen bij bezet doorschakelen"],
 ["tBusyTarget","Het doel van de doorschakeling bij bezet"],
 ["tBusyOnCode","De functie code om bij bezet doorschakelen van lijn* in te schakelen, toestel gebruikt deze code om door te schakelen te activeren, (sommige karakters, als @, worden niet ondersteund)"],
 ["tBusyOffCode","De functie code om bij bezet doorschakelen van lijn* uit te schakelen, toestel gebruikt deze code om door te schakelen te activeren, (sommige karakters, als @, worden niet ondersteund)"],
 ["tForwardNoAnswer","In/Uitschakelen bij geen antwoordt doorschakelen"],
 ["tNoAnswerRingTime","De tijd om bij geen antwoordt door te schakelen"],
 ["tNoAnswerTarget","Het doel van de doorschakelen bij geen antwoord"],
 ["tNoAnswerOnCode","De functie code om bij geen antwoordt doorschakelen van lijn* in te schakelen, toestel gebruikt deze code om door te schakelen te activeren, (sommige karakters, als @, worden niet ondersteund)"],
 ["tNoAnswerOffCode","De functie code om bij geen antwoordt doorschakelen van lijn* uit te schakelen, toestel gebruikt deze code om door te schakelen te activeren, (sommige karakters, als @, worden niet ondersteund)"],
 //呼叫等待
 ["tCallWaitingEnable","Instelling om bezet melding tegeven aan een nieuwe oproep"],
 ["tCallWaitingTone","Instellen van de aanklop toon van een nieuw oproep tijdens een gesprek(wanneer aankloppen actief is)"],
 //免打扰
 ["tReturnCodeDND","Instellen van de terugcode wanneer DND actief is."],
 ["tDNDOnCode","De functie code om DND in te schakelen."],
 ["tDNDOffCode","De funcite code om DND uit te schakelen."],
 //呼叫驻留
 ["tEnableCallPark","Set to enable or disable call park utility."],
 ["tCallParkAccount","Instellen account voor call park."],
 ["tCallParkTarget","In stellen het doel bij call park."],
 ["tIntercomAllow","In/Uischakelen Intercom voor het acceptren van een inkommende intercom oproep"],
 ["tIntercomMute","Als ingeschakeld, zal bij een inkomende intercom oproep de oproep worden aangenomen, de microfoon van het toestel wordt uitgeschakeld."],
 ["tHotLineEnable","In/Uit schakelen Hotlijn functie, als ingeschakeld het toestel zal automatich het hotlijn nummer kiezen na de ingesteld tijd."],
 ["tHotLineNumber","Instellen HotLine Nummer"],
 ["tHotLineDelay","Instellen HotLine vertragings tijd"],
 ["tReturnCodeRefuse","Instellen terug code bij het afwijzen van een inkomende oproep."],
 ["tAutoAnswerDelay","Instellen  tijd voor automatisch aannemen van een gesprek"], 
 ////话机-声音页面
 //回音消除
 ["tEchoCanceller","instellingen voor echo cancelling"],
 ["tJitterBuffer","Dit is een gedelde data buffer,  spraak pakketen worden opgeslagen en verzonden naar een soepele spraak processor."],
 ["tMicVolume","Zet Volume van de microfoon"],
 ////话机-按键/显示页面
 ["tSoftKey","Wijzig telefoon button functie bij ruststand"],
 ["tBacklightIntens","Zet achtergrondverlichting level voor Beeldscherm"],
 ["tBacklightTime","Zet achtergrondverlichtings effect tijd, Na de specifieke tijd zal het achtergrondverlichting overschakelen naar energie bespraringsstand."],
 ////话机-铃声页面      自定义铃声格式：WAV，PCMU或PCMA编码，采样率8000hz，播放速率64kbps, 单通道。  铃声文件名长度限制：不能大于26个英文字符 
 ////话机-信号音页面    信号音格式如下:freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration][,freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration]] 
 ////话机-拨号规则页面
 //规则
 ["tRules","De gebruiker kan de waarde van de prefix aanpassen en  vervangen in plaats regel. De prefix waarde zou worden vervangen door de vervangende string. Zoals bijv. het vervangen van 10 door 1016 en het toestel zal dan een oproep maken naar 1016, bij het kiezen van 10."],
 ["tAreaCode","Gebruiker kan de max lengte(1~15), min lengte(1~15) van netnummer aanpassen.Met een netnummer in dit bereik, de telefoon zit dit netnummer automatisch voor het nummer dat door de gebruiker gedraaid wordt."],
 ["tAccount1","Gebruiker kan het account wijzigen doormiddel van de kies regel. Dit werkt alleen op dit account."],
 ////电话簿-地址簿页面
 //联系人
 ["tContactModify","Voeg  Contact/Blokkade Lijst toe, de naam van een Contact of een blokkade lijst contact mag niet leeg zijn. Wijzig  Contact/Blokkade Lijst: selecteer de item die je wil wijzigen, wijzig het en bevestig."],
 ["MToBL","De Contact in de blokkade lijst kan gesleept worden in of uit de blokkade lijst."],
 ["Contact_Delete","Verwijder contact. Druk op verwijderen om 1 of alle geselecteerde contacten te verwijderen."],
 ["tGroups","Toon alle lokale contact groepen"],
 ["tContactsExportImport","Import or export XML bestand contact in de lokale telefoonboek"],
 ["tBlackListExportImport","Import or export XML bestand contact in de blokkade lijst"],
 ////电话簿-远程地址簿页面
 ["tRemotePhoneBook","Zet remote telefoonboek parameters zoals  remote XML telefoonboek URL"],
 ////电话薄-通话记录页面
 //呼叫记录
 ["tCallHistory","Inclusief ontvangen, uitgaande, gemiste gespreken, doorgeschakelde en belgeschiedenis logs, klik op Verwijderen om een item, meerdere items en alle items wilt verwijderen, klikt u zeker om er zeker van te zijn."],
 ////升级-基本页面
 ["tUpgrade","Selecteer de nieuwe firmware versie van de ISP  van de lokale hardeschijf  om de telefoon te updaten"],
 ["tFirmwareVersion","Toont de huidige firmware versie."],
 ["tHardwareVersion","Toont de huidige hardware versie."],
 ["tResetFactory","Hersteld de fabrieks instellingen"],
 ["tReboot","Herstart het toestel"],
 ////升级-高级页面
 //PNP选项
 ["tPNPOption","Het toestel zal een bericht versturen naar de  server om een auto provisiing url te krijgen.Wanneer dit actief is"],
 //DHCP选项
 ["tDHCPOption","de DHCP optie gespecificeerd"],
 //手动更新服务器
 ["tManualUpdateServer","Specificeer de autop server's URL adres voor dit toestel handmatig."],
 //自动更新
 ["tAutoPNowNotice","Druk hier om Auto provisioning meteen uit te voeren."],
 ["tClearMD5","Herstel MD5 waarde om de telefoon te forceren om het configuratie bestand te downloaden en toe te passen tijdens de volgende Provisioning proces."], 
 //系统日志
 ["tSystemLogLevel","Selecteer een level van de logs om te exporteren(Het is pas actief naar een herstart."],
 ["tExportLog","Exporteer de telefoon logs naar een lokale PC"],
 //PCAP
 ["tPCAP","Klik op Start om pakket van de telefoon vast te leggen, klik op stop om het vastleggen te stoppen, en klik op uitvoer om het PCAP bestand te exporteren naar een lokale PC naar het stoppen."],
 //其他
 ["tConfigTar","Klik op Exporteren om de huidige configuratie van de telefoon's te exporteren, selecteert een. tgz configuratiebestand om te importeren / overschrijven van de config van de telefoon."],
 ////安全-基本页面
 ////安全-高级页面
 ["tWebCert","Toon alle Web Server Certificaten die worden vertrouwd door Local Party. Deze Certificaten moeten worden gebruikt om een specifieke server te controleren voor het maken van de HTTPS-verbindingen."],
 ["tWebCertUpload","Laad Web Server Certificaat"],
 ["tPhoneCert","Toon alle client Certificaten die  gecontroleerd moeten worden door de Web server. Deze Certificaten moeten worden gebruikt om de lokale partij controleren op een bepaalde Web Server."],
 ["tPhoneCertUpload","Laad Client Certificaat"]
 // 隐藏的定制页面
// ["",""], 
]
