var NumberNum = 11;

function CheckPKeySts()
{	
	var f1 = document.forms["body_form"]
	var f2 = document.forms["hiddenValForm"];
	
	var cLineNum = f2.hcLineNum.value;
	
 	var cLineKeyNum = f2.hcLineKeyNum.value;
	var cLineKeyTypeNum = f2.hcLineKeyTypeNum.value;
	var cLineKeyTypeIds = f2.hcLineKeyTypeIds.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrLineKeyTypeList = f2.hcLineKeyTypeList.value.split(tmpSplitSymbol);//(SplitSymbol);

	var cSoftKeyNum = f2.hcSoftKeyNum.value;
	var cSoftKeyTypeNum = f2.hcSoftKeyTypeNum.value;
	var cSoftKeyTypeIds = f2.hcSoftKeyTypeIds.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrSoftKeyTypeList = f2.hcSoftKeyTypeList.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrSoftKeyType = f2.hcSoftKeyType.value.split(tmpSplitSymbol);//(SplitSymbol);	
	
	var cFuncKeyTypeNum = f2.hcFuncKeyTypeNum.value; 
	var arrFuncKeyTypeIds = f2.hcFuncKeyTypeIds.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrFuncKeyTypeList = f2.hcFuncKeyTypeList.value.split(tmpSplitSymbol);//(SplitSymbol);

	for(var i=0;i<cLineKeyNum;i++)
 	{	
 		var tmp = "cLineKeyType"+i;
 		var tmpT = document.getElementById(tmp).value; 	
 		tmpT = getLineKeyTypeByID(tmpT);
 		switch(GetPrmsDisabled(tmpT))
 		{	
 			case 2:
			{	
				tmp = "cLineKeyLabel" + i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cLineKeyValue" + i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cLineKeyCode" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cLineKeyLine" + i;
				setDisabled(document.getElementById(tmp),false);
				break;
			}
			case 3:
			{	
				tmp = "cLineKeyLabel" + i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cLineKeyValue" + i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cLineKeyCode" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cLineKeyLine" + i;
				setDisabled(document.getElementById(tmp),true);
				break;
			}
			case 6: 
			{	
				tmp = "cLineKeyLabel"+i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cLineKeyValue"+i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cLineKeyCode"+i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cLineKeyLine"+i;
				setDisabled(document.getElementById(tmp),false);
				break;
			}
			case 7:
			{	
				tmp = "cLineKeyLabel"+i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cLineKeyValue"+i;		
				setDisabled(document.getElementById(tmp), true);
				tmp = "cLineKeyCode"+i;
				setDisabled(document.getElementById(tmp), true);
				tmp = "cLineKeyLine"+i;
				setDisabled(document.getElementById(tmp), true);
				break;
			}
			case 14:
			{	
				tmp ="cLineKeyLabel"+i;
				setDisabled(document.getElementById(tmp), true);
				tmp ="cLineKeyValue"+i;		
				setDisabled(document.getElementById(tmp), true);
				tmp ="cLineKeyCode"+i;
				setDisabled(document.getElementById(tmp), true);
				tmp = "cLineKeyLine"+i;
				setDisabled(document.getElementById(tmp), false);
				break;
			}
			case 15:
			{	
				tmp = "cLineKeyLabel" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cLineKeyValue" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cLineKeyCode" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cLineKeyLine" + i;
				setDisabled(document.getElementById(tmp),true);
				break;
			}
			default :
			{	
				tmp ="cLineKeyLabel"+i;
				setDisabled(document.getElementById(tmp), false);
				tmp ="cLineKeyValue"+i;		
				setDisabled(document.getElementById(tmp), false);
				tmp ="cLineKeyCode"+i;
				setDisabled(document.getElementById(tmp), false);
				tmp ="cLineKeyLine"+i;
	 			setDisabled(document.getElementById(tmp), false);
	 			break;
	 		}
		} 	
		tmp = "cLineKeyValue"+i;
		document.getElementById(tmp).maxLength = 127;		<!--将value框的长度限制为127-->
 	}
	
	for(var i = 0; i < Number(cSoftKeyNum); i++)
	{
 		var tmp = "cSoftKeyType"+i;     
 		var tmpT = document.getElementById(tmp).value;
 		tmpT = getSoftKeyTypeByID(tmpT);
 		switch(GetPrmsDisabled(tmpT))
 		{				
	 		case 2:
	 		{
	 			tmp = "cSoftKeyLabel" + i;
				setDisabled(document.getElementById(tmp),false);
	 			tmp = "cSoftKeyValue" + i;
	 			setDisabled(document.getElementById(tmp),false);
	 			tmp = "cSoftKeyCode" + i;
	 			setDisabled(document.getElementById(tmp),true);
	 			tmp = "cSoftKeyLine" + i;
	 			setDisabled(document.getElementById(tmp),false);
	 			break;
	 		}
	 		case 3:
	 		{
	 			tmp = "cSoftKeyLabel" + i;
				setDisabled(document.getElementById(tmp),false);
	 			tmp = "cSoftKeyValue" + i;
	 			setDisabled(document.getElementById(tmp),false);
	 			tmp = "cSoftKeyCode" + i;
	 			setDisabled(document.getElementById(tmp),true);
	 			tmp = "cSoftKeyLine" + i;
	 			setDisabled(document.getElementById(tmp),true);
	 			break;
	 		}
	 		case 6: 
	 		{
	 			tmp = "cSoftKeyLabel"+i;
				setDisabled(document.getElementById(tmp),false);
	 			tmp = "cSoftKeyValue"+i;
	 			setDisabled(document.getElementById(tmp),true);
	 			tmp = "cSoftKeyCode"+i;
	 			setDisabled(document.getElementById(tmp),true);
	 			tmp = "cSoftKeyLine"+i;
	 			setDisabled(document.getElementById(tmp),false);
	 			break;
	 		}
	 		case 7:
	 		{
	 			tmp = "cSoftKeyLabel"+i;
				setDisabled(document.getElementById(tmp),false);
				tmp ="cSoftKeyValue"+i;		
				setDisabled(document.getElementById(tmp), true);
				tmp ="cSoftKeyCode"+i;
				setDisabled(document.getElementById(tmp), true);
				tmp ="cSoftKeyLine"+i;
				setDisabled(document.getElementById(tmp), true);
				break;
	 		}
			case 15:
			{	
				tmp = "cSoftKeyLabel" + i;
				setDisabled(document.getElementById(tmp),true);
	 			tmp = "cSoftKeyValue" + i;
	 			setDisabled(document.getElementById(tmp),true);
	 			tmp = "cSoftKeyCode" + i;
	 			setDisabled(document.getElementById(tmp),true);
	 			tmp = "cSoftKeyLine" + i;
	 			setDisabled(document.getElementById(tmp),true);
	 			break;
			}
	 		default : 
	 		{
	 			tmp = "cSoftKeyLabel"+i;
				setDisabled(document.getElementById(tmp),false);
	 			tmp ="cSoftKeyValue"+i;		
				setDisabled(document.getElementById(tmp), false);
				tmp ="cSoftKeyCode"+i;
				setDisabled(document.getElementById(tmp), false);
				tmp ="cSoftKeyLine"+i;
				setDisabled(document.getElementById(tmp), false);
				break;
			}
		} 
		tmp = "cSoftKeyValue"+i;
		document.getElementById(tmp).maxLength = 127;		<!--将value框的长度限制为127-->
	}
	
	for(var i=0;i<NumberNum;i++)
 	{	
 		var tmp = "cNumberKeyType"+i;
 		var tmpT = document.getElementById(tmp).value; 	
 		tmpT = getNumKeyTypeByID(tmpT);
 		switch(GetPrmsDisabled(tmpT))
 		{	
 			case 2:
			{	
				tmp = "cNumberKeyLongPress" + i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cNumberKeyValue" + i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cNumberKeyCode" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cNumberKeyLine" + i;
				setDisabled(document.getElementById(tmp),false);
				break;
			}
			case 3:
			{	
				tmp = "cNumberKeyLongPress" + i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cNumberKeyValue" + i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cNumberKeyCode" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cNumberKeyLine" + i;
				setDisabled(document.getElementById(tmp),true);
				break;
			}
			case 6: 
			{	
				tmp = "cNumberKeyLongPress"+i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cNumberKeyValue"+i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cNumberKeyCode"+i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cNumberKeyLine"+i;
				setDisabled(document.getElementById(tmp),false);
				break;
			}
			case 7:
			{	
				tmp = "cNumberKeyLongPress"+i;
				setDisabled(document.getElementById(tmp),false);
				tmp = "cNumberKeyValue"+i;		
				setDisabled(document.getElementById(tmp), true);
				tmp = "cNumberKeyCode"+i;
				setDisabled(document.getElementById(tmp), true);
				tmp = "cNumberKeyLine"+i;
				setDisabled(document.getElementById(tmp), true);
				break;
			}
			case 14:
			{	
				tmp ="cNumberKeyLongPress"+i;
				setDisabled(document.getElementById(tmp), true);
				tmp ="cNumberKeyValue"+i;		
				setDisabled(document.getElementById(tmp), true);
				tmp ="cNumberKeyCode"+i;
				setDisabled(document.getElementById(tmp), true);
				tmp = "cNumberKeyLine"+i;
				setDisabled(document.getElementById(tmp), false);
				break;
			}
			case 15:
			{	
				tmp = "cNumberKeyLongPress" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cNumberKeyValue" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cNumberKeyCode" + i;
				setDisabled(document.getElementById(tmp),true);
				tmp = "cNumberKeyLine" + i;
				setDisabled(document.getElementById(tmp),true);
				break;
			}
			default :
			{	
				tmp ="cNumberKeyLongPress"+i;
				setDisabled(document.getElementById(tmp), false);
				tmp ="cNumberKeyValue"+i;		
				setDisabled(document.getElementById(tmp), false);
				tmp ="cNumberKeyCode"+i;
				setDisabled(document.getElementById(tmp), false);
				tmp ="cNumberKeyLine"+i;
	 			setDisabled(document.getElementById(tmp), false);
	 			break;
	 		}
		} 	
		tmp = "cNumberKeyValue"+i;
		document.getElementById(tmp).maxLength = 127;		<!--将value框的长度限制为127-->
 	}
	for(var i = 0; i<(cFuncKeyNum); i++)
	{
		var tmp = PKeyType[i];
		var tmpT = document.getElementById(tmp).value;
		tmpT = getFuncKeyTypeByID(tmpT);
		switch(GetPrmsDisabled(tmpT))
		{
			case 2:
			{		 					
				tmp = PKeyValue[i];
				setDisabled(document.getElementById(tmp),false);	
				tmp = PKeyCode[i];
				setDisabled(document.getElementById(tmp),true);	
				tmp = PKeyLine[i];
				setDisabled(document.getElementById(tmp),false);		 			
				break;
			}
			case 3:
			{		 					
				tmp = PKeyValue[i];
				setDisabled(document.getElementById(tmp),false);	
				tmp = PKeyCode[i];
				setDisabled(document.getElementById(tmp),true);	
				tmp = PKeyLine[i];
				setDisabled(document.getElementById(tmp),true);		 			
				break;
			}
			case 6: 
			{
				tmp = PKeyValue[i];
				setDisabled(document.getElementById(tmp),true);
				tmp = PKeyCode[i];
				setDisabled(document.getElementById(tmp),true);
				tmp = PKeyLine[i];
				setDisabled(document.getElementById(tmp),false);
				break;
			}
			case 15:
			case 7:
			{
				tmp = PKeyValue[i];  
				setDisabled(document.getElementById(tmp), true);
				tmp = PKeyCode[i];  
				setDisabled(document.getElementById(tmp), true);
				tmp = PKeyLine[i];
				setDisabled(document.getElementById(tmp), true);
				break;
			}
			default : 
			{
	 			tmp = PKeyValue[i];		
				setDisabled(document.getElementById(tmp), false);
				tmp = PKeyCode[i]; 
				setDisabled(document.getElementById(tmp), false);
				tmp = PKeyLine[i];
	 			setDisabled(document.getElementById(tmp), false);
	 			break;
			}				
		} 	
		tmp = PKeyValue[i];
		document.getElementById(tmp).maxLength = 127;		<!--将value框的长度限制为127-->			
	}
}

