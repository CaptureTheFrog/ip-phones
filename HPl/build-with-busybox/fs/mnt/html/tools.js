/* **********************************************************************
Site:		snom telephone configuration
Company:	snom technology AG www.snom.de (info@snom.de)
Filename:	tools.js
Description:	input validation
Author:		© 2003 sebastian.becker@berlin.de (Sebastian Becker)
********************************************************************** */


/* **********************************************************************
 check if key input is all, alphanumeric, numbers, none
********************************************************************** */

function keyCheck(myfield,e,f)
{
var keycode;
if(window.event) {
keycode = window.event.keyCode;
}
else if(e) {
keycode = e.which;
}
else {
return true;
}

// uncomment to show keycode in browser status line
// window.status = keycode;

var cc=0; // correct code
if(f=="all")cc=1;

if(keycode==0)cc=1; // null
if(keycode==8)cc=1; // backspace
if(keycode==13)cc=1; // carriage return

if((f!="alphanumeric")&&(f!="none")) {
if((keycode>47)&&(keycode<58))cc=1; // numerical values
if(keycode==46)cc=1; // numerical values dot
} 

if((f!="numbers")&&(f!="none")) {
if((keycode>32)&&(keycode<48))cc=1; // URL letters1
if((keycode>47)&&(keycode<58))cc=1; // numerical values
if((keycode>57)&&(keycode<65))cc=1; // URL letters2
if((keycode>64)&&(keycode<91))cc=1; // capital letters
if((keycode>96)&&(keycode<123))cc=1; // small letters
if(keycode==95)cc=1; // _
//if((keycode>191)&&(keycode<256))cc=1; // special characters
}

if(cc==1) {
return true;
}
else {
// uncomment to show message
// alert("In this field the value you entered is not allowed.");
return false;
}

}
