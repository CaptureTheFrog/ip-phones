PhonToneInfo1 = "Strona tonów telefonu"
PhonToneInfo2 = "format tonu jako:"

PhoneRingInfo1 = "Typ własnych dzownków:"
PhoneRingInfo2 = "Kodek WAV: PCMU lub PCMA，sample rate: 8000hz，broadcast rate: 64kbps, single channel."
PhoneRingInfo3 = "długość nazwy pliku： nie może być dłuższa niż 26 znaków"

PageDescription1 = "Informacje o stronie："
WarningDescription = "Ostrzeżenie："
NoteLabel = "Uwaga："
NoteContent = ["Mazymalna długość znaków dla pola:"
								,"255: URL serwera książki tel. Broadsoft"
								,"127: URL zdalnej książki tel, URL serwera autoprovisioningu"
								,"63: Pozostałe pola"]


//-------------------------------网页帮助页面介绍文档-----------------------------------
StatusDes="Strona statusu"
AccountBDes="Strona ustawień podstawowych konta"
AccountADes="Strona zaawansowanych ustawień konta"
NetworkBDes="Strona podstawowych ustawień sieci"
NetworkADes="Strona zaawansowanych ustawień sieci"
PhoneTLDes="Strona ustawień czasu/języka"
PhonePrefDes="Strona ustawień preferencji"
PhoneCFDes="Strona ustawień funkcji"
PhoneVoiceDes="Strona ustawień głosu"
PhoneKeyDisDes="Strona ustawień klawiszy/wyświetlacza"
PhoneRingDes="Strona ustawień dzwonków"
PhoneDialPlanDes="Strona ustawień połączeń"
PhoneBookDes="Strona ustawień książki tel."
RemoteBookDes="Strona ustawień zdalnej książki tel."
CallLogDes="Strona logów połączeń"
UpgradeBDes="Strona podstawowych ustawień aktualizacji"
UpgradeADes="Strona zaawansowanych ustawień aktualizacji"
SecurityBDes="Strona podstawowocy ustawień bezpieczeństwa"
SecurityADes="Strona zaawansowanych ustawień bezpieczeństwa"
TalkingDes=""