function optionsReset(tmpID)
{			
	var f1 = document.forms["body_form"];
	var f2 = document.forms["hiddenValForm"];	
	var cLineNum = f2.hcLineNum.value;	
	var cLineKeyNum = f2.hcLineKeyNum.value;	
	var arrLineKeyType = f2.hcLineKeyType.value.split(tmpSplitSymbol); //(SplitSymbol);
	var arrLineKeyLine = f2.hcLineKeyLine.value.split(tmpSplitSymbol); //(SplitSymbol);	
	var arrLineKeyTypeList = f2.hcLineKeyTypeList.value.split(tmpSplitSymbol);//(SplitSymbol);

	var FunctionKeyNum = f2.hcFunctionKeyNum.value;	
	var arrFunctionKeyType = f2.hcFunctionKeyType.value.split(tmpSplitSymbol); //(SplitSymbol);
	var arrFunctionKeyLine = f2.hcFunctionKeyLine.value.split(tmpSplitSymbol); //(SplitSymbol);	
	var arrFunctionKeyTypeList = f2.hcLineKeyTypeList.value.split(tmpSplitSymbol);//(SplitSymbol);
	
	for(var i = 0;i < cLineKeyNum; i++)
	{
		var tmpLine = i+1; if(i>=cLineNum) {tmpLine=1;}
		var tmpTypeID = "cLineKeyType"+i;
		var tmpLineID = "cLineKeyLine"+i;
 		var tmpType = document.getElementById(tmpID).value;	
 		if(tmpID == tmpTypeID)
 		{
 			var tmpLineType = getLineKeyTypeByID(tmpType);
			switch(tmpLineType)
			{	
				case "BLFList":
				case "Account":
				case "BLF":
				case "ACD":
				{			
					for(var k=0; k <= cLineNum; k++)
					{ document.getElementById(tmpLineID).options.remove(0);}
					for(var j = 1; j <= cLineNum; j++)
					{ 
						var tmpLine = Line + " "+ (j);
					  document.getElementById(tmpLineID).options.add(new Option(tmpLine, j));
					}
					if(!isValueValid(arrLineKeyLine[i], cLineNum))	document.getElementById(tmpLineID).value = tmpLine;
					else  document.getElementById(tmpLineID).value = arrLineKeyLine[i];
					break;	
				}
				default: 
				{		
					for(var k=0; k <= cLineNum; k++) { document.getElementById(tmpLineID).options.remove(0); }
				  for(var j = 0; j <= cLineNum; j++)
				  {	
				  	var tmpLine = Line + " "+ (j);
						if(0==j){tmpLine=Auto;}
						document.getElementById(tmpLineID).options.add(new Option(tmpLine, j));
				  }
					if(isValueValid(arrLineKeyLine[i], cLineNum)||(0 == arrLineKeyLine[i]&&""!=arrLineKeyLine[i]))
								document.getElementById(tmpLineID).value = arrLineKeyLine[i];
					else	document.getElementById(tmpLineID).value = tmpLine;
					break;
				}
			}
		}
	}
	//function key
	for(var i = 0;i < FunctionKeyNum; i++)
	{
		var tmpLine = i+1; if(i>=FunctionKeyNum) {tmpLine=1;}
		var tmpFunctionTypeID = "cFunctionKeyType"+i;
		var tmpFunctionID = "cFunctionKeyLine"+i;
		
		var tmpType = document.getElementById(tmpID).value;	
		if(tmpID == tmpFunctionTypeID)
 		{
 			var tmpLineType = getLineKeyTypeByID(tmpType);
			switch(tmpLineType)
			{	
				case "BLFList":
				case "Account":
				case "BLF":
				case "ACD":
				{			
					for(var k=0; k <= cLineNum; k++)
					{ document.getElementById(tmpFunctionID).options.remove(0);}
					for(var j = 1; j <= cLineNum; j++)
					{ 
						var tmpLine = Line + " "+ (j);
					  document.getElementById(tmpFunctionID).options.add(new Option(tmpLine, j));
					}
					if(!isValueValid(arrFunctionKeyLine[i], cLineNum))	document.getElementById(tmpFunctionID).value = tmpLine;
					else  document.getElementById(tmpFunctionID).value = arrFunctionKeyLine[i];
					break;	
				}
				default: 
				{
					for(var k=0; k <= cLineNum; k++) { document.getElementById(tmpFunctionID).options.remove(0); }
				  for(var j = 0; j <= cLineNum; j++)
				  {
				  	var tmpLine = Line + " "+ (j);
						if(0==j){tmpLine=Auto;}
						document.getElementById(tmpFunctionID).options.add(new Option(tmpLine, j));
				  }
					if(isValueValid(arrFunctionKeyLine[i], cLineNum)||(0 == arrFunctionKeyLine[i]&&""!=arrFunctionKeyLine[i]))
								document.getElementById(tmpFunctionID).value = arrFunctionKeyLine[i];
					else	document.getElementById(tmpFunctionID).value = tmpLine;
					break;
				}
			}
		}
	}
}

