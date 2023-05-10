/* **********************************************************************
Site:		snom telephone configuration
Company:	snom technology AG www.snom.de (info@snom.de)
Filename:	forms.js
Description:	form validation and highlight scripts
Author:		© 2002 sebastian.becker@berlin.de (Sebastian Becker)
********************************************************************** */


/* **********************************************************************
highlight form elements on focus
********************************************************************** */

if(!d) var d = document;

function formHilite(ID,event)
{

var bg_on = "#FFFFFF";
var bg_off = "#EFEFEF";

// alert(event);
// alert(ID);

// DOM
if(d.getElementById)
{
if (event=="focus")
{d.getElementById(ID).style.backgroundColor=bg_on;return true;}
else
{d.getElementById(ID).style.backgroundColor=bg_off;return true;}
}

// IE4
else if (d.all)
{	
if (event=="focus")
{eval("d.all." + ID + ".style.backgroundColor=bg_on");return true;}
else
{eval("d.all." + ID + ".style.backgroundColor=bg_off");return true;}
}

}