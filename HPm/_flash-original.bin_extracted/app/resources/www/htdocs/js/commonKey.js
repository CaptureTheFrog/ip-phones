	var PKey = ["Up","Down","Left","Right","Transfer","RD","VoiceMessage","Book","OK","Cancel","FWD","Mute"];
	var PKeyName = ["tUp","tDown","tLeft","tRight","tTransfer","tRD","tVoiceMessage","tBook","tOK","tCancel","tFWD","tMute"];
	var PKeyType = ["cUpKeyType","cDownKeyType","cLeftKeyType","cRightKeyType","cTransferKeyType","cRDKeyType","cVoiceMessageKeyType","cBookKeyType","cOKKeyType","cCancelKeyType","cFwdKeyType","cMuteKeyType"];
	var PKeyValue = ["cUpKeyValue","cDownKeyValue","cLeftKeyValue","cRightKeyValue","cTransferKeyValue","cRDKeyValue","cVoiceMessageKeyValue","cBookKeyValue","cOKKeyValue","cCancelKeyValue","cFwdKeyValue","cMuteKeyValue"];
	var PKeyCode = ["cUpKeyCode","cDownKeyCode","cLeftKeyCode","cRightKeyCode","cTransferKeyCode","cRDKeyCode","cVoiceMessageKeyCode","cBookKeyCode","cOKKeyCode","cCancelKeyCode","cFwdKeyCode","cMuteKeyCode"];
	var PKeyLine = ["cUpKeyLine","cDownKeyLine","cLeftKeyLine","cRightKeyLine","cTransferKeyLine","cRDKeyLine","cVoiceMessageKeyLine","cBookKeyLine","cOKKeyLine","cCancelKeyLine","cFwdKeyLine","cMuteKeyLine"];
	var cFuncKeyNum = Number(PKeyName.length);
	var tmpSplitSymbol = "&$"; 
	
	var arrSoftKeyValue = new Array();
	//book下拉框
	var Book_SelectText = ["all","local","all contacts","local group1","local group2","local group3","local group4","local group5",
												 "remote","remote group1","remote group2","remote group3","remote group4", "remote group5",
												 "broadsoft","broadsoft group1","broadsoft group2","broadsoft group3","broadsoft group4","broadsoft group5","broadsoft group6",
												 "LDAP"];
	var Book_SelectValue = ["0","10","11","12","13","14","15","16","20","21","22","23","24","25","30","31","32","33","34","35","36","40"];
	
function DoF5Jump()
{
	Relocate(PageRefDesURL);
}

function ResetHtml(KeyValue, index)
{
	itemHtml ="<input style='width: 90px;' id='"+ KeyValue + index + "' type='text' onFocus='onInputEdit(this.id)'></input>"
	$("#"+KeyValue+index).replaceWith(itemHtml);
}

function InputToSelect(typeObj, valueObj)
{
	if(typeof(typeObj) == "object")
		{typeid = typeObj.id;}
	else
		{typeid = typeObj;}
	if(typeof(valueObj) == "object")
		{valueid = valueObj.id;}
	else
		{valueid = valueObj;}
		
	tmpT = document.getElementById(typeid).value;
	tmpT = getLineKeyTypeByID(tmpT);
	if(tmpT == "Book")
	{
		//将输入框变为下拉框
		itemHtml ="<select style='width: 90px;' id='"+ valueid +"' type='text' onFocus='onInputEdit(this.id)'></select>"
		$("#"+valueid).replaceWith(itemHtml);
		for(var i=0 ;i<Book_SelectText.length; i++)
		{
			document.getElementById(valueid).options.add(new Option(Book_SelectText[i], Book_SelectValue[i]));
		}
		//如果值为空，将其置为默认值
		if("" == document.getElementById(valueid).value)
		{
			TransEmptyStrTo0(document.getElementById(valueid).value);
		}
	}
	else
	{
		itemHtml ="<input style='width: 90px;' id='"+ valueid +"' type='text' onFocus='onInputEdit(this.id)'></input>"
		$("#"+valueid).replaceWith(itemHtml);
	}
}