function prmsReset(tmpID)
{	
	var f1 = document.forms["body_form"]
	var f2 = document.forms["hiddenValForm"];
	
	var cLineNum = f2.hcLineNum.value;
	
 	var cLineKeyNum = f2.hcLineKeyNum.value;
	var arrLineKeyType = f2.hcLineKeyType.value.split(tmpSplitSymbol);//(SplitSymbol); 
	var arrLineKeyLabel = f2.hcLineKeyLabel.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrLineKeyValue = f2.hcLineKeyValue.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrLineKeyCode = f2.hcLineKeyCode.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrLineKeyLine = f2.hcLineKeyLine.value.split(tmpSplitSymbol);//(SplitSymbol);

	var cSoftKeyNum = f2.hcSoftKeyNum.value;
	var arrSoftKeyType = f2.hcSoftKeyType.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrSoftKeyLabel = f2.hcSoftKeyLabel.value.split(tmpSplitSymbol);//(SplitSymbol);
	//var arrSoftKeyValue = f2.hcSoftKeyValue.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrSoftKeyCode = f2.hcSoftKeyCode.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrSoftKeyLine =  f2.hcSoftKeyLine.value.split(tmpSplitSymbol);//(SplitSymbol);
	
	var cFunctionKeyNum = f2.hcFunctionKeyNum.value;
	var arrFunctionKeyType = f2.hcFunctionKeyType.value.split(tmpSplitSymbol);//(SplitSymbol); 
	var arrFunctionKeyLabel = f2.hcFunctionKeyLabel.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrFunctionKeyValue = f2.hcFunctionKeyValue.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrFunctionKeyCode = f2.hcFunctionKeyCode.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrFunctionKeyLine = f2.hcFunctionKeyLine.value.split(tmpSplitSymbol);//(SplitSymbol);
	
	//数字键
	var arrNumberKeyType = f2.hcNumberKeyType.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrNumberKeyLongPress = f2.hcNumberKeyLongPress.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrNumberKeyValue = f2.hcNumberKeyValue.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrNumberKeyCode = f2.hcNumberKeyCode.value.split(tmpSplitSymbol);//(SplitSymbol);
	var arrNumberKeyLine = f2.hcNumberKeyLine.value.split(tmpSplitSymbol);//(SplitSymbol);
	
	for(var i = 0; i < cLineKeyNum; i++)
	{
		var tmpLine = i+1; if(i>=cLineNum) {tmpLine=1;}
		curTypeID = "cLineKeyType"+i;
		curType = document.getElementById(curTypeID).value;
		curLabelID = "cLineKeyLabel"+i;
		curValueID = "cLineKeyValue"+i;
		curCodeID = "cLineKeyCode"+i;		
		curLineID = "cLineKeyLine" + i;
		if(curTypeID == tmpID && curType!= arrLineKeyType[i])
		{	
			document.getElementById(curLabelID).value = "";
			if("Book" != getLineKeyTypeByID(curType))
			{
				document.getElementById(curValueID).value= "";
			}
			document.getElementById(curCodeID).value= "";
			document.getElementById(curLineID).value =  tmpLine;
		}
		if(curTypeID == tmpID && curType == arrLineKeyType[i])
		{	
			document.getElementById(curLabelID).value = arrLineKeyLabel[i];
			document.getElementById(curValueID).value= ShowDecode(arrLineKeyValue[i]);
			document.getElementById(curCodeID).value= arrLineKeyCode[i];
			document.getElementById(curLineID).value= arrLineKeyLine[i];				
		}
	}
	
	for(var i = 0; i < cSoftKeyNum; i++)
	{
		curTypeID = "cSoftKeyType"+i;
		curLabelID = "cSoftKeyLabel"+i;
		curType = document.getElementById(curTypeID).value;
		curValueID = "cSoftKeyValue"+i;
		curCodeID = "cSoftKeyCode"+i;
		curLineID = "cSoftKeyLine" + i;
		if(curTypeID == tmpID && curType!= arrSoftKeyType[i])
		{	
			document.getElementById(curLabelID).value = "";
			if("Book" != getSoftKeyTypeByID(curType))
			{
				document.getElementById(curValueID).value= "";
			}
			document.getElementById(curCodeID).value= "";
			document.getElementById(curLineID).value= 0;
		}
		if(curTypeID == tmpID && curType == arrSoftKeyType[i])
		{	
			document.getElementById(curLabelID).value = arrSoftKeyLabel[i];
			document.getElementById(curValueID).value= ShowDecode(arrSoftKeyValue[i]);
			document.getElementById(curCodeID).value= arrSoftKeyCode[i];		
			document.getElementById(curLineID).value= arrSoftKeyLine[i];		
		}	
	}

	//number key
	for(var i = 0; i < NumberNum; i++)
	{
		var tmpLine = i+1; if(i>=cLineNum) {tmpLine=1;}
		curTypeID = "cNumberKeyType"+i;
		curType = document.getElementById(curTypeID).value;
		curLabelID = "cNumberKeyLongPress"+i;
		curValueID = "cNumberKeyValue"+i;
		curCodeID = "cNumberKeyCode"+i;		
		curLineID = "cNumberKeyLine" + i;
		if(curTypeID == tmpID && curType!= arrNumberKeyType[i])
		{	
			document.getElementById(curLabelID).value = 0;
			if("Book" != getNumKeyTypeByID(curType))
			{
				document.getElementById(curValueID).value= "";
			}
			document.getElementById(curCodeID).value= "";
			document.getElementById(curLineID).value =  tmpLine;
		}
		if(curTypeID == tmpID && curType == arrNumberKeyType[i])
		{	
			document.getElementById(curLabelID).value = arrNumberKeyLongPress[i];
			document.getElementById(curValueID).value= ShowDecode(arrNumKeyValue[i]);
			document.getElementById(curCodeID).value= arrNumberKeyCode[i];
			document.getElementById(curLineID).value= arrNumberKeyLine[i];				
		}
	}
	
	for(var i = 4; i < cFuncKeyNum; i++)
	{	
		curTypeID = PKeyType[i];    
		hcurTypeID = "h"+ PKeyType[i]; 
		curType = document.getElementById(curTypeID).value;
		curValueID = PKeyValue[i]; 
		hcurValueID = "h"+PKeyValue[i]; 
		curCodeID = PKeyCode[i]; 
		hcurCodeID = "h"+PKeyCode[i]; 
		curLineID = PKeyLine[i]; 
		hcurLineID = "h" + PKeyLine[i];
		
		if(curTypeID == tmpID && curType!= document.getElementById(hcurTypeID).value)
		{	
			if("Book" != getLineKeyTypeByID(curType))
			{
				document.getElementById(curValueID).value= "";
			}
			document.getElementById(curCodeID).value= "";
			document.getElementById(curLineID).value= 0;
		}
		if(curTypeID == tmpID&&curType == document.getElementById(hcurTypeID).value)
		{	
			document.getElementById(curValueID).value= ShowDecode(document.getElementById(hcurValueID).value);	
			document.getElementById(curCodeID).value= document.getElementById(hcurCodeID).value;	
			document.getElementById(curLineID).value= document.getElementById(hcurLineID).value;			
		}		
	}

	if(1 != f2.hcCurFunctionKeyPageId.value)
	{
		for(var i = 0; i < cFunctionKeyNum; i++)
		{
			var tmpLine = i+1; if(i>=cLineNum) {tmpLine=1;}
			curTypeID = "cFunctionKeyType"+i;
			curType = document.getElementById(curTypeID).value;
			curLabelID = "cFunctionKeyLabel"+i;
			curValueID = "cFunctionKeyValue"+i;
			curCodeID = "cFunctionKeyCode"+i;		
			curLineID = "cFunctionKeyLine" + i;
			if(curTypeID == tmpID && curType!= arrFunctionKeyType[i])
			{	
				document.getElementById(curLabelID).value = "";
				if("Book" != getLineKeyTypeByID(curType))
				{
					document.getElementById(curValueID).value= "";
				}
				document.getElementById(curCodeID).value= "";
				document.getElementById(curLineID).value =  tmpLine;
			}
			if(curTypeID == tmpID && curType == arrFunctionKeyType[i])
			{	
				document.getElementById(curLabelID).value = arrFunctionKeyLabel[i];
				document.getElementById(curValueID).value= ShowDecode(arrFunctionKeyValue[i]);
				document.getElementById(curCodeID).value= arrFunctionKeyCode[i];
				document.getElementById(curLineID).value= arrFunctionKeyLine[i];				
			}
		}
	}
}

