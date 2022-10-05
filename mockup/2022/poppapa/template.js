<!--NO_REFRESH-->
<script type="text/javascript">
    var div = window.parent.document.getElementById("parallax_div");
    div.style.cssText = "width:100%!important;";
    var divparent = div.parentElement;
    divparent.style.cssText = "width:100%!important;";
    var elemDiv = document.createElement('div');
    var elemScript = document.createElement('script');
    var elemScript2 = document.createElement('script');
    var elemScript3 = document.createElement('script');

    var sH = "[%Height%]" ;
    var sW = div.offsetWidth;
    var hU = [%Height%] + 40;
    var trackerUrl = '';
    var trackerIframe = '';
    var typeFile = "[%TypeFile%]";
    var file;
              
    var clickoverlay = "yes";
    if(typeFile == 'html'){
      file="[%IframeURL%]";
    var content = '<iframe src="'+file+'" frameborder="0" scrolling="no" style="width:320px;height:'+sH+'px;"></iframe>';
    } else {
      file="[%ImgFile%]";
    var content = '<img src="'+file+'" width="320" height="480"  style="width:100%;height:auto; max-width: 320px" />';
    }
    if(trackerUrl) {
    var trackerIframe = '<iframe src="[%Tracker%]" height="1" width="1" frameborder="0" style="width:1px !important;height 1px !important;position:absolute;top:0px;right:0px;border:0px"></iframe>';
    }
    if(hU == "Full Height") {
         hU = sH;
    }

    content = "<div class='para_inside' style='width: "+sW+"px;height: 100%;position: absolute;top: 0;left: 0;clip: rect(auto,auto,auto,auto);margin:0px;-webkit-clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;clip-path: polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important; background-color: black;'><a style='cursor:pointer; z-index:999' onclick='hide()'><div style='background-color:#9c80d7; position:absolute; right:5px; top:5px; color:white;text-align:center;padding:3px 5px; z-index:999; font-size: 11px; font-weight: bold; letter-spacing .5px;'>TUTUP</div></a><div style='bottom:0;width:100%; z-index:999; position:absolute; color:white; background-color:#9c80d7; text-align:center; font-size: 11px; padding: 2px; font-weight: bold; letter-spacing: .6px;'>SCROLL UNTUK MELANJUTKAN MEMBACA</div><div style='margin:0px;width:"+sW+"px !important;position:fixed!important;top:10px!important;z-index:0!important;pointer-events:none!important;height:"+sH+"px;-moz-transform: translateZ(0); -webkit-transform: translateZ(0);-ms-transform: translateZ(0);-o-transform: translateZ(0);transform: translateZ(0);background:white'><div style='margin:0px;moz-transform:translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;border:none;position:absolute;left:50%;top:50%; text-align: center; background-color: black;'>"+content+"</div></div></div>";

    elemDiv.style.cssText = "display:block;width:auto!important;position:relative!important;left: 0px!important;top:0px!important;z-index:9999!important;transition:height 0s ease 0s!important;overflow:hidden!important;border:0px solid #ddd!important;padding: 0px !important;margin:0px 0px 0px!important;height:"+hU+"px!important;";
    if(clickoverlay === 'yes') {
    elemDiv.innerHTML = "<a href='%%CLICK_URL_UNESC%%[%ClickthroughURL%]' target='_blank' style='display:block;width:"+sW+"px;height:"+hU+"px;'>"+content+"</a>"+trackerIframe ;
    }
    else {
    elemDiv.innerHTML = content ;
    }
  
    elemScript.innerHTML = 'function hide(){document.getElementById("parallax_div").style.height="0px";$(".para_inside").hide();$(".parallax_div").slideUp(300); close=1;document.getElementById("poppapa-header").style.position="fixed"; document.getElementById("poppapa-header").style.top="0px";}';
    
  elemScript2.innerHTML = 'var close=0; document.getElementById("poppapa-header").style.position="absolute";document.getElementById("poppapa-header").style.top="520px"; $(window).scroll(function() {if(close==0){if ($(window).scrollTop() > 520) { document.getElementById("poppapa-header").style.position="fixed"; document.getElementById("poppapa-header").style.top="0px";} else {document.getElementById("poppapa-header").style.position="absolute"; document.getElementById("poppapa-header").style.top="520px";}}});';
  
    div.appendChild(elemScript2);
    div.appendChild(elemScript);
    div.appendChild(elemDiv);
</script>