PhonToneInfo1 = "Timbres"
PhonToneInfo2 = "Formato de tono:"
PhoneRingInfo1 = "Tipo de tono personalizado"
PhoneRingInfo2 = "WAV, Códec: PCMU o PCMA, Frecuencia de Muestreo: 8000 Hz, Velocidad de transmisión: 64 kbps, Canal Único."
PhoneRingInfo3 = "Longitud nombre del tono: no superior a 26 caract"
PageDescription1 = "Introducción: "
WarningDescription = "Advertencia: "
NoteLabel = "Nota: "
NoteContent = ["Máx longitud de caracteres:","255: Servidor Agenda Broadsoft","127: URL Agenda remota y URL servidor Autoprovisión","63: resto de campos"]
	
//-------------------------------网页帮助页面介绍文档-----------------------------------
StatusDes="Estado"
AccountBDes="Cuenta - Básico"
AccountADes="Cuenta - Avanzado"
NetworkBDes="Red-Básica"
NetworkADes="Red-Avanzada"
PhoneTLDes="Hora / Idioma"
PhonePrefDes="Preferencias"
PhoneCFDes="Funciones"
PhoneVoiceDes="Voz"
PhoneKeyDisDes="Teclas/Display"
PhoneRingDes="Tonos"
PhoneDialPlanDes="Marcación"
PhoneBookDes="Agenda"
RemoteBookDes="Agenda-Agenda Remota"
CallLogDes="Agenda-Registro de Llamadas"
UpgradeBDes="Actualización - Básica	"
UpgradeADes="Actualización - Avanzada"
SecurityBDes="Seguridad - Básica"
SecurityADes="Seguridad - Avanzada"
TalkingDes=""

