// Common Routines

// Global vars
var need_refresh = false;
function set_refresh(val) {
  need_refresh = val;
}

// Error Messages
var msg_save_warning = 'There are unsaved changes on this page.\n\nTo discard your changes press OK.\nTo save your changes, click Cancel, and save the settings on the web page.';

// setup ns key events
var last_key_code = 0;
if(!document.all) {
  document.captureEvents(Event.KEYDOWN)
  document.onkeydown=set_key_code;
}

function set_key_code(event) {
  last_key_code = parseInt(event.which);
}


function logout() {
  if(need_refresh) {
    var exit = confirm(msg_save_warning);
    if(!exit) {
    return;
  }
}

var theForm = MM_find_obj('logoutForm');
  if(theForm) {
    theForm.submit();
  }  
}

function start_help(anchor) {
  var url = anchor.substr(0, 4) + 'help.htm';
  if(anchor.length) {
    url = url + '#' + anchor;
  } 
  window.open(url,"helpWnd","height=400,width=610,left=250,screenX=250,top=200,screenY=200,resizable,scrollbars");
}

function go(loc) {
  var url = loc + '.htm';
  if(need_refresh) {
    var exit = confirm(msg_save_warning);
    if(!exit) {
      return;
    }
  }

  if(session != "") {
    url = url + ';session=' + session;
  }
  
  document.location.href = url;
}

// DHTML stuff
function MM_find_obj(n, d) {
  var p,i,r;
  if(!d) d=document;
  if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document;
    n=n.substring(0,p);
  }
  if(!(r=d[n])&&d.all) r=d.all[n]; 
  for(i=0;!r&&i<d.forms.length;i++) r=d.forms[i][n];
  for(i=0;!r&&d.layers&&i<d.layers.length;i++) 
    r=MM_find_obj(n,d.layers[i].document);
  if(!r && document.getElementById)
    r=document.getElementById(n); 
  return r;
}

function MM_open_browser_window(url,name,features) {
  window.open(url,name,features);
}

function MM_reload_page(init) {
  if (init==true) with (navigator) {
    if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
      document.MM_pgW=innerWidth;
      document.MM_pgH=innerHeight;
      onresize=MM_reload_page;
    }
  }
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH)
    location.reload();
}
MM_reload_page(true);

function MM_swap_img_restore() {
  var i,x,a=document.MM_sr;
  for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preload_images() {
  var d=document;
  if(d.images){
    if(!d.MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=MM_preload_images.arguments;
  for(i=0;i<a.length;i++)
    if (a[i].indexOf("#")!=0){
      d.MM_p[j]=new Image;
      d.MM_p[j++].src=a[i];
    }
  }
}

function MM_swap_image() {
  var i,j=0,x,a=MM_swap_image.arguments;
  document.MM_sr=new Array;
  for(i=0;i<(a.length-2);i+=3)
    if ((x=MM_find_obj(a[i]))!=null) {
      document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];
    }
}

function MM_jump_menu(targer,sel_obj,restore) {
  eval(target+".location='"+sel_obj.options[sel_obj.selectedIndex].value+"'");
  if (restore) sel_obj.selectedIndex=0;
}

function MM_show_hide_layers() {
  var i,p,v,obj,args=MM_show_hide_layers.arguments;
  for (i=0; i<(args.length-2); i+=3)
    if ((obj=MM_find_obj(args[i]))!=null) {
      v=args[i+2];
      if (obj.style) {
        obj=obj.style;
        v=(v=='show')?'visible':(v='hide')?'hidden':v;
      }
      obj.visibility=v;
    }
}

function MM_change_prop(name,x,property,value) {
  var obj = MM_find_obj(name);
  if (obj && (property.indexOf("style.")==-1 || obj.style)) eval("obj."+property+"='"+value+"'");
}
