var iu=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Ug=iu((Ho,Mr)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */(function(i,e){typeof Mr=="object"&&typeof Mr.exports=="object"?Mr.exports=i.document?e(i,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(i)})(typeof window<"u"?window:void 0,function(i,e){var t=[],n=Object.getPrototypeOf,r=t.slice,a=t.flat?function(s){return t.flat.call(s)}:function(s){return t.concat.apply([],s)},c=t.push,l=t.indexOf,h={},p=h.toString,m=h.hasOwnProperty,_=m.toString,x=_.call(Object),y={},S=function(s){return typeof s=="function"&&typeof s.nodeType!="number"&&typeof s.item!="function"},L=function(s){return s!=null&&s===s.window},g=i.document,v={type:!0,src:!0,nonce:!0,noModule:!0};function O(s,o,f){var d,M,A=(f=f||g).createElement("script");if(A.text=s,o)for(d in v)(M=o[d]||o.getAttribute&&o.getAttribute(d))&&A.setAttribute(d,M);f.head.appendChild(A).parentNode.removeChild(A)}function U(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?h[p.call(s)]||"object":typeof s}var N="3.6.0",u=function(s,o){return new u.fn.init(s,o)};function X(s){var o=!!s&&"length"in s&&s.length,f=U(s);return!S(s)&&!L(s)&&(f==="array"||o===0||typeof o=="number"&&0<o&&o-1 in s)}u.fn=u.prototype={jquery:N,constructor:u,length:0,toArray:function(){return r.call(this)},get:function(s){return s==null?r.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var o=u.merge(this.constructor(),s);return o.prevObject=this,o},each:function(s){return u.each(this,s)},map:function(s){return this.pushStack(u.map(this,function(o,f){return s.call(o,f,o)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(s,o){return(o+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(s,o){return o%2}))},eq:function(s){var o=this.length,f=+s+(s<0?o:0);return this.pushStack(0<=f&&f<o?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:t.sort,splice:t.splice},u.extend=u.fn.extend=function(){var s,o,f,d,M,A,w=arguments[0]||{},z=1,H=arguments.length,V=!1;for(typeof w=="boolean"&&(V=w,w=arguments[z]||{},z++),typeof w=="object"||S(w)||(w={}),z===H&&(w=this,z--);z<H;z++)if((s=arguments[z])!=null)for(o in s)d=s[o],o!=="__proto__"&&w!==d&&(V&&d&&(u.isPlainObject(d)||(M=Array.isArray(d)))?(f=w[o],A=M&&!Array.isArray(f)?[]:M||u.isPlainObject(f)?f:{},M=!1,w[o]=u.extend(V,A,d)):d!==void 0&&(w[o]=d));return w},u.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var o,f;return!(!s||p.call(s)!=="[object Object]")&&(!(o=n(s))||typeof(f=m.call(o,"constructor")&&o.constructor)=="function"&&_.call(f)===x)},isEmptyObject:function(s){var o;for(o in s)return!1;return!0},globalEval:function(s,o,f){O(s,{nonce:o&&o.nonce},f)},each:function(s,o){var f,d=0;if(X(s))for(f=s.length;d<f&&o.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(o.call(s[d],d,s[d])===!1)break;return s},makeArray:function(s,o){var f=o||[];return s!=null&&(X(Object(s))?u.merge(f,typeof s=="string"?[s]:s):c.call(f,s)),f},inArray:function(s,o,f){return o==null?-1:l.call(o,s,f)},merge:function(s,o){for(var f=+o.length,d=0,M=s.length;d<f;d++)s[M++]=o[d];return s.length=M,s},grep:function(s,o,f){for(var d=[],M=0,A=s.length,w=!f;M<A;M++)!o(s[M],M)!==w&&d.push(s[M]);return d},map:function(s,o,f){var d,M,A=0,w=[];if(X(s))for(d=s.length;A<d;A++)(M=o(s[A],A,f))!=null&&w.push(M);else for(A in s)(M=o(s[A],A,f))!=null&&w.push(M);return a(w)},guid:1,support:y}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=t[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,o){h["[object "+o+"]"]=o.toLowerCase()});var B=function(s){var o,f,d,M,A,w,z,H,V,te,he,Z,ne,Be,Ye,Ve,Ht,Jt,En,It="sizzle"+1*new Date,st=s.document,vn=0,bt=0,kt=os(),Br=os(),rs=os(),Tn=os(),Ii=function(C,F){return C===F&&(he=!0),0},Qi={}.hasOwnProperty,xn=[],er=xn.pop,Ln=xn.push,Gt=xn.push,bn=xn.slice,An=function(C,F){for(var G=0,le=C.length;G<le;G++)if(C[G]===F)return G;return-1},Zn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ot="[\\x20\\t\\r\\n\\f]",Rt="(?:\\\\[\\da-fA-F]{1,6}"+ot+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Qt="\\["+ot+"*("+Rt+")(?:"+ot+"*([*^$|!~]?=)"+ot+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Rt+"))|)"+ot+"*\\]",wn=":("+Rt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Qt+")*)|.*)\\)|)",Kt=new RegExp(ot+"+","g"),Cn=new RegExp("^"+ot+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ot+"+$","g"),tr=new RegExp("^"+ot+"*,"+ot+"*"),ss=new RegExp("^"+ot+"*([>+~]|"+ot+")"+ot+"*"),qc=new RegExp(ot+"|>"),Yc=new RegExp(wn),jc=new RegExp("^"+Rt+"$"),as={ID:new RegExp("^#("+Rt+")"),CLASS:new RegExp("^\\.("+Rt+")"),TAG:new RegExp("^("+Rt+"|[*])"),ATTR:new RegExp("^"+Qt),PSEUDO:new RegExp("^"+wn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ot+"*(even|odd|(([+-]|)(\\d*)n|)"+ot+"*(?:([+-]|)"+ot+"*(\\d+)|))"+ot+"*\\)|)","i"),bool:new RegExp("^(?:"+Zn+")$","i"),needsContext:new RegExp("^"+ot+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ot+"*((?:-\\d)?\\d*)"+ot+"*\\)|)(?=[^-]|$)","i")},Kc=/HTML$/i,Zc=/^(?:input|select|textarea|button)$/i,$c=/^h\d$/i,zr=/^[^{]+\{\s*\[native \w/,Jc=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,ri=new RegExp("\\\\[\\da-fA-F]{1,6}"+ot+"?|\\\\([^\\r\\n\\f])","g"),si=function(C,F){var G="0x"+C.slice(1)-65536;return F||(G<0?String.fromCharCode(G+65536):String.fromCharCode(G>>10|55296,1023&G|56320))},jo=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ko=function(C,F){return F?C==="\0"?"�":C.slice(0,-1)+"\\"+C.charCodeAt(C.length-1).toString(16)+" ":"\\"+C},Zo=function(){Z()},Qc=cs(function(C){return C.disabled===!0&&C.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Gt.apply(xn=bn.call(st.childNodes),st.childNodes),xn[st.childNodes.length].nodeType}catch{Gt={apply:xn.length?function(F,G){Ln.apply(F,bn.call(G))}:function(F,G){for(var le=F.length,Y=0;F[le++]=G[Y++];);F.length=le-1}}}function Nt(C,F,G,le){var Y,pe,ye,we,Oe,rt,Qe,it=F&&F.ownerDocument,yt=F?F.nodeType:9;if(G=G||[],typeof C!="string"||!C||yt!==1&&yt!==9&&yt!==11)return G;if(!le&&(Z(F),F=F||ne,Ye)){if(yt!==11&&(Oe=Jc.exec(C)))if(Y=Oe[1]){if(yt===9){if(!(ye=F.getElementById(Y)))return G;if(ye.id===Y)return G.push(ye),G}else if(it&&(ye=it.getElementById(Y))&&En(F,ye)&&ye.id===Y)return G.push(ye),G}else{if(Oe[2])return Gt.apply(G,F.getElementsByTagName(C)),G;if((Y=Oe[3])&&f.getElementsByClassName&&F.getElementsByClassName)return Gt.apply(G,F.getElementsByClassName(Y)),G}if(f.qsa&&!Tn[C+" "]&&(!Ve||!Ve.test(C))&&(yt!==1||F.nodeName.toLowerCase()!=="object")){if(Qe=C,it=F,yt===1&&(qc.test(C)||ss.test(C))){for((it=sa.test(C)&&oa(F.parentNode)||F)===F&&f.scope||((we=F.getAttribute("id"))?we=we.replace(jo,Ko):F.setAttribute("id",we=It)),pe=(rt=w(C)).length;pe--;)rt[pe]=(we?"#"+we:":scope")+" "+ls(rt[pe]);Qe=rt.join(",")}try{return Gt.apply(G,it.querySelectorAll(Qe)),G}catch{Tn(C,!0)}finally{we===It&&F.removeAttribute("id")}}}return H(C.replace(Cn,"$1"),F,G,le)}function os(){var C=[];return function F(G,le){return C.push(G+" ")>d.cacheLength&&delete F[C.shift()],F[G+" "]=le}}function zn(C){return C[It]=!0,C}function Hn(C){var F=ne.createElement("fieldset");try{return!!C(F)}catch{return!1}finally{F.parentNode&&F.parentNode.removeChild(F),F=null}}function aa(C,F){for(var G=C.split("|"),le=G.length;le--;)d.attrHandle[G[le]]=F}function $o(C,F){var G=F&&C,le=G&&C.nodeType===1&&F.nodeType===1&&C.sourceIndex-F.sourceIndex;if(le)return le;if(G){for(;G=G.nextSibling;)if(G===F)return-1}return C?1:-1}function eu(C){return function(F){return F.nodeName.toLowerCase()==="input"&&F.type===C}}function tu(C){return function(F){var G=F.nodeName.toLowerCase();return(G==="input"||G==="button")&&F.type===C}}function Jo(C){return function(F){return"form"in F?F.parentNode&&F.disabled===!1?"label"in F?"label"in F.parentNode?F.parentNode.disabled===C:F.disabled===C:F.isDisabled===C||F.isDisabled!==!C&&Qc(F)===C:F.disabled===C:"label"in F&&F.disabled===C}}function Ni(C){return zn(function(F){return F=+F,zn(function(G,le){for(var Y,pe=C([],G.length,F),ye=pe.length;ye--;)G[Y=pe[ye]]&&(G[Y]=!(le[Y]=G[Y]))})})}function oa(C){return C&&typeof C.getElementsByTagName<"u"&&C}for(o in f=Nt.support={},A=Nt.isXML=function(C){var F=C&&C.namespaceURI,G=C&&(C.ownerDocument||C).documentElement;return!Kc.test(F||G&&G.nodeName||"HTML")},Z=Nt.setDocument=function(C){var F,G,le=C?C.ownerDocument||C:st;return le!=ne&&le.nodeType===9&&le.documentElement&&(Be=(ne=le).documentElement,Ye=!A(ne),st!=ne&&(G=ne.defaultView)&&G.top!==G&&(G.addEventListener?G.addEventListener("unload",Zo,!1):G.attachEvent&&G.attachEvent("onunload",Zo)),f.scope=Hn(function(Y){return Be.appendChild(Y).appendChild(ne.createElement("div")),typeof Y.querySelectorAll<"u"&&!Y.querySelectorAll(":scope fieldset div").length}),f.attributes=Hn(function(Y){return Y.className="i",!Y.getAttribute("className")}),f.getElementsByTagName=Hn(function(Y){return Y.appendChild(ne.createComment("")),!Y.getElementsByTagName("*").length}),f.getElementsByClassName=zr.test(ne.getElementsByClassName),f.getById=Hn(function(Y){return Be.appendChild(Y).id=It,!ne.getElementsByName||!ne.getElementsByName(It).length}),f.getById?(d.filter.ID=function(Y){var pe=Y.replace(ri,si);return function(ye){return ye.getAttribute("id")===pe}},d.find.ID=function(Y,pe){if(typeof pe.getElementById<"u"&&Ye){var ye=pe.getElementById(Y);return ye?[ye]:[]}}):(d.filter.ID=function(Y){var pe=Y.replace(ri,si);return function(ye){var we=typeof ye.getAttributeNode<"u"&&ye.getAttributeNode("id");return we&&we.value===pe}},d.find.ID=function(Y,pe){if(typeof pe.getElementById<"u"&&Ye){var ye,we,Oe,rt=pe.getElementById(Y);if(rt){if((ye=rt.getAttributeNode("id"))&&ye.value===Y)return[rt];for(Oe=pe.getElementsByName(Y),we=0;rt=Oe[we++];)if((ye=rt.getAttributeNode("id"))&&ye.value===Y)return[rt]}return[]}}),d.find.TAG=f.getElementsByTagName?function(Y,pe){return typeof pe.getElementsByTagName<"u"?pe.getElementsByTagName(Y):f.qsa?pe.querySelectorAll(Y):void 0}:function(Y,pe){var ye,we=[],Oe=0,rt=pe.getElementsByTagName(Y);if(Y==="*"){for(;ye=rt[Oe++];)ye.nodeType===1&&we.push(ye);return we}return rt},d.find.CLASS=f.getElementsByClassName&&function(Y,pe){if(typeof pe.getElementsByClassName<"u"&&Ye)return pe.getElementsByClassName(Y)},Ht=[],Ve=[],(f.qsa=zr.test(ne.querySelectorAll))&&(Hn(function(Y){var pe;Be.appendChild(Y).innerHTML="<a id='"+It+"'></a><select id='"+It+"-\r\\' msallowcapture=''><option selected=''></option></select>",Y.querySelectorAll("[msallowcapture^='']").length&&Ve.push("[*^$]="+ot+`*(?:''|"")`),Y.querySelectorAll("[selected]").length||Ve.push("\\["+ot+"*(?:value|"+Zn+")"),Y.querySelectorAll("[id~="+It+"-]").length||Ve.push("~="),(pe=ne.createElement("input")).setAttribute("name",""),Y.appendChild(pe),Y.querySelectorAll("[name='']").length||Ve.push("\\["+ot+"*name"+ot+"*="+ot+`*(?:''|"")`),Y.querySelectorAll(":checked").length||Ve.push(":checked"),Y.querySelectorAll("a#"+It+"+*").length||Ve.push(".#.+[+~]"),Y.querySelectorAll("\\\f"),Ve.push("[\\r\\n\\f]")}),Hn(function(Y){Y.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var pe=ne.createElement("input");pe.setAttribute("type","hidden"),Y.appendChild(pe).setAttribute("name","D"),Y.querySelectorAll("[name=d]").length&&Ve.push("name"+ot+"*[*^$|!~]?="),Y.querySelectorAll(":enabled").length!==2&&Ve.push(":enabled",":disabled"),Be.appendChild(Y).disabled=!0,Y.querySelectorAll(":disabled").length!==2&&Ve.push(":enabled",":disabled"),Y.querySelectorAll("*,:x"),Ve.push(",.*:")})),(f.matchesSelector=zr.test(Jt=Be.matches||Be.webkitMatchesSelector||Be.mozMatchesSelector||Be.oMatchesSelector||Be.msMatchesSelector))&&Hn(function(Y){f.disconnectedMatch=Jt.call(Y,"*"),Jt.call(Y,"[s!='']:x"),Ht.push("!=",wn)}),Ve=Ve.length&&new RegExp(Ve.join("|")),Ht=Ht.length&&new RegExp(Ht.join("|")),F=zr.test(Be.compareDocumentPosition),En=F||zr.test(Be.contains)?function(Y,pe){var ye=Y.nodeType===9?Y.documentElement:Y,we=pe&&pe.parentNode;return Y===we||!(!we||we.nodeType!==1||!(ye.contains?ye.contains(we):Y.compareDocumentPosition&&16&Y.compareDocumentPosition(we)))}:function(Y,pe){if(pe){for(;pe=pe.parentNode;)if(pe===Y)return!0}return!1},Ii=F?function(Y,pe){if(Y===pe)return he=!0,0;var ye=!Y.compareDocumentPosition-!pe.compareDocumentPosition;return ye||(1&(ye=(Y.ownerDocument||Y)==(pe.ownerDocument||pe)?Y.compareDocumentPosition(pe):1)||!f.sortDetached&&pe.compareDocumentPosition(Y)===ye?Y==ne||Y.ownerDocument==st&&En(st,Y)?-1:pe==ne||pe.ownerDocument==st&&En(st,pe)?1:te?An(te,Y)-An(te,pe):0:4&ye?-1:1)}:function(Y,pe){if(Y===pe)return he=!0,0;var ye,we=0,Oe=Y.parentNode,rt=pe.parentNode,Qe=[Y],it=[pe];if(!Oe||!rt)return Y==ne?-1:pe==ne?1:Oe?-1:rt?1:te?An(te,Y)-An(te,pe):0;if(Oe===rt)return $o(Y,pe);for(ye=Y;ye=ye.parentNode;)Qe.unshift(ye);for(ye=pe;ye=ye.parentNode;)it.unshift(ye);for(;Qe[we]===it[we];)we++;return we?$o(Qe[we],it[we]):Qe[we]==st?-1:it[we]==st?1:0}),ne},Nt.matches=function(C,F){return Nt(C,null,null,F)},Nt.matchesSelector=function(C,F){if(Z(C),f.matchesSelector&&Ye&&!Tn[F+" "]&&(!Ht||!Ht.test(F))&&(!Ve||!Ve.test(F)))try{var G=Jt.call(C,F);if(G||f.disconnectedMatch||C.document&&C.document.nodeType!==11)return G}catch{Tn(F,!0)}return 0<Nt(F,ne,null,[C]).length},Nt.contains=function(C,F){return(C.ownerDocument||C)!=ne&&Z(C),En(C,F)},Nt.attr=function(C,F){(C.ownerDocument||C)!=ne&&Z(C);var G=d.attrHandle[F.toLowerCase()],le=G&&Qi.call(d.attrHandle,F.toLowerCase())?G(C,F,!Ye):void 0;return le!==void 0?le:f.attributes||!Ye?C.getAttribute(F):(le=C.getAttributeNode(F))&&le.specified?le.value:null},Nt.escape=function(C){return(C+"").replace(jo,Ko)},Nt.error=function(C){throw new Error("Syntax error, unrecognized expression: "+C)},Nt.uniqueSort=function(C){var F,G=[],le=0,Y=0;if(he=!f.detectDuplicates,te=!f.sortStable&&C.slice(0),C.sort(Ii),he){for(;F=C[Y++];)F===C[Y]&&(le=G.push(Y));for(;le--;)C.splice(G[le],1)}return te=null,C},M=Nt.getText=function(C){var F,G="",le=0,Y=C.nodeType;if(Y){if(Y===1||Y===9||Y===11){if(typeof C.textContent=="string")return C.textContent;for(C=C.firstChild;C;C=C.nextSibling)G+=M(C)}else if(Y===3||Y===4)return C.nodeValue}else for(;F=C[le++];)G+=M(F);return G},(d=Nt.selectors={cacheLength:50,createPseudo:zn,match:as,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(C){return C[1]=C[1].replace(ri,si),C[3]=(C[3]||C[4]||C[5]||"").replace(ri,si),C[2]==="~="&&(C[3]=" "+C[3]+" "),C.slice(0,4)},CHILD:function(C){return C[1]=C[1].toLowerCase(),C[1].slice(0,3)==="nth"?(C[3]||Nt.error(C[0]),C[4]=+(C[4]?C[5]+(C[6]||1):2*(C[3]==="even"||C[3]==="odd")),C[5]=+(C[7]+C[8]||C[3]==="odd")):C[3]&&Nt.error(C[0]),C},PSEUDO:function(C){var F,G=!C[6]&&C[2];return as.CHILD.test(C[0])?null:(C[3]?C[2]=C[4]||C[5]||"":G&&Yc.test(G)&&(F=w(G,!0))&&(F=G.indexOf(")",G.length-F)-G.length)&&(C[0]=C[0].slice(0,F),C[2]=G.slice(0,F)),C.slice(0,3))}},filter:{TAG:function(C){var F=C.replace(ri,si).toLowerCase();return C==="*"?function(){return!0}:function(G){return G.nodeName&&G.nodeName.toLowerCase()===F}},CLASS:function(C){var F=kt[C+" "];return F||(F=new RegExp("(^|"+ot+")"+C+"("+ot+"|$)"))&&kt(C,function(G){return F.test(typeof G.className=="string"&&G.className||typeof G.getAttribute<"u"&&G.getAttribute("class")||"")})},ATTR:function(C,F,G){return function(le){var Y=Nt.attr(le,C);return Y==null?F==="!=":!F||(Y+="",F==="="?Y===G:F==="!="?Y!==G:F==="^="?G&&Y.indexOf(G)===0:F==="*="?G&&-1<Y.indexOf(G):F==="$="?G&&Y.slice(-G.length)===G:F==="~="?-1<(" "+Y.replace(Kt," ")+" ").indexOf(G):F==="|="&&(Y===G||Y.slice(0,G.length+1)===G+"-"))}},CHILD:function(C,F,G,le,Y){var pe=C.slice(0,3)!=="nth",ye=C.slice(-4)!=="last",we=F==="of-type";return le===1&&Y===0?function(Oe){return!!Oe.parentNode}:function(Oe,rt,Qe){var it,yt,Xt,ct,en,sn,dn=pe!==ye?"nextSibling":"previousSibling",Ft=Oe.parentNode,$n=we&&Oe.nodeName.toLowerCase(),cn=!Qe&&!we,Zt=!1;if(Ft){if(pe){for(;dn;){for(ct=Oe;ct=ct[dn];)if(we?ct.nodeName.toLowerCase()===$n:ct.nodeType===1)return!1;sn=dn=C==="only"&&!sn&&"nextSibling"}return!0}if(sn=[ye?Ft.firstChild:Ft.lastChild],ye&&cn){for(Zt=(en=(it=(yt=(Xt=(ct=Ft)[It]||(ct[It]={}))[ct.uniqueID]||(Xt[ct.uniqueID]={}))[C]||[])[0]===vn&&it[1])&&it[2],ct=en&&Ft.childNodes[en];ct=++en&&ct&&ct[dn]||(Zt=en=0)||sn.pop();)if(ct.nodeType===1&&++Zt&&ct===Oe){yt[C]=[vn,en,Zt];break}}else if(cn&&(Zt=en=(it=(yt=(Xt=(ct=Oe)[It]||(ct[It]={}))[ct.uniqueID]||(Xt[ct.uniqueID]={}))[C]||[])[0]===vn&&it[1]),Zt===!1)for(;(ct=++en&&ct&&ct[dn]||(Zt=en=0)||sn.pop())&&!((we?ct.nodeName.toLowerCase()===$n:ct.nodeType===1)&&++Zt&&(cn&&((yt=(Xt=ct[It]||(ct[It]={}))[ct.uniqueID]||(Xt[ct.uniqueID]={}))[C]=[vn,Zt]),ct===Oe)););return(Zt-=Y)===le||Zt%le==0&&0<=Zt/le}}},PSEUDO:function(C,F){var G,le=d.pseudos[C]||d.setFilters[C.toLowerCase()]||Nt.error("unsupported pseudo: "+C);return le[It]?le(F):1<le.length?(G=[C,C,"",F],d.setFilters.hasOwnProperty(C.toLowerCase())?zn(function(Y,pe){for(var ye,we=le(Y,F),Oe=we.length;Oe--;)Y[ye=An(Y,we[Oe])]=!(pe[ye]=we[Oe])}):function(Y){return le(Y,0,G)}):le}},pseudos:{not:zn(function(C){var F=[],G=[],le=z(C.replace(Cn,"$1"));return le[It]?zn(function(Y,pe,ye,we){for(var Oe,rt=le(Y,null,we,[]),Qe=Y.length;Qe--;)(Oe=rt[Qe])&&(Y[Qe]=!(pe[Qe]=Oe))}):function(Y,pe,ye){return F[0]=Y,le(F,null,ye,G),F[0]=null,!G.pop()}}),has:zn(function(C){return function(F){return 0<Nt(C,F).length}}),contains:zn(function(C){return C=C.replace(ri,si),function(F){return-1<(F.textContent||M(F)).indexOf(C)}}),lang:zn(function(C){return jc.test(C||"")||Nt.error("unsupported lang: "+C),C=C.replace(ri,si).toLowerCase(),function(F){var G;do if(G=Ye?F.lang:F.getAttribute("xml:lang")||F.getAttribute("lang"))return(G=G.toLowerCase())===C||G.indexOf(C+"-")===0;while((F=F.parentNode)&&F.nodeType===1);return!1}}),target:function(C){var F=s.location&&s.location.hash;return F&&F.slice(1)===C.id},root:function(C){return C===Be},focus:function(C){return C===ne.activeElement&&(!ne.hasFocus||ne.hasFocus())&&!!(C.type||C.href||~C.tabIndex)},enabled:Jo(!1),disabled:Jo(!0),checked:function(C){var F=C.nodeName.toLowerCase();return F==="input"&&!!C.checked||F==="option"&&!!C.selected},selected:function(C){return C.parentNode&&C.parentNode.selectedIndex,C.selected===!0},empty:function(C){for(C=C.firstChild;C;C=C.nextSibling)if(C.nodeType<6)return!1;return!0},parent:function(C){return!d.pseudos.empty(C)},header:function(C){return $c.test(C.nodeName)},input:function(C){return Zc.test(C.nodeName)},button:function(C){var F=C.nodeName.toLowerCase();return F==="input"&&C.type==="button"||F==="button"},text:function(C){var F;return C.nodeName.toLowerCase()==="input"&&C.type==="text"&&((F=C.getAttribute("type"))==null||F.toLowerCase()==="text")},first:Ni(function(){return[0]}),last:Ni(function(C,F){return[F-1]}),eq:Ni(function(C,F,G){return[G<0?G+F:G]}),even:Ni(function(C,F){for(var G=0;G<F;G+=2)C.push(G);return C}),odd:Ni(function(C,F){for(var G=1;G<F;G+=2)C.push(G);return C}),lt:Ni(function(C,F,G){for(var le=G<0?G+F:F<G?F:G;0<=--le;)C.push(le);return C}),gt:Ni(function(C,F,G){for(var le=G<0?G+F:G;++le<F;)C.push(le);return C})}}).pseudos.nth=d.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[o]=eu(o);for(o in{submit:!0,reset:!0})d.pseudos[o]=tu(o);function Qo(){}function ls(C){for(var F=0,G=C.length,le="";F<G;F++)le+=C[F].value;return le}function cs(C,F,G){var le=F.dir,Y=F.next,pe=Y||le,ye=G&&pe==="parentNode",we=bt++;return F.first?function(Oe,rt,Qe){for(;Oe=Oe[le];)if(Oe.nodeType===1||ye)return C(Oe,rt,Qe);return!1}:function(Oe,rt,Qe){var it,yt,Xt,ct=[vn,we];if(Qe){for(;Oe=Oe[le];)if((Oe.nodeType===1||ye)&&C(Oe,rt,Qe))return!0}else for(;Oe=Oe[le];)if(Oe.nodeType===1||ye)if(yt=(Xt=Oe[It]||(Oe[It]={}))[Oe.uniqueID]||(Xt[Oe.uniqueID]={}),Y&&Y===Oe.nodeName.toLowerCase())Oe=Oe[le]||Oe;else{if((it=yt[pe])&&it[0]===vn&&it[1]===we)return ct[2]=it[2];if((yt[pe]=ct)[2]=C(Oe,rt,Qe))return!0}return!1}}function la(C){return 1<C.length?function(F,G,le){for(var Y=C.length;Y--;)if(!C[Y](F,G,le))return!1;return!0}:C[0]}function us(C,F,G,le,Y){for(var pe,ye=[],we=0,Oe=C.length,rt=F!=null;we<Oe;we++)(pe=C[we])&&(G&&!G(pe,le,Y)||(ye.push(pe),rt&&F.push(we)));return ye}function ca(C,F,G,le,Y,pe){return le&&!le[It]&&(le=ca(le)),Y&&!Y[It]&&(Y=ca(Y,pe)),zn(function(ye,we,Oe,rt){var Qe,it,yt,Xt=[],ct=[],en=we.length,sn=ye||function($n,cn,Zt){for(var kn=0,fs=cn.length;kn<fs;kn++)Nt($n,cn[kn],Zt);return Zt}(F||"*",Oe.nodeType?[Oe]:Oe,[]),dn=!C||!ye&&F?sn:us(sn,Xt,C,Oe,rt),Ft=G?Y||(ye?C:en||le)?[]:we:dn;if(G&&G(dn,Ft,Oe,rt),le)for(Qe=us(Ft,ct),le(Qe,[],Oe,rt),it=Qe.length;it--;)(yt=Qe[it])&&(Ft[ct[it]]=!(dn[ct[it]]=yt));if(ye){if(Y||C){if(Y){for(Qe=[],it=Ft.length;it--;)(yt=Ft[it])&&Qe.push(dn[it]=yt);Y(null,Ft=[],Qe,rt)}for(it=Ft.length;it--;)(yt=Ft[it])&&-1<(Qe=Y?An(ye,yt):Xt[it])&&(ye[Qe]=!(we[Qe]=yt))}}else Ft=us(Ft===we?Ft.splice(en,Ft.length):Ft),Y?Y(null,we,Ft,rt):Gt.apply(we,Ft)})}function ua(C){for(var F,G,le,Y=C.length,pe=d.relative[C[0].type],ye=pe||d.relative[" "],we=pe?1:0,Oe=cs(function(it){return it===F},ye,!0),rt=cs(function(it){return-1<An(F,it)},ye,!0),Qe=[function(it,yt,Xt){var ct=!pe&&(Xt||yt!==V)||((F=yt).nodeType?Oe(it,yt,Xt):rt(it,yt,Xt));return F=null,ct}];we<Y;we++)if(G=d.relative[C[we].type])Qe=[cs(la(Qe),G)];else{if((G=d.filter[C[we].type].apply(null,C[we].matches))[It]){for(le=++we;le<Y&&!d.relative[C[le].type];le++);return ca(1<we&&la(Qe),1<we&&ls(C.slice(0,we-1).concat({value:C[we-2].type===" "?"*":""})).replace(Cn,"$1"),G,we<le&&ua(C.slice(we,le)),le<Y&&ua(C=C.slice(le)),le<Y&&ls(C))}Qe.push(G)}return la(Qe)}return Qo.prototype=d.filters=d.pseudos,d.setFilters=new Qo,w=Nt.tokenize=function(C,F){var G,le,Y,pe,ye,we,Oe,rt=Br[C+" "];if(rt)return F?0:rt.slice(0);for(ye=C,we=[],Oe=d.preFilter;ye;){for(pe in G&&!(le=tr.exec(ye))||(le&&(ye=ye.slice(le[0].length)||ye),we.push(Y=[])),G=!1,(le=ss.exec(ye))&&(G=le.shift(),Y.push({value:G,type:le[0].replace(Cn," ")}),ye=ye.slice(G.length)),d.filter)!(le=as[pe].exec(ye))||Oe[pe]&&!(le=Oe[pe](le))||(G=le.shift(),Y.push({value:G,type:pe,matches:le}),ye=ye.slice(G.length));if(!G)break}return F?ye.length:ye?Nt.error(C):Br(C,we).slice(0)},z=Nt.compile=function(C,F){var G,le,Y,pe,ye,we,Oe=[],rt=[],Qe=rs[C+" "];if(!Qe){for(F||(F=w(C)),G=F.length;G--;)(Qe=ua(F[G]))[It]?Oe.push(Qe):rt.push(Qe);(Qe=rs(C,(le=rt,pe=0<(Y=Oe).length,ye=0<le.length,we=function(it,yt,Xt,ct,en){var sn,dn,Ft,$n=0,cn="0",Zt=it&&[],kn=[],fs=V,el=it||ye&&d.find.TAG("*",en),tl=vn+=fs==null?1:Math.random()||.1,nu=el.length;for(en&&(V=yt==ne||yt||en);cn!==nu&&(sn=el[cn])!=null;cn++){if(ye&&sn){for(dn=0,yt||sn.ownerDocument==ne||(Z(sn),Xt=!Ye);Ft=le[dn++];)if(Ft(sn,yt||ne,Xt)){ct.push(sn);break}en&&(vn=tl)}pe&&((sn=!Ft&&sn)&&$n--,it&&Zt.push(sn))}if($n+=cn,pe&&cn!==$n){for(dn=0;Ft=Y[dn++];)Ft(Zt,kn,yt,Xt);if(it){if(0<$n)for(;cn--;)Zt[cn]||kn[cn]||(kn[cn]=er.call(ct));kn=us(kn)}Gt.apply(ct,kn),en&&!it&&0<kn.length&&1<$n+Y.length&&Nt.uniqueSort(ct)}return en&&(vn=tl,V=fs),Zt},pe?zn(we):we))).selector=C}return Qe},H=Nt.select=function(C,F,G,le){var Y,pe,ye,we,Oe,rt=typeof C=="function"&&C,Qe=!le&&w(C=rt.selector||C);if(G=G||[],Qe.length===1){if(2<(pe=Qe[0]=Qe[0].slice(0)).length&&(ye=pe[0]).type==="ID"&&F.nodeType===9&&Ye&&d.relative[pe[1].type]){if(!(F=(d.find.ID(ye.matches[0].replace(ri,si),F)||[])[0]))return G;rt&&(F=F.parentNode),C=C.slice(pe.shift().value.length)}for(Y=as.needsContext.test(C)?0:pe.length;Y--&&(ye=pe[Y],!d.relative[we=ye.type]);)if((Oe=d.find[we])&&(le=Oe(ye.matches[0].replace(ri,si),sa.test(pe[0].type)&&oa(F.parentNode)||F))){if(pe.splice(Y,1),!(C=le.length&&ls(pe)))return Gt.apply(G,le),G;break}}return(rt||z(C,Qe))(le,F,!Ye,G,!F||sa.test(C)&&oa(F.parentNode)||F),G},f.sortStable=It.split("").sort(Ii).join("")===It,f.detectDuplicates=!!he,Z(),f.sortDetached=Hn(function(C){return 1&C.compareDocumentPosition(ne.createElement("fieldset"))}),Hn(function(C){return C.innerHTML="<a href='#'></a>",C.firstChild.getAttribute("href")==="#"})||aa("type|href|height|width",function(C,F,G){if(!G)return C.getAttribute(F,F.toLowerCase()==="type"?1:2)}),f.attributes&&Hn(function(C){return C.innerHTML="<input/>",C.firstChild.setAttribute("value",""),C.firstChild.getAttribute("value")===""})||aa("value",function(C,F,G){if(!G&&C.nodeName.toLowerCase()==="input")return C.defaultValue}),Hn(function(C){return C.getAttribute("disabled")==null})||aa(Zn,function(C,F,G){var le;if(!G)return C[F]===!0?F.toLowerCase():(le=C.getAttributeNode(F))&&le.specified?le.value:null}),Nt}(i);u.find=B,u.expr=B.selectors,u.expr[":"]=u.expr.pseudos,u.uniqueSort=u.unique=B.uniqueSort,u.text=B.getText,u.isXMLDoc=B.isXML,u.contains=B.contains,u.escapeSelector=B.escape;var $=function(s,o,f){for(var d=[],M=f!==void 0;(s=s[o])&&s.nodeType!==9;)if(s.nodeType===1){if(M&&u(s).is(f))break;d.push(s)}return d},Ee=function(s,o){for(var f=[];s;s=s.nextSibling)s.nodeType===1&&s!==o&&f.push(s);return f},E=u.expr.match.needsContext;function P(s,o){return s.nodeName&&s.nodeName.toLowerCase()===o.toLowerCase()}var ee=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function re(s,o,f){return S(o)?u.grep(s,function(d,M){return!!o.call(d,M,d)!==f}):o.nodeType?u.grep(s,function(d){return d===o!==f}):typeof o!="string"?u.grep(s,function(d){return-1<l.call(o,d)!==f}):u.filter(o,s,f)}u.filter=function(s,o,f){var d=o[0];return f&&(s=":not("+s+")"),o.length===1&&d.nodeType===1?u.find.matchesSelector(d,s)?[d]:[]:u.find.matches(s,u.grep(o,function(M){return M.nodeType===1}))},u.fn.extend({find:function(s){var o,f,d=this.length,M=this;if(typeof s!="string")return this.pushStack(u(s).filter(function(){for(o=0;o<d;o++)if(u.contains(M[o],this))return!0}));for(f=this.pushStack([]),o=0;o<d;o++)u.find(s,M[o],f);return 1<d?u.uniqueSort(f):f},filter:function(s){return this.pushStack(re(this,s||[],!1))},not:function(s){return this.pushStack(re(this,s||[],!0))},is:function(s){return!!re(this,typeof s=="string"&&E.test(s)?u(s):s||[],!1).length}});var fe,ge=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(u.fn.init=function(s,o,f){var d,M;if(!s)return this;if(f=f||fe,typeof s=="string"){if(!(d=s[0]==="<"&&s[s.length-1]===">"&&3<=s.length?[null,s,null]:ge.exec(s))||!d[1]&&o)return!o||o.jquery?(o||f).find(s):this.constructor(o).find(s);if(d[1]){if(o=o instanceof u?o[0]:o,u.merge(this,u.parseHTML(d[1],o&&o.nodeType?o.ownerDocument||o:g,!0)),ee.test(d[1])&&u.isPlainObject(o))for(d in o)S(this[d])?this[d](o[d]):this.attr(d,o[d]);return this}return(M=g.getElementById(d[2]))&&(this[0]=M,this.length=1),this}return s.nodeType?(this[0]=s,this.length=1,this):S(s)?f.ready!==void 0?f.ready(s):s(u):u.makeArray(s,this)}).prototype=u.fn,fe=u(g);var ae=/^(?:parents|prev(?:Until|All))/,me={children:!0,contents:!0,next:!0,prev:!0};function j(s,o){for(;(s=s[o])&&s.nodeType!==1;);return s}u.fn.extend({has:function(s){var o=u(s,this),f=o.length;return this.filter(function(){for(var d=0;d<f;d++)if(u.contains(this,o[d]))return!0})},closest:function(s,o){var f,d=0,M=this.length,A=[],w=typeof s!="string"&&u(s);if(!E.test(s)){for(;d<M;d++)for(f=this[d];f&&f!==o;f=f.parentNode)if(f.nodeType<11&&(w?-1<w.index(f):f.nodeType===1&&u.find.matchesSelector(f,s))){A.push(f);break}}return this.pushStack(1<A.length?u.uniqueSort(A):A)},index:function(s){return s?typeof s=="string"?l.call(u(s),this[0]):l.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,o){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(s,o))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}}),u.each({parent:function(s){var o=s.parentNode;return o&&o.nodeType!==11?o:null},parents:function(s){return $(s,"parentNode")},parentsUntil:function(s,o,f){return $(s,"parentNode",f)},next:function(s){return j(s,"nextSibling")},prev:function(s){return j(s,"previousSibling")},nextAll:function(s){return $(s,"nextSibling")},prevAll:function(s){return $(s,"previousSibling")},nextUntil:function(s,o,f){return $(s,"nextSibling",f)},prevUntil:function(s,o,f){return $(s,"previousSibling",f)},siblings:function(s){return Ee((s.parentNode||{}).firstChild,s)},children:function(s){return Ee(s.firstChild)},contents:function(s){return s.contentDocument!=null&&n(s.contentDocument)?s.contentDocument:(P(s,"template")&&(s=s.content||s),u.merge([],s.childNodes))}},function(s,o){u.fn[s]=function(f,d){var M=u.map(this,o,f);return s.slice(-5)!=="Until"&&(d=f),d&&typeof d=="string"&&(M=u.filter(d,M)),1<this.length&&(me[s]||u.uniqueSort(M),ae.test(s)&&M.reverse()),this.pushStack(M)}});var be=/[^\x20\t\r\n\f]+/g;function xe(s){return s}function Me(s){throw s}function pt(s,o,f,d){var M;try{s&&S(M=s.promise)?M.call(s).done(o).fail(f):s&&S(M=s.then)?M.call(s,o,f):o.apply(void 0,[s].slice(d))}catch(A){f.apply(void 0,[A])}}u.Callbacks=function(s){var o,f;s=typeof s=="string"?(o=s,f={},u.each(o.match(be)||[],function(Z,ne){f[ne]=!0}),f):u.extend({},s);var d,M,A,w,z=[],H=[],V=-1,te=function(){for(w=w||s.once,A=d=!0;H.length;V=-1)for(M=H.shift();++V<z.length;)z[V].apply(M[0],M[1])===!1&&s.stopOnFalse&&(V=z.length,M=!1);s.memory||(M=!1),d=!1,w&&(z=M?[]:"")},he={add:function(){return z&&(M&&!d&&(V=z.length-1,H.push(M)),function Z(ne){u.each(ne,function(Be,Ye){S(Ye)?s.unique&&he.has(Ye)||z.push(Ye):Ye&&Ye.length&&U(Ye)!=="string"&&Z(Ye)})}(arguments),M&&!d&&te()),this},remove:function(){return u.each(arguments,function(Z,ne){for(var Be;-1<(Be=u.inArray(ne,z,Be));)z.splice(Be,1),Be<=V&&V--}),this},has:function(Z){return Z?-1<u.inArray(Z,z):0<z.length},empty:function(){return z&&(z=[]),this},disable:function(){return w=H=[],z=M="",this},disabled:function(){return!z},lock:function(){return w=H=[],M||d||(z=M=""),this},locked:function(){return!!w},fireWith:function(Z,ne){return w||(ne=[Z,(ne=ne||[]).slice?ne.slice():ne],H.push(ne),d||te()),this},fire:function(){return he.fireWith(this,arguments),this},fired:function(){return!!A}};return he},u.extend({Deferred:function(s){var o=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],f="pending",d={state:function(){return f},always:function(){return M.done(arguments).fail(arguments),this},catch:function(A){return d.then(null,A)},pipe:function(){var A=arguments;return u.Deferred(function(w){u.each(o,function(z,H){var V=S(A[H[4]])&&A[H[4]];M[H[1]](function(){var te=V&&V.apply(this,arguments);te&&S(te.promise)?te.promise().progress(w.notify).done(w.resolve).fail(w.reject):w[H[0]+"With"](this,V?[te]:arguments)})}),A=null}).promise()},then:function(A,w,z){var H=0;function V(te,he,Z,ne){return function(){var Be=this,Ye=arguments,Ve=function(){var Jt,En;if(!(te<H)){if((Jt=Z.apply(Be,Ye))===he.promise())throw new TypeError("Thenable self-resolution");En=Jt&&(typeof Jt=="object"||typeof Jt=="function")&&Jt.then,S(En)?ne?En.call(Jt,V(H,he,xe,ne),V(H,he,Me,ne)):(H++,En.call(Jt,V(H,he,xe,ne),V(H,he,Me,ne),V(H,he,xe,he.notifyWith))):(Z!==xe&&(Be=void 0,Ye=[Jt]),(ne||he.resolveWith)(Be,Ye))}},Ht=ne?Ve:function(){try{Ve()}catch(Jt){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(Jt,Ht.stackTrace),H<=te+1&&(Z!==Me&&(Be=void 0,Ye=[Jt]),he.rejectWith(Be,Ye))}};te?Ht():(u.Deferred.getStackHook&&(Ht.stackTrace=u.Deferred.getStackHook()),i.setTimeout(Ht))}}return u.Deferred(function(te){o[0][3].add(V(0,te,S(z)?z:xe,te.notifyWith)),o[1][3].add(V(0,te,S(A)?A:xe)),o[2][3].add(V(0,te,S(w)?w:Me))}).promise()},promise:function(A){return A!=null?u.extend(A,d):d}},M={};return u.each(o,function(A,w){var z=w[2],H=w[5];d[w[1]]=z.add,H&&z.add(function(){f=H},o[3-A][2].disable,o[3-A][3].disable,o[0][2].lock,o[0][3].lock),z.add(w[3].fire),M[w[0]]=function(){return M[w[0]+"With"](this===M?void 0:this,arguments),this},M[w[0]+"With"]=z.fireWith}),d.promise(M),s&&s.call(M,M),M},when:function(s){var o=arguments.length,f=o,d=Array(f),M=r.call(arguments),A=u.Deferred(),w=function(z){return function(H){d[z]=this,M[z]=1<arguments.length?r.call(arguments):H,--o||A.resolveWith(d,M)}};if(o<=1&&(pt(s,A.done(w(f)).resolve,A.reject,!o),A.state()==="pending"||S(M[f]&&M[f].then)))return A.then();for(;f--;)pt(M[f],w(f),A.reject);return A.promise()}});var Mt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(s,o){i.console&&i.console.warn&&s&&Mt.test(s.name)&&i.console.warn("jQuery.Deferred exception: "+s.message,s.stack,o)},u.readyException=function(s){i.setTimeout(function(){throw s})};var oe=u.Deferred();function ve(){g.removeEventListener("DOMContentLoaded",ve),i.removeEventListener("load",ve),u.ready()}u.fn.ready=function(s){return oe.then(s).catch(function(o){u.readyException(o)}),this},u.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--u.readyWait:u.isReady)||(u.isReady=!0)!==s&&0<--u.readyWait||oe.resolveWith(g,[u])}}),u.ready.then=oe.then,g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?i.setTimeout(u.ready):(g.addEventListener("DOMContentLoaded",ve),i.addEventListener("load",ve));var Le=function(s,o,f,d,M,A,w){var z=0,H=s.length,V=f==null;if(U(f)==="object")for(z in M=!0,f)Le(s,o,z,f[z],!0,A,w);else if(d!==void 0&&(M=!0,S(d)||(w=!0),V&&(w?(o.call(s,d),o=null):(V=o,o=function(te,he,Z){return V.call(u(te),Z)})),o))for(;z<H;z++)o(s[z],f,w?d:d.call(s[z],z,o(s[z],f)));return M?s:V?o.call(s):H?o(s[0],f):A},Ce=/^-ms-/,je=/-([a-z])/g;function $e(s,o){return o.toUpperCase()}function tt(s){return s.replace(Ce,"ms-").replace(je,$e)}var gt=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function lt(){this.expando=u.expando+lt.uid++}lt.uid=1,lt.prototype={cache:function(s){var o=s[this.expando];return o||(o={},gt(s)&&(s.nodeType?s[this.expando]=o:Object.defineProperty(s,this.expando,{value:o,configurable:!0}))),o},set:function(s,o,f){var d,M=this.cache(s);if(typeof o=="string")M[tt(o)]=f;else for(d in o)M[tt(d)]=o[d];return M},get:function(s,o){return o===void 0?this.cache(s):s[this.expando]&&s[this.expando][tt(o)]},access:function(s,o,f){return o===void 0||o&&typeof o=="string"&&f===void 0?this.get(s,o):(this.set(s,o,f),f!==void 0?f:o)},remove:function(s,o){var f,d=s[this.expando];if(d!==void 0){if(o!==void 0)for(f=(o=Array.isArray(o)?o.map(tt):(o=tt(o))in d?[o]:o.match(be)||[]).length;f--;)delete d[o[f]];(o===void 0||u.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var o=s[this.expando];return o!==void 0&&!u.isEmptyObject(o)}};var I=new lt,wt=new lt,ut=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,_t=/[A-Z]/g;function Je(s,o,f){var d,M;if(f===void 0&&s.nodeType===1)if(d="data-"+o.replace(_t,"-$&").toLowerCase(),typeof(f=s.getAttribute(d))=="string"){try{f=(M=f)==="true"||M!=="false"&&(M==="null"?null:M===+M+""?+M:ut.test(M)?JSON.parse(M):M)}catch{}wt.set(s,o,f)}else f=void 0;return f}u.extend({hasData:function(s){return wt.hasData(s)||I.hasData(s)},data:function(s,o,f){return wt.access(s,o,f)},removeData:function(s,o){wt.remove(s,o)},_data:function(s,o,f){return I.access(s,o,f)},_removeData:function(s,o){I.remove(s,o)}}),u.fn.extend({data:function(s,o){var f,d,M,A=this[0],w=A&&A.attributes;if(s===void 0){if(this.length&&(M=wt.get(A),A.nodeType===1&&!I.get(A,"hasDataAttrs"))){for(f=w.length;f--;)w[f]&&(d=w[f].name).indexOf("data-")===0&&(d=tt(d.slice(5)),Je(A,d,M[d]));I.set(A,"hasDataAttrs",!0)}return M}return typeof s=="object"?this.each(function(){wt.set(this,s)}):Le(this,function(z){var H;if(A&&z===void 0)return(H=wt.get(A,s))!==void 0||(H=Je(A,s))!==void 0?H:void 0;this.each(function(){wt.set(this,s,z)})},null,o,1<arguments.length,null,!0)},removeData:function(s){return this.each(function(){wt.remove(this,s)})}}),u.extend({queue:function(s,o,f){var d;if(s)return o=(o||"fx")+"queue",d=I.get(s,o),f&&(!d||Array.isArray(f)?d=I.access(s,o,u.makeArray(f)):d.push(f)),d||[]},dequeue:function(s,o){o=o||"fx";var f=u.queue(s,o),d=f.length,M=f.shift(),A=u._queueHooks(s,o);M==="inprogress"&&(M=f.shift(),d--),M&&(o==="fx"&&f.unshift("inprogress"),delete A.stop,M.call(s,function(){u.dequeue(s,o)},A)),!d&&A&&A.empty.fire()},_queueHooks:function(s,o){var f=o+"queueHooks";return I.get(s,f)||I.access(s,f,{empty:u.Callbacks("once memory").add(function(){I.remove(s,[o+"queue",f])})})}}),u.fn.extend({queue:function(s,o){var f=2;return typeof s!="string"&&(o=s,s="fx",f--),arguments.length<f?u.queue(this[0],s):o===void 0?this:this.each(function(){var d=u.queue(this,s,o);u._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&u.dequeue(this,s)})},dequeue:function(s){return this.each(function(){u.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,o){var f,d=1,M=u.Deferred(),A=this,w=this.length,z=function(){--d||M.resolveWith(A,[A])};for(typeof s!="string"&&(o=s,s=void 0),s=s||"fx";w--;)(f=I.get(A[w],s+"queueHooks"))&&f.empty&&(d++,f.empty.add(z));return z(),M.promise(o)}});var At=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ke=new RegExp("^(?:([+-])=|)("+At+")([a-z%]*)$","i"),D=["Top","Right","Bottom","Left"],T=g.documentElement,K=function(s){return u.contains(s.ownerDocument,s)},ue={composed:!0};T.getRootNode&&(K=function(s){return u.contains(s.ownerDocument,s)||s.getRootNode(ue)===s.ownerDocument});var _e=function(s,o){return(s=o||s).style.display==="none"||s.style.display===""&&K(s)&&u.css(s,"display")==="none"};function ce(s,o,f,d){var M,A,w=20,z=d?function(){return d.cur()}:function(){return u.css(s,o,"")},H=z(),V=f&&f[3]||(u.cssNumber[o]?"":"px"),te=s.nodeType&&(u.cssNumber[o]||V!=="px"&&+H)&&Ke.exec(u.css(s,o));if(te&&te[3]!==V){for(H/=2,V=V||te[3],te=+H||1;w--;)u.style(s,o,te+V),(1-A)*(1-(A=z()/H||.5))<=0&&(w=0),te/=A;te*=2,u.style(s,o,te+V),f=f||[]}return f&&(te=+te||+H||0,M=f[1]?te+(f[1]+1)*f[2]:+f[2],d&&(d.unit=V,d.start=te,d.end=M)),M}var We={};function Re(s,o){for(var f,d,M,A,w,z,H,V=[],te=0,he=s.length;te<he;te++)(d=s[te]).style&&(f=d.style.display,o?(f==="none"&&(V[te]=I.get(d,"display")||null,V[te]||(d.style.display="")),d.style.display===""&&_e(d)&&(V[te]=(H=w=A=void 0,w=(M=d).ownerDocument,z=M.nodeName,(H=We[z])||(A=w.body.appendChild(w.createElement(z)),H=u.css(A,"display"),A.parentNode.removeChild(A),H==="none"&&(H="block"),We[z]=H)))):f!=="none"&&(V[te]="none",I.set(d,"display",f)));for(te=0;te<he;te++)V[te]!=null&&(s[te].style.display=V[te]);return s}u.fn.extend({show:function(){return Re(this,!0)},hide:function(){return Re(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){_e(this)?u(this).show():u(this).hide()})}});var Ne,mt,Se=/^(?:checkbox|radio)$/i,ke=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,nt=/^$|^module$|\/(?:java|ecma)script/i;Ne=g.createDocumentFragment().appendChild(g.createElement("div")),(mt=g.createElement("input")).setAttribute("type","radio"),mt.setAttribute("checked","checked"),mt.setAttribute("name","t"),Ne.appendChild(mt),y.checkClone=Ne.cloneNode(!0).cloneNode(!0).lastChild.checked,Ne.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!Ne.cloneNode(!0).lastChild.defaultValue,Ne.innerHTML="<option></option>",y.option=!!Ne.lastChild;var Xe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Pe(s,o){var f;return f=typeof s.getElementsByTagName<"u"?s.getElementsByTagName(o||"*"):typeof s.querySelectorAll<"u"?s.querySelectorAll(o||"*"):[],o===void 0||o&&P(s,o)?u.merge([s],f):f}function dt(s,o){for(var f=0,d=s.length;f<d;f++)I.set(s[f],"globalEval",!o||I.get(o[f],"globalEval"))}Xe.tbody=Xe.tfoot=Xe.colgroup=Xe.caption=Xe.thead,Xe.th=Xe.td,y.option||(Xe.optgroup=Xe.option=[1,"<select multiple='multiple'>","</select>"]);var at=/<|&#?\w+;/;function Dt(s,o,f,d,M){for(var A,w,z,H,V,te,he=o.createDocumentFragment(),Z=[],ne=0,Be=s.length;ne<Be;ne++)if((A=s[ne])||A===0)if(U(A)==="object")u.merge(Z,A.nodeType?[A]:A);else if(at.test(A)){for(w=w||he.appendChild(o.createElement("div")),z=(ke.exec(A)||["",""])[1].toLowerCase(),H=Xe[z]||Xe._default,w.innerHTML=H[1]+u.htmlPrefilter(A)+H[2],te=H[0];te--;)w=w.lastChild;u.merge(Z,w.childNodes),(w=he.firstChild).textContent=""}else Z.push(o.createTextNode(A));for(he.textContent="",ne=0;A=Z[ne++];)if(d&&-1<u.inArray(A,d))M&&M.push(A);else if(V=K(A),w=Pe(he.appendChild(A),"script"),V&&dt(w),f)for(te=0;A=w[te++];)nt.test(A.type||"")&&f.push(A);return he}var k=/^([^.]*)(?:\.(.+)|)/;function Ue(){return!0}function se(){return!1}function de(s,o){return s===function(){try{return g.activeElement}catch{}}()==(o==="focus")}function Ie(s,o,f,d,M,A){var w,z;if(typeof o=="object"){for(z in typeof f!="string"&&(d=d||f,f=void 0),o)Ie(s,z,f,d,o[z],A);return s}if(d==null&&M==null?(M=f,d=f=void 0):M==null&&(typeof f=="string"?(M=d,d=void 0):(M=d,d=f,f=void 0)),M===!1)M=se;else if(!M)return s;return A===1&&(w=M,(M=function(H){return u().off(H),w.apply(this,arguments)}).guid=w.guid||(w.guid=u.guid++)),s.each(function(){u.event.add(this,o,M,d,f)})}function Fe(s,o,f){f?(I.set(s,o,!1),u.event.add(s,o,{namespace:!1,handler:function(d){var M,A,w=I.get(this,o);if(1&d.isTrigger&&this[o]){if(w.length)(u.event.special[o]||{}).delegateType&&d.stopPropagation();else if(w=r.call(arguments),I.set(this,o,w),M=f(this,o),this[o](),w!==(A=I.get(this,o))||M?I.set(this,o,!1):A={},w!==A)return d.stopImmediatePropagation(),d.preventDefault(),A&&A.value}else w.length&&(I.set(this,o,{value:u.event.trigger(u.extend(w[0],u.Event.prototype),w.slice(1),this)}),d.stopImmediatePropagation())}})):I.get(s,o)===void 0&&u.event.add(s,o,Ue)}u.event={global:{},add:function(s,o,f,d,M){var A,w,z,H,V,te,he,Z,ne,Be,Ye,Ve=I.get(s);if(gt(s))for(f.handler&&(f=(A=f).handler,M=A.selector),M&&u.find.matchesSelector(T,M),f.guid||(f.guid=u.guid++),(H=Ve.events)||(H=Ve.events=Object.create(null)),(w=Ve.handle)||(w=Ve.handle=function(Ht){return typeof u<"u"&&u.event.triggered!==Ht.type?u.event.dispatch.apply(s,arguments):void 0}),V=(o=(o||"").match(be)||[""]).length;V--;)ne=Ye=(z=k.exec(o[V])||[])[1],Be=(z[2]||"").split(".").sort(),ne&&(he=u.event.special[ne]||{},ne=(M?he.delegateType:he.bindType)||ne,he=u.event.special[ne]||{},te=u.extend({type:ne,origType:Ye,data:d,handler:f,guid:f.guid,selector:M,needsContext:M&&u.expr.match.needsContext.test(M),namespace:Be.join(".")},A),(Z=H[ne])||((Z=H[ne]=[]).delegateCount=0,he.setup&&he.setup.call(s,d,Be,w)!==!1||s.addEventListener&&s.addEventListener(ne,w)),he.add&&(he.add.call(s,te),te.handler.guid||(te.handler.guid=f.guid)),M?Z.splice(Z.delegateCount++,0,te):Z.push(te),u.event.global[ne]=!0)},remove:function(s,o,f,d,M){var A,w,z,H,V,te,he,Z,ne,Be,Ye,Ve=I.hasData(s)&&I.get(s);if(Ve&&(H=Ve.events)){for(V=(o=(o||"").match(be)||[""]).length;V--;)if(ne=Ye=(z=k.exec(o[V])||[])[1],Be=(z[2]||"").split(".").sort(),ne){for(he=u.event.special[ne]||{},Z=H[ne=(d?he.delegateType:he.bindType)||ne]||[],z=z[2]&&new RegExp("(^|\\.)"+Be.join("\\.(?:.*\\.|)")+"(\\.|$)"),w=A=Z.length;A--;)te=Z[A],!M&&Ye!==te.origType||f&&f.guid!==te.guid||z&&!z.test(te.namespace)||d&&d!==te.selector&&(d!=="**"||!te.selector)||(Z.splice(A,1),te.selector&&Z.delegateCount--,he.remove&&he.remove.call(s,te));w&&!Z.length&&(he.teardown&&he.teardown.call(s,Be,Ve.handle)!==!1||u.removeEvent(s,ne,Ve.handle),delete H[ne])}else for(ne in H)u.event.remove(s,ne+o[V],f,d,!0);u.isEmptyObject(H)&&I.remove(s,"handle events")}},dispatch:function(s){var o,f,d,M,A,w,z=new Array(arguments.length),H=u.event.fix(s),V=(I.get(this,"events")||Object.create(null))[H.type]||[],te=u.event.special[H.type]||{};for(z[0]=H,o=1;o<arguments.length;o++)z[o]=arguments[o];if(H.delegateTarget=this,!te.preDispatch||te.preDispatch.call(this,H)!==!1){for(w=u.event.handlers.call(this,H,V),o=0;(M=w[o++])&&!H.isPropagationStopped();)for(H.currentTarget=M.elem,f=0;(A=M.handlers[f++])&&!H.isImmediatePropagationStopped();)H.rnamespace&&A.namespace!==!1&&!H.rnamespace.test(A.namespace)||(H.handleObj=A,H.data=A.data,(d=((u.event.special[A.origType]||{}).handle||A.handler).apply(M.elem,z))!==void 0&&(H.result=d)===!1&&(H.preventDefault(),H.stopPropagation()));return te.postDispatch&&te.postDispatch.call(this,H),H.result}},handlers:function(s,o){var f,d,M,A,w,z=[],H=o.delegateCount,V=s.target;if(H&&V.nodeType&&!(s.type==="click"&&1<=s.button)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&(s.type!=="click"||V.disabled!==!0)){for(A=[],w={},f=0;f<H;f++)w[M=(d=o[f]).selector+" "]===void 0&&(w[M]=d.needsContext?-1<u(M,this).index(V):u.find(M,this,null,[V]).length),w[M]&&A.push(d);A.length&&z.push({elem:V,handlers:A})}}return V=this,H<o.length&&z.push({elem:V,handlers:o.slice(H)}),z},addProp:function(s,o){Object.defineProperty(u.Event.prototype,s,{enumerable:!0,configurable:!0,get:S(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(f){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(s){return s[u.expando]?s:new u.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var o=this||s;return Se.test(o.type)&&o.click&&P(o,"input")&&Fe(o,"click",Ue),!1},trigger:function(s){var o=this||s;return Se.test(o.type)&&o.click&&P(o,"input")&&Fe(o,"click"),!0},_default:function(s){var o=s.target;return Se.test(o.type)&&o.click&&P(o,"input")&&I.get(o,"click")||P(o,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}},u.removeEvent=function(s,o,f){s.removeEventListener&&s.removeEventListener(o,f)},u.Event=function(s,o){if(!(this instanceof u.Event))return new u.Event(s,o);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Ue:se,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,o&&u.extend(this,o),this.timeStamp=s&&s.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:se,isPropagationStopped:se,isImmediatePropagationStopped:se,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Ue,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Ue,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Ue,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(s,o){u.event.special[s]={setup:function(){return Fe(this,s,de),!1},trigger:function(){return Fe(this,s),!0},_default:function(){return!0},delegateType:o}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,o){u.event.special[s]={delegateType:o,bindType:o,handle:function(f){var d,M=f.relatedTarget,A=f.handleObj;return M&&(M===this||u.contains(this,M))||(f.type=A.origType,d=A.handler.apply(this,arguments),f.type=o),d}}}),u.fn.extend({on:function(s,o,f,d){return Ie(this,s,o,f,d)},one:function(s,o,f,d){return Ie(this,s,o,f,d,1)},off:function(s,o,f){var d,M;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,u(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(M in s)this.off(M,o,s[M]);return this}return o!==!1&&typeof o!="function"||(f=o,o=void 0),f===!1&&(f=se),this.each(function(){u.event.remove(this,s,f,o)})}});var xt=/<script|<style|<link/i,Vt=/checked\s*(?:[^=]|=\s*.checked.)/i,on=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function St(s,o){return P(s,"table")&&P(o.nodeType!==11?o:o.firstChild,"tr")&&u(s).children("tbody")[0]||s}function ln(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function On(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Dr(s,o){var f,d,M,A,w,z;if(o.nodeType===1){if(I.hasData(s)&&(z=I.get(s).events))for(M in I.remove(o,"handle events"),z)for(f=0,d=z[M].length;f<d;f++)u.event.add(o,M,z[M][f]);wt.hasData(s)&&(A=wt.access(s),w=u.extend({},A),wt.set(o,w))}}function ni(s,o,f,d){o=a(o);var M,A,w,z,H,V,te=0,he=s.length,Z=he-1,ne=o[0],Be=S(ne);if(Be||1<he&&typeof ne=="string"&&!y.checkClone&&Vt.test(ne))return s.each(function(Ye){var Ve=s.eq(Ye);Be&&(o[0]=ne.call(this,Ye,Ve.html())),ni(Ve,o,f,d)});if(he&&(A=(M=Dt(o,s[0].ownerDocument,!1,s,d)).firstChild,M.childNodes.length===1&&(M=A),A||d)){for(z=(w=u.map(Pe(M,"script"),ln)).length;te<he;te++)H=M,te!==Z&&(H=u.clone(H,!0,!0),z&&u.merge(w,Pe(H,"script"))),f.call(s[te],H,te);if(z)for(V=w[w.length-1].ownerDocument,u.map(w,On),te=0;te<z;te++)H=w[te],nt.test(H.type||"")&&!I.access(H,"globalEval")&&u.contains(V,H)&&(H.src&&(H.type||"").toLowerCase()!=="module"?u._evalUrl&&!H.noModule&&u._evalUrl(H.src,{nonce:H.nonce||H.getAttribute("nonce")},V):O(H.textContent.replace(on,""),H,V))}return s}function jn(s,o,f){for(var d,M=o?u.filter(o,s):s,A=0;(d=M[A])!=null;A++)f||d.nodeType!==1||u.cleanData(Pe(d)),d.parentNode&&(f&&K(d)&&dt(Pe(d,"script")),d.parentNode.removeChild(d));return s}u.extend({htmlPrefilter:function(s){return s},clone:function(s,o,f){var d,M,A,w,z,H,V,te=s.cloneNode(!0),he=K(s);if(!(y.noCloneChecked||s.nodeType!==1&&s.nodeType!==11||u.isXMLDoc(s)))for(w=Pe(te),d=0,M=(A=Pe(s)).length;d<M;d++)z=A[d],H=w[d],(V=H.nodeName.toLowerCase())==="input"&&Se.test(z.type)?H.checked=z.checked:V!=="input"&&V!=="textarea"||(H.defaultValue=z.defaultValue);if(o)if(f)for(A=A||Pe(s),w=w||Pe(te),d=0,M=A.length;d<M;d++)Dr(A[d],w[d]);else Dr(s,te);return 0<(w=Pe(te,"script")).length&&dt(w,!he&&Pe(s,"script")),te},cleanData:function(s){for(var o,f,d,M=u.event.special,A=0;(f=s[A])!==void 0;A++)if(gt(f)){if(o=f[I.expando]){if(o.events)for(d in o.events)M[d]?u.event.remove(f,d):u.removeEvent(f,d,o.handle);f[I.expando]=void 0}f[wt.expando]&&(f[wt.expando]=void 0)}}}),u.fn.extend({detach:function(s){return jn(this,s,!0)},remove:function(s){return jn(this,s)},text:function(s){return Le(this,function(o){return o===void 0?u.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=o)})},null,s,arguments.length)},append:function(){return ni(this,arguments,function(s){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||St(this,s).appendChild(s)})},prepend:function(){return ni(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=St(this,s);o.insertBefore(s,o.firstChild)}})},before:function(){return ni(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return ni(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,o=0;(s=this[o])!=null;o++)s.nodeType===1&&(u.cleanData(Pe(s,!1)),s.textContent="");return this},clone:function(s,o){return s=s!=null&&s,o=o??s,this.map(function(){return u.clone(this,s,o)})},html:function(s){return Le(this,function(o){var f=this[0]||{},d=0,M=this.length;if(o===void 0&&f.nodeType===1)return f.innerHTML;if(typeof o=="string"&&!xt.test(o)&&!Xe[(ke.exec(o)||["",""])[1].toLowerCase()]){o=u.htmlPrefilter(o);try{for(;d<M;d++)(f=this[d]||{}).nodeType===1&&(u.cleanData(Pe(f,!1)),f.innerHTML=o);f=0}catch{}}f&&this.empty().append(o)},null,s,arguments.length)},replaceWith:function(){var s=[];return ni(this,arguments,function(o){var f=this.parentNode;u.inArray(this,s)<0&&(u.cleanData(Pe(this)),f&&f.replaceChild(o,this))},s)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,o){u.fn[s]=function(f){for(var d,M=[],A=u(f),w=A.length-1,z=0;z<=w;z++)d=z===w?this:this.clone(!0),u(A[z])[o](d),c.apply(M,d.get());return this.pushStack(M)}});var Li=new RegExp("^("+At+")(?!px)[a-z%]+$","i"),Di=function(s){var o=s.ownerDocument.defaultView;return o&&o.opener||(o=i),o.getComputedStyle(s)},Ur=function(s,o,f){var d,M,A={};for(M in o)A[M]=s.style[M],s.style[M]=o[M];for(M in d=f.call(s),o)s.style[M]=A[M];return d},Zi=new RegExp(D.join("|"),"i");function _i(s,o,f){var d,M,A,w,z=s.style;return(f=f||Di(s))&&((w=f.getPropertyValue(o)||f[o])!==""||K(s)||(w=u.style(s,o)),!y.pixelBoxStyles()&&Li.test(w)&&Zi.test(o)&&(d=z.width,M=z.minWidth,A=z.maxWidth,z.minWidth=z.maxWidth=z.width=w,w=f.width,z.width=d,z.minWidth=M,z.maxWidth=A)),w!==void 0?w+"":w}function Ui(s,o){return{get:function(){if(!s())return(this.get=o).apply(this,arguments);delete this.get}}}(function(){function s(){if(V){H.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",T.appendChild(H).appendChild(V);var te=i.getComputedStyle(V);f=te.top!=="1%",z=o(te.marginLeft)===12,V.style.right="60%",A=o(te.right)===36,d=o(te.width)===36,V.style.position="absolute",M=o(V.offsetWidth/3)===12,T.removeChild(H),V=null}}function o(te){return Math.round(parseFloat(te))}var f,d,M,A,w,z,H=g.createElement("div"),V=g.createElement("div");V.style&&(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle=V.style.backgroundClip==="content-box",u.extend(y,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),A},pixelPosition:function(){return s(),f},reliableMarginLeft:function(){return s(),z},scrollboxSize:function(){return s(),M},reliableTrDimensions:function(){var te,he,Z,ne;return w==null&&(te=g.createElement("table"),he=g.createElement("tr"),Z=g.createElement("div"),te.style.cssText="position:absolute;left:-11111px;border-collapse:separate",he.style.cssText="border:1px solid",he.style.height="1px",Z.style.height="9px",Z.style.display="block",T.appendChild(te).appendChild(he).appendChild(Z),ne=i.getComputedStyle(he),w=parseInt(ne.height,10)+parseInt(ne.borderTopWidth,10)+parseInt(ne.borderBottomWidth,10)===he.offsetHeight,T.removeChild(te)),w}}))})();var Ir=["Webkit","Moz","ms"],Nr=g.createElement("div").style,ns={};function Fr(s){var o=u.cssProps[s]||ns[s];return o||(s in Nr?s:ns[s]=function(f){for(var d=f[0].toUpperCase()+f.slice(1),M=Ir.length;M--;)if((f=Ir[M]+d)in Nr)return f}(s)||s)}var Qs=/^(none|table(?!-c[ea]).+)/,R=/^--/,W={position:"absolute",visibility:"hidden",display:"block"},J={letterSpacing:"0",fontWeight:"400"};function Q(s,o,f){var d=Ke.exec(o);return d?Math.max(0,d[2]-(f||0))+(d[3]||"px"):o}function q(s,o,f,d,M,A){var w=o==="width"?1:0,z=0,H=0;if(f===(d?"border":"content"))return 0;for(;w<4;w+=2)f==="margin"&&(H+=u.css(s,f+D[w],!0,M)),d?(f==="content"&&(H-=u.css(s,"padding"+D[w],!0,M)),f!=="margin"&&(H-=u.css(s,"border"+D[w]+"Width",!0,M))):(H+=u.css(s,"padding"+D[w],!0,M),f!=="padding"?H+=u.css(s,"border"+D[w]+"Width",!0,M):z+=u.css(s,"border"+D[w]+"Width",!0,M));return!d&&0<=A&&(H+=Math.max(0,Math.ceil(s["offset"+o[0].toUpperCase()+o.slice(1)]-A-H-z-.5))||0),H}function Te(s,o,f){var d=Di(s),M=(!y.boxSizingReliable()||f)&&u.css(s,"boxSizing",!1,d)==="border-box",A=M,w=_i(s,o,d),z="offset"+o[0].toUpperCase()+o.slice(1);if(Li.test(w)){if(!f)return w;w="auto"}return(!y.boxSizingReliable()&&M||!y.reliableTrDimensions()&&P(s,"tr")||w==="auto"||!parseFloat(w)&&u.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(M=u.css(s,"boxSizing",!1,d)==="border-box",(A=z in s)&&(w=s[z])),(w=parseFloat(w)||0)+q(s,o,f||(M?"border":"content"),A,d,w)+"px"}function Ae(s,o,f,d,M){return new Ae.prototype.init(s,o,f,d,M)}u.extend({cssHooks:{opacity:{get:function(s,o){if(o){var f=_i(s,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(s,o,f,d){if(s&&s.nodeType!==3&&s.nodeType!==8&&s.style){var M,A,w,z=tt(o),H=R.test(o),V=s.style;if(H||(o=Fr(z)),w=u.cssHooks[o]||u.cssHooks[z],f===void 0)return w&&"get"in w&&(M=w.get(s,!1,d))!==void 0?M:V[o];(A=typeof f)=="string"&&(M=Ke.exec(f))&&M[1]&&(f=ce(s,o,M),A="number"),f!=null&&f==f&&(A!=="number"||H||(f+=M&&M[3]||(u.cssNumber[z]?"":"px")),y.clearCloneStyle||f!==""||o.indexOf("background")!==0||(V[o]="inherit"),w&&"set"in w&&(f=w.set(s,f,d))===void 0||(H?V.setProperty(o,f):V[o]=f))}},css:function(s,o,f,d){var M,A,w,z=tt(o);return R.test(o)||(o=Fr(z)),(w=u.cssHooks[o]||u.cssHooks[z])&&"get"in w&&(M=w.get(s,!0,f)),M===void 0&&(M=_i(s,o,d)),M==="normal"&&o in J&&(M=J[o]),f===""||f?(A=parseFloat(M),f===!0||isFinite(A)?A||0:M):M}}),u.each(["height","width"],function(s,o){u.cssHooks[o]={get:function(f,d,M){if(d)return!Qs.test(u.css(f,"display"))||f.getClientRects().length&&f.getBoundingClientRect().width?Te(f,o,M):Ur(f,W,function(){return Te(f,o,M)})},set:function(f,d,M){var A,w=Di(f),z=!y.scrollboxSize()&&w.position==="absolute",H=(z||M)&&u.css(f,"boxSizing",!1,w)==="border-box",V=M?q(f,o,M,H,w):0;return H&&z&&(V-=Math.ceil(f["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(w[o])-q(f,o,"border",!1,w)-.5)),V&&(A=Ke.exec(d))&&(A[3]||"px")!=="px"&&(f.style[o]=d,d=u.css(f,o)),Q(0,d,V)}}}),u.cssHooks.marginLeft=Ui(y.reliableMarginLeft,function(s,o){if(o)return(parseFloat(_i(s,"marginLeft"))||s.getBoundingClientRect().left-Ur(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(s,o){u.cssHooks[s+o]={expand:function(f){for(var d=0,M={},A=typeof f=="string"?f.split(" "):[f];d<4;d++)M[s+D[d]+o]=A[d]||A[d-2]||A[0];return M}},s!=="margin"&&(u.cssHooks[s+o].set=Q)}),u.fn.extend({css:function(s,o){return Le(this,function(f,d,M){var A,w,z={},H=0;if(Array.isArray(d)){for(A=Di(f),w=d.length;H<w;H++)z[d[H]]=u.css(f,d[H],!1,A);return z}return M!==void 0?u.style(f,d,M):u.css(f,d)},s,o,1<arguments.length)}}),((u.Tween=Ae).prototype={constructor:Ae,init:function(s,o,f,d,M,A){this.elem=s,this.prop=f,this.easing=M||u.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=d,this.unit=A||(u.cssNumber[f]?"":"px")},cur:function(){var s=Ae.propHooks[this.prop];return s&&s.get?s.get(this):Ae.propHooks._default.get(this)},run:function(s){var o,f=Ae.propHooks[this.prop];return this.options.duration?this.pos=o=u.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=o=s,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):Ae.propHooks._default.set(this),this}}).init.prototype=Ae.prototype,(Ae.propHooks={_default:{get:function(s){var o;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(o=u.css(s.elem,s.prop,""))&&o!=="auto"?o:0},set:function(s){u.fx.step[s.prop]?u.fx.step[s.prop](s):s.elem.nodeType!==1||!u.cssHooks[s.prop]&&s.elem.style[Fr(s.prop)]==null?s.elem[s.prop]=s.now:u.style(s.elem,s.prop,s.now+s.unit)}}}).scrollTop=Ae.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},u.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},u.fx=Ae.prototype.init,u.fx.step={};var ze,Ge,Ze,et,qe=/^(?:toggle|show|hide)$/,Ct=/queueHooks$/;function Ut(){Ge&&(g.hidden===!1&&i.requestAnimationFrame?i.requestAnimationFrame(Ut):i.setTimeout(Ut,u.fx.interval),u.fx.tick())}function Ot(){return i.setTimeout(function(){ze=void 0}),ze=Date.now()}function rn(s,o){var f,d=0,M={height:s};for(o=o?1:0;d<4;d+=2-o)M["margin"+(f=D[d])]=M["padding"+f]=s;return o&&(M.opacity=M.width=s),M}function Tt(s,o,f){for(var d,M=(He.tweeners[o]||[]).concat(He.tweeners["*"]),A=0,w=M.length;A<w;A++)if(d=M[A].call(f,o,s))return d}function He(s,o,f){var d,M,A=0,w=He.prefilters.length,z=u.Deferred().always(function(){delete H.elem}),H=function(){if(M)return!1;for(var he=ze||Ot(),Z=Math.max(0,V.startTime+V.duration-he),ne=1-(Z/V.duration||0),Be=0,Ye=V.tweens.length;Be<Ye;Be++)V.tweens[Be].run(ne);return z.notifyWith(s,[V,ne,Z]),ne<1&&Ye?Z:(Ye||z.notifyWith(s,[V,1,0]),z.resolveWith(s,[V]),!1)},V=z.promise({elem:s,props:u.extend({},o),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},f),originalProperties:o,originalOptions:f,startTime:ze||Ot(),duration:f.duration,tweens:[],createTween:function(he,Z){var ne=u.Tween(s,V.opts,he,Z,V.opts.specialEasing[he]||V.opts.easing);return V.tweens.push(ne),ne},stop:function(he){var Z=0,ne=he?V.tweens.length:0;if(M)return this;for(M=!0;Z<ne;Z++)V.tweens[Z].run(1);return he?(z.notifyWith(s,[V,1,0]),z.resolveWith(s,[V,he])):z.rejectWith(s,[V,he]),this}}),te=V.props;for(!function(he,Z){var ne,Be,Ye,Ve,Ht;for(ne in he)if(Ye=Z[Be=tt(ne)],Ve=he[ne],Array.isArray(Ve)&&(Ye=Ve[1],Ve=he[ne]=Ve[0]),ne!==Be&&(he[Be]=Ve,delete he[ne]),(Ht=u.cssHooks[Be])&&"expand"in Ht)for(ne in Ve=Ht.expand(Ve),delete he[Be],Ve)ne in he||(he[ne]=Ve[ne],Z[ne]=Ye);else Z[Be]=Ye}(te,V.opts.specialEasing);A<w;A++)if(d=He.prefilters[A].call(V,s,te,V.opts))return S(d.stop)&&(u._queueHooks(V.elem,V.opts.queue).stop=d.stop.bind(d)),d;return u.map(te,Tt,V),S(V.opts.start)&&V.opts.start.call(s,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),u.fx.timer(u.extend(H,{elem:s,anim:V,queue:V.opts.queue})),V}u.Animation=u.extend(He,{tweeners:{"*":[function(s,o){var f=this.createTween(s,o);return ce(f.elem,s,Ke.exec(o),f),f}]},tweener:function(s,o){S(s)?(o=s,s=["*"]):s=s.match(be);for(var f,d=0,M=s.length;d<M;d++)f=s[d],He.tweeners[f]=He.tweeners[f]||[],He.tweeners[f].unshift(o)},prefilters:[function(s,o,f){var d,M,A,w,z,H,V,te,he="width"in o||"height"in o,Z=this,ne={},Be=s.style,Ye=s.nodeType&&_e(s),Ve=I.get(s,"fxshow");for(d in f.queue||((w=u._queueHooks(s,"fx")).unqueued==null&&(w.unqueued=0,z=w.empty.fire,w.empty.fire=function(){w.unqueued||z()}),w.unqueued++,Z.always(function(){Z.always(function(){w.unqueued--,u.queue(s,"fx").length||w.empty.fire()})})),o)if(M=o[d],qe.test(M)){if(delete o[d],A=A||M==="toggle",M===(Ye?"hide":"show")){if(M!=="show"||!Ve||Ve[d]===void 0)continue;Ye=!0}ne[d]=Ve&&Ve[d]||u.style(s,d)}if((H=!u.isEmptyObject(o))||!u.isEmptyObject(ne))for(d in he&&s.nodeType===1&&(f.overflow=[Be.overflow,Be.overflowX,Be.overflowY],(V=Ve&&Ve.display)==null&&(V=I.get(s,"display")),(te=u.css(s,"display"))==="none"&&(V?te=V:(Re([s],!0),V=s.style.display||V,te=u.css(s,"display"),Re([s]))),(te==="inline"||te==="inline-block"&&V!=null)&&u.css(s,"float")==="none"&&(H||(Z.done(function(){Be.display=V}),V==null&&(te=Be.display,V=te==="none"?"":te)),Be.display="inline-block")),f.overflow&&(Be.overflow="hidden",Z.always(function(){Be.overflow=f.overflow[0],Be.overflowX=f.overflow[1],Be.overflowY=f.overflow[2]})),H=!1,ne)H||(Ve?"hidden"in Ve&&(Ye=Ve.hidden):Ve=I.access(s,"fxshow",{display:V}),A&&(Ve.hidden=!Ye),Ye&&Re([s],!0),Z.done(function(){for(d in Ye||Re([s]),I.remove(s,"fxshow"),ne)u.style(s,d,ne[d])})),H=Tt(Ye?Ve[d]:0,d,Z),d in Ve||(Ve[d]=H.start,Ye&&(H.end=H.start,H.start=0))}],prefilter:function(s,o){o?He.prefilters.unshift(s):He.prefilters.push(s)}}),u.speed=function(s,o,f){var d=s&&typeof s=="object"?u.extend({},s):{complete:f||!f&&o||S(s)&&s,duration:s,easing:f&&o||o&&!S(o)&&o};return u.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in u.fx.speeds?d.duration=u.fx.speeds[d.duration]:d.duration=u.fx.speeds._default),d.queue!=null&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){S(d.old)&&d.old.call(this),d.queue&&u.dequeue(this,d.queue)},d},u.fn.extend({fadeTo:function(s,o,f,d){return this.filter(_e).css("opacity",0).show().end().animate({opacity:o},s,f,d)},animate:function(s,o,f,d){var M=u.isEmptyObject(s),A=u.speed(o,f,d),w=function(){var z=He(this,u.extend({},s),A);(M||I.get(this,"finish"))&&z.stop(!0)};return w.finish=w,M||A.queue===!1?this.each(w):this.queue(A.queue,w)},stop:function(s,o,f){var d=function(M){var A=M.stop;delete M.stop,A(f)};return typeof s!="string"&&(f=o,o=s,s=void 0),o&&this.queue(s||"fx",[]),this.each(function(){var M=!0,A=s!=null&&s+"queueHooks",w=u.timers,z=I.get(this);if(A)z[A]&&z[A].stop&&d(z[A]);else for(A in z)z[A]&&z[A].stop&&Ct.test(A)&&d(z[A]);for(A=w.length;A--;)w[A].elem!==this||s!=null&&w[A].queue!==s||(w[A].anim.stop(f),M=!1,w.splice(A,1));!M&&f||u.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var o,f=I.get(this),d=f[s+"queue"],M=f[s+"queueHooks"],A=u.timers,w=d?d.length:0;for(f.finish=!0,u.queue(this,s,[]),M&&M.stop&&M.stop.call(this,!0),o=A.length;o--;)A[o].elem===this&&A[o].queue===s&&(A[o].anim.stop(!0),A.splice(o,1));for(o=0;o<w;o++)d[o]&&d[o].finish&&d[o].finish.call(this);delete f.finish})}}),u.each(["toggle","show","hide"],function(s,o){var f=u.fn[o];u.fn[o]=function(d,M,A){return d==null||typeof d=="boolean"?f.apply(this,arguments):this.animate(rn(o,!0),d,M,A)}}),u.each({slideDown:rn("show"),slideUp:rn("hide"),slideToggle:rn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,o){u.fn[s]=function(f,d,M){return this.animate(o,f,d,M)}}),u.timers=[],u.fx.tick=function(){var s,o=0,f=u.timers;for(ze=Date.now();o<f.length;o++)(s=f[o])()||f[o]!==s||f.splice(o--,1);f.length||u.fx.stop(),ze=void 0},u.fx.timer=function(s){u.timers.push(s),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Ge||(Ge=!0,Ut())},u.fx.stop=function(){Ge=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(s,o){return s=u.fx&&u.fx.speeds[s]||s,o=o||"fx",this.queue(o,function(f,d){var M=i.setTimeout(f,s);d.stop=function(){i.clearTimeout(M)}})},Ze=g.createElement("input"),et=g.createElement("select").appendChild(g.createElement("option")),Ze.type="checkbox",y.checkOn=Ze.value!=="",y.optSelected=et.selected,(Ze=g.createElement("input")).value="t",Ze.type="radio",y.radioValue=Ze.value==="t";var jt,vt=u.expr.attrHandle;u.fn.extend({attr:function(s,o){return Le(this,u.attr,s,o,1<arguments.length)},removeAttr:function(s){return this.each(function(){u.removeAttr(this,s)})}}),u.extend({attr:function(s,o,f){var d,M,A=s.nodeType;if(A!==3&&A!==8&&A!==2)return typeof s.getAttribute>"u"?u.prop(s,o,f):(A===1&&u.isXMLDoc(s)||(M=u.attrHooks[o.toLowerCase()]||(u.expr.match.bool.test(o)?jt:void 0)),f!==void 0?f===null?void u.removeAttr(s,o):M&&"set"in M&&(d=M.set(s,f,o))!==void 0?d:(s.setAttribute(o,f+""),f):M&&"get"in M&&(d=M.get(s,o))!==null?d:(d=u.find.attr(s,o))==null?void 0:d)},attrHooks:{type:{set:function(s,o){if(!y.radioValue&&o==="radio"&&P(s,"input")){var f=s.value;return s.setAttribute("type",o),f&&(s.value=f),o}}}},removeAttr:function(s,o){var f,d=0,M=o&&o.match(be);if(M&&s.nodeType===1)for(;f=M[d++];)s.removeAttribute(f)}}),jt={set:function(s,o,f){return o===!1?u.removeAttr(s,f):s.setAttribute(f,f),f}},u.each(u.expr.match.bool.source.match(/\w+/g),function(s,o){var f=vt[o]||u.find.attr;vt[o]=function(d,M,A){var w,z,H=M.toLowerCase();return A||(z=vt[H],vt[H]=w,w=f(d,M,A)!=null?H:null,vt[H]=z),w}});var Sn=/^(?:input|select|textarea|button)$/i,vi=/^(?:a|area)$/i;function Wt(s){return(s.match(be)||[]).join(" ")}function Bn(s){return s.getAttribute&&s.getAttribute("class")||""}function Bt(s){return Array.isArray(s)?s:typeof s=="string"&&s.match(be)||[]}u.fn.extend({prop:function(s,o){return Le(this,u.prop,s,o,1<arguments.length)},removeProp:function(s){return this.each(function(){delete this[u.propFix[s]||s]})}}),u.extend({prop:function(s,o,f){var d,M,A=s.nodeType;if(A!==3&&A!==8&&A!==2)return A===1&&u.isXMLDoc(s)||(o=u.propFix[o]||o,M=u.propHooks[o]),f!==void 0?M&&"set"in M&&(d=M.set(s,f,o))!==void 0?d:s[o]=f:M&&"get"in M&&(d=M.get(s,o))!==null?d:s[o]},propHooks:{tabIndex:{get:function(s){var o=u.find.attr(s,"tabindex");return o?parseInt(o,10):Sn.test(s.nodeName)||vi.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(u.propHooks.selected={get:function(s){var o=s.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(s){var o=s.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this}),u.fn.extend({addClass:function(s){var o,f,d,M,A,w,z,H=0;if(S(s))return this.each(function(V){u(this).addClass(s.call(this,V,Bn(this)))});if((o=Bt(s)).length){for(;f=this[H++];)if(M=Bn(f),d=f.nodeType===1&&" "+Wt(M)+" "){for(w=0;A=o[w++];)d.indexOf(" "+A+" ")<0&&(d+=A+" ");M!==(z=Wt(d))&&f.setAttribute("class",z)}}return this},removeClass:function(s){var o,f,d,M,A,w,z,H=0;if(S(s))return this.each(function(V){u(this).removeClass(s.call(this,V,Bn(this)))});if(!arguments.length)return this.attr("class","");if((o=Bt(s)).length){for(;f=this[H++];)if(M=Bn(f),d=f.nodeType===1&&" "+Wt(M)+" "){for(w=0;A=o[w++];)for(;-1<d.indexOf(" "+A+" ");)d=d.replace(" "+A+" "," ");M!==(z=Wt(d))&&f.setAttribute("class",z)}}return this},toggleClass:function(s,o){var f=typeof s,d=f==="string"||Array.isArray(s);return typeof o=="boolean"&&d?o?this.addClass(s):this.removeClass(s):S(s)?this.each(function(M){u(this).toggleClass(s.call(this,M,Bn(this),o),o)}):this.each(function(){var M,A,w,z;if(d)for(A=0,w=u(this),z=Bt(s);M=z[A++];)w.hasClass(M)?w.removeClass(M):w.addClass(M);else s!==void 0&&f!=="boolean"||((M=Bn(this))&&I.set(this,"__className__",M),this.setAttribute&&this.setAttribute("class",M||s===!1?"":I.get(this,"__className__")||""))})},hasClass:function(s){var o,f,d=0;for(o=" "+s+" ";f=this[d++];)if(f.nodeType===1&&-1<(" "+Wt(Bn(f))+" ").indexOf(o))return!0;return!1}});var Kn=/\r/g;u.fn.extend({val:function(s){var o,f,d,M=this[0];return arguments.length?(d=S(s),this.each(function(A){var w;this.nodeType===1&&((w=d?s.call(this,A,u(this).val()):s)==null?w="":typeof w=="number"?w+="":Array.isArray(w)&&(w=u.map(w,function(z){return z==null?"":z+""})),(o=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()])&&"set"in o&&o.set(this,w,"value")!==void 0||(this.value=w))})):M?(o=u.valHooks[M.type]||u.valHooks[M.nodeName.toLowerCase()])&&"get"in o&&(f=o.get(M,"value"))!==void 0?f:typeof(f=M.value)=="string"?f.replace(Kn,""):f??"":void 0}}),u.extend({valHooks:{option:{get:function(s){var o=u.find.attr(s,"value");return o??Wt(u.text(s))}},select:{get:function(s){var o,f,d,M=s.options,A=s.selectedIndex,w=s.type==="select-one",z=w?null:[],H=w?A+1:M.length;for(d=A<0?H:w?A:0;d<H;d++)if(((f=M[d]).selected||d===A)&&!f.disabled&&(!f.parentNode.disabled||!P(f.parentNode,"optgroup"))){if(o=u(f).val(),w)return o;z.push(o)}return z},set:function(s,o){for(var f,d,M=s.options,A=u.makeArray(o),w=M.length;w--;)((d=M[w]).selected=-1<u.inArray(u.valHooks.option.get(d),A))&&(f=!0);return f||(s.selectedIndex=-1),A}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(s,o){if(Array.isArray(o))return s.checked=-1<u.inArray(u(s).val(),o)}},y.checkOn||(u.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})}),y.focusin="onfocusin"in i;var $i=/^(?:focusinfocus|focusoutblur)$/,hn=function(s){s.stopPropagation()};u.extend(u.event,{trigger:function(s,o,f,d){var M,A,w,z,H,V,te,he,Z=[f||g],ne=m.call(s,"type")?s.type:s,Be=m.call(s,"namespace")?s.namespace.split("."):[];if(A=he=w=f=f||g,f.nodeType!==3&&f.nodeType!==8&&!$i.test(ne+u.event.triggered)&&(-1<ne.indexOf(".")&&(ne=(Be=ne.split(".")).shift(),Be.sort()),H=ne.indexOf(":")<0&&"on"+ne,(s=s[u.expando]?s:new u.Event(ne,typeof s=="object"&&s)).isTrigger=d?2:3,s.namespace=Be.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+Be.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=f),o=o==null?[s]:u.makeArray(o,[s]),te=u.event.special[ne]||{},d||!te.trigger||te.trigger.apply(f,o)!==!1)){if(!d&&!te.noBubble&&!L(f)){for(z=te.delegateType||ne,$i.test(z+ne)||(A=A.parentNode);A;A=A.parentNode)Z.push(A),w=A;w===(f.ownerDocument||g)&&Z.push(w.defaultView||w.parentWindow||i)}for(M=0;(A=Z[M++])&&!s.isPropagationStopped();)he=A,s.type=1<M?z:te.bindType||ne,(V=(I.get(A,"events")||Object.create(null))[s.type]&&I.get(A,"handle"))&&V.apply(A,o),(V=H&&A[H])&&V.apply&&gt(A)&&(s.result=V.apply(A,o),s.result===!1&&s.preventDefault());return s.type=ne,d||s.isDefaultPrevented()||te._default&&te._default.apply(Z.pop(),o)!==!1||!gt(f)||H&&S(f[ne])&&!L(f)&&((w=f[H])&&(f[H]=null),u.event.triggered=ne,s.isPropagationStopped()&&he.addEventListener(ne,hn),f[ne](),s.isPropagationStopped()&&he.removeEventListener(ne,hn),u.event.triggered=void 0,w&&(f[H]=w)),s.result}},simulate:function(s,o,f){var d=u.extend(new u.Event,f,{type:s,isSimulated:!0});u.event.trigger(d,null,o)}}),u.fn.extend({trigger:function(s,o){return this.each(function(){u.event.trigger(s,o,this)})},triggerHandler:function(s,o){var f=this[0];if(f)return u.event.trigger(s,o,f,!0)}}),y.focusin||u.each({focus:"focusin",blur:"focusout"},function(s,o){var f=function(d){u.event.simulate(o,d.target,u.event.fix(d))};u.event.special[o]={setup:function(){var d=this.ownerDocument||this.document||this,M=I.access(d,o);M||d.addEventListener(s,f,!0),I.access(d,o,(M||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,M=I.access(d,o)-1;M?I.access(d,o,M):(d.removeEventListener(s,f,!0),I.remove(d,o))}}});var ii=i.location,is={guid:Date.now()},Ji=/\?/;u.parseXML=function(s){var o,f;if(!s||typeof s!="string")return null;try{o=new i.DOMParser().parseFromString(s,"text/xml")}catch{}return f=o&&o.getElementsByTagName("parsererror")[0],o&&!f||u.error("Invalid XML: "+(f?u.map(f.childNodes,function(d){return d.textContent}).join(`
`):s)),o};var Uc=/\[\]$/,ko=/\r?\n/g,Ic=/^(?:submit|button|image|reset|file)$/i,Nc=/^(?:input|select|textarea|keygen)/i;function ea(s,o,f,d){var M;if(Array.isArray(o))u.each(o,function(A,w){f||Uc.test(s)?d(s,w):ea(s+"["+(typeof w=="object"&&w!=null?A:"")+"]",w,f,d)});else if(f||U(o)!=="object")d(s,o);else for(M in o)ea(s+"["+M+"]",o[M],f,d)}u.param=function(s,o){var f,d=[],M=function(A,w){var z=S(w)?w():w;d[d.length]=encodeURIComponent(A)+"="+encodeURIComponent(z??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!u.isPlainObject(s))u.each(s,function(){M(this.name,this.value)});else for(f in s)ea(f,s[f],o,M);return d.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=u.prop(this,"elements");return s?u.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!u(this).is(":disabled")&&Nc.test(this.nodeName)&&!Ic.test(s)&&(this.checked||!Se.test(s))}).map(function(s,o){var f=u(this).val();return f==null?null:Array.isArray(f)?u.map(f,function(d){return{name:o.name,value:d.replace(ko,`\r
`)}}):{name:o.name,value:f.replace(ko,`\r
`)}}).get()}});var Fc=/%20/g,Oc=/#.*$/,Bc=/([?&])_=[^&]*/,zc=/^(.*?):[ \t]*([^\r\n]*)$/gm,Hc=/^(?:GET|HEAD)$/,kc=/^\/\//,Go={},ta={},Vo="*/".concat("*"),na=g.createElement("a");function Wo(s){return function(o,f){typeof o!="string"&&(f=o,o="*");var d,M=0,A=o.toLowerCase().match(be)||[];if(S(f))for(;d=A[M++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(f)):(s[d]=s[d]||[]).push(f)}}function Xo(s,o,f,d){var M={},A=s===ta;function w(z){var H;return M[z]=!0,u.each(s[z]||[],function(V,te){var he=te(o,f,d);return typeof he!="string"||A||M[he]?A?!(H=he):void 0:(o.dataTypes.unshift(he),w(he),!1)}),H}return w(o.dataTypes[0])||!M["*"]&&w("*")}function ia(s,o){var f,d,M=u.ajaxSettings.flatOptions||{};for(f in o)o[f]!==void 0&&((M[f]?s:d||(d={}))[f]=o[f]);return d&&u.extend(!0,s,d),s}na.href=ii.href,u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ii.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ii.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Vo,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,o){return o?ia(ia(s,u.ajaxSettings),o):ia(u.ajaxSettings,s)},ajaxPrefilter:Wo(Go),ajaxTransport:Wo(ta),ajax:function(s,o){typeof s=="object"&&(o=s,s=void 0),o=o||{};var f,d,M,A,w,z,H,V,te,he,Z=u.ajaxSetup({},o),ne=Z.context||Z,Be=Z.context&&(ne.nodeType||ne.jquery)?u(ne):u.event,Ye=u.Deferred(),Ve=u.Callbacks("once memory"),Ht=Z.statusCode||{},Jt={},En={},It="canceled",st={readyState:0,getResponseHeader:function(bt){var kt;if(H){if(!A)for(A={};kt=zc.exec(M);)A[kt[1].toLowerCase()+" "]=(A[kt[1].toLowerCase()+" "]||[]).concat(kt[2]);kt=A[bt.toLowerCase()+" "]}return kt==null?null:kt.join(", ")},getAllResponseHeaders:function(){return H?M:null},setRequestHeader:function(bt,kt){return H==null&&(bt=En[bt.toLowerCase()]=En[bt.toLowerCase()]||bt,Jt[bt]=kt),this},overrideMimeType:function(bt){return H==null&&(Z.mimeType=bt),this},statusCode:function(bt){var kt;if(bt)if(H)st.always(bt[st.status]);else for(kt in bt)Ht[kt]=[Ht[kt],bt[kt]];return this},abort:function(bt){var kt=bt||It;return f&&f.abort(kt),vn(0,kt),this}};if(Ye.promise(st),Z.url=((s||Z.url||ii.href)+"").replace(kc,ii.protocol+"//"),Z.type=o.method||o.type||Z.method||Z.type,Z.dataTypes=(Z.dataType||"*").toLowerCase().match(be)||[""],Z.crossDomain==null){z=g.createElement("a");try{z.href=Z.url,z.href=z.href,Z.crossDomain=na.protocol+"//"+na.host!=z.protocol+"//"+z.host}catch{Z.crossDomain=!0}}if(Z.data&&Z.processData&&typeof Z.data!="string"&&(Z.data=u.param(Z.data,Z.traditional)),Xo(Go,Z,o,st),H)return st;for(te in(V=u.event&&Z.global)&&u.active++==0&&u.event.trigger("ajaxStart"),Z.type=Z.type.toUpperCase(),Z.hasContent=!Hc.test(Z.type),d=Z.url.replace(Oc,""),Z.hasContent?Z.data&&Z.processData&&(Z.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Z.data=Z.data.replace(Fc,"+")):(he=Z.url.slice(d.length),Z.data&&(Z.processData||typeof Z.data=="string")&&(d+=(Ji.test(d)?"&":"?")+Z.data,delete Z.data),Z.cache===!1&&(d=d.replace(Bc,"$1"),he=(Ji.test(d)?"&":"?")+"_="+is.guid+++he),Z.url=d+he),Z.ifModified&&(u.lastModified[d]&&st.setRequestHeader("If-Modified-Since",u.lastModified[d]),u.etag[d]&&st.setRequestHeader("If-None-Match",u.etag[d])),(Z.data&&Z.hasContent&&Z.contentType!==!1||o.contentType)&&st.setRequestHeader("Content-Type",Z.contentType),st.setRequestHeader("Accept",Z.dataTypes[0]&&Z.accepts[Z.dataTypes[0]]?Z.accepts[Z.dataTypes[0]]+(Z.dataTypes[0]!=="*"?", "+Vo+"; q=0.01":""):Z.accepts["*"]),Z.headers)st.setRequestHeader(te,Z.headers[te]);if(Z.beforeSend&&(Z.beforeSend.call(ne,st,Z)===!1||H))return st.abort();if(It="abort",Ve.add(Z.complete),st.done(Z.success),st.fail(Z.error),f=Xo(ta,Z,o,st)){if(st.readyState=1,V&&Be.trigger("ajaxSend",[st,Z]),H)return st;Z.async&&0<Z.timeout&&(w=i.setTimeout(function(){st.abort("timeout")},Z.timeout));try{H=!1,f.send(Jt,vn)}catch(bt){if(H)throw bt;vn(-1,bt)}}else vn(-1,"No Transport");function vn(bt,kt,Br,rs){var Tn,Ii,Qi,xn,er,Ln=kt;H||(H=!0,w&&i.clearTimeout(w),f=void 0,M=rs||"",st.readyState=0<bt?4:0,Tn=200<=bt&&bt<300||bt===304,Br&&(xn=function(Gt,bn,An){for(var Zn,ot,Rt,Qt,wn=Gt.contents,Kt=Gt.dataTypes;Kt[0]==="*";)Kt.shift(),Zn===void 0&&(Zn=Gt.mimeType||bn.getResponseHeader("Content-Type"));if(Zn){for(ot in wn)if(wn[ot]&&wn[ot].test(Zn)){Kt.unshift(ot);break}}if(Kt[0]in An)Rt=Kt[0];else{for(ot in An){if(!Kt[0]||Gt.converters[ot+" "+Kt[0]]){Rt=ot;break}Qt||(Qt=ot)}Rt=Rt||Qt}if(Rt)return Rt!==Kt[0]&&Kt.unshift(Rt),An[Rt]}(Z,st,Br)),!Tn&&-1<u.inArray("script",Z.dataTypes)&&u.inArray("json",Z.dataTypes)<0&&(Z.converters["text script"]=function(){}),xn=function(Gt,bn,An,Zn){var ot,Rt,Qt,wn,Kt,Cn={},tr=Gt.dataTypes.slice();if(tr[1])for(Qt in Gt.converters)Cn[Qt.toLowerCase()]=Gt.converters[Qt];for(Rt=tr.shift();Rt;)if(Gt.responseFields[Rt]&&(An[Gt.responseFields[Rt]]=bn),!Kt&&Zn&&Gt.dataFilter&&(bn=Gt.dataFilter(bn,Gt.dataType)),Kt=Rt,Rt=tr.shift()){if(Rt==="*")Rt=Kt;else if(Kt!=="*"&&Kt!==Rt){if(!(Qt=Cn[Kt+" "+Rt]||Cn["* "+Rt])){for(ot in Cn)if((wn=ot.split(" "))[1]===Rt&&(Qt=Cn[Kt+" "+wn[0]]||Cn["* "+wn[0]])){Qt===!0?Qt=Cn[ot]:Cn[ot]!==!0&&(Rt=wn[0],tr.unshift(wn[1]));break}}if(Qt!==!0)if(Qt&&Gt.throws)bn=Qt(bn);else try{bn=Qt(bn)}catch(ss){return{state:"parsererror",error:Qt?ss:"No conversion from "+Kt+" to "+Rt}}}}return{state:"success",data:bn}}(Z,xn,st,Tn),Tn?(Z.ifModified&&((er=st.getResponseHeader("Last-Modified"))&&(u.lastModified[d]=er),(er=st.getResponseHeader("etag"))&&(u.etag[d]=er)),bt===204||Z.type==="HEAD"?Ln="nocontent":bt===304?Ln="notmodified":(Ln=xn.state,Ii=xn.data,Tn=!(Qi=xn.error))):(Qi=Ln,!bt&&Ln||(Ln="error",bt<0&&(bt=0))),st.status=bt,st.statusText=(kt||Ln)+"",Tn?Ye.resolveWith(ne,[Ii,Ln,st]):Ye.rejectWith(ne,[st,Ln,Qi]),st.statusCode(Ht),Ht=void 0,V&&Be.trigger(Tn?"ajaxSuccess":"ajaxError",[st,Z,Tn?Ii:Qi]),Ve.fireWith(ne,[st,Ln]),V&&(Be.trigger("ajaxComplete",[st,Z]),--u.active||u.event.trigger("ajaxStop")))}return st},getJSON:function(s,o,f){return u.get(s,o,f,"json")},getScript:function(s,o){return u.get(s,void 0,o,"script")}}),u.each(["get","post"],function(s,o){u[o]=function(f,d,M,A){return S(d)&&(A=A||M,M=d,d=void 0),u.ajax(u.extend({url:f,type:o,dataType:A,data:d,success:M},u.isPlainObject(f)&&f))}}),u.ajaxPrefilter(function(s){var o;for(o in s.headers)o.toLowerCase()==="content-type"&&(s.contentType=s.headers[o]||"")}),u._evalUrl=function(s,o,f){return u.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){u.globalEval(d,o,f)}})},u.fn.extend({wrapAll:function(s){var o;return this[0]&&(S(s)&&(s=s.call(this[0])),o=u(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(s){return S(s)?this.each(function(o){u(this).wrapInner(s.call(this,o))}):this.each(function(){var o=u(this),f=o.contents();f.length?f.wrapAll(s):o.append(s)})},wrap:function(s){var o=S(s);return this.each(function(f){u(this).wrapAll(o?s.call(this,f):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(s){return!u.expr.pseudos.visible(s)},u.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch{}};var Gc={0:200,1223:204},Or=u.ajaxSettings.xhr();y.cors=!!Or&&"withCredentials"in Or,y.ajax=Or=!!Or,u.ajaxTransport(function(s){var o,f;if(y.cors||Or&&!s.crossDomain)return{send:function(d,M){var A,w=s.xhr();if(w.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(A in s.xhrFields)w[A]=s.xhrFields[A];for(A in s.mimeType&&w.overrideMimeType&&w.overrideMimeType(s.mimeType),s.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest"),d)w.setRequestHeader(A,d[A]);o=function(z){return function(){o&&(o=f=w.onload=w.onerror=w.onabort=w.ontimeout=w.onreadystatechange=null,z==="abort"?w.abort():z==="error"?typeof w.status!="number"?M(0,"error"):M(w.status,w.statusText):M(Gc[w.status]||w.status,w.statusText,(w.responseType||"text")!=="text"||typeof w.responseText!="string"?{binary:w.response}:{text:w.responseText},w.getAllResponseHeaders()))}},w.onload=o(),f=w.onerror=w.ontimeout=o("error"),w.onabort!==void 0?w.onabort=f:w.onreadystatechange=function(){w.readyState===4&&i.setTimeout(function(){o&&f()})},o=o("abort");try{w.send(s.hasContent&&s.data||null)}catch(z){if(o)throw z}},abort:function(){o&&o()}}}),u.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return u.globalEval(s),s}}}),u.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),u.ajaxTransport("script",function(s){var o,f;if(s.crossDomain||s.scriptAttrs)return{send:function(d,M){o=u("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",f=function(A){o.remove(),f=null,A&&M(A.type==="error"?404:200,A.type)}),g.head.appendChild(o[0])},abort:function(){f&&f()}}});var qo,Yo=[],ra=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Yo.pop()||u.expando+"_"+is.guid++;return this[s]=!0,s}}),u.ajaxPrefilter("json jsonp",function(s,o,f){var d,M,A,w=s.jsonp!==!1&&(ra.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ra.test(s.data)&&"data");if(w||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=S(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,w?s[w]=s[w].replace(ra,"$1"+d):s.jsonp!==!1&&(s.url+=(Ji.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return A||u.error(d+" was not called"),A[0]},s.dataTypes[0]="json",M=i[d],i[d]=function(){A=arguments},f.always(function(){M===void 0?u(i).removeProp(d):i[d]=M,s[d]&&(s.jsonpCallback=o.jsonpCallback,Yo.push(d)),A&&S(M)&&M(A[0]),A=M=void 0}),"script"}),y.createHTMLDocument=((qo=g.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",qo.childNodes.length===2),u.parseHTML=function(s,o,f){return typeof s!="string"?[]:(typeof o=="boolean"&&(f=o,o=!1),o||(y.createHTMLDocument?((d=(o=g.implementation.createHTMLDocument("")).createElement("base")).href=g.location.href,o.head.appendChild(d)):o=g),A=!f&&[],(M=ee.exec(s))?[o.createElement(M[1])]:(M=Dt([s],o,A),A&&A.length&&u(A).remove(),u.merge([],M.childNodes)));var d,M,A},u.fn.load=function(s,o,f){var d,M,A,w=this,z=s.indexOf(" ");return-1<z&&(d=Wt(s.slice(z)),s=s.slice(0,z)),S(o)?(f=o,o=void 0):o&&typeof o=="object"&&(M="POST"),0<w.length&&u.ajax({url:s,type:M||"GET",dataType:"html",data:o}).done(function(H){A=arguments,w.html(d?u("<div>").append(u.parseHTML(H)).find(d):H)}).always(f&&function(H,V){w.each(function(){f.apply(this,A||[H.responseText,V,H])})}),this},u.expr.pseudos.animated=function(s){return u.grep(u.timers,function(o){return s===o.elem}).length},u.offset={setOffset:function(s,o,f){var d,M,A,w,z,H,V=u.css(s,"position"),te=u(s),he={};V==="static"&&(s.style.position="relative"),z=te.offset(),A=u.css(s,"top"),H=u.css(s,"left"),(V==="absolute"||V==="fixed")&&-1<(A+H).indexOf("auto")?(w=(d=te.position()).top,M=d.left):(w=parseFloat(A)||0,M=parseFloat(H)||0),S(o)&&(o=o.call(s,f,u.extend({},z))),o.top!=null&&(he.top=o.top-z.top+w),o.left!=null&&(he.left=o.left-z.left+M),"using"in o?o.using.call(s,he):te.css(he)}},u.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(M){u.offset.setOffset(this,s,M)});var o,f,d=this[0];return d?d.getClientRects().length?(o=d.getBoundingClientRect(),f=d.ownerDocument.defaultView,{top:o.top+f.pageYOffset,left:o.left+f.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var s,o,f,d=this[0],M={top:0,left:0};if(u.css(d,"position")==="fixed")o=d.getBoundingClientRect();else{for(o=this.offset(),f=d.ownerDocument,s=d.offsetParent||f.documentElement;s&&(s===f.body||s===f.documentElement)&&u.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&((M=u(s).offset()).top+=u.css(s,"borderTopWidth",!0),M.left+=u.css(s,"borderLeftWidth",!0))}return{top:o.top-M.top-u.css(d,"marginTop",!0),left:o.left-M.left-u.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&u.css(s,"position")==="static";)s=s.offsetParent;return s||T})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,o){var f=o==="pageYOffset";u.fn[s]=function(d){return Le(this,function(M,A,w){var z;if(L(M)?z=M:M.nodeType===9&&(z=M.defaultView),w===void 0)return z?z[o]:M[A];z?z.scrollTo(f?z.pageXOffset:w,f?w:z.pageYOffset):M[A]=w},s,d,arguments.length)}}),u.each(["top","left"],function(s,o){u.cssHooks[o]=Ui(y.pixelPosition,function(f,d){if(d)return d=_i(f,o),Li.test(d)?u(f).position()[o]+"px":d})}),u.each({Height:"height",Width:"width"},function(s,o){u.each({padding:"inner"+s,content:o,"":"outer"+s},function(f,d){u.fn[d]=function(M,A){var w=arguments.length&&(f||typeof M!="boolean"),z=f||(M===!0||A===!0?"margin":"border");return Le(this,function(H,V,te){var he;return L(H)?d.indexOf("outer")===0?H["inner"+s]:H.document.documentElement["client"+s]:H.nodeType===9?(he=H.documentElement,Math.max(H.body["scroll"+s],he["scroll"+s],H.body["offset"+s],he["offset"+s],he["client"+s])):te===void 0?u.css(H,V,z):u.style(H,V,te,z)},o,w?M:void 0,w)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,o){u.fn[o]=function(f){return this.on(o,f)}}),u.fn.extend({bind:function(s,o,f){return this.on(s,null,o,f)},unbind:function(s,o){return this.off(s,null,o)},delegate:function(s,o,f,d){return this.on(o,s,f,d)},undelegate:function(s,o,f){return arguments.length===1?this.off(s,"**"):this.off(o,s||"**",f)},hover:function(s,o){return this.mouseenter(s).mouseleave(o||s)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,o){u.fn[o]=function(f,d){return 0<arguments.length?this.on(o,null,f,d):this.trigger(o)}});var Vc=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;u.proxy=function(s,o){var f,d,M;if(typeof o=="string"&&(f=s[o],o=s,s=f),S(s))return d=r.call(arguments,2),(M=function(){return s.apply(o||this,d.concat(r.call(arguments)))}).guid=s.guid=s.guid||u.guid++,M},u.holdReady=function(s){s?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=P,u.isFunction=S,u.isWindow=L,u.camelCase=tt,u.type=U,u.now=Date.now,u.isNumeric=function(s){var o=u.type(s);return(o==="number"||o==="string")&&!isNaN(s-parseFloat(s))},u.trim=function(s){return s==null?"":(s+"").replace(Vc,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return u});var Wc=i.jQuery,Xc=i.$;return u.noConflict=function(s){return i.$===u&&(i.$=Xc),s&&i.jQuery===u&&(i.jQuery=Wc),u},typeof e>"u"&&(i.jQuery=i.$=u),u});(function(i){function e(l,h){var p,m,_;if((p=i(l))[t]==0)return n;switch(m=p[a]()[r],h.anchor){case"middle":_=m-(i(window).height()-p.outerHeight())/2;break;default:case r:_=Math.max(m,0)}return typeof h[a]=="function"?_-=h[a]():_-=h[a],_}var t="length",n=null,r="top",a="offset",c="click.scrolly";i(window),i.fn.scrolly=function(l){var h,p,m,_,x=i(this);if(this[t]==0)return x;if(this[t]>1){for(h=0;h<this[t];h++)i(this[h]).scrolly(l);return x}if(_=n,m=x.attr("href"),m.charAt(0)!="#"||m[t]<2)return x;p=jQuery.extend({anchor:r,easing:"swing",offset:0,parent:i("body,html"),pollOnce:!1,speed:1e3},l),p.pollOnce&&(_=e(m,p)),x.off(c).on(c,function(y){var S=_!==n?_:e(m,p);S!==n&&(y.preventDefault(),p.parent.stop().animate({scrollTop:S},p.speed,p.easing))})}})(jQuery);var ru=function(){var i={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(e){i._canUse||(i._canUse=document.createElement("div"));var t=i._canUse.style,n=e.charAt(0).toUpperCase()+e.slice(1);return e in t||"Moz"+n in t||"Webkit"+n in t||"O"+n in t||"ms"+n in t},init:function(){for(var e=navigator.userAgent,t="other",n=0,r=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],a=0;a<r.length;a++)if(e.match(r[a][1])){t=r[a][0],n=parseFloat(RegExp.$1);break}for(i.name=t,i.version=n,t="other",r=[["ios",/([0-9_]+) like Mac OS X/,function(c){return c.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(c){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(c){return c.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],a=n=0;a<r.length;a++)if(e.match(r[a][1])){t=r[a][0],n=parseFloat(r[a][2]?r[a][2](RegExp.$1):RegExp.$1);break}t=="mac"&&"ontouchstart"in window&&(screen.width==1024&&screen.height==1366||screen.width==834&&screen.height==1112||screen.width==810&&screen.height==1080||screen.width==768&&screen.height==1024)&&(t="ios"),i.os=t,i.osVersion=n,i.touch=i.os=="wp"?0<navigator.msMaxTouchPoints:"ontouchstart"in window,i.mobile=i.os=="wp"||i.os=="android"||i.os=="ios"||i.os=="bb"}};return i.init(),i}();(function(i,e){typeof define=="function"&&define.amd?define([],e):typeof Ho=="object"?Mr.exports=e():i.browser=e()})(void 0,function(){return ru});var su=function(){function i(t){e.init(t)}var e={list:null,media:{},events:[],init:function(t){e.list=t,window.addEventListener("resize",e.poll),window.addEventListener("orientationchange",e.poll),window.addEventListener("load",e.poll),window.addEventListener("fullscreenchange",e.poll)},active:function(t){var n,r,a,c,l,h,p;if(!(t in e.media)){if(t.substr(0,2)==">="?(r="gte",n=t.substr(2)):t.substr(0,2)=="<="?(r="lte",n=t.substr(2)):t.substr(0,1)==">"?(r="gt",n=t.substr(1)):t.substr(0,1)=="<"?(r="lt",n=t.substr(1)):t.substr(0,1)=="!"?(r="not",n=t.substr(1)):(r="eq",n=t),n&&n in e.list)if(c=e.list[n],Array.isArray(c)){if(l=parseInt(c[0]),h=parseInt(c[1]),isNaN(l)){if(isNaN(h))return;p=c[1].substr(String(h).length)}else p=c[0].substr(String(l).length);if(isNaN(l))switch(r){case"gte":a="screen";break;case"lte":a="screen and (max-width: "+h+p+")";break;case"gt":a="screen and (min-width: "+(h+1)+p+")";break;case"lt":a="screen and (max-width: -1px)";break;case"not":a="screen and (min-width: "+(h+1)+p+")";break;default:a="screen and (max-width: "+h+p+")"}else if(isNaN(h))switch(r){case"gte":a="screen and (min-width: "+l+p+")";break;case"lte":a="screen";break;case"gt":a="screen and (max-width: -1px)";break;case"lt":a="screen and (max-width: "+(l-1)+p+")";break;case"not":a="screen and (max-width: "+(l-1)+p+")";break;default:a="screen and (min-width: "+l+p+")"}else switch(r){case"gte":a="screen and (min-width: "+l+p+")";break;case"lte":a="screen and (max-width: "+h+p+")";break;case"gt":a="screen and (min-width: "+(h+1)+p+")";break;case"lt":a="screen and (max-width: "+(l-1)+p+")";break;case"not":a="screen and (max-width: "+(l-1)+p+"), screen and (min-width: "+(h+1)+p+")";break;default:a="screen and (min-width: "+l+p+") and (max-width: "+h+p+")"}}else a=c.charAt(0)=="("?"screen and "+c:c;e.media[t]=!!a&&a}return e.media[t]!==!1&&window.matchMedia(e.media[t]).matches},on:function(t,n){e.events.push({query:t,handler:n,state:!1}),e.active(t)&&n()},poll:function(){var t,n;for(t=0;t<e.events.length;t++)n=e.events[t],e.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};return i._=e,i.on=function(t,n){e.on(t,n)},i.active=function(t){return e.active(t)},i}();(function(i,e){typeof define=="function"&&define.amd?define([],e):typeof Ho=="object"?Mr.exports=e():i.breakpoints=e()})(void 0,function(){return su});(function(i){i.fn.navList=function(){var e=i(this);return $a=e.find("a"),b=[],$a.each(function(){var t=i(this),n=Math.max(0,t.parents("li").length-1),r=t.attr("href"),a=t.attr("target");b.push('<a class="link depth-'+n+'"'+(typeof a<"u"&&a!=""?' target="'+a+'"':"")+(typeof r<"u"&&r!=""?' href="'+r+'"':"")+'><span class="indent-'+n+'"></span>'+t.text()+"</a>")}),b.join("")},i.fn.panel=function(e){if(this.length==0)return n;if(this.length>1){for(var t=0;t<this.length;t++)i(this[t]).panel(e);return n}var n=i(this),r=i("body"),a=i(window),c=n.attr("id"),l;return l=i.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:n,visibleClass:"visible"},e),typeof l.target!="jQuery"&&(l.target=i(l.target)),n._hide=function(h){l.target.hasClass(l.visibleClass)&&(h&&(h.preventDefault(),h.stopPropagation()),l.target.removeClass(l.visibleClass),window.setTimeout(function(){l.resetScroll&&n.scrollTop(0),l.resetForms&&n.find("form").each(function(){this.reset()})},l.delay))},n.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),l.hideOnClick&&(n.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),n.on("click","a",function(h){var p=i(this),m=p.attr("href"),_=p.attr("target");!m||m=="#"||m==""||m=="#"+c||(h.preventDefault(),h.stopPropagation(),n._hide(),window.setTimeout(function(){_=="_blank"?window.open(m):window.location.href=m},l.delay+10))})),n.on("touchstart",function(h){n.touchPosX=h.originalEvent.touches[0].pageX,n.touchPosY=h.originalEvent.touches[0].pageY}),n.on("touchmove",function(h){if(!(n.touchPosX===null||n.touchPosY===null)){var p=n.touchPosX-h.originalEvent.touches[0].pageX,m=n.touchPosY-h.originalEvent.touches[0].pageY,_=n.outerHeight(),x=n.get(0).scrollHeight-n.scrollTop();if(l.hideOnSwipe){var y=!1,S=20,L=50;switch(l.side){case"left":y=m<S&&m>-1*S&&p>L;break;case"right":y=m<S&&m>-1*S&&p<-1*L;break;case"top":y=p<S&&p>-1*S&&m>L;break;case"bottom":y=p<S&&p>-1*S&&m<-1*L;break}if(y)return n.touchPosX=null,n.touchPosY=null,n._hide(),!1}(n.scrollTop()<0&&m<0||x>_-2&&x<_+2&&m>0)&&(h.preventDefault(),h.stopPropagation())}}),n.on("click touchend touchstart touchmove",function(h){h.stopPropagation()}),n.on("click",'a[href="#'+c+'"]',function(h){h.preventDefault(),h.stopPropagation(),l.target.removeClass(l.visibleClass)}),r.on("click touchend",function(h){n._hide(h)}),r.on("click",'a[href="#'+c+'"]',function(h){h.preventDefault(),h.stopPropagation(),l.target.toggleClass(l.visibleClass)}),l.hideOnEscape&&a.on("keydown",function(h){h.keyCode==27&&n._hide(h)}),n},i.fn.placeholder=function(){if(typeof document.createElement("input").placeholder<"u")return i(this);if(this.length==0)return t;if(this.length>1){for(var e=0;e<this.length;e++)i(this[e]).placeholder();return t}var t=i(this);return t.find("input[type=text],textarea").each(function(){var n=i(this);(n.val()==""||n.val()==n.attr("placeholder"))&&n.addClass("polyfill-placeholder").val(n.attr("placeholder"))}).on("blur",function(){var n=i(this);n.attr("name").match(/-polyfill-field$/)||n.val()==""&&n.addClass("polyfill-placeholder").val(n.attr("placeholder"))}).on("focus",function(){var n=i(this);n.attr("name").match(/-polyfill-field$/)||n.val()==n.attr("placeholder")&&n.removeClass("polyfill-placeholder").val("")}),t.find("input[type=password]").each(function(){var n=i(this),r=i(i("<div>").append(n.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));n.attr("id")!=""&&r.attr("id",n.attr("id")+"-polyfill-field"),n.attr("name")!=""&&r.attr("name",n.attr("name")+"-polyfill-field"),r.addClass("polyfill-placeholder").val(r.attr("placeholder")).insertAfter(n),n.val()==""?n.hide():r.hide(),n.on("blur",function(a){a.preventDefault();var c=n.parent().find("input[name="+n.attr("name")+"-polyfill-field]");n.val()==""&&(n.hide(),c.show())}),r.on("focus",function(a){a.preventDefault();var c=r.parent().find("input[name="+r.attr("name").replace("-polyfill-field","")+"]");r.hide(),c.show().focus()}).on("keypress",function(a){a.preventDefault(),r.val("")})}),t.on("submit",function(){t.find("input[type=text],input[type=password],textarea").each(function(n){var r=i(this);r.attr("name").match(/-polyfill-field$/)&&r.attr("name",""),r.val()==r.attr("placeholder")&&(r.removeClass("polyfill-placeholder"),r.val(""))})}).on("reset",function(n){n.preventDefault(),t.find("select").val(i("option:first").val()),t.find("input,textarea").each(function(){var r=i(this),a;switch(r.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":r.val(r.attr("defaultValue")),a=r.parent().find("input[name="+r.attr("name")+"-polyfill-field]"),r.val()==""?(r.hide(),a.show()):(r.show(),a.hide());break;case"checkbox":case"radio":r.attr("checked",r.attr("defaultValue"));break;case"text":case"textarea":r.val(r.attr("defaultValue")),r.val()==""&&(r.addClass("polyfill-placeholder"),r.val(r.attr("placeholder")));break;default:r.val(r.attr("defaultValue"));break}})}),t},i.prioritize=function(e,t){var n="__prioritize";typeof e!="jQuery"&&(e=i(e)),e.each(function(){var r=i(this),a,c=r.parent();if(c.length!=0)if(r.data(n)){if(t)return;a=r.data(n),r.insertAfter(a),r.removeData(n)}else{if(!t||(a=r.prev(),a.length==0))return;r.prependTo(c),r.data(n,a)}})}})(jQuery);(function(i){var e=i(window),t=i(document),n=i("body"),r=i("#nav");breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:[null,"736px"]}),projects.forEach(function(a,c){let l=i("<div class='col-4 col-6-medium col-12-small card'></div>"),h=i("<article class='box style2'></article>");l.append(h),h.append(i("<div class='image featured'><img src='"+a.img+"' alt='"+a.alt+"' /></div>")),h.append(i("<h3>"+a.title+"</h3>")),h.append(i("<p>"+a.shortDesc+"</p>")),i("#card-container").append(l);let p=i("<div class='modal'></div>"),m=i("<div class='modal-conent'></div>"),_=i("<div class='close-modal'></div>"),x=i("<div class='container flex' ></div>"),y=i("<div class='modal-desc'></div>"),S=i("<div class='button-container'></div>");x.append(i("<h1 class='modal-title'> "+a.title+"</>")),x.append(i("<hr class='modal-title-rule'/>")),x.append(i("<div class='image modal-image' ><img src='"+a.img+"'/></div>")),x.append(i(y)),y.append(i("<p  >"+a.longDesc+"</p>")),y.append(S),S.append(i("<a href='"+a.demo+"' class='button'>Live Demo</a>")),S.append(i("<a href='"+a.source+"' class='button'>View Source</a>")),_.append(i("<img class='close-modal-img' id='close-modal-1' src='./images/SVG/close-circle-dark.svg' />")),_.append(i("<img class='close-modal-img' id='close-modal-2' src='./images/SVG/close-circle-light.svg' />")),m.append(_),m.append(x),p.append(m),i("#modal-container").append(p)}),e.on("load",function(){window.setTimeout(function(){n.removeClass("is-preload")},100)}),t.ready(function(){i(".modal").each(function(a){var c="modal-"+a,l="#"+c;i(this).attr("id",c),i(this).find(".close-modal").click(function(){console.log("close me:",c),i(l).removeClass("in")})}),i(".box").each(function(a){var c="box-"+a;i(this).attr("id",c),i(this).on("click",function(){console.log("open me"),i("#modal-"+a).addClass("in")})}),i("form").submit(a=>{a.preventDefault();const c={name:i("form").find('input[name="name"]').val(),email:i("form").find('input[name="email"]').val(),subject:i("form").find('input[name="subject"]').val(),message:i("form").find('textarea[name="message"]').val()};return i.ajax({type:"POST",url:"https://one-off-backends.onrender.com/portfolio-email",data:c,success:l=>alert("Your message has been sent"),error:(l,h,p)=>alert("Error please reach out to me directly: max.evers8@gmail.com")}),!1})}),i("#nav a, .scrolly").scrolly({speed:1e3,offset:function(){return r.height()}})})(jQuery);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="169",au=0,nl=1,ou=2,ec=1,lu=2,fi=3,Ci=0,yn=1,hi=2,Ai=0,vr=1,il=2,rl=3,sl=4,cu=5,Wi=100,uu=101,fu=102,hu=103,du=104,pu=200,mu=201,gu=202,_u=203,Ha=204,ka=205,vu=206,xu=207,yu=208,Mu=209,Su=210,Eu=211,Tu=212,bu=213,Au=214,Ga=0,Va=1,Wa=2,Sr=3,Xa=4,qa=5,Ya=6,ja=7,tc=0,wu=1,Cu=2,wi=0,Ru=1,Pu=2,Lu=3,Du=4,Uu=5,Iu=6,Nu=7,nc=300,Er=301,Tr=302,Ka=303,Za=304,js=306,Ja=1e3,qi=1001,Qa=1002,In=1003,Fu=1004,hs=1005,Xn=1006,fa=1007,Yi=1008,mi=1009,ic=1010,rc=1011,Kr=1012,Po=1013,ji=1014,di=1015,Jr=1016,Lo=1017,Do=1018,br=1020,sc=35902,ac=1021,oc=1022,Yn=1023,lc=1024,cc=1025,xr=1026,Ar=1027,uc=1028,Uo=1029,fc=1030,Io=1031,No=1033,Fs=33776,Os=33777,Bs=33778,zs=33779,eo=35840,to=35841,no=35842,io=35843,ro=36196,so=37492,ao=37496,oo=37808,lo=37809,co=37810,uo=37811,fo=37812,ho=37813,po=37814,mo=37815,go=37816,_o=37817,vo=37818,xo=37819,yo=37820,Mo=37821,Hs=36492,So=36494,Eo=36495,hc=36283,To=36284,bo=36285,Ao=36286,Ou=3200,Bu=3201,zu=0,Hu=1,bi="",Jn="srgb",Pi="srgb-linear",Fo="display-p3",Ks="display-p3-linear",Vs="linear",zt="srgb",Ws="rec709",Xs="p3",nr=7680,al=519,ku=512,Gu=513,Vu=514,dc=515,Wu=516,Xu=517,qu=518,Yu=519,ol=35044,ll="300 es",pi=2e3,qs=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const qr=Math.PI/180,Zr=180/Math.PI;function Rr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function Oo(i,e){return(i%e+e)%e}function ju(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ku(i,e,t){return i!==e?(t-i)/(e-i):0}function Yr(i,e,t){return(1-t)*i+t*e}function Zu(i,e,t,n){return Yr(i,e,1-Math.exp(-t*n))}function $u(i,e=1){return e-Math.abs(Oo(i,e*2)-e)}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ef(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tf(i,e){return i+Math.random()*(e-i)}function nf(i){return i*(.5-Math.random())}function rf(i){i!==void 0&&(cl=i);let e=cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sf(i){return i*qr}function af(i){return i*Zr}function of(i){return(i&i-1)===0&&i!==0}function lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uf(i,e,t,n,r){const a=Math.cos,c=Math.sin,l=a(t/2),h=c(t/2),p=a((e+n)/2),m=c((e+n)/2),_=a((e-n)/2),x=c((e-n)/2),y=a((n-e)/2),S=c((n-e)/2);switch(r){case"XYX":i.set(l*m,h*_,h*x,l*p);break;case"YZY":i.set(h*x,l*m,h*_,l*p);break;case"ZXZ":i.set(h*_,h*x,l*m,l*p);break;case"XZX":i.set(l*m,h*S,h*y,l*p);break;case"YXY":i.set(h*y,l*m,h*S,l*p);break;case"ZYZ":i.set(h*S,h*y,l*m,l*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ff={DEG2RAD:qr,RAD2DEG:Zr,generateUUID:Rr,clamp:gn,euclideanModulo:Oo,mapLinear:ju,inverseLerp:Ku,lerp:Yr,damp:Zu,pingpong:$u,smoothstep:Ju,smootherstep:Qu,randInt:ef,randFloat:tf,randFloatSpread:nf,seededRandom:rf,degToRad:sf,radToDeg:af,isPowerOfTwo:of,ceilPowerOfTwo:lf,floorPowerOfTwo:cf,setQuaternionFromProperEuler:uf,normalize:pn,denormalize:gr};class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*r+e.x,this.y=a*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,r,a,c,l,h,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,l,h,p)}set(e,t,n,r,a,c,l,h,p){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=a,m[5]=h,m[6]=n,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],l=n[3],h=n[6],p=n[1],m=n[4],_=n[7],x=n[2],y=n[5],S=n[8],L=r[0],g=r[3],v=r[6],O=r[1],U=r[4],N=r[7],u=r[2],X=r[5],B=r[8];return a[0]=c*L+l*O+h*u,a[3]=c*g+l*U+h*X,a[6]=c*v+l*N+h*B,a[1]=p*L+m*O+_*u,a[4]=p*g+m*U+_*X,a[7]=p*v+m*N+_*B,a[2]=x*L+y*O+S*u,a[5]=x*g+y*U+S*X,a[8]=x*v+y*N+S*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],l=e[5],h=e[6],p=e[7],m=e[8];return t*c*m-t*l*p-n*a*m+n*l*h+r*a*p-r*c*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],l=e[5],h=e[6],p=e[7],m=e[8],_=m*c-l*p,x=l*h-m*a,y=p*a-c*h,S=t*_+n*x+r*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/S;return e[0]=_*L,e[1]=(r*p-m*n)*L,e[2]=(l*n-r*c)*L,e[3]=x*L,e[4]=(m*t-r*h)*L,e[5]=(r*a-l*t)*L,e[6]=y*L,e[7]=(n*h-p*t)*L,e[8]=(c*t-n*a)*L,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,c,l){const h=Math.cos(a),p=Math.sin(a);return this.set(n*h,n*p,-n*(h*c+p*l)+c+e,-r*p,r*h,-r*(-p*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new ht;function pc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hf(){const i=$r("canvas");return i.style.display="block",i}const ul={};function ks(i){i in ul||(ul[i]=!0,console.warn(i))}function df(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function pf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fl=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hl=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[Pi]:{transfer:Vs,primaries:Ws,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Jn]:{transfer:zt,primaries:Ws,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ks]:{transfer:Vs,primaries:Xs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(hl),fromReference:i=>i.applyMatrix3(fl)},[Fo]:{transfer:zt,primaries:Xs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(hl),fromReference:i=>i.applyMatrix3(fl).convertLinearToSRGB()}},gf=new Set([Pi,Ks]),Pt={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!gf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hr[e].toReference,r=Hr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hr[i].primaries},getTransfer:function(i){return i===bi?Vs:Hr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Hr[e].luminanceCoefficients)}};function yr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ir;class _f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=$r("canvas")),ir.width=e.width,ir.height=e.height;const n=ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=yr(a[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vf=0;class mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Rr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?a.push(pa(r[c].image)):a.push(pa(r[c]))}else a=pa(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xf=0;class _n extends Cr{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=qi,r=qi,a=Xn,c=Yi,l=Yn,h=mi,p=_n.DEFAULT_ANISOTROPY,m=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Rr(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ja:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ja:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=nc;_n.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,n=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const h=e.elements,p=h[0],m=h[4],_=h[8],x=h[1],y=h[5],S=h[9],L=h[2],g=h[6],v=h[10];if(Math.abs(m-x)<.01&&Math.abs(_-L)<.01&&Math.abs(S-g)<.01){if(Math.abs(m+x)<.1&&Math.abs(_+L)<.1&&Math.abs(S+g)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(p+1)/2,N=(y+1)/2,u=(v+1)/2,X=(m+x)/4,B=(_+L)/4,$=(S+g)/4;return U>N&&U>u?U<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(U),r=X/n,a=B/n):N>u?N<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(N),n=X/r,a=$/r):u<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(u),n=B/a,r=$/a),this.set(n,r,a,t),this}let O=Math.sqrt((g-S)*(g-S)+(_-L)*(_-L)+(x-m)*(x-m));return Math.abs(O)<.001&&(O=1),this.x=(g-S)/O,this.y=(_-L)/O,this.z=(x-m)/O,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends Cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new _n(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends yf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gc extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mf extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,c,l){let h=n[r+0],p=n[r+1],m=n[r+2],_=n[r+3];const x=a[c+0],y=a[c+1],S=a[c+2],L=a[c+3];if(l===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(l===1){e[t+0]=x,e[t+1]=y,e[t+2]=S,e[t+3]=L;return}if(_!==L||h!==x||p!==y||m!==S){let g=1-l;const v=h*x+p*y+m*S+_*L,O=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const u=Math.sqrt(U),X=Math.atan2(u,v*O);g=Math.sin(g*X)/u,l=Math.sin(l*X)/u}const N=l*O;if(h=h*g+x*N,p=p*g+y*N,m=m*g+S*N,_=_*g+L*N,g===1-l){const u=1/Math.sqrt(h*h+p*p+m*m+_*_);h*=u,p*=u,m*=u,_*=u}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,c){const l=n[r],h=n[r+1],p=n[r+2],m=n[r+3],_=a[c],x=a[c+1],y=a[c+2],S=a[c+3];return e[t]=l*S+m*_+h*y-p*x,e[t+1]=h*S+m*x+p*_-l*y,e[t+2]=p*S+m*y+l*x-h*_,e[t+3]=m*S-l*_-h*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,c=e._order,l=Math.cos,h=Math.sin,p=l(n/2),m=l(r/2),_=l(a/2),x=h(n/2),y=h(r/2),S=h(a/2);switch(c){case"XYZ":this._x=x*m*_+p*y*S,this._y=p*y*_-x*m*S,this._z=p*m*S+x*y*_,this._w=p*m*_-x*y*S;break;case"YXZ":this._x=x*m*_+p*y*S,this._y=p*y*_-x*m*S,this._z=p*m*S-x*y*_,this._w=p*m*_+x*y*S;break;case"ZXY":this._x=x*m*_-p*y*S,this._y=p*y*_+x*m*S,this._z=p*m*S+x*y*_,this._w=p*m*_-x*y*S;break;case"ZYX":this._x=x*m*_-p*y*S,this._y=p*y*_+x*m*S,this._z=p*m*S-x*y*_,this._w=p*m*_+x*y*S;break;case"YZX":this._x=x*m*_+p*y*S,this._y=p*y*_+x*m*S,this._z=p*m*S-x*y*_,this._w=p*m*_-x*y*S;break;case"XZY":this._x=x*m*_-p*y*S,this._y=p*y*_-x*m*S,this._z=p*m*S+x*y*_,this._w=p*m*_+x*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],c=t[1],l=t[5],h=t[9],p=t[2],m=t[6],_=t[10],x=n+l+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(m-h)*y,this._y=(a-p)*y,this._z=(c-r)*y}else if(n>l&&n>_){const y=2*Math.sqrt(1+n-l-_);this._w=(m-h)/y,this._x=.25*y,this._y=(r+c)/y,this._z=(a+p)/y}else if(l>_){const y=2*Math.sqrt(1+l-n-_);this._w=(a-p)/y,this._x=(r+c)/y,this._y=.25*y,this._z=(h+m)/y}else{const y=2*Math.sqrt(1+_-n-l);this._w=(c-r)/y,this._x=(a+p)/y,this._y=(h+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,c=e._w,l=t._x,h=t._y,p=t._z,m=t._w;return this._x=n*m+c*l+r*p-a*h,this._y=r*m+c*h+a*l-n*p,this._z=a*m+c*p+n*h-r*l,this._w=c*m-n*l-r*h-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=a,this;const h=1-l*l;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,l),_=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=c*_+this._w*x,this._x=n*_+this._x*x,this._y=r*_+this._y*x,this._z=a*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,n=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,c=e.y,l=e.z,h=e.w,p=2*(c*r-l*n),m=2*(l*t-a*r),_=2*(a*n-c*t);return this.x=t+h*p+c*_-l*m,this.y=n+h*m+l*p-a*_,this.z=r+h*_+a*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,c=t.x,l=t.y,h=t.z;return this.x=r*h-a*l,this.y=a*c-n*h,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new ie,dl=new Qr;class es{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=a.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Gn):Gn.fromBufferAttribute(a,c),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const r=e.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),ps.subVectors(this.max,kr),rr.subVectors(e.a,kr),sr.subVectors(e.b,kr),ar.subVectors(e.c,kr),xi.subVectors(sr,rr),yi.subVectors(ar,sr),Fi.subVectors(rr,ar);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Fi.z,Fi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Fi.z,0,-Fi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Fi.y,Fi.x,0];return!ga(t,rr,sr,ar,ps)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,rr,sr,ar,ps))?!1:(ms.crossVectors(xi,yi),t=[ms.x,ms.y,ms.z],ga(t,rr,sr,ar,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Gn=new ie,ds=new es,rr=new ie,sr=new ie,ar=new ie,xi=new ie,yi=new ie,Fi=new ie,kr=new ie,ps=new ie,ms=new ie,Oi=new ie;function ga(i,e,t,n,r){for(let a=0,c=i.length-3;a<=c;a+=3){Oi.fromArray(i,a);const l=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),h=e.dot(Oi),p=t.dot(Oi),m=n.dot(Oi);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>l)return!1}return!0}const Sf=new es,Gr=new ie,_a=new ie;class Zs{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let r=0;for(let a=0,c=e.length;a<c;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(_a)),this.expandByPoint(Gr.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new ie,va=new ie,gs=new ie,Mi=new ie,xa=new ie,_s=new ie,ya=new ie;class _c{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){va.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(va);const a=e.distanceTo(t)*.5,c=-this.direction.dot(gs),l=Mi.dot(this.direction),h=-Mi.dot(gs),p=Mi.lengthSq(),m=Math.abs(1-c*c);let _,x,y,S;if(m>0)if(_=c*h-l,x=c*l-h,S=a*m,_>=0)if(x>=-S)if(x<=S){const L=1/m;_*=L,x*=L,y=_*(_+c*x+2*l)+x*(c*_+x+2*h)+p}else x=a,_=Math.max(0,-(c*x+l)),y=-_*_+x*(x+2*h)+p;else x=-a,_=Math.max(0,-(c*x+l)),y=-_*_+x*(x+2*h)+p;else x<=-S?(_=Math.max(0,-(-c*a+l)),x=_>0?-a:Math.min(Math.max(-a,-h),a),y=-_*_+x*(x+2*h)+p):x<=S?(_=0,x=Math.min(Math.max(-a,-h),a),y=x*(x+2*h)+p):(_=Math.max(0,-(c*a+l)),x=_>0?a:Math.min(Math.max(-a,-h),a),y=-_*_+x*(x+2*h)+p);else x=c>0?-a:a,_=Math.max(0,-(c*x+l)),y=-_*_+x*(x+2*h)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(va).addScaledVector(gs,x),y}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),r=oi.dot(oi)-n*n,a=e.radius*e.radius;if(r>a)return null;const c=Math.sqrt(a-r),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,c,l,h;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,r=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,r=(e.min.x-x.x)*p),m>=0?(a=(e.min.y-x.y)*m,c=(e.max.y-x.y)*m):(a=(e.max.y-x.y)*m,c=(e.min.y-x.y)*m),n>c||a>r||((a>n||isNaN(n))&&(n=a),(c<r||isNaN(r))&&(r=c),_>=0?(l=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(l=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,r,a){xa.subVectors(t,e),_s.subVectors(n,e),ya.crossVectors(xa,_s);let c=this.direction.dot(ya),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Mi.subVectors(this.origin,e);const h=l*this.direction.dot(_s.crossVectors(Mi,_s));if(h<0)return null;const p=l*this.direction.dot(xa.cross(Mi));if(p<0||h+p>c)return null;const m=-l*Mi.dot(ya);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,n,r,a,c,l,h,p,m,_,x,y,S,L,g){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,l,h,p,m,_,x,y,S,L,g)}set(e,t,n,r,a,c,l,h,p,m,_,x,y,S,L,g){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=a,v[5]=c,v[9]=l,v[13]=h,v[2]=p,v[6]=m,v[10]=_,v[14]=x,v[3]=y,v[7]=S,v[11]=L,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/or.setFromMatrixColumn(e,0).length(),a=1/or.setFromMatrixColumn(e,1).length(),c=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),p=Math.sin(r),m=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const x=c*m,y=c*_,S=l*m,L=l*_;t[0]=h*m,t[4]=-h*_,t[8]=p,t[1]=y+S*p,t[5]=x-L*p,t[9]=-l*h,t[2]=L-x*p,t[6]=S+y*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*m,y=h*_,S=p*m,L=p*_;t[0]=x+L*l,t[4]=S*l-y,t[8]=c*p,t[1]=c*_,t[5]=c*m,t[9]=-l,t[2]=y*l-S,t[6]=L+x*l,t[10]=c*h}else if(e.order==="ZXY"){const x=h*m,y=h*_,S=p*m,L=p*_;t[0]=x-L*l,t[4]=-c*_,t[8]=S+y*l,t[1]=y+S*l,t[5]=c*m,t[9]=L-x*l,t[2]=-c*p,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const x=c*m,y=c*_,S=l*m,L=l*_;t[0]=h*m,t[4]=S*p-y,t[8]=x*p+L,t[1]=h*_,t[5]=L*p+x,t[9]=y*p-S,t[2]=-p,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,y=c*p,S=l*h,L=l*p;t[0]=h*m,t[4]=L-x*_,t[8]=S*_+y,t[1]=_,t[5]=c*m,t[9]=-l*m,t[2]=-p*m,t[6]=y*_+S,t[10]=x-L*_}else if(e.order==="XZY"){const x=c*h,y=c*p,S=l*h,L=l*p;t[0]=h*m,t[4]=-_,t[8]=p*m,t[1]=x*_+L,t[5]=c*m,t[9]=y*_-S,t[2]=S*_-y,t[6]=l*m,t[10]=L*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,Tf)}lookAt(e,t,n){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Si.crossVectors(n,Rn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Si.crossVectors(n,Rn)),Si.normalize(),vs.crossVectors(Rn,Si),r[0]=Si.x,r[4]=vs.x,r[8]=Rn.x,r[1]=Si.y,r[5]=vs.y,r[9]=Rn.y,r[2]=Si.z,r[6]=vs.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],l=n[4],h=n[8],p=n[12],m=n[1],_=n[5],x=n[9],y=n[13],S=n[2],L=n[6],g=n[10],v=n[14],O=n[3],U=n[7],N=n[11],u=n[15],X=r[0],B=r[4],$=r[8],Ee=r[12],E=r[1],P=r[5],ee=r[9],re=r[13],fe=r[2],ge=r[6],ae=r[10],me=r[14],j=r[3],be=r[7],xe=r[11],Me=r[15];return a[0]=c*X+l*E+h*fe+p*j,a[4]=c*B+l*P+h*ge+p*be,a[8]=c*$+l*ee+h*ae+p*xe,a[12]=c*Ee+l*re+h*me+p*Me,a[1]=m*X+_*E+x*fe+y*j,a[5]=m*B+_*P+x*ge+y*be,a[9]=m*$+_*ee+x*ae+y*xe,a[13]=m*Ee+_*re+x*me+y*Me,a[2]=S*X+L*E+g*fe+v*j,a[6]=S*B+L*P+g*ge+v*be,a[10]=S*$+L*ee+g*ae+v*xe,a[14]=S*Ee+L*re+g*me+v*Me,a[3]=O*X+U*E+N*fe+u*j,a[7]=O*B+U*P+N*ge+u*be,a[11]=O*$+U*ee+N*ae+u*xe,a[15]=O*Ee+U*re+N*me+u*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],c=e[1],l=e[5],h=e[9],p=e[13],m=e[2],_=e[6],x=e[10],y=e[14],S=e[3],L=e[7],g=e[11],v=e[15];return S*(+a*h*_-r*p*_-a*l*x+n*p*x+r*l*y-n*h*y)+L*(+t*h*y-t*p*x+a*c*x-r*c*y+r*p*m-a*h*m)+g*(+t*p*_-t*l*y-a*c*_+n*c*y+a*l*m-n*p*m)+v*(-r*l*m-t*h*_+t*l*x+r*c*_-n*c*x+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],l=e[5],h=e[6],p=e[7],m=e[8],_=e[9],x=e[10],y=e[11],S=e[12],L=e[13],g=e[14],v=e[15],O=_*g*p-L*x*p+L*h*y-l*g*y-_*h*v+l*x*v,U=S*x*p-m*g*p-S*h*y+c*g*y+m*h*v-c*x*v,N=m*L*p-S*_*p+S*l*y-c*L*y-m*l*v+c*_*v,u=S*_*h-m*L*h-S*l*x+c*L*x+m*l*g-c*_*g,X=t*O+n*U+r*N+a*u;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return e[0]=O*B,e[1]=(L*x*a-_*g*a-L*r*y+n*g*y+_*r*v-n*x*v)*B,e[2]=(l*g*a-L*h*a+L*r*p-n*g*p-l*r*v+n*h*v)*B,e[3]=(_*h*a-l*x*a-_*r*p+n*x*p+l*r*y-n*h*y)*B,e[4]=U*B,e[5]=(m*g*a-S*x*a+S*r*y-t*g*y-m*r*v+t*x*v)*B,e[6]=(S*h*a-c*g*a-S*r*p+t*g*p+c*r*v-t*h*v)*B,e[7]=(c*x*a-m*h*a+m*r*p-t*x*p-c*r*y+t*h*y)*B,e[8]=N*B,e[9]=(S*_*a-m*L*a-S*n*y+t*L*y+m*n*v-t*_*v)*B,e[10]=(c*L*a-S*l*a+S*n*p-t*L*p-c*n*v+t*l*v)*B,e[11]=(m*l*a-c*_*a-m*n*p+t*_*p+c*n*y-t*l*y)*B,e[12]=u*B,e[13]=(m*L*r-S*_*r+S*n*x-t*L*x-m*n*g+t*_*g)*B,e[14]=(S*l*r-c*L*r-S*n*h+t*L*h+c*n*g-t*l*g)*B,e[15]=(c*_*r-m*l*r+m*n*h-t*_*h-c*n*x+t*l*x)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,c=e.x,l=e.y,h=e.z,p=a*c,m=a*l;return this.set(p*c+n,p*l-r*h,p*h+r*l,0,p*l+r*h,m*l+n,m*h-r*c,0,p*h-r*l,m*h+r*c,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,c){return this.set(1,n,a,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,c=t._y,l=t._z,h=t._w,p=a+a,m=c+c,_=l+l,x=a*p,y=a*m,S=a*_,L=c*m,g=c*_,v=l*_,O=h*p,U=h*m,N=h*_,u=n.x,X=n.y,B=n.z;return r[0]=(1-(L+v))*u,r[1]=(y+N)*u,r[2]=(S-U)*u,r[3]=0,r[4]=(y-N)*X,r[5]=(1-(x+v))*X,r[6]=(g+O)*X,r[7]=0,r[8]=(S+U)*B,r[9]=(g-O)*B,r[10]=(1-(x+L))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=or.set(r[0],r[1],r[2]).length();const c=or.set(r[4],r[5],r[6]).length(),l=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const p=1/a,m=1/c,_=1/l;return Vn.elements[0]*=p,Vn.elements[1]*=p,Vn.elements[2]*=p,Vn.elements[4]*=m,Vn.elements[5]*=m,Vn.elements[6]*=m,Vn.elements[8]*=_,Vn.elements[9]*=_,Vn.elements[10]*=_,t.setFromRotationMatrix(Vn),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,r,a,c,l=pi){const h=this.elements,p=2*a/(t-e),m=2*a/(n-r),_=(t+e)/(t-e),x=(n+r)/(n-r);let y,S;if(l===pi)y=-(c+a)/(c-a),S=-2*c*a/(c-a);else if(l===qs)y=-c/(c-a),S=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,c,l=pi){const h=this.elements,p=1/(t-e),m=1/(n-r),_=1/(c-a),x=(t+e)*p,y=(n+r)*m;let S,L;if(l===pi)S=(c+a)*_,L=-2*_;else if(l===qs)S=a*_,L=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=L,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const or=new ie,Vn=new Yt,Ef=new ie(0,0,0),Tf=new ie(1,1,1),Si=new ie,vs=new ie,Rn=new ie,pl=new Yt,ml=new Qr;class gi{constructor(e=0,t=0,n=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],c=r[4],l=r[8],h=r[1],p=r[5],m=r[9],_=r[2],x=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(gn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-gn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ml.setFromEuler(this),this.setFromQuaternion(ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bf=0;const gl=new ie,lr=new Qr,li=new Yt,xs=new ie,Vr=new ie,Af=new ie,wf=new Qr,_l=new ie(1,0,0),vl=new ie(0,1,0),xl=new ie(0,0,1),yl={type:"added"},Cf={type:"removed"},cr={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Mn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new ie,t=new gi,n=new Qr,r=new ie(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ht}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return gl.copy(e).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Vr,xs,this.up):li.lookAt(xs,Vr,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(li),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yl),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yl),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const _=h[p];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,p=this.material.length;h<p;h++)l.push(a(e.materials,this.material[h]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(a(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),p=c(e.textures),m=c(e.images),_=c(e.shapes),x=c(e.skeletons),y=c(e.animations),S=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),x.length>0&&(n.skeletons=x),y.length>0&&(n.animations=y),S.length>0&&(n.nodes=S)}return n.object=r,n;function c(l){const h=[];for(const p in l){const m=l[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mn.DEFAULT_UP=new ie(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new ie,ci=new ie,Sa=new ie,ui=new ie,ur=new ie,fr=new ie,Ml=new ie,Ea=new ie,Ta=new ie,ba=new ie,Aa=new qt,wa=new qt,Ca=new qt;class qn{constructor(e=new ie,t=new ie,n=new ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Wn.subVectors(r,t),ci.subVectors(n,t),Sa.subVectors(e,t);const c=Wn.dot(Wn),l=Wn.dot(ci),h=Wn.dot(Sa),p=ci.dot(ci),m=ci.dot(Sa),_=c*p-l*l;if(_===0)return a.set(0,0,0),null;const x=1/_,y=(p*h-l*m)*x,S=(c*m-l*h)*x;return a.set(1-y-S,S,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,r,a,c,l,h){return this.getBarycoord(e,t,n,r,ui)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,ui.x),h.addScaledVector(c,ui.y),h.addScaledVector(l,ui.z),h)}static getInterpolatedAttribute(e,t,n,r,a,c){return Aa.setScalar(0),wa.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,n),Ca.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(Aa,a.x),c.addScaledVector(wa,a.y),c.addScaledVector(Ca,a.z),c}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),ci.subVectors(e,t),Wn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Wn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return qn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let c,l;ur.subVectors(r,n),fr.subVectors(a,n),Ea.subVectors(e,n);const h=ur.dot(Ea),p=fr.dot(Ea);if(h<=0&&p<=0)return t.copy(n);Ta.subVectors(e,r);const m=ur.dot(Ta),_=fr.dot(Ta);if(m>=0&&_<=m)return t.copy(r);const x=h*_-m*p;if(x<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(n).addScaledVector(ur,c);ba.subVectors(e,a);const y=ur.dot(ba),S=fr.dot(ba);if(S>=0&&y<=S)return t.copy(a);const L=y*p-h*S;if(L<=0&&p>=0&&S<=0)return l=p/(p-S),t.copy(n).addScaledVector(fr,l);const g=m*S-y*_;if(g<=0&&_-m>=0&&y-S>=0)return Ml.subVectors(a,r),l=(_-m)/(_-m+(y-S)),t.copy(r).addScaledVector(Ml,l);const v=1/(g+L+x);return c=L*v,l=x*v,t.copy(n).addScaledVector(ur,c).addScaledVector(fr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=Oo(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=Ra(c,a,e+1/3),this.g=Ra(c,a,e),this.b=Ra(c,a,e-1/3)}return Pt.toWorkingColorSpace(this,r),this}setStyle(e,t=Jn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const n=xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Pt.fromWorkingColorSpace(fn.copy(this),e),Math.round(gn(fn.r*255,0,255))*65536+Math.round(gn(fn.g*255,0,255))*256+Math.round(gn(fn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,r=fn.g,a=fn.b,c=Math.max(n,r,a),l=Math.min(n,r,a);let h,p;const m=(l+c)/2;if(l===c)h=0,p=0;else{const _=c-l;switch(p=m<=.5?_/(c+l):_/(2-c-l),c){case n:h=(r-a)/_+(r<a?6:0);break;case r:h=(a-n)/_+2;break;case a:h=(n-r)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Jn){Pt.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,r=fn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(ys);const n=Yr(Ei.h,ys.h,t),r=Yr(Ei.s,ys.s,t),a=Yr(Ei.l,ys.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Lt;Lt.NAMES=xc;let Rf=0;class ts extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=vr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=ka,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}if(t){const a=r(e.textures),c=r(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jr extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new ie,Ms=new Et;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),r=pn(r,this.array),a=pn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}}class yc extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mc extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ei extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pf=0;const Dn=new Yt,Pa=new Mn,hr=new ie,Pn=new es,Wr=new es,an=new ie;class ti extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?Mc:yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ht().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ei(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Pn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];Wr.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(Pn.min,Wr.min),Pn.expandByPoint(an),an.addVectors(Pn.max,Wr.max),Pn.expandByPoint(an)):(Pn.expandByPoint(Wr.min),Pn.expandByPoint(Wr.max))}Pn.getCenter(n);let r=0;for(let a=0,c=e.count;a<c;a++)an.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(an));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],h=this.morphTargetsRelative;for(let p=0,m=l.count;p<m;p++)an.fromBufferAttribute(l,p),h&&(hr.fromBufferAttribute(e,p),an.add(hr)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let $=0;$<n.count;$++)l[$]=new ie,h[$]=new ie;const p=new ie,m=new ie,_=new ie,x=new Et,y=new Et,S=new Et,L=new ie,g=new ie;function v($,Ee,E){p.fromBufferAttribute(n,$),m.fromBufferAttribute(n,Ee),_.fromBufferAttribute(n,E),x.fromBufferAttribute(a,$),y.fromBufferAttribute(a,Ee),S.fromBufferAttribute(a,E),m.sub(p),_.sub(p),y.sub(x),S.sub(x);const P=1/(y.x*S.y-S.x*y.y);isFinite(P)&&(L.copy(m).multiplyScalar(S.y).addScaledVector(_,-y.y).multiplyScalar(P),g.copy(_).multiplyScalar(y.x).addScaledVector(m,-S.x).multiplyScalar(P),l[$].add(L),l[Ee].add(L),l[E].add(L),h[$].add(g),h[Ee].add(g),h[E].add(g))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let $=0,Ee=O.length;$<Ee;++$){const E=O[$],P=E.start,ee=E.count;for(let re=P,fe=P+ee;re<fe;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const U=new ie,N=new ie,u=new ie,X=new ie;function B($){u.fromBufferAttribute(r,$),X.copy(u);const Ee=l[$];U.copy(Ee),U.sub(u.multiplyScalar(u.dot(Ee))).normalize(),N.crossVectors(X,Ee);const P=N.dot(h[$])<0?-1:1;c.setXYZW($,U.x,U.y,U.z,P)}for(let $=0,Ee=O.length;$<Ee;++$){const E=O[$],P=E.start,ee=E.count;for(let re=P,fe=P+ee;re<fe;re+=3)B(e.getX(re+0)),B(e.getX(re+1)),B(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,y=n.count;x<y;x++)n.setXYZ(x,0,0,0);const r=new ie,a=new ie,c=new ie,l=new ie,h=new ie,p=new ie,m=new ie,_=new ie;if(e)for(let x=0,y=e.count;x<y;x+=3){const S=e.getX(x+0),L=e.getX(x+1),g=e.getX(x+2);r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,L),c.fromBufferAttribute(t,g),m.subVectors(c,a),_.subVectors(r,a),m.cross(_),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,L),p.fromBufferAttribute(n,g),l.add(m),h.add(m),p.add(m),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(L,h.x,h.y,h.z),n.setXYZ(g,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)r.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),m.subVectors(c,a),_.subVectors(r,a),m.cross(_),n.setXYZ(x+0,m.x,m.y,m.z),n.setXYZ(x+1,m.x,m.y,m.z),n.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(l,h){const p=l.array,m=l.itemSize,_=l.normalized,x=new p.constructor(h.length*m);let y=0,S=0;for(let L=0,g=h.length;L<g;L++){l.isInterleavedBufferAttribute?y=h[L]*l.data.stride+l.offset:y=h[L]*m;for(let v=0;v<m;v++)x[S++]=p[y++]}return new Fn(x,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],p=e(h,n);t.setAttribute(l,p)}const a=this.morphAttributes;for(const l in a){const h=[],p=a[l];for(let m=0,_=p.length;m<_;m++){const x=p[m],y=e(x,n);h.push(y)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const p=c[l];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const r={};let a=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];m.push(y.toJSON(e.data))}m.length>0&&(r[h]=m,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(t))}const a=e.morphAttributes;for(const p in a){const m=[],_=a[p];for(let x=0,y=_.length;x<y;x++)m.push(_[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new Yt,Bi=new _c,Ss=new Zs,El=new ie,Es=new ie,Ts=new ie,bs=new ie,La=new ie,As=new ie,Tl=new ie,ws=new ie;class Nn extends Mn{constructor(e=new ti,t=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){As.set(0,0,0);for(let h=0,p=a.length;h<p;h++){const m=l[h],_=a[h];m!==0&&(La.fromBufferAttribute(_,e),c?As.addScaledVector(La,m):As.addScaledVector(La.sub(t),m))}t.add(As)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(a),Bi.copy(e.ray).recast(e.near),!(Ss.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Ss,El)===null||Bi.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(Sl.copy(a).invert(),Bi.copy(e.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,c=this.material,l=a.index,h=a.attributes.position,p=a.attributes.uv,m=a.attributes.uv1,_=a.attributes.normal,x=a.groups,y=a.drawRange;if(l!==null)if(Array.isArray(c))for(let S=0,L=x.length;S<L;S++){const g=x[S],v=c[g.materialIndex],O=Math.max(g.start,y.start),U=Math.min(l.count,Math.min(g.start+g.count,y.start+y.count));for(let N=O,u=U;N<u;N+=3){const X=l.getX(N),B=l.getX(N+1),$=l.getX(N+2);r=Cs(this,v,e,n,p,m,_,X,B,$),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const S=Math.max(0,y.start),L=Math.min(l.count,y.start+y.count);for(let g=S,v=L;g<v;g+=3){const O=l.getX(g),U=l.getX(g+1),N=l.getX(g+2);r=Cs(this,c,e,n,p,m,_,O,U,N),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,L=x.length;S<L;S++){const g=x[S],v=c[g.materialIndex],O=Math.max(g.start,y.start),U=Math.min(h.count,Math.min(g.start+g.count,y.start+y.count));for(let N=O,u=U;N<u;N+=3){const X=N,B=N+1,$=N+2;r=Cs(this,v,e,n,p,m,_,X,B,$),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const S=Math.max(0,y.start),L=Math.min(h.count,y.start+y.count);for(let g=S,v=L;g<v;g+=3){const O=g,U=g+1,N=g+2;r=Cs(this,c,e,n,p,m,_,O,U,N),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Lf(i,e,t,n,r,a,c,l){let h;if(e.side===yn?h=n.intersectTriangle(c,a,r,!0,l):h=n.intersectTriangle(r,a,c,e.side===Ci,l),h===null)return null;ws.copy(l),ws.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(ws);return p<t.near||p>t.far?null:{distance:p,point:ws.clone(),object:i}}function Cs(i,e,t,n,r,a,c,l,h,p){i.getVertexPosition(l,Es),i.getVertexPosition(h,Ts),i.getVertexPosition(p,bs);const m=Lf(i,e,t,n,Es,Ts,bs,Tl);if(m){const _=new ie;qn.getBarycoord(Tl,Es,Ts,bs,_),r&&(m.uv=qn.getInterpolatedAttribute(r,l,h,p,_,new Et)),a&&(m.uv1=qn.getInterpolatedAttribute(a,l,h,p,_,new Et)),c&&(m.normal=qn.getInterpolatedAttribute(c,l,h,p,_,new ie),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const x={a:l,b:h,c:p,normal:new ie,materialIndex:0};qn.getNormal(Es,Ts,bs,x.normal),m.face=x,m.barycoord=_}return m}class Pr extends ti{constructor(e=1,t=1,n=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:c};const l=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);const h=[],p=[],m=[],_=[];let x=0,y=0;S("z","y","x",-1,-1,n,t,e,c,a,0),S("z","y","x",1,-1,n,t,-e,c,a,1),S("x","z","y",1,1,e,n,t,r,c,2),S("x","z","y",1,-1,e,n,-t,r,c,3),S("x","y","z",1,-1,e,t,n,r,a,4),S("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(h),this.setAttribute("position",new ei(p,3)),this.setAttribute("normal",new ei(m,3)),this.setAttribute("uv",new ei(_,2));function S(L,g,v,O,U,N,u,X,B,$,Ee){const E=N/B,P=u/$,ee=N/2,re=u/2,fe=X/2,ge=B+1,ae=$+1;let me=0,j=0;const be=new ie;for(let xe=0;xe<ae;xe++){const Me=xe*P-re;for(let pt=0;pt<ge;pt++){const Mt=pt*E-ee;be[L]=Mt*O,be[g]=Me*U,be[v]=fe,p.push(be.x,be.y,be.z),be[L]=0,be[g]=0,be[v]=X>0?1:-1,m.push(be.x,be.y,be.z),_.push(pt/B),_.push(1-xe/$),me+=1}}for(let xe=0;xe<$;xe++)for(let Me=0;Me<B;Me++){const pt=x+Me+ge*xe,Mt=x+Me+ge*(xe+1),oe=x+(Me+1)+ge*(xe+1),ve=x+(Me+1)+ge*xe;h.push(pt,Mt,ve),h.push(Mt,oe,ve),j+=6}l.addGroup(y,j,Ee),y+=j,x+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=wr(i[t]);for(const r in n)e[r]=n[r]}return e}function Df(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Uf={clone:wr,merge:mn};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ec extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new ie,bl=new Et,Al=new Et;class Un extends Ec{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,bl,Al),t.subVectors(Al,bl)}setViewOffset(e,t,n,r,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;a+=c.offsetX*r/h,t-=c.offsetY*n/p,r*=c.width/h,n*=c.height/p}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class Ff extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(dr,pr,e,t);r.layers=this.layers,this.add(r);const a=new Un(dr,pr,e,t);a.layers=this.layers,this.add(a);const c=new Un(dr,pr,e,t);c.layers=this.layers,this.add(c);const l=new Un(dr,pr,e,t);l.layers=this.layers,this.add(l);const h=new Un(dr,pr,e,t);h.layers=this.layers,this.add(h);const p=new Un(dr,pr,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,c,l,h]=t;for(const p of t)this.remove(p);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,l,h,p,m]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const L=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,p),n.texture.generateMipmaps=L,e.setRenderTarget(n,5,r),e.render(t,m),e.setRenderTarget(_,x,y),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Tc extends _n{constructor(e,t,n,r,a,c,l,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,r,a,c,l,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Tc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pr(5,5,5),a=new Ri({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Ai});a.uniforms.tEquirect.value=t;const c=new Nn(r,a),l=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Xn),new Ff(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(a)}}const Da=new ie,Bf=new ie,zf=new ht;class Gi{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Da.subVectors(n,t).cross(Bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Da),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zf.getNormalMatrix(e),r=this.coplanarPoint(Da).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Zs,Rs=new ie;class bc{constructor(e=new Gi,t=new Gi,n=new Gi,r=new Gi,a=new Gi,c=new Gi){this.planes=[e,t,n,r,a,c]}set(e,t,n,r,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){const n=this.planes,r=e.elements,a=r[0],c=r[1],l=r[2],h=r[3],p=r[4],m=r[5],_=r[6],x=r[7],y=r[8],S=r[9],L=r[10],g=r[11],v=r[12],O=r[13],U=r[14],N=r[15];if(n[0].setComponents(h-a,x-p,g-y,N-v).normalize(),n[1].setComponents(h+a,x+p,g+y,N+v).normalize(),n[2].setComponents(h+c,x+m,g+S,N+O).normalize(),n[3].setComponents(h-c,x-m,g-S,N-O).normalize(),n[4].setComponents(h-l,x-_,g-L,N-U).normalize(),t===pi)n[5].setComponents(h+l,x+_,g+L,N+U).normalize();else if(t===qs)n[5].setComponents(l,_,L,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Rs.x=r.normal.x>0?e.max.x:e.min.x,Rs.y=r.normal.y>0?e.max.y:e.min.y,Rs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ac(){let i=null,e=!1,t=null,n=null;function r(a,c){t(a,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Hf(i){const e=new WeakMap;function t(l,h){const p=l.array,m=l.usage,_=p.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,p,m),l.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(p instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version,size:_}}function n(l,h,p){const m=h.array,_=h.updateRanges;if(i.bindBuffer(p,l),_.length===0)i.bufferSubData(p,0,m);else{_.sort((y,S)=>y.start-S.start);let x=0;for(let y=1;y<_.length;y++){const S=_[x],L=_[y];L.start<=S.start+S.count+1?S.count=Math.max(S.count,L.start+L.count-S.start):(++x,_[x]=L)}_.length=x+1;for(let y=0,S=_.length;y<S;y++){const L=_[y];i.bufferSubData(p,L.start*m.BYTES_PER_ELEMENT,m,L.start,L.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);h&&(i.deleteBuffer(h.buffer),e.delete(l))}function c(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const m=e.get(l);(!m||m.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const p=e.get(l);if(p===void 0)e.set(l,t(l,h));else if(p.version<l.version){if(p.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,l,h),p.version=l.version}}return{get:r,remove:a,update:c}}class $s extends ti{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,c=t/2,l=Math.floor(n),h=Math.floor(r),p=l+1,m=h+1,_=e/l,x=t/h,y=[],S=[],L=[],g=[];for(let v=0;v<m;v++){const O=v*x-c;for(let U=0;U<p;U++){const N=U*_-a;S.push(N,-O,0),L.push(0,0,1),g.push(U/l),g.push(1-v/h)}}for(let v=0;v<h;v++)for(let O=0;O<l;O++){const U=O+p*v,N=O+p*(v+1),u=O+1+p*(v+1),X=O+1+p*v;y.push(U,N,X),y.push(N,u,X)}this.setIndex(y),this.setAttribute("position",new ei(S,3)),this.setAttribute("normal",new ei(L,3)),this.setAttribute("uv",new ei(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,th=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_h="gl_FragColor = linearToOutputTexel( gl_FragColor );",vh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ph=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ih=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:kf,alphahash_pars_fragment:Gf,alphamap_fragment:Vf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:jf,batching_pars_vertex:Kf,batching_vertex:Zf,begin_vertex:$f,beginnormal_vertex:Jf,bsdfs:Qf,iridescence_fragment:eh,bumpmap_pars_fragment:th,clipping_planes_fragment:nh,clipping_planes_pars_fragment:ih,clipping_planes_pars_vertex:rh,clipping_planes_vertex:sh,color_fragment:ah,color_pars_fragment:oh,color_pars_vertex:lh,color_vertex:ch,common:uh,cube_uv_reflection_fragment:fh,defaultnormal_vertex:hh,displacementmap_pars_vertex:dh,displacementmap_vertex:ph,emissivemap_fragment:mh,emissivemap_pars_fragment:gh,colorspace_fragment:_h,colorspace_pars_fragment:vh,envmap_fragment:xh,envmap_common_pars_fragment:yh,envmap_pars_fragment:Mh,envmap_pars_vertex:Sh,envmap_physical_pars_fragment:Uh,envmap_vertex:Eh,fog_vertex:Th,fog_pars_vertex:bh,fog_fragment:Ah,fog_pars_fragment:wh,gradientmap_pars_fragment:Ch,lightmap_pars_fragment:Rh,lights_lambert_fragment:Ph,lights_lambert_pars_fragment:Lh,lights_pars_begin:Dh,lights_toon_fragment:Ih,lights_toon_pars_fragment:Nh,lights_phong_fragment:Fh,lights_phong_pars_fragment:Oh,lights_physical_fragment:Bh,lights_physical_pars_fragment:zh,lights_fragment_begin:Hh,lights_fragment_maps:kh,lights_fragment_end:Gh,logdepthbuf_fragment:Vh,logdepthbuf_pars_fragment:Wh,logdepthbuf_pars_vertex:Xh,logdepthbuf_vertex:qh,map_fragment:Yh,map_pars_fragment:jh,map_particle_fragment:Kh,map_particle_pars_fragment:Zh,metalnessmap_fragment:$h,metalnessmap_pars_fragment:Jh,morphinstance_vertex:Qh,morphcolor_vertex:ed,morphnormal_vertex:td,morphtarget_pars_vertex:nd,morphtarget_vertex:id,normal_fragment_begin:rd,normal_fragment_maps:sd,normal_pars_fragment:ad,normal_pars_vertex:od,normal_vertex:ld,normalmap_pars_fragment:cd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:dd,opaque_fragment:pd,packing:md,premultiplied_alpha_fragment:gd,project_vertex:_d,dithering_fragment:vd,dithering_pars_fragment:xd,roughnessmap_fragment:yd,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:Ed,shadowmap_vertex:Td,shadowmask_pars_fragment:bd,skinbase_vertex:Ad,skinning_pars_vertex:wd,skinning_vertex:Cd,skinnormal_vertex:Rd,specularmap_fragment:Pd,specularmap_pars_fragment:Ld,tonemapping_fragment:Dd,tonemapping_pars_fragment:Ud,transmission_fragment:Id,transmission_pars_fragment:Nd,uv_pars_fragment:Fd,uv_pars_vertex:Od,uv_vertex:Bd,worldpos_vertex:zd,background_vert:Hd,background_frag:kd,backgroundCube_vert:Gd,backgroundCube_frag:Vd,cube_vert:Wd,cube_frag:Xd,depth_vert:qd,depth_frag:Yd,distanceRGBA_vert:jd,distanceRGBA_frag:Kd,equirect_vert:Zd,equirect_frag:$d,linedashed_vert:Jd,linedashed_frag:Qd,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:rp,meshmatcap_frag:sp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:up,meshphysical_frag:fp,meshtoon_vert:hp,meshtoon_frag:dp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:vp,sprite_frag:xp},De={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Qn={basic:{uniforms:mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:mn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:mn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:mn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:mn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:mn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:mn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:mn([De.common,De.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:mn([De.lights,De.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Qn.physical={uniforms:mn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ps={r:0,b:0,g:0},Hi=new gi,yp=new Yt;function Mp(i,e,t,n,r,a,c){const l=new Lt(0);let h=a===!0?0:1,p,m,_=null,x=0,y=null;function S(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?t:e).get(U)),U}function L(O){let U=!1;const N=S(O);N===null?v(l,h):N&&N.isColor&&(v(N,1),U=!0);const u=i.xr.getEnvironmentBlendMode();u==="additive"?n.buffers.color.setClear(0,0,0,1,c):u==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(O,U){const N=S(U);N&&(N.isCubeTexture||N.mapping===js)?(m===void 0&&(m=new Nn(new Pr(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:wr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(u,X,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),Hi.copy(U.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(Hi)),m.material.toneMapped=Pt.getTransfer(N.colorSpace)!==zt,(_!==N||x!==N.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,_=N,x=N.version,y=i.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Nn(new $s(2,2),new Ri({name:"BackgroundMaterial",uniforms:wr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(N.colorSpace)!==zt,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||x!==N.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,_=N,x=N.version,y=i.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function v(O,U){O.getRGB(Ps,Sc(i)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,U,c)}return{getClearColor:function(){return l},setClearColor:function(O,U=1){l.set(O),h=U,v(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,v(l,h)},render:L,addToRenderList:g}}function Sp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=x(null);let a=r,c=!1;function l(E,P,ee,re,fe){let ge=!1;const ae=_(re,ee,P);a!==ae&&(a=ae,p(a.object)),ge=y(E,re,ee,fe),ge&&S(E,re,ee,fe),fe!==null&&e.update(fe,i.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,N(E,P,ee,re),fe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return i.createVertexArray()}function p(E){return i.bindVertexArray(E)}function m(E){return i.deleteVertexArray(E)}function _(E,P,ee){const re=ee.wireframe===!0;let fe=n[E.id];fe===void 0&&(fe={},n[E.id]=fe);let ge=fe[P.id];ge===void 0&&(ge={},fe[P.id]=ge);let ae=ge[re];return ae===void 0&&(ae=x(h()),ge[re]=ae),ae}function x(E){const P=[],ee=[],re=[];for(let fe=0;fe<t;fe++)P[fe]=0,ee[fe]=0,re[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:ee,attributeDivisors:re,object:E,attributes:{},index:null}}function y(E,P,ee,re){const fe=a.attributes,ge=P.attributes;let ae=0;const me=ee.getAttributes();for(const j in me)if(me[j].location>=0){const xe=fe[j];let Me=ge[j];if(Me===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;ae++}return a.attributesNum!==ae||a.index!==re}function S(E,P,ee,re){const fe={},ge=P.attributes;let ae=0;const me=ee.getAttributes();for(const j in me)if(me[j].location>=0){let xe=ge[j];xe===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor));const Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),fe[j]=Me,ae++}a.attributes=fe,a.attributesNum=ae,a.index=re}function L(){const E=a.newAttributes;for(let P=0,ee=E.length;P<ee;P++)E[P]=0}function g(E){v(E,0)}function v(E,P){const ee=a.newAttributes,re=a.enabledAttributes,fe=a.attributeDivisors;ee[E]=1,re[E]===0&&(i.enableVertexAttribArray(E),re[E]=1),fe[E]!==P&&(i.vertexAttribDivisor(E,P),fe[E]=P)}function O(){const E=a.newAttributes,P=a.enabledAttributes;for(let ee=0,re=P.length;ee<re;ee++)P[ee]!==E[ee]&&(i.disableVertexAttribArray(ee),P[ee]=0)}function U(E,P,ee,re,fe,ge,ae){ae===!0?i.vertexAttribIPointer(E,P,ee,fe,ge):i.vertexAttribPointer(E,P,ee,re,fe,ge)}function N(E,P,ee,re){L();const fe=re.attributes,ge=ee.getAttributes(),ae=P.defaultAttributeValues;for(const me in ge){const j=ge[me];if(j.location>=0){let be=fe[me];if(be===void 0&&(me==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),me==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),be!==void 0){const xe=be.normalized,Me=be.itemSize,pt=e.get(be);if(pt===void 0)continue;const Mt=pt.buffer,oe=pt.type,ve=pt.bytesPerElement,Le=oe===i.INT||oe===i.UNSIGNED_INT||be.gpuType===Po;if(be.isInterleavedBufferAttribute){const Ce=be.data,je=Ce.stride,$e=be.offset;if(Ce.isInstancedInterleavedBuffer){for(let tt=0;tt<j.locationSize;tt++)v(j.location+tt,Ce.meshPerAttribute);E.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let tt=0;tt<j.locationSize;tt++)g(j.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let tt=0;tt<j.locationSize;tt++)U(j.location+tt,Me/j.locationSize,oe,xe,je*ve,($e+Me/j.locationSize*tt)*ve,Le)}else{if(be.isInstancedBufferAttribute){for(let Ce=0;Ce<j.locationSize;Ce++)v(j.location+Ce,be.meshPerAttribute);E.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ce=0;Ce<j.locationSize;Ce++)g(j.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Ce=0;Ce<j.locationSize;Ce++)U(j.location+Ce,Me/j.locationSize,oe,xe,Me*ve,Me/j.locationSize*Ce*ve,Le)}}else if(ae!==void 0){const xe=ae[me];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(j.location,xe);break;case 3:i.vertexAttrib3fv(j.location,xe);break;case 4:i.vertexAttrib4fv(j.location,xe);break;default:i.vertexAttrib1fv(j.location,xe)}}}}O()}function u(){$();for(const E in n){const P=n[E];for(const ee in P){const re=P[ee];for(const fe in re)m(re[fe].object),delete re[fe];delete P[ee]}delete n[E]}}function X(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const ee in P){const re=P[ee];for(const fe in re)m(re[fe].object),delete re[fe];delete P[ee]}delete n[E.id]}function B(E){for(const P in n){const ee=n[P];if(ee[E.id]===void 0)continue;const re=ee[E.id];for(const fe in re)m(re[fe].object),delete re[fe];delete ee[E.id]}}function $(){Ee(),c=!0,a!==r&&(a=r,p(a.object))}function Ee(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:$,resetDefaultState:Ee,dispose:u,releaseStatesOfGeometry:X,releaseStatesOfProgram:B,initAttributes:L,enableAttribute:g,disableUnusedAttributes:O}}function Ep(i,e,t){let n;function r(p){n=p}function a(p,m){i.drawArrays(n,p,m),t.update(m,n,1)}function c(p,m,_){_!==0&&(i.drawArraysInstanced(n,p,m,_),t.update(m,n,_))}function l(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,m,0,_);let y=0;for(let S=0;S<_;S++)y+=m[S];t.update(y,n,1)}function h(p,m,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<p.length;S++)c(p[S],m[S],x[S]);else{y.multiDrawArraysInstancedWEBGL(n,p,0,m,0,x,0,_);let S=0;for(let L=0;L<_;L++)S+=m[L];for(let L=0;L<x.length;L++)t.update(S,n,x[L])}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function Tp(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(B){return!(B!==Yn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(B){const $=B===Jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==mi&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==di&&!$)}function h(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const B=e.get("EXT_clip_control");B.clipControlEXT(B.LOWER_LEFT_EXT,B.ZERO_TO_ONE_EXT)}const y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),u=S>0,X=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:l,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:S,maxTextureSize:L,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:N,vertexTextures:u,maxSamples:X}}function bp(i){const e=this;let t=null,n=0,r=!1,a=!1;const c=new Gi,l=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||n!==0||r;return r=x,n=_.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,x){t=m(_,x,0)},this.setState=function(_,x,y){const S=_.clippingPlanes,L=_.clipIntersection,g=_.clipShadows,v=i.get(_);if(!r||S===null||S.length===0||a&&!g)a?m(null):p();else{const O=a?0:n,U=O*4;let N=v.clippingState||null;h.value=N,N=m(S,x,U,y);for(let u=0;u!==U;++u)N[u]=t[u];v.clippingState=N,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,x,y,S){const L=_!==null?_.length:0;let g=null;if(L!==0){if(g=h.value,S!==!0||g===null){const v=y+L*4,O=x.matrixWorldInverse;l.getNormalMatrix(O),(g===null||g.length<v)&&(g=new Float32Array(v));for(let U=0,N=y;U!==L;++U,N+=4)c.copy(_[U]).applyMatrix4(O,l),c.normal.toArray(g,N),g[N+3]=c.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,g}}function Ap(i){let e=new WeakMap;function t(c,l){return l===Ka?c.mapping=Er:l===Za&&(c.mapping=Tr),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===Ka||l===Za)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Of(h.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",r),t(p.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class wp extends Ec{constructor(e=-1,t=1,n=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,c=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,c=a+p*this.view.width,l-=m*this.view.offsetY,h=l-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,wl=[.125,.215,.35,.446,.526,.582],Xi=20,Ua=new wp,Cl=new Lt;let Ia=null,Na=0,Fa=0,Oa=!1;const Vi=(1+Math.sqrt(5))/2,mr=1/Vi,Rl=[new ie(-Vi,mr,0),new ie(Vi,mr,0),new ie(-mr,0,Vi),new ie(mr,0,Vi),new ie(0,Vi,-mr),new ie(0,Vi,mr),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class Pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Na,Fa),this._renderer.xr.enabled=Oa,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Jr,format:Yn,colorSpace:Pi,depthBuffer:!1},r=Ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(a)),this._blurMaterial=Rp(a,e,t)}return r}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,r){const l=new Un(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(Cl),m.toneMapping=wi,m.autoClear=!1;const y=new jr({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),S=new Nn(new Pr,y);let L=!1;const g=e.background;g?g.isColor&&(y.color.copy(g),e.background=null,L=!0):(y.color.copy(Cl),L=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(l.up.set(0,h[v],0),l.lookAt(p[v],0,0)):O===1?(l.up.set(0,0,h[v]),l.lookAt(0,p[v],0)):(l.up.set(0,h[v],0),l.lookAt(0,0,p[v]));const U=this._cubeSize;Ls(r,O*U,v>2?U:0,U,U),m.setRenderTarget(r),L&&m.render(S,l),m.render(e,l)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Er||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const a=r?this._cubemapMaterial:this._equirectMaterial,c=new Nn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const h=this._cubeSize;Ls(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=Rl[(r-a-1)%Rl.length];this._blur(e,a-1,a,c,l)}t.autoClear=n}_blur(e,t,n,r,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",a),this._halfBlur(c,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,c,l){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Nn(this._lodPlanes[r],p),x=p.uniforms,y=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Xi-1),L=a/S,g=isFinite(a)?1+Math.floor(m*L):Xi;g>Xi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);const v=[];let O=0;for(let B=0;B<Xi;++B){const $=B/L,Ee=Math.exp(-$*$/2);v.push(Ee),B===0?O+=Ee:B<g&&(O+=2*Ee)}for(let B=0;B<v.length;B++)v[B]=v[B]/O;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=v,x.latitudinal.value=c==="latitudinal",l&&(x.poleAxis.value=l);const{_lodMax:U}=this;x.dTheta.value=S,x.mipInt.value=U-n;const N=this._sizeLods[r],u=3*N*(r>U-_r?r-U+_r:0),X=4*(this._cubeSize-N);Ls(t,u,X,3*N,2*N),h.setRenderTarget(t),h.render(_,Ua)}}function Cp(i){const e=[],t=[],n=[];let r=i;const a=i-_r+1+wl.length;for(let c=0;c<a;c++){const l=Math.pow(2,r);t.push(l);let h=1/l;c>i-_r?h=wl[c-i+_r-1]:c===0&&(h=0),n.push(h);const p=1/(l-2),m=-p,_=1+p,x=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,S=6,L=3,g=2,v=1,O=new Float32Array(L*S*y),U=new Float32Array(g*S*y),N=new Float32Array(v*S*y);for(let X=0;X<y;X++){const B=X%3*2/3-1,$=X>2?0:-1,Ee=[B,$,0,B+2/3,$,0,B+2/3,$+1,0,B,$,0,B+2/3,$+1,0,B,$+1,0];O.set(Ee,L*S*X),U.set(x,g*S*X);const E=[X,X,X,X,X,X];N.set(E,v*S*X)}const u=new ti;u.setAttribute("position",new Fn(O,L)),u.setAttribute("uv",new Fn(U,g)),u.setAttribute("faceIndex",new Fn(N,v)),e.push(u),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ll(i,e,t){const n=new Ki(i,e,t);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Rp(i,e,t){const n=new Float32Array(Xi),r=new ie(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Dl(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ul(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pp(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,p=h===Ka||h===Za,m=h===Er||h===Tr;if(p||m){let _=e.get(l);const x=_!==void 0?_.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==x)return t===null&&(t=new Pl(i)),_=p?t.fromEquirectangular(l,_):t.fromCubemap(l,_),_.texture.pmremVersion=l.pmremVersion,e.set(l,_),_.texture;if(_!==void 0)return _.texture;{const y=l.image;return p&&y&&y.height>0||m&&y&&r(y)?(t===null&&(t=new Pl(i)),_=p?t.fromEquirectangular(l):t.fromCubemap(l),_.texture.pmremVersion=l.pmremVersion,e.set(l,_),l.addEventListener("dispose",a),_.texture):null}}}return l}function r(l){let h=0;const p=6;for(let m=0;m<p;m++)l[m]!==void 0&&h++;return h===p}function a(l){const h=l.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Lp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Dp(i,e,t,n){const r={},a=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const S in x.attributes)e.remove(x.attributes[S]);for(const S in x.morphAttributes){const L=x.morphAttributes[S];for(let g=0,v=L.length;g<v;g++)e.remove(L[g])}x.removeEventListener("dispose",c),delete r[x.id];const y=a.get(x);y&&(e.remove(y),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(_,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const S in x)e.update(x[S],i.ARRAY_BUFFER);const y=_.morphAttributes;for(const S in y){const L=y[S];for(let g=0,v=L.length;g<v;g++)e.update(L[g],i.ARRAY_BUFFER)}}function p(_){const x=[],y=_.index,S=_.attributes.position;let L=0;if(y!==null){const O=y.array;L=y.version;for(let U=0,N=O.length;U<N;U+=3){const u=O[U+0],X=O[U+1],B=O[U+2];x.push(u,X,X,B,B,u)}}else if(S!==void 0){const O=S.array;L=S.version;for(let U=0,N=O.length/3-1;U<N;U+=3){const u=U+0,X=U+1,B=U+2;x.push(u,X,X,B,B,u)}}else return;const g=new(pc(x)?Mc:yc)(x,1);g.version=L;const v=a.get(_);v&&e.remove(v),a.set(_,g)}function m(_){const x=a.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return a.get(_)}return{get:l,update:h,getWireframeAttribute:m}}function Up(i,e,t){let n;function r(x){n=x}let a,c;function l(x){a=x.type,c=x.bytesPerElement}function h(x,y){i.drawElements(n,y,a,x*c),t.update(y,n,1)}function p(x,y,S){S!==0&&(i.drawElementsInstanced(n,y,a,x*c,S),t.update(y,n,S))}function m(x,y,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,x,0,S);let g=0;for(let v=0;v<S;v++)g+=y[v];t.update(g,n,1)}function _(x,y,S,L){if(S===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<x.length;v++)p(x[v]/c,y[v],L[v]);else{g.multiDrawElementsInstancedWEBGL(n,y,0,a,x,0,L,0,S);let v=0;for(let O=0;O<S;O++)v+=y[O];for(let O=0;O<L.length;O++)t.update(v,n,L[O])}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function Ip(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Np(i,e,t){const n=new WeakMap,r=new qt;function a(c,l,h){const p=c.morphTargetInfluences,m=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,_=m!==void 0?m.length:0;let x=n.get(l);if(x===void 0||x.count!==_){let E=function(){$.dispose(),n.delete(l),l.removeEventListener("dispose",E)};var y=E;x!==void 0&&x.texture.dispose();const S=l.morphAttributes.position!==void 0,L=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,v=l.morphAttributes.position||[],O=l.morphAttributes.normal||[],U=l.morphAttributes.color||[];let N=0;S===!0&&(N=1),L===!0&&(N=2),g===!0&&(N=3);let u=l.attributes.position.count*N,X=1;u>e.maxTextureSize&&(X=Math.ceil(u/e.maxTextureSize),u=e.maxTextureSize);const B=new Float32Array(u*X*4*_),$=new gc(B,u,X,_);$.type=di,$.needsUpdate=!0;const Ee=N*4;for(let P=0;P<_;P++){const ee=v[P],re=O[P],fe=U[P],ge=u*X*4*P;for(let ae=0;ae<ee.count;ae++){const me=ae*Ee;S===!0&&(r.fromBufferAttribute(ee,ae),B[ge+me+0]=r.x,B[ge+me+1]=r.y,B[ge+me+2]=r.z,B[ge+me+3]=0),L===!0&&(r.fromBufferAttribute(re,ae),B[ge+me+4]=r.x,B[ge+me+5]=r.y,B[ge+me+6]=r.z,B[ge+me+7]=0),g===!0&&(r.fromBufferAttribute(fe,ae),B[ge+me+8]=r.x,B[ge+me+9]=r.y,B[ge+me+10]=r.z,B[ge+me+11]=fe.itemSize===4?r.w:1)}}x={count:_,texture:$,size:new Et(u,X)},n.set(l,x),l.addEventListener("dispose",E)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let g=0;g<p.length;g++)S+=p[g];const L=l.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",L),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function Fp(i,e,t,n){let r=new WeakMap;function a(h){const p=n.render.frame,m=h.geometry,_=e.get(h,m);if(r.get(_)!==p&&(e.update(_),r.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==p&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;r.get(x)!==p&&(x.update(),r.set(x,p))}return _}function c(){r=new WeakMap}function l(h){const p=h.target;p.removeEventListener("dispose",l),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:c}}class wc extends _n{constructor(e,t,n,r,a,c,l,h,p,m=xr){if(m!==xr&&m!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===xr&&(n=ji),n===void 0&&m===Ar&&(n=br),super(null,r,a,c,l,h,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:In,this.minFilter=h!==void 0?h:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cc=new _n,Il=new wc(1,1),Rc=new gc,Pc=new Mf,Lc=new Tc,Nl=[],Fl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),zl=new Float32Array(4);function Lr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Nl[r];if(a===void 0&&(a=new Float32Array(r),Nl[r]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(a,l)}return a}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Js(i,e){let t=Fl[e];t===void 0&&(t=new Int32Array(e),Fl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),nn(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),nn(t,n)}}function Vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),nn(t,n)}}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Il.compareFunction=dc,a=Il):a=Cc,t.setTexture2D(e||a,r)}function Qp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pc,r)}function em(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lc,r)}function tm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rc,r)}function nm(i){switch(i){case 5126:return Op;case 35664:return Bp;case 35665:return zp;case 35666:return Hp;case 35674:return kp;case 35675:return Gp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return jp;case 36294:return Kp;case 36295:return Zp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}function im(i,e){i.uniform1fv(this.addr,e)}function rm(i,e){const t=Lr(e,this.size,2);i.uniform2fv(this.addr,t)}function sm(i,e){const t=Lr(e,this.size,3);i.uniform3fv(this.addr,t)}function am(i,e){const t=Lr(e,this.size,4);i.uniform4fv(this.addr,t)}function om(i,e){const t=Lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lm(i,e){const t=Lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cm(i,e){const t=Lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function um(i,e){i.uniform1iv(this.addr,e)}function fm(i,e){i.uniform2iv(this.addr,e)}function hm(i,e){i.uniform3iv(this.addr,e)}function dm(i,e){i.uniform4iv(this.addr,e)}function pm(i,e){i.uniform1uiv(this.addr,e)}function mm(i,e){i.uniform2uiv(this.addr,e)}function gm(i,e){i.uniform3uiv(this.addr,e)}function _m(i,e){i.uniform4uiv(this.addr,e)}function vm(i,e,t){const n=this.cache,r=e.length,a=Js(t,r);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Cc,a[c])}function xm(i,e,t){const n=this.cache,r=e.length,a=Js(t,r);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Pc,a[c])}function ym(i,e,t){const n=this.cache,r=e.length,a=Js(t,r);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Lc,a[c])}function Mm(i,e,t){const n=this.cache,r=e.length,a=Js(t,r);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Rc,a[c])}function Sm(i){switch(i){case 5126:return im;case 35664:return rm;case 35665:return sm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return um;case 35667:case 35671:return fm;case 35668:case 35672:return hm;case 35669:case 35673:return dm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nm(t.type)}}class Tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sm(t.type)}}class bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,c=r.length;a!==c;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Hl(i,e){i.seq.push(e),i.map[e.id]=e}function Am(i,e,t){const n=i.name,r=n.length;for(Ba.lastIndex=0;;){const a=Ba.exec(n),c=Ba.lastIndex;let l=a[1];const h=a[2]==="]",p=a[3];if(h&&(l=l|0),p===void 0||p==="["&&c+2===r){Hl(t,p===void 0?new Em(l,i,e):new Tm(l,i,e));break}else{let _=t.map[l];_===void 0&&(_=new bm(l),Hl(t,_)),t=_}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),c=e.getUniformLocation(t,a.name);Am(a,c,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,c=t.length;a!==c;++a){const l=t[a],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function kl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wm=37297;let Cm=0;function Rm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=r;c<a;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function Pm(i){const e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(i);let n;switch(e===t?n="":e===Xs&&t===Ws?n="LinearDisplayP3ToLinearSRGB":e===Ws&&t===Xs&&(n="LinearSRGBToLinearDisplayP3"),i){case Pi:case Ks:return[n,"LinearTransferOETF"];case Jn:case Fo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Rm(i.getShaderSource(e),c)}else return r}function Lm(i,e){const t=Pm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dm(i,e){let t;switch(e){case Ru:t="Linear";break;case Pu:t="Reinhard";break;case Lu:t="Cineon";break;case Du:t="ACESFilmic";break;case Iu:t="AgX";break;case Nu:t="Neutral";break;case Uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ds=new ie;function Um(){Pt.getLuminanceCoefficients(Ds);const i=Ds.x.toFixed(4),e=Ds.y.toFixed(4),t=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Nm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),c=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Xr(i){return i!==""}function Vl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(i){return i.replace(Om,zm)}const Bm=new Map;function zm(i,e){let t=ft[e];if(t===void 0){const n=Bm.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wo(t)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(i){return i.replace(Hm,km)}function km(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ql(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Vm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Xm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:e="ENVMAP_BLENDING_MULTIPLY";break;case wu:e="ENVMAP_BLENDING_MIX";break;case Cu:e="ENVMAP_BLENDING_ADD";break}return e}function qm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ym(i,e,t,n){const r=i.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=Gm(t),p=Vm(t),m=Wm(t),_=Xm(t),x=qm(t),y=Im(t),S=Nm(a),L=r.createProgram();let g,v,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Xr).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Xr).join(`
`),v.length>0&&(v+=`
`)):(g=[ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),v=[ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ft.tonemapping_pars_fragment:"",t.toneMapping!==wi?Dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Lm("linearToOutputTexel",t.outputColorSpace),Um(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),c=wo(c),c=Vl(c,t),c=Wl(c,t),l=wo(l),l=Vl(l,t),l=Wl(l,t),c=Xl(c),l=Xl(l),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,g=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=O+g+c,N=O+v+l,u=kl(r,r.VERTEX_SHADER,U),X=kl(r,r.FRAGMENT_SHADER,N);r.attachShader(L,u),r.attachShader(L,X),t.index0AttributeName!==void 0?r.bindAttribLocation(L,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(L,0,"position"),r.linkProgram(L);function B(P){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(L).trim(),re=r.getShaderInfoLog(u).trim(),fe=r.getShaderInfoLog(X).trim();let ge=!0,ae=!0;if(r.getProgramParameter(L,r.LINK_STATUS)===!1)if(ge=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,L,u,X);else{const me=Gl(r,u,"vertex"),j=Gl(r,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(L,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ee+`
`+me+`
`+j)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(re===""||fe==="")&&(ae=!1);ae&&(P.diagnostics={runnable:ge,programLog:ee,vertexShader:{log:re,prefix:g},fragmentShader:{log:fe,prefix:v}})}r.deleteShader(u),r.deleteShader(X),$=new Gs(r,L),Ee=Fm(r,L)}let $;this.getUniforms=function(){return $===void 0&&B(this),$};let Ee;this.getAttributes=function(){return Ee===void 0&&B(this),Ee};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(L,wm)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cm++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=u,this.fragmentShader=X,this}let jm=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zm(e),t.set(e,n)),n}}class Zm{constructor(e){this.id=jm++,this.code=e,this.usedTimes=0}}function $m(i,e,t,n,r,a,c){const l=new vc,h=new Km,p=new Set,m=[],_=r.logarithmicDepthBuffer,x=r.reverseDepthBuffer,y=r.vertexTextures;let S=r.precision;const L={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return p.add(E),E===0?"uv":`uv${E}`}function v(E,P,ee,re,fe){const ge=re.fog,ae=fe.geometry,me=E.isMeshStandardMaterial?re.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||me),be=j&&j.mapping===js?j.image.height:null,xe=L[E.type];E.precision!==null&&(S=r.getMaxPrecision(E.precision),S!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",S,"instead."));const Me=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,pt=Me!==void 0?Me.length:0;let Mt=0;ae.morphAttributes.position!==void 0&&(Mt=1),ae.morphAttributes.normal!==void 0&&(Mt=2),ae.morphAttributes.color!==void 0&&(Mt=3);let oe,ve,Le,Ce;if(xe){const ln=Qn[xe];oe=ln.vertexShader,ve=ln.fragmentShader}else oe=E.vertexShader,ve=E.fragmentShader,h.update(E),Le=h.getVertexShaderID(E),Ce=h.getFragmentShaderID(E);const je=i.getRenderTarget(),$e=fe.isInstancedMesh===!0,tt=fe.isBatchedMesh===!0,gt=!!E.map,lt=!!E.matcap,I=!!j,wt=!!E.aoMap,ut=!!E.lightMap,_t=!!E.bumpMap,Je=!!E.normalMap,At=!!E.displacementMap,Ke=!!E.emissiveMap,D=!!E.metalnessMap,T=!!E.roughnessMap,K=E.anisotropy>0,ue=E.clearcoat>0,_e=E.dispersion>0,ce=E.iridescence>0,We=E.sheen>0,Re=E.transmission>0,Ne=K&&!!E.anisotropyMap,mt=ue&&!!E.clearcoatMap,Se=ue&&!!E.clearcoatNormalMap,ke=ue&&!!E.clearcoatRoughnessMap,nt=ce&&!!E.iridescenceMap,Xe=ce&&!!E.iridescenceThicknessMap,Pe=We&&!!E.sheenColorMap,dt=We&&!!E.sheenRoughnessMap,at=!!E.specularMap,Dt=!!E.specularColorMap,k=!!E.specularIntensityMap,Ue=Re&&!!E.transmissionMap,se=Re&&!!E.thicknessMap,de=!!E.gradientMap,Ie=!!E.alphaMap,Fe=E.alphaTest>0,xt=!!E.alphaHash,Vt=!!E.extensions;let on=wi;E.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(on=i.toneMapping);const St={shaderID:xe,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:ve,defines:E.defines,customVertexShaderID:Le,customFragmentShaderID:Ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:S,batching:tt,batchingColor:tt&&fe._colorsTexture!==null,instancing:$e,instancingColor:$e&&fe.instanceColor!==null,instancingMorph:$e&&fe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:je===null?i.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:Pi,alphaToCoverage:!!E.alphaToCoverage,map:gt,matcap:lt,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:be,aoMap:wt,lightMap:ut,bumpMap:_t,normalMap:Je,displacementMap:y&&At,emissiveMap:Ke,normalMapObjectSpace:Je&&E.normalMapType===Hu,normalMapTangentSpace:Je&&E.normalMapType===zu,metalnessMap:D,roughnessMap:T,anisotropy:K,anisotropyMap:Ne,clearcoat:ue,clearcoatMap:mt,clearcoatNormalMap:Se,clearcoatRoughnessMap:ke,dispersion:_e,iridescence:ce,iridescenceMap:nt,iridescenceThicknessMap:Xe,sheen:We,sheenColorMap:Pe,sheenRoughnessMap:dt,specularMap:at,specularColorMap:Dt,specularIntensityMap:k,transmission:Re,transmissionMap:Ue,thicknessMap:se,gradientMap:de,opaque:E.transparent===!1&&E.blending===vr&&E.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Fe,alphaHash:xt,combine:E.combine,mapUv:gt&&g(E.map.channel),aoMapUv:wt&&g(E.aoMap.channel),lightMapUv:ut&&g(E.lightMap.channel),bumpMapUv:_t&&g(E.bumpMap.channel),normalMapUv:Je&&g(E.normalMap.channel),displacementMapUv:At&&g(E.displacementMap.channel),emissiveMapUv:Ke&&g(E.emissiveMap.channel),metalnessMapUv:D&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:Ne&&g(E.anisotropyMap.channel),clearcoatMapUv:mt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(E.sheenRoughnessMap.channel),specularMapUv:at&&g(E.specularMap.channel),specularColorMapUv:Dt&&g(E.specularColorMap.channel),specularIntensityMapUv:k&&g(E.specularIntensityMap.channel),transmissionMapUv:Ue&&g(E.transmissionMap.channel),thicknessMapUv:se&&g(E.thicknessMap.channel),alphaMapUv:Ie&&g(E.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Je||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:fe.isPoints===!0&&!!ae.attributes.uv&&(gt||Ie),fog:!!ge,useFog:E.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:x,skinning:fe.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Mt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&ee.length>0,shadowMapType:i.shadowMap.type,toneMapping:on,decodeVideoTexture:gt&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===zt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hi,flipSided:E.side===yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Vt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&E.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=p.has(1),St.vertexUv2s=p.has(2),St.vertexUv3s=p.has(3),p.clear(),St}function O(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const ee in E.defines)P.push(ee),P.push(E.defines[ee]);return E.isRawShaderMaterial===!1&&(U(P,E),N(P,E),P.push(i.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function U(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function N(E,P){l.disableAll(),P.supportsVertexTextures&&l.enable(0),P.instancing&&l.enable(1),P.instancingColor&&l.enable(2),P.instancingMorph&&l.enable(3),P.matcap&&l.enable(4),P.envMap&&l.enable(5),P.normalMapObjectSpace&&l.enable(6),P.normalMapTangentSpace&&l.enable(7),P.clearcoat&&l.enable(8),P.iridescence&&l.enable(9),P.alphaTest&&l.enable(10),P.vertexColors&&l.enable(11),P.vertexAlphas&&l.enable(12),P.vertexUv1s&&l.enable(13),P.vertexUv2s&&l.enable(14),P.vertexUv3s&&l.enable(15),P.vertexTangents&&l.enable(16),P.anisotropy&&l.enable(17),P.alphaHash&&l.enable(18),P.batching&&l.enable(19),P.dispersion&&l.enable(20),P.batchingColor&&l.enable(21),E.push(l.mask),l.disableAll(),P.fog&&l.enable(0),P.useFog&&l.enable(1),P.flatShading&&l.enable(2),P.logarithmicDepthBuffer&&l.enable(3),P.reverseDepthBuffer&&l.enable(4),P.skinning&&l.enable(5),P.morphTargets&&l.enable(6),P.morphNormals&&l.enable(7),P.morphColors&&l.enable(8),P.premultipliedAlpha&&l.enable(9),P.shadowMapEnabled&&l.enable(10),P.doubleSided&&l.enable(11),P.flipSided&&l.enable(12),P.useDepthPacking&&l.enable(13),P.dithering&&l.enable(14),P.transmission&&l.enable(15),P.sheen&&l.enable(16),P.opaque&&l.enable(17),P.pointsUvs&&l.enable(18),P.decodeVideoTexture&&l.enable(19),P.alphaToCoverage&&l.enable(20),E.push(l.mask)}function u(E){const P=L[E.type];let ee;if(P){const re=Qn[P];ee=Uf.clone(re.uniforms)}else ee=E.uniforms;return ee}function X(E,P){let ee;for(let re=0,fe=m.length;re<fe;re++){const ge=m[re];if(ge.cacheKey===P){ee=ge,++ee.usedTimes;break}}return ee===void 0&&(ee=new Ym(i,P,E,a),m.push(ee)),ee}function B(E){if(--E.usedTimes===0){const P=m.indexOf(E);m[P]=m[m.length-1],m.pop(),E.destroy()}}function $(E){h.remove(E)}function Ee(){h.dispose()}return{getParameters:v,getProgramCacheKey:O,getUniforms:u,acquireProgram:X,releaseProgram:B,releaseShaderCache:$,programs:m,dispose:Ee}}function Jm(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,h){i.get(c)[l]=h}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function c(_,x,y,S,L,g){let v=i[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:S,renderOrder:_.renderOrder,z:L,group:g},i[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=S,v.renderOrder=_.renderOrder,v.z=L,v.group=g),e++,v}function l(_,x,y,S,L,g){const v=c(_,x,y,S,L,g);y.transmission>0?n.push(v):y.transparent===!0?r.push(v):t.push(v)}function h(_,x,y,S,L,g){const v=c(_,x,y,S,L,g);y.transmission>0?n.unshift(v):y.transparent===!0?r.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||Qm),n.length>1&&n.sort(x||Yl),r.length>1&&r.sort(x||Yl)}function m(){for(let _=e,x=i.length;_<x;_++){const y=i[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:h,finish:m,sort:p}}function eg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let c;return a===void 0?(c=new jl,i.set(n,[c])):r>=a.length?(c=new jl,a.push(c)):c=a[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Lt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function ng(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ig=0;function rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sg(i){const e=new tg,t=ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new ie);const r=new ie,a=new Yt,c=new Yt;function l(p){let m=0,_=0,x=0;for(let Ee=0;Ee<9;Ee++)n.probe[Ee].set(0,0,0);let y=0,S=0,L=0,g=0,v=0,O=0,U=0,N=0,u=0,X=0,B=0;p.sort(rg);for(let Ee=0,E=p.length;Ee<E;Ee++){const P=p[Ee],ee=P.color,re=P.intensity,fe=P.distance,ge=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=ee.r*re,_+=ee.g*re,x+=ee.b*re;else if(P.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(P.sh.coefficients[ae],re);B++}else if(P.isDirectionalLight){const ae=e.get(P);if(ae.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const me=P.shadow,j=t.get(P);j.shadowIntensity=me.intensity,j.shadowBias=me.bias,j.shadowNormalBias=me.normalBias,j.shadowRadius=me.radius,j.shadowMapSize=me.mapSize,n.directionalShadow[y]=j,n.directionalShadowMap[y]=ge,n.directionalShadowMatrix[y]=P.shadow.matrix,O++}n.directional[y]=ae,y++}else if(P.isSpotLight){const ae=e.get(P);ae.position.setFromMatrixPosition(P.matrixWorld),ae.color.copy(ee).multiplyScalar(re),ae.distance=fe,ae.coneCos=Math.cos(P.angle),ae.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ae.decay=P.decay,n.spot[L]=ae;const me=P.shadow;if(P.map&&(n.spotLightMap[u]=P.map,u++,me.updateMatrices(P),P.castShadow&&X++),n.spotLightMatrix[L]=me.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=me.intensity,j.shadowBias=me.bias,j.shadowNormalBias=me.normalBias,j.shadowRadius=me.radius,j.shadowMapSize=me.mapSize,n.spotShadow[L]=j,n.spotShadowMap[L]=ge,N++}L++}else if(P.isRectAreaLight){const ae=e.get(P);ae.color.copy(ee).multiplyScalar(re),ae.halfWidth.set(P.width*.5,0,0),ae.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=ae,g++}else if(P.isPointLight){const ae=e.get(P);if(ae.color.copy(P.color).multiplyScalar(P.intensity),ae.distance=P.distance,ae.decay=P.decay,P.castShadow){const me=P.shadow,j=t.get(P);j.shadowIntensity=me.intensity,j.shadowBias=me.bias,j.shadowNormalBias=me.normalBias,j.shadowRadius=me.radius,j.shadowMapSize=me.mapSize,j.shadowCameraNear=me.camera.near,j.shadowCameraFar=me.camera.far,n.pointShadow[S]=j,n.pointShadowMap[S]=ge,n.pointShadowMatrix[S]=P.shadow.matrix,U++}n.point[S]=ae,S++}else if(P.isHemisphereLight){const ae=e.get(P);ae.skyColor.copy(P.color).multiplyScalar(re),ae.groundColor.copy(P.groundColor).multiplyScalar(re),n.hemi[v]=ae,v++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=_,n.ambient[2]=x;const $=n.hash;($.directionalLength!==y||$.pointLength!==S||$.spotLength!==L||$.rectAreaLength!==g||$.hemiLength!==v||$.numDirectionalShadows!==O||$.numPointShadows!==U||$.numSpotShadows!==N||$.numSpotMaps!==u||$.numLightProbes!==B)&&(n.directional.length=y,n.spot.length=L,n.rectArea.length=g,n.point.length=S,n.hemi.length=v,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=O,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=N+u-X,n.spotLightMap.length=u,n.numSpotLightShadowsWithMaps=X,n.numLightProbes=B,$.directionalLength=y,$.pointLength=S,$.spotLength=L,$.rectAreaLength=g,$.hemiLength=v,$.numDirectionalShadows=O,$.numPointShadows=U,$.numSpotShadows=N,$.numSpotMaps=u,$.numLightProbes=B,n.version=ig++)}function h(p,m){let _=0,x=0,y=0,S=0,L=0;const g=m.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const U=p[v];if(U.isDirectionalLight){const N=n.directional[_];N.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),_++}else if(U.isSpotLight){const N=n.spot[y];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),y++}else if(U.isRectAreaLight){const N=n.rectArea[S];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(g),c.identity(),a.copy(U.matrixWorld),a.premultiply(g),c.extractRotation(a),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),S++}else if(U.isPointLight){const N=n.point[x];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(g),x++}else if(U.isHemisphereLight){const N=n.hemi[L];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(g),L++}}}return{setup:l,setupView:h,state:n}}function Kl(i){const e=new sg(i),t=[],n=[];function r(m){p.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function c(m){n.push(m)}function l(){e.setup(t)}function h(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:c}}function ag(i){let e=new WeakMap;function t(r,a=0){const c=e.get(r);let l;return c===void 0?(l=new Kl(i),e.set(r,[l])):a>=c.length?(l=new Kl(i),c.push(l)):l=c[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class og extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lg extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fg(i,e,t){let n=new bc;const r=new Et,a=new Et,c=new qt,l=new og({depthPacking:Bu}),h=new lg,p={},m=t.maxTextureSize,_={[Ci]:yn,[yn]:Ci,[hi]:hi},x=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:cg,fragmentShader:ug}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const S=new ti;S.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Nn(S,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let v=this.type;this.render=function(X,B,$){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||X.length===0)return;const Ee=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(Ai),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const re=v!==fi&&this.type===fi,fe=v===fi&&this.type!==fi;for(let ge=0,ae=X.length;ge<ae;ge++){const me=X[ge],j=me.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const be=j.getFrameExtents();if(r.multiply(be),a.copy(j.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/be.x),r.x=a.x*be.x,j.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/be.y),r.y=a.y*be.y,j.mapSize.y=a.y)),j.map===null||re===!0||fe===!0){const Me=this.type!==fi?{minFilter:In,magFilter:In}:{};j.map!==null&&j.map.dispose(),j.map=new Ki(r.x,r.y,Me),j.map.texture.name=me.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const xe=j.getViewportCount();for(let Me=0;Me<xe;Me++){const pt=j.getViewport(Me);c.set(a.x*pt.x,a.y*pt.y,a.x*pt.z,a.y*pt.w),ee.viewport(c),j.updateMatrices(me,Me),n=j.getFrustum(),N(B,$,j.camera,me,this.type)}j.isPointLightShadow!==!0&&this.type===fi&&O(j,$),j.needsUpdate=!1}v=this.type,g.needsUpdate=!1,i.setRenderTarget(Ee,E,P)};function O(X,B){const $=e.update(L);x.defines.VSM_SAMPLES!==X.blurSamples&&(x.defines.VSM_SAMPLES=X.blurSamples,y.defines.VSM_SAMPLES=X.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),X.mapPass===null&&(X.mapPass=new Ki(r.x,r.y)),x.uniforms.shadow_pass.value=X.map.texture,x.uniforms.resolution.value=X.mapSize,x.uniforms.radius.value=X.radius,i.setRenderTarget(X.mapPass),i.clear(),i.renderBufferDirect(B,null,$,x,L,null),y.uniforms.shadow_pass.value=X.mapPass.texture,y.uniforms.resolution.value=X.mapSize,y.uniforms.radius.value=X.radius,i.setRenderTarget(X.map),i.clear(),i.renderBufferDirect(B,null,$,y,L,null)}function U(X,B,$,Ee){let E=null;const P=$.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(P!==void 0)E=P;else if(E=$.isPointLight===!0?h:l,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ee=E.uuid,re=B.uuid;let fe=p[ee];fe===void 0&&(fe={},p[ee]=fe);let ge=fe[re];ge===void 0&&(ge=E.clone(),fe[re]=ge,B.addEventListener("dispose",u)),E=ge}if(E.visible=B.visible,E.wireframe=B.wireframe,Ee===fi?E.side=B.shadowSide!==null?B.shadowSide:B.side:E.side=B.shadowSide!==null?B.shadowSide:_[B.side],E.alphaMap=B.alphaMap,E.alphaTest=B.alphaTest,E.map=B.map,E.clipShadows=B.clipShadows,E.clippingPlanes=B.clippingPlanes,E.clipIntersection=B.clipIntersection,E.displacementMap=B.displacementMap,E.displacementScale=B.displacementScale,E.displacementBias=B.displacementBias,E.wireframeLinewidth=B.wireframeLinewidth,E.linewidth=B.linewidth,$.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ee=i.properties.get(E);ee.light=$}return E}function N(X,B,$,Ee,E){if(X.visible===!1)return;if(X.layers.test(B.layers)&&(X.isMesh||X.isLine||X.isPoints)&&(X.castShadow||X.receiveShadow&&E===fi)&&(!X.frustumCulled||n.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,X.matrixWorld);const re=e.update(X),fe=X.material;if(Array.isArray(fe)){const ge=re.groups;for(let ae=0,me=ge.length;ae<me;ae++){const j=ge[ae],be=fe[j.materialIndex];if(be&&be.visible){const xe=U(X,be,Ee,E);X.onBeforeShadow(i,X,B,$,re,xe,j),i.renderBufferDirect($,null,re,xe,X,j),X.onAfterShadow(i,X,B,$,re,xe,j)}}}else if(fe.visible){const ge=U(X,fe,Ee,E);X.onBeforeShadow(i,X,B,$,re,ge,null),i.renderBufferDirect($,null,re,ge,X,null),X.onAfterShadow(i,X,B,$,re,ge,null)}}const ee=X.children;for(let re=0,fe=ee.length;re<fe;re++)N(ee[re],B,$,Ee,E)}function u(X){X.target.removeEventListener("dispose",u);for(const $ in p){const Ee=p[$],E=X.target.uuid;E in Ee&&(Ee[E].dispose(),delete Ee[E])}}}const hg={[Ga]:Va,[Wa]:Ya,[Xa]:ja,[Sr]:qa,[Va]:Ga,[Ya]:Wa,[ja]:Xa,[qa]:Sr};function dg(i){function e(){let k=!1;const Ue=new qt;let se=null;const de=new qt(0,0,0,0);return{setMask:function(Ie){se!==Ie&&!k&&(i.colorMask(Ie,Ie,Ie,Ie),se=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,Fe,xt,Vt,on){on===!0&&(Ie*=Vt,Fe*=Vt,xt*=Vt),Ue.set(Ie,Fe,xt,Vt),de.equals(Ue)===!1&&(i.clearColor(Ie,Fe,xt,Vt),de.copy(Ue))},reset:function(){k=!1,se=null,de.set(-1,0,0,0)}}}function t(){let k=!1,Ue=!1,se=null,de=null,Ie=null;return{setReversed:function(Fe){Ue=Fe},setTest:function(Fe){Fe?Le(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Fe){se!==Fe&&!k&&(i.depthMask(Fe),se=Fe)},setFunc:function(Fe){if(Ue&&(Fe=hg[Fe]),de!==Fe){switch(Fe){case Ga:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Fe}},setLocked:function(Fe){k=Fe},setClear:function(Fe){Ie!==Fe&&(i.clearDepth(Fe),Ie=Fe)},reset:function(){k=!1,se=null,de=null,Ie=null}}}function n(){let k=!1,Ue=null,se=null,de=null,Ie=null,Fe=null,xt=null,Vt=null,on=null;return{setTest:function(St){k||(St?Le(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(St){Ue!==St&&!k&&(i.stencilMask(St),Ue=St)},setFunc:function(St,ln,On){(se!==St||de!==ln||Ie!==On)&&(i.stencilFunc(St,ln,On),se=St,de=ln,Ie=On)},setOp:function(St,ln,On){(Fe!==St||xt!==ln||Vt!==On)&&(i.stencilOp(St,ln,On),Fe=St,xt=ln,Vt=On)},setLocked:function(St){k=St},setClear:function(St){on!==St&&(i.clearStencil(St),on=St)},reset:function(){k=!1,Ue=null,se=null,de=null,Ie=null,Fe=null,xt=null,Vt=null,on=null}}}const r=new e,a=new t,c=new n,l=new WeakMap,h=new WeakMap;let p={},m={},_=new WeakMap,x=[],y=null,S=!1,L=null,g=null,v=null,O=null,U=null,N=null,u=null,X=new Lt(0,0,0),B=0,$=!1,Ee=null,E=null,P=null,ee=null,re=null;const fe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ge=!1,ae=0;const me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(me)[1]),ge=ae>=1):me.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),ge=ae>=2);let j=null,be={};const xe=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),pt=new qt().fromArray(xe),Mt=new qt().fromArray(Me);function oe(k,Ue,se,de){const Ie=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(k,Fe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<se;xt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Ue+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Fe}const ve={};ve[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),Le(i.DEPTH_TEST),a.setFunc(Sr),ut(!1),_t(nl),Le(i.CULL_FACE),I(Ai);function Le(k){p[k]!==!0&&(i.enable(k),p[k]=!0)}function Ce(k){p[k]!==!1&&(i.disable(k),p[k]=!1)}function je(k,Ue){return m[k]!==Ue?(i.bindFramebuffer(k,Ue),m[k]=Ue,k===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ue),k===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function $e(k,Ue){let se=x,de=!1;if(k){se=_.get(Ue),se===void 0&&(se=[],_.set(Ue,se));const Ie=k.textures;if(se.length!==Ie.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,xt=Ie.length;Fe<xt;Fe++)se[Fe]=i.COLOR_ATTACHMENT0+Fe;se.length=Ie.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function tt(k){return y!==k?(i.useProgram(k),y=k,!0):!1}const gt={[Wi]:i.FUNC_ADD,[uu]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};gt[hu]=i.MIN,gt[du]=i.MAX;const lt={[pu]:i.ZERO,[mu]:i.ONE,[gu]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[Su]:i.SRC_ALPHA_SATURATE,[yu]:i.DST_COLOR,[vu]:i.DST_ALPHA,[_u]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[Mu]:i.ONE_MINUS_DST_COLOR,[xu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[bu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function I(k,Ue,se,de,Ie,Fe,xt,Vt,on,St){if(k===Ai){S===!0&&(Ce(i.BLEND),S=!1);return}if(S===!1&&(Le(i.BLEND),S=!0),k!==cu){if(k!==L||St!==$){if((g!==Wi||U!==Wi)&&(i.blendEquation(i.FUNC_ADD),g=Wi,U=Wi),St)switch(k){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case il:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,O=null,N=null,u=null,X.set(0,0,0),B=0,L=k,$=St}return}Ie=Ie||Ue,Fe=Fe||se,xt=xt||de,(Ue!==g||Ie!==U)&&(i.blendEquationSeparate(gt[Ue],gt[Ie]),g=Ue,U=Ie),(se!==v||de!==O||Fe!==N||xt!==u)&&(i.blendFuncSeparate(lt[se],lt[de],lt[Fe],lt[xt]),v=se,O=de,N=Fe,u=xt),(Vt.equals(X)===!1||on!==B)&&(i.blendColor(Vt.r,Vt.g,Vt.b,on),X.copy(Vt),B=on),L=k,$=!1}function wt(k,Ue){k.side===hi?Ce(i.CULL_FACE):Le(i.CULL_FACE);let se=k.side===yn;Ue&&(se=!se),ut(se),k.blending===vr&&k.transparent===!1?I(Ai):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const de=k.stencilWrite;c.setTest(de),de&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),At(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(k){Ee!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),Ee=k)}function _t(k){k!==au?(Le(i.CULL_FACE),k!==E&&(k===nl?i.cullFace(i.BACK):k===ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),E=k}function Je(k){k!==P&&(ge&&i.lineWidth(k),P=k)}function At(k,Ue,se){k?(Le(i.POLYGON_OFFSET_FILL),(ee!==Ue||re!==se)&&(i.polygonOffset(Ue,se),ee=Ue,re=se)):Ce(i.POLYGON_OFFSET_FILL)}function Ke(k){k?Le(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function D(k){k===void 0&&(k=i.TEXTURE0+fe-1),j!==k&&(i.activeTexture(k),j=k)}function T(k,Ue,se){se===void 0&&(j===null?se=i.TEXTURE0+fe-1:se=j);let de=be[se];de===void 0&&(de={type:void 0,texture:void 0},be[se]=de),(de.type!==k||de.texture!==Ue)&&(j!==se&&(i.activeTexture(se),j=se),i.bindTexture(k,Ue||ve[k]),de.type=k,de.texture=Ue)}function K(){const k=be[j];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(k){pt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),pt.copy(k))}function Pe(k){Mt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Mt.copy(k))}function dt(k,Ue){let se=h.get(Ue);se===void 0&&(se=new WeakMap,h.set(Ue,se));let de=se.get(k);de===void 0&&(de=i.getUniformBlockIndex(Ue,k.name),se.set(k,de))}function at(k,Ue){const de=h.get(Ue).get(k);l.get(Ue)!==de&&(i.uniformBlockBinding(Ue,de,k.__bindingPointIndex),l.set(Ue,de))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},j=null,be={},m={},_=new WeakMap,x=[],y=null,S=!1,L=null,g=null,v=null,O=null,U=null,N=null,u=null,X=new Lt(0,0,0),B=0,$=!1,Ee=null,E=null,P=null,ee=null,re=null,pt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:Le,disable:Ce,bindFramebuffer:je,drawBuffers:$e,useProgram:tt,setBlending:I,setMaterial:wt,setFlipSided:ut,setCullFace:_t,setLineWidth:Je,setPolygonOffset:At,setScissorTest:Ke,activeTexture:D,bindTexture:T,unbindTexture:K,compressedTexImage2D:ue,compressedTexImage3D:_e,texImage2D:ke,texImage3D:nt,updateUBOMapping:dt,uniformBlockBinding:at,texStorage2D:mt,texStorage3D:Se,texSubImage2D:ce,texSubImage3D:We,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ne,scissor:Xe,viewport:Pe,reset:Dt}}function Zl(i,e,t,n){const r=pg(n);switch(t){case ac:return i*e;case lc:return i*e;case cc:return i*e*2;case uc:return i*e/r.components*r.byteLength;case Uo:return i*e/r.components*r.byteLength;case fc:return i*e*2/r.components*r.byteLength;case Io:return i*e*2/r.components*r.byteLength;case oc:return i*e*3/r.components*r.byteLength;case Yn:return i*e*4/r.components*r.byteLength;case No:return i*e*4/r.components*r.byteLength;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case ro:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hs:case So:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hc:case To:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bo:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pg(i){switch(i){case mi:case ic:return{byteLength:1,components:1};case Kr:case rc:case Jr:return{byteLength:2,components:1};case Lo:case Do:return{byteLength:2,components:4};case ji:case Po:case di:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mg(i,e,t,n,r,a,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Et,m=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(D,T){return y?new OffscreenCanvas(D,T):$r("canvas")}function L(D,T,K){let ue=1;const _e=Ke(D);if((_e.width>K||_e.height>K)&&(ue=K/Math.max(_e.width,_e.height)),ue<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(ue*_e.width),We=Math.floor(ue*_e.height);_===void 0&&(_=S(ce,We));const Re=T?S(ce,We):_;return Re.width=ce,Re.height=We,Re.getContext("2d").drawImage(D,0,0,ce,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ce+"x"+We+")."),Re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==In&&D.minFilter!==Xn}function v(D){i.generateMipmap(D)}function O(D,T,K,ue,_e=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===i.RED&&(K===i.FLOAT&&(ce=i.R32F),K===i.HALF_FLOAT&&(ce=i.R16F),K===i.UNSIGNED_BYTE&&(ce=i.R8)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.R8UI),K===i.UNSIGNED_SHORT&&(ce=i.R16UI),K===i.UNSIGNED_INT&&(ce=i.R32UI),K===i.BYTE&&(ce=i.R8I),K===i.SHORT&&(ce=i.R16I),K===i.INT&&(ce=i.R32I)),T===i.RG&&(K===i.FLOAT&&(ce=i.RG32F),K===i.HALF_FLOAT&&(ce=i.RG16F),K===i.UNSIGNED_BYTE&&(ce=i.RG8)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.RG8UI),K===i.UNSIGNED_SHORT&&(ce=i.RG16UI),K===i.UNSIGNED_INT&&(ce=i.RG32UI),K===i.BYTE&&(ce=i.RG8I),K===i.SHORT&&(ce=i.RG16I),K===i.INT&&(ce=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),K===i.UNSIGNED_INT&&(ce=i.RGB32UI),K===i.BYTE&&(ce=i.RGB8I),K===i.SHORT&&(ce=i.RGB16I),K===i.INT&&(ce=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),K===i.UNSIGNED_INT&&(ce=i.RGBA32UI),K===i.BYTE&&(ce=i.RGBA8I),K===i.SHORT&&(ce=i.RGBA16I),K===i.INT&&(ce=i.RGBA32I)),T===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),T===i.RGBA){const We=_e?Vs:Pt.getTransfer(ue);K===i.FLOAT&&(ce=i.RGBA32F),K===i.HALF_FLOAT&&(ce=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ce=We===zt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function U(D,T){let K;return D?T===null||T===ji||T===br?K=i.DEPTH24_STENCIL8:T===di?K=i.DEPTH32F_STENCIL8:T===Kr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ji||T===br?K=i.DEPTH_COMPONENT24:T===di?K=i.DEPTH_COMPONENT32F:T===Kr&&(K=i.DEPTH_COMPONENT16),K}function N(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==In&&D.minFilter!==Xn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function u(D){const T=D.target;T.removeEventListener("dispose",u),B(T),T.isVideoTexture&&m.delete(T)}function X(D){const T=D.target;T.removeEventListener("dispose",X),Ee(T)}function B(D){const T=n.get(D);if(T.__webglInit===void 0)return;const K=D.source,ue=x.get(K);if(ue){const _e=ue[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&$(D),Object.keys(ue).length===0&&x.delete(K)}n.remove(D)}function $(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const K=D.source,ue=x.get(K);delete ue[T.__cacheKey],c.memory.textures--}function Ee(D){const T=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let _e=0;_e<T.__webglFramebuffer[ue].length;_e++)i.deleteFramebuffer(T.__webglFramebuffer[ue][_e]);else i.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)i.deleteFramebuffer(T.__webglFramebuffer[ue]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=D.textures;for(let ue=0,_e=K.length;ue<_e;ue++){const ce=n.get(K[ue]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),c.memory.textures--),n.remove(K[ue])}n.remove(D)}let E=0;function P(){E=0}function ee(){const D=E;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),E+=1,D}function re(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function fe(D,T){const K=n.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(K,D,T);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function ge(D,T){const K=n.get(D);if(D.version>0&&K.__version!==D.version){Mt(K,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function ae(D,T){const K=n.get(D);if(D.version>0&&K.__version!==D.version){Mt(K,D,T);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function me(D,T){const K=n.get(D);if(D.version>0&&K.__version!==D.version){oe(K,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}const j={[Ja]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},be={[In]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[hs]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},xe={[ku]:i.NEVER,[Yu]:i.ALWAYS,[Gu]:i.LESS,[dc]:i.LEQUAL,[Vu]:i.EQUAL,[qu]:i.GEQUAL,[Wu]:i.GREATER,[Xu]:i.NOTEQUAL};function Me(D,T){if(T.type===di&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Xn||T.magFilter===fa||T.magFilter===hs||T.magFilter===Yi||T.minFilter===Xn||T.minFilter===fa||T.minFilter===hs||T.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,j[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,j[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,j[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,be[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,be[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===In||T.minFilter!==hs&&T.minFilter!==Yi||T.type===di&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function pt(D,T){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",u));const ue=T.source;let _e=x.get(ue);_e===void 0&&(_e={},x.set(ue,_e));const ce=re(T);if(ce!==D.__cacheKey){_e[ce]===void 0&&(_e[ce]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,K=!0),_e[ce].usedTimes++;const We=_e[D.__cacheKey];We!==void 0&&(_e[D.__cacheKey].usedTimes--,We.usedTimes===0&&$(T)),D.__cacheKey=ce,D.__webglTexture=_e[ce].texture}return K}function Mt(D,T,K){let ue=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=i.TEXTURE_3D);const _e=pt(D,T),ce=T.source;t.bindTexture(ue,D.__webglTexture,i.TEXTURE0+K);const We=n.get(ce);if(ce.version!==We.__version||_e===!0){t.activeTexture(i.TEXTURE0+K);const Re=Pt.getPrimaries(Pt.workingColorSpace),Ne=T.colorSpace===bi?null:Pt.getPrimaries(T.colorSpace),mt=T.colorSpace===bi||Re===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Se=L(T.image,!1,r.maxTextureSize);Se=At(T,Se);const ke=a.convert(T.format,T.colorSpace),nt=a.convert(T.type);let Xe=O(T.internalFormat,ke,nt,T.colorSpace,T.isVideoTexture);Me(ue,T);let Pe;const dt=T.mipmaps,at=T.isVideoTexture!==!0,Dt=We.__version===void 0||_e===!0,k=ce.dataReady,Ue=N(T,Se);if(T.isDepthTexture)Xe=U(T.format===Ar,T.type),Dt&&(at?t.texStorage2D(i.TEXTURE_2D,1,Xe,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,Xe,Se.width,Se.height,0,ke,nt,null));else if(T.isDataTexture)if(dt.length>0){at&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ue,Xe,dt[0].width,dt[0].height);for(let se=0,de=dt.length;se<de;se++)Pe=dt[se],at?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Pe.width,Pe.height,ke,nt,Pe.data):t.texImage2D(i.TEXTURE_2D,se,Xe,Pe.width,Pe.height,0,ke,nt,Pe.data);T.generateMipmaps=!1}else at?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ue,Xe,Se.width,Se.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,nt,Se.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,Se.width,Se.height,0,ke,nt,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Xe,dt[0].width,dt[0].height,Se.depth);for(let se=0,de=dt.length;se<de;se++)if(Pe=dt[se],T.format!==Yn)if(ke!==null)if(at){if(k)if(T.layerUpdates.size>0){const Ie=Zl(Pe.width,Pe.height,T.format,T.type);for(const Fe of T.layerUpdates){const xt=Pe.data.subarray(Fe*Ie/Pe.data.BYTES_PER_ELEMENT,(Fe+1)*Ie/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Fe,Pe.width,Pe.height,1,ke,xt,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Pe.width,Pe.height,Se.depth,ke,Pe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Xe,Pe.width,Pe.height,Se.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Pe.width,Pe.height,Se.depth,ke,nt,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Xe,Pe.width,Pe.height,Se.depth,0,ke,nt,Pe.data)}else{at&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ue,Xe,dt[0].width,dt[0].height);for(let se=0,de=dt.length;se<de;se++)Pe=dt[se],T.format!==Yn?ke!==null?at?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Pe.width,Pe.height,ke,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Pe.width,Pe.height,ke,nt,Pe.data):t.texImage2D(i.TEXTURE_2D,se,Xe,Pe.width,Pe.height,0,ke,nt,Pe.data)}else if(T.isDataArrayTexture)if(at){if(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Xe,Se.width,Se.height,Se.depth),k)if(T.layerUpdates.size>0){const se=Zl(Se.width,Se.height,T.format,T.type);for(const de of T.layerUpdates){const Ie=Se.data.subarray(de*se/Se.data.BYTES_PER_ELEMENT,(de+1)*se/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,ke,nt,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,nt,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,Se.width,Se.height,Se.depth,0,ke,nt,Se.data);else if(T.isData3DTexture)at?(Dt&&t.texStorage3D(i.TEXTURE_3D,Ue,Xe,Se.width,Se.height,Se.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,nt,Se.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,Se.width,Se.height,Se.depth,0,ke,nt,Se.data);else if(T.isFramebufferTexture){if(Dt)if(at)t.texStorage2D(i.TEXTURE_2D,Ue,Xe,Se.width,Se.height);else{let se=Se.width,de=Se.height;for(let Ie=0;Ie<Ue;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Xe,se,de,0,ke,nt,null),se>>=1,de>>=1}}else if(dt.length>0){if(at&&Dt){const se=Ke(dt[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Xe,se.width,se.height)}for(let se=0,de=dt.length;se<de;se++)Pe=dt[se],at?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ke,nt,Pe):t.texImage2D(i.TEXTURE_2D,se,Xe,ke,nt,Pe);T.generateMipmaps=!1}else if(at){if(Dt){const se=Ke(Se);t.texStorage2D(i.TEXTURE_2D,Ue,Xe,se.width,se.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,nt,Se)}else t.texImage2D(i.TEXTURE_2D,0,Xe,ke,nt,Se);g(T)&&v(ue),We.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function oe(D,T,K){if(T.image.length!==6)return;const ue=pt(D,T),_e=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+K);const ce=n.get(_e);if(_e.version!==ce.__version||ue===!0){t.activeTexture(i.TEXTURE0+K);const We=Pt.getPrimaries(Pt.workingColorSpace),Re=T.colorSpace===bi?null:Pt.getPrimaries(T.colorSpace),Ne=T.colorSpace===bi||We===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const mt=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!mt&&!Se?ke[de]=L(T.image[de],!0,r.maxCubemapSize):ke[de]=Se?T.image[de].image:T.image[de],ke[de]=At(T,ke[de]);const nt=ke[0],Xe=a.convert(T.format,T.colorSpace),Pe=a.convert(T.type),dt=O(T.internalFormat,Xe,Pe,T.colorSpace),at=T.isVideoTexture!==!0,Dt=ce.__version===void 0||ue===!0,k=_e.dataReady;let Ue=N(T,nt);Me(i.TEXTURE_CUBE_MAP,T);let se;if(mt){at&&Dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,dt,nt.width,nt.height);for(let de=0;de<6;de++){se=ke[de].mipmaps;for(let Ie=0;Ie<se.length;Ie++){const Fe=se[Ie];T.format!==Yn?Xe!==null?at?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Fe.width,Fe.height,Xe,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,dt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,Fe.width,Fe.height,Xe,Pe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,dt,Fe.width,Fe.height,0,Xe,Pe,Fe.data)}}}else{if(se=T.mipmaps,at&&Dt){se.length>0&&Ue++;const de=Ke(ke[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,dt,de.width,de.height)}for(let de=0;de<6;de++)if(Se){at?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Xe,Pe,ke[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,ke[de].width,ke[de].height,0,Xe,Pe,ke[de].data);for(let Ie=0;Ie<se.length;Ie++){const xt=se[Ie].image[de].image;at?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,xt.width,xt.height,Xe,Pe,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,dt,xt.width,xt.height,0,Xe,Pe,xt.data)}}else{at?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Xe,Pe,ke[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,Xe,Pe,ke[de]);for(let Ie=0;Ie<se.length;Ie++){const Fe=se[Ie];at?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Xe,Pe,Fe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,dt,Xe,Pe,Fe.image[de])}}}g(T)&&v(i.TEXTURE_CUBE_MAP),ce.__version=_e.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ve(D,T,K,ue,_e,ce){const We=a.convert(K.format,K.colorSpace),Re=a.convert(K.type),Ne=O(K.internalFormat,We,Re,K.colorSpace);if(!n.get(T).__hasExternalTextures){const Se=Math.max(1,T.width>>ce),ke=Math.max(1,T.height>>ce);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,ce,Ne,Se,ke,T.depth,0,We,Re,null):t.texImage2D(_e,ce,Ne,Se,ke,0,We,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),_t(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,_e,n.get(K).__webglTexture,0,ut(T)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,_e,n.get(K).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(D,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const ue=T.depthTexture,_e=ue&&ue.isDepthTexture?ue.type:null,ce=U(T.stencilBuffer,_e),We=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=ut(T);_t(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,ce,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,We,i.RENDERBUFFER,D)}else{const ue=T.textures;for(let _e=0;_e<ue.length;_e++){const ce=ue[_e],We=a.convert(ce.format,ce.colorSpace),Re=a.convert(ce.type),Ne=O(ce.internalFormat,We,Re,ce.colorSpace),mt=ut(T);K&&_t(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Ne,T.width,T.height):_t(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Ne,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const ue=n.get(T.depthTexture).__webglTexture,_e=ut(T);if(T.depthTexture.format===xr)_t(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Ar)_t(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function je(D){const T=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ue=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ue){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ue.removeEventListener("dispose",_e)};ue.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=ue}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ce(T.__webglFramebuffer,D)}else if(K){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]===void 0)T.__webglDepthbuffer[ue]=i.createRenderbuffer(),Le(T.__webglDepthbuffer[ue],D,!1);else{const _e=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Le(T.__webglDepthbuffer,D,!1);else{const ue=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(D,T,K){const ue=n.get(D);T!==void 0&&ve(ue.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&je(D)}function tt(D){const T=D.texture,K=n.get(D),ue=n.get(T);D.addEventListener("dispose",X);const _e=D.textures,ce=D.isWebGLCubeRenderTarget===!0,We=_e.length>1;if(We||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=T.version,c.memory.textures++),ce){K.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Re]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)K.__webglFramebuffer[Re][Ne]=i.createFramebuffer()}else K.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)K.__webglFramebuffer[Re]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(We)for(let Re=0,Ne=_e.length;Re<Ne;Re++){const mt=n.get(_e[Re]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&_t(D)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Ne=_e[Re];K.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const mt=a.convert(Ne.format,Ne.colorSpace),Se=a.convert(Ne.type),ke=O(Ne.internalFormat,mt,Se,Ne.colorSpace,D.isXRRenderTarget===!0),nt=ut(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,ke,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Me(i.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)ve(K.__webglFramebuffer[Re][Ne],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ne);else ve(K.__webglFramebuffer[Re],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);g(T)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Re=0,Ne=_e.length;Re<Ne;Re++){const mt=_e[Re],Se=n.get(mt);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),Me(i.TEXTURE_2D,mt),ve(K.__webglFramebuffer,D,mt,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),g(mt)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,ue.__webglTexture),Me(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)ve(K.__webglFramebuffer[Ne],D,T,i.COLOR_ATTACHMENT0,Re,Ne);else ve(K.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,Re,0);g(T)&&v(Re),t.unbindTexture()}D.depthBuffer&&je(D)}function gt(D){const T=D.textures;for(let K=0,ue=T.length;K<ue;K++){const _e=T[K];if(g(_e)){const ce=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,We=n.get(_e).__webglTexture;t.bindTexture(ce,We),v(ce),t.unbindTexture()}}}const lt=[],I=[];function wt(D){if(D.samples>0){if(_t(D)===!1){const T=D.textures,K=D.width,ue=D.height;let _e=i.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,We=n.get(D),Re=T.length>1;if(Re)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const mt=n.get(T[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,K,ue,0,0,K,ue,_e,i.NEAREST),h===!0&&(lt.length=0,I.length=0,lt.push(i.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(lt.push(ce),I.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const mt=n.get(T[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,mt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ut(D){return Math.min(r.maxSamples,D.samples)}function _t(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(D){const T=c.render.frame;m.get(D)!==T&&(m.set(D,T),D.update())}function At(D,T){const K=D.colorSpace,ue=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Pi&&K!==bi&&(Pt.getTransfer(K)===zt?(ue!==Yn||_e!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=P,this.setTexture2D=fe,this.setTexture2DArray=ge,this.setTexture3D=ae,this.setTextureCube=me,this.rebindTextures=$e,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_t}function gg(i,e){function t(n,r=bi){let a;const c=Pt.getTransfer(r);if(n===mi)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.BYTE;if(n===rc)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Po)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Jr)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===oc)return i.RGB;if(n===Yn)return i.RGBA;if(n===lc)return i.LUMINANCE;if(n===cc)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===fc)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Fs||n===Os||n===Bs||n===zs)if(c===zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Fs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Fs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===eo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===so||n===ao)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ro||n===so)return c===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ao)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===lo||n===co||n===uo||n===fo||n===ho||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===yo||n===Mo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===oo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return c===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hs||n===So||n===Eo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Hs)return c===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===To||n===bo||n===Ao)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Hs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===To)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ao)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class _g extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,c=null;const l=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const L of e.hand.values()){const g=t.getJointPose(L,n),v=this._getHandJoint(p,L);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=m.position.distanceTo(_.position),y=.02,S=.005;p.inputState.pinching&&x>y+S?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-S&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new _n,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:xg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sg extends Cr{constructor(e,t){super();const n=this;let r=null,a=1,c=null,l="local-floor",h=1,p=null,m=null,_=null,x=null,y=null,S=null;const L=new Mg,g=t.getContextAttributes();let v=null,O=null;const U=[],N=[],u=new Et;let X=null;const B=new Un;B.layers.enable(1),B.viewport=new qt;const $=new Un;$.layers.enable(2),$.viewport=new qt;const Ee=[B,$],E=new _g;E.layers.enable(1),E.layers.enable(2);let P=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=U[oe];return ve===void 0&&(ve=new za,U[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=U[oe];return ve===void 0&&(ve=new za,U[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=U[oe];return ve===void 0&&(ve=new za,U[oe]=ve),ve.getHandSpace()};function re(oe){const ve=N.indexOf(oe.inputSource);if(ve===-1)return;const Le=U[ve];Le!==void 0&&(Le.update(oe.inputSource,oe.frame,p||c),Le.dispatchEvent({type:oe.type,data:oe.inputSource}))}function fe(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",ge);for(let oe=0;oe<U.length;oe++){const ve=N[oe];ve!==null&&(N[oe]=null,U[oe].disconnect(ve))}P=null,ee=null,L.reset(),e.setRenderTarget(v),y=null,x=null,_=null,r=null,O=null,Mt.stop(),n.isPresenting=!1,e.setPixelRatio(X),e.setSize(u.width,u.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){l=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",ge),g.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(u),r.renderState.layers===void 0){const ve={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Ki(y.framebufferWidth,y.framebufferHeight,{format:Yn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ve=null,Le=null,Ce=null;g.depth&&(Ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=g.stencil?Ar:xr,Le=g.stencil?br:ji);const je={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};_=new XRWebGLBinding(r,t),x=_.createProjectionLayer(je),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Ki(x.textureWidth,x.textureHeight,{format:Yn,type:mi,depthTexture:new wc(x.textureWidth,x.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await r.requestReferenceSpace(l),Mt.setContext(r),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function ge(oe){for(let ve=0;ve<oe.removed.length;ve++){const Le=oe.removed[ve],Ce=N.indexOf(Le);Ce>=0&&(N[Ce]=null,U[Ce].disconnect(Le))}for(let ve=0;ve<oe.added.length;ve++){const Le=oe.added[ve];let Ce=N.indexOf(Le);if(Ce===-1){for(let $e=0;$e<U.length;$e++)if($e>=N.length){N.push(Le),Ce=$e;break}else if(N[$e]===null){N[$e]=Le,Ce=$e;break}if(Ce===-1)break}const je=U[Ce];je&&je.connect(Le)}}const ae=new ie,me=new ie;function j(oe,ve,Le){ae.setFromMatrixPosition(ve.matrixWorld),me.setFromMatrixPosition(Le.matrixWorld);const Ce=ae.distanceTo(me),je=ve.projectionMatrix.elements,$e=Le.projectionMatrix.elements,tt=je[14]/(je[10]-1),gt=je[14]/(je[10]+1),lt=(je[9]+1)/je[5],I=(je[9]-1)/je[5],wt=(je[8]-1)/je[0],ut=($e[8]+1)/$e[0],_t=tt*wt,Je=tt*ut,At=Ce/(-wt+ut),Ke=At*-wt;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ke),oe.translateZ(At),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),je[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const D=tt+At,T=gt+At,K=_t-Ke,ue=Je+(Ce-Ke),_e=lt*gt/T*D,ce=I*gt/T*D;oe.projectionMatrix.makePerspective(K,ue,_e,ce,D,T),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function be(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let ve=oe.near,Le=oe.far;L.texture!==null&&(L.depthNear>0&&(ve=L.depthNear),L.depthFar>0&&(Le=L.depthFar)),E.near=$.near=B.near=ve,E.far=$.far=B.far=Le,(P!==E.near||ee!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,ee=E.far);const Ce=oe.parent,je=E.cameras;be(E,Ce);for(let $e=0;$e<je.length;$e++)be(je[$e],Ce);je.length===2?j(E,B,$):E.projectionMatrix.copy(B.projectionMatrix),xe(oe,E,Ce)};function xe(oe,ve,Le){Le===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(Le.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Zr*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&y===null))return h},this.setFoveation=function(oe){h=oe,x!==null&&(x.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(E)};let Me=null;function pt(oe,ve){if(m=ve.getViewerPose(p||c),S=ve,m!==null){const Le=m.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Ce=!1;Le.length!==E.cameras.length&&(E.cameras.length=0,Ce=!0);for(let $e=0;$e<Le.length;$e++){const tt=Le[$e];let gt=null;if(y!==null)gt=y.getViewport(tt);else{const I=_.getViewSubImage(x,tt);gt=I.viewport,$e===0&&(e.setRenderTargetTextures(O,I.colorTexture,x.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(O))}let lt=Ee[$e];lt===void 0&&(lt=new Un,lt.layers.enable($e),lt.viewport=new qt,Ee[$e]=lt),lt.matrix.fromArray(tt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(tt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(gt.x,gt.y,gt.width,gt.height),$e===0&&(E.matrix.copy(lt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ce===!0&&E.cameras.push(lt)}const je=r.enabledFeatures;if(je&&je.includes("depth-sensing")){const $e=_.getDepthInformation(Le[0]);$e&&$e.isValid&&$e.texture&&L.init(e,$e,r.renderState)}}for(let Le=0;Le<U.length;Le++){const Ce=N[Le],je=U[Le];Ce!==null&&je!==void 0&&je.update(Ce,ve,p||c)}Me&&Me(oe,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),S=null}const Mt=new Ac;Mt.setAnimationLoop(pt),this.setAnimationLoop=function(oe){Me=oe},this.dispose=function(){}}}const ki=new gi,Eg=new Yt;function Tg(i,e){function t(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function n(g,v){v.color.getRGB(g.fogColor.value,Sc(i)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function r(g,v,O,U,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(g,v):v.isMeshToonMaterial?(a(g,v),_(g,v)):v.isMeshPhongMaterial?(a(g,v),m(g,v)):v.isMeshStandardMaterial?(a(g,v),x(g,v),v.isMeshPhysicalMaterial&&y(g,v,N)):v.isMeshMatcapMaterial?(a(g,v),S(g,v)):v.isMeshDepthMaterial?a(g,v):v.isMeshDistanceMaterial?(a(g,v),L(g,v)):v.isMeshNormalMaterial?a(g,v):v.isLineBasicMaterial?(c(g,v),v.isLineDashedMaterial&&l(g,v)):v.isPointsMaterial?h(g,v,O,U):v.isSpriteMaterial?p(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,t(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===yn&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,t(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===yn&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,t(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,t(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const O=e.get(v),U=O.envMap,N=O.envMapRotation;U&&(g.envMap.value=U,ki.copy(N),ki.x*=-1,ki.y*=-1,ki.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(ki)),g.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,g.aoMapTransform))}function c(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform))}function l(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function h(g,v,O,U){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*O,g.scale.value=U*.5,v.map&&(g.map.value=v.map,t(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function p(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function _(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function x(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function y(g,v,O){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===yn&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=O.texture,g.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,v){v.matcap&&(g.matcap.value=v.matcap)}function L(g,v){const O=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(O.matrixWorld),g.nearDistance.value=O.shadow.camera.near,g.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function bg(i,e,t,n){let r={},a={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,U){const N=U.program;n.uniformBlockBinding(O,N)}function p(O,U){let N=r[O.id];N===void 0&&(S(O),N=m(O),r[O.id]=N,O.addEventListener("dispose",g));const u=U.program;n.updateUBOMapping(O,u);const X=e.render.frame;a[O.id]!==X&&(x(O),a[O.id]=X)}function m(O){const U=_();O.__bindingPointIndex=U;const N=i.createBuffer(),u=O.__size,X=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,u,X),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,U,N),N}function _(){for(let O=0;O<l;O++)if(c.indexOf(O)===-1)return c.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const U=r[O.id],N=O.uniforms,u=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,U);for(let X=0,B=N.length;X<B;X++){const $=Array.isArray(N[X])?N[X]:[N[X]];for(let Ee=0,E=$.length;Ee<E;Ee++){const P=$[Ee];if(y(P,X,Ee,u)===!0){const ee=P.__offset,re=Array.isArray(P.value)?P.value:[P.value];let fe=0;for(let ge=0;ge<re.length;ge++){const ae=re[ge],me=L(ae);typeof ae=="number"||typeof ae=="boolean"?(P.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,ee+fe,P.__data)):ae.isMatrix3?(P.__data[0]=ae.elements[0],P.__data[1]=ae.elements[1],P.__data[2]=ae.elements[2],P.__data[3]=0,P.__data[4]=ae.elements[3],P.__data[5]=ae.elements[4],P.__data[6]=ae.elements[5],P.__data[7]=0,P.__data[8]=ae.elements[6],P.__data[9]=ae.elements[7],P.__data[10]=ae.elements[8],P.__data[11]=0):(ae.toArray(P.__data,fe),fe+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ee,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(O,U,N,u){const X=O.value,B=U+"_"+N;if(u[B]===void 0)return typeof X=="number"||typeof X=="boolean"?u[B]=X:u[B]=X.clone(),!0;{const $=u[B];if(typeof X=="number"||typeof X=="boolean"){if($!==X)return u[B]=X,!0}else if($.equals(X)===!1)return $.copy(X),!0}return!1}function S(O){const U=O.uniforms;let N=0;const u=16;for(let B=0,$=U.length;B<$;B++){const Ee=Array.isArray(U[B])?U[B]:[U[B]];for(let E=0,P=Ee.length;E<P;E++){const ee=Ee[E],re=Array.isArray(ee.value)?ee.value:[ee.value];for(let fe=0,ge=re.length;fe<ge;fe++){const ae=re[fe],me=L(ae),j=N%u,be=j%me.boundary,xe=j+be;N+=be,xe!==0&&u-xe<me.storage&&(N+=u-xe),ee.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=N,N+=me.storage}}}const X=N%u;return X>0&&(N+=u-X),O.__size=N,O.__cache={},this}function L(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function g(O){const U=O.target;U.removeEventListener("dispose",g);const N=c.indexOf(U.__bindingPointIndex);c.splice(N,1),i.deleteBuffer(r[U.id]),delete r[U.id],delete a[U.id]}function v(){for(const O in r)i.deleteBuffer(r[O]);c=[],r={},a={}}return{bind:h,update:p,dispose:v}}class Ag{constructor(e={}){const{canvas:t=hf(),context:n=null,depth:r=!0,stencil:a=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=c;const y=new Uint32Array(4),S=new Int32Array(4);let L=null,g=null;const v=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=wi,this.toneMappingExposure=1;const U=this;let N=!1,u=0,X=0,B=null,$=-1,Ee=null;const E=new qt,P=new qt;let ee=null;const re=new Lt(0);let fe=0,ge=t.width,ae=t.height,me=1,j=null,be=null;const xe=new qt(0,0,ge,ae),Me=new qt(0,0,ge,ae);let pt=!1;const Mt=new bc;let oe=!1,ve=!1;const Le=new Yt,Ce=new Yt,je=new ie,$e=new qt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function lt(){return B===null?me:1}let I=n;function wt(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),I===null){const W="webgl2";if(I=wt(W,R),I===null)throw wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ut,_t,Je,At,Ke,D,T,K,ue,_e,ce,We,Re,Ne,mt,Se,ke,nt,Xe,Pe,dt,at,Dt,k;function Ue(){ut=new Lp(I),ut.init(),at=new gg(I,ut),_t=new Tp(I,ut,e,at),Je=new dg(I),_t.reverseDepthBuffer&&Je.buffers.depth.setReversed(!0),At=new Ip(I),Ke=new Jm,D=new mg(I,ut,Je,Ke,_t,at,At),T=new Ap(U),K=new Pp(U),ue=new Hf(I),Dt=new Sp(I,ue),_e=new Dp(I,ue,At,Dt),ce=new Fp(I,_e,ue,At),Xe=new Np(I,_t,D),Se=new bp(Ke),We=new $m(U,T,K,ut,_t,Dt,Se),Re=new Tg(U,Ke),Ne=new eg,mt=new ag(ut),nt=new Mp(U,T,K,Je,ce,x,h),ke=new fg(U,ce,_t),k=new bg(I,At,_t,Je),Pe=new Ep(I,ut,At),dt=new Up(I,ut,At),At.programs=We.programs,U.capabilities=_t,U.extensions=ut,U.properties=Ke,U.renderLists=Ne,U.shadowMap=ke,U.state=Je,U.info=At}Ue();const se=new Sg(U,I);this.xr=se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(R){R!==void 0&&(me=R,this.setSize(ge,ae,!1))},this.getSize=function(R){return R.set(ge,ae)},this.setSize=function(R,W,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ge=R,ae=W,t.width=Math.floor(R*me),t.height=Math.floor(W*me),J===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ge*me,ae*me).floor()},this.setDrawingBufferSize=function(R,W,J){ge=R,ae=W,me=J,t.width=Math.floor(R*J),t.height=Math.floor(W*J),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(xe)},this.setViewport=function(R,W,J,Q){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,W,J,Q),Je.viewport(E.copy(xe).multiplyScalar(me).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,W,J,Q){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,W,J,Q),Je.scissor(P.copy(Me).multiplyScalar(me).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){Je.setScissorTest(pt=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){be=R},this.getClearColor=function(R){return R.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(R=!0,W=!0,J=!0){let Q=0;if(R){let q=!1;if(B!==null){const Te=B.texture.format;q=Te===No||Te===Io||Te===Uo}if(q){const Te=B.texture.type,Ae=Te===mi||Te===ji||Te===Kr||Te===br||Te===Lo||Te===Do,ze=nt.getClearColor(),Ge=nt.getClearAlpha(),Ze=ze.r,et=ze.g,qe=ze.b;Ae?(y[0]=Ze,y[1]=et,y[2]=qe,y[3]=Ge,I.clearBufferuiv(I.COLOR,0,y)):(S[0]=Ze,S[1]=et,S[2]=qe,S[3]=Ge,I.clearBufferiv(I.COLOR,0,S))}else Q|=I.COLOR_BUFFER_BIT}W&&(Q|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Ne.dispose(),mt.dispose(),Ke.dispose(),T.dispose(),K.dispose(),ce.dispose(),Dt.dispose(),k.dispose(),We.dispose(),se.dispose(),se.removeEventListener("sessionstart",Dr),se.removeEventListener("sessionend",ni),jn.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=At.autoReset,W=ke.enabled,J=ke.autoUpdate,Q=ke.needsUpdate,q=ke.type;Ue(),At.autoReset=R,ke.enabled=W,ke.autoUpdate=J,ke.needsUpdate=Q,ke.type=q}function Fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const W=R.target;W.removeEventListener("dispose",xt),Vt(W)}function Vt(R){on(R),Ke.remove(R)}function on(R){const W=Ke.get(R).programs;W!==void 0&&(W.forEach(function(J){We.releaseProgram(J)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,J,Q,q,Te){W===null&&(W=tt);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,ze=ns(R,W,J,Q,q);Je.setMaterial(Q,Ae);let Ge=J.index,Ze=1;if(Q.wireframe===!0){if(Ge=_e.getWireframeAttribute(J),Ge===void 0)return;Ze=2}const et=J.drawRange,qe=J.attributes.position;let Ct=et.start*Ze,Ut=(et.start+et.count)*Ze;Te!==null&&(Ct=Math.max(Ct,Te.start*Ze),Ut=Math.min(Ut,(Te.start+Te.count)*Ze)),Ge!==null?(Ct=Math.max(Ct,0),Ut=Math.min(Ut,Ge.count)):qe!=null&&(Ct=Math.max(Ct,0),Ut=Math.min(Ut,qe.count));const Ot=Ut-Ct;if(Ot<0||Ot===1/0)return;Dt.setup(q,Q,ze,J,Ge);let rn,Tt=Pe;if(Ge!==null&&(rn=ue.get(Ge),Tt=dt,Tt.setIndex(rn)),q.isMesh)Q.wireframe===!0?(Je.setLineWidth(Q.wireframeLinewidth*lt()),Tt.setMode(I.LINES)):Tt.setMode(I.TRIANGLES);else if(q.isLine){let He=Q.linewidth;He===void 0&&(He=1),Je.setLineWidth(He*lt()),q.isLineSegments?Tt.setMode(I.LINES):q.isLineLoop?Tt.setMode(I.LINE_LOOP):Tt.setMode(I.LINE_STRIP)}else q.isPoints?Tt.setMode(I.POINTS):q.isSprite&&Tt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Tt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))Tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const He=q._multiDrawStarts,jt=q._multiDrawCounts,vt=q._multiDrawCount,Sn=Ge?ue.get(Ge).bytesPerElement:1,vi=Ke.get(Q).currentProgram.getUniforms();for(let Wt=0;Wt<vt;Wt++)vi.setValue(I,"_gl_DrawID",Wt),Tt.render(He[Wt]/Sn,jt[Wt])}else if(q.isInstancedMesh)Tt.renderInstances(Ct,Ot,q.count);else if(J.isInstancedBufferGeometry){const He=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,jt=Math.min(J.instanceCount,He);Tt.renderInstances(Ct,Ot,jt)}else Tt.render(Ct,Ot)};function St(R,W,J){R.transparent===!0&&R.side===hi&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,Ui(R,W,J),R.side=Ci,R.needsUpdate=!0,Ui(R,W,J),R.side=hi):Ui(R,W,J)}this.compile=function(R,W,J=null){J===null&&(J=R),g=mt.get(J),g.init(W),O.push(g),J.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),R!==J&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const Q=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Ae=0;Ae<Te.length;Ae++){const ze=Te[Ae];St(ze,J,q),Q.add(ze)}else St(Te,J,q),Q.add(Te)}),O.pop(),g=null,Q},this.compileAsync=function(R,W,J=null){const Q=this.compile(R,W,J);return new Promise(q=>{function Te(){if(Q.forEach(function(Ae){Ke.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){q(R);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ln=null;function On(R){ln&&ln(R)}function Dr(){jn.stop()}function ni(){jn.start()}const jn=new Ac;jn.setAnimationLoop(On),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(R){ln=R,se.setAnimationLoop(R),R===null?jn.stop():jn.start()},se.addEventListener("sessionstart",Dr),se.addEventListener("sessionend",ni),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,W,B),g=mt.get(R,O.length),g.init(W),O.push(g),Ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Mt.setFromProjectionMatrix(Ce),ve=this.localClippingEnabled,oe=Se.init(this.clippingPlanes,ve),L=Ne.get(R,v.length),L.init(),v.push(L),se.enabled===!0&&se.isPresenting===!0){const Te=U.xr.getDepthSensingMesh();Te!==null&&Li(Te,W,-1/0,U.sortObjects)}Li(R,W,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(j,be),gt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,gt&&nt.addToRenderList(L,R),this.info.render.frame++,oe===!0&&Se.beginShadows();const J=g.state.shadowsArray;ke.render(J,R,W),oe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=L.opaque,q=L.transmissive;if(g.setupLights(),W.isArrayCamera){const Te=W.cameras;if(q.length>0)for(let Ae=0,ze=Te.length;Ae<ze;Ae++){const Ge=Te[Ae];Ur(Q,q,R,Ge)}gt&&nt.render(R);for(let Ae=0,ze=Te.length;Ae<ze;Ae++){const Ge=Te[Ae];Di(L,R,Ge,Ge.viewport)}}else q.length>0&&Ur(Q,q,R,W),gt&&nt.render(R),Di(L,R,W);B!==null&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(U,R,W),Dt.resetDefaultState(),$=-1,Ee=null,O.pop(),O.length>0?(g=O[O.length-1],oe===!0&&Se.setGlobalState(U.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?L=v[v.length-1]:L=null};function Li(R,W,J,Q){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Mt.intersectsSprite(R)){Q&&$e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const Ae=ce.update(R),ze=R.material;ze.visible&&L.push(R,Ae,ze,J,$e.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Mt.intersectsObject(R))){const Ae=ce.update(R),ze=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$e.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),$e.copy(Ae.boundingSphere.center)),$e.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(ze)){const Ge=Ae.groups;for(let Ze=0,et=Ge.length;Ze<et;Ze++){const qe=Ge[Ze],Ct=ze[qe.materialIndex];Ct&&Ct.visible&&L.push(R,Ae,Ct,J,$e.z,qe)}}else ze.visible&&L.push(R,Ae,ze,J,$e.z,null)}}const Te=R.children;for(let Ae=0,ze=Te.length;Ae<ze;Ae++)Li(Te[Ae],W,J,Q)}function Di(R,W,J,Q){const q=R.opaque,Te=R.transmissive,Ae=R.transparent;g.setupLightsView(J),oe===!0&&Se.setGlobalState(U.clippingPlanes,J),Q&&Je.viewport(E.copy(Q)),q.length>0&&Zi(q,W,J),Te.length>0&&Zi(Te,W,J),Ae.length>0&&Zi(Ae,W,J),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Ur(R,W,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new Ki(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Jr:mi,minFilter:Yi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||E;Te.setSize(Ae.z,Ae.w);const ze=U.getRenderTarget();U.setRenderTarget(Te),U.getClearColor(re),fe=U.getClearAlpha(),fe<1&&U.setClearColor(16777215,.5),U.clear(),gt&&nt.render(J);const Ge=U.toneMapping;U.toneMapping=wi;const Ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),oe===!0&&Se.setGlobalState(U.clippingPlanes,Q),Zi(R,J,Q),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let qe=0,Ct=W.length;qe<Ct;qe++){const Ut=W[qe],Ot=Ut.object,rn=Ut.geometry,Tt=Ut.material,He=Ut.group;if(Tt.side===hi&&Ot.layers.test(Q.layers)){const jt=Tt.side;Tt.side=yn,Tt.needsUpdate=!0,_i(Ot,J,Q,rn,Tt,He),Tt.side=jt,Tt.needsUpdate=!0,et=!0}}et===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}U.setRenderTarget(ze),U.setClearColor(re,fe),Ze!==void 0&&(Q.viewport=Ze),U.toneMapping=Ge}function Zi(R,W,J){const Q=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Te=R.length;q<Te;q++){const Ae=R[q],ze=Ae.object,Ge=Ae.geometry,Ze=Q===null?Ae.material:Q,et=Ae.group;ze.layers.test(J.layers)&&_i(ze,W,J,Ge,Ze,et)}}function _i(R,W,J,Q,q,Te){R.onBeforeRender(U,W,J,Q,q,Te),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(U,W,J,Q,R,Te),q.transparent===!0&&q.side===hi&&q.forceSinglePass===!1?(q.side=yn,q.needsUpdate=!0,U.renderBufferDirect(J,W,Q,q,R,Te),q.side=Ci,q.needsUpdate=!0,U.renderBufferDirect(J,W,Q,q,R,Te),q.side=hi):U.renderBufferDirect(J,W,Q,q,R,Te),R.onAfterRender(U,W,J,Q,q,Te)}function Ui(R,W,J){W.isScene!==!0&&(W=tt);const Q=Ke.get(R),q=g.state.lights,Te=g.state.shadowsArray,Ae=q.state.version,ze=We.getParameters(R,q.state,Te,W,J),Ge=We.getProgramCacheKey(ze);let Ze=Q.programs;Q.environment=R.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(R.isMeshStandardMaterial?K:T).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",xt),Ze=new Map,Q.programs=Ze);let et=Ze.get(Ge);if(et!==void 0){if(Q.currentProgram===et&&Q.lightsStateVersion===Ae)return Nr(R,ze),et}else ze.uniforms=We.getUniforms(R),R.onBeforeCompile(ze,U),et=We.acquireProgram(ze,Ge),Ze.set(Ge,et),Q.uniforms=ze.uniforms;const qe=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Se.uniform),Nr(R,ze),Q.needsLights=Qs(R),Q.lightsStateVersion=Ae,Q.needsLights&&(qe.ambientLightColor.value=q.state.ambient,qe.lightProbe.value=q.state.probe,qe.directionalLights.value=q.state.directional,qe.directionalLightShadows.value=q.state.directionalShadow,qe.spotLights.value=q.state.spot,qe.spotLightShadows.value=q.state.spotShadow,qe.rectAreaLights.value=q.state.rectArea,qe.ltc_1.value=q.state.rectAreaLTC1,qe.ltc_2.value=q.state.rectAreaLTC2,qe.pointLights.value=q.state.point,qe.pointLightShadows.value=q.state.pointShadow,qe.hemisphereLights.value=q.state.hemi,qe.directionalShadowMap.value=q.state.directionalShadowMap,qe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,qe.spotShadowMap.value=q.state.spotShadowMap,qe.spotLightMatrix.value=q.state.spotLightMatrix,qe.spotLightMap.value=q.state.spotLightMap,qe.pointShadowMap.value=q.state.pointShadowMap,qe.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=et,Q.uniformsList=null,et}function Ir(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Gs.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Nr(R,W){const J=Ke.get(R);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function ns(R,W,J,Q,q){W.isScene!==!0&&(W=tt),D.resetTextureUnits();const Te=W.fog,Ae=Q.isMeshStandardMaterial?W.environment:null,ze=B===null?U.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Pi,Ge=(Q.isMeshStandardMaterial?K:T).get(Q.envMap||Ae),Ze=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qe=!!J.morphAttributes.position,Ct=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color;let Ot=wi;Q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ot=U.toneMapping);const rn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tt=rn!==void 0?rn.length:0,He=Ke.get(Q),jt=g.state.lights;if(oe===!0&&(ve===!0||R!==Ee)){const hn=R===Ee&&Q.id===$;Se.setState(Q,R,hn)}let vt=!1;Q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==jt.state.version||He.outputColorSpace!==ze||q.isBatchedMesh&&He.batching===!1||!q.isBatchedMesh&&He.batching===!0||q.isBatchedMesh&&He.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&He.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&He.instancing===!1||!q.isInstancedMesh&&He.instancing===!0||q.isSkinnedMesh&&He.skinning===!1||!q.isSkinnedMesh&&He.skinning===!0||q.isInstancedMesh&&He.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&He.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&He.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&He.instancingMorph===!1&&q.morphTexture!==null||He.envMap!==Ge||Q.fog===!0&&He.fog!==Te||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Se.numPlanes||He.numIntersection!==Se.numIntersection)||He.vertexAlphas!==Ze||He.vertexTangents!==et||He.morphTargets!==qe||He.morphNormals!==Ct||He.morphColors!==Ut||He.toneMapping!==Ot||He.morphTargetsCount!==Tt)&&(vt=!0):(vt=!0,He.__version=Q.version);let Sn=He.currentProgram;vt===!0&&(Sn=Ui(Q,W,q));let vi=!1,Wt=!1,Bn=!1;const Bt=Sn.getUniforms(),Kn=He.uniforms;if(Je.useProgram(Sn.program)&&(vi=!0,Wt=!0,Bn=!0),Q.id!==$&&($=Q.id,Wt=!0),vi||Ee!==R){_t.reverseDepthBuffer?(Le.copy(R.projectionMatrix),pf(Le),mf(Le),Bt.setValue(I,"projectionMatrix",Le)):Bt.setValue(I,"projectionMatrix",R.projectionMatrix),Bt.setValue(I,"viewMatrix",R.matrixWorldInverse);const hn=Bt.map.cameraPosition;hn!==void 0&&hn.setValue(I,je.setFromMatrixPosition(R.matrixWorld)),_t.logarithmicDepthBuffer&&Bt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Bt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),Ee!==R&&(Ee=R,Wt=!0,Bn=!0)}if(q.isSkinnedMesh){Bt.setOptional(I,q,"bindMatrix"),Bt.setOptional(I,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Bt.setValue(I,"boneTexture",hn.boneTexture,D))}q.isBatchedMesh&&(Bt.setOptional(I,q,"batchingTexture"),Bt.setValue(I,"batchingTexture",q._matricesTexture,D),Bt.setOptional(I,q,"batchingIdTexture"),Bt.setValue(I,"batchingIdTexture",q._indirectTexture,D),Bt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Bt.setValue(I,"batchingColorTexture",q._colorsTexture,D));const $i=J.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&Xe.update(q,J,Sn),(Wt||He.receiveShadow!==q.receiveShadow)&&(He.receiveShadow=q.receiveShadow,Bt.setValue(I,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Kn.envMap.value=Ge,Kn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Kn.envMapIntensity.value=W.environmentIntensity),Wt&&(Bt.setValue(I,"toneMappingExposure",U.toneMappingExposure),He.needsLights&&Fr(Kn,Bn),Te&&Q.fog===!0&&Re.refreshFogUniforms(Kn,Te),Re.refreshMaterialUniforms(Kn,Q,me,ae,g.state.transmissionRenderTarget[R.id]),Gs.upload(I,Ir(He),Kn,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Gs.upload(I,Ir(He),Kn,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Bt.setValue(I,"center",q.center),Bt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(I,"normalMatrix",q.normalMatrix),Bt.setValue(I,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const hn=Q.uniformsGroups;for(let ii=0,is=hn.length;ii<is;ii++){const Ji=hn[ii];k.update(Ji,Sn),k.bind(Ji,Sn)}}return Sn}function Fr(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Qs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,W,J){Ke.get(R.texture).__webglTexture=W,Ke.get(R.depthTexture).__webglTexture=J;const Q=Ke.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const J=Ke.get(R);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,J=0){B=R,u=W,X=J;let Q=!0,q=null,Te=!1,Ae=!1;if(R){const Ge=Ke.get(R);if(Ge.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(Ge.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ge.__hasExternalTextures)D.rebindTextures(R,Ke.get(R.texture).__webglTexture,Ke.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qe=R.depthTexture;if(Ge.__boundDepthTexture!==qe){if(qe!==null&&Ke.has(qe)&&(R.width!==qe.image.width||R.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ae=!0);const et=Ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[W])?q=et[W][J]:q=et[W],Te=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?q=Ke.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?q=et[J]:q=et,E.copy(R.viewport),P.copy(R.scissor),ee=R.scissorTest}else E.copy(xe).multiplyScalar(me).floor(),P.copy(Me).multiplyScalar(me).floor(),ee=pt;if(Je.bindFramebuffer(I.FRAMEBUFFER,q)&&Q&&Je.drawBuffers(R,q),Je.viewport(E),Je.scissor(P),Je.setScissorTest(ee),Te){const Ge=Ke.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,J)}else if(Ae){const Ge=Ke.get(R.texture),Ze=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ge.__webglTexture,J||0,Ze)}$=-1},this.readRenderTargetPixels=function(R,W,J,Q,q,Te,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){Je.bindFramebuffer(I.FRAMEBUFFER,ze);try{const Ge=R.texture,Ze=Ge.format,et=Ge.type;if(!_t.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Q&&J>=0&&J<=R.height-q&&I.readPixels(W,J,Q,q,at.convert(Ze),at.convert(et),Te)}finally{const Ge=B!==null?Ke.get(B).__webglFramebuffer:null;Je.bindFramebuffer(I.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,W,J,Q,q,Te,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){const Ge=R.texture,Ze=Ge.format,et=Ge.type;if(!_t.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-Q&&J>=0&&J<=R.height-q){Je.bindFramebuffer(I.FRAMEBUFFER,ze);const qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),I.readPixels(W,J,Q,q,at.convert(Ze),at.convert(et),0);const Ct=B!==null?Ke.get(B).__webglFramebuffer:null;Je.bindFramebuffer(I.FRAMEBUFFER,Ct);const Ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await df(I,Ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(qe),I.deleteSync(Ut),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,J=0){R.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-J),q=Math.floor(R.image.width*Q),Te=Math.floor(R.image.height*Q),Ae=W!==null?W.x:0,ze=W!==null?W.y:0;D.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Ae,ze,q,Te),Je.unbindTexture()},this.copyTextureToTexture=function(R,W,J=null,Q=null,q=0){R.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],W=arguments[2],q=arguments[3]||0,J=null);let Te,Ae,ze,Ge,Ze,et;J!==null?(Te=J.max.x-J.min.x,Ae=J.max.y-J.min.y,ze=J.min.x,Ge=J.min.y):(Te=R.image.width,Ae=R.image.height,ze=0,Ge=0),Q!==null?(Ze=Q.x,et=Q.y):(Ze=0,et=0);const qe=at.convert(W.format),Ct=at.convert(W.type);D.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Ut=I.getParameter(I.UNPACK_ROW_LENGTH),Ot=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=I.getParameter(I.UNPACK_SKIP_PIXELS),Tt=I.getParameter(I.UNPACK_SKIP_ROWS),He=I.getParameter(I.UNPACK_SKIP_IMAGES),jt=R.isCompressedTexture?R.mipmaps[q]:R.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,jt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,q,Ze,et,Te,Ae,qe,Ct,jt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,q,Ze,et,jt.width,jt.height,qe,jt.data):I.texSubImage2D(I.TEXTURE_2D,q,Ze,et,Te,Ae,qe,Ct,jt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He),q===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Je.unbindTexture()},this.copyTextureToTexture3D=function(R,W,J=null,Q=null,q=0){R.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],W=arguments[3],q=arguments[4]||0);let Te,Ae,ze,Ge,Ze,et,qe,Ct,Ut;const Ot=R.isCompressedTexture?R.mipmaps[q]:R.image;J!==null?(Te=J.max.x-J.min.x,Ae=J.max.y-J.min.y,ze=J.max.z-J.min.z,Ge=J.min.x,Ze=J.min.y,et=J.min.z):(Te=Ot.width,Ae=Ot.height,ze=Ot.depth,Ge=0,Ze=0,et=0),Q!==null?(qe=Q.x,Ct=Q.y,Ut=Q.z):(qe=0,Ct=0,Ut=0);const rn=at.convert(W.format),Tt=at.convert(W.type);let He;if(W.isData3DTexture)D.setTexture3D(W,0),He=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)D.setTexture2DArray(W,0),He=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const jt=I.getParameter(I.UNPACK_ROW_LENGTH),vt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),vi=I.getParameter(I.UNPACK_SKIP_ROWS),Wt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,et),R.isDataTexture||R.isData3DTexture?I.texSubImage3D(He,q,qe,Ct,Ut,Te,Ae,ze,rn,Tt,Ot.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(He,q,qe,Ct,Ut,Te,Ae,ze,rn,Ot.data):I.texSubImage3D(He,q,qe,Ct,Ut,Te,Ae,ze,rn,Tt,Ot),I.pixelStorei(I.UNPACK_ROW_LENGTH,jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,vi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt),q===0&&W.generateMipmaps&&I.generateMipmap(He),Je.unbindTexture()},this.initRenderTarget=function(R){Ke.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Je.unbindTexture()},this.resetState=function(){u=0,X=0,B=null,Je.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fo?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===Ks?"display-p3":"srgb"}}class wg extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dc extends ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $l=new Yt,Co=new _c,Is=new Zs,Ns=new ie;class Cg extends Mn{constructor(e=new ti,t=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),Is.radius+=a,e.ray.intersectsSphere(Is)===!1)return;$l.copy(r).invert(),Co.copy(e.ray).applyMatrix4($l);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,p=n.index,_=n.attributes.position;if(p!==null){const x=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let S=x,L=y;S<L;S++){const g=p.getX(S);Ns.fromBufferAttribute(_,g),Jl(Ns,g,h,r,e,t,this)}}else{const x=Math.max(0,c.start),y=Math.min(_.count,c.start+c.count);for(let S=x,L=y;S<L;S++)Ns.fromBufferAttribute(_,S),Jl(Ns,S,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Jl(i,e,t,n,r,a,c){const l=Co.distanceSqToPoint(i);if(l<t){const h=new ie;Co.closestPointToPoint(i,h),h.applyMatrix4(n);const p=r.ray.origin.distanceTo(h);if(p<r.near||p>r.far)return;a.push({distance:p,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Ys extends ti{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],c=[],l=[],h=[],p=new ie,m=new Et;c.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let _=0,x=3;_<=t;_++,x+=3){const y=n+_/t*r;p.x=e*Math.cos(y),p.y=e*Math.sin(y),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(c[x]/e+1)/2,m.y=(c[x+1]/e+1)/2,h.push(m.x,m.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new ei(c,3)),this.setAttribute("normal",new ei(l,3)),this.setAttribute("uv",new ei(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Ql={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Rg{constructor(e,t,n){const r=this;let a=!1,c=0,l=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){l++,a===!1&&r.onStart!==void 0&&r.onStart(m,c,l),a=!0},this.itemEnd=function(m){c++,r.onProgress!==void 0&&r.onProgress(m,c,l),c===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],S=p[_+1];if(y.global&&(y.lastIndex=0),y.test(m))return S}return null}}}const Pg=new Rg;class zo{constructor(e){this.manager=e!==void 0?e:Pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Lg extends zo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Ql.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const l=$r("img");function h(){m(),Ql.add(e,this),t&&t(this),a.manager.itemEnd(e)}function p(_){m(),r&&r(_),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){l.removeEventListener("load",h,!1),l.removeEventListener("error",p,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(e),l.src=e,l}}class Dg extends zo{constructor(e){super(e)}load(e,t,n,r){const a=new _n,c=new Lg(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){a.image=l,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);(i=>{i(window).on("load",function(){const e=i("#top").innerWidth(),t=i("#top").innerHeight(),n=new wg,r=new Un(75,e/t,.1,1e3),a=2*Math.tan(ff.degToRad(r.fov/2))*r.near,c=a*(e/t),l=5;r.position.z=l;const h=c/r.near*l,p=a/r.near*l,m=h/2,_=-m,x=p/2,y=-x,S=.8,L=1.3,g=new Ag;g.setSize(e,t),i("#top").prepend(g.domElement);let v=new Pr(10.3,1,1),O=new jr({color:16777215});new Nn(v,O),v=new Ys(.3,32),O=new jr({color:255});const U=new Nn(v,O);U.position.x=1e3,U.position.y=1e3,i("canvas").addClass("mouse-listener"),i("canvas").attr("id","effects");const N=document.getElementById("effects").getBoundingClientRect(),u=new Et(1e3,1e3);i(".mouse-listener").on("mousemove",j=>X(j));const X=j=>{u.x=(j.clientX-N.left)/N.width*h-m,u.y=-((j.clientY-N.top)/N.height)*p+x,U.position.x=u.x,U.position.y=u.y};i("canvas").on("mouseleave",j=>{u.x=1e3,u.y=1e3}),i(".mouse-listener").on("click",j=>{const be=(j.clientX-N.left)/N.width*h-m,xe=-((j.clientY-N.top)/N.height)*p+x;console.log("Click: ("+be+", "+xe+")"),console.log("Mouse: ("+u.x+", "+u.y+")"),v=new Ys(.05,32),O=new jr({color:16711680});const Me=new Nn(v,O);Me.position.x=be,Me.position.y=xe,n.add(Me)});const B=800,$=new ti,Ee=3,E=new Float32Array(B*Ee),P=new Float32Array(B*3),ee=new Float32Array(B*Ee),re=new Lt;for(let j=0;j<B;j++){const be=j*Ee,xe=j*Ee+1,Me=j*Ee+2;E[be]=Math.random()*(m-_)+_,E[xe]=Math.random()*(x-y)+y,E[Me]=0,re.setHSL(Math.random(),.7,Math.random()),P[j*3]=re.r,P[j*3+1]=re.g,P[j*3+2]=re.b,ee[be]=Math.random()*(.01-.005)+.005,ee[xe]=Math.random()*(.002- -.002)+-.002,ee[Me]=0}$.setAttribute("position",new Fn(E,Ee)),$.setAttribute("color",new Fn(P,3));const fe=new Dg().load("../images/particle.png"),ge=new Dc({size:.08,map:fe,vertexColors:!0}),ae=new Cg($,ge);n.add(ae);const me=()=>{const j=ae.geometry.attributes.position.array;for(let be=0;be<B;be++){const xe=be*3,Me=be*3+1,pt=u.x,Mt=u.y;if(Math.sqrt((pt-j[xe])**2+(Mt-j[Me])**2)<S){j[xe]-=ee[xe],j[Me]-=ee[Me];let ve;const Le=new Et(pt,Mt),Ce=new Et(ee[xe],ee[Me]),je=new Et(j[xe]-ee[xe],j[Me]-ee[Me]),$e=Ce.x**2+Ce.y**2,tt=2*((je.x-Le.x)*Ce.x+(je.y-Le.y)*Ce.y),gt=(je.x-Le.x)**2+(je.y-Le.y)**2-S**2,lt=tt**2-4*$e*gt,I=(-tt+Math.sqrt(lt))/(2*$e),wt=(-tt-Math.sqrt(lt))/(2*$e);if(lt>0){const At=new Et(je.x+I*Ce.x,je.y+I*Ce.y),Ke=new Et(je.x+wt*Ce.x,je.y+wt*Ce.y),D=Math.sqrt((At.x-j[xe])**2+(At.y-j[Me])**2),T=Math.sqrt((Ke.x-je.x)**2+(Ke.y-je.y)**2);ve=D-T>0?Ke:At}else console.log("There are not 2 intersection points");const ut=ve.clone().sub(Le);ut.normalize();const _t=Ce.dot(ut),Je=Ce.sub(ut.multiplyScalar(2*_t));ee[xe]=Je.x*L,ee[Me]=Je.y*L,j[xe]=ve.x+Ce.x,j[Me]=ve.y+Ce.y}j[xe]+=ee[xe],j[Me]+=ee[Me],(j[xe]>m||j[xe]<_-1)&&(j[xe]=_-1,ee[xe]=Math.abs(ee[xe])<.02?Math.abs(ee[xe]):Math.random()*(.01-.05)-.05,(ee[Me]>.003||ee[Me]<-.003)&&(ee[Me]=Math.random()*(.002- -.002)+-.002)),(j[Me]>x||j[Me]<y)&&(j[Me]=Math.random()*(x-y)+y,j[xe]=_-1,(ee[Me]>.003||ee[Me]<-.003)&&(ee[Me]=Math.random()*(.002- -.002)+-.002))}ae.geometry.attributes.position.needsUpdate=!0,g.render(n,r)};g.setAnimationLoop(me)})})(jQuery)});export default Ug();
