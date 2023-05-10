PhonToneInfo1 = "Tonalités Téléphonee"
PhonToneInfo2 = "Format tonalités:"

PhoneRingInfo1 = "Sonneries personnalisées:"
PhoneRingInfo2 = "WAV，codec: PCMU ou PCMA，taux échant.: 8000hz，taux broadcast : 64kbps, canal unique."
PhoneRingInfo3 = "nom de la sonnerie : pas plus de 26 caractères"

PageDescription1 = "Introduction: "
WarningDescription = "Attention: "
NoteLabel = "Note："
NoteContent = ["Long. Max des caractères boite de réception:","255: Adresse serveur Répertoire","127: Répertoire externe URL & AUTOP Actualiser URL serveur","63: Reste de la boite de réception"]

//-------------------------------网页帮助页面介绍文档-----------------------------------
StatusDes="Statut"
AccountBDes="Compte-Réglages de base"
AccountADes="Compte-Avancé"
NetworkBDes="Réseau-Réglages de base"
NetworkADes="Réseau-Avancé"
PhoneTLDes="Téléphone-Heure/Langue"
PhonePrefDes="Téléphone-Préférences"
PhoneCFDes="Téléphone-Fonctions"
PhoneVoiceDes="Téléphone-Audio"
PhoneKeyDisDes="Téléphone-Touches/Affichage"
PhoneRingDes="Téléphone-Sonneries"
PhoneDialPlanDes="Téléphone-Appels"
PhoneBookDes="Répertoire"
RemoteBookDes="Répertoire-Liste appels"
CallLogDes="Répertoire-Répertoire externe"
UpgradeBDes="Mise à jour-Réglages de base"
UpgradeADes="Mise à jour-Avancé"
SecurityBDes="Sécurité-Réglages de base"
SecurityADes="Sécurité-Avancé"
TalkingDes=""

