function DoChangeLANType()
{
	var f1 = document.forms["body_form"];
	// on the page 0:DHCP 1:STATIC IP 2:PPPOE
	if(f1.cLANPortType[0].checked)
	{
		SetStaticIPDisabled();
		SetPPPOEDisabled();
	}
	else if(f1.cLANPortType[1].checked)
	{
		SetStaticIPEnabled();
		SetPPPOEDisabled();
	}
	else
	{
		SetStaticIPDisabled();
		SetPPPOEEnabled();
	}
}

function DoChangePCType()
{
	var f1 = document.forms["body_form"];
	// on the page for PC Port 0:Bridge 1:Router
	if(f1.cPCPortType[0].checked)
	{
		SetRouterDisabled();
	}
	else
	{
		SetRouterEnabled();
	}
	
}

function SetStaticIPDisabled()
{
	var f1 = document.forms["body_form"];
	f1.cLANIPAddr.disabled = true;
	f1.cLANSubnetMask.disabled = true;
	f1.cDefaultGateWay.disabled = true;
	f1.cPrimaryDNS.disabled = true;
	f1.cSecondryDNS.disabled = true;
	//f1.cLANPortConnection.disabled = true;
}

function SetStaticIPEnabled()
{
	var f1 = document.forms["body_form"];
	f1.cLANIPAddr.disabled = false;
	f1.cLANSubnetMask.disabled = false;
	f1.cDefaultGateWay.disabled = false;
	f1.cPrimaryDNS.disabled = false;
	f1.cSecondryDNS.disabled = false;
	//f1.cLANPortConnection.disabled = false;
}

function SetPPPOEDisabled()
{
	var f1 = document.forms["body_form"];
	f1.cPPPOEUserName.disabled = true;
	f1.cPPPOEUserPwd.disabled = true;
}

function SetPPPOEEnabled()
{
	var f1 = document.forms["body_form"];
	f1.cPPPOEUserName.disabled = false;
	f1.cPPPOEUserPwd.disabled = false;
}

function SetRouterDisabled()
{
	var f1 = document.forms["body_form"];
	f1.cRouterIPAddr.disabled = true;
	f1.cRouterSubnetMask.disabled = true;
	f1.cStartIPAddr.disabled = true;
	f1.cEndIPAddr.disabled = true;
	f1.cDHCPServerStatus.disabled = true;
}

function SetRouterEnabled()
{
	var f1 = document.forms["body_form"];
	f1.cRouterIPAddr.disabled = false;
	f1.cRouterSubnetMask.disabled = false;
	f1.cStartIPAddr.disabled = false;
	f1.cEndIPAddr.disabled = false;
	f1.cDHCPServerStatus.disabled = false;
}