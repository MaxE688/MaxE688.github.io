var eu=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Rg=eu((Pg,ks)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */(function(i,e){typeof ks=="object"&&typeof ks.exports=="object"?ks.exports=i.document?e(i,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(i)})(typeof window<"u"?window:void 0,function(i,e){var t=[],n=Object.getPrototypeOf,s=t.slice,a=t.flat?function(r){return t.flat.call(r)}:function(r){return t.concat.apply([],r)},c=t.push,l=t.indexOf,d={},p=d.toString,g=d.hasOwnProperty,v=g.toString,x=v.call(Object),M={},y=function(r){return typeof r=="function"&&typeof r.nodeType!="number"&&typeof r.item!="function"},P=function(r){return r!=null&&r===r.window},m=i.document,_={type:!0,src:!0,nonce:!0,noModule:!0};function F(r,o,f){var h,S,b=(f=f||m).createElement("script");if(b.text=r,o)for(h in _)(S=o[h]||o.getAttribute&&o.getAttribute(h))&&b.setAttribute(h,S);f.head.appendChild(b).parentNode.removeChild(b)}function D(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?d[p.call(r)]||"object":typeof r}var I="3.6.0",u=function(r,o){return new u.fn.init(r,o)};function W(r){var o=!!r&&"length"in r&&r.length,f=D(r);return!y(r)&&!P(r)&&(f==="array"||o===0||typeof o=="number"&&0<o&&o-1 in r)}u.fn=u.prototype={jquery:I,constructor:u,length:0,toArray:function(){return s.call(this)},get:function(r){return r==null?s.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=u.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return u.each(this,r)},map:function(r){return this.pushStack(u.map(this,function(o,f){return r.call(o,f,o)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,f=+r+(r<0?o:0);return this.pushStack(0<=f&&f<o?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:t.sort,splice:t.splice},u.extend=u.fn.extend=function(){var r,o,f,h,S,b,A=arguments[0]||{},B=1,z=arguments.length,G=!1;for(typeof A=="boolean"&&(G=A,A=arguments[B]||{},B++),typeof A=="object"||y(A)||(A={}),B===z&&(A=this,B--);B<z;B++)if((r=arguments[B])!=null)for(o in r)h=r[o],o!=="__proto__"&&A!==h&&(G&&h&&(u.isPlainObject(h)||(S=Array.isArray(h)))?(f=A[o],b=S&&!Array.isArray(f)?[]:S||u.isPlainObject(f)?f:{},S=!1,A[o]=u.extend(G,b,h)):h!==void 0&&(A[o]=h));return A},u.extend({expando:"jQuery"+(I+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,f;return!(!r||p.call(r)!=="[object Object]")&&(!(o=n(r))||typeof(f=g.call(o,"constructor")&&o.constructor)=="function"&&v.call(f)===x)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,f){F(r,{nonce:o&&o.nonce},f)},each:function(r,o){var f,h=0;if(W(r))for(f=r.length;h<f&&o.call(r[h],h,r[h])!==!1;h++);else for(h in r)if(o.call(r[h],h,r[h])===!1)break;return r},makeArray:function(r,o){var f=o||[];return r!=null&&(W(Object(r))?u.merge(f,typeof r=="string"?[r]:r):c.call(f,r)),f},inArray:function(r,o,f){return o==null?-1:l.call(o,r,f)},merge:function(r,o){for(var f=+o.length,h=0,S=r.length;h<f;h++)r[S++]=o[h];return r.length=S,r},grep:function(r,o,f){for(var h=[],S=0,b=r.length,A=!f;S<b;S++)!o(r[S],S)!==A&&h.push(r[S]);return h},map:function(r,o,f){var h,S,b=0,A=[];if(W(r))for(h=r.length;b<h;b++)(S=o(r[b],b,f))!=null&&A.push(S);else for(b in r)(S=o(r[b],b,f))!=null&&A.push(S);return a(A)},guid:1,support:M}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=t[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){d["[object "+o+"]"]=o.toLowerCase()});var O=function(r){var o,f,h,S,b,A,B,z,G,ee,fe,$,te,Oe,qe,Ge,zt,Zt,yn,Ut="sizzle"+1*new Date,rt=r.document,_n=0,Tt=0,Ht=ss(),Fr=ss(),ns=ss(),En=ss(),Ui=function(w,N){return w===N&&(fe=!0),0},Ji={}.hasOwnProperty,vn=[],Qi=vn.pop,Pn=vn.push,kt=vn.push,Tn=vn.slice,bn=function(w,N){for(var k=0,oe=w.length;k<oe;k++)if(w[k]===N)return k;return-1},$n="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",at="[\\x20\\t\\r\\n\\f]",Rt="(?:\\\\[\\da-fA-F]{1,6}"+at+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Jt="\\["+at+"*("+Rt+")(?:"+at+"*([*^$|!~]?=)"+at+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Rt+"))|)"+at+"*\\]",An=":("+Rt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Jt+")*)|.*)\\)|)",jt=new RegExp(at+"+","g"),wn=new RegExp("^"+at+"+|((?:^|[^\\\\])(?:\\\\.)*)"+at+"+$","g"),er=new RegExp("^"+at+"*,"+at+"*"),is=new RegExp("^"+at+"*([>+~]|"+at+")"+at+"*"),Vc=new RegExp(at+"|>"),Wc=new RegExp(An),Xc=new RegExp("^"+Rt+"$"),rs={ID:new RegExp("^#("+Rt+")"),CLASS:new RegExp("^\\.("+Rt+")"),TAG:new RegExp("^("+Rt+"|[*])"),ATTR:new RegExp("^"+Jt),PSEUDO:new RegExp("^"+An),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+at+"*(even|odd|(([+-]|)(\\d*)n|)"+at+"*(?:([+-]|)"+at+"*(\\d+)|))"+at+"*\\)|)","i"),bool:new RegExp("^(?:"+$n+")$","i"),needsContext:new RegExp("^"+at+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+at+"*((?:-\\d)?\\d*)"+at+"*\\)|)(?=[^-]|$)","i")},qc=/HTML$/i,Yc=/^(?:input|select|textarea|button)$/i,jc=/^h\d$/i,Or=/^[^{]+\{\s*\[native \w/,$c=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ra=/[+~]/,ii=new RegExp("\\\\[\\da-fA-F]{1,6}"+at+"?|\\\\([^\\r\\n\\f])","g"),ri=function(w,N){var k="0x"+w.slice(1)-65536;return N||(k<0?String.fromCharCode(k+65536):String.fromCharCode(k>>10|55296,1023&k|56320))},Xo=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,qo=function(w,N){return N?w==="\0"?"�":w.slice(0,-1)+"\\"+w.charCodeAt(w.length-1).toString(16)+" ":"\\"+w},Yo=function(){$()},Kc=os(function(w){return w.disabled===!0&&w.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{kt.apply(vn=Tn.call(rt.childNodes),rt.childNodes),vn[rt.childNodes.length].nodeType}catch{kt={apply:vn.length?function(N,k){Pn.apply(N,Tn.call(k))}:function(N,k){for(var oe=N.length,q=0;N[oe++]=k[q++];);N.length=oe-1}}}function It(w,N,k,oe){var q,de,xe,Ae,Fe,it,Je,nt=N&&N.ownerDocument,xt=N?N.nodeType:9;if(k=k||[],typeof w!="string"||!w||xt!==1&&xt!==9&&xt!==11)return k;if(!oe&&($(N),N=N||te,qe)){if(xt!==11&&(Fe=$c.exec(w)))if(q=Fe[1]){if(xt===9){if(!(xe=N.getElementById(q)))return k;if(xe.id===q)return k.push(xe),k}else if(nt&&(xe=nt.getElementById(q))&&yn(N,xe)&&xe.id===q)return k.push(xe),k}else{if(Fe[2])return kt.apply(k,N.getElementsByTagName(w)),k;if((q=Fe[3])&&f.getElementsByClassName&&N.getElementsByClassName)return kt.apply(k,N.getElementsByClassName(q)),k}if(f.qsa&&!En[w+" "]&&(!Ge||!Ge.test(w))&&(xt!==1||N.nodeName.toLowerCase()!=="object")){if(Je=w,nt=N,xt===1&&(Vc.test(w)||is.test(w))){for((nt=ra.test(w)&&aa(N.parentNode)||N)===N&&f.scope||((Ae=N.getAttribute("id"))?Ae=Ae.replace(Xo,qo):N.setAttribute("id",Ae=Ut)),de=(it=A(w)).length;de--;)it[de]=(Ae?"#"+Ae:":scope")+" "+as(it[de]);Je=it.join(",")}try{return kt.apply(k,nt.querySelectorAll(Je)),k}catch{En(w,!0)}finally{Ae===Ut&&N.removeAttribute("id")}}}return z(w.replace(wn,"$1"),N,k,oe)}function ss(){var w=[];return function N(k,oe){return w.push(k+" ")>h.cacheLength&&delete N[w.shift()],N[k+" "]=oe}}function Bn(w){return w[Ut]=!0,w}function zn(w){var N=te.createElement("fieldset");try{return!!w(N)}catch{return!1}finally{N.parentNode&&N.parentNode.removeChild(N),N=null}}function sa(w,N){for(var k=w.split("|"),oe=k.length;oe--;)h.attrHandle[k[oe]]=N}function jo(w,N){var k=N&&w,oe=k&&w.nodeType===1&&N.nodeType===1&&w.sourceIndex-N.sourceIndex;if(oe)return oe;if(k){for(;k=k.nextSibling;)if(k===N)return-1}return w?1:-1}function Zc(w){return function(N){return N.nodeName.toLowerCase()==="input"&&N.type===w}}function Jc(w){return function(N){var k=N.nodeName.toLowerCase();return(k==="input"||k==="button")&&N.type===w}}function $o(w){return function(N){return"form"in N?N.parentNode&&N.disabled===!1?"label"in N?"label"in N.parentNode?N.parentNode.disabled===w:N.disabled===w:N.isDisabled===w||N.isDisabled!==!w&&Kc(N)===w:N.disabled===w:"label"in N&&N.disabled===w}}function Ii(w){return Bn(function(N){return N=+N,Bn(function(k,oe){for(var q,de=w([],k.length,N),xe=de.length;xe--;)k[q=de[xe]]&&(k[q]=!(oe[q]=k[q]))})})}function aa(w){return w&&typeof w.getElementsByTagName<"u"&&w}for(o in f=It.support={},b=It.isXML=function(w){var N=w&&w.namespaceURI,k=w&&(w.ownerDocument||w).documentElement;return!qc.test(N||k&&k.nodeName||"HTML")},$=It.setDocument=function(w){var N,k,oe=w?w.ownerDocument||w:rt;return oe!=te&&oe.nodeType===9&&oe.documentElement&&(Oe=(te=oe).documentElement,qe=!b(te),rt!=te&&(k=te.defaultView)&&k.top!==k&&(k.addEventListener?k.addEventListener("unload",Yo,!1):k.attachEvent&&k.attachEvent("onunload",Yo)),f.scope=zn(function(q){return Oe.appendChild(q).appendChild(te.createElement("div")),typeof q.querySelectorAll<"u"&&!q.querySelectorAll(":scope fieldset div").length}),f.attributes=zn(function(q){return q.className="i",!q.getAttribute("className")}),f.getElementsByTagName=zn(function(q){return q.appendChild(te.createComment("")),!q.getElementsByTagName("*").length}),f.getElementsByClassName=Or.test(te.getElementsByClassName),f.getById=zn(function(q){return Oe.appendChild(q).id=Ut,!te.getElementsByName||!te.getElementsByName(Ut).length}),f.getById?(h.filter.ID=function(q){var de=q.replace(ii,ri);return function(xe){return xe.getAttribute("id")===de}},h.find.ID=function(q,de){if(typeof de.getElementById<"u"&&qe){var xe=de.getElementById(q);return xe?[xe]:[]}}):(h.filter.ID=function(q){var de=q.replace(ii,ri);return function(xe){var Ae=typeof xe.getAttributeNode<"u"&&xe.getAttributeNode("id");return Ae&&Ae.value===de}},h.find.ID=function(q,de){if(typeof de.getElementById<"u"&&qe){var xe,Ae,Fe,it=de.getElementById(q);if(it){if((xe=it.getAttributeNode("id"))&&xe.value===q)return[it];for(Fe=de.getElementsByName(q),Ae=0;it=Fe[Ae++];)if((xe=it.getAttributeNode("id"))&&xe.value===q)return[it]}return[]}}),h.find.TAG=f.getElementsByTagName?function(q,de){return typeof de.getElementsByTagName<"u"?de.getElementsByTagName(q):f.qsa?de.querySelectorAll(q):void 0}:function(q,de){var xe,Ae=[],Fe=0,it=de.getElementsByTagName(q);if(q==="*"){for(;xe=it[Fe++];)xe.nodeType===1&&Ae.push(xe);return Ae}return it},h.find.CLASS=f.getElementsByClassName&&function(q,de){if(typeof de.getElementsByClassName<"u"&&qe)return de.getElementsByClassName(q)},zt=[],Ge=[],(f.qsa=Or.test(te.querySelectorAll))&&(zn(function(q){var de;Oe.appendChild(q).innerHTML="<a id='"+Ut+"'></a><select id='"+Ut+"-\r\\' msallowcapture=''><option selected=''></option></select>",q.querySelectorAll("[msallowcapture^='']").length&&Ge.push("[*^$]="+at+`*(?:''|"")`),q.querySelectorAll("[selected]").length||Ge.push("\\["+at+"*(?:value|"+$n+")"),q.querySelectorAll("[id~="+Ut+"-]").length||Ge.push("~="),(de=te.createElement("input")).setAttribute("name",""),q.appendChild(de),q.querySelectorAll("[name='']").length||Ge.push("\\["+at+"*name"+at+"*="+at+`*(?:''|"")`),q.querySelectorAll(":checked").length||Ge.push(":checked"),q.querySelectorAll("a#"+Ut+"+*").length||Ge.push(".#.+[+~]"),q.querySelectorAll("\\\f"),Ge.push("[\\r\\n\\f]")}),zn(function(q){q.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var de=te.createElement("input");de.setAttribute("type","hidden"),q.appendChild(de).setAttribute("name","D"),q.querySelectorAll("[name=d]").length&&Ge.push("name"+at+"*[*^$|!~]?="),q.querySelectorAll(":enabled").length!==2&&Ge.push(":enabled",":disabled"),Oe.appendChild(q).disabled=!0,q.querySelectorAll(":disabled").length!==2&&Ge.push(":enabled",":disabled"),q.querySelectorAll("*,:x"),Ge.push(",.*:")})),(f.matchesSelector=Or.test(Zt=Oe.matches||Oe.webkitMatchesSelector||Oe.mozMatchesSelector||Oe.oMatchesSelector||Oe.msMatchesSelector))&&zn(function(q){f.disconnectedMatch=Zt.call(q,"*"),Zt.call(q,"[s!='']:x"),zt.push("!=",An)}),Ge=Ge.length&&new RegExp(Ge.join("|")),zt=zt.length&&new RegExp(zt.join("|")),N=Or.test(Oe.compareDocumentPosition),yn=N||Or.test(Oe.contains)?function(q,de){var xe=q.nodeType===9?q.documentElement:q,Ae=de&&de.parentNode;return q===Ae||!(!Ae||Ae.nodeType!==1||!(xe.contains?xe.contains(Ae):q.compareDocumentPosition&&16&q.compareDocumentPosition(Ae)))}:function(q,de){if(de){for(;de=de.parentNode;)if(de===q)return!0}return!1},Ui=N?function(q,de){if(q===de)return fe=!0,0;var xe=!q.compareDocumentPosition-!de.compareDocumentPosition;return xe||(1&(xe=(q.ownerDocument||q)==(de.ownerDocument||de)?q.compareDocumentPosition(de):1)||!f.sortDetached&&de.compareDocumentPosition(q)===xe?q==te||q.ownerDocument==rt&&yn(rt,q)?-1:de==te||de.ownerDocument==rt&&yn(rt,de)?1:ee?bn(ee,q)-bn(ee,de):0:4&xe?-1:1)}:function(q,de){if(q===de)return fe=!0,0;var xe,Ae=0,Fe=q.parentNode,it=de.parentNode,Je=[q],nt=[de];if(!Fe||!it)return q==te?-1:de==te?1:Fe?-1:it?1:ee?bn(ee,q)-bn(ee,de):0;if(Fe===it)return jo(q,de);for(xe=q;xe=xe.parentNode;)Je.unshift(xe);for(xe=de;xe=xe.parentNode;)nt.unshift(xe);for(;Je[Ae]===nt[Ae];)Ae++;return Ae?jo(Je[Ae],nt[Ae]):Je[Ae]==rt?-1:nt[Ae]==rt?1:0}),te},It.matches=function(w,N){return It(w,null,null,N)},It.matchesSelector=function(w,N){if($(w),f.matchesSelector&&qe&&!En[N+" "]&&(!zt||!zt.test(N))&&(!Ge||!Ge.test(N)))try{var k=Zt.call(w,N);if(k||f.disconnectedMatch||w.document&&w.document.nodeType!==11)return k}catch{En(N,!0)}return 0<It(N,te,null,[w]).length},It.contains=function(w,N){return(w.ownerDocument||w)!=te&&$(w),yn(w,N)},It.attr=function(w,N){(w.ownerDocument||w)!=te&&$(w);var k=h.attrHandle[N.toLowerCase()],oe=k&&Ji.call(h.attrHandle,N.toLowerCase())?k(w,N,!qe):void 0;return oe!==void 0?oe:f.attributes||!qe?w.getAttribute(N):(oe=w.getAttributeNode(N))&&oe.specified?oe.value:null},It.escape=function(w){return(w+"").replace(Xo,qo)},It.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},It.uniqueSort=function(w){var N,k=[],oe=0,q=0;if(fe=!f.detectDuplicates,ee=!f.sortStable&&w.slice(0),w.sort(Ui),fe){for(;N=w[q++];)N===w[q]&&(oe=k.push(q));for(;oe--;)w.splice(k[oe],1)}return ee=null,w},S=It.getText=function(w){var N,k="",oe=0,q=w.nodeType;if(q){if(q===1||q===9||q===11){if(typeof w.textContent=="string")return w.textContent;for(w=w.firstChild;w;w=w.nextSibling)k+=S(w)}else if(q===3||q===4)return w.nodeValue}else for(;N=w[oe++];)k+=S(N);return k},(h=It.selectors={cacheLength:50,createPseudo:Bn,match:rs,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(ii,ri),w[3]=(w[3]||w[4]||w[5]||"").replace(ii,ri),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||It.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&It.error(w[0]),w},PSEUDO:function(w){var N,k=!w[6]&&w[2];return rs.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":k&&Wc.test(k)&&(N=A(k,!0))&&(N=k.indexOf(")",k.length-N)-k.length)&&(w[0]=w[0].slice(0,N),w[2]=k.slice(0,N)),w.slice(0,3))}},filter:{TAG:function(w){var N=w.replace(ii,ri).toLowerCase();return w==="*"?function(){return!0}:function(k){return k.nodeName&&k.nodeName.toLowerCase()===N}},CLASS:function(w){var N=Ht[w+" "];return N||(N=new RegExp("(^|"+at+")"+w+"("+at+"|$)"))&&Ht(w,function(k){return N.test(typeof k.className=="string"&&k.className||typeof k.getAttribute<"u"&&k.getAttribute("class")||"")})},ATTR:function(w,N,k){return function(oe){var q=It.attr(oe,w);return q==null?N==="!=":!N||(q+="",N==="="?q===k:N==="!="?q!==k:N==="^="?k&&q.indexOf(k)===0:N==="*="?k&&-1<q.indexOf(k):N==="$="?k&&q.slice(-k.length)===k:N==="~="?-1<(" "+q.replace(jt," ")+" ").indexOf(k):N==="|="&&(q===k||q.slice(0,k.length+1)===k+"-"))}},CHILD:function(w,N,k,oe,q){var de=w.slice(0,3)!=="nth",xe=w.slice(-4)!=="last",Ae=N==="of-type";return oe===1&&q===0?function(Fe){return!!Fe.parentNode}:function(Fe,it,Je){var nt,xt,Wt,lt,Qt,rn,hn=de!==xe?"nextSibling":"previousSibling",Nt=Fe.parentNode,Kn=Ae&&Fe.nodeName.toLowerCase(),ln=!Je&&!Ae,$t=!1;if(Nt){if(de){for(;hn;){for(lt=Fe;lt=lt[hn];)if(Ae?lt.nodeName.toLowerCase()===Kn:lt.nodeType===1)return!1;rn=hn=w==="only"&&!rn&&"nextSibling"}return!0}if(rn=[xe?Nt.firstChild:Nt.lastChild],xe&&ln){for($t=(Qt=(nt=(xt=(Wt=(lt=Nt)[Ut]||(lt[Ut]={}))[lt.uniqueID]||(Wt[lt.uniqueID]={}))[w]||[])[0]===_n&&nt[1])&&nt[2],lt=Qt&&Nt.childNodes[Qt];lt=++Qt&&lt&&lt[hn]||($t=Qt=0)||rn.pop();)if(lt.nodeType===1&&++$t&&lt===Fe){xt[w]=[_n,Qt,$t];break}}else if(ln&&($t=Qt=(nt=(xt=(Wt=(lt=Fe)[Ut]||(lt[Ut]={}))[lt.uniqueID]||(Wt[lt.uniqueID]={}))[w]||[])[0]===_n&&nt[1]),$t===!1)for(;(lt=++Qt&&lt&&lt[hn]||($t=Qt=0)||rn.pop())&&!((Ae?lt.nodeName.toLowerCase()===Kn:lt.nodeType===1)&&++$t&&(ln&&((xt=(Wt=lt[Ut]||(lt[Ut]={}))[lt.uniqueID]||(Wt[lt.uniqueID]={}))[w]=[_n,$t]),lt===Fe)););return($t-=q)===oe||$t%oe==0&&0<=$t/oe}}},PSEUDO:function(w,N){var k,oe=h.pseudos[w]||h.setFilters[w.toLowerCase()]||It.error("unsupported pseudo: "+w);return oe[Ut]?oe(N):1<oe.length?(k=[w,w,"",N],h.setFilters.hasOwnProperty(w.toLowerCase())?Bn(function(q,de){for(var xe,Ae=oe(q,N),Fe=Ae.length;Fe--;)q[xe=bn(q,Ae[Fe])]=!(de[xe]=Ae[Fe])}):function(q){return oe(q,0,k)}):oe}},pseudos:{not:Bn(function(w){var N=[],k=[],oe=B(w.replace(wn,"$1"));return oe[Ut]?Bn(function(q,de,xe,Ae){for(var Fe,it=oe(q,null,Ae,[]),Je=q.length;Je--;)(Fe=it[Je])&&(q[Je]=!(de[Je]=Fe))}):function(q,de,xe){return N[0]=q,oe(N,null,xe,k),N[0]=null,!k.pop()}}),has:Bn(function(w){return function(N){return 0<It(w,N).length}}),contains:Bn(function(w){return w=w.replace(ii,ri),function(N){return-1<(N.textContent||S(N)).indexOf(w)}}),lang:Bn(function(w){return Xc.test(w||"")||It.error("unsupported lang: "+w),w=w.replace(ii,ri).toLowerCase(),function(N){var k;do if(k=qe?N.lang:N.getAttribute("xml:lang")||N.getAttribute("lang"))return(k=k.toLowerCase())===w||k.indexOf(w+"-")===0;while((N=N.parentNode)&&N.nodeType===1);return!1}}),target:function(w){var N=r.location&&r.location.hash;return N&&N.slice(1)===w.id},root:function(w){return w===Oe},focus:function(w){return w===te.activeElement&&(!te.hasFocus||te.hasFocus())&&!!(w.type||w.href||~w.tabIndex)},enabled:$o(!1),disabled:$o(!0),checked:function(w){var N=w.nodeName.toLowerCase();return N==="input"&&!!w.checked||N==="option"&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!h.pseudos.empty(w)},header:function(w){return jc.test(w.nodeName)},input:function(w){return Yc.test(w.nodeName)},button:function(w){var N=w.nodeName.toLowerCase();return N==="input"&&w.type==="button"||N==="button"},text:function(w){var N;return w.nodeName.toLowerCase()==="input"&&w.type==="text"&&((N=w.getAttribute("type"))==null||N.toLowerCase()==="text")},first:Ii(function(){return[0]}),last:Ii(function(w,N){return[N-1]}),eq:Ii(function(w,N,k){return[k<0?k+N:k]}),even:Ii(function(w,N){for(var k=0;k<N;k+=2)w.push(k);return w}),odd:Ii(function(w,N){for(var k=1;k<N;k+=2)w.push(k);return w}),lt:Ii(function(w,N,k){for(var oe=k<0?k+N:N<k?N:k;0<=--oe;)w.push(oe);return w}),gt:Ii(function(w,N,k){for(var oe=k<0?k+N:k;++oe<N;)w.push(oe);return w})}}).pseudos.nth=h.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[o]=Zc(o);for(o in{submit:!0,reset:!0})h.pseudos[o]=Jc(o);function Ko(){}function as(w){for(var N=0,k=w.length,oe="";N<k;N++)oe+=w[N].value;return oe}function os(w,N,k){var oe=N.dir,q=N.next,de=q||oe,xe=k&&de==="parentNode",Ae=Tt++;return N.first?function(Fe,it,Je){for(;Fe=Fe[oe];)if(Fe.nodeType===1||xe)return w(Fe,it,Je);return!1}:function(Fe,it,Je){var nt,xt,Wt,lt=[_n,Ae];if(Je){for(;Fe=Fe[oe];)if((Fe.nodeType===1||xe)&&w(Fe,it,Je))return!0}else for(;Fe=Fe[oe];)if(Fe.nodeType===1||xe)if(xt=(Wt=Fe[Ut]||(Fe[Ut]={}))[Fe.uniqueID]||(Wt[Fe.uniqueID]={}),q&&q===Fe.nodeName.toLowerCase())Fe=Fe[oe]||Fe;else{if((nt=xt[de])&&nt[0]===_n&&nt[1]===Ae)return lt[2]=nt[2];if((xt[de]=lt)[2]=w(Fe,it,Je))return!0}return!1}}function oa(w){return 1<w.length?function(N,k,oe){for(var q=w.length;q--;)if(!w[q](N,k,oe))return!1;return!0}:w[0]}function ls(w,N,k,oe,q){for(var de,xe=[],Ae=0,Fe=w.length,it=N!=null;Ae<Fe;Ae++)(de=w[Ae])&&(k&&!k(de,oe,q)||(xe.push(de),it&&N.push(Ae)));return xe}function la(w,N,k,oe,q,de){return oe&&!oe[Ut]&&(oe=la(oe)),q&&!q[Ut]&&(q=la(q,de)),Bn(function(xe,Ae,Fe,it){var Je,nt,xt,Wt=[],lt=[],Qt=Ae.length,rn=xe||function(Kn,ln,$t){for(var Hn=0,cs=ln.length;Hn<cs;Hn++)It(Kn,ln[Hn],$t);return $t}(N||"*",Fe.nodeType?[Fe]:Fe,[]),hn=!w||!xe&&N?rn:ls(rn,Wt,w,Fe,it),Nt=k?q||(xe?w:Qt||oe)?[]:Ae:hn;if(k&&k(hn,Nt,Fe,it),oe)for(Je=ls(Nt,lt),oe(Je,[],Fe,it),nt=Je.length;nt--;)(xt=Je[nt])&&(Nt[lt[nt]]=!(hn[lt[nt]]=xt));if(xe){if(q||w){if(q){for(Je=[],nt=Nt.length;nt--;)(xt=Nt[nt])&&Je.push(hn[nt]=xt);q(null,Nt=[],Je,it)}for(nt=Nt.length;nt--;)(xt=Nt[nt])&&-1<(Je=q?bn(xe,xt):Wt[nt])&&(xe[Je]=!(Ae[Je]=xt))}}else Nt=ls(Nt===Ae?Nt.splice(Qt,Nt.length):Nt),q?q(null,Ae,Nt,it):kt.apply(Ae,Nt)})}function ca(w){for(var N,k,oe,q=w.length,de=h.relative[w[0].type],xe=de||h.relative[" "],Ae=de?1:0,Fe=os(function(nt){return nt===N},xe,!0),it=os(function(nt){return-1<bn(N,nt)},xe,!0),Je=[function(nt,xt,Wt){var lt=!de&&(Wt||xt!==G)||((N=xt).nodeType?Fe(nt,xt,Wt):it(nt,xt,Wt));return N=null,lt}];Ae<q;Ae++)if(k=h.relative[w[Ae].type])Je=[os(oa(Je),k)];else{if((k=h.filter[w[Ae].type].apply(null,w[Ae].matches))[Ut]){for(oe=++Ae;oe<q&&!h.relative[w[oe].type];oe++);return la(1<Ae&&oa(Je),1<Ae&&as(w.slice(0,Ae-1).concat({value:w[Ae-2].type===" "?"*":""})).replace(wn,"$1"),k,Ae<oe&&ca(w.slice(Ae,oe)),oe<q&&ca(w=w.slice(oe)),oe<q&&as(w))}Je.push(k)}return oa(Je)}return Ko.prototype=h.filters=h.pseudos,h.setFilters=new Ko,A=It.tokenize=function(w,N){var k,oe,q,de,xe,Ae,Fe,it=Fr[w+" "];if(it)return N?0:it.slice(0);for(xe=w,Ae=[],Fe=h.preFilter;xe;){for(de in k&&!(oe=er.exec(xe))||(oe&&(xe=xe.slice(oe[0].length)||xe),Ae.push(q=[])),k=!1,(oe=is.exec(xe))&&(k=oe.shift(),q.push({value:k,type:oe[0].replace(wn," ")}),xe=xe.slice(k.length)),h.filter)!(oe=rs[de].exec(xe))||Fe[de]&&!(oe=Fe[de](oe))||(k=oe.shift(),q.push({value:k,type:de,matches:oe}),xe=xe.slice(k.length));if(!k)break}return N?xe.length:xe?It.error(w):Fr(w,Ae).slice(0)},B=It.compile=function(w,N){var k,oe,q,de,xe,Ae,Fe=[],it=[],Je=ns[w+" "];if(!Je){for(N||(N=A(w)),k=N.length;k--;)(Je=ca(N[k]))[Ut]?Fe.push(Je):it.push(Je);(Je=ns(w,(oe=it,de=0<(q=Fe).length,xe=0<oe.length,Ae=function(nt,xt,Wt,lt,Qt){var rn,hn,Nt,Kn=0,ln="0",$t=nt&&[],Hn=[],cs=G,Zo=nt||xe&&h.find.TAG("*",Qt),Jo=_n+=cs==null?1:Math.random()||.1,Qc=Zo.length;for(Qt&&(G=xt==te||xt||Qt);ln!==Qc&&(rn=Zo[ln])!=null;ln++){if(xe&&rn){for(hn=0,xt||rn.ownerDocument==te||($(rn),Wt=!qe);Nt=oe[hn++];)if(Nt(rn,xt||te,Wt)){lt.push(rn);break}Qt&&(_n=Jo)}de&&((rn=!Nt&&rn)&&Kn--,nt&&$t.push(rn))}if(Kn+=ln,de&&ln!==Kn){for(hn=0;Nt=q[hn++];)Nt($t,Hn,xt,Wt);if(nt){if(0<Kn)for(;ln--;)$t[ln]||Hn[ln]||(Hn[ln]=Qi.call(lt));Hn=ls(Hn)}kt.apply(lt,Hn),Qt&&!nt&&0<Hn.length&&1<Kn+q.length&&It.uniqueSort(lt)}return Qt&&(_n=Jo,G=cs),$t},de?Bn(Ae):Ae))).selector=w}return Je},z=It.select=function(w,N,k,oe){var q,de,xe,Ae,Fe,it=typeof w=="function"&&w,Je=!oe&&A(w=it.selector||w);if(k=k||[],Je.length===1){if(2<(de=Je[0]=Je[0].slice(0)).length&&(xe=de[0]).type==="ID"&&N.nodeType===9&&qe&&h.relative[de[1].type]){if(!(N=(h.find.ID(xe.matches[0].replace(ii,ri),N)||[])[0]))return k;it&&(N=N.parentNode),w=w.slice(de.shift().value.length)}for(q=rs.needsContext.test(w)?0:de.length;q--&&(xe=de[q],!h.relative[Ae=xe.type]);)if((Fe=h.find[Ae])&&(oe=Fe(xe.matches[0].replace(ii,ri),ra.test(de[0].type)&&aa(N.parentNode)||N))){if(de.splice(q,1),!(w=oe.length&&as(de)))return kt.apply(k,oe),k;break}}return(it||B(w,Je))(oe,N,!qe,k,!N||ra.test(w)&&aa(N.parentNode)||N),k},f.sortStable=Ut.split("").sort(Ui).join("")===Ut,f.detectDuplicates=!!fe,$(),f.sortDetached=zn(function(w){return 1&w.compareDocumentPosition(te.createElement("fieldset"))}),zn(function(w){return w.innerHTML="<a href='#'></a>",w.firstChild.getAttribute("href")==="#"})||sa("type|href|height|width",function(w,N,k){if(!k)return w.getAttribute(N,N.toLowerCase()==="type"?1:2)}),f.attributes&&zn(function(w){return w.innerHTML="<input/>",w.firstChild.setAttribute("value",""),w.firstChild.getAttribute("value")===""})||sa("value",function(w,N,k){if(!k&&w.nodeName.toLowerCase()==="input")return w.defaultValue}),zn(function(w){return w.getAttribute("disabled")==null})||sa($n,function(w,N,k){var oe;if(!k)return w[N]===!0?N.toLowerCase():(oe=w.getAttributeNode(N))&&oe.specified?oe.value:null}),It}(i);u.find=O,u.expr=O.selectors,u.expr[":"]=u.expr.pseudos,u.uniqueSort=u.unique=O.uniqueSort,u.text=O.getText,u.isXMLDoc=O.isXML,u.contains=O.contains,u.escapeSelector=O.escape;var K=function(r,o,f){for(var h=[],S=f!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(S&&u(r).is(f))break;h.push(r)}return h},ye=function(r,o){for(var f=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&f.push(r);return f},E=u.expr.match.needsContext;function C(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var Q=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function ie(r,o,f){return y(o)?u.grep(r,function(h,S){return!!o.call(h,S,h)!==f}):o.nodeType?u.grep(r,function(h){return h===o!==f}):typeof o!="string"?u.grep(r,function(h){return-1<l.call(o,h)!==f}):u.filter(o,r,f)}u.filter=function(r,o,f){var h=o[0];return f&&(r=":not("+r+")"),o.length===1&&h.nodeType===1?u.find.matchesSelector(h,r)?[h]:[]:u.find.matches(r,u.grep(o,function(S){return S.nodeType===1}))},u.fn.extend({find:function(r){var o,f,h=this.length,S=this;if(typeof r!="string")return this.pushStack(u(r).filter(function(){for(o=0;o<h;o++)if(u.contains(S[o],this))return!0}));for(f=this.pushStack([]),o=0;o<h;o++)u.find(r,S[o],f);return 1<h?u.uniqueSort(f):f},filter:function(r){return this.pushStack(ie(this,r||[],!1))},not:function(r){return this.pushStack(ie(this,r||[],!0))},is:function(r){return!!ie(this,typeof r=="string"&&E.test(r)?u(r):r||[],!1).length}});var ue,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(u.fn.init=function(r,o,f){var h,S;if(!r)return this;if(f=f||ue,typeof r=="string"){if(!(h=r[0]==="<"&&r[r.length-1]===">"&&3<=r.length?[null,r,null]:me.exec(r))||!h[1]&&o)return!o||o.jquery?(o||f).find(r):this.constructor(o).find(r);if(h[1]){if(o=o instanceof u?o[0]:o,u.merge(this,u.parseHTML(h[1],o&&o.nodeType?o.ownerDocument||o:m,!0)),Q.test(h[1])&&u.isPlainObject(o))for(h in o)y(this[h])?this[h](o[h]):this.attr(h,o[h]);return this}return(S=m.getElementById(h[2]))&&(this[0]=S,this.length=1),this}return r.nodeType?(this[0]=r,this.length=1,this):y(r)?f.ready!==void 0?f.ready(r):r(u):u.makeArray(r,this)}).prototype=u.fn,ue=u(m);var se=/^(?:parents|prev(?:Until|All))/,pe={children:!0,contents:!0,next:!0,prev:!0};function Y(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}u.fn.extend({has:function(r){var o=u(r,this),f=o.length;return this.filter(function(){for(var h=0;h<f;h++)if(u.contains(this,o[h]))return!0})},closest:function(r,o){var f,h=0,S=this.length,b=[],A=typeof r!="string"&&u(r);if(!E.test(r)){for(;h<S;h++)for(f=this[h];f&&f!==o;f=f.parentNode)if(f.nodeType<11&&(A?-1<A.index(f):f.nodeType===1&&u.find.matchesSelector(f,r))){b.push(f);break}}return this.pushStack(1<b.length?u.uniqueSort(b):b)},index:function(r){return r?typeof r=="string"?l.call(u(r),this[0]):l.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}}),u.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return K(r,"parentNode")},parentsUntil:function(r,o,f){return K(r,"parentNode",f)},next:function(r){return Y(r,"nextSibling")},prev:function(r){return Y(r,"previousSibling")},nextAll:function(r){return K(r,"nextSibling")},prevAll:function(r){return K(r,"previousSibling")},nextUntil:function(r,o,f){return K(r,"nextSibling",f)},prevUntil:function(r,o,f){return K(r,"previousSibling",f)},siblings:function(r){return ye((r.parentNode||{}).firstChild,r)},children:function(r){return ye(r.firstChild)},contents:function(r){return r.contentDocument!=null&&n(r.contentDocument)?r.contentDocument:(C(r,"template")&&(r=r.content||r),u.merge([],r.childNodes))}},function(r,o){u.fn[r]=function(f,h){var S=u.map(this,o,f);return r.slice(-5)!=="Until"&&(h=f),h&&typeof h=="string"&&(S=u.filter(h,S)),1<this.length&&(pe[r]||u.uniqueSort(S),se.test(r)&&S.reverse()),this.pushStack(S)}});var Te=/[^\x20\t\r\n\f]+/g;function ve(r){return r}function Me(r){throw r}function dt(r,o,f,h){var S;try{r&&y(S=r.promise)?S.call(r).done(o).fail(f):r&&y(S=r.then)?S.call(r,o,f):o.apply(void 0,[r].slice(h))}catch(b){f.apply(void 0,[b])}}u.Callbacks=function(r){var o,f;r=typeof r=="string"?(o=r,f={},u.each(o.match(Te)||[],function($,te){f[te]=!0}),f):u.extend({},r);var h,S,b,A,B=[],z=[],G=-1,ee=function(){for(A=A||r.once,b=h=!0;z.length;G=-1)for(S=z.shift();++G<B.length;)B[G].apply(S[0],S[1])===!1&&r.stopOnFalse&&(G=B.length,S=!1);r.memory||(S=!1),h=!1,A&&(B=S?[]:"")},fe={add:function(){return B&&(S&&!h&&(G=B.length-1,z.push(S)),function $(te){u.each(te,function(Oe,qe){y(qe)?r.unique&&fe.has(qe)||B.push(qe):qe&&qe.length&&D(qe)!=="string"&&$(qe)})}(arguments),S&&!h&&ee()),this},remove:function(){return u.each(arguments,function($,te){for(var Oe;-1<(Oe=u.inArray(te,B,Oe));)B.splice(Oe,1),Oe<=G&&G--}),this},has:function($){return $?-1<u.inArray($,B):0<B.length},empty:function(){return B&&(B=[]),this},disable:function(){return A=z=[],B=S="",this},disabled:function(){return!B},lock:function(){return A=z=[],S||h||(B=S=""),this},locked:function(){return!!A},fireWith:function($,te){return A||(te=[$,(te=te||[]).slice?te.slice():te],z.push(te),h||ee()),this},fire:function(){return fe.fireWith(this,arguments),this},fired:function(){return!!b}};return fe},u.extend({Deferred:function(r){var o=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],f="pending",h={state:function(){return f},always:function(){return S.done(arguments).fail(arguments),this},catch:function(b){return h.then(null,b)},pipe:function(){var b=arguments;return u.Deferred(function(A){u.each(o,function(B,z){var G=y(b[z[4]])&&b[z[4]];S[z[1]](function(){var ee=G&&G.apply(this,arguments);ee&&y(ee.promise)?ee.promise().progress(A.notify).done(A.resolve).fail(A.reject):A[z[0]+"With"](this,G?[ee]:arguments)})}),b=null}).promise()},then:function(b,A,B){var z=0;function G(ee,fe,$,te){return function(){var Oe=this,qe=arguments,Ge=function(){var Zt,yn;if(!(ee<z)){if((Zt=$.apply(Oe,qe))===fe.promise())throw new TypeError("Thenable self-resolution");yn=Zt&&(typeof Zt=="object"||typeof Zt=="function")&&Zt.then,y(yn)?te?yn.call(Zt,G(z,fe,ve,te),G(z,fe,Me,te)):(z++,yn.call(Zt,G(z,fe,ve,te),G(z,fe,Me,te),G(z,fe,ve,fe.notifyWith))):($!==ve&&(Oe=void 0,qe=[Zt]),(te||fe.resolveWith)(Oe,qe))}},zt=te?Ge:function(){try{Ge()}catch(Zt){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(Zt,zt.stackTrace),z<=ee+1&&($!==Me&&(Oe=void 0,qe=[Zt]),fe.rejectWith(Oe,qe))}};ee?zt():(u.Deferred.getStackHook&&(zt.stackTrace=u.Deferred.getStackHook()),i.setTimeout(zt))}}return u.Deferred(function(ee){o[0][3].add(G(0,ee,y(B)?B:ve,ee.notifyWith)),o[1][3].add(G(0,ee,y(b)?b:ve)),o[2][3].add(G(0,ee,y(A)?A:Me))}).promise()},promise:function(b){return b!=null?u.extend(b,h):h}},S={};return u.each(o,function(b,A){var B=A[2],z=A[5];h[A[1]]=B.add,z&&B.add(function(){f=z},o[3-b][2].disable,o[3-b][3].disable,o[0][2].lock,o[0][3].lock),B.add(A[3].fire),S[A[0]]=function(){return S[A[0]+"With"](this===S?void 0:this,arguments),this},S[A[0]+"With"]=B.fireWith}),h.promise(S),r&&r.call(S,S),S},when:function(r){var o=arguments.length,f=o,h=Array(f),S=s.call(arguments),b=u.Deferred(),A=function(B){return function(z){h[B]=this,S[B]=1<arguments.length?s.call(arguments):z,--o||b.resolveWith(h,S)}};if(o<=1&&(dt(r,b.done(A(f)).resolve,b.reject,!o),b.state()==="pending"||y(S[f]&&S[f].then)))return b.then();for(;f--;)dt(S[f],A(f),b.reject);return b.promise()}});var Mt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(r,o){i.console&&i.console.warn&&r&&Mt.test(r.name)&&i.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},u.readyException=function(r){i.setTimeout(function(){throw r})};var ae=u.Deferred();function _e(){m.removeEventListener("DOMContentLoaded",_e),i.removeEventListener("load",_e),u.ready()}u.fn.ready=function(r){return ae.then(r).catch(function(o){u.readyException(o)}),this},u.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--u.readyWait:u.isReady)||(u.isReady=!0)!==r&&0<--u.readyWait||ae.resolveWith(m,[u])}}),u.ready.then=ae.then,m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?i.setTimeout(u.ready):(m.addEventListener("DOMContentLoaded",_e),i.addEventListener("load",_e));var Pe=function(r,o,f,h,S,b,A){var B=0,z=r.length,G=f==null;if(D(f)==="object")for(B in S=!0,f)Pe(r,o,B,f[B],!0,b,A);else if(h!==void 0&&(S=!0,y(h)||(A=!0),G&&(A?(o.call(r,h),o=null):(G=o,o=function(ee,fe,$){return G.call(u(ee),$)})),o))for(;B<z;B++)o(r[B],f,A?h:h.call(r[B],B,o(r[B],f)));return S?r:G?o.call(r):z?o(r[0],f):b},we=/^-ms-/,Ye=/-([a-z])/g;function Ke(r,o){return o.toUpperCase()}function et(r){return r.replace(we,"ms-").replace(Ye,Ke)}var mt=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function ot(){this.expando=u.expando+ot.uid++}ot.uid=1,ot.prototype={cache:function(r){var o=r[this.expando];return o||(o={},mt(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,f){var h,S=this.cache(r);if(typeof o=="string")S[et(o)]=f;else for(h in o)S[et(h)]=o[h];return S},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][et(o)]},access:function(r,o,f){return o===void 0||o&&typeof o=="string"&&f===void 0?this.get(r,o):(this.set(r,o,f),f!==void 0?f:o)},remove:function(r,o){var f,h=r[this.expando];if(h!==void 0){if(o!==void 0)for(f=(o=Array.isArray(o)?o.map(et):(o=et(o))in h?[o]:o.match(Te)||[]).length;f--;)delete h[o[f]];(o===void 0||u.isEmptyObject(h))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!u.isEmptyObject(o)}};var U=new ot,At=new ot,ct=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,gt=/[A-Z]/g;function Ze(r,o,f){var h,S;if(f===void 0&&r.nodeType===1)if(h="data-"+o.replace(gt,"-$&").toLowerCase(),typeof(f=r.getAttribute(h))=="string"){try{f=(S=f)==="true"||S!=="false"&&(S==="null"?null:S===+S+""?+S:ct.test(S)?JSON.parse(S):S)}catch{}At.set(r,o,f)}else f=void 0;return f}u.extend({hasData:function(r){return At.hasData(r)||U.hasData(r)},data:function(r,o,f){return At.access(r,o,f)},removeData:function(r,o){At.remove(r,o)},_data:function(r,o,f){return U.access(r,o,f)},_removeData:function(r,o){U.remove(r,o)}}),u.fn.extend({data:function(r,o){var f,h,S,b=this[0],A=b&&b.attributes;if(r===void 0){if(this.length&&(S=At.get(b),b.nodeType===1&&!U.get(b,"hasDataAttrs"))){for(f=A.length;f--;)A[f]&&(h=A[f].name).indexOf("data-")===0&&(h=et(h.slice(5)),Ze(b,h,S[h]));U.set(b,"hasDataAttrs",!0)}return S}return typeof r=="object"?this.each(function(){At.set(this,r)}):Pe(this,function(B){var z;if(b&&B===void 0)return(z=At.get(b,r))!==void 0||(z=Ze(b,r))!==void 0?z:void 0;this.each(function(){At.set(this,r,B)})},null,o,1<arguments.length,null,!0)},removeData:function(r){return this.each(function(){At.remove(this,r)})}}),u.extend({queue:function(r,o,f){var h;if(r)return o=(o||"fx")+"queue",h=U.get(r,o),f&&(!h||Array.isArray(f)?h=U.access(r,o,u.makeArray(f)):h.push(f)),h||[]},dequeue:function(r,o){o=o||"fx";var f=u.queue(r,o),h=f.length,S=f.shift(),b=u._queueHooks(r,o);S==="inprogress"&&(S=f.shift(),h--),S&&(o==="fx"&&f.unshift("inprogress"),delete b.stop,S.call(r,function(){u.dequeue(r,o)},b)),!h&&b&&b.empty.fire()},_queueHooks:function(r,o){var f=o+"queueHooks";return U.get(r,f)||U.access(r,f,{empty:u.Callbacks("once memory").add(function(){U.remove(r,[o+"queue",f])})})}}),u.fn.extend({queue:function(r,o){var f=2;return typeof r!="string"&&(o=r,r="fx",f--),arguments.length<f?u.queue(this[0],r):o===void 0?this:this.each(function(){var h=u.queue(this,r,o);u._queueHooks(this,r),r==="fx"&&h[0]!=="inprogress"&&u.dequeue(this,r)})},dequeue:function(r){return this.each(function(){u.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var f,h=1,S=u.Deferred(),b=this,A=this.length,B=function(){--h||S.resolveWith(b,[b])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";A--;)(f=U.get(b[A],r+"queueHooks"))&&f.empty&&(h++,f.empty.add(B));return B(),S.promise(o)}});var bt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,je=new RegExp("^(?:([+-])=|)("+bt+")([a-z%]*)$","i"),L=["Top","Right","Bottom","Left"],T=m.documentElement,j=function(r){return u.contains(r.ownerDocument,r)},ce={composed:!0};T.getRootNode&&(j=function(r){return u.contains(r.ownerDocument,r)||r.getRootNode(ce)===r.ownerDocument});var ge=function(r,o){return(r=o||r).style.display==="none"||r.style.display===""&&j(r)&&u.css(r,"display")==="none"};function le(r,o,f,h){var S,b,A=20,B=h?function(){return h.cur()}:function(){return u.css(r,o,"")},z=B(),G=f&&f[3]||(u.cssNumber[o]?"":"px"),ee=r.nodeType&&(u.cssNumber[o]||G!=="px"&&+z)&&je.exec(u.css(r,o));if(ee&&ee[3]!==G){for(z/=2,G=G||ee[3],ee=+z||1;A--;)u.style(r,o,ee+G),(1-b)*(1-(b=B()/z||.5))<=0&&(A=0),ee/=b;ee*=2,u.style(r,o,ee+G),f=f||[]}return f&&(ee=+ee||+z||0,S=f[1]?ee+(f[1]+1)*f[2]:+f[2],h&&(h.unit=G,h.start=ee,h.end=S)),S}var Ve={};function Re(r,o){for(var f,h,S,b,A,B,z,G=[],ee=0,fe=r.length;ee<fe;ee++)(h=r[ee]).style&&(f=h.style.display,o?(f==="none"&&(G[ee]=U.get(h,"display")||null,G[ee]||(h.style.display="")),h.style.display===""&&ge(h)&&(G[ee]=(z=A=b=void 0,A=(S=h).ownerDocument,B=S.nodeName,(z=Ve[B])||(b=A.body.appendChild(A.createElement(B)),z=u.css(b,"display"),b.parentNode.removeChild(b),z==="none"&&(z="block"),Ve[B]=z)))):f!=="none"&&(G[ee]="none",U.set(h,"display",f)));for(ee=0;ee<fe;ee++)G[ee]!=null&&(r[ee].style.display=G[ee]);return r}u.fn.extend({show:function(){return Re(this,!0)},hide:function(){return Re(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){ge(this)?u(this).show():u(this).hide()})}});var Ie,pt,Se=/^(?:checkbox|radio)$/i,He=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tt=/^$|^module$|\/(?:java|ecma)script/i;Ie=m.createDocumentFragment().appendChild(m.createElement("div")),(pt=m.createElement("input")).setAttribute("type","radio"),pt.setAttribute("checked","checked"),pt.setAttribute("name","t"),Ie.appendChild(pt),M.checkClone=Ie.cloneNode(!0).cloneNode(!0).lastChild.checked,Ie.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!Ie.cloneNode(!0).lastChild.defaultValue,Ie.innerHTML="<option></option>",M.option=!!Ie.lastChild;var We={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Ce(r,o){var f;return f=typeof r.getElementsByTagName<"u"?r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?r.querySelectorAll(o||"*"):[],o===void 0||o&&C(r,o)?u.merge([r],f):f}function ht(r,o){for(var f=0,h=r.length;f<h;f++)U.set(r[f],"globalEval",!o||U.get(o[f],"globalEval"))}We.tbody=We.tfoot=We.colgroup=We.caption=We.thead,We.th=We.td,M.option||(We.optgroup=We.option=[1,"<select multiple='multiple'>","</select>"]);var st=/<|&#?\w+;/;function Lt(r,o,f,h,S){for(var b,A,B,z,G,ee,fe=o.createDocumentFragment(),$=[],te=0,Oe=r.length;te<Oe;te++)if((b=r[te])||b===0)if(D(b)==="object")u.merge($,b.nodeType?[b]:b);else if(st.test(b)){for(A=A||fe.appendChild(o.createElement("div")),B=(He.exec(b)||["",""])[1].toLowerCase(),z=We[B]||We._default,A.innerHTML=z[1]+u.htmlPrefilter(b)+z[2],ee=z[0];ee--;)A=A.lastChild;u.merge($,A.childNodes),(A=fe.firstChild).textContent=""}else $.push(o.createTextNode(b));for(fe.textContent="",te=0;b=$[te++];)if(h&&-1<u.inArray(b,h))S&&S.push(b);else if(G=j(b),A=Ce(fe.appendChild(b),"script"),G&&ht(A),f)for(ee=0;b=A[ee++];)tt.test(b.type||"")&&f.push(b);return fe}var H=/^([^.]*)(?:\.(.+)|)/;function De(){return!0}function re(){return!1}function he(r,o){return r===function(){try{return m.activeElement}catch{}}()==(o==="focus")}function Ue(r,o,f,h,S,b){var A,B;if(typeof o=="object"){for(B in typeof f!="string"&&(h=h||f,f=void 0),o)Ue(r,B,f,h,o[B],b);return r}if(h==null&&S==null?(S=f,h=f=void 0):S==null&&(typeof f=="string"?(S=h,h=void 0):(S=h,h=f,f=void 0)),S===!1)S=re;else if(!S)return r;return b===1&&(A=S,(S=function(z){return u().off(z),A.apply(this,arguments)}).guid=A.guid||(A.guid=u.guid++)),r.each(function(){u.event.add(this,o,S,h,f)})}function Ne(r,o,f){f?(U.set(r,o,!1),u.event.add(r,o,{namespace:!1,handler:function(h){var S,b,A=U.get(this,o);if(1&h.isTrigger&&this[o]){if(A.length)(u.event.special[o]||{}).delegateType&&h.stopPropagation();else if(A=s.call(arguments),U.set(this,o,A),S=f(this,o),this[o](),A!==(b=U.get(this,o))||S?U.set(this,o,!1):b={},A!==b)return h.stopImmediatePropagation(),h.preventDefault(),b&&b.value}else A.length&&(U.set(this,o,{value:u.event.trigger(u.extend(A[0],u.Event.prototype),A.slice(1),this)}),h.stopImmediatePropagation())}})):U.get(r,o)===void 0&&u.event.add(r,o,De)}u.event={global:{},add:function(r,o,f,h,S){var b,A,B,z,G,ee,fe,$,te,Oe,qe,Ge=U.get(r);if(mt(r))for(f.handler&&(f=(b=f).handler,S=b.selector),S&&u.find.matchesSelector(T,S),f.guid||(f.guid=u.guid++),(z=Ge.events)||(z=Ge.events=Object.create(null)),(A=Ge.handle)||(A=Ge.handle=function(zt){return typeof u<"u"&&u.event.triggered!==zt.type?u.event.dispatch.apply(r,arguments):void 0}),G=(o=(o||"").match(Te)||[""]).length;G--;)te=qe=(B=H.exec(o[G])||[])[1],Oe=(B[2]||"").split(".").sort(),te&&(fe=u.event.special[te]||{},te=(S?fe.delegateType:fe.bindType)||te,fe=u.event.special[te]||{},ee=u.extend({type:te,origType:qe,data:h,handler:f,guid:f.guid,selector:S,needsContext:S&&u.expr.match.needsContext.test(S),namespace:Oe.join(".")},b),($=z[te])||(($=z[te]=[]).delegateCount=0,fe.setup&&fe.setup.call(r,h,Oe,A)!==!1||r.addEventListener&&r.addEventListener(te,A)),fe.add&&(fe.add.call(r,ee),ee.handler.guid||(ee.handler.guid=f.guid)),S?$.splice($.delegateCount++,0,ee):$.push(ee),u.event.global[te]=!0)},remove:function(r,o,f,h,S){var b,A,B,z,G,ee,fe,$,te,Oe,qe,Ge=U.hasData(r)&&U.get(r);if(Ge&&(z=Ge.events)){for(G=(o=(o||"").match(Te)||[""]).length;G--;)if(te=qe=(B=H.exec(o[G])||[])[1],Oe=(B[2]||"").split(".").sort(),te){for(fe=u.event.special[te]||{},$=z[te=(h?fe.delegateType:fe.bindType)||te]||[],B=B[2]&&new RegExp("(^|\\.)"+Oe.join("\\.(?:.*\\.|)")+"(\\.|$)"),A=b=$.length;b--;)ee=$[b],!S&&qe!==ee.origType||f&&f.guid!==ee.guid||B&&!B.test(ee.namespace)||h&&h!==ee.selector&&(h!=="**"||!ee.selector)||($.splice(b,1),ee.selector&&$.delegateCount--,fe.remove&&fe.remove.call(r,ee));A&&!$.length&&(fe.teardown&&fe.teardown.call(r,Oe,Ge.handle)!==!1||u.removeEvent(r,te,Ge.handle),delete z[te])}else for(te in z)u.event.remove(r,te+o[G],f,h,!0);u.isEmptyObject(z)&&U.remove(r,"handle events")}},dispatch:function(r){var o,f,h,S,b,A,B=new Array(arguments.length),z=u.event.fix(r),G=(U.get(this,"events")||Object.create(null))[z.type]||[],ee=u.event.special[z.type]||{};for(B[0]=z,o=1;o<arguments.length;o++)B[o]=arguments[o];if(z.delegateTarget=this,!ee.preDispatch||ee.preDispatch.call(this,z)!==!1){for(A=u.event.handlers.call(this,z,G),o=0;(S=A[o++])&&!z.isPropagationStopped();)for(z.currentTarget=S.elem,f=0;(b=S.handlers[f++])&&!z.isImmediatePropagationStopped();)z.rnamespace&&b.namespace!==!1&&!z.rnamespace.test(b.namespace)||(z.handleObj=b,z.data=b.data,(h=((u.event.special[b.origType]||{}).handle||b.handler).apply(S.elem,B))!==void 0&&(z.result=h)===!1&&(z.preventDefault(),z.stopPropagation()));return ee.postDispatch&&ee.postDispatch.call(this,z),z.result}},handlers:function(r,o){var f,h,S,b,A,B=[],z=o.delegateCount,G=r.target;if(z&&G.nodeType&&!(r.type==="click"&&1<=r.button)){for(;G!==this;G=G.parentNode||this)if(G.nodeType===1&&(r.type!=="click"||G.disabled!==!0)){for(b=[],A={},f=0;f<z;f++)A[S=(h=o[f]).selector+" "]===void 0&&(A[S]=h.needsContext?-1<u(S,this).index(G):u.find(S,this,null,[G]).length),A[S]&&b.push(h);b.length&&B.push({elem:G,handlers:b})}}return G=this,z<o.length&&B.push({elem:G,handlers:o.slice(z)}),B},addProp:function(r,o){Object.defineProperty(u.Event.prototype,r,{enumerable:!0,configurable:!0,get:y(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(f){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(r){return r[u.expando]?r:new u.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Se.test(o.type)&&o.click&&C(o,"input")&&Ne(o,"click",De),!1},trigger:function(r){var o=this||r;return Se.test(o.type)&&o.click&&C(o,"input")&&Ne(o,"click"),!0},_default:function(r){var o=r.target;return Se.test(o.type)&&o.click&&C(o,"input")&&U.get(o,"click")||C(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}},u.removeEvent=function(r,o,f){r.removeEventListener&&r.removeEventListener(o,f)},u.Event=function(r,o){if(!(this instanceof u.Event))return new u.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?De:re,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&u.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:re,isPropagationStopped:re,isImmediatePropagationStopped:re,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=De,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=De,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=De,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(r,o){u.event.special[r]={setup:function(){return Ne(this,r,he),!1},trigger:function(){return Ne(this,r),!0},_default:function(){return!0},delegateType:o}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){u.event.special[r]={delegateType:o,bindType:o,handle:function(f){var h,S=f.relatedTarget,b=f.handleObj;return S&&(S===this||u.contains(this,S))||(f.type=b.origType,h=b.handler.apply(this,arguments),f.type=o),h}}}),u.fn.extend({on:function(r,o,f,h){return Ue(this,r,o,f,h)},one:function(r,o,f,h){return Ue(this,r,o,f,h,1)},off:function(r,o,f){var h,S;if(r&&r.preventDefault&&r.handleObj)return h=r.handleObj,u(r.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof r=="object"){for(S in r)this.off(S,o,r[S]);return this}return o!==!1&&typeof o!="function"||(f=o,o=void 0),f===!1&&(f=re),this.each(function(){u.event.remove(this,r,f,o)})}});var vt=/<script|<style|<link/i,Gt=/checked\s*(?:[^=]|=\s*.checked.)/i,an=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function St(r,o){return C(r,"table")&&C(o.nodeType!==11?o:o.firstChild,"tr")&&u(r).children("tbody")[0]||r}function on(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function Fn(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Pr(r,o){var f,h,S,b,A,B;if(o.nodeType===1){if(U.hasData(r)&&(B=U.get(r).events))for(S in U.remove(o,"handle events"),B)for(f=0,h=B[S].length;f<h;f++)u.event.add(o,S,B[S][f]);At.hasData(r)&&(b=At.access(r),A=u.extend({},b),At.set(o,A))}}function ti(r,o,f,h){o=a(o);var S,b,A,B,z,G,ee=0,fe=r.length,$=fe-1,te=o[0],Oe=y(te);if(Oe||1<fe&&typeof te=="string"&&!M.checkClone&&Gt.test(te))return r.each(function(qe){var Ge=r.eq(qe);Oe&&(o[0]=te.call(this,qe,Ge.html())),ti(Ge,o,f,h)});if(fe&&(b=(S=Lt(o,r[0].ownerDocument,!1,r,h)).firstChild,S.childNodes.length===1&&(S=b),b||h)){for(B=(A=u.map(Ce(S,"script"),on)).length;ee<fe;ee++)z=S,ee!==$&&(z=u.clone(z,!0,!0),B&&u.merge(A,Ce(z,"script"))),f.call(r[ee],z,ee);if(B)for(G=A[A.length-1].ownerDocument,u.map(A,Fn),ee=0;ee<B;ee++)z=A[ee],tt.test(z.type||"")&&!U.access(z,"globalEval")&&u.contains(G,z)&&(z.src&&(z.type||"").toLowerCase()!=="module"?u._evalUrl&&!z.noModule&&u._evalUrl(z.src,{nonce:z.nonce||z.getAttribute("nonce")},G):F(z.textContent.replace(an,""),z,G))}return r}function Yn(r,o,f){for(var h,S=o?u.filter(o,r):r,b=0;(h=S[b])!=null;b++)f||h.nodeType!==1||u.cleanData(Ce(h)),h.parentNode&&(f&&j(h)&&ht(Ce(h,"script")),h.parentNode.removeChild(h));return r}u.extend({htmlPrefilter:function(r){return r},clone:function(r,o,f){var h,S,b,A,B,z,G,ee=r.cloneNode(!0),fe=j(r);if(!(M.noCloneChecked||r.nodeType!==1&&r.nodeType!==11||u.isXMLDoc(r)))for(A=Ce(ee),h=0,S=(b=Ce(r)).length;h<S;h++)B=b[h],z=A[h],(G=z.nodeName.toLowerCase())==="input"&&Se.test(B.type)?z.checked=B.checked:G!=="input"&&G!=="textarea"||(z.defaultValue=B.defaultValue);if(o)if(f)for(b=b||Ce(r),A=A||Ce(ee),h=0,S=b.length;h<S;h++)Pr(b[h],A[h]);else Pr(r,ee);return 0<(A=Ce(ee,"script")).length&&ht(A,!fe&&Ce(r,"script")),ee},cleanData:function(r){for(var o,f,h,S=u.event.special,b=0;(f=r[b])!==void 0;b++)if(mt(f)){if(o=f[U.expando]){if(o.events)for(h in o.events)S[h]?u.event.remove(f,h):u.removeEvent(f,h,o.handle);f[U.expando]=void 0}f[At.expando]&&(f[At.expando]=void 0)}}}),u.fn.extend({detach:function(r){return Yn(this,r,!0)},remove:function(r){return Yn(this,r)},text:function(r){return Pe(this,function(o){return o===void 0?u.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=o)})},null,r,arguments.length)},append:function(){return ti(this,arguments,function(r){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||St(this,r).appendChild(r)})},prepend:function(){return ti(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=St(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return ti(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return ti(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(u.cleanData(Ce(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r!=null&&r,o=o??r,this.map(function(){return u.clone(this,r,o)})},html:function(r){return Pe(this,function(o){var f=this[0]||{},h=0,S=this.length;if(o===void 0&&f.nodeType===1)return f.innerHTML;if(typeof o=="string"&&!vt.test(o)&&!We[(He.exec(o)||["",""])[1].toLowerCase()]){o=u.htmlPrefilter(o);try{for(;h<S;h++)(f=this[h]||{}).nodeType===1&&(u.cleanData(Ce(f,!1)),f.innerHTML=o);f=0}catch{}}f&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return ti(this,arguments,function(o){var f=this.parentNode;u.inArray(this,r)<0&&(u.cleanData(Ce(this)),f&&f.replaceChild(o,this))},r)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){u.fn[r]=function(f){for(var h,S=[],b=u(f),A=b.length-1,B=0;B<=A;B++)h=B===A?this:this.clone(!0),u(b[B])[o](h),c.apply(S,h.get());return this.pushStack(S)}});var Pi=new RegExp("^("+bt+")(?!px)[a-z%]+$","i"),Li=function(r){var o=r.ownerDocument.defaultView;return o&&o.opener||(o=i),o.getComputedStyle(r)},Lr=function(r,o,f){var h,S,b={};for(S in o)b[S]=r.style[S],r.style[S]=o[S];for(S in h=f.call(r),o)r.style[S]=b[S];return h},$i=new RegExp(L.join("|"),"i");function gi(r,o,f){var h,S,b,A,B=r.style;return(f=f||Li(r))&&((A=f.getPropertyValue(o)||f[o])!==""||j(r)||(A=u.style(r,o)),!M.pixelBoxStyles()&&Pi.test(A)&&$i.test(o)&&(h=B.width,S=B.minWidth,b=B.maxWidth,B.minWidth=B.maxWidth=B.width=A,A=f.width,B.width=h,B.minWidth=S,B.maxWidth=b)),A!==void 0?A+"":A}function Di(r,o){return{get:function(){if(!r())return(this.get=o).apply(this,arguments);delete this.get}}}(function(){function r(){if(G){z.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",G.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",T.appendChild(z).appendChild(G);var ee=i.getComputedStyle(G);f=ee.top!=="1%",B=o(ee.marginLeft)===12,G.style.right="60%",b=o(ee.right)===36,h=o(ee.width)===36,G.style.position="absolute",S=o(G.offsetWidth/3)===12,T.removeChild(z),G=null}}function o(ee){return Math.round(parseFloat(ee))}var f,h,S,b,A,B,z=m.createElement("div"),G=m.createElement("div");G.style&&(G.style.backgroundClip="content-box",G.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=G.style.backgroundClip==="content-box",u.extend(M,{boxSizingReliable:function(){return r(),h},pixelBoxStyles:function(){return r(),b},pixelPosition:function(){return r(),f},reliableMarginLeft:function(){return r(),B},scrollboxSize:function(){return r(),S},reliableTrDimensions:function(){var ee,fe,$,te;return A==null&&(ee=m.createElement("table"),fe=m.createElement("tr"),$=m.createElement("div"),ee.style.cssText="position:absolute;left:-11111px;border-collapse:separate",fe.style.cssText="border:1px solid",fe.style.height="1px",$.style.height="9px",$.style.display="block",T.appendChild(ee).appendChild(fe).appendChild($),te=i.getComputedStyle(fe),A=parseInt(te.height,10)+parseInt(te.borderTopWidth,10)+parseInt(te.borderBottomWidth,10)===fe.offsetHeight,T.removeChild(ee)),A}}))})();var Dr=["Webkit","Moz","ms"],Ur=m.createElement("div").style,es={};function Ir(r){var o=u.cssProps[r]||es[r];return o||(r in Ur?r:es[r]=function(f){for(var h=f[0].toUpperCase()+f.slice(1),S=Dr.length;S--;)if((f=Dr[S]+h)in Ur)return f}(r)||r)}var Js=/^(none|table(?!-c[ea]).+)/,R=/^--/,V={position:"absolute",visibility:"hidden",display:"block"},Z={letterSpacing:"0",fontWeight:"400"};function J(r,o,f){var h=je.exec(o);return h?Math.max(0,h[2]-(f||0))+(h[3]||"px"):o}function X(r,o,f,h,S,b){var A=o==="width"?1:0,B=0,z=0;if(f===(h?"border":"content"))return 0;for(;A<4;A+=2)f==="margin"&&(z+=u.css(r,f+L[A],!0,S)),h?(f==="content"&&(z-=u.css(r,"padding"+L[A],!0,S)),f!=="margin"&&(z-=u.css(r,"border"+L[A]+"Width",!0,S))):(z+=u.css(r,"padding"+L[A],!0,S),f!=="padding"?z+=u.css(r,"border"+L[A]+"Width",!0,S):B+=u.css(r,"border"+L[A]+"Width",!0,S));return!h&&0<=b&&(z+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-b-z-B-.5))||0),z}function Ee(r,o,f){var h=Li(r),S=(!M.boxSizingReliable()||f)&&u.css(r,"boxSizing",!1,h)==="border-box",b=S,A=gi(r,o,h),B="offset"+o[0].toUpperCase()+o.slice(1);if(Pi.test(A)){if(!f)return A;A="auto"}return(!M.boxSizingReliable()&&S||!M.reliableTrDimensions()&&C(r,"tr")||A==="auto"||!parseFloat(A)&&u.css(r,"display",!1,h)==="inline")&&r.getClientRects().length&&(S=u.css(r,"boxSizing",!1,h)==="border-box",(b=B in r)&&(A=r[B])),(A=parseFloat(A)||0)+X(r,o,f||(S?"border":"content"),b,h,A)+"px"}function be(r,o,f,h,S){return new be.prototype.init(r,o,f,h,S)}u.extend({cssHooks:{opacity:{get:function(r,o){if(o){var f=gi(r,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(r,o,f,h){if(r&&r.nodeType!==3&&r.nodeType!==8&&r.style){var S,b,A,B=et(o),z=R.test(o),G=r.style;if(z||(o=Ir(B)),A=u.cssHooks[o]||u.cssHooks[B],f===void 0)return A&&"get"in A&&(S=A.get(r,!1,h))!==void 0?S:G[o];(b=typeof f)=="string"&&(S=je.exec(f))&&S[1]&&(f=le(r,o,S),b="number"),f!=null&&f==f&&(b!=="number"||z||(f+=S&&S[3]||(u.cssNumber[B]?"":"px")),M.clearCloneStyle||f!==""||o.indexOf("background")!==0||(G[o]="inherit"),A&&"set"in A&&(f=A.set(r,f,h))===void 0||(z?G.setProperty(o,f):G[o]=f))}},css:function(r,o,f,h){var S,b,A,B=et(o);return R.test(o)||(o=Ir(B)),(A=u.cssHooks[o]||u.cssHooks[B])&&"get"in A&&(S=A.get(r,!0,f)),S===void 0&&(S=gi(r,o,h)),S==="normal"&&o in Z&&(S=Z[o]),f===""||f?(b=parseFloat(S),f===!0||isFinite(b)?b||0:S):S}}),u.each(["height","width"],function(r,o){u.cssHooks[o]={get:function(f,h,S){if(h)return!Js.test(u.css(f,"display"))||f.getClientRects().length&&f.getBoundingClientRect().width?Ee(f,o,S):Lr(f,V,function(){return Ee(f,o,S)})},set:function(f,h,S){var b,A=Li(f),B=!M.scrollboxSize()&&A.position==="absolute",z=(B||S)&&u.css(f,"boxSizing",!1,A)==="border-box",G=S?X(f,o,S,z,A):0;return z&&B&&(G-=Math.ceil(f["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(A[o])-X(f,o,"border",!1,A)-.5)),G&&(b=je.exec(h))&&(b[3]||"px")!=="px"&&(f.style[o]=h,h=u.css(f,o)),J(0,h,G)}}}),u.cssHooks.marginLeft=Di(M.reliableMarginLeft,function(r,o){if(o)return(parseFloat(gi(r,"marginLeft"))||r.getBoundingClientRect().left-Lr(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(r,o){u.cssHooks[r+o]={expand:function(f){for(var h=0,S={},b=typeof f=="string"?f.split(" "):[f];h<4;h++)S[r+L[h]+o]=b[h]||b[h-2]||b[0];return S}},r!=="margin"&&(u.cssHooks[r+o].set=J)}),u.fn.extend({css:function(r,o){return Pe(this,function(f,h,S){var b,A,B={},z=0;if(Array.isArray(h)){for(b=Li(f),A=h.length;z<A;z++)B[h[z]]=u.css(f,h[z],!1,b);return B}return S!==void 0?u.style(f,h,S):u.css(f,h)},r,o,1<arguments.length)}}),((u.Tween=be).prototype={constructor:be,init:function(r,o,f,h,S,b){this.elem=r,this.prop=f,this.easing=S||u.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=h,this.unit=b||(u.cssNumber[f]?"":"px")},cur:function(){var r=be.propHooks[this.prop];return r&&r.get?r.get(this):be.propHooks._default.get(this)},run:function(r){var o,f=be.propHooks[this.prop];return this.options.duration?this.pos=o=u.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):be.propHooks._default.set(this),this}}).init.prototype=be.prototype,(be.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=u.css(r.elem,r.prop,""))&&o!=="auto"?o:0},set:function(r){u.fx.step[r.prop]?u.fx.step[r.prop](r):r.elem.nodeType!==1||!u.cssHooks[r.prop]&&r.elem.style[Ir(r.prop)]==null?r.elem[r.prop]=r.now:u.style(r.elem,r.prop,r.now+r.unit)}}}).scrollTop=be.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},u.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},u.fx=be.prototype.init,u.fx.step={};var Be,ke,$e,Qe,Xe=/^(?:toggle|show|hide)$/,wt=/queueHooks$/;function Dt(){ke&&(m.hidden===!1&&i.requestAnimationFrame?i.requestAnimationFrame(Dt):i.setTimeout(Dt,u.fx.interval),u.fx.tick())}function Ft(){return i.setTimeout(function(){Be=void 0}),Be=Date.now()}function nn(r,o){var f,h=0,S={height:r};for(o=o?1:0;h<4;h+=2-o)S["margin"+(f=L[h])]=S["padding"+f]=r;return o&&(S.opacity=S.width=r),S}function Et(r,o,f){for(var h,S=(ze.tweeners[o]||[]).concat(ze.tweeners["*"]),b=0,A=S.length;b<A;b++)if(h=S[b].call(f,o,r))return h}function ze(r,o,f){var h,S,b=0,A=ze.prefilters.length,B=u.Deferred().always(function(){delete z.elem}),z=function(){if(S)return!1;for(var fe=Be||Ft(),$=Math.max(0,G.startTime+G.duration-fe),te=1-($/G.duration||0),Oe=0,qe=G.tweens.length;Oe<qe;Oe++)G.tweens[Oe].run(te);return B.notifyWith(r,[G,te,$]),te<1&&qe?$:(qe||B.notifyWith(r,[G,1,0]),B.resolveWith(r,[G]),!1)},G=B.promise({elem:r,props:u.extend({},o),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},f),originalProperties:o,originalOptions:f,startTime:Be||Ft(),duration:f.duration,tweens:[],createTween:function(fe,$){var te=u.Tween(r,G.opts,fe,$,G.opts.specialEasing[fe]||G.opts.easing);return G.tweens.push(te),te},stop:function(fe){var $=0,te=fe?G.tweens.length:0;if(S)return this;for(S=!0;$<te;$++)G.tweens[$].run(1);return fe?(B.notifyWith(r,[G,1,0]),B.resolveWith(r,[G,fe])):B.rejectWith(r,[G,fe]),this}}),ee=G.props;for(!function(fe,$){var te,Oe,qe,Ge,zt;for(te in fe)if(qe=$[Oe=et(te)],Ge=fe[te],Array.isArray(Ge)&&(qe=Ge[1],Ge=fe[te]=Ge[0]),te!==Oe&&(fe[Oe]=Ge,delete fe[te]),(zt=u.cssHooks[Oe])&&"expand"in zt)for(te in Ge=zt.expand(Ge),delete fe[Oe],Ge)te in fe||(fe[te]=Ge[te],$[te]=qe);else $[Oe]=qe}(ee,G.opts.specialEasing);b<A;b++)if(h=ze.prefilters[b].call(G,r,ee,G.opts))return y(h.stop)&&(u._queueHooks(G.elem,G.opts.queue).stop=h.stop.bind(h)),h;return u.map(ee,Et,G),y(G.opts.start)&&G.opts.start.call(r,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),u.fx.timer(u.extend(z,{elem:r,anim:G,queue:G.opts.queue})),G}u.Animation=u.extend(ze,{tweeners:{"*":[function(r,o){var f=this.createTween(r,o);return le(f.elem,r,je.exec(o),f),f}]},tweener:function(r,o){y(r)?(o=r,r=["*"]):r=r.match(Te);for(var f,h=0,S=r.length;h<S;h++)f=r[h],ze.tweeners[f]=ze.tweeners[f]||[],ze.tweeners[f].unshift(o)},prefilters:[function(r,o,f){var h,S,b,A,B,z,G,ee,fe="width"in o||"height"in o,$=this,te={},Oe=r.style,qe=r.nodeType&&ge(r),Ge=U.get(r,"fxshow");for(h in f.queue||((A=u._queueHooks(r,"fx")).unqueued==null&&(A.unqueued=0,B=A.empty.fire,A.empty.fire=function(){A.unqueued||B()}),A.unqueued++,$.always(function(){$.always(function(){A.unqueued--,u.queue(r,"fx").length||A.empty.fire()})})),o)if(S=o[h],Xe.test(S)){if(delete o[h],b=b||S==="toggle",S===(qe?"hide":"show")){if(S!=="show"||!Ge||Ge[h]===void 0)continue;qe=!0}te[h]=Ge&&Ge[h]||u.style(r,h)}if((z=!u.isEmptyObject(o))||!u.isEmptyObject(te))for(h in fe&&r.nodeType===1&&(f.overflow=[Oe.overflow,Oe.overflowX,Oe.overflowY],(G=Ge&&Ge.display)==null&&(G=U.get(r,"display")),(ee=u.css(r,"display"))==="none"&&(G?ee=G:(Re([r],!0),G=r.style.display||G,ee=u.css(r,"display"),Re([r]))),(ee==="inline"||ee==="inline-block"&&G!=null)&&u.css(r,"float")==="none"&&(z||($.done(function(){Oe.display=G}),G==null&&(ee=Oe.display,G=ee==="none"?"":ee)),Oe.display="inline-block")),f.overflow&&(Oe.overflow="hidden",$.always(function(){Oe.overflow=f.overflow[0],Oe.overflowX=f.overflow[1],Oe.overflowY=f.overflow[2]})),z=!1,te)z||(Ge?"hidden"in Ge&&(qe=Ge.hidden):Ge=U.access(r,"fxshow",{display:G}),b&&(Ge.hidden=!qe),qe&&Re([r],!0),$.done(function(){for(h in qe||Re([r]),U.remove(r,"fxshow"),te)u.style(r,h,te[h])})),z=Et(qe?Ge[h]:0,h,$),h in Ge||(Ge[h]=z.start,qe&&(z.end=z.start,z.start=0))}],prefilter:function(r,o){o?ze.prefilters.unshift(r):ze.prefilters.push(r)}}),u.speed=function(r,o,f){var h=r&&typeof r=="object"?u.extend({},r):{complete:f||!f&&o||y(r)&&r,duration:r,easing:f&&o||o&&!y(o)&&o};return u.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in u.fx.speeds?h.duration=u.fx.speeds[h.duration]:h.duration=u.fx.speeds._default),h.queue!=null&&h.queue!==!0||(h.queue="fx"),h.old=h.complete,h.complete=function(){y(h.old)&&h.old.call(this),h.queue&&u.dequeue(this,h.queue)},h},u.fn.extend({fadeTo:function(r,o,f,h){return this.filter(ge).css("opacity",0).show().end().animate({opacity:o},r,f,h)},animate:function(r,o,f,h){var S=u.isEmptyObject(r),b=u.speed(o,f,h),A=function(){var B=ze(this,u.extend({},r),b);(S||U.get(this,"finish"))&&B.stop(!0)};return A.finish=A,S||b.queue===!1?this.each(A):this.queue(b.queue,A)},stop:function(r,o,f){var h=function(S){var b=S.stop;delete S.stop,b(f)};return typeof r!="string"&&(f=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var S=!0,b=r!=null&&r+"queueHooks",A=u.timers,B=U.get(this);if(b)B[b]&&B[b].stop&&h(B[b]);else for(b in B)B[b]&&B[b].stop&&wt.test(b)&&h(B[b]);for(b=A.length;b--;)A[b].elem!==this||r!=null&&A[b].queue!==r||(A[b].anim.stop(f),S=!1,A.splice(b,1));!S&&f||u.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,f=U.get(this),h=f[r+"queue"],S=f[r+"queueHooks"],b=u.timers,A=h?h.length:0;for(f.finish=!0,u.queue(this,r,[]),S&&S.stop&&S.stop.call(this,!0),o=b.length;o--;)b[o].elem===this&&b[o].queue===r&&(b[o].anim.stop(!0),b.splice(o,1));for(o=0;o<A;o++)h[o]&&h[o].finish&&h[o].finish.call(this);delete f.finish})}}),u.each(["toggle","show","hide"],function(r,o){var f=u.fn[o];u.fn[o]=function(h,S,b){return h==null||typeof h=="boolean"?f.apply(this,arguments):this.animate(nn(o,!0),h,S,b)}}),u.each({slideDown:nn("show"),slideUp:nn("hide"),slideToggle:nn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){u.fn[r]=function(f,h,S){return this.animate(o,f,h,S)}}),u.timers=[],u.fx.tick=function(){var r,o=0,f=u.timers;for(Be=Date.now();o<f.length;o++)(r=f[o])()||f[o]!==r||f.splice(o--,1);f.length||u.fx.stop(),Be=void 0},u.fx.timer=function(r){u.timers.push(r),u.fx.start()},u.fx.interval=13,u.fx.start=function(){ke||(ke=!0,Dt())},u.fx.stop=function(){ke=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(r,o){return r=u.fx&&u.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(f,h){var S=i.setTimeout(f,r);h.stop=function(){i.clearTimeout(S)}})},$e=m.createElement("input"),Qe=m.createElement("select").appendChild(m.createElement("option")),$e.type="checkbox",M.checkOn=$e.value!=="",M.optSelected=Qe.selected,($e=m.createElement("input")).value="t",$e.type="radio",M.radioValue=$e.value==="t";var Yt,_t=u.expr.attrHandle;u.fn.extend({attr:function(r,o){return Pe(this,u.attr,r,o,1<arguments.length)},removeAttr:function(r){return this.each(function(){u.removeAttr(this,r)})}}),u.extend({attr:function(r,o,f){var h,S,b=r.nodeType;if(b!==3&&b!==8&&b!==2)return typeof r.getAttribute>"u"?u.prop(r,o,f):(b===1&&u.isXMLDoc(r)||(S=u.attrHooks[o.toLowerCase()]||(u.expr.match.bool.test(o)?Yt:void 0)),f!==void 0?f===null?void u.removeAttr(r,o):S&&"set"in S&&(h=S.set(r,f,o))!==void 0?h:(r.setAttribute(o,f+""),f):S&&"get"in S&&(h=S.get(r,o))!==null?h:(h=u.find.attr(r,o))==null?void 0:h)},attrHooks:{type:{set:function(r,o){if(!M.radioValue&&o==="radio"&&C(r,"input")){var f=r.value;return r.setAttribute("type",o),f&&(r.value=f),o}}}},removeAttr:function(r,o){var f,h=0,S=o&&o.match(Te);if(S&&r.nodeType===1)for(;f=S[h++];)r.removeAttribute(f)}}),Yt={set:function(r,o,f){return o===!1?u.removeAttr(r,f):r.setAttribute(f,f),f}},u.each(u.expr.match.bool.source.match(/\w+/g),function(r,o){var f=_t[o]||u.find.attr;_t[o]=function(h,S,b){var A,B,z=S.toLowerCase();return b||(B=_t[z],_t[z]=A,A=f(h,S,b)!=null?z:null,_t[z]=B),A}});var Sn=/^(?:input|select|textarea|button)$/i,_i=/^(?:a|area)$/i;function Vt(r){return(r.match(Te)||[]).join(" ")}function On(r){return r.getAttribute&&r.getAttribute("class")||""}function Ot(r){return Array.isArray(r)?r:typeof r=="string"&&r.match(Te)||[]}u.fn.extend({prop:function(r,o){return Pe(this,u.prop,r,o,1<arguments.length)},removeProp:function(r){return this.each(function(){delete this[u.propFix[r]||r]})}}),u.extend({prop:function(r,o,f){var h,S,b=r.nodeType;if(b!==3&&b!==8&&b!==2)return b===1&&u.isXMLDoc(r)||(o=u.propFix[o]||o,S=u.propHooks[o]),f!==void 0?S&&"set"in S&&(h=S.set(r,f,o))!==void 0?h:r[o]=f:S&&"get"in S&&(h=S.get(r,o))!==null?h:r[o]},propHooks:{tabIndex:{get:function(r){var o=u.find.attr(r,"tabindex");return o?parseInt(o,10):Sn.test(r.nodeName)||_i.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(u.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this}),u.fn.extend({addClass:function(r){var o,f,h,S,b,A,B,z=0;if(y(r))return this.each(function(G){u(this).addClass(r.call(this,G,On(this)))});if((o=Ot(r)).length){for(;f=this[z++];)if(S=On(f),h=f.nodeType===1&&" "+Vt(S)+" "){for(A=0;b=o[A++];)h.indexOf(" "+b+" ")<0&&(h+=b+" ");S!==(B=Vt(h))&&f.setAttribute("class",B)}}return this},removeClass:function(r){var o,f,h,S,b,A,B,z=0;if(y(r))return this.each(function(G){u(this).removeClass(r.call(this,G,On(this)))});if(!arguments.length)return this.attr("class","");if((o=Ot(r)).length){for(;f=this[z++];)if(S=On(f),h=f.nodeType===1&&" "+Vt(S)+" "){for(A=0;b=o[A++];)for(;-1<h.indexOf(" "+b+" ");)h=h.replace(" "+b+" "," ");S!==(B=Vt(h))&&f.setAttribute("class",B)}}return this},toggleClass:function(r,o){var f=typeof r,h=f==="string"||Array.isArray(r);return typeof o=="boolean"&&h?o?this.addClass(r):this.removeClass(r):y(r)?this.each(function(S){u(this).toggleClass(r.call(this,S,On(this),o),o)}):this.each(function(){var S,b,A,B;if(h)for(b=0,A=u(this),B=Ot(r);S=B[b++];)A.hasClass(S)?A.removeClass(S):A.addClass(S);else r!==void 0&&f!=="boolean"||((S=On(this))&&U.set(this,"__className__",S),this.setAttribute&&this.setAttribute("class",S||r===!1?"":U.get(this,"__className__")||""))})},hasClass:function(r){var o,f,h=0;for(o=" "+r+" ";f=this[h++];)if(f.nodeType===1&&-1<(" "+Vt(On(f))+" ").indexOf(o))return!0;return!1}});var jn=/\r/g;u.fn.extend({val:function(r){var o,f,h,S=this[0];return arguments.length?(h=y(r),this.each(function(b){var A;this.nodeType===1&&((A=h?r.call(this,b,u(this).val()):r)==null?A="":typeof A=="number"?A+="":Array.isArray(A)&&(A=u.map(A,function(B){return B==null?"":B+""})),(o=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()])&&"set"in o&&o.set(this,A,"value")!==void 0||(this.value=A))})):S?(o=u.valHooks[S.type]||u.valHooks[S.nodeName.toLowerCase()])&&"get"in o&&(f=o.get(S,"value"))!==void 0?f:typeof(f=S.value)=="string"?f.replace(jn,""):f??"":void 0}}),u.extend({valHooks:{option:{get:function(r){var o=u.find.attr(r,"value");return o??Vt(u.text(r))}},select:{get:function(r){var o,f,h,S=r.options,b=r.selectedIndex,A=r.type==="select-one",B=A?null:[],z=A?b+1:S.length;for(h=b<0?z:A?b:0;h<z;h++)if(((f=S[h]).selected||h===b)&&!f.disabled&&(!f.parentNode.disabled||!C(f.parentNode,"optgroup"))){if(o=u(f).val(),A)return o;B.push(o)}return B},set:function(r,o){for(var f,h,S=r.options,b=u.makeArray(o),A=S.length;A--;)((h=S[A]).selected=-1<u.inArray(u.valHooks.option.get(h),b))&&(f=!0);return f||(r.selectedIndex=-1),b}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=-1<u.inArray(u(r).val(),o)}},M.checkOn||(u.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})}),M.focusin="onfocusin"in i;var Ki=/^(?:focusinfocus|focusoutblur)$/,fn=function(r){r.stopPropagation()};u.extend(u.event,{trigger:function(r,o,f,h){var S,b,A,B,z,G,ee,fe,$=[f||m],te=g.call(r,"type")?r.type:r,Oe=g.call(r,"namespace")?r.namespace.split("."):[];if(b=fe=A=f=f||m,f.nodeType!==3&&f.nodeType!==8&&!Ki.test(te+u.event.triggered)&&(-1<te.indexOf(".")&&(te=(Oe=te.split(".")).shift(),Oe.sort()),z=te.indexOf(":")<0&&"on"+te,(r=r[u.expando]?r:new u.Event(te,typeof r=="object"&&r)).isTrigger=h?2:3,r.namespace=Oe.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+Oe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=f),o=o==null?[r]:u.makeArray(o,[r]),ee=u.event.special[te]||{},h||!ee.trigger||ee.trigger.apply(f,o)!==!1)){if(!h&&!ee.noBubble&&!P(f)){for(B=ee.delegateType||te,Ki.test(B+te)||(b=b.parentNode);b;b=b.parentNode)$.push(b),A=b;A===(f.ownerDocument||m)&&$.push(A.defaultView||A.parentWindow||i)}for(S=0;(b=$[S++])&&!r.isPropagationStopped();)fe=b,r.type=1<S?B:ee.bindType||te,(G=(U.get(b,"events")||Object.create(null))[r.type]&&U.get(b,"handle"))&&G.apply(b,o),(G=z&&b[z])&&G.apply&&mt(b)&&(r.result=G.apply(b,o),r.result===!1&&r.preventDefault());return r.type=te,h||r.isDefaultPrevented()||ee._default&&ee._default.apply($.pop(),o)!==!1||!mt(f)||z&&y(f[te])&&!P(f)&&((A=f[z])&&(f[z]=null),u.event.triggered=te,r.isPropagationStopped()&&fe.addEventListener(te,fn),f[te](),r.isPropagationStopped()&&fe.removeEventListener(te,fn),u.event.triggered=void 0,A&&(f[z]=A)),r.result}},simulate:function(r,o,f){var h=u.extend(new u.Event,f,{type:r,isSimulated:!0});u.event.trigger(h,null,o)}}),u.fn.extend({trigger:function(r,o){return this.each(function(){u.event.trigger(r,o,this)})},triggerHandler:function(r,o){var f=this[0];if(f)return u.event.trigger(r,o,f,!0)}}),M.focusin||u.each({focus:"focusin",blur:"focusout"},function(r,o){var f=function(h){u.event.simulate(o,h.target,u.event.fix(h))};u.event.special[o]={setup:function(){var h=this.ownerDocument||this.document||this,S=U.access(h,o);S||h.addEventListener(r,f,!0),U.access(h,o,(S||0)+1)},teardown:function(){var h=this.ownerDocument||this.document||this,S=U.access(h,o)-1;S?U.access(h,o,S):(h.removeEventListener(r,f,!0),U.remove(h,o))}}});var ni=i.location,ts={guid:Date.now()},Zi=/\?/;u.parseXML=function(r){var o,f;if(!r||typeof r!="string")return null;try{o=new i.DOMParser().parseFromString(r,"text/xml")}catch{}return f=o&&o.getElementsByTagName("parsererror")[0],o&&!f||u.error("Invalid XML: "+(f?u.map(f.childNodes,function(h){return h.textContent}).join(`
`):r)),o};var Pc=/\[\]$/,Bo=/\r?\n/g,Lc=/^(?:submit|button|image|reset|file)$/i,Dc=/^(?:input|select|textarea|keygen)/i;function Qs(r,o,f,h){var S;if(Array.isArray(o))u.each(o,function(b,A){f||Pc.test(r)?h(r,A):Qs(r+"["+(typeof A=="object"&&A!=null?b:"")+"]",A,f,h)});else if(f||D(o)!=="object")h(r,o);else for(S in o)Qs(r+"["+S+"]",o[S],f,h)}u.param=function(r,o){var f,h=[],S=function(b,A){var B=y(A)?A():A;h[h.length]=encodeURIComponent(b)+"="+encodeURIComponent(B??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!u.isPlainObject(r))u.each(r,function(){S(this.name,this.value)});else for(f in r)Qs(f,r[f],o,S);return h.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=u.prop(this,"elements");return r?u.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!u(this).is(":disabled")&&Dc.test(this.nodeName)&&!Lc.test(r)&&(this.checked||!Se.test(r))}).map(function(r,o){var f=u(this).val();return f==null?null:Array.isArray(f)?u.map(f,function(h){return{name:o.name,value:h.replace(Bo,`\r
`)}}):{name:o.name,value:f.replace(Bo,`\r
`)}}).get()}});var Uc=/%20/g,Ic=/#.*$/,Nc=/([?&])_=[^&]*/,Fc=/^(.*?):[ \t]*([^\r\n]*)$/gm,Oc=/^(?:GET|HEAD)$/,Bc=/^\/\//,zo={},ea={},Ho="*/".concat("*"),ta=m.createElement("a");function ko(r){return function(o,f){typeof o!="string"&&(f=o,o="*");var h,S=0,b=o.toLowerCase().match(Te)||[];if(y(f))for(;h=b[S++];)h[0]==="+"?(h=h.slice(1)||"*",(r[h]=r[h]||[]).unshift(f)):(r[h]=r[h]||[]).push(f)}}function Go(r,o,f,h){var S={},b=r===ea;function A(B){var z;return S[B]=!0,u.each(r[B]||[],function(G,ee){var fe=ee(o,f,h);return typeof fe!="string"||b||S[fe]?b?!(z=fe):void 0:(o.dataTypes.unshift(fe),A(fe),!1)}),z}return A(o.dataTypes[0])||!S["*"]&&A("*")}function na(r,o){var f,h,S=u.ajaxSettings.flatOptions||{};for(f in o)o[f]!==void 0&&((S[f]?r:h||(h={}))[f]=o[f]);return h&&u.extend(!0,r,h),r}ta.href=ni.href,u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ni.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ni.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ho,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?na(na(r,u.ajaxSettings),o):na(u.ajaxSettings,r)},ajaxPrefilter:ko(zo),ajaxTransport:ko(ea),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var f,h,S,b,A,B,z,G,ee,fe,$=u.ajaxSetup({},o),te=$.context||$,Oe=$.context&&(te.nodeType||te.jquery)?u(te):u.event,qe=u.Deferred(),Ge=u.Callbacks("once memory"),zt=$.statusCode||{},Zt={},yn={},Ut="canceled",rt={readyState:0,getResponseHeader:function(Tt){var Ht;if(z){if(!b)for(b={};Ht=Fc.exec(S);)b[Ht[1].toLowerCase()+" "]=(b[Ht[1].toLowerCase()+" "]||[]).concat(Ht[2]);Ht=b[Tt.toLowerCase()+" "]}return Ht==null?null:Ht.join(", ")},getAllResponseHeaders:function(){return z?S:null},setRequestHeader:function(Tt,Ht){return z==null&&(Tt=yn[Tt.toLowerCase()]=yn[Tt.toLowerCase()]||Tt,Zt[Tt]=Ht),this},overrideMimeType:function(Tt){return z==null&&($.mimeType=Tt),this},statusCode:function(Tt){var Ht;if(Tt)if(z)rt.always(Tt[rt.status]);else for(Ht in Tt)zt[Ht]=[zt[Ht],Tt[Ht]];return this},abort:function(Tt){var Ht=Tt||Ut;return f&&f.abort(Ht),_n(0,Ht),this}};if(qe.promise(rt),$.url=((r||$.url||ni.href)+"").replace(Bc,ni.protocol+"//"),$.type=o.method||o.type||$.method||$.type,$.dataTypes=($.dataType||"*").toLowerCase().match(Te)||[""],$.crossDomain==null){B=m.createElement("a");try{B.href=$.url,B.href=B.href,$.crossDomain=ta.protocol+"//"+ta.host!=B.protocol+"//"+B.host}catch{$.crossDomain=!0}}if($.data&&$.processData&&typeof $.data!="string"&&($.data=u.param($.data,$.traditional)),Go(zo,$,o,rt),z)return rt;for(ee in(G=u.event&&$.global)&&u.active++==0&&u.event.trigger("ajaxStart"),$.type=$.type.toUpperCase(),$.hasContent=!Oc.test($.type),h=$.url.replace(Ic,""),$.hasContent?$.data&&$.processData&&($.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&($.data=$.data.replace(Uc,"+")):(fe=$.url.slice(h.length),$.data&&($.processData||typeof $.data=="string")&&(h+=(Zi.test(h)?"&":"?")+$.data,delete $.data),$.cache===!1&&(h=h.replace(Nc,"$1"),fe=(Zi.test(h)?"&":"?")+"_="+ts.guid+++fe),$.url=h+fe),$.ifModified&&(u.lastModified[h]&&rt.setRequestHeader("If-Modified-Since",u.lastModified[h]),u.etag[h]&&rt.setRequestHeader("If-None-Match",u.etag[h])),($.data&&$.hasContent&&$.contentType!==!1||o.contentType)&&rt.setRequestHeader("Content-Type",$.contentType),rt.setRequestHeader("Accept",$.dataTypes[0]&&$.accepts[$.dataTypes[0]]?$.accepts[$.dataTypes[0]]+($.dataTypes[0]!=="*"?", "+Ho+"; q=0.01":""):$.accepts["*"]),$.headers)rt.setRequestHeader(ee,$.headers[ee]);if($.beforeSend&&($.beforeSend.call(te,rt,$)===!1||z))return rt.abort();if(Ut="abort",Ge.add($.complete),rt.done($.success),rt.fail($.error),f=Go(ea,$,o,rt)){if(rt.readyState=1,G&&Oe.trigger("ajaxSend",[rt,$]),z)return rt;$.async&&0<$.timeout&&(A=i.setTimeout(function(){rt.abort("timeout")},$.timeout));try{z=!1,f.send(Zt,_n)}catch(Tt){if(z)throw Tt;_n(-1,Tt)}}else _n(-1,"No Transport");function _n(Tt,Ht,Fr,ns){var En,Ui,Ji,vn,Qi,Pn=Ht;z||(z=!0,A&&i.clearTimeout(A),f=void 0,S=ns||"",rt.readyState=0<Tt?4:0,En=200<=Tt&&Tt<300||Tt===304,Fr&&(vn=function(kt,Tn,bn){for(var $n,at,Rt,Jt,An=kt.contents,jt=kt.dataTypes;jt[0]==="*";)jt.shift(),$n===void 0&&($n=kt.mimeType||Tn.getResponseHeader("Content-Type"));if($n){for(at in An)if(An[at]&&An[at].test($n)){jt.unshift(at);break}}if(jt[0]in bn)Rt=jt[0];else{for(at in bn){if(!jt[0]||kt.converters[at+" "+jt[0]]){Rt=at;break}Jt||(Jt=at)}Rt=Rt||Jt}if(Rt)return Rt!==jt[0]&&jt.unshift(Rt),bn[Rt]}($,rt,Fr)),!En&&-1<u.inArray("script",$.dataTypes)&&u.inArray("json",$.dataTypes)<0&&($.converters["text script"]=function(){}),vn=function(kt,Tn,bn,$n){var at,Rt,Jt,An,jt,wn={},er=kt.dataTypes.slice();if(er[1])for(Jt in kt.converters)wn[Jt.toLowerCase()]=kt.converters[Jt];for(Rt=er.shift();Rt;)if(kt.responseFields[Rt]&&(bn[kt.responseFields[Rt]]=Tn),!jt&&$n&&kt.dataFilter&&(Tn=kt.dataFilter(Tn,kt.dataType)),jt=Rt,Rt=er.shift()){if(Rt==="*")Rt=jt;else if(jt!=="*"&&jt!==Rt){if(!(Jt=wn[jt+" "+Rt]||wn["* "+Rt])){for(at in wn)if((An=at.split(" "))[1]===Rt&&(Jt=wn[jt+" "+An[0]]||wn["* "+An[0]])){Jt===!0?Jt=wn[at]:wn[at]!==!0&&(Rt=An[0],er.unshift(An[1]));break}}if(Jt!==!0)if(Jt&&kt.throws)Tn=Jt(Tn);else try{Tn=Jt(Tn)}catch(is){return{state:"parsererror",error:Jt?is:"No conversion from "+jt+" to "+Rt}}}}return{state:"success",data:Tn}}($,vn,rt,En),En?($.ifModified&&((Qi=rt.getResponseHeader("Last-Modified"))&&(u.lastModified[h]=Qi),(Qi=rt.getResponseHeader("etag"))&&(u.etag[h]=Qi)),Tt===204||$.type==="HEAD"?Pn="nocontent":Tt===304?Pn="notmodified":(Pn=vn.state,Ui=vn.data,En=!(Ji=vn.error))):(Ji=Pn,!Tt&&Pn||(Pn="error",Tt<0&&(Tt=0))),rt.status=Tt,rt.statusText=(Ht||Pn)+"",En?qe.resolveWith(te,[Ui,Pn,rt]):qe.rejectWith(te,[rt,Pn,Ji]),rt.statusCode(zt),zt=void 0,G&&Oe.trigger(En?"ajaxSuccess":"ajaxError",[rt,$,En?Ui:Ji]),Ge.fireWith(te,[rt,Pn]),G&&(Oe.trigger("ajaxComplete",[rt,$]),--u.active||u.event.trigger("ajaxStop")))}return rt},getJSON:function(r,o,f){return u.get(r,o,f,"json")},getScript:function(r,o){return u.get(r,void 0,o,"script")}}),u.each(["get","post"],function(r,o){u[o]=function(f,h,S,b){return y(h)&&(b=b||S,S=h,h=void 0),u.ajax(u.extend({url:f,type:o,dataType:b,data:h,success:S},u.isPlainObject(f)&&f))}}),u.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),u._evalUrl=function(r,o,f){return u.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(h){u.globalEval(h,o,f)}})},u.fn.extend({wrapAll:function(r){var o;return this[0]&&(y(r)&&(r=r.call(this[0])),o=u(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(r){return y(r)?this.each(function(o){u(this).wrapInner(r.call(this,o))}):this.each(function(){var o=u(this),f=o.contents();f.length?f.wrapAll(r):o.append(r)})},wrap:function(r){var o=y(r);return this.each(function(f){u(this).wrapAll(o?r.call(this,f):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(r){return!u.expr.pseudos.visible(r)},u.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch{}};var zc={0:200,1223:204},Nr=u.ajaxSettings.xhr();M.cors=!!Nr&&"withCredentials"in Nr,M.ajax=Nr=!!Nr,u.ajaxTransport(function(r){var o,f;if(M.cors||Nr&&!r.crossDomain)return{send:function(h,S){var b,A=r.xhr();if(A.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(b in r.xhrFields)A[b]=r.xhrFields[b];for(b in r.mimeType&&A.overrideMimeType&&A.overrideMimeType(r.mimeType),r.crossDomain||h["X-Requested-With"]||(h["X-Requested-With"]="XMLHttpRequest"),h)A.setRequestHeader(b,h[b]);o=function(B){return function(){o&&(o=f=A.onload=A.onerror=A.onabort=A.ontimeout=A.onreadystatechange=null,B==="abort"?A.abort():B==="error"?typeof A.status!="number"?S(0,"error"):S(A.status,A.statusText):S(zc[A.status]||A.status,A.statusText,(A.responseType||"text")!=="text"||typeof A.responseText!="string"?{binary:A.response}:{text:A.responseText},A.getAllResponseHeaders()))}},A.onload=o(),f=A.onerror=A.ontimeout=o("error"),A.onabort!==void 0?A.onabort=f:A.onreadystatechange=function(){A.readyState===4&&i.setTimeout(function(){o&&f()})},o=o("abort");try{A.send(r.hasContent&&r.data||null)}catch(B){if(o)throw B}},abort:function(){o&&o()}}}),u.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return u.globalEval(r),r}}}),u.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),u.ajaxTransport("script",function(r){var o,f;if(r.crossDomain||r.scriptAttrs)return{send:function(h,S){o=u("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",f=function(b){o.remove(),f=null,b&&S(b.type==="error"?404:200,b.type)}),m.head.appendChild(o[0])},abort:function(){f&&f()}}});var Vo,Wo=[],ia=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=Wo.pop()||u.expando+"_"+ts.guid++;return this[r]=!0,r}}),u.ajaxPrefilter("json jsonp",function(r,o,f){var h,S,b,A=r.jsonp!==!1&&(ia.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ia.test(r.data)&&"data");if(A||r.dataTypes[0]==="jsonp")return h=r.jsonpCallback=y(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,A?r[A]=r[A].replace(ia,"$1"+h):r.jsonp!==!1&&(r.url+=(Zi.test(r.url)?"&":"?")+r.jsonp+"="+h),r.converters["script json"]=function(){return b||u.error(h+" was not called"),b[0]},r.dataTypes[0]="json",S=i[h],i[h]=function(){b=arguments},f.always(function(){S===void 0?u(i).removeProp(h):i[h]=S,r[h]&&(r.jsonpCallback=o.jsonpCallback,Wo.push(h)),b&&y(S)&&S(b[0]),b=S=void 0}),"script"}),M.createHTMLDocument=((Vo=m.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",Vo.childNodes.length===2),u.parseHTML=function(r,o,f){return typeof r!="string"?[]:(typeof o=="boolean"&&(f=o,o=!1),o||(M.createHTMLDocument?((h=(o=m.implementation.createHTMLDocument("")).createElement("base")).href=m.location.href,o.head.appendChild(h)):o=m),b=!f&&[],(S=Q.exec(r))?[o.createElement(S[1])]:(S=Lt([r],o,b),b&&b.length&&u(b).remove(),u.merge([],S.childNodes)));var h,S,b},u.fn.load=function(r,o,f){var h,S,b,A=this,B=r.indexOf(" ");return-1<B&&(h=Vt(r.slice(B)),r=r.slice(0,B)),y(o)?(f=o,o=void 0):o&&typeof o=="object"&&(S="POST"),0<A.length&&u.ajax({url:r,type:S||"GET",dataType:"html",data:o}).done(function(z){b=arguments,A.html(h?u("<div>").append(u.parseHTML(z)).find(h):z)}).always(f&&function(z,G){A.each(function(){f.apply(this,b||[z.responseText,G,z])})}),this},u.expr.pseudos.animated=function(r){return u.grep(u.timers,function(o){return r===o.elem}).length},u.offset={setOffset:function(r,o,f){var h,S,b,A,B,z,G=u.css(r,"position"),ee=u(r),fe={};G==="static"&&(r.style.position="relative"),B=ee.offset(),b=u.css(r,"top"),z=u.css(r,"left"),(G==="absolute"||G==="fixed")&&-1<(b+z).indexOf("auto")?(A=(h=ee.position()).top,S=h.left):(A=parseFloat(b)||0,S=parseFloat(z)||0),y(o)&&(o=o.call(r,f,u.extend({},B))),o.top!=null&&(fe.top=o.top-B.top+A),o.left!=null&&(fe.left=o.left-B.left+S),"using"in o?o.using.call(r,fe):ee.css(fe)}},u.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(S){u.offset.setOffset(this,r,S)});var o,f,h=this[0];return h?h.getClientRects().length?(o=h.getBoundingClientRect(),f=h.ownerDocument.defaultView,{top:o.top+f.pageYOffset,left:o.left+f.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var r,o,f,h=this[0],S={top:0,left:0};if(u.css(h,"position")==="fixed")o=h.getBoundingClientRect();else{for(o=this.offset(),f=h.ownerDocument,r=h.offsetParent||f.documentElement;r&&(r===f.body||r===f.documentElement)&&u.css(r,"position")==="static";)r=r.parentNode;r&&r!==h&&r.nodeType===1&&((S=u(r).offset()).top+=u.css(r,"borderTopWidth",!0),S.left+=u.css(r,"borderLeftWidth",!0))}return{top:o.top-S.top-u.css(h,"marginTop",!0),left:o.left-S.left-u.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&u.css(r,"position")==="static";)r=r.offsetParent;return r||T})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var f=o==="pageYOffset";u.fn[r]=function(h){return Pe(this,function(S,b,A){var B;if(P(S)?B=S:S.nodeType===9&&(B=S.defaultView),A===void 0)return B?B[o]:S[b];B?B.scrollTo(f?B.pageXOffset:A,f?A:B.pageYOffset):S[b]=A},r,h,arguments.length)}}),u.each(["top","left"],function(r,o){u.cssHooks[o]=Di(M.pixelPosition,function(f,h){if(h)return h=gi(f,o),Pi.test(h)?u(f).position()[o]+"px":h})}),u.each({Height:"height",Width:"width"},function(r,o){u.each({padding:"inner"+r,content:o,"":"outer"+r},function(f,h){u.fn[h]=function(S,b){var A=arguments.length&&(f||typeof S!="boolean"),B=f||(S===!0||b===!0?"margin":"border");return Pe(this,function(z,G,ee){var fe;return P(z)?h.indexOf("outer")===0?z["inner"+r]:z.document.documentElement["client"+r]:z.nodeType===9?(fe=z.documentElement,Math.max(z.body["scroll"+r],fe["scroll"+r],z.body["offset"+r],fe["offset"+r],fe["client"+r])):ee===void 0?u.css(z,G,B):u.style(z,G,ee,B)},o,A?S:void 0,A)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){u.fn[o]=function(f){return this.on(o,f)}}),u.fn.extend({bind:function(r,o,f){return this.on(r,null,o,f)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,f,h){return this.on(o,r,f,h)},undelegate:function(r,o,f){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",f)},hover:function(r,o){return this.mouseenter(r).mouseleave(o||r)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){u.fn[o]=function(f,h){return 0<arguments.length?this.on(o,null,f,h):this.trigger(o)}});var Hc=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;u.proxy=function(r,o){var f,h,S;if(typeof o=="string"&&(f=r[o],o=r,r=f),y(r))return h=s.call(arguments,2),(S=function(){return r.apply(o||this,h.concat(s.call(arguments)))}).guid=r.guid=r.guid||u.guid++,S},u.holdReady=function(r){r?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=C,u.isFunction=y,u.isWindow=P,u.camelCase=et,u.type=D,u.now=Date.now,u.isNumeric=function(r){var o=u.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},u.trim=function(r){return r==null?"":(r+"").replace(Hc,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return u});var kc=i.jQuery,Gc=i.$;return u.noConflict=function(r){return i.$===u&&(i.$=Gc),r&&i.jQuery===u&&(i.jQuery=kc),u},typeof e>"u"&&(i.jQuery=i.$=u),u});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="169",tu=0,Qo=1,nu=2,Zl=1,iu=2,ui=3,wi=0,xn=1,fi=2,bi=0,_r=1,el=2,tl=3,nl=4,ru=5,Vi=100,su=101,au=102,ou=103,lu=104,cu=200,uu=201,fu=202,hu=203,za=204,Ha=205,du=206,pu=207,mu=208,gu=209,_u=210,vu=211,xu=212,Mu=213,Su=214,ka=0,Ga=1,Va=2,Mr=3,Wa=4,Xa=5,qa=6,Ya=7,Jl=0,yu=1,Eu=2,Ai=0,Tu=1,bu=2,Au=3,wu=4,Ru=5,Cu=6,Pu=7,Ql=300,Sr=301,yr=302,ja=303,$a=304,Ys=306,Ka=1e3,Xi=1001,Za=1002,Un=1003,Lu=1004,us=1005,Wn=1006,ua=1007,qi=1008,pi=1009,ec=1010,tc=1011,Yr=1012,Ro=1013,Yi=1014,hi=1015,Kr=1016,Co=1017,Po=1018,Er=1020,nc=35902,ic=1021,rc=1022,qn=1023,sc=1024,ac=1025,vr=1026,Tr=1027,oc=1028,Lo=1029,lc=1030,Do=1031,Uo=1033,Is=33776,Ns=33777,Fs=33778,Os=33779,Ja=35840,Qa=35841,eo=35842,to=35843,no=36196,io=37492,ro=37496,so=37808,ao=37809,oo=37810,lo=37811,co=37812,uo=37813,fo=37814,ho=37815,po=37816,mo=37817,go=37818,_o=37819,vo=37820,xo=37821,Bs=36492,Mo=36494,So=36495,cc=36283,yo=36284,Eo=36285,To=36286,Du=3200,Uu=3201,Iu=0,Nu=1,Ti="",Zn="srgb",Ci="srgb-linear",Io="display-p3",js="display-p3-linear",Gs="linear",Bt="srgb",Vs="rec709",Ws="p3",tr=7680,il=519,Fu=512,Ou=513,Bu=514,uc=515,zu=516,Hu=517,ku=518,Gu=519,rl=35044,sl="300 es",di=2e3,Xs=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const Wr=Math.PI/180,jr=180/Math.PI;function wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function mn(i,e,t){return Math.max(e,Math.min(t,i))}function No(i,e){return(i%e+e)%e}function Vu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wu(i,e,t){return i!==e?(t-i)/(e-i):0}function Xr(i,e,t){return(1-t)*i+t*e}function Xu(i,e,t,n){return Xr(i,e,1-Math.exp(-t*n))}function qu(i,e=1){return e-Math.abs(No(i,e*2)-e)}function Yu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ku(i,e){return i+Math.random()*(e-i)}function Zu(i){return i*(.5-Math.random())}function Ju(i){i!==void 0&&(al=i);let e=al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qu(i){return i*Wr}function ef(i){return i*jr}function tf(i){return(i&i-1)===0&&i!==0}function nf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sf(i,e,t,n,s){const a=Math.cos,c=Math.sin,l=a(t/2),d=c(t/2),p=a((e+n)/2),g=c((e+n)/2),v=a((e-n)/2),x=c((e-n)/2),M=a((n-e)/2),y=c((n-e)/2);switch(s){case"XYX":i.set(l*g,d*v,d*x,l*p);break;case"YZY":i.set(d*x,l*g,d*v,l*p);break;case"ZXZ":i.set(d*v,d*x,l*g,l*p);break;case"XZX":i.set(l*g,d*y,d*M,l*p);break;case"YXY":i.set(d*M,l*g,d*y,l*p);break;case"ZYZ":i.set(d*y,d*M,l*g,l*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const af={DEG2RAD:Wr,RAD2DEG:jr,generateUUID:wr,clamp:mn,euclideanModulo:No,mapLinear:Vu,inverseLerp:Wu,lerp:Xr,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:ju,randInt:$u,randFloat:Ku,randFloatSpread:Zu,seededRandom:Ju,degToRad:Qu,radToDeg:ef,isPowerOfTwo:tf,ceilPowerOfTwo:nf,floorPowerOfTwo:rf,setQuaternionFromProperEuler:sf,normalize:dn,denormalize:mr};class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,s,a,c,l,d,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,d,p)}set(e,t,n,s,a,c,l,d,p){const g=this.elements;return g[0]=e,g[1]=s,g[2]=l,g[3]=t,g[4]=a,g[5]=d,g[6]=n,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[3],d=n[6],p=n[1],g=n[4],v=n[7],x=n[2],M=n[5],y=n[8],P=s[0],m=s[3],_=s[6],F=s[1],D=s[4],I=s[7],u=s[2],W=s[5],O=s[8];return a[0]=c*P+l*F+d*u,a[3]=c*m+l*D+d*W,a[6]=c*_+l*I+d*O,a[1]=p*P+g*F+v*u,a[4]=p*m+g*D+v*W,a[7]=p*_+g*I+v*O,a[2]=x*P+M*F+y*u,a[5]=x*m+M*D+y*W,a[8]=x*_+M*I+y*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],d=e[6],p=e[7],g=e[8];return t*c*g-t*l*p-n*a*g+n*l*d+s*a*p-s*c*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],d=e[6],p=e[7],g=e[8],v=g*c-l*p,x=l*d-g*a,M=p*a-c*d,y=t*v+n*x+s*M;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/y;return e[0]=v*P,e[1]=(s*p-g*n)*P,e[2]=(l*n-s*c)*P,e[3]=x*P,e[4]=(g*t-s*d)*P,e[5]=(s*a-l*t)*P,e[6]=M*P,e[7]=(n*d-p*t)*P,e[8]=(c*t-n*a)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,l){const d=Math.cos(a),p=Math.sin(a);return this.set(n*d,n*p,-n*(d*c+p*l)+c+e,-s*p,s*d,-s*(-p*c+d*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new ft;function fc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function of(){const i=$r("canvas");return i.style.display="block",i}const ol={};function zs(i){i in ol||(ol[i]=!0,console.warn(i))}function lf(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function cf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ll=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cl=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Ci]:{transfer:Gs,primaries:Vs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Zn]:{transfer:Bt,primaries:Vs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[js]:{transfer:Gs,primaries:Ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(cl),fromReference:i=>i.applyMatrix3(ll)},[Io]:{transfer:Bt,primaries:Ws,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(cl),fromReference:i=>i.applyMatrix3(ll).convertLinearToSRGB()}},ff=new Set([Ci,js]),Ct={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Br[e].toReference,s=Br[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Br[i].primaries},getTransfer:function(i){return i===Ti?Gs:Br[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Br[e].luminanceCoefficients)}};function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let nr;class hf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=$r("canvas")),nr.width=e.width,nr.height=e.height;const n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=xr(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let df=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,l=s.length;c<l;c++)s[c].isDataTexture?a.push(da(s[c].image)):a.push(da(s[c]))}else a=da(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pf=0;class gn extends Ar{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=Xi,s=Xi,a=Wn,c=qi,l=qn,d=pi,p=gn.DEFAULT_ANISOTROPY,g=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=wr(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=d,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Ql;gn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,s=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,p=d[0],g=d[4],v=d[8],x=d[1],M=d[5],y=d[9],P=d[2],m=d[6],_=d[10];if(Math.abs(g-x)<.01&&Math.abs(v-P)<.01&&Math.abs(y-m)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+P)<.1&&Math.abs(y+m)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,I=(M+1)/2,u=(_+1)/2,W=(g+x)/4,O=(v+P)/4,K=(y+m)/4;return D>I&&D>u?D<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(D),s=W/n,a=O/n):I>u?I<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(I),n=W/s,a=K/s):u<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(u),n=O/a,s=K/a),this.set(n,s,a,t),this}let F=Math.sqrt((m-y)*(m-y)+(v-P)*(v-P)+(x-g)*(x-g));return Math.abs(F)<.001&&(F=1),this.x=(m-y)/F,this.y=(v-P)/F,this.z=(x-g)/F,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mf extends Ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends mf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gf extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,l){let d=n[s+0],p=n[s+1],g=n[s+2],v=n[s+3];const x=a[c+0],M=a[c+1],y=a[c+2],P=a[c+3];if(l===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(l===1){e[t+0]=x,e[t+1]=M,e[t+2]=y,e[t+3]=P;return}if(v!==P||d!==x||p!==M||g!==y){let m=1-l;const _=d*x+p*M+g*y+v*P,F=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const u=Math.sqrt(D),W=Math.atan2(u,_*F);m=Math.sin(m*W)/u,l=Math.sin(l*W)/u}const I=l*F;if(d=d*m+x*I,p=p*m+M*I,g=g*m+y*I,v=v*m+P*I,m===1-l){const u=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=u,p*=u,g*=u,v*=u}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,s,a,c){const l=n[s],d=n[s+1],p=n[s+2],g=n[s+3],v=a[c],x=a[c+1],M=a[c+2],y=a[c+3];return e[t]=l*y+g*v+d*M-p*x,e[t+1]=d*y+g*x+p*v-l*M,e[t+2]=p*y+g*M+l*x-d*v,e[t+3]=g*y-l*v-d*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,l=Math.cos,d=Math.sin,p=l(n/2),g=l(s/2),v=l(a/2),x=d(n/2),M=d(s/2),y=d(a/2);switch(c){case"XYZ":this._x=x*g*v+p*M*y,this._y=p*M*v-x*g*y,this._z=p*g*y+x*M*v,this._w=p*g*v-x*M*y;break;case"YXZ":this._x=x*g*v+p*M*y,this._y=p*M*v-x*g*y,this._z=p*g*y-x*M*v,this._w=p*g*v+x*M*y;break;case"ZXY":this._x=x*g*v-p*M*y,this._y=p*M*v+x*g*y,this._z=p*g*y+x*M*v,this._w=p*g*v-x*M*y;break;case"ZYX":this._x=x*g*v-p*M*y,this._y=p*M*v+x*g*y,this._z=p*g*y-x*M*v,this._w=p*g*v+x*M*y;break;case"YZX":this._x=x*g*v+p*M*y,this._y=p*M*v+x*g*y,this._z=p*g*y-x*M*v,this._w=p*g*v-x*M*y;break;case"XZY":this._x=x*g*v-p*M*y,this._y=p*M*v-x*g*y,this._z=p*g*y+x*M*v,this._w=p*g*v+x*M*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],l=t[5],d=t[9],p=t[2],g=t[6],v=t[10],x=n+l+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-d)*M,this._y=(a-p)*M,this._z=(c-s)*M}else if(n>l&&n>v){const M=2*Math.sqrt(1+n-l-v);this._w=(g-d)/M,this._x=.25*M,this._y=(s+c)/M,this._z=(a+p)/M}else if(l>v){const M=2*Math.sqrt(1+l-n-v);this._w=(a-p)/M,this._x=(s+c)/M,this._y=.25*M,this._z=(d+g)/M}else{const M=2*Math.sqrt(1+v-n-l);this._w=(c-s)/M,this._x=(a+p)/M,this._y=(d+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,l=t._x,d=t._y,p=t._z,g=t._w;return this._x=n*g+c*l+s*p-a*d,this._y=s*g+c*d+a*l-n*p,this._z=a*g+c*p+n*d-s*l,this._w=c*g-n*l-s*d-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let l=c*e._w+n*e._x+s*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const d=1-l*l;if(d<=Number.EPSILON){const M=1-t;return this._w=M*c+t*this._w,this._x=M*n+t*this._x,this._y=M*s+t*this._y,this._z=M*a+t*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,l),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=n*v+this._x*x,this._y=s*v+this._y*x,this._z=a*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,n=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,l=e.z,d=e.w,p=2*(c*s-l*n),g=2*(l*t-a*s),v=2*(a*n-c*t);return this.x=t+d*p+c*v-l*g,this.y=n+d*g+l*p-a*v,this.z=s+d*v+a*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,l=t.y,d=t.z;return this.x=s*d-a*l,this.y=a*c-n*d,this.z=n*l-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new ne,ul=new Zr;class Jr{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=a.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,kn):kn.fromBufferAttribute(a,c),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),hs.subVectors(this.max,zr),ir.subVectors(e.a,zr),rr.subVectors(e.b,zr),sr.subVectors(e.c,zr),vi.subVectors(rr,ir),xi.subVectors(sr,rr),Ni.subVectors(ir,sr);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Ni.z,Ni.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Ni.z,0,-Ni.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Ni.y,Ni.x,0];return!ma(t,ir,rr,sr,hs)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,ir,rr,sr,hs))?!1:(ds.crossVectors(vi,xi),t=[ds.x,ds.y,ds.z],ma(t,ir,rr,sr,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],kn=new ne,fs=new Jr,ir=new ne,rr=new ne,sr=new ne,vi=new ne,xi=new ne,Ni=new ne,zr=new ne,hs=new ne,ds=new ne,Fi=new ne;function ma(i,e,t,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){Fi.fromArray(i,a);const l=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),d=e.dot(Fi),p=t.dot(Fi),g=n.dot(Fi);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>l)return!1}return!0}const _f=new Jr,Hr=new ne,ga=new ne;class $s{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_f.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(ga)),this.expandByPoint(Hr.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new ne,_a=new ne,ps=new ne,Mi=new ne,va=new ne,ms=new ne,xa=new ne;class pc{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_a.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(_a);const a=e.distanceTo(t)*.5,c=-this.direction.dot(ps),l=Mi.dot(this.direction),d=-Mi.dot(ps),p=Mi.lengthSq(),g=Math.abs(1-c*c);let v,x,M,y;if(g>0)if(v=c*d-l,x=c*l-d,y=a*g,v>=0)if(x>=-y)if(x<=y){const P=1/g;v*=P,x*=P,M=v*(v+c*x+2*l)+x*(c*v+x+2*d)+p}else x=a,v=Math.max(0,-(c*x+l)),M=-v*v+x*(x+2*d)+p;else x=-a,v=Math.max(0,-(c*x+l)),M=-v*v+x*(x+2*d)+p;else x<=-y?(v=Math.max(0,-(-c*a+l)),x=v>0?-a:Math.min(Math.max(-a,-d),a),M=-v*v+x*(x+2*d)+p):x<=y?(v=0,x=Math.min(Math.max(-a,-d),a),M=x*(x+2*d)+p):(v=Math.max(0,-(c*a+l)),x=v>0?a:Math.min(Math.max(-a,-d),a),M=-v*v+x*(x+2*d)+p);else x=c>0?-a:a,v=Math.max(0,-(c*x+l)),M=-v*v+x*(x+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(_a).addScaledVector(ps,x),M}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),l=n-c,d=n+c;return d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,l,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,s=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,s=(e.min.x-x.x)*p),g>=0?(a=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(a=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),v>=0?(l=(e.min.z-x.z)*v,d=(e.max.z-x.z)*v):(l=(e.max.z-x.z)*v,d=(e.min.z-x.z)*v),n>d||l>s)||((l>n||n!==n)&&(n=l),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,a){va.subVectors(t,e),ms.subVectors(n,e),xa.crossVectors(va,ms);let c=this.direction.dot(xa),l;if(c>0){if(s)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Mi.subVectors(this.origin,e);const d=l*this.direction.dot(ms.crossVectors(Mi,ms));if(d<0)return null;const p=l*this.direction.dot(va.cross(Mi));if(p<0||d+p>c)return null;const g=-l*Mi.dot(xa);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,n,s,a,c,l,d,p,g,v,x,M,y,P,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,d,p,g,v,x,M,y,P,m)}set(e,t,n,s,a,c,l,d,p,g,v,x,M,y,P,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=a,_[5]=c,_[9]=l,_[13]=d,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=y,_[11]=P,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ar.setFromMatrixColumn(e,0).length(),a=1/ar.setFromMatrixColumn(e,1).length(),c=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),d=Math.cos(s),p=Math.sin(s),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const x=c*g,M=c*v,y=l*g,P=l*v;t[0]=d*g,t[4]=-d*v,t[8]=p,t[1]=M+y*p,t[5]=x-P*p,t[9]=-l*d,t[2]=P-x*p,t[6]=y+M*p,t[10]=c*d}else if(e.order==="YXZ"){const x=d*g,M=d*v,y=p*g,P=p*v;t[0]=x+P*l,t[4]=y*l-M,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-l,t[2]=M*l-y,t[6]=P+x*l,t[10]=c*d}else if(e.order==="ZXY"){const x=d*g,M=d*v,y=p*g,P=p*v;t[0]=x-P*l,t[4]=-c*v,t[8]=y+M*l,t[1]=M+y*l,t[5]=c*g,t[9]=P-x*l,t[2]=-c*p,t[6]=l,t[10]=c*d}else if(e.order==="ZYX"){const x=c*g,M=c*v,y=l*g,P=l*v;t[0]=d*g,t[4]=y*p-M,t[8]=x*p+P,t[1]=d*v,t[5]=P*p+x,t[9]=M*p-y,t[2]=-p,t[6]=l*d,t[10]=c*d}else if(e.order==="YZX"){const x=c*d,M=c*p,y=l*d,P=l*p;t[0]=d*g,t[4]=P-x*v,t[8]=y*v+M,t[1]=v,t[5]=c*g,t[9]=-l*g,t[2]=-p*g,t[6]=M*v+y,t[10]=x-P*v}else if(e.order==="XZY"){const x=c*d,M=c*p,y=l*d,P=l*p;t[0]=d*g,t[4]=-v,t[8]=p*g,t[1]=x*v+P,t[5]=c*g,t[9]=M*v-y,t[2]=y*v-M,t[6]=l*g,t[10]=P*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vf,e,xf)}lookAt(e,t,n){const s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Si.crossVectors(n,Rn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Si.crossVectors(n,Rn)),Si.normalize(),gs.crossVectors(Rn,Si),s[0]=Si.x,s[4]=gs.x,s[8]=Rn.x,s[1]=Si.y,s[5]=gs.y,s[9]=Rn.y,s[2]=Si.z,s[6]=gs.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[4],d=n[8],p=n[12],g=n[1],v=n[5],x=n[9],M=n[13],y=n[2],P=n[6],m=n[10],_=n[14],F=n[3],D=n[7],I=n[11],u=n[15],W=s[0],O=s[4],K=s[8],ye=s[12],E=s[1],C=s[5],Q=s[9],ie=s[13],ue=s[2],me=s[6],se=s[10],pe=s[14],Y=s[3],Te=s[7],ve=s[11],Me=s[15];return a[0]=c*W+l*E+d*ue+p*Y,a[4]=c*O+l*C+d*me+p*Te,a[8]=c*K+l*Q+d*se+p*ve,a[12]=c*ye+l*ie+d*pe+p*Me,a[1]=g*W+v*E+x*ue+M*Y,a[5]=g*O+v*C+x*me+M*Te,a[9]=g*K+v*Q+x*se+M*ve,a[13]=g*ye+v*ie+x*pe+M*Me,a[2]=y*W+P*E+m*ue+_*Y,a[6]=y*O+P*C+m*me+_*Te,a[10]=y*K+P*Q+m*se+_*ve,a[14]=y*ye+P*ie+m*pe+_*Me,a[3]=F*W+D*E+I*ue+u*Y,a[7]=F*O+D*C+I*me+u*Te,a[11]=F*K+D*Q+I*se+u*ve,a[15]=F*ye+D*ie+I*pe+u*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],l=e[5],d=e[9],p=e[13],g=e[2],v=e[6],x=e[10],M=e[14],y=e[3],P=e[7],m=e[11],_=e[15];return y*(+a*d*v-s*p*v-a*l*x+n*p*x+s*l*M-n*d*M)+P*(+t*d*M-t*p*x+a*c*x-s*c*M+s*p*g-a*d*g)+m*(+t*p*v-t*l*M-a*c*v+n*c*M+a*l*g-n*p*g)+_*(-s*l*g-t*d*v+t*l*x+s*c*v-n*c*x+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],d=e[6],p=e[7],g=e[8],v=e[9],x=e[10],M=e[11],y=e[12],P=e[13],m=e[14],_=e[15],F=v*m*p-P*x*p+P*d*M-l*m*M-v*d*_+l*x*_,D=y*x*p-g*m*p-y*d*M+c*m*M+g*d*_-c*x*_,I=g*P*p-y*v*p+y*l*M-c*P*M-g*l*_+c*v*_,u=y*v*d-g*P*d-y*l*x+c*P*x+g*l*m-c*v*m,W=t*F+n*D+s*I+a*u;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/W;return e[0]=F*O,e[1]=(P*x*a-v*m*a-P*s*M+n*m*M+v*s*_-n*x*_)*O,e[2]=(l*m*a-P*d*a+P*s*p-n*m*p-l*s*_+n*d*_)*O,e[3]=(v*d*a-l*x*a-v*s*p+n*x*p+l*s*M-n*d*M)*O,e[4]=D*O,e[5]=(g*m*a-y*x*a+y*s*M-t*m*M-g*s*_+t*x*_)*O,e[6]=(y*d*a-c*m*a-y*s*p+t*m*p+c*s*_-t*d*_)*O,e[7]=(c*x*a-g*d*a+g*s*p-t*x*p-c*s*M+t*d*M)*O,e[8]=I*O,e[9]=(y*v*a-g*P*a-y*n*M+t*P*M+g*n*_-t*v*_)*O,e[10]=(c*P*a-y*l*a+y*n*p-t*P*p-c*n*_+t*l*_)*O,e[11]=(g*l*a-c*v*a-g*n*p+t*v*p+c*n*M-t*l*M)*O,e[12]=u*O,e[13]=(g*P*s-y*v*s+y*n*x-t*P*x-g*n*m+t*v*m)*O,e[14]=(y*l*s-c*P*s-y*n*d+t*P*d+c*n*m-t*l*m)*O,e[15]=(c*v*s-g*l*s+g*n*d-t*v*d-c*n*x+t*l*x)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,l=e.y,d=e.z,p=a*c,g=a*l;return this.set(p*c+n,p*l-s*d,p*d+s*l,0,p*l+s*d,g*l+n,g*d-s*c,0,p*d-s*l,g*d+s*c,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,l=t._z,d=t._w,p=a+a,g=c+c,v=l+l,x=a*p,M=a*g,y=a*v,P=c*g,m=c*v,_=l*v,F=d*p,D=d*g,I=d*v,u=n.x,W=n.y,O=n.z;return s[0]=(1-(P+_))*u,s[1]=(M+I)*u,s[2]=(y-D)*u,s[3]=0,s[4]=(M-I)*W,s[5]=(1-(x+_))*W,s[6]=(m+F)*W,s[7]=0,s[8]=(y+D)*O,s[9]=(m-F)*O,s[10]=(1-(x+P))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ar.set(s[0],s[1],s[2]).length();const c=ar.set(s[4],s[5],s[6]).length(),l=ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);const p=1/a,g=1/c,v=1/l;return Gn.elements[0]*=p,Gn.elements[1]*=p,Gn.elements[2]*=p,Gn.elements[4]*=g,Gn.elements[5]*=g,Gn.elements[6]*=g,Gn.elements[8]*=v,Gn.elements[9]*=v,Gn.elements[10]*=v,t.setFromRotationMatrix(Gn),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,s,a,c,l=di){const d=this.elements,p=2*a/(t-e),g=2*a/(n-s),v=(t+e)/(t-e),x=(n+s)/(n-s);let M,y;if(l===di)M=-(c+a)/(c-a),y=-2*c*a/(c-a);else if(l===Xs)M=-c/(c-a),y=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,a,c,l=di){const d=this.elements,p=1/(t-e),g=1/(n-s),v=1/(c-a),x=(t+e)*p,M=(n+s)*g;let y,P;if(l===di)y=(c+a)*v,P=-2*v;else if(l===Xs)y=a*v,P=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-M,d[2]=0,d[6]=0,d[10]=P,d[14]=-y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ar=new ne,Gn=new qt,vf=new ne(0,0,0),xf=new ne(1,1,1),Si=new ne,gs=new ne,Rn=new ne,fl=new qt,hl=new Zr;class mi{constructor(e=0,t=0,n=0,s=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],l=s[8],d=s[1],p=s[5],g=s[9],v=s[2],x=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(mn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-mn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mf=0;const dl=new ne,or=new Zr,oi=new qt,_s=new ne,kr=new ne,Sf=new ne,yf=new Zr,pl=new ne(1,0,0),ml=new ne(0,1,0),gl=new ne(0,0,1),_l={type:"added"},Ef={type:"removed"},lr={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Mn extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new ne,t=new mi,n=new Zr,s=new ne(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new ft}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(kr,_s,this.up):oi.lookAt(_s,kr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),or.setFromRotationMatrix(oi),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,p=this.material.length;d<p;d++)l.push(a(e.materials,this.material[d]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];s.animations.push(a(e.animations,d))}}if(t){const l=c(e.geometries),d=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),M=c(e.animations),y=c(e.nodes);l.length>0&&(n.geometries=l),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),x.length>0&&(n.skeletons=x),M.length>0&&(n.animations=M),y.length>0&&(n.nodes=y)}return n.object=s,n;function c(l){const d=[];for(const p in l){const g=l[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mn.DEFAULT_UP=new ne(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new ne,li=new ne,Sa=new ne,ci=new ne,cr=new ne,ur=new ne,vl=new ne,ya=new ne,Ea=new ne,Ta=new ne,ba=new Xt,Aa=new Xt,wa=new Xt;class Xn{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Vn.subVectors(s,t),li.subVectors(n,t),Sa.subVectors(e,t);const c=Vn.dot(Vn),l=Vn.dot(li),d=Vn.dot(Sa),p=li.dot(li),g=li.dot(Sa),v=c*p-l*l;if(v===0)return a.set(0,0,0),null;const x=1/v,M=(p*d-l*g)*x,y=(c*g-l*d)*x;return a.set(1-M-y,y,M)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,a,c,l,d){return this.getBarycoord(e,t,n,s,ci)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ci.x),d.addScaledVector(c,ci.y),d.addScaledVector(l,ci.z),d)}static getInterpolatedAttribute(e,t,n,s,a,c){return ba.setScalar(0),Aa.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,n),wa.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(ba,a.x),c.addScaledVector(Aa,a.y),c.addScaledVector(wa,a.z),c}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),li.subVectors(e,t),Vn.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Vn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,l;cr.subVectors(s,n),ur.subVectors(a,n),ya.subVectors(e,n);const d=cr.dot(ya),p=ur.dot(ya);if(d<=0&&p<=0)return t.copy(n);Ea.subVectors(e,s);const g=cr.dot(Ea),v=ur.dot(Ea);if(g>=0&&v<=g)return t.copy(s);const x=d*v-g*p;if(x<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(n).addScaledVector(cr,c);Ta.subVectors(e,a);const M=cr.dot(Ta),y=ur.dot(Ta);if(y>=0&&M<=y)return t.copy(a);const P=M*p-d*y;if(P<=0&&p>=0&&y<=0)return l=p/(p-y),t.copy(n).addScaledVector(ur,l);const m=g*y-M*v;if(m<=0&&v-g>=0&&M-y>=0)return vl.subVectors(a,s),l=(v-g)/(v-g+(M-y)),t.copy(s).addScaledVector(vl,l);const _=1/(m+P+x);return c=P*_,l=x*_,t.copy(n).addScaledVector(cr,c).addScaledVector(ur,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=No(e,1),t=mn(t,0,1),n=mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=Ra(c,a,e+1/3),this.g=Ra(c,a,e),this.b=Ra(c,a,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Zn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],l=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const n=gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Ct.fromWorkingColorSpace(un.copy(this),e),Math.round(mn(un.r*255,0,255))*65536+Math.round(mn(un.g*255,0,255))*256+Math.round(mn(un.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(un.copy(this),t);const n=un.r,s=un.g,a=un.b,c=Math.max(n,s,a),l=Math.min(n,s,a);let d,p;const g=(l+c)/2;if(l===c)d=0,p=0;else{const v=c-l;switch(p=g<=.5?v/(c+l):v/(2-c-l),c){case n:d=(s-a)/v+(s<a?6:0);break;case s:d=(a-n)/v+2;break;case a:d=(n-s)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Zn){Ct.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,s=un.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(vs);const n=Xr(yi.h,vs.h,t),s=Xr(yi.s,vs.s,t),a=Xr(yi.l,vs.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Pt;Pt.NAMES=gc;let Tf=0;class Qr extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=_r,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qr extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ne,xs=new yt;class Nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),s=dn(s,this.array),a=dn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),e}}class _c extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vc extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qn extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bf=0;const Ln=new qt,Ca=new Mn,fr=new ne,Cn=new Jr,Gr=new Jr,sn=new ne;class ei extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?vc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ft().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];Gr.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(Cn.min,Gr.min),Cn.expandByPoint(sn),sn.addVectors(Cn.max,Gr.max),Cn.expandByPoint(sn)):(Cn.expandByPoint(Gr.min),Cn.expandByPoint(Gr.max))}Cn.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)sn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],d=this.morphTargetsRelative;for(let p=0,g=l.count;p<g;p++)sn.fromBufferAttribute(l,p),d&&(fr.fromBufferAttribute(e,p),sn.add(fr)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],d=[];for(let K=0;K<n.count;K++)l[K]=new ne,d[K]=new ne;const p=new ne,g=new ne,v=new ne,x=new yt,M=new yt,y=new yt,P=new ne,m=new ne;function _(K,ye,E){p.fromBufferAttribute(n,K),g.fromBufferAttribute(n,ye),v.fromBufferAttribute(n,E),x.fromBufferAttribute(a,K),M.fromBufferAttribute(a,ye),y.fromBufferAttribute(a,E),g.sub(p),v.sub(p),M.sub(x),y.sub(x);const C=1/(M.x*y.y-y.x*M.y);isFinite(C)&&(P.copy(g).multiplyScalar(y.y).addScaledVector(v,-M.y).multiplyScalar(C),m.copy(v).multiplyScalar(M.x).addScaledVector(g,-y.x).multiplyScalar(C),l[K].add(P),l[ye].add(P),l[E].add(P),d[K].add(m),d[ye].add(m),d[E].add(m))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,ye=F.length;K<ye;++K){const E=F[K],C=E.start,Q=E.count;for(let ie=C,ue=C+Q;ie<ue;ie+=3)_(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const D=new ne,I=new ne,u=new ne,W=new ne;function O(K){u.fromBufferAttribute(s,K),W.copy(u);const ye=l[K];D.copy(ye),D.sub(u.multiplyScalar(u.dot(ye))).normalize(),I.crossVectors(W,ye);const C=I.dot(d[K])<0?-1:1;c.setXYZW(K,D.x,D.y,D.z,C)}for(let K=0,ye=F.length;K<ye;++K){const E=F[K],C=E.start,Q=E.count;for(let ie=C,ue=C+Q;ie<ue;ie+=3)O(e.getX(ie+0)),O(e.getX(ie+1)),O(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,M=n.count;x<M;x++)n.setXYZ(x,0,0,0);const s=new ne,a=new ne,c=new ne,l=new ne,d=new ne,p=new ne,g=new ne,v=new ne;if(e)for(let x=0,M=e.count;x<M;x+=3){const y=e.getX(x+0),P=e.getX(x+1),m=e.getX(x+2);s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,P),c.fromBufferAttribute(t,m),g.subVectors(c,a),v.subVectors(s,a),g.cross(v),l.fromBufferAttribute(n,y),d.fromBufferAttribute(n,P),p.fromBufferAttribute(n,m),l.add(g),d.add(g),p.add(g),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(P,d.x,d.y,d.z),n.setXYZ(m,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)s.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,a),v.subVectors(s,a),g.cross(v),n.setXYZ(x+0,g.x,g.y,g.z),n.setXYZ(x+1,g.x,g.y,g.z),n.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(l,d){const p=l.array,g=l.itemSize,v=l.normalized,x=new p.constructor(d.length*g);let M=0,y=0;for(let P=0,m=d.length;P<m;P++){l.isInterleavedBufferAttribute?M=d[P]*l.data.stride+l.offset:M=d[P]*g;for(let _=0;_<g;_++)x[y++]=p[M++]}return new Nn(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,n=this.index.array,s=this.attributes;for(const l in s){const d=s[l],p=e(d,n);t.setAttribute(l,p)}const a=this.morphAttributes;for(const l in a){const d=[],p=a[l];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=e(x,n);d.push(M)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,d=c.length;l<d;l++){const p=c[l];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const p=n[d];e.data.attributes[d]=p.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(s[d]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const p in s){const g=s[p];this.setAttribute(p,g.clone(t))}const a=e.morphAttributes;for(const p in a){const g=[],v=a[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new qt,Oi=new pc,Ms=new $s,Ml=new ne,Ss=new ne,ys=new ne,Es=new ne,Pa=new ne,Ts=new ne,Sl=new ne,bs=new ne;class In extends Mn{constructor(e=new ei,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(a&&l){Ts.set(0,0,0);for(let d=0,p=a.length;d<p;d++){const g=l[d],v=a[d];g!==0&&(Pa.fromBufferAttribute(v,e),c?Ts.addScaledVector(Pa,g):Ts.addScaledVector(Pa.sub(t),g))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(a),Oi.copy(e.ray).recast(e.near),!(Ms.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Ms,Ml)===null||Oi.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(xl.copy(a).invert(),Oi.copy(e.ray).applyMatrix4(xl),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,l=a.index,d=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,x=a.groups,M=a.drawRange;if(l!==null)if(Array.isArray(c))for(let y=0,P=x.length;y<P;y++){const m=x[y],_=c[m.materialIndex],F=Math.max(m.start,M.start),D=Math.min(l.count,Math.min(m.start+m.count,M.start+M.count));for(let I=F,u=D;I<u;I+=3){const W=l.getX(I),O=l.getX(I+1),K=l.getX(I+2);s=As(this,_,e,n,p,g,v,W,O,K),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const y=Math.max(0,M.start),P=Math.min(l.count,M.start+M.count);for(let m=y,_=P;m<_;m+=3){const F=l.getX(m),D=l.getX(m+1),I=l.getX(m+2);s=As(this,c,e,n,p,g,v,F,D,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let y=0,P=x.length;y<P;y++){const m=x[y],_=c[m.materialIndex],F=Math.max(m.start,M.start),D=Math.min(d.count,Math.min(m.start+m.count,M.start+M.count));for(let I=F,u=D;I<u;I+=3){const W=I,O=I+1,K=I+2;s=As(this,_,e,n,p,g,v,W,O,K),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const y=Math.max(0,M.start),P=Math.min(d.count,M.start+M.count);for(let m=y,_=P;m<_;m+=3){const F=m,D=m+1,I=m+2;s=As(this,c,e,n,p,g,v,F,D,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Af(i,e,t,n,s,a,c,l){let d;if(e.side===xn?d=n.intersectTriangle(c,a,s,!0,l):d=n.intersectTriangle(s,a,c,e.side===wi,l),d===null)return null;bs.copy(l),bs.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(bs);return p<t.near||p>t.far?null:{distance:p,point:bs.clone(),object:i}}function As(i,e,t,n,s,a,c,l,d,p){i.getVertexPosition(l,Ss),i.getVertexPosition(d,ys),i.getVertexPosition(p,Es);const g=Af(i,e,t,n,Ss,ys,Es,Sl);if(g){const v=new ne;Xn.getBarycoord(Sl,Ss,ys,Es,v),s&&(g.uv=Xn.getInterpolatedAttribute(s,l,d,p,v,new yt)),a&&(g.uv1=Xn.getInterpolatedAttribute(a,l,d,p,v,new yt)),c&&(g.normal=Xn.getInterpolatedAttribute(c,l,d,p,v,new ne),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const x={a:l,b:d,c:p,normal:new ne,materialIndex:0};Xn.getNormal(Ss,ys,Es,x.normal),g.face=x,g.barycoord=v}return g}class Rr extends ei{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const l=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],p=[],g=[],v=[];let x=0,M=0;y("z","y","x",-1,-1,n,t,e,c,a,0),y("z","y","x",1,-1,n,t,-e,c,a,1),y("x","z","y",1,1,e,n,t,s,c,2),y("x","z","y",1,-1,e,n,-t,s,c,3),y("x","y","z",1,-1,e,t,n,s,a,4),y("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new Qn(p,3)),this.setAttribute("normal",new Qn(g,3)),this.setAttribute("uv",new Qn(v,2));function y(P,m,_,F,D,I,u,W,O,K,ye){const E=I/O,C=u/K,Q=I/2,ie=u/2,ue=W/2,me=O+1,se=K+1;let pe=0,Y=0;const Te=new ne;for(let ve=0;ve<se;ve++){const Me=ve*C-ie;for(let dt=0;dt<me;dt++){const Mt=dt*E-Q;Te[P]=Mt*F,Te[m]=Me*D,Te[_]=ue,p.push(Te.x,Te.y,Te.z),Te[P]=0,Te[m]=0,Te[_]=W>0?1:-1,g.push(Te.x,Te.y,Te.z),v.push(dt/O),v.push(1-ve/K),pe+=1}}for(let ve=0;ve<K;ve++)for(let Me=0;Me<O;Me++){const dt=x+Me+me*ve,Mt=x+Me+me*(ve+1),ae=x+(Me+1)+me*(ve+1),_e=x+(Me+1)+me*ve;d.push(dt,Mt,_e),d.push(Mt,ae,_e),Y+=6}l.addGroup(M,Y,ye),M+=Y,x+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=br(i[t]);for(const s in n)e[s]=n[s]}return e}function wf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Rf={clone:br,merge:pn};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new ne,yl=new yt,El=new yt;class Dn extends Mc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,yl,El),t.subVectors(El,yl)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*n/p,s*=c.width/d,n*=c.height/p}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,dr=1;class Lf extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(hr,dr,e,t);s.layers=this.layers,this.add(s);const a=new Dn(hr,dr,e,t);a.layers=this.layers,this.add(a);const c=new Dn(hr,dr,e,t);c.layers=this.layers,this.add(c);const l=new Dn(hr,dr,e,t);l.layers=this.layers,this.add(l);const d=new Dn(hr,dr,e,t);d.layers=this.layers,this.add(d);const p=new Dn(hr,dr,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,l,d]=t;for(const p of t)this.remove(p);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,l,d,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,p),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,s),e.render(t,g),e.setRenderTarget(v,x,M),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Sc extends gn{constructor(e,t,n,s,a,c,l,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,s,a,c,l,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Df extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rr(5,5,5),a=new Ri({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:bi});a.uniforms.tEquirect.value=t;const c=new In(s,a),l=t.minFilter;return t.minFilter===qi&&(t.minFilter=Wn),new Lf(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}const La=new ne,Uf=new ne,If=new ft;class ki{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=La.subVectors(n,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||If.getNormalMatrix(e),s=this.coplanarPoint(La).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new $s,ws=new ne;class yc{constructor(e=new ki,t=new ki,n=new ki,s=new ki,a=new ki,c=new ki){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){const n=this.planes,s=e.elements,a=s[0],c=s[1],l=s[2],d=s[3],p=s[4],g=s[5],v=s[6],x=s[7],M=s[8],y=s[9],P=s[10],m=s[11],_=s[12],F=s[13],D=s[14],I=s[15];if(n[0].setComponents(d-a,x-p,m-M,I-_).normalize(),n[1].setComponents(d+a,x+p,m+M,I+_).normalize(),n[2].setComponents(d+c,x+g,m+y,I+F).normalize(),n[3].setComponents(d-c,x-g,m-y,I-F).normalize(),n[4].setComponents(d-l,x-v,m-P,I-D).normalize(),t===di)n[5].setComponents(d+l,x+v,m+P,I+D).normalize();else if(t===Xs)n[5].setComponents(l,v,P,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ws.x=s.normal.x>0?e.max.x:e.min.x,ws.y=s.normal.y>0?e.max.y:e.min.y,ws.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let i=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Nf(i){const e=new WeakMap;function t(l,d){const p=l.array,g=l.usage,v=p.byteLength,x=i.createBuffer();i.bindBuffer(d,x),i.bufferData(d,p,g),l.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(p instanceof Uint16Array)l.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,d,p){const g=d.array,v=d.updateRanges;if(i.bindBuffer(p,l),v.length===0)i.bufferSubData(p,0,g);else{v.sort((M,y)=>M.start-y.start);let x=0;for(let M=1;M<v.length;M++){const y=v[x],P=v[M];P.start<=y.start+y.count+1?y.count=Math.max(y.count,P.start+P.count-y.start):(++x,v[x]=P)}v.length=x+1;for(let M=0,y=v.length;M<y;M++){const P=v[M];i.bufferSubData(p,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=e.get(l);d&&(i.deleteBuffer(d.buffer),e.delete(l))}function c(l,d){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const g=e.get(l);(!g||g.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const p=e.get(l);if(p===void 0)e.set(l,t(l,d));else if(p.version<l.version){if(p.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,l,d),p.version=l.version}}return{get:s,remove:a,update:c}}class Ks extends ei{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,l=Math.floor(n),d=Math.floor(s),p=l+1,g=d+1,v=e/l,x=t/d,M=[],y=[],P=[],m=[];for(let _=0;_<g;_++){const F=_*x-c;for(let D=0;D<p;D++){const I=D*v-a;y.push(I,-F,0),P.push(0,0,1),m.push(D/l),m.push(1-_/d)}}for(let _=0;_<d;_++)for(let F=0;F<l;F++){const D=F+p*_,I=F+p*(_+1),u=F+1+p*(_+1),W=F+1+p*_;M.push(D,I,W),M.push(I,u,W)}this.setIndex(M),this.setAttribute("position",new Qn(y,3)),this.setAttribute("normal",new Qn(P,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
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
#endif`,Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
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
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Kf=`#ifdef USE_BUMPMAP
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sh=`#define PI 3.141592653589793
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
} // validated`,ah=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oh=`vec3 transformedNormal = objectNormal;
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
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",dh=`
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
}`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eh=`#ifdef USE_GRADIENTMAP
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
}`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
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
#endif`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
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
#endif`,Ih=`struct PhysicalMaterial {
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
}`,Nh=`
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
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xh=`#if defined( USE_POINTS_UV )
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
#endif`,qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$h=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`#ifdef USE_MORPHTARGETS
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
#endif`,Jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rd=`#ifdef USE_NORMALMAP
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
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
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
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
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
}`,Gd=`#if DEPTH_PACKING == 3200
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
}`,Vd=`#define DISTANCE
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
}`,Wd=`#define DISTANCE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`uniform float scale;
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
}`,jd=`uniform vec3 diffuse;
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
}`,$d=`#include <common>
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Zd=`#define LAMBERT
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define MATCAP
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
}`,ep=`#define MATCAP
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
}`,tp=`#define NORMAL
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
}`,np=`#define NORMAL
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
}`,ip=`#define PHONG
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
}`,rp=`#define PHONG
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
}`,sp=`#define STANDARD
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
}`,ap=`#define STANDARD
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
}`,op=`#define TOON
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
}`,lp=`#define TOON
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
}`,cp=`uniform float size;
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
}`,up=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,hp=`uniform vec3 color;
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
}`,dp=`uniform float rotation;
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
}`,pp=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Ff,alphahash_pars_fragment:Of,alphamap_fragment:Bf,alphamap_pars_fragment:zf,alphatest_fragment:Hf,alphatest_pars_fragment:kf,aomap_fragment:Gf,aomap_pars_fragment:Vf,batching_pars_vertex:Wf,batching_vertex:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:jf,iridescence_fragment:$f,bumpmap_pars_fragment:Kf,clipping_planes_fragment:Zf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:eh,color_fragment:th,color_pars_fragment:nh,color_pars_vertex:ih,color_vertex:rh,common:sh,cube_uv_reflection_fragment:ah,defaultnormal_vertex:oh,displacementmap_pars_vertex:lh,displacementmap_vertex:ch,emissivemap_fragment:uh,emissivemap_pars_fragment:fh,colorspace_fragment:hh,colorspace_pars_fragment:dh,envmap_fragment:ph,envmap_common_pars_fragment:mh,envmap_pars_fragment:gh,envmap_pars_vertex:_h,envmap_physical_pars_fragment:Rh,envmap_vertex:vh,fog_vertex:xh,fog_pars_vertex:Mh,fog_fragment:Sh,fog_pars_fragment:yh,gradientmap_pars_fragment:Eh,lightmap_pars_fragment:Th,lights_lambert_fragment:bh,lights_lambert_pars_fragment:Ah,lights_pars_begin:wh,lights_toon_fragment:Ch,lights_toon_pars_fragment:Ph,lights_phong_fragment:Lh,lights_phong_pars_fragment:Dh,lights_physical_fragment:Uh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Nh,lights_fragment_maps:Fh,lights_fragment_end:Oh,logdepthbuf_fragment:Bh,logdepthbuf_pars_fragment:zh,logdepthbuf_pars_vertex:Hh,logdepthbuf_vertex:kh,map_fragment:Gh,map_pars_fragment:Vh,map_particle_fragment:Wh,map_particle_pars_fragment:Xh,metalnessmap_fragment:qh,metalnessmap_pars_fragment:Yh,morphinstance_vertex:jh,morphcolor_vertex:$h,morphnormal_vertex:Kh,morphtarget_pars_vertex:Zh,morphtarget_vertex:Jh,normal_fragment_begin:Qh,normal_fragment_maps:ed,normal_pars_fragment:td,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:ad,clearcoat_pars_fragment:od,iridescence_pars_fragment:ld,opaque_fragment:cd,packing:ud,premultiplied_alpha_fragment:fd,project_vertex:hd,dithering_fragment:dd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:vd,shadowmap_vertex:xd,shadowmask_pars_fragment:Md,skinbase_vertex:Sd,skinning_pars_vertex:yd,skinning_vertex:Ed,skinnormal_vertex:Td,specularmap_fragment:bd,specularmap_pars_fragment:Ad,tonemapping_fragment:wd,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Dd,uv_vertex:Ud,worldpos_vertex:Id,background_vert:Nd,background_frag:Fd,backgroundCube_vert:Od,backgroundCube_frag:Bd,cube_vert:zd,cube_frag:Hd,depth_vert:kd,depth_frag:Gd,distanceRGBA_vert:Vd,distanceRGBA_frag:Wd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:jd,meshbasic_vert:$d,meshbasic_frag:Kd,meshlambert_vert:Zd,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:ep,meshnormal_vert:tp,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:rp,meshphysical_vert:sp,meshphysical_frag:ap,meshtoon_vert:op,meshtoon_frag:lp,points_vert:cp,points_frag:up,shadow_vert:fp,shadow_frag:hp,sprite_vert:dp,sprite_frag:pp},Le={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Jn={basic:{uniforms:pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:pn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:pn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:pn([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:pn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:pn([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:pn([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:pn([Le.common,Le.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:pn([Le.lights,Le.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Jn.physical={uniforms:pn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Rs={r:0,b:0,g:0},zi=new mi,mp=new qt;function gp(i,e,t,n,s,a,c){const l=new Pt(0);let d=a===!0?0:1,p,g,v=null,x=0,M=null;function y(F){let D=F.isScene===!0?F.background:null;return D&&D.isTexture&&(D=(F.backgroundBlurriness>0?t:e).get(D)),D}function P(F){let D=!1;const I=y(F);I===null?_(l,d):I&&I.isColor&&(_(I,1),D=!0);const u=i.xr.getEnvironmentBlendMode();u==="additive"?n.buffers.color.setClear(0,0,0,1,c):u==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(F,D){const I=y(D);I&&(I.isCubeTexture||I.mapping===Ys)?(g===void 0&&(g=new In(new Rr(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:br(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(u,W,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),zi.copy(D.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(zi)),g.material.toneMapped=Ct.getTransfer(I.colorSpace)!==Bt,(v!==I||x!==I.version||M!==i.toneMapping)&&(g.material.needsUpdate=!0,v=I,x=I.version,M=i.toneMapping),g.layers.enableAll(),F.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new In(new Ks(2,2),new Ri({name:"BackgroundMaterial",uniforms:br(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(I.colorSpace)!==Bt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||x!==I.version||M!==i.toneMapping)&&(p.material.needsUpdate=!0,v=I,x=I.version,M=i.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function _(F,D){F.getRGB(Rs,xc(i)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,D,c)}return{getClearColor:function(){return l},setClearColor:function(F,D=1){l.set(F),d=D,_(l,d)},getClearAlpha:function(){return d},setClearAlpha:function(F){d=F,_(l,d)},render:P,addToRenderList:m}}function _p(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=x(null);let a=s,c=!1;function l(E,C,Q,ie,ue){let me=!1;const se=v(ie,Q,C);a!==se&&(a=se,p(a.object)),me=M(E,ie,Q,ue),me&&y(E,ie,Q,ue),ue!==null&&e.update(ue,i.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,I(E,C,Q,ie),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return i.createVertexArray()}function p(E){return i.bindVertexArray(E)}function g(E){return i.deleteVertexArray(E)}function v(E,C,Q){const ie=Q.wireframe===!0;let ue=n[E.id];ue===void 0&&(ue={},n[E.id]=ue);let me=ue[C.id];me===void 0&&(me={},ue[C.id]=me);let se=me[ie];return se===void 0&&(se=x(d()),me[ie]=se),se}function x(E){const C=[],Q=[],ie=[];for(let ue=0;ue<t;ue++)C[ue]=0,Q[ue]=0,ie[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Q,attributeDivisors:ie,object:E,attributes:{},index:null}}function M(E,C,Q,ie){const ue=a.attributes,me=C.attributes;let se=0;const pe=Q.getAttributes();for(const Y in pe)if(pe[Y].location>=0){const ve=ue[Y];let Me=me[Y];if(Me===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;se++}return a.attributesNum!==se||a.index!==ie}function y(E,C,Q,ie){const ue={},me=C.attributes;let se=0;const pe=Q.getAttributes();for(const Y in pe)if(pe[Y].location>=0){let ve=me[Y];ve===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),ue[Y]=Me,se++}a.attributes=ue,a.attributesNum=se,a.index=ie}function P(){const E=a.newAttributes;for(let C=0,Q=E.length;C<Q;C++)E[C]=0}function m(E){_(E,0)}function _(E,C){const Q=a.newAttributes,ie=a.enabledAttributes,ue=a.attributeDivisors;Q[E]=1,ie[E]===0&&(i.enableVertexAttribArray(E),ie[E]=1),ue[E]!==C&&(i.vertexAttribDivisor(E,C),ue[E]=C)}function F(){const E=a.newAttributes,C=a.enabledAttributes;for(let Q=0,ie=C.length;Q<ie;Q++)C[Q]!==E[Q]&&(i.disableVertexAttribArray(Q),C[Q]=0)}function D(E,C,Q,ie,ue,me,se){se===!0?i.vertexAttribIPointer(E,C,Q,ue,me):i.vertexAttribPointer(E,C,Q,ie,ue,me)}function I(E,C,Q,ie){P();const ue=ie.attributes,me=Q.getAttributes(),se=C.defaultAttributeValues;for(const pe in me){const Y=me[pe];if(Y.location>=0){let Te=ue[pe];if(Te===void 0&&(pe==="instanceMatrix"&&E.instanceMatrix&&(Te=E.instanceMatrix),pe==="instanceColor"&&E.instanceColor&&(Te=E.instanceColor)),Te!==void 0){const ve=Te.normalized,Me=Te.itemSize,dt=e.get(Te);if(dt===void 0)continue;const Mt=dt.buffer,ae=dt.type,_e=dt.bytesPerElement,Pe=ae===i.INT||ae===i.UNSIGNED_INT||Te.gpuType===Ro;if(Te.isInterleavedBufferAttribute){const we=Te.data,Ye=we.stride,Ke=Te.offset;if(we.isInstancedInterleavedBuffer){for(let et=0;et<Y.locationSize;et++)_(Y.location+et,we.meshPerAttribute);E.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let et=0;et<Y.locationSize;et++)m(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let et=0;et<Y.locationSize;et++)D(Y.location+et,Me/Y.locationSize,ae,ve,Ye*_e,(Ke+Me/Y.locationSize*et)*_e,Pe)}else{if(Te.isInstancedBufferAttribute){for(let we=0;we<Y.locationSize;we++)_(Y.location+we,Te.meshPerAttribute);E.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let we=0;we<Y.locationSize;we++)m(Y.location+we);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let we=0;we<Y.locationSize;we++)D(Y.location+we,Me/Y.locationSize,ae,ve,Me*_e,Me/Y.locationSize*we*_e,Pe)}}else if(se!==void 0){const ve=se[pe];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(Y.location,ve);break;case 3:i.vertexAttrib3fv(Y.location,ve);break;case 4:i.vertexAttrib4fv(Y.location,ve);break;default:i.vertexAttrib1fv(Y.location,ve)}}}}F()}function u(){K();for(const E in n){const C=n[E];for(const Q in C){const ie=C[Q];for(const ue in ie)g(ie[ue].object),delete ie[ue];delete C[Q]}delete n[E]}}function W(E){if(n[E.id]===void 0)return;const C=n[E.id];for(const Q in C){const ie=C[Q];for(const ue in ie)g(ie[ue].object),delete ie[ue];delete C[Q]}delete n[E.id]}function O(E){for(const C in n){const Q=n[C];if(Q[E.id]===void 0)continue;const ie=Q[E.id];for(const ue in ie)g(ie[ue].object),delete ie[ue];delete Q[E.id]}}function K(){ye(),c=!0,a!==s&&(a=s,p(a.object))}function ye(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:K,resetDefaultState:ye,dispose:u,releaseStatesOfGeometry:W,releaseStatesOfProgram:O,initAttributes:P,enableAttribute:m,disableUnusedAttributes:F}}function vp(i,e,t){let n;function s(p){n=p}function a(p,g){i.drawArrays(n,p,g),t.update(g,n,1)}function c(p,g,v){v!==0&&(i.drawArraysInstanced(n,p,g,v),t.update(g,n,v))}function l(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,g,0,v);let M=0;for(let y=0;y<v;y++)M+=g[y];t.update(M,n,1)}function d(p,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<p.length;y++)c(p[y],g[y],x[y]);else{M.multiDrawArraysInstancedWEBGL(n,p,0,g,0,x,0,v);let y=0;for(let P=0;P<v;P++)y+=g[P];for(let P=0;P<x.length;P++)t.update(y,n,x[P])}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function xp(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==qn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){const K=O===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==pi&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==hi&&!K)}function d(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const O=e.get("EXT_clip_control");O.clipControlEXT(O.LOWER_LEFT_EXT,O.ZERO_TO_ONE_EXT)}const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),F=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),u=y>0,W=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:l,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:y,maxTextureSize:P,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:F,maxVaryings:D,maxFragmentUniforms:I,vertexTextures:u,maxSamples:W}}function Mp(i){const e=this;let t=null,n=0,s=!1,a=!1;const c=new ki,l=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||n!==0||s;return s=x,n=v.length,M},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,M){const y=v.clippingPlanes,P=v.clipIntersection,m=v.clipShadows,_=i.get(v);if(!s||y===null||y.length===0||a&&!m)a?g(null):p();else{const F=a?0:n,D=F*4;let I=_.clippingState||null;d.value=I,I=g(y,x,D,M);for(let u=0;u!==D;++u)I[u]=t[u];_.clippingState=I,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=F}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(v,x,M,y){const P=v!==null?v.length:0;let m=null;if(P!==0){if(m=d.value,y!==!0||m===null){const _=M+P*4,F=x.matrixWorldInverse;l.getNormalMatrix(F),(m===null||m.length<_)&&(m=new Float32Array(_));for(let D=0,I=M;D!==P;++D,I+=4)c.copy(v[D]).applyMatrix4(F,l),c.normal.toArray(m,I),m[I+3]=c.constant}d.value=m,d.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,m}}function Sp(i){let e=new WeakMap;function t(c,l){return l===ja?c.mapping=Sr:l===$a&&(c.mapping=yr),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===ja||l===$a)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new Df(d.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",s),t(p.texture,c.mapping)}else return null}}return c}function s(c){const l=c.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class yp extends Mc{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,l=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,c=a+p*this.view.width,l-=g*this.view.offsetY,d=l-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,Tl=[.125,.215,.35,.446,.526,.582],Wi=20,Da=new yp,bl=new Pt;let Ua=null,Ia=0,Na=0,Fa=!1;const Gi=(1+Math.sqrt(5))/2,pr=1/Gi,Al=[new ne(-Gi,pr,0),new ne(Gi,pr,0),new ne(-pr,0,Gi),new ne(pr,0,Gi),new ne(0,Gi,-pr),new ne(0,Gi,pr),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ua=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,Ia,Na),this._renderer.xr.enabled=Fa,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Kr,format:qn,colorSpace:Ci,depthBuffer:!1},s=Rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(a)),this._blurMaterial=Tp(a,e,t)}return s}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,s){const l=new Dn(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(bl),g.toneMapping=Ai,g.autoClear=!1;const M=new qr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),y=new In(new Rr,M);let P=!1;const m=e.background;m?m.isColor&&(M.color.copy(m),e.background=null,P=!0):(M.color.copy(bl),P=!0);for(let _=0;_<6;_++){const F=_%3;F===0?(l.up.set(0,d[_],0),l.lookAt(p[_],0,0)):F===1?(l.up.set(0,0,d[_]),l.lookAt(0,p[_],0)):(l.up.set(0,d[_],0),l.lookAt(0,0,p[_]));const D=this._cubeSize;Cs(s,F*D,_>2?D:0,D,D),g.setRenderTarget(s),P&&g.render(y,l),g.render(e,l)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Sr||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new In(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const d=this._cubeSize;Cs(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,Da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=Al[(s-a-1)%Al.length];this._blur(e,a-1,a,c,l)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,l){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new In(this._lodPlanes[s],p),x=p.uniforms,M=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*M):2*Math.PI/(2*Wi-1),P=a/y,m=isFinite(a)?1+Math.floor(g*P):Wi;m>Wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const _=[];let F=0;for(let O=0;O<Wi;++O){const K=O/P,ye=Math.exp(-K*K/2);_.push(ye),O===0?F+=ye:O<m&&(F+=2*ye)}for(let O=0;O<_.length;O++)_[O]=_[O]/F;x.envMap.value=e.texture,x.samples.value=m,x.weights.value=_,x.latitudinal.value=c==="latitudinal",l&&(x.poleAxis.value=l);const{_lodMax:D}=this;x.dTheta.value=y,x.mipInt.value=D-n;const I=this._sizeLods[s],u=3*I*(s>D-gr?s-D+gr:0),W=4*(this._cubeSize-I);Cs(t,u,W,3*I,2*I),d.setRenderTarget(t),d.render(v,Da)}}function Ep(i){const e=[],t=[],n=[];let s=i;const a=i-gr+1+Tl.length;for(let c=0;c<a;c++){const l=Math.pow(2,s);t.push(l);let d=1/l;c>i-gr?d=Tl[c-i+gr-1]:c===0&&(d=0),n.push(d);const p=1/(l-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,y=6,P=3,m=2,_=1,F=new Float32Array(P*y*M),D=new Float32Array(m*y*M),I=new Float32Array(_*y*M);for(let W=0;W<M;W++){const O=W%3*2/3-1,K=W>2?0:-1,ye=[O,K,0,O+2/3,K,0,O+2/3,K+1,0,O,K,0,O+2/3,K+1,0,O,K+1,0];F.set(ye,P*y*W),D.set(x,m*y*W);const E=[W,W,W,W,W,W];I.set(E,_*y*W)}const u=new ei;u.setAttribute("position",new Nn(F,P)),u.setAttribute("uv",new Nn(D,m)),u.setAttribute("faceIndex",new Nn(I,_)),e.push(u),s>gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rl(i,e,t){const n=new ji(i,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tp(i,e,t){const n=new Float32Array(Wi),s=new ne(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Cl(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Pl(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}function bp(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const d=l.mapping,p=d===ja||d===$a,g=d===Sr||d===yr;if(p||g){let v=e.get(l);const x=v!==void 0?v.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==x)return t===null&&(t=new wl(i)),v=p?t.fromEquirectangular(l,v):t.fromCubemap(l,v),v.texture.pmremVersion=l.pmremVersion,e.set(l,v),v.texture;if(v!==void 0)return v.texture;{const M=l.image;return p&&M&&M.height>0||g&&M&&s(M)?(t===null&&(t=new wl(i)),v=p?t.fromEquirectangular(l):t.fromCubemap(l),v.texture.pmremVersion=l.pmremVersion,e.set(l,v),l.addEventListener("dispose",a),v.texture):null}}}return l}function s(l){let d=0;const p=6;for(let g=0;g<p;g++)l[g]!==void 0&&d++;return d===p}function a(l){const d=l.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Ap(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wp(i,e,t,n){const s={},a=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const y in x.attributes)e.remove(x.attributes[y]);for(const y in x.morphAttributes){const P=x.morphAttributes[y];for(let m=0,_=P.length;m<_;m++)e.remove(P[m])}x.removeEventListener("dispose",c),delete s[x.id];const M=a.get(x);M&&(e.remove(M),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(v,x){return s[x.id]===!0||(x.addEventListener("dispose",c),s[x.id]=!0,t.memory.geometries++),x}function d(v){const x=v.attributes;for(const y in x)e.update(x[y],i.ARRAY_BUFFER);const M=v.morphAttributes;for(const y in M){const P=M[y];for(let m=0,_=P.length;m<_;m++)e.update(P[m],i.ARRAY_BUFFER)}}function p(v){const x=[],M=v.index,y=v.attributes.position;let P=0;if(M!==null){const F=M.array;P=M.version;for(let D=0,I=F.length;D<I;D+=3){const u=F[D+0],W=F[D+1],O=F[D+2];x.push(u,W,W,O,O,u)}}else if(y!==void 0){const F=y.array;P=y.version;for(let D=0,I=F.length/3-1;D<I;D+=3){const u=D+0,W=D+1,O=D+2;x.push(u,W,W,O,O,u)}}else return;const m=new(fc(x)?vc:_c)(x,1);m.version=P;const _=a.get(v);_&&e.remove(_),a.set(v,m)}function g(v){const x=a.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return a.get(v)}return{get:l,update:d,getWireframeAttribute:g}}function Rp(i,e,t){let n;function s(x){n=x}let a,c;function l(x){a=x.type,c=x.bytesPerElement}function d(x,M){i.drawElements(n,M,a,x*c),t.update(M,n,1)}function p(x,M,y){y!==0&&(i.drawElementsInstanced(n,M,a,x*c,y),t.update(M,n,y))}function g(x,M,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,M,0,a,x,0,y);let m=0;for(let _=0;_<y;_++)m+=M[_];t.update(m,n,1)}function v(x,M,y,P){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<x.length;_++)p(x[_]/c,M[_],P[_]);else{m.multiDrawElementsInstancedWEBGL(n,M,0,a,x,0,P,0,y);let _=0;for(let F=0;F<y;F++)_+=M[F];for(let F=0;F<P.length;F++)t.update(_,n,P[F])}}this.setMode=s,this.setIndex=l,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Cp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pp(i,e,t){const n=new WeakMap,s=new Xt;function a(c,l,d){const p=c.morphTargetInfluences,g=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=g!==void 0?g.length:0;let x=n.get(l);if(x===void 0||x.count!==v){let E=function(){K.dispose(),n.delete(l),l.removeEventListener("dispose",E)};var M=E;x!==void 0&&x.texture.dispose();const y=l.morphAttributes.position!==void 0,P=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],F=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let I=0;y===!0&&(I=1),P===!0&&(I=2),m===!0&&(I=3);let u=l.attributes.position.count*I,W=1;u>e.maxTextureSize&&(W=Math.ceil(u/e.maxTextureSize),u=e.maxTextureSize);const O=new Float32Array(u*W*4*v),K=new dc(O,u,W,v);K.type=hi,K.needsUpdate=!0;const ye=I*4;for(let C=0;C<v;C++){const Q=_[C],ie=F[C],ue=D[C],me=u*W*4*C;for(let se=0;se<Q.count;se++){const pe=se*ye;y===!0&&(s.fromBufferAttribute(Q,se),O[me+pe+0]=s.x,O[me+pe+1]=s.y,O[me+pe+2]=s.z,O[me+pe+3]=0),P===!0&&(s.fromBufferAttribute(ie,se),O[me+pe+4]=s.x,O[me+pe+5]=s.y,O[me+pe+6]=s.z,O[me+pe+7]=0),m===!0&&(s.fromBufferAttribute(ue,se),O[me+pe+8]=s.x,O[me+pe+9]=s.y,O[me+pe+10]=s.z,O[me+pe+11]=ue.itemSize===4?s.w:1)}}x={count:v,texture:K,size:new yt(u,W)},n.set(l,x),l.addEventListener("dispose",E)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let y=0;for(let m=0;m<p.length;m++)y+=p[m];const P=l.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",P),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function Lp(i,e,t,n){let s=new WeakMap;function a(d){const p=n.render.frame,g=d.geometry,v=e.get(d,g);if(s.get(v)!==p&&(e.update(v),s.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),s.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;s.get(x)!==p&&(x.update(),s.set(x,p))}return v}function c(){s=new WeakMap}function l(d){const p=d.target;p.removeEventListener("dispose",l),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:c}}class Tc extends gn{constructor(e,t,n,s,a,c,l,d,p,g=vr){if(g!==vr&&g!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===vr&&(n=Yi),n===void 0&&g===Tr&&(n=Er),super(null,s,a,c,l,d,g,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Un,this.minFilter=d!==void 0?d:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bc=new gn,Ll=new Tc(1,1),Ac=new dc,wc=new gf,Rc=new Sc,Dl=[],Ul=[],Il=new Float32Array(16),Nl=new Float32Array(9),Fl=new Float32Array(4);function Cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Dl[s];if(a===void 0&&(a=new Float32Array(s),Dl[s]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(a,l)}return a}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=Ul[e];t===void 0&&(t=new Int32Array(e),Ul[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Fl.set(n),i.uniformMatrix2fv(this.addr,!1,Fl),tn(t,n)}}function Op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),tn(t,n)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),tn(t,n)}}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Ll.compareFunction=uc,a=Ll):a=bc,t.setTexture2D(e||a,s)}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wc,s)}function $p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Rc,s)}function Kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ac,s)}function Zp(i){switch(i){case 5126:return Dp;case 35664:return Up;case 35665:return Ip;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return kp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}function Jp(i,e){i.uniform1fv(this.addr,e)}function Qp(i,e){const t=Cr(e,this.size,2);i.uniform2fv(this.addr,t)}function em(i,e){const t=Cr(e,this.size,3);i.uniform3fv(this.addr,t)}function tm(i,e){const t=Cr(e,this.size,4);i.uniform4fv(this.addr,t)}function nm(i,e){const t=Cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function im(i,e){const t=Cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rm(i,e){const t=Cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sm(i,e){i.uniform1iv(this.addr,e)}function am(i,e){i.uniform2iv(this.addr,e)}function om(i,e){i.uniform3iv(this.addr,e)}function lm(i,e){i.uniform4iv(this.addr,e)}function cm(i,e){i.uniform1uiv(this.addr,e)}function um(i,e){i.uniform2uiv(this.addr,e)}function fm(i,e){i.uniform3uiv(this.addr,e)}function hm(i,e){i.uniform4uiv(this.addr,e)}function dm(i,e,t){const n=this.cache,s=e.length,a=Zs(t,s);en(n,a)||(i.uniform1iv(this.addr,a),tn(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||bc,a[c])}function pm(i,e,t){const n=this.cache,s=e.length,a=Zs(t,s);en(n,a)||(i.uniform1iv(this.addr,a),tn(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||wc,a[c])}function mm(i,e,t){const n=this.cache,s=e.length,a=Zs(t,s);en(n,a)||(i.uniform1iv(this.addr,a),tn(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Rc,a[c])}function gm(i,e,t){const n=this.cache,s=e.length,a=Zs(t,s);en(n,a)||(i.uniform1iv(this.addr,a),tn(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Ac,a[c])}function _m(i){switch(i){case 5126:return Jp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return um;case 36295:return fm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zp(t.type)}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_m(t.type)}}class Mm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const l=s[a];l.setValue(e,t[l.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Ol(i,e){i.seq.push(e),i.map[e.id]=e}function Sm(i,e,t){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const a=Oa.exec(n),c=Oa.lastIndex;let l=a[1];const d=a[2]==="]",p=a[3];if(d&&(l=l|0),p===void 0||p==="["&&c+2===s){Ol(t,p===void 0?new vm(l,i,e):new xm(l,i,e));break}else{let v=t.map[l];v===void 0&&(v=new Mm(l),Ol(t,v)),t=v}}}class Hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);Sm(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const l=t[a],d=n[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function Bl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ym=37297;let Em=0;function Tm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function bm(i){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i);let n;switch(e===t?n="":e===Ws&&t===Vs?n="LinearDisplayP3ToLinearSRGB":e===Vs&&t===Ws&&(n="LinearSRGBToLinearDisplayP3"),i){case Ci:case js:return[n,"LinearTransferOETF"];case Zn:case Io:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Tm(i.getShaderSource(e),c)}else return s}function Am(i,e){const t=bm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wm(i,e){let t;switch(e){case Tu:t="Linear";break;case bu:t="Reinhard";break;case Au:t="Cineon";break;case wu:t="ACESFilmic";break;case Cu:t="AgX";break;case Pu:t="Neutral";break;case Ru:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new ne;function Rm(){Ct.getLuminanceCoefficients(Ps);const i=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function Pm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),c=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Vr(i){return i!==""}function Hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(i){return i.replace(Dm,Im)}const Um=new Map;function Im(i,e){let t=ut[e];if(t===void 0){const n=Um.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bo(t)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(Nm,Fm)}function Fm(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Vl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Om(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case yr:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function Hm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jl:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Eu:e="ENVMAP_BLENDING_ADD";break}return e}function km(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gm(i,e,t,n){const s=i.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const d=Om(t),p=Bm(t),g=zm(t),v=Hm(t),x=km(t),M=Cm(t),y=Pm(a),P=s.createProgram();let m,_,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Vr).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Vr).join(`
`),_.length>0&&(_+=`
`)):(m=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),_=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ai?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Am("linearToOutputTexel",t.outputColorSpace),Rm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),c=bo(c),c=Hl(c,t),c=kl(c,t),l=bo(l),l=Hl(l,t),l=kl(l,t),c=Gl(c),l=Gl(l),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,m=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=F+m+c,I=F+_+l,u=Bl(s,s.VERTEX_SHADER,D),W=Bl(s,s.FRAGMENT_SHADER,I);s.attachShader(P,u),s.attachShader(P,W),t.index0AttributeName!==void 0?s.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function O(C){if(i.debug.checkShaderErrors){const Q=s.getProgramInfoLog(P).trim(),ie=s.getShaderInfoLog(u).trim(),ue=s.getShaderInfoLog(W).trim();let me=!0,se=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,u,W);else{const pe=zl(s,u,"vertex"),Y=zl(s,W,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Q+`
`+pe+`
`+Y)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(ie===""||ue==="")&&(se=!1);se&&(C.diagnostics={runnable:me,programLog:Q,vertexShader:{log:ie,prefix:m},fragmentShader:{log:ue,prefix:_}})}s.deleteShader(u),s.deleteShader(W),K=new Hs(s,P),ye=Lm(s,P)}let K;this.getUniforms=function(){return K===void 0&&O(this),K};let ye;this.getAttributes=function(){return ye===void 0&&O(this),ye};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(P,ym)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Em++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=u,this.fragmentShader=W,this}let Vm=0;class Wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xm(e),t.set(e,n)),n}}class Xm{constructor(e){this.id=Vm++,this.code=e,this.usedTimes=0}}function qm(i,e,t,n,s,a,c){const l=new mc,d=new Wm,p=new Set,g=[],v=s.logarithmicDepthBuffer,x=s.reverseDepthBuffer,M=s.vertexTextures;let y=s.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return p.add(E),E===0?"uv":`uv${E}`}function _(E,C,Q,ie,ue){const me=ie.fog,se=ue.geometry,pe=E.isMeshStandardMaterial?ie.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||pe),Te=Y&&Y.mapping===Ys?Y.image.height:null,ve=P[E.type];E.precision!==null&&(y=s.getMaxPrecision(E.precision),y!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",y,"instead."));const Me=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,dt=Me!==void 0?Me.length:0;let Mt=0;se.morphAttributes.position!==void 0&&(Mt=1),se.morphAttributes.normal!==void 0&&(Mt=2),se.morphAttributes.color!==void 0&&(Mt=3);let ae,_e,Pe,we;if(ve){const on=Jn[ve];ae=on.vertexShader,_e=on.fragmentShader}else ae=E.vertexShader,_e=E.fragmentShader,d.update(E),Pe=d.getVertexShaderID(E),we=d.getFragmentShaderID(E);const Ye=i.getRenderTarget(),Ke=ue.isInstancedMesh===!0,et=ue.isBatchedMesh===!0,mt=!!E.map,ot=!!E.matcap,U=!!Y,At=!!E.aoMap,ct=!!E.lightMap,gt=!!E.bumpMap,Ze=!!E.normalMap,bt=!!E.displacementMap,je=!!E.emissiveMap,L=!!E.metalnessMap,T=!!E.roughnessMap,j=E.anisotropy>0,ce=E.clearcoat>0,ge=E.dispersion>0,le=E.iridescence>0,Ve=E.sheen>0,Re=E.transmission>0,Ie=j&&!!E.anisotropyMap,pt=ce&&!!E.clearcoatMap,Se=ce&&!!E.clearcoatNormalMap,He=ce&&!!E.clearcoatRoughnessMap,tt=le&&!!E.iridescenceMap,We=le&&!!E.iridescenceThicknessMap,Ce=Ve&&!!E.sheenColorMap,ht=Ve&&!!E.sheenRoughnessMap,st=!!E.specularMap,Lt=!!E.specularColorMap,H=!!E.specularIntensityMap,De=Re&&!!E.transmissionMap,re=Re&&!!E.thicknessMap,he=!!E.gradientMap,Ue=!!E.alphaMap,Ne=E.alphaTest>0,vt=!!E.alphaHash,Gt=!!E.extensions;let an=Ai;E.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(an=i.toneMapping);const St={shaderID:ve,shaderType:E.type,shaderName:E.name,vertexShader:ae,fragmentShader:_e,defines:E.defines,customVertexShaderID:Pe,customFragmentShaderID:we,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:y,batching:et,batchingColor:et&&ue._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&ue.instanceColor!==null,instancingMorph:Ke&&ue.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:Ye===null?i.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:Ci,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:ot,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:Te,aoMap:At,lightMap:ct,bumpMap:gt,normalMap:Ze,displacementMap:M&&bt,emissiveMap:je,normalMapObjectSpace:Ze&&E.normalMapType===Nu,normalMapTangentSpace:Ze&&E.normalMapType===Iu,metalnessMap:L,roughnessMap:T,anisotropy:j,anisotropyMap:Ie,clearcoat:ce,clearcoatMap:pt,clearcoatNormalMap:Se,clearcoatRoughnessMap:He,dispersion:ge,iridescence:le,iridescenceMap:tt,iridescenceThicknessMap:We,sheen:Ve,sheenColorMap:Ce,sheenRoughnessMap:ht,specularMap:st,specularColorMap:Lt,specularIntensityMap:H,transmission:Re,transmissionMap:De,thicknessMap:re,gradientMap:he,opaque:E.transparent===!1&&E.blending===_r&&E.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Ne,alphaHash:vt,combine:E.combine,mapUv:mt&&m(E.map.channel),aoMapUv:At&&m(E.aoMap.channel),lightMapUv:ct&&m(E.lightMap.channel),bumpMapUv:gt&&m(E.bumpMap.channel),normalMapUv:Ze&&m(E.normalMap.channel),displacementMapUv:bt&&m(E.displacementMap.channel),emissiveMapUv:je&&m(E.emissiveMap.channel),metalnessMapUv:L&&m(E.metalnessMap.channel),roughnessMapUv:T&&m(E.roughnessMap.channel),anisotropyMapUv:Ie&&m(E.anisotropyMap.channel),clearcoatMapUv:pt&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:We&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:ht&&m(E.sheenRoughnessMap.channel),specularMapUv:st&&m(E.specularMap.channel),specularColorMapUv:Lt&&m(E.specularColorMap.channel),specularIntensityMapUv:H&&m(E.specularIntensityMap.channel),transmissionMapUv:De&&m(E.transmissionMap.channel),thicknessMapUv:re&&m(E.thicknessMap.channel),alphaMapUv:Ue&&m(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ze||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!se.attributes.uv&&(mt||Ue),fog:!!me,useFog:E.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:x,skinning:ue.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Mt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:an,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fi,flipSided:E.side===xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&E.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=p.has(1),St.vertexUv2s=p.has(2),St.vertexUv3s=p.has(3),p.clear(),St}function F(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Q in E.defines)C.push(Q),C.push(E.defines[Q]);return E.isRawShaderMaterial===!1&&(D(C,E),I(C,E),C.push(i.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function D(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function I(E,C){l.disableAll(),C.supportsVertexTextures&&l.enable(0),C.instancing&&l.enable(1),C.instancingColor&&l.enable(2),C.instancingMorph&&l.enable(3),C.matcap&&l.enable(4),C.envMap&&l.enable(5),C.normalMapObjectSpace&&l.enable(6),C.normalMapTangentSpace&&l.enable(7),C.clearcoat&&l.enable(8),C.iridescence&&l.enable(9),C.alphaTest&&l.enable(10),C.vertexColors&&l.enable(11),C.vertexAlphas&&l.enable(12),C.vertexUv1s&&l.enable(13),C.vertexUv2s&&l.enable(14),C.vertexUv3s&&l.enable(15),C.vertexTangents&&l.enable(16),C.anisotropy&&l.enable(17),C.alphaHash&&l.enable(18),C.batching&&l.enable(19),C.dispersion&&l.enable(20),C.batchingColor&&l.enable(21),E.push(l.mask),l.disableAll(),C.fog&&l.enable(0),C.useFog&&l.enable(1),C.flatShading&&l.enable(2),C.logarithmicDepthBuffer&&l.enable(3),C.reverseDepthBuffer&&l.enable(4),C.skinning&&l.enable(5),C.morphTargets&&l.enable(6),C.morphNormals&&l.enable(7),C.morphColors&&l.enable(8),C.premultipliedAlpha&&l.enable(9),C.shadowMapEnabled&&l.enable(10),C.doubleSided&&l.enable(11),C.flipSided&&l.enable(12),C.useDepthPacking&&l.enable(13),C.dithering&&l.enable(14),C.transmission&&l.enable(15),C.sheen&&l.enable(16),C.opaque&&l.enable(17),C.pointsUvs&&l.enable(18),C.decodeVideoTexture&&l.enable(19),C.alphaToCoverage&&l.enable(20),E.push(l.mask)}function u(E){const C=P[E.type];let Q;if(C){const ie=Jn[C];Q=Rf.clone(ie.uniforms)}else Q=E.uniforms;return Q}function W(E,C){let Q;for(let ie=0,ue=g.length;ie<ue;ie++){const me=g[ie];if(me.cacheKey===C){Q=me,++Q.usedTimes;break}}return Q===void 0&&(Q=new Gm(i,C,E,a),g.push(Q)),Q}function O(E){if(--E.usedTimes===0){const C=g.indexOf(E);g[C]=g[g.length-1],g.pop(),E.destroy()}}function K(E){d.remove(E)}function ye(){d.dispose()}return{getParameters:_,getProgramCacheKey:F,getUniforms:u,acquireProgram:W,releaseProgram:O,releaseShaderCache:K,programs:g,dispose:ye}}function Ym(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function s(c,l,d){i.get(c)[l]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function jm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(v,x,M,y,P,m){let _=i[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:y,renderOrder:v.renderOrder,z:P,group:m},i[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=y,_.renderOrder=v.renderOrder,_.z=P,_.group=m),e++,_}function l(v,x,M,y,P,m){const _=c(v,x,M,y,P,m);M.transmission>0?n.push(_):M.transparent===!0?s.push(_):t.push(_)}function d(v,x,M,y,P,m){const _=c(v,x,M,y,P,m);M.transmission>0?n.unshift(_):M.transparent===!0?s.unshift(_):t.unshift(_)}function p(v,x){t.length>1&&t.sort(v||jm),n.length>1&&n.sort(x||Wl),s.length>1&&s.sort(x||Wl)}function g(){for(let v=e,x=i.length;v<x;v++){const M=i[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:d,finish:g,sort:p}}function $m(){let i=new WeakMap;function e(n,s){const a=i.get(n);let c;return a===void 0?(c=new Xl,i.set(n,[c])):s>=a.length?(c=new Xl,a.push(c)):c=a[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Pt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function Zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jm=0;function Qm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eg(i){const e=new Km,t=Zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new ne);const s=new ne,a=new qt,c=new qt;function l(p){let g=0,v=0,x=0;for(let ye=0;ye<9;ye++)n.probe[ye].set(0,0,0);let M=0,y=0,P=0,m=0,_=0,F=0,D=0,I=0,u=0,W=0,O=0;p.sort(Qm);for(let ye=0,E=p.length;ye<E;ye++){const C=p[ye],Q=C.color,ie=C.intensity,ue=C.distance,me=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)g+=Q.r*ie,v+=Q.g*ie,x+=Q.b*ie;else if(C.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(C.sh.coefficients[se],ie);O++}else if(C.isDirectionalLight){const se=e.get(C);if(se.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const pe=C.shadow,Y=t.get(C);Y.shadowIntensity=pe.intensity,Y.shadowBias=pe.bias,Y.shadowNormalBias=pe.normalBias,Y.shadowRadius=pe.radius,Y.shadowMapSize=pe.mapSize,n.directionalShadow[M]=Y,n.directionalShadowMap[M]=me,n.directionalShadowMatrix[M]=C.shadow.matrix,F++}n.directional[M]=se,M++}else if(C.isSpotLight){const se=e.get(C);se.position.setFromMatrixPosition(C.matrixWorld),se.color.copy(Q).multiplyScalar(ie),se.distance=ue,se.coneCos=Math.cos(C.angle),se.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),se.decay=C.decay,n.spot[P]=se;const pe=C.shadow;if(C.map&&(n.spotLightMap[u]=C.map,u++,pe.updateMatrices(C),C.castShadow&&W++),n.spotLightMatrix[P]=pe.matrix,C.castShadow){const Y=t.get(C);Y.shadowIntensity=pe.intensity,Y.shadowBias=pe.bias,Y.shadowNormalBias=pe.normalBias,Y.shadowRadius=pe.radius,Y.shadowMapSize=pe.mapSize,n.spotShadow[P]=Y,n.spotShadowMap[P]=me,I++}P++}else if(C.isRectAreaLight){const se=e.get(C);se.color.copy(Q).multiplyScalar(ie),se.halfWidth.set(C.width*.5,0,0),se.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=se,m++}else if(C.isPointLight){const se=e.get(C);if(se.color.copy(C.color).multiplyScalar(C.intensity),se.distance=C.distance,se.decay=C.decay,C.castShadow){const pe=C.shadow,Y=t.get(C);Y.shadowIntensity=pe.intensity,Y.shadowBias=pe.bias,Y.shadowNormalBias=pe.normalBias,Y.shadowRadius=pe.radius,Y.shadowMapSize=pe.mapSize,Y.shadowCameraNear=pe.camera.near,Y.shadowCameraFar=pe.camera.far,n.pointShadow[y]=Y,n.pointShadowMap[y]=me,n.pointShadowMatrix[y]=C.shadow.matrix,D++}n.point[y]=se,y++}else if(C.isHemisphereLight){const se=e.get(C);se.skyColor.copy(C.color).multiplyScalar(ie),se.groundColor.copy(C.groundColor).multiplyScalar(ie),n.hemi[_]=se,_++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=v,n.ambient[2]=x;const K=n.hash;(K.directionalLength!==M||K.pointLength!==y||K.spotLength!==P||K.rectAreaLength!==m||K.hemiLength!==_||K.numDirectionalShadows!==F||K.numPointShadows!==D||K.numSpotShadows!==I||K.numSpotMaps!==u||K.numLightProbes!==O)&&(n.directional.length=M,n.spot.length=P,n.rectArea.length=m,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=I+u-W,n.spotLightMap.length=u,n.numSpotLightShadowsWithMaps=W,n.numLightProbes=O,K.directionalLength=M,K.pointLength=y,K.spotLength=P,K.rectAreaLength=m,K.hemiLength=_,K.numDirectionalShadows=F,K.numPointShadows=D,K.numSpotShadows=I,K.numSpotMaps=u,K.numLightProbes=O,n.version=Jm++)}function d(p,g){let v=0,x=0,M=0,y=0,P=0;const m=g.matrixWorldInverse;for(let _=0,F=p.length;_<F;_++){const D=p[_];if(D.isDirectionalLight){const I=n.directional[v];I.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),v++}else if(D.isSpotLight){const I=n.spot[M];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),M++}else if(D.isRectAreaLight){const I=n.rectArea[y];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(m),c.identity(),a.copy(D.matrixWorld),a.premultiply(m),c.extractRotation(a),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),y++}else if(D.isPointLight){const I=n.point[x];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(m),x++}else if(D.isHemisphereLight){const I=n.hemi[P];I.direction.setFromMatrixPosition(D.matrixWorld),I.direction.transformDirection(m),P++}}}return{setup:l,setupView:d,state:n}}function ql(i){const e=new eg(i),t=[],n=[];function s(g){p.camera=g,t.length=0,n.length=0}function a(g){t.push(g)}function c(g){n.push(g)}function l(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:c}}function tg(i){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let l;return c===void 0?(l=new ql(i),e.set(s,[l])):a>=c.length?(l=new ql(i),c.push(l)):l=c[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class ng extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ig extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
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
}`;function ag(i,e,t){let n=new yc;const s=new yt,a=new yt,c=new Xt,l=new ng({depthPacking:Uu}),d=new ig,p={},g=t.maxTextureSize,v={[wi]:xn,[xn]:wi,[fi]:fi},x=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:rg,fragmentShader:sg}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const y=new ei;y.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new In(y,x),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let _=this.type;this.render=function(W,O,K){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||W.length===0)return;const ye=i.getRenderTarget(),E=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(bi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ie=_!==ui&&this.type===ui,ue=_===ui&&this.type!==ui;for(let me=0,se=W.length;me<se;me++){const pe=W[me],Y=pe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const Te=Y.getFrameExtents();if(s.multiply(Te),a.copy(Y.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/Te.x),s.x=a.x*Te.x,Y.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/Te.y),s.y=a.y*Te.y,Y.mapSize.y=a.y)),Y.map===null||ie===!0||ue===!0){const Me=this.type!==ui?{minFilter:Un,magFilter:Un}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ji(s.x,s.y,Me),Y.map.texture.name=pe.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ve=Y.getViewportCount();for(let Me=0;Me<ve;Me++){const dt=Y.getViewport(Me);c.set(a.x*dt.x,a.y*dt.y,a.x*dt.z,a.y*dt.w),Q.viewport(c),Y.updateMatrices(pe,Me),n=Y.getFrustum(),I(O,K,Y.camera,pe,this.type)}Y.isPointLightShadow!==!0&&this.type===ui&&F(Y,K),Y.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(ye,E,C)};function F(W,O){const K=e.update(P);x.defines.VSM_SAMPLES!==W.blurSamples&&(x.defines.VSM_SAMPLES=W.blurSamples,M.defines.VSM_SAMPLES=W.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),W.mapPass===null&&(W.mapPass=new ji(s.x,s.y)),x.uniforms.shadow_pass.value=W.map.texture,x.uniforms.resolution.value=W.mapSize,x.uniforms.radius.value=W.radius,i.setRenderTarget(W.mapPass),i.clear(),i.renderBufferDirect(O,null,K,x,P,null),M.uniforms.shadow_pass.value=W.mapPass.texture,M.uniforms.resolution.value=W.mapSize,M.uniforms.radius.value=W.radius,i.setRenderTarget(W.map),i.clear(),i.renderBufferDirect(O,null,K,M,P,null)}function D(W,O,K,ye){let E=null;const C=K.isPointLight===!0?W.customDistanceMaterial:W.customDepthMaterial;if(C!==void 0)E=C;else if(E=K.isPointLight===!0?d:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const Q=E.uuid,ie=O.uuid;let ue=p[Q];ue===void 0&&(ue={},p[Q]=ue);let me=ue[ie];me===void 0&&(me=E.clone(),ue[ie]=me,O.addEventListener("dispose",u)),E=me}if(E.visible=O.visible,E.wireframe=O.wireframe,ye===ui?E.side=O.shadowSide!==null?O.shadowSide:O.side:E.side=O.shadowSide!==null?O.shadowSide:v[O.side],E.alphaMap=O.alphaMap,E.alphaTest=O.alphaTest,E.map=O.map,E.clipShadows=O.clipShadows,E.clippingPlanes=O.clippingPlanes,E.clipIntersection=O.clipIntersection,E.displacementMap=O.displacementMap,E.displacementScale=O.displacementScale,E.displacementBias=O.displacementBias,E.wireframeLinewidth=O.wireframeLinewidth,E.linewidth=O.linewidth,K.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=i.properties.get(E);Q.light=K}return E}function I(W,O,K,ye,E){if(W.visible===!1)return;if(W.layers.test(O.layers)&&(W.isMesh||W.isLine||W.isPoints)&&(W.castShadow||W.receiveShadow&&E===ui)&&(!W.frustumCulled||n.intersectsObject(W))){W.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,W.matrixWorld);const ie=e.update(W),ue=W.material;if(Array.isArray(ue)){const me=ie.groups;for(let se=0,pe=me.length;se<pe;se++){const Y=me[se],Te=ue[Y.materialIndex];if(Te&&Te.visible){const ve=D(W,Te,ye,E);W.onBeforeShadow(i,W,O,K,ie,ve,Y),i.renderBufferDirect(K,null,ie,ve,W,Y),W.onAfterShadow(i,W,O,K,ie,ve,Y)}}}else if(ue.visible){const me=D(W,ue,ye,E);W.onBeforeShadow(i,W,O,K,ie,me,null),i.renderBufferDirect(K,null,ie,me,W,null),W.onAfterShadow(i,W,O,K,ie,me,null)}}const Q=W.children;for(let ie=0,ue=Q.length;ie<ue;ie++)I(Q[ie],O,K,ye,E)}function u(W){W.target.removeEventListener("dispose",u);for(const K in p){const ye=p[K],E=W.target.uuid;E in ye&&(ye[E].dispose(),delete ye[E])}}}const og={[ka]:Ga,[Va]:qa,[Wa]:Ya,[Mr]:Xa,[Ga]:ka,[qa]:Va,[Ya]:Wa,[Xa]:Mr};function lg(i){function e(){let H=!1;const De=new Xt;let re=null;const he=new Xt(0,0,0,0);return{setMask:function(Ue){re!==Ue&&!H&&(i.colorMask(Ue,Ue,Ue,Ue),re=Ue)},setLocked:function(Ue){H=Ue},setClear:function(Ue,Ne,vt,Gt,an){an===!0&&(Ue*=Gt,Ne*=Gt,vt*=Gt),De.set(Ue,Ne,vt,Gt),he.equals(De)===!1&&(i.clearColor(Ue,Ne,vt,Gt),he.copy(De))},reset:function(){H=!1,re=null,he.set(-1,0,0,0)}}}function t(){let H=!1,De=!1,re=null,he=null,Ue=null;return{setReversed:function(Ne){De=Ne},setTest:function(Ne){Ne?Pe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Ne){re!==Ne&&!H&&(i.depthMask(Ne),re=Ne)},setFunc:function(Ne){if(De&&(Ne=og[Ne]),he!==Ne){switch(Ne){case ka:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Ne}},setLocked:function(Ne){H=Ne},setClear:function(Ne){Ue!==Ne&&(i.clearDepth(Ne),Ue=Ne)},reset:function(){H=!1,re=null,he=null,Ue=null}}}function n(){let H=!1,De=null,re=null,he=null,Ue=null,Ne=null,vt=null,Gt=null,an=null;return{setTest:function(St){H||(St?Pe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(St){De!==St&&!H&&(i.stencilMask(St),De=St)},setFunc:function(St,on,Fn){(re!==St||he!==on||Ue!==Fn)&&(i.stencilFunc(St,on,Fn),re=St,he=on,Ue=Fn)},setOp:function(St,on,Fn){(Ne!==St||vt!==on||Gt!==Fn)&&(i.stencilOp(St,on,Fn),Ne=St,vt=on,Gt=Fn)},setLocked:function(St){H=St},setClear:function(St){an!==St&&(i.clearStencil(St),an=St)},reset:function(){H=!1,De=null,re=null,he=null,Ue=null,Ne=null,vt=null,Gt=null,an=null}}}const s=new e,a=new t,c=new n,l=new WeakMap,d=new WeakMap;let p={},g={},v=new WeakMap,x=[],M=null,y=!1,P=null,m=null,_=null,F=null,D=null,I=null,u=null,W=new Pt(0,0,0),O=0,K=!1,ye=null,E=null,C=null,Q=null,ie=null;const ue=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,se=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(pe)[1]),me=se>=1):pe.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),me=se>=2);let Y=null,Te={};const ve=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),dt=new Xt().fromArray(ve),Mt=new Xt().fromArray(Me);function ae(H,De,re,he){const Ue=new Uint8Array(4),Ne=i.createTexture();i.bindTexture(H,Ne),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<re;vt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(De+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Ne}const _e={};_e[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),Pe(i.DEPTH_TEST),a.setFunc(Mr),ct(!1),gt(Qo),Pe(i.CULL_FACE),U(bi);function Pe(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function we(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function Ye(H,De){return g[H]!==De?(i.bindFramebuffer(H,De),g[H]=De,H===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=De),H===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=De),!0):!1}function Ke(H,De){let re=x,he=!1;if(H){re=v.get(De),re===void 0&&(re=[],v.set(De,re));const Ue=H.textures;if(re.length!==Ue.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ne=0,vt=Ue.length;Ne<vt;Ne++)re[Ne]=i.COLOR_ATTACHMENT0+Ne;re.length=Ue.length,he=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,he=!0);he&&i.drawBuffers(re)}function et(H){return M!==H?(i.useProgram(H),M=H,!0):!1}const mt={[Vi]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};mt[ou]=i.MIN,mt[lu]=i.MAX;const ot={[cu]:i.ZERO,[uu]:i.ONE,[fu]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[du]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[Ha]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[Mu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function U(H,De,re,he,Ue,Ne,vt,Gt,an,St){if(H===bi){y===!0&&(we(i.BLEND),y=!1);return}if(y===!1&&(Pe(i.BLEND),y=!0),H!==ru){if(H!==P||St!==K){if((m!==Vi||D!==Vi)&&(i.blendEquation(i.FUNC_ADD),m=Vi,D=Vi),St)switch(H){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,F=null,I=null,u=null,W.set(0,0,0),O=0,P=H,K=St}return}Ue=Ue||De,Ne=Ne||re,vt=vt||he,(De!==m||Ue!==D)&&(i.blendEquationSeparate(mt[De],mt[Ue]),m=De,D=Ue),(re!==_||he!==F||Ne!==I||vt!==u)&&(i.blendFuncSeparate(ot[re],ot[he],ot[Ne],ot[vt]),_=re,F=he,I=Ne,u=vt),(Gt.equals(W)===!1||an!==O)&&(i.blendColor(Gt.r,Gt.g,Gt.b,an),W.copy(Gt),O=an),P=H,K=!1}function At(H,De){H.side===fi?we(i.CULL_FACE):Pe(i.CULL_FACE);let re=H.side===xn;De&&(re=!re),ct(re),H.blending===_r&&H.transparent===!1?U(bi):U(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const he=H.stencilWrite;c.setTest(he),he&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),bt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){ye!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),ye=H)}function gt(H){H!==tu?(Pe(i.CULL_FACE),H!==E&&(H===Qo?i.cullFace(i.BACK):H===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),E=H}function Ze(H){H!==C&&(me&&i.lineWidth(H),C=H)}function bt(H,De,re){H?(Pe(i.POLYGON_OFFSET_FILL),(Q!==De||ie!==re)&&(i.polygonOffset(De,re),Q=De,ie=re)):we(i.POLYGON_OFFSET_FILL)}function je(H){H?Pe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function L(H){H===void 0&&(H=i.TEXTURE0+ue-1),Y!==H&&(i.activeTexture(H),Y=H)}function T(H,De,re){re===void 0&&(Y===null?re=i.TEXTURE0+ue-1:re=Y);let he=Te[re];he===void 0&&(he={type:void 0,texture:void 0},Te[re]=he),(he.type!==H||he.texture!==De)&&(Y!==re&&(i.activeTexture(re),Y=re),i.bindTexture(H,De||_e[H]),he.type=H,he.texture=De)}function j(){const H=Te[Y];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(H){dt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),dt.copy(H))}function Ce(H){Mt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Mt.copy(H))}function ht(H,De){let re=d.get(De);re===void 0&&(re=new WeakMap,d.set(De,re));let he=re.get(H);he===void 0&&(he=i.getUniformBlockIndex(De,H.name),re.set(H,he))}function st(H,De){const he=d.get(De).get(H);l.get(De)!==he&&(i.uniformBlockBinding(De,he,H.__bindingPointIndex),l.set(De,he))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Y=null,Te={},g={},v=new WeakMap,x=[],M=null,y=!1,P=null,m=null,_=null,F=null,D=null,I=null,u=null,W=new Pt(0,0,0),O=0,K=!1,ye=null,E=null,C=null,Q=null,ie=null,dt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:Pe,disable:we,bindFramebuffer:Ye,drawBuffers:Ke,useProgram:et,setBlending:U,setMaterial:At,setFlipSided:ct,setCullFace:gt,setLineWidth:Ze,setPolygonOffset:bt,setScissorTest:je,activeTexture:L,bindTexture:T,unbindTexture:j,compressedTexImage2D:ce,compressedTexImage3D:ge,texImage2D:He,texImage3D:tt,updateUBOMapping:ht,uniformBlockBinding:st,texStorage2D:pt,texStorage3D:Se,texSubImage2D:le,texSubImage3D:Ve,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ie,scissor:We,viewport:Ce,reset:Lt}}function Yl(i,e,t,n){const s=cg(n);switch(t){case ic:return i*e;case sc:return i*e;case ac:return i*e*2;case oc:return i*e/s.components*s.byteLength;case Lo:return i*e/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case Do:return i*e*2/s.components*s.byteLength;case rc:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case Uo:return i*e*4/s.components*s.byteLength;case Is:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:case to:return Math.max(i,16)*Math.max(e,8)/4;case Ja:case eo:return Math.max(i,8)*Math.max(e,8)/2;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bs:case Mo:case So:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cc:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eo:case To:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cg(i){switch(i){case pi:case ec:return{byteLength:1,components:1};case Yr:case tc:case Kr:return{byteLength:2,components:1};case Co:case Po:return{byteLength:2,components:4};case Yi:case Ro:case hi:return{byteLength:4,components:1};case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ug(i,e,t,n,s,a,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new yt,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,T){return M?new OffscreenCanvas(L,T):$r("canvas")}function P(L,T,j){let ce=1;const ge=je(L);if((ge.width>j||ge.height>j)&&(ce=j/Math.max(ge.width,ge.height)),ce<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const le=Math.floor(ce*ge.width),Ve=Math.floor(ce*ge.height);v===void 0&&(v=y(le,Ve));const Re=T?y(le,Ve):v;return Re.width=le,Re.height=Ve,Re.getContext("2d").drawImage(L,0,0,le,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+le+"x"+Ve+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Un&&L.minFilter!==Wn}function _(L){i.generateMipmap(L)}function F(L,T,j,ce,ge=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=T;if(T===i.RED&&(j===i.FLOAT&&(le=i.R32F),j===i.HALF_FLOAT&&(le=i.R16F),j===i.UNSIGNED_BYTE&&(le=i.R8)),T===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.R8UI),j===i.UNSIGNED_SHORT&&(le=i.R16UI),j===i.UNSIGNED_INT&&(le=i.R32UI),j===i.BYTE&&(le=i.R8I),j===i.SHORT&&(le=i.R16I),j===i.INT&&(le=i.R32I)),T===i.RG&&(j===i.FLOAT&&(le=i.RG32F),j===i.HALF_FLOAT&&(le=i.RG16F),j===i.UNSIGNED_BYTE&&(le=i.RG8)),T===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.RG8UI),j===i.UNSIGNED_SHORT&&(le=i.RG16UI),j===i.UNSIGNED_INT&&(le=i.RG32UI),j===i.BYTE&&(le=i.RG8I),j===i.SHORT&&(le=i.RG16I),j===i.INT&&(le=i.RG32I)),T===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.RGB8UI),j===i.UNSIGNED_SHORT&&(le=i.RGB16UI),j===i.UNSIGNED_INT&&(le=i.RGB32UI),j===i.BYTE&&(le=i.RGB8I),j===i.SHORT&&(le=i.RGB16I),j===i.INT&&(le=i.RGB32I)),T===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),j===i.UNSIGNED_INT&&(le=i.RGBA32UI),j===i.BYTE&&(le=i.RGBA8I),j===i.SHORT&&(le=i.RGBA16I),j===i.INT&&(le=i.RGBA32I)),T===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),T===i.RGBA){const Ve=ge?Gs:Ct.getTransfer(ce);j===i.FLOAT&&(le=i.RGBA32F),j===i.HALF_FLOAT&&(le=i.RGBA16F),j===i.UNSIGNED_BYTE&&(le=Ve===Bt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function D(L,T){let j;return L?T===null||T===Yi||T===Er?j=i.DEPTH24_STENCIL8:T===hi?j=i.DEPTH32F_STENCIL8:T===Yr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yi||T===Er?j=i.DEPTH_COMPONENT24:T===hi?j=i.DEPTH_COMPONENT32F:T===Yr&&(j=i.DEPTH_COMPONENT16),j}function I(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Un&&L.minFilter!==Wn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function u(L){const T=L.target;T.removeEventListener("dispose",u),O(T),T.isVideoTexture&&g.delete(T)}function W(L){const T=L.target;T.removeEventListener("dispose",W),ye(T)}function O(L){const T=n.get(L);if(T.__webglInit===void 0)return;const j=L.source,ce=x.get(j);if(ce){const ge=ce[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&K(L),Object.keys(ce).length===0&&x.delete(j)}n.remove(L)}function K(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const j=L.source,ce=x.get(j);delete ce[T.__cacheKey],c.memory.textures--}function ye(L){const T=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let ge=0;ge<T.__webglFramebuffer[ce].length;ge++)i.deleteFramebuffer(T.__webglFramebuffer[ce][ge]);else i.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)i.deleteFramebuffer(T.__webglFramebuffer[ce]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=L.textures;for(let ce=0,ge=j.length;ce<ge;ce++){const le=n.get(j[ce]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),c.memory.textures--),n.remove(j[ce])}n.remove(L)}let E=0;function C(){E=0}function Q(){const L=E;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),E+=1,L}function ie(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ue(L,T){const j=n.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const ce=L.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(j,L,T);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+T)}function me(L,T){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Mt(j,L,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+T)}function se(L,T){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Mt(j,L,T);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+T)}function pe(L,T){const j=n.get(L);if(L.version>0&&j.__version!==L.version){ae(j,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+T)}const Y={[Ka]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},Te={[Un]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},ve={[Fu]:i.NEVER,[Gu]:i.ALWAYS,[Ou]:i.LESS,[uc]:i.LEQUAL,[Bu]:i.EQUAL,[ku]:i.GEQUAL,[zu]:i.GREATER,[Hu]:i.NOTEQUAL};function Me(L,T){if(T.type===hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Wn||T.magFilter===ua||T.magFilter===us||T.magFilter===qi||T.minFilter===Wn||T.minFilter===ua||T.minFilter===us||T.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Y[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Y[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Y[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Te[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Te[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ve[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Un||T.minFilter!==us&&T.minFilter!==qi||T.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function dt(L,T){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",u));const ce=T.source;let ge=x.get(ce);ge===void 0&&(ge={},x.set(ce,ge));const le=ie(T);if(le!==L.__cacheKey){ge[le]===void 0&&(ge[le]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ge[le].usedTimes++;const Ve=ge[L.__cacheKey];Ve!==void 0&&(ge[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&K(T)),L.__cacheKey=le,L.__webglTexture=ge[le].texture}return j}function Mt(L,T,j){let ce=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=i.TEXTURE_3D);const ge=dt(L,T),le=T.source;t.bindTexture(ce,L.__webglTexture,i.TEXTURE0+j);const Ve=n.get(le);if(le.version!==Ve.__version||ge===!0){t.activeTexture(i.TEXTURE0+j);const Re=Ct.getPrimaries(Ct.workingColorSpace),Ie=T.colorSpace===Ti?null:Ct.getPrimaries(T.colorSpace),pt=T.colorSpace===Ti||Re===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Se=P(T.image,!1,s.maxTextureSize);Se=bt(T,Se);const He=a.convert(T.format,T.colorSpace),tt=a.convert(T.type);let We=F(T.internalFormat,He,tt,T.colorSpace,T.isVideoTexture);Me(ce,T);let Ce;const ht=T.mipmaps,st=T.isVideoTexture!==!0,Lt=Ve.__version===void 0||ge===!0,H=le.dataReady,De=I(T,Se);if(T.isDepthTexture)We=D(T.format===Tr,T.type),Lt&&(st?t.texStorage2D(i.TEXTURE_2D,1,We,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,We,Se.width,Se.height,0,He,tt,null));else if(T.isDataTexture)if(ht.length>0){st&&Lt&&t.texStorage2D(i.TEXTURE_2D,De,We,ht[0].width,ht[0].height);for(let re=0,he=ht.length;re<he;re++)Ce=ht[re],st?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,He,tt,Ce.data):t.texImage2D(i.TEXTURE_2D,re,We,Ce.width,Ce.height,0,He,tt,Ce.data);T.generateMipmaps=!1}else st?(Lt&&t.texStorage2D(i.TEXTURE_2D,De,We,Se.width,Se.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,He,tt,Se.data)):t.texImage2D(i.TEXTURE_2D,0,We,Se.width,Se.height,0,He,tt,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,We,ht[0].width,ht[0].height,Se.depth);for(let re=0,he=ht.length;re<he;re++)if(Ce=ht[re],T.format!==qn)if(He!==null)if(st){if(H)if(T.layerUpdates.size>0){const Ue=Yl(Ce.width,Ce.height,T.format,T.type);for(const Ne of T.layerUpdates){const vt=Ce.data.subarray(Ne*Ue/Ce.data.BYTES_PER_ELEMENT,(Ne+1)*Ue/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ne,Ce.width,Ce.height,1,He,vt,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ce.width,Ce.height,Se.depth,He,Ce.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,We,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ce.width,Ce.height,Se.depth,He,tt,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,We,Ce.width,Ce.height,Se.depth,0,He,tt,Ce.data)}else{st&&Lt&&t.texStorage2D(i.TEXTURE_2D,De,We,ht[0].width,ht[0].height);for(let re=0,he=ht.length;re<he;re++)Ce=ht[re],T.format!==qn?He!==null?st?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,He,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,re,We,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ce.width,Ce.height,He,tt,Ce.data):t.texImage2D(i.TEXTURE_2D,re,We,Ce.width,Ce.height,0,He,tt,Ce.data)}else if(T.isDataArrayTexture)if(st){if(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,We,Se.width,Se.height,Se.depth),H)if(T.layerUpdates.size>0){const re=Yl(Se.width,Se.height,T.format,T.type);for(const he of T.layerUpdates){const Ue=Se.data.subarray(he*re/Se.data.BYTES_PER_ELEMENT,(he+1)*re/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,He,tt,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,He,tt,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,Se.width,Se.height,Se.depth,0,He,tt,Se.data);else if(T.isData3DTexture)st?(Lt&&t.texStorage3D(i.TEXTURE_3D,De,We,Se.width,Se.height,Se.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,He,tt,Se.data)):t.texImage3D(i.TEXTURE_3D,0,We,Se.width,Se.height,Se.depth,0,He,tt,Se.data);else if(T.isFramebufferTexture){if(Lt)if(st)t.texStorage2D(i.TEXTURE_2D,De,We,Se.width,Se.height);else{let re=Se.width,he=Se.height;for(let Ue=0;Ue<De;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,We,re,he,0,He,tt,null),re>>=1,he>>=1}}else if(ht.length>0){if(st&&Lt){const re=je(ht[0]);t.texStorage2D(i.TEXTURE_2D,De,We,re.width,re.height)}for(let re=0,he=ht.length;re<he;re++)Ce=ht[re],st?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,He,tt,Ce):t.texImage2D(i.TEXTURE_2D,re,We,He,tt,Ce);T.generateMipmaps=!1}else if(st){if(Lt){const re=je(Se);t.texStorage2D(i.TEXTURE_2D,De,We,re.width,re.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,tt,Se)}else t.texImage2D(i.TEXTURE_2D,0,We,He,tt,Se);m(T)&&_(ce),Ve.__version=le.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ae(L,T,j){if(T.image.length!==6)return;const ce=dt(L,T),ge=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+j);const le=n.get(ge);if(ge.version!==le.__version||ce===!0){t.activeTexture(i.TEXTURE0+j);const Ve=Ct.getPrimaries(Ct.workingColorSpace),Re=T.colorSpace===Ti?null:Ct.getPrimaries(T.colorSpace),Ie=T.colorSpace===Ti||Ve===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,He=[];for(let he=0;he<6;he++)!pt&&!Se?He[he]=P(T.image[he],!0,s.maxCubemapSize):He[he]=Se?T.image[he].image:T.image[he],He[he]=bt(T,He[he]);const tt=He[0],We=a.convert(T.format,T.colorSpace),Ce=a.convert(T.type),ht=F(T.internalFormat,We,Ce,T.colorSpace),st=T.isVideoTexture!==!0,Lt=le.__version===void 0||ce===!0,H=ge.dataReady;let De=I(T,tt);Me(i.TEXTURE_CUBE_MAP,T);let re;if(pt){st&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ht,tt.width,tt.height);for(let he=0;he<6;he++){re=He[he].mipmaps;for(let Ue=0;Ue<re.length;Ue++){const Ne=re[Ue];T.format!==qn?We!==null?st?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,0,0,Ne.width,Ne.height,We,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,ht,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,0,0,Ne.width,Ne.height,We,Ce,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,ht,Ne.width,Ne.height,0,We,Ce,Ne.data)}}}else{if(re=T.mipmaps,st&&Lt){re.length>0&&De++;const he=je(He[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ht,he.width,he.height)}for(let he=0;he<6;he++)if(Se){st?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,He[he].width,He[he].height,We,Ce,He[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,He[he].width,He[he].height,0,We,Ce,He[he].data);for(let Ue=0;Ue<re.length;Ue++){const vt=re[Ue].image[he].image;st?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,0,0,vt.width,vt.height,We,Ce,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,ht,vt.width,vt.height,0,We,Ce,vt.data)}}else{st?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Ce,He[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,We,Ce,He[he]);for(let Ue=0;Ue<re.length;Ue++){const Ne=re[Ue];st?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,0,0,We,Ce,Ne.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,ht,We,Ce,Ne.image[he])}}}m(T)&&_(i.TEXTURE_CUBE_MAP),le.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function _e(L,T,j,ce,ge,le){const Ve=a.convert(j.format,j.colorSpace),Re=a.convert(j.type),Ie=F(j.internalFormat,Ve,Re,j.colorSpace);if(!n.get(T).__hasExternalTextures){const Se=Math.max(1,T.width>>le),He=Math.max(1,T.height>>le);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,le,Ie,Se,He,T.depth,0,Ve,Re,null):t.texImage2D(ge,le,Ie,Se,He,0,Ve,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),gt(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ge,n.get(j).__webglTexture,0,ct(T)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,ge,n.get(j).__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(L,T,j){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const ce=T.depthTexture,ge=ce&&ce.isDepthTexture?ce.type:null,le=D(T.stencilBuffer,ge),Ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=ct(T);gt(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,le,T.width,T.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,le,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,L)}else{const ce=T.textures;for(let ge=0;ge<ce.length;ge++){const le=ce[ge],Ve=a.convert(le.format,le.colorSpace),Re=a.convert(le.type),Ie=F(le.internalFormat,Ve,Re,le.colorSpace),pt=ct(T);j&&gt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Ie,T.width,T.height):gt(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue(T.depthTexture,0);const ce=n.get(T.depthTexture).__webglTexture,ge=ct(T);if(T.depthTexture.format===vr)gt(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(T.depthTexture.format===Tr)gt(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ye(L){const T=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ce=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",ge)};ce.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=ce}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");we(T.__webglFramebuffer,L)}else if(j){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=i.createRenderbuffer(),Pe(T.__webglDepthbuffer[ce],L,!1);else{const ge=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,le)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Pe(T.__webglDepthbuffer,L,!1);else{const ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(L,T,j){const ce=n.get(L);T!==void 0&&_e(ce.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Ye(L)}function et(L){const T=L.texture,j=n.get(L),ce=n.get(T);L.addEventListener("dispose",W);const ge=L.textures,le=L.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=T.version,c.memory.textures++),le){j.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Re]=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)j.__webglFramebuffer[Re][Ie]=i.createFramebuffer()}else j.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)j.__webglFramebuffer[Re]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let Re=0,Ie=ge.length;Re<Ie;Re++){const pt=n.get(ge[Re]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&gt(L)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Re=0;Re<ge.length;Re++){const Ie=ge[Re];j.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Re]);const pt=a.convert(Ie.format,Ie.colorSpace),Se=a.convert(Ie.type),He=F(Ie.internalFormat,pt,Se,Ie.colorSpace,L.isXRRenderTarget===!0),tt=ct(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,He,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,j.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(j.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Me(i.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)_e(j.__webglFramebuffer[Re][Ie],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ie);else _e(j.__webglFramebuffer[Re],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);m(T)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Re=0,Ie=ge.length;Re<Ie;Re++){const pt=ge[Re],Se=n.get(pt);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),Me(i.TEXTURE_2D,pt),_e(j.__webglFramebuffer,L,pt,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),m(pt)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,ce.__webglTexture),Me(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)_e(j.__webglFramebuffer[Ie],L,T,i.COLOR_ATTACHMENT0,Re,Ie);else _e(j.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Re,0);m(T)&&_(Re),t.unbindTexture()}L.depthBuffer&&Ye(L)}function mt(L){const T=L.textures;for(let j=0,ce=T.length;j<ce;j++){const ge=T[j];if(m(ge)){const le=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ve=n.get(ge).__webglTexture;t.bindTexture(le,Ve),_(le),t.unbindTexture()}}}const ot=[],U=[];function At(L){if(L.samples>0){if(gt(L)===!1){const T=L.textures,j=L.width,ce=L.height;let ge=i.COLOR_BUFFER_BIT;const le=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=n.get(L),Re=T.length>1;if(Re)for(let Ie=0;Ie<T.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const pt=n.get(T[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,j,ce,0,0,j,ce,ge,i.NEAREST),d===!0&&(ot.length=0,U.length=0,ot.push(i.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ot.push(le),U.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Ie=0;Ie<T.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const pt=n.get(T[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,pt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ct(L){return Math.min(s.maxSamples,L.samples)}function gt(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(L){const T=c.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function bt(L,T){const j=L.colorSpace,ce=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Ci&&j!==Ti&&(Ct.getTransfer(j)===Bt?(ce!==qn||ge!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=C,this.setTexture2D=ue,this.setTexture2DArray=me,this.setTexture3D=se,this.setTextureCube=pe,this.rebindTextures=Ke,this.setupRenderTarget=et,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=gt}function fg(i,e){function t(n,s=Ti){let a;const c=Ct.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===Co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return i.BYTE;if(n===tc)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===Ro)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===Kr)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===rc)return i.RGB;if(n===qn)return i.RGBA;if(n===sc)return i.LUMINANCE;if(n===ac)return i.LUMINANCE_ALPHA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Tr)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===lc)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===Uo)return i.RGBA_INTEGER;if(n===Is||n===Ns||n===Fs||n===Os)if(c===Bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Is)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Is)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Qa||n===eo||n===to)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ja)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===io||n===ro)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===no||n===io)return c===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ro)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ao||n===oo||n===lo||n===co||n===uo||n===fo||n===ho||n===po||n===mo||n===go||n===_o||n===vo||n===xo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===so)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ao)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oo)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lo)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ho)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===po)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mo)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vo)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs||n===Mo||n===So)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Bs)return c===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===So)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===yo||n===Eo||n===To)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Bs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class hg extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const l=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const P of e.hand.values()){const m=t.getJointPose(P,n),_=this._getHandJoint(p,P);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,y=.005;p.inputState.pinching&&x>M+y?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-y&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return l!==null&&(l.visible=s!==null),d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`;class gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new gn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _g extends Ar{constructor(e,t){super();const n=this;let s=null,a=1,c=null,l="local-floor",d=1,p=null,g=null,v=null,x=null,M=null,y=null;const P=new gg,m=t.getContextAttributes();let _=null,F=null;const D=[],I=[],u=new yt;let W=null;const O=new Dn;O.layers.enable(1),O.viewport=new Xt;const K=new Dn;K.layers.enable(2),K.viewport=new Xt;const ye=[O,K],E=new hg;E.layers.enable(1),E.layers.enable(2);let C=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let _e=D[ae];return _e===void 0&&(_e=new Ba,D[ae]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ae){let _e=D[ae];return _e===void 0&&(_e=new Ba,D[ae]=_e),_e.getGripSpace()},this.getHand=function(ae){let _e=D[ae];return _e===void 0&&(_e=new Ba,D[ae]=_e),_e.getHandSpace()};function ie(ae){const _e=I.indexOf(ae.inputSource);if(_e===-1)return;const Pe=D[_e];Pe!==void 0&&(Pe.update(ae.inputSource,ae.frame,p||c),Pe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ue(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",me);for(let ae=0;ae<D.length;ae++){const _e=I[ae];_e!==null&&(I[ae]=null,D[ae].disconnect(_e))}C=null,Q=null,P.reset(),e.setRenderTarget(_),M=null,x=null,v=null,s=null,F=null,Mt.stop(),n.isPresenting=!1,e.setPixelRatio(W),e.setSize(u.width,u.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){a=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){l=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",me),m.xrCompatible!==!0&&await t.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(u),s.renderState.layers===void 0){const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new ji(M.framebufferWidth,M.framebufferHeight,{format:qn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let _e=null,Pe=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Tr:vr,Pe=m.stencil?Er:Yi);const Ye={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};v=new XRWebGLBinding(s,t),x=v.createProjectionLayer(Ye),s.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new ji(x.textureWidth,x.textureHeight,{format:qn,type:pi,depthTexture:new Tc(x.textureWidth,x.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await s.requestReferenceSpace(l),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function me(ae){for(let _e=0;_e<ae.removed.length;_e++){const Pe=ae.removed[_e],we=I.indexOf(Pe);we>=0&&(I[we]=null,D[we].disconnect(Pe))}for(let _e=0;_e<ae.added.length;_e++){const Pe=ae.added[_e];let we=I.indexOf(Pe);if(we===-1){for(let Ke=0;Ke<D.length;Ke++)if(Ke>=I.length){I.push(Pe),we=Ke;break}else if(I[Ke]===null){I[Ke]=Pe,we=Ke;break}if(we===-1)break}const Ye=D[we];Ye&&Ye.connect(Pe)}}const se=new ne,pe=new ne;function Y(ae,_e,Pe){se.setFromMatrixPosition(_e.matrixWorld),pe.setFromMatrixPosition(Pe.matrixWorld);const we=se.distanceTo(pe),Ye=_e.projectionMatrix.elements,Ke=Pe.projectionMatrix.elements,et=Ye[14]/(Ye[10]-1),mt=Ye[14]/(Ye[10]+1),ot=(Ye[9]+1)/Ye[5],U=(Ye[9]-1)/Ye[5],At=(Ye[8]-1)/Ye[0],ct=(Ke[8]+1)/Ke[0],gt=et*At,Ze=et*ct,bt=we/(-At+ct),je=bt*-At;if(_e.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(je),ae.translateZ(bt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ye[10]===-1)ae.projectionMatrix.copy(_e.projectionMatrix),ae.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const L=et+bt,T=mt+bt,j=gt-je,ce=Ze+(we-je),ge=ot*mt/T*L,le=U*mt/T*L;ae.projectionMatrix.makePerspective(j,ce,ge,le,L,T),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Te(ae,_e){_e===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(_e.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let _e=ae.near,Pe=ae.far;P.texture!==null&&(P.depthNear>0&&(_e=P.depthNear),P.depthFar>0&&(Pe=P.depthFar)),E.near=K.near=O.near=_e,E.far=K.far=O.far=Pe,(C!==E.near||Q!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,Q=E.far);const we=ae.parent,Ye=E.cameras;Te(E,we);for(let Ke=0;Ke<Ye.length;Ke++)Te(Ye[Ke],we);Ye.length===2?Y(E,O,K):E.projectionMatrix.copy(O.projectionMatrix),ve(ae,E,we)};function ve(ae,_e,Pe){Pe===null?ae.matrix.copy(_e.matrixWorld):(ae.matrix.copy(Pe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(_e.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(_e.projectionMatrix),ae.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=jr*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&M===null))return d},this.setFoveation=function(ae){d=ae,x!==null&&(x.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(E)};let Me=null;function dt(ae,_e){if(g=_e.getViewerPose(p||c),y=_e,g!==null){const Pe=g.views;M!==null&&(e.setRenderTargetFramebuffer(F,M.framebuffer),e.setRenderTarget(F));let we=!1;Pe.length!==E.cameras.length&&(E.cameras.length=0,we=!0);for(let Ke=0;Ke<Pe.length;Ke++){const et=Pe[Ke];let mt=null;if(M!==null)mt=M.getViewport(et);else{const U=v.getViewSubImage(x,et);mt=U.viewport,Ke===0&&(e.setRenderTargetTextures(F,U.colorTexture,x.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(F))}let ot=ye[Ke];ot===void 0&&(ot=new Dn,ot.layers.enable(Ke),ot.viewport=new Xt,ye[Ke]=ot),ot.matrix.fromArray(et.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(et.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(mt.x,mt.y,mt.width,mt.height),Ke===0&&(E.matrix.copy(ot.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),we===!0&&E.cameras.push(ot)}const Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){const Ke=v.getDepthInformation(Pe[0]);Ke&&Ke.isValid&&Ke.texture&&P.init(e,Ke,s.renderState)}}for(let Pe=0;Pe<D.length;Pe++){const we=I[Pe],Ye=D[Pe];we!==null&&Ye!==void 0&&Ye.update(we,_e,p||c)}Me&&Me(ae,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),y=null}const Mt=new Ec;Mt.setAnimationLoop(dt),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}}const Hi=new mi,vg=new qt;function xg(i,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,xc(i)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function s(m,_,F,D,I){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(m,_):_.isMeshToonMaterial?(a(m,_),v(m,_)):_.isMeshPhongMaterial?(a(m,_),g(m,_)):_.isMeshStandardMaterial?(a(m,_),x(m,_),_.isMeshPhysicalMaterial&&M(m,_,I)):_.isMeshMatcapMaterial?(a(m,_),y(m,_)):_.isMeshDepthMaterial?a(m,_):_.isMeshDistanceMaterial?(a(m,_),P(m,_)):_.isMeshNormalMaterial?a(m,_):_.isLineBasicMaterial?(c(m,_),_.isLineDashedMaterial&&l(m,_)):_.isPointsMaterial?d(m,_,F,D):_.isSpriteMaterial?p(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===xn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===xn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const F=e.get(_),D=F.envMap,I=F.envMapRotation;D&&(m.envMap.value=D,Hi.copy(I),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Hi)),m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function l(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function d(m,_,F,D){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*F,m.scale.value=D*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function p(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function g(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function v(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function x(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function M(m,_,F){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===xn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=F.texture,m.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,_){_.matcap&&(m.matcap.value=_.matcap)}function P(m,_){const F=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(F.matrixWorld),m.nearDistance.value=F.shadow.camera.near,m.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,e,t,n){let s={},a={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(F,D){const I=D.program;n.uniformBlockBinding(F,I)}function p(F,D){let I=s[F.id];I===void 0&&(y(F),I=g(F),s[F.id]=I,F.addEventListener("dispose",m));const u=D.program;n.updateUBOMapping(F,u);const W=e.render.frame;a[F.id]!==W&&(x(F),a[F.id]=W)}function g(F){const D=v();F.__bindingPointIndex=D;const I=i.createBuffer(),u=F.__size,W=F.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,u,W),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,I),I}function v(){for(let F=0;F<l;F++)if(c.indexOf(F)===-1)return c.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const D=s[F.id],I=F.uniforms,u=F.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let W=0,O=I.length;W<O;W++){const K=Array.isArray(I[W])?I[W]:[I[W]];for(let ye=0,E=K.length;ye<E;ye++){const C=K[ye];if(M(C,W,ye,u)===!0){const Q=C.__offset,ie=Array.isArray(C.value)?C.value:[C.value];let ue=0;for(let me=0;me<ie.length;me++){const se=ie[me],pe=P(se);typeof se=="number"||typeof se=="boolean"?(C.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,Q+ue,C.__data)):se.isMatrix3?(C.__data[0]=se.elements[0],C.__data[1]=se.elements[1],C.__data[2]=se.elements[2],C.__data[3]=0,C.__data[4]=se.elements[3],C.__data[5]=se.elements[4],C.__data[6]=se.elements[5],C.__data[7]=0,C.__data[8]=se.elements[6],C.__data[9]=se.elements[7],C.__data[10]=se.elements[8],C.__data[11]=0):(se.toArray(C.__data,ue),ue+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(F,D,I,u){const W=F.value,O=D+"_"+I;if(u[O]===void 0)return typeof W=="number"||typeof W=="boolean"?u[O]=W:u[O]=W.clone(),!0;{const K=u[O];if(typeof W=="number"||typeof W=="boolean"){if(K!==W)return u[O]=W,!0}else if(K.equals(W)===!1)return K.copy(W),!0}return!1}function y(F){const D=F.uniforms;let I=0;const u=16;for(let O=0,K=D.length;O<K;O++){const ye=Array.isArray(D[O])?D[O]:[D[O]];for(let E=0,C=ye.length;E<C;E++){const Q=ye[E],ie=Array.isArray(Q.value)?Q.value:[Q.value];for(let ue=0,me=ie.length;ue<me;ue++){const se=ie[ue],pe=P(se),Y=I%u,Te=Y%pe.boundary,ve=Y+Te;I+=Te,ve!==0&&u-ve<pe.storage&&(I+=u-ve),Q.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=I,I+=pe.storage}}}const W=I%u;return W>0&&(I+=u-W),F.__size=I,F.__cache={},this}function P(F){const D={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(D.boundary=4,D.storage=4):F.isVector2?(D.boundary=8,D.storage=8):F.isVector3||F.isColor?(D.boundary=16,D.storage=12):F.isVector4?(D.boundary=16,D.storage=16):F.isMatrix3?(D.boundary=48,D.storage=48):F.isMatrix4?(D.boundary=64,D.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),D}function m(F){const D=F.target;D.removeEventListener("dispose",m);const I=c.indexOf(D.__bindingPointIndex);c.splice(I,1),i.deleteBuffer(s[D.id]),delete s[D.id],delete a[D.id]}function _(){for(const F in s)i.deleteBuffer(s[F]);c=[],s={},a={}}return{bind:d,update:p,dispose:_}}class Sg{constructor(e={}){const{canvas:t=of(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),y=new Int32Array(4);let P=null,m=null;const _=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Ai,this.toneMappingExposure=1;const D=this;let I=!1,u=0,W=0,O=null,K=-1,ye=null;const E=new Xt,C=new Xt;let Q=null;const ie=new Pt(0);let ue=0,me=t.width,se=t.height,pe=1,Y=null,Te=null;const ve=new Xt(0,0,me,se),Me=new Xt(0,0,me,se);let dt=!1;const Mt=new yc;let ae=!1,_e=!1;const Pe=new qt,we=new qt,Ye=new ne,Ke=new Xt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function ot(){return O===null?pe:1}let U=n;function At(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),U===null){const V="webgl2";if(U=At(V,R),U===null)throw At(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,gt,Ze,bt,je,L,T,j,ce,ge,le,Ve,Re,Ie,pt,Se,He,tt,We,Ce,ht,st,Lt,H;function De(){ct=new Ap(U),ct.init(),st=new fg(U,ct),gt=new xp(U,ct,e,st),Ze=new lg(U),gt.reverseDepthBuffer&&Ze.buffers.depth.setReversed(!0),bt=new Cp(U),je=new Ym,L=new ug(U,ct,Ze,je,gt,st,bt),T=new Sp(D),j=new bp(D),ce=new Nf(U),Lt=new _p(U,ce),ge=new wp(U,ce,bt,Lt),le=new Lp(U,ge,ce,bt),We=new Pp(U,gt,L),Se=new Mp(je),Ve=new qm(D,T,j,ct,gt,Lt,Se),Re=new xg(D,je),Ie=new $m,pt=new tg(ct),tt=new gp(D,T,j,Ze,le,x,d),He=new ag(D,le,gt),H=new Mg(U,bt,gt,Ze),Ce=new vp(U,ct,bt),ht=new Rp(U,ct,bt),bt.programs=Ve.programs,D.capabilities=gt,D.extensions=ct,D.properties=je,D.renderLists=Ie,D.shadowMap=He,D.state=Ze,D.info=bt}De();const re=new _g(D,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(me,se,!1))},this.getSize=function(R){return R.set(me,se)},this.setSize=function(R,V,Z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=R,se=V,t.width=Math.floor(R*pe),t.height=Math.floor(V*pe),Z===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(me*pe,se*pe).floor()},this.setDrawingBufferSize=function(R,V,Z){me=R,se=V,pe=Z,t.width=Math.floor(R*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(ve)},this.setViewport=function(R,V,Z,J){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,V,Z,J),Ze.viewport(E.copy(ve).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,V,Z,J){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,V,Z,J),Ze.scissor(C.copy(Me).multiplyScalar(pe).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){Ze.setScissorTest(dt=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){Te=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(R=!0,V=!0,Z=!0){let J=0;if(R){let X=!1;if(O!==null){const Ee=O.texture.format;X=Ee===Uo||Ee===Do||Ee===Lo}if(X){const Ee=O.texture.type,be=Ee===pi||Ee===Yi||Ee===Yr||Ee===Er||Ee===Co||Ee===Po,Be=tt.getClearColor(),ke=tt.getClearAlpha(),$e=Be.r,Qe=Be.g,Xe=Be.b;be?(M[0]=$e,M[1]=Qe,M[2]=Xe,M[3]=ke,U.clearBufferuiv(U.COLOR,0,M)):(y[0]=$e,y[1]=Qe,y[2]=Xe,y[3]=ke,U.clearBufferiv(U.COLOR,0,y))}else J|=U.COLOR_BUFFER_BIT}V&&(J|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ie.dispose(),pt.dispose(),je.dispose(),T.dispose(),j.dispose(),le.dispose(),Lt.dispose(),H.dispose(),Ve.dispose(),re.dispose(),re.removeEventListener("sessionstart",Pr),re.removeEventListener("sessionend",ti),Yn.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=bt.autoReset,V=He.enabled,Z=He.autoUpdate,J=He.needsUpdate,X=He.type;De(),bt.autoReset=R,He.enabled=V,He.autoUpdate=Z,He.needsUpdate=J,He.type=X}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const V=R.target;V.removeEventListener("dispose",vt),Gt(V)}function Gt(R){an(R),je.remove(R)}function an(R){const V=je.get(R).programs;V!==void 0&&(V.forEach(function(Z){Ve.releaseProgram(Z)}),R.isShaderMaterial&&Ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Z,J,X,Ee){V===null&&(V=et);const be=X.isMesh&&X.matrixWorld.determinant()<0,Be=es(R,V,Z,J,X);Ze.setMaterial(J,be);let ke=Z.index,$e=1;if(J.wireframe===!0){if(ke=ge.getWireframeAttribute(Z),ke===void 0)return;$e=2}const Qe=Z.drawRange,Xe=Z.attributes.position;let wt=Qe.start*$e,Dt=(Qe.start+Qe.count)*$e;Ee!==null&&(wt=Math.max(wt,Ee.start*$e),Dt=Math.min(Dt,(Ee.start+Ee.count)*$e)),ke!==null?(wt=Math.max(wt,0),Dt=Math.min(Dt,ke.count)):Xe!=null&&(wt=Math.max(wt,0),Dt=Math.min(Dt,Xe.count));const Ft=Dt-wt;if(Ft<0||Ft===1/0)return;Lt.setup(X,J,Be,Z,ke);let nn,Et=Ce;if(ke!==null&&(nn=ce.get(ke),Et=ht,Et.setIndex(nn)),X.isMesh)J.wireframe===!0?(Ze.setLineWidth(J.wireframeLinewidth*ot()),Et.setMode(U.LINES)):Et.setMode(U.TRIANGLES);else if(X.isLine){let ze=J.linewidth;ze===void 0&&(ze=1),Ze.setLineWidth(ze*ot()),X.isLineSegments?Et.setMode(U.LINES):X.isLineLoop?Et.setMode(U.LINE_LOOP):Et.setMode(U.LINE_STRIP)}else X.isPoints?Et.setMode(U.POINTS):X.isSprite&&Et.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Et.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ze=X._multiDrawStarts,Yt=X._multiDrawCounts,_t=X._multiDrawCount,Sn=ke?ce.get(ke).bytesPerElement:1,_i=je.get(J).currentProgram.getUniforms();for(let Vt=0;Vt<_t;Vt++)_i.setValue(U,"_gl_DrawID",Vt),Et.render(ze[Vt]/Sn,Yt[Vt])}else if(X.isInstancedMesh)Et.renderInstances(wt,Ft,X.count);else if(Z.isInstancedBufferGeometry){const ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Yt=Math.min(Z.instanceCount,ze);Et.renderInstances(wt,Ft,Yt)}else Et.render(wt,Ft)};function St(R,V,Z){R.transparent===!0&&R.side===fi&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,Di(R,V,Z),R.side=wi,R.needsUpdate=!0,Di(R,V,Z),R.side=fi):Di(R,V,Z)}this.compile=function(R,V,Z=null){Z===null&&(Z=R),m=pt.get(Z),m.init(V),F.push(m),Z.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),R!==Z&&R.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const J=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Be=Ee[be];St(Be,Z,X),J.add(Be)}else St(Ee,Z,X),J.add(Ee)}),F.pop(),m=null,J},this.compileAsync=function(R,V,Z=null){const J=this.compile(R,V,Z);return new Promise(X=>{function Ee(){if(J.forEach(function(be){je.get(be).currentProgram.isReady()&&J.delete(be)}),J.size===0){X(R);return}setTimeout(Ee,10)}ct.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let on=null;function Fn(R){on&&on(R)}function Pr(){Yn.stop()}function ti(){Yn.start()}const Yn=new Ec;Yn.setAnimationLoop(Fn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(R){on=R,re.setAnimationLoop(R),R===null?Yn.stop():Yn.start()},re.addEventListener("sessionstart",Pr),re.addEventListener("sessionend",ti),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(V),V=re.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,V,O),m=pt.get(R,F.length),m.init(V),F.push(m),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Mt.setFromProjectionMatrix(we),_e=this.localClippingEnabled,ae=Se.init(this.clippingPlanes,_e),P=Ie.get(R,_.length),P.init(),_.push(P),re.enabled===!0&&re.isPresenting===!0){const Ee=D.xr.getDepthSensingMesh();Ee!==null&&Pi(Ee,V,-1/0,D.sortObjects)}Pi(R,V,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(Y,Te),mt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,mt&&tt.addToRenderList(P,R),this.info.render.frame++,ae===!0&&Se.beginShadows();const Z=m.state.shadowsArray;He.render(Z,R,V),ae===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=P.opaque,X=P.transmissive;if(m.setupLights(),V.isArrayCamera){const Ee=V.cameras;if(X.length>0)for(let be=0,Be=Ee.length;be<Be;be++){const ke=Ee[be];Lr(J,X,R,ke)}mt&&tt.render(R);for(let be=0,Be=Ee.length;be<Be;be++){const ke=Ee[be];Li(P,R,ke,ke.viewport)}}else X.length>0&&Lr(J,X,R,V),mt&&tt.render(R),Li(P,R,V);O!==null&&(L.updateMultisampleRenderTarget(O),L.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(D,R,V),Lt.resetDefaultState(),K=-1,ye=null,F.pop(),F.length>0?(m=F[F.length-1],ae===!0&&Se.setGlobalState(D.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?P=_[_.length-1]:P=null};function Pi(R,V,Z,J){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Mt.intersectsSprite(R)){J&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(we);const be=le.update(R),Be=R.material;Be.visible&&P.push(R,be,Be,Z,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Mt.intersectsObject(R))){const be=le.update(R),Be=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ke.copy(be.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(we)),Array.isArray(Be)){const ke=be.groups;for(let $e=0,Qe=ke.length;$e<Qe;$e++){const Xe=ke[$e],wt=Be[Xe.materialIndex];wt&&wt.visible&&P.push(R,be,wt,Z,Ke.z,Xe)}}else Be.visible&&P.push(R,be,Be,Z,Ke.z,null)}}const Ee=R.children;for(let be=0,Be=Ee.length;be<Be;be++)Pi(Ee[be],V,Z,J)}function Li(R,V,Z,J){const X=R.opaque,Ee=R.transmissive,be=R.transparent;m.setupLightsView(Z),ae===!0&&Se.setGlobalState(D.clippingPlanes,Z),J&&Ze.viewport(E.copy(J)),X.length>0&&$i(X,V,Z),Ee.length>0&&$i(Ee,V,Z),be.length>0&&$i(be,V,Z),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Lr(R,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new ji(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Kr:pi,minFilter:qi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Ee=m.state.transmissionRenderTarget[J.id],be=J.viewport||E;Ee.setSize(be.z,be.w);const Be=D.getRenderTarget();D.setRenderTarget(Ee),D.getClearColor(ie),ue=D.getClearAlpha(),ue<1&&D.setClearColor(16777215,.5),D.clear(),mt&&tt.render(Z);const ke=D.toneMapping;D.toneMapping=Ai;const $e=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),ae===!0&&Se.setGlobalState(D.clippingPlanes,J),$i(R,Z,J),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Xe=0,wt=V.length;Xe<wt;Xe++){const Dt=V[Xe],Ft=Dt.object,nn=Dt.geometry,Et=Dt.material,ze=Dt.group;if(Et.side===fi&&Ft.layers.test(J.layers)){const Yt=Et.side;Et.side=xn,Et.needsUpdate=!0,gi(Ft,Z,J,nn,Et,ze),Et.side=Yt,Et.needsUpdate=!0,Qe=!0}}Qe===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}D.setRenderTarget(Be),D.setClearColor(ie,ue),$e!==void 0&&(J.viewport=$e),D.toneMapping=ke}function $i(R,V,Z){const J=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Ee=R.length;X<Ee;X++){const be=R[X],Be=be.object,ke=be.geometry,$e=J===null?be.material:J,Qe=be.group;Be.layers.test(Z.layers)&&gi(Be,V,Z,ke,$e,Qe)}}function gi(R,V,Z,J,X,Ee){R.onBeforeRender(D,V,Z,J,X,Ee),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(D,V,Z,J,R,Ee),X.transparent===!0&&X.side===fi&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,D.renderBufferDirect(Z,V,J,X,R,Ee),X.side=wi,X.needsUpdate=!0,D.renderBufferDirect(Z,V,J,X,R,Ee),X.side=fi):D.renderBufferDirect(Z,V,J,X,R,Ee),R.onAfterRender(D,V,Z,J,X,Ee)}function Di(R,V,Z){V.isScene!==!0&&(V=et);const J=je.get(R),X=m.state.lights,Ee=m.state.shadowsArray,be=X.state.version,Be=Ve.getParameters(R,X.state,Ee,V,Z),ke=Ve.getProgramCacheKey(Be);let $e=J.programs;J.environment=R.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(R.isMeshStandardMaterial?j:T).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",vt),$e=new Map,J.programs=$e);let Qe=$e.get(ke);if(Qe!==void 0){if(J.currentProgram===Qe&&J.lightsStateVersion===be)return Ur(R,Be),Qe}else Be.uniforms=Ve.getUniforms(R),R.onBeforeCompile(Be,D),Qe=Ve.acquireProgram(Be,ke),$e.set(ke,Qe),J.uniforms=Be.uniforms;const Xe=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),Ur(R,Be),J.needsLights=Js(R),J.lightsStateVersion=be,J.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Qe,J.uniformsList=null,Qe}function Dr(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Hs.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Ur(R,V){const Z=je.get(R);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function es(R,V,Z,J,X){V.isScene!==!0&&(V=et),L.resetTextureUnits();const Ee=V.fog,be=J.isMeshStandardMaterial?V.environment:null,Be=O===null?D.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ci,ke=(J.isMeshStandardMaterial?j:T).get(J.envMap||be),$e=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xe=!!Z.morphAttributes.position,wt=!!Z.morphAttributes.normal,Dt=!!Z.morphAttributes.color;let Ft=Ai;J.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ft=D.toneMapping);const nn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=nn!==void 0?nn.length:0,ze=je.get(J),Yt=m.state.lights;if(ae===!0&&(_e===!0||R!==ye)){const fn=R===ye&&J.id===K;Se.setState(J,R,fn)}let _t=!1;J.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Yt.state.version||ze.outputColorSpace!==Be||X.isBatchedMesh&&ze.batching===!1||!X.isBatchedMesh&&ze.batching===!0||X.isBatchedMesh&&ze.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ze.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||X.isInstancedMesh&&ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ze.instancingMorph===!1&&X.morphTexture!==null||ze.envMap!==ke||J.fog===!0&&ze.fog!==Ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Se.numPlanes||ze.numIntersection!==Se.numIntersection)||ze.vertexAlphas!==$e||ze.vertexTangents!==Qe||ze.morphTargets!==Xe||ze.morphNormals!==wt||ze.morphColors!==Dt||ze.toneMapping!==Ft||ze.morphTargetsCount!==Et)&&(_t=!0):(_t=!0,ze.__version=J.version);let Sn=ze.currentProgram;_t===!0&&(Sn=Di(J,V,X));let _i=!1,Vt=!1,On=!1;const Ot=Sn.getUniforms(),jn=ze.uniforms;if(Ze.useProgram(Sn.program)&&(_i=!0,Vt=!0,On=!0),J.id!==K&&(K=J.id,Vt=!0),_i||ye!==R){gt.reverseDepthBuffer?(Pe.copy(R.projectionMatrix),cf(Pe),uf(Pe),Ot.setValue(U,"projectionMatrix",Pe)):Ot.setValue(U,"projectionMatrix",R.projectionMatrix),Ot.setValue(U,"viewMatrix",R.matrixWorldInverse);const fn=Ot.map.cameraPosition;fn!==void 0&&fn.setValue(U,Ye.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&Ot.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ot.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),ye!==R&&(ye=R,Vt=!0,On=!0)}if(X.isSkinnedMesh){Ot.setOptional(U,X,"bindMatrix"),Ot.setOptional(U,X,"bindMatrixInverse");const fn=X.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ot.setValue(U,"boneTexture",fn.boneTexture,L))}X.isBatchedMesh&&(Ot.setOptional(U,X,"batchingTexture"),Ot.setValue(U,"batchingTexture",X._matricesTexture,L),Ot.setOptional(U,X,"batchingIdTexture"),Ot.setValue(U,"batchingIdTexture",X._indirectTexture,L),Ot.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&Ot.setValue(U,"batchingColorTexture",X._colorsTexture,L));const Ki=Z.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&We.update(X,Z,Sn),(Vt||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,Ot.setValue(U,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(jn.envMap.value=ke,jn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(jn.envMapIntensity.value=V.environmentIntensity),Vt&&(Ot.setValue(U,"toneMappingExposure",D.toneMappingExposure),ze.needsLights&&Ir(jn,On),Ee&&J.fog===!0&&Re.refreshFogUniforms(jn,Ee),Re.refreshMaterialUniforms(jn,J,pe,se,m.state.transmissionRenderTarget[R.id]),Hs.upload(U,Dr(ze),jn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Hs.upload(U,Dr(ze),jn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ot.setValue(U,"center",X.center),Ot.setValue(U,"modelViewMatrix",X.modelViewMatrix),Ot.setValue(U,"normalMatrix",X.normalMatrix),Ot.setValue(U,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const fn=J.uniformsGroups;for(let ni=0,ts=fn.length;ni<ts;ni++){const Zi=fn[ni];H.update(Zi,Sn),H.bind(Zi,Sn)}}return Sn}function Ir(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Js(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,V,Z){je.get(R.texture).__webglTexture=V,je.get(R.depthTexture).__webglTexture=Z;const J=je.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const Z=je.get(R);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Z=0){O=R,u=V,W=Z;let J=!0,X=null,Ee=!1,be=!1;if(R){const ke=je.get(R);if(ke.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(U.FRAMEBUFFER,null),J=!1;else if(ke.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(ke.__hasExternalTextures)L.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(ke.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(be=!0);const Qe=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[V])?X=Qe[V][Z]:X=Qe[V],Ee=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?X=je.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?X=Qe[Z]:X=Qe,E.copy(R.viewport),C.copy(R.scissor),Q=R.scissorTest}else E.copy(ve).multiplyScalar(pe).floor(),C.copy(Me).multiplyScalar(pe).floor(),Q=dt;if(Ze.bindFramebuffer(U.FRAMEBUFFER,X)&&J&&Ze.drawBuffers(R,X),Ze.viewport(E),Ze.scissor(C),Ze.setScissorTest(Q),Ee){const ke=je.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,Z)}else if(be){const ke=je.get(R.texture),$e=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.__webglTexture,Z||0,$e)}K=-1},this.readRenderTargetPixels=function(R,V,Z,J,X,Ee,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Be=Be[be]),Be){Ze.bindFramebuffer(U.FRAMEBUFFER,Be);try{const ke=R.texture,$e=ke.format,Qe=ke.type;if(!gt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-J&&Z>=0&&Z<=R.height-X&&U.readPixels(V,Z,J,X,st.convert($e),st.convert(Qe),Ee)}finally{const ke=O!==null?je.get(O).__webglFramebuffer:null;Ze.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,V,Z,J,X,Ee,be){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Be=Be[be]),Be){const ke=R.texture,$e=ke.format,Qe=ke.type;if(!gt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-J&&Z>=0&&Z<=R.height-X){Ze.bindFramebuffer(U.FRAMEBUFFER,Be);const Xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),U.readPixels(V,Z,J,X,st.convert($e),st.convert(Qe),0);const wt=O!==null?je.get(O).__webglFramebuffer:null;Ze.bindFramebuffer(U.FRAMEBUFFER,wt);const Dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await lf(U,Dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.deleteBuffer(Xe),U.deleteSync(Dt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,Z=0){R.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const J=Math.pow(2,-Z),X=Math.floor(R.image.width*J),Ee=Math.floor(R.image.height*J),be=V!==null?V.x:0,Be=V!==null?V.y:0;L.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,be,Be,X,Ee),Ze.unbindTexture()},this.copyTextureToTexture=function(R,V,Z=null,J=null,X=0){R.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],V=arguments[2],X=arguments[3]||0,Z=null);let Ee,be,Be,ke,$e,Qe;Z!==null?(Ee=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Be=Z.min.x,ke=Z.min.y):(Ee=R.image.width,be=R.image.height,Be=0,ke=0),J!==null?($e=J.x,Qe=J.y):($e=0,Qe=0);const Xe=st.convert(V.format),wt=st.convert(V.type);L.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Dt=U.getParameter(U.UNPACK_ROW_LENGTH),Ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=U.getParameter(U.UNPACK_SKIP_PIXELS),Et=U.getParameter(U.UNPACK_SKIP_ROWS),ze=U.getParameter(U.UNPACK_SKIP_IMAGES),Yt=R.isCompressedTexture?R.mipmaps[X]:R.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Yt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Yt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,$e,Qe,Ee,be,Xe,wt,Yt.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,$e,Qe,Yt.width,Yt.height,Xe,Yt.data):U.texSubImage2D(U.TEXTURE_2D,X,$e,Qe,Ee,be,Xe,wt,Yt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Dt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze),X===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ze.unbindTexture()},this.copyTextureToTexture3D=function(R,V,Z=null,J=null,X=0){R.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,R=arguments[2],V=arguments[3],X=arguments[4]||0);let Ee,be,Be,ke,$e,Qe,Xe,wt,Dt;const Ft=R.isCompressedTexture?R.mipmaps[X]:R.image;Z!==null?(Ee=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Be=Z.max.z-Z.min.z,ke=Z.min.x,$e=Z.min.y,Qe=Z.min.z):(Ee=Ft.width,be=Ft.height,Be=Ft.depth,ke=0,$e=0,Qe=0),J!==null?(Xe=J.x,wt=J.y,Dt=J.z):(Xe=0,wt=0,Dt=0);const nn=st.convert(V.format),Et=st.convert(V.type);let ze;if(V.isData3DTexture)L.setTexture3D(V,0),ze=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)L.setTexture2DArray(V,0),ze=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Yt=U.getParameter(U.UNPACK_ROW_LENGTH),_t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Sn=U.getParameter(U.UNPACK_SKIP_PIXELS),_i=U.getParameter(U.UNPACK_SKIP_ROWS),Vt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,$e),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qe),R.isDataTexture||R.isData3DTexture?U.texSubImage3D(ze,X,Xe,wt,Dt,Ee,be,Be,nn,Et,Ft.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(ze,X,Xe,wt,Dt,Ee,be,Be,nn,Ft.data):U.texSubImage3D(ze,X,Xe,wt,Dt,Ee,be,Be,nn,Et,Ft),U.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,_i),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt),X===0&&V.generateMipmaps&&U.generateMipmap(ze),Ze.unbindTexture()},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){u=0,W=0,O=null,Ze.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Io?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===js?"display-p3":"srgb"}}class yg extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cc extends Qr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jl=new qt,Ao=new pc,Ds=new $s,Us=new ne;class Eg extends Mn{constructor(e=new ei,t=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=a,e.ray.intersectsSphere(Ds)===!1)return;jl.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(jl);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,p=n.index,v=n.attributes.position;if(p!==null){const x=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let y=x,P=M;y<P;y++){const m=p.getX(y);Us.fromBufferAttribute(v,m),$l(Us,m,d,s,e,t,this)}}else{const x=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let y=x,P=M;y<P;y++)Us.fromBufferAttribute(v,y),$l(Us,y,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function $l(i,e,t,n,s,a,c){const l=Ao.distanceSqToPoint(i);if(l<t){const d=new ne;Ao.closestPointToPoint(i,d),d.applyMatrix4(n);const p=s.ray.origin.distanceTo(d);if(p<s.near||p>s.far)return;a.push({distance:p,distanceToRay:Math.sqrt(l),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class qs extends ei{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],c=[],l=[],d=[],p=new ne,g=new yt;c.push(0,0,0),l.push(0,0,1),d.push(.5,.5);for(let v=0,x=3;v<=t;v++,x+=3){const M=n+v/t*s;p.x=e*Math.cos(M),p.y=e*Math.sin(M),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(c[x]/e+1)/2,g.y=(c[x+1]/e+1)/2,d.push(g.x,g.y)}for(let v=1;v<=t;v++)a.push(v,v+1,0);this.setIndex(a),this.setAttribute("position",new Qn(c,3)),this.setAttribute("normal",new Qn(l,3)),this.setAttribute("uv",new Qn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Kl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Tg{constructor(e,t,n){const s=this;let a=!1,c=0,l=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){l++,a===!1&&s.onStart!==void 0&&s.onStart(g,c,l),a=!0},this.itemEnd=function(g){c++,s.onProgress!==void 0&&s.onProgress(g,c,l),c===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const M=p[v],y=p[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return y}return null}}}const bg=new Tg;class Oo{constructor(e){this.manager=e!==void 0?e:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ag extends Oo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Kl.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const l=$r("img");function d(){g(),Kl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function p(v){g(),s&&s(v),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){l.removeEventListener("load",d,!1),l.removeEventListener("error",p,!1)}return l.addEventListener("load",d,!1),l.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(e),l.src=e,l}}class wg extends Oo{constructor(e){super(e)}load(e,t,n,s){const a=new gn,c=new Ag(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){a.image=l,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);(i=>{i(window).on("load",function(){const e=i("#top").innerWidth(),t=i("#top").innerHeight(),n=new yg,s=new Dn(75,e/t,.1,1e3),a=2*Math.tan(af.degToRad(s.fov/2))*s.near,c=a*(e/t),l=5;s.position.z=l;const d=c/s.near*l,p=a/s.near*l,g=d/2,v=-g,x=p/2,M=-x,y=.8,P=1.3,m=new Sg;m.setSize(e,t),i("#top").prepend(m.domElement);let _=new Rr(10.3,1,1),F=new qr({color:16777215});new In(_,F),_=new qs(.3,32),F=new qr({color:255});const D=new In(_,F);D.position.x=1e3,D.position.y=1e3,i("canvas").addClass("mouse-listener"),i("canvas").attr("id","effects");const I=document.getElementById("effects").getBoundingClientRect(),u=new yt(1e3,1e3);i(".mouse-listener").on("mousemove",Y=>W(Y));const W=Y=>{u.x=(Y.clientX-I.left)/I.width*d-g,u.y=-((Y.clientY-I.top)/I.height)*p+x,D.position.x=u.x,D.position.y=u.y};i("canvas").on("mouseleave",Y=>{u.x=1e3,u.y=1e3}),i(".mouse-listener").on("click",Y=>{const Te=(Y.clientX-I.left)/I.width*d-g,ve=-((Y.clientY-I.top)/I.height)*p+x;console.log("Click: ("+Te+", "+ve+")"),console.log("Mouse: ("+u.x+", "+u.y+")"),_=new qs(.05,32),F=new qr({color:16711680});const Me=new In(_,F);Me.position.x=Te,Me.position.y=ve,n.add(Me)});const O=800,K=new ei,ye=3,E=new Float32Array(O*ye),C=new Float32Array(O*3),Q=new Float32Array(O*ye),ie=new Pt;for(let Y=0;Y<O;Y++){const Te=Y*ye,ve=Y*ye+1,Me=Y*ye+2;E[Te]=Math.random()*(g-v)+v,E[ve]=Math.random()*(x-M)+M,E[Me]=0,ie.setHSL(Math.random(),.7,Math.random()),C[Y*3]=ie.r,C[Y*3+1]=ie.g,C[Y*3+2]=ie.b,Q[Te]=Math.random()*(.01-.005)+.005,Q[ve]=Math.random()*(.002- -.002)+-.002,Q[Me]=0}K.setAttribute("position",new Nn(E,ye)),K.setAttribute("color",new Nn(C,3));const ue=new wg().load("../images/particle.png"),me=new Cc({size:.08,map:ue,vertexColors:!0}),se=new Eg(K,me);n.add(se);const pe=()=>{const Y=se.geometry.attributes.position.array;for(let Te=0;Te<O;Te++){const ve=Te*3,Me=Te*3+1,dt=u.x,Mt=u.y;if(Math.sqrt((dt-Y[ve])**2+(Mt-Y[Me])**2)<y){Y[ve]-=Q[ve],Y[Me]-=Q[Me];let _e;const Pe=new yt(dt,Mt),we=new yt(Q[ve],Q[Me]),Ye=new yt(Y[ve]-Q[ve],Y[Me]-Q[Me]),Ke=we.x**2+we.y**2,et=2*((Ye.x-Pe.x)*we.x+(Ye.y-Pe.y)*we.y),mt=(Ye.x-Pe.x)**2+(Ye.y-Pe.y)**2-y**2,ot=et**2-4*Ke*mt,U=(-et+Math.sqrt(ot))/(2*Ke),At=(-et-Math.sqrt(ot))/(2*Ke);if(ot>0){const bt=new yt(Ye.x+U*we.x,Ye.y+U*we.y),je=new yt(Ye.x+At*we.x,Ye.y+At*we.y),L=Math.sqrt((bt.x-Y[ve])**2+(bt.y-Y[Me])**2),T=Math.sqrt((je.x-Ye.x)**2+(je.y-Ye.y)**2);_e=L-T>0?je:bt}else console.log("There are not 2 intersection points");const ct=_e.clone().sub(Pe);ct.normalize();const gt=we.dot(ct),Ze=we.sub(ct.multiplyScalar(2*gt));Q[ve]=Ze.x*P,Q[Me]=Ze.y*P,Y[ve]=_e.x+we.x,Y[Me]=_e.y+we.y}Y[ve]+=Q[ve],Y[Me]+=Q[Me],(Y[ve]>g||Y[ve]<v-1)&&(Y[ve]=v-1,Q[ve]=Math.abs(Q[ve])<.02?Math.abs(Q[ve]):Math.random()*(.01-.05)-.05,(Q[Me]>.003||Q[Me]<-.003)&&(Q[Me]=Math.random()*(.002- -.002)+-.002)),(Y[Me]>x||Y[Me]<M)&&(Y[Me]=Math.random()*(x-M)+M,Y[ve]=v-1,(Q[Me]>.003||Q[Me]<-.003)&&(Q[Me]=Math.random()*(.002- -.002)+-.002))}se.geometry.attributes.position.needsUpdate=!0,m.render(n,s)};m.setAnimationLoop(pe)})})(jQuery)});export default Rg();
