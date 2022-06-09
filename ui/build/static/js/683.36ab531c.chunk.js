"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[683],{3683:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(2982),i=n(885),o=n(2791),a=n(1413),s=n(8932),l=n(9486),c=n(1423),f=n(1752),u=n(2825),d=n(7691),m=n(6237),p=n(6010),v=n(460),b=function(e){var t,n,r,i,a,s,f,u,d,m,p,b,h,w,y=e.indeterminate,k=e.radio,E=e.checkbox,O=e.value,g=e.name,C=e.readonly,j=e.disabled,x=e.checked,N=e.defaultChecked,I=e.required,S=e.media,L=e.header,R=e.footer,B=e.title,H=e.subtitle,A=e.text,M=e.after,P=e.badge,D=e.badgeColor,Z=e.radioIcon,G=e.swipeout,K=e.sortable,T=e.accordionItem,_=e.onChange,z=e.onClick,F=e.isMediaComputed,q=e.isSortableComputed,J=e.isSortableOppositeComputed,V=e.slots,Y=(0,o.useRef)(null);((0,o.useEffect)((function(){Y.current&&(Y.current.indeterminate=!!y)}),[y]),(k||E)&&(m=o.createElement("input",{ref:Y,value:O,name:g,checked:x,defaultChecked:N,readOnly:C,disabled:j,required:I,type:k?"radio":"checkbox",onChange:_}),p=o.createElement("i",{className:"icon icon-".concat(k?"radio":"checkbox")})),S||V.media)&&(S&&(w=o.createElement("img",{src:S})),d=o.createElement("div",{className:"item-media"},w,V.media));(L||V.header)&&(b=o.createElement("div",{className:"item-header"},L,V.header)),(R||V.footer)&&(h=o.createElement("div",{className:"item-footer"},R,V.footer)),(B||V.title||!F&&b||!F&&h)&&(t=o.createElement("div",{className:"item-title"},!F&&b,B,V.title,!F&&h)),(H||V.subtitle)&&(f=o.createElement("div",{className:"item-subtitle"},H,V.subtitle)),(A||V.text)&&(u=o.createElement("div",{className:"item-text"},A,V.text)),(M||P||V.after)&&(M&&(r=o.createElement("span",null,M)),P&&(i=o.createElement(v.Z,{color:D},P)),n=o.createElement("div",{className:"item-after"},V["after-start"],r,i,V.after,V["after-end"])),F?(s=o.createElement("div",{className:"item-title-row"},V["before-title"],t,V["after-title"],n),a=o.createElement("div",{className:"item-inner"},V["inner-start"],b,s,f,u,G||T?null:V.default,V.inner,h,V["inner-end"])):a=o.createElement("div",{className:"item-inner"},V["inner-start"],V["before-title"],t,V["after-title"],n,G||T?null:V.default,V.inner,V["inner-end"]);var U=E||k?"label":"div",Q=(0,l.AK)("item-content",{"item-checkbox":E,"item-radio":k,"item-radio-icon-start":k&&"start"===Z,"item-radio-icon-end":k&&"end"===Z},(0,c.bG)(e));return o.createElement(U,{className:Q,onClick:z},q&&!1!==K&&J&&o.createElement("div",{className:"sortable-handler"}),V["content-start"],m,p,d,a,V.content,V["content-end"])};b.displayName="f7-list-item-content";var h=b,w=o.createContext({listIsMedia:!1,listIsSimple:!1,listIsSortable:!1,listIsSortableOpposite:!1});function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var k=(0,o.forwardRef)((function(e,t){var n=e.className,r=e.id,i=e.style,v=e.children,b=e.title,k=e.link,E=e.target,O=e.tabLink,g=e.tabLinkActive,C=e.selected,j=e.mediaItem,x=e.mediaList,N=e.divider,I=e.groupTitle,S=e.swipeout,L=e.swipeoutOpened,R=e.sortable,B=e.sortableOpposite,H=e.accordionItem,A=e.accordionItemOpened,M=e.smartSelect,P=e.smartSelectParams,D=e.noChevron,Z=e.chevronCenter,G=e.checkbox,K=e.radio,T=e.disabled,_=e.virtualListIndex,z=e.href,F=(0,o.useContext)(w)||{},q=F.listIsMedia,J=void 0!==q&&q,V=F.listIsSortable,Y=void 0!==V&&V,U=F.listIsSortableOpposite,Q=void 0!==U&&U,W=F.listIsSimple,X=void 0!==W&&W,$=(0,l.N2)(e),ee=(0,o.useRef)(null),te=(0,o.useRef)(null),ne=(0,o.useRef)(null),re=function(t){"input"!==t.target.tagName.toLowerCase()&&(0,l.j8)(e,"click",t)},ie=function(t){ee.current===t&&(0,l.j8)(e,"swipeoutOverswipeEnter")},oe=function(t){ee.current===t&&(0,l.j8)(e,"swipeoutOverswipeExit")},ae=function(t){ee.current===t&&(0,l.j8)(e,"swipeoutDeleted")},se=function(t){ee.current===t&&(0,l.j8)(e,"swipeoutDelete")},le=function(t){ee.current===t&&(0,l.j8)(e,"swipeoutClose")},ce=function(t){ee.current===t&&(0,l.j8)(e,"swipeoutClosed")},fe=function(t){ee.current===t&&(0,l.j8)(e,"swipeoutOpen")},ue=function(t){ee.current===t&&(0,l.j8)(e,"swipeoutOpened")},de=function(t,n){ee.current===t&&(0,l.j8)(e,"swipeout",n)},me=function(t,n){ee.current===t&&(0,l.j8)(e,"accordionBeforeClose",n)},pe=function(t){ee.current===t&&(0,l.j8)(e,"accordionClose")},ve=function(t){ee.current===t&&(0,l.j8)(e,"accordionClosed")},be=function(t,n){ee.current===t&&(0,l.j8)(e,"accordionBeforeOpen",n)},he=function(t){ee.current===t&&(0,l.j8)(e,"accordionOpen")},we=function(t){ee.current===t&&(0,l.j8)(e,"accordionOpened")};(0,o.useImperativeHandle)(t,(function(){return{el:ee.current,f7SmartSelect:function(){return ne.current}}})),(0,d.l)(ee,e),(0,f.T)(te,e),(0,m.G)(L,(function(e){S&&ee.current&&p.f7&&(e?p.f7.swipeout.open(ee.current):p.f7.swipeout.close(ee.current))}));var ye=function(){p.f7&&(p.f7.off("swipeoutOpen",fe),p.f7.off("swipeoutOpened",ue),p.f7.off("swipeoutClose",le),p.f7.off("swipeoutClosed",ce),p.f7.off("swipeoutDelete",se),p.f7.off("swipeoutDeleted",ae),p.f7.off("swipeoutOverswipeEnter",ie),p.f7.off("swipeoutOverswipeExit",oe),p.f7.off("swipeout",de),p.f7.off("accordionBeforeOpen",be),p.f7.off("accordionOpen",he),p.f7.off("accordionOpened",we),p.f7.off("accordionBeforeClose",me),p.f7.off("accordionClose",pe),p.f7.off("accordionClosed",ve))};(0,u.v)(M,P,ne,(function(){return ee.current.querySelector("a.smart-select")})),(0,s.L)((function(){(0,p.Ep)((function(){S&&L&&p.f7.swipeout.open(ee.current)}))}),[]),(0,s.L)((function(){return(0,p.Ep)((function(){S&&(p.f7.on("swipeoutOpen",fe),p.f7.on("swipeoutOpened",ue),p.f7.on("swipeoutClose",le),p.f7.on("swipeoutClosed",ce),p.f7.on("swipeoutDelete",se),p.f7.on("swipeoutDeleted",ae),p.f7.on("swipeoutOverswipeEnter",ie),p.f7.on("swipeoutOverswipeExit",oe),p.f7.on("swipeout",de)),H&&(p.f7.on("accordionBeforeOpen",be),p.f7.on("accordionOpen",he),p.f7.on("accordionOpened",we),p.f7.on("accordionBeforeClose",me),p.f7.on("accordionClose",pe),p.f7.on("accordionClosed",ve))})),ye}));var ke,Ee,Oe=(0,l.FJ)(e),ge=j||x||J,Ce=!0===R||!1===R?R:Y,je=Ce&&(B||Q);if(!X&&(Ee=o.createElement(h,y({},e,{slots:Oe,onChange:function(t){(0,l.j8)(e,"change",t)},onClick:k||z||H||M?void 0:re,isMediaComputed:ge,isSortableComputed:Ce,isSortableOppositeComputed:je})),k||z||H||M)){var xe=(0,a.Z)((0,a.Z)({href:!0===k?"":k||z,target:E,"data-tab":(0,l.Nz)(O)&&O||void 0},(0,c.Rt)(e)),(0,c.UC)(e)),Ne=(0,l.AK)({"item-link":!0,"smart-select":M,"tab-link":O||""===O,"tab-link-active":g,"item-selected":C},(0,c.HJ)(e),(0,c.s3)(e));ke=o.createElement("a",y({ref:te,className:Ne},xe,{onClick:re}),Ee)}var Ie=(0,l.AK)(n,{"item-divider":N,"list-group-title":I,"media-item":ge,swipeout:S,"accordion-item":H,"accordion-item-opened":A,disabled:T&&!(K||G),"no-chevron":D,"chevron-center":Z,"disallow-sorting":!1===R},(0,c.bG)(e));if(N||I)return o.createElement("li",{ref:ee,id:r,style:i,className:Ie,"data-virtual-list-index":_,onClick:re},o.createElement("span",null,b,v));if(X)return o.createElement("li",{ref:ee,id:r,style:i,className:Ie,"data-virtual-list-index":_,onClick:re},b,v);var Se=k||z||M||H?ke:Ee;return o.createElement("li",y({ref:ee,id:r,style:i,className:Ie,"data-virtual-list-index":_},$),Oe["root-start"],S?o.createElement("div",{className:"swipeout-content"},Se):Se,Ce&&!1!==R&&!je&&o.createElement("div",{className:"sortable-handler"}),(S||H)&&Oe.default,Oe.root,Oe["root-end"])}));k.displayName="f7-list-item";var E=k;function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}var g=(0,o.forwardRef)((function(e,t){var n=e.className,r=e.id,i=e.style,a=e.children,s=e.left,f=e.right,u=e.side,d=(0,l.N2)(e),m=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(function(){return{el:m.current}}));var p=u;p||(s&&(p="left"),f&&(p="right"));var v=(0,l.AK)(n,"swipeout-actions-".concat(p),(0,c.bG)(e));return o.createElement("div",O({id:r,style:i,className:v,ref:m},d),a)}));g.displayName="f7-swipeout-actions";var C=g;function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var x=(0,o.forwardRef)((function(e,t){var n=e.className,r=e.id,i=e.style,a=e.children,s=e.text,f=e.confirmTitle,u=e.confirmText,d=e.overswipe,m=e.close,p=e.delete,v=e.href,b=(0,l.N2)(e),h=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(function(){return{el:h.current}}));var w=(0,l.AK)(n,{"swipeout-overswipe":d,"swipeout-delete":p,"swipeout-close":m},(0,c.bG)(e));return o.createElement("a",j({ref:h,href:v||"#",id:r,style:i,"data-confirm":u||void 0,"data-confirm-title":f||void 0,className:w},b,{onClick:function(t){(0,l.j8)(e,"click",t)}}),a,s)}));x.displayName="f7-swipeout-button";var N=x,I=n(9591);function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var L=(0,o.forwardRef)((function(e,t){var n=(0,o.useRef)(null),r=e.className,i=e.id,a=e.style,f=e.inset,u=e.xsmallInset,d=e.smallInset,m=e.mediumInset,v=e.largeInset,b=e.xlargeInset,h=e.mediaList,y=e.sortable,k=e.sortableTapHold,E=e.sortableEnabled,O=e.sortableMoveElements,g=e.sortableOpposite,C=e.accordionList,j=e.accordionOpposite,x=e.contactsList,N=e.simpleList,L=e.linksList,R=e.menuList,B=e.noHairlines,H=e.noHairlinesBetween,A=e.noHairlinesMd,M=e.noHairlinesBetweenMd,P=e.noHairlinesIos,D=e.noHairlinesBetweenIos,Z=e.noHairlinesAurora,G=e.noHairlinesBetweenAurora,K=e.noChevron,T=e.chevronCenter,_=e.tab,z=e.tabActive,F=e.form,q=e.formStoreData,J=e.inlineLabels,V=e.virtualList,Y=e.virtualListParams,U=(0,l.N2)(e),Q=(0,o.useRef)(null),W=function(t){Q.current===t&&(0,l.j8)(e,"sortableEnable")},X=function(t){Q.current===t&&(0,l.j8)(e,"sortableDisable")},$=function(t,n,r){Q.current===r&&(0,l.j8)(e,"sortableSort",n)},ee=function(t,n){Q.current===n&&(0,l.j8)(e,"sortableMove",t,n)};(0,o.useImperativeHandle)(t,(function(){return{el:Q.current,f7VirtualList:function(){return n.current}}})),(0,I.x)(Q,e);var te=function(){p.f7&&(p.f7.off("sortableEnable",W),p.f7.off("sortableDisable",X),p.f7.off("sortableSort",$),p.f7.off("sortableMove",ee))},ne=function(){p.f7&&V&&n.current&&(n.current.destroy&&n.current.destroy(),n.current=null)};(0,s.L)((function(){return(0,p.Ep)((function(){if(V){var t=Y||{};(t.renderItem||t.renderExternal)&&(n.current=p.f7.virtualList.create((0,l.l7)({el:Q.current,on:{itemBeforeInsert:function(t,n){(0,l.j8)(e,"virtualItemBeforeInsert",this,t,n)},beforeClear:function(t){(0,l.j8)(e,"virtualBeforeClear",this,t)},itemsBeforeInsert:function(t){(0,l.j8)(e,"virtualItemsBeforeInsert",this,t)},itemsAfterInsert:function(t){(0,l.j8)(e,"virtualItemsAfterInsert",this,t)}}},t)))}})),ne}),[]),(0,s.L)((function(){return(0,p.Ep)((function(){p.f7.on("sortableEnable",W),p.f7.on("sortableDisable",X),p.f7.on("sortableSort",$),p.f7.on("sortableMove",ee)})),te}));var re=(0,l.FJ)(e),ie=re.list,oe=re.default,ae=[],se=[],le=ie||[],ce=(0,l.VF)(oe),fe=!1;ce.forEach((function(e){if("undefined"!==typeof e){var t=e.type&&(e.type.displayName||e.type.name);t||"string"!==typeof e.type||(t=e.type),!t||t&&!("li"===t||t.indexOf("f7-list-item")>=0||t.indexOf("f7-list-button")>=0||t.indexOf("f7-list-input")>=0)?fe?se.push(e):ae.push(e):t&&(fe=!0,le.push(e))}}));var ue=F?"form":"div",de=(0,l.AK)(r,"list",{inset:f,"xsmall-inset":u,"small-inset":d,"medium-inset":m,"large-inset":v,"xlarge-inset":b,"media-list":h,"simple-list":N,"links-list":L,"menu-list":R,sortable:y,"sortable-tap-hold":k,"sortable-enabled":E,"sortable-opposite":g,"accordion-list":C,"accordion-opposite":j,"contacts-list":x,"virtual-list":V,tab:_,"tab-active":z,"no-hairlines":B,"no-hairlines-md":A,"no-hairlines-ios":P,"no-hairlines-aurora":Z,"no-hairlines-between":H,"no-hairlines-between-md":M,"no-hairlines-between-ios":D,"no-hairlines-between-aurora":G,"form-store-data":q,"inline-labels":J,"no-chevron":K,"chevron-center":T},(0,c.bG)(e));return o.createElement(ue,S({id:i,ref:Q,style:a,className:de},U,{"data-sortable-move-elements":"undefined"!==typeof O?O.toString():void 0,onSubmit:function(t){(0,l.j8)(e,"submit",t)}}),o.createElement(w.Provider,{value:{listIsMedia:h,listIsSimple:N,listIsSortable:y,listIsSortableOpposite:g}},re["before-list"],ae,le.length>0&&o.createElement("ul",null,le),re["after-list"],se))}));L.displayName="f7-list";var R=L,B=n(7026),H=n(9553),A=n(4138),M=n(5758),P=n(184),D=function(e){var t=e.myPokemonList,n=e.f7router,a=[],s=(0,o.useState)(t),l=(0,i.Z)(s,2),c=l[0],f=l[1],u=c.map((function(e){return e.nickname}));return c.forEach((function(e){a.push((0,P.jsx)(E,{swipeout:!0,title:e.nickname,subtitle:e.species,children:(0,P.jsx)(C,{right:!0,children:(0,P.jsx)(N,{color:"red",onClick:function(){p.f7.dialog.preloader("Releasing ".concat(e.nickname,"...")),fetch("/pokemon/release",{method:"GET"}).then((function(e){return e.json()})).then((function(t){if(p.f7.dialog.close(),!t.response)return p.f7.dialog.alert("".concat(e.nickname," do not wanna go from You"),'<i class="icon f7-icons color-orange" style="font-size: 35px;">exclamationmark</i>'),void console.info("info: release result",t.response);p.f7.dialog.alert("You have ".concat(e.nickname," let go"),'<i class="icon f7-icons color-green" style="font-size: 35px;">checkmark_alt</i>',(function(){var t=(0,r.Z)(c);t.splice(u.indexOf(e.nickname),1),f(t)})),console.info("info: release result",t.response)})).catch((function(e){p.f7.dialog.alert("Pokeapi error",'<i class="icon f7-icons color-red" style="font-size: 35px;">xmark</i>'),console.error("error:",e)}))},children:"Release"})})}))})),(0,o.useEffect)((function(){console.info("info my pokemon page: all catched pokemon",c)}),[c]),(0,P.jsxs)(B.Z,{name:"mypokemon",children:[(0,P.jsx)(H.Z,{title:"My Pokemon List",children:(0,P.jsx)(A.Z,{slot:"left",iconF7:"arrowshape_turn_up_left_fill",onClick:function(){n.navigate("/list/",{props:{myPokemonList:c}})}})}),(0,P.jsx)(M.Z,{children:"Swipe to left for release button"}),(0,P.jsx)(R,{children:a})]})}},5758:function(e,t,n){var r=n(2791),i=n(9486),o=n(1423);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}var s=(0,r.forwardRef)((function(e,t){var n=e.className,s=e.id,l=e.style,c=e.children,f=e.large,u=e.medium,d=(0,i.N2)(e),m=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(function(){return{el:m.current}}));var p=(0,i.AK)(n,"block-title",{"block-title-large":f,"block-title-medium":u},(0,o.bG)(e));return r.createElement("div",a({id:s,style:l,className:p,ref:m},d),c)}));s.displayName="f7-block-title",t.Z=s}}]);
//# sourceMappingURL=683.36ab531c.chunk.js.map