//-------------------------------网页帮助字段说明文档-----------------------------------
FieldDescription = "Descripción del campo:"
//FieldDescription1 = "说明字段所涉及到的使用功能及限制条件。"
//var FieldDescription1 = new Array(new Array())
//FieldDescription1[0] = ["fieldDescription", "说明字段所涉及到的使用功能及限制条件。"];
var FieldDescription1 = [
 ["fieldDescription","Describe la utilidad y aplicación"],
 ////状态页面
 ["tProductInfo","Muestra la información detallada del modelo actual, dirección MAC, versión de firmware y hardware"],
 ["tNetworkInfo","Muestra la información detallada de configuración de red"],
 ["tAccountInfo","Muestra la información detallada del registro de cuentas y servidor SIP"],
 ////账号-基本页面
 //SIP帐号
// ["tSIPAccount"," "],
 ["tAccountStatus","Descripción del registro del usuario"],
// ["tAccount"," "],
// ["tAccountActive"," "],
 ["tDisplayLabel","Muestra el nombre en la pantalla del teléfono"],
 ["tDisplayName","Es la identificación mostrada en el otro teléfono al realizar una llamada"],
 ["tRegisterName","Nombre de usuario asignado por ISP"],
 ["tUserName","Nombre de registro asignado por ISP"],
 ["tPassword","Contraseña asignada por ISP"],
 //SIP服务器
 ["tSIPServer","Dirección servidor SIP asignada por ISP"],
// ["tServerIP"," "]
 //呼出代理服务器
 ["tEnableProxyServer","Servidor que procesa las señales y facilita el paso de datos a través del firewall/NAT cuando hay firewall/NAT"],
 ["tServerIP1","Outbound proxy server"],
 ["tBakServerIP","Servidor outbound proxy de backup"],
 ["tTransportType","Tres opciones disponibles: TCP,UDP,TLS. El paquete de registro se encapsula utilizando protocolos elegidos. TLS está cifrado"],
 ////账号-高级页面
 //编解码
 ["tCodecs","Códecs de audio utilizados durante la llamada"],
 //订阅
 ["tSubscribeRegister","El teléfono envía un SUBSCRIBE al servidor SIP al registrarse y el servidor responde con la información de las opciones soportadas"],
 ["tMWISubscribe","El teléfono envía al servidor SIP una solicitud de Subscribe al buzón de voz de una cuenta, cuando ésta está registrada y MWI está habilitado"],
 //DTMF
 ["tDTMFType","El tipo de DTMF enviado al pulsar una tecla durante la llamada: Inband, RFC2833, SIP info, etc"],
 //呼叫
 ["tAutoAnswer","Ajuste para activar/desactivar la respuesta automática"],
 ["tPRACK","Ajuste para activar/desactivar Provisioning Response Acknowledge."],
 ["tPTime","Establece el intervalo de tiempo (en milisegundos) de Ptime (tiempo de paquetización) que determina la duración del audio en cada paquete RTP."],
 ["tAnonymCall","Activar/desactivar la llamada anónima."],
 ["tAnonymCallReject","Activar/desactivar el rechazo de llamada anónima"],
//加密
 ["tVoiceEncry","Activar/desactivar SRTP/cifrado de paquetes de audio"],
 ["tRegisterExpire","Indica el intervalo de tiempo con que el teléfono envía la solicitud de registro al servidor. El intervalo final debe ser negociado con el servidor de registro"],
 ["tUDPKeepAliveMSG","El teléfono envía periódicamente UDP KeepAlive al servidor para que el servidor mantenga el puerto UDP abierto"],
 ["tUDPAliveMsgInterva","Define el intervalo para UDP KeepAlive"],
 ["tRPort","Rport (puerto remoto) es un parámetro utilizado en NAT Traversal"],
 ////网络-基本
 ["tDHCP","Manda solicitud al servidor DHCP para obtener automáticamente la direccion IP, máscara de subred, puerta de enlace, DNS etc."],
 ["tStaticIP","Ajusta manualmente la dirección IP, máscara de subred, puerta de enlace, DNS etc."], 
 ////网络-高级 
 ["tSNMPActive","Habilitar/deshabilitar el SNMP, protocolo de internet-estándar para manejar aparatos en redes IP"],
 ["tSNMPPort","Define el puerto para el servidor SNMP"],
 ["tSNMPTrustedIPAddr","Dirección del servidor SNMP"],
 ["tVLANActive1","Activar/desactivar VLAN"],
 ["tVID1","Fija la ID VLAN"],
 ["tPrior1","Ajusta la prioridad para VLAN"],
 ["tTR069","TR-069 es una especificación técnica titulada Protocolo de Gestión CPE WAN (CWMP). Define un protocolo en la capa de aplicación para la gestión remota de los dispositivos de los usuarios finales."],
 ["tTR069Active","Habilitar/deshabilitar TR069"],
 ["tTR069Version","Configurar versión de TR069"],
 ["tTR069ACSURL","Configurar URL del Servidor"],
 ["tTR069ACSUser","Configurar nombre de usuario para conectar al servidor TR069"],
 ["tTR069ACSPWD","Configurar contraseña para servidor TR069"],
 ["tTR069InformPerActive","Activar/desactivar información periódica de TR069"],
 ["tTR069InformPeriod","Ajustar intervalo de información periódica de TR069"],
 ["tDDNS","DDNS is dynamic domain name system, it specifies that the dynamic IP address of phone is mapped to a fixed domain name by DDNS server"],
 ////话机-时间/语言
 //网页语言
 ["tWebLanguage","Elegir el idioma de la web"],
 //时间设置
 ["tTimeFormat","Fijar formato hora a 12/24 horas"],
 ["tDateFormat","Fijar el formato de fecha"],
 ["tHeadSetMode","Activar/desactivar el modo auriculares. Si se habilita el modo teléfono establece el modo auriculares "],
 ["tKeyPressSound","Ajustar volumen de teclas"],
 //类型
 ["tManual","Configurar hora y fecha manualmente"],
 ["tAuto","Requerir hora y fecha automáticamente por SNTP"],
 //NTP
 ["tTimeZone","Elegir zona horaria"],
 ["tPrimaryNTPServer","Configurar el servidor primario para obtener hora por SNTP"],
 ["tSecondryNTPServer","Configurar el servidor secundario SNTP"],
 ["tUpdateInterval","Ajusta el intervalo de revisión de la hora local con el servidor SNTP "],
 ["tDayLightSaving","Horario de verano. El DST tomará efecto durante el período establecido por el usuario"],
 ["tOffSet","Offset positivo indica el tiempo será más rápido que la hora local "],
 ////话机-基本设置
 ////话机-通话特性
 //呼叫前转
 ["tForwardTransfer","Configurar la Transferencia de de desvío de llamada"],
 ["tForwardAlways","Activar/desactivar el desvío incondicional"],
 ["tAlwaysTarget","Número de destino parael desvío incondicional"],
 ["tAlwaysOnCode","Código de activación del desvío incondicional en la línea. El código se envía al servidor. Caracteres como @ no se soportan"],
 ["tAlwaysOffCode","Código de desactivación del desvío incondicional en la línea. El código se envía al servidor. Caracteres como @ no se soportan"],
 ["tForwardBusy","Activar/Desactivar el desvío si ocupado "],
 ["tBusyTarget","Destino al que se desvían las llamadas del desvío si ocupado"],
 ["tBusyOnCode","Código de activación del desvío si ocupado. El código se envía al servidor. Caracteres como @ no se soportan"],
 ["tBusyOffCode","Código de desactivación del desvío si ocupado. El código se envía al servidor. Caracteres como @ no se soportan"],
 ["tForwardNoAnswer","Habilitar/deshabilitar el desvío cuando no hay respuesta"],
 ["tNoAnswerRingTime","Tiempo de espera de llamada antes de realizar el desvío"],
 ["tNoAnswerTarget","Número de destino de desvío si no hay respuesta"],
 ["tNoAnswerOnCode","Código de activación del desvío si no contesta. El código se envía al servidor. Caracteres como @ no se soportan"],
 ["tNoAnswerOffCode","Código de desactivación del desvío si no contesta. El código se envía al servidor. Caracteres como @ no se soportan"],
 //呼叫等待
 ["tCallWaitingEnable","Ajuste para activar la llamada en espera para otra llamada entrante"],
 ["tCallWaitingTone","Configua el tono de aviso de nueva llamada entrante durante una conversación, siempre que la llamada en espera está activada"],
 //免打扰
 ["tReturnCodeDND","Mensaje de respuesta cuando DND está activado"],
 ["tDNDOnCode","Configura el código para activar DND. El DND se activa enviando éste código al servidor"],
 ["tDNDOffCode","Configura el código para desactivar DND. El DND se activa enviando éste código al servidor"],
 //呼叫驻留
 ["tEnableCallPark","Activar/desactivar aparcamiento llamada"],
 ["tCallParkAccount","Configura la cuenta para el aparcamiento de llamada"],
 ["tCallParkTarget","Establece los destinos del aparcamiento de llamada "],
 ["tIntercomAllow","Activar/desactivar aceptación de llamadas Intercom"],
 ["tIntercomMute","Si está activado, al recibir una llamada Intercom el teléfono responderá a la llamada y activará el modo MUTE"],
 ["tHotLineEnable","Activar/Desactivar Hotline. Cuando esté activado, el teléfono marcara el número HotLine al descolgar, tras el tiempo de espera establecido"],
 ["tHotLineNumber","Número HotLine"],
 ["tHotLineDelay","Establecer tiempo de espera para llamada HotLine"],
 ["tReturnCodeRefuse","Define el mensaje de respuesta enviado al servidor al rechazar una llamada"],
 ["tAutoAnswerDelay","Establecer el tiempo de espera para la respuesta automática"],
 ////话机-声音页面
 //回音消除
 ["tEchoCanceller","Ajuste de cacelador de eco"],
 ["tJitterBuffer","Es un Búfer compartido donde se almacenan los paquetes de voz y posteriormente se envían para un procesamiento fluido"],
 ["tMicVolume","Ajustar volumen del micrófono"],
 ////话机-按键/显示页面
 ["tSoftKey","Personalizar teclas en modo espera"],
 ["tBacklightIntens","Ajustar intensidad de la luz de fondo de la pantalla"],
 ["tBacklightTime","Ajusta el tiempo de luz de fondo de pantalla. Ésta se apagará la luz depués del tiempo definido para ahorrar la energía"],
 ////话机-铃声页面      自定义铃声格式：WAV，PCMU或PCMA编码，采样率8000hz，播放速率64kbps, 单通道。  铃声文件名长度限制：不能大于26个英文字符 
 ////话机-信号音页面    信号音格式如下:freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration][,freq1[(amp1)][+freq2[(amp2)]][+freq3[(amp3)]][+freq4[(amp4)]][/duration]] 
 ////话机-拨号规则页面
 //规则
 ["tRules","Las reglas permiten definir un prefijo y el valor con el que éste se va a reemplazar. P.ej. Si se reemplaza 10 con 1016, al marcar 10 el teléfono llamará al 1016."],
 ["tAreaCode","El usuario puede establecer el límite max/min(1~15) del código de área. En el rango establecido el teléfono agregará automáticamente el código de área establecido por el usuario antes de  marcar número"],
 ["tAccount1","Permite personalizar la cuenta usando reglas de marcación y sólo afecta a la cuenta especificada"],
 ////电话簿-地址簿页面
 //联系人
 ["tContactModify","Añadir Contacto/ListaNegra, el nombre del contacto o contacto de la Lista Negra no debe estar vacío. Modificar contacto/lista negra: seleccione el elemento, modifique y confirme el cambio"],
 ["MToBL","Los contactos pueden agregarse o sacarse de la Lista negra"],
 ["Contact_Delete","Borrar Contacto/Lista Negra. Pulse Eliminar para eliminar uno, más de uno o todos los contactos seleccionados"],
 ["tGroups","Muestra todos los grupos de contactos locales"],
 ["tContactsExportImport","Impotar/Exportar los contactos de formato XML a la agenda local"],
 ["tBlackListExportImport","Importar/Exportar los contactos de formato XML a la Lista Negra"],
 ////电话簿-远程地址簿页面
 ["tRemotePhoneBook","Establecer parámetros de agenda local , como URL de agenda remota XML"],
 ////电话薄-通话记录页面
 //呼叫记录
 ["tCallHistory","Incluye registros de todas las llamadas recibidas, realizadas, perdidas, desviadas. Pulse Eliminar para borrar los elementos seleccionados y confirme el cambio"],
 ////升级-基本页面
 ["tUpgrade","Seleccione nuena versión de firmware  para actualizar el teléfono"],
 ["tFirmwareVersion","Muestra la versión actual de firmware del teléfono."],
 ["tHardwareVersion","Muestra la versión actual de hardware del teléfono."],
 ["tResetFactory","Resetear el teléfono a la configuración por defecto"],
 ["tReboot","Reiniciar el teléfono"],
 ////升级-高级页面
 //PNP选项
 ["tPNPOption","El teléfono mandará una petición al servidor para obtener la URL de provisión"],
 //DHCP选项
 ["tDHCPOption","La opción DHCP especificada"],
 //手动更新服务器
 ["tManualUpdateServer","Define la URL del servidor de provisión"],
 //自动更新
 ["tAutoPNowNotice","Haga click para iniciar la autoprovisión"],
 ["tClearMD5","Resetear Valor MD5 para que el teléfono descargue y aplique la configuración en la siguiente provisión"],
 //系统日志
 ["tSystemLogLevel","Selecione el nivel del registro para exportar (se necesita reiniciar)"],
 ["tExportLog","Exportar registros al PC local"],
 //PCAP
 ["tPCAP","Haga click en Start/Stop para capturar/detener la captura de paquetes, y haga clic en exportar para exportar el archivo PCAP al PC local después de detenerlo"],
 //其他
 ["tConfigTar","Exportar la configuración actual del teléfono. Seleccione archivo .tgz config para importar/sobreescribir la configuración"],
 ////安全-基本页面
 ////安全-高级页面
 ["tWebCert","Muestra los certificados de Servidor Web en los que el terminal confía. Estos certificados deben ser usados para verificar un servidor específico antes de establecer una conexión HTTPS "],
 ["tWebCertUpload","Cargar Certificado de Servidor Web"],
 ["tPhoneCert","Muestra los certificados de cliente utilizados para ser verificados por el servidor. "],
 ["tPhoneCertUpload","Cargar Certificado de Cliente"]
 // 隐藏的定制页面
// ["",""], 
]
