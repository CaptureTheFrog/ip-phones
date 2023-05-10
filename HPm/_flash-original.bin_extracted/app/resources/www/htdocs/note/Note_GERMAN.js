PhonToneInfo1 = "Klingelton Seite"
PhonToneInfo2 = "Klingelton-Format als:"

PhoneRingInfo1 = "Benutzerspezifischer Klingelton Typ:"
PhoneRingInfo2 = "WAV，codec: PCMU or PCMA，sample rate: 8000hz，bit rate: 64kbps, mono."
PhoneRingInfo3 = "Länge des Ringtone-Files: nicht mehr als 26 Zeichen"

PageDescription1 = "Seiten Einführung："
WarningDescription = "Warnung : "
NoteLabel = "Bemerkung : "
NoteContent = ["Max. Zeichenlänge des Eingabefeldes:"
								,"255: Broadsoft Telefonbuch Server Adresse"
								,"127: Remote Telefonbuch URL & AUTOP Handbuch Update Server URL"
								,"63: restliches Eingabefeld"]


//-------------------------------网页帮助页面介绍文档-----------------------------------
StatusDes="Status Seite"
AccountBDes="Konto-Basis Seite"
AccountADes="Konto-Erweitert-Seite"
NetworkBDes="Netzwerk-Basis-Seite"
NetworkADes="Netzwerk-Erweitert-Seite"
PhoneTLDes="Telefon-Zeit/Sprachen-Seite"
PhonePrefDes="Telefon Referenz Seite"
PhoneCFDes="Telefonanruf Leistungsmerkmal-Seite"
PhoneVoiceDes="Telefon Sprach Seite"
PhoneKeyDisDes="Telefontaste/Disolay Seite"
PhoneRingDes="Telefon-Klingelton Seite"
PhoneDialPlanDes="Telefon-Wahl Seite"
PhoneBookDes="Telefonbuch Seite"
RemoteBookDes="Telefonbuch-externes Telefonbuch Seite"
CallLogDes="Telefonbuch-Anruflisten Seite"
UpgradeBDes="Upgrade-Basic Seite"
UpgradeADes="Upgrade-Erweitert Seite"
SecurityBDes="Sicherheits-Basis Seite"
SecurityADes="Sicherheit-Erweitert Seite"
TalkingDes=""