//-------------------------------网页帮助字段说明文档-----------------------------------
FieldDescription = "Description du champs :"
var FieldDescription1 = [ 
["description champs","fieldDescription","Description et limites du champs"],
////状态页
 ["tProductInfo","Détail des des informations sur le modèle, l'adresse MAC, versions firmware version et hardware"],
 ["tNetworkInfo","Détails de la configuration réseau"],
 ["tAccountInfo","Détails du statut d'enregistrement du téléphone et du serveur sip"],
////账号-基本页面
 //SIP帐号
 //["tSIPAccount"," "],
 ["tAccountStatus","Description du statut d'enregistrement de l'utilisateur"],
 //["tAccount"," "],
 //["tAccountActive"," "],
 ["tDisplayLabel","Le nom indiqué à l'écran du téléphone"],
 ["tDisplayName","Le nom du téléphone affiché lors d'un appel sur un autre téléphone"],
 ["tRegisterName","Le nom enregistrement fourni par l'opérateur SIP"],
 ["tUserName","Le nom d'utilisateur fourni par l'opérateur SIP"],
 ["tPassword","Mot de passe fourni par l'opérateur SIP"],
 //SIP服务器
 ["tSIPServer","Adresse du serveur de l'opérateur SIP"],
 //呼出代理服务器
 ["tEnableProxyServer","Il est utilisé pour traiter les signaux et aider les flux de données multimédias à passer par le pare-feu/NAT quand il y a un parefeu/NAT."],
 ["tServerIP1","Serveur proxy sortant"],
 ["tBakServerIP","Fallback serveur proxy sortant"],
 ["tTransportType","Il y a trois options: TCP,UDP,TLS.Les paquets d'enregistrement sont encapsulés en utilisant les protocoles sélectionnés.TLS(Transport Layer Securiry) est encrypté."],
////账号-高级页面
 //编解码
 ["tCodecs","Codecs audio utilisés lors d'un appel"],
 //订阅
 ["tSubscribeRegister","Le téléphone envoie une info d'enregistrement au serveur sip quand son compte est enregistré et le serveur renvoie les informations appartenant à ce poste s'il le supporte."],
 ["tMWISubscribe","Le téléphone envoie une info au serveur sip pour l'enregistrement de sa messagerie quand le compte est déclaré et le MWI est activé."],
 //DTMF
 ["tDTMFType","Type d'info DTMF lors d'un appui sur une touche pendant une communication, incluant Inband, RFC2833, SIP Info et so on"],
 //呼叫
 ["tAutoAnswer","L'activation/désactivation la réponse automatique"],
 ["tPRACK","l'activation/désactivation du Provisioning Response Acknowledge."],
 ["tPTime","Réglage de l'intervalle(en millisecondes) pour Ptime(Packetization Time) utilisé lors de l'envoi de chaque paquet RTP."],
 ["tAnonymCall","Activation/désactivation de l'appel anonyme."],
 ["tAnonymCallReject","Activation/désactivation de la réception d'appels anonymes."],
 //加密
 ["tVoiceEncry","Activation/désactivation du SRTP/cryptage des paquets voix"],
 ["tRegisterExpire","Valeur indiquant le délai d'envoi des demandes d'enregistrement au serveur SIP. Cette valeur est donnée par l'opérateur SIP"],
 ["tUDPKeepAliveMsg","Le téléphone SIP envoie périodiquement des paquets UDP KeepAlive au serveur Au cas où le serveur désactive les ports UDP."],
 ["tUDPAliveMsgInterval","Réglage de l'intervalle d'envoi des messages UDP KeepAlive"],
 ["tRPort","Rport(Remote port) est le paramètre utilisé pour le NAT Traversal"], 
////网络-基本
 ["tDHCP","Envoie des requètes DHCP au serveur pour récupérer l'adresse IP, masque sous réseau, gateway, DNS etc."],
 ["tStaticIP","Réglage de l'adresse IP,masque sous réseau, gateway, DNS etc manuellement"],
////网络-高级
 ["tSNMPActive","Activation/désactivation SNMP,SNMP(Simple Network Management Protocols) protocole Internet standard  pour gérer les appareils sur le réseau IP"],
 ["tSNMPPort","Valeur pour le serveur SNMP "],
 ["tSNMPTrustedIPAddr","Adresse du serveur SNMP"],
 ["tVLANActive1","Activation/désactivation du VLAN(Virtual Local Area Network)"],
 ["tVID1","Réglage VLAN ID"],
 ["tPrior1","Réglage Priority Value pour le VLAN"],
 ["tTR069","TR-069(Technical Report 069) est le paramètre CPE WAN Management Protocol (CWMP)Il défini le protocole pour l'accès distant utilisateur."],
 ["tTR069Active","Activation/désactivationTR069"],
 ["tTR069Version","Version TR069 "],
 ["tTR069ACSURL","Réglage du serveur URL TR069 "],
 ["tTR069ACSUser","Réglage nom d'utilisateur pour la connexion au serveur TR069 "],
 ["tTR069ACSPWD","Réglage mot de passe pour la connexion au serveur TR069"],
 ["tTR069InformPerActive","Activation/désactivation pPeriodic inform pour TR069"],
 ["tTR069InformPeriod","Réglage de l'intervalle pour TR069 periodic inform"],
 ["tDDNS","DDNS is dynamic domain name system, it specifies that the dynamic IP address of phone is mapped to a fixed domain name by DDNS server"], 
////话机-时间/语言
 //网页语言
 ["tWebLanguage","Selection de la langue de la page web"],
 //时间设置
 ["tTimeFormat","Réglage du format de l'heure 12-heures ou 24-heures"],
 ["tDateFormat","Réglagedu format de la date"],
 ["tHeadSetMode","Activation/désactivation du mode casque, Si activé le téléphone passe par défaut en mode casque"],
 ["tKeyPressSound","Réglage de la touche volume"],
 //类型
 ["tManuel","Réglage manuel date et heure"],
 ["tAuto","Requète date et heure par SNTP"],
 //NTP
 ["tTimeZone","Sélection du fuseau horaire"],
 ["tPrimaryNTPServer","Réglage du serveur SNTP principal"],
 ["tSecondryNTPServer","Réglage du serveur SNTP secondaire"],
 ["tUpdateInterval","Réglage de l'intervalle de mise à jour du serveur SNTP"],
 ["tDayLightSaving","Réglage de l'heure d'été. La période est configurée par l'utilisateur."],
 ["tOffSet","Réglage de la synchronisation de l'horloge."],
////话机-基本设置
////话机-通话特性
 //呼叫前转
 ["tForwardTransfer","Réglage du renvoi d'appel"],
 ["tForwardAlways","Activation/désactivation du renvoi immédiat"],
 ["tAlwaysTarget","Destinataire du renvoi immédiat"],
 ["tAlwaysOnCode","Code d'activation du renvoi immédiat de la ligne*, le téléphone active le renvoi en envoyant ce code au serveur, (certains caractères comme @ non supportés)"],
 ["tAlwaysOffCode","Code de désactivation du renvoi immédiat de la ligne*, le téléphone active le renvoi en envoyant ce code au serveur, (certains caractères comme @ non supportés)"],
 ["tForwardBusy","Activation/désactivation du renvoi sur occupation"],
 ["tBusyTarget","Destinataire du renvoi sur occupation"],
 ["tBusyOnCode","Code d'activation du renvoi sur occupation de la ligne*, le téléphone active le renvoi en envoyant ce code au serveur, (certains caractères comme @ non supportés)"],
 ["tBusyOffCode","Code de désactivation du renvoi sur occupation de la ligne*, le téléphone active le renvoi en envoyant ce code au serveur, (certains caractères comme @ non supportés)"],
 ["tForwardNoAnswer","Activation/désactivation du renvoi sur non réponse"],
 ["tNoAnswerRingTime","Délai avant renvoi sur non réponse"],
 ["tNoAnswerTarget","Destinataire du renvoi sur non réponse"],
 ["tNoAnswerOnCode","Code d'activation du renvoi sur non réponse de la ligne*, le téléphone active le renvoi en envoyant ce code au serveur, (certains caractères comme @ non supportés)"],
 ["tNoAnswerOffCode","Code de désactivation du renvoi sur non réponse de la ligne*, le téléphone active le renvoi en envoyant ce code au serveur, (certains caractères comme @ non supportés)"],
 //呼叫等待
 ["tCallWaitingEnable","Activation de l'attente d'un nouvel appel"],
 ["tCallWaitingTone","Réglage de la sonnerie d'attente(Si attente est activée)"],
 //免打扰
 ["tReturnCodeDND","Code SIP Ne Pas Déranger."],
 ["tDNDOnCode","Code d'activation de la fonction Ne Pas Déranger, Ne pas Déranger activé en envoyant ce code au serveur."],
 ["tDNDOffCode","Code de désactivation de la fonction Ne Pas Déranger, Ne pas Déranger désactivé en envoyant ce code au serveur."],
 //呼叫驻留
 ["tEnableCallPark","Activation/désactivation du parcage d'appel."],
 ["tCallParkAccount","Réglages compte utilisateur du parcage."],
 ["tCallParkTarget","Régler la destination du parcage d'appel."],
 ["tIntercomAllow","Activation/désactivation de l'intercom pour le correspondant distant"],
 ["tIntercomMute","Désactive le microphone en cas d'appel intercom."],
 ["tHotLineEnable","Active la fonction appel audécrochage sur les téléphones autorisés."],
 ["tHotLineNumber","Réglage du numéro HotLine"],
 ["tHotLineDelay","Réglage du délai avant numérotation"],
 ["tReturnCodeRefuse","Réglage du code SIP en cas de refus de communication."],
 ["tAutoAnswerDelay","Réglage du délai avant décrochage automatique"], 
////话机-声音页面
 //回音消除
 ["tEchoCanceller","Réglages de réduction de bruit"],
 ["tJitterBuffer","Buffer de données, les paquets voix sont capturés et envoyés au processeur ."],
 ["tMicVolume","Réglage Volume du microphone"],
////话机-按键/显示页面
 ["tSoftKey","Touches de fonctions"],
 ["tBacklightIntens","Réglage de l'intensité du rétroéclairage"],
 ["tBacklightTime","Réglage du délai avant extinction du rétroéclairage."],
////话机-铃声页面      自定义铃声格式：WAV，PCMU或PCMA编码，采样率8000hz，播放速率64kbps, 单通道。  铃声文件名长度限制：不能大于26个英文字符 
////话机-信号音页面    信号音格式如下:freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration][,freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration]] 
////话机-拨号规则页面
 //规则 
 ["tRules","Permet le remplacement d'un chiffre sur un numéro lors d'un appel sortant."],
 ["tAreaCode","Longueur max (1~15), min (1~15), l'utilisateur peut indiquer un préfixe à rajouter automatiquement au numéro composé."],
 ["tAccount1","L'utilisateur peut personnaliser le compte à l'aide de la règle de numérotation, il ne prendra effet que pour ce compte spécifié."],
////电话簿-地址簿页面
 //联系人
 ["tContactModify","Ajour Contact/Liste noire, le nom du contact ou de la liste noire ne peut pas etre vide.Modifier Contact/Liste noire: sélectionner l'entrée, faire les modif et valider."],
 ["MToBL","Les entrées de la liste noire peuvent etre placés dans les contacts et inversement ."],
 ["Contact_Delete","Ciquer sur supprimer pour effacer un contact, plusieurs ou toute la liste."],
 ["tGroups","Affiche les groupes de contacts "],
 ["tContactsExportImport","Importer ou exporter les contacts au format XML dans le répertoire local"],
 ["tBlackListExportImport","Importer ou exporter au format XML des contacts dans la liste noire"],
////电话簿-远程地址簿页面
 ["tRemotePhoneBook","Paramètres du répertoire externe, URL du fichier XML externe"],
////电话薄-通话记录页面
 //呼叫记录
 ["tCallHistory","Liste des appels reçus, émis, en absence, cliquer sur supprimer pour effacer une entrée, plusieurs ou toute la liste, puis confirmer."],
////升级-基本页面
 ["tUpgrade","Sélectionner le firmware sur le disque local, puis mettre à jour le téléphone"],
 ["tFirmwareVersion","Affiche la version firmware présente sur le produit."],
 ["tHardwareVersion","Affiche la version Harware du produit."],
 ["tResetFactory","Recharge les paramètres par défaut."],
 ["tReboot","Redémarre l'appareil"], 
////升级-高级页面
 //PNP选项
 ["tPNPOption","L'appareil envoie une demande d'autoprovisionning au serveur."],
 //DHCP选项
 ["tDHCPOption","Options DHCP"],
 //手动更新服务器
 ["tManualUpdateServer","Adresse URL du serveur d'autoprovisionning."],
 //自动更新
 ["tAutoPNowNotice","Cliquer pour lancer l'autoprovisionning immédiatement."],
 ["tClearMD5","Reset la valeur MD5 afn que le téléphone charge ce fichier au prochain démarrage."], 
 //系统日志
 ["tSystemLogLevel","Sélectionner le niveau des logs à exporter(Prend effet après redémarrage)"],
 ["tExportLog","Exporte les logs sur le pc"],
 //PCAP
 ["tPCAP","Cliquer sur démarrer pour lancer la capture, stop pour l'arréter, exporter pourl exporter le fichier PCAP sur un pc."],
 //其他
 ["tConfigTar","Cliquer sur exporter pour exporter la configuration du téléphone, sélectionner le fichier .tgz pour importer sur le téléphone."],
////安全-基本页面
////安全-高级页面
 ["tWebCert","Affiche tous les Web Server Certificates autorisés.Ces certificats sont utilisés pour vérifier les serveurs avant toute connexion HTTPS."],
 ["tWebCertUpload","Chargement Web Server Certificate"],
 ["tPhoneCert","Affiche tous les Certificats Clients utilisés par le serveur web."],
 ["tPhoneCertUpload","Charger un Certificat Client"]
 // 隐藏的定制页面
]