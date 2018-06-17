;      var is_safari=false;
           
           if((navigator.userAgent.toLowerCase().indexOf('safari/')>-1)&&(navigator.userAgent.toLowerCase().indexOf('chrome')==-1))
               is_safari=true;
           var ua=navigator.userAgent.toLowerCase();
           var isAndroid=ua.indexOf('android')>-1;
           function isKindle()
           {
               if(/\bSilk\b/.test(navigator.userAgent))return true;else return false;
           }
           function isBB()
           {return navigator.userAgent.match(/BlackBerry/i);
           }
        function isIOS()
           {
           return(navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i));
           }
           
            function droid_player_live_ItsNewBroadcast()
           {
                document.getElementById("player_live_ItsNewBroadcast").innerHTML="<video id='droid_player_live_ItsNewBroadcast' controls width='100%' height='100%' poster='http://j92u6ynw.blue.onyxservers.com/onyxpanel/images/live_broadcast.jpg' autostart='true' preload='none'><source src='http://j92u6ynw.blue.onyxservers.com/hls-live/livepkgr/_definst_/liveevent/ItsNewBroadcast.m3u8' type='application/x-mpegURL'></video>";
           }
            function droid_lightbox()
           {
               $('#contentIframe').hide();(function($){$(function(){$('#popup-live_ItsNewBroadcast-button').bind('click',function(e){e.preventDefault();$('#popup_live_ItsNewBroadcast').bPopup({modalClose:false,opacity:0.8,modalColor:'#555555'});});});})(jQuery);
           }
            function loadScript_live_ItsNewBroadcast(url,callback)
           {

                var re=/(?:\.([^.]+))?$/;
                var ext=re.exec(url)[1];
                var safari_css=false;
                if(ext=='css')
                {
                    if(is_safari){safari_css=true;}
                    else
                    {
                        var script=document.createElement('link');  script.setAttribute('rel','stylesheet'); script.setAttribute('type','text/css');
                        script.setAttribute('href',url);}
                }
               else{
                   var script=document.createElement('script');script.type='text/javascript';script.src=url;
               }
            if(!safari_css)
            {if(script.readyState){script.onreadystatechange=function(){if(script.readyState=='loaded'||script.readyState=='complete'){script.onreadystatechange=null;callback();}};}else{script.onload=function(){callback();};}
            document.getElementsByTagName('head')[0].appendChild(script);}
               else{callback();}
           }

           
           
            function header_live_ItsNewBroadcast_1()
           {
                loadScript_live_ItsNewBroadcast('http://j92u6ynw.blue.onyxservers.com/onyxpanel/player/player/player-3.2.12.min.js',header_live_ItsNewBroadcast_2)
           }
            function header_live_ItsNewBroadcast_2()
           {
                loadScript_live_ItsNewBroadcast('http://j92u6ynw.blue.onyxservers.com/onyxpanel/player/player/player.ipad-3.2.12.min.js',header_live_ItsNewBroadcast_3)
           }
            function header_live_ItsNewBroadcast_3(){
                
                if(typeof jQuery=='undefined')
            {
                loadScript_live_ItsNewBroadcast('http://code.jquery.com/jquery-latest.min.js',header_live_ItsNewBroadcast_4)}
                
                else
                
                {
                    header_live_ItsNewBroadcast_4();
                }
            }
            function header_live_ItsNewBroadcast_4()
           {
                loadScript_live_ItsNewBroadcast('http://j92u6ynw.blue.onyxservers.com/onyxpanel/player/bpopup.js',header_live_ItsNewBroadcast_5)
           }
             
           
           
           
           function header_live_ItsNewBroadcast_5()
           {load_player_live_ItsNewBroadcast();}
           
function load_player_live_ItsNewBroadcast()
           {
    (
        function($)
        {
            $('#contentIframe').hide();
            $(function()
              {
                $('#popup-live_ItsNewBroadcast-button').bind('click',function(e){
                    e.preventDefault();
                    $('#popup_live_ItsNewBroadcast').bPopup({onClose:function(){$f('player_live_ItsNewBroadcast').stop();$f('player_live_ItsNewBroadcast').unload();},modalClose:false,opacity:0.8,modalColor:'#555555'});}
                                                            );});})(jQuery);
               
               $param2_live_ItsNewBroadcast={
                   src:"http://j92u6ynw.blue.onyxservers.com/onyxpanel/player/player/player-3.2.16.swf",wmode:"window"};
               $param3_live_ItsNewBroadcast={playlist:[{url:"http://j92u6ynw.blue.onyxservers.com/onyxpanel/images/live_broadcast.jpg",scaling:"scale"},{url:"ItsNewBroadcast",autoPlay:true,eventCategory:"(video) ItsNewBroadcast",ipadUrl:"http://j92u6ynw.blue.onyxservers.com/hls-live/livepkgr/_definst_/liveevent/ItsNewBroadcast.m3u8"}],canvas:{backgroundGradient:"none"},clip:{autoPlay:true,connectionProvider:"cluster",eventCategory:"(broadcast) ItsNewBroadcast",live:true,provider:"rtmp"},plugins:{cluster:{connectCount:1,connectTimeout:4000,failureExpiry:0,hosts:['rtmp://j92u6ynw.mdn.onyxservers.com/livepkgr/','rtmp://j92u6ynw.blue-rtmp.onyxservers.com/livepkgr','rtmpt://j92u6ynw.mdn.onyxservers.com/livepkgr/'],url:"http://j92u6ynw.blue.onyxservers.com/onyxpanel/player/player/player.cluster-3.2.9.swf"},content:{backgroundColor:"#2d313a",backgroundGradient:"none",border:1,bottom:34,closeButton:true,height:30,html:"OnyxServers live streaming trial account. Limited to 10 concurrent viewers.",url:"http://j92u6ynw.blue.onyxservers.com/onyxpanel/player/player/player.content-3.2.8.swf"},controls:{tooltips:{buttons:true,menu:"Change quality"},backgroundColor:"#4F5152",backgroundGradient:"none",playlist:false,scrubber:false,url:"http://j92u6ynw.blue.onyxservers.com/onyxpanel/player/player/player.controls-3.2.15.swf"},rtmp:{
                   netConnectionUrl:"rtmp://j92u6ynw.mdn.onyxservers.com/livepkgr/",url:"http://j92u6ynw.blue.onyxservers.com/onyxpanel/player/player/player.rtmp-3.2.12.swf"}}}
                    $f('player_live_ItsNewBroadcast',$param2_live_ItsNewBroadcast,$param3_live_ItsNewBroadcast);$f('player_live_ItsNewBroadcast').load();
           }
           
           
if((isIOS())||(isAndroid)||(isBB())||(isKindle()))
    droid_player_live_ItsNewBroadcast();
           
           else header_live_ItsNewBroadcast_1();;