//-------------------------------网页帮助字段说明文档-----------------------------------
FieldDescription = "Opis funkcji："
//FieldDescription1 = "说明字段所涉及到的使用功能及限制条件。"
//var FieldDescription1 = new Array(new Array())
//FieldDescription1[0] = ["fieldDescription", "说明字段所涉及到的使用功能及限制条件。"];
var FieldDescription1 = [
 ["fieldDescription", "Opis pola funkcji oraz ograniczneń"],
 ////状态页面
 ["tProductInfo","Pokazuje informacje o moedelu telefonu, adresie MAC, wersji oprogramowania oraz wersji sprzętowej"],
 ["tNetworkInfo","Pokazuje informacje o konfiguracji sieci"],
 ["tAccountInfo","Pokazuje ifnormacje o statusie rejestracji konta oraz serwerze SIP"],
 ////账号-基本页面
 //SIP帐号
// ["tSIPAccount"," "],
 ["tAccountStatus","Status rejestracji konta SIP"],
// ["tAccount"," "],
// ["tAccountActive"," "],
 ["tDisplayLabel","Nazwa wyświetlana na ekranie telefonu"],
 ["tDisplayName","Nazwa wyświetlana na telefonie do którego dzwonimy"],
 ["tRegisterName","Nazwa użytkownika dostarczona przez usługodawcę"],
 ["tUserName","Nazwa rejestracji dostarczona przez usługodawcę"],
 ["tPassword","Hasło konta SIP dostarczone przez usługodawcę"],
 //SIP服务器
 ["tSIPServer","Adres serwera SIP dostarczony przez usługodawcę"],
// ["tServerIP"," "]
 //呼出代理服务器
 ["tEnableProxyServer","Jest używany do przekazywania sygnalizacji oraz strumienia danych przez firewall/NAT"],
 ["tServerIP1","Serwer outbound proxy"],
 ["tBakServerIP","Zapasowy serwer outbound proxy"],
 ["tTransportType","Do wyboru są 3 protokoły: TCP, UDP, TLS. Sygnalizacja będzie przekazywana przez wybrany protokół. TLS(Transport Layer Securiry) jest szyfrowany."],
 ////账号-高级页面
 //编解码
 ["tCodecs","Kodek Audio wykorzystywany w trakcie połączenia"],
 //订阅
 ["tSubscribeRegister","Telefon będzie wysyłał pakiet 'subscribe' do serwera SIP gdy konto jest zarejestrowane. Serwer w odpowiedzi będzie wysyłał wszystkie informacje dotyczące tego telefonu."],
 ["tMWISubscribe","Telefon będzie wysyłał 'subscribe' do serwera SIP aby obserwować status wiadomości głosowych na serwerze. Funkcja MWI musi być uruchomiona na centrali."],
 //DTMF
 ["tDTMFType","Typ wysyłania tonów DTMF przy wciśnięciu klawisza w trakcie połączenia, możemy wybrać: Inband, RFC2833, SIP Info itd."],
 //呼叫
 ["tAutoAnswer","Ustawienia włączenia/wyłączenia automatycznej odpowiedzi"],
 ["tPRACK","Ustaw aby włączyć/wyłączyć Provisioning Response Acknowledge."],
 ["tPTime","Ustaw interwał czasu (w milisekundach) dla Ptime(Czas Pakietyzacji), który jest uyżywany do konfiguracji długości pakietów audio w kazdym pakiecie RTP."],
 ["tAnonymCall","Ustaw aby włączyć/wyłączyć połaczenia anonimowe."],
 ["tAnonymCallReject","Ustaw aby włączyć/wyłączyć odrzucanie połączeń anonimowych."],
//加密
 ["tVoiceEncry","Włączenie lub wyłączanie SRTP (szyfrowania pakietów głosowych)"],
 ["tRegisterExpire","Wartość ta definiuje jak długo telefon będzie wysyłał żądanie rejestracji. Mimo że ostateczny okres rejestracji powinien być wynegocjowany z serwerem"],
 ["tUDPKeepAliveMsg","Telefon będzie regularnie wysyłał wiadomość UDP KeepAlive do serwera w przypadku gdy serwer może  zamknąć port UDP."],
 ["tUDPAliveMsgInterval","Ustaw interwał dla wiadomości UDP KeepAlive"],
 ["tRPort","Rport(Zdalny port) jest to parametr używany dla NAT"],
 ////网络-基本
 ["tDHCP","Wysyła żądanie do serwera DHCO w celu zyskania adresu IP, maski podsieci, DNS itp."],
 ["tStaticIP","Ustaw adres IP, maskę podsieci, bramę domyślną, serwer DNS ręcznie"],
 ////网络-高级
 ["tSNMPActive","Włącza lub wyłącza SNMP,SNMP(Simple Network Management Protocols) jest standardowym protokołem internetowym do zarządzania urządzeniami IP za pomocą sieci"],
 ["tSNMPPort","Ustaw port dla serwera SNMP"],
 ["tSNMPTrustedIPAddr","Ustaw adres serwera SNMP"],
 ["tVLANActive1","Włącz lub wyłącz obsługę VLAN(Virtual Local Area Network)"],
 ["tVID1","Ustaw VLAN ID"],
 ["tPrior1","Ustaw priorytet dla VLANów"],
 ["tTR069","TR-069(Technical Report 069) jest to spefycikacja techniczna zatytuowaną CPE WAN Management Protocol. Definiuje on protokół warstwy aplikacji do zdalnego zarządzania urządzeniami użytkowników końcowych."],
 ["tTR069Active","Włącz lub wyłącz TR069"],
 ["tTR069Version","Ustaw wersję TR069"],
 ["tTR069ACSURL","Podaj URL serwera TR069"],
 ["tTR069ACSUser","Podaj nazwę użytkownika dla połączenia do serwera TR069"],
 ["tTR069ACSPWD","Podaj hasło dla połączenia do serwera TR069"],
 ["tTR069InformPerActive","Włącz lub wyłącz okresowe wysyłanie informacji do serwera TR069"],
 ["tTR069InformPeriod","Ustaw interwał dla okresowych inforamcji do serewera TR069"],
 ["tDDNS","DDNS dynamic domain name system, określa że dynamiczny adres IP jest przypisany do jednej domeny za pomocą serwera DDNS"], 
 ////话机-时间/语言
 //网页语言
 ["tWebLanguage","Wybierz język interfejsu web"],
 //时间设置
 ["tTimeFormat","Ustaw format czasu na 12-godziiny lub 24-godzinny"],
 ["tDateFormat","Ustaw format wyświetlania daty"],
 ["tHeadSetMode","Włącz lub wyłącz tryb zestawu nagłownego, jeśli aktywne telefon będzie domyślnie w trybie zestawu nagłownego"],
 ["tKeyPressSound","Ustaw głośność tonów klawiatury"],
 //类型
 ["tManual","Ustaw ręcznie czas i datę"],
 ["tAuto","Automatycznie pobieraj datę i czas z serwera SNTP"],
 //NTP
 ["tTimeZone","Wybierz strefe czasową w któej się znajdujesz"],
 ["tPrimaryNTPServer","Ustaw podstawowy serwer SNTP do synchronizacji czasu"],
 ["tSecondryNTPServer","Ustaw zapasowy server SNTP do synchronizacji czasu"],
 ["tUpdateInterval","Ustaw interwał sprawdzania czasu telefonu z serwerem SNTP"],
 ["tDayLightSaving","Czas letni, czas lokalny, który jest przyjmowany dla pewnego okresu roku, zazwyczaj wyprzedzający o godzinę standardowy czas strefowy."],
 ["tOffSet","Offset wskazuje czas o który będzie wykonane przesunięcie od czasu lokalnego."],
 ////话机-基本设置
 ////话机-通话特性
 //呼叫前转
 ["tForwardTransfer","Ustaw przekierowanei połączeń"],
 ["tForwardAlways","Włącz/wyłacz permanentne przekierowanie połączeń"],
 ["tAlwaysTarget","Numer docelowy na który ma być wykonane przekierowanie"],
 ["tAlwaysOnCode","Kod funkcyjny centrali aktywujący przekierowanie, talefon aktywuje przekierowanie wysyłając kod do serwera, (niektóre znaki, jak @, nie są wspierane)"],
 ["tAlwaysOffCode","Kod funkcyjny centrali wyłączający przekierowanie, talefon wyłącza przekierowanie wysyłając kod do serwera, (niektóre znaki, jak @, nie są wspierane)"],
 ["tForwardBusy","Włącz/wyłacz przekierowanie połączeń podczas zajętości"],
 ["tBusyTarget","Numer docelowy na który ma być wykonane przekierowanie"],
 ["tBusyOnCode","Kod funkcyjny centrali aktywujący przekierowanie gdy zajęty, talefon aktywuje przekierowanie wysyłając kod do serwera, (niektóre znaki, jak @, nie są wspierane)"],
 ["tBusyOffCode","Kod funkcyjny centrali wyłączający przekierowanie gdy zajęty, talefon wyłącza przekierowanie wysyłając kod do serwera, (niektóre znaki, jak @, nie są wspierane)"],
 ["tForwardNoAnswer","Włącz/wyłącz przkierowanie gdy nie odpowiada"],
 ["tNoAnswerRingTime","Czas oczekiwania przed wykonaniem przekierowania gdy nie odpowiada"],
 ["tNoAnswerTarget","Numer docelowy na który ma być wykonane przekierowanie"],
 ["tNoAnswerOnCode","Kod funkcyjny centrali aktywujący przekierowanie gdy nie odpowiada, talefon aktywuje przekierowanie wysyłając kod do serwera, (niektóre znaki, jak @, nie są wspierane)"],
 ["tNoAnswerOffCode","Kod funkcyjny centrali wyłączający przekierowanie gdy nie odpowiada, talefon wyłącza przekierowanie wysyłając kod do serwera, (niektóre znaki, jak @, nie są wspierane)"],
 //呼叫等待
 ["tCallWaitingEnable","Parametr aktywujący połączenie oczekujące"],
 ["tCallWaitingTone","Ustaw ton informujący o nowym połączeniu oczekującym(keidy poł. oczekujące są aktywne)"],
 //免打扰
 ["tReturnCodeDND","Zwrtodny kod SIP kiedy tryb DND jest aktywny."],
 ["tDNDOnCode","Kod funkcyjny centrali aktywujący tryb DND, DND jest aktywowane poprzez wysłanie kodu do serwera."],
 ["tDNDOffCode","Kod funkcyjny centrali wyłączający tryb DND, DND jest wyłączane poprzez wysłanie kodu do serwera."],
 //呼叫驻留
 ["tEnableCallPark","Włącz/wyłącz parkowanie połączeń."],
 ["tCallParkAccount","Ustaw konto używane do parkowania połączeń."],
 ["tCallParkTarget","Ustaw numer docelowy dla parkowania."],
 ["tIntercomAllow","Włącz/wyłącz interkom"],
 ["tIntercomMute","Jeśli włączone podczas połączenia przychodzącego w trybie interkom, połączenie zostanie odebrane w trybie wyciszonym."],
 ["tHotLineEnable","Włącz/wyłącz gorącą linię. Jeśli gorąca linia jest aktywna, zdefiniowany numer zostanie wybrany w określonym czasie po podniesieniu słuchawki."],
 ["tHotLineNumber","Ustaw numer gorącej linii"],
 ["tHotLineDelay","Ustaw opóźnienie dla gorącej linii"],
 ["tReturnCodeRefuse","Ustaw zwrotny kod SIP gdy połączenie jest odrzucone."],
 ["tAutoAnswerDelay","Ustaw opóźnienei dla automatycznego odbierania"], 
 ////话机-声音页面
 //回音消除
 ["tEchoCanceller","Ustawienia redukcji echa"],
 ["tJitterBuffer","To wspólny obszar danych gdzie pakiety głosowe są przechowywane i równomiernie wysyłane do procesora dźwięku."],
 ["tMicVolume","Ustaw wzmocnienie mikrofonu"],
 ////话机-按键/显示页面
 ["tSoftKey","Dostosuj funkcje klawiszy w trybie czuwania"],
 ["tBacklightIntens","Ustaw poziom podświetlenia ekranu LCD"],
 ["tBacklightTime","Ustaw czas po którym podświetlenie zostanie wyłączone w celu oszczędzania energii."],
 ////话机-铃声页面      自定义铃声格式：WAV，PCMU或PCMA编码，采样率8000hz，播放速率64kbps, 单通道。  铃声文件名长度限制：不能大于26个英文字符 
 ////话机-信号音页面    信号音格式如下:freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration][,freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration]] 
 ////话机-拨号规则页面
 //规则
 ["tRules","Użytkowniek może dostosować wartość prefiksu, następnie zastąpić go. Wartość prefixu zostanie zastąpiona przez zdefiniowany cią cyfr/znaków. Np. wprowadzenie prefixu 10 oraz numeru zastępującego 1016 spowoduje, że wybierająć numer 10 wykonamy połączenie na numer 1016."],
 ["tAreaCode","Użytkownik może wprowadzić minimalną długość(1~15), oraz maksymalną długość(1~15) dla kodu kraju. Telefon automatzcynie dostawi zdefiniowany kod dla danego kraju gdy wykryje numer o konkretnej długości."],
 ["tAccount1","Użytkownik może dostosować konto korzystająć z reguł wybierania. Reguły te dotyczą wybranego konta SIP."],
 ////电话簿-地址簿页面
 //联系人
 ["tContactModify","Dodaj Kontakt/Czarną liste, Nazwa kontatku lub czarnej listy nie może być pusta. Modyfikacja kontaktu/czarnej listy: wybierz element, wykonaj modyfikacje i zatwierdź."],
 ["MToBL","Kontakt z czarnej listy może zostać przeniesiony do książki oraz kontakt z książki może zostać przeniesiony do czarnej listy."],
 ["Contact_Delete","Usuń kontakt/czarną listę. Naciśnij usuń aby usunąć jedną pozycję, klika lub wszystkie wybrane pozycje."],
 ["tGroups","Wyświetl wszystkie grupy kontaktów"],
 ["tContactsExportImport","Zaimportuj lub wyeksportuj kontakty z pliku w formacie XML do książki telefonicznej"],
 ["tBlackListExportImport","Zaimportuj lub wyeksportuj kontakty z pliku w formacie XML do czarnej listy"],
 ////电话簿-远程地址簿页面
 ["tRemotePhoneBook","Ustaw parametry zdalnej książki telefonicznej jak adres URL serwera na którym znajduje się zdalna książka telefoniczna."],
 ////电话薄-通话记录页面
 //呼叫记录
 ["tCallHistory","Zawiera odebrane, wykonane, nieodebrane, przekierowane oraz wszystkie logi połączeń. Naciśnij usuń aby usunąć jeden, kilka lub wszystkie wpisy."],
 ////升级-基本页面
 ["tUpgrade","Wybierz nową wersję oprogramowania z dysku, następnie zaktualizuj telefon"],
 ["tFirmwareVersion","Wyświetl aktualną wersję oprogramowania na telefonie."],
 ["tHardwareVersion","Wyświetl aktualną wersję sprzętową telefonu."],
 ["tResetFactory","Usuwa wszystkie ustawienia telefonu i przywraca domyślną konfigurację."],
 ["tReboot","Telefon zostanie zrestartowany po naciśnięciu przycisku"],
 ////升级-高级页面
 //PNP选项
 ["tPNPOption","Telefon wyśle żądanie provisioningu do serwera."],
 //DHCP选项
 ["tDHCPOption","Określona opcja DHCP"],
 //手动更新服务器
 ["tManualUpdateServer","Wprowadź adres serwera provisioningu."],
 //自动更新
 ["tAutoPNowNotice","Naciśnij aby rozpocząć provisioning."],
 ["tClearMD5","Wyzeruj wartość MD5 dla pliku konfiguracyjnego. Telefon pobierze i zastosuje zmiany z pliku konfiguracyjnego przy następnej sersji provisioningu."], 
 //系统日志
 ["tSystemLogLevel","Wybierz poziom logów systemowych do exportu (zmiany zostaną wprowadzone po restarcie)."],
 ["tExportLog","Eksportuje logi na dysk komputera"],
 //PCAP
 ["tPCAP","Naciśnij aby rozpocząć zbieranie pakietów na telefonie, naciśnij stop aby zatrzymać zbieranie pakietów, następnie naciśnij eksport aby wyeksportować .PCAP na dysk komputera."],
 //其他
 ["tConfigTar","Naciśnij eksport aby wyeksportować konfiguracje, wybierz plik .tgz aby zaimportować/przeglądać plik konfiguracyjny."],
 ////安全-基本页面
 ////安全-高级页面
 ["tWebCert","Wyświetl wszystkie certyfikaty serwera. Certyfikaty powinny być używane do weryfikacji serwera przed zestawieniem połączenia HTTPS."],
 ["tWebCertUpload","Wgraj certyfikat serwera"],
 ["tPhoneCert","Wyświetl wszystkie certyfikaty klienta. Certyfikaty powinny być uzywane do weryfikacji lokalnej strony dla konkretnego serwera."],
 ["tPhoneCertUpload","Wgraj certyfikat klienta"]
 // 隐藏的定制页面
// ["",""], 
]
