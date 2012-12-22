//>>built
require({cache:{"dojorama/ui/home/HomePage":function(){require({cache:{"url:dojorama/ui/home/template/HomePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <h1>Home</h1>\n    <div data-dojo-attach-point="playerNode"></div>\n    <div data-dojo-attach-point="footerNode"></div>\n</div>',"url:dojorama/ui/home/css/HomePage.css":"body {background: yellow;}"}});define("dojorama/ui/home/HomePage","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_AppAware,dojomat/_StateAware,../_global/mixin/_NavigationMixin,../_global/mixin/_PlayerMixin,../_global/mixin/_FooterMixin,dojo/text!./template/HomePage.html,dojo/text!./css/HomePage.css".split(","),
function(b,c,f,e,h,j,g,i,k,a){return b([c,f,e,h,j,g,i],{router:null,request:null,session:null,templateString:k,constructor:function(a){this.router=a.router;this.request=a.request;this.session=a.session},postCreate:function(){this.inherited(arguments);this.setCss(a,"all");this.setTitle("Home")},startup:function(){this.inherited(arguments);this.showNavigation();this.showPlayer();this.showFooter()}})})},"dojorama/ui/_global/mixin/_NavigationMixin":function(){define("dojorama/ui/_global/mixin/_NavigationMixin",
["dojo/_base/declare","../widget/NavigationWidget"],function(b,c){return b([],{navigationWidget:null,postCreate:function(){this.inherited(arguments);this.navigationWidget=new c({router:this.router},this.navigationNode)},startup:function(){this.inherited(arguments);this.navigationWidget.startup()},showNavigation:function(){this.navigationWidget.show()}})})},"dojorama/ui/_global/widget/NavigationWidget":function(){require({cache:{"url:dojorama/ui/_global/widget/template/NavigationWidget.html":'<div class="navbar navbar-inverse">\n    <div class="navbar-inner">\n        <div class="container">\n            <\!-- Be sure to leave the brand out there if you want it shown --\>\n            <a class="brand" href="#" data-dojo-attach-point="homeNode"></a>\n            \n            <ul class="nav">\n                <li><a href="#" data-dojo-attach-point="releaseIndexNode"></a></li>\n                <li><a href="#" data-dojo-attach-point="storageNode"></a></li>\n            </ul>\n\n            <\!-- Everything you want hidden at 940px or less, place within here --\>\n            <div class="nav-collapse">\n            <\!-- .nav, .navbar-search, .navbar-form, etc --\>\n            </div>\n            <\!--\n            <ul class="nav pull-right">\n                <li>asdf</li>\n            </ul>\n            --\>\n        </div>\n    </div>\n</div>'}});
define("dojorama/ui/_global/widget/NavigationWidget","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_StateAware,../mixin/_ToggleMixin,dojo/on,dojo/_base/lang,dojo/text!./template/NavigationWidget.html,dojo/i18n!./nls/NavigationWidget".split(","),function(b,c,f,e,h,j,g,i,k){return b([c,f,e,h],{router:null,templateString:i,constructor:function(a){this.router=a.router},postCreate:function(){var a=function(a,b,c){a.innerHTML=b;a.href=c;this.own(j(a,"click",g.hitch(this,function(a){a.preventDefault();
this.push(c)})))};this.inherited(arguments);this.hide();g.hitch(this,a)(this.homeNode,k.labelHome,this.router.getRoute("home").assemble());g.hitch(this,a)(this.releaseIndexNode,k.labelReleaseIndex,this.router.getRoute("releaseIndex").assemble());g.hitch(this,a)(this.storageNode,k.labelStorage,this.router.getRoute("storage").assemble())}})})},"dojorama/ui/_global/mixin/_ToggleMixin":function(){define("dojorama/ui/_global/mixin/_ToggleMixin",["dojo/_base/declare","dojo/dom-style"],function(b,c){return b([],
{show:function(){c.set(this.domNode,{display:"block"})},hide:function(){c.set(this.domNode,{display:"none"})}})})},"url:dojorama/ui/_global/widget/template/NavigationWidget.html":'<div class="navbar navbar-inverse">\n    <div class="navbar-inner">\n        <div class="container">\n            <\!-- Be sure to leave the brand out there if you want it shown --\>\n            <a class="brand" href="#" data-dojo-attach-point="homeNode"></a>\n            \n            <ul class="nav">\n                <li><a href="#" data-dojo-attach-point="releaseIndexNode"></a></li>\n                <li><a href="#" data-dojo-attach-point="storageNode"></a></li>\n            </ul>\n\n            <\!-- Everything you want hidden at 940px or less, place within here --\>\n            <div class="nav-collapse">\n            <\!-- .nav, .navbar-search, .navbar-form, etc --\>\n            </div>\n            <\!--\n            <ul class="nav pull-right">\n                <li>asdf</li>\n            </ul>\n            --\>\n        </div>\n    </div>\n</div>',
"dojorama/ui/_global/mixin/_PlayerMixin":function(){define("dojorama/ui/_global/mixin/_PlayerMixin",["dojo/_base/declare","../widget/PlayerWidget"],function(b,c){return b([],{playerWidget:null,postCreate:function(){this.inherited(arguments);this.playerWidget=new c({session:this.session},this.playerNode)},startup:function(){this.inherited(arguments);this.playerWidget.startup()},showPlayer:function(){this.playerWidget.show()}})})},"dojorama/ui/_global/widget/PlayerWidget":function(){require({cache:{"url:dojorama/ui/_global/widget/template/PlayerWidget.html":'<div class="well well-large">\n    <p>Listen to some music while you play with this app</p>\n    \n    <div class="btn-group">\n        <a class="btn" href="#" data-dojo-attach-point="prevNode"><i class="icon-backward"></i></a>\n        <a class="btn" href="#" data-dojo-attach-point="playNode"><i class="icon-play"></i></a>\n        <a class="btn" href="#" data-dojo-attach-point="nextNode"><i class="icon-forward"></i></a>\n    </div>\n    \n    <div data-dojo-attach-point="infoNode">\n        Track <span data-dojo-attach-point="trackNrNode"></span> of <span data-dojo-attach-point="numTracksNode"></span>\n        <span data-dojo-attach-point="positionOuterNode" style="display:none">\n            // <span data-dojo-attach-point="positionNode"></span>\n        </span>\n        <h2 class="track-title" data-dojo-attach-point="trackTitleNode">Title</h2>\n        <p class="track-artist" data-dojo-attach-point="trackArtistNode">Artist</p>\n    </div>\n</div>'}});
define("dojorama/ui/_global/widget/PlayerWidget","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_StateAware,../mixin/_ToggleMixin,dojo/dom-style,dojo/dom-class,dojo/on,dojo/query,dojo/_base/lang,dojo/_base/array,dojo-sm2-playlist/Playlist,dojo/text!./template/PlayerWidget.html".split(","),function(b,c,f,e,h,j,g,i,k,a,n,o,l){return b([c,f,e,h],{session:null,templateString:l,constructor:function(a){this.session=a.session},postCreate:function(){this.inherited(arguments);var d=this.session.get("playlist"),
b=k("i",this.playNode)[0],c=function(){g.remove(b,"icon-pause");g.add(b,"icon-play")},f=function(){g.remove(b,"icon-play");g.add(b,"icon-pause")},e=function(){this.trackNrNode.innerHTML=d.getCurrentPosition();this.numTracksNode.innerHTML=d.getTracks().length;this.trackTitleNode.innerHTML=d.getCurrentTrack().title;this.trackArtistNode.innerHTML=d.getCurrentTrack().artist},h=function(){j.set(this.positionOuterNode,"display","inline")},l=function(){var a=this.positionNode,b=Math.round(d.getCurrentSound().position/
1E3),b=parseInt(b,10),c=3600<=b?Math.floor(b/3600):0,f=60<=b-3600*c?Math.floor((b-3600*c)/60):0,e=b-3600*c-60*f,e=10>e?"0"+e:e;a.innerHTML=3600>b?f+":"+e:c+":"+(10>f?"0"+f:f)+":"+e},m=function(){this.positionNode.innerHTML="0:00"};d||(d=new o,d.onready(function(){d.addTrack({title:"The River",artist:"Pachanga Boys",cover:""},{id:"theRiver",url:"http://sirprize.me/chrigu/dojorama/pachanga-boys-the-river.mp3"});d.addTrack({title:"Is this power",artist:"The Field",cover:""},{id:"isThisPower",url:"http://sirprize.me/chrigu/dojorama/the-field-is-this-power.mp3"});
d.addTrack({title:"Geffen (Philipp Gorbatchev Remix)",artist:"Barnt",cover:""},{id:"geffen",url:"http://sirprize.me/chrigu/dojorama/barnt-geffen-philipp-gorbatchev-remix.mp3"})}),this.session.set("playlist",d));d.onready(a.hitch(this,function(){d.isPlaying()?(a.hitch(this,f)(),a.hitch(this,h)()):a.hitch(this,c)();a.hitch(this,e)()}));n.forEach(d.getTracks(),a.hitch(this,function(b){this.own(i(b,"onplay",a.hitch(this,function(){a.hitch(this,h)();a.hitch(this,m)()})));this.own(i(b,"onfinish",a.hitch(this,
function(){d.next();a.hitch(this,f)();a.hitch(this,e)()})));this.own(i(b,"whileplaying",a.hitch(this,function(){a.hitch(this,l)()})))}));this.own(i(this.playNode,"click",a.hitch(this,function(b){b.preventDefault();d.isPlaying()?(d.pause(),a.hitch(this,c)()):(d.play(),a.hitch(this,f)(),a.hitch(this,e)())})));this.own(i(this.prevNode,"click",a.hitch(this,function(b){b.preventDefault();d.previous();a.hitch(this,f)();a.hitch(this,e)();a.hitch(this,m)()})));this.own(i(this.nextNode,"click",a.hitch(this,
function(b){b.preventDefault();d.next();a.hitch(this,f)();a.hitch(this,e)();a.hitch(this,m)()})))}})})},"url:dojorama/ui/_global/widget/template/PlayerWidget.html":'<div class="well well-large">\n    <p>Listen to some music while you play with this app</p>\n    \n    <div class="btn-group">\n        <a class="btn" href="#" data-dojo-attach-point="prevNode"><i class="icon-backward"></i></a>\n        <a class="btn" href="#" data-dojo-attach-point="playNode"><i class="icon-play"></i></a>\n        <a class="btn" href="#" data-dojo-attach-point="nextNode"><i class="icon-forward"></i></a>\n    </div>\n    \n    <div data-dojo-attach-point="infoNode">\n        Track <span data-dojo-attach-point="trackNrNode"></span> of <span data-dojo-attach-point="numTracksNode"></span>\n        <span data-dojo-attach-point="positionOuterNode" style="display:none">\n            // <span data-dojo-attach-point="positionNode"></span>\n        </span>\n        <h2 class="track-title" data-dojo-attach-point="trackTitleNode">Title</h2>\n        <p class="track-artist" data-dojo-attach-point="trackArtistNode">Artist</p>\n    </div>\n</div>',
"dojorama/ui/_global/mixin/_FooterMixin":function(){define("dojorama/ui/_global/mixin/_FooterMixin",["dojo/_base/declare","../widget/FooterWidget"],function(b,c){return b([],{footerWidget:null,postCreate:function(){this.inherited(arguments);this.footerWidget=new c({router:this.router},this.footerNode)},startup:function(){this.inherited(arguments);this.footerWidget.startup()},showFooter:function(){this.footerWidget.show()}})})},"dojorama/ui/_global/widget/FooterWidget":function(){require({cache:{"url:dojorama/ui/_global/widget/template/FooterWidget.html":'<div class="footer">\n    <div class="container">\n        <\!--<p class="pull-right"><a href="#">Back to top</a></p>--\>\n        <p>Dojorama is written by <a href="http://sirprize.me">sirprize</a>, hosted on <a href="http://github.com/sirprize/dojorama">Github</a> and released under the <a href="http://opensource.org/licenses/mit-license.php">MIT license</a>.</p>\n        <\!--\n        <ul class="footer-links">\n            <li><a href="">aaa</a></li>\n            <li><a href="">bbb</a></li>\n        </ul>\n        --\>\n    </div>\n</div>'}});
define("dojorama/ui/_global/widget/FooterWidget","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_StateAware,../mixin/_ToggleMixin,dojo/text!./template/FooterWidget.html,dojo/i18n!./nls/FooterWidget".split(","),function(b,c,f,e,h,j){return b([c,f,e,h],{router:null,templateString:j,constructor:function(b){this.router=b.router},postCreate:function(){this.inherited(arguments);this.hide()}})})},"url:dojorama/ui/_global/widget/template/FooterWidget.html":'<div class="footer">\n    <div class="container">\n        <\!--<p class="pull-right"><a href="#">Back to top</a></p>--\>\n        <p>Dojorama is written by <a href="http://sirprize.me">sirprize</a>, hosted on <a href="http://github.com/sirprize/dojorama">Github</a> and released under the <a href="http://opensource.org/licenses/mit-license.php">MIT license</a>.</p>\n        <\!--\n        <ul class="footer-links">\n            <li><a href="">aaa</a></li>\n            <li><a href="">bbb</a></li>\n        </ul>\n        --\>\n    </div>\n</div>',
"url:dojorama/ui/home/template/HomePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <h1>Home</h1>\n    <div data-dojo-attach-point="playerNode"></div>\n    <div data-dojo-attach-point="footerNode"></div>\n</div>',"url:dojorama/ui/home/css/HomePage.css":"body {background: yellow;}","*now":function(b){b(['dojo/i18n!*preload*dojorama/layers/nls/home*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])}}});
define("dojorama/layers/home",[],1);