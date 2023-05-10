var codecTableChanged = false;
function ItemLeft()
{
	var sleft = document.forms[0].cDisableCodecs;
	var sright = document.forms[0].cEnableCodecs;
	if(-1 == CheckCurSelected(sright))
	{
		alert(ValueMustSelectedWarning);
		return;
	}
	while(-1 != copyOne2Ano(sright, sleft))
	{
		codecTableChanged = true;
	}

}

function ItemRight()
{
	var sleft = document.forms[0].cDisableCodecs;
	var sright = document.forms[0].cEnableCodecs;
	if(-1 == CheckCurSelected(sleft))
	{
		alert(ValueMustSelectedWarning);
		return;
	}	
	while(-1 != copyOne2Ano(sleft, sright));
	{
		codecTableChanged = true;
	}
}

function CheckCurSelected(l1)
{
	var curSrcIndex = l1.selectedIndex;
	if(curSrcIndex == -1)
	{
		return -1;
	}
	return 0;
}

function copyOne2Ano(l1, l2)
{
  var lLeft = l1;
	var lRight = l2;
	var curSrcIndex = lLeft.selectedIndex;   
	var curDstIndex = lRight.selectedIndex;
	if(curSrcIndex == -1)
	{
		return -1;
	}
	
	AddItemToSelect(lRight, lLeft.options[curSrcIndex].text, lLeft.options[curSrcIndex].value);   
	var itemCount = lRight.length;
	
	if(curDstIndex == -1)
	{
		curDstIndex = 0;		
	}
	for(var i = itemCount-1; i > curDstIndex ; i--)
	{
		lRight.options[i].text = lRight.options[i-1].text;
		lRight.options[i].value = lRight.options[i-1].value;
	}

	lRight.options[curDstIndex].text = lLeft.options[curSrcIndex].text;
	lRight.options[curDstIndex].value = lLeft.options[curSrcIndex].value;
	lRight.selectedIndex = curDstIndex; 
	lLeft.remove(curSrcIndex); //删除左边
}

function SelectIsExitItem(objSelect,objItemValue)   
{   
    var isExit = false;   
    for(var i=0;i<objSelect.options.length;i++)   
    {   
        if(objSelect.options[i].value == objItemValue)   
        {   
            isExit = true;   
            break;
        }   
    }        
    return isExit;   
}   
   
function AddItemToSelect(objSelect,objItemText,objItemValue)   
{   
    if(SelectIsExitItem(objSelect,objItemValue))   
    {   
        alert(ValueExistWarning); 
    }   
    else   
    {   
		if(objItemText == "")
			return;
		
        var varItem = new Option(objItemText,objItemValue);   
        objSelect.options.add(varItem);   
    }      
}

function ItemUp()
{
	var obj = document.forms[0].cEnableCodecs;
	var curSelectedIdx = obj.selectedIndex;   
	if((curSelectedIdx == 0) || (curSelectedIdx == -1))
		return;
	codecTableChanged = true;
	var tmpOption = new Option(obj.options[curSelectedIdx].text, obj.options[curSelectedIdx].value);   
	obj.options[curSelectedIdx].text = obj.options[curSelectedIdx-1].text;
	obj.options[curSelectedIdx].value = obj.options[curSelectedIdx-1].value;
	obj.options[curSelectedIdx-1].value = tmpOption.value;
	obj.options[curSelectedIdx-1].text = tmpOption.text;
	obj.selectedIndex = curSelectedIdx - 1;
}

function ItemDown()
{
	var obj = document.forms[0].cEnableCodecs;
	var curSelectedIdx = obj.selectedIndex;  
	if( (curSelectedIdx >= (obj.length - 1) ) || (curSelectedIdx == -1))
		return;
	codecTableChanged = true;
	var tmpOption = new Option(obj.options[curSelectedIdx].text, obj.options[curSelectedIdx].value);   
	obj.options[curSelectedIdx].text = obj.options[curSelectedIdx+1].text;
	obj.options[curSelectedIdx].value = obj.options[curSelectedIdx+1].value;
	obj.options[curSelectedIdx+1].value = tmpOption.value;
	obj.options[curSelectedIdx+1].text = tmpOption.text;
	obj.selectedIndex = curSelectedIdx + 1; 

}