//-------------------------------网页帮助字段说明文档-----------------------------------
FieldDescription = "Feld Beschreibung : "
//FieldDescription1 = "说明字段所涉及到的使用功能及限制条件。"
//var FieldDescription1 = new Array(new Array())
//FieldDescription1[0] = ["fieldDescription", "说明字段所涉及到的使用功能及限制条件。"];
var FieldDescription1 = [
 ["fieldDescription", "Beschreibt den Nutzen eines Feldes und seine Grenzen"],
 ////状态页面
 ["tProductInfo","Gibt Hinweise zum Telefon bezüglich MAC Adresse, Firmware Version und Hardware Version"],
 ["tNetworkInfo","Gibt Hinweise zur Netzwerkkonfiguration des Telefon"],
 ["tAccountInfo","Gibt Hinweise zum Telefon bezüglich Status der Kontenregistrierung und SIP-Server"],
 ////账号-基本页面
 //SIP帐号
// ["tSIPAccount"," "],
 ["tAccountStatus","Beschreibt den Status der Benutzer Registrierung"],
// ["tAccount"," "],
// ["tAccountActive"," "],
 ["tDisplayLabel","Der im Display angezeigte Name"],
 ["tDisplayName","Der Name des lokalen Telefons, der während eines Telefonates im Display des anderen Telefon angezeigt wird"],
 ["tRegisterName","Benutzername, stellt ISP zur Verfügung"],
 ["tUserName","Registrierter Name, stellt ISP zur Verfügung"],
 ["tPassword","Passwort, stellt ISP zur Verfügung"],
 //SIP服务器
 ["tSIPServer","SIP server Adresse stellt ISP zur Verfügung"],
// ["tServerIP"," "]
 //呼出代理服务器
 ["tEnableProxyServer","Wird zum Prozessablauf benötigt und bringt die Multi-Media Data Streams durch die Firewall/NAT, falls vorhanden."],
 ["tServerIP1","Outbound proxy server"],
 ["tBakServerIP","Ein Zweiter outbound proxy server"],
 ["tTransportType","Es bestehen drei Optionen wie TCP,UDP,TLS. Die Registrierungsdaten werden bei Verwendung des ausgesuchten Protokolls verkapselt. TLS(Transport Layer Securiry) ist verschlüsselt."],
 ////账号-高级页面
 //编解码
 ["tCodecs","Der während des Telefonates verwendete Audio Codecs"],
 //订阅
 ["tSubscribeRegister","Das Telefon sendet ein Paket zum SIP-Server sobald ein Konto erfolgreich registriert wurde. Der Server erwidert alle Informationen, falls der Server dieses unterstützt, die zum Telefon gehören."],
 ["tMWISubscribe","Das Telefon sendet ein Paket zum SIP-Server zum Billigen einer kontobezogenen Sprachnachricht, wenn das Konto erfolgreich angemeldet ist und NWI Benachrichtigung elaubt ist."],
 //DTMF
 ["tDTMFType","Die Art und Weise wie DTMF-Töne während eines Telefonat gesendet werden (Inband, RFC2833, SIP-Info und so weiter"],
 //呼叫
 ["tAutoAnswer","Die Einstellung um Abwesenheit zu erlauben oder nicht zu erlauben"],
 ["tPRACK","Setze Provisioning Response Acknowledge auf erlauben oder nicht erlauben."],
 ["tPTime","Setze eine Intervall-Zeit (in Millisekunden) für Ptime(Packetization Time), die benötigt wird eine Laufzeit für Audio-Daten in jedem RTP-Paket zu konfigurieren."],
 ["tAnonymCall","Setze anonym Ruf auf erlauben oder nicht erlauben."],
 ["tAnonymCallReject","Setze Abweisung eines anonym Ruf auf erlauben oder nicht erlauben."],
//加密
 ["tVoiceEncry","Einstellung SRTP/encryption von Sprachpaketen erlauben oder nicht erlauben"],
 ["tRegisterExpire","Der Wert entscheidet wie lange das SIP-Telefon eine Anforderung zur Anmeldung am den SIP-Server sendet. Ebenfalls sollte die abschliessende Anmeldeperiode mit registratr verhandelt werden"],
 ["tUDPKeepAliveMsg","Das SIP-Telefon sendet periodisch UDP KeepAlive Pakete an den Server für den Fall, dass der Server den UDP Port herunterfährt."],
 ["tUDPAliveMsgInterval","Setze Intervall für UDP KeepAlive Message"],
 ["tRPort","Rport(Remote port) ist ein Parameter, der für NAT Traversal benötigt wird"],
 ////网络-基本
 ["tDHCP","Stelle automatische Anforderung an den DHCP-Server, um eine IP-Adresse, Subnet-Mask, Gateway, DNS u.s.w. zu erhalten."],
 ["tStaticIP","Setze die IP-Adress, Subnet-Mask, Gateway, DNS u.s.w. händisch"],
 ////网络-高级
 ["tSNMPActive","Setze SNMP erlauben oder nicht erlauben,SNMP(Simple Network Management Protocols) ist ein Internet-Standard Protokoll zum Steuern von Geräten an IP-Netzwerken"],
 ["tSNMPPort","Setze Portinhalt für den  SNMP Server"],
 ["tSNMPTrustedIPAddr","Setze SNMP Server Adresse"],
 ["tVLANActive1","Setze VLAN erlauben oder nicht erlauben (Virtual Local Area Network)"],
 ["tVID1","Setze VLAN ID"],
 ["tPrior1","Setze Priorität für das VLAN"],
 ["tTR069","TR-069(Technical Report 069) ist eine technischel Spezifikation bezeichnet CPE WAN Management Protocol (CWMP).Es definiert ein Applikationslayer Protokoll zum Fernsteuern von end-user devices."],
 ["tTR069Active","Setze TR069 erlauben oder nicht erlauben"],
 ["tTR069Version","Setze die TR069 Version"],
 ["tTR069ACSURL","Setze die TR069 Server URL"],
 ["tTR069ACSUser","Setze den benötigten Benutzernamen, um sich mit dem TR069 Server zu verbinden"],
 ["tTR069ACSPWD","Setze das Passwort zur Verbindung mit dem TR069 Server"],
 ["tTR069InformPerActive","Setze periodische Informatin für TR069 erlauben oder nicht erlauben"],
 ["tTR069InformPeriod","Setze Intervall für TR069 periodische Information"],
 ["tDDNS","DDNS is dynamic domain name system, it specifies that the dynamic IP address of phone is mapped to a fixed domain name by DDNS server"], 
 ////话机-时间/语言
 //网页语言
 ["tWebLanguage","Auswahl der Sprache für die Web-Seite treffen"],
 //时间设置
 ["tTimeFormat","Setze das Telefon auf 12- oder 24 Stunden Zeitformat"],
 ["tDateFormat","Setze das Datumsformat"],
 ["tHeadSetMode","Setze Kopfhörer-Modus erlauben oder nicht erlauben. Falls erlaubt wird das Telefon automatisch auf auf Kopfhörer umschalten"],
 ["tKeyPressSound","Setze die Sound-Lautstärke"],
 //类型
 ["tManual","Setze Uhrzeit und Datum händisch"],
 ["tAuto","Fordert Zeit und Datum automatisch per SNTP an"],
 //NTP
 ["tTimeZone","Auswahl der lokalen Zeitzone"],
 ["tPrimaryNTPServer","Set the primary server of getting SNTP time"],
 ["tSecondryNTPServer","Setzen eines weiteren Server um SNTP Zeit zu erhalten"],
 ["tUpdateInterval","Setzen der Intervallzeit, um die lokale Zeit des Telefon mit dem SNTP Swerver zu überprüfen"],
 ["tDayLightSaving","Sommerzeit. Die Einstellung wirkt solange, wie sie vom Benutzer eingestellt wird."],
 ["tOffSet","Ein positives Verschieben bewirkt, dass die Zeit vor der lokalen Uhrzeit liegt."],
 ////话机-基本设置
 ////话机-通话特性
 //呼叫前转
 ["tForwardTransfer","Setzen der Weiterleitung "],
 ["tForwardAlways","Einstellung zum erlauben/nicht erlauben der Weiterleitung immer"],
 ["tAlwaysTarget","Zielrufnummer für Weiterleitung immer"],
 ["tAlwaysOnCode","Die Kennziffer für das Leistungsmerkmal zum Einschalter der Weiterleitung immer für die Line *, das Telefon sendet diese Kennziffer zum Server, (einige Zeichen, wie @, werden nicht unterstützt)"],
 ["tAlwaysOffCode","Die Kennziffer für das Leistungsmerkmal zum Ausschalter der Weiterleitung immer für die Line *, das Telefon sendet diese Kennziffer zum Server, (einige Zeichen, wie @, werden nicht unterstützt)"],
 ["tForwardBusy","Einstellung zum erlauben/nicht erlauben der Weiterleitung bei besetzt"],
 ["tBusyTarget","Die Zielrufnummer für Weiterleitung bei besetzt"],
 ["tBusyOnCode","Die Kennziffer für das Leistungsmerkmal zum Einschalter der Weiterleitung bei besetzt für die Line *, das Telefon sendet diese Kennziffer zum Server (einige Zeichen, wie @, werden nicht unterstützt)"],
 ["tBusyOffCode","Die Kennziffer für das Leistungsmerkmal zum Ausschalter der Weiterleitung bei besetzt für die Line *, das Telefon sendet diese Kennziffer zum Server (einige Zeichen, wie @, werden nicht unterstützt)"],
 ["tForwardNoAnswer","Einstellung zum erlauben/nicht erlauben der Weiterleitung bei Abwesenheit"],
 ["tNoAnswerRingTime","Die verzögerte Klingelzeit bei Weiterleitung bei Abwesenheit"],
 ["tNoAnswerTarget","Die Zielrufnummer für die Weiterleitung bei Abwesenheit"],
 ["tAnswerOnCode","Die Kennziffer für das Leistungsmerkmal zum Einschalter der Weiterleitung bei Abwesenheit für die Line *, das Telefon sendet diese Kennziffer zum Server (einige Zeichen, wie @, werden nicht unterstützt)"],
 ["tAnswerOffCode","Die Kennziffer für das Leistungsmerkmal zum Ausschalter der Weiterleitung bei Abwesenheit für die Line *, das Telefon sendet diese Kennziffer zum Server (einige Zeichen, wie @, werden nicht unterstützt)"],
 //呼叫等待
 ["tCallWaitingEnable","Einstellung um Anklopfen erlauben zu ermöglichen"],
 ["tCallWaitingTone","Setzt den Ton für Anklopfen, wenn anklopfen erlaubt ist"],
 //免打扰
 ["tReturnCodeDND","Setzt den Rückmelde-Code sobald DND aktiviert ist."],
 ["tDNDOnCode","Setzt den Code um DND zu erlauben, DND ist eingeschaltet, sobald dieser Code zum Server gesendet wird."],
 ["tDNDOffCode","Setze den Code um DND nicht zu erlauben,  DND ist abgeschaltet sobald dieser Code zum Server gesendet wird."],
 //呼叫驻留
 ["tEnableCallPark","Setze Parken auf erlauben oder nicht erlauben."],
 ["tCallParkAccount","Setze das Konto auf parken."],
 ["tCallParkTarget","Setze die Zielrufnummer um Gespräche zu parken"],
 ["tIntercomAllow","Setze Durchsage erlauben oder nicht erlauben. Dies legt fest, ob Durchsagen akzeptiert werden oder nicht."],
 ["tIntercomMute","Falls Intercom Mute (Anwendung z.B. bei Babyruf, Raumüberwachung) erlaubt ist , wird bei der Durchsagefunktion das Telefon automatisch aktiviert und das lokale Telefon auf stumm geschaltet."],
 ["tHotLineEnable","Setze HotLine erlauben oder nicht erlauben. Falls erlaubt, ruf das Telefon die Hotline-Nummer automatisch an, sobald für eine bestimmte Zeit, konfiguriert per Holine-Verzögerungs-Zeit, abgehoben ist."],
 ["tHotLineNumber","Setze Hotline-Nummer"],
 ["tHotLineDelay","Setze die Hotline-Verzögerungs-Zeit"],
 ["tReturnCodeRefuse","Setze den Rückmelde-Code nach Abweisung des eingehenden Anrufs."],
 ["tAutoAnswerDelay","Setze Verzögerung für Anwesenheit bei Abwesenheit"],  
 ////话机-声音页面
 //回音消除
 ["tEchoCanceller","Einstellung des echo canceller"],
 ["tJitterBuffer","Dies ist ein shared Data Buffer, Sprachpakete werden hier gespeichert und an einen Sprach-Prozessor gesendet."],
 ["tMicVolume","Setzen der Lautstärke des Mikrofon"],
 ////话机-按键/显示页面
 ["tSoftKey","Kundenspezifische Einstellung der Tasten im Ruhezustand"],
 ["tBacklightIntens","Setzen der Helligkeit der Hintergrundbeleuchtung des LCD Display"],
 ["tBacklightTime","Setzen der Einschaltdauer der Hintergrundbeleuchtung. Danach schaltet sich die Beleuchtung autom. aus, damit Energie gespart wird."],
 ////话机-铃声页面      自定义铃声格式：WAV，PCMU或PCMA编码，采样率8000hz，播放速率64kbps, 单通道。  铃声文件名长度限制：不能大于26个英文字符 
 ////话机-信号音页面    信号音格式如下:freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration][,freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration]] 
 ////话机-拨号规则页面
 //规则
 ["tRules","Anwender können die Vorwahlnummer per Regel ändern. Beispiel: Ersetze 10 durch 1016. Dadurch wird die Telefonnummer 1016 gewählt, wenn die Tasten 10 gewählt werden."],
 ["tAreaCode","Benutzer können die maximale und minimale Länge der Vorwahl (1-15) bestimmen. Die Vorwahl wird automatisch bei Wahl einer Telefonnummer dieser Nummer vorangestellt."],
 ["tAccount1","Benutzer können das Konto mit der Hilfe der Wahlregel beeinflussen. Die Regel wird nur auf das spezifizierte Konto angewand."],
 ////电话簿-地址簿页面
 //联系人
 ["tContactModify","Hinzufügen von Kontakten/Sperrliosten. Der Name der Kontakte/Sperrlisten darf nicht leer sein. Modifizieren der Kontakte/Sperrlisten: gewünschtes Objekt auswählen, modifizieren und bestätigen."],
 ["MToBL","Ein Kontakt kann aus der Sperrliste entfernt oder hinzugefügt werden."],
 ["Contact_Delete","Kontakte/sperrlisten löschen. Klicken Sie zum Löschen eines, mehrerer oder aller Kontakte löschen."],
 ["tGroups","Zeigt alle lokalen Kontakte 'Gruppe' an"],
 ["tContactsExportImport","Import oder export Kontakte in das lokale Telefonbuch per XML Format"],
 ["tBlackListExportImport","Import oder export Kontakte in die Sperrliste per XML Format"],
 ////电话簿-远程地址簿页面
 ["tRemotePhoneBook","Setzen der Parameter für das externe Telefonbuch, ähnlich wie bei der URL des externen XML Telefonbuches"],
 ////电话薄-通话记录页面
 //呼叫记录
 ["tCallHistory","Einschließlich angenommener, gewählter, verpasster, weitergeleiteter und aller in der Anrufliste enthaltener Anrufe können einzeln, mehrere oder alle Einträge gelöscht werden."],
 ////升级-基本页面
 ["tUpgrade","Wählen Sie die neue Firmware-Version, die vom ISP zur Verfügung gestellt wird, aus und installieren Sie die Firmware von der lokalen Festplatte in das Telefon"],
 ["tFirmwareVersion","Zeigt die gegenwärtige Firmware und des Gerätes an."],
 ["tHardwareVersion","Zeigt die aktuelle Hardware Version des Gerätes an."],
 ["tResetFactory","Setzt alle Einstellungen auf den Auslieferzustand  zurück."],
 ["tReboot","Neustart des Telefon"],
 ////升级-高级页面
 //PNP选项
 ["tPNPOption","Das Telefon sendet eine Anforderung zum Server um URL der Autoprovisionierung zu erhalten, sofern eingeschaltet."],
 //DHCP选项
 ["tDHCPOption","DHCP Optionen spezifizieren"],
 //手动更新服务器
 ["tManualUpdateServer","URL Adresse des autop Servers für dieses Telefon händisch setzen."],
 //自动更新
 ["tAutoPNowNotice","Klicken Sie hier zur sofortigen Autoprovisionierung."],
 ["tClearMD5","Reset MD5 Inhalt. Dadurch wird das Telefon zum Download und zur Anwendung des Konfigurationsfiles während des nächsten Provisionierungsvorgang gezwungen."],  
 //系统日志
 ["tSystemLogLevel","Wähle den Level der Log-Files, die exportiert werden sollen (Die Auswahl wird nach einem Neustart wirksam)"],
 ["tExportLog","Exportiert die Telefon-Log-Dateien zum lokalen PC"],
 //PCAP
 ["tPCAP","Klicken Sie Start zur Erfassung der Tzelefon-Datenpakete. Klicken Sie Stop zum Anhalten der Erfassung. Nachdem Sie gestoppt haben, klicken Sie Export, damit das PCAP-File auf den lokalen PC exportiert wird."],
 //其他
 ["tConfigTar","Klicken Sie Export, damit Sie die Konfiguration des Telefon exportieren können. Wählen Sie einen .tgz Konfigurationsfile zum Importieren/Überschreiben der Telefonkonfiguration."],
 ////安全-基本页面
 ////安全-高级页面
 ["tWebCert","Zeigt alle Web-Server-Zertifikate an, denen lokal vertraut wird. Diese Zertifikate sollten zur Verifizierung spezieller Server genutzt werden, bevor HTTPS Verbindungen geschaltet werden."],
 ["tWebCertUpload","Upload Web Server Certificate"],
 ["tPhoneCert","Zeigt alle Client-Zertifikate an, die zur Verifizierung durch den Web-Server benötigt werden. Diese Zertifikate sollten zur Überprüfung lokaler Teilnehmer an bestimmten Web-Servern genutzt werde."],
 ["tPhoneCertUpload","Upload Client Zertifikat"]
 // 隐藏的定制页面
// ["",""], 
]
