//>>built
define("dojorama/App","dojo/_base/declare dojo/_base/lang routed/Request dojomat/Application dojomat/populateRouter ./routing-map require dojo/domReady!".split(" "),function(g,d,e,h,k,l,f){var c=function(a){var b=a.getQueryString();a=a.getPathname()+(""!==b?"?":"")+b;window._gaq&&window._gaq.push(["_trackPageview",a])};return g([h],{constructor:function(){k(this,l);this.run()},makeNotFoundPage:function(){var a=new e(window.location.href);f(["./ui/error/NotFoundPage"],d.hitch(this,function(b){this.setStylesheets();
this.setCss();this.setPageNode();(new b({request:a,router:this.router},this.pageNodeId)).startup();this.notification.clear()}));c(a)},makeErrorPage:function(a){var b=new e(window.location.href);f(["./ui/error/ErrorPage"],d.hitch(this,function(c){this.setStylesheets();this.setCss();this.setPageNode();(new c({request:b,router:this.router,error:a},this.pageNodeId)).startup();this.notification.clear()}));c(b)},makePage:function(a,b,d,e){this.inherited(arguments);c(a)}})});
//@ sourceMappingURL=App.js.map