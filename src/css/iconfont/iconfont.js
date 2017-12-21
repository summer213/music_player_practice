(function(window){var svgSprite='<svg><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M754.375399 936.139953 633.187444 936.139953c-33.46246 0-60.594489-27.130917-60.594489-60.592007L572.592954 148.45103c0-33.461089 27.132029-60.590983 60.594489-60.590983l121.187955 0c33.46246 0 60.593466 27.129894 60.593466 60.590983l0 727.096916C814.968865 909.010059 787.837859 936.139953 754.375399 936.139953zM754.375399 178.747034c0-16.731056-13.550153-30.29498-30.296221-30.29498l-60.594489 0c-16.746069 0-30.296221 13.564947-30.296221 30.29498l0 666.505933c0 16.745383 13.550153 30.29498 30.296221 30.29498l60.594489 0c16.746069 0 30.296221-13.549597 30.296221-30.29498L754.375399 178.747034zM390.812556 936.139953 269.624601 936.139953c-33.46246 0-60.593466-27.130917-60.593466-60.592007L209.031135 148.45103c0-33.461089 27.131006-60.590983 60.593466-60.590983l121.187955 0c33.46246 0 60.593466 27.129894 60.593466 60.590983l0 727.096916C451.406022 909.010059 424.275017 936.139953 390.812556 936.139953zM390.812556 178.747034c0-16.731056-13.551176-30.29498-30.296221-30.29498l-60.594489 0c-16.746069 0-30.296221 13.564947-30.296221 30.29498l0 666.505933c0 16.745383 13.551176 30.29498 30.296221 30.29498l60.594489 0c16.746069 0 30.296221-13.549597 30.296221-30.29498L390.812556 178.747034z"  ></path></symbol><symbol id="icon-shangyishou" viewBox="0 0 1024 1024"><path d="M930.84436 977.382623 930.84436 46.617377 1002.630813 85.71135 282.038367 551.093974 282.038367 472.906026 1002.630813 938.288649 930.84436 977.382623 930.84436 977.382623ZM1023.920885 977.382623C1023.920885 1014.246227 983.101312 1036.476038 952.134432 1016.476597L231.541984 551.093974C203.155221 532.760854 203.155221 491.239146 231.541984 472.906026L952.134432 7.523404C983.101312-12.476039 1023.920885 9.753771 1023.920885 46.617377L1023.920885 977.382623ZM97.909546 92.774171C97.909546 67.282478 77.25285 46.617377 51.371284 46.617377 25.668914 46.617377 4.833022 67.806508 4.833022 92.774171L4.833022 931.22583C4.833022 956.717521 25.489723 977.382623 51.371284 977.382623 77.073659 977.382623 97.909546 956.193491 97.909546 931.22583L97.909546 92.774171Z"  ></path></symbol><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M221.790362 1014.94374c-36.775578 0-68.472488-13.843286-91.662653-40.033785-23.130813-26.121937-35.868929-63.466474-35.868928-105.155968V154.424068c0-41.691541 12.739139-79.041194 35.869952-105.169271 23.193235-26.197662 54.889121-40.044018 91.662652-40.044018 27.752064 0 56.166207 8.159844 84.451414 24.25338l570.119699 358.735338 0.153496 0.088004c50.086745 28.728298 78.901001 72.395844 79.053474 119.806643 0 48.284703-28.559453 91.193978-80.418564 120.835066l-0.163729 0.093121L308.632219 989.273081C278.266631 1006.546489 249.860674 1014.94374 221.790362 1014.94374zM221.790362 63.144132c-44.709271 0-73.598228 35.82902-73.598228 91.279936v715.330942c0 55.43659 28.888957 91.2564 73.598228 91.2564 18.275225 0 38.137599-6.03239 59.034535-17.929348l0.165775-0.095167 566.30993-356.24154c35.544541-20.447704 54.333466-46.232974 54.333466-74.56423-0.105401-37.916565-32.837896-62.23953-52.339042-73.362868l-1.198292-0.713244L278.571576 79.725786l-0.169868-0.096191C259.408121 68.843948 239.833297 63.144132 221.790362 63.144132z" fill="" ></path></symbol><symbol id="icon-xiayishou" viewBox="0 0 1024 1024"><path d="M97.910112 46.618431v930.764009L26.122653 938.291273l720.593307-465.387125v78.187454L26.122653 85.709598l71.787459-39.091167z m-93.076401 0c0-36.863969 40.821725-59.09499 71.787459-39.101407l720.593308 465.387124c28.385256 18.334704 28.385256 59.852749 0 78.187454L76.61605 1016.478726c-30.965734 19.993583-71.787459-2.237438-71.787459-39.096286V46.618431zM930.841244 931.225679c0 25.492458 20.659182 46.161881 46.54076 46.161881 25.702378 0 46.54076-21.191662 46.540761-46.161881V92.775192c0-25.492458-20.659182-46.156761-46.540761-46.156761-25.702378 0-46.54076 21.191662-46.54076 46.156761v838.450487z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)