//>>built
define("dojorama/ui/release/mixin/_ReleaseActionsMixin",["dojo/_base/declare","../../_global/widget/ActionsWidget","dojo/i18n!./nls/_ReleaseActionsMixin"],function(b,c,a){return b([],{actionsWidget:null,postCreate:function(){this.inherited(arguments);this.actionsWidget=new c({actions:[{label:a.indexLabel,url:this.router.getRoute("releaseIndex").assemble(),active:"releaseIndex"===this.router.getCurrentRouteName()},{label:a.createLabel,url:this.router.getRoute("releaseCreate").assemble(),active:"releaseCreate"===
this.router.getCurrentRouteName()}]},this.actionsNode)},startup:function(){this.inherited(arguments);this.actionsWidget.startup()},showReleaseActions:function(){this.actionsWidget.show()}})});