"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[311],{7311:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(2982),a=n(885),o=n(2791),i=n(4942),c=n(9486),l=n(1423),s=n(6010);function f(){return f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)}var d=(0,o.forwardRef)((function(e,r){var n,t=e.className,a=e.id,d=e.style,u=e.children,p=e.tag,m=void 0===p?"div":p,v=e.width,h=void 0===v?"auto":v,y=e.xsmall,b=e.small,g=e.medium,k=e.large,j=e.xlarge,O=e.resizable,x=e.resizableFixed,N=e.resizableAbsolute,Z=e.resizableHandler,w=void 0===Z||Z,z=(0,c.N2)(e),E=(0,o.useRef)(null),P=function(r){r===E.current&&(0,c.j8)(e,"gridResize")};(0,o.useImperativeHandle)(r,(function(){return{el:E.current}}));var A=m,C=(0,c.AK)(t,(n={col:"auto"===h},(0,i.Z)(n,"col-".concat(h),"auto"!==h),(0,i.Z)(n,"xsmall-".concat(y),y),(0,i.Z)(n,"small-".concat(b),b),(0,i.Z)(n,"medium-".concat(g),g),(0,i.Z)(n,"large-".concat(k),k),(0,i.Z)(n,"xlarge-".concat(j),j),(0,i.Z)(n,"resizable",O),(0,i.Z)(n,"resizable-fixed",x),(0,i.Z)(n,"resizable-absolute",N),n),(0,l.bG)(e));return(0,o.useEffect)((function(){return(0,s.Ep)((function(){s.f7.on("gridResize",P)})),function(){s.f7.off("gridResize",P)}})),o.createElement(A,f({id:a,style:d,className:C,ref:E},z,{onClick:function(r){(0,c.j8)(e,"click",r)}}),u,O&&w&&o.createElement("span",{className:"resize-handler"}))}));d.displayName="f7-col";var u=d;function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}var m=(0,o.forwardRef)((function(e,r){var n=e.className,t=e.id,a=e.style,i=e.children,f=e.tag,d=void 0===f?"div":f,u=e.noGap,m=e.resizable,v=e.resizableFixed,h=e.resizableAbsolute,y=e.resizableHandler,b=void 0===y||y,g=(0,c.N2)(e),k=(0,o.useRef)(null),j=function(r){r===k.current&&(0,c.j8)(e,"gridResize")};(0,o.useImperativeHandle)(r,(function(){return{el:k.current}})),(0,o.useEffect)((function(){return(0,s.Ep)((function(){s.f7.on("gridResize",j)})),function(){s.f7.off("gridResize",j)}}));var O=d,x=(0,c.AK)(n,"row",{"no-gap":u,resizable:m,"resizable-fixed":v,"resizable-absolute":h},(0,l.bG)(e));return o.createElement(O,p({id:t,style:a,className:x,ref:k},g,{onClick:function(r){(0,c.j8)(e,"click",r)}}),i,m&&b&&o.createElement("span",{className:"resize-handler"}))}));m.displayName="f7-row";var v=m,h=n(203),y=n(135),b=n(8169),g=n(1555),k=n(4138),j=n(7026),O=n(9553),x=(n(3294),n(184)),N="https://pokeapi.co/api/v2/pokemon?limit=5",Z='<i class="icon f7-icons color-orange" style="font-size: 35px;">exclamationmark</i>',w=function(e){var r=e.myPokemonList,n=e.f7router,i=(0,o.useState)(!0),c=(0,a.Z)(i,2),l=c[0],f=c[1],d=(0,o.useState)([]),p=(0,a.Z)(d,2),m=p[0],w=p[1],z=(0,o.useCallback)((function(e){for(var r=0;r<e.length;r++)fetch(e[r].url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.sprites.length<=0?(s.f7.dialog.alert("Data from Pokeapi can't be processed",Z),f(!1),void console.error("error: sprites from pokeapi is not an array\nsprites:",e.sprites)):!Array.isArray(e.moves)||e.moves.length<=0?(s.f7.dialog.alert("Data from Pokeapi can't be processed",Z),f(!1),void console.error("error: moves from pokeapi is not an array\nmoves:",e.moves)):!Array.isArray(e.types)||e.types.length<=0?(s.f7.dialog.alert("Data from Pokeapi can't be processed",Z),f(!1),void console.error("error: types from pokeapi is not an array\ntypes:",e.types)):void w((function(r){return[].concat((0,t.Z)(r),[{title:e.name,subtitle:e.id,slot:"media",src:e.sprites.other.dream_world.front_default,width:"44",moves:e.moves,types:e.types,alt:"artwork of ".concat(e.name)}])}))})).catch((function(e){s.f7.dialog.alert("Pokeapi error",Z),f(!1),console.error("error:",e)}))}),[]),E=(0,o.useState)(!0),P=(0,a.Z)(E,2),A=P[0],C=P[1];(0,o.useEffect)((function(){fetch(N,{method:"GET"}).then((function(e){return e.json()})).then((function(e){if(C(!1),Array.isArray(e.results)&&e.results.length>0)return console.info("info: render pokemon data from",N),N=e.next,void z(e.results);s.f7.dialog.alert("Data from Pokeapi can't be processed",Z),f(!1),console.error("error: results from pokeapi is not an array")})).catch((function(e){s.f7.dialog.alert("Pokeapi error",Z),C(!1),f(!1),console.error("error:",e)}))}),[A,r,z]);var R=(0,o.useState)([]),S=(0,a.Z)(R,2),G=S[0],H=S[1];(0,o.useEffect)((function(){for(var e=[],t=function(t){e.push((0,x.jsx)(u,{width:"100",medium:"50",large:"25",xlarge:"20",children:(0,x.jsxs)(h.Z,{className:"pokemon-card-header-pic",children:[(0,x.jsx)(y.Z,{className:"no-border",valign:"bottom",style:{backgroundImage:"url(".concat(m[t].src,")"),height:"200px"}}),(0,x.jsx)(b.Z,{children:(0,x.jsx)("h1",{children:m[t].title.charAt(0).toUpperCase()+m[t].title.slice(1)})}),(0,x.jsx)(g.Z,{children:(0,x.jsx)(k.Z,{onClick:function(){n.navigate("/detail/",{props:{myPokemonList:r,title:m[t].title.charAt(0).toUpperCase()+m[t].title.slice(1),src:m[t].src,moves:m[t].moves,types:m[t].types}})},children:(0,x.jsx)("h3",{children:"Detail"})})})]})},m[t].subtitle))},a=0;a<m.length;a++)t(a);H(e)}),[n,r,m]);var I=(0,o.useCallback)((function(){A||C(!0)}),[A]);return(0,x.jsxs)(j.Z,{name:"list",infinite:!0,infiniteDistance:50,infinitePreloader:l,onInfinite:I,onPageAfterOut:function(){N="https://pokeapi.co/api/v2/pokemon?limit=5"},children:[(0,x.jsx)(O.Z,{title:"Pokemon List",children:(0,x.jsx)(k.Z,{slot:"right",onClick:function(){n.navigate("/mypokemon/",{props:{myPokemonList:r}})},children:"My Pokemon"})}),(0,x.jsx)(v,{children:G})]})}},3294:function(){},8169:function(e,r,n){var t=n(2791),a=n(9486),o=n(1423);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}var c=(0,t.forwardRef)((function(e,r){var n=e.className,c=e.id,l=e.style,s=e.children,f=e.padding,d=void 0===f||f,u=(0,a.N2)(e),p=(0,t.useRef)(null);(0,t.useImperativeHandle)(r,(function(){return{el:p.current}}));var m=(0,a.AK)(n,"card-content",{"card-content-padding":d},(0,o.bG)(e));return t.createElement("div",i({id:c,style:l,className:m,ref:p},u),s)}));c.displayName="f7-card-content",r.Z=c},1555:function(e,r,n){var t=n(2791),a=n(9486),o=n(1423);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}var c=(0,t.forwardRef)((function(e,r){var n=e.className,c=e.id,l=e.style,s=e.children,f=(0,a.N2)(e),d=(0,t.useRef)(null);(0,t.useImperativeHandle)(r,(function(){return{el:d.current}}));var u=(0,a.AK)(n,"card-footer",(0,o.bG)(e));return t.createElement("div",i({id:c,style:l,className:u,ref:d},f),s)}));c.displayName="f7-card-footer",r.Z=c},135:function(e,r,n){var t=n(2791),a=n(9486),o=n(1423);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}var c=(0,t.forwardRef)((function(e,r){var n=e.className,c=e.id,l=e.style,s=e.children,f=(0,a.N2)(e),d=(0,t.useRef)(null);(0,t.useImperativeHandle)(r,(function(){return{el:d.current}}));var u=(0,a.AK)(n,"card-header",(0,o.bG)(e));return t.createElement("div",i({id:c,style:l,className:u,ref:d},f),s)}));c.displayName="f7-card-header",r.Z=c},203:function(e,r,n){var t=n(2791),a=n(8932),o=n(135),i=n(8169),c=n(1555),l=n(9486),s=n(1423),f=n(6010),d=n(6237);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}var p=(0,t.forwardRef)((function(e,r){var n,p,m,v=e.className,h=e.id,y=e.style,b=e.title,g=e.content,k=e.footer,j=e.padding,O=e.outline,x=e.expandable,N=e.expandableAnimateWidth,Z=e.expandableOpened,w=e.animate,z=e.hideNavbarOnOpen,E=e.hideToolbarOnOpen,P=e.hideStatusbarOnOpen,A=e.scrollableEl,C=e.swipeToClose,R=e.closeByBackdropClick,S=e.backdrop,G=e.backdropEl,H=e.noShadow,I=e.noBorder,B=(0,l.N2)(e),D=(0,t.useRef)(null),K=function(){D.current&&f.f7.card.open(D.current)},L=function(){D.current&&f.f7.card.close(D.current)},T=function(r,n){D.current===r&&(0,l.j8)(e,"cardBeforeOpen",r,n)},F=function(r){D.current===r&&(0,l.j8)(e,"cardOpen",r)},U=function(r,n){D.current===r&&(0,l.j8)(e,"cardOpened",r,n)},_=function(r){D.current===r&&(0,l.j8)(e,"cardClose",r)},J=function(r,n){D.current===r&&(0,l.j8)(e,"cardClosed",r,n)},M=function(){f.f7.off("cardBeforeOpen",T),f.f7.off("cardOpen",F),f.f7.off("cardOpened",U),f.f7.off("cardClose",_),f.f7.off("cardClosed",J)};(0,a.L)((function(){x&&D.current&&(0,f.Ep)((function(){x&&Z&&f.f7.card.open(D.current,!1)}))}),[]),(0,a.L)((function(){return x&&D.current&&(0,f.Ep)((function(){f.f7.on("cardBeforeOpen",T),f.f7.on("cardOpen",F),f.f7.on("cardOpened",U),f.f7.on("cardClose",_),f.f7.on("cardClosed",J)})),M})),(0,d.G)(Z,(function(e){e?K():L()})),(0,t.useImperativeHandle)(r,(function(){return{el:D.current,open:K,close:L}}));var W=(0,l.AK)(v,"card",{"card-outline":O,"card-expandable":x,"card-expandable-animate-width":N,"no-shadow":H,"no-border":I},(0,s.bG)(e)),q=(0,l.FJ)(e);return(b||q.header)&&(n=t.createElement(o.Z,null,b,q.header)),(g||q.content)&&(p=t.createElement(i.Z,{padding:j},g,q.content)),(k||q.footer)&&(m=t.createElement(c.Z,null,k,q.footer)),t.createElement("div",u({id:h,style:y,className:W,"data-animate":"undefined"===typeof w?w:w.toString(),"data-hide-navbar-on-open":"undefined"===typeof z?z:z.toString(),"data-hide-toolbar-on-open":"undefined"===typeof E?E:E.toString(),"data-hide-statusbar-on-open":"undefined"===typeof P?P:P.toString(),"data-scrollable-el":A,"data-swipe-to-close":"undefined"===typeof C?C:C.toString(),"data-close-by-backdrop-click":"undefined"===typeof R?R:R.toString(),"data-backdrop":"undefined"===typeof S?S:S.toString(),"data-backdrop-el":G,ref:D},B),n,p,m,q.default)}));p.displayName="f7-card",r.Z=p}}]);
//# sourceMappingURL=311.07f70b23.chunk.js.map