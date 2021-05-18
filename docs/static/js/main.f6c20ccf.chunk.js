(this["webpackJsonpregex-tool"]=this["webpackJsonpregex-tool"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"selectOperations",(function(){return M})),n.d(a,"selectOperationIds",(function(){return W})),n.d(a,"selectOperation",(function(){return B})),n.d(a,"selectOperationPattern",(function(){return K})),n.d(a,"selectOperationFlags",(function(){return J})),n.d(a,"selectOperationListFormat",(function(){return V})),n.d(a,"selectOperationReplace",(function(){return q})),n.d(a,"selectOperationColor",(function(){return G})),n.d(a,"selectInput",(function(){return z})),n.d(a,"selectFocus",(function(){return Q}));var r,c=n(1),o=n.n(c),i=n(15),s=n.n(i),l=(n(36),n(2)),u=n(3),p=(n(37),n(0)),d=function(){return Object(p.jsx)("nav",{className:"top-nav",children:Object(p.jsxs)("ul",{className:"top-nav__list",children:[Object(p.jsx)("li",{className:"top-nav__item top-nav__item--title",children:Object(p.jsx)("h1",{className:"top-nav__title",children:"samchencode"})}),Object(p.jsxs)(l.b,{path:"/match",children:[Object(p.jsx)("li",{className:"top-nav__item",children:Object(p.jsx)(u.b,{to:"/match/list",children:"List Matches"})}),Object(p.jsx)("li",{className:"top-nav__item",children:Object(p.jsx)(u.b,{to:"/match/replace",children:"Replace"})})]})]})})},j=(n(44),function(){return Object(p.jsx)(l.b,{path:"/match",children:Object(p.jsx)("nav",{className:"bottom-nav",children:Object(p.jsxs)("ul",{className:"bottom-nav__list",children:[Object(p.jsx)("li",{className:"bottom-nav__item",children:Object(p.jsxs)(u.b,{to:"/match",children:[Object(p.jsx)("i",{className:"bottom-nav__icon far fa-file-alt"}),Object(p.jsx)("div",{className:"bottom-nav__label",children:"Input"})]})}),Object(p.jsx)("li",{className:"bottom-nav__item",children:Object(p.jsxs)(u.b,{to:"/match/list",children:[Object(p.jsx)("i",{className:"bottom-nav__icon fas fa-clipboard-list"}),Object(p.jsx)("div",{className:"bottom-nav__label",children:"List"})]})}),Object(p.jsx)("li",{className:"bottom-nav__item",children:Object(p.jsxs)(u.b,{to:"/match/replace",children:[Object(p.jsx)("i",{className:"bottom-nav__icon fas fa-random"}),Object(p.jsx)("div",{className:"bottom-nav__label",children:"Replace"})]})})]})})})}),f=(n(28),function(e){var t=e.onClick;return Object(p.jsx)("li",{className:"pattern-input__row pattern-input__row--full",children:Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),t()},children:Object(p.jsx)("i",{className:"fas fa-plus"})})})}),b=n(13),h=n(8),m=(n(45),["d","g","i","m","s","u","y"]),O=function(e){var t=e.visible,n=e.flags,a=e.onChangeFlags,r=m.map((function(e){return n.includes(e)})),o=Object(c.useState)(r),i=Object(h.a)(o,2),s=i[0],l=i[1],u=(""+Math.random()).slice(2);return Object(p.jsx)("div",{className:["flag-selector",t?"flag-selector--visible":""].join(" "),children:Object(p.jsx)("ul",{className:"flag-selector__list",children:m.map((function(e,t){return Object(p.jsxs)("li",{className:"flag-selector__item",children:[Object(p.jsx)("input",{type:"checkbox",className:"flag-selector__checkbox",id:"flag-selector__checkbox--"+e+u,checked:s[t],onClick:function(e){return e.stopPropagation()},onChange:function(){return function(e){var t=s.slice();t[e]=!t[e],l(t);var n=m.filter((function(e,n){return t[n]}));a(n)}(t)}}),Object(p.jsx)("label",{htmlFor:"flag-selector__checkbox--"+e+u,className:"flag-selector__label",children:e})]},e)}))})})};n(46);!function(e){e[e.PATTERN_ONLY=0]="PATTERN_ONLY",e[e.PATTERN_LIST=1]="PATTERN_LIST",e[e.PATTERN_REPLACE=2]="PATTERN_REPLACE"}(r||(r={}));var v,x=function(e){var t=e.type,n=e.pattern,a=e.flags,o=e.listFormat,i=e.replace,s=e.color,l=e.focus,u=e.onClick,d=e.onClickRemove,j=e.onChangePattern,f=e.onChangeFlags,m=e.onChangeListFormat,v=e.onChangeReplace,x=t===r.PATTERN_LIST,g=x?o:i,_=x?m:v,N=Object(c.useState)(!1),y=Object(h.a)(N,2),T=y[0],R=y[1];return Object(p.jsxs)("li",{className:"pattern-input__row",onClick:u,style:Object(b.a)({},l&&{boxShadow:"inset 0 0 0px 2px ".concat(s)}),children:[Object(p.jsx)("i",{className:"pattern-input__color-indicator",style:{background:s}}),Object(p.jsxs)("div",{className:"pattern-input__input-group pattern-input__input-group--match",children:[Object(p.jsx)("label",{htmlFor:"match-pattern-1",children:"Regex Pattern"}),Object(p.jsxs)("div",{className:"pattern-input__regex",children:["/",Object(p.jsx)("input",{id:"match-pattern-1",type:"text",placeholder:"<Regex Pattern Here>",value:n,onChange:function(e){return j(e.target.value)}}),"/",Object(p.jsxs)("span",{className:"pattern-input__flag",children:[Object(p.jsx)("span",{onClick:function(){return R(!T)},children:a.join("")}),Object(p.jsx)(O,{visible:T,flags:a,onChangeFlags:f})]}),Object(p.jsx)("div",{className:"underline"})]})]}),t!==r.PATTERN_ONLY&&Object(p.jsxs)("div",{className:"pattern-input__input-group pattern-input__input-group--operation",children:[Object(p.jsx)("label",{htmlFor:"operation-pattern-1",children:"Regex Operation"}),Object(p.jsx)("input",{type:"text",id:"operation-pattern-1",placeholder:x?"<List Formatting Here>":"<Replace-With Here>",value:g,onChange:function(e){return _(e.target.value)}})]}),Object(p.jsx)("button",{className:"button--transparent",onClick:function(e){e.preventDefault(),e.stopPropagation(),d()},children:Object(p.jsx)("i",{className:"fas fa-times"})})]})},g=n(12),_=function(){return Object(g.b)()},N=g.c,y=n(9),T=function(){for(var e=""+Math.floor(16777215*Math.random()).toString(16);e.length<6;)e="0"+e;return"#"+e},R={id:1,pattern:".*",flags:["g"],listFormat:"[ $& ]",replace:"$&",color:"#ffd700"},F={operations:[R],input:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremque.",focus:0},C=function(e,t){return e.operations.find((function(e){return e.id===t}))},P=Object(y.b)({name:"pattern",initialState:F,reducers:{add:function(e){var t=function(e){return Object(b.a)(Object(b.a)({},R),{},{id:e,color:T()})}((""+Math.random()).slice(2));e.operations.push(t),e.focus=e.operations.length-1},remove:function(e,t){var n=t.payload.id,a=e.operations.findIndex((function(e){return e.id===n})),r=a===e.operations.length-1;(a===e.focus&&r||a<e.focus)&&e.focus--,e.operations.splice(a,1)},move:function(e,t){var n=t.payload,a=n.id,r=n.toIdx,c=C(e,a);if(r>e.operations.length-1||r<0)throw Error("move out of bounds");if(c){var o=e.operations.indexOf(c);r!==o&&(e.operations.splice(o,1),e.operations.splice(r,0,c),e.focus=r)}},setPattern:function(e,t){var n=t.payload,a=n.id,r=n.pattern,c=C(e,a);c&&(c.pattern=r)},setFlags:function(e,t){var n=t.payload,a=n.id,r=n.flags,c=C(e,a);c&&(c.flags=r)},setListFormat:function(e,t){var n=t.payload,a=n.id,r=n.listFormat,c=C(e,a);c&&(c.listFormat=r)},setReplace:function(e,t){var n=t.payload,a=n.id,r=n.replace,c=C(e,a);c&&(c.replace=r)},setInput:function(e,t){e.input=t.payload.value},setFocus:function(e,t){e.focus=t.payload.idx}}}),I=P.actions,E=I.add,L=I.remove,k=I.move,S=I.setPattern,w=I.setFlags,A=I.setListFormat,U=I.setReplace,$=I.setInput,Y=I.setFocus,D=P.reducer,H=n(17),M=function(e){return e.pattern.operations},W=Object(H.a)(M,(function(e){return e.map((function(e){return e.id}))})),B=function(e,t){return e.pattern.operations.find((function(e){return e.id===t}))},K=Object(H.a)(B,(function(e){return null===e||void 0===e?void 0:e.pattern})),J=Object(H.a)(B,(function(e){return null===e||void 0===e?void 0:e.flags})),V=Object(H.a)(B,(function(e){return null===e||void 0===e?void 0:e.listFormat})),q=Object(H.a)(B,(function(e){return null===e||void 0===e?void 0:e.replace})),G=Object(H.a)(B,(function(e){return null===e||void 0===e?void 0:e.color})),z=function(e){return e.pattern.input},Q=function(e){return e.pattern.focus},X=n(21),Z=function(e){var t=e.input;return e.transforms.reduce((function(e,n){var a,r,c=n.formatter,o=n.pattern,i=n.flags,s=n.format,l=e[e.length-1],u=null!==(a=null===l||void 0===l?void 0:l.result)&&void 0!==a?a:t,p=null;try{r=c(o,i,u,s)}catch(d){p=d,r=d.message}return[].concat(Object(X.a)(e),[{result:r,error:p}])}),[])},ee={add:E,remove:L,move:k,setPattern:S,setFlags:w,setListFormat:A,setReplace:U,setInput:$,setFocus:Y},te=(n(47),ee.add),ne=ee.remove,ae=ee.setPattern,re=ee.setListFormat,ce=ee.setReplace,oe=ee.setFocus,ie=ee.setFlags,se=a.selectOperations,le=a.selectFocus,ue=function(e){var t=e.type,n=N(se),a=_(),r=N(le);return Object(p.jsx)("form",{className:"pattern-input",children:Object(p.jsxs)("ul",{className:"pattern-input__list",children:[n.map((function(e,n){var c=e.id,o=e.pattern,i=e.flags,s=e.listFormat,l=e.replace,u=e.color;return Object(p.jsx)(x,{type:t,pattern:o,flags:i,listFormat:s,replace:l,color:u,focus:r===n,onClick:function(){return a(oe({idx:n}))},onClickRemove:function(){return a(ne({id:c}))},onChangePattern:function(e){a(ae({id:c,pattern:e}))},onChangeFlags:function(e){a(ie({id:c,flags:e}))},onChangeListFormat:function(e){return a(re({id:c,listFormat:e}))},onChangeReplace:function(e){return a(ce({id:c,replace:e}))}},c)})),Object(p.jsx)(f,{onClick:function(){return a(te())}})]})})};n(29);!function(e){e[e.INPUT=0]="INPUT",e[e.OUTPUT=1]="OUTPUT"}(v||(v={}));var pe=o.a.forwardRef((function(e,t){var n=e.type,a=e.value,r=e.placeholder,c=e.onChange,o=e.onScroll,i=e.before,s=e.after,l=e.readOnly,u=n===v.INPUT;return Object(p.jsxs)("div",{className:["text-display",u?"text-display--input":"text-display--output"].join(" "),children:[Object(p.jsx)("h3",{className:"text-display__label",children:u?"Input":"Output"}),Object(p.jsxs)("div",{className:"text-display__content",children:[i,Object(p.jsx)("textarea",{className:"text-display__top",ref:t,placeholder:r,readOnly:!u||l,onScroll:o,onChange:c&&function(e){return c(e.target.value)},value:a})]}),s]})})),de=n(30),je=function(e){return e.replace(/\\b/g,"\b").replace(/\\f/g,"\f").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"\t").replace(/\\v/g,"\v")},fe=function(e,t,n){if(""===e)return[];e=je(e);var a,r=new RegExp(e,t.join(""));if(t.indexOf("g")>-1)a=n.matchAll(r);else{var c=r.exec(n);if(null===c)return[];a=[c]}return Array.from(a,(function(e){return{startIdx:e.index,endIdx:e[0].length+e.index,input:e.input,match:Object(X.a)(e)}}))},be=function(e,t,n,a){e=je(e),a=je(a);var r=new RegExp(e,t.join(""));return n.replace(r,a)},he=function(e,t,n,a){return e=je(e),a=je(a),fe(e,t,n).map((function(e){var t=Object(de.a)(e.match),r=t[0],c=t.slice(1),o=e.startIdx,i=e.endIdx;return a.replace(/\$(&|\d{1,2}|`|'|\$)/g,(function(e,t){return"$&"===e?r:!isNaN(Number.parseFloat(t))&&c[Number.parseInt(t)-1]?c[Number.parseInt(t)-1]:"$`"===e?n.slice(0,o):"$'"===e?n.slice(i):"$$"===e?"$":e}))})).join("")},me=n(31);var Oe,ve=function(e,t){var n,a=[],r=0,c=Object(me.a)(t);try{for(c.s();!(n=c.n()).done;){var o=Object(h.a)(n.value,2),i=o[0],s=o[1];r<i&&a.push({value:e.slice(r,i),inRange:!1}),a.push({value:e.slice(i,s),inRange:!0}),r=s}}catch(l){c.e(l)}finally{c.f()}return r<e.length&&a.push({value:e.slice(r,e.length),inRange:!1}),a},xe=(n(48),o.a.forwardRef((function(e,t){var n=e.highlightRanges,a=e.highlightColor;return Object(p.jsx)("div",{className:"text-display__highlight-overlay",ref:t,children:n.map((function(e,t){var n=e.inRange,r=e.value;return n?Object(p.jsx)("mark",{style:{background:a},children:r},t):Object(p.jsx)("span",{children:r},t)}))})}))),ge=function(e){var t=e.value,n=e.pattern,a=e.flags,r=e.color,o=e.onChange,i=e.readOnly,s=[];try{s=fe(n,a,t)}catch(j){s=[]}var l=ve(t,s.map((function(e){return[e.startIdx,e.endIdx]}))),u=Object(c.useRef)(null),d=Object(c.useRef)(null);return Object(p.jsx)(pe,{type:v.INPUT,value:t,placeholder:"Input text to search here.",ref:d,onChange:o,onScroll:function(){var e=u.current,t=d.current;e.scrollTo(t.scrollLeft,t.scrollTop)},readOnly:i,before:Object(p.jsx)(xe,{ref:u,highlightRanges:l,highlightColor:null!==r&&void 0!==r?r:"#FFFFFF"})})},_e=n(14),Ne=n.n(_e),ye=n(26),Te=function(){var e=Object(ye.a)(Ne.a.mark((function e(t){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(ye.a)(Ne.a.mark((function e(t){var n;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.createElement("textarea"),document.body.appendChild(n),n.value=""+t,n.select();try{document.execCommand("copy")}finally{document.body.removeChild(n)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(e){return navigator.clipboard?Te(e):Re(e)},Ce=function(e){var t=e.value;return Object(p.jsx)("button",{className:"text-display__button--copy",onClick:function(){return Fe(t)},children:"Copy"})},Pe=function(e){var t=e.value;return Object(p.jsx)(pe,{type:v.OUTPUT,value:t,after:""!==t&&Object(p.jsx)(Ce,{value:t}),placeholder:"Results appear here."})},Ie=a.selectOperations,Ee=a.selectInput,Le=a.selectFocus,ke=ee.setInput;!function(e){e[e.LIST=0]="LIST",e[e.REPLACE=1]="REPLACE",e[e.INPUT_ONLY=2]="INPUT_ONLY"}(Oe||(Oe={}));var Se=function(e){var t,n,a=e.type,r=_(),c=a===Oe.LIST,o=N(Ee),i=N(Le),s=N(Ie),l=Z({input:o,transforms:s.map((function(e){return{formatter:c?he:be,pattern:e.pattern,flags:e.flags,format:c?e.listFormat:e.replace}}))}),u=null!==(t=null===(n=l[i])||void 0===n?void 0:n.result)&&void 0!==t?t:o,d=s[i],j=[-1,0].includes(i)?o:l[i-1].result;return Object(p.jsxs)("div",{className:"text-display__container",children:[Object(p.jsx)(ge,{value:j,onChange:function(e){return r(ke({value:e}))},pattern:null===d||void 0===d?void 0:d.pattern,flags:null===d||void 0===d?void 0:d.flags,color:null===d||void 0===d?void 0:d.color,readOnly:![-1,0].includes(i)}),a!==Oe.INPUT_ONLY&&Object(p.jsx)(Pe,{value:u})]})},we=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ue,{type:r.PATTERN_ONLY}),Object(p.jsx)(Se,{type:Oe.INPUT_ONLY})]})},Ae=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ue,{type:r.PATTERN_LIST}),Object(p.jsx)(Se,{type:Oe.LIST})]})},Ue=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ue,{type:r.PATTERN_REPLACE}),Object(p.jsx)(Se,{type:Oe.REPLACE})]})},$e=(n(50),Object(l.g)((function(e){return Object(p.jsxs)("div",{className:"not-found",children:[Object(p.jsx)("i",{className:"not-found__icon fas fa-heart-broken"}),Object(p.jsxs)("h3",{className:"not-found__title",children:["Oops we couldn't find",Object(p.jsx)("code",{children:e.location.pathname})]}),Object(p.jsx)(u.b,{to:"/",children:"Go Home"})]})}))),Ye=function(){return Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/match/",component:we}),Object(p.jsx)(l.b,{path:"/match/list",component:Ae}),Object(p.jsx)(l.b,{path:"/match/replace",component:Ue}),Object(p.jsx)(l.b,{component:$e})]})},De=function(){return Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",to:"/match"}),Object(p.jsx)(l.b,{path:"/match",component:Ye}),Object(p.jsx)(l.b,{component:$e})]})};n(51);var He,Me=function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(d,{}),Object(p.jsx)(De,{}),Object(p.jsx)(j,{})]})},We=Object(y.a)({reducer:{pattern:D}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be="development"!==(null===(He=Object({NODE_ENV:"production",PUBLIC_URL:"/regex-tool",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}))||void 0===He?void 0:He.NODE_ENV);s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(g.a,{store:We,children:Object(p.jsx)(u.a,{basename:Be?"/regex-tool":"/",children:Object(p.jsx)(Me,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.f6c20ccf.chunk.js.map