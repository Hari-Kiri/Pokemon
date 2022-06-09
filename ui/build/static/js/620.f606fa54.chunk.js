"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[620],{620:function(e,r,n){n.r(r);var t=n(2982),o=n(885),a=n(2791),i=n(6010),c=n(203),s=n(135),l=n(8169),d=n(1555),f=n(4138),u=n(7026),p=n(9553),m=(n(3294),n(184)),h="https://pokeapi.co/api/v2/pokemon?limit=5",v='<i class="icon f7-icons color-orange" style="font-size: 35px;">exclamationmark</i>';r.default=function(e){var r=e.myPokemonList,n=e.f7router,y=(0,a.useState)(!0),b=(0,o.Z)(y,2),k=b[0],g=b[1],O=(0,a.useState)([]),j=(0,o.Z)(O,2),N=j[0],Z=j[1],w=(0,a.useState)(!0),x=(0,o.Z)(w,2),P=x[0],E=x[1],A=[];return(0,a.useEffect)((function(){fetch(h,{method:"GET"}).then((function(e){return e.json()})).then((function(e){if(g(!1),Array.isArray(e.results)&&e.results.length>0)return console.info("info: render pokemon data from",h),h=e.next,void e.results.forEach((function(e){fetch(e.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.sprites.length<=0?(i.f7.dialog.alert("Data from Pokeapi can't be processed",v),E(!1),void console.error("error: sprites from pokeapi is not an array\nsprites:",e.sprites)):!Array.isArray(e.moves)||e.moves.length<=0?(i.f7.dialog.alert("Data from Pokeapi can't be processed",v),E(!1),void console.error("error: moves from pokeapi is not an array\nmoves:",e.moves)):!Array.isArray(e.types)||e.types.length<=0?(i.f7.dialog.alert("Data from Pokeapi can't be processed",v),E(!1),void console.error("error: types from pokeapi is not an array\ntypes:",e.types)):void Z((function(r){return[].concat((0,t.Z)(r),[{title:e.name,subtitle:e.id,slot:"media",src:e.sprites.other.dream_world.front_default,width:"44",moves:e.moves,types:e.types,alt:"artwork of ".concat(e.name)}])}))})).catch((function(e){i.f7.dialog.alert("Pokeapi error",v),E(!1),console.error("error:",e)}))}));i.f7.dialog.alert("Data from Pokeapi can't be processed",v),E(!1),console.error("error: results from pokeapi is not an array")})).catch((function(e){i.f7.dialog.alert("Pokeapi error",v),g(!1),E(!1),console.error("error:",e)}))}),[k,r]),N.forEach((function(e){A.push((0,m.jsxs)(c.Z,{className:"pokemon-card-header-pic",children:[(0,m.jsx)(s.Z,{className:"no-border",valign:"bottom",style:{backgroundImage:"url(".concat(e.src,")")}}),(0,m.jsx)(l.Z,{children:(0,m.jsx)("h1",{children:e.title.charAt(0).toUpperCase()+e.title.slice(1)})}),(0,m.jsx)(d.Z,{children:(0,m.jsx)(f.Z,{onClick:function(){n.navigate("/detail/",{props:{myPokemonList:r,title:e.title.charAt(0).toUpperCase()+e.title.slice(1),src:e.src,moves:e.moves,types:e.types}})},children:(0,m.jsx)("h3",{children:"Detail"})})})]}))})),(0,m.jsxs)(u.Z,{name:"list",infinite:!0,infiniteDistance:50,infinitePreloader:P,onInfinite:function(){k||g(!0)},onPageAfterOut:function(){h="https://pokeapi.co/api/v2/pokemon?limit=5"},children:[(0,m.jsx)(p.Z,{title:"Pokemon List",children:(0,m.jsx)(f.Z,{slot:"right",onClick:function(){n.navigate("/mypokemon/",{props:{myPokemonList:r}})},children:"My Pokemon"})}),A]})}},3294:function(){},8169:function(e,r,n){var t=n(2791),o=n(9486),a=n(1423);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}var c=(0,t.forwardRef)((function(e,r){var n=e.className,c=e.id,s=e.style,l=e.children,d=e.padding,f=void 0===d||d,u=(0,o.N2)(e),p=(0,t.useRef)(null);(0,t.useImperativeHandle)(r,(function(){return{el:p.current}}));var m=(0,o.AK)(n,"card-content",{"card-content-padding":f},(0,a.bG)(e));return t.createElement("div",i({id:c,style:s,className:m,ref:p},u),l)}));c.displayName="f7-card-content",r.Z=c},1555:function(e,r,n){var t=n(2791),o=n(9486),a=n(1423);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}var c=(0,t.forwardRef)((function(e,r){var n=e.className,c=e.id,s=e.style,l=e.children,d=(0,o.N2)(e),f=(0,t.useRef)(null);(0,t.useImperativeHandle)(r,(function(){return{el:f.current}}));var u=(0,o.AK)(n,"card-footer",(0,a.bG)(e));return t.createElement("div",i({id:c,style:s,className:u,ref:f},d),l)}));c.displayName="f7-card-footer",r.Z=c},135:function(e,r,n){var t=n(2791),o=n(9486),a=n(1423);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}var c=(0,t.forwardRef)((function(e,r){var n=e.className,c=e.id,s=e.style,l=e.children,d=(0,o.N2)(e),f=(0,t.useRef)(null);(0,t.useImperativeHandle)(r,(function(){return{el:f.current}}));var u=(0,o.AK)(n,"card-header",(0,a.bG)(e));return t.createElement("div",i({id:c,style:s,className:u,ref:f},d),l)}));c.displayName="f7-card-header",r.Z=c},203:function(e,r,n){var t=n(2791),o=n(8932),a=n(135),i=n(8169),c=n(1555),s=n(9486),l=n(1423),d=n(6010),f=n(6237);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}var p=(0,t.forwardRef)((function(e,r){var n,p,m,h=e.className,v=e.id,y=e.style,b=e.title,k=e.content,g=e.footer,O=e.padding,j=e.outline,N=e.expandable,Z=e.expandableAnimateWidth,w=e.expandableOpened,x=e.animate,P=e.hideNavbarOnOpen,E=e.hideToolbarOnOpen,A=e.hideStatusbarOnOpen,C=e.scrollableEl,S=e.swipeToClose,R=e.closeByBackdropClick,G=e.backdrop,B=e.backdropEl,D=e.noShadow,I=e.noBorder,L=(0,s.N2)(e),H=(0,t.useRef)(null),K=function(){H.current&&d.f7.card.open(H.current)},T=function(){H.current&&d.f7.card.close(H.current)},U=function(r,n){H.current===r&&(0,s.j8)(e,"cardBeforeOpen",r,n)},_=function(r){H.current===r&&(0,s.j8)(e,"cardOpen",r)},z=function(r,n){H.current===r&&(0,s.j8)(e,"cardOpened",r,n)},F=function(r){H.current===r&&(0,s.j8)(e,"cardClose",r)},J=function(r,n){H.current===r&&(0,s.j8)(e,"cardClosed",r,n)},M=function(){d.f7.off("cardBeforeOpen",U),d.f7.off("cardOpen",_),d.f7.off("cardOpened",z),d.f7.off("cardClose",F),d.f7.off("cardClosed",J)};(0,o.L)((function(){N&&H.current&&(0,d.Ep)((function(){N&&w&&d.f7.card.open(H.current,!1)}))}),[]),(0,o.L)((function(){return N&&H.current&&(0,d.Ep)((function(){d.f7.on("cardBeforeOpen",U),d.f7.on("cardOpen",_),d.f7.on("cardOpened",z),d.f7.on("cardClose",F),d.f7.on("cardClosed",J)})),M})),(0,f.G)(w,(function(e){e?K():T()})),(0,t.useImperativeHandle)(r,(function(){return{el:H.current,open:K,close:T}}));var W=(0,s.AK)(h,"card",{"card-outline":j,"card-expandable":N,"card-expandable-animate-width":Z,"no-shadow":D,"no-border":I},(0,l.bG)(e)),q=(0,s.FJ)(e);return(b||q.header)&&(n=t.createElement(a.Z,null,b,q.header)),(k||q.content)&&(p=t.createElement(i.Z,{padding:O},k,q.content)),(g||q.footer)&&(m=t.createElement(c.Z,null,g,q.footer)),t.createElement("div",u({id:v,style:y,className:W,"data-animate":"undefined"===typeof x?x:x.toString(),"data-hide-navbar-on-open":"undefined"===typeof P?P:P.toString(),"data-hide-toolbar-on-open":"undefined"===typeof E?E:E.toString(),"data-hide-statusbar-on-open":"undefined"===typeof A?A:A.toString(),"data-scrollable-el":C,"data-swipe-to-close":"undefined"===typeof S?S:S.toString(),"data-close-by-backdrop-click":"undefined"===typeof R?R:R.toString(),"data-backdrop":"undefined"===typeof G?G:G.toString(),"data-backdrop-el":B,ref:H},L),n,p,m,q.default)}));p.displayName="f7-card",r.Z=p}}]);
//# sourceMappingURL=620.f606fa54.chunk.js.map