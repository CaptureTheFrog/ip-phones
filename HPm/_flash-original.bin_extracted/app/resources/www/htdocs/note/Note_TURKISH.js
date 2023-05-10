PhonToneInfo1 = "Telefon Ton Sayfası"
PhonToneInfo2 = "tone formatı olarak:"

PhoneRingInfo1 = "Özel ziltonu tipi"
PhoneRingInfo2 = "WAV，Kodek: PCMU or PCMA，Örnek Hız: 8000hz，Yayın Hızı: 64kbps, tek kanal."
PhoneRingInfo3 = "zilsesi tonu dosya isim uzunluğu：26 karakterden uzun olamaz"

PageDescription1 = "Sayfa Girişi"
WarningDescription = "Uyarı："
NoteLabel = "Not："
NoteContent = ["Bilgi giriş kutusu için max karakter uzunluğu:"
								,"255: Broadsoft Rehber server adresi"
								,"127: Uzak Rehber URL & AUTOP Manuel server güncelleme URL"
								,"63: Diğer giriş kutuları"]


//-------------------------------网页帮助页面介绍文档-----------------------------------
StatusDes="Durum Sayfası"
AccountBDes="Hesap-Basit Sayfa"
AccountADes="Hesap-Gelişmiş Sayfa"
NetworkBDes="Network-Basit Sayfa"
NetworkADes="Network-Gelişmiş Sayfa"
PhoneTLDes="Telefon-Saat/Dil Sayfası"
PhonePrefDes="Telefon-Tercih Sayfası"
PhoneCFDes="Telefon-Çağrı Özelliği Sayfası"
PhoneVoiceDes="Telefon Ses sayfası"
PhoneKeyDisDes="Telefon-Tuş/Ekran Sayfası"
PhoneRingDes="Telefon-Zilsesi sayfası"
PhoneDialPlanDes="Telefon-Arama sayfası"
PhoneBookDes="Telefon Rehberi sayfası"
RemoteBookDes="Telefon Rehberi-Uzak Telefon Rehberi Sayfası"
CallLogDes="Telefon Rehberi-Arama Log Sayfası"
UpgradeBDes="Yükseltme-Basit Sayfa"
UpgradeADes="Yükseltme-Gelişmiş Sayfa"
SecurityBDes="Güvenlik- Basit Sayfa"
SecurityADes="Güvenlik-Gelişmiş Sayfa"
TalkingDes=""


//-------------------------------网页帮助字段说明文档-----------------------------------
FieldDescription = "Alan Tanımı："
//FieldDescription1 = "说明字段所涉及到的使用功能及限制条件。"
//var FieldDescription1 = new Array(new Array())
//FieldDescription1[0] = ["fieldDescription", "说明字段所涉及到的使用功能及限制条件。"];
var FieldDescription1 = [
 ["fieldDescription", "Alanın özelliğini ve sınırlamalarını tanımlar"],
 ////状态页面
 ["tProductInfo","Telefonun mevcut modelinin detaylı bilgilerini gösterir, MAC adresi,firmware ve donanım versiyonu gibi"],
 ["tNetworkInfo","Telefonun detaylı network yapılandırmasını gösterir"],
 ["tAccountInfo","Telefonun hesap kayıt durumu ve sip server detaylı bilgilerini gösterir"],
 ////账号-基本页面
 //SIP帐号
// ["tSIPAccount"," "],
 ["tAccountStatus","Kullanıcı kayıt durum tanımlar"],
// ["tAccount"," "],
// ["tAccountActive"," "],
 ["tDisplayLabel","Telefonun LCD ekranında gözüken isim"],
 ["tDisplayName","Arama yapıldığında karşı telefonda gösterilen lokal telefon ismi"],
 ["tRegisterName","ISP tarafından verilen kullanıcı adı"],
 ["tUserName","ISP tarafından verilen kayıt ismi"],
 ["tPassword","ISP tarafından verilen parola"],
 //SIP服务器
 ["tSIPServer","ISP tarafından verilen Sip Server adresi"],
// ["tServerIP"," "]
 //呼出代理服务器
 ["tEnableProxyServer","Sinyallerin işlenmesine ve multimedya veri akışının firewall/NAT üzerinden geçmesine yardımcı olur(Firewall/NAT mevcut ise)."],
 ["tServerIP1","Outbound proxy server"],
 ["tBakServerIP","Yedek outbound proxy server"],
 ["tTransportType","TCP,UDP,TLS olmak üzere üç adet opsiyon mevcuttur. Kayıt paketleri seçili olan protokollere göre kapsüllenir.TLS(Transport Layer Security) şifreli protokoldür."],
 ////账号-高级页面
 //编解码
 ["tCodecs","Arama süresince kullanılan ses kodekleri"],
 //订阅
 ["tSubscribeRegister","Telefon bir hesaba başarılı şekilde kayıt olduğunda, sip server'a abonelik paketi gönderecektir. Server paketi onayladığında, telefona ait tüm bilgiler cevap olarak dönecektir."],
 ["tMWISubscribe","Telefon bir hesaba başarılı şekilde kayıt olduğunda ve WMI aboneliği etkinleştirildiğinde, hesap sesli mailine abone olmak için sip server'a abonelik paketi gönderecektir."],
 //DTMF
 ["tDTMFType","Arama boyunca bir rakam tuşlandığında gönderilecek olan DTMF tipi.(Inband, RFC2833, SIP Info vb.)"],
 //呼叫
 ["tAutoAnswer","Otomatik yanıtlamayı etkinleştirme/devre dışı bırakma ayarı."],
 ["tPRACK","Otomatik güncelleştirme onayı aktifleştir/devre dışı bırakma ayarı."],
 ["tPTime","Ptime(Packetization Time) için aralık süresi(milisaniye) ayarlama. Bu ayar her bir RTP paketinin içindeki audio verisinin süresini ayarlamak için kullanılır."],
 ["tAnonymCall","Bilinmeyen aramaları etkinleştirme/devre dışı bırak durumuna ayarlamak için kullanılır."],
 ["tAnonymCallReject","Bilinmeyen aramaları reddetmeyi etkinleştirme/devre dışı durumuna ayarlamak için kullanılır."],
//加密
 ["tVoiceEncry","SRTP/ ses paketlerinin şifrelenmesini etkinleştirme/devre dışı durumuna ayarlamak için kullanılır."],
 ["tRegisterExpire","Bu değer SIP Telefonun server'a ne kadar süre kayıt talebi gönderilmesi gerektiğini belirtir.(Although the final registration period should be negotiated with registrar?)"],
 ["tUDPKeepAliveMsg","UDP Portunun server tarafından kapatılma ihtimaline karşı, SIP telefonu server'a periodik olarak UDP devamlılık mesajı gönderir."],
 ["tUDPAliveMsgInterval","UDP Devamlılık Mesajı sıklığını ayarlama"],
 ["tRPort","Rport(Uzak Port) NAT geçişi için kullanılan parametre"],
 ////网络-基本
 ["tDHCP","IP adresi,subnet maskesi, gateway vb. otomatik olarak atamak için DHCP server'a istekte bulunur."],
 ["tStaticIP","Manuel olarak IP adresi,subnet maskesi, ağ geçidi, DNS vb. ayarlama"],
 ////网络-高级
 ["tSNMPActive","SNMP etkinleştirme/devre dışı bırakma ayarı. SNMP(Basit Ağ Yönetim Protokolü): IP network üzerindeki cihazları yönetmeye imkan sağlayan standart-internet protokolüdür."],
 ["tSNMPPort","SNMP Server için port değerini ayarlama"],
 ["tSNMPTrustedIPAddr","SNMP Server Adresi Ayarlama"],
 ["tVLANActive1","VLAN(Sanal Yerel Alan Network) etkinleştirme/devre dışı bırak ayarlama"],
 ["tVID1","VLAN ID ayarı"],
 ["tPrior1","Vlan İçin Öncelik Değeri Ayarlama"],
 ["tTR069","TR-069(Teknik Rapor 069) CPE WAN Yönetim Protokolü(CWMP) başlıklı teknik şartnamedir.Bu şartname, son kullanıcı cihazlarının uzaktan yönetimi için bir uygulama katmanı protokolü tayin eder."],
 ["tTR069Active","TR069 etkinleştirme/devre dışı bırakma ayarlama"],
 ["tTR069Version","TR069 versiyon ayarla"],
 ["tTR069ACSURL","TR069 server URL"],
 ["tTR069ACSUser","TR069 server'ına bağlanmak için isim atama"],
 ["tTR069ACSPWD","TR069 server'ına bağlanmak için parola atama"],
 ["tTR069InformPerActive","TR069 için periyodik bilgilendirme etkinleştirme/devre dışı bırakma"],
 ["tTR069InformPeriod","TR069 periyodik bilgilendirme sıklığını ayarlama"],
 ["tDDNS","DDNS bir dinamik alan adı sistemidir.Telefonun Dinamik IP adresini,DDNS server tarafından atanan sabit alan adı ile eşleştirdiğini belirtir"], 
 ////话机-时间/语言
 //网页语言
 ["tWebLanguage","Web sayfasının dilini seçiniz"],
 //时间设置
 ["tTimeFormat","Telefon saatini, 12-saat veya 24-saat olarak ayarlayın"],
 ["tDateFormat","Tarih ekran formatını ayarlama"],
 ["tHeadSetMode","Kulaklık modunu etkinleştirme/devre dışı bırakma ayarı. Etkinleştirildiğinde, telefon, varsayılan olarak Kulaklık modu na ayarlanacaktır"],
 ["tKeyPressSound","Tuş basma sesi düzeyini ayarlama"],
 //类型
 ["tManual","Tarih ve saati manel olarak ayarlama"],
 ["tAuto","SNTP serverdan otomatik olarak tarih saat güncelleme isteği"],
 //NTP
 ["tTimeZone","Bulunduğunuz konuma göre saat dilimi seçin"],
 ["tPrimaryNTPServer","SNTP zaman sunucusundan zaman ayarlarını almak için birincil server atama"],
 ["tSecondryNTPServer","SNTP zaman sunucusundan zaman ayarları almak için ikincil server atama"],
 ["tUpdateInterval","Telefonun lokal saat bilgilerinin, SNTP server aracılığı ile alınması için gerekli olan zaman aralığının ayarlanması"],
 ["tDayLightSaving","Yaz saati uygulaması standart zamanın bir saat ilerisine geçirerek akşamları gün ışığından bir saat daha faydalanma sağlar. Kullanıcı tarafından ayarlanan periyot boyunca yaz saati uygulaması etkin olacaktır."],
 ["tOffSet","Positive offset, saatin standart lokal saatten daha hızlı olacağını belirtir."],
 ////话机-基本设置
 ////话机-通话特性
 //呼叫前转
 ["tForwardTransfer","Çağrı aktarmasını yönlendirmek için yapılan ayar"],
 ["tForwardAlways","Tüm çağrıları yönlendirme etkinleştirme/devre dışı bırakma ayarı"],
 ["tAlwaysTarget","Tüm çağrıları yönlendirmede transfer edilecek olan hedef numara"],
 ["tAlwaysOnCode","Hattın sürekli yönlendirilmesini aktif etmek için kullanılan kod*, Telefon bu kodu server'a göndererek, sürekli yönlendirmeyi etkinleştirir, (@ gibi bazı karakterler, desteklenmemektedir)"],
 ["tAlwaysOffCode","Hattın sürekli yönlendirilmesini iptal etmek için kullanılan kod*, Telefon bu kodu server'a göndererek, sürekli yönlendirmeyi devre dışı bırakır, (@ gibi bazı karakterler, desteklenmemektedir)"],
 ["tForwardBusy","Meşgülde yönlendirme trasferini etkinleştirme/devre dışı bırakma ayarı"],
 ["tBusyTarget","Meşgülde yönlendir transferi için hedef numara"],
 ["tBusyOnCode","Hattın meşgulde yönlendirilmesini aktif etmek için kullanılan kod*, Telefon bu kodu server'a göndererek,meşgulde yönlendirmeyi etkinleştirir, (@ gibi bazı karakterler, desteklenmemektedir)"],
 ["tBusyOffCode","Hattın meşgulde yönlendirilmesini iptal etmek için kullanılan kod*, Telefon bu kodu server'a göndererek,meşgulde yönlendirmeyi devre dışı bırakır, (@ gibi bazı karakterler, desteklenmemektedir)"],
 ["tForwardNoAnswer","Cevapsız yönlendirme transferi etkinleştirme/devre dışı bırakma ayarı"],
 ["tNoAnswerRingTime","Cevapsız yönlendirme transferinde beklerken çalma süresi"],
 ["tNoAnswerTarget","Cevapsız çağrı transferi için  hedef numara"],
 ["tNoAnswerOnCode","Hattın cevapsız yönlendirilmesini aktif etmek için kullanılan kod*, Telefon bu kodu server'a göndererek,cevapsız yönlendirmeyi etkinleştirir, (@ gibi bazı karakterler, desteklenmemektedir)"],
 ["tNoAnswerOffCode","Hattın cevapsız yönlendirilmesini iptal etmek için kullanılan kod*, Telefon bu kodu server'a göndererek,cevapsız yönlendirilmesini devre dışı bırakır,(@ gibi bazı karakterler, desteklenmemektedir)"],
 //呼叫等待
 ["tCallWaitingEnable","Yeni bir arama geldiğinde mevcut hattın meşgülde bekletilmesini aktifleştirmek için kullanılan ayar"],
 ["tCallWaitingTone","Görüşme sırasında gelen yeni çağrı cevaplandığında, karşı taraf beklerken dinletilecek olan melodi/mesaj vb. ton ayarı.(Çağrı bekleme aktifleştirildiğinde)"],
 //免打扰
 ["tReturnCodeDND","DND aktifleştirildiğinde dönen kod ayarı."],
 ["tDNDOnCode","DND aktifleştirmek için kullanılacak özellik kodu ayarı,Bu kod server'a gönderildiğinde, DND aktifleştirilmiş olacaktır."],
 ["tDNDOffCode","DND pasifleştirmek için kullanılacak özellik kodu ayarı,Bu kod server'a gönderildiğinde, DND pasifleştirilmiş olacaktır."],
 //呼叫驻留
 ["tEnableCallPark","Çağrı parketme özelliğini etkinleştirme/devre dışı bırakma ayarı."],
 ["tCallParkAccount","Çağrı parketmeyi kullanarak hesap ayarlama."],
 ["tCallParkTarget","Çağrı parketme için hedef numara ayarlama."],
 ["tIntercomAllow","Gelen interkom aramasının kabul/red edilmesini belirlemek için Intercom etkinleştirme/devre dışı ayarı"],
 ["tIntercomMute","Gelen interkom aramasının kabul/red edilmesini belirlemek için Intercom etkinleştirme/devre dışı ayarı."],
 ["tHotLineEnable","AcilArama aktif/devredışı ayarlama. Aktifleştirildiğinde, AcilArama gecikme süresi tarafından ayarlanan süre kadar hat açık kaldığında AcilArama numarası otomatik olarak aranacaktır."],
 ["tHotLineNumber","Acil Arama numarası ayarlama"],
 ["tHotLineDelay","Acil arama gecikmesi süresini ayarlama"],
 ["tReturnCodeRefuse","Gelen arama reddedildiğinde dönen kodu ayarlama."],
 ["tAutoAnswerDelay","Otomatik Yanıtlama Gecikme süresini ayarlama"], 
 ////话机-声音页面
 //回音消除
 ["tEchoCanceller","Yankı engelleme ayarlama"],
 ["tJitterBuffer","JitterBuffer paylaşılan bir veri arabelleğidir(tampon). Değişken gecikmenin oluştuğu durumlarda yakalanan ses paketlerini tamponda tutar ve düzgün ses işleyiciye gönderir."],
 ["tMicVolume","Mikrofonun ses düzeyini ayarlama"],
 ////话机-按键/显示页面
 ["tSoftKey","Telefon boşta iken, telefon tuş fonksiyonlarını özelleştirme."],
 ["tBacklightIntens","LCD Ekran için arkaışık yoğunluk düzeyini ayarlama"],
 ["tBacklightTime","ArkaIşık etkin kalma süre ayarı, Belirlenen süre dolduktan arkaışık enerji tasarrufu için otomatik olarak sönecektir."],
 ////话机-铃声页面      自定义铃声格式：WAV，PCMU或PCMA编码，采样率8000hz，播放速率64kbps, 单通道。  铃声文件名长度限制：不能大于26个英文字符 
 ////话机-信号音页面    信号音格式如下:freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration][,freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration]] 
 ////话机-拨号规则页面
 //规则
 ["tRules","Kullanıcı ön ek değerini özelleştirebilir ve bir değiştirme kuralı ile değiştirebilir.Ön ek değeri değişim string'i ile değiştirilebilir. Örneğin, 10, 1016 olarak ayarlandığında ve ardından 10'a tuşlandığında 1016 aranacaktır."],
 ["tAreaCode","Kullanıcı alankodu için max uzunluk(1~15) ve min uzunluk(1~15) ayarlayabilir.Kullanıcı bir numara çevirmeden önce telefon,bu uzunluk aralığındaki, kullanıcı tarafından belirlenen alankodunu otomatik olarak numaranın önüne ekleyecektir."],
 ["tAccount1","Kullanıcı arama kuralını kullanarak hesabı özelleştirebilir.Yapılan özelleştirmeler sadece belirtilen bu hesapta etkin olacaktır."],
 ////电话簿-地址簿页面
 //联系人
 ["tContactModify","Kişi Ekleme/Kara Liste: Kişi veya Kara Liste Kişi ismi boş girilemez. Kişi/Kara Liste değişimi: İstenilen öğeyi seçin,değişiklikleri gerçekleştirin ve ardından onaylayın."],
 ["MToBL","Kara listedeki bir kontak, kara listeden dışarı veya karaliste içine taşınabilir."],
 ["Contact_Delete","Kişi/Karaliste Silme. Seçili olan bir,birden fazla veya tüm kişileri silmek için Sil'e tıklayın."],
 ["tGroups","Tüm lokal kontakları göster' Grup"],
 ["tContactsExportImport","Lokal telefon rehberine kontakları XML olarak içe veya dışa aktarma"],
 ["tBlackListExportImport","Kara Listeye kontakları XML formatına içe veya dışa aktarma"],
 ////电话簿-远程地址簿页面
 ["tRemotePhoneBook","Uzaktan XML Telefon Rehberi gibi, uzak telefon rehberi parametlerini ayarlama"],
 ////电话薄-通话记录页面
 //呼叫记录
 ["tCallHistory","Alınan çağrı,aranan çağrı, cevapsız çağrı, yönlendirilmiş çağrı ve tüm arama geçmişi loglarını içerir, Bir öğe,birden çok öğe ve tüm öğeleri silmek için Sil'e tıklayın, Silmek istediğinize eminseniz evet'e tıklayın."],
 ////升级-基本页面
 ["tUpgrade","ISP tarafından dağıtılan yeni Firmware versiyonunu lokal disk'ten seçin ve telefonun firmware yükseltmesini gerçekleştirin"],
 ["tFirmwareVersion","Cihazın mevcut firmware versiyonunu gösterir."],
 ["tHardwareVersion","Cihazın mevcut donanım versiyonunu gösterir."],
 ["tResetFactory","Bu cihazın tüm mevcut ayarlarını sıfırlayarak, varsayılan ayarları yükler."],
 ["tReboot","Tıkladığınızda cihazı yeniden başlatır"],
 ////升级-高级页面
 //PNP选项
 ["tPNPOption","Aktifleştirildiğinde, cihaz auto provision url'sini almak için server'a istek gönderir."],
 //DHCP选项
 ["tDHCPOption","Belirlenen DHCP seçeneği"],
 //手动更新服务器
 ["tManualUpdateServer","Bu cihazin otomatik güncelleme server URL adresinin manuel olarak tanımlandığını belirtir."],
 //自动更新
 ["tAutoPNowNotice","Otomatik güncellemeyi hemen başlatmak için burayı tıklayın."],
 ["tClearMD5","MD5 değeri sıfırlandığında, telefon bir sonraki otomatik güncelleme sırasında konfig dosyasını indirecek ve ayarları uygulamaya koyacaktır."], 
 //系统日志
 ["tSystemLogLevel","Dışa aktarılacak olan logların düzeyini seçin(telefon yeniden başlatıldıktan sonra etkin olacaktır)"],
 ["tExportLog","Telefonun loglarını lokal PC'ye gönderir"],
 //PCAP
 ["tPCAP","Telefonun paketlerini almak için başlata tıklayın, paket almayı durdurmak için durdur'a tıklayın, Pakat alımını durdurduktan sonra PCAP dosyaını lokal PC'ye göndermek için Dışa Aktar'a tıklayın."],
 //其他
 ["tConfigTar","Telefonun mevcut konfigürasyonunu aktarmak için dışa aktar'a tıklayın, Telefona konfig dosyası almak/mevcut dosyanın üzerine yazmak için .tgz uzantılı bir konfig dosyası seçin."],
 ////安全-基本页面
 ////安全-高级页面
 ["tWebCert","Yerel tarafta güvenilen tüm Web server sertifikalarını gösterir. Bu sertifikalar, HTTPS bağlantıları kurulmadan önce belirli server'ı doğrulamak için kullanılmalıdır."],
 ["tWebCertUpload","Web Server Sertifikalarını karşıya yükler"],
 ["tPhoneCert","Web server tarafından doğrulanmak üzere kullanılan tüm kullanıcı sertifikalarını gösterir.Bu sertifikalar lokal tarafın belirli bir web server üzerinde doğrulanması için kullanılır."],
 ["tPhoneCertUpload","Kullanıcı sertifikalarını karşıya yükler"]
 // 隐藏的定制页面
// ["",""], 
]
