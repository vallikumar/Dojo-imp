//>>built
define("dojo/ready",["./_base/kernel","./has","require","./domReady","./_base/lang"],function(a,i,l,m,j){var n=0,g,c=[],b=0,h=function(){if(n&&!b&&c.length){b=1;var a=c.shift();try{m(a)}finally{b=0}b=0;c.length&&g(h)}};l.on("idle",h);g=function(){l.idle()&&h()};var i=a.ready=a.addOnLoad=function(e,b,f){var d=j._toArray(arguments);"number"!=typeof e?(f=b,b=e,e=1E3):d.shift();f=f?j.hitch.apply(a,d):function(){b()};f.priority=e;for(d=0;d<c.length&&e>=c[d].priority;d++);c.splice(d,0,f);g()},k=a.config.addOnLoad;
if(k)i[j.isArray(k)?"apply":"call"](a,k);m(function(){n=1;a._postLoad=a.config.afterOnLoad=!0;c.length&&g(h)});return i});