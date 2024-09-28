(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gl={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:jc,function(e,t){var n=[],s=Object.getPrototypeOf,a=n.slice,u=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},c=n.push,h=n.indexOf,p={},m=p.toString,_=p.hasOwnProperty,x=_.toString,y=x.call(Object),E={},C=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},v=function(o){return o!=null&&o===o.window},g=e.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function D(r,o,f){f=f||g;var d,S,M=f.createElement("script");if(M.text=r,o)for(d in O)S=o[d]||o.getAttribute&&o.getAttribute(d),S&&M.setAttribute(d,S);f.head.appendChild(M).parentNode.removeChild(M)}function N(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?p[m.call(r)]||"object":typeof r}var te="3.7.1",G=/HTML$/i,l=function(r,o){return new l.fn.init(r,o)};l.fn=l.prototype={jquery:te,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=l.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return l.each(this,r)},map:function(r){return this.pushStack(l.map(this,function(o,f){return r.call(o,f,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,f=+r+(r<0?o:0);return this.pushStack(f>=0&&f<o?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var r,o,f,d,S,M,T=arguments[0]||{},F=1,I=arguments.length,H=!1;for(typeof T=="boolean"&&(H=T,T=arguments[F]||{},F++),typeof T!="object"&&!C(T)&&(T={}),F===I&&(T=this,F--);F<I;F++)if((r=arguments[F])!=null)for(o in r)d=r[o],!(o==="__proto__"||T===d)&&(H&&d&&(l.isPlainObject(d)||(S=Array.isArray(d)))?(f=T[o],S&&!Array.isArray(f)?M=[]:!S&&!l.isPlainObject(f)?M={}:M=f,S=!1,T[o]=l.extend(H,M,d)):d!==void 0&&(T[o]=d));return T},l.extend({expando:"jQuery"+(te+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,f;return!r||m.call(r)!=="[object Object]"?!1:(o=s(r),o?(f=_.call(o,"constructor")&&o.constructor,typeof f=="function"&&x.call(f)===y):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,f){D(r,{nonce:o&&o.nonce},f)},each:function(r,o){var f,d=0;if(J(r))for(f=r.length;d<f&&o.call(r[d],d,r[d])!==!1;d++);else for(d in r)if(o.call(r[d],d,r[d])===!1)break;return r},text:function(r){var o,f="",d=0,S=r.nodeType;if(!S)for(;o=r[d++];)f+=l.text(o);return S===1||S===11?r.textContent:S===9?r.documentElement.textContent:S===3||S===4?r.nodeValue:f},makeArray:function(r,o){var f=o||[];return r!=null&&(J(Object(r))?l.merge(f,typeof r=="string"?[r]:r):c.call(f,r)),f},inArray:function(r,o,f){return o==null?-1:h.call(o,r,f)},isXMLDoc:function(r){var o=r&&r.namespaceURI,f=r&&(r.ownerDocument||r).documentElement;return!G.test(o||f&&f.nodeName||"HTML")},merge:function(r,o){for(var f=+o.length,d=0,S=r.length;d<f;d++)r[S++]=o[d];return r.length=S,r},grep:function(r,o,f){for(var d,S=[],M=0,T=r.length,F=!f;M<T;M++)d=!o(r[M],M),d!==F&&S.push(r[M]);return S},map:function(r,o,f){var d,S,M=0,T=[];if(J(r))for(d=r.length;M<d;M++)S=o(r[M],M,f),S!=null&&T.push(S);else for(M in r)S=o(r[M],M,f),S!=null&&T.push(S);return u(T)},guid:1,support:E}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){p["[object "+o+"]"]=o.toLowerCase()});function J(r){var o=!!r&&"length"in r&&r.length,f=N(r);return C(r)||v(r)?!1:f==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function he(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var A=n.pop,P=n.sort,oe=n.splice,Y="[\\x20\\t\\r\\n\\f]",ne=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");l.contains=function(r,o){var f=o&&o.parentNode;return r===f||!!(f&&f.nodeType===1&&(r.contains?r.contains(f):r.compareDocumentPosition&&r.compareDocumentPosition(f)&16))};var ge=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ae(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}l.escapeSelector=function(r){return(r+"").replace(ge,ae)};var pe=g,re=c;(function(){var r,o,f,d,S,M=re,T,F,I,H,ie,ce=l.expando,K=0,ve=0,it=Kr(),yt=Kr(),ct=Kr(),Kt=Kr(),Wt=function(L,z){return L===z&&(S=!0),0},Un="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",In="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",vt="\\["+Y+"*("+In+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+In+"))|)"+Y+"*\\]",Ti=":("+In+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+vt+")*)|.*)\\)|)",wt=new RegExp(Y+"+","g"),Bt=new RegExp("^"+Y+"*,"+Y+"*"),br=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),Ks=new RegExp(Y+"|>"),Nn=new RegExp(Ti),Ar=new RegExp("^"+In+"$"),Fn={ID:new RegExp("^#("+In+")"),CLASS:new RegExp("^\\.("+In+")"),TAG:new RegExp("^("+In+"|[*])"),ATTR:new RegExp("^"+vt),PSEUDO:new RegExp("^"+Ti),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+Un+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},ri=/^(?:input|select|textarea|button)$/i,si=/^h\d$/i,vn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Zs=/[+~]/,Vn=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),Wn=function(L,z){var j="0x"+L.slice(1)-65536;return z||(j<0?String.fromCharCode(j+65536):String.fromCharCode(j>>10|55296,j&1023|56320))},kc=function(){ai()},Gc=$r(function(L){return L.disabled===!0&&he(L,"fieldset")},{dir:"parentNode",next:"legend"});function Vc(){try{return T.activeElement}catch{}}try{M.apply(n=a.call(pe.childNodes),pe.childNodes),n[pe.childNodes.length].nodeType}catch{M={apply:function(z,j){re.apply(z,a.call(j))},call:function(z){re.apply(z,a.call(arguments,1))}}}function Dt(L,z,j,Q){var le,ye,De,Ve,Ue,mt,nt,st=z&&z.ownerDocument,gt=z?z.nodeType:9;if(j=j||[],typeof L!="string"||!L||gt!==1&&gt!==9&&gt!==11)return j;if(!Q&&(ai(z),z=z||T,I)){if(gt!==11&&(Ue=vn.exec(L)))if(le=Ue[1]){if(gt===9)if(De=z.getElementById(le)){if(De.id===le)return M.call(j,De),j}else return j;else if(st&&(De=st.getElementById(le))&&Dt.contains(z,De)&&De.id===le)return M.call(j,De),j}else{if(Ue[2])return M.apply(j,z.getElementsByTagName(L)),j;if((le=Ue[3])&&z.getElementsByClassName)return M.apply(j,z.getElementsByClassName(le)),j}if(!Kt[L+" "]&&(!H||!H.test(L))){if(nt=L,st=z,gt===1&&(Ks.test(L)||br.test(L))){for(st=Zs.test(L)&&$s(z.parentNode)||z,(st!=z||!E.scope)&&((Ve=z.getAttribute("id"))?Ve=l.escapeSelector(Ve):z.setAttribute("id",Ve=ce)),mt=wr(L),ye=mt.length;ye--;)mt[ye]=(Ve?"#"+Ve:":scope")+" "+Zr(mt[ye]);nt=mt.join(",")}try{return M.apply(j,st.querySelectorAll(nt)),j}catch{Kt(L,!0)}finally{Ve===ce&&z.removeAttribute("id")}}}return Vo(L.replace(ne,"$1"),z,j,Q)}function Kr(){var L=[];function z(j,Q){return L.push(j+" ")>o.cacheLength&&delete z[L.shift()],z[j+" "]=Q}return z}function An(L){return L[ce]=!0,L}function ki(L){var z=T.createElement("fieldset");try{return!!L(z)}catch{return!1}finally{z.parentNode&&z.parentNode.removeChild(z),z=null}}function Wc(L){return function(z){return he(z,"input")&&z.type===L}}function Xc(L){return function(z){return(he(z,"input")||he(z,"button"))&&z.type===L}}function ko(L){return function(z){return"form"in z?z.parentNode&&z.disabled===!1?"label"in z?"label"in z.parentNode?z.parentNode.disabled===L:z.disabled===L:z.isDisabled===L||z.isDisabled!==!L&&Gc(z)===L:z.disabled===L:"label"in z?z.disabled===L:!1}}function bi(L){return An(function(z){return z=+z,An(function(j,Q){for(var le,ye=L([],j.length,z),De=ye.length;De--;)j[le=ye[De]]&&(j[le]=!(Q[le]=j[le]))})})}function $s(L){return L&&typeof L.getElementsByTagName<"u"&&L}function ai(L){var z,j=L?L.ownerDocument||L:pe;return j==T||j.nodeType!==9||!j.documentElement||(T=j,F=T.documentElement,I=!l.isXMLDoc(T),ie=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&pe!=T&&(z=T.defaultView)&&z.top!==z&&z.addEventListener("unload",kc),E.getById=ki(function(Q){return F.appendChild(Q).id=l.expando,!T.getElementsByName||!T.getElementsByName(l.expando).length}),E.disconnectedMatch=ki(function(Q){return ie.call(Q,"*")}),E.scope=ki(function(){return T.querySelectorAll(":scope")}),E.cssHas=ki(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(o.filter.ID=function(Q){var le=Q.replace(Vn,Wn);return function(ye){return ye.getAttribute("id")===le}},o.find.ID=function(Q,le){if(typeof le.getElementById<"u"&&I){var ye=le.getElementById(Q);return ye?[ye]:[]}}):(o.filter.ID=function(Q){var le=Q.replace(Vn,Wn);return function(ye){var De=typeof ye.getAttributeNode<"u"&&ye.getAttributeNode("id");return De&&De.value===le}},o.find.ID=function(Q,le){if(typeof le.getElementById<"u"&&I){var ye,De,Ve,Ue=le.getElementById(Q);if(Ue){if(ye=Ue.getAttributeNode("id"),ye&&ye.value===Q)return[Ue];for(Ve=le.getElementsByName(Q),De=0;Ue=Ve[De++];)if(ye=Ue.getAttributeNode("id"),ye&&ye.value===Q)return[Ue]}return[]}}),o.find.TAG=function(Q,le){return typeof le.getElementsByTagName<"u"?le.getElementsByTagName(Q):le.querySelectorAll(Q)},o.find.CLASS=function(Q,le){if(typeof le.getElementsByClassName<"u"&&I)return le.getElementsByClassName(Q)},H=[],ki(function(Q){var le;F.appendChild(Q).innerHTML="<a id='"+ce+"' href='' disabled='disabled'></a><select id='"+ce+"-\r\\' disabled='disabled'><option selected=''></option></select>",Q.querySelectorAll("[selected]").length||H.push("\\["+Y+"*(?:value|"+Un+")"),Q.querySelectorAll("[id~="+ce+"-]").length||H.push("~="),Q.querySelectorAll("a#"+ce+"+*").length||H.push(".#.+[+~]"),Q.querySelectorAll(":checked").length||H.push(":checked"),le=T.createElement("input"),le.setAttribute("type","hidden"),Q.appendChild(le).setAttribute("name","D"),F.appendChild(Q).disabled=!0,Q.querySelectorAll(":disabled").length!==2&&H.push(":enabled",":disabled"),le=T.createElement("input"),le.setAttribute("name",""),Q.appendChild(le),Q.querySelectorAll("[name='']").length||H.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),E.cssHas||H.push(":has"),H=H.length&&new RegExp(H.join("|")),Wt=function(Q,le){if(Q===le)return S=!0,0;var ye=!Q.compareDocumentPosition-!le.compareDocumentPosition;return ye||(ye=(Q.ownerDocument||Q)==(le.ownerDocument||le)?Q.compareDocumentPosition(le):1,ye&1||!E.sortDetached&&le.compareDocumentPosition(Q)===ye?Q===T||Q.ownerDocument==pe&&Dt.contains(pe,Q)?-1:le===T||le.ownerDocument==pe&&Dt.contains(pe,le)?1:d?h.call(d,Q)-h.call(d,le):0:ye&4?-1:1)}),T}Dt.matches=function(L,z){return Dt(L,null,null,z)},Dt.matchesSelector=function(L,z){if(ai(L),I&&!Kt[z+" "]&&(!H||!H.test(z)))try{var j=ie.call(L,z);if(j||E.disconnectedMatch||L.document&&L.document.nodeType!==11)return j}catch{Kt(z,!0)}return Dt(z,T,null,[L]).length>0},Dt.contains=function(L,z){return(L.ownerDocument||L)!=T&&ai(L),l.contains(L,z)},Dt.attr=function(L,z){(L.ownerDocument||L)!=T&&ai(L);var j=o.attrHandle[z.toLowerCase()],Q=j&&_.call(o.attrHandle,z.toLowerCase())?j(L,z,!I):void 0;return Q!==void 0?Q:L.getAttribute(z)},Dt.error=function(L){throw new Error("Syntax error, unrecognized expression: "+L)},l.uniqueSort=function(L){var z,j=[],Q=0,le=0;if(S=!E.sortStable,d=!E.sortStable&&a.call(L,0),P.call(L,Wt),S){for(;z=L[le++];)z===L[le]&&(Q=j.push(le));for(;Q--;)oe.call(L,j[Q],1)}return d=null,L},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:An,match:Fn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(L){return L[1]=L[1].replace(Vn,Wn),L[3]=(L[3]||L[4]||L[5]||"").replace(Vn,Wn),L[2]==="~="&&(L[3]=" "+L[3]+" "),L.slice(0,4)},CHILD:function(L){return L[1]=L[1].toLowerCase(),L[1].slice(0,3)==="nth"?(L[3]||Dt.error(L[0]),L[4]=+(L[4]?L[5]+(L[6]||1):2*(L[3]==="even"||L[3]==="odd")),L[5]=+(L[7]+L[8]||L[3]==="odd")):L[3]&&Dt.error(L[0]),L},PSEUDO:function(L){var z,j=!L[6]&&L[2];return Fn.CHILD.test(L[0])?null:(L[3]?L[2]=L[4]||L[5]||"":j&&Nn.test(j)&&(z=wr(j,!0))&&(z=j.indexOf(")",j.length-z)-j.length)&&(L[0]=L[0].slice(0,z),L[2]=j.slice(0,z)),L.slice(0,3))}},filter:{TAG:function(L){var z=L.replace(Vn,Wn).toLowerCase();return L==="*"?function(){return!0}:function(j){return he(j,z)}},CLASS:function(L){var z=it[L+" "];return z||(z=new RegExp("(^|"+Y+")"+L+"("+Y+"|$)"))&&it(L,function(j){return z.test(typeof j.className=="string"&&j.className||typeof j.getAttribute<"u"&&j.getAttribute("class")||"")})},ATTR:function(L,z,j){return function(Q){var le=Dt.attr(Q,L);return le==null?z==="!=":z?(le+="",z==="="?le===j:z==="!="?le!==j:z==="^="?j&&le.indexOf(j)===0:z==="*="?j&&le.indexOf(j)>-1:z==="$="?j&&le.slice(-j.length)===j:z==="~="?(" "+le.replace(wt," ")+" ").indexOf(j)>-1:z==="|="?le===j||le.slice(0,j.length+1)===j+"-":!1):!0}},CHILD:function(L,z,j,Q,le){var ye=L.slice(0,3)!=="nth",De=L.slice(-4)!=="last",Ve=z==="of-type";return Q===1&&le===0?function(Ue){return!!Ue.parentNode}:function(Ue,mt,nt){var st,gt,Ze,It,fn,Jt=ye!==De?"nextSibling":"previousSibling",xn=Ue.parentNode,On=Ve&&Ue.nodeName.toLowerCase(),Gi=!nt&&!Ve,rn=!1;if(xn){if(ye){for(;Jt;){for(Ze=Ue;Ze=Ze[Jt];)if(Ve?he(Ze,On):Ze.nodeType===1)return!1;fn=Jt=L==="only"&&!fn&&"nextSibling"}return!0}if(fn=[De?xn.firstChild:xn.lastChild],De&&Gi){for(gt=xn[ce]||(xn[ce]={}),st=gt[L]||[],It=st[0]===K&&st[1],rn=It&&st[2],Ze=It&&xn.childNodes[It];Ze=++It&&Ze&&Ze[Jt]||(rn=It=0)||fn.pop();)if(Ze.nodeType===1&&++rn&&Ze===Ue){gt[L]=[K,It,rn];break}}else if(Gi&&(gt=Ue[ce]||(Ue[ce]={}),st=gt[L]||[],It=st[0]===K&&st[1],rn=It),rn===!1)for(;(Ze=++It&&Ze&&Ze[Jt]||(rn=It=0)||fn.pop())&&!((Ve?he(Ze,On):Ze.nodeType===1)&&++rn&&(Gi&&(gt=Ze[ce]||(Ze[ce]={}),gt[L]=[K,rn]),Ze===Ue)););return rn-=le,rn===Q||rn%Q===0&&rn/Q>=0}}},PSEUDO:function(L,z){var j,Q=o.pseudos[L]||o.setFilters[L.toLowerCase()]||Dt.error("unsupported pseudo: "+L);return Q[ce]?Q(z):Q.length>1?(j=[L,L,"",z],o.setFilters.hasOwnProperty(L.toLowerCase())?An(function(le,ye){for(var De,Ve=Q(le,z),Ue=Ve.length;Ue--;)De=h.call(le,Ve[Ue]),le[De]=!(ye[De]=Ve[Ue])}):function(le){return Q(le,0,j)}):Q}},pseudos:{not:An(function(L){var z=[],j=[],Q=ta(L.replace(ne,"$1"));return Q[ce]?An(function(le,ye,De,Ve){for(var Ue,mt=Q(le,null,Ve,[]),nt=le.length;nt--;)(Ue=mt[nt])&&(le[nt]=!(ye[nt]=Ue))}):function(le,ye,De){return z[0]=le,Q(z,null,De,j),z[0]=null,!j.pop()}}),has:An(function(L){return function(z){return Dt(L,z).length>0}}),contains:An(function(L){return L=L.replace(Vn,Wn),function(z){return(z.textContent||l.text(z)).indexOf(L)>-1}}),lang:An(function(L){return Ar.test(L||"")||Dt.error("unsupported lang: "+L),L=L.replace(Vn,Wn).toLowerCase(),function(z){var j;do if(j=I?z.lang:z.getAttribute("xml:lang")||z.getAttribute("lang"))return j=j.toLowerCase(),j===L||j.indexOf(L+"-")===0;while((z=z.parentNode)&&z.nodeType===1);return!1}}),target:function(L){var z=e.location&&e.location.hash;return z&&z.slice(1)===L.id},root:function(L){return L===F},focus:function(L){return L===Vc()&&T.hasFocus()&&!!(L.type||L.href||~L.tabIndex)},enabled:ko(!1),disabled:ko(!0),checked:function(L){return he(L,"input")&&!!L.checked||he(L,"option")&&!!L.selected},selected:function(L){return L.parentNode&&L.parentNode.selectedIndex,L.selected===!0},empty:function(L){for(L=L.firstChild;L;L=L.nextSibling)if(L.nodeType<6)return!1;return!0},parent:function(L){return!o.pseudos.empty(L)},header:function(L){return si.test(L.nodeName)},input:function(L){return ri.test(L.nodeName)},button:function(L){return he(L,"input")&&L.type==="button"||he(L,"button")},text:function(L){var z;return he(L,"input")&&L.type==="text"&&((z=L.getAttribute("type"))==null||z.toLowerCase()==="text")},first:bi(function(){return[0]}),last:bi(function(L,z){return[z-1]}),eq:bi(function(L,z,j){return[j<0?j+z:j]}),even:bi(function(L,z){for(var j=0;j<z;j+=2)L.push(j);return L}),odd:bi(function(L,z){for(var j=1;j<z;j+=2)L.push(j);return L}),lt:bi(function(L,z,j){var Q;for(j<0?Q=j+z:j>z?Q=z:Q=j;--Q>=0;)L.push(Q);return L}),gt:bi(function(L,z,j){for(var Q=j<0?j+z:j;++Q<z;)L.push(Q);return L})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=Wc(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=Xc(r);function Go(){}Go.prototype=o.filters=o.pseudos,o.setFilters=new Go;function wr(L,z){var j,Q,le,ye,De,Ve,Ue,mt=yt[L+" "];if(mt)return z?0:mt.slice(0);for(De=L,Ve=[],Ue=o.preFilter;De;){(!j||(Q=Bt.exec(De)))&&(Q&&(De=De.slice(Q[0].length)||De),Ve.push(le=[])),j=!1,(Q=br.exec(De))&&(j=Q.shift(),le.push({value:j,type:Q[0].replace(ne," ")}),De=De.slice(j.length));for(ye in o.filter)(Q=Fn[ye].exec(De))&&(!Ue[ye]||(Q=Ue[ye](Q)))&&(j=Q.shift(),le.push({value:j,type:ye,matches:Q}),De=De.slice(j.length));if(!j)break}return z?De.length:De?Dt.error(L):yt(L,Ve).slice(0)}function Zr(L){for(var z=0,j=L.length,Q="";z<j;z++)Q+=L[z].value;return Q}function $r(L,z,j){var Q=z.dir,le=z.next,ye=le||Q,De=j&&ye==="parentNode",Ve=ve++;return z.first?function(Ue,mt,nt){for(;Ue=Ue[Q];)if(Ue.nodeType===1||De)return L(Ue,mt,nt);return!1}:function(Ue,mt,nt){var st,gt,Ze=[K,Ve];if(nt){for(;Ue=Ue[Q];)if((Ue.nodeType===1||De)&&L(Ue,mt,nt))return!0}else for(;Ue=Ue[Q];)if(Ue.nodeType===1||De)if(gt=Ue[ce]||(Ue[ce]={}),le&&he(Ue,le))Ue=Ue[Q]||Ue;else{if((st=gt[ye])&&st[0]===K&&st[1]===Ve)return Ze[2]=st[2];if(gt[ye]=Ze,Ze[2]=L(Ue,mt,nt))return!0}return!1}}function Js(L){return L.length>1?function(z,j,Q){for(var le=L.length;le--;)if(!L[le](z,j,Q))return!1;return!0}:L[0]}function qc(L,z,j){for(var Q=0,le=z.length;Q<le;Q++)Dt(L,z[Q],j);return j}function Jr(L,z,j,Q,le){for(var ye,De=[],Ve=0,Ue=L.length,mt=z!=null;Ve<Ue;Ve++)(ye=L[Ve])&&(!j||j(ye,Q,le))&&(De.push(ye),mt&&z.push(Ve));return De}function Qs(L,z,j,Q,le,ye){return Q&&!Q[ce]&&(Q=Qs(Q)),le&&!le[ce]&&(le=Qs(le,ye)),An(function(De,Ve,Ue,mt){var nt,st,gt,Ze,It=[],fn=[],Jt=Ve.length,xn=De||qc(z||"*",Ue.nodeType?[Ue]:Ue,[]),On=L&&(De||!z)?Jr(xn,It,L,Ue,mt):xn;if(j?(Ze=le||(De?L:Jt||Q)?[]:Ve,j(On,Ze,Ue,mt)):Ze=On,Q)for(nt=Jr(Ze,fn),Q(nt,[],Ue,mt),st=nt.length;st--;)(gt=nt[st])&&(Ze[fn[st]]=!(On[fn[st]]=gt));if(De){if(le||L){if(le){for(nt=[],st=Ze.length;st--;)(gt=Ze[st])&&nt.push(On[st]=gt);le(null,Ze=[],nt,mt)}for(st=Ze.length;st--;)(gt=Ze[st])&&(nt=le?h.call(De,gt):It[st])>-1&&(De[nt]=!(Ve[nt]=gt))}}else Ze=Jr(Ze===Ve?Ze.splice(Jt,Ze.length):Ze),le?le(null,Ve,Ze,mt):M.apply(Ve,Ze)})}function ea(L){for(var z,j,Q,le=L.length,ye=o.relative[L[0].type],De=ye||o.relative[" "],Ve=ye?1:0,Ue=$r(function(st){return st===z},De,!0),mt=$r(function(st){return h.call(z,st)>-1},De,!0),nt=[function(st,gt,Ze){var It=!ye&&(Ze||gt!=f)||((z=gt).nodeType?Ue(st,gt,Ze):mt(st,gt,Ze));return z=null,It}];Ve<le;Ve++)if(j=o.relative[L[Ve].type])nt=[$r(Js(nt),j)];else{if(j=o.filter[L[Ve].type].apply(null,L[Ve].matches),j[ce]){for(Q=++Ve;Q<le&&!o.relative[L[Q].type];Q++);return Qs(Ve>1&&Js(nt),Ve>1&&Zr(L.slice(0,Ve-1).concat({value:L[Ve-2].type===" "?"*":""})).replace(ne,"$1"),j,Ve<Q&&ea(L.slice(Ve,Q)),Q<le&&ea(L=L.slice(Q)),Q<le&&Zr(L))}nt.push(j)}return Js(nt)}function Yc(L,z){var j=z.length>0,Q=L.length>0,le=function(ye,De,Ve,Ue,mt){var nt,st,gt,Ze=0,It="0",fn=ye&&[],Jt=[],xn=f,On=ye||Q&&o.find.TAG("*",mt),Gi=K+=xn==null?1:Math.random()||.1,rn=On.length;for(mt&&(f=De==T||De||mt);It!==rn&&(nt=On[It])!=null;It++){if(Q&&nt){for(st=0,!De&&nt.ownerDocument!=T&&(ai(nt),Ve=!I);gt=L[st++];)if(gt(nt,De||T,Ve)){M.call(Ue,nt);break}mt&&(K=Gi)}j&&((nt=!gt&&nt)&&Ze--,ye&&fn.push(nt))}if(Ze+=It,j&&It!==Ze){for(st=0;gt=z[st++];)gt(fn,Jt,De,Ve);if(ye){if(Ze>0)for(;It--;)fn[It]||Jt[It]||(Jt[It]=A.call(Ue));Jt=Jr(Jt)}M.apply(Ue,Jt),mt&&!ye&&Jt.length>0&&Ze+z.length>1&&l.uniqueSort(Ue)}return mt&&(K=Gi,f=xn),fn};return j?An(le):le}function ta(L,z){var j,Q=[],le=[],ye=ct[L+" "];if(!ye){for(z||(z=wr(L)),j=z.length;j--;)ye=ea(z[j]),ye[ce]?Q.push(ye):le.push(ye);ye=ct(L,Yc(le,Q)),ye.selector=L}return ye}function Vo(L,z,j,Q){var le,ye,De,Ve,Ue,mt=typeof L=="function"&&L,nt=!Q&&wr(L=mt.selector||L);if(j=j||[],nt.length===1){if(ye=nt[0]=nt[0].slice(0),ye.length>2&&(De=ye[0]).type==="ID"&&z.nodeType===9&&I&&o.relative[ye[1].type]){if(z=(o.find.ID(De.matches[0].replace(Vn,Wn),z)||[])[0],z)mt&&(z=z.parentNode);else return j;L=L.slice(ye.shift().value.length)}for(le=Fn.needsContext.test(L)?0:ye.length;le--&&(De=ye[le],!o.relative[Ve=De.type]);)if((Ue=o.find[Ve])&&(Q=Ue(De.matches[0].replace(Vn,Wn),Zs.test(ye[0].type)&&$s(z.parentNode)||z))){if(ye.splice(le,1),L=Q.length&&Zr(ye),!L)return M.apply(j,Q),j;break}}return(mt||ta(L,nt))(Q,z,!I,j,!z||Zs.test(L)&&$s(z.parentNode)||z),j}E.sortStable=ce.split("").sort(Wt).join("")===ce,ai(),E.sortDetached=ki(function(L){return L.compareDocumentPosition(T.createElement("fieldset"))&1}),l.find=Dt,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Dt.compile=ta,Dt.select=Vo,Dt.setDocument=ai,Dt.tokenize=wr,Dt.escape=l.escapeSelector,Dt.getText=l.text,Dt.isXML=l.isXMLDoc,Dt.selectors=l.expr,Dt.support=l.support,Dt.uniqueSort=l.uniqueSort})();var we=function(r,o,f){for(var d=[],S=f!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(S&&l(r).is(f))break;d.push(r)}return d},me=function(r,o){for(var f=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&f.push(r);return f},Ce=l.expr.match.needsContext,We=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ge(r,o,f){return C(o)?l.grep(r,function(d,S){return!!o.call(d,S,d)!==f}):o.nodeType?l.grep(r,function(d){return d===o!==f}):typeof o!="string"?l.grep(r,function(d){return h.call(o,d)>-1!==f}):l.filter(o,r,f)}l.filter=function(r,o,f){var d=o[0];return f&&(r=":not("+r+")"),o.length===1&&d.nodeType===1?l.find.matchesSelector(d,r)?[d]:[]:l.find.matches(r,l.grep(o,function(S){return S.nodeType===1}))},l.fn.extend({find:function(r){var o,f,d=this.length,S=this;if(typeof r!="string")return this.pushStack(l(r).filter(function(){for(o=0;o<d;o++)if(l.contains(S[o],this))return!0}));for(f=this.pushStack([]),o=0;o<d;o++)l.find(r,S[o],f);return d>1?l.uniqueSort(f):f},filter:function(r){return this.pushStack(Ge(this,r||[],!1))},not:function(r){return this.pushStack(Ge(this,r||[],!0))},is:function(r){return!!Ge(this,typeof r=="string"&&Ce.test(r)?l(r):r||[],!1).length}});var ue,xe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ze=l.fn.init=function(r,o,f){var d,S;if(!r)return this;if(f=f||ue,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?d=[null,r,null]:d=xe.exec(r),d&&(d[1]||!o))if(d[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(d[1],o&&o.nodeType?o.ownerDocument||o:g,!0)),We.test(d[1])&&l.isPlainObject(o))for(d in o)C(this[d])?this[d](o[d]):this.attr(d,o[d]);return this}else return S=g.getElementById(d[2]),S&&(this[0]=S,this.length=1),this;else return!o||o.jquery?(o||f).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(C(r))return f.ready!==void 0?f.ready(r):r(l)}return l.makeArray(r,this)};ze.prototype=l.fn,ue=l(g);var Re=/^(?:parents|prev(?:Until|All))/,Je={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(r){var o=l(r,this),f=o.length;return this.filter(function(){for(var d=0;d<f;d++)if(l.contains(this,o[d]))return!0})},closest:function(r,o){var f,d=0,S=this.length,M=[],T=typeof r!="string"&&l(r);if(!Ce.test(r)){for(;d<S;d++)for(f=this[d];f&&f!==o;f=f.parentNode)if(f.nodeType<11&&(T?T.index(f)>-1:f.nodeType===1&&l.find.matchesSelector(f,r))){M.push(f);break}}return this.pushStack(M.length>1?l.uniqueSort(M):M)},index:function(r){return r?typeof r=="string"?h.call(l(r),this[0]):h.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function He(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}l.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return we(r,"parentNode")},parentsUntil:function(r,o,f){return we(r,"parentNode",f)},next:function(r){return He(r,"nextSibling")},prev:function(r){return He(r,"previousSibling")},nextAll:function(r){return we(r,"nextSibling")},prevAll:function(r){return we(r,"previousSibling")},nextUntil:function(r,o,f){return we(r,"nextSibling",f)},prevUntil:function(r,o,f){return we(r,"previousSibling",f)},siblings:function(r){return me((r.parentNode||{}).firstChild,r)},children:function(r){return me(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(he(r,"template")&&(r=r.content||r),l.merge([],r.childNodes))}},function(r,o){l.fn[r]=function(f,d){var S=l.map(this,o,f);return r.slice(-5)!=="Until"&&(d=f),d&&typeof d=="string"&&(S=l.filter(d,S)),this.length>1&&(Je[r]||l.uniqueSort(S),Re.test(r)&&S.reverse()),this.pushStack(S)}});var Ye=/[^\x20\t\r\n\f]+/g;function St(r){var o={};return l.each(r.match(Ye)||[],function(f,d){o[d]=!0}),o}l.Callbacks=function(r){r=typeof r=="string"?St(r):l.extend({},r);var o,f,d,S,M=[],T=[],F=-1,I=function(){for(S=S||r.once,d=o=!0;T.length;F=-1)for(f=T.shift();++F<M.length;)M[F].apply(f[0],f[1])===!1&&r.stopOnFalse&&(F=M.length,f=!1);r.memory||(f=!1),o=!1,S&&(f?M=[]:M="")},H={add:function(){return M&&(f&&!o&&(F=M.length-1,T.push(f)),function ie(ce){l.each(ce,function(K,ve){C(ve)?(!r.unique||!H.has(ve))&&M.push(ve):ve&&ve.length&&N(ve)!=="string"&&ie(ve)})}(arguments),f&&!o&&I()),this},remove:function(){return l.each(arguments,function(ie,ce){for(var K;(K=l.inArray(ce,M,K))>-1;)M.splice(K,1),K<=F&&F--}),this},has:function(ie){return ie?l.inArray(ie,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return S=T=[],M=f="",this},disabled:function(){return!M},lock:function(){return S=T=[],!f&&!o&&(M=f=""),this},locked:function(){return!!S},fireWith:function(ie,ce){return S||(ce=ce||[],ce=[ie,ce.slice?ce.slice():ce],T.push(ce),o||I()),this},fire:function(){return H.fireWith(this,arguments),this},fired:function(){return!!d}};return H};function at(r){return r}function B(r){throw r}function kt(r,o,f,d){var S;try{r&&C(S=r.promise)?S.call(r).done(o).fail(f):r&&C(S=r.then)?S.call(r,o,f):o.apply(void 0,[r].slice(d))}catch(M){f.apply(void 0,[M])}}l.extend({Deferred:function(r){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],f="pending",d={state:function(){return f},always:function(){return S.done(arguments).fail(arguments),this},catch:function(M){return d.then(null,M)},pipe:function(){var M=arguments;return l.Deferred(function(T){l.each(o,function(F,I){var H=C(M[I[4]])&&M[I[4]];S[I[1]](function(){var ie=H&&H.apply(this,arguments);ie&&C(ie.promise)?ie.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[I[0]+"With"](this,H?[ie]:arguments)})}),M=null}).promise()},then:function(M,T,F){var I=0;function H(ie,ce,K,ve){return function(){var it=this,yt=arguments,ct=function(){var Wt,Un;if(!(ie<I)){if(Wt=K.apply(it,yt),Wt===ce.promise())throw new TypeError("Thenable self-resolution");Un=Wt&&(typeof Wt=="object"||typeof Wt=="function")&&Wt.then,C(Un)?ve?Un.call(Wt,H(I,ce,at,ve),H(I,ce,B,ve)):(I++,Un.call(Wt,H(I,ce,at,ve),H(I,ce,B,ve),H(I,ce,at,ce.notifyWith))):(K!==at&&(it=void 0,yt=[Wt]),(ve||ce.resolveWith)(it,yt))}},Kt=ve?ct:function(){try{ct()}catch(Wt){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Wt,Kt.error),ie+1>=I&&(K!==B&&(it=void 0,yt=[Wt]),ce.rejectWith(it,yt))}};ie?Kt():(l.Deferred.getErrorHook?Kt.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Kt.error=l.Deferred.getStackHook()),e.setTimeout(Kt))}}return l.Deferred(function(ie){o[0][3].add(H(0,ie,C(F)?F:at,ie.notifyWith)),o[1][3].add(H(0,ie,C(M)?M:at)),o[2][3].add(H(0,ie,C(T)?T:B))}).promise()},promise:function(M){return M!=null?l.extend(M,d):d}},S={};return l.each(o,function(M,T){var F=T[2],I=T[5];d[T[1]]=F.add,I&&F.add(function(){f=I},o[3-M][2].disable,o[3-M][3].disable,o[0][2].lock,o[0][3].lock),F.add(T[3].fire),S[T[0]]=function(){return S[T[0]+"With"](this===S?void 0:this,arguments),this},S[T[0]+"With"]=F.fireWith}),d.promise(S),r&&r.call(S,S),S},when:function(r){var o=arguments.length,f=o,d=Array(f),S=a.call(arguments),M=l.Deferred(),T=function(F){return function(I){d[F]=this,S[F]=arguments.length>1?a.call(arguments):I,--o||M.resolveWith(d,S)}};if(o<=1&&(kt(r,M.done(T(f)).resolve,M.reject,!o),M.state()==="pending"||C(S[f]&&S[f].then)))return M.then();for(;f--;)kt(S[f],T(f),M.reject);return M.promise()}});var ht=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&ht.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},l.readyException=function(r){e.setTimeout(function(){throw r})};var dt=l.Deferred();l.fn.ready=function(r){return dt.then(r).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(r!==!0&&--l.readyWait>0)&&dt.resolveWith(g,[l]))}}),l.ready.then=dt.then;function Ke(){g.removeEventListener("DOMContentLoaded",Ke),e.removeEventListener("load",Ke),l.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(l.ready):(g.addEventListener("DOMContentLoaded",Ke),e.addEventListener("load",Ke));var pt=function(r,o,f,d,S,M,T){var F=0,I=r.length,H=f==null;if(N(f)==="object"){S=!0;for(F in f)pt(r,o,F,f[F],!0,M,T)}else if(d!==void 0&&(S=!0,C(d)||(T=!0),H&&(T?(o.call(r,d),o=null):(H=o,o=function(ie,ce,K){return H.call(l(ie),K)})),o))for(;F<I;F++)o(r[F],f,T?d:d.call(r[F],F,o(r[F],f)));return S?r:H?o.call(r):I?o(r[0],f):M},et=/^-ms-/,U=/-([a-z])/g;function w(r,o){return o.toUpperCase()}function q(r){return r.replace(et,"ms-").replace(U,w)}var fe=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function _e(){this.expando=l.expando+_e.uid++}_e.uid=1,_e.prototype={cache:function(r){var o=r[this.expando];return o||(o={},fe(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,f){var d,S=this.cache(r);if(typeof o=="string")S[q(o)]=f;else for(d in o)S[q(d)]=o[d];return S},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][q(o)]},access:function(r,o,f){return o===void 0||o&&typeof o=="string"&&f===void 0?this.get(r,o):(this.set(r,o,f),f!==void 0?f:o)},remove:function(r,o){var f,d=r[this.expando];if(d!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(q):(o=q(o),o=o in d?[o]:o.match(Ye)||[]),f=o.length;f--;)delete d[o[f]];(o===void 0||l.isEmptyObject(d))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var X=new _e,Pe=new _e,Ae=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Fe=/[A-Z]/g;function Mt(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Ae.test(r)?JSON.parse(r):r}function Se(r,o,f){var d;if(f===void 0&&r.nodeType===1)if(d="data-"+o.replace(Fe,"-$&").toLowerCase(),f=r.getAttribute(d),typeof f=="string"){try{f=Mt(f)}catch{}Pe.set(r,o,f)}else f=void 0;return f}l.extend({hasData:function(r){return Pe.hasData(r)||X.hasData(r)},data:function(r,o,f){return Pe.access(r,o,f)},removeData:function(r,o){Pe.remove(r,o)},_data:function(r,o,f){return X.access(r,o,f)},_removeData:function(r,o){X.remove(r,o)}}),l.fn.extend({data:function(r,o){var f,d,S,M=this[0],T=M&&M.attributes;if(r===void 0){if(this.length&&(S=Pe.get(M),M.nodeType===1&&!X.get(M,"hasDataAttrs"))){for(f=T.length;f--;)T[f]&&(d=T[f].name,d.indexOf("data-")===0&&(d=q(d.slice(5)),Se(M,d,S[d])));X.set(M,"hasDataAttrs",!0)}return S}return typeof r=="object"?this.each(function(){Pe.set(this,r)}):pt(this,function(F){var I;if(M&&F===void 0)return I=Pe.get(M,r),I!==void 0||(I=Se(M,r),I!==void 0)?I:void 0;this.each(function(){Pe.set(this,r,F)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){Pe.remove(this,r)})}}),l.extend({queue:function(r,o,f){var d;if(r)return o=(o||"fx")+"queue",d=X.get(r,o),f&&(!d||Array.isArray(f)?d=X.access(r,o,l.makeArray(f)):d.push(f)),d||[]},dequeue:function(r,o){o=o||"fx";var f=l.queue(r,o),d=f.length,S=f.shift(),M=l._queueHooks(r,o),T=function(){l.dequeue(r,o)};S==="inprogress"&&(S=f.shift(),d--),S&&(o==="fx"&&f.unshift("inprogress"),delete M.stop,S.call(r,T,M)),!d&&M&&M.empty.fire()},_queueHooks:function(r,o){var f=o+"queueHooks";return X.get(r,f)||X.access(r,f,{empty:l.Callbacks("once memory").add(function(){X.remove(r,[o+"queue",f])})})}}),l.fn.extend({queue:function(r,o){var f=2;return typeof r!="string"&&(o=r,r="fx",f--),arguments.length<f?l.queue(this[0],r):o===void 0?this:this.each(function(){var d=l.queue(this,r,o);l._queueHooks(this,r),r==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,r)})},dequeue:function(r){return this.each(function(){l.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var f,d=1,S=l.Deferred(),M=this,T=this.length,F=function(){--d||S.resolveWith(M,[M])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";T--;)f=X.get(M[T],r+"queueHooks"),f&&f.empty&&(d++,f.empty.add(F));return F(),S.promise(o)}});var Oe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$e=new RegExp("^(?:([+-])=|)("+Oe+")([a-z%]*)$","i"),je=["Top","Right","Bottom","Left"],Le=g.documentElement,lt=function(r){return l.contains(r.ownerDocument,r)},ot={composed:!0};Le.getRootNode&&(lt=function(r){return l.contains(r.ownerDocument,r)||r.getRootNode(ot)===r.ownerDocument});var Ct=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&lt(r)&&l.css(r,"display")==="none"};function k(r,o,f,d){var S,M,T=20,F=d?function(){return d.cur()}:function(){return l.css(r,o,"")},I=F(),H=f&&f[3]||(l.cssNumber[o]?"":"px"),ie=r.nodeType&&(l.cssNumber[o]||H!=="px"&&+I)&&$e.exec(l.css(r,o));if(ie&&ie[3]!==H){for(I=I/2,H=H||ie[3],ie=+I||1;T--;)l.style(r,o,ie+H),(1-M)*(1-(M=F()/I||.5))<=0&&(T=0),ie=ie/M;ie=ie*2,l.style(r,o,ie+H),f=f||[]}return f&&(ie=+ie||+I||0,S=f[1]?ie+(f[1]+1)*f[2]:+f[2],d&&(d.unit=H,d.start=ie,d.end=S)),S}var Ie={};function se(r){var o,f=r.ownerDocument,d=r.nodeName,S=Ie[d];return S||(o=f.body.appendChild(f.createElement(d)),S=l.css(o,"display"),o.parentNode.removeChild(o),S==="none"&&(S="block"),Ie[d]=S,S)}function de(r,o){for(var f,d,S=[],M=0,T=r.length;M<T;M++)d=r[M],d.style&&(f=d.style.display,o?(f==="none"&&(S[M]=X.get(d,"display")||null,S[M]||(d.style.display="")),d.style.display===""&&Ct(d)&&(S[M]=se(d))):f!=="none"&&(S[M]="none",X.set(d,"display",f)));for(M=0;M<T;M++)S[M]!=null&&(r[M].style.display=S[M]);return r}l.fn.extend({show:function(){return de(this,!0)},hide:function(){return de(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Ct(this)?l(this).show():l(this).hide()})}});var Ee=/^(?:checkbox|radio)$/i,Ne=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,_t=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=g.createDocumentFragment(),o=r.appendChild(g.createElement("div")),f=g.createElement("input");f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),o.appendChild(f),E.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",E.option=!!o.lastChild})();var Tt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Tt.tbody=Tt.tfoot=Tt.colgroup=Tt.caption=Tt.thead,Tt.th=Tt.td,E.option||(Tt.optgroup=Tt.option=[1,"<select multiple='multiple'>","</select>"]);function Lt(r,o){var f;return typeof r.getElementsByTagName<"u"?f=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?f=r.querySelectorAll(o||"*"):f=[],o===void 0||o&&he(r,o)?l.merge([r],f):f}function xt(r,o){for(var f=0,d=r.length;f<d;f++)X.set(r[f],"globalEval",!o||X.get(o[f],"globalEval"))}var Zt=/<|&#?\w+;/;function _n(r,o,f,d,S){for(var M,T,F,I,H,ie,ce=o.createDocumentFragment(),K=[],ve=0,it=r.length;ve<it;ve++)if(M=r[ve],M||M===0)if(N(M)==="object")l.merge(K,M.nodeType?[M]:M);else if(!Zt.test(M))K.push(o.createTextNode(M));else{for(T=T||ce.appendChild(o.createElement("div")),F=(Ne.exec(M)||["",""])[1].toLowerCase(),I=Tt[F]||Tt._default,T.innerHTML=I[1]+l.htmlPrefilter(M)+I[2],ie=I[0];ie--;)T=T.lastChild;l.merge(K,T.childNodes),T=ce.firstChild,T.textContent=""}for(ce.textContent="",ve=0;M=K[ve++];){if(d&&l.inArray(M,d)>-1){S&&S.push(M);continue}if(H=lt(M),T=Lt(ce.appendChild(M),"script"),H&&xt(T),f)for(ie=0;M=T[ie++];)_t.test(M.type||"")&&f.push(M)}return ce}var xr=/^([^.]*)(?:\.(.+)|)/;function Gn(){return!0}function cn(){return!1}function xi(r,o,f,d,S,M){var T,F;if(typeof o=="object"){typeof f!="string"&&(d=d||f,f=void 0);for(F in o)xi(r,F,f,d,o[F],M);return r}if(d==null&&S==null?(S=f,d=f=void 0):S==null&&(typeof f=="string"?(S=d,d=void 0):(S=d,d=f,f=void 0)),S===!1)S=cn;else if(!S)return r;return M===1&&(T=S,S=function(I){return l().off(I),T.apply(this,arguments)},S.guid=T.guid||(T.guid=l.guid++)),r.each(function(){l.event.add(this,o,S,d,f)})}l.event={global:{},add:function(r,o,f,d,S){var M,T,F,I,H,ie,ce,K,ve,it,yt,ct=X.get(r);if(fe(r))for(f.handler&&(M=f,f=M.handler,S=M.selector),S&&l.find.matchesSelector(Le,S),f.guid||(f.guid=l.guid++),(I=ct.events)||(I=ct.events=Object.create(null)),(T=ct.handle)||(T=ct.handle=function(Kt){return typeof l<"u"&&l.event.triggered!==Kt.type?l.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Ye)||[""],H=o.length;H--;)F=xr.exec(o[H])||[],ve=yt=F[1],it=(F[2]||"").split(".").sort(),ve&&(ce=l.event.special[ve]||{},ve=(S?ce.delegateType:ce.bindType)||ve,ce=l.event.special[ve]||{},ie=l.extend({type:ve,origType:yt,data:d,handler:f,guid:f.guid,selector:S,needsContext:S&&l.expr.match.needsContext.test(S),namespace:it.join(".")},M),(K=I[ve])||(K=I[ve]=[],K.delegateCount=0,(!ce.setup||ce.setup.call(r,d,it,T)===!1)&&r.addEventListener&&r.addEventListener(ve,T)),ce.add&&(ce.add.call(r,ie),ie.handler.guid||(ie.handler.guid=f.guid)),S?K.splice(K.delegateCount++,0,ie):K.push(ie),l.event.global[ve]=!0)},remove:function(r,o,f,d,S){var M,T,F,I,H,ie,ce,K,ve,it,yt,ct=X.hasData(r)&&X.get(r);if(!(!ct||!(I=ct.events))){for(o=(o||"").match(Ye)||[""],H=o.length;H--;){if(F=xr.exec(o[H])||[],ve=yt=F[1],it=(F[2]||"").split(".").sort(),!ve){for(ve in I)l.event.remove(r,ve+o[H],f,d,!0);continue}for(ce=l.event.special[ve]||{},ve=(d?ce.delegateType:ce.bindType)||ve,K=I[ve]||[],F=F[2]&&new RegExp("(^|\\.)"+it.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=M=K.length;M--;)ie=K[M],(S||yt===ie.origType)&&(!f||f.guid===ie.guid)&&(!F||F.test(ie.namespace))&&(!d||d===ie.selector||d==="**"&&ie.selector)&&(K.splice(M,1),ie.selector&&K.delegateCount--,ce.remove&&ce.remove.call(r,ie));T&&!K.length&&((!ce.teardown||ce.teardown.call(r,it,ct.handle)===!1)&&l.removeEvent(r,ve,ct.handle),delete I[ve])}l.isEmptyObject(I)&&X.remove(r,"handle events")}},dispatch:function(r){var o,f,d,S,M,T,F=new Array(arguments.length),I=l.event.fix(r),H=(X.get(this,"events")||Object.create(null))[I.type]||[],ie=l.event.special[I.type]||{};for(F[0]=I,o=1;o<arguments.length;o++)F[o]=arguments[o];if(I.delegateTarget=this,!(ie.preDispatch&&ie.preDispatch.call(this,I)===!1)){for(T=l.event.handlers.call(this,I,H),o=0;(S=T[o++])&&!I.isPropagationStopped();)for(I.currentTarget=S.elem,f=0;(M=S.handlers[f++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||M.namespace===!1||I.rnamespace.test(M.namespace))&&(I.handleObj=M,I.data=M.data,d=((l.event.special[M.origType]||{}).handle||M.handler).apply(S.elem,F),d!==void 0&&(I.result=d)===!1&&(I.preventDefault(),I.stopPropagation()));return ie.postDispatch&&ie.postDispatch.call(this,I),I.result}},handlers:function(r,o){var f,d,S,M,T,F=[],I=o.delegateCount,H=r.target;if(I&&H.nodeType&&!(r.type==="click"&&r.button>=1)){for(;H!==this;H=H.parentNode||this)if(H.nodeType===1&&!(r.type==="click"&&H.disabled===!0)){for(M=[],T={},f=0;f<I;f++)d=o[f],S=d.selector+" ",T[S]===void 0&&(T[S]=d.needsContext?l(S,this).index(H)>-1:l.find(S,this,null,[H]).length),T[S]&&M.push(d);M.length&&F.push({elem:H,handlers:M})}}return H=this,I<o.length&&F.push({elem:H,handlers:o.slice(I)}),F},addProp:function(r,o){Object.defineProperty(l.Event.prototype,r,{enumerable:!0,configurable:!0,get:C(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(f){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(r){return r[l.expando]?r:new l.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Ee.test(o.type)&&o.click&&he(o,"input")&&Si(o,"click",!0),!1},trigger:function(r){var o=this||r;return Ee.test(o.type)&&o.click&&he(o,"input")&&Si(o,"click"),!0},_default:function(r){var o=r.target;return Ee.test(o.type)&&o.click&&he(o,"input")&&X.get(o,"click")||he(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Si(r,o,f){if(!f){X.get(r,o)===void 0&&l.event.add(r,o,Gn);return}X.set(r,o,!1),l.event.add(r,o,{namespace:!1,handler:function(d){var S,M=X.get(this,o);if(d.isTrigger&1&&this[o]){if(M)(l.event.special[o]||{}).delegateType&&d.stopPropagation();else if(M=a.call(arguments),X.set(this,o,M),this[o](),S=X.get(this,o),X.set(this,o,!1),M!==S)return d.stopImmediatePropagation(),d.preventDefault(),S}else M&&(X.set(this,o,l.event.trigger(M[0],M.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Gn)}})}l.removeEvent=function(r,o,f){r.removeEventListener&&r.removeEventListener(o,f)},l.Event=function(r,o){if(!(this instanceof l.Event))return new l.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?Gn:cn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&l.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:cn,isPropagationStopped:cn,isImmediatePropagationStopped:cn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=Gn,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=Gn,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=Gn,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(r,o){function f(d){if(g.documentMode){var S=X.get(this,"handle"),M=l.event.fix(d);M.type=d.type==="focusin"?"focus":"blur",M.isSimulated=!0,S(d),M.target===M.currentTarget&&S(M)}else l.event.simulate(o,d.target,l.event.fix(d))}l.event.special[r]={setup:function(){var d;if(Si(this,r,!0),g.documentMode)d=X.get(this,o),d||this.addEventListener(o,f),X.set(this,o,(d||0)+1);else return!1},trigger:function(){return Si(this,r),!0},teardown:function(){var d;if(g.documentMode)d=X.get(this,o)-1,d?X.set(this,o,d):(this.removeEventListener(o,f),X.remove(this,o));else return!1},_default:function(d){return X.get(d.target,r)},delegateType:o},l.event.special[o]={setup:function(){var d=this.ownerDocument||this.document||this,S=g.documentMode?this:d,M=X.get(S,o);M||(g.documentMode?this.addEventListener(o,f):d.addEventListener(r,f,!0)),X.set(S,o,(M||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,S=g.documentMode?this:d,M=X.get(S,o)-1;M?X.set(S,o,M):(g.documentMode?this.removeEventListener(o,f):d.removeEventListener(r,f,!0),X.remove(S,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){l.event.special[r]={delegateType:o,bindType:o,handle:function(f){var d,S=this,M=f.relatedTarget,T=f.handleObj;return(!M||M!==S&&!l.contains(S,M))&&(f.type=T.origType,d=T.handler.apply(this,arguments),f.type=o),d}}}),l.fn.extend({on:function(r,o,f,d){return xi(this,r,o,f,d)},one:function(r,o,f,d){return xi(this,r,o,f,d,1)},off:function(r,o,f){var d,S;if(r&&r.preventDefault&&r.handleObj)return d=r.handleObj,l(r.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof r=="object"){for(S in r)this.off(S,o,r[S]);return this}return(o===!1||typeof o=="function")&&(f=o,o=void 0),f===!1&&(f=cn),this.each(function(){l.event.remove(this,r,f,o)})}});var Wr=/<script|<style|<link/i,Hi=/checked\s*(?:[^=]|=\s*.checked.)/i,Xr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Mi(r,o){return he(r,"table")&&he(o.nodeType!==11?o:o.firstChild,"tr")&&l(r).children("tbody")[0]||r}function qr(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function Yr(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function jr(r,o){var f,d,S,M,T,F,I;if(o.nodeType===1){if(X.hasData(r)&&(M=X.get(r),I=M.events,I)){X.remove(o,"handle events");for(S in I)for(f=0,d=I[S].length;f<d;f++)l.event.add(o,S,I[S][f])}Pe.hasData(r)&&(T=Pe.access(r),F=l.extend({},T),Pe.set(o,F))}}function Hs(r,o){var f=o.nodeName.toLowerCase();f==="input"&&Ee.test(r.type)?o.checked=r.checked:(f==="input"||f==="textarea")&&(o.defaultValue=r.defaultValue)}function ni(r,o,f,d){o=u(o);var S,M,T,F,I,H,ie=0,ce=r.length,K=ce-1,ve=o[0],it=C(ve);if(it||ce>1&&typeof ve=="string"&&!E.checkClone&&Hi.test(ve))return r.each(function(yt){var ct=r.eq(yt);it&&(o[0]=ve.call(this,yt,ct.html())),ni(ct,o,f,d)});if(ce&&(S=_n(o,r[0].ownerDocument,!1,r,d),M=S.firstChild,S.childNodes.length===1&&(S=M),M||d)){for(T=l.map(Lt(S,"script"),qr),F=T.length;ie<ce;ie++)I=S,ie!==K&&(I=l.clone(I,!0,!0),F&&l.merge(T,Lt(I,"script"))),f.call(r[ie],I,ie);if(F)for(H=T[T.length-1].ownerDocument,l.map(T,Yr),ie=0;ie<F;ie++)I=T[ie],_t.test(I.type||"")&&!X.access(I,"globalEval")&&l.contains(H,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?l._evalUrl&&!I.noModule&&l._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},H):D(I.textContent.replace(Xr,""),I,H))}return r}function R(r,o,f){for(var d,S=o?l.filter(o,r):r,M=0;(d=S[M])!=null;M++)!f&&d.nodeType===1&&l.cleanData(Lt(d)),d.parentNode&&(f&&lt(d)&&xt(Lt(d,"script")),d.parentNode.removeChild(d));return r}l.extend({htmlPrefilter:function(r){return r},clone:function(r,o,f){var d,S,M,T,F=r.cloneNode(!0),I=lt(r);if(!E.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!l.isXMLDoc(r))for(T=Lt(F),M=Lt(r),d=0,S=M.length;d<S;d++)Hs(M[d],T[d]);if(o)if(f)for(M=M||Lt(r),T=T||Lt(F),d=0,S=M.length;d<S;d++)jr(M[d],T[d]);else jr(r,F);return T=Lt(F,"script"),T.length>0&&xt(T,!I&&Lt(r,"script")),F},cleanData:function(r){for(var o,f,d,S=l.event.special,M=0;(f=r[M])!==void 0;M++)if(fe(f)){if(o=f[X.expando]){if(o.events)for(d in o.events)S[d]?l.event.remove(f,d):l.removeEvent(f,d,o.handle);f[X.expando]=void 0}f[Pe.expando]&&(f[Pe.expando]=void 0)}}}),l.fn.extend({detach:function(r){return R(this,r,!0)},remove:function(r){return R(this,r)},text:function(r){return pt(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return ni(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Mi(this,r);o.appendChild(r)}})},prepend:function(){return ni(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Mi(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return ni(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return ni(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(l.cleanData(Lt(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return l.clone(this,r,o)})},html:function(r){return pt(this,function(o){var f=this[0]||{},d=0,S=this.length;if(o===void 0&&f.nodeType===1)return f.innerHTML;if(typeof o=="string"&&!Wr.test(o)&&!Tt[(Ne.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;d<S;d++)f=this[d]||{},f.nodeType===1&&(l.cleanData(Lt(f,!1)),f.innerHTML=o);f=0}catch{}}f&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return ni(this,arguments,function(o){var f=this.parentNode;l.inArray(this,r)<0&&(l.cleanData(Lt(this)),f&&f.replaceChild(o,this))},r)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){l.fn[r]=function(f){for(var d,S=[],M=l(f),T=M.length-1,F=0;F<=T;F++)d=F===T?this:this.clone(!0),l(M[F])[o](d),c.apply(S,d.get());return this.pushStack(S)}});var V=new RegExp("^("+Oe+")(?!px)[a-z%]+$","i"),Z=/^--/,$=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},W=function(r,o,f){var d,S,M={};for(S in o)M[S]=r.style[S],r.style[S]=o[S];d=f.call(r);for(S in o)r.style[S]=M[S];return d},Me=new RegExp(je.join("|"),"i");(function(){function r(){if(H){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",H.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Le.appendChild(I).appendChild(H);var ie=e.getComputedStyle(H);f=ie.top!=="1%",F=o(ie.marginLeft)===12,H.style.right="60%",M=o(ie.right)===36,d=o(ie.width)===36,H.style.position="absolute",S=o(H.offsetWidth/3)===12,Le.removeChild(I),H=null}}function o(ie){return Math.round(parseFloat(ie))}var f,d,S,M,T,F,I=g.createElement("div"),H=g.createElement("div");H.style&&(H.style.backgroundClip="content-box",H.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=H.style.backgroundClip==="content-box",l.extend(E,{boxSizingReliable:function(){return r(),d},pixelBoxStyles:function(){return r(),M},pixelPosition:function(){return r(),f},reliableMarginLeft:function(){return r(),F},scrollboxSize:function(){return r(),S},reliableTrDimensions:function(){var ie,ce,K,ve;return T==null&&(ie=g.createElement("table"),ce=g.createElement("tr"),K=g.createElement("div"),ie.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ce.style.cssText="box-sizing:content-box;border:1px solid",ce.style.height="1px",K.style.height="9px",K.style.display="block",Le.appendChild(ie).appendChild(ce).appendChild(K),ve=e.getComputedStyle(ce),T=parseInt(ve.height,10)+parseInt(ve.borderTopWidth,10)+parseInt(ve.borderBottomWidth,10)===ce.offsetHeight,Le.removeChild(ie)),T}}))})();function Te(r,o,f){var d,S,M,T,F=Z.test(o),I=r.style;return f=f||$(r),f&&(T=f.getPropertyValue(o)||f[o],F&&T&&(T=T.replace(ne,"$1")||void 0),T===""&&!lt(r)&&(T=l.style(r,o)),!E.pixelBoxStyles()&&V.test(T)&&Me.test(o)&&(d=I.width,S=I.minWidth,M=I.maxWidth,I.minWidth=I.maxWidth=I.width=T,T=f.width,I.width=d,I.minWidth=S,I.maxWidth=M)),T!==void 0?T+"":T}function Be(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var ke=["Webkit","Moz","ms"],Qe=g.createElement("div").style,tt={};function qe(r){for(var o=r[0].toUpperCase()+r.slice(1),f=ke.length;f--;)if(r=ke[f]+o,r in Qe)return r}function bt(r){var o=l.cssProps[r]||tt[r];return o||(r in Qe?r:tt[r]=qe(r)||r)}var Ut=/^(none|table(?!-c[ea]).+)/,Ot={position:"absolute",visibility:"hidden",display:"block"},$t={letterSpacing:"0",fontWeight:"400"};function At(r,o,f){var d=$e.exec(o);return d?Math.max(0,d[2]-(f||0))+(d[3]||"px"):o}function Xe(r,o,f,d,S,M){var T=o==="width"?1:0,F=0,I=0,H=0;if(f===(d?"border":"content"))return 0;for(;T<4;T+=2)f==="margin"&&(H+=l.css(r,f+je[T],!0,S)),d?(f==="content"&&(I-=l.css(r,"padding"+je[T],!0,S)),f!=="margin"&&(I-=l.css(r,"border"+je[T]+"Width",!0,S))):(I+=l.css(r,"padding"+je[T],!0,S),f!=="padding"?I+=l.css(r,"border"+je[T]+"Width",!0,S):F+=l.css(r,"border"+je[T]+"Width",!0,S));return!d&&M>=0&&(I+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-M-I-F-.5))||0),I+H}function Gt(r,o,f){var d=$(r),S=!E.boxSizingReliable()||f,M=S&&l.css(r,"boxSizing",!1,d)==="border-box",T=M,F=Te(r,o,d),I="offset"+o[0].toUpperCase()+o.slice(1);if(V.test(F)){if(!f)return F;F="auto"}return(!E.boxSizingReliable()&&M||!E.reliableTrDimensions()&&he(r,"tr")||F==="auto"||!parseFloat(F)&&l.css(r,"display",!1,d)==="inline")&&r.getClientRects().length&&(M=l.css(r,"boxSizing",!1,d)==="border-box",T=I in r,T&&(F=r[I])),F=parseFloat(F)||0,F+Xe(r,o,f||(M?"border":"content"),T,d,F)+"px"}l.extend({cssHooks:{opacity:{get:function(r,o){if(o){var f=Te(r,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,f,d){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var S,M,T,F=q(o),I=Z.test(o),H=r.style;if(I||(o=bt(F)),T=l.cssHooks[o]||l.cssHooks[F],f!==void 0){if(M=typeof f,M==="string"&&(S=$e.exec(f))&&S[1]&&(f=k(r,o,S),M="number"),f==null||f!==f)return;M==="number"&&!I&&(f+=S&&S[3]||(l.cssNumber[F]?"":"px")),!E.clearCloneStyle&&f===""&&o.indexOf("background")===0&&(H[o]="inherit"),(!T||!("set"in T)||(f=T.set(r,f,d))!==void 0)&&(I?H.setProperty(o,f):H[o]=f)}else return T&&"get"in T&&(S=T.get(r,!1,d))!==void 0?S:H[o]}},css:function(r,o,f,d){var S,M,T,F=q(o),I=Z.test(o);return I||(o=bt(F)),T=l.cssHooks[o]||l.cssHooks[F],T&&"get"in T&&(S=T.get(r,!0,f)),S===void 0&&(S=Te(r,o,d)),S==="normal"&&o in $t&&(S=$t[o]),f===""||f?(M=parseFloat(S),f===!0||isFinite(M)?M||0:S):S}}),l.each(["height","width"],function(r,o){l.cssHooks[o]={get:function(f,d,S){if(d)return Ut.test(l.css(f,"display"))&&(!f.getClientRects().length||!f.getBoundingClientRect().width)?W(f,Ot,function(){return Gt(f,o,S)}):Gt(f,o,S)},set:function(f,d,S){var M,T=$(f),F=!E.scrollboxSize()&&T.position==="absolute",I=F||S,H=I&&l.css(f,"boxSizing",!1,T)==="border-box",ie=S?Xe(f,o,S,H,T):0;return H&&F&&(ie-=Math.ceil(f["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(T[o])-Xe(f,o,"border",!1,T)-.5)),ie&&(M=$e.exec(d))&&(M[3]||"px")!=="px"&&(f.style[o]=d,d=l.css(f,o)),At(f,d,ie)}}}),l.cssHooks.marginLeft=Be(E.reliableMarginLeft,function(r,o){if(o)return(parseFloat(Te(r,"marginLeft"))||r.getBoundingClientRect().left-W(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(r,o){l.cssHooks[r+o]={expand:function(f){for(var d=0,S={},M=typeof f=="string"?f.split(" "):[f];d<4;d++)S[r+je[d]+o]=M[d]||M[d-2]||M[0];return S}},r!=="margin"&&(l.cssHooks[r+o].set=At)}),l.fn.extend({css:function(r,o){return pt(this,function(f,d,S){var M,T,F={},I=0;if(Array.isArray(d)){for(M=$(f),T=d.length;I<T;I++)F[d[I]]=l.css(f,d[I],!1,M);return F}return S!==void 0?l.style(f,d,S):l.css(f,d)},r,o,arguments.length>1)}});function rt(r,o,f,d,S){return new rt.prototype.init(r,o,f,d,S)}l.Tween=rt,rt.prototype={constructor:rt,init:function(r,o,f,d,S,M){this.elem=r,this.prop=f,this.easing=S||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=d,this.unit=M||(l.cssNumber[f]?"":"px")},cur:function(){var r=rt.propHooks[this.prop];return r&&r.get?r.get(this):rt.propHooks._default.get(this)},run:function(r){var o,f=rt.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):rt.propHooks._default.set(this),this}},rt.prototype.init.prototype=rt.prototype,rt.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=l.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){l.fx.step[r.prop]?l.fx.step[r.prop](r):r.elem.nodeType===1&&(l.cssHooks[r.prop]||r.elem.style[bt(r.prop)]!=null)?l.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},rt.propHooks.scrollTop=rt.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},l.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},l.fx=rt.prototype.init,l.fx.step={};var Yt,Tn,tn=/^(?:toggle|show|hide)$/,Sr=/queueHooks$/;function Nt(){Tn&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Nt):e.setTimeout(Nt,l.fx.interval),l.fx.tick())}function bn(){return e.setTimeout(function(){Yt=void 0}),Yt=Date.now()}function ii(r,o){var f,d=0,S={height:r};for(o=o?1:0;d<4;d+=2-o)f=je[d],S["margin"+f]=S["padding"+f]=r;return o&&(S.opacity=S.width=r),S}function nn(r,o,f){for(var d,S=(un.tweeners[o]||[]).concat(un.tweeners["*"]),M=0,T=S.length;M<T;M++)if(d=S[M].call(f,o,r))return d}function Mr(r,o,f){var d,S,M,T,F,I,H,ie,ce="width"in o||"height"in o,K=this,ve={},it=r.style,yt=r.nodeType&&Ct(r),ct=X.get(r,"fxshow");f.queue||(T=l._queueHooks(r,"fx"),T.unqueued==null&&(T.unqueued=0,F=T.empty.fire,T.empty.fire=function(){T.unqueued||F()}),T.unqueued++,K.always(function(){K.always(function(){T.unqueued--,l.queue(r,"fx").length||T.empty.fire()})}));for(d in o)if(S=o[d],tn.test(S)){if(delete o[d],M=M||S==="toggle",S===(yt?"hide":"show"))if(S==="show"&&ct&&ct[d]!==void 0)yt=!0;else continue;ve[d]=ct&&ct[d]||l.style(r,d)}if(I=!l.isEmptyObject(o),!(!I&&l.isEmptyObject(ve))){ce&&r.nodeType===1&&(f.overflow=[it.overflow,it.overflowX,it.overflowY],H=ct&&ct.display,H==null&&(H=X.get(r,"display")),ie=l.css(r,"display"),ie==="none"&&(H?ie=H:(de([r],!0),H=r.style.display||H,ie=l.css(r,"display"),de([r]))),(ie==="inline"||ie==="inline-block"&&H!=null)&&l.css(r,"float")==="none"&&(I||(K.done(function(){it.display=H}),H==null&&(ie=it.display,H=ie==="none"?"":ie)),it.display="inline-block")),f.overflow&&(it.overflow="hidden",K.always(function(){it.overflow=f.overflow[0],it.overflowX=f.overflow[1],it.overflowY=f.overflow[2]})),I=!1;for(d in ve)I||(ct?"hidden"in ct&&(yt=ct.hidden):ct=X.access(r,"fxshow",{display:H}),M&&(ct.hidden=!yt),yt&&de([r],!0),K.done(function(){yt||de([r]),X.remove(r,"fxshow");for(d in ve)l.style(r,d,ve[d])})),I=nn(yt?ct[d]:0,d,K),d in ct||(ct[d]=I.start,yt&&(I.end=I.start,I.start=0))}}function ks(r,o){var f,d,S,M,T;for(f in r)if(d=q(f),S=o[d],M=r[f],Array.isArray(M)&&(S=M[1],M=r[f]=M[0]),f!==d&&(r[d]=M,delete r[f]),T=l.cssHooks[d],T&&"expand"in T){M=T.expand(M),delete r[d];for(f in M)f in r||(r[f]=M[f],o[f]=S)}else o[d]=S}function un(r,o,f){var d,S,M=0,T=un.prefilters.length,F=l.Deferred().always(function(){delete I.elem}),I=function(){if(S)return!1;for(var ce=Yt||bn(),K=Math.max(0,H.startTime+H.duration-ce),ve=K/H.duration||0,it=1-ve,yt=0,ct=H.tweens.length;yt<ct;yt++)H.tweens[yt].run(it);return F.notifyWith(r,[H,it,K]),it<1&&ct?K:(ct||F.notifyWith(r,[H,1,0]),F.resolveWith(r,[H]),!1)},H=F.promise({elem:r,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},f),originalProperties:o,originalOptions:f,startTime:Yt||bn(),duration:f.duration,tweens:[],createTween:function(ce,K){var ve=l.Tween(r,H.opts,ce,K,H.opts.specialEasing[ce]||H.opts.easing);return H.tweens.push(ve),ve},stop:function(ce){var K=0,ve=ce?H.tweens.length:0;if(S)return this;for(S=!0;K<ve;K++)H.tweens[K].run(1);return ce?(F.notifyWith(r,[H,1,0]),F.resolveWith(r,[H,ce])):F.rejectWith(r,[H,ce]),this}}),ie=H.props;for(ks(ie,H.opts.specialEasing);M<T;M++)if(d=un.prefilters[M].call(H,r,ie,H.opts),d)return C(d.stop)&&(l._queueHooks(H.elem,H.opts.queue).stop=d.stop.bind(d)),d;return l.map(ie,nn,H),C(H.opts.start)&&H.opts.start.call(r,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),l.fx.timer(l.extend(I,{elem:r,anim:H,queue:H.opts.queue})),H}l.Animation=l.extend(un,{tweeners:{"*":[function(r,o){var f=this.createTween(r,o);return k(f.elem,r,$e.exec(o),f),f}]},tweener:function(r,o){C(r)?(o=r,r=["*"]):r=r.match(Ye);for(var f,d=0,S=r.length;d<S;d++)f=r[d],un.tweeners[f]=un.tweeners[f]||[],un.tweeners[f].unshift(o)},prefilters:[Mr],prefilter:function(r,o){o?un.prefilters.unshift(r):un.prefilters.push(r)}}),l.speed=function(r,o,f){var d=r&&typeof r=="object"?l.extend({},r):{complete:f||!f&&o||C(r)&&r,duration:r,easing:f&&o||o&&!C(o)&&o};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){C(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(r,o,f,d){return this.filter(Ct).css("opacity",0).show().end().animate({opacity:o},r,f,d)},animate:function(r,o,f,d){var S=l.isEmptyObject(r),M=l.speed(o,f,d),T=function(){var F=un(this,l.extend({},r),M);(S||X.get(this,"finish"))&&F.stop(!0)};return T.finish=T,S||M.queue===!1?this.each(T):this.queue(M.queue,T)},stop:function(r,o,f){var d=function(S){var M=S.stop;delete S.stop,M(f)};return typeof r!="string"&&(f=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var S=!0,M=r!=null&&r+"queueHooks",T=l.timers,F=X.get(this);if(M)F[M]&&F[M].stop&&d(F[M]);else for(M in F)F[M]&&F[M].stop&&Sr.test(M)&&d(F[M]);for(M=T.length;M--;)T[M].elem===this&&(r==null||T[M].queue===r)&&(T[M].anim.stop(f),S=!1,T.splice(M,1));(S||!f)&&l.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,f=X.get(this),d=f[r+"queue"],S=f[r+"queueHooks"],M=l.timers,T=d?d.length:0;for(f.finish=!0,l.queue(this,r,[]),S&&S.stop&&S.stop.call(this,!0),o=M.length;o--;)M[o].elem===this&&M[o].queue===r&&(M[o].anim.stop(!0),M.splice(o,1));for(o=0;o<T;o++)d[o]&&d[o].finish&&d[o].finish.call(this);delete f.finish})}}),l.each(["toggle","show","hide"],function(r,o){var f=l.fn[o];l.fn[o]=function(d,S,M){return d==null||typeof d=="boolean"?f.apply(this,arguments):this.animate(ii(o,!0),d,S,M)}}),l.each({slideDown:ii("show"),slideUp:ii("hide"),slideToggle:ii("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){l.fn[r]=function(f,d,S){return this.animate(o,f,d,S)}}),l.timers=[],l.fx.tick=function(){var r,o=0,f=l.timers;for(Yt=Date.now();o<f.length;o++)r=f[o],!r()&&f[o]===r&&f.splice(o--,1);f.length||l.fx.stop(),Yt=void 0},l.fx.timer=function(r){l.timers.push(r),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Tn||(Tn=!0,Nt())},l.fx.stop=function(){Tn=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(r,o){return r=l.fx&&l.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(f,d){var S=e.setTimeout(f,r);d.stop=function(){e.clearTimeout(S)}})},function(){var r=g.createElement("input"),o=g.createElement("select"),f=o.appendChild(g.createElement("option"));r.type="checkbox",E.checkOn=r.value!=="",E.optSelected=f.selected,r=g.createElement("input"),r.value="t",r.type="radio",E.radioValue=r.value==="t"}();var Lo,yr=l.expr.attrHandle;l.fn.extend({attr:function(r,o){return pt(this,l.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){l.removeAttr(this,r)})}}),l.extend({attr:function(r,o,f){var d,S,M=r.nodeType;if(!(M===3||M===8||M===2)){if(typeof r.getAttribute>"u")return l.prop(r,o,f);if((M!==1||!l.isXMLDoc(r))&&(S=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?Lo:void 0)),f!==void 0){if(f===null){l.removeAttr(r,o);return}return S&&"set"in S&&(d=S.set(r,f,o))!==void 0?d:(r.setAttribute(o,f+""),f)}return S&&"get"in S&&(d=S.get(r,o))!==null?d:(d=l.find.attr(r,o),d??void 0)}},attrHooks:{type:{set:function(r,o){if(!E.radioValue&&o==="radio"&&he(r,"input")){var f=r.value;return r.setAttribute("type",o),f&&(r.value=f),o}}}},removeAttr:function(r,o){var f,d=0,S=o&&o.match(Ye);if(S&&r.nodeType===1)for(;f=S[d++];)r.removeAttribute(f)}}),Lo={set:function(r,o,f){return o===!1?l.removeAttr(r,f):r.setAttribute(f,f),f}},l.each(l.expr.match.bool.source.match(/\w+/g),function(r,o){var f=yr[o]||l.find.attr;yr[o]=function(d,S,M){var T,F,I=S.toLowerCase();return M||(F=yr[I],yr[I]=T,T=f(d,S,M)!=null?I:null,yr[I]=F),T}});var yc=/^(?:input|select|textarea|button)$/i,Ec=/^(?:a|area)$/i;l.fn.extend({prop:function(r,o){return pt(this,l.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[l.propFix[r]||r]})}}),l.extend({prop:function(r,o,f){var d,S,M=r.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!l.isXMLDoc(r))&&(o=l.propFix[o]||o,S=l.propHooks[o]),f!==void 0?S&&"set"in S&&(d=S.set(r,f,o))!==void 0?d:r[o]=f:S&&"get"in S&&(d=S.get(r,o))!==null?d:r[o]},propHooks:{tabIndex:{get:function(r){var o=l.find.attr(r,"tabindex");return o?parseInt(o,10):yc.test(r.nodeName)||Ec.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(l.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function yi(r){var o=r.match(Ye)||[];return o.join(" ")}function Ei(r){return r.getAttribute&&r.getAttribute("class")||""}function Gs(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Ye)||[]:[]}l.fn.extend({addClass:function(r){var o,f,d,S,M,T;return C(r)?this.each(function(F){l(this).addClass(r.call(this,F,Ei(this)))}):(o=Gs(r),o.length?this.each(function(){if(d=Ei(this),f=this.nodeType===1&&" "+yi(d)+" ",f){for(M=0;M<o.length;M++)S=o[M],f.indexOf(" "+S+" ")<0&&(f+=S+" ");T=yi(f),d!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(r){var o,f,d,S,M,T;return C(r)?this.each(function(F){l(this).removeClass(r.call(this,F,Ei(this)))}):arguments.length?(o=Gs(r),o.length?this.each(function(){if(d=Ei(this),f=this.nodeType===1&&" "+yi(d)+" ",f){for(M=0;M<o.length;M++)for(S=o[M];f.indexOf(" "+S+" ")>-1;)f=f.replace(" "+S+" "," ");T=yi(f),d!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(r,o){var f,d,S,M,T=typeof r,F=T==="string"||Array.isArray(r);return C(r)?this.each(function(I){l(this).toggleClass(r.call(this,I,Ei(this),o),o)}):typeof o=="boolean"&&F?o?this.addClass(r):this.removeClass(r):(f=Gs(r),this.each(function(){if(F)for(M=l(this),S=0;S<f.length;S++)d=f[S],M.hasClass(d)?M.removeClass(d):M.addClass(d);else(r===void 0||T==="boolean")&&(d=Ei(this),d&&X.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||r===!1?"":X.get(this,"__className__")||""))}))},hasClass:function(r){var o,f,d=0;for(o=" "+r+" ";f=this[d++];)if(f.nodeType===1&&(" "+yi(Ei(f))+" ").indexOf(o)>-1)return!0;return!1}});var Tc=/\r/g;l.fn.extend({val:function(r){var o,f,d,S=this[0];return arguments.length?(d=C(r),this.each(function(M){var T;this.nodeType===1&&(d?T=r.call(this,M,l(this).val()):T=r,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=l.map(T,function(F){return F==null?"":F+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,T,"value")===void 0)&&(this.value=T))})):S?(o=l.valHooks[S.type]||l.valHooks[S.nodeName.toLowerCase()],o&&"get"in o&&(f=o.get(S,"value"))!==void 0?f:(f=S.value,typeof f=="string"?f.replace(Tc,""):f??"")):void 0}}),l.extend({valHooks:{option:{get:function(r){var o=l.find.attr(r,"value");return o??yi(l.text(r))}},select:{get:function(r){var o,f,d,S=r.options,M=r.selectedIndex,T=r.type==="select-one",F=T?null:[],I=T?M+1:S.length;for(M<0?d=I:d=T?M:0;d<I;d++)if(f=S[d],(f.selected||d===M)&&!f.disabled&&(!f.parentNode.disabled||!he(f.parentNode,"optgroup"))){if(o=l(f).val(),T)return o;F.push(o)}return F},set:function(r,o){for(var f,d,S=r.options,M=l.makeArray(o),T=S.length;T--;)d=S[T],(d.selected=l.inArray(l.valHooks.option.get(d),M)>-1)&&(f=!0);return f||(r.selectedIndex=-1),M}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=l.inArray(l(r).val(),o)>-1}},E.checkOn||(l.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var Er=e.location,Do={guid:Date.now()},Vs=/\?/;l.parseXML=function(r){var o,f;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return f=o&&o.getElementsByTagName("parsererror")[0],(!o||f)&&l.error("Invalid XML: "+(f?l.map(f.childNodes,function(d){return d.textContent}).join(`
`):r)),o};var Uo=/^(?:focusinfocus|focusoutblur)$/,Io=function(r){r.stopPropagation()};l.extend(l.event,{trigger:function(r,o,f,d){var S,M,T,F,I,H,ie,ce,K=[f||g],ve=_.call(r,"type")?r.type:r,it=_.call(r,"namespace")?r.namespace.split("."):[];if(M=ce=T=f=f||g,!(f.nodeType===3||f.nodeType===8)&&!Uo.test(ve+l.event.triggered)&&(ve.indexOf(".")>-1&&(it=ve.split("."),ve=it.shift(),it.sort()),I=ve.indexOf(":")<0&&"on"+ve,r=r[l.expando]?r:new l.Event(ve,typeof r=="object"&&r),r.isTrigger=d?2:3,r.namespace=it.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+it.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=f),o=o==null?[r]:l.makeArray(o,[r]),ie=l.event.special[ve]||{},!(!d&&ie.trigger&&ie.trigger.apply(f,o)===!1))){if(!d&&!ie.noBubble&&!v(f)){for(F=ie.delegateType||ve,Uo.test(F+ve)||(M=M.parentNode);M;M=M.parentNode)K.push(M),T=M;T===(f.ownerDocument||g)&&K.push(T.defaultView||T.parentWindow||e)}for(S=0;(M=K[S++])&&!r.isPropagationStopped();)ce=M,r.type=S>1?F:ie.bindType||ve,H=(X.get(M,"events")||Object.create(null))[r.type]&&X.get(M,"handle"),H&&H.apply(M,o),H=I&&M[I],H&&H.apply&&fe(M)&&(r.result=H.apply(M,o),r.result===!1&&r.preventDefault());return r.type=ve,!d&&!r.isDefaultPrevented()&&(!ie._default||ie._default.apply(K.pop(),o)===!1)&&fe(f)&&I&&C(f[ve])&&!v(f)&&(T=f[I],T&&(f[I]=null),l.event.triggered=ve,r.isPropagationStopped()&&ce.addEventListener(ve,Io),f[ve](),r.isPropagationStopped()&&ce.removeEventListener(ve,Io),l.event.triggered=void 0,T&&(f[I]=T)),r.result}},simulate:function(r,o,f){var d=l.extend(new l.Event,f,{type:r,isSimulated:!0});l.event.trigger(d,null,o)}}),l.fn.extend({trigger:function(r,o){return this.each(function(){l.event.trigger(r,o,this)})},triggerHandler:function(r,o){var f=this[0];if(f)return l.event.trigger(r,o,f,!0)}});var bc=/\[\]$/,No=/\r?\n/g,Ac=/^(?:submit|button|image|reset|file)$/i,wc=/^(?:input|select|textarea|keygen)/i;function Ws(r,o,f,d){var S;if(Array.isArray(o))l.each(o,function(M,T){f||bc.test(r)?d(r,T):Ws(r+"["+(typeof T=="object"&&T!=null?M:"")+"]",T,f,d)});else if(!f&&N(o)==="object")for(S in o)Ws(r+"["+S+"]",o[S],f,d);else d(r,o)}l.param=function(r,o){var f,d=[],S=function(M,T){var F=C(T)?T():T;d[d.length]=encodeURIComponent(M)+"="+encodeURIComponent(F??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!l.isPlainObject(r))l.each(r,function(){S(this.name,this.value)});else for(f in r)Ws(f,r[f],o,S);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=l.prop(this,"elements");return r?l.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!l(this).is(":disabled")&&wc.test(this.nodeName)&&!Ac.test(r)&&(this.checked||!Ee.test(r))}).map(function(r,o){var f=l(this).val();return f==null?null:Array.isArray(f)?l.map(f,function(d){return{name:o.name,value:d.replace(No,`\r
`)}}):{name:o.name,value:f.replace(No,`\r
`)}}).get()}});var Cc=/%20/g,Rc=/#.*$/,Pc=/([?&])_=[^&]*/,Lc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Uc=/^(?:GET|HEAD)$/,Ic=/^\/\//,Fo={},Xs={},Oo="*/".concat("*"),qs=g.createElement("a");qs.href=Er.href;function Bo(r){return function(o,f){typeof o!="string"&&(f=o,o="*");var d,S=0,M=o.toLowerCase().match(Ye)||[];if(C(f))for(;d=M[S++];)d[0]==="+"?(d=d.slice(1)||"*",(r[d]=r[d]||[]).unshift(f)):(r[d]=r[d]||[]).push(f)}}function zo(r,o,f,d){var S={},M=r===Xs;function T(F){var I;return S[F]=!0,l.each(r[F]||[],function(H,ie){var ce=ie(o,f,d);if(typeof ce=="string"&&!M&&!S[ce])return o.dataTypes.unshift(ce),T(ce),!1;if(M)return!(I=ce)}),I}return T(o.dataTypes[0])||!S["*"]&&T("*")}function Ys(r,o){var f,d,S=l.ajaxSettings.flatOptions||{};for(f in o)o[f]!==void 0&&((S[f]?r:d||(d={}))[f]=o[f]);return d&&l.extend(!0,r,d),r}function Nc(r,o,f){for(var d,S,M,T,F=r.contents,I=r.dataTypes;I[0]==="*";)I.shift(),d===void 0&&(d=r.mimeType||o.getResponseHeader("Content-Type"));if(d){for(S in F)if(F[S]&&F[S].test(d)){I.unshift(S);break}}if(I[0]in f)M=I[0];else{for(S in f){if(!I[0]||r.converters[S+" "+I[0]]){M=S;break}T||(T=S)}M=M||T}if(M)return M!==I[0]&&I.unshift(M),f[M]}function Fc(r,o,f,d){var S,M,T,F,I,H={},ie=r.dataTypes.slice();if(ie[1])for(T in r.converters)H[T.toLowerCase()]=r.converters[T];for(M=ie.shift();M;)if(r.responseFields[M]&&(f[r.responseFields[M]]=o),!I&&d&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),I=M,M=ie.shift(),M){if(M==="*")M=I;else if(I!=="*"&&I!==M){if(T=H[I+" "+M]||H["* "+M],!T){for(S in H)if(F=S.split(" "),F[1]===M&&(T=H[I+" "+F[0]]||H["* "+F[0]],T)){T===!0?T=H[S]:H[S]!==!0&&(M=F[0],ie.unshift(F[1]));break}}if(T!==!0)if(T&&r.throws)o=T(o);else try{o=T(o)}catch(ce){return{state:"parsererror",error:T?ce:"No conversion from "+I+" to "+M}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Er.href,type:"GET",isLocal:Dc.test(Er.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Oo,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?Ys(Ys(r,l.ajaxSettings),o):Ys(l.ajaxSettings,r)},ajaxPrefilter:Bo(Fo),ajaxTransport:Bo(Xs),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var f,d,S,M,T,F,I,H,ie,ce,K=l.ajaxSetup({},o),ve=K.context||K,it=K.context&&(ve.nodeType||ve.jquery)?l(ve):l.event,yt=l.Deferred(),ct=l.Callbacks("once memory"),Kt=K.statusCode||{},Wt={},Un={},In="canceled",vt={readyState:0,getResponseHeader:function(wt){var Bt;if(I){if(!M)for(M={};Bt=Lc.exec(S);)M[Bt[1].toLowerCase()+" "]=(M[Bt[1].toLowerCase()+" "]||[]).concat(Bt[2]);Bt=M[wt.toLowerCase()+" "]}return Bt==null?null:Bt.join(", ")},getAllResponseHeaders:function(){return I?S:null},setRequestHeader:function(wt,Bt){return I==null&&(wt=Un[wt.toLowerCase()]=Un[wt.toLowerCase()]||wt,Wt[wt]=Bt),this},overrideMimeType:function(wt){return I==null&&(K.mimeType=wt),this},statusCode:function(wt){var Bt;if(wt)if(I)vt.always(wt[vt.status]);else for(Bt in wt)Kt[Bt]=[Kt[Bt],wt[Bt]];return this},abort:function(wt){var Bt=wt||In;return f&&f.abort(Bt),Ti(0,Bt),this}};if(yt.promise(vt),K.url=((r||K.url||Er.href)+"").replace(Ic,Er.protocol+"//"),K.type=o.method||o.type||K.method||K.type,K.dataTypes=(K.dataType||"*").toLowerCase().match(Ye)||[""],K.crossDomain==null){F=g.createElement("a");try{F.href=K.url,F.href=F.href,K.crossDomain=qs.protocol+"//"+qs.host!=F.protocol+"//"+F.host}catch{K.crossDomain=!0}}if(K.data&&K.processData&&typeof K.data!="string"&&(K.data=l.param(K.data,K.traditional)),zo(Fo,K,o,vt),I)return vt;H=l.event&&K.global,H&&l.active++===0&&l.event.trigger("ajaxStart"),K.type=K.type.toUpperCase(),K.hasContent=!Uc.test(K.type),d=K.url.replace(Rc,""),K.hasContent?K.data&&K.processData&&(K.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(K.data=K.data.replace(Cc,"+")):(ce=K.url.slice(d.length),K.data&&(K.processData||typeof K.data=="string")&&(d+=(Vs.test(d)?"&":"?")+K.data,delete K.data),K.cache===!1&&(d=d.replace(Pc,"$1"),ce=(Vs.test(d)?"&":"?")+"_="+Do.guid+++ce),K.url=d+ce),K.ifModified&&(l.lastModified[d]&&vt.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&vt.setRequestHeader("If-None-Match",l.etag[d])),(K.data&&K.hasContent&&K.contentType!==!1||o.contentType)&&vt.setRequestHeader("Content-Type",K.contentType),vt.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+(K.dataTypes[0]!=="*"?", "+Oo+"; q=0.01":""):K.accepts["*"]);for(ie in K.headers)vt.setRequestHeader(ie,K.headers[ie]);if(K.beforeSend&&(K.beforeSend.call(ve,vt,K)===!1||I))return vt.abort();if(In="abort",ct.add(K.complete),vt.done(K.success),vt.fail(K.error),f=zo(Xs,K,o,vt),!f)Ti(-1,"No Transport");else{if(vt.readyState=1,H&&it.trigger("ajaxSend",[vt,K]),I)return vt;K.async&&K.timeout>0&&(T=e.setTimeout(function(){vt.abort("timeout")},K.timeout));try{I=!1,f.send(Wt,Ti)}catch(wt){if(I)throw wt;Ti(-1,wt)}}function Ti(wt,Bt,br,Ks){var Nn,Ar,Fn,ri,si,vn=Bt;I||(I=!0,T&&e.clearTimeout(T),f=void 0,S=Ks||"",vt.readyState=wt>0?4:0,Nn=wt>=200&&wt<300||wt===304,br&&(ri=Nc(K,vt,br)),!Nn&&l.inArray("script",K.dataTypes)>-1&&l.inArray("json",K.dataTypes)<0&&(K.converters["text script"]=function(){}),ri=Fc(K,ri,vt,Nn),Nn?(K.ifModified&&(si=vt.getResponseHeader("Last-Modified"),si&&(l.lastModified[d]=si),si=vt.getResponseHeader("etag"),si&&(l.etag[d]=si)),wt===204||K.type==="HEAD"?vn="nocontent":wt===304?vn="notmodified":(vn=ri.state,Ar=ri.data,Fn=ri.error,Nn=!Fn)):(Fn=vn,(wt||!vn)&&(vn="error",wt<0&&(wt=0))),vt.status=wt,vt.statusText=(Bt||vn)+"",Nn?yt.resolveWith(ve,[Ar,vn,vt]):yt.rejectWith(ve,[vt,vn,Fn]),vt.statusCode(Kt),Kt=void 0,H&&it.trigger(Nn?"ajaxSuccess":"ajaxError",[vt,K,Nn?Ar:Fn]),ct.fireWith(ve,[vt,vn]),H&&(it.trigger("ajaxComplete",[vt,K]),--l.active||l.event.trigger("ajaxStop")))}return vt},getJSON:function(r,o,f){return l.get(r,o,f,"json")},getScript:function(r,o){return l.get(r,void 0,o,"script")}}),l.each(["get","post"],function(r,o){l[o]=function(f,d,S,M){return C(d)&&(M=M||S,S=d,d=void 0),l.ajax(l.extend({url:f,type:o,dataType:M,data:d,success:S},l.isPlainObject(f)&&f))}}),l.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),l._evalUrl=function(r,o,f){return l.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,o,f)}})},l.fn.extend({wrapAll:function(r){var o;return this[0]&&(C(r)&&(r=r.call(this[0])),o=l(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(r){return C(r)?this.each(function(o){l(this).wrapInner(r.call(this,o))}):this.each(function(){var o=l(this),f=o.contents();f.length?f.wrapAll(r):o.append(r)})},wrap:function(r){var o=C(r);return this.each(function(f){l(this).wrapAll(o?r.call(this,f):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(r){return!l.expr.pseudos.visible(r)},l.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Oc={0:200,1223:204},Tr=l.ajaxSettings.xhr();E.cors=!!Tr&&"withCredentials"in Tr,E.ajax=Tr=!!Tr,l.ajaxTransport(function(r){var o,f;if(E.cors||Tr&&!r.crossDomain)return{send:function(d,S){var M,T=r.xhr();if(T.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(M in r.xhrFields)T[M]=r.xhrFields[M];r.mimeType&&T.overrideMimeType&&T.overrideMimeType(r.mimeType),!r.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(M in d)T.setRequestHeader(M,d[M]);o=function(F){return function(){o&&(o=f=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,F==="abort"?T.abort():F==="error"?typeof T.status!="number"?S(0,"error"):S(T.status,T.statusText):S(Oc[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=o(),f=T.onerror=T.ontimeout=o("error"),T.onabort!==void 0?T.onabort=f:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){o&&f()})},o=o("abort");try{T.send(r.hasContent&&r.data||null)}catch(F){if(o)throw F}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return l.globalEval(r),r}}}),l.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),l.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,f;return{send:function(d,S){o=l("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",f=function(M){o.remove(),f=null,M&&S(M.type==="error"?404:200,M.type)}),g.head.appendChild(o[0])},abort:function(){f&&f()}}}});var Ho=[],js=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=Ho.pop()||l.expando+"_"+Do.guid++;return this[r]=!0,r}}),l.ajaxPrefilter("json jsonp",function(r,o,f){var d,S,M,T=r.jsonp!==!1&&(js.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&js.test(r.data)&&"data");if(T||r.dataTypes[0]==="jsonp")return d=r.jsonpCallback=C(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,T?r[T]=r[T].replace(js,"$1"+d):r.jsonp!==!1&&(r.url+=(Vs.test(r.url)?"&":"?")+r.jsonp+"="+d),r.converters["script json"]=function(){return M||l.error(d+" was not called"),M[0]},r.dataTypes[0]="json",S=e[d],e[d]=function(){M=arguments},f.always(function(){S===void 0?l(e).removeProp(d):e[d]=S,r[d]&&(r.jsonpCallback=o.jsonpCallback,Ho.push(d)),M&&C(S)&&S(M[0]),M=S=void 0}),"script"}),E.createHTMLDocument=function(){var r=g.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),l.parseHTML=function(r,o,f){if(typeof r!="string")return[];typeof o=="boolean"&&(f=o,o=!1);var d,S,M;return o||(E.createHTMLDocument?(o=g.implementation.createHTMLDocument(""),d=o.createElement("base"),d.href=g.location.href,o.head.appendChild(d)):o=g),S=We.exec(r),M=!f&&[],S?[o.createElement(S[1])]:(S=_n([r],o,M),M&&M.length&&l(M).remove(),l.merge([],S.childNodes))},l.fn.load=function(r,o,f){var d,S,M,T=this,F=r.indexOf(" ");return F>-1&&(d=yi(r.slice(F)),r=r.slice(0,F)),C(o)?(f=o,o=void 0):o&&typeof o=="object"&&(S="POST"),T.length>0&&l.ajax({url:r,type:S||"GET",dataType:"html",data:o}).done(function(I){M=arguments,T.html(d?l("<div>").append(l.parseHTML(I)).find(d):I)}).always(f&&function(I,H){T.each(function(){f.apply(this,M||[I.responseText,H,I])})}),this},l.expr.pseudos.animated=function(r){return l.grep(l.timers,function(o){return r===o.elem}).length},l.offset={setOffset:function(r,o,f){var d,S,M,T,F,I,H,ie=l.css(r,"position"),ce=l(r),K={};ie==="static"&&(r.style.position="relative"),F=ce.offset(),M=l.css(r,"top"),I=l.css(r,"left"),H=(ie==="absolute"||ie==="fixed")&&(M+I).indexOf("auto")>-1,H?(d=ce.position(),T=d.top,S=d.left):(T=parseFloat(M)||0,S=parseFloat(I)||0),C(o)&&(o=o.call(r,f,l.extend({},F))),o.top!=null&&(K.top=o.top-F.top+T),o.left!=null&&(K.left=o.left-F.left+S),"using"in o?o.using.call(r,K):ce.css(K)}},l.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(S){l.offset.setOffset(this,r,S)});var o,f,d=this[0];if(d)return d.getClientRects().length?(o=d.getBoundingClientRect(),f=d.ownerDocument.defaultView,{top:o.top+f.pageYOffset,left:o.left+f.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,f,d=this[0],S={top:0,left:0};if(l.css(d,"position")==="fixed")o=d.getBoundingClientRect();else{for(o=this.offset(),f=d.ownerDocument,r=d.offsetParent||f.documentElement;r&&(r===f.body||r===f.documentElement)&&l.css(r,"position")==="static";)r=r.parentNode;r&&r!==d&&r.nodeType===1&&(S=l(r).offset(),S.top+=l.css(r,"borderTopWidth",!0),S.left+=l.css(r,"borderLeftWidth",!0))}return{top:o.top-S.top-l.css(d,"marginTop",!0),left:o.left-S.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&l.css(r,"position")==="static";)r=r.offsetParent;return r||Le})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var f=o==="pageYOffset";l.fn[r]=function(d){return pt(this,function(S,M,T){var F;if(v(S)?F=S:S.nodeType===9&&(F=S.defaultView),T===void 0)return F?F[o]:S[M];F?F.scrollTo(f?F.pageXOffset:T,f?T:F.pageYOffset):S[M]=T},r,d,arguments.length)}}),l.each(["top","left"],function(r,o){l.cssHooks[o]=Be(E.pixelPosition,function(f,d){if(d)return d=Te(f,o),V.test(d)?l(f).position()[o]+"px":d})}),l.each({Height:"height",Width:"width"},function(r,o){l.each({padding:"inner"+r,content:o,"":"outer"+r},function(f,d){l.fn[d]=function(S,M){var T=arguments.length&&(f||typeof S!="boolean"),F=f||(S===!0||M===!0?"margin":"border");return pt(this,function(I,H,ie){var ce;return v(I)?d.indexOf("outer")===0?I["inner"+r]:I.document.documentElement["client"+r]:I.nodeType===9?(ce=I.documentElement,Math.max(I.body["scroll"+r],ce["scroll"+r],I.body["offset"+r],ce["offset"+r],ce["client"+r])):ie===void 0?l.css(I,H,F):l.style(I,H,ie,F)},o,T?S:void 0,T)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){l.fn[o]=function(f){return this.on(o,f)}}),l.fn.extend({bind:function(r,o,f){return this.on(r,null,o,f)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,f,d){return this.on(o,r,f,d)},undelegate:function(r,o,f){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",f)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){l.fn[o]=function(f,d){return arguments.length>0?this.on(o,null,f,d):this.trigger(o)}});var Bc=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(r,o){var f,d,S;if(typeof o=="string"&&(f=r[o],o=r,r=f),!!C(r))return d=a.call(arguments,2),S=function(){return r.apply(o||this,d.concat(a.call(arguments)))},S.guid=r.guid=r.guid||l.guid++,S},l.holdReady=function(r){r?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=he,l.isFunction=C,l.isWindow=v,l.camelCase=q,l.type=N,l.now=Date.now,l.isNumeric=function(r){var o=l.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},l.trim=function(r){return r==null?"":(r+"").replace(Bc,"$1")};var zc=e.jQuery,Hc=e.$;return l.noConflict=function(r){return e.$===l&&(e.$=Hc),r&&e.jQuery===l&&(e.jQuery=zc),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Gl);var Zc=Gl.exports;const Is=Kc(Zc),$c="/assets/proj1-1-BWb4NWai.jpg",Jc=[{title:"Diversity Calculator",img:$c,alt:"Project 1 img",shortDesc:"Calculate the diversity score of selected stocks.",longDesc:"A WebApp to calculate the diversity score of the stocks selected by users",demo:"https://maxe688.github.io/stock-portfolio-diversity-calculator/",source:"https://github.com/MaxE688/stock-portfolio-diversity-calculator"}];/*
 * @license jQuery Breakpoints | MIT | Jerry Low | https://www.github.com/jerrylow/breakpoints
 */(function(i){var e=function(t,n){var s=this;s.n="breakpoints",s.settings={},s.currentBp=null,s.getBreakpoint=function(){var m=u(),_=s.settings.breakpoints,x;return _.forEach(function(y){m>=y.width&&(x=y.name)}),x||(x=_[_.length-1].name),x},s.getBreakpointWidth=function(m){var _=s.settings.breakpoints,x;return _.forEach(function(y){m==y.name&&(x=y.width)}),x},s.compareCheck=function(m,_,x){var y=u(),E=s.settings.breakpoints,C=s.getBreakpointWidth(_),v=!1;switch(m){case"lessThan":v=y<C;break;case"lessEqualTo":v=y<=C;break;case"greaterThan":v=y>C;break;case"greaterEqualTo":v=y>C;break;case"inside":var g=E.findIndex(function(D){return D.name===_});if(g===E.length-1)v=y>C;else{var O=s.getBreakpointWidth(E[g+1].name);v=y>=C&&y<O}break}v&&x()},s.destroy=function(){i(window).unbind(s.n)};var a=function(){var m=u(),_=s.settings.breakpoints,x=s.currentBp;_.forEach(function(y){x===y.name?y.inside||(i(window).trigger("inside-"+y.name),y.inside=!0):y.inside=!1,m<y.width&&(y.less||(i(window).trigger("lessThan-"+y.name),y.less=!0,y.greater=!1,y.greaterEqual=!1)),m>=y.width&&(y.greaterEqual||(i(window).trigger("greaterEqualTo-"+y.name),y.greaterEqual=!0,y.less=!1),m>y.width&&(y.greater||(i(window).trigger("greaterThan-"+y.name),y.greater=!0,y.less=!1)))})},u=function(){var m=i(window);return s.outerWidth?m.outerWidth():window.innerWidth?window.innerWidth:m.width()},c=function(){var m=s.getBreakpoint();m!==s.currentBp&&(i(window).trigger({type:"breakpoint-change",from:s.currentBp,to:m}),s.currentBp=m)},h=i.extend({},i.fn.breakpoints.defaults,n);s.settings={breakpoints:h.breakpoints,buffer:h.buffer,triggerOnInit:h.triggerOnInit,outerWidth:h.outerWidth},t.data(s.n,this),s.currentBp=s.getBreakpoint();var p=null;i.isFunction(i(window).on)&&i(window).on("resize."+s.n,function(m){p&&clearTimeout(p),p=setTimeout(function(_){c(),a()},s.settings.buffer)}),s.settings.triggerOnInit&&setTimeout(function(){i(window).trigger({type:"breakpoint-change",from:s.currentBp,to:s.currentBp,initialInit:!0})},s.settings.buffer),setTimeout(function(){a()},0)};i.fn.breakpoints=function(t,n,s){if(this.data("breakpoints")){var a=this.data("breakpoints"),u=["lessThan","lessEqualTo","greaterThan","greaterEqualTo","inside"];if(t==="getBreakpoint")return a.getBreakpoint();if(t==="getBreakpointWidth")return a.getBreakpointWidth(n);if(u.indexOf(t)>=0)return a.compareCheck(t,n,s);t==="destroy"&&a.destroy();return}new e(this,t)},i.fn.breakpoints.defaults={breakpoints:[{name:"xs",width:0},{name:"sm",width:768},{name:"md",width:992},{name:"lg",width:1200}],buffer:300,triggerOnInit:!1,outerWidth:!1}})(Is);(function(i){i.fn.navList=function(){var e=i(this);return $a=e.find("a"),b=[],$a.each(function(){var t=i(this),n=Math.max(0,t.parents("li").length-1),s=t.attr("href"),a=t.attr("target");b.push('<a class="link depth-'+n+'"'+(typeof a<"u"&&a!=""?' target="'+a+'"':"")+(typeof s<"u"&&s!=""?' href="'+s+'"':"")+'><span class="indent-'+n+'"></span>'+t.text()+"</a>")}),b.join("")},i.fn.panel=function(e){if(this.length==0)return n;if(this.length>1){for(var t=0;t<this.length;t++)i(this[t]).panel(e);return n}var n=i(this),s=i("body"),a=i(window),u=n.attr("id"),c;return c=i.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:n,visibleClass:"visible"},e),typeof c.target!="jQuery"&&(c.target=i(c.target)),n._hide=function(h){c.target.hasClass(c.visibleClass)&&(h&&(h.preventDefault(),h.stopPropagation()),c.target.removeClass(c.visibleClass),window.setTimeout(function(){c.resetScroll&&n.scrollTop(0),c.resetForms&&n.find("form").each(function(){this.reset()})},c.delay))},n.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),c.hideOnClick&&(n.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),n.on("click","a",function(h){var p=i(this),m=p.attr("href"),_=p.attr("target");!m||m=="#"||m==""||m=="#"+u||(h.preventDefault(),h.stopPropagation(),n._hide(),window.setTimeout(function(){_=="_blank"?window.open(m):window.location.href=m},c.delay+10))})),n.on("touchstart",function(h){n.touchPosX=h.originalEvent.touches[0].pageX,n.touchPosY=h.originalEvent.touches[0].pageY}),n.on("touchmove",function(h){if(!(n.touchPosX===null||n.touchPosY===null)){var p=n.touchPosX-h.originalEvent.touches[0].pageX,m=n.touchPosY-h.originalEvent.touches[0].pageY,_=n.outerHeight(),x=n.get(0).scrollHeight-n.scrollTop();if(c.hideOnSwipe){var y=!1,E=20,C=50;switch(c.side){case"left":y=m<E&&m>-1*E&&p>C;break;case"right":y=m<E&&m>-1*E&&p<-1*C;break;case"top":y=p<E&&p>-1*E&&m>C;break;case"bottom":y=p<E&&p>-1*E&&m<-1*C;break}if(y)return n.touchPosX=null,n.touchPosY=null,n._hide(),!1}(n.scrollTop()<0&&m<0||x>_-2&&x<_+2&&m>0)&&(h.preventDefault(),h.stopPropagation())}}),n.on("click touchend touchstart touchmove",function(h){h.stopPropagation()}),n.on("click",'a[href="#'+u+'"]',function(h){h.preventDefault(),h.stopPropagation(),c.target.removeClass(c.visibleClass)}),s.on("click touchend",function(h){n._hide(h)}),s.on("click",'a[href="#'+u+'"]',function(h){h.preventDefault(),h.stopPropagation(),c.target.toggleClass(c.visibleClass)}),c.hideOnEscape&&a.on("keydown",function(h){h.keyCode==27&&n._hide(h)}),n},i.fn.placeholder=function(){if(typeof document.createElement("input").placeholder<"u")return i(this);if(this.length==0)return t;if(this.length>1){for(var e=0;e<this.length;e++)i(this[e]).placeholder();return t}var t=i(this);return t.find("input[type=text],textarea").each(function(){var n=i(this);(n.val()==""||n.val()==n.attr("placeholder"))&&n.addClass("polyfill-placeholder").val(n.attr("placeholder"))}).on("blur",function(){var n=i(this);n.attr("name").match(/-polyfill-field$/)||n.val()==""&&n.addClass("polyfill-placeholder").val(n.attr("placeholder"))}).on("focus",function(){var n=i(this);n.attr("name").match(/-polyfill-field$/)||n.val()==n.attr("placeholder")&&n.removeClass("polyfill-placeholder").val("")}),t.find("input[type=password]").each(function(){var n=i(this),s=i(i("<div>").append(n.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));n.attr("id")!=""&&s.attr("id",n.attr("id")+"-polyfill-field"),n.attr("name")!=""&&s.attr("name",n.attr("name")+"-polyfill-field"),s.addClass("polyfill-placeholder").val(s.attr("placeholder")).insertAfter(n),n.val()==""?n.hide():s.hide(),n.on("blur",function(a){a.preventDefault();var u=n.parent().find("input[name="+n.attr("name")+"-polyfill-field]");n.val()==""&&(n.hide(),u.show())}),s.on("focus",function(a){a.preventDefault();var u=s.parent().find("input[name="+s.attr("name").replace("-polyfill-field","")+"]");s.hide(),u.show().focus()}).on("keypress",function(a){a.preventDefault(),s.val("")})}),t.on("submit",function(){t.find("input[type=text],input[type=password],textarea").each(function(n){var s=i(this);s.attr("name").match(/-polyfill-field$/)&&s.attr("name",""),s.val()==s.attr("placeholder")&&(s.removeClass("polyfill-placeholder"),s.val(""))})}).on("reset",function(n){n.preventDefault(),t.find("select").val(i("option:first").val()),t.find("input,textarea").each(function(){var s=i(this),a;switch(s.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":s.val(s.attr("defaultValue")),a=s.parent().find("input[name="+s.attr("name")+"-polyfill-field]"),s.val()==""?(s.hide(),a.show()):(s.show(),a.hide());break;case"checkbox":case"radio":s.attr("checked",s.attr("defaultValue"));break;case"text":case"textarea":s.val(s.attr("defaultValue")),s.val()==""&&(s.addClass("polyfill-placeholder"),s.val(s.attr("placeholder")));break;default:s.val(s.attr("defaultValue"));break}})}),t},i.prioritize=function(e,t){var n="__prioritize";typeof e!="jQuery"&&(e=i(e)),e.each(function(){var s=i(this),a,u=s.parent();if(u.length!=0)if(s.data(n)){if(t)return;a=s.data(n),s.insertAfter(a),s.removeData(n)}else{if(!t||(a=s.prev(),a.length==0))return;s.prependTo(u),s.data(n,a)}})}})(Is);const Qc="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202C6.49%202%202%206.49%202%2012C2%2017.51%206.49%2022%2012%2022C17.51%2022%2022%2017.51%2022%2012C22%206.49%2017.51%202%2012%202ZM15.36%2014.3C15.65%2014.59%2015.65%2015.07%2015.36%2015.36C15.21%2015.51%2015.02%2015.58%2014.83%2015.58C14.64%2015.58%2014.45%2015.51%2014.3%2015.36L12%2013.06L9.7%2015.36C9.55%2015.51%209.36%2015.58%209.17%2015.58C8.98%2015.58%208.79%2015.51%208.64%2015.36C8.35%2015.07%208.35%2014.59%208.64%2014.3L10.94%2012L8.64%209.7C8.35%209.41%208.35%208.93%208.64%208.64C8.93%208.35%209.41%208.35%209.7%208.64L12%2010.94L14.3%208.64C14.59%208.35%2015.07%208.35%2015.36%208.64C15.65%208.93%2015.65%209.41%2015.36%209.7L13.06%2012L15.36%2014.3Z'%20fill='%23292D32'/%3e%3c/svg%3e",eu="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20fill='%23292D32'/%3e%3cpath%20d='M13.0594%2012.0001L15.3594%209.70011C15.6494%209.41011%2015.6494%208.93011%2015.3594%208.64011C15.0694%208.35011%2014.5894%208.35011%2014.2994%208.64011L11.9994%2010.9401L9.69937%208.64011C9.40937%208.35011%208.92937%208.35011%208.63938%208.64011C8.34938%208.93011%208.34938%209.41011%208.63938%209.70011L10.9394%2012.0001L8.63938%2014.3001C8.34938%2014.5901%208.34938%2015.0701%208.63938%2015.3601C8.78938%2015.5101%208.97937%2015.5801%209.16937%2015.5801C9.35937%2015.5801%209.54937%2015.5101%209.69937%2015.3601L11.9994%2013.0601L14.2994%2015.3601C14.4494%2015.5101%2014.6394%2015.5801%2014.8294%2015.5801C15.0194%2015.5801%2015.2094%2015.5101%2015.3594%2015.3601C15.6494%2015.0701%2015.6494%2014.5901%2015.3594%2014.3001L13.0594%2012.0001Z'%20fill='%23292D32'/%3e%3c/svg%3e";(i=>{var e=i(window),t=i(document),n=i("body");i("#nav"),e.breakpoints({breakpoints:[{name:"xlarge",width:1680},{name:"large",width:1280},{name:"medium",width:980},{name:"small",width:736}]}),Jc.forEach(function(s,a){let u=i("<div class='col-4 col-6-medium col-12-small card'></div>"),c=i("<article class='box style2'></article>");u.append(c),c.append(i("<div class='image featured'><img src='"+s.img+"' alt='"+s.alt+"' /></div>")),c.append(i("<h3>"+s.title+"</h3>")),c.append(i("<p>"+s.shortDesc+"</p>")),i("#card-container").append(u);let h=i("<div class='modal'></div>"),p=i("<div class='modal-conent'></div>"),m=i("<div class='close-modal'></div>"),_=i("<div class='container flex' ></div>"),x=i("<div class='modal-desc'></div>"),y=i("<div class='button-container'></div>");_.append(i("<h1 class='modal-title'> "+s.title+"</>")),_.append(i("<hr class='modal-title-rule'/>")),_.append(i("<div class='image modal-image' ><img src='"+s.img+"'/></div>")),_.append(i(x)),x.append(i("<p  >"+s.longDesc+"</p>")),x.append(y),y.append(i("<a href='"+s.demo+"' class='button'>Live Demo</a>")),y.append(i("<a href='"+s.source+"' class='button'>View Source</a>")),m.append(i(`<img class='close-modal-img' id='close-modal-1' src=${Qc} />`)),m.append(i(`<img class='close-modal-img' id='close-modal-2' src=${eu} />`)),p.append(m),p.append(_),h.append(p),i("#modal-container").append(h)}),e.on("load",function(){window.setTimeout(function(){n.removeClass("is-preload")},100)}),t.ready(function(){i(".modal").each(function(s){var a="modal-"+s,u="#"+a;i(this).attr("id",a),i(this).find(".close-modal").click(function(){console.log("close me:",a),i(u).removeClass("in")})}),i(".box").each(function(s){var a="box-"+s;i(this).attr("id",a),i(this).on("click",function(){console.log("open me"),i("#modal-"+s).addClass("in")})}),i("form").submit(s=>{s.preventDefault();const a={name:i("form").find('input[name="name"]').val(),email:i("form").find('input[name="email"]').val(),subject:i("form").find('input[name="subject"]').val(),message:i("form").find('textarea[name="message"]').val()};return i.ajax({type:"POST",url:"https://one-off-backends.onrender.com/portfolio-email",data:a,success:u=>alert("Your message has been sent"),error:(u,c,h)=>alert("Error please reach out to me directly: max.evers8@gmail.com")}),!1})})})(Is);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="169",tu=0,Wo=1,nu=2,Vl=1,iu=2,Zn=3,gi=0,hn=1,$n=2,pi=0,ar=1,Xo=2,qo=3,Yo=4,ru=5,Ii=100,su=101,au=102,ou=103,lu=104,cu=200,uu=201,fu=202,hu=203,La=204,Da=205,du=206,pu=207,mu=208,gu=209,_u=210,vu=211,xu=212,Su=213,Mu=214,Ua=0,Ia=1,Na=2,cr=3,Fa=4,Oa=5,Ba=6,za=7,Wl=0,yu=1,Eu=2,mi=0,Tu=1,bu=2,Au=3,wu=4,Cu=5,Ru=6,Pu=7,Xl=300,ur=301,fr=302,Ha=303,ka=304,Ns=306,Ga=1e3,Fi=1001,Va=1002,yn=1003,Lu=1004,Qr=1005,Pn=1006,na=1007,Oi=1008,ei=1009,ql=1010,Yl=1011,Or=1012,Mo=1013,Bi=1014,Jn=1015,Hr=1016,yo=1017,Eo=1018,hr=1020,jl=35902,Kl=1021,Zl=1022,Dn=1023,$l=1024,Jl=1025,or=1026,dr=1027,Ql=1028,To=1029,ec=1030,bo=1031,Ao=1033,Es=33776,Ts=33777,bs=33778,As=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,ja=36196,Ka=37492,Za=37496,Ja=37808,Qa=37809,eo=37810,to=37811,no=37812,io=37813,ro=37814,so=37815,ao=37816,oo=37817,lo=37818,co=37819,uo=37820,fo=37821,ws=36492,ho=36494,po=36495,tc=36283,mo=36284,go=36285,_o=36286,Du=3200,Uu=3201,Iu=0,Nu=1,di="",Bn="srgb",vi="srgb-linear",wo="display-p3",Fs="display-p3-linear",Ps="linear",Ft="srgb",Ls="rec709",Ds="p3",Vi=7680,jo=519,Fu=512,Ou=513,Bu=514,nc=515,zu=516,Hu=517,ku=518,Gu=519,Ko=35044,Zo="300 es",Qn=2e3,Us=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const Ir=Math.PI/180,Br=180/Math.PI;function gr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Co(i,e){return(i%e+e)%e}function Vu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wu(i,e,t){return i!==e?(t-i)/(e-i):0}function Nr(i,e,t){return(1-t)*i+t*e}function Xu(i,e,t,n){return Nr(i,e,1-Math.exp(-t*n))}function qu(i,e=1){return e-Math.abs(Co(i,e*2)-e)}function Yu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ku(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zu(i,e){return i+Math.random()*(e-i)}function $u(i){return i*(.5-Math.random())}function Ju(i){i!==void 0&&($o=i);let e=$o+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qu(i){return i*Ir}function ef(i){return i*Br}function tf(i){return(i&i-1)===0&&i!==0}function nf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sf(i,e,t,n,s){const a=Math.cos,u=Math.sin,c=a(t/2),h=u(t/2),p=a((e+n)/2),m=u((e+n)/2),_=a((e-n)/2),x=u((e-n)/2),y=a((n-e)/2),E=u((n-e)/2);switch(s){case"XYX":i.set(c*m,h*_,h*x,c*p);break;case"YZY":i.set(h*x,c*m,h*_,c*p);break;case"ZXZ":i.set(h*_,h*x,c*m,c*p);break;case"XZX":i.set(c*m,h*E,h*y,c*p);break;case"YXY":i.set(h*y,c*m,h*E,c*p);break;case"ZYZ":i.set(h*E,h*y,c*m,c*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const af={DEG2RAD:Ir,RAD2DEG:Br,generateUUID:gr,clamp:on,euclideanModulo:Co,mapLinear:Vu,inverseLerp:Wu,lerp:Nr,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:ju,randInt:Ku,randFloat:Zu,randFloatSpread:$u,seededRandom:Ju,degToRad:Qu,radToDeg:ef,isPowerOfTwo:tf,ceilPowerOfTwo:nf,floorPowerOfTwo:rf,setQuaternionFromProperEuler:sf,normalize:sn,denormalize:ir};class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*s+e.x,this.y=a*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,s,a,u,c,h,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,h,p)}set(e,t,n,s,a,u,c,h,p){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=t,m[4]=a,m[5]=h,m[6]=n,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[3],h=n[6],p=n[1],m=n[4],_=n[7],x=n[2],y=n[5],E=n[8],C=s[0],v=s[3],g=s[6],O=s[1],D=s[4],N=s[7],te=s[2],G=s[5],l=s[8];return a[0]=u*C+c*O+h*te,a[3]=u*v+c*D+h*G,a[6]=u*g+c*N+h*l,a[1]=p*C+m*O+_*te,a[4]=p*v+m*D+_*G,a[7]=p*g+m*N+_*l,a[2]=x*C+y*O+E*te,a[5]=x*v+y*D+E*G,a[8]=x*g+y*N+E*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],p=e[7],m=e[8];return t*u*m-t*c*p-n*a*m+n*c*h+s*a*p-s*u*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],p=e[7],m=e[8],_=m*u-c*p,x=c*h-m*a,y=p*a-u*h,E=t*_+n*x+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(s*p-m*n)*C,e[2]=(c*n-s*u)*C,e[3]=x*C,e[4]=(m*t-s*h)*C,e[5]=(s*a-c*t)*C,e[6]=y*C,e[7]=(n*h-p*t)*C,e[8]=(u*t-n*a)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,u,c){const h=Math.cos(a),p=Math.sin(a);return this.set(n*h,n*p,-n*(h*u+p*c)+u+e,-s*p,s*h,-s*(-p*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new ft;function ic(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function of(){const i=zr("canvas");return i.style.display="block",i}const Jo={};function Cs(i){i in Jo||(Jo[i]=!0,console.warn(i))}function lf(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function cf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qo=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),el=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[vi]:{transfer:Ps,primaries:Ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Bn]:{transfer:Ft,primaries:Ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fs]:{transfer:Ps,primaries:Ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(el),fromReference:i=>i.applyMatrix3(Qo)},[wo]:{transfer:Ft,primaries:Ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(el),fromReference:i=>i.applyMatrix3(Qo).convertLinearToSRGB()}},ff=new Set([vi,Fs]),Rt={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Cr[e].toReference,s=Cr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cr[i].primaries},getTransfer:function(i){return i===di?Ps:Cr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Cr[e].luminanceCoefficients)}};function lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wi;class hf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=zr("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=lr(a[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let df=0;class rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(sa(s[u].image)):a.push(sa(s[u]))}else a=sa(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pf=0;class ln extends mr{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Fi,s=Fi,a=Pn,u=Oi,c=Dn,h=ei,p=ln.DEFAULT_ANISOTROPY,m=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=gr(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Xl;ln.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,s=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const h=e.elements,p=h[0],m=h[4],_=h[8],x=h[1],y=h[5],E=h[9],C=h[2],v=h[6],g=h[10];if(Math.abs(m-x)<.01&&Math.abs(_-C)<.01&&Math.abs(E-v)<.01){if(Math.abs(m+x)<.1&&Math.abs(_+C)<.1&&Math.abs(E+v)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,N=(y+1)/2,te=(g+1)/2,G=(m+x)/4,l=(_+C)/4,J=(E+v)/4;return D>N&&D>te?D<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(D),s=G/n,a=l/n):N>te?N<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(N),n=G/s,a=J/s):te<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(te),n=l/a,s=J/a),this.set(n,s,a,t),this}let O=Math.sqrt((v-E)*(v-E)+(_-C)*(_-C)+(x-m)*(x-m));return Math.abs(O)<.001&&(O=1),this.x=(v-E)/O,this.y=(_-C)/O,this.z=(x-m)/O,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mf extends mr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends mf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sc extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gf extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,u,c){let h=n[s+0],p=n[s+1],m=n[s+2],_=n[s+3];const x=a[u+0],y=a[u+1],E=a[u+2],C=a[u+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(c===1){e[t+0]=x,e[t+1]=y,e[t+2]=E,e[t+3]=C;return}if(_!==C||h!==x||p!==y||m!==E){let v=1-c;const g=h*x+p*y+m*E+_*C,O=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const te=Math.sqrt(D),G=Math.atan2(te,g*O);v=Math.sin(v*G)/te,c=Math.sin(c*G)/te}const N=c*O;if(h=h*v+x*N,p=p*v+y*N,m=m*v+E*N,_=_*v+C*N,v===1-c){const te=1/Math.sqrt(h*h+p*p+m*m+_*_);h*=te,p*=te,m*=te,_*=te}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,a,u){const c=n[s],h=n[s+1],p=n[s+2],m=n[s+3],_=a[u],x=a[u+1],y=a[u+2],E=a[u+3];return e[t]=c*E+m*_+h*y-p*x,e[t+1]=h*E+m*x+p*_-c*y,e[t+2]=p*E+m*y+c*x-h*_,e[t+3]=m*E-c*_-h*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,h=Math.sin,p=c(n/2),m=c(s/2),_=c(a/2),x=h(n/2),y=h(s/2),E=h(a/2);switch(u){case"XYZ":this._x=x*m*_+p*y*E,this._y=p*y*_-x*m*E,this._z=p*m*E+x*y*_,this._w=p*m*_-x*y*E;break;case"YXZ":this._x=x*m*_+p*y*E,this._y=p*y*_-x*m*E,this._z=p*m*E-x*y*_,this._w=p*m*_+x*y*E;break;case"ZXY":this._x=x*m*_-p*y*E,this._y=p*y*_+x*m*E,this._z=p*m*E+x*y*_,this._w=p*m*_-x*y*E;break;case"ZYX":this._x=x*m*_-p*y*E,this._y=p*y*_+x*m*E,this._z=p*m*E-x*y*_,this._w=p*m*_+x*y*E;break;case"YZX":this._x=x*m*_+p*y*E,this._y=p*y*_+x*m*E,this._z=p*m*E-x*y*_,this._w=p*m*_-x*y*E;break;case"XZY":this._x=x*m*_-p*y*E,this._y=p*y*_-x*m*E,this._z=p*m*E+x*y*_,this._w=p*m*_+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],u=t[1],c=t[5],h=t[9],p=t[2],m=t[6],_=t[10],x=n+c+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(m-h)*y,this._y=(a-p)*y,this._z=(u-s)*y}else if(n>c&&n>_){const y=2*Math.sqrt(1+n-c-_);this._w=(m-h)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(a+p)/y}else if(c>_){const y=2*Math.sqrt(1+c-n-_);this._w=(a-p)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(h+m)/y}else{const y=2*Math.sqrt(1+_-n-c);this._w=(u-s)/y,this._x=(a+p)/y,this._y=(h+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,u=e._w,c=t._x,h=t._y,p=t._z,m=t._w;return this._x=n*m+u*c+s*p-a*h,this._y=s*m+u*h+a*c-n*p,this._z=a*m+u*p+n*h-s*c,this._w=u*m-n*c-s*h-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=s,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,c),_=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=u*_+this._w*x,this._x=n*_+this._x*x,this._y=s*_+this._y*x,this._z=a*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,u=e.y,c=e.z,h=e.w,p=2*(u*s-c*n),m=2*(c*t-a*s),_=2*(a*n-u*t);return this.x=t+h*p+u*_-c*m,this.y=n+h*m+c*p-a*_,this.z=s+h*_+a*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,u=t.x,c=t.y,h=t.z;return this.x=s*h-a*c,this.y=a*u-n*h,this.z=n*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new ee,tl=new kr;class Gr{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,wn):wn.fromBufferAttribute(a,u),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),ts.subVectors(this.max,Rr),Xi.subVectors(e.a,Rr),qi.subVectors(e.b,Rr),Yi.subVectors(e.c,Rr),oi.subVectors(qi,Xi),li.subVectors(Yi,qi),Ai.subVectors(Xi,Yi);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,li.z,0,-li.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ai.y,Ai.x,0];return!oa(t,Xi,qi,Yi,ts)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Xi,qi,Yi,ts))?!1:(ns.crossVectors(oi,li),t=[ns.x,ns.y,ns.z],oa(t,Xi,qi,Yi,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],wn=new ee,es=new Gr,Xi=new ee,qi=new ee,Yi=new ee,oi=new ee,li=new ee,Ai=new ee,Rr=new ee,ts=new ee,ns=new ee,wi=new ee;function oa(i,e,t,n,s){for(let a=0,u=i.length-3;a<=u;a+=3){wi.fromArray(i,a);const c=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),h=e.dot(wi),p=t.dot(wi),m=n.dot(wi);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>c)return!1}return!0}const _f=new Gr,Pr=new ee,la=new ee;class Os{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_f.setFromPoints(e).getCenter(n);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(la)),this.expandByPoint(Pr.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new ee,ca=new ee,is=new ee,ci=new ee,ua=new ee,rs=new ee,fa=new ee;class ac{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ca.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ca);const a=e.distanceTo(t)*.5,u=-this.direction.dot(is),c=ci.dot(this.direction),h=-ci.dot(is),p=ci.lengthSq(),m=Math.abs(1-u*u);let _,x,y,E;if(m>0)if(_=u*h-c,x=u*c-h,E=a*m,_>=0)if(x>=-E)if(x<=E){const C=1/m;_*=C,x*=C,y=_*(_+u*x+2*c)+x*(u*_+x+2*h)+p}else x=a,_=Math.max(0,-(u*x+c)),y=-_*_+x*(x+2*h)+p;else x=-a,_=Math.max(0,-(u*x+c)),y=-_*_+x*(x+2*h)+p;else x<=-E?(_=Math.max(0,-(-u*a+c)),x=_>0?-a:Math.min(Math.max(-a,-h),a),y=-_*_+x*(x+2*h)+p):x<=E?(_=0,x=Math.min(Math.max(-a,-h),a),y=x*(x+2*h)+p):(_=Math.max(0,-(u*a+c)),x=_>0?a:Math.min(Math.max(-a,-h),a),y=-_*_+x*(x+2*h)+p);else x=u>0?-a:a,_=Math.max(0,-(u*x+c)),y=-_*_+x*(x+2*h)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(ca).addScaledVector(is,x),y}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=n-u,h=n+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,u,c,h;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,s=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,s=(e.min.x-x.x)*p),m>=0?(a=(e.min.y-x.y)*m,u=(e.max.y-x.y)*m):(a=(e.max.y-x.y)*m,u=(e.min.y-x.y)*m),n>u||a>s||((a>n||isNaN(n))&&(n=a),(u<s||isNaN(s))&&(s=u),_>=0?(c=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(c=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,a){ua.subVectors(t,e),rs.subVectors(n,e),fa.crossVectors(ua,rs);let u=this.direction.dot(fa),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ci.subVectors(this.origin,e);const h=c*this.direction.dot(rs.crossVectors(ci,rs));if(h<0)return null;const p=c*this.direction.dot(ua.cross(ci));if(p<0||h+p>u)return null;const m=-c*ci.dot(fa);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,n,s,a,u,c,h,p,m,_,x,y,E,C,v){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,h,p,m,_,x,y,E,C,v)}set(e,t,n,s,a,u,c,h,p,m,_,x,y,E,C,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=a,g[5]=u,g[9]=c,g[13]=h,g[2]=p,g[6]=m,g[10]=_,g[14]=x,g[3]=y,g[7]=E,g[11]=C,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),a=1/ji.setFromMatrixColumn(e,1).length(),u=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(s),p=Math.sin(s),m=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const x=u*m,y=u*_,E=c*m,C=c*_;t[0]=h*m,t[4]=-h*_,t[8]=p,t[1]=y+E*p,t[5]=x-C*p,t[9]=-c*h,t[2]=C-x*p,t[6]=E+y*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*m,y=h*_,E=p*m,C=p*_;t[0]=x+C*c,t[4]=E*c-y,t[8]=u*p,t[1]=u*_,t[5]=u*m,t[9]=-c,t[2]=y*c-E,t[6]=C+x*c,t[10]=u*h}else if(e.order==="ZXY"){const x=h*m,y=h*_,E=p*m,C=p*_;t[0]=x-C*c,t[4]=-u*_,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*m,t[9]=C-x*c,t[2]=-u*p,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const x=u*m,y=u*_,E=c*m,C=c*_;t[0]=h*m,t[4]=E*p-y,t[8]=x*p+C,t[1]=h*_,t[5]=C*p+x,t[9]=y*p-E,t[2]=-p,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,y=u*p,E=c*h,C=c*p;t[0]=h*m,t[4]=C-x*_,t[8]=E*_+y,t[1]=_,t[5]=u*m,t[9]=-c*m,t[2]=-p*m,t[6]=y*_+E,t[10]=x-C*_}else if(e.order==="XZY"){const x=u*h,y=u*p,E=c*h,C=c*p;t[0]=h*m,t[4]=-_,t[8]=p*m,t[1]=x*_+C,t[5]=u*m,t[9]=y*_-E,t[2]=E*_-y,t[6]=c*m,t[10]=C*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vf,e,xf)}lookAt(e,t,n){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(n,pn),ui.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(n,pn)),ui.normalize(),ss.crossVectors(pn,ui),s[0]=ui.x,s[4]=ss.x,s[8]=pn.x,s[1]=ui.y,s[5]=ss.y,s[9]=pn.y,s[2]=ui.z,s[6]=ss.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[4],h=n[8],p=n[12],m=n[1],_=n[5],x=n[9],y=n[13],E=n[2],C=n[6],v=n[10],g=n[14],O=n[3],D=n[7],N=n[11],te=n[15],G=s[0],l=s[4],J=s[8],he=s[12],A=s[1],P=s[5],oe=s[9],Y=s[13],ne=s[2],ge=s[6],ae=s[10],pe=s[14],re=s[3],we=s[7],me=s[11],Ce=s[15];return a[0]=u*G+c*A+h*ne+p*re,a[4]=u*l+c*P+h*ge+p*we,a[8]=u*J+c*oe+h*ae+p*me,a[12]=u*he+c*Y+h*pe+p*Ce,a[1]=m*G+_*A+x*ne+y*re,a[5]=m*l+_*P+x*ge+y*we,a[9]=m*J+_*oe+x*ae+y*me,a[13]=m*he+_*Y+x*pe+y*Ce,a[2]=E*G+C*A+v*ne+g*re,a[6]=E*l+C*P+v*ge+g*we,a[10]=E*J+C*oe+v*ae+g*me,a[14]=E*he+C*Y+v*pe+g*Ce,a[3]=O*G+D*A+N*ne+te*re,a[7]=O*l+D*P+N*ge+te*we,a[11]=O*J+D*oe+N*ae+te*me,a[15]=O*he+D*Y+N*pe+te*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],u=e[1],c=e[5],h=e[9],p=e[13],m=e[2],_=e[6],x=e[10],y=e[14],E=e[3],C=e[7],v=e[11],g=e[15];return E*(+a*h*_-s*p*_-a*c*x+n*p*x+s*c*y-n*h*y)+C*(+t*h*y-t*p*x+a*u*x-s*u*y+s*p*m-a*h*m)+v*(+t*p*_-t*c*y-a*u*_+n*u*y+a*c*m-n*p*m)+g*(-s*c*m-t*h*_+t*c*x+s*u*_-n*u*x+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],p=e[7],m=e[8],_=e[9],x=e[10],y=e[11],E=e[12],C=e[13],v=e[14],g=e[15],O=_*v*p-C*x*p+C*h*y-c*v*y-_*h*g+c*x*g,D=E*x*p-m*v*p-E*h*y+u*v*y+m*h*g-u*x*g,N=m*C*p-E*_*p+E*c*y-u*C*y-m*c*g+u*_*g,te=E*_*h-m*C*h-E*c*x+u*C*x+m*c*v-u*_*v,G=t*O+n*D+s*N+a*te;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/G;return e[0]=O*l,e[1]=(C*x*a-_*v*a-C*s*y+n*v*y+_*s*g-n*x*g)*l,e[2]=(c*v*a-C*h*a+C*s*p-n*v*p-c*s*g+n*h*g)*l,e[3]=(_*h*a-c*x*a-_*s*p+n*x*p+c*s*y-n*h*y)*l,e[4]=D*l,e[5]=(m*v*a-E*x*a+E*s*y-t*v*y-m*s*g+t*x*g)*l,e[6]=(E*h*a-u*v*a-E*s*p+t*v*p+u*s*g-t*h*g)*l,e[7]=(u*x*a-m*h*a+m*s*p-t*x*p-u*s*y+t*h*y)*l,e[8]=N*l,e[9]=(E*_*a-m*C*a-E*n*y+t*C*y+m*n*g-t*_*g)*l,e[10]=(u*C*a-E*c*a+E*n*p-t*C*p-u*n*g+t*c*g)*l,e[11]=(m*c*a-u*_*a-m*n*p+t*_*p+u*n*y-t*c*y)*l,e[12]=te*l,e[13]=(m*C*s-E*_*s+E*n*x-t*C*x-m*n*v+t*_*v)*l,e[14]=(E*c*s-u*C*s-E*n*h+t*C*h+u*n*v-t*c*v)*l,e[15]=(u*_*s-m*c*s+m*n*h-t*_*h-u*n*x+t*c*x)*l,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,u=e.x,c=e.y,h=e.z,p=a*u,m=a*c;return this.set(p*u+n,p*c-s*h,p*h+s*c,0,p*c+s*h,m*c+n,m*h-s*u,0,p*h-s*c,m*h+s*u,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,u){return this.set(1,n,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,u=t._y,c=t._z,h=t._w,p=a+a,m=u+u,_=c+c,x=a*p,y=a*m,E=a*_,C=u*m,v=u*_,g=c*_,O=h*p,D=h*m,N=h*_,te=n.x,G=n.y,l=n.z;return s[0]=(1-(C+g))*te,s[1]=(y+N)*te,s[2]=(E-D)*te,s[3]=0,s[4]=(y-N)*G,s[5]=(1-(x+g))*G,s[6]=(v+O)*G,s[7]=0,s[8]=(E+D)*l,s[9]=(v-O)*l,s[10]=(1-(x+C))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ji.set(s[0],s[1],s[2]).length();const u=ji.set(s[4],s[5],s[6]).length(),c=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const p=1/a,m=1/u,_=1/c;return Cn.elements[0]*=p,Cn.elements[1]*=p,Cn.elements[2]*=p,Cn.elements[4]*=m,Cn.elements[5]*=m,Cn.elements[6]*=m,Cn.elements[8]*=_,Cn.elements[9]*=_,Cn.elements[10]*=_,t.setFromRotationMatrix(Cn),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,s,a,u,c=Qn){const h=this.elements,p=2*a/(t-e),m=2*a/(n-s),_=(t+e)/(t-e),x=(n+s)/(n-s);let y,E;if(c===Qn)y=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Us)y=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,u,c=Qn){const h=this.elements,p=1/(t-e),m=1/(n-s),_=1/(u-a),x=(t+e)*p,y=(n+s)*m;let E,C;if(c===Qn)E=(u+a)*_,C=-2*_;else if(c===Us)E=a*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=C,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new ee,Cn=new Ht,vf=new ee(0,0,0),xf=new ee(1,1,1),ui=new ee,ss=new ee,pn=new ee,nl=new Ht,il=new kr;class ti{constructor(e=0,t=0,n=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],h=s[1],p=s[5],m=s[9],_=s[2],x=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-on(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(on(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-on(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return il.setFromEuler(this),this.setFromQuaternion(il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sf=0;const rl=new ee,Ki=new kr,Yn=new Ht,as=new ee,Lr=new ee,Mf=new ee,yf=new kr,sl=new ee(1,0,0),al=new ee(0,1,0),ol=new ee(0,0,1),ll={type:"added"},Ef={type:"removed"},Zi={type:"childadded",child:null},ha={type:"childremoved",child:null};class dn extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new ee,t=new ti,n=new kr,s=new ee(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ft}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(al,e)}rotateZ(e){return this.rotateOnAxis(ol,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(al,e)}translateZ(e){return this.translateOnAxis(ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Lr,as,this.up):Yn.lookAt(as,Lr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ll),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ll),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const _=h[p];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(a(e.materials,this.material[h]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(a(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),p=u(e.textures),m=u(e.images),_=u(e.shapes),x=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),x.length>0&&(n.skeletons=x),y.length>0&&(n.animations=y),E.length>0&&(n.nodes=E)}return n.object=s,n;function u(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dn.DEFAULT_UP=new ee(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new ee,jn=new ee,da=new ee,Kn=new ee,$i=new ee,Ji=new ee,cl=new ee,pa=new ee,ma=new ee,ga=new ee,_a=new zt,va=new zt,xa=new zt;class Ln{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Rn.subVectors(s,t),jn.subVectors(n,t),da.subVectors(e,t);const u=Rn.dot(Rn),c=Rn.dot(jn),h=Rn.dot(da),p=jn.dot(jn),m=jn.dot(da),_=u*p-c*c;if(_===0)return a.set(0,0,0),null;const x=1/_,y=(p*h-c*m)*x,E=(u*m-c*h)*x;return a.set(1-y-E,E,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,s,a,u,c,h){return this.getBarycoord(e,t,n,s,Kn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Kn.x),h.addScaledVector(u,Kn.y),h.addScaledVector(c,Kn.z),h)}static getInterpolatedAttribute(e,t,n,s,a,u){return _a.setScalar(0),va.setScalar(0),xa.setScalar(0),_a.fromBufferAttribute(e,t),va.fromBufferAttribute(e,n),xa.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(_a,a.x),u.addScaledVector(va,a.y),u.addScaledVector(xa,a.z),u}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),jn.subVectors(e,t),Rn.cross(jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Rn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let u,c;$i.subVectors(s,n),Ji.subVectors(a,n),pa.subVectors(e,n);const h=$i.dot(pa),p=Ji.dot(pa);if(h<=0&&p<=0)return t.copy(n);ma.subVectors(e,s);const m=$i.dot(ma),_=Ji.dot(ma);if(m>=0&&_<=m)return t.copy(s);const x=h*_-m*p;if(x<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(n).addScaledVector($i,u);ga.subVectors(e,a);const y=$i.dot(ga),E=Ji.dot(ga);if(E>=0&&y<=E)return t.copy(a);const C=y*p-h*E;if(C<=0&&p>=0&&E<=0)return c=p/(p-E),t.copy(n).addScaledVector(Ji,c);const v=m*E-y*_;if(v<=0&&_-m>=0&&y-E>=0)return cl.subVectors(a,s),c=(_-m)/(_-m+(y-E)),t.copy(s).addScaledVector(cl,c);const g=1/(v+C+x);return u=C*g,c=x*g,t.copy(n).addScaledVector($i,u).addScaledVector(Ji,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},os={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=Co(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Sa(u,a,e+1/3),this.g=Sa(u,a,e),this.b=Sa(u,a,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Bn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bn){const n=lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Rt.fromWorkingColorSpace(en.copy(this),e),Math.round(on(en.r*255,0,255))*65536+Math.round(on(en.g*255,0,255))*256+Math.round(on(en.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(en.copy(this),t);const n=en.r,s=en.g,a=en.b,u=Math.max(n,s,a),c=Math.min(n,s,a);let h,p;const m=(c+u)/2;if(c===u)h=0,p=0;else{const _=u-c;switch(p=m<=.5?_/(u+c):_/(2-u-c),u){case n:h=(s-a)/_+(s<a?6:0);break;case s:h=(a-n)/_+2;break;case a:h=(n-s)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Bn){Rt.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,s=en.b;return e!==Bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(os);const n=Nr(fi.h,os.h,t),s=Nr(fi.s,os.s,t),a=Nr(fi.l,os.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Pt;Pt.NAMES=lc;let Tf=0;class Vr extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=ar,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rr extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ee,ls=new Et;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array),a=sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),e}}class cc extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uc extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hn extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bf=0;const Sn=new Ht,Ma=new dn,Qi=new ee,mn=new Gr,Dr=new Gr,jt=new ee;class kn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)?uc:cc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ft().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Dr.setFromBufferAttribute(c),this.morphTargetsRelative?(jt.addVectors(mn.min,Dr.min),mn.expandByPoint(jt),jt.addVectors(mn.max,Dr.max),mn.expandByPoint(jt)):(mn.expandByPoint(Dr.min),mn.expandByPoint(Dr.max))}mn.getCenter(n);let s=0;for(let a=0,u=e.count;a<u;a++)jt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],h=this.morphTargetsRelative;for(let p=0,m=c.count;p<m;p++)jt.fromBufferAttribute(c,p),h&&(Qi.fromBufferAttribute(e,p),jt.add(Qi)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let J=0;J<n.count;J++)c[J]=new ee,h[J]=new ee;const p=new ee,m=new ee,_=new ee,x=new Et,y=new Et,E=new Et,C=new ee,v=new ee;function g(J,he,A){p.fromBufferAttribute(n,J),m.fromBufferAttribute(n,he),_.fromBufferAttribute(n,A),x.fromBufferAttribute(a,J),y.fromBufferAttribute(a,he),E.fromBufferAttribute(a,A),m.sub(p),_.sub(p),y.sub(x),E.sub(x);const P=1/(y.x*E.y-E.x*y.y);isFinite(P)&&(C.copy(m).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(P),v.copy(_).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(P),c[J].add(C),c[he].add(C),c[A].add(C),h[J].add(v),h[he].add(v),h[A].add(v))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let J=0,he=O.length;J<he;++J){const A=O[J],P=A.start,oe=A.count;for(let Y=P,ne=P+oe;Y<ne;Y+=3)g(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const D=new ee,N=new ee,te=new ee,G=new ee;function l(J){te.fromBufferAttribute(s,J),G.copy(te);const he=c[J];D.copy(he),D.sub(te.multiplyScalar(te.dot(he))).normalize(),N.crossVectors(G,he);const P=N.dot(h[J])<0?-1:1;u.setXYZW(J,D.x,D.y,D.z,P)}for(let J=0,he=O.length;J<he;++J){const A=O[J],P=A.start,oe=A.count;for(let Y=P,ne=P+oe;Y<ne;Y+=3)l(e.getX(Y+0)),l(e.getX(Y+1)),l(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,y=n.count;x<y;x++)n.setXYZ(x,0,0,0);const s=new ee,a=new ee,u=new ee,c=new ee,h=new ee,p=new ee,m=new ee,_=new ee;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),C=e.getX(x+1),v=e.getX(x+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,C),u.fromBufferAttribute(t,v),m.subVectors(u,a),_.subVectors(s,a),m.cross(_),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),p.fromBufferAttribute(n,v),c.add(m),h.add(m),p.add(m),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(C,h.x,h.y,h.z),n.setXYZ(v,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)s.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),m.subVectors(u,a),_.subVectors(s,a),m.cross(_),n.setXYZ(x+0,m.x,m.y,m.z),n.setXYZ(x+1,m.x,m.y,m.z),n.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(c,h){const p=c.array,m=c.itemSize,_=c.normalized,x=new p.constructor(h.length*m);let y=0,E=0;for(let C=0,v=h.length;C<v;C++){c.isInterleavedBufferAttribute?y=h[C]*c.data.stride+c.offset:y=h[C]*m;for(let g=0;g<m;g++)x[E++]=p[y++]}return new En(x,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,s=this.attributes;for(const c in s){const h=s[c],p=e(h,n);t.setAttribute(c,p)}const a=this.morphAttributes;for(const c in a){const h=[],p=a[c];for(let m=0,_=p.length;m<_;m++){const x=p[m],y=e(x,n);h.push(y)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const p=u[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];m.push(y.toJSON(e.data))}m.length>0&&(s[h]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(t))}const a=e.morphAttributes;for(const p in a){const m=[],_=a[p];for(let x=0,y=_.length;x<y;x++)m.push(_[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new Ht,Ci=new ac,cs=new Os,fl=new ee,us=new ee,fs=new ee,hs=new ee,ya=new ee,ds=new ee,hl=new ee,ps=new ee;class gn extends dn{constructor(e=new kn,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){ds.set(0,0,0);for(let h=0,p=a.length;h<p;h++){const m=c[h],_=a[h];m!==0&&(ya.fromBufferAttribute(_,e),u?ds.addScaledVector(ya,m):ds.addScaledVector(ya.sub(t),m))}t.add(ds)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(a),Ci.copy(e.ray).recast(e.near),!(cs.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(cs,fl)===null||Ci.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(ul.copy(a).invert(),Ci.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s;const a=this.geometry,u=this.material,c=a.index,h=a.attributes.position,p=a.attributes.uv,m=a.attributes.uv1,_=a.attributes.normal,x=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,C=x.length;E<C;E++){const v=x[E],g=u[v.materialIndex],O=Math.max(v.start,y.start),D=Math.min(c.count,Math.min(v.start+v.count,y.start+y.count));for(let N=O,te=D;N<te;N+=3){const G=c.getX(N),l=c.getX(N+1),J=c.getX(N+2);s=ms(this,g,e,n,p,m,_,G,l,J),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),C=Math.min(c.count,y.start+y.count);for(let v=E,g=C;v<g;v+=3){const O=c.getX(v),D=c.getX(v+1),N=c.getX(v+2);s=ms(this,u,e,n,p,m,_,O,D,N),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,C=x.length;E<C;E++){const v=x[E],g=u[v.materialIndex],O=Math.max(v.start,y.start),D=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let N=O,te=D;N<te;N+=3){const G=N,l=N+1,J=N+2;s=ms(this,g,e,n,p,m,_,G,l,J),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let v=E,g=C;v<g;v+=3){const O=v,D=v+1,N=v+2;s=ms(this,u,e,n,p,m,_,O,D,N),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function Af(i,e,t,n,s,a,u,c){let h;if(e.side===hn?h=n.intersectTriangle(u,a,s,!0,c):h=n.intersectTriangle(s,a,u,e.side===gi,c),h===null)return null;ps.copy(c),ps.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(ps);return p<t.near||p>t.far?null:{distance:p,point:ps.clone(),object:i}}function ms(i,e,t,n,s,a,u,c,h,p){i.getVertexPosition(c,us),i.getVertexPosition(h,fs),i.getVertexPosition(p,hs);const m=Af(i,e,t,n,us,fs,hs,hl);if(m){const _=new ee;Ln.getBarycoord(hl,us,fs,hs,_),s&&(m.uv=Ln.getInterpolatedAttribute(s,c,h,p,_,new Et)),a&&(m.uv1=Ln.getInterpolatedAttribute(a,c,h,p,_,new Et)),u&&(m.normal=Ln.getInterpolatedAttribute(u,c,h,p,_,new ee),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const x={a:c,b:h,c:p,normal:new ee,materialIndex:0};Ln.getNormal(us,fs,hs,x.normal),m.face=x,m.barycoord=_}return m}class _r extends kn{constructor(e=1,t=1,n=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const h=[],p=[],m=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,s,u,2),E("x","z","y",1,-1,e,n,-t,s,u,3),E("x","y","z",1,-1,e,t,n,s,a,4),E("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(m,3)),this.setAttribute("uv",new Hn(_,2));function E(C,v,g,O,D,N,te,G,l,J,he){const A=N/l,P=te/J,oe=N/2,Y=te/2,ne=G/2,ge=l+1,ae=J+1;let pe=0,re=0;const we=new ee;for(let me=0;me<ae;me++){const Ce=me*P-Y;for(let We=0;We<ge;We++){const Ge=We*A-oe;we[C]=Ge*O,we[v]=Ce*D,we[g]=ne,p.push(we.x,we.y,we.z),we[C]=0,we[v]=0,we[g]=G>0?1:-1,m.push(we.x,we.y,we.z),_.push(We/l),_.push(1-me/J),pe+=1}}for(let me=0;me<J;me++)for(let Ce=0;Ce<l;Ce++){const We=x+Ce+ge*me,Ge=x+Ce+ge*(me+1),ue=x+(Ce+1)+ge*(me+1),xe=x+(Ce+1)+ge*me;h.push(We,Ge,xe),h.push(Ge,ue,xe),re+=6}c.addGroup(y,re,he),y+=re,x+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=pr(i[t]);for(const s in n)e[s]=n[s]}return e}function wf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Cf={clone:pr,merge:an};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hc extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new ee,dl=new Et,pl=new Et;class Mn extends hc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,dl,pl),t.subVectors(pl,dl)}setViewOffset(e,t,n,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;a+=u.offsetX*s/h,t-=u.offsetY*n/p,s*=u.width/h,n*=u.height/p}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class Lf extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(er,tr,e,t);s.layers=this.layers,this.add(s);const a=new Mn(er,tr,e,t);a.layers=this.layers,this.add(a);const u=new Mn(er,tr,e,t);u.layers=this.layers,this.add(u);const c=new Mn(er,tr,e,t);c.layers=this.layers,this.add(c);const h=new Mn(er,tr,e,t);h.layers=this.layers,this.add(h);const p=new Mn(er,tr,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,u,c,h]=t;for(const p of t)this.remove(p);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,h,p,m]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,u),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,p),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,s),e.render(t,m),e.setRenderTarget(_,x,y),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class dc extends ln{constructor(e,t,n,s,a,u,c,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,n,s,a,u,c,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Df extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new dc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _r(5,5,5),a=new _i({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:pi});a.uniforms.tEquirect.value=t;const u=new gn(s,a),c=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Pn),new Lf(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(a)}}const Ea=new ee,Uf=new ee,If=new ft;class Di{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ea.subVectors(n,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||If.getNormalMatrix(e),s=this.coplanarPoint(Ea).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Os,gs=new ee;class pc{constructor(e=new Di,t=new Di,n=new Di,s=new Di,a=new Di,u=new Di){this.planes=[e,t,n,s,a,u]}set(e,t,n,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],h=s[3],p=s[4],m=s[5],_=s[6],x=s[7],y=s[8],E=s[9],C=s[10],v=s[11],g=s[12],O=s[13],D=s[14],N=s[15];if(n[0].setComponents(h-a,x-p,v-y,N-g).normalize(),n[1].setComponents(h+a,x+p,v+y,N+g).normalize(),n[2].setComponents(h+u,x+m,v+E,N+O).normalize(),n[3].setComponents(h-u,x-m,v-E,N-O).normalize(),n[4].setComponents(h-c,x-_,v-C,N-D).normalize(),t===Qn)n[5].setComponents(h+c,x+_,v+C,N+D).normalize();else if(t===Us)n[5].setComponents(c,_,C,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(gs.x=s.normal.x>0?e.max.x:e.min.x,gs.y=s.normal.y>0?e.max.y:e.min.y,gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mc(){let i=null,e=!1,t=null,n=null;function s(a,u){t(a,u),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Nf(i){const e=new WeakMap;function t(c,h){const p=c.array,m=c.usage,_=p.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,p,m),c.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(p instanceof Uint16Array)c.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:_}}function n(c,h,p){const m=h.array,_=h.updateRanges;if(i.bindBuffer(p,c),_.length===0)i.bufferSubData(p,0,m);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],C=_[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,_[x]=C)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const C=_[y];i.bufferSubData(p,C.start*m.BYTES_PER_ELEMENT,m,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(i.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const p=e.get(c);if(p===void 0)e.set(c,t(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,c,h),p.version=c.version}}return{get:s,remove:a,update:u}}class Bs extends kn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(n),h=Math.floor(s),p=c+1,m=h+1,_=e/c,x=t/h,y=[],E=[],C=[],v=[];for(let g=0;g<m;g++){const O=g*x-u;for(let D=0;D<p;D++){const N=D*_-a;E.push(N,-O,0),C.push(0,0,1),v.push(D/c),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let O=0;O<c;O++){const D=O+p*g,N=O+p*(g+1),te=O+1+p*(g+1),G=O+1+p*g;y.push(D,N,G),y.push(N,te,G)}this.setIndex(y),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ff=`#ifdef USE_ALPHAHASH
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mh=`#ifdef USE_FOG
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
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Rh=`ToonMaterial material;
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
#endif`,Kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,Sd=`float getShadowMask() {
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
}`,Md=`#ifdef USE_SKINNING
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
#endif`,Cd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
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
}`,Kd=`#include <common>
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
}`,Zd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,ut={alphahash_fragment:Ff,alphahash_pars_fragment:Of,alphamap_fragment:Bf,alphamap_pars_fragment:zf,alphatest_fragment:Hf,alphatest_pars_fragment:kf,aomap_fragment:Gf,aomap_pars_fragment:Vf,batching_pars_vertex:Wf,batching_vertex:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:jf,iridescence_fragment:Kf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:eh,color_fragment:th,color_pars_fragment:nh,color_pars_vertex:ih,color_vertex:rh,common:sh,cube_uv_reflection_fragment:ah,defaultnormal_vertex:oh,displacementmap_pars_vertex:lh,displacementmap_vertex:ch,emissivemap_fragment:uh,emissivemap_pars_fragment:fh,colorspace_fragment:hh,colorspace_pars_fragment:dh,envmap_fragment:ph,envmap_common_pars_fragment:mh,envmap_pars_fragment:gh,envmap_pars_vertex:_h,envmap_physical_pars_fragment:Ch,envmap_vertex:vh,fog_vertex:xh,fog_pars_vertex:Sh,fog_fragment:Mh,fog_pars_fragment:yh,gradientmap_pars_fragment:Eh,lightmap_pars_fragment:Th,lights_lambert_fragment:bh,lights_lambert_pars_fragment:Ah,lights_pars_begin:wh,lights_toon_fragment:Rh,lights_toon_pars_fragment:Ph,lights_phong_fragment:Lh,lights_phong_pars_fragment:Dh,lights_physical_fragment:Uh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Nh,lights_fragment_maps:Fh,lights_fragment_end:Oh,logdepthbuf_fragment:Bh,logdepthbuf_pars_fragment:zh,logdepthbuf_pars_vertex:Hh,logdepthbuf_vertex:kh,map_fragment:Gh,map_pars_fragment:Vh,map_particle_fragment:Wh,map_particle_pars_fragment:Xh,metalnessmap_fragment:qh,metalnessmap_pars_fragment:Yh,morphinstance_vertex:jh,morphcolor_vertex:Kh,morphnormal_vertex:Zh,morphtarget_pars_vertex:$h,morphtarget_vertex:Jh,normal_fragment_begin:Qh,normal_fragment_maps:ed,normal_pars_fragment:td,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:ad,clearcoat_pars_fragment:od,iridescence_pars_fragment:ld,opaque_fragment:cd,packing:ud,premultiplied_alpha_fragment:fd,project_vertex:hd,dithering_fragment:dd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:vd,shadowmap_vertex:xd,shadowmask_pars_fragment:Sd,skinbase_vertex:Md,skinning_pars_vertex:yd,skinning_vertex:Ed,skinnormal_vertex:Td,specularmap_fragment:bd,specularmap_pars_fragment:Ad,tonemapping_fragment:wd,tonemapping_pars_fragment:Cd,transmission_fragment:Rd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Dd,uv_vertex:Ud,worldpos_vertex:Id,background_vert:Nd,background_frag:Fd,backgroundCube_vert:Od,backgroundCube_frag:Bd,cube_vert:zd,cube_frag:Hd,depth_vert:kd,depth_frag:Gd,distanceRGBA_vert:Vd,distanceRGBA_frag:Wd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:jd,meshbasic_vert:Kd,meshbasic_frag:Zd,meshlambert_vert:$d,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:ep,meshnormal_vert:tp,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:rp,meshphysical_vert:sp,meshphysical_frag:ap,meshtoon_vert:op,meshtoon_frag:lp,points_vert:cp,points_frag:up,shadow_vert:fp,shadow_frag:hp,sprite_vert:dp,sprite_frag:pp},be={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},zn={basic:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:an([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:an([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:an([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:an([be.points,be.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:an([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:an([be.common,be.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:an([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:an([be.sprite,be.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:an([be.common,be.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:an([be.lights,be.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};zn.physical={uniforms:an([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const _s={r:0,b:0,g:0},Pi=new ti,mp=new Ht;function gp(i,e,t,n,s,a,u){const c=new Pt(0);let h=a===!0?0:1,p,m,_=null,x=0,y=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?t:e).get(D)),D}function C(O){let D=!1;const N=E(O);N===null?g(c,h):N&&N.isColor&&(g(N,1),D=!0);const te=i.xr.getEnvironmentBlendMode();te==="additive"?n.buffers.color.setClear(0,0,0,1,u):te==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(O,D){const N=E(D);N&&(N.isCubeTexture||N.mapping===Ns)?(m===void 0&&(m=new gn(new _r(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:pr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(te,G,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Pi.copy(D.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(Pi)),m.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ft,(_!==N||x!==N.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,_=N,x=N.version,y=i.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new gn(new Bs(2,2),new _i({name:"BackgroundMaterial",uniforms:pr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ft,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||x!==N.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,_=N,x=N.version,y=i.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,D){O.getRGB(_s,fc(i)),n.buffers.color.setClear(_s.r,_s.g,_s.b,D,u)}return{getClearColor:function(){return c},setClearColor:function(O,D=1){c.set(O),h=D,g(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,g(c,h)},render:C,addToRenderList:v}}function _p(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=x(null);let a=s,u=!1;function c(A,P,oe,Y,ne){let ge=!1;const ae=_(Y,oe,P);a!==ae&&(a=ae,p(a.object)),ge=y(A,Y,oe,ne),ge&&E(A,Y,oe,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,N(A,P,oe,Y),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function h(){return i.createVertexArray()}function p(A){return i.bindVertexArray(A)}function m(A){return i.deleteVertexArray(A)}function _(A,P,oe){const Y=oe.wireframe===!0;let ne=n[A.id];ne===void 0&&(ne={},n[A.id]=ne);let ge=ne[P.id];ge===void 0&&(ge={},ne[P.id]=ge);let ae=ge[Y];return ae===void 0&&(ae=x(h()),ge[Y]=ae),ae}function x(A){const P=[],oe=[],Y=[];for(let ne=0;ne<t;ne++)P[ne]=0,oe[ne]=0,Y[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:oe,attributeDivisors:Y,object:A,attributes:{},index:null}}function y(A,P,oe,Y){const ne=a.attributes,ge=P.attributes;let ae=0;const pe=oe.getAttributes();for(const re in pe)if(pe[re].location>=0){const me=ne[re];let Ce=ge[re];if(Ce===void 0&&(re==="instanceMatrix"&&A.instanceMatrix&&(Ce=A.instanceMatrix),re==="instanceColor"&&A.instanceColor&&(Ce=A.instanceColor)),me===void 0||me.attribute!==Ce||Ce&&me.data!==Ce.data)return!0;ae++}return a.attributesNum!==ae||a.index!==Y}function E(A,P,oe,Y){const ne={},ge=P.attributes;let ae=0;const pe=oe.getAttributes();for(const re in pe)if(pe[re].location>=0){let me=ge[re];me===void 0&&(re==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),re==="instanceColor"&&A.instanceColor&&(me=A.instanceColor));const Ce={};Ce.attribute=me,me&&me.data&&(Ce.data=me.data),ne[re]=Ce,ae++}a.attributes=ne,a.attributesNum=ae,a.index=Y}function C(){const A=a.newAttributes;for(let P=0,oe=A.length;P<oe;P++)A[P]=0}function v(A){g(A,0)}function g(A,P){const oe=a.newAttributes,Y=a.enabledAttributes,ne=a.attributeDivisors;oe[A]=1,Y[A]===0&&(i.enableVertexAttribArray(A),Y[A]=1),ne[A]!==P&&(i.vertexAttribDivisor(A,P),ne[A]=P)}function O(){const A=a.newAttributes,P=a.enabledAttributes;for(let oe=0,Y=P.length;oe<Y;oe++)P[oe]!==A[oe]&&(i.disableVertexAttribArray(oe),P[oe]=0)}function D(A,P,oe,Y,ne,ge,ae){ae===!0?i.vertexAttribIPointer(A,P,oe,ne,ge):i.vertexAttribPointer(A,P,oe,Y,ne,ge)}function N(A,P,oe,Y){C();const ne=Y.attributes,ge=oe.getAttributes(),ae=P.defaultAttributeValues;for(const pe in ge){const re=ge[pe];if(re.location>=0){let we=ne[pe];if(we===void 0&&(pe==="instanceMatrix"&&A.instanceMatrix&&(we=A.instanceMatrix),pe==="instanceColor"&&A.instanceColor&&(we=A.instanceColor)),we!==void 0){const me=we.normalized,Ce=we.itemSize,We=e.get(we);if(We===void 0)continue;const Ge=We.buffer,ue=We.type,xe=We.bytesPerElement,ze=ue===i.INT||ue===i.UNSIGNED_INT||we.gpuType===Mo;if(we.isInterleavedBufferAttribute){const Re=we.data,Je=Re.stride,He=we.offset;if(Re.isInstancedInterleavedBuffer){for(let Ye=0;Ye<re.locationSize;Ye++)g(re.location+Ye,Re.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ye=0;Ye<re.locationSize;Ye++)v(re.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Ye=0;Ye<re.locationSize;Ye++)D(re.location+Ye,Ce/re.locationSize,ue,me,Je*xe,(He+Ce/re.locationSize*Ye)*xe,ze)}else{if(we.isInstancedBufferAttribute){for(let Re=0;Re<re.locationSize;Re++)g(re.location+Re,we.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Re=0;Re<re.locationSize;Re++)v(re.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Re=0;Re<re.locationSize;Re++)D(re.location+Re,Ce/re.locationSize,ue,me,Ce*xe,Ce/re.locationSize*Re*xe,ze)}}else if(ae!==void 0){const me=ae[pe];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(re.location,me);break;case 3:i.vertexAttrib3fv(re.location,me);break;case 4:i.vertexAttrib4fv(re.location,me);break;default:i.vertexAttrib1fv(re.location,me)}}}}O()}function te(){J();for(const A in n){const P=n[A];for(const oe in P){const Y=P[oe];for(const ne in Y)m(Y[ne].object),delete Y[ne];delete P[oe]}delete n[A]}}function G(A){if(n[A.id]===void 0)return;const P=n[A.id];for(const oe in P){const Y=P[oe];for(const ne in Y)m(Y[ne].object),delete Y[ne];delete P[oe]}delete n[A.id]}function l(A){for(const P in n){const oe=n[P];if(oe[A.id]===void 0)continue;const Y=oe[A.id];for(const ne in Y)m(Y[ne].object),delete Y[ne];delete oe[A.id]}}function J(){he(),u=!0,a!==s&&(a=s,p(a.object))}function he(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:J,resetDefaultState:he,dispose:te,releaseStatesOfGeometry:G,releaseStatesOfProgram:l,initAttributes:C,enableAttribute:v,disableUnusedAttributes:O}}function vp(i,e,t){let n;function s(p){n=p}function a(p,m){i.drawArrays(n,p,m),t.update(m,n,1)}function u(p,m,_){_!==0&&(i.drawArraysInstanced(n,p,m,_),t.update(m,n,_))}function c(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,m,0,_);let y=0;for(let E=0;E<_;E++)y+=m[E];t.update(y,n,1)}function h(p,m,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)u(p[E],m[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(n,p,0,m,0,x,0,_);let E=0;for(let C=0;C<_;C++)E+=m[C];for(let C=0;C<x.length;C++)t.update(E,n,x[C])}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function xp(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const l=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(l){return!(l!==Dn&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(l){const J=l===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==ei&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==Jn&&!J)}function h(l){if(l==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const l=e.get("EXT_clip_control");l.clipControlEXT(l.LOWER_LEFT_EXT,l.ZERO_TO_ONE_EXT)}const y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),te=E>0,G=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:N,vertexTextures:te,maxSamples:G}}function Sp(i){const e=this;let t=null,n=0,s=!1,a=!1;const u=new Di,c=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||n!==0||s;return s=x,n=_.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,x){t=m(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,C=_.clipIntersection,v=_.clipShadows,g=i.get(_);if(!s||E===null||E.length===0||a&&!v)a?m(null):p();else{const O=a?0:n,D=O*4;let N=g.clippingState||null;h.value=N,N=m(E,x,D,y);for(let te=0;te!==D;++te)N[te]=t[te];g.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,x,y,E){const C=_!==null?_.length:0;let v=null;if(C!==0){if(v=h.value,E!==!0||v===null){const g=y+C*4,O=x.matrixWorldInverse;c.getNormalMatrix(O),(v===null||v.length<g)&&(v=new Float32Array(g));for(let D=0,N=y;D!==C;++D,N+=4)u.copy(_[D]).applyMatrix4(O,c),u.normal.toArray(v,N),v[N+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}function Mp(i){let e=new WeakMap;function t(u,c){return c===Ha?u.mapping=ur:c===ka&&(u.mapping=fr),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Ha||c===ka)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new Df(h.height);return p.fromEquirectangularTexture(i,u),e.set(u,p),u.addEventListener("dispose",s),t(p.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class yp extends hc{constructor(e=-1,t=1,n=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,u=a+p*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,ml=[.125,.215,.35,.446,.526,.582],Ni=20,Ta=new yp,gl=new Pt;let ba=null,Aa=0,wa=0,Ca=!1;const Ui=(1+Math.sqrt(5))/2,nr=1/Ui,_l=[new ee(-Ui,nr,0),new ee(Ui,nr,0),new ee(-nr,0,Ui),new ee(nr,0,Ui),new ee(0,Ui,-nr),new ee(0,Ui,nr),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Aa,wa),this._renderer.xr.enabled=Ca,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Hr,format:Dn,colorSpace:vi,depthBuffer:!1},s=xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(a)),this._blurMaterial=Tp(a,e,t)}return s}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,s){const c=new Mn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(gl),m.toneMapping=mi,m.autoClear=!1;const y=new rr({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),E=new gn(new _r,y);let C=!1;const v=e.background;v?v.isColor&&(y.color.copy(v),e.background=null,C=!0):(y.color.copy(gl),C=!0);for(let g=0;g<6;g++){const O=g%3;O===0?(c.up.set(0,h[g],0),c.lookAt(p[g],0,0)):O===1?(c.up.set(0,0,h[g]),c.lookAt(0,p[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,p[g]));const D=this._cubeSize;vs(s,O*D,g>2?D:0,D,D),m.setRenderTarget(s),C&&m.render(E,c),m.render(e,c)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ur||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new gn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;vs(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=_l[(s-a-1)%_l.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,s,"latitudinal",a),this._halfBlur(u,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,u,c){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new gn(this._lodPlanes[s],p),x=p.uniforms,y=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Ni-1),C=a/E,v=isFinite(a)?1+Math.floor(m*C):Ni;v>Ni&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ni}`);const g=[];let O=0;for(let l=0;l<Ni;++l){const J=l/C,he=Math.exp(-J*J/2);g.push(he),l===0?O+=he:l<v&&(O+=2*he)}for(let l=0;l<g.length;l++)g[l]=g[l]/O;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=u==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-n;const N=this._sizeLods[s],te=3*N*(s>D-sr?s-D+sr:0),G=4*(this._cubeSize-N);vs(t,te,G,3*N,2*N),h.setRenderTarget(t),h.render(_,Ta)}}function Ep(i){const e=[],t=[],n=[];let s=i;const a=i-sr+1+ml.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let h=1/c;u>i-sr?h=ml[u-i+sr-1]:u===0&&(h=0),n.push(h);const p=1/(c-2),m=-p,_=1+p,x=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,E=6,C=3,v=2,g=1,O=new Float32Array(C*E*y),D=new Float32Array(v*E*y),N=new Float32Array(g*E*y);for(let G=0;G<y;G++){const l=G%3*2/3-1,J=G>2?0:-1,he=[l,J,0,l+2/3,J,0,l+2/3,J+1,0,l,J,0,l+2/3,J+1,0,l,J+1,0];O.set(he,C*E*G),D.set(x,v*E*G);const A=[G,G,G,G,G,G];N.set(A,g*E*G)}const te=new kn;te.setAttribute("position",new En(O,C)),te.setAttribute("uv",new En(D,v)),te.setAttribute("faceIndex",new En(N,g)),e.push(te),s>sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xl(i,e,t){const n=new zi(i,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tp(i,e,t){const n=new Float32Array(Ni),s=new ee(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Sl(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ml(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function bp(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,p=h===Ha||h===ka,m=h===ur||h===fr;if(p||m){let _=e.get(c);const x=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return t===null&&(t=new vl(i)),_=p?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const y=c.image;return p&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new vl(i)),_=p?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",a),_.texture):null}}}return c}function s(c){let h=0;const p=6;for(let m=0;m<p;m++)c[m]!==void 0&&h++;return h===p}function a(c){const h=c.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Ap(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wp(i,e,t,n){const s={},a=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const C=x.morphAttributes[E];for(let v=0,g=C.length;v<g;v++)e.remove(C[v])}x.removeEventListener("dispose",u),delete s[x.id];const y=a.get(x);y&&(e.remove(y),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(_,x){return s[x.id]===!0||(x.addEventListener("dispose",u),s[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const E in x)e.update(x[E],i.ARRAY_BUFFER);const y=_.morphAttributes;for(const E in y){const C=y[E];for(let v=0,g=C.length;v<g;v++)e.update(C[v],i.ARRAY_BUFFER)}}function p(_){const x=[],y=_.index,E=_.attributes.position;let C=0;if(y!==null){const O=y.array;C=y.version;for(let D=0,N=O.length;D<N;D+=3){const te=O[D+0],G=O[D+1],l=O[D+2];x.push(te,G,G,l,l,te)}}else if(E!==void 0){const O=E.array;C=E.version;for(let D=0,N=O.length/3-1;D<N;D+=3){const te=D+0,G=D+1,l=D+2;x.push(te,G,G,l,l,te)}}else return;const v=new(ic(x)?uc:cc)(x,1);v.version=C;const g=a.get(_);g&&e.remove(g),a.set(_,v)}function m(_){const x=a.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return a.get(_)}return{get:c,update:h,getWireframeAttribute:m}}function Cp(i,e,t){let n;function s(x){n=x}let a,u;function c(x){a=x.type,u=x.bytesPerElement}function h(x,y){i.drawElements(n,y,a,x*u),t.update(y,n,1)}function p(x,y,E){E!==0&&(i.drawElementsInstanced(n,y,a,x*u,E),t.update(y,n,E))}function m(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,x,0,E);let v=0;for(let g=0;g<E;g++)v+=y[g];t.update(v,n,1)}function _(x,y,E,C){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)p(x[g]/u,y[g],C[g]);else{v.multiDrawElementsInstancedWEBGL(n,y,0,a,x,0,C,0,E);let g=0;for(let O=0;O<E;O++)g+=y[O];for(let O=0;O<C.length;O++)t.update(g,n,C[O])}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function Rp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pp(i,e,t){const n=new WeakMap,s=new zt;function a(u,c,h){const p=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=m!==void 0?m.length:0;let x=n.get(c);if(x===void 0||x.count!==_){let A=function(){J.dispose(),n.delete(c),c.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const E=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let N=0;E===!0&&(N=1),C===!0&&(N=2),v===!0&&(N=3);let te=c.attributes.position.count*N,G=1;te>e.maxTextureSize&&(G=Math.ceil(te/e.maxTextureSize),te=e.maxTextureSize);const l=new Float32Array(te*G*4*_),J=new sc(l,te,G,_);J.type=Jn,J.needsUpdate=!0;const he=N*4;for(let P=0;P<_;P++){const oe=g[P],Y=O[P],ne=D[P],ge=te*G*4*P;for(let ae=0;ae<oe.count;ae++){const pe=ae*he;E===!0&&(s.fromBufferAttribute(oe,ae),l[ge+pe+0]=s.x,l[ge+pe+1]=s.y,l[ge+pe+2]=s.z,l[ge+pe+3]=0),C===!0&&(s.fromBufferAttribute(Y,ae),l[ge+pe+4]=s.x,l[ge+pe+5]=s.y,l[ge+pe+6]=s.z,l[ge+pe+7]=0),v===!0&&(s.fromBufferAttribute(ne,ae),l[ge+pe+8]=s.x,l[ge+pe+9]=s.y,l[ge+pe+10]=s.z,l[ge+pe+11]=ne.itemSize===4?s.w:1)}}x={count:_,texture:J,size:new Et(te,G)},n.set(c,x),c.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let E=0;for(let v=0;v<p.length;v++)E+=p[v];const C=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",C),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function Lp(i,e,t,n){let s=new WeakMap;function a(h){const p=n.render.frame,m=h.geometry,_=e.get(h,m);if(s.get(_)!==p&&(e.update(_),s.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==p&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;s.get(x)!==p&&(x.update(),s.set(x,p))}return _}function u(){s=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:u}}class gc extends ln{constructor(e,t,n,s,a,u,c,h,p,m=or){if(m!==or&&m!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===or&&(n=Bi),n===void 0&&m===dr&&(n=hr),super(null,s,a,u,c,h,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:yn,this.minFilter=h!==void 0?h:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _c=new ln,yl=new gc(1,1),vc=new sc,xc=new gf,Sc=new dc,El=[],Tl=[],bl=new Float32Array(16),Al=new Float32Array(9),wl=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=El[s];if(a===void 0&&(a=new Float32Array(s),El[s]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,i[u].toArray(a,c)}return a}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zs(i,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;wl.set(n),i.uniformMatrix2fv(this.addr,!1,wl),qt(t,n)}}function Op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Al.set(n),i.uniformMatrix3fv(this.addr,!1,Al),qt(t,n)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;bl.set(n),i.uniformMatrix4fv(this.addr,!1,bl),qt(t,n)}}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(yl.compareFunction=nc,a=yl):a=_c,t.setTexture2D(e||a,s)}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xc,s)}function Kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sc,s)}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vc,s)}function $p(i){switch(i){case 5126:return Dp;case 35664:return Up;case 35665:return Ip;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return kp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Jp(i,e){i.uniform1fv(this.addr,e)}function Qp(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function em(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function tm(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function nm(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function im(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rm(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sm(i,e){i.uniform1iv(this.addr,e)}function am(i,e){i.uniform2iv(this.addr,e)}function om(i,e){i.uniform3iv(this.addr,e)}function lm(i,e){i.uniform4iv(this.addr,e)}function cm(i,e){i.uniform1uiv(this.addr,e)}function um(i,e){i.uniform2uiv(this.addr,e)}function fm(i,e){i.uniform3uiv(this.addr,e)}function hm(i,e){i.uniform4uiv(this.addr,e)}function dm(i,e,t){const n=this.cache,s=e.length,a=zs(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||_c,a[u])}function pm(i,e,t){const n=this.cache,s=e.length,a=zs(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||xc,a[u])}function mm(i,e,t){const n=this.cache,s=e.length,a=zs(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Sc,a[u])}function gm(i,e,t){const n=this.cache,s=e.length,a=zs(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||vc,a[u])}function _m(i){switch(i){case 5126:return Jp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return um;case 36295:return fm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$p(t.type)}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_m(t.type)}}class Sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Cl(i,e){i.seq.push(e),i.map[e.id]=e}function Mm(i,e,t){const n=i.name,s=n.length;for(Ra.lastIndex=0;;){const a=Ra.exec(n),u=Ra.lastIndex;let c=a[1];const h=a[2]==="]",p=a[3];if(h&&(c=c|0),p===void 0||p==="["&&u+2===s){Cl(t,p===void 0?new vm(c,i,e):new xm(c,i,e));break}else{let _=t.map[c];_===void 0&&(_=new Sm(c),Cl(t,_)),t=_}}}class Rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);Mm(a,u,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function Rl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ym=37297;let Em=0;function Tm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}function bm(i){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(i);let n;switch(e===t?n="":e===Ds&&t===Ls?n="LinearDisplayP3ToLinearSRGB":e===Ls&&t===Ds&&(n="LinearSRGBToLinearDisplayP3"),i){case vi:case Fs:return[n,"LinearTransferOETF"];case Bn:case wo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Tm(i.getShaderSource(e),u)}else return s}function Am(i,e){const t=bm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wm(i,e){let t;switch(e){case Tu:t="Linear";break;case bu:t="Reinhard";break;case Au:t="Cineon";break;case wu:t="ACESFilmic";break;case Ru:t="AgX";break;case Pu:t="Neutral";break;case Cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new ee;function Cm(){Rt.getLuminanceCoefficients(xs);const i=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Pm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),u=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:i.getAttribLocation(e,u),locationSize:c}}return t}function Ur(i){return i!==""}function Ll(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(Dm,Im)}const Um=new Map;function Im(i,e){let t=ut[e];if(t===void 0){const n=Um.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vo(t)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace(Nm,Fm)}function Fm(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Il(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Om(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ur:case fr:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Hm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wl:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Eu:e="ENVMAP_BLENDING_ADD";break}return e}function km(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gm(i,e,t,n){const s=i.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=Om(t),p=Bm(t),m=zm(t),_=Hm(t),x=km(t),y=Rm(t),E=Pm(a),C=s.createProgram();let v,g,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ur).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ur).join(`
`),g.length>0&&(g+=`
`)):(v=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),g=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ut.tonemapping_pars_fragment:"",t.toneMapping!==mi?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Am("linearToOutputTexel",t.outputColorSpace),Cm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),u=vo(u),u=Ll(u,t),u=Dl(u,t),c=vo(c),c=Ll(c,t),c=Dl(c,t),u=Ul(u),c=Ul(c),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,v=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=O+v+u,N=O+g+c,te=Rl(s,s.VERTEX_SHADER,D),G=Rl(s,s.FRAGMENT_SHADER,N);s.attachShader(C,te),s.attachShader(C,G),t.index0AttributeName!==void 0?s.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function l(P){if(i.debug.checkShaderErrors){const oe=s.getProgramInfoLog(C).trim(),Y=s.getShaderInfoLog(te).trim(),ne=s.getShaderInfoLog(G).trim();let ge=!0,ae=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(ge=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,C,te,G);else{const pe=Pl(s,te,"vertex"),re=Pl(s,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+oe+`
`+pe+`
`+re)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(Y===""||ne==="")&&(ae=!1);ae&&(P.diagnostics={runnable:ge,programLog:oe,vertexShader:{log:Y,prefix:v},fragmentShader:{log:ne,prefix:g}})}s.deleteShader(te),s.deleteShader(G),J=new Rs(s,C),he=Lm(s,C)}let J;this.getUniforms=function(){return J===void 0&&l(this),J};let he;this.getAttributes=function(){return he===void 0&&l(this),he};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(C,ym)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Em++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=te,this.fragmentShader=G,this}let Vm=0;class Wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xm(e),t.set(e,n)),n}}class Xm{constructor(e){this.id=Vm++,this.code=e,this.usedTimes=0}}function qm(i,e,t,n,s,a,u){const c=new oc,h=new Wm,p=new Set,m=[],_=s.logarithmicDepthBuffer,x=s.reverseDepthBuffer,y=s.vertexTextures;let E=s.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return p.add(A),A===0?"uv":`uv${A}`}function g(A,P,oe,Y,ne){const ge=Y.fog,ae=ne.geometry,pe=A.isMeshStandardMaterial?Y.environment:null,re=(A.isMeshStandardMaterial?t:e).get(A.envMap||pe),we=re&&re.mapping===Ns?re.image.height:null,me=C[A.type];A.precision!==null&&(E=s.getMaxPrecision(A.precision),E!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const Ce=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,We=Ce!==void 0?Ce.length:0;let Ge=0;ae.morphAttributes.position!==void 0&&(Ge=1),ae.morphAttributes.normal!==void 0&&(Ge=2),ae.morphAttributes.color!==void 0&&(Ge=3);let ue,xe,ze,Re;if(me){const Zt=zn[me];ue=Zt.vertexShader,xe=Zt.fragmentShader}else ue=A.vertexShader,xe=A.fragmentShader,h.update(A),ze=h.getVertexShaderID(A),Re=h.getFragmentShaderID(A);const Je=i.getRenderTarget(),He=ne.isInstancedMesh===!0,Ye=ne.isBatchedMesh===!0,St=!!A.map,at=!!A.matcap,B=!!re,kt=!!A.aoMap,ht=!!A.lightMap,dt=!!A.bumpMap,Ke=!!A.normalMap,pt=!!A.displacementMap,et=!!A.emissiveMap,U=!!A.metalnessMap,w=!!A.roughnessMap,q=A.anisotropy>0,fe=A.clearcoat>0,_e=A.dispersion>0,X=A.iridescence>0,Pe=A.sheen>0,Ae=A.transmission>0,Fe=q&&!!A.anisotropyMap,Mt=fe&&!!A.clearcoatMap,Se=fe&&!!A.clearcoatNormalMap,Oe=fe&&!!A.clearcoatRoughnessMap,$e=X&&!!A.iridescenceMap,je=X&&!!A.iridescenceThicknessMap,Le=Pe&&!!A.sheenColorMap,lt=Pe&&!!A.sheenRoughnessMap,ot=!!A.specularMap,Ct=!!A.specularColorMap,k=!!A.specularIntensityMap,Ie=Ae&&!!A.transmissionMap,se=Ae&&!!A.thicknessMap,de=!!A.gradientMap,Ee=!!A.alphaMap,Ne=A.alphaTest>0,_t=!!A.alphaHash,Tt=!!A.extensions;let Lt=mi;A.toneMapped&&(Je===null||Je.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const xt={shaderID:me,shaderType:A.type,shaderName:A.name,vertexShader:ue,fragmentShader:xe,defines:A.defines,customVertexShaderID:ze,customFragmentShaderID:Re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:Ye,batchingColor:Ye&&ne._colorsTexture!==null,instancing:He,instancingColor:He&&ne.instanceColor!==null,instancingMorph:He&&ne.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Je===null?i.outputColorSpace:Je.isXRRenderTarget===!0?Je.texture.colorSpace:vi,alphaToCoverage:!!A.alphaToCoverage,map:St,matcap:at,envMap:B,envMapMode:B&&re.mapping,envMapCubeUVHeight:we,aoMap:kt,lightMap:ht,bumpMap:dt,normalMap:Ke,displacementMap:y&&pt,emissiveMap:et,normalMapObjectSpace:Ke&&A.normalMapType===Nu,normalMapTangentSpace:Ke&&A.normalMapType===Iu,metalnessMap:U,roughnessMap:w,anisotropy:q,anisotropyMap:Fe,clearcoat:fe,clearcoatMap:Mt,clearcoatNormalMap:Se,clearcoatRoughnessMap:Oe,dispersion:_e,iridescence:X,iridescenceMap:$e,iridescenceThicknessMap:je,sheen:Pe,sheenColorMap:Le,sheenRoughnessMap:lt,specularMap:ot,specularColorMap:Ct,specularIntensityMap:k,transmission:Ae,transmissionMap:Ie,thicknessMap:se,gradientMap:de,opaque:A.transparent===!1&&A.blending===ar&&A.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ne,alphaHash:_t,combine:A.combine,mapUv:St&&v(A.map.channel),aoMapUv:kt&&v(A.aoMap.channel),lightMapUv:ht&&v(A.lightMap.channel),bumpMapUv:dt&&v(A.bumpMap.channel),normalMapUv:Ke&&v(A.normalMap.channel),displacementMapUv:pt&&v(A.displacementMap.channel),emissiveMapUv:et&&v(A.emissiveMap.channel),metalnessMapUv:U&&v(A.metalnessMap.channel),roughnessMapUv:w&&v(A.roughnessMap.channel),anisotropyMapUv:Fe&&v(A.anisotropyMap.channel),clearcoatMapUv:Mt&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:lt&&v(A.sheenRoughnessMap.channel),specularMapUv:ot&&v(A.specularMap.channel),specularColorMapUv:Ct&&v(A.specularColorMap.channel),specularIntensityMapUv:k&&v(A.specularIntensityMap.channel),transmissionMapUv:Ie&&v(A.transmissionMap.channel),thicknessMapUv:se&&v(A.thicknessMap.channel),alphaMapUv:Ee&&v(A.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Ke||q),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ae.attributes.uv&&(St||Ee),fog:!!ge,useFog:A.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:x,skinning:ne.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:Ge,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&oe.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:St&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===$n,flipSided:A.side===hn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Tt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&A.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return xt.vertexUv1s=p.has(1),xt.vertexUv2s=p.has(2),xt.vertexUv3s=p.has(3),p.clear(),xt}function O(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const oe in A.defines)P.push(oe),P.push(A.defines[oe]);return A.isRawShaderMaterial===!1&&(D(P,A),N(P,A),P.push(i.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function D(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function N(A,P){c.disableAll(),P.supportsVertexTextures&&c.enable(0),P.instancing&&c.enable(1),P.instancingColor&&c.enable(2),P.instancingMorph&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),P.anisotropy&&c.enable(17),P.alphaHash&&c.enable(18),P.batching&&c.enable(19),P.dispersion&&c.enable(20),P.batchingColor&&c.enable(21),A.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reverseDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.alphaToCoverage&&c.enable(20),A.push(c.mask)}function te(A){const P=C[A.type];let oe;if(P){const Y=zn[P];oe=Cf.clone(Y.uniforms)}else oe=A.uniforms;return oe}function G(A,P){let oe;for(let Y=0,ne=m.length;Y<ne;Y++){const ge=m[Y];if(ge.cacheKey===P){oe=ge,++oe.usedTimes;break}}return oe===void 0&&(oe=new Gm(i,P,A,a),m.push(oe)),oe}function l(A){if(--A.usedTimes===0){const P=m.indexOf(A);m[P]=m[m.length-1],m.pop(),A.destroy()}}function J(A){h.remove(A)}function he(){h.dispose()}return{getParameters:g,getProgramCacheKey:O,getUniforms:te,acquireProgram:G,releaseProgram:l,releaseShaderCache:J,programs:m,dispose:he}}function Ym(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let c=i.get(u);return c===void 0&&(c={},i.set(u,c)),c}function n(u){i.delete(u)}function s(u,c,h){i.get(u)[c]=h}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function jm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function u(_,x,y,E,C,v){let g=i[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:C,group:v},i[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=y,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=C,g.group=v),e++,g}function c(_,x,y,E,C,v){const g=u(_,x,y,E,C,v);y.transmission>0?n.push(g):y.transparent===!0?s.push(g):t.push(g)}function h(_,x,y,E,C,v){const g=u(_,x,y,E,C,v);y.transmission>0?n.unshift(g):y.transparent===!0?s.unshift(g):t.unshift(g)}function p(_,x){t.length>1&&t.sort(_||jm),n.length>1&&n.sort(x||Nl),s.length>1&&s.sort(x||Nl)}function m(){for(let _=e,x=i.length;_<x;_++){const y=i[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:h,finish:m,sort:p}}function Km(){let i=new WeakMap;function e(n,s){const a=i.get(n);let u;return a===void 0?(u=new Fl,i.set(n,[u])):s>=a.length?(u=new Fl,a.push(u)):u=a[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new Pt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function $m(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jm=0;function Qm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eg(i){const e=new Zm,t=$m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new ee);const s=new ee,a=new Ht,u=new Ht;function c(p){let m=0,_=0,x=0;for(let he=0;he<9;he++)n.probe[he].set(0,0,0);let y=0,E=0,C=0,v=0,g=0,O=0,D=0,N=0,te=0,G=0,l=0;p.sort(Qm);for(let he=0,A=p.length;he<A;he++){const P=p[he],oe=P.color,Y=P.intensity,ne=P.distance,ge=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=oe.r*Y,_+=oe.g*Y,x+=oe.b*Y;else if(P.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(P.sh.coefficients[ae],Y);l++}else if(P.isDirectionalLight){const ae=e.get(P);if(ae.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const pe=P.shadow,re=t.get(P);re.shadowIntensity=pe.intensity,re.shadowBias=pe.bias,re.shadowNormalBias=pe.normalBias,re.shadowRadius=pe.radius,re.shadowMapSize=pe.mapSize,n.directionalShadow[y]=re,n.directionalShadowMap[y]=ge,n.directionalShadowMatrix[y]=P.shadow.matrix,O++}n.directional[y]=ae,y++}else if(P.isSpotLight){const ae=e.get(P);ae.position.setFromMatrixPosition(P.matrixWorld),ae.color.copy(oe).multiplyScalar(Y),ae.distance=ne,ae.coneCos=Math.cos(P.angle),ae.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ae.decay=P.decay,n.spot[C]=ae;const pe=P.shadow;if(P.map&&(n.spotLightMap[te]=P.map,te++,pe.updateMatrices(P),P.castShadow&&G++),n.spotLightMatrix[C]=pe.matrix,P.castShadow){const re=t.get(P);re.shadowIntensity=pe.intensity,re.shadowBias=pe.bias,re.shadowNormalBias=pe.normalBias,re.shadowRadius=pe.radius,re.shadowMapSize=pe.mapSize,n.spotShadow[C]=re,n.spotShadowMap[C]=ge,N++}C++}else if(P.isRectAreaLight){const ae=e.get(P);ae.color.copy(oe).multiplyScalar(Y),ae.halfWidth.set(P.width*.5,0,0),ae.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=ae,v++}else if(P.isPointLight){const ae=e.get(P);if(ae.color.copy(P.color).multiplyScalar(P.intensity),ae.distance=P.distance,ae.decay=P.decay,P.castShadow){const pe=P.shadow,re=t.get(P);re.shadowIntensity=pe.intensity,re.shadowBias=pe.bias,re.shadowNormalBias=pe.normalBias,re.shadowRadius=pe.radius,re.shadowMapSize=pe.mapSize,re.shadowCameraNear=pe.camera.near,re.shadowCameraFar=pe.camera.far,n.pointShadow[E]=re,n.pointShadowMap[E]=ge,n.pointShadowMatrix[E]=P.shadow.matrix,D++}n.point[E]=ae,E++}else if(P.isHemisphereLight){const ae=e.get(P);ae.skyColor.copy(P.color).multiplyScalar(Y),ae.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[g]=ae,g++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=_,n.ambient[2]=x;const J=n.hash;(J.directionalLength!==y||J.pointLength!==E||J.spotLength!==C||J.rectAreaLength!==v||J.hemiLength!==g||J.numDirectionalShadows!==O||J.numPointShadows!==D||J.numSpotShadows!==N||J.numSpotMaps!==te||J.numLightProbes!==l)&&(n.directional.length=y,n.spot.length=C,n.rectArea.length=v,n.point.length=E,n.hemi.length=g,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=O,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=N+te-G,n.spotLightMap.length=te,n.numSpotLightShadowsWithMaps=G,n.numLightProbes=l,J.directionalLength=y,J.pointLength=E,J.spotLength=C,J.rectAreaLength=v,J.hemiLength=g,J.numDirectionalShadows=O,J.numPointShadows=D,J.numSpotShadows=N,J.numSpotMaps=te,J.numLightProbes=l,n.version=Jm++)}function h(p,m){let _=0,x=0,y=0,E=0,C=0;const v=m.matrixWorldInverse;for(let g=0,O=p.length;g<O;g++){const D=p[g];if(D.isDirectionalLight){const N=n.directional[_];N.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(v),_++}else if(D.isSpotLight){const N=n.spot[y];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(v),y++}else if(D.isRectAreaLight){const N=n.rectArea[E];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(v),u.identity(),a.copy(D.matrixWorld),a.premultiply(v),u.extractRotation(a),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const N=n.point[x];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(v),x++}else if(D.isHemisphereLight){const N=n.hemi[C];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(v),C++}}}return{setup:c,setupView:h,state:n}}function Ol(i){const e=new eg(i),t=[],n=[];function s(m){p.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function u(m){n.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:u}}function tg(i){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new Ol(i),e.set(s,[c])):a>=u.length?(c=new Ol(i),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class ng extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ig extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rg=`void main() {
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
}`;function ag(i,e,t){let n=new pc;const s=new Et,a=new Et,u=new zt,c=new ng({depthPacking:Uu}),h=new ig,p={},m=t.maxTextureSize,_={[gi]:hn,[hn]:gi,[$n]:$n},x=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:rg,fragmentShader:sg}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new kn;E.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new gn(E,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let g=this.type;this.render=function(G,l,J){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||G.length===0)return;const he=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),oe=i.state;oe.setBlending(pi),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const Y=g!==Zn&&this.type===Zn,ne=g===Zn&&this.type!==Zn;for(let ge=0,ae=G.length;ge<ae;ge++){const pe=G[ge],re=pe.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);const we=re.getFrameExtents();if(s.multiply(we),a.copy(re.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/we.x),s.x=a.x*we.x,re.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/we.y),s.y=a.y*we.y,re.mapSize.y=a.y)),re.map===null||Y===!0||ne===!0){const Ce=this.type!==Zn?{minFilter:yn,magFilter:yn}:{};re.map!==null&&re.map.dispose(),re.map=new zi(s.x,s.y,Ce),re.map.texture.name=pe.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();const me=re.getViewportCount();for(let Ce=0;Ce<me;Ce++){const We=re.getViewport(Ce);u.set(a.x*We.x,a.y*We.y,a.x*We.z,a.y*We.w),oe.viewport(u),re.updateMatrices(pe,Ce),n=re.getFrustum(),N(l,J,re.camera,pe,this.type)}re.isPointLightShadow!==!0&&this.type===Zn&&O(re,J),re.needsUpdate=!1}g=this.type,v.needsUpdate=!1,i.setRenderTarget(he,A,P)};function O(G,l){const J=e.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new zi(s.x,s.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,i.setRenderTarget(G.mapPass),i.clear(),i.renderBufferDirect(l,null,J,x,C,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,i.setRenderTarget(G.map),i.clear(),i.renderBufferDirect(l,null,J,y,C,null)}function D(G,l,J,he){let A=null;const P=J.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(P!==void 0)A=P;else if(A=J.isPointLight===!0?h:c,i.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0){const oe=A.uuid,Y=l.uuid;let ne=p[oe];ne===void 0&&(ne={},p[oe]=ne);let ge=ne[Y];ge===void 0&&(ge=A.clone(),ne[Y]=ge,l.addEventListener("dispose",te)),A=ge}if(A.visible=l.visible,A.wireframe=l.wireframe,he===Zn?A.side=l.shadowSide!==null?l.shadowSide:l.side:A.side=l.shadowSide!==null?l.shadowSide:_[l.side],A.alphaMap=l.alphaMap,A.alphaTest=l.alphaTest,A.map=l.map,A.clipShadows=l.clipShadows,A.clippingPlanes=l.clippingPlanes,A.clipIntersection=l.clipIntersection,A.displacementMap=l.displacementMap,A.displacementScale=l.displacementScale,A.displacementBias=l.displacementBias,A.wireframeLinewidth=l.wireframeLinewidth,A.linewidth=l.linewidth,J.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=i.properties.get(A);oe.light=J}return A}function N(G,l,J,he,A){if(G.visible===!1)return;if(G.layers.test(l.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&A===Zn)&&(!G.frustumCulled||n.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,G.matrixWorld);const Y=e.update(G),ne=G.material;if(Array.isArray(ne)){const ge=Y.groups;for(let ae=0,pe=ge.length;ae<pe;ae++){const re=ge[ae],we=ne[re.materialIndex];if(we&&we.visible){const me=D(G,we,he,A);G.onBeforeShadow(i,G,l,J,Y,me,re),i.renderBufferDirect(J,null,Y,me,G,re),G.onAfterShadow(i,G,l,J,Y,me,re)}}}else if(ne.visible){const ge=D(G,ne,he,A);G.onBeforeShadow(i,G,l,J,Y,ge,null),i.renderBufferDirect(J,null,Y,ge,G,null),G.onAfterShadow(i,G,l,J,Y,ge,null)}}const oe=G.children;for(let Y=0,ne=oe.length;Y<ne;Y++)N(oe[Y],l,J,he,A)}function te(G){G.target.removeEventListener("dispose",te);for(const J in p){const he=p[J],A=G.target.uuid;A in he&&(he[A].dispose(),delete he[A])}}}const og={[Ua]:Ia,[Na]:Ba,[Fa]:za,[cr]:Oa,[Ia]:Ua,[Ba]:Na,[za]:Fa,[Oa]:cr};function lg(i){function e(){let k=!1;const Ie=new zt;let se=null;const de=new zt(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!k&&(i.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,Ne,_t,Tt,Lt){Lt===!0&&(Ee*=Tt,Ne*=Tt,_t*=Tt),Ie.set(Ee,Ne,_t,Tt),de.equals(Ie)===!1&&(i.clearColor(Ee,Ne,_t,Tt),de.copy(Ie))},reset:function(){k=!1,se=null,de.set(-1,0,0,0)}}}function t(){let k=!1,Ie=!1,se=null,de=null,Ee=null;return{setReversed:function(Ne){Ie=Ne},setTest:function(Ne){Ne?ze(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Ne){se!==Ne&&!k&&(i.depthMask(Ne),se=Ne)},setFunc:function(Ne){if(Ie&&(Ne=og[Ne]),de!==Ne){switch(Ne){case Ua:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Ne}},setLocked:function(Ne){k=Ne},setClear:function(Ne){Ee!==Ne&&(i.clearDepth(Ne),Ee=Ne)},reset:function(){k=!1,se=null,de=null,Ee=null}}}function n(){let k=!1,Ie=null,se=null,de=null,Ee=null,Ne=null,_t=null,Tt=null,Lt=null;return{setTest:function(xt){k||(xt?ze(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(xt){Ie!==xt&&!k&&(i.stencilMask(xt),Ie=xt)},setFunc:function(xt,Zt,_n){(se!==xt||de!==Zt||Ee!==_n)&&(i.stencilFunc(xt,Zt,_n),se=xt,de=Zt,Ee=_n)},setOp:function(xt,Zt,_n){(Ne!==xt||_t!==Zt||Tt!==_n)&&(i.stencilOp(xt,Zt,_n),Ne=xt,_t=Zt,Tt=_n)},setLocked:function(xt){k=xt},setClear:function(xt){Lt!==xt&&(i.clearStencil(xt),Lt=xt)},reset:function(){k=!1,Ie=null,se=null,de=null,Ee=null,Ne=null,_t=null,Tt=null,Lt=null}}}const s=new e,a=new t,u=new n,c=new WeakMap,h=new WeakMap;let p={},m={},_=new WeakMap,x=[],y=null,E=!1,C=null,v=null,g=null,O=null,D=null,N=null,te=null,G=new Pt(0,0,0),l=0,J=!1,he=null,A=null,P=null,oe=null,Y=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ge=!1,ae=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(pe)[1]),ge=ae>=1):pe.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),ge=ae>=2);let re=null,we={};const me=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),We=new zt().fromArray(me),Ge=new zt().fromArray(Ce);function ue(k,Ie,se,de){const Ee=new Uint8Array(4),Ne=i.createTexture();i.bindTexture(k,Ne),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<se;_t++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Ie+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Ne}const xe={};xe[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),u.setClear(0),ze(i.DEPTH_TEST),a.setFunc(cr),ht(!1),dt(Wo),ze(i.CULL_FACE),B(pi);function ze(k){p[k]!==!0&&(i.enable(k),p[k]=!0)}function Re(k){p[k]!==!1&&(i.disable(k),p[k]=!1)}function Je(k,Ie){return m[k]!==Ie?(i.bindFramebuffer(k,Ie),m[k]=Ie,k===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ie),k===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function He(k,Ie){let se=x,de=!1;if(k){se=_.get(Ie),se===void 0&&(se=[],_.set(Ie,se));const Ee=k.textures;if(se.length!==Ee.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Ne=0,_t=Ee.length;Ne<_t;Ne++)se[Ne]=i.COLOR_ATTACHMENT0+Ne;se.length=Ee.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function Ye(k){return y!==k?(i.useProgram(k),y=k,!0):!1}const St={[Ii]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};St[ou]=i.MIN,St[lu]=i.MAX;const at={[cu]:i.ZERO,[uu]:i.ONE,[fu]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[du]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[Su]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(k,Ie,se,de,Ee,Ne,_t,Tt,Lt,xt){if(k===pi){E===!0&&(Re(i.BLEND),E=!1);return}if(E===!1&&(ze(i.BLEND),E=!0),k!==ru){if(k!==C||xt!==J){if((v!==Ii||D!==Ii)&&(i.blendEquation(i.FUNC_ADD),v=Ii,D=Ii),xt)switch(k){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,O=null,N=null,te=null,G.set(0,0,0),l=0,C=k,J=xt}return}Ee=Ee||Ie,Ne=Ne||se,_t=_t||de,(Ie!==v||Ee!==D)&&(i.blendEquationSeparate(St[Ie],St[Ee]),v=Ie,D=Ee),(se!==g||de!==O||Ne!==N||_t!==te)&&(i.blendFuncSeparate(at[se],at[de],at[Ne],at[_t]),g=se,O=de,N=Ne,te=_t),(Tt.equals(G)===!1||Lt!==l)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Lt),G.copy(Tt),l=Lt),C=k,J=!1}function kt(k,Ie){k.side===$n?Re(i.CULL_FACE):ze(i.CULL_FACE);let se=k.side===hn;Ie&&(se=!se),ht(se),k.blending===ar&&k.transparent===!1?B(pi):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const de=k.stencilWrite;u.setTest(de),de&&(u.setMask(k.stencilWriteMask),u.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),u.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),pt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ze(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){he!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),he=k)}function dt(k){k!==tu?(ze(i.CULL_FACE),k!==A&&(k===Wo?i.cullFace(i.BACK):k===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),A=k}function Ke(k){k!==P&&(ge&&i.lineWidth(k),P=k)}function pt(k,Ie,se){k?(ze(i.POLYGON_OFFSET_FILL),(oe!==Ie||Y!==se)&&(i.polygonOffset(Ie,se),oe=Ie,Y=se)):Re(i.POLYGON_OFFSET_FILL)}function et(k){k?ze(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function U(k){k===void 0&&(k=i.TEXTURE0+ne-1),re!==k&&(i.activeTexture(k),re=k)}function w(k,Ie,se){se===void 0&&(re===null?se=i.TEXTURE0+ne-1:se=re);let de=we[se];de===void 0&&(de={type:void 0,texture:void 0},we[se]=de),(de.type!==k||de.texture!==Ie)&&(re!==se&&(i.activeTexture(se),re=se),i.bindTexture(k,Ie||xe[k]),de.type=k,de.texture=Ie)}function q(){const k=we[re];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(k){We.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),We.copy(k))}function Le(k){Ge.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ge.copy(k))}function lt(k,Ie){let se=h.get(Ie);se===void 0&&(se=new WeakMap,h.set(Ie,se));let de=se.get(k);de===void 0&&(de=i.getUniformBlockIndex(Ie,k.name),se.set(k,de))}function ot(k,Ie){const de=h.get(Ie).get(k);c.get(Ie)!==de&&(i.uniformBlockBinding(Ie,de,k.__bindingPointIndex),c.set(Ie,de))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},re=null,we={},m={},_=new WeakMap,x=[],y=null,E=!1,C=null,v=null,g=null,O=null,D=null,N=null,te=null,G=new Pt(0,0,0),l=0,J=!1,he=null,A=null,P=null,oe=null,Y=null,We.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),u.reset()}return{buffers:{color:s,depth:a,stencil:u},enable:ze,disable:Re,bindFramebuffer:Je,drawBuffers:He,useProgram:Ye,setBlending:B,setMaterial:kt,setFlipSided:ht,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:pt,setScissorTest:et,activeTexture:U,bindTexture:w,unbindTexture:q,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:$e,updateUBOMapping:lt,uniformBlockBinding:ot,texStorage2D:Mt,texStorage3D:Se,texSubImage2D:X,texSubImage3D:Pe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:je,viewport:Le,reset:Ct}}function Bl(i,e,t,n){const s=cg(n);switch(t){case Kl:return i*e;case $l:return i*e;case Jl:return i*e*2;case Ql:return i*e/s.components*s.byteLength;case To:return i*e/s.components*s.byteLength;case ec:return i*e*2/s.components*s.byteLength;case bo:return i*e*2/s.components*s.byteLength;case Zl:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case Ao:return i*e*4/s.components*s.byteLength;case Es:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bs:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case ja:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ws:case ho:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tc:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case go:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cg(i){switch(i){case ei:case ql:return{byteLength:1,components:1};case Or:case Yl:case Hr:return{byteLength:2,components:1};case yo:case Eo:return{byteLength:2,components:4};case Bi:case Mo:case Jn:return{byteLength:4,components:1};case jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ug(i,e,t,n,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Et,m=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,w){return y?new OffscreenCanvas(U,w):zr("canvas")}function C(U,w,q){let fe=1;const _e=et(U);if((_e.width>q||_e.height>q)&&(fe=q/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const X=Math.floor(fe*_e.width),Pe=Math.floor(fe*_e.height);_===void 0&&(_=E(X,Pe));const Ae=w?E(X,Pe):_;return Ae.width=X,Ae.height=Pe,Ae.getContext("2d").drawImage(U,0,0,X,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+X+"x"+Pe+")."),Ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),U;return U}function v(U){return U.generateMipmaps&&U.minFilter!==yn&&U.minFilter!==Pn}function g(U){i.generateMipmap(U)}function O(U,w,q,fe,_e=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let X=w;if(w===i.RED&&(q===i.FLOAT&&(X=i.R32F),q===i.HALF_FLOAT&&(X=i.R16F),q===i.UNSIGNED_BYTE&&(X=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.R8UI),q===i.UNSIGNED_SHORT&&(X=i.R16UI),q===i.UNSIGNED_INT&&(X=i.R32UI),q===i.BYTE&&(X=i.R8I),q===i.SHORT&&(X=i.R16I),q===i.INT&&(X=i.R32I)),w===i.RG&&(q===i.FLOAT&&(X=i.RG32F),q===i.HALF_FLOAT&&(X=i.RG16F),q===i.UNSIGNED_BYTE&&(X=i.RG8)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.RG8UI),q===i.UNSIGNED_SHORT&&(X=i.RG16UI),q===i.UNSIGNED_INT&&(X=i.RG32UI),q===i.BYTE&&(X=i.RG8I),q===i.SHORT&&(X=i.RG16I),q===i.INT&&(X=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.RGB8UI),q===i.UNSIGNED_SHORT&&(X=i.RGB16UI),q===i.UNSIGNED_INT&&(X=i.RGB32UI),q===i.BYTE&&(X=i.RGB8I),q===i.SHORT&&(X=i.RGB16I),q===i.INT&&(X=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),q===i.UNSIGNED_INT&&(X=i.RGBA32UI),q===i.BYTE&&(X=i.RGBA8I),q===i.SHORT&&(X=i.RGBA16I),q===i.INT&&(X=i.RGBA32I)),w===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),w===i.RGBA){const Pe=_e?Ps:Rt.getTransfer(fe);q===i.FLOAT&&(X=i.RGBA32F),q===i.HALF_FLOAT&&(X=i.RGBA16F),q===i.UNSIGNED_BYTE&&(X=Pe===Ft?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function D(U,w){let q;return U?w===null||w===Bi||w===hr?q=i.DEPTH24_STENCIL8:w===Jn?q=i.DEPTH32F_STENCIL8:w===Or&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bi||w===hr?q=i.DEPTH_COMPONENT24:w===Jn?q=i.DEPTH_COMPONENT32F:w===Or&&(q=i.DEPTH_COMPONENT16),q}function N(U,w){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==yn&&U.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function te(U){const w=U.target;w.removeEventListener("dispose",te),l(w),w.isVideoTexture&&m.delete(w)}function G(U){const w=U.target;w.removeEventListener("dispose",G),he(w)}function l(U){const w=n.get(U);if(w.__webglInit===void 0)return;const q=U.source,fe=x.get(q);if(fe){const _e=fe[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&J(U),Object.keys(fe).length===0&&x.delete(q)}n.remove(U)}function J(U){const w=n.get(U);i.deleteTexture(w.__webglTexture);const q=U.source,fe=x.get(q);delete fe[w.__cacheKey],u.memory.textures--}function he(U){const w=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(w.__webglFramebuffer[fe]))for(let _e=0;_e<w.__webglFramebuffer[fe].length;_e++)i.deleteFramebuffer(w.__webglFramebuffer[fe][_e]);else i.deleteFramebuffer(w.__webglFramebuffer[fe]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[fe])}else{if(Array.isArray(w.__webglFramebuffer))for(let fe=0;fe<w.__webglFramebuffer.length;fe++)i.deleteFramebuffer(w.__webglFramebuffer[fe]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let fe=0;fe<w.__webglColorRenderbuffer.length;fe++)w.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[fe]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=U.textures;for(let fe=0,_e=q.length;fe<_e;fe++){const X=n.get(q[fe]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),u.memory.textures--),n.remove(q[fe])}n.remove(U)}let A=0;function P(){A=0}function oe(){const U=A;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),A+=1,U}function Y(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function ne(U,w){const q=n.get(U);if(U.isVideoTexture&&Ke(U),U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){const fe=U.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(q,U,w);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function ge(U,w){const q=n.get(U);if(U.version>0&&q.__version!==U.version){Ge(q,U,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function ae(U,w){const q=n.get(U);if(U.version>0&&q.__version!==U.version){Ge(q,U,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function pe(U,w){const q=n.get(U);if(U.version>0&&q.__version!==U.version){ue(q,U,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}const re={[Ga]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},we={[yn]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},me={[Fu]:i.NEVER,[Gu]:i.ALWAYS,[Ou]:i.LESS,[nc]:i.LEQUAL,[Bu]:i.EQUAL,[ku]:i.GEQUAL,[zu]:i.GREATER,[Hu]:i.NOTEQUAL};function Ce(U,w){if(w.type===Jn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===na||w.magFilter===Qr||w.magFilter===Oi||w.minFilter===Pn||w.minFilter===na||w.minFilter===Qr||w.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,re[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,re[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,re[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,we[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,we[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===yn||w.minFilter!==Qr&&w.minFilter!==Oi||w.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function We(U,w){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",te));const fe=w.source;let _e=x.get(fe);_e===void 0&&(_e={},x.set(fe,_e));const X=Y(w);if(X!==U.__cacheKey){_e[X]===void 0&&(_e[X]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,q=!0),_e[X].usedTimes++;const Pe=_e[U.__cacheKey];Pe!==void 0&&(_e[U.__cacheKey].usedTimes--,Pe.usedTimes===0&&J(w)),U.__cacheKey=X,U.__webglTexture=_e[X].texture}return q}function Ge(U,w,q){let fe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=i.TEXTURE_3D);const _e=We(U,w),X=w.source;t.bindTexture(fe,U.__webglTexture,i.TEXTURE0+q);const Pe=n.get(X);if(X.version!==Pe.__version||_e===!0){t.activeTexture(i.TEXTURE0+q);const Ae=Rt.getPrimaries(Rt.workingColorSpace),Fe=w.colorSpace===di?null:Rt.getPrimaries(w.colorSpace),Mt=w.colorSpace===di||Ae===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Se=C(w.image,!1,s.maxTextureSize);Se=pt(w,Se);const Oe=a.convert(w.format,w.colorSpace),$e=a.convert(w.type);let je=O(w.internalFormat,Oe,$e,w.colorSpace,w.isVideoTexture);Ce(fe,w);let Le;const lt=w.mipmaps,ot=w.isVideoTexture!==!0,Ct=Pe.__version===void 0||_e===!0,k=X.dataReady,Ie=N(w,Se);if(w.isDepthTexture)je=D(w.format===dr,w.type),Ct&&(ot?t.texStorage2D(i.TEXTURE_2D,1,je,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,je,Se.width,Se.height,0,Oe,$e,null));else if(w.isDataTexture)if(lt.length>0){ot&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ie,je,lt[0].width,lt[0].height);for(let se=0,de=lt.length;se<de;se++)Le=lt[se],ot?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Le.width,Le.height,Oe,$e,Le.data):t.texImage2D(i.TEXTURE_2D,se,je,Le.width,Le.height,0,Oe,$e,Le.data);w.generateMipmaps=!1}else ot?(Ct&&t.texStorage2D(i.TEXTURE_2D,Ie,je,Se.width,Se.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,$e,Se.data)):t.texImage2D(i.TEXTURE_2D,0,je,Se.width,Se.height,0,Oe,$e,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ot&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,je,lt[0].width,lt[0].height,Se.depth);for(let se=0,de=lt.length;se<de;se++)if(Le=lt[se],w.format!==Dn)if(Oe!==null)if(ot){if(k)if(w.layerUpdates.size>0){const Ee=Bl(Le.width,Le.height,w.format,w.type);for(const Ne of w.layerUpdates){const _t=Le.data.subarray(Ne*Ee/Le.data.BYTES_PER_ELEMENT,(Ne+1)*Ee/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ne,Le.width,Le.height,1,Oe,_t,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Le.width,Le.height,Se.depth,Oe,Le.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,je,Le.width,Le.height,Se.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Le.width,Le.height,Se.depth,Oe,$e,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,je,Le.width,Le.height,Se.depth,0,Oe,$e,Le.data)}else{ot&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ie,je,lt[0].width,lt[0].height);for(let se=0,de=lt.length;se<de;se++)Le=lt[se],w.format!==Dn?Oe!==null?ot?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Le.width,Le.height,Oe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,se,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Le.width,Le.height,Oe,$e,Le.data):t.texImage2D(i.TEXTURE_2D,se,je,Le.width,Le.height,0,Oe,$e,Le.data)}else if(w.isDataArrayTexture)if(ot){if(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,je,Se.width,Se.height,Se.depth),k)if(w.layerUpdates.size>0){const se=Bl(Se.width,Se.height,w.format,w.type);for(const de of w.layerUpdates){const Ee=Se.data.subarray(de*se/Se.data.BYTES_PER_ELEMENT,(de+1)*se/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,Oe,$e,Ee)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,$e,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,Se.width,Se.height,Se.depth,0,Oe,$e,Se.data);else if(w.isData3DTexture)ot?(Ct&&t.texStorage3D(i.TEXTURE_3D,Ie,je,Se.width,Se.height,Se.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,$e,Se.data)):t.texImage3D(i.TEXTURE_3D,0,je,Se.width,Se.height,Se.depth,0,Oe,$e,Se.data);else if(w.isFramebufferTexture){if(Ct)if(ot)t.texStorage2D(i.TEXTURE_2D,Ie,je,Se.width,Se.height);else{let se=Se.width,de=Se.height;for(let Ee=0;Ee<Ie;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,je,se,de,0,Oe,$e,null),se>>=1,de>>=1}}else if(lt.length>0){if(ot&&Ct){const se=et(lt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,je,se.width,se.height)}for(let se=0,de=lt.length;se<de;se++)Le=lt[se],ot?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Oe,$e,Le):t.texImage2D(i.TEXTURE_2D,se,je,Oe,$e,Le);w.generateMipmaps=!1}else if(ot){if(Ct){const se=et(Se);t.texStorage2D(i.TEXTURE_2D,Ie,je,se.width,se.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,$e,Se)}else t.texImage2D(i.TEXTURE_2D,0,je,Oe,$e,Se);v(w)&&g(fe),Pe.__version=X.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ue(U,w,q){if(w.image.length!==6)return;const fe=We(U,w),_e=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+q);const X=n.get(_e);if(_e.version!==X.__version||fe===!0){t.activeTexture(i.TEXTURE0+q);const Pe=Rt.getPrimaries(Rt.workingColorSpace),Ae=w.colorSpace===di?null:Rt.getPrimaries(w.colorSpace),Fe=w.colorSpace===di||Pe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Mt=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let de=0;de<6;de++)!Mt&&!Se?Oe[de]=C(w.image[de],!0,s.maxCubemapSize):Oe[de]=Se?w.image[de].image:w.image[de],Oe[de]=pt(w,Oe[de]);const $e=Oe[0],je=a.convert(w.format,w.colorSpace),Le=a.convert(w.type),lt=O(w.internalFormat,je,Le,w.colorSpace),ot=w.isVideoTexture!==!0,Ct=X.__version===void 0||fe===!0,k=_e.dataReady;let Ie=N(w,$e);Ce(i.TEXTURE_CUBE_MAP,w);let se;if(Mt){ot&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,lt,$e.width,$e.height);for(let de=0;de<6;de++){se=Oe[de].mipmaps;for(let Ee=0;Ee<se.length;Ee++){const Ne=se[Ee];w.format!==Dn?je!==null?ot?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee,0,0,Ne.width,Ne.height,je,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee,lt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee,0,0,Ne.width,Ne.height,je,Le,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee,lt,Ne.width,Ne.height,0,je,Le,Ne.data)}}}else{if(se=w.mipmaps,ot&&Ct){se.length>0&&Ie++;const de=et(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,lt,de.width,de.height)}for(let de=0;de<6;de++)if(Se){ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe[de].width,Oe[de].height,je,Le,Oe[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,lt,Oe[de].width,Oe[de].height,0,je,Le,Oe[de].data);for(let Ee=0;Ee<se.length;Ee++){const _t=se[Ee].image[de].image;ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee+1,0,0,_t.width,_t.height,je,Le,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee+1,lt,_t.width,_t.height,0,je,Le,_t.data)}}else{ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,je,Le,Oe[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,lt,je,Le,Oe[de]);for(let Ee=0;Ee<se.length;Ee++){const Ne=se[Ee];ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee+1,0,0,je,Le,Ne.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee+1,lt,je,Le,Ne.image[de])}}}v(w)&&g(i.TEXTURE_CUBE_MAP),X.__version=_e.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function xe(U,w,q,fe,_e,X){const Pe=a.convert(q.format,q.colorSpace),Ae=a.convert(q.type),Fe=O(q.internalFormat,Pe,Ae,q.colorSpace);if(!n.get(w).__hasExternalTextures){const Se=Math.max(1,w.width>>X),Oe=Math.max(1,w.height>>X);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,X,Fe,Se,Oe,w.depth,0,Pe,Ae,null):t.texImage2D(_e,X,Fe,Se,Oe,0,Pe,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),dt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,_e,n.get(q).__webglTexture,0,ht(w)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,_e,n.get(q).__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(U,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){const fe=w.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,X=D(w.stencilBuffer,_e),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=ht(w);dt(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,X,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,X,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,X,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,U)}else{const fe=w.textures;for(let _e=0;_e<fe.length;_e++){const X=fe[_e],Pe=a.convert(X.format,X.colorSpace),Ae=a.convert(X.type),Fe=O(X.internalFormat,Pe,Ae,X.colorSpace),Mt=ht(w);q&&dt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Fe,w.width,w.height):dt(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,Fe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ne(w.depthTexture,0);const fe=n.get(w.depthTexture).__webglTexture,_e=ht(w);if(w.depthTexture.format===or)dt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(w.depthTexture.format===dr)dt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Je(U){const w=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const fe=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),fe){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=fe}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Re(w.__webglFramebuffer,U)}else if(q){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]===void 0)w.__webglDepthbuffer[fe]=i.createRenderbuffer(),ze(w.__webglDepthbuffer[fe],U,!1);else{const _e=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ze(w.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(U,w,q){const fe=n.get(U);w!==void 0&&xe(fe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Je(U)}function Ye(U){const w=U.texture,q=n.get(U),fe=n.get(w);U.addEventListener("dispose",G);const _e=U.textures,X=U.isWebGLCubeRenderTarget===!0,Pe=_e.length>1;if(Pe||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=w.version,u.memory.textures++),X){q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)q.__webglFramebuffer[Ae][Fe]=i.createFramebuffer()}else q.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)q.__webglFramebuffer[Ae]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const Mt=n.get(_e[Ae]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),u.memory.textures++)}if(U.samples>0&&dt(U)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];q.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ae]);const Mt=a.convert(Fe.format,Fe.colorSpace),Se=a.convert(Fe.type),Oe=O(Fe.internalFormat,Mt,Se,Fe.colorSpace,U.isXRRenderTarget===!0),$e=ht(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Oe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)xe(q.__webglFramebuffer[Ae][Fe],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else xe(q.__webglFramebuffer[Ae],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);v(w)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const Mt=_e[Ae],Se=n.get(Mt);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),Ce(i.TEXTURE_2D,Mt),xe(q.__webglFramebuffer,U,Mt,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),v(Mt)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,fe.__webglTexture),Ce(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)xe(q.__webglFramebuffer[Fe],U,w,i.COLOR_ATTACHMENT0,Ae,Fe);else xe(q.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,Ae,0);v(w)&&g(Ae),t.unbindTexture()}U.depthBuffer&&Je(U)}function St(U){const w=U.textures;for(let q=0,fe=w.length;q<fe;q++){const _e=w[q];if(v(_e)){const X=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(_e).__webglTexture;t.bindTexture(X,Pe),g(X),t.unbindTexture()}}}const at=[],B=[];function kt(U){if(U.samples>0){if(dt(U)===!1){const w=U.textures,q=U.width,fe=U.height;let _e=i.COLOR_BUFFER_BIT;const X=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(U),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const Mt=n.get(w[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,q,fe,0,0,q,fe,_e,i.NEAREST),h===!0&&(at.length=0,B.length=0,at.push(i.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(at.push(X),B.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const Mt=n.get(w[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,Mt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ht(U){return Math.min(s.maxSamples,U.samples)}function dt(U){const w=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(U){const w=u.render.frame;m.get(U)!==w&&(m.set(U,w),U.update())}function pt(U,w){const q=U.colorSpace,fe=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==vi&&q!==di&&(Rt.getTransfer(q)===Ft?(fe!==Dn||_e!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=P,this.setTexture2D=ne,this.setTexture2DArray=ge,this.setTexture3D=ae,this.setTextureCube=pe,this.rebindTextures=He,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=dt}function fg(i,e){function t(n,s=di){let a;const u=Rt.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Mo)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Hr)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===Zl)return i.RGB;if(n===Dn)return i.RGBA;if(n===$l)return i.LUMINANCE;if(n===Jl)return i.LUMINANCE_ALPHA;if(n===or)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===To)return i.RED_INTEGER;if(n===ec)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===Es||n===Ts||n===bs||n===As)if(u===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Ka||n===Za)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ja||n===Ka)return u===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Za)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===uo||n===fo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ja)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ws||n===ho||n===po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ws)return u===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===mo||n===go||n===_o)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ws)return a.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_o)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class hg extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,u=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const v=t.getJointPose(C,n),g=this._getHandJoint(p,C);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=m.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pg=`
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

}`;class gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new ln,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _g extends mr{constructor(e,t){super();const n=this;let s=null,a=1,u=null,c="local-floor",h=1,p=null,m=null,_=null,x=null,y=null,E=null;const C=new gg,v=t.getContextAttributes();let g=null,O=null;const D=[],N=[],te=new Et;let G=null;const l=new Mn;l.layers.enable(1),l.viewport=new zt;const J=new Mn;J.layers.enable(2),J.viewport=new zt;const he=[l,J],A=new hg;A.layers.enable(1),A.layers.enable(2);let P=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let xe=D[ue];return xe===void 0&&(xe=new Pa,D[ue]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ue){let xe=D[ue];return xe===void 0&&(xe=new Pa,D[ue]=xe),xe.getGripSpace()},this.getHand=function(ue){let xe=D[ue];return xe===void 0&&(xe=new Pa,D[ue]=xe),xe.getHandSpace()};function Y(ue){const xe=N.indexOf(ue.inputSource);if(xe===-1)return;const ze=D[xe];ze!==void 0&&(ze.update(ue.inputSource,ue.frame,p||u),ze.dispatchEvent({type:ue.type,data:ue.inputSource}))}function ne(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ge);for(let ue=0;ue<D.length;ue++){const xe=N[ue];xe!==null&&(N[ue]=null,D[ue].disconnect(xe))}P=null,oe=null,C.reset(),e.setRenderTarget(g),y=null,x=null,_=null,s=null,O=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(G),e.setSize(te.width,te.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){a=ue,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){c=ue,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ue){p=ue},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ue){if(s=ue,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ge),v.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(te),s.renderState.layers===void 0){const xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new zi(y.framebufferWidth,y.framebufferHeight,{format:Dn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let xe=null,ze=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?dr:or,ze=v.stencil?hr:Bi);const Je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:a};_=new XRWebGLBinding(s,t),x=_.createProjectionLayer(Je),s.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new zi(x.textureWidth,x.textureHeight,{format:Dn,type:ei,depthTexture:new gc(x.textureWidth,x.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await s.requestReferenceSpace(c),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ge(ue){for(let xe=0;xe<ue.removed.length;xe++){const ze=ue.removed[xe],Re=N.indexOf(ze);Re>=0&&(N[Re]=null,D[Re].disconnect(ze))}for(let xe=0;xe<ue.added.length;xe++){const ze=ue.added[xe];let Re=N.indexOf(ze);if(Re===-1){for(let He=0;He<D.length;He++)if(He>=N.length){N.push(ze),Re=He;break}else if(N[He]===null){N[He]=ze,Re=He;break}if(Re===-1)break}const Je=D[Re];Je&&Je.connect(ze)}}const ae=new ee,pe=new ee;function re(ue,xe,ze){ae.setFromMatrixPosition(xe.matrixWorld),pe.setFromMatrixPosition(ze.matrixWorld);const Re=ae.distanceTo(pe),Je=xe.projectionMatrix.elements,He=ze.projectionMatrix.elements,Ye=Je[14]/(Je[10]-1),St=Je[14]/(Je[10]+1),at=(Je[9]+1)/Je[5],B=(Je[9]-1)/Je[5],kt=(Je[8]-1)/Je[0],ht=(He[8]+1)/He[0],dt=Ye*kt,Ke=Ye*ht,pt=Re/(-kt+ht),et=pt*-kt;if(xe.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(et),ue.translateZ(pt),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Je[10]===-1)ue.projectionMatrix.copy(xe.projectionMatrix),ue.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const U=Ye+pt,w=St+pt,q=dt-et,fe=Ke+(Re-et),_e=at*St/w*U,X=B*St/w*U;ue.projectionMatrix.makePerspective(q,fe,_e,X,U,w),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function we(ue,xe){xe===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(xe.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(s===null)return;let xe=ue.near,ze=ue.far;C.texture!==null&&(C.depthNear>0&&(xe=C.depthNear),C.depthFar>0&&(ze=C.depthFar)),A.near=J.near=l.near=xe,A.far=J.far=l.far=ze,(P!==A.near||oe!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,oe=A.far);const Re=ue.parent,Je=A.cameras;we(A,Re);for(let He=0;He<Je.length;He++)we(Je[He],Re);Je.length===2?re(A,l,J):A.projectionMatrix.copy(l.projectionMatrix),me(ue,A,Re)};function me(ue,xe,ze){ze===null?ue.matrix.copy(xe.matrixWorld):(ue.matrix.copy(ze.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(xe.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(xe.projectionMatrix),ue.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Br*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return h},this.setFoveation=function(ue){h=ue,x!==null&&(x.fixedFoveation=ue),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ue)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let Ce=null;function We(ue,xe){if(m=xe.getViewerPose(p||u),E=xe,m!==null){const ze=m.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Re=!1;ze.length!==A.cameras.length&&(A.cameras.length=0,Re=!0);for(let He=0;He<ze.length;He++){const Ye=ze[He];let St=null;if(y!==null)St=y.getViewport(Ye);else{const B=_.getViewSubImage(x,Ye);St=B.viewport,He===0&&(e.setRenderTargetTextures(O,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(O))}let at=he[He];at===void 0&&(at=new Mn,at.layers.enable(He),at.viewport=new zt,he[He]=at),at.matrix.fromArray(Ye.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ye.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(St.x,St.y,St.width,St.height),He===0&&(A.matrix.copy(at.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Re===!0&&A.cameras.push(at)}const Je=s.enabledFeatures;if(Je&&Je.includes("depth-sensing")){const He=_.getDepthInformation(ze[0]);He&&He.isValid&&He.texture&&C.init(e,He,s.renderState)}}for(let ze=0;ze<D.length;ze++){const Re=N[ze],Je=D[ze];Re!==null&&Je!==void 0&&Je.update(Re,xe,p||u)}Ce&&Ce(ue,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Ge=new mc;Ge.setAnimationLoop(We),this.setAnimationLoop=function(ue){Ce=ue},this.dispose=function(){}}}const Li=new ti,vg=new Ht;function xg(i,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function n(v,g){g.color.getRGB(v.fogColor.value,fc(i)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function s(v,g,O,D,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(v,g):g.isMeshToonMaterial?(a(v,g),_(v,g)):g.isMeshPhongMaterial?(a(v,g),m(v,g)):g.isMeshStandardMaterial?(a(v,g),x(v,g),g.isMeshPhysicalMaterial&&y(v,g,N)):g.isMeshMatcapMaterial?(a(v,g),E(v,g)):g.isMeshDepthMaterial?a(v,g):g.isMeshDistanceMaterial?(a(v,g),C(v,g)):g.isMeshNormalMaterial?a(v,g):g.isLineBasicMaterial?(u(v,g),g.isLineDashedMaterial&&c(v,g)):g.isPointsMaterial?h(v,g,O,D):g.isSpriteMaterial?p(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===hn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===hn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const O=e.get(g),D=O.envMap,N=O.envMapRotation;D&&(v.envMap.value=D,Li.copy(N),Li.x*=-1,Li.y*=-1,Li.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),v.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Li)),v.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function u(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function c(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,O,D){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*O,v.scale.value=D*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function _(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function y(v,g,O){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=O.texture,v.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,g){g.matcap&&(v.matcap.value=g.matcap)}function C(v,g){const O=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(O.matrixWorld),v.nearDistance.value=O.shadow.camera.near,v.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sg(i,e,t,n){let s={},a={},u=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,D){const N=D.program;n.uniformBlockBinding(O,N)}function p(O,D){let N=s[O.id];N===void 0&&(E(O),N=m(O),s[O.id]=N,O.addEventListener("dispose",v));const te=D.program;n.updateUBOMapping(O,te);const G=e.render.frame;a[O.id]!==G&&(x(O),a[O.id]=G)}function m(O){const D=_();O.__bindingPointIndex=D;const N=i.createBuffer(),te=O.__size,G=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,te,G),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,N),N}function _(){for(let O=0;O<c;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const D=s[O.id],N=O.uniforms,te=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let G=0,l=N.length;G<l;G++){const J=Array.isArray(N[G])?N[G]:[N[G]];for(let he=0,A=J.length;he<A;he++){const P=J[he];if(y(P,G,he,te)===!0){const oe=P.__offset,Y=Array.isArray(P.value)?P.value:[P.value];let ne=0;for(let ge=0;ge<Y.length;ge++){const ae=Y[ge],pe=C(ae);typeof ae=="number"||typeof ae=="boolean"?(P.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,oe+ne,P.__data)):ae.isMatrix3?(P.__data[0]=ae.elements[0],P.__data[1]=ae.elements[1],P.__data[2]=ae.elements[2],P.__data[3]=0,P.__data[4]=ae.elements[3],P.__data[5]=ae.elements[4],P.__data[6]=ae.elements[5],P.__data[7]=0,P.__data[8]=ae.elements[6],P.__data[9]=ae.elements[7],P.__data[10]=ae.elements[8],P.__data[11]=0):(ae.toArray(P.__data,ne),ne+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,oe,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(O,D,N,te){const G=O.value,l=D+"_"+N;if(te[l]===void 0)return typeof G=="number"||typeof G=="boolean"?te[l]=G:te[l]=G.clone(),!0;{const J=te[l];if(typeof G=="number"||typeof G=="boolean"){if(J!==G)return te[l]=G,!0}else if(J.equals(G)===!1)return J.copy(G),!0}return!1}function E(O){const D=O.uniforms;let N=0;const te=16;for(let l=0,J=D.length;l<J;l++){const he=Array.isArray(D[l])?D[l]:[D[l]];for(let A=0,P=he.length;A<P;A++){const oe=he[A],Y=Array.isArray(oe.value)?oe.value:[oe.value];for(let ne=0,ge=Y.length;ne<ge;ne++){const ae=Y[ne],pe=C(ae),re=N%te,we=re%pe.boundary,me=re+we;N+=we,me!==0&&te-me<pe.storage&&(N+=te-me),oe.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=N,N+=pe.storage}}}const G=N%te;return G>0&&(N+=te-G),O.__size=N,O.__cache={},this}function C(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function v(O){const D=O.target;D.removeEventListener("dispose",v);const N=u.indexOf(D.__bindingPointIndex);u.splice(N,1),i.deleteBuffer(s[D.id]),delete s[D.id],delete a[D.id]}function g(){for(const O in s)i.deleteBuffer(s[O]);u=[],s={},a={}}return{bind:h,update:p,dispose:g}}class Mg{constructor(e={}){const{canvas:t=of(),context:n=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const y=new Uint32Array(4),E=new Int32Array(4);let C=null,v=null;const g=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=mi,this.toneMappingExposure=1;const D=this;let N=!1,te=0,G=0,l=null,J=-1,he=null;const A=new zt,P=new zt;let oe=null;const Y=new Pt(0);let ne=0,ge=t.width,ae=t.height,pe=1,re=null,we=null;const me=new zt(0,0,ge,ae),Ce=new zt(0,0,ge,ae);let We=!1;const Ge=new pc;let ue=!1,xe=!1;const ze=new Ht,Re=new Ht,Je=new ee,He=new zt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function at(){return l===null?pe:1}let B=n;function kt(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${So}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),B===null){const V="webgl2";if(B=kt(V,R),B===null)throw kt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ht,dt,Ke,pt,et,U,w,q,fe,_e,X,Pe,Ae,Fe,Mt,Se,Oe,$e,je,Le,lt,ot,Ct,k;function Ie(){ht=new Ap(B),ht.init(),ot=new fg(B,ht),dt=new xp(B,ht,e,ot),Ke=new lg(B),dt.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),pt=new Rp(B),et=new Ym,U=new ug(B,ht,Ke,et,dt,ot,pt),w=new Mp(D),q=new bp(D),fe=new Nf(B),Ct=new _p(B,fe),_e=new wp(B,fe,pt,Ct),X=new Lp(B,_e,fe,pt),je=new Pp(B,dt,U),Se=new Sp(et),Pe=new qm(D,w,q,ht,dt,Ct,Se),Ae=new xg(D,et),Fe=new Km,Mt=new tg(ht),$e=new gp(D,w,q,Ke,X,x,h),Oe=new ag(D,X,dt),k=new Sg(B,pt,dt,Ke),Le=new vp(B,ht,pt),lt=new Cp(B,ht,pt),pt.programs=Pe.programs,D.capabilities=dt,D.extensions=ht,D.properties=et,D.renderLists=Fe,D.shadowMap=Oe,D.state=Ke,D.info=pt}Ie();const se=new _g(D,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(ge,ae,!1))},this.getSize=function(R){return R.set(ge,ae)},this.setSize=function(R,V,Z=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ge=R,ae=V,t.width=Math.floor(R*pe),t.height=Math.floor(V*pe),Z===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(ge*pe,ae*pe).floor()},this.setDrawingBufferSize=function(R,V,Z){ge=R,ae=V,pe=Z,t.width=Math.floor(R*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,V,Z,$){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,V,Z,$),Ke.viewport(A.copy(me).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(Ce)},this.setScissor=function(R,V,Z,$){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,V,Z,$),Ke.scissor(P.copy(Ce).multiplyScalar(pe).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(R){Ke.setScissorTest(We=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){we=R},this.getClearColor=function(R){return R.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(R=!0,V=!0,Z=!0){let $=0;if(R){let W=!1;if(l!==null){const Me=l.texture.format;W=Me===Ao||Me===bo||Me===To}if(W){const Me=l.texture.type,Te=Me===ei||Me===Bi||Me===Or||Me===hr||Me===yo||Me===Eo,Be=$e.getClearColor(),ke=$e.getClearAlpha(),Qe=Be.r,tt=Be.g,qe=Be.b;Te?(y[0]=Qe,y[1]=tt,y[2]=qe,y[3]=ke,B.clearBufferuiv(B.COLOR,0,y)):(E[0]=Qe,E[1]=tt,E[2]=qe,E[3]=ke,B.clearBufferiv(B.COLOR,0,E))}else $|=B.COLOR_BUFFER_BIT}V&&($|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),Mt.dispose(),et.dispose(),w.dispose(),q.dispose(),X.dispose(),Ct.dispose(),k.dispose(),Pe.dispose(),se.dispose(),se.removeEventListener("sessionstart",xr),se.removeEventListener("sessionend",Gn),cn.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=pt.autoReset,V=Oe.enabled,Z=Oe.autoUpdate,$=Oe.needsUpdate,W=Oe.type;Ie(),pt.autoReset=R,Oe.enabled=V,Oe.autoUpdate=Z,Oe.needsUpdate=$,Oe.type=W}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const V=R.target;V.removeEventListener("dispose",_t),Tt(V)}function Tt(R){Lt(R),et.remove(R)}function Lt(R){const V=et.get(R).programs;V!==void 0&&(V.forEach(function(Z){Pe.releaseProgram(Z)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Z,$,W,Me){V===null&&(V=Ye);const Te=W.isMesh&&W.matrixWorld.determinant()<0,Be=jr(R,V,Z,$,W);Ke.setMaterial($,Te);let ke=Z.index,Qe=1;if($.wireframe===!0){if(ke=_e.getWireframeAttribute(Z),ke===void 0)return;Qe=2}const tt=Z.drawRange,qe=Z.attributes.position;let bt=tt.start*Qe,Ut=(tt.start+tt.count)*Qe;Me!==null&&(bt=Math.max(bt,Me.start*Qe),Ut=Math.min(Ut,(Me.start+Me.count)*Qe)),ke!==null?(bt=Math.max(bt,0),Ut=Math.min(Ut,ke.count)):qe!=null&&(bt=Math.max(bt,0),Ut=Math.min(Ut,qe.count));const Ot=Ut-bt;if(Ot<0||Ot===1/0)return;Ct.setup(W,$,Be,Z,ke);let $t,At=Le;if(ke!==null&&($t=fe.get(ke),At=lt,At.setIndex($t)),W.isMesh)$.wireframe===!0?(Ke.setLineWidth($.wireframeLinewidth*at()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(W.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),Ke.setLineWidth(Xe*at()),W.isLineSegments?At.setMode(B.LINES):W.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else W.isPoints?At.setMode(B.POINTS):W.isSprite&&At.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)At.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,Gt=W._multiDrawCounts,rt=W._multiDrawCount,Yt=ke?fe.get(ke).bytesPerElement:1,Tn=et.get($).currentProgram.getUniforms();for(let tn=0;tn<rt;tn++)Tn.setValue(B,"_gl_DrawID",tn),At.render(Xe[tn]/Yt,Gt[tn])}else if(W.isInstancedMesh)At.renderInstances(bt,Ot,W.count);else if(Z.isInstancedBufferGeometry){const Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Gt=Math.min(Z.instanceCount,Xe);At.renderInstances(bt,Ot,Gt)}else At.render(bt,Ot)};function xt(R,V,Z){R.transparent===!0&&R.side===$n&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,Mi(R,V,Z),R.side=gi,R.needsUpdate=!0,Mi(R,V,Z),R.side=$n):Mi(R,V,Z)}this.compile=function(R,V,Z=null){Z===null&&(Z=R),v=Mt.get(Z),v.init(V),O.push(v),Z.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),R!==Z&&R.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const $=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const Be=Me[Te];xt(Be,Z,W),$.add(Be)}else xt(Me,Z,W),$.add(Me)}),O.pop(),v=null,$},this.compileAsync=function(R,V,Z=null){const $=this.compile(R,V,Z);return new Promise(W=>{function Me(){if($.forEach(function(Te){et.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){W(R);return}setTimeout(Me,10)}ht.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Zt=null;function _n(R){Zt&&Zt(R)}function xr(){cn.stop()}function Gn(){cn.start()}const cn=new mc;cn.setAnimationLoop(_n),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(R){Zt=R,se.setAnimationLoop(R),R===null?cn.stop():cn.start()},se.addEventListener("sessionstart",xr),se.addEventListener("sessionend",Gn),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,V,l),v=Mt.get(R,O.length),v.init(V),O.push(v),Re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ge.setFromProjectionMatrix(Re),xe=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,xe),C=Fe.get(R,g.length),C.init(),g.push(C),se.enabled===!0&&se.isPresenting===!0){const Me=D.xr.getDepthSensingMesh();Me!==null&&xi(Me,V,-1/0,D.sortObjects)}xi(R,V,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(re,we),St=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,St&&$e.addToRenderList(C,R),this.info.render.frame++,ue===!0&&Se.beginShadows();const Z=v.state.shadowsArray;Oe.render(Z,R,V),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=C.opaque,W=C.transmissive;if(v.setupLights(),V.isArrayCamera){const Me=V.cameras;if(W.length>0)for(let Te=0,Be=Me.length;Te<Be;Te++){const ke=Me[Te];Wr($,W,R,ke)}St&&$e.render(R);for(let Te=0,Be=Me.length;Te<Be;Te++){const ke=Me[Te];Si(C,R,ke,ke.viewport)}}else W.length>0&&Wr($,W,R,V),St&&$e.render(R),Si(C,R,V);l!==null&&(U.updateMultisampleRenderTarget(l),U.updateRenderTargetMipmap(l)),R.isScene===!0&&R.onAfterRender(D,R,V),Ct.resetDefaultState(),J=-1,he=null,O.pop(),O.length>0?(v=O[O.length-1],ue===!0&&Se.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,g.pop(),g.length>0?C=g[g.length-1]:C=null};function xi(R,V,Z,$){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){$&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const Te=X.update(R),Be=R.material;Be.visible&&C.push(R,Te,Be,Z,He.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const Te=X.update(R),Be=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),He.copy(Te.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Be)){const ke=Te.groups;for(let Qe=0,tt=ke.length;Qe<tt;Qe++){const qe=ke[Qe],bt=Be[qe.materialIndex];bt&&bt.visible&&C.push(R,Te,bt,Z,He.z,qe)}}else Be.visible&&C.push(R,Te,Be,Z,He.z,null)}}const Me=R.children;for(let Te=0,Be=Me.length;Te<Be;Te++)xi(Me[Te],V,Z,$)}function Si(R,V,Z,$){const W=R.opaque,Me=R.transmissive,Te=R.transparent;v.setupLightsView(Z),ue===!0&&Se.setGlobalState(D.clippingPlanes,Z),$&&Ke.viewport(A.copy($)),W.length>0&&Hi(W,V,Z),Me.length>0&&Hi(Me,V,Z),Te.length>0&&Hi(Te,V,Z),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Wr(R,V,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[$.id]===void 0&&(v.state.transmissionRenderTarget[$.id]=new zi(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Hr:ei,minFilter:Oi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Me=v.state.transmissionRenderTarget[$.id],Te=$.viewport||A;Me.setSize(Te.z,Te.w);const Be=D.getRenderTarget();D.setRenderTarget(Me),D.getClearColor(Y),ne=D.getClearAlpha(),ne<1&&D.setClearColor(16777215,.5),D.clear(),St&&$e.render(Z);const ke=D.toneMapping;D.toneMapping=mi;const Qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),v.setupLightsView($),ue===!0&&Se.setGlobalState(D.clippingPlanes,$),Hi(R,Z,$),U.updateMultisampleRenderTarget(Me),U.updateRenderTargetMipmap(Me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let qe=0,bt=V.length;qe<bt;qe++){const Ut=V[qe],Ot=Ut.object,$t=Ut.geometry,At=Ut.material,Xe=Ut.group;if(At.side===$n&&Ot.layers.test($.layers)){const Gt=At.side;At.side=hn,At.needsUpdate=!0,Xr(Ot,Z,$,$t,At,Xe),At.side=Gt,At.needsUpdate=!0,tt=!0}}tt===!0&&(U.updateMultisampleRenderTarget(Me),U.updateRenderTargetMipmap(Me))}D.setRenderTarget(Be),D.setClearColor(Y,ne),Qe!==void 0&&($.viewport=Qe),D.toneMapping=ke}function Hi(R,V,Z){const $=V.isScene===!0?V.overrideMaterial:null;for(let W=0,Me=R.length;W<Me;W++){const Te=R[W],Be=Te.object,ke=Te.geometry,Qe=$===null?Te.material:$,tt=Te.group;Be.layers.test(Z.layers)&&Xr(Be,V,Z,ke,Qe,tt)}}function Xr(R,V,Z,$,W,Me){R.onBeforeRender(D,V,Z,$,W,Me),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(D,V,Z,$,R,Me),W.transparent===!0&&W.side===$n&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,D.renderBufferDirect(Z,V,$,W,R,Me),W.side=gi,W.needsUpdate=!0,D.renderBufferDirect(Z,V,$,W,R,Me),W.side=$n):D.renderBufferDirect(Z,V,$,W,R,Me),R.onAfterRender(D,V,Z,$,W,Me)}function Mi(R,V,Z){V.isScene!==!0&&(V=Ye);const $=et.get(R),W=v.state.lights,Me=v.state.shadowsArray,Te=W.state.version,Be=Pe.getParameters(R,W.state,Me,V,Z),ke=Pe.getProgramCacheKey(Be);let Qe=$.programs;$.environment=R.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(R.isMeshStandardMaterial?q:w).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",_t),Qe=new Map,$.programs=Qe);let tt=Qe.get(ke);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Te)return Yr(R,Be),tt}else Be.uniforms=Pe.getUniforms(R),R.onBeforeCompile(Be,D),tt=Pe.acquireProgram(Be,ke),Qe.set(ke,tt),$.uniforms=Be.uniforms;const qe=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Se.uniform),Yr(R,Be),$.needsLights=ni(R),$.lightsStateVersion=Te,$.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function qr(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Rs.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Yr(R,V){const Z=et.get(R);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function jr(R,V,Z,$,W){V.isScene!==!0&&(V=Ye),U.resetTextureUnits();const Me=V.fog,Te=$.isMeshStandardMaterial?V.environment:null,Be=l===null?D.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:vi,ke=($.isMeshStandardMaterial?q:w).get($.envMap||Te),Qe=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!Z.morphAttributes.position,bt=!!Z.morphAttributes.normal,Ut=!!Z.morphAttributes.color;let Ot=mi;$.toneMapped&&(l===null||l.isXRRenderTarget===!0)&&(Ot=D.toneMapping);const $t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,At=$t!==void 0?$t.length:0,Xe=et.get($),Gt=v.state.lights;if(ue===!0&&(xe===!0||R!==he)){const nn=R===he&&$.id===J;Se.setState($,R,nn)}let rt=!1;$.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Gt.state.version||Xe.outputColorSpace!==Be||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==ke||$.fog===!0&&Xe.fog!==Me||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==Qe||Xe.vertexTangents!==tt||Xe.morphTargets!==qe||Xe.morphNormals!==bt||Xe.morphColors!==Ut||Xe.toneMapping!==Ot||Xe.morphTargetsCount!==At)&&(rt=!0):(rt=!0,Xe.__version=$.version);let Yt=Xe.currentProgram;rt===!0&&(Yt=Mi($,V,W));let Tn=!1,tn=!1,Sr=!1;const Nt=Yt.getUniforms(),bn=Xe.uniforms;if(Ke.useProgram(Yt.program)&&(Tn=!0,tn=!0,Sr=!0),$.id!==J&&(J=$.id,tn=!0),Tn||he!==R){dt.reverseDepthBuffer?(ze.copy(R.projectionMatrix),cf(ze),uf(ze),Nt.setValue(B,"projectionMatrix",ze)):Nt.setValue(B,"projectionMatrix",R.projectionMatrix),Nt.setValue(B,"viewMatrix",R.matrixWorldInverse);const nn=Nt.map.cameraPosition;nn!==void 0&&nn.setValue(B,Je.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),he!==R&&(he=R,tn=!0,Sr=!0)}if(W.isSkinnedMesh){Nt.setOptional(B,W,"bindMatrix"),Nt.setOptional(B,W,"bindMatrixInverse");const nn=W.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Nt.setValue(B,"boneTexture",nn.boneTexture,U))}W.isBatchedMesh&&(Nt.setOptional(B,W,"batchingTexture"),Nt.setValue(B,"batchingTexture",W._matricesTexture,U),Nt.setOptional(B,W,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",W._indirectTexture,U),Nt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",W._colorsTexture,U));const ii=Z.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&je.update(W,Z,Yt),(tn||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Nt.setValue(B,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bn.envMap.value=ke,bn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(bn.envMapIntensity.value=V.environmentIntensity),tn&&(Nt.setValue(B,"toneMappingExposure",D.toneMappingExposure),Xe.needsLights&&Hs(bn,Sr),Me&&$.fog===!0&&Ae.refreshFogUniforms(bn,Me),Ae.refreshMaterialUniforms(bn,$,pe,ae,v.state.transmissionRenderTarget[R.id]),Rs.upload(B,qr(Xe),bn,U)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Rs.upload(B,qr(Xe),bn,U),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Nt.setValue(B,"center",W.center),Nt.setValue(B,"modelViewMatrix",W.modelViewMatrix),Nt.setValue(B,"normalMatrix",W.normalMatrix),Nt.setValue(B,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const nn=$.uniformsGroups;for(let Mr=0,ks=nn.length;Mr<ks;Mr++){const un=nn[Mr];k.update(un,Yt),k.bind(un,Yt)}}return Yt}function Hs(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function ni(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(R,V,Z){et.get(R.texture).__webglTexture=V,et.get(R.depthTexture).__webglTexture=Z;const $=et.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const Z=et.get(R);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Z=0){l=R,te=V,G=Z;let $=!0,W=null,Me=!1,Te=!1;if(R){const ke=et.get(R);if(ke.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(B.FRAMEBUFFER,null),$=!1;else if(ke.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(ke.__hasExternalTextures)U.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qe=R.depthTexture;if(ke.__boundDepthTexture!==qe){if(qe!==null&&et.has(qe)&&(R.width!==qe.image.width||R.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Te=!0);const tt=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[V])?W=tt[V][Z]:W=tt[V],Me=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?W=et.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[Z]:W=tt,A.copy(R.viewport),P.copy(R.scissor),oe=R.scissorTest}else A.copy(me).multiplyScalar(pe).floor(),P.copy(Ce).multiplyScalar(pe).floor(),oe=We;if(Ke.bindFramebuffer(B.FRAMEBUFFER,W)&&$&&Ke.drawBuffers(R,W),Ke.viewport(A),Ke.scissor(P),Ke.setScissorTest(oe),Me){const ke=et.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,Z)}else if(Te){const ke=et.get(R.texture),Qe=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,Z||0,Qe)}J=-1},this.readRenderTargetPixels=function(R,V,Z,$,W,Me,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Be=Be[Te]),Be){Ke.bindFramebuffer(B.FRAMEBUFFER,Be);try{const ke=R.texture,Qe=ke.format,tt=ke.type;if(!dt.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-$&&Z>=0&&Z<=R.height-W&&B.readPixels(V,Z,$,W,ot.convert(Qe),ot.convert(tt),Me)}finally{const ke=l!==null?et.get(l).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,V,Z,$,W,Me,Te){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Be=Be[Te]),Be){const ke=R.texture,Qe=ke.format,tt=ke.type;if(!dt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-$&&Z>=0&&Z<=R.height-W){Ke.bindFramebuffer(B.FRAMEBUFFER,Be);const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),B.readPixels(V,Z,$,W,ot.convert(Qe),ot.convert(tt),0);const bt=l!==null?et.get(l).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,bt);const Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await lf(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.deleteBuffer(qe),B.deleteSync(Ut),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,Z=0){R.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-Z),W=Math.floor(R.image.width*$),Me=Math.floor(R.image.height*$),Te=V!==null?V.x:0,Be=V!==null?V.y:0;U.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Te,Be,W,Me),Ke.unbindTexture()},this.copyTextureToTexture=function(R,V,Z=null,$=null,W=0){R.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],V=arguments[2],W=arguments[3]||0,Z=null);let Me,Te,Be,ke,Qe,tt;Z!==null?(Me=Z.max.x-Z.min.x,Te=Z.max.y-Z.min.y,Be=Z.min.x,ke=Z.min.y):(Me=R.image.width,Te=R.image.height,Be=0,ke=0),$!==null?(Qe=$.x,tt=$.y):(Qe=0,tt=0);const qe=ot.convert(V.format),bt=ot.convert(V.type);U.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Ut=B.getParameter(B.UNPACK_ROW_LENGTH),Ot=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$t=B.getParameter(B.UNPACK_SKIP_PIXELS),At=B.getParameter(B.UNPACK_SKIP_ROWS),Xe=B.getParameter(B.UNPACK_SKIP_IMAGES),Gt=R.isCompressedTexture?R.mipmaps[W]:R.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,Qe,tt,Me,Te,qe,bt,Gt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,Qe,tt,Gt.width,Gt.height,qe,Gt.data):B.texSubImage2D(B.TEXTURE_2D,W,Qe,tt,Me,Te,qe,bt,Gt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ut),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$t),B.pixelStorei(B.UNPACK_SKIP_ROWS,At),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe),W===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,V,Z=null,$=null,W=0){R.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,R=arguments[2],V=arguments[3],W=arguments[4]||0);let Me,Te,Be,ke,Qe,tt,qe,bt,Ut;const Ot=R.isCompressedTexture?R.mipmaps[W]:R.image;Z!==null?(Me=Z.max.x-Z.min.x,Te=Z.max.y-Z.min.y,Be=Z.max.z-Z.min.z,ke=Z.min.x,Qe=Z.min.y,tt=Z.min.z):(Me=Ot.width,Te=Ot.height,Be=Ot.depth,ke=0,Qe=0,tt=0),$!==null?(qe=$.x,bt=$.y,Ut=$.z):(qe=0,bt=0,Ut=0);const $t=ot.convert(V.format),At=ot.convert(V.type);let Xe;if(V.isData3DTexture)U.setTexture3D(V,0),Xe=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)U.setTexture2DArray(V,0),Xe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Gt=B.getParameter(B.UNPACK_ROW_LENGTH),rt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yt=B.getParameter(B.UNPACK_SKIP_PIXELS),Tn=B.getParameter(B.UNPACK_SKIP_ROWS),tn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,tt),R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Xe,W,qe,bt,Ut,Me,Te,Be,$t,At,Ot.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Xe,W,qe,bt,Ut,Me,Te,Be,$t,Ot.data):B.texSubImage3D(Xe,W,qe,bt,Ut,Me,Te,Be,$t,At,Ot),B.pixelStorei(B.UNPACK_ROW_LENGTH,Gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Tn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,tn),W===0&&V.generateMipmaps&&B.generateMipmap(Xe),Ke.unbindTexture()},this.initRenderTarget=function(R){et.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){te=0,G=0,l=null,Ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wo?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Fs?"display-p3":"srgb"}}class yg extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mc extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new Ht,xo=new ac,Ms=new Os,ys=new ee;class Eg extends dn{constructor(e=new kn,t=new Mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),Ms.radius+=a,e.ray.intersectsSphere(Ms)===!1)return;zl.copy(s).invert(),xo.copy(e.ray).applyMatrix4(zl);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=n.index,_=n.attributes.position;if(p!==null){const x=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let E=x,C=y;E<C;E++){const v=p.getX(E);ys.fromBufferAttribute(_,v),Hl(ys,v,h,s,e,t,this)}}else{const x=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=x,C=y;E<C;E++)ys.fromBufferAttribute(_,E),Hl(ys,E,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Hl(i,e,t,n,s,a,u){const c=xo.distanceSqToPoint(i);if(c<t){const h=new ee;xo.closestPointToPoint(i,h),h.applyMatrix4(n);const p=s.ray.origin.distanceTo(h);if(p<s.near||p>s.far)return;a.push({distance:p,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Fr extends kn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],u=[],c=[],h=[],p=new ee,m=new Et;u.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let _=0,x=3;_<=t;_++,x+=3){const y=n+_/t*s;p.x=e*Math.cos(y),p.y=e*Math.sin(y),u.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(u[x]/e+1)/2,m.y=(u[x+1]/e+1)/2,h.push(m.x,m.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new Hn(u,3)),this.setAttribute("normal",new Hn(c,3)),this.setAttribute("uv",new Hn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const kl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Tg{constructor(e,t,n){const s=this;let a=!1,u=0,c=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){c++,a===!1&&s.onStart!==void 0&&s.onStart(m,u,c),a=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(m))return E}return null}}}const bg=new Tg;class Po{constructor(e){this.manager=e!==void 0?e:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Po.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ag extends Po{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=kl.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=zr("img");function h(){m(),kl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function p(_){m(),s&&s(_),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){c.removeEventListener("load",h,!1),c.removeEventListener("error",p,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class wg extends Po{constructor(e){super(e)}load(e,t,n,s){const a=new ln,u=new Ag(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);const Cg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TpSoVB4uoOGSo4mAXFXEsVSyChdJWaNXB5KU/QpOGJMXFUXAtOPizWHVwcdbVwVUQBH9AnB2cFF2kxPuSQosYLzzex3n3HN67DxDqZaaaHVFA1SwjFY+J2dyKGHhFN4bgwzgGJGbqifRCBp71dU+dVHcRnuXd92f1KnmTAT6ROMp0wyJeJ57ZtHTO+8QhVpIU4nPiCYMuSPzIddnlN85FhwWeGTIyqTniELFYbGO5jVnJUImnicOKqlG+kHVZ4bzFWS1XWfOe/IXBvLac5jqtEcSxiASSECGjig2UYSFCu0aKiRSdxzz8w44/SS6ZXBtg5JhHBSokxw/+B79naxamJt2kYAzofLHtj1EgsAs0arb9fWzbjRPA/wxcaS1/pQ7MfpJea2nhI6BvG7i4bmnyHnC5Aww+6ZIhOZKfllAoAO9n9E05oP8W6Fl159Y8x+kDkKFZLd0AB4fAWJGy1zze3dU+t397mvP7AbBLcr+wktTtAAAABmJLR0QAPQA9AD3UKf2aAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AkZASs32c17egAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABzSURBVCjPpZO5EYQwDADX7oGG6MA9uD8iMjpgaMQuYi84Au4dRt5MweoZSfCGWtVVbT5pZ1z5hTqrm//Z1PmbeHiP4yXBjYofHVxnjFAzUIhRktqAKSD3pBqsTAZ60O0Z2IPynoElKC9jex6+sKHbjn7VA2BPmuc2MyagAAAAAElFTkSuQmCC";(i=>{i(window).on("load",function(){const e=i("#top").innerWidth(),t=i("#top").innerHeight(),n=new yg,s=new Mn(75,e/t,.1,1e3),a=2*Math.tan(af.degToRad(s.fov/2))*s.near,u=a*(e/t),c=5;s.position.z=c;const h=u/s.near*c,p=a/s.near*c,m=h/2,_=-m,x=p/2,y=-x,E=.3,C=E+1,v=2,g=new Mg;g.setSize(e,t),i("#top").prepend(g.domElement);let O=new _r(10.3,1,1),D=new rr({color:16777215});new gn(O,D),O=new Fr(C,32),D=new rr({color:1118481});const N=new gn(O,D);N.position.x=1e3,N.position.y=1e3,O=new Fr(E,32),D=new rr({color:255});const te=new gn(O,D);te.position.x=1e3,te.position.y=1e3,i("canvas").addClass("mouse-listener"),i("canvas").attr("id","effects");const G=document.getElementById("effects").getBoundingClientRect(),l=new Et(1e3,1e3);i(".mouse-listener").on("mousemove",me=>J(me));const J=me=>{l.x=(me.clientX-G.left)/G.width*h-m,l.y=-((me.clientY-G.top)/G.height)*p+x,te.position.x=l.x,te.position.y=l.y,N.position.x=l.x,N.position.y=l.y};i("canvas").on("mouseleave",me=>{l.x=1e3,l.y=1e3}),i(".mouse-listener").on("click",me=>{const Ce=(me.clientX-G.left)/G.width*h-m,We=-((me.clientY-G.top)/G.height)*p+x;console.log("Click: ("+Ce+", "+We+")"),console.log("Mouse: ("+l.x+", "+l.y+")"),O=new Fr(.05,32),D=new rr({color:16711680});const Ge=new gn(O,D);Ge.position.x=Ce,Ge.position.y=We,n.add(Ge)});const he=500,A=new kn,P=3,oe=new Float32Array(he*P),Y=new Float32Array(he*3),ne=new Float32Array(he*P),ge=new Pt;for(let me=0;me<he;me++){const Ce=me*P,We=me*P+1,Ge=me*P+2;oe[Ce]=Math.random()*(m-_)+_,oe[We]=Math.random()*(x-y)+y,oe[Ge]=0,ge.setHSL(Math.random(),.7,Math.random()),Y[me*3]=ge.r,Y[me*3+1]=ge.g,Y[me*3+2]=ge.b,ne[Ce]=Math.random()*(.01-.005)+.005,ne[We]=Math.random()*(.002- -.002)+-.003,ne[Ge]=0}A.setAttribute("position",new En(oe,P)),A.setAttribute("color",new En(Y,3));const ae=new wg().load(Cg),pe=new Mc({size:.15,map:ae,vertexColors:!0}),re=new Eg(A,pe);n.add(re);const we=()=>{const me=re.geometry.attributes.position.array;for(let Ce=0;Ce<he;Ce++){const We=Ce*3,Ge=Ce*3+1,ue=l.x,xe=l.y;if(Math.sqrt((ue-me[We])**2+(xe-me[Ge])**2)<E){me[We]-=ne[We],me[Ge]-=ne[Ge];let Re;const Je=new Et(ue,xe),He=new Et(ne[We],ne[Ge]),Ye=new Et(me[We]-ne[We],me[Ge]-ne[Ge]),St=He.x**2+He.y**2,at=2*((Ye.x-Je.x)*He.x+(Ye.y-Je.y)*He.y),B=(Ye.x-Je.x)**2+(Ye.y-Je.y)**2-E**2,kt=at**2-4*St*B,ht=(-at+Math.sqrt(kt))/(2*St),dt=(-at-Math.sqrt(kt))/(2*St);if(kt>0){const U=new Et(Ye.x+ht*He.x,Ye.y+ht*He.y),w=new Et(Ye.x+dt*He.x,Ye.y+dt*He.y),q=Math.sqrt((U.x-me[We])**2+(U.y-me[Ge])**2),fe=Math.sqrt((w.x-Ye.x)**2+(w.y-Ye.y)**2);Re=q-fe>0?w:U}else console.log("There are not 2 intersection points");const Ke=Re.clone().sub(Je);Ke.normalize();const pt=He.dot(Ke),et=He.sub(Ke.multiplyScalar(2*pt));ne[We]=et.x*v,ne[Ge]=et.y*v,me[We]=Re.x+He.x,me[Ge]=Re.y+He.y}me[We]+=ne[We],me[Ge]+=ne[Ge],(me[We]>m||me[We]<_-1)&&(me[We]=_-1,ne[We]=Math.abs(ne[We])<.02?Math.abs(ne[We]):Math.random()*(.01-.05)-.05,(ne[Ge]>.003||ne[Ge]<-.003)&&(ne[Ge]=Math.random()*(.002- -.002)+-.002)),(me[Ge]>x||me[Ge]<y)&&(me[Ge]=Math.random()*(x-y)+y,me[We]=_-1,(ne[Ge]>.003||ne[Ge]<-.003)&&(ne[Ge]=Math.random()*(.002- -.002)+-.002))}re.geometry.attributes.position.needsUpdate=!0,g.render(n,s)};g.setAnimationLoop(we)})})(Is);