function getOptionsByType(tmptype)
{
	switch(tmptype)
	{
		case "N/A": return NA; 
		case "DND" : return DND; 
		case "Menu": return Menu; 
		case "MSG":  return MSG; 
		case "Status":  return Status ; 
		case "Book":  return Book ;
		case "Fwd":  return Fwd ;
		case "PickUp":  return PickUp ;
		
		case "Group PickUp":  return GroupPickUp ;
		case "Intercom":  return Intercom ;
		case "Speed Dial":  return SpeedDial ;
		case "History":  return tHistory ;
		case "Favorites":  return Favorite ;
		case "Redial":  return Redial ;
		case "Account":  return Account ;
		case "ACD":  return ACD ;
		case "BLF":  return BLF ;
		case "BLFList":  return BLFList;
		case "CallReturn": return CallReturn;
		case "HotDesking": return HotDesking;
		case "Record": return Record;
		case "XML Browser": return XMLBrowser;
		case "DTMF": return DTMF;
		case "Multicast Paging": return MulticastPaging;
		case "Simple Menu": return ("undefined" != typeof(SimpleMenu))?SimpleMenu:"Simple Menu";
		case "Voice Message": return VoiceMessage;
		case "Transfer": return ("undefined" != typeof(Transfer))?Transfer:"Transfer";
		case "Call Park": return ("undefined" != typeof(CallPark))?CallPark:"Call Park";
		case "XML PhoneBook": return XMLPhoneBook;
		case "XML History": return XMLHistory;
		case "XML VoiceMail": return ("undefined" != typeof(XMLVoiceMail))?XMLVoiceMail:"XML VoiceMail";
		case "URL":return ("undefined" != typeof(Url))?Url:"URL";
		case "Prefix":return ("undefined" != typeof(Prefix))?Prefix:"Prefix";
		default : return NA;
	}	
}

function isValueValid(tmpValue,tmpNum)
{
	tmpNum =  Number(tmpNum);
	if(tmpValue > 0 && tmpValue <= tmpNum)	return true;
	else return false; 		
}

function transInvalidToDef(tmpValue, tmpNum, defValue)
{
 tmpValue = (!isValueValid(tmpValue,tmpNum))?defValue:tmpValue;
 return tmpValue;		
}

function isTypeValueValid(tmpValue, arrKeyIDList, tmpKeyTypeNum)//value,array,num
{
	tmpKeyTypeNum =  Number(tmpKeyTypeNum);
	var arrKeyID = arrKeyIDList.split(tmpSplitSymbol);
	for(var k=0; k < tmpKeyTypeNum; k++)
	{
		if(tmpValue == arrKeyID[k])
		{
			return true;
		}
	}
	return false;
}

function transTypeInvalidToDef(tmpValue, arrKeyIDList, tmpKeyTypeNum, defValue)
{
 tmpValue = (!isTypeValueValid(tmpValue, arrKeyIDList, tmpKeyTypeNum))?defValue:tmpValue;
 return tmpValue;		
}

function setDisabled(DOMObj, f)
{
	DOMObj.disabled = f;
	DOMObj.style.backgroundColor = f ? "#EDEDED" : "";
}

function GetPrmsDisabled(tmpT)
{
	//此处flag的值是以disable的四个项的规则来定的。
	//如：disable all 为4个true，1111即值为15
	switch(tmpT)
	{
		case "N/A":					flag = 15; break;			//disable all
		case "Speed Dial": 																		
		case "FeatureCode": 
		case "PickUp":
		case "Group PickUp":
		case "Intercom":
		case "Prefix":
		case "Account":		flag = 2; break;			//disable code
		case "XML Browser":	
		case "DTMF":
		case "Multicast Paging":
		case "Book":
		case "URL":
		case "Voice Message":
		case "Call Park":						flag = 3; break;						//disable code account
		case "BLFList":
		case "ACD":   		  flag = 6 ; break;              //disable Value&Code
		case "History":
		case "DND":
		case "Menu":
		case "MSG":
		case "Status":
		case "Fwd":
		case "Redial":
		case "Favorites":
		case "PreAccount":
		case "NextAccount":
		case "PreIdlePage":
		case "CallReturn":
		case "NextIdlePage":
		case "HotDesking": 
		case "Record":
		case "Simple Menu":
		case "Transfer":
		case "XML PhoneBook":
		case "XML History":
		case "XML VoiceMail":					  flag = 7; break;             //Disable Value ,Account,Code
		 		  								  //flag = 14;break;        //Disable Label,Value,Code
		default : flag = 0; 	
	}
	return flag;
}

//以下是keydisplay页面用的。因该页面html文件过大导致问题，所以放到这边来
function CheckMutiPage()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	
	if(f2.hcMutiPageMode && "1" == f2.hcMutiPageMode.value)
	{
		document.getElementById("divFunctionKeyPageSwitch").style.display="";
	}
	else
	{
		document.getElementById("divFunctionKeyPageSwitch").style.display="none";
	}
}

function LoadMutiFunctionPage()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	
	var cLineKeyNum = f2.hcLineKeyNum.value;	
	var cLineKeyTypeNum = f2.hcLineKeyTypeNum.value;	
	var cLineKeyTypeIds = f2.hcLineKeyTypeIds.value.split(tmpSplitSymbol); //(SplitSymbol);
	var arrLineKeyTypeList = f2.hcLineKeyTypeList.value.split(tmpSplitSymbol);//(SplitSymbol);
	
	if(1 != f2.hcCurFunctionKeyPageId.value)//CurFunctionKeyPage
	{
		$("#tableFunctionKey").hide();
		$("#tableMutiFunctionKey").show();
		var itemHtml ="<tr bgcolor='#a5a9af'>"+
						  "<td style='text-align: center; width: 90px;'><label style='text-align: center; width: 80px;' id='tMutiFunctionKeyName'></label></td>"+
						  "<td style='text-align: center; width: 90px;'><label style='text-align: center; width: 90px;' id='tMutiFunctionKeyType'></label></td>"+
						  "<td style='text-align: center; width: 90px;'><label style='text-align: center; width: 90px;' id='tMutiFunctionKeyLabel'></label></td>"+
						  "<td style='text-align: center; width: 90px;'><label style='text-align: center; width: 90px;' id='tMutiFunctionKeyValue'></label></td>"+
						  "<td style='text-align: center; width: 90px;'><label style='text-align: center; width: 90px;' id='tMutiFunctionKeyAccount'></label></td>"+
						  "<td style='text-align: center; width: 90px;'><label style='text-align: center; width: 90px;' id='tMutiFunctionKeyCode'></label></td>"+
						"</tr>"
		$("#tableMutiFunctionKey").html(itemHtml);
		for(var i=0; i<f2.hcFunctionKeyNum.value; i++)
		{
			var curValue = "cFunctionKeyValue"+i;
			itemHtml="<tr>"+
					"<td style='text-align: center; width: 90px;' height='10'><label style='width: 80px;' id='tFunctionKey" + i + "'></label></td>" +	  
					"<td style='text-align: center; width: 90px;'><select style='width: 90px;' id='cFunctionKeyType" + i + "' onChange='InputToSelect(this.id, \""+curValue+"\"), CheckFuncKeySts(), optionsReset(this.id), prmsReset(this.id)'></select></td>" +   
					"<td style='text-align: center; width: 90px;'><input style='width: 90px;' id='cFunctionKeyLabel" + i + "' type='text' onFocus='onInputEdit(this.id)'></td>"+
					"<td style='text-align: center; width: 90px;'><input style='width: 90px;' id='cFunctionKeyValue" + i + "' type='text' onFocus='onInputEdit(this.id)'></td>"+
					"<td style='text-align: center; width: 90px;'><select style='width: 90px;' id='cFunctionKeyLine" + i + "'></select></td>"+
					"<td style='text-align: center; width: 90px;'><input style='width: 90px;' id='cFunctionKeyCode" + i + "' type='text' onFocus='onInputEdit(this.id)'></td>"+
					"</tr>"
			$("#tableMutiFunctionKey").append(itemHtml);
			var tmp = "cFunctionKeyType"+i;
			
			for(var j = 0; j < cLineKeyTypeNum; j++)
			{ 	
				var tmpOptions = getOptionsByType(arrLineKeyTypeList[j]);
				document.getElementById(tmp).options.add(new Option(tmpOptions,cLineKeyTypeIds[j]));
			}
			tmp = "cFunctionKeyLine"+i;	
			for(var j = 0; j <= cLineKeyNum; j++)
			{ 
				var tmpLine = Line + " "+ (j);
				if(0==j){tmpLine=Auto;}
				document.getElementById(tmp).options.add(new Option(tmpLine, j));
			}
		}
		
		for(var i=0; i < f2.hcFunctionKeyNum.value; i++)
		{
			var tmp = "tFunctionKey"+i;
			document.getElementById(tmp).innerHTML = FunctionKey+" "+(i+1);
		}
		document.getElementById("tMutiFunctionKeyName").innerHTML= Key;	
		document.getElementById("tMutiFunctionKeyType").innerHTML= Type;
		document.getElementById("tMutiFunctionKeyLabel").innerHTML = Label;
		document.getElementById("tMutiFunctionKeyValue").innerHTML =Value;
		document.getElementById("tMutiFunctionKeyCode").innerHTML =Extension;
		document.getElementById("tMutiFunctionKeyAccount").innerHTML =Account;
		
		SubloadFunctionKey();
	}
}
function SubloadFunctionKey()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	
	var cFunctionKeyTypeIds = f2.hcLineKeyTypeIds.value
	var arrFunctionKeyTypeList = f2.hcLineKeyTypeList.value.split(tmpSplitSymbol);
	
	var cLineNum = f2.hcLineNum.value;
	var cLineKeyTypeNum = f2.hcLineKeyTypeNum.value;
	
	var cFunctionKeyNum = f2.hcFunctionKeyNum.value;
	var arrFunctionKeyType = f2.hcFunctionKeyType.value.split(tmpSplitSymbol);
	var arrFunctionKeyLabel = f2.hcFunctionKeyLabel.value.split(tmpSplitSymbol);
	var arrFunctionKeyValue = f2.hcFunctionKeyValue.value.split(tmpSplitSymbol);
	var arrFunctionKeyCode = f2.hcFunctionKeyCode.value.split(tmpSplitSymbol);
	var arrFunctionKeyLine = f2.hcFunctionKeyLine.value.split(tmpSplitSymbol);
	
	var arrKeyDefaultType = f2.hcKeyDefaultType.value.split(tmpSplitSymbol);
	//MutiFunctionKey value assignment
	for(var i = 0; i < cFunctionKeyNum; i ++ )
	{
		arrFunctionKeyType[i] = transTypeInvalidToDef(arrFunctionKeyType[i],cFunctionKeyTypeIds,cLineKeyTypeNum,"0");
		if(0 == i) 	f2.hcFunctionKeyType.value = arrFunctionKeyType[i] + tmpSplitSymbol;//SplitSymbol ; 
		else 	f2.hcFunctionKeyType.value = f2.hcFunctionKeyType.value + arrFunctionKeyType[i] + tmpSplitSymbol;//SplitSymbol;  
	}
	for(var i = 0; i < cFunctionKeyNum; i ++ )
	{
		ResetHtml("cFunctionKeyValue", i);
		var tmpLine = i+1;
		if(i >= cLineNum) tmpLine = 1; 
		switch(getLineKeyTypeByID(arrFunctionKeyType[i]))
		{
			case "BLFList":
			case "Account":
			case "BLF":
			case "ACD":
			{
				arrFunctionKeyLine[i] = transInvalidToDef(arrFunctionKeyLine[i],cLineNum,tmpLine);
				if(0 == i) 
				{
					f2.hcFunctionKeyLine.value = arrFunctionKeyLine[i] + tmpSplitSymbol;
				}
				else
				{
					f2.hcFunctionKeyLine.value = f2.hcFunctionKeyLine.value + arrFunctionKeyLine[i] + tmpSplitSymbol;
				}
				break;
			}
			case "Book":
			{
				//将输入框变为下拉框
				itemHtml ="<select style='width: 90px;' id='cFunctionKeyValue" + i + "' type='text' onFocus='onInputEdit(this.id)'></select>"
				$("#cFunctionKeyValue"+i).replaceWith(itemHtml);
				for(var j=0 ;j<Book_SelectText.length; j++)
				{
					document.getElementById("cFunctionKeyValue"+i).options.add(new Option(Book_SelectText[j], Book_SelectValue[j]));
				}
				
				if(!isValueValid(arrFunctionKeyLine[i],cLineNum)&& !(arrFunctionKeyLine[i] == '0'))
					 arrFunctionKeyLine[i] = tmpLine;				
				if(0 == i) 	
				{
					f2.hcFunctionKeyLine.value = arrFunctionKeyLine[i] + tmpSplitSymbol;
				}
				else
				{
					f2.hcFunctionKeyLine.value = f2.hcFunctionKeyLine.value + arrFunctionKeyLine[i] + tmpSplitSymbol;
				}
				break;
			}
			default:
			{
				if(!isValueValid(arrFunctionKeyLine[i],cLineNum)&& !(arrFunctionKeyLine[i] == '0'))
					 arrFunctionKeyLine[i] = tmpLine;				
				if(0 == i) 	
				{
					f2.hcFunctionKeyLine.value = arrFunctionKeyLine[i] + tmpSplitSymbol;
				} 
				else
				{
					f2.hcFunctionKeyLine.value = f2.hcFunctionKeyLine.value + arrFunctionKeyLine[i] + tmpSplitSymbol;
				}
				break;
			}
		}		
	}

	for(var i=0; i < cFunctionKeyNum; i++)
	{
		var tmp = "cFunctionKeyType"+i;
		var tmpType = arrFunctionKeyType[i]; 
		var tmpLineKeyLine = arrFunctionKeyLine[i];
		curTypeID = Number(i);
		document.getElementById(tmp).value = arrFunctionKeyType[i];
		optionsReset(tmp);
		var tmp = "cFunctionKeyLabel"+i;
		document.getElementById(tmp).value = arrFunctionKeyLabel[i];     	
		var tmp = "cFunctionKeyValue"+i;
		document.getElementById(tmp).value = ShowDecode(arrFunctionKeyValue[i]);
		document.getElementById(tmp).maxLength = 127;
		var tmp = "cFunctionKeyCode"+i;
		document.getElementById(tmp).value = arrFunctionKeyCode[i];		
		var tmp = "cFunctionKeyLine"+i;
		document.getElementById(tmp).value = arrFunctionKeyLine[i];		
	}
}
function CheckFuncKeySts()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	
	var cLineKeyTypeNum = f2.hcLineKeyTypeNum.value;
	var cLineKeyTypeIds = f2.hcLineKeyTypeIds.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrLineKeyTypeList = f2.hcLineKeyTypeList.value.split(tmpSplitSymbol);//(SplitSymbol);
	
	if(1 != f2.hcCurFunctionKeyPageId.value)
	{
		for(var i=0;i<f2.hcFunctionKeyNum.value;i++)
		{	
			var tmp = "cFunctionKeyType"+i;
			var tmpT = document.getElementById(tmp).value; 	
			tmpT = getLineKeyTypeByID(tmpT);
			switch(GetPrmsDisabled(tmpT))
			{	
				case 2:
				{	
					tmp = "cFunctionKeyLabel" + i;
					setDisabled(document.getElementById(tmp),false);
					tmp = "cFunctionKeyValue" + i;
					setDisabled(document.getElementById(tmp),false);
					tmp = "cFunctionKeyCode" + i;
					setDisabled(document.getElementById(tmp),true);
					tmp = "cFunctionKeyLine" + i;
					setDisabled(document.getElementById(tmp),false);
					break;
				}
				case 3:
				{	
					tmp = "cFunctionKeyLabel" + i;
					setDisabled(document.getElementById(tmp),false);
					tmp = "cFunctionKeyValue" + i;
					setDisabled(document.getElementById(tmp),false);
					tmp = "cFunctionKeyCode" + i;
					setDisabled(document.getElementById(tmp),true);
					tmp = "cFunctionKeyLine" + i;
					setDisabled(document.getElementById(tmp),true);
					break;
				}
				case 6: 
				{	
					tmp = "cFunctionKeyLabel"+i;
					setDisabled(document.getElementById(tmp),false);
					tmp = "cFunctionKeyValue"+i;
					setDisabled(document.getElementById(tmp),true);
					tmp = "cFunctionKeyCode"+i;
					setDisabled(document.getElementById(tmp),true);
					tmp = "cFunctionKeyLine"+i;
					setDisabled(document.getElementById(tmp),false);
					break;
				}
				case 7:
				{	
					tmp = "cFunctionKeyLabel"+i;
					setDisabled(document.getElementById(tmp),false);
					tmp = "cFunctionKeyValue"+i;		
					setDisabled(document.getElementById(tmp), true);
					tmp = "cFunctionKeyCode"+i;
					setDisabled(document.getElementById(tmp), true);
					tmp = "cFunctionKeyLine"+i;
					setDisabled(document.getElementById(tmp), true);
					break;
				}
				case 14:
				{	
					tmp ="cFunctionKeyLabel"+i;
					setDisabled(document.getElementById(tmp), true);
					tmp ="cFunctionKeyValue"+i;		
					setDisabled(document.getElementById(tmp), true);
					tmp ="cFunctionKeyCode"+i;
					setDisabled(document.getElementById(tmp), true);
					tmp = "cFunctionKeyLine"+i;
					setDisabled(document.getElementById(tmp), false);
					break;
				}
				case 15:
				{	
					tmp = "cFunctionKeyLabel" + i;
					setDisabled(document.getElementById(tmp),true);
					tmp = "cFunctionKeyValue" + i;
					setDisabled(document.getElementById(tmp),true);
					tmp = "cFunctionKeyCode" + i;
					setDisabled(document.getElementById(tmp),true);
					tmp = "cFunctionKeyLine" + i;
					setDisabled(document.getElementById(tmp),true);
					break;
				}
				default :
				{	
					tmp ="cFunctionKeyLabel"+i;
					setDisabled(document.getElementById(tmp), false);
					tmp ="cFunctionKeyValue"+i;		
					setDisabled(document.getElementById(tmp), false);
					tmp ="cFunctionKeyCode"+i;
					setDisabled(document.getElementById(tmp), false);
					tmp ="cFunctionKeyLine"+i;
					setDisabled(document.getElementById(tmp), false);
					break;
				}
			} 	
			tmp = "cFunctionKeyValue"+i;
			document.getElementById(tmp).maxLength = 127;		<!--将value框的长度限制为127-->
		}
	}
}
function OnGotoNextFuncKeyPage()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	var strSubmData = "begin";
	
	if(f2.hcMutiPageMode && "1" != f2.hcMutiPageMode.value)
	{ return;	}
	if(f2.hcCurFunctionKeyPageId)
	{
		CurFunctionKeyPage = Number(f2.hcCurFunctionKeyPageId.value);
	}
	if(Number(CurFunctionKeyPage) >= TotalFunctionKeyPageNum)
	{ return ;}
	CurFunctionKeyPage += 1;
	document.getElementById("cCurFunctionKeyPageId").innerHTML = CurFunctionKeyPage + " " + "/" + " " + TotalFunctionKeyPageNum;
	
	strSubmData = strSubmData + "&cCurFunctionKeyPageId=" + CurFunctionKeyPage;
	strSubmData = strSubmData + "&Operation=Submit";
	strSubmData = strSubmData + "&SubmitData=end";
	f3.SubmitData.value = strSubmData;
	DoForm3Submit(f3);
}
function OnGotoPreFuncKeyPage()
{
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];
	var f3 = document.forms["submit_form"];
	var strSubmData = "begin";
	
	if(f2.hcMutiPageMode && "1" != f2.hcMutiPageMode.value)
	{ return;	}
	CurFunctionKeyPage = Number(f2.hcCurFunctionKeyPageId.value);
	if(1 >= Number(CurFunctionKeyPage))
	{ return ;}
	CurFunctionKeyPage -= 1;
	//f1.cCurFunctionKeyPageId.innerHTML = CurFunctionKeyPage + " " + "/" + " " + TotalPageNum;
	document.getElementById("cCurFunctionKeyPageId").innerHTML = CurFunctionKeyPage + " " + "/" + " " + TotalFunctionKeyPageNum;
	
	strSubmData = strSubmData + "&cCurFunctionKeyPageId=" + CurFunctionKeyPage;
	strSubmData = strSubmData + "&Operation=Submit";
	strSubmData = strSubmData + "&SubmitData=end";
	f3.SubmitData.value = strSubmData;
	DoForm3Submit(f3);
}