(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const jc="/assets/proj1-1-BWb4NWai.jpg",Kc=[{title:"Diversity Calculator",img:jc,alt:"Project 1 img",shortDesc:"Calculate the diversity score of selected stocks.",longDesc:"A WebApp to calculate the diversity score of the stocks selected by users",demo:"https://maxe688.github.io/stock-portfolio-diversity-calculator/",source:"https://github.com/MaxE688/stock-portfolio-diversity-calculator"}];var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $c(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gl={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Zc,function(e,t){var n=[],s=Object.getPrototypeOf,a=n.slice,u=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},c=n.push,h=n.indexOf,p={},m=p.toString,_=p.hasOwnProperty,x=_.toString,M=x.call(Object),E={},C=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},v=function(o){return o!=null&&o===o.window},g=e.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function L(r,o,f){f=f||g;var d,S,y=f.createElement("script");if(y.text=r,o)for(d in O)S=o[d]||o.getAttribute&&o.getAttribute(d),S&&y.setAttribute(d,S);f.head.appendChild(y).parentNode.removeChild(y)}function N(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?p[m.call(r)]||"object":typeof r}var ee="3.7.1",V=/HTML$/i,l=function(r,o){return new l.fn.init(r,o)};l.fn=l.prototype={jquery:ee,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=l.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return l.each(this,r)},map:function(r){return this.pushStack(l.map(this,function(o,f){return r.call(o,f,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,f=+r+(r<0?o:0);return this.pushStack(f>=0&&f<o?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var r,o,f,d,S,y,T=arguments[0]||{},F=1,I=arguments.length,H=!1;for(typeof T=="boolean"&&(H=T,T=arguments[F]||{},F++),typeof T!="object"&&!C(T)&&(T={}),F===I&&(T=this,F--);F<I;F++)if((r=arguments[F])!=null)for(o in r)d=r[o],!(o==="__proto__"||T===d)&&(H&&d&&(l.isPlainObject(d)||(S=Array.isArray(d)))?(f=T[o],S&&!Array.isArray(f)?y=[]:!S&&!l.isPlainObject(f)?y={}:y=f,S=!1,T[o]=l.extend(H,y,d)):d!==void 0&&(T[o]=d));return T},l.extend({expando:"jQuery"+(ee+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,f;return!r||m.call(r)!=="[object Object]"?!1:(o=s(r),o?(f=_.call(o,"constructor")&&o.constructor,typeof f=="function"&&x.call(f)===M):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,f){L(r,{nonce:o&&o.nonce},f)},each:function(r,o){var f,d=0;if(Q(r))for(f=r.length;d<f&&o.call(r[d],d,r[d])!==!1;d++);else for(d in r)if(o.call(r[d],d,r[d])===!1)break;return r},text:function(r){var o,f="",d=0,S=r.nodeType;if(!S)for(;o=r[d++];)f+=l.text(o);return S===1||S===11?r.textContent:S===9?r.documentElement.textContent:S===3||S===4?r.nodeValue:f},makeArray:function(r,o){var f=o||[];return r!=null&&(Q(Object(r))?l.merge(f,typeof r=="string"?[r]:r):c.call(f,r)),f},inArray:function(r,o,f){return o==null?-1:h.call(o,r,f)},isXMLDoc:function(r){var o=r&&r.namespaceURI,f=r&&(r.ownerDocument||r).documentElement;return!V.test(o||f&&f.nodeName||"HTML")},merge:function(r,o){for(var f=+o.length,d=0,S=r.length;d<f;d++)r[S++]=o[d];return r.length=S,r},grep:function(r,o,f){for(var d,S=[],y=0,T=r.length,F=!f;y<T;y++)d=!o(r[y],y),d!==F&&S.push(r[y]);return S},map:function(r,o,f){var d,S,y=0,T=[];if(Q(r))for(d=r.length;y<d;y++)S=o(r[y],y,f),S!=null&&T.push(S);else for(y in r)S=o(r[y],y,f),S!=null&&T.push(S);return u(T)},guid:1,support:E}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){p["[object "+o+"]"]=o.toLowerCase()});function Q(r){var o=!!r&&"length"in r&&r.length,f=N(r);return C(r)||v(r)?!1:f==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function he(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var A=n.pop,P=n.sort,ne=n.splice,Y="[\\x20\\t\\r\\n\\f]",fe=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");l.contains=function(r,o){var f=o&&o.parentNode;return r===f||!!(f&&f.nodeType===1&&(r.contains?r.contains(f):r.compareDocumentPosition&&r.compareDocumentPosition(f)&16))};var me=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ae(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}l.escapeSelector=function(r){return(r+"").replace(me,ae)};var pe=g,q=c;(function(){var r,o,f,d,S,y=q,T,F,I,H,re,le=l.expando,Z=0,_e=0,tt=jr(),Mt=jr(),lt=jr(),Kt=jr(),Wt=function(D,z){return D===z&&(S=!0),0},Un="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",In="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",vt="\\["+Y+"*("+In+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+In+"))|)"+Y+"*\\]",Ti=":("+In+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+vt+")*)|.*)\\)|)",At=new RegExp(Y+"+","g"),Bt=new RegExp("^"+Y+"*,"+Y+"*"),Tr=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),Ks=new RegExp(Y+"|>"),Nn=new RegExp(Ti),br=new RegExp("^"+In+"$"),Fn={ID:new RegExp("^#("+In+")"),CLASS:new RegExp("^\\.("+In+")"),TAG:new RegExp("^("+In+"|[*])"),ATTR:new RegExp("^"+vt),PSEUDO:new RegExp("^"+Ti),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+Un+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},ri=/^(?:input|select|textarea|button)$/i,si=/^h\d$/i,_n=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Zs=/[+~]/,Vn=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),Wn=function(D,z){var K="0x"+D.slice(1)-65536;return z||(K<0?String.fromCharCode(K+65536):String.fromCharCode(K>>10|55296,K&1023|56320))},kc=function(){ai()},Gc=Zr(function(D){return D.disabled===!0&&he(D,"fieldset")},{dir:"parentNode",next:"legend"});function Vc(){try{return T.activeElement}catch{}}try{y.apply(n=a.call(pe.childNodes),pe.childNodes),n[pe.childNodes.length].nodeType}catch{y={apply:function(z,K){q.apply(z,a.call(K))},call:function(z){q.apply(z,a.call(arguments,1))}}}function Lt(D,z,K,te){var oe,Ee,Le,ke,Ue,pt,et,it=z&&z.ownerDocument,mt=z?z.nodeType:9;if(K=K||[],typeof D!="string"||!D||mt!==1&&mt!==9&&mt!==11)return K;if(!te&&(ai(z),z=z||T,I)){if(mt!==11&&(Ue=_n.exec(D)))if(oe=Ue[1]){if(mt===9)if(Le=z.getElementById(oe)){if(Le.id===oe)return y.call(K,Le),K}else return K;else if(it&&(Le=it.getElementById(oe))&&Lt.contains(z,Le)&&Le.id===oe)return y.call(K,Le),K}else{if(Ue[2])return y.apply(K,z.getElementsByTagName(D)),K;if((oe=Ue[3])&&z.getElementsByClassName)return y.apply(K,z.getElementsByClassName(oe)),K}if(!Kt[D+" "]&&(!H||!H.test(D))){if(et=D,it=z,mt===1&&(Ks.test(D)||Tr.test(D))){for(it=Zs.test(D)&&$s(z.parentNode)||z,(it!=z||!E.scope)&&((ke=z.getAttribute("id"))?ke=l.escapeSelector(ke):z.setAttribute("id",ke=le)),pt=Ar(D),Ee=pt.length;Ee--;)pt[Ee]=(ke?"#"+ke:":scope")+" "+Kr(pt[Ee]);et=pt.join(",")}try{return y.apply(K,it.querySelectorAll(et)),K}catch{Kt(D,!0)}finally{ke===le&&z.removeAttribute("id")}}}return Vo(D.replace(fe,"$1"),z,K,te)}function jr(){var D=[];function z(K,te){return D.push(K+" ")>o.cacheLength&&delete z[D.shift()],z[K+" "]=te}return z}function An(D){return D[le]=!0,D}function ki(D){var z=T.createElement("fieldset");try{return!!D(z)}catch{return!1}finally{z.parentNode&&z.parentNode.removeChild(z),z=null}}function Wc(D){return function(z){return he(z,"input")&&z.type===D}}function Xc(D){return function(z){return(he(z,"input")||he(z,"button"))&&z.type===D}}function ko(D){return function(z){return"form"in z?z.parentNode&&z.disabled===!1?"label"in z?"label"in z.parentNode?z.parentNode.disabled===D:z.disabled===D:z.isDisabled===D||z.isDisabled!==!D&&Gc(z)===D:z.disabled===D:"label"in z?z.disabled===D:!1}}function bi(D){return An(function(z){return z=+z,An(function(K,te){for(var oe,Ee=D([],K.length,z),Le=Ee.length;Le--;)K[oe=Ee[Le]]&&(K[oe]=!(te[oe]=K[oe]))})})}function $s(D){return D&&typeof D.getElementsByTagName<"u"&&D}function ai(D){var z,K=D?D.ownerDocument||D:pe;return K==T||K.nodeType!==9||!K.documentElement||(T=K,F=T.documentElement,I=!l.isXMLDoc(T),re=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&pe!=T&&(z=T.defaultView)&&z.top!==z&&z.addEventListener("unload",kc),E.getById=ki(function(te){return F.appendChild(te).id=l.expando,!T.getElementsByName||!T.getElementsByName(l.expando).length}),E.disconnectedMatch=ki(function(te){return re.call(te,"*")}),E.scope=ki(function(){return T.querySelectorAll(":scope")}),E.cssHas=ki(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(o.filter.ID=function(te){var oe=te.replace(Vn,Wn);return function(Ee){return Ee.getAttribute("id")===oe}},o.find.ID=function(te,oe){if(typeof oe.getElementById<"u"&&I){var Ee=oe.getElementById(te);return Ee?[Ee]:[]}}):(o.filter.ID=function(te){var oe=te.replace(Vn,Wn);return function(Ee){var Le=typeof Ee.getAttributeNode<"u"&&Ee.getAttributeNode("id");return Le&&Le.value===oe}},o.find.ID=function(te,oe){if(typeof oe.getElementById<"u"&&I){var Ee,Le,ke,Ue=oe.getElementById(te);if(Ue){if(Ee=Ue.getAttributeNode("id"),Ee&&Ee.value===te)return[Ue];for(ke=oe.getElementsByName(te),Le=0;Ue=ke[Le++];)if(Ee=Ue.getAttributeNode("id"),Ee&&Ee.value===te)return[Ue]}return[]}}),o.find.TAG=function(te,oe){return typeof oe.getElementsByTagName<"u"?oe.getElementsByTagName(te):oe.querySelectorAll(te)},o.find.CLASS=function(te,oe){if(typeof oe.getElementsByClassName<"u"&&I)return oe.getElementsByClassName(te)},H=[],ki(function(te){var oe;F.appendChild(te).innerHTML="<a id='"+le+"' href='' disabled='disabled'></a><select id='"+le+"-\r\\' disabled='disabled'><option selected=''></option></select>",te.querySelectorAll("[selected]").length||H.push("\\["+Y+"*(?:value|"+Un+")"),te.querySelectorAll("[id~="+le+"-]").length||H.push("~="),te.querySelectorAll("a#"+le+"+*").length||H.push(".#.+[+~]"),te.querySelectorAll(":checked").length||H.push(":checked"),oe=T.createElement("input"),oe.setAttribute("type","hidden"),te.appendChild(oe).setAttribute("name","D"),F.appendChild(te).disabled=!0,te.querySelectorAll(":disabled").length!==2&&H.push(":enabled",":disabled"),oe=T.createElement("input"),oe.setAttribute("name",""),te.appendChild(oe),te.querySelectorAll("[name='']").length||H.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),E.cssHas||H.push(":has"),H=H.length&&new RegExp(H.join("|")),Wt=function(te,oe){if(te===oe)return S=!0,0;var Ee=!te.compareDocumentPosition-!oe.compareDocumentPosition;return Ee||(Ee=(te.ownerDocument||te)==(oe.ownerDocument||oe)?te.compareDocumentPosition(oe):1,Ee&1||!E.sortDetached&&oe.compareDocumentPosition(te)===Ee?te===T||te.ownerDocument==pe&&Lt.contains(pe,te)?-1:oe===T||oe.ownerDocument==pe&&Lt.contains(pe,oe)?1:d?h.call(d,te)-h.call(d,oe):0:Ee&4?-1:1)}),T}Lt.matches=function(D,z){return Lt(D,null,null,z)},Lt.matchesSelector=function(D,z){if(ai(D),I&&!Kt[z+" "]&&(!H||!H.test(z)))try{var K=re.call(D,z);if(K||E.disconnectedMatch||D.document&&D.document.nodeType!==11)return K}catch{Kt(z,!0)}return Lt(z,T,null,[D]).length>0},Lt.contains=function(D,z){return(D.ownerDocument||D)!=T&&ai(D),l.contains(D,z)},Lt.attr=function(D,z){(D.ownerDocument||D)!=T&&ai(D);var K=o.attrHandle[z.toLowerCase()],te=K&&_.call(o.attrHandle,z.toLowerCase())?K(D,z,!I):void 0;return te!==void 0?te:D.getAttribute(z)},Lt.error=function(D){throw new Error("Syntax error, unrecognized expression: "+D)},l.uniqueSort=function(D){var z,K=[],te=0,oe=0;if(S=!E.sortStable,d=!E.sortStable&&a.call(D,0),P.call(D,Wt),S){for(;z=D[oe++];)z===D[oe]&&(te=K.push(oe));for(;te--;)ne.call(D,K[te],1)}return d=null,D},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:An,match:Fn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(D){return D[1]=D[1].replace(Vn,Wn),D[3]=(D[3]||D[4]||D[5]||"").replace(Vn,Wn),D[2]==="~="&&(D[3]=" "+D[3]+" "),D.slice(0,4)},CHILD:function(D){return D[1]=D[1].toLowerCase(),D[1].slice(0,3)==="nth"?(D[3]||Lt.error(D[0]),D[4]=+(D[4]?D[5]+(D[6]||1):2*(D[3]==="even"||D[3]==="odd")),D[5]=+(D[7]+D[8]||D[3]==="odd")):D[3]&&Lt.error(D[0]),D},PSEUDO:function(D){var z,K=!D[6]&&D[2];return Fn.CHILD.test(D[0])?null:(D[3]?D[2]=D[4]||D[5]||"":K&&Nn.test(K)&&(z=Ar(K,!0))&&(z=K.indexOf(")",K.length-z)-K.length)&&(D[0]=D[0].slice(0,z),D[2]=K.slice(0,z)),D.slice(0,3))}},filter:{TAG:function(D){var z=D.replace(Vn,Wn).toLowerCase();return D==="*"?function(){return!0}:function(K){return he(K,z)}},CLASS:function(D){var z=tt[D+" "];return z||(z=new RegExp("(^|"+Y+")"+D+"("+Y+"|$)"))&&tt(D,function(K){return z.test(typeof K.className=="string"&&K.className||typeof K.getAttribute<"u"&&K.getAttribute("class")||"")})},ATTR:function(D,z,K){return function(te){var oe=Lt.attr(te,D);return oe==null?z==="!=":z?(oe+="",z==="="?oe===K:z==="!="?oe!==K:z==="^="?K&&oe.indexOf(K)===0:z==="*="?K&&oe.indexOf(K)>-1:z==="$="?K&&oe.slice(-K.length)===K:z==="~="?(" "+oe.replace(At," ")+" ").indexOf(K)>-1:z==="|="?oe===K||oe.slice(0,K.length+1)===K+"-":!1):!0}},CHILD:function(D,z,K,te,oe){var Ee=D.slice(0,3)!=="nth",Le=D.slice(-4)!=="last",ke=z==="of-type";return te===1&&oe===0?function(Ue){return!!Ue.parentNode}:function(Ue,pt,et){var it,mt,je,It,fn,Jt=Ee!==Le?"nextSibling":"previousSibling",vn=Ue.parentNode,On=ke&&Ue.nodeName.toLowerCase(),Gi=!et&&!ke,rn=!1;if(vn){if(Ee){for(;Jt;){for(je=Ue;je=je[Jt];)if(ke?he(je,On):je.nodeType===1)return!1;fn=Jt=D==="only"&&!fn&&"nextSibling"}return!0}if(fn=[Le?vn.firstChild:vn.lastChild],Le&&Gi){for(mt=vn[le]||(vn[le]={}),it=mt[D]||[],It=it[0]===Z&&it[1],rn=It&&it[2],je=It&&vn.childNodes[It];je=++It&&je&&je[Jt]||(rn=It=0)||fn.pop();)if(je.nodeType===1&&++rn&&je===Ue){mt[D]=[Z,It,rn];break}}else if(Gi&&(mt=Ue[le]||(Ue[le]={}),it=mt[D]||[],It=it[0]===Z&&it[1],rn=It),rn===!1)for(;(je=++It&&je&&je[Jt]||(rn=It=0)||fn.pop())&&!((ke?he(je,On):je.nodeType===1)&&++rn&&(Gi&&(mt=je[le]||(je[le]={}),mt[D]=[Z,rn]),je===Ue)););return rn-=oe,rn===te||rn%te===0&&rn/te>=0}}},PSEUDO:function(D,z){var K,te=o.pseudos[D]||o.setFilters[D.toLowerCase()]||Lt.error("unsupported pseudo: "+D);return te[le]?te(z):te.length>1?(K=[D,D,"",z],o.setFilters.hasOwnProperty(D.toLowerCase())?An(function(oe,Ee){for(var Le,ke=te(oe,z),Ue=ke.length;Ue--;)Le=h.call(oe,ke[Ue]),oe[Le]=!(Ee[Le]=ke[Ue])}):function(oe){return te(oe,0,K)}):te}},pseudos:{not:An(function(D){var z=[],K=[],te=ta(D.replace(fe,"$1"));return te[le]?An(function(oe,Ee,Le,ke){for(var Ue,pt=te(oe,null,ke,[]),et=oe.length;et--;)(Ue=pt[et])&&(oe[et]=!(Ee[et]=Ue))}):function(oe,Ee,Le){return z[0]=oe,te(z,null,Le,K),z[0]=null,!K.pop()}}),has:An(function(D){return function(z){return Lt(D,z).length>0}}),contains:An(function(D){return D=D.replace(Vn,Wn),function(z){return(z.textContent||l.text(z)).indexOf(D)>-1}}),lang:An(function(D){return br.test(D||"")||Lt.error("unsupported lang: "+D),D=D.replace(Vn,Wn).toLowerCase(),function(z){var K;do if(K=I?z.lang:z.getAttribute("xml:lang")||z.getAttribute("lang"))return K=K.toLowerCase(),K===D||K.indexOf(D+"-")===0;while((z=z.parentNode)&&z.nodeType===1);return!1}}),target:function(D){var z=e.location&&e.location.hash;return z&&z.slice(1)===D.id},root:function(D){return D===F},focus:function(D){return D===Vc()&&T.hasFocus()&&!!(D.type||D.href||~D.tabIndex)},enabled:ko(!1),disabled:ko(!0),checked:function(D){return he(D,"input")&&!!D.checked||he(D,"option")&&!!D.selected},selected:function(D){return D.parentNode&&D.parentNode.selectedIndex,D.selected===!0},empty:function(D){for(D=D.firstChild;D;D=D.nextSibling)if(D.nodeType<6)return!1;return!0},parent:function(D){return!o.pseudos.empty(D)},header:function(D){return si.test(D.nodeName)},input:function(D){return ri.test(D.nodeName)},button:function(D){return he(D,"input")&&D.type==="button"||he(D,"button")},text:function(D){var z;return he(D,"input")&&D.type==="text"&&((z=D.getAttribute("type"))==null||z.toLowerCase()==="text")},first:bi(function(){return[0]}),last:bi(function(D,z){return[z-1]}),eq:bi(function(D,z,K){return[K<0?K+z:K]}),even:bi(function(D,z){for(var K=0;K<z;K+=2)D.push(K);return D}),odd:bi(function(D,z){for(var K=1;K<z;K+=2)D.push(K);return D}),lt:bi(function(D,z,K){var te;for(K<0?te=K+z:K>z?te=z:te=K;--te>=0;)D.push(te);return D}),gt:bi(function(D,z,K){for(var te=K<0?K+z:K;++te<z;)D.push(te);return D})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=Wc(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=Xc(r);function Go(){}Go.prototype=o.filters=o.pseudos,o.setFilters=new Go;function Ar(D,z){var K,te,oe,Ee,Le,ke,Ue,pt=Mt[D+" "];if(pt)return z?0:pt.slice(0);for(Le=D,ke=[],Ue=o.preFilter;Le;){(!K||(te=Bt.exec(Le)))&&(te&&(Le=Le.slice(te[0].length)||Le),ke.push(oe=[])),K=!1,(te=Tr.exec(Le))&&(K=te.shift(),oe.push({value:K,type:te[0].replace(fe," ")}),Le=Le.slice(K.length));for(Ee in o.filter)(te=Fn[Ee].exec(Le))&&(!Ue[Ee]||(te=Ue[Ee](te)))&&(K=te.shift(),oe.push({value:K,type:Ee,matches:te}),Le=Le.slice(K.length));if(!K)break}return z?Le.length:Le?Lt.error(D):Mt(D,ke).slice(0)}function Kr(D){for(var z=0,K=D.length,te="";z<K;z++)te+=D[z].value;return te}function Zr(D,z,K){var te=z.dir,oe=z.next,Ee=oe||te,Le=K&&Ee==="parentNode",ke=_e++;return z.first?function(Ue,pt,et){for(;Ue=Ue[te];)if(Ue.nodeType===1||Le)return D(Ue,pt,et);return!1}:function(Ue,pt,et){var it,mt,je=[Z,ke];if(et){for(;Ue=Ue[te];)if((Ue.nodeType===1||Le)&&D(Ue,pt,et))return!0}else for(;Ue=Ue[te];)if(Ue.nodeType===1||Le)if(mt=Ue[le]||(Ue[le]={}),oe&&he(Ue,oe))Ue=Ue[te]||Ue;else{if((it=mt[Ee])&&it[0]===Z&&it[1]===ke)return je[2]=it[2];if(mt[Ee]=je,je[2]=D(Ue,pt,et))return!0}return!1}}function Js(D){return D.length>1?function(z,K,te){for(var oe=D.length;oe--;)if(!D[oe](z,K,te))return!1;return!0}:D[0]}function qc(D,z,K){for(var te=0,oe=z.length;te<oe;te++)Lt(D,z[te],K);return K}function $r(D,z,K,te,oe){for(var Ee,Le=[],ke=0,Ue=D.length,pt=z!=null;ke<Ue;ke++)(Ee=D[ke])&&(!K||K(Ee,te,oe))&&(Le.push(Ee),pt&&z.push(ke));return Le}function Qs(D,z,K,te,oe,Ee){return te&&!te[le]&&(te=Qs(te)),oe&&!oe[le]&&(oe=Qs(oe,Ee)),An(function(Le,ke,Ue,pt){var et,it,mt,je,It=[],fn=[],Jt=ke.length,vn=Le||qc(z||"*",Ue.nodeType?[Ue]:Ue,[]),On=D&&(Le||!z)?$r(vn,It,D,Ue,pt):vn;if(K?(je=oe||(Le?D:Jt||te)?[]:ke,K(On,je,Ue,pt)):je=On,te)for(et=$r(je,fn),te(et,[],Ue,pt),it=et.length;it--;)(mt=et[it])&&(je[fn[it]]=!(On[fn[it]]=mt));if(Le){if(oe||D){if(oe){for(et=[],it=je.length;it--;)(mt=je[it])&&et.push(On[it]=mt);oe(null,je=[],et,pt)}for(it=je.length;it--;)(mt=je[it])&&(et=oe?h.call(Le,mt):It[it])>-1&&(Le[et]=!(ke[et]=mt))}}else je=$r(je===ke?je.splice(Jt,je.length):je),oe?oe(null,ke,je,pt):y.apply(ke,je)})}function ea(D){for(var z,K,te,oe=D.length,Ee=o.relative[D[0].type],Le=Ee||o.relative[" "],ke=Ee?1:0,Ue=Zr(function(it){return it===z},Le,!0),pt=Zr(function(it){return h.call(z,it)>-1},Le,!0),et=[function(it,mt,je){var It=!Ee&&(je||mt!=f)||((z=mt).nodeType?Ue(it,mt,je):pt(it,mt,je));return z=null,It}];ke<oe;ke++)if(K=o.relative[D[ke].type])et=[Zr(Js(et),K)];else{if(K=o.filter[D[ke].type].apply(null,D[ke].matches),K[le]){for(te=++ke;te<oe&&!o.relative[D[te].type];te++);return Qs(ke>1&&Js(et),ke>1&&Kr(D.slice(0,ke-1).concat({value:D[ke-2].type===" "?"*":""})).replace(fe,"$1"),K,ke<te&&ea(D.slice(ke,te)),te<oe&&ea(D=D.slice(te)),te<oe&&Kr(D))}et.push(K)}return Js(et)}function Yc(D,z){var K=z.length>0,te=D.length>0,oe=function(Ee,Le,ke,Ue,pt){var et,it,mt,je=0,It="0",fn=Ee&&[],Jt=[],vn=f,On=Ee||te&&o.find.TAG("*",pt),Gi=Z+=vn==null?1:Math.random()||.1,rn=On.length;for(pt&&(f=Le==T||Le||pt);It!==rn&&(et=On[It])!=null;It++){if(te&&et){for(it=0,!Le&&et.ownerDocument!=T&&(ai(et),ke=!I);mt=D[it++];)if(mt(et,Le||T,ke)){y.call(Ue,et);break}pt&&(Z=Gi)}K&&((et=!mt&&et)&&je--,Ee&&fn.push(et))}if(je+=It,K&&It!==je){for(it=0;mt=z[it++];)mt(fn,Jt,Le,ke);if(Ee){if(je>0)for(;It--;)fn[It]||Jt[It]||(Jt[It]=A.call(Ue));Jt=$r(Jt)}y.apply(Ue,Jt),pt&&!Ee&&Jt.length>0&&je+z.length>1&&l.uniqueSort(Ue)}return pt&&(Z=Gi,f=vn),fn};return K?An(oe):oe}function ta(D,z){var K,te=[],oe=[],Ee=lt[D+" "];if(!Ee){for(z||(z=Ar(D)),K=z.length;K--;)Ee=ea(z[K]),Ee[le]?te.push(Ee):oe.push(Ee);Ee=lt(D,Yc(oe,te)),Ee.selector=D}return Ee}function Vo(D,z,K,te){var oe,Ee,Le,ke,Ue,pt=typeof D=="function"&&D,et=!te&&Ar(D=pt.selector||D);if(K=K||[],et.length===1){if(Ee=et[0]=et[0].slice(0),Ee.length>2&&(Le=Ee[0]).type==="ID"&&z.nodeType===9&&I&&o.relative[Ee[1].type]){if(z=(o.find.ID(Le.matches[0].replace(Vn,Wn),z)||[])[0],z)pt&&(z=z.parentNode);else return K;D=D.slice(Ee.shift().value.length)}for(oe=Fn.needsContext.test(D)?0:Ee.length;oe--&&(Le=Ee[oe],!o.relative[ke=Le.type]);)if((Ue=o.find[ke])&&(te=Ue(Le.matches[0].replace(Vn,Wn),Zs.test(Ee[0].type)&&$s(z.parentNode)||z))){if(Ee.splice(oe,1),D=te.length&&Kr(Ee),!D)return y.apply(K,te),K;break}}return(pt||ta(D,et))(te,z,!I,K,!z||Zs.test(D)&&$s(z.parentNode)||z),K}E.sortStable=le.split("").sort(Wt).join("")===le,ai(),E.sortDetached=ki(function(D){return D.compareDocumentPosition(T.createElement("fieldset"))&1}),l.find=Lt,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Lt.compile=ta,Lt.select=Vo,Lt.setDocument=ai,Lt.tokenize=Ar,Lt.escape=l.escapeSelector,Lt.getText=l.text,Lt.isXML=l.isXMLDoc,Lt.selectors=l.expr,Lt.support=l.support,Lt.uniqueSort=l.uniqueSort})();var Te=function(r,o,f){for(var d=[],S=f!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(S&&l(r).is(f))break;d.push(r)}return d},xe=function(r,o){for(var f=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&f.push(r);return f},Se=l.expr.match.needsContext,dt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function gt(r,o,f){return C(o)?l.grep(r,function(d,S){return!!o.call(d,S,d)!==f}):o.nodeType?l.grep(r,function(d){return d===o!==f}):typeof o!="string"?l.grep(r,function(d){return h.call(o,d)>-1!==f}):l.filter(o,r,f)}l.filter=function(r,o,f){var d=o[0];return f&&(r=":not("+r+")"),o.length===1&&d.nodeType===1?l.find.matchesSelector(d,r)?[d]:[]:l.find.matches(r,l.grep(o,function(S){return S.nodeType===1}))},l.fn.extend({find:function(r){var o,f,d=this.length,S=this;if(typeof r!="string")return this.pushStack(l(r).filter(function(){for(o=0;o<d;o++)if(l.contains(S[o],this))return!0}));for(f=this.pushStack([]),o=0;o<d;o++)l.find(r,S[o],f);return d>1?l.uniqueSort(f):f},filter:function(r){return this.pushStack(gt(this,r||[],!1))},not:function(r){return this.pushStack(gt(this,r||[],!0))},is:function(r){return!!gt(this,typeof r=="string"&&Se.test(r)?l(r):r||[],!1).length}});var ce,ve=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Fe=l.fn.init=function(r,o,f){var d,S;if(!r)return this;if(f=f||ce,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?d=[null,r,null]:d=ve.exec(r),d&&(d[1]||!o))if(d[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(d[1],o&&o.nodeType?o.ownerDocument||o:g,!0)),dt.test(d[1])&&l.isPlainObject(o))for(d in o)C(this[d])?this[d](o[d]):this.attr(d,o[d]);return this}else return S=g.getElementById(d[2]),S&&(this[0]=S,this.length=1),this;else return!o||o.jquery?(o||f).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(C(r))return f.ready!==void 0?f.ready(r):r(l)}return l.makeArray(r,this)};Fe.prototype=l.fn,ce=l(g);var be=/^(?:parents|prev(?:Until|All))/,We={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(r){var o=l(r,this),f=o.length;return this.filter(function(){for(var d=0;d<f;d++)if(l.contains(this,o[d]))return!0})},closest:function(r,o){var f,d=0,S=this.length,y=[],T=typeof r!="string"&&l(r);if(!Se.test(r)){for(;d<S;d++)for(f=this[d];f&&f!==o;f=f.parentNode)if(f.nodeType<11&&(T?T.index(f)>-1:f.nodeType===1&&l.find.matchesSelector(f,r))){y.push(f);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(r){return r?typeof r=="string"?h.call(l(r),this[0]):h.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function qe(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}l.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return Te(r,"parentNode")},parentsUntil:function(r,o,f){return Te(r,"parentNode",f)},next:function(r){return qe(r,"nextSibling")},prev:function(r){return qe(r,"previousSibling")},nextAll:function(r){return Te(r,"nextSibling")},prevAll:function(r){return Te(r,"previousSibling")},nextUntil:function(r,o,f){return Te(r,"nextSibling",f)},prevUntil:function(r,o,f){return Te(r,"previousSibling",f)},siblings:function(r){return xe((r.parentNode||{}).firstChild,r)},children:function(r){return xe(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(he(r,"template")&&(r=r.content||r),l.merge([],r.childNodes))}},function(r,o){l.fn[r]=function(f,d){var S=l.map(this,o,f);return r.slice(-5)!=="Until"&&(d=f),d&&typeof d=="string"&&(S=l.filter(d,S)),this.length>1&&(We[r]||l.uniqueSort(S),be.test(r)&&S.reverse()),this.pushStack(S)}});var Qe=/[^\x20\t\r\n\f]+/g;function wt(r){var o={};return l.each(r.match(Qe)||[],function(f,d){o[d]=!0}),o}l.Callbacks=function(r){r=typeof r=="string"?wt(r):l.extend({},r);var o,f,d,S,y=[],T=[],F=-1,I=function(){for(S=S||r.once,d=o=!0;T.length;F=-1)for(f=T.shift();++F<y.length;)y[F].apply(f[0],f[1])===!1&&r.stopOnFalse&&(F=y.length,f=!1);r.memory||(f=!1),o=!1,S&&(f?y=[]:y="")},H={add:function(){return y&&(f&&!o&&(F=y.length-1,T.push(f)),function re(le){l.each(le,function(Z,_e){C(_e)?(!r.unique||!H.has(_e))&&y.push(_e):_e&&_e.length&&N(_e)!=="string"&&re(_e)})}(arguments),f&&!o&&I()),this},remove:function(){return l.each(arguments,function(re,le){for(var Z;(Z=l.inArray(le,y,Z))>-1;)y.splice(Z,1),Z<=F&&F--}),this},has:function(re){return re?l.inArray(re,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return S=T=[],y=f="",this},disabled:function(){return!y},lock:function(){return S=T=[],!f&&!o&&(y=f=""),this},locked:function(){return!!S},fireWith:function(re,le){return S||(le=le||[],le=[re,le.slice?le.slice():le],T.push(le),o||I()),this},fire:function(){return H.fireWith(this,arguments),this},fired:function(){return!!d}};return H};function rt(r){return r}function B(r){throw r}function Vt(r,o,f,d){var S;try{r&&C(S=r.promise)?S.call(r).done(o).fail(f):r&&C(S=r.then)?S.call(r,o,f):o.apply(void 0,[r].slice(d))}catch(y){f.apply(void 0,[y])}}l.extend({Deferred:function(r){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],f="pending",d={state:function(){return f},always:function(){return S.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(T){l.each(o,function(F,I){var H=C(y[I[4]])&&y[I[4]];S[I[1]](function(){var re=H&&H.apply(this,arguments);re&&C(re.promise)?re.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[I[0]+"With"](this,H?[re]:arguments)})}),y=null}).promise()},then:function(y,T,F){var I=0;function H(re,le,Z,_e){return function(){var tt=this,Mt=arguments,lt=function(){var Wt,Un;if(!(re<I)){if(Wt=Z.apply(tt,Mt),Wt===le.promise())throw new TypeError("Thenable self-resolution");Un=Wt&&(typeof Wt=="object"||typeof Wt=="function")&&Wt.then,C(Un)?_e?Un.call(Wt,H(I,le,rt,_e),H(I,le,B,_e)):(I++,Un.call(Wt,H(I,le,rt,_e),H(I,le,B,_e),H(I,le,rt,le.notifyWith))):(Z!==rt&&(tt=void 0,Mt=[Wt]),(_e||le.resolveWith)(tt,Mt))}},Kt=_e?lt:function(){try{lt()}catch(Wt){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Wt,Kt.error),re+1>=I&&(Z!==B&&(tt=void 0,Mt=[Wt]),le.rejectWith(tt,Mt))}};re?Kt():(l.Deferred.getErrorHook?Kt.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Kt.error=l.Deferred.getStackHook()),e.setTimeout(Kt))}}return l.Deferred(function(re){o[0][3].add(H(0,re,C(F)?F:rt,re.notifyWith)),o[1][3].add(H(0,re,C(y)?y:rt)),o[2][3].add(H(0,re,C(T)?T:B))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},S={};return l.each(o,function(y,T){var F=T[2],I=T[5];d[T[1]]=F.add,I&&F.add(function(){f=I},o[3-y][2].disable,o[3-y][3].disable,o[0][2].lock,o[0][3].lock),F.add(T[3].fire),S[T[0]]=function(){return S[T[0]+"With"](this===S?void 0:this,arguments),this},S[T[0]+"With"]=F.fireWith}),d.promise(S),r&&r.call(S,S),S},when:function(r){var o=arguments.length,f=o,d=Array(f),S=a.call(arguments),y=l.Deferred(),T=function(F){return function(I){d[F]=this,S[F]=arguments.length>1?a.call(arguments):I,--o||y.resolveWith(d,S)}};if(o<=1&&(Vt(r,y.done(T(f)).resolve,y.reject,!o),y.state()==="pending"||C(S[f]&&S[f].then)))return y.then();for(;f--;)Vt(S[f],T(f),y.reject);return y.promise()}});var ot=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&ot.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},l.readyException=function(r){e.setTimeout(function(){throw r})};var ht=l.Deferred();l.fn.ready=function(r){return ht.then(r).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(r!==!0&&--l.readyWait>0)&&ht.resolveWith(g,[l]))}}),l.ready.then=ht.then;function Ye(){g.removeEventListener("DOMContentLoaded",Ye),e.removeEventListener("load",Ye),l.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(l.ready):(g.addEventListener("DOMContentLoaded",Ye),e.addEventListener("load",Ye));var ft=function(r,o,f,d,S,y,T){var F=0,I=r.length,H=f==null;if(N(f)==="object"){S=!0;for(F in f)ft(r,o,F,f[F],!0,y,T)}else if(d!==void 0&&(S=!0,C(d)||(T=!0),H&&(T?(o.call(r,d),o=null):(H=o,o=function(re,le,Z){return H.call(l(re),Z)})),o))for(;F<I;F++)o(r[F],f,T?d:d.call(r[F],F,o(r[F],f)));return S?r:H?o.call(r):I?o(r[0],f):y},Ze=/^-ms-/,U=/-([a-z])/g;function w(r,o){return o.toUpperCase()}function j(r){return r.replace(Ze,"ms-").replace(U,w)}var ue=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function ge(){this.expando=l.expando+ge.uid++}ge.uid=1,ge.prototype={cache:function(r){var o=r[this.expando];return o||(o={},ue(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,f){var d,S=this.cache(r);if(typeof o=="string")S[j(o)]=f;else for(d in o)S[j(d)]=o[d];return S},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][j(o)]},access:function(r,o,f){return o===void 0||o&&typeof o=="string"&&f===void 0?this.get(r,o):(this.set(r,o,f),f!==void 0?f:o)},remove:function(r,o){var f,d=r[this.expando];if(d!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(j):(o=j(o),o=o in d?[o]:o.match(Qe)||[]),f=o.length;f--;)delete d[o[f]];(o===void 0||l.isEmptyObject(d))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var X=new ge,Pe=new ge,Re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Oe=/[A-Z]/g;function St(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Re.test(r)?JSON.parse(r):r}function Me(r,o,f){var d;if(f===void 0&&r.nodeType===1)if(d="data-"+o.replace(Oe,"-$&").toLowerCase(),f=r.getAttribute(d),typeof f=="string"){try{f=St(f)}catch{}Pe.set(r,o,f)}else f=void 0;return f}l.extend({hasData:function(r){return Pe.hasData(r)||X.hasData(r)},data:function(r,o,f){return Pe.access(r,o,f)},removeData:function(r,o){Pe.remove(r,o)},_data:function(r,o,f){return X.access(r,o,f)},_removeData:function(r,o){X.remove(r,o)}}),l.fn.extend({data:function(r,o){var f,d,S,y=this[0],T=y&&y.attributes;if(r===void 0){if(this.length&&(S=Pe.get(y),y.nodeType===1&&!X.get(y,"hasDataAttrs"))){for(f=T.length;f--;)T[f]&&(d=T[f].name,d.indexOf("data-")===0&&(d=j(d.slice(5)),Me(y,d,S[d])));X.set(y,"hasDataAttrs",!0)}return S}return typeof r=="object"?this.each(function(){Pe.set(this,r)}):ft(this,function(F){var I;if(y&&F===void 0)return I=Pe.get(y,r),I!==void 0||(I=Me(y,r),I!==void 0)?I:void 0;this.each(function(){Pe.set(this,r,F)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){Pe.remove(this,r)})}}),l.extend({queue:function(r,o,f){var d;if(r)return o=(o||"fx")+"queue",d=X.get(r,o),f&&(!d||Array.isArray(f)?d=X.access(r,o,l.makeArray(f)):d.push(f)),d||[]},dequeue:function(r,o){o=o||"fx";var f=l.queue(r,o),d=f.length,S=f.shift(),y=l._queueHooks(r,o),T=function(){l.dequeue(r,o)};S==="inprogress"&&(S=f.shift(),d--),S&&(o==="fx"&&f.unshift("inprogress"),delete y.stop,S.call(r,T,y)),!d&&y&&y.empty.fire()},_queueHooks:function(r,o){var f=o+"queueHooks";return X.get(r,f)||X.access(r,f,{empty:l.Callbacks("once memory").add(function(){X.remove(r,[o+"queue",f])})})}}),l.fn.extend({queue:function(r,o){var f=2;return typeof r!="string"&&(o=r,r="fx",f--),arguments.length<f?l.queue(this[0],r):o===void 0?this:this.each(function(){var d=l.queue(this,r,o);l._queueHooks(this,r),r==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,r)})},dequeue:function(r){return this.each(function(){l.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var f,d=1,S=l.Deferred(),y=this,T=this.length,F=function(){--d||S.resolveWith(y,[y])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";T--;)f=X.get(y[T],r+"queueHooks"),f&&f.empty&&(d++,f.empty.add(F));return F(),S.promise(o)}});var Be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ke=new RegExp("^(?:([+-])=|)("+Be+")([a-z%]*)$","i"),Xe=["Top","Right","Bottom","Left"],De=g.documentElement,at=function(r){return l.contains(r.ownerDocument,r)},st={composed:!0};De.getRootNode&&(at=function(r){return l.contains(r.ownerDocument,r)||r.getRootNode(st)===r.ownerDocument});var Ct=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&at(r)&&l.css(r,"display")==="none"};function k(r,o,f,d){var S,y,T=20,F=d?function(){return d.cur()}:function(){return l.css(r,o,"")},I=F(),H=f&&f[3]||(l.cssNumber[o]?"":"px"),re=r.nodeType&&(l.cssNumber[o]||H!=="px"&&+I)&&Ke.exec(l.css(r,o));if(re&&re[3]!==H){for(I=I/2,H=H||re[3],re=+I||1;T--;)l.style(r,o,re+H),(1-y)*(1-(y=F()/I||.5))<=0&&(T=0),re=re/y;re=re*2,l.style(r,o,re+H),f=f||[]}return f&&(re=+re||+I||0,S=f[1]?re+(f[1]+1)*f[2]:+f[2],d&&(d.unit=H,d.start=re,d.end=S)),S}var Ie={};function se(r){var o,f=r.ownerDocument,d=r.nodeName,S=Ie[d];return S||(o=f.body.appendChild(f.createElement(d)),S=l.css(o,"display"),o.parentNode.removeChild(o),S==="none"&&(S="block"),Ie[d]=S,S)}function de(r,o){for(var f,d,S=[],y=0,T=r.length;y<T;y++)d=r[y],d.style&&(f=d.style.display,o?(f==="none"&&(S[y]=X.get(d,"display")||null,S[y]||(d.style.display="")),d.style.display===""&&Ct(d)&&(S[y]=se(d))):f!=="none"&&(S[y]="none",X.set(d,"display",f)));for(y=0;y<T;y++)S[y]!=null&&(r[y].style.display=S[y]);return r}l.fn.extend({show:function(){return de(this,!0)},hide:function(){return de(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Ct(this)?l(this).show():l(this).hide()})}});var Ae=/^(?:checkbox|radio)$/i,Ne=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,_t=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=g.createDocumentFragment(),o=r.appendChild(g.createElement("div")),f=g.createElement("input");f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),o.appendChild(f),E.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",E.option=!!o.lastChild})();var Et={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Et.tbody=Et.tfoot=Et.colgroup=Et.caption=Et.thead,Et.th=Et.td,E.option||(Et.optgroup=Et.option=[1,"<select multiple='multiple'>","</select>"]);function Dt(r,o){var f;return typeof r.getElementsByTagName<"u"?f=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?f=r.querySelectorAll(o||"*"):f=[],o===void 0||o&&he(r,o)?l.merge([r],f):f}function xt(r,o){for(var f=0,d=r.length;f<d;f++)X.set(r[f],"globalEval",!o||X.get(o[f],"globalEval"))}var Zt=/<|&#?\w+;/;function gn(r,o,f,d,S){for(var y,T,F,I,H,re,le=o.createDocumentFragment(),Z=[],_e=0,tt=r.length;_e<tt;_e++)if(y=r[_e],y||y===0)if(N(y)==="object")l.merge(Z,y.nodeType?[y]:y);else if(!Zt.test(y))Z.push(o.createTextNode(y));else{for(T=T||le.appendChild(o.createElement("div")),F=(Ne.exec(y)||["",""])[1].toLowerCase(),I=Et[F]||Et._default,T.innerHTML=I[1]+l.htmlPrefilter(y)+I[2],re=I[0];re--;)T=T.lastChild;l.merge(Z,T.childNodes),T=le.firstChild,T.textContent=""}for(le.textContent="",_e=0;y=Z[_e++];){if(d&&l.inArray(y,d)>-1){S&&S.push(y);continue}if(H=at(y),T=Dt(le.appendChild(y),"script"),H&&xt(T),f)for(re=0;y=T[re++];)_t.test(y.type||"")&&f.push(y)}return le}var vr=/^([^.]*)(?:\.(.+)|)/;function Gn(){return!0}function cn(){return!1}function xi(r,o,f,d,S,y){var T,F;if(typeof o=="object"){typeof f!="string"&&(d=d||f,f=void 0);for(F in o)xi(r,F,f,d,o[F],y);return r}if(d==null&&S==null?(S=f,d=f=void 0):S==null&&(typeof f=="string"?(S=d,d=void 0):(S=d,d=f,f=void 0)),S===!1)S=cn;else if(!S)return r;return y===1&&(T=S,S=function(I){return l().off(I),T.apply(this,arguments)},S.guid=T.guid||(T.guid=l.guid++)),r.each(function(){l.event.add(this,o,S,d,f)})}l.event={global:{},add:function(r,o,f,d,S){var y,T,F,I,H,re,le,Z,_e,tt,Mt,lt=X.get(r);if(ue(r))for(f.handler&&(y=f,f=y.handler,S=y.selector),S&&l.find.matchesSelector(De,S),f.guid||(f.guid=l.guid++),(I=lt.events)||(I=lt.events=Object.create(null)),(T=lt.handle)||(T=lt.handle=function(Kt){return typeof l<"u"&&l.event.triggered!==Kt.type?l.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Qe)||[""],H=o.length;H--;)F=vr.exec(o[H])||[],_e=Mt=F[1],tt=(F[2]||"").split(".").sort(),_e&&(le=l.event.special[_e]||{},_e=(S?le.delegateType:le.bindType)||_e,le=l.event.special[_e]||{},re=l.extend({type:_e,origType:Mt,data:d,handler:f,guid:f.guid,selector:S,needsContext:S&&l.expr.match.needsContext.test(S),namespace:tt.join(".")},y),(Z=I[_e])||(Z=I[_e]=[],Z.delegateCount=0,(!le.setup||le.setup.call(r,d,tt,T)===!1)&&r.addEventListener&&r.addEventListener(_e,T)),le.add&&(le.add.call(r,re),re.handler.guid||(re.handler.guid=f.guid)),S?Z.splice(Z.delegateCount++,0,re):Z.push(re),l.event.global[_e]=!0)},remove:function(r,o,f,d,S){var y,T,F,I,H,re,le,Z,_e,tt,Mt,lt=X.hasData(r)&&X.get(r);if(!(!lt||!(I=lt.events))){for(o=(o||"").match(Qe)||[""],H=o.length;H--;){if(F=vr.exec(o[H])||[],_e=Mt=F[1],tt=(F[2]||"").split(".").sort(),!_e){for(_e in I)l.event.remove(r,_e+o[H],f,d,!0);continue}for(le=l.event.special[_e]||{},_e=(d?le.delegateType:le.bindType)||_e,Z=I[_e]||[],F=F[2]&&new RegExp("(^|\\.)"+tt.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=y=Z.length;y--;)re=Z[y],(S||Mt===re.origType)&&(!f||f.guid===re.guid)&&(!F||F.test(re.namespace))&&(!d||d===re.selector||d==="**"&&re.selector)&&(Z.splice(y,1),re.selector&&Z.delegateCount--,le.remove&&le.remove.call(r,re));T&&!Z.length&&((!le.teardown||le.teardown.call(r,tt,lt.handle)===!1)&&l.removeEvent(r,_e,lt.handle),delete I[_e])}l.isEmptyObject(I)&&X.remove(r,"handle events")}},dispatch:function(r){var o,f,d,S,y,T,F=new Array(arguments.length),I=l.event.fix(r),H=(X.get(this,"events")||Object.create(null))[I.type]||[],re=l.event.special[I.type]||{};for(F[0]=I,o=1;o<arguments.length;o++)F[o]=arguments[o];if(I.delegateTarget=this,!(re.preDispatch&&re.preDispatch.call(this,I)===!1)){for(T=l.event.handlers.call(this,I,H),o=0;(S=T[o++])&&!I.isPropagationStopped();)for(I.currentTarget=S.elem,f=0;(y=S.handlers[f++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||y.namespace===!1||I.rnamespace.test(y.namespace))&&(I.handleObj=y,I.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(S.elem,F),d!==void 0&&(I.result=d)===!1&&(I.preventDefault(),I.stopPropagation()));return re.postDispatch&&re.postDispatch.call(this,I),I.result}},handlers:function(r,o){var f,d,S,y,T,F=[],I=o.delegateCount,H=r.target;if(I&&H.nodeType&&!(r.type==="click"&&r.button>=1)){for(;H!==this;H=H.parentNode||this)if(H.nodeType===1&&!(r.type==="click"&&H.disabled===!0)){for(y=[],T={},f=0;f<I;f++)d=o[f],S=d.selector+" ",T[S]===void 0&&(T[S]=d.needsContext?l(S,this).index(H)>-1:l.find(S,this,null,[H]).length),T[S]&&y.push(d);y.length&&F.push({elem:H,handlers:y})}}return H=this,I<o.length&&F.push({elem:H,handlers:o.slice(I)}),F},addProp:function(r,o){Object.defineProperty(l.Event.prototype,r,{enumerable:!0,configurable:!0,get:C(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(f){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(r){return r[l.expando]?r:new l.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Ae.test(o.type)&&o.click&&he(o,"input")&&Si(o,"click",!0),!1},trigger:function(r){var o=this||r;return Ae.test(o.type)&&o.click&&he(o,"input")&&Si(o,"click"),!0},_default:function(r){var o=r.target;return Ae.test(o.type)&&o.click&&he(o,"input")&&X.get(o,"click")||he(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Si(r,o,f){if(!f){X.get(r,o)===void 0&&l.event.add(r,o,Gn);return}X.set(r,o,!1),l.event.add(r,o,{namespace:!1,handler:function(d){var S,y=X.get(this,o);if(d.isTrigger&1&&this[o]){if(y)(l.event.special[o]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),X.set(this,o,y),this[o](),S=X.get(this,o),X.set(this,o,!1),y!==S)return d.stopImmediatePropagation(),d.preventDefault(),S}else y&&(X.set(this,o,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Gn)}})}l.removeEvent=function(r,o,f){r.removeEventListener&&r.removeEventListener(o,f)},l.Event=function(r,o){if(!(this instanceof l.Event))return new l.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?Gn:cn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&l.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:cn,isPropagationStopped:cn,isImmediatePropagationStopped:cn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=Gn,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=Gn,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=Gn,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(r,o){function f(d){if(g.documentMode){var S=X.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,S(d),y.target===y.currentTarget&&S(y)}else l.event.simulate(o,d.target,l.event.fix(d))}l.event.special[r]={setup:function(){var d;if(Si(this,r,!0),g.documentMode)d=X.get(this,o),d||this.addEventListener(o,f),X.set(this,o,(d||0)+1);else return!1},trigger:function(){return Si(this,r),!0},teardown:function(){var d;if(g.documentMode)d=X.get(this,o)-1,d?X.set(this,o,d):(this.removeEventListener(o,f),X.remove(this,o));else return!1},_default:function(d){return X.get(d.target,r)},delegateType:o},l.event.special[o]={setup:function(){var d=this.ownerDocument||this.document||this,S=g.documentMode?this:d,y=X.get(S,o);y||(g.documentMode?this.addEventListener(o,f):d.addEventListener(r,f,!0)),X.set(S,o,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,S=g.documentMode?this:d,y=X.get(S,o)-1;y?X.set(S,o,y):(g.documentMode?this.removeEventListener(o,f):d.removeEventListener(r,f,!0),X.remove(S,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){l.event.special[r]={delegateType:o,bindType:o,handle:function(f){var d,S=this,y=f.relatedTarget,T=f.handleObj;return(!y||y!==S&&!l.contains(S,y))&&(f.type=T.origType,d=T.handler.apply(this,arguments),f.type=o),d}}}),l.fn.extend({on:function(r,o,f,d){return xi(this,r,o,f,d)},one:function(r,o,f,d){return xi(this,r,o,f,d,1)},off:function(r,o,f){var d,S;if(r&&r.preventDefault&&r.handleObj)return d=r.handleObj,l(r.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof r=="object"){for(S in r)this.off(S,o,r[S]);return this}return(o===!1||typeof o=="function")&&(f=o,o=void 0),f===!1&&(f=cn),this.each(function(){l.event.remove(this,r,f,o)})}});var Vr=/<script|<style|<link/i,Hi=/checked\s*(?:[^=]|=\s*.checked.)/i,Wr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Mi(r,o){return he(r,"table")&&he(o.nodeType!==11?o:o.firstChild,"tr")&&l(r).children("tbody")[0]||r}function Xr(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function qr(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Yr(r,o){var f,d,S,y,T,F,I;if(o.nodeType===1){if(X.hasData(r)&&(y=X.get(r),I=y.events,I)){X.remove(o,"handle events");for(S in I)for(f=0,d=I[S].length;f<d;f++)l.event.add(o,S,I[S][f])}Pe.hasData(r)&&(T=Pe.access(r),F=l.extend({},T),Pe.set(o,F))}}function Hs(r,o){var f=o.nodeName.toLowerCase();f==="input"&&Ae.test(r.type)?o.checked=r.checked:(f==="input"||f==="textarea")&&(o.defaultValue=r.defaultValue)}function ni(r,o,f,d){o=u(o);var S,y,T,F,I,H,re=0,le=r.length,Z=le-1,_e=o[0],tt=C(_e);if(tt||le>1&&typeof _e=="string"&&!E.checkClone&&Hi.test(_e))return r.each(function(Mt){var lt=r.eq(Mt);tt&&(o[0]=_e.call(this,Mt,lt.html())),ni(lt,o,f,d)});if(le&&(S=gn(o,r[0].ownerDocument,!1,r,d),y=S.firstChild,S.childNodes.length===1&&(S=y),y||d)){for(T=l.map(Dt(S,"script"),Xr),F=T.length;re<le;re++)I=S,re!==Z&&(I=l.clone(I,!0,!0),F&&l.merge(T,Dt(I,"script"))),f.call(r[re],I,re);if(F)for(H=T[T.length-1].ownerDocument,l.map(T,qr),re=0;re<F;re++)I=T[re],_t.test(I.type||"")&&!X.access(I,"globalEval")&&l.contains(H,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?l._evalUrl&&!I.noModule&&l._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},H):L(I.textContent.replace(Wr,""),I,H))}return r}function R(r,o,f){for(var d,S=o?l.filter(o,r):r,y=0;(d=S[y])!=null;y++)!f&&d.nodeType===1&&l.cleanData(Dt(d)),d.parentNode&&(f&&at(d)&&xt(Dt(d,"script")),d.parentNode.removeChild(d));return r}l.extend({htmlPrefilter:function(r){return r},clone:function(r,o,f){var d,S,y,T,F=r.cloneNode(!0),I=at(r);if(!E.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!l.isXMLDoc(r))for(T=Dt(F),y=Dt(r),d=0,S=y.length;d<S;d++)Hs(y[d],T[d]);if(o)if(f)for(y=y||Dt(r),T=T||Dt(F),d=0,S=y.length;d<S;d++)Yr(y[d],T[d]);else Yr(r,F);return T=Dt(F,"script"),T.length>0&&xt(T,!I&&Dt(r,"script")),F},cleanData:function(r){for(var o,f,d,S=l.event.special,y=0;(f=r[y])!==void 0;y++)if(ue(f)){if(o=f[X.expando]){if(o.events)for(d in o.events)S[d]?l.event.remove(f,d):l.removeEvent(f,d,o.handle);f[X.expando]=void 0}f[Pe.expando]&&(f[Pe.expando]=void 0)}}}),l.fn.extend({detach:function(r){return R(this,r,!0)},remove:function(r){return R(this,r)},text:function(r){return ft(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return ni(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Mi(this,r);o.appendChild(r)}})},prepend:function(){return ni(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Mi(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return ni(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return ni(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(l.cleanData(Dt(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return l.clone(this,r,o)})},html:function(r){return ft(this,function(o){var f=this[0]||{},d=0,S=this.length;if(o===void 0&&f.nodeType===1)return f.innerHTML;if(typeof o=="string"&&!Vr.test(o)&&!Et[(Ne.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;d<S;d++)f=this[d]||{},f.nodeType===1&&(l.cleanData(Dt(f,!1)),f.innerHTML=o);f=0}catch{}}f&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return ni(this,arguments,function(o){var f=this.parentNode;l.inArray(this,r)<0&&(l.cleanData(Dt(this)),f&&f.replaceChild(o,this))},r)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){l.fn[r]=function(f){for(var d,S=[],y=l(f),T=y.length-1,F=0;F<=T;F++)d=F===T?this:this.clone(!0),l(y[F])[o](d),c.apply(S,d.get());return this.pushStack(S)}});var G=new RegExp("^("+Be+")(?!px)[a-z%]+$","i"),$=/^--/,J=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},W=function(r,o,f){var d,S,y={};for(S in o)y[S]=r.style[S],r.style[S]=o[S];d=f.call(r);for(S in o)r.style[S]=y[S];return d},ye=new RegExp(Xe.join("|"),"i");(function(){function r(){if(H){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",H.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",De.appendChild(I).appendChild(H);var re=e.getComputedStyle(H);f=re.top!=="1%",F=o(re.marginLeft)===12,H.style.right="60%",y=o(re.right)===36,d=o(re.width)===36,H.style.position="absolute",S=o(H.offsetWidth/3)===12,De.removeChild(I),H=null}}function o(re){return Math.round(parseFloat(re))}var f,d,S,y,T,F,I=g.createElement("div"),H=g.createElement("div");H.style&&(H.style.backgroundClip="content-box",H.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=H.style.backgroundClip==="content-box",l.extend(E,{boxSizingReliable:function(){return r(),d},pixelBoxStyles:function(){return r(),y},pixelPosition:function(){return r(),f},reliableMarginLeft:function(){return r(),F},scrollboxSize:function(){return r(),S},reliableTrDimensions:function(){var re,le,Z,_e;return T==null&&(re=g.createElement("table"),le=g.createElement("tr"),Z=g.createElement("div"),re.style.cssText="position:absolute;left:-11111px;border-collapse:separate",le.style.cssText="box-sizing:content-box;border:1px solid",le.style.height="1px",Z.style.height="9px",Z.style.display="block",De.appendChild(re).appendChild(le).appendChild(Z),_e=e.getComputedStyle(le),T=parseInt(_e.height,10)+parseInt(_e.borderTopWidth,10)+parseInt(_e.borderBottomWidth,10)===le.offsetHeight,De.removeChild(re)),T}}))})();function we(r,o,f){var d,S,y,T,F=$.test(o),I=r.style;return f=f||J(r),f&&(T=f.getPropertyValue(o)||f[o],F&&T&&(T=T.replace(fe,"$1")||void 0),T===""&&!at(r)&&(T=l.style(r,o)),!E.pixelBoxStyles()&&G.test(T)&&ye.test(o)&&(d=I.width,S=I.minWidth,y=I.maxWidth,I.minWidth=I.maxWidth=I.width=T,T=f.width,I.width=d,I.minWidth=S,I.maxWidth=y)),T!==void 0?T+"":T}function ze(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var He=["Webkit","Moz","ms"],$e=g.createElement("div").style,Je={};function Ve(r){for(var o=r[0].toUpperCase()+r.slice(1),f=He.length;f--;)if(r=He[f]+o,r in $e)return r}function Tt(r){var o=l.cssProps[r]||Je[r];return o||(r in $e?r:Je[r]=Ve(r)||r)}var Ut=/^(none|table(?!-c[ea]).+)/,Ot={position:"absolute",visibility:"hidden",display:"block"},$t={letterSpacing:"0",fontWeight:"400"};function bt(r,o,f){var d=Ke.exec(o);return d?Math.max(0,d[2]-(f||0))+(d[3]||"px"):o}function Ge(r,o,f,d,S,y){var T=o==="width"?1:0,F=0,I=0,H=0;if(f===(d?"border":"content"))return 0;for(;T<4;T+=2)f==="margin"&&(H+=l.css(r,f+Xe[T],!0,S)),d?(f==="content"&&(I-=l.css(r,"padding"+Xe[T],!0,S)),f!=="margin"&&(I-=l.css(r,"border"+Xe[T]+"Width",!0,S))):(I+=l.css(r,"padding"+Xe[T],!0,S),f!=="padding"?I+=l.css(r,"border"+Xe[T]+"Width",!0,S):F+=l.css(r,"border"+Xe[T]+"Width",!0,S));return!d&&y>=0&&(I+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-y-I-F-.5))||0),I+H}function kt(r,o,f){var d=J(r),S=!E.boxSizingReliable()||f,y=S&&l.css(r,"boxSizing",!1,d)==="border-box",T=y,F=we(r,o,d),I="offset"+o[0].toUpperCase()+o.slice(1);if(G.test(F)){if(!f)return F;F="auto"}return(!E.boxSizingReliable()&&y||!E.reliableTrDimensions()&&he(r,"tr")||F==="auto"||!parseFloat(F)&&l.css(r,"display",!1,d)==="inline")&&r.getClientRects().length&&(y=l.css(r,"boxSizing",!1,d)==="border-box",T=I in r,T&&(F=r[I])),F=parseFloat(F)||0,F+Ge(r,o,f||(y?"border":"content"),T,d,F)+"px"}l.extend({cssHooks:{opacity:{get:function(r,o){if(o){var f=we(r,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,f,d){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var S,y,T,F=j(o),I=$.test(o),H=r.style;if(I||(o=Tt(F)),T=l.cssHooks[o]||l.cssHooks[F],f!==void 0){if(y=typeof f,y==="string"&&(S=Ke.exec(f))&&S[1]&&(f=k(r,o,S),y="number"),f==null||f!==f)return;y==="number"&&!I&&(f+=S&&S[3]||(l.cssNumber[F]?"":"px")),!E.clearCloneStyle&&f===""&&o.indexOf("background")===0&&(H[o]="inherit"),(!T||!("set"in T)||(f=T.set(r,f,d))!==void 0)&&(I?H.setProperty(o,f):H[o]=f)}else return T&&"get"in T&&(S=T.get(r,!1,d))!==void 0?S:H[o]}},css:function(r,o,f,d){var S,y,T,F=j(o),I=$.test(o);return I||(o=Tt(F)),T=l.cssHooks[o]||l.cssHooks[F],T&&"get"in T&&(S=T.get(r,!0,f)),S===void 0&&(S=we(r,o,d)),S==="normal"&&o in $t&&(S=$t[o]),f===""||f?(y=parseFloat(S),f===!0||isFinite(y)?y||0:S):S}}),l.each(["height","width"],function(r,o){l.cssHooks[o]={get:function(f,d,S){if(d)return Ut.test(l.css(f,"display"))&&(!f.getClientRects().length||!f.getBoundingClientRect().width)?W(f,Ot,function(){return kt(f,o,S)}):kt(f,o,S)},set:function(f,d,S){var y,T=J(f),F=!E.scrollboxSize()&&T.position==="absolute",I=F||S,H=I&&l.css(f,"boxSizing",!1,T)==="border-box",re=S?Ge(f,o,S,H,T):0;return H&&F&&(re-=Math.ceil(f["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(T[o])-Ge(f,o,"border",!1,T)-.5)),re&&(y=Ke.exec(d))&&(y[3]||"px")!=="px"&&(f.style[o]=d,d=l.css(f,o)),bt(f,d,re)}}}),l.cssHooks.marginLeft=ze(E.reliableMarginLeft,function(r,o){if(o)return(parseFloat(we(r,"marginLeft"))||r.getBoundingClientRect().left-W(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(r,o){l.cssHooks[r+o]={expand:function(f){for(var d=0,S={},y=typeof f=="string"?f.split(" "):[f];d<4;d++)S[r+Xe[d]+o]=y[d]||y[d-2]||y[0];return S}},r!=="margin"&&(l.cssHooks[r+o].set=bt)}),l.fn.extend({css:function(r,o){return ft(this,function(f,d,S){var y,T,F={},I=0;if(Array.isArray(d)){for(y=J(f),T=d.length;I<T;I++)F[d[I]]=l.css(f,d[I],!1,y);return F}return S!==void 0?l.style(f,d,S):l.css(f,d)},r,o,arguments.length>1)}});function nt(r,o,f,d,S){return new nt.prototype.init(r,o,f,d,S)}l.Tween=nt,nt.prototype={constructor:nt,init:function(r,o,f,d,S,y){this.elem=r,this.prop=f,this.easing=S||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[f]?"":"px")},cur:function(){var r=nt.propHooks[this.prop];return r&&r.get?r.get(this):nt.propHooks._default.get(this)},run:function(r){var o,f=nt.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):nt.propHooks._default.set(this),this}},nt.prototype.init.prototype=nt.prototype,nt.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=l.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){l.fx.step[r.prop]?l.fx.step[r.prop](r):r.elem.nodeType===1&&(l.cssHooks[r.prop]||r.elem.style[Tt(r.prop)]!=null)?l.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},nt.propHooks.scrollTop=nt.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},l.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},l.fx=nt.prototype.init,l.fx.step={};var Yt,Tn,tn=/^(?:toggle|show|hide)$/,xr=/queueHooks$/;function Nt(){Tn&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Nt):e.setTimeout(Nt,l.fx.interval),l.fx.tick())}function bn(){return e.setTimeout(function(){Yt=void 0}),Yt=Date.now()}function ii(r,o){var f,d=0,S={height:r};for(o=o?1:0;d<4;d+=2-o)f=Xe[d],S["margin"+f]=S["padding"+f]=r;return o&&(S.opacity=S.width=r),S}function nn(r,o,f){for(var d,S=(un.tweeners[o]||[]).concat(un.tweeners["*"]),y=0,T=S.length;y<T;y++)if(d=S[y].call(f,o,r))return d}function Sr(r,o,f){var d,S,y,T,F,I,H,re,le="width"in o||"height"in o,Z=this,_e={},tt=r.style,Mt=r.nodeType&&Ct(r),lt=X.get(r,"fxshow");f.queue||(T=l._queueHooks(r,"fx"),T.unqueued==null&&(T.unqueued=0,F=T.empty.fire,T.empty.fire=function(){T.unqueued||F()}),T.unqueued++,Z.always(function(){Z.always(function(){T.unqueued--,l.queue(r,"fx").length||T.empty.fire()})}));for(d in o)if(S=o[d],tn.test(S)){if(delete o[d],y=y||S==="toggle",S===(Mt?"hide":"show"))if(S==="show"&&lt&&lt[d]!==void 0)Mt=!0;else continue;_e[d]=lt&&lt[d]||l.style(r,d)}if(I=!l.isEmptyObject(o),!(!I&&l.isEmptyObject(_e))){le&&r.nodeType===1&&(f.overflow=[tt.overflow,tt.overflowX,tt.overflowY],H=lt&&lt.display,H==null&&(H=X.get(r,"display")),re=l.css(r,"display"),re==="none"&&(H?re=H:(de([r],!0),H=r.style.display||H,re=l.css(r,"display"),de([r]))),(re==="inline"||re==="inline-block"&&H!=null)&&l.css(r,"float")==="none"&&(I||(Z.done(function(){tt.display=H}),H==null&&(re=tt.display,H=re==="none"?"":re)),tt.display="inline-block")),f.overflow&&(tt.overflow="hidden",Z.always(function(){tt.overflow=f.overflow[0],tt.overflowX=f.overflow[1],tt.overflowY=f.overflow[2]})),I=!1;for(d in _e)I||(lt?"hidden"in lt&&(Mt=lt.hidden):lt=X.access(r,"fxshow",{display:H}),y&&(lt.hidden=!Mt),Mt&&de([r],!0),Z.done(function(){Mt||de([r]),X.remove(r,"fxshow");for(d in _e)l.style(r,d,_e[d])})),I=nn(Mt?lt[d]:0,d,Z),d in lt||(lt[d]=I.start,Mt&&(I.end=I.start,I.start=0))}}function ks(r,o){var f,d,S,y,T;for(f in r)if(d=j(f),S=o[d],y=r[f],Array.isArray(y)&&(S=y[1],y=r[f]=y[0]),f!==d&&(r[d]=y,delete r[f]),T=l.cssHooks[d],T&&"expand"in T){y=T.expand(y),delete r[d];for(f in y)f in r||(r[f]=y[f],o[f]=S)}else o[d]=S}function un(r,o,f){var d,S,y=0,T=un.prefilters.length,F=l.Deferred().always(function(){delete I.elem}),I=function(){if(S)return!1;for(var le=Yt||bn(),Z=Math.max(0,H.startTime+H.duration-le),_e=Z/H.duration||0,tt=1-_e,Mt=0,lt=H.tweens.length;Mt<lt;Mt++)H.tweens[Mt].run(tt);return F.notifyWith(r,[H,tt,Z]),tt<1&&lt?Z:(lt||F.notifyWith(r,[H,1,0]),F.resolveWith(r,[H]),!1)},H=F.promise({elem:r,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},f),originalProperties:o,originalOptions:f,startTime:Yt||bn(),duration:f.duration,tweens:[],createTween:function(le,Z){var _e=l.Tween(r,H.opts,le,Z,H.opts.specialEasing[le]||H.opts.easing);return H.tweens.push(_e),_e},stop:function(le){var Z=0,_e=le?H.tweens.length:0;if(S)return this;for(S=!0;Z<_e;Z++)H.tweens[Z].run(1);return le?(F.notifyWith(r,[H,1,0]),F.resolveWith(r,[H,le])):F.rejectWith(r,[H,le]),this}}),re=H.props;for(ks(re,H.opts.specialEasing);y<T;y++)if(d=un.prefilters[y].call(H,r,re,H.opts),d)return C(d.stop)&&(l._queueHooks(H.elem,H.opts.queue).stop=d.stop.bind(d)),d;return l.map(re,nn,H),C(H.opts.start)&&H.opts.start.call(r,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),l.fx.timer(l.extend(I,{elem:r,anim:H,queue:H.opts.queue})),H}l.Animation=l.extend(un,{tweeners:{"*":[function(r,o){var f=this.createTween(r,o);return k(f.elem,r,Ke.exec(o),f),f}]},tweener:function(r,o){C(r)?(o=r,r=["*"]):r=r.match(Qe);for(var f,d=0,S=r.length;d<S;d++)f=r[d],un.tweeners[f]=un.tweeners[f]||[],un.tweeners[f].unshift(o)},prefilters:[Sr],prefilter:function(r,o){o?un.prefilters.unshift(r):un.prefilters.push(r)}}),l.speed=function(r,o,f){var d=r&&typeof r=="object"?l.extend({},r):{complete:f||!f&&o||C(r)&&r,duration:r,easing:f&&o||o&&!C(o)&&o};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){C(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(r,o,f,d){return this.filter(Ct).css("opacity",0).show().end().animate({opacity:o},r,f,d)},animate:function(r,o,f,d){var S=l.isEmptyObject(r),y=l.speed(o,f,d),T=function(){var F=un(this,l.extend({},r),y);(S||X.get(this,"finish"))&&F.stop(!0)};return T.finish=T,S||y.queue===!1?this.each(T):this.queue(y.queue,T)},stop:function(r,o,f){var d=function(S){var y=S.stop;delete S.stop,y(f)};return typeof r!="string"&&(f=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var S=!0,y=r!=null&&r+"queueHooks",T=l.timers,F=X.get(this);if(y)F[y]&&F[y].stop&&d(F[y]);else for(y in F)F[y]&&F[y].stop&&xr.test(y)&&d(F[y]);for(y=T.length;y--;)T[y].elem===this&&(r==null||T[y].queue===r)&&(T[y].anim.stop(f),S=!1,T.splice(y,1));(S||!f)&&l.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,f=X.get(this),d=f[r+"queue"],S=f[r+"queueHooks"],y=l.timers,T=d?d.length:0;for(f.finish=!0,l.queue(this,r,[]),S&&S.stop&&S.stop.call(this,!0),o=y.length;o--;)y[o].elem===this&&y[o].queue===r&&(y[o].anim.stop(!0),y.splice(o,1));for(o=0;o<T;o++)d[o]&&d[o].finish&&d[o].finish.call(this);delete f.finish})}}),l.each(["toggle","show","hide"],function(r,o){var f=l.fn[o];l.fn[o]=function(d,S,y){return d==null||typeof d=="boolean"?f.apply(this,arguments):this.animate(ii(o,!0),d,S,y)}}),l.each({slideDown:ii("show"),slideUp:ii("hide"),slideToggle:ii("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){l.fn[r]=function(f,d,S){return this.animate(o,f,d,S)}}),l.timers=[],l.fx.tick=function(){var r,o=0,f=l.timers;for(Yt=Date.now();o<f.length;o++)r=f[o],!r()&&f[o]===r&&f.splice(o--,1);f.length||l.fx.stop(),Yt=void 0},l.fx.timer=function(r){l.timers.push(r),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Tn||(Tn=!0,Nt())},l.fx.stop=function(){Tn=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(r,o){return r=l.fx&&l.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(f,d){var S=e.setTimeout(f,r);d.stop=function(){e.clearTimeout(S)}})},function(){var r=g.createElement("input"),o=g.createElement("select"),f=o.appendChild(g.createElement("option"));r.type="checkbox",E.checkOn=r.value!=="",E.optSelected=f.selected,r=g.createElement("input"),r.value="t",r.type="radio",E.radioValue=r.value==="t"}();var Do,Mr=l.expr.attrHandle;l.fn.extend({attr:function(r,o){return ft(this,l.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){l.removeAttr(this,r)})}}),l.extend({attr:function(r,o,f){var d,S,y=r.nodeType;if(!(y===3||y===8||y===2)){if(typeof r.getAttribute>"u")return l.prop(r,o,f);if((y!==1||!l.isXMLDoc(r))&&(S=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?Do:void 0)),f!==void 0){if(f===null){l.removeAttr(r,o);return}return S&&"set"in S&&(d=S.set(r,f,o))!==void 0?d:(r.setAttribute(o,f+""),f)}return S&&"get"in S&&(d=S.get(r,o))!==null?d:(d=l.find.attr(r,o),d??void 0)}},attrHooks:{type:{set:function(r,o){if(!E.radioValue&&o==="radio"&&he(r,"input")){var f=r.value;return r.setAttribute("type",o),f&&(r.value=f),o}}}},removeAttr:function(r,o){var f,d=0,S=o&&o.match(Qe);if(S&&r.nodeType===1)for(;f=S[d++];)r.removeAttribute(f)}}),Do={set:function(r,o,f){return o===!1?l.removeAttr(r,f):r.setAttribute(f,f),f}},l.each(l.expr.match.bool.source.match(/\w+/g),function(r,o){var f=Mr[o]||l.find.attr;Mr[o]=function(d,S,y){var T,F,I=S.toLowerCase();return y||(F=Mr[I],Mr[I]=T,T=f(d,S,y)!=null?I:null,Mr[I]=F),T}});var yc=/^(?:input|select|textarea|button)$/i,Ec=/^(?:a|area)$/i;l.fn.extend({prop:function(r,o){return ft(this,l.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[l.propFix[r]||r]})}}),l.extend({prop:function(r,o,f){var d,S,y=r.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(r))&&(o=l.propFix[o]||o,S=l.propHooks[o]),f!==void 0?S&&"set"in S&&(d=S.set(r,f,o))!==void 0?d:r[o]=f:S&&"get"in S&&(d=S.get(r,o))!==null?d:r[o]},propHooks:{tabIndex:{get:function(r){var o=l.find.attr(r,"tabindex");return o?parseInt(o,10):yc.test(r.nodeName)||Ec.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(l.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function yi(r){var o=r.match(Qe)||[];return o.join(" ")}function Ei(r){return r.getAttribute&&r.getAttribute("class")||""}function Gs(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Qe)||[]:[]}l.fn.extend({addClass:function(r){var o,f,d,S,y,T;return C(r)?this.each(function(F){l(this).addClass(r.call(this,F,Ei(this)))}):(o=Gs(r),o.length?this.each(function(){if(d=Ei(this),f=this.nodeType===1&&" "+yi(d)+" ",f){for(y=0;y<o.length;y++)S=o[y],f.indexOf(" "+S+" ")<0&&(f+=S+" ");T=yi(f),d!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(r){var o,f,d,S,y,T;return C(r)?this.each(function(F){l(this).removeClass(r.call(this,F,Ei(this)))}):arguments.length?(o=Gs(r),o.length?this.each(function(){if(d=Ei(this),f=this.nodeType===1&&" "+yi(d)+" ",f){for(y=0;y<o.length;y++)for(S=o[y];f.indexOf(" "+S+" ")>-1;)f=f.replace(" "+S+" "," ");T=yi(f),d!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(r,o){var f,d,S,y,T=typeof r,F=T==="string"||Array.isArray(r);return C(r)?this.each(function(I){l(this).toggleClass(r.call(this,I,Ei(this),o),o)}):typeof o=="boolean"&&F?o?this.addClass(r):this.removeClass(r):(f=Gs(r),this.each(function(){if(F)for(y=l(this),S=0;S<f.length;S++)d=f[S],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(r===void 0||T==="boolean")&&(d=Ei(this),d&&X.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||r===!1?"":X.get(this,"__className__")||""))}))},hasClass:function(r){var o,f,d=0;for(o=" "+r+" ";f=this[d++];)if(f.nodeType===1&&(" "+yi(Ei(f))+" ").indexOf(o)>-1)return!0;return!1}});var Tc=/\r/g;l.fn.extend({val:function(r){var o,f,d,S=this[0];return arguments.length?(d=C(r),this.each(function(y){var T;this.nodeType===1&&(d?T=r.call(this,y,l(this).val()):T=r,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=l.map(T,function(F){return F==null?"":F+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,T,"value")===void 0)&&(this.value=T))})):S?(o=l.valHooks[S.type]||l.valHooks[S.nodeName.toLowerCase()],o&&"get"in o&&(f=o.get(S,"value"))!==void 0?f:(f=S.value,typeof f=="string"?f.replace(Tc,""):f??"")):void 0}}),l.extend({valHooks:{option:{get:function(r){var o=l.find.attr(r,"value");return o??yi(l.text(r))}},select:{get:function(r){var o,f,d,S=r.options,y=r.selectedIndex,T=r.type==="select-one",F=T?null:[],I=T?y+1:S.length;for(y<0?d=I:d=T?y:0;d<I;d++)if(f=S[d],(f.selected||d===y)&&!f.disabled&&(!f.parentNode.disabled||!he(f.parentNode,"optgroup"))){if(o=l(f).val(),T)return o;F.push(o)}return F},set:function(r,o){for(var f,d,S=r.options,y=l.makeArray(o),T=S.length;T--;)d=S[T],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(f=!0);return f||(r.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=l.inArray(l(r).val(),o)>-1}},E.checkOn||(l.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var yr=e.location,Lo={guid:Date.now()},Vs=/\?/;l.parseXML=function(r){var o,f;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return f=o&&o.getElementsByTagName("parsererror")[0],(!o||f)&&l.error("Invalid XML: "+(f?l.map(f.childNodes,function(d){return d.textContent}).join(`
`):r)),o};var Uo=/^(?:focusinfocus|focusoutblur)$/,Io=function(r){r.stopPropagation()};l.extend(l.event,{trigger:function(r,o,f,d){var S,y,T,F,I,H,re,le,Z=[f||g],_e=_.call(r,"type")?r.type:r,tt=_.call(r,"namespace")?r.namespace.split("."):[];if(y=le=T=f=f||g,!(f.nodeType===3||f.nodeType===8)&&!Uo.test(_e+l.event.triggered)&&(_e.indexOf(".")>-1&&(tt=_e.split("."),_e=tt.shift(),tt.sort()),I=_e.indexOf(":")<0&&"on"+_e,r=r[l.expando]?r:new l.Event(_e,typeof r=="object"&&r),r.isTrigger=d?2:3,r.namespace=tt.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+tt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=f),o=o==null?[r]:l.makeArray(o,[r]),re=l.event.special[_e]||{},!(!d&&re.trigger&&re.trigger.apply(f,o)===!1))){if(!d&&!re.noBubble&&!v(f)){for(F=re.delegateType||_e,Uo.test(F+_e)||(y=y.parentNode);y;y=y.parentNode)Z.push(y),T=y;T===(f.ownerDocument||g)&&Z.push(T.defaultView||T.parentWindow||e)}for(S=0;(y=Z[S++])&&!r.isPropagationStopped();)le=y,r.type=S>1?F:re.bindType||_e,H=(X.get(y,"events")||Object.create(null))[r.type]&&X.get(y,"handle"),H&&H.apply(y,o),H=I&&y[I],H&&H.apply&&ue(y)&&(r.result=H.apply(y,o),r.result===!1&&r.preventDefault());return r.type=_e,!d&&!r.isDefaultPrevented()&&(!re._default||re._default.apply(Z.pop(),o)===!1)&&ue(f)&&I&&C(f[_e])&&!v(f)&&(T=f[I],T&&(f[I]=null),l.event.triggered=_e,r.isPropagationStopped()&&le.addEventListener(_e,Io),f[_e](),r.isPropagationStopped()&&le.removeEventListener(_e,Io),l.event.triggered=void 0,T&&(f[I]=T)),r.result}},simulate:function(r,o,f){var d=l.extend(new l.Event,f,{type:r,isSimulated:!0});l.event.trigger(d,null,o)}}),l.fn.extend({trigger:function(r,o){return this.each(function(){l.event.trigger(r,o,this)})},triggerHandler:function(r,o){var f=this[0];if(f)return l.event.trigger(r,o,f,!0)}});var bc=/\[\]$/,No=/\r?\n/g,Ac=/^(?:submit|button|image|reset|file)$/i,wc=/^(?:input|select|textarea|keygen)/i;function Ws(r,o,f,d){var S;if(Array.isArray(o))l.each(o,function(y,T){f||bc.test(r)?d(r,T):Ws(r+"["+(typeof T=="object"&&T!=null?y:"")+"]",T,f,d)});else if(!f&&N(o)==="object")for(S in o)Ws(r+"["+S+"]",o[S],f,d);else d(r,o)}l.param=function(r,o){var f,d=[],S=function(y,T){var F=C(T)?T():T;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(F??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!l.isPlainObject(r))l.each(r,function(){S(this.name,this.value)});else for(f in r)Ws(f,r[f],o,S);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=l.prop(this,"elements");return r?l.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!l(this).is(":disabled")&&wc.test(this.nodeName)&&!Ac.test(r)&&(this.checked||!Ae.test(r))}).map(function(r,o){var f=l(this).val();return f==null?null:Array.isArray(f)?l.map(f,function(d){return{name:o.name,value:d.replace(No,`\r
`)}}):{name:o.name,value:f.replace(No,`\r
`)}}).get()}});var Cc=/%20/g,Rc=/#.*$/,Pc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Lc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Uc=/^(?:GET|HEAD)$/,Ic=/^\/\//,Fo={},Xs={},Oo="*/".concat("*"),qs=g.createElement("a");qs.href=yr.href;function Bo(r){return function(o,f){typeof o!="string"&&(f=o,o="*");var d,S=0,y=o.toLowerCase().match(Qe)||[];if(C(f))for(;d=y[S++];)d[0]==="+"?(d=d.slice(1)||"*",(r[d]=r[d]||[]).unshift(f)):(r[d]=r[d]||[]).push(f)}}function zo(r,o,f,d){var S={},y=r===Xs;function T(F){var I;return S[F]=!0,l.each(r[F]||[],function(H,re){var le=re(o,f,d);if(typeof le=="string"&&!y&&!S[le])return o.dataTypes.unshift(le),T(le),!1;if(y)return!(I=le)}),I}return T(o.dataTypes[0])||!S["*"]&&T("*")}function Ys(r,o){var f,d,S=l.ajaxSettings.flatOptions||{};for(f in o)o[f]!==void 0&&((S[f]?r:d||(d={}))[f]=o[f]);return d&&l.extend(!0,r,d),r}function Nc(r,o,f){for(var d,S,y,T,F=r.contents,I=r.dataTypes;I[0]==="*";)I.shift(),d===void 0&&(d=r.mimeType||o.getResponseHeader("Content-Type"));if(d){for(S in F)if(F[S]&&F[S].test(d)){I.unshift(S);break}}if(I[0]in f)y=I[0];else{for(S in f){if(!I[0]||r.converters[S+" "+I[0]]){y=S;break}T||(T=S)}y=y||T}if(y)return y!==I[0]&&I.unshift(y),f[y]}function Fc(r,o,f,d){var S,y,T,F,I,H={},re=r.dataTypes.slice();if(re[1])for(T in r.converters)H[T.toLowerCase()]=r.converters[T];for(y=re.shift();y;)if(r.responseFields[y]&&(f[r.responseFields[y]]=o),!I&&d&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),I=y,y=re.shift(),y){if(y==="*")y=I;else if(I!=="*"&&I!==y){if(T=H[I+" "+y]||H["* "+y],!T){for(S in H)if(F=S.split(" "),F[1]===y&&(T=H[I+" "+F[0]]||H["* "+F[0]],T)){T===!0?T=H[S]:H[S]!==!0&&(y=F[0],re.unshift(F[1]));break}}if(T!==!0)if(T&&r.throws)o=T(o);else try{o=T(o)}catch(le){return{state:"parsererror",error:T?le:"No conversion from "+I+" to "+y}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yr.href,type:"GET",isLocal:Lc.test(yr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Oo,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?Ys(Ys(r,l.ajaxSettings),o):Ys(l.ajaxSettings,r)},ajaxPrefilter:Bo(Fo),ajaxTransport:Bo(Xs),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var f,d,S,y,T,F,I,H,re,le,Z=l.ajaxSetup({},o),_e=Z.context||Z,tt=Z.context&&(_e.nodeType||_e.jquery)?l(_e):l.event,Mt=l.Deferred(),lt=l.Callbacks("once memory"),Kt=Z.statusCode||{},Wt={},Un={},In="canceled",vt={readyState:0,getResponseHeader:function(At){var Bt;if(I){if(!y)for(y={};Bt=Dc.exec(S);)y[Bt[1].toLowerCase()+" "]=(y[Bt[1].toLowerCase()+" "]||[]).concat(Bt[2]);Bt=y[At.toLowerCase()+" "]}return Bt==null?null:Bt.join(", ")},getAllResponseHeaders:function(){return I?S:null},setRequestHeader:function(At,Bt){return I==null&&(At=Un[At.toLowerCase()]=Un[At.toLowerCase()]||At,Wt[At]=Bt),this},overrideMimeType:function(At){return I==null&&(Z.mimeType=At),this},statusCode:function(At){var Bt;if(At)if(I)vt.always(At[vt.status]);else for(Bt in At)Kt[Bt]=[Kt[Bt],At[Bt]];return this},abort:function(At){var Bt=At||In;return f&&f.abort(Bt),Ti(0,Bt),this}};if(Mt.promise(vt),Z.url=((r||Z.url||yr.href)+"").replace(Ic,yr.protocol+"//"),Z.type=o.method||o.type||Z.method||Z.type,Z.dataTypes=(Z.dataType||"*").toLowerCase().match(Qe)||[""],Z.crossDomain==null){F=g.createElement("a");try{F.href=Z.url,F.href=F.href,Z.crossDomain=qs.protocol+"//"+qs.host!=F.protocol+"//"+F.host}catch{Z.crossDomain=!0}}if(Z.data&&Z.processData&&typeof Z.data!="string"&&(Z.data=l.param(Z.data,Z.traditional)),zo(Fo,Z,o,vt),I)return vt;H=l.event&&Z.global,H&&l.active++===0&&l.event.trigger("ajaxStart"),Z.type=Z.type.toUpperCase(),Z.hasContent=!Uc.test(Z.type),d=Z.url.replace(Rc,""),Z.hasContent?Z.data&&Z.processData&&(Z.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Z.data=Z.data.replace(Cc,"+")):(le=Z.url.slice(d.length),Z.data&&(Z.processData||typeof Z.data=="string")&&(d+=(Vs.test(d)?"&":"?")+Z.data,delete Z.data),Z.cache===!1&&(d=d.replace(Pc,"$1"),le=(Vs.test(d)?"&":"?")+"_="+Lo.guid+++le),Z.url=d+le),Z.ifModified&&(l.lastModified[d]&&vt.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&vt.setRequestHeader("If-None-Match",l.etag[d])),(Z.data&&Z.hasContent&&Z.contentType!==!1||o.contentType)&&vt.setRequestHeader("Content-Type",Z.contentType),vt.setRequestHeader("Accept",Z.dataTypes[0]&&Z.accepts[Z.dataTypes[0]]?Z.accepts[Z.dataTypes[0]]+(Z.dataTypes[0]!=="*"?", "+Oo+"; q=0.01":""):Z.accepts["*"]);for(re in Z.headers)vt.setRequestHeader(re,Z.headers[re]);if(Z.beforeSend&&(Z.beforeSend.call(_e,vt,Z)===!1||I))return vt.abort();if(In="abort",lt.add(Z.complete),vt.done(Z.success),vt.fail(Z.error),f=zo(Xs,Z,o,vt),!f)Ti(-1,"No Transport");else{if(vt.readyState=1,H&&tt.trigger("ajaxSend",[vt,Z]),I)return vt;Z.async&&Z.timeout>0&&(T=e.setTimeout(function(){vt.abort("timeout")},Z.timeout));try{I=!1,f.send(Wt,Ti)}catch(At){if(I)throw At;Ti(-1,At)}}function Ti(At,Bt,Tr,Ks){var Nn,br,Fn,ri,si,_n=Bt;I||(I=!0,T&&e.clearTimeout(T),f=void 0,S=Ks||"",vt.readyState=At>0?4:0,Nn=At>=200&&At<300||At===304,Tr&&(ri=Nc(Z,vt,Tr)),!Nn&&l.inArray("script",Z.dataTypes)>-1&&l.inArray("json",Z.dataTypes)<0&&(Z.converters["text script"]=function(){}),ri=Fc(Z,ri,vt,Nn),Nn?(Z.ifModified&&(si=vt.getResponseHeader("Last-Modified"),si&&(l.lastModified[d]=si),si=vt.getResponseHeader("etag"),si&&(l.etag[d]=si)),At===204||Z.type==="HEAD"?_n="nocontent":At===304?_n="notmodified":(_n=ri.state,br=ri.data,Fn=ri.error,Nn=!Fn)):(Fn=_n,(At||!_n)&&(_n="error",At<0&&(At=0))),vt.status=At,vt.statusText=(Bt||_n)+"",Nn?Mt.resolveWith(_e,[br,_n,vt]):Mt.rejectWith(_e,[vt,_n,Fn]),vt.statusCode(Kt),Kt=void 0,H&&tt.trigger(Nn?"ajaxSuccess":"ajaxError",[vt,Z,Nn?br:Fn]),lt.fireWith(_e,[vt,_n]),H&&(tt.trigger("ajaxComplete",[vt,Z]),--l.active||l.event.trigger("ajaxStop")))}return vt},getJSON:function(r,o,f){return l.get(r,o,f,"json")},getScript:function(r,o){return l.get(r,void 0,o,"script")}}),l.each(["get","post"],function(r,o){l[o]=function(f,d,S,y){return C(d)&&(y=y||S,S=d,d=void 0),l.ajax(l.extend({url:f,type:o,dataType:y,data:d,success:S},l.isPlainObject(f)&&f))}}),l.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),l._evalUrl=function(r,o,f){return l.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,o,f)}})},l.fn.extend({wrapAll:function(r){var o;return this[0]&&(C(r)&&(r=r.call(this[0])),o=l(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(r){return C(r)?this.each(function(o){l(this).wrapInner(r.call(this,o))}):this.each(function(){var o=l(this),f=o.contents();f.length?f.wrapAll(r):o.append(r)})},wrap:function(r){var o=C(r);return this.each(function(f){l(this).wrapAll(o?r.call(this,f):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(r){return!l.expr.pseudos.visible(r)},l.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Oc={0:200,1223:204},Er=l.ajaxSettings.xhr();E.cors=!!Er&&"withCredentials"in Er,E.ajax=Er=!!Er,l.ajaxTransport(function(r){var o,f;if(E.cors||Er&&!r.crossDomain)return{send:function(d,S){var y,T=r.xhr();if(T.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(y in r.xhrFields)T[y]=r.xhrFields[y];r.mimeType&&T.overrideMimeType&&T.overrideMimeType(r.mimeType),!r.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)T.setRequestHeader(y,d[y]);o=function(F){return function(){o&&(o=f=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,F==="abort"?T.abort():F==="error"?typeof T.status!="number"?S(0,"error"):S(T.status,T.statusText):S(Oc[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=o(),f=T.onerror=T.ontimeout=o("error"),T.onabort!==void 0?T.onabort=f:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){o&&f()})},o=o("abort");try{T.send(r.hasContent&&r.data||null)}catch(F){if(o)throw F}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return l.globalEval(r),r}}}),l.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),l.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,f;return{send:function(d,S){o=l("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",f=function(y){o.remove(),f=null,y&&S(y.type==="error"?404:200,y.type)}),g.head.appendChild(o[0])},abort:function(){f&&f()}}}});var Ho=[],js=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=Ho.pop()||l.expando+"_"+Lo.guid++;return this[r]=!0,r}}),l.ajaxPrefilter("json jsonp",function(r,o,f){var d,S,y,T=r.jsonp!==!1&&(js.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&js.test(r.data)&&"data");if(T||r.dataTypes[0]==="jsonp")return d=r.jsonpCallback=C(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,T?r[T]=r[T].replace(js,"$1"+d):r.jsonp!==!1&&(r.url+=(Vs.test(r.url)?"&":"?")+r.jsonp+"="+d),r.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},r.dataTypes[0]="json",S=e[d],e[d]=function(){y=arguments},f.always(function(){S===void 0?l(e).removeProp(d):e[d]=S,r[d]&&(r.jsonpCallback=o.jsonpCallback,Ho.push(d)),y&&C(S)&&S(y[0]),y=S=void 0}),"script"}),E.createHTMLDocument=function(){var r=g.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),l.parseHTML=function(r,o,f){if(typeof r!="string")return[];typeof o=="boolean"&&(f=o,o=!1);var d,S,y;return o||(E.createHTMLDocument?(o=g.implementation.createHTMLDocument(""),d=o.createElement("base"),d.href=g.location.href,o.head.appendChild(d)):o=g),S=dt.exec(r),y=!f&&[],S?[o.createElement(S[1])]:(S=gn([r],o,y),y&&y.length&&l(y).remove(),l.merge([],S.childNodes))},l.fn.load=function(r,o,f){var d,S,y,T=this,F=r.indexOf(" ");return F>-1&&(d=yi(r.slice(F)),r=r.slice(0,F)),C(o)?(f=o,o=void 0):o&&typeof o=="object"&&(S="POST"),T.length>0&&l.ajax({url:r,type:S||"GET",dataType:"html",data:o}).done(function(I){y=arguments,T.html(d?l("<div>").append(l.parseHTML(I)).find(d):I)}).always(f&&function(I,H){T.each(function(){f.apply(this,y||[I.responseText,H,I])})}),this},l.expr.pseudos.animated=function(r){return l.grep(l.timers,function(o){return r===o.elem}).length},l.offset={setOffset:function(r,o,f){var d,S,y,T,F,I,H,re=l.css(r,"position"),le=l(r),Z={};re==="static"&&(r.style.position="relative"),F=le.offset(),y=l.css(r,"top"),I=l.css(r,"left"),H=(re==="absolute"||re==="fixed")&&(y+I).indexOf("auto")>-1,H?(d=le.position(),T=d.top,S=d.left):(T=parseFloat(y)||0,S=parseFloat(I)||0),C(o)&&(o=o.call(r,f,l.extend({},F))),o.top!=null&&(Z.top=o.top-F.top+T),o.left!=null&&(Z.left=o.left-F.left+S),"using"in o?o.using.call(r,Z):le.css(Z)}},l.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(S){l.offset.setOffset(this,r,S)});var o,f,d=this[0];if(d)return d.getClientRects().length?(o=d.getBoundingClientRect(),f=d.ownerDocument.defaultView,{top:o.top+f.pageYOffset,left:o.left+f.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,f,d=this[0],S={top:0,left:0};if(l.css(d,"position")==="fixed")o=d.getBoundingClientRect();else{for(o=this.offset(),f=d.ownerDocument,r=d.offsetParent||f.documentElement;r&&(r===f.body||r===f.documentElement)&&l.css(r,"position")==="static";)r=r.parentNode;r&&r!==d&&r.nodeType===1&&(S=l(r).offset(),S.top+=l.css(r,"borderTopWidth",!0),S.left+=l.css(r,"borderLeftWidth",!0))}return{top:o.top-S.top-l.css(d,"marginTop",!0),left:o.left-S.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&l.css(r,"position")==="static";)r=r.offsetParent;return r||De})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var f=o==="pageYOffset";l.fn[r]=function(d){return ft(this,function(S,y,T){var F;if(v(S)?F=S:S.nodeType===9&&(F=S.defaultView),T===void 0)return F?F[o]:S[y];F?F.scrollTo(f?F.pageXOffset:T,f?T:F.pageYOffset):S[y]=T},r,d,arguments.length)}}),l.each(["top","left"],function(r,o){l.cssHooks[o]=ze(E.pixelPosition,function(f,d){if(d)return d=we(f,o),G.test(d)?l(f).position()[o]+"px":d})}),l.each({Height:"height",Width:"width"},function(r,o){l.each({padding:"inner"+r,content:o,"":"outer"+r},function(f,d){l.fn[d]=function(S,y){var T=arguments.length&&(f||typeof S!="boolean"),F=f||(S===!0||y===!0?"margin":"border");return ft(this,function(I,H,re){var le;return v(I)?d.indexOf("outer")===0?I["inner"+r]:I.document.documentElement["client"+r]:I.nodeType===9?(le=I.documentElement,Math.max(I.body["scroll"+r],le["scroll"+r],I.body["offset"+r],le["offset"+r],le["client"+r])):re===void 0?l.css(I,H,F):l.style(I,H,re,F)},o,T?S:void 0,T)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){l.fn[o]=function(f){return this.on(o,f)}}),l.fn.extend({bind:function(r,o,f){return this.on(r,null,o,f)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,f,d){return this.on(o,r,f,d)},undelegate:function(r,o,f){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",f)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){l.fn[o]=function(f,d){return arguments.length>0?this.on(o,null,f,d):this.trigger(o)}});var Bc=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(r,o){var f,d,S;if(typeof o=="string"&&(f=r[o],o=r,r=f),!!C(r))return d=a.call(arguments,2),S=function(){return r.apply(o||this,d.concat(a.call(arguments)))},S.guid=r.guid=r.guid||l.guid++,S},l.holdReady=function(r){r?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=he,l.isFunction=C,l.isWindow=v,l.camelCase=j,l.type=N,l.now=Date.now,l.isNumeric=function(r){var o=l.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},l.trim=function(r){return r==null?"":(r+"").replace(Bc,"$1")};var zc=e.jQuery,Hc=e.$;return l.noConflict=function(r){return e.$===l&&(e.$=Hc),r&&e.jQuery===l&&(e.jQuery=zc),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Gl);var Jc=Gl.exports;const Is=$c(Jc);window.jQuery=Is;(function(i){function e(c,h){var p,m,_;if((p=i(c))[t]==0)return n;switch(m=p[a]()[s],h.anchor){case"middle":_=m-(i(window).height()-p.outerHeight())/2;break;default:case s:_=Math.max(m,0)}return typeof h[a]=="function"?_-=h[a]():_-=h[a],_}var t="length",n=null,s="top",a="offset",u="click.scrolly";i(window),i.fn.scrolly=function(c){var h,p,m,_,x=i(this);if(this[t]==0)return x;if(this[t]>1){for(h=0;h<this[t];h++)i(this[h]).scrolly(c);return x}if(_=n,m=x.attr("href"),m.charAt(0)!="#"||m[t]<2)return x;p=jQuery.extend({anchor:s,easing:"swing",offset:0,parent:i("body,html"),pollOnce:!1,speed:1e3},c),p.pollOnce&&(_=e(m,p)),x.off(u).on(u,function(M){var E=_!==n?_:e(m,p);E!==n&&(M.preventDefault(),p.parent.stop().animate({scrollTop:E},p.speed,p.easing))})}})(jQuery);/*
 * @license jQuery Breakpoints | MIT | Jerry Low | https://www.github.com/jerrylow/breakpoints
 */(function(i){var e=function(t,n){var s=this;s.n="breakpoints",s.settings={},s.currentBp=null,s.getBreakpoint=function(){var m=u(),_=s.settings.breakpoints,x;return _.forEach(function(M){m>=M.width&&(x=M.name)}),x||(x=_[_.length-1].name),x},s.getBreakpointWidth=function(m){var _=s.settings.breakpoints,x;return _.forEach(function(M){m==M.name&&(x=M.width)}),x},s.compareCheck=function(m,_,x){var M=u(),E=s.settings.breakpoints,C=s.getBreakpointWidth(_),v=!1;switch(m){case"lessThan":v=M<C;break;case"lessEqualTo":v=M<=C;break;case"greaterThan":v=M>C;break;case"greaterEqualTo":v=M>C;break;case"inside":var g=E.findIndex(function(L){return L.name===_});if(g===E.length-1)v=M>C;else{var O=s.getBreakpointWidth(E[g+1].name);v=M>=C&&M<O}break}v&&x()},s.destroy=function(){i(window).unbind(s.n)};var a=function(){var m=u(),_=s.settings.breakpoints,x=s.currentBp;_.forEach(function(M){x===M.name?M.inside||(i(window).trigger("inside-"+M.name),M.inside=!0):M.inside=!1,m<M.width&&(M.less||(i(window).trigger("lessThan-"+M.name),M.less=!0,M.greater=!1,M.greaterEqual=!1)),m>=M.width&&(M.greaterEqual||(i(window).trigger("greaterEqualTo-"+M.name),M.greaterEqual=!0,M.less=!1),m>M.width&&(M.greater||(i(window).trigger("greaterThan-"+M.name),M.greater=!0,M.less=!1)))})},u=function(){var m=i(window);return s.outerWidth?m.outerWidth():window.innerWidth?window.innerWidth:m.width()},c=function(){var m=s.getBreakpoint();m!==s.currentBp&&(i(window).trigger({type:"breakpoint-change",from:s.currentBp,to:m}),s.currentBp=m)},h=i.extend({},i.fn.breakpoints.defaults,n);s.settings={breakpoints:h.breakpoints,buffer:h.buffer,triggerOnInit:h.triggerOnInit,outerWidth:h.outerWidth},t.data(s.n,this),s.currentBp=s.getBreakpoint();var p=null;i.isFunction(i(window).on)&&i(window).on("resize."+s.n,function(m){p&&clearTimeout(p),p=setTimeout(function(_){c(),a()},s.settings.buffer)}),s.settings.triggerOnInit&&setTimeout(function(){i(window).trigger({type:"breakpoint-change",from:s.currentBp,to:s.currentBp,initialInit:!0})},s.settings.buffer),setTimeout(function(){a()},0)};i.fn.breakpoints=function(t,n,s){if(this.data("breakpoints")){var a=this.data("breakpoints"),u=["lessThan","lessEqualTo","greaterThan","greaterEqualTo","inside"];if(t==="getBreakpoint")return a.getBreakpoint();if(t==="getBreakpointWidth")return a.getBreakpointWidth(n);if(u.indexOf(t)>=0)return a.compareCheck(t,n,s);t==="destroy"&&a.destroy();return}new e(this,t)},i.fn.breakpoints.defaults={breakpoints:[{name:"xs",width:0},{name:"sm",width:768},{name:"md",width:992},{name:"lg",width:1200}],buffer:300,triggerOnInit:!1,outerWidth:!1}})(jQuery);window.jQuery=Is;(function(i){i.fn.navList=function(){var e=i(this);return $a=e.find("a"),b=[],$a.each(function(){var t=i(this),n=Math.max(0,t.parents("li").length-1),s=t.attr("href"),a=t.attr("target");b.push('<a class="link depth-'+n+'"'+(typeof a<"u"&&a!=""?' target="'+a+'"':"")+(typeof s<"u"&&s!=""?' href="'+s+'"':"")+'><span class="indent-'+n+'"></span>'+t.text()+"</a>")}),b.join("")},i.fn.panel=function(e){if(this.length==0)return n;if(this.length>1){for(var t=0;t<this.length;t++)i(this[t]).panel(e);return n}var n=i(this),s=i("body"),a=i(window),u=n.attr("id"),c;return c=i.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:n,visibleClass:"visible"},e),typeof c.target!="jQuery"&&(c.target=i(c.target)),n._hide=function(h){c.target.hasClass(c.visibleClass)&&(h&&(h.preventDefault(),h.stopPropagation()),c.target.removeClass(c.visibleClass),window.setTimeout(function(){c.resetScroll&&n.scrollTop(0),c.resetForms&&n.find("form").each(function(){this.reset()})},c.delay))},n.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),c.hideOnClick&&(n.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),n.on("click","a",function(h){var p=i(this),m=p.attr("href"),_=p.attr("target");!m||m=="#"||m==""||m=="#"+u||(h.preventDefault(),h.stopPropagation(),n._hide(),window.setTimeout(function(){_=="_blank"?window.open(m):window.location.href=m},c.delay+10))})),n.on("touchstart",function(h){n.touchPosX=h.originalEvent.touches[0].pageX,n.touchPosY=h.originalEvent.touches[0].pageY}),n.on("touchmove",function(h){if(!(n.touchPosX===null||n.touchPosY===null)){var p=n.touchPosX-h.originalEvent.touches[0].pageX,m=n.touchPosY-h.originalEvent.touches[0].pageY,_=n.outerHeight(),x=n.get(0).scrollHeight-n.scrollTop();if(c.hideOnSwipe){var M=!1,E=20,C=50;switch(c.side){case"left":M=m<E&&m>-1*E&&p>C;break;case"right":M=m<E&&m>-1*E&&p<-1*C;break;case"top":M=p<E&&p>-1*E&&m>C;break;case"bottom":M=p<E&&p>-1*E&&m<-1*C;break}if(M)return n.touchPosX=null,n.touchPosY=null,n._hide(),!1}(n.scrollTop()<0&&m<0||x>_-2&&x<_+2&&m>0)&&(h.preventDefault(),h.stopPropagation())}}),n.on("click touchend touchstart touchmove",function(h){h.stopPropagation()}),n.on("click",'a[href="#'+u+'"]',function(h){h.preventDefault(),h.stopPropagation(),c.target.removeClass(c.visibleClass)}),s.on("click touchend",function(h){n._hide(h)}),s.on("click",'a[href="#'+u+'"]',function(h){h.preventDefault(),h.stopPropagation(),c.target.toggleClass(c.visibleClass)}),c.hideOnEscape&&a.on("keydown",function(h){h.keyCode==27&&n._hide(h)}),n},i.fn.placeholder=function(){if(typeof document.createElement("input").placeholder<"u")return i(this);if(this.length==0)return t;if(this.length>1){for(var e=0;e<this.length;e++)i(this[e]).placeholder();return t}var t=i(this);return t.find("input[type=text],textarea").each(function(){var n=i(this);(n.val()==""||n.val()==n.attr("placeholder"))&&n.addClass("polyfill-placeholder").val(n.attr("placeholder"))}).on("blur",function(){var n=i(this);n.attr("name").match(/-polyfill-field$/)||n.val()==""&&n.addClass("polyfill-placeholder").val(n.attr("placeholder"))}).on("focus",function(){var n=i(this);n.attr("name").match(/-polyfill-field$/)||n.val()==n.attr("placeholder")&&n.removeClass("polyfill-placeholder").val("")}),t.find("input[type=password]").each(function(){var n=i(this),s=i(i("<div>").append(n.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));n.attr("id")!=""&&s.attr("id",n.attr("id")+"-polyfill-field"),n.attr("name")!=""&&s.attr("name",n.attr("name")+"-polyfill-field"),s.addClass("polyfill-placeholder").val(s.attr("placeholder")).insertAfter(n),n.val()==""?n.hide():s.hide(),n.on("blur",function(a){a.preventDefault();var u=n.parent().find("input[name="+n.attr("name")+"-polyfill-field]");n.val()==""&&(n.hide(),u.show())}),s.on("focus",function(a){a.preventDefault();var u=s.parent().find("input[name="+s.attr("name").replace("-polyfill-field","")+"]");s.hide(),u.show().focus()}).on("keypress",function(a){a.preventDefault(),s.val("")})}),t.on("submit",function(){t.find("input[type=text],input[type=password],textarea").each(function(n){var s=i(this);s.attr("name").match(/-polyfill-field$/)&&s.attr("name",""),s.val()==s.attr("placeholder")&&(s.removeClass("polyfill-placeholder"),s.val(""))})}).on("reset",function(n){n.preventDefault(),t.find("select").val(i("option:first").val()),t.find("input,textarea").each(function(){var s=i(this),a;switch(s.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":s.val(s.attr("defaultValue")),a=s.parent().find("input[name="+s.attr("name")+"-polyfill-field]"),s.val()==""?(s.hide(),a.show()):(s.show(),a.hide());break;case"checkbox":case"radio":s.attr("checked",s.attr("defaultValue"));break;case"text":case"textarea":s.val(s.attr("defaultValue")),s.val()==""&&(s.addClass("polyfill-placeholder"),s.val(s.attr("placeholder")));break;default:s.val(s.attr("defaultValue"));break}})}),t},i.prioritize=function(e,t){var n="__prioritize";typeof e!="jQuery"&&(e=i(e)),e.each(function(){var s=i(this),a,u=s.parent();if(u.length!=0)if(s.data(n)){if(t)return;a=s.data(n),s.insertAfter(a),s.removeData(n)}else{if(!t||(a=s.prev(),a.length==0))return;s.prependTo(u),s.data(n,a)}})}})(jQuery);window.jQuery=Is;(function(i){var e=i(window),t=i(document),n=i("body"),s=i("#nav");e.breakpoints({breakpoints:[{name:"xlarge",width:1680},{name:"large",width:1280},{name:"medium",width:980},{name:"small",width:736}]}),Kc.forEach(function(a,u){let c=i("<div class='col-4 col-6-medium col-12-small card'></div>"),h=i("<article class='box style2'></article>");c.append(h),h.append(i("<div class='image featured'><img src='"+a.img+"' alt='"+a.alt+"' /></div>")),h.append(i("<h3>"+a.title+"</h3>")),h.append(i("<p>"+a.shortDesc+"</p>")),i("#card-container").append(c);let p=i("<div class='modal'></div>"),m=i("<div class='modal-conent'></div>"),_=i("<div class='close-modal'></div>"),x=i("<div class='container flex' ></div>"),M=i("<div class='modal-desc'></div>"),E=i("<div class='button-container'></div>");x.append(i("<h1 class='modal-title'> "+a.title+"</>")),x.append(i("<hr class='modal-title-rule'/>")),x.append(i("<div class='image modal-image' ><img src='"+a.img+"'/></div>")),x.append(i(M)),M.append(i("<p  >"+a.longDesc+"</p>")),M.append(E),E.append(i("<a href='"+a.demo+"' class='button'>Live Demo</a>")),E.append(i("<a href='"+a.source+"' class='button'>View Source</a>")),_.append(i("<img class='close-modal-img' id='close-modal-1' src='./images/SVG/close-circle-dark.svg' />")),_.append(i("<img class='close-modal-img' id='close-modal-2' src='./images/SVG/close-circle-light.svg' />")),m.append(_),m.append(x),p.append(m),i("#modal-container").append(p)}),e.on("load",function(){window.setTimeout(function(){n.removeClass("is-preload")},100)}),t.ready(function(){i(".modal").each(function(a){var u="modal-"+a,c="#"+u;i(this).attr("id",u),i(this).find(".close-modal").click(function(){console.log("close me:",u),i(c).removeClass("in")})}),i(".box").each(function(a){var u="box-"+a;i(this).attr("id",u),i(this).on("click",function(){console.log("open me"),i("#modal-"+a).addClass("in")})}),i("form").submit(a=>{a.preventDefault();const u={name:i("form").find('input[name="name"]').val(),email:i("form").find('input[name="email"]').val(),subject:i("form").find('input[name="subject"]').val(),message:i("form").find('textarea[name="message"]').val()};return i.ajax({type:"POST",url:"https://one-off-backends.onrender.com/portfolio-email",data:u,success:c=>alert("Your message has been sent"),error:(c,h,p)=>alert("Error please reach out to me directly: max.evers8@gmail.com")}),!1})}),i("#nav a, .scrolly").scrolly({speed:1e3,offset:function(){return s.height()}})})(jQuery);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="169",Qc=0,Wo=1,eu=2,Vl=1,tu=2,Zn=3,gi=0,hn=1,$n=2,pi=0,sr=1,Xo=2,qo=3,Yo=4,nu=5,Ii=100,iu=101,ru=102,su=103,au=104,ou=200,lu=201,cu=202,uu=203,Da=204,La=205,fu=206,hu=207,du=208,pu=209,mu=210,gu=211,_u=212,vu=213,xu=214,Ua=0,Ia=1,Na=2,lr=3,Fa=4,Oa=5,Ba=6,za=7,Wl=0,Su=1,Mu=2,mi=0,yu=1,Eu=2,Tu=3,bu=4,Au=5,wu=6,Cu=7,Xl=300,cr=301,ur=302,Ha=303,ka=304,Ns=306,Ga=1e3,Fi=1001,Va=1002,Mn=1003,Ru=1004,Jr=1005,Pn=1006,na=1007,Oi=1008,ei=1009,ql=1010,Yl=1011,Fr=1012,Mo=1013,Bi=1014,Jn=1015,zr=1016,yo=1017,Eo=1018,fr=1020,jl=35902,Kl=1021,Zl=1022,Ln=1023,$l=1024,Jl=1025,ar=1026,hr=1027,Ql=1028,To=1029,ec=1030,bo=1031,Ao=1033,ys=33776,Es=33777,Ts=33778,bs=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,ja=36196,Ka=37492,Za=37496,Ja=37808,Qa=37809,eo=37810,to=37811,no=37812,io=37813,ro=37814,so=37815,ao=37816,oo=37817,lo=37818,co=37819,uo=37820,fo=37821,As=36492,ho=36494,po=36495,tc=36283,mo=36284,go=36285,_o=36286,Pu=3200,Du=3201,Lu=0,Uu=1,di="",Bn="srgb",vi="srgb-linear",wo="display-p3",Fs="display-p3-linear",Rs="linear",Ft="srgb",Ps="rec709",Ds="p3",Vi=7680,jo=519,Iu=512,Nu=513,Fu=514,nc=515,Ou=516,Bu=517,zu=518,Hu=519,Ko=35044,Zo="300 es",Qn=2e3,Ls=2001;class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const Ur=Math.PI/180,Or=180/Math.PI;function mr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Co(i,e){return(i%e+e)%e}function ku(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gu(i,e,t){return i!==e?(t-i)/(e-i):0}function Ir(i,e,t){return(1-t)*i+t*e}function Vu(i,e,t,n){return Ir(i,e,1-Math.exp(-t*n))}function Wu(i,e=1){return e-Math.abs(Co(i,e*2)-e)}function Xu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ju(i,e){return i+Math.random()*(e-i)}function Ku(i){return i*(.5-Math.random())}function Zu(i){i!==void 0&&($o=i);let e=$o+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $u(i){return i*Ur}function Ju(i){return i*Or}function Qu(i){return(i&i-1)===0&&i!==0}function ef(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nf(i,e,t,n,s){const a=Math.cos,u=Math.sin,c=a(t/2),h=u(t/2),p=a((e+n)/2),m=u((e+n)/2),_=a((e-n)/2),x=u((e-n)/2),M=a((n-e)/2),E=u((n-e)/2);switch(s){case"XYX":i.set(c*m,h*_,h*x,c*p);break;case"YZY":i.set(h*x,c*m,h*_,c*p);break;case"ZXZ":i.set(h*_,h*x,c*m,c*p);break;case"XZX":i.set(c*m,h*E,h*M,c*p);break;case"YXY":i.set(h*M,c*m,h*E,c*p);break;case"ZYZ":i.set(h*E,h*M,c*m,c*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rf={DEG2RAD:Ur,RAD2DEG:Or,generateUUID:mr,clamp:on,euclideanModulo:Co,mapLinear:ku,inverseLerp:Gu,lerp:Ir,damp:Vu,pingpong:Wu,smoothstep:Xu,smootherstep:qu,randInt:Yu,randFloat:ju,randFloatSpread:Ku,seededRandom:Zu,degToRad:$u,radToDeg:Ju,isPowerOfTwo:Qu,ceilPowerOfTwo:ef,floorPowerOfTwo:tf,setQuaternionFromProperEuler:nf,normalize:sn,denormalize:ir};class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*s+e.x,this.y=a*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,s,a,u,c,h,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,h,p)}set(e,t,n,s,a,u,c,h,p){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=t,m[4]=a,m[5]=h,m[6]=n,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[3],h=n[6],p=n[1],m=n[4],_=n[7],x=n[2],M=n[5],E=n[8],C=s[0],v=s[3],g=s[6],O=s[1],L=s[4],N=s[7],ee=s[2],V=s[5],l=s[8];return a[0]=u*C+c*O+h*ee,a[3]=u*v+c*L+h*V,a[6]=u*g+c*N+h*l,a[1]=p*C+m*O+_*ee,a[4]=p*v+m*L+_*V,a[7]=p*g+m*N+_*l,a[2]=x*C+M*O+E*ee,a[5]=x*v+M*L+E*V,a[8]=x*g+M*N+E*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],p=e[7],m=e[8];return t*u*m-t*c*p-n*a*m+n*c*h+s*a*p-s*u*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],p=e[7],m=e[8],_=m*u-c*p,x=c*h-m*a,M=p*a-u*h,E=t*_+n*x+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(s*p-m*n)*C,e[2]=(c*n-s*u)*C,e[3]=x*C,e[4]=(m*t-s*h)*C,e[5]=(s*a-c*t)*C,e[6]=M*C,e[7]=(n*h-p*t)*C,e[8]=(u*t-n*a)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,u,c){const h=Math.cos(a),p=Math.sin(a);return this.set(n*h,n*p,-n*(h*u+p*c)+u+e,-s*p,s*h,-s*(-p*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new ut;function ic(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){const i=Br("canvas");return i.style.display="block",i}const Jo={};function ws(i){i in Jo||(Jo[i]=!0,console.warn(i))}function af(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function of(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qo=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),el=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[vi]:{transfer:Rs,primaries:Ps,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Bn]:{transfer:Ft,primaries:Ps,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fs]:{transfer:Rs,primaries:Ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(el),fromReference:i=>i.applyMatrix3(Qo)},[wo]:{transfer:Ft,primaries:Ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(el),fromReference:i=>i.applyMatrix3(Qo).convertLinearToSRGB()}},cf=new Set([vi,Fs]),Rt={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=wr[e].toReference,s=wr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return wr[i].primaries},getTransfer:function(i){return i===di?Rs:wr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(wr[e].luminanceCoefficients)}};function or(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wi;class uf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Br("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=or(a[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ff=0;class rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(sa(s[u].image)):a.push(sa(s[u]))}else a=sa(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;class ln extends pr{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Fi,s=Fi,a=Pn,u=Oi,c=Ln,h=ei,p=ln.DEFAULT_ANISOTROPY,m=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=mr(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Xl;ln.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,s=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const h=e.elements,p=h[0],m=h[4],_=h[8],x=h[1],M=h[5],E=h[9],C=h[2],v=h[6],g=h[10];if(Math.abs(m-x)<.01&&Math.abs(_-C)<.01&&Math.abs(E-v)<.01){if(Math.abs(m+x)<.1&&Math.abs(_+C)<.1&&Math.abs(E+v)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,N=(M+1)/2,ee=(g+1)/2,V=(m+x)/4,l=(_+C)/4,Q=(E+v)/4;return L>N&&L>ee?L<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(L),s=V/n,a=l/n):N>ee?N<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(N),n=V/s,a=Q/s):ee<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(ee),n=l/a,s=Q/a),this.set(n,s,a,t),this}let O=Math.sqrt((v-E)*(v-E)+(_-C)*(_-C)+(x-m)*(x-m));return Math.abs(O)<.001&&(O=1),this.x=(v-E)/O,this.y=(_-C)/O,this.z=(x-m)/O,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends pr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sc extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,u,c){let h=n[s+0],p=n[s+1],m=n[s+2],_=n[s+3];const x=a[u+0],M=a[u+1],E=a[u+2],C=a[u+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(c===1){e[t+0]=x,e[t+1]=M,e[t+2]=E,e[t+3]=C;return}if(_!==C||h!==x||p!==M||m!==E){let v=1-c;const g=h*x+p*M+m*E+_*C,O=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const ee=Math.sqrt(L),V=Math.atan2(ee,g*O);v=Math.sin(v*V)/ee,c=Math.sin(c*V)/ee}const N=c*O;if(h=h*v+x*N,p=p*v+M*N,m=m*v+E*N,_=_*v+C*N,v===1-c){const ee=1/Math.sqrt(h*h+p*p+m*m+_*_);h*=ee,p*=ee,m*=ee,_*=ee}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,a,u){const c=n[s],h=n[s+1],p=n[s+2],m=n[s+3],_=a[u],x=a[u+1],M=a[u+2],E=a[u+3];return e[t]=c*E+m*_+h*M-p*x,e[t+1]=h*E+m*x+p*_-c*M,e[t+2]=p*E+m*M+c*x-h*_,e[t+3]=m*E-c*_-h*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,h=Math.sin,p=c(n/2),m=c(s/2),_=c(a/2),x=h(n/2),M=h(s/2),E=h(a/2);switch(u){case"XYZ":this._x=x*m*_+p*M*E,this._y=p*M*_-x*m*E,this._z=p*m*E+x*M*_,this._w=p*m*_-x*M*E;break;case"YXZ":this._x=x*m*_+p*M*E,this._y=p*M*_-x*m*E,this._z=p*m*E-x*M*_,this._w=p*m*_+x*M*E;break;case"ZXY":this._x=x*m*_-p*M*E,this._y=p*M*_+x*m*E,this._z=p*m*E+x*M*_,this._w=p*m*_-x*M*E;break;case"ZYX":this._x=x*m*_-p*M*E,this._y=p*M*_+x*m*E,this._z=p*m*E-x*M*_,this._w=p*m*_+x*M*E;break;case"YZX":this._x=x*m*_+p*M*E,this._y=p*M*_+x*m*E,this._z=p*m*E-x*M*_,this._w=p*m*_-x*M*E;break;case"XZY":this._x=x*m*_-p*M*E,this._y=p*M*_-x*m*E,this._z=p*m*E+x*M*_,this._w=p*m*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],u=t[1],c=t[5],h=t[9],p=t[2],m=t[6],_=t[10],x=n+c+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(m-h)*M,this._y=(a-p)*M,this._z=(u-s)*M}else if(n>c&&n>_){const M=2*Math.sqrt(1+n-c-_);this._w=(m-h)/M,this._x=.25*M,this._y=(s+u)/M,this._z=(a+p)/M}else if(c>_){const M=2*Math.sqrt(1+c-n-_);this._w=(a-p)/M,this._x=(s+u)/M,this._y=.25*M,this._z=(h+m)/M}else{const M=2*Math.sqrt(1+_-n-c);this._w=(u-s)/M,this._x=(a+p)/M,this._y=(h+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,u=e._w,c=t._x,h=t._y,p=t._z,m=t._w;return this._x=n*m+u*c+s*p-a*h,this._y=s*m+u*h+a*c-n*p,this._z=a*m+u*p+n*h-s*c,this._w=u*m-n*c-s*h-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=s,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*n+t*this._x,this._y=M*s+t*this._y,this._z=M*a+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,c),_=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=u*_+this._w*x,this._x=n*_+this._x*x,this._y=s*_+this._y*x,this._z=a*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,n=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,u=e.y,c=e.z,h=e.w,p=2*(u*s-c*n),m=2*(c*t-a*s),_=2*(a*n-u*t);return this.x=t+h*p+u*_-c*m,this.y=n+h*m+c*p-a*_,this.z=s+h*_+a*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,u=t.x,c=t.y,h=t.z;return this.x=s*h-a*c,this.y=a*u-n*h,this.z=n*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new ie,tl=new Hr;class kr{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,wn):wn.fromBufferAttribute(a,u),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),es.subVectors(this.max,Cr),Xi.subVectors(e.a,Cr),qi.subVectors(e.b,Cr),Yi.subVectors(e.c,Cr),oi.subVectors(qi,Xi),li.subVectors(Yi,qi),Ai.subVectors(Xi,Yi);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,li.z,0,-li.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ai.y,Ai.x,0];return!oa(t,Xi,qi,Yi,es)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Xi,qi,Yi,es))?!1:(ts.crossVectors(oi,li),t=[ts.x,ts.y,ts.z],oa(t,Xi,qi,Yi,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],wn=new ie,Qr=new kr,Xi=new ie,qi=new ie,Yi=new ie,oi=new ie,li=new ie,Ai=new ie,Cr=new ie,es=new ie,ts=new ie,wi=new ie;function oa(i,e,t,n,s){for(let a=0,u=i.length-3;a<=u;a+=3){wi.fromArray(i,a);const c=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),h=e.dot(wi),p=t.dot(wi),m=n.dot(wi);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>c)return!1}return!0}const mf=new kr,Rr=new ie,la=new ie;class Os{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(la)),this.expandByPoint(Rr.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new ie,ca=new ie,ns=new ie,ci=new ie,ua=new ie,is=new ie,fa=new ie;class ac{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ca.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ca);const a=e.distanceTo(t)*.5,u=-this.direction.dot(ns),c=ci.dot(this.direction),h=-ci.dot(ns),p=ci.lengthSq(),m=Math.abs(1-u*u);let _,x,M,E;if(m>0)if(_=u*h-c,x=u*c-h,E=a*m,_>=0)if(x>=-E)if(x<=E){const C=1/m;_*=C,x*=C,M=_*(_+u*x+2*c)+x*(u*_+x+2*h)+p}else x=a,_=Math.max(0,-(u*x+c)),M=-_*_+x*(x+2*h)+p;else x=-a,_=Math.max(0,-(u*x+c)),M=-_*_+x*(x+2*h)+p;else x<=-E?(_=Math.max(0,-(-u*a+c)),x=_>0?-a:Math.min(Math.max(-a,-h),a),M=-_*_+x*(x+2*h)+p):x<=E?(_=0,x=Math.min(Math.max(-a,-h),a),M=x*(x+2*h)+p):(_=Math.max(0,-(u*a+c)),x=_>0?a:Math.min(Math.max(-a,-h),a),M=-_*_+x*(x+2*h)+p);else x=u>0?-a:a,_=Math.max(0,-(u*x+c)),M=-_*_+x*(x+2*h)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(ca).addScaledVector(ns,x),M}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=n-u,h=n+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,u,c,h;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,s=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,s=(e.min.x-x.x)*p),m>=0?(a=(e.min.y-x.y)*m,u=(e.max.y-x.y)*m):(a=(e.max.y-x.y)*m,u=(e.min.y-x.y)*m),n>u||a>s||((a>n||isNaN(n))&&(n=a),(u<s||isNaN(s))&&(s=u),_>=0?(c=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(c=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,a){ua.subVectors(t,e),is.subVectors(n,e),fa.crossVectors(ua,is);let u=this.direction.dot(fa),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ci.subVectors(this.origin,e);const h=c*this.direction.dot(is.crossVectors(ci,is));if(h<0)return null;const p=c*this.direction.dot(ua.cross(ci));if(p<0||h+p>u)return null;const m=-c*ci.dot(fa);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,n,s,a,u,c,h,p,m,_,x,M,E,C,v){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,h,p,m,_,x,M,E,C,v)}set(e,t,n,s,a,u,c,h,p,m,_,x,M,E,C,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=a,g[5]=u,g[9]=c,g[13]=h,g[2]=p,g[6]=m,g[10]=_,g[14]=x,g[3]=M,g[7]=E,g[11]=C,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),a=1/ji.setFromMatrixColumn(e,1).length(),u=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),h=Math.cos(s),p=Math.sin(s),m=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const x=u*m,M=u*_,E=c*m,C=c*_;t[0]=h*m,t[4]=-h*_,t[8]=p,t[1]=M+E*p,t[5]=x-C*p,t[9]=-c*h,t[2]=C-x*p,t[6]=E+M*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*m,M=h*_,E=p*m,C=p*_;t[0]=x+C*c,t[4]=E*c-M,t[8]=u*p,t[1]=u*_,t[5]=u*m,t[9]=-c,t[2]=M*c-E,t[6]=C+x*c,t[10]=u*h}else if(e.order==="ZXY"){const x=h*m,M=h*_,E=p*m,C=p*_;t[0]=x-C*c,t[4]=-u*_,t[8]=E+M*c,t[1]=M+E*c,t[5]=u*m,t[9]=C-x*c,t[2]=-u*p,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const x=u*m,M=u*_,E=c*m,C=c*_;t[0]=h*m,t[4]=E*p-M,t[8]=x*p+C,t[1]=h*_,t[5]=C*p+x,t[9]=M*p-E,t[2]=-p,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,M=u*p,E=c*h,C=c*p;t[0]=h*m,t[4]=C-x*_,t[8]=E*_+M,t[1]=_,t[5]=u*m,t[9]=-c*m,t[2]=-p*m,t[6]=M*_+E,t[10]=x-C*_}else if(e.order==="XZY"){const x=u*h,M=u*p,E=c*h,C=c*p;t[0]=h*m,t[4]=-_,t[8]=p*m,t[1]=x*_+C,t[5]=u*m,t[9]=M*_-E,t[2]=E*_-M,t[6]=c*m,t[10]=C*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,_f)}lookAt(e,t,n){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(n,pn),ui.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(n,pn)),ui.normalize(),rs.crossVectors(pn,ui),s[0]=ui.x,s[4]=rs.x,s[8]=pn.x,s[1]=ui.y,s[5]=rs.y,s[9]=pn.y,s[2]=ui.z,s[6]=rs.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[4],h=n[8],p=n[12],m=n[1],_=n[5],x=n[9],M=n[13],E=n[2],C=n[6],v=n[10],g=n[14],O=n[3],L=n[7],N=n[11],ee=n[15],V=s[0],l=s[4],Q=s[8],he=s[12],A=s[1],P=s[5],ne=s[9],Y=s[13],fe=s[2],me=s[6],ae=s[10],pe=s[14],q=s[3],Te=s[7],xe=s[11],Se=s[15];return a[0]=u*V+c*A+h*fe+p*q,a[4]=u*l+c*P+h*me+p*Te,a[8]=u*Q+c*ne+h*ae+p*xe,a[12]=u*he+c*Y+h*pe+p*Se,a[1]=m*V+_*A+x*fe+M*q,a[5]=m*l+_*P+x*me+M*Te,a[9]=m*Q+_*ne+x*ae+M*xe,a[13]=m*he+_*Y+x*pe+M*Se,a[2]=E*V+C*A+v*fe+g*q,a[6]=E*l+C*P+v*me+g*Te,a[10]=E*Q+C*ne+v*ae+g*xe,a[14]=E*he+C*Y+v*pe+g*Se,a[3]=O*V+L*A+N*fe+ee*q,a[7]=O*l+L*P+N*me+ee*Te,a[11]=O*Q+L*ne+N*ae+ee*xe,a[15]=O*he+L*Y+N*pe+ee*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],u=e[1],c=e[5],h=e[9],p=e[13],m=e[2],_=e[6],x=e[10],M=e[14],E=e[3],C=e[7],v=e[11],g=e[15];return E*(+a*h*_-s*p*_-a*c*x+n*p*x+s*c*M-n*h*M)+C*(+t*h*M-t*p*x+a*u*x-s*u*M+s*p*m-a*h*m)+v*(+t*p*_-t*c*M-a*u*_+n*u*M+a*c*m-n*p*m)+g*(-s*c*m-t*h*_+t*c*x+s*u*_-n*u*x+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],h=e[6],p=e[7],m=e[8],_=e[9],x=e[10],M=e[11],E=e[12],C=e[13],v=e[14],g=e[15],O=_*v*p-C*x*p+C*h*M-c*v*M-_*h*g+c*x*g,L=E*x*p-m*v*p-E*h*M+u*v*M+m*h*g-u*x*g,N=m*C*p-E*_*p+E*c*M-u*C*M-m*c*g+u*_*g,ee=E*_*h-m*C*h-E*c*x+u*C*x+m*c*v-u*_*v,V=t*O+n*L+s*N+a*ee;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/V;return e[0]=O*l,e[1]=(C*x*a-_*v*a-C*s*M+n*v*M+_*s*g-n*x*g)*l,e[2]=(c*v*a-C*h*a+C*s*p-n*v*p-c*s*g+n*h*g)*l,e[3]=(_*h*a-c*x*a-_*s*p+n*x*p+c*s*M-n*h*M)*l,e[4]=L*l,e[5]=(m*v*a-E*x*a+E*s*M-t*v*M-m*s*g+t*x*g)*l,e[6]=(E*h*a-u*v*a-E*s*p+t*v*p+u*s*g-t*h*g)*l,e[7]=(u*x*a-m*h*a+m*s*p-t*x*p-u*s*M+t*h*M)*l,e[8]=N*l,e[9]=(E*_*a-m*C*a-E*n*M+t*C*M+m*n*g-t*_*g)*l,e[10]=(u*C*a-E*c*a+E*n*p-t*C*p-u*n*g+t*c*g)*l,e[11]=(m*c*a-u*_*a-m*n*p+t*_*p+u*n*M-t*c*M)*l,e[12]=ee*l,e[13]=(m*C*s-E*_*s+E*n*x-t*C*x-m*n*v+t*_*v)*l,e[14]=(E*c*s-u*C*s-E*n*h+t*C*h+u*n*v-t*c*v)*l,e[15]=(u*_*s-m*c*s+m*n*h-t*_*h-u*n*x+t*c*x)*l,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,u=e.x,c=e.y,h=e.z,p=a*u,m=a*c;return this.set(p*u+n,p*c-s*h,p*h+s*c,0,p*c+s*h,m*c+n,m*h-s*u,0,p*h-s*c,m*h+s*u,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,u){return this.set(1,n,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,u=t._y,c=t._z,h=t._w,p=a+a,m=u+u,_=c+c,x=a*p,M=a*m,E=a*_,C=u*m,v=u*_,g=c*_,O=h*p,L=h*m,N=h*_,ee=n.x,V=n.y,l=n.z;return s[0]=(1-(C+g))*ee,s[1]=(M+N)*ee,s[2]=(E-L)*ee,s[3]=0,s[4]=(M-N)*V,s[5]=(1-(x+g))*V,s[6]=(v+O)*V,s[7]=0,s[8]=(E+L)*l,s[9]=(v-O)*l,s[10]=(1-(x+C))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ji.set(s[0],s[1],s[2]).length();const u=ji.set(s[4],s[5],s[6]).length(),c=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const p=1/a,m=1/u,_=1/c;return Cn.elements[0]*=p,Cn.elements[1]*=p,Cn.elements[2]*=p,Cn.elements[4]*=m,Cn.elements[5]*=m,Cn.elements[6]*=m,Cn.elements[8]*=_,Cn.elements[9]*=_,Cn.elements[10]*=_,t.setFromRotationMatrix(Cn),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,s,a,u,c=Qn){const h=this.elements,p=2*a/(t-e),m=2*a/(n-s),_=(t+e)/(t-e),x=(n+s)/(n-s);let M,E;if(c===Qn)M=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Ls)M=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,u,c=Qn){const h=this.elements,p=1/(t-e),m=1/(n-s),_=1/(u-a),x=(t+e)*p,M=(n+s)*m;let E,C;if(c===Qn)E=(u+a)*_,C=-2*_;else if(c===Ls)E=a*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=C,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new ie,Cn=new Ht,gf=new ie(0,0,0),_f=new ie(1,1,1),ui=new ie,rs=new ie,pn=new ie,nl=new Ht,il=new Hr;class ti{constructor(e=0,t=0,n=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],h=s[1],p=s[5],m=s[9],_=s[2],x=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-on(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(on(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-on(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return il.setFromEuler(this),this.setFromQuaternion(il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vf=0;const rl=new ie,Ki=new Hr,Yn=new Ht,ss=new ie,Pr=new ie,xf=new ie,Sf=new Hr,sl=new ie(1,0,0),al=new ie(0,1,0),ol=new ie(0,0,1),ll={type:"added"},Mf={type:"removed"},Zi={type:"childadded",child:null},ha={type:"childremoved",child:null};class dn extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new ie,t=new ti,n=new Hr,s=new ie(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ut}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(al,e)}rotateZ(e){return this.rotateOnAxis(ol,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(al,e)}translateZ(e){return this.translateOnAxis(ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Pr,ss,this.up):Yn.lookAt(ss,Pr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ll),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mf),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ll),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Sf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const _=h[p];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(a(e.materials,this.material[h]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(a(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),p=u(e.textures),m=u(e.images),_=u(e.shapes),x=u(e.skeletons),M=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),x.length>0&&(n.skeletons=x),M.length>0&&(n.animations=M),E.length>0&&(n.nodes=E)}return n.object=s,n;function u(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dn.DEFAULT_UP=new ie(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new ie,jn=new ie,da=new ie,Kn=new ie,$i=new ie,Ji=new ie,cl=new ie,pa=new ie,ma=new ie,ga=new ie,_a=new zt,va=new zt,xa=new zt;class Dn{constructor(e=new ie,t=new ie,n=new ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Rn.subVectors(s,t),jn.subVectors(n,t),da.subVectors(e,t);const u=Rn.dot(Rn),c=Rn.dot(jn),h=Rn.dot(da),p=jn.dot(jn),m=jn.dot(da),_=u*p-c*c;if(_===0)return a.set(0,0,0),null;const x=1/_,M=(p*h-c*m)*x,E=(u*m-c*h)*x;return a.set(1-M-E,E,M)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,s,a,u,c,h){return this.getBarycoord(e,t,n,s,Kn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Kn.x),h.addScaledVector(u,Kn.y),h.addScaledVector(c,Kn.z),h)}static getInterpolatedAttribute(e,t,n,s,a,u){return _a.setScalar(0),va.setScalar(0),xa.setScalar(0),_a.fromBufferAttribute(e,t),va.fromBufferAttribute(e,n),xa.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(_a,a.x),u.addScaledVector(va,a.y),u.addScaledVector(xa,a.z),u}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),jn.subVectors(e,t),Rn.cross(jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Rn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let u,c;$i.subVectors(s,n),Ji.subVectors(a,n),pa.subVectors(e,n);const h=$i.dot(pa),p=Ji.dot(pa);if(h<=0&&p<=0)return t.copy(n);ma.subVectors(e,s);const m=$i.dot(ma),_=Ji.dot(ma);if(m>=0&&_<=m)return t.copy(s);const x=h*_-m*p;if(x<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(n).addScaledVector($i,u);ga.subVectors(e,a);const M=$i.dot(ga),E=Ji.dot(ga);if(E>=0&&M<=E)return t.copy(a);const C=M*p-h*E;if(C<=0&&p>=0&&E<=0)return c=p/(p-E),t.copy(n).addScaledVector(Ji,c);const v=m*E-M*_;if(v<=0&&_-m>=0&&M-E>=0)return cl.subVectors(a,s),c=(_-m)/(_-m+(M-E)),t.copy(s).addScaledVector(cl,c);const g=1/(v+C+x);return u=C*g,c=x*g,t.copy(n).addScaledVector($i,u).addScaledVector(Ji,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},as={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=Co(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Sa(u,a,e+1/3),this.g=Sa(u,a,e),this.b=Sa(u,a,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Bn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bn){const n=lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Rt.fromWorkingColorSpace(en.copy(this),e),Math.round(on(en.r*255,0,255))*65536+Math.round(on(en.g*255,0,255))*256+Math.round(on(en.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(en.copy(this),t);const n=en.r,s=en.g,a=en.b,u=Math.max(n,s,a),c=Math.min(n,s,a);let h,p;const m=(c+u)/2;if(c===u)h=0,p=0;else{const _=u-c;switch(p=m<=.5?_/(u+c):_/(2-u-c),u){case n:h=(s-a)/_+(s<a?6:0);break;case s:h=(a-n)/_+2;break;case a:h=(n-s)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Bn){Rt.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,s=en.b;return e!==Bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(as);const n=Ir(fi.h,as.h,t),s=Ir(fi.s,as.s,t),a=Ir(fi.l,as.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Pt;Pt.NAMES=lc;let yf=0;class Gr extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=sr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=La,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const u=[];for(const c in a){const h=a[c];delete h.metadata,u.push(h)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nr extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new ie,os=new yt;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array),a=sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),e}}class cc extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uc extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hn extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ef=0;const xn=new Ht,Ma=new dn,Qi=new ie,mn=new kr,Dr=new kr,jt=new ie;class kn extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)?uc:cc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ut().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];Dr.setFromBufferAttribute(c),this.morphTargetsRelative?(jt.addVectors(mn.min,Dr.min),mn.expandByPoint(jt),jt.addVectors(mn.max,Dr.max),mn.expandByPoint(jt)):(mn.expandByPoint(Dr.min),mn.expandByPoint(Dr.max))}mn.getCenter(n);let s=0;for(let a=0,u=e.count;a<u;a++)jt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],h=this.morphTargetsRelative;for(let p=0,m=c.count;p<m;p++)jt.fromBufferAttribute(c,p),h&&(Qi.fromBufferAttribute(e,p),jt.add(Qi)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let Q=0;Q<n.count;Q++)c[Q]=new ie,h[Q]=new ie;const p=new ie,m=new ie,_=new ie,x=new yt,M=new yt,E=new yt,C=new ie,v=new ie;function g(Q,he,A){p.fromBufferAttribute(n,Q),m.fromBufferAttribute(n,he),_.fromBufferAttribute(n,A),x.fromBufferAttribute(a,Q),M.fromBufferAttribute(a,he),E.fromBufferAttribute(a,A),m.sub(p),_.sub(p),M.sub(x),E.sub(x);const P=1/(M.x*E.y-E.x*M.y);isFinite(P)&&(C.copy(m).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(P),v.copy(_).multiplyScalar(M.x).addScaledVector(m,-E.x).multiplyScalar(P),c[Q].add(C),c[he].add(C),c[A].add(C),h[Q].add(v),h[he].add(v),h[A].add(v))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Q=0,he=O.length;Q<he;++Q){const A=O[Q],P=A.start,ne=A.count;for(let Y=P,fe=P+ne;Y<fe;Y+=3)g(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const L=new ie,N=new ie,ee=new ie,V=new ie;function l(Q){ee.fromBufferAttribute(s,Q),V.copy(ee);const he=c[Q];L.copy(he),L.sub(ee.multiplyScalar(ee.dot(he))).normalize(),N.crossVectors(V,he);const P=N.dot(h[Q])<0?-1:1;u.setXYZW(Q,L.x,L.y,L.z,P)}for(let Q=0,he=O.length;Q<he;++Q){const A=O[Q],P=A.start,ne=A.count;for(let Y=P,fe=P+ne;Y<fe;Y+=3)l(e.getX(Y+0)),l(e.getX(Y+1)),l(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,M=n.count;x<M;x++)n.setXYZ(x,0,0,0);const s=new ie,a=new ie,u=new ie,c=new ie,h=new ie,p=new ie,m=new ie,_=new ie;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),C=e.getX(x+1),v=e.getX(x+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,C),u.fromBufferAttribute(t,v),m.subVectors(u,a),_.subVectors(s,a),m.cross(_),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),p.fromBufferAttribute(n,v),c.add(m),h.add(m),p.add(m),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(C,h.x,h.y,h.z),n.setXYZ(v,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)s.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),m.subVectors(u,a),_.subVectors(s,a),m.cross(_),n.setXYZ(x+0,m.x,m.y,m.z),n.setXYZ(x+1,m.x,m.y,m.z),n.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(c,h){const p=c.array,m=c.itemSize,_=c.normalized,x=new p.constructor(h.length*m);let M=0,E=0;for(let C=0,v=h.length;C<v;C++){c.isInterleavedBufferAttribute?M=h[C]*c.data.stride+c.offset:M=h[C]*m;for(let g=0;g<m;g++)x[E++]=p[M++]}return new En(x,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,s=this.attributes;for(const c in s){const h=s[c],p=e(h,n);t.setAttribute(c,p)}const a=this.morphAttributes;for(const c in a){const h=[],p=a[c];for(let m=0,_=p.length;m<_;m++){const x=p[m],M=e(x,n);h.push(M)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const p=u[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];m.push(M.toJSON(e.data))}m.length>0&&(s[h]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(t))}const a=e.morphAttributes;for(const p in a){const m=[],_=a[p];for(let x=0,M=_.length;x<M;x++)m.push(_[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new Ht,Ci=new ac,ls=new Os,fl=new ie,cs=new ie,us=new ie,fs=new ie,ya=new ie,hs=new ie,hl=new ie,ds=new ie;class yn extends dn{constructor(e=new kn,t=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){hs.set(0,0,0);for(let h=0,p=a.length;h<p;h++){const m=c[h],_=a[h];m!==0&&(ya.fromBufferAttribute(_,e),u?hs.addScaledVector(ya,m):hs.addScaledVector(ya.sub(t),m))}t.add(hs)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(a),Ci.copy(e.ray).recast(e.near),!(ls.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ls,fl)===null||Ci.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(ul.copy(a).invert(),Ci.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s;const a=this.geometry,u=this.material,c=a.index,h=a.attributes.position,p=a.attributes.uv,m=a.attributes.uv1,_=a.attributes.normal,x=a.groups,M=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,C=x.length;E<C;E++){const v=x[E],g=u[v.materialIndex],O=Math.max(v.start,M.start),L=Math.min(c.count,Math.min(v.start+v.count,M.start+M.count));for(let N=O,ee=L;N<ee;N+=3){const V=c.getX(N),l=c.getX(N+1),Q=c.getX(N+2);s=ps(this,g,e,n,p,m,_,V,l,Q),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const E=Math.max(0,M.start),C=Math.min(c.count,M.start+M.count);for(let v=E,g=C;v<g;v+=3){const O=c.getX(v),L=c.getX(v+1),N=c.getX(v+2);s=ps(this,u,e,n,p,m,_,O,L,N),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,C=x.length;E<C;E++){const v=x[E],g=u[v.materialIndex],O=Math.max(v.start,M.start),L=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let N=O,ee=L;N<ee;N+=3){const V=N,l=N+1,Q=N+2;s=ps(this,g,e,n,p,m,_,V,l,Q),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const E=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let v=E,g=C;v<g;v+=3){const O=v,L=v+1,N=v+2;s=ps(this,u,e,n,p,m,_,O,L,N),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function Tf(i,e,t,n,s,a,u,c){let h;if(e.side===hn?h=n.intersectTriangle(u,a,s,!0,c):h=n.intersectTriangle(s,a,u,e.side===gi,c),h===null)return null;ds.copy(c),ds.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(ds);return p<t.near||p>t.far?null:{distance:p,point:ds.clone(),object:i}}function ps(i,e,t,n,s,a,u,c,h,p){i.getVertexPosition(c,cs),i.getVertexPosition(h,us),i.getVertexPosition(p,fs);const m=Tf(i,e,t,n,cs,us,fs,hl);if(m){const _=new ie;Dn.getBarycoord(hl,cs,us,fs,_),s&&(m.uv=Dn.getInterpolatedAttribute(s,c,h,p,_,new yt)),a&&(m.uv1=Dn.getInterpolatedAttribute(a,c,h,p,_,new yt)),u&&(m.normal=Dn.getInterpolatedAttribute(u,c,h,p,_,new ie),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const x={a:c,b:h,c:p,normal:new ie,materialIndex:0};Dn.getNormal(cs,us,fs,x.normal),m.face=x,m.barycoord=_}return m}class gr extends kn{constructor(e=1,t=1,n=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const h=[],p=[],m=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,s,u,2),E("x","z","y",1,-1,e,n,-t,s,u,3),E("x","y","z",1,-1,e,t,n,s,a,4),E("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(m,3)),this.setAttribute("uv",new Hn(_,2));function E(C,v,g,O,L,N,ee,V,l,Q,he){const A=N/l,P=ee/Q,ne=N/2,Y=ee/2,fe=V/2,me=l+1,ae=Q+1;let pe=0,q=0;const Te=new ie;for(let xe=0;xe<ae;xe++){const Se=xe*P-Y;for(let dt=0;dt<me;dt++){const gt=dt*A-ne;Te[C]=gt*O,Te[v]=Se*L,Te[g]=fe,p.push(Te.x,Te.y,Te.z),Te[C]=0,Te[v]=0,Te[g]=V>0?1:-1,m.push(Te.x,Te.y,Te.z),_.push(dt/l),_.push(1-xe/Q),pe+=1}}for(let xe=0;xe<Q;xe++)for(let Se=0;Se<l;Se++){const dt=x+Se+me*xe,gt=x+Se+me*(xe+1),ce=x+(Se+1)+me*(xe+1),ve=x+(Se+1)+me*xe;h.push(dt,gt,ve),h.push(gt,ce,ve),q+=6}c.addGroup(M,q,he),M+=q,x+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=dr(i[t]);for(const s in n)e[s]=n[s]}return e}function bf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Af={clone:dr,merge:an};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hc extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new ie,dl=new yt,pl=new yt;class Sn extends hc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,dl,pl),t.subVectors(pl,dl)}setViewOffset(e,t,n,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;a+=u.offsetX*s/h,t-=u.offsetY*n/p,s*=u.width/h,n*=u.height/p}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class Rf extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(er,tr,e,t);s.layers=this.layers,this.add(s);const a=new Sn(er,tr,e,t);a.layers=this.layers,this.add(a);const u=new Sn(er,tr,e,t);u.layers=this.layers,this.add(u);const c=new Sn(er,tr,e,t);c.layers=this.layers,this.add(c);const h=new Sn(er,tr,e,t);h.layers=this.layers,this.add(h);const p=new Sn(er,tr,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,u,c,h]=t;for(const p of t)this.remove(p);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,h,p,m]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,u),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,p),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,s),e.render(t,m),e.setRenderTarget(_,x,M),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class dc extends ln{constructor(e,t,n,s,a,u,c,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:cr,super(e,t,n,s,a,u,c,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pf extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new dc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gr(5,5,5),a=new _i({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:pi});a.uniforms.tEquirect.value=t;const u=new yn(s,a),c=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Pn),new Rf(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(a)}}const Ea=new ie,Df=new ie,Lf=new ut;class Li{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ea.subVectors(n,t).cross(Df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lf.getNormalMatrix(e),s=this.coplanarPoint(Ea).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Os,ms=new ie;class pc{constructor(e=new Li,t=new Li,n=new Li,s=new Li,a=new Li,u=new Li){this.planes=[e,t,n,s,a,u]}set(e,t,n,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],h=s[3],p=s[4],m=s[5],_=s[6],x=s[7],M=s[8],E=s[9],C=s[10],v=s[11],g=s[12],O=s[13],L=s[14],N=s[15];if(n[0].setComponents(h-a,x-p,v-M,N-g).normalize(),n[1].setComponents(h+a,x+p,v+M,N+g).normalize(),n[2].setComponents(h+u,x+m,v+E,N+O).normalize(),n[3].setComponents(h-u,x-m,v-E,N-O).normalize(),n[4].setComponents(h-c,x-_,v-C,N-L).normalize(),t===Qn)n[5].setComponents(h+c,x+_,v+C,N+L).normalize();else if(t===Ls)n[5].setComponents(c,_,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ms.x=s.normal.x>0?e.max.x:e.min.x,ms.y=s.normal.y>0?e.max.y:e.min.y,ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mc(){let i=null,e=!1,t=null,n=null;function s(a,u){t(a,u),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Uf(i){const e=new WeakMap;function t(c,h){const p=c.array,m=c.usage,_=p.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,p,m),c.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(p instanceof Uint16Array)c.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:_}}function n(c,h,p){const m=h.array,_=h.updateRanges;if(i.bindBuffer(p,c),_.length===0)i.bufferSubData(p,0,m);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],C=_[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,_[x]=C)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const C=_[M];i.bufferSubData(p,C.start*m.BYTES_PER_ELEMENT,m,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(i.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const p=e.get(c);if(p===void 0)e.set(c,t(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,c,h),p.version=c.version}}return{get:s,remove:a,update:u}}class Bs extends kn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(n),h=Math.floor(s),p=c+1,m=h+1,_=e/c,x=t/h,M=[],E=[],C=[],v=[];for(let g=0;g<m;g++){const O=g*x-u;for(let L=0;L<p;L++){const N=L*_-a;E.push(N,-O,0),C.push(0,0,1),v.push(L/c),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let O=0;O<c;O++){const L=O+p*g,N=O+p*(g+1),ee=O+1+p*(g+1),V=O+1+p*g;M.push(L,N,V),M.push(N,ee,V)}this.setIndex(M),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf=`#ifdef USE_BATCHING
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ih=`#define PI 3.141592653589793
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
} // validated`,rh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uh="gl_FragColor = linearToOutputTexel( gl_FragColor );",fh=`
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
}`,hh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mh=`#ifdef USE_GRADIENTMAP
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
}`,yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bh=`uniform bool receiveShadow;
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
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
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
#endif`,Lh=`struct PhysicalMaterial {
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
}`,Uh=`
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vh=`#if defined( USE_POINTS_UV )
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
#endif`,Wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
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
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vd=`float getShadowMask() {
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
}`,xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
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
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`#include <common>
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
}`,Hd=`#if DEPTH_PACKING == 3200
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
}`,kd=`#define DISTANCE
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
}`,Gd=`#define DISTANCE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,jd=`uniform vec3 diffuse;
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
}`,Kd=`#define LAMBERT
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
}`,Zd=`#define LAMBERT
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
}`,$d=`#define MATCAP
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
}`,Jd=`#define MATCAP
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
}`,Qd=`#define NORMAL
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
}`,ep=`#define NORMAL
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
}`,tp=`#define PHONG
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
}`,np=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,rp=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,ap=`#define TOON
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
}`,op=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,up=`uniform vec3 color;
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
}`,fp=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:If,alphahash_pars_fragment:Nf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:zf,aomap_fragment:Hf,aomap_pars_fragment:kf,batching_pars_vertex:Gf,batching_vertex:Vf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:jf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:Jf,color_fragment:Qf,color_pars_fragment:eh,color_pars_vertex:th,color_vertex:nh,common:ih,cube_uv_reflection_fragment:rh,defaultnormal_vertex:sh,displacementmap_pars_vertex:ah,displacementmap_vertex:oh,emissivemap_fragment:lh,emissivemap_pars_fragment:ch,colorspace_fragment:uh,colorspace_pars_fragment:fh,envmap_fragment:hh,envmap_common_pars_fragment:dh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:Ah,envmap_vertex:gh,fog_vertex:_h,fog_pars_vertex:vh,fog_fragment:xh,fog_pars_fragment:Sh,gradientmap_pars_fragment:Mh,lightmap_pars_fragment:yh,lights_lambert_fragment:Eh,lights_lambert_pars_fragment:Th,lights_pars_begin:bh,lights_toon_fragment:wh,lights_toon_pars_fragment:Ch,lights_phong_fragment:Rh,lights_phong_pars_fragment:Ph,lights_physical_fragment:Dh,lights_physical_pars_fragment:Lh,lights_fragment_begin:Uh,lights_fragment_maps:Ih,lights_fragment_end:Nh,logdepthbuf_fragment:Fh,logdepthbuf_pars_fragment:Oh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:zh,map_fragment:Hh,map_pars_fragment:kh,map_particle_fragment:Gh,map_particle_pars_fragment:Vh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:Xh,morphinstance_vertex:qh,morphcolor_vertex:Yh,morphnormal_vertex:jh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Zh,normal_fragment_begin:$h,normal_fragment_maps:Jh,normal_pars_fragment:Qh,normal_pars_vertex:ed,normal_vertex:td,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:sd,iridescence_pars_fragment:ad,opaque_fragment:od,packing:ld,premultiplied_alpha_fragment:cd,project_vertex:ud,dithering_fragment:fd,dithering_pars_fragment:hd,roughnessmap_fragment:dd,roughnessmap_pars_fragment:pd,shadowmap_pars_fragment:md,shadowmap_pars_vertex:gd,shadowmap_vertex:_d,shadowmask_pars_fragment:vd,skinbase_vertex:xd,skinning_pars_vertex:Sd,skinning_vertex:Md,skinnormal_vertex:yd,specularmap_fragment:Ed,specularmap_pars_fragment:Td,tonemapping_fragment:bd,tonemapping_pars_fragment:Ad,transmission_fragment:wd,transmission_pars_fragment:Cd,uv_pars_fragment:Rd,uv_pars_vertex:Pd,uv_vertex:Dd,worldpos_vertex:Ld,background_vert:Ud,background_frag:Id,backgroundCube_vert:Nd,backgroundCube_frag:Fd,cube_vert:Od,cube_frag:Bd,depth_vert:zd,depth_frag:Hd,distanceRGBA_vert:kd,distanceRGBA_frag:Gd,equirect_vert:Vd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:qd,meshbasic_vert:Yd,meshbasic_frag:jd,meshlambert_vert:Kd,meshlambert_frag:Zd,meshmatcap_vert:$d,meshmatcap_frag:Jd,meshnormal_vert:Qd,meshnormal_frag:ep,meshphong_vert:tp,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:rp,meshtoon_vert:sp,meshtoon_frag:ap,points_vert:op,points_frag:lp,shadow_vert:cp,shadow_frag:up,sprite_vert:fp,sprite_frag:hp},Ce={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},zn={basic:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:an([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:an([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:an([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:an([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:an([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:an([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:an([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:an([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:an([Ce.common,Ce.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:an([Ce.lights,Ce.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};zn.physical={uniforms:an([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const gs={r:0,b:0,g:0},Pi=new ti,dp=new Ht;function pp(i,e,t,n,s,a,u){const c=new Pt(0);let h=a===!0?0:1,p,m,_=null,x=0,M=null;function E(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?t:e).get(L)),L}function C(O){let L=!1;const N=E(O);N===null?g(c,h):N&&N.isColor&&(g(N,1),L=!0);const ee=i.xr.getEnvironmentBlendMode();ee==="additive"?n.buffers.color.setClear(0,0,0,1,u):ee==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(O,L){const N=E(L);N&&(N.isCubeTexture||N.mapping===Ns)?(m===void 0&&(m=new yn(new gr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:dr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(ee,V,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Pi.copy(L.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(Pi)),m.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ft,(_!==N||x!==N.version||M!==i.toneMapping)&&(m.material.needsUpdate=!0,_=N,x=N.version,M=i.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new yn(new Bs(2,2),new _i({name:"BackgroundMaterial",uniforms:dr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ft,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||x!==N.version||M!==i.toneMapping)&&(p.material.needsUpdate=!0,_=N,x=N.version,M=i.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,L){O.getRGB(gs,fc(i)),n.buffers.color.setClear(gs.r,gs.g,gs.b,L,u)}return{getClearColor:function(){return c},setClearColor:function(O,L=1){c.set(O),h=L,g(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,g(c,h)},render:C,addToRenderList:v}}function mp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=x(null);let a=s,u=!1;function c(A,P,ne,Y,fe){let me=!1;const ae=_(Y,ne,P);a!==ae&&(a=ae,p(a.object)),me=M(A,Y,ne,fe),me&&E(A,Y,ne,fe),fe!==null&&e.update(fe,i.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,N(A,P,ne,Y),fe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return i.createVertexArray()}function p(A){return i.bindVertexArray(A)}function m(A){return i.deleteVertexArray(A)}function _(A,P,ne){const Y=ne.wireframe===!0;let fe=n[A.id];fe===void 0&&(fe={},n[A.id]=fe);let me=fe[P.id];me===void 0&&(me={},fe[P.id]=me);let ae=me[Y];return ae===void 0&&(ae=x(h()),me[Y]=ae),ae}function x(A){const P=[],ne=[],Y=[];for(let fe=0;fe<t;fe++)P[fe]=0,ne[fe]=0,Y[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:ne,attributeDivisors:Y,object:A,attributes:{},index:null}}function M(A,P,ne,Y){const fe=a.attributes,me=P.attributes;let ae=0;const pe=ne.getAttributes();for(const q in pe)if(pe[q].location>=0){const xe=fe[q];let Se=me[q];if(Se===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(Se=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(Se=A.instanceColor)),xe===void 0||xe.attribute!==Se||Se&&xe.data!==Se.data)return!0;ae++}return a.attributesNum!==ae||a.index!==Y}function E(A,P,ne,Y){const fe={},me=P.attributes;let ae=0;const pe=ne.getAttributes();for(const q in pe)if(pe[q].location>=0){let xe=me[q];xe===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(xe=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(xe=A.instanceColor));const Se={};Se.attribute=xe,xe&&xe.data&&(Se.data=xe.data),fe[q]=Se,ae++}a.attributes=fe,a.attributesNum=ae,a.index=Y}function C(){const A=a.newAttributes;for(let P=0,ne=A.length;P<ne;P++)A[P]=0}function v(A){g(A,0)}function g(A,P){const ne=a.newAttributes,Y=a.enabledAttributes,fe=a.attributeDivisors;ne[A]=1,Y[A]===0&&(i.enableVertexAttribArray(A),Y[A]=1),fe[A]!==P&&(i.vertexAttribDivisor(A,P),fe[A]=P)}function O(){const A=a.newAttributes,P=a.enabledAttributes;for(let ne=0,Y=P.length;ne<Y;ne++)P[ne]!==A[ne]&&(i.disableVertexAttribArray(ne),P[ne]=0)}function L(A,P,ne,Y,fe,me,ae){ae===!0?i.vertexAttribIPointer(A,P,ne,fe,me):i.vertexAttribPointer(A,P,ne,Y,fe,me)}function N(A,P,ne,Y){C();const fe=Y.attributes,me=ne.getAttributes(),ae=P.defaultAttributeValues;for(const pe in me){const q=me[pe];if(q.location>=0){let Te=fe[pe];if(Te===void 0&&(pe==="instanceMatrix"&&A.instanceMatrix&&(Te=A.instanceMatrix),pe==="instanceColor"&&A.instanceColor&&(Te=A.instanceColor)),Te!==void 0){const xe=Te.normalized,Se=Te.itemSize,dt=e.get(Te);if(dt===void 0)continue;const gt=dt.buffer,ce=dt.type,ve=dt.bytesPerElement,Fe=ce===i.INT||ce===i.UNSIGNED_INT||Te.gpuType===Mo;if(Te.isInterleavedBufferAttribute){const be=Te.data,We=be.stride,qe=Te.offset;if(be.isInstancedInterleavedBuffer){for(let Qe=0;Qe<q.locationSize;Qe++)g(q.location+Qe,be.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Qe=0;Qe<q.locationSize;Qe++)v(q.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Qe=0;Qe<q.locationSize;Qe++)L(q.location+Qe,Se/q.locationSize,ce,xe,We*ve,(qe+Se/q.locationSize*Qe)*ve,Fe)}else{if(Te.isInstancedBufferAttribute){for(let be=0;be<q.locationSize;be++)g(q.location+be,Te.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let be=0;be<q.locationSize;be++)v(q.location+be);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let be=0;be<q.locationSize;be++)L(q.location+be,Se/q.locationSize,ce,xe,Se*ve,Se/q.locationSize*be*ve,Fe)}}else if(ae!==void 0){const xe=ae[pe];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(q.location,xe);break;case 3:i.vertexAttrib3fv(q.location,xe);break;case 4:i.vertexAttrib4fv(q.location,xe);break;default:i.vertexAttrib1fv(q.location,xe)}}}}O()}function ee(){Q();for(const A in n){const P=n[A];for(const ne in P){const Y=P[ne];for(const fe in Y)m(Y[fe].object),delete Y[fe];delete P[ne]}delete n[A]}}function V(A){if(n[A.id]===void 0)return;const P=n[A.id];for(const ne in P){const Y=P[ne];for(const fe in Y)m(Y[fe].object),delete Y[fe];delete P[ne]}delete n[A.id]}function l(A){for(const P in n){const ne=n[P];if(ne[A.id]===void 0)continue;const Y=ne[A.id];for(const fe in Y)m(Y[fe].object),delete Y[fe];delete ne[A.id]}}function Q(){he(),u=!0,a!==s&&(a=s,p(a.object))}function he(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:Q,resetDefaultState:he,dispose:ee,releaseStatesOfGeometry:V,releaseStatesOfProgram:l,initAttributes:C,enableAttribute:v,disableUnusedAttributes:O}}function gp(i,e,t){let n;function s(p){n=p}function a(p,m){i.drawArrays(n,p,m),t.update(m,n,1)}function u(p,m,_){_!==0&&(i.drawArraysInstanced(n,p,m,_),t.update(m,n,_))}function c(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,m,0,_);let M=0;for(let E=0;E<_;E++)M+=m[E];t.update(M,n,1)}function h(p,m,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)u(p[E],m[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(n,p,0,m,0,x,0,_);let E=0;for(let C=0;C<_;C++)E+=m[C];for(let C=0;C<x.length;C++)t.update(E,n,x[C])}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function _p(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const l=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(l){return!(l!==Ln&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(l){const Q=l===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==ei&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==Jn&&!Q)}function h(l){if(l==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const l=e.get("EXT_clip_control");l.clipControlEXT(l.LOWER_LEFT_EXT,l.ZERO_TO_ONE_EXT)}const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),ee=E>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:N,vertexTextures:ee,maxSamples:V}}function vp(i){const e=this;let t=null,n=0,s=!1,a=!1;const u=new Li,c=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||n!==0||s;return s=x,n=_.length,M},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,x){t=m(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,C=_.clipIntersection,v=_.clipShadows,g=i.get(_);if(!s||E===null||E.length===0||a&&!v)a?m(null):p();else{const O=a?0:n,L=O*4;let N=g.clippingState||null;h.value=N,N=m(E,x,L,M);for(let ee=0;ee!==L;++ee)N[ee]=t[ee];g.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,x,M,E){const C=_!==null?_.length:0;let v=null;if(C!==0){if(v=h.value,E!==!0||v===null){const g=M+C*4,O=x.matrixWorldInverse;c.getNormalMatrix(O),(v===null||v.length<g)&&(v=new Float32Array(g));for(let L=0,N=M;L!==C;++L,N+=4)u.copy(_[L]).applyMatrix4(O,c),u.normal.toArray(v,N),v[N+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}function xp(i){let e=new WeakMap;function t(u,c){return c===Ha?u.mapping=cr:c===ka&&(u.mapping=ur),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Ha||c===ka)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new Pf(h.height);return p.fromEquirectangularTexture(i,u),e.set(u,p),u.addEventListener("dispose",s),t(p.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Sp extends hc{constructor(e=-1,t=1,n=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,u=a+p*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,ml=[.125,.215,.35,.446,.526,.582],Ni=20,Ta=new Sp,gl=new Pt;let ba=null,Aa=0,wa=0,Ca=!1;const Ui=(1+Math.sqrt(5))/2,nr=1/Ui,_l=[new ie(-Ui,nr,0),new ie(Ui,nr,0),new ie(-nr,0,Ui),new ie(nr,0,Ui),new ie(0,Ui,-nr),new ie(0,Ui,nr),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Aa,wa),this._renderer.xr.enabled=Ca,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:zr,format:Ln,colorSpace:vi,depthBuffer:!1},s=xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(a)),this._blurMaterial=yp(a,e,t)}return s}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,s){const c=new Sn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(gl),m.toneMapping=mi,m.autoClear=!1;const M=new Nr({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),E=new yn(new gr,M);let C=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,C=!0):(M.color.copy(gl),C=!0);for(let g=0;g<6;g++){const O=g%3;O===0?(c.up.set(0,h[g],0),c.lookAt(p[g],0,0)):O===1?(c.up.set(0,0,h[g]),c.lookAt(0,p[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,p[g]));const L=this._cubeSize;_s(s,O*L,g>2?L:0,L,L),m.setRenderTarget(s),C&&m.render(E,c),m.render(e,c)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===cr||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new yn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;_s(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(u,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=_l[(s-a-1)%_l.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,s,"latitudinal",a),this._halfBlur(u,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,u,c){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new yn(this._lodPlanes[s],p),x=p.uniforms,M=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*M):2*Math.PI/(2*Ni-1),C=a/E,v=isFinite(a)?1+Math.floor(m*C):Ni;v>Ni&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ni}`);const g=[];let O=0;for(let l=0;l<Ni;++l){const Q=l/C,he=Math.exp(-Q*Q/2);g.push(he),l===0?O+=he:l<v&&(O+=2*he)}for(let l=0;l<g.length;l++)g[l]=g[l]/O;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=u==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-n;const N=this._sizeLods[s],ee=3*N*(s>L-rr?s-L+rr:0),V=4*(this._cubeSize-N);_s(t,ee,V,3*N,2*N),h.setRenderTarget(t),h.render(_,Ta)}}function Mp(i){const e=[],t=[],n=[];let s=i;const a=i-rr+1+ml.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let h=1/c;u>i-rr?h=ml[u-i+rr-1]:u===0&&(h=0),n.push(h);const p=1/(c-2),m=-p,_=1+p,x=[m,m,_,m,_,_,m,m,_,_,m,_],M=6,E=6,C=3,v=2,g=1,O=new Float32Array(C*E*M),L=new Float32Array(v*E*M),N=new Float32Array(g*E*M);for(let V=0;V<M;V++){const l=V%3*2/3-1,Q=V>2?0:-1,he=[l,Q,0,l+2/3,Q,0,l+2/3,Q+1,0,l,Q,0,l+2/3,Q+1,0,l,Q+1,0];O.set(he,C*E*V),L.set(x,v*E*V);const A=[V,V,V,V,V,V];N.set(A,g*E*V)}const ee=new kn;ee.setAttribute("position",new En(O,C)),ee.setAttribute("uv",new En(L,v)),ee.setAttribute("faceIndex",new En(N,g)),e.push(ee),s>rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xl(i,e,t){const n=new zi(i,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function yp(i,e,t){const n=new Float32Array(Ni),s=new ie(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
	`}function Ep(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,p=h===Ha||h===ka,m=h===cr||h===ur;if(p||m){let _=e.get(c);const x=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return t===null&&(t=new vl(i)),_=p?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const M=c.image;return p&&M&&M.height>0||m&&M&&s(M)?(t===null&&(t=new vl(i)),_=p?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",a),_.texture):null}}}return c}function s(c){let h=0;const p=6;for(let m=0;m<p;m++)c[m]!==void 0&&h++;return h===p}function a(c){const h=c.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bp(i,e,t,n){const s={},a=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const C=x.morphAttributes[E];for(let v=0,g=C.length;v<g;v++)e.remove(C[v])}x.removeEventListener("dispose",u),delete s[x.id];const M=a.get(x);M&&(e.remove(M),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(_,x){return s[x.id]===!0||(x.addEventListener("dispose",u),s[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const E in x)e.update(x[E],i.ARRAY_BUFFER);const M=_.morphAttributes;for(const E in M){const C=M[E];for(let v=0,g=C.length;v<g;v++)e.update(C[v],i.ARRAY_BUFFER)}}function p(_){const x=[],M=_.index,E=_.attributes.position;let C=0;if(M!==null){const O=M.array;C=M.version;for(let L=0,N=O.length;L<N;L+=3){const ee=O[L+0],V=O[L+1],l=O[L+2];x.push(ee,V,V,l,l,ee)}}else if(E!==void 0){const O=E.array;C=E.version;for(let L=0,N=O.length/3-1;L<N;L+=3){const ee=L+0,V=L+1,l=L+2;x.push(ee,V,V,l,l,ee)}}else return;const v=new(ic(x)?uc:cc)(x,1);v.version=C;const g=a.get(_);g&&e.remove(g),a.set(_,v)}function m(_){const x=a.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return a.get(_)}return{get:c,update:h,getWireframeAttribute:m}}function Ap(i,e,t){let n;function s(x){n=x}let a,u;function c(x){a=x.type,u=x.bytesPerElement}function h(x,M){i.drawElements(n,M,a,x*u),t.update(M,n,1)}function p(x,M,E){E!==0&&(i.drawElementsInstanced(n,M,a,x*u,E),t.update(M,n,E))}function m(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,M,0,a,x,0,E);let v=0;for(let g=0;g<E;g++)v+=M[g];t.update(v,n,1)}function _(x,M,E,C){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)p(x[g]/u,M[g],C[g]);else{v.multiDrawElementsInstancedWEBGL(n,M,0,a,x,0,C,0,E);let g=0;for(let O=0;O<E;O++)g+=M[O];for(let O=0;O<C.length;O++)t.update(g,n,C[O])}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function wp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cp(i,e,t){const n=new WeakMap,s=new zt;function a(u,c,h){const p=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=m!==void 0?m.length:0;let x=n.get(c);if(x===void 0||x.count!==_){let A=function(){Q.dispose(),n.delete(c),c.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const E=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let N=0;E===!0&&(N=1),C===!0&&(N=2),v===!0&&(N=3);let ee=c.attributes.position.count*N,V=1;ee>e.maxTextureSize&&(V=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const l=new Float32Array(ee*V*4*_),Q=new sc(l,ee,V,_);Q.type=Jn,Q.needsUpdate=!0;const he=N*4;for(let P=0;P<_;P++){const ne=g[P],Y=O[P],fe=L[P],me=ee*V*4*P;for(let ae=0;ae<ne.count;ae++){const pe=ae*he;E===!0&&(s.fromBufferAttribute(ne,ae),l[me+pe+0]=s.x,l[me+pe+1]=s.y,l[me+pe+2]=s.z,l[me+pe+3]=0),C===!0&&(s.fromBufferAttribute(Y,ae),l[me+pe+4]=s.x,l[me+pe+5]=s.y,l[me+pe+6]=s.z,l[me+pe+7]=0),v===!0&&(s.fromBufferAttribute(fe,ae),l[me+pe+8]=s.x,l[me+pe+9]=s.y,l[me+pe+10]=s.z,l[me+pe+11]=fe.itemSize===4?s.w:1)}}x={count:_,texture:Q,size:new yt(ee,V)},n.set(c,x),c.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let E=0;for(let v=0;v<p.length;v++)E+=p[v];const C=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",C),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function Rp(i,e,t,n){let s=new WeakMap;function a(h){const p=n.render.frame,m=h.geometry,_=e.get(h,m);if(s.get(_)!==p&&(e.update(_),s.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==p&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;s.get(x)!==p&&(x.update(),s.set(x,p))}return _}function u(){s=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:u}}class gc extends ln{constructor(e,t,n,s,a,u,c,h,p,m=ar){if(m!==ar&&m!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===ar&&(n=Bi),n===void 0&&m===hr&&(n=fr),super(null,s,a,u,c,h,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Mn,this.minFilter=h!==void 0?h:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _c=new ln,yl=new gc(1,1),vc=new sc,xc=new pf,Sc=new dc,El=[],Tl=[],bl=new Float32Array(16),Al=new Float32Array(9),wl=new Float32Array(4);function _r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=El[s];if(a===void 0&&(a=new Float32Array(s),El[s]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,i[u].toArray(a,c)}return a}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zs(i,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Ip(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;wl.set(n),i.uniformMatrix2fv(this.addr,!1,wl),qt(t,n)}}function Np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Al.set(n),i.uniformMatrix3fv(this.addr,!1,Al),qt(t,n)}}function Fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;bl.set(n),i.uniformMatrix4fv(this.addr,!1,bl),qt(t,n)}}function Op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Xp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(yl.compareFunction=nc,a=yl):a=_c,t.setTexture2D(e||a,s)}function qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xc,s)}function Yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sc,s)}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vc,s)}function Kp(i){switch(i){case 5126:return Pp;case 35664:return Dp;case 35665:return Lp;case 35666:return Up;case 35674:return Ip;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return Hp;case 5125:return kp;case 36294:return Gp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return jp}}function Zp(i,e){i.uniform1fv(this.addr,e)}function $p(i,e){const t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function Jp(i,e){const t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function Qp(i,e){const t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function em(i,e){const t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tm(i,e){const t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nm(i,e){const t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function im(i,e){i.uniform1iv(this.addr,e)}function rm(i,e){i.uniform2iv(this.addr,e)}function sm(i,e){i.uniform3iv(this.addr,e)}function am(i,e){i.uniform4iv(this.addr,e)}function om(i,e){i.uniform1uiv(this.addr,e)}function lm(i,e){i.uniform2uiv(this.addr,e)}function cm(i,e){i.uniform3uiv(this.addr,e)}function um(i,e){i.uniform4uiv(this.addr,e)}function fm(i,e,t){const n=this.cache,s=e.length,a=zs(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||_c,a[u])}function hm(i,e,t){const n=this.cache,s=e.length,a=zs(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||xc,a[u])}function dm(i,e,t){const n=this.cache,s=e.length,a=zs(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Sc,a[u])}function pm(i,e,t){const n=this.cache,s=e.length,a=zs(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||vc,a[u])}function mm(i){switch(i){case 5126:return Zp;case 35664:return $p;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return sm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return pm}}class gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}}class _m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mm(t.type)}}class vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Cl(i,e){i.seq.push(e),i.map[e.id]=e}function xm(i,e,t){const n=i.name,s=n.length;for(Ra.lastIndex=0;;){const a=Ra.exec(n),u=Ra.lastIndex;let c=a[1];const h=a[2]==="]",p=a[3];if(h&&(c=c|0),p===void 0||p==="["&&u+2===s){Cl(t,p===void 0?new gm(c,i,e):new _m(c,i,e));break}else{let _=t.map[c];_===void 0&&(_=new vm(c),Cl(t,_)),t=_}}}class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);xm(a,u,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function Rl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sm=37297;let Mm=0;function ym(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}function Em(i){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(i);let n;switch(e===t?n="":e===Ds&&t===Ps?n="LinearDisplayP3ToLinearSRGB":e===Ps&&t===Ds&&(n="LinearSRGBToLinearDisplayP3"),i){case vi:case Fs:return[n,"LinearTransferOETF"];case Bn:case wo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ym(i.getShaderSource(e),u)}else return s}function Tm(i,e){const t=Em(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bm(i,e){let t;switch(e){case yu:t="Linear";break;case Eu:t="Reinhard";break;case Tu:t="Cineon";break;case bu:t="ACESFilmic";break;case wu:t="AgX";break;case Cu:t="Neutral";break;case Au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vs=new ie;function Am(){Rt.getLuminanceCoefficients(vs);const i=vs.x.toFixed(4),e=vs.y.toFixed(4),t=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Cm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),u=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:i.getAttribLocation(e,u),locationSize:c}}return t}function Lr(i){return i!==""}function Dl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(Pm,Lm)}const Dm=new Map;function Lm(i,e){let t=ct[e];if(t===void 0){const n=Dm.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vo(t)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace(Um,Im)}function Im(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Il(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Nm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Fm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case ur:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Om(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ur:e="ENVMAP_MODE_REFRACTION";break}return e}function Bm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Su:e="ENVMAP_BLENDING_MIX";break;case Mu:e="ENVMAP_BLENDING_ADD";break}return e}function zm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hm(i,e,t,n){const s=i.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=Nm(t),p=Fm(t),m=Om(t),_=Bm(t),x=zm(t),M=wm(t),E=Cm(a),C=s.createProgram();let v,g,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Lr).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Lr).join(`
`),g.length>0&&(g+=`
`)):(v=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),g=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ct.tonemapping_pars_fragment:"",t.toneMapping!==mi?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Tm("linearToOutputTexel",t.outputColorSpace),Am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),u=vo(u),u=Dl(u,t),u=Ll(u,t),c=vo(c),c=Dl(c,t),c=Ll(c,t),u=Ul(u),c=Ul(c),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=O+v+u,N=O+g+c,ee=Rl(s,s.VERTEX_SHADER,L),V=Rl(s,s.FRAGMENT_SHADER,N);s.attachShader(C,ee),s.attachShader(C,V),t.index0AttributeName!==void 0?s.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function l(P){if(i.debug.checkShaderErrors){const ne=s.getProgramInfoLog(C).trim(),Y=s.getShaderInfoLog(ee).trim(),fe=s.getShaderInfoLog(V).trim();let me=!0,ae=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,C,ee,V);else{const pe=Pl(s,ee,"vertex"),q=Pl(s,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ne+`
`+pe+`
`+q)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Y===""||fe==="")&&(ae=!1);ae&&(P.diagnostics={runnable:me,programLog:ne,vertexShader:{log:Y,prefix:v},fragmentShader:{log:fe,prefix:g}})}s.deleteShader(ee),s.deleteShader(V),Q=new Cs(s,C),he=Rm(s,C)}let Q;this.getUniforms=function(){return Q===void 0&&l(this),Q};let he;this.getAttributes=function(){return he===void 0&&l(this),he};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(C,Sm)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=ee,this.fragmentShader=V,this}let km=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vm(e),t.set(e,n)),n}}class Vm{constructor(e){this.id=km++,this.code=e,this.usedTimes=0}}function Wm(i,e,t,n,s,a,u){const c=new oc,h=new Gm,p=new Set,m=[],_=s.logarithmicDepthBuffer,x=s.reverseDepthBuffer,M=s.vertexTextures;let E=s.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return p.add(A),A===0?"uv":`uv${A}`}function g(A,P,ne,Y,fe){const me=Y.fog,ae=fe.geometry,pe=A.isMeshStandardMaterial?Y.environment:null,q=(A.isMeshStandardMaterial?t:e).get(A.envMap||pe),Te=q&&q.mapping===Ns?q.image.height:null,xe=C[A.type];A.precision!==null&&(E=s.getMaxPrecision(A.precision),E!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const Se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,dt=Se!==void 0?Se.length:0;let gt=0;ae.morphAttributes.position!==void 0&&(gt=1),ae.morphAttributes.normal!==void 0&&(gt=2),ae.morphAttributes.color!==void 0&&(gt=3);let ce,ve,Fe,be;if(xe){const Zt=zn[xe];ce=Zt.vertexShader,ve=Zt.fragmentShader}else ce=A.vertexShader,ve=A.fragmentShader,h.update(A),Fe=h.getVertexShaderID(A),be=h.getFragmentShaderID(A);const We=i.getRenderTarget(),qe=fe.isInstancedMesh===!0,Qe=fe.isBatchedMesh===!0,wt=!!A.map,rt=!!A.matcap,B=!!q,Vt=!!A.aoMap,ot=!!A.lightMap,ht=!!A.bumpMap,Ye=!!A.normalMap,ft=!!A.displacementMap,Ze=!!A.emissiveMap,U=!!A.metalnessMap,w=!!A.roughnessMap,j=A.anisotropy>0,ue=A.clearcoat>0,ge=A.dispersion>0,X=A.iridescence>0,Pe=A.sheen>0,Re=A.transmission>0,Oe=j&&!!A.anisotropyMap,St=ue&&!!A.clearcoatMap,Me=ue&&!!A.clearcoatNormalMap,Be=ue&&!!A.clearcoatRoughnessMap,Ke=X&&!!A.iridescenceMap,Xe=X&&!!A.iridescenceThicknessMap,De=Pe&&!!A.sheenColorMap,at=Pe&&!!A.sheenRoughnessMap,st=!!A.specularMap,Ct=!!A.specularColorMap,k=!!A.specularIntensityMap,Ie=Re&&!!A.transmissionMap,se=Re&&!!A.thicknessMap,de=!!A.gradientMap,Ae=!!A.alphaMap,Ne=A.alphaTest>0,_t=!!A.alphaHash,Et=!!A.extensions;let Dt=mi;A.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const xt={shaderID:xe,shaderType:A.type,shaderName:A.name,vertexShader:ce,fragmentShader:ve,defines:A.defines,customVertexShaderID:Fe,customFragmentShaderID:be,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:Qe,batchingColor:Qe&&fe._colorsTexture!==null,instancing:qe,instancingColor:qe&&fe.instanceColor!==null,instancingMorph:qe&&fe.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:We===null?i.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:vi,alphaToCoverage:!!A.alphaToCoverage,map:wt,matcap:rt,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:Te,aoMap:Vt,lightMap:ot,bumpMap:ht,normalMap:Ye,displacementMap:M&&ft,emissiveMap:Ze,normalMapObjectSpace:Ye&&A.normalMapType===Uu,normalMapTangentSpace:Ye&&A.normalMapType===Lu,metalnessMap:U,roughnessMap:w,anisotropy:j,anisotropyMap:Oe,clearcoat:ue,clearcoatMap:St,clearcoatNormalMap:Me,clearcoatRoughnessMap:Be,dispersion:ge,iridescence:X,iridescenceMap:Ke,iridescenceThicknessMap:Xe,sheen:Pe,sheenColorMap:De,sheenRoughnessMap:at,specularMap:st,specularColorMap:Ct,specularIntensityMap:k,transmission:Re,transmissionMap:Ie,thicknessMap:se,gradientMap:de,opaque:A.transparent===!1&&A.blending===sr&&A.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Ne,alphaHash:_t,combine:A.combine,mapUv:wt&&v(A.map.channel),aoMapUv:Vt&&v(A.aoMap.channel),lightMapUv:ot&&v(A.lightMap.channel),bumpMapUv:ht&&v(A.bumpMap.channel),normalMapUv:Ye&&v(A.normalMap.channel),displacementMapUv:ft&&v(A.displacementMap.channel),emissiveMapUv:Ze&&v(A.emissiveMap.channel),metalnessMapUv:U&&v(A.metalnessMap.channel),roughnessMapUv:w&&v(A.roughnessMap.channel),anisotropyMapUv:Oe&&v(A.anisotropyMap.channel),clearcoatMapUv:St&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:at&&v(A.sheenRoughnessMap.channel),specularMapUv:st&&v(A.specularMap.channel),specularColorMapUv:Ct&&v(A.specularColorMap.channel),specularIntensityMapUv:k&&v(A.specularIntensityMap.channel),transmissionMapUv:Ie&&v(A.transmissionMap.channel),thicknessMapUv:se&&v(A.thicknessMap.channel),alphaMapUv:Ae&&v(A.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Ye||j),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:fe.isPoints===!0&&!!ae.attributes.uv&&(wt||Ae),fog:!!me,useFog:A.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:x,skinning:fe.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:gt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&ne.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:wt&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===$n,flipSided:A.side===hn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Et&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&A.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return xt.vertexUv1s=p.has(1),xt.vertexUv2s=p.has(2),xt.vertexUv3s=p.has(3),p.clear(),xt}function O(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ne in A.defines)P.push(ne),P.push(A.defines[ne]);return A.isRawShaderMaterial===!1&&(L(P,A),N(P,A),P.push(i.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function L(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function N(A,P){c.disableAll(),P.supportsVertexTextures&&c.enable(0),P.instancing&&c.enable(1),P.instancingColor&&c.enable(2),P.instancingMorph&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),P.anisotropy&&c.enable(17),P.alphaHash&&c.enable(18),P.batching&&c.enable(19),P.dispersion&&c.enable(20),P.batchingColor&&c.enable(21),A.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reverseDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.alphaToCoverage&&c.enable(20),A.push(c.mask)}function ee(A){const P=C[A.type];let ne;if(P){const Y=zn[P];ne=Af.clone(Y.uniforms)}else ne=A.uniforms;return ne}function V(A,P){let ne;for(let Y=0,fe=m.length;Y<fe;Y++){const me=m[Y];if(me.cacheKey===P){ne=me,++ne.usedTimes;break}}return ne===void 0&&(ne=new Hm(i,P,A,a),m.push(ne)),ne}function l(A){if(--A.usedTimes===0){const P=m.indexOf(A);m[P]=m[m.length-1],m.pop(),A.destroy()}}function Q(A){h.remove(A)}function he(){h.dispose()}return{getParameters:g,getProgramCacheKey:O,getUniforms:ee,acquireProgram:V,releaseProgram:l,releaseShaderCache:Q,programs:m,dispose:he}}function Xm(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let c=i.get(u);return c===void 0&&(c={},i.set(u,c)),c}function n(u){i.delete(u)}function s(u,c,h){i.get(u)[c]=h}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function u(_,x,M,E,C,v){let g=i[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:C,group:v},i[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=C,g.group=v),e++,g}function c(_,x,M,E,C,v){const g=u(_,x,M,E,C,v);M.transmission>0?n.push(g):M.transparent===!0?s.push(g):t.push(g)}function h(_,x,M,E,C,v){const g=u(_,x,M,E,C,v);M.transmission>0?n.unshift(g):M.transparent===!0?s.unshift(g):t.unshift(g)}function p(_,x){t.length>1&&t.sort(_||qm),n.length>1&&n.sort(x||Nl),s.length>1&&s.sort(x||Nl)}function m(){for(let _=e,x=i.length;_<x;_++){const M=i[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:h,finish:m,sort:p}}function Ym(){let i=new WeakMap;function e(n,s){const a=i.get(n);let u;return a===void 0?(u=new Fl,i.set(n,[u])):s>=a.length?(u=new Fl,a.push(u)):u=a[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Pt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function Km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zm=0;function $m(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jm(i){const e=new jm,t=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new ie);const s=new ie,a=new Ht,u=new Ht;function c(p){let m=0,_=0,x=0;for(let he=0;he<9;he++)n.probe[he].set(0,0,0);let M=0,E=0,C=0,v=0,g=0,O=0,L=0,N=0,ee=0,V=0,l=0;p.sort($m);for(let he=0,A=p.length;he<A;he++){const P=p[he],ne=P.color,Y=P.intensity,fe=P.distance,me=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=ne.r*Y,_+=ne.g*Y,x+=ne.b*Y;else if(P.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(P.sh.coefficients[ae],Y);l++}else if(P.isDirectionalLight){const ae=e.get(P);if(ae.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const pe=P.shadow,q=t.get(P);q.shadowIntensity=pe.intensity,q.shadowBias=pe.bias,q.shadowNormalBias=pe.normalBias,q.shadowRadius=pe.radius,q.shadowMapSize=pe.mapSize,n.directionalShadow[M]=q,n.directionalShadowMap[M]=me,n.directionalShadowMatrix[M]=P.shadow.matrix,O++}n.directional[M]=ae,M++}else if(P.isSpotLight){const ae=e.get(P);ae.position.setFromMatrixPosition(P.matrixWorld),ae.color.copy(ne).multiplyScalar(Y),ae.distance=fe,ae.coneCos=Math.cos(P.angle),ae.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ae.decay=P.decay,n.spot[C]=ae;const pe=P.shadow;if(P.map&&(n.spotLightMap[ee]=P.map,ee++,pe.updateMatrices(P),P.castShadow&&V++),n.spotLightMatrix[C]=pe.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=pe.intensity,q.shadowBias=pe.bias,q.shadowNormalBias=pe.normalBias,q.shadowRadius=pe.radius,q.shadowMapSize=pe.mapSize,n.spotShadow[C]=q,n.spotShadowMap[C]=me,N++}C++}else if(P.isRectAreaLight){const ae=e.get(P);ae.color.copy(ne).multiplyScalar(Y),ae.halfWidth.set(P.width*.5,0,0),ae.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=ae,v++}else if(P.isPointLight){const ae=e.get(P);if(ae.color.copy(P.color).multiplyScalar(P.intensity),ae.distance=P.distance,ae.decay=P.decay,P.castShadow){const pe=P.shadow,q=t.get(P);q.shadowIntensity=pe.intensity,q.shadowBias=pe.bias,q.shadowNormalBias=pe.normalBias,q.shadowRadius=pe.radius,q.shadowMapSize=pe.mapSize,q.shadowCameraNear=pe.camera.near,q.shadowCameraFar=pe.camera.far,n.pointShadow[E]=q,n.pointShadowMap[E]=me,n.pointShadowMatrix[E]=P.shadow.matrix,L++}n.point[E]=ae,E++}else if(P.isHemisphereLight){const ae=e.get(P);ae.skyColor.copy(P.color).multiplyScalar(Y),ae.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[g]=ae,g++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=_,n.ambient[2]=x;const Q=n.hash;(Q.directionalLength!==M||Q.pointLength!==E||Q.spotLength!==C||Q.rectAreaLength!==v||Q.hemiLength!==g||Q.numDirectionalShadows!==O||Q.numPointShadows!==L||Q.numSpotShadows!==N||Q.numSpotMaps!==ee||Q.numLightProbes!==l)&&(n.directional.length=M,n.spot.length=C,n.rectArea.length=v,n.point.length=E,n.hemi.length=g,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=O,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=N+ee-V,n.spotLightMap.length=ee,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=l,Q.directionalLength=M,Q.pointLength=E,Q.spotLength=C,Q.rectAreaLength=v,Q.hemiLength=g,Q.numDirectionalShadows=O,Q.numPointShadows=L,Q.numSpotShadows=N,Q.numSpotMaps=ee,Q.numLightProbes=l,n.version=Zm++)}function h(p,m){let _=0,x=0,M=0,E=0,C=0;const v=m.matrixWorldInverse;for(let g=0,O=p.length;g<O;g++){const L=p[g];if(L.isDirectionalLight){const N=n.directional[_];N.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(v),_++}else if(L.isSpotLight){const N=n.spot[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(v),M++}else if(L.isRectAreaLight){const N=n.rectArea[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(v),u.identity(),a.copy(L.matrixWorld),a.premultiply(v),u.extractRotation(a),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const N=n.point[x];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(v),x++}else if(L.isHemisphereLight){const N=n.hemi[C];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(v),C++}}}return{setup:c,setupView:h,state:n}}function Ol(i){const e=new Jm(i),t=[],n=[];function s(m){p.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function u(m){n.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:u}}function Qm(i){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new Ol(i),e.set(s,[c])):a>=u.length?(c=new Ol(i),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class eg extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function rg(i,e,t){let n=new pc;const s=new yt,a=new yt,u=new zt,c=new eg({depthPacking:Du}),h=new tg,p={},m=t.maxTextureSize,_={[gi]:hn,[hn]:gi,[$n]:$n},x=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new kn;E.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new yn(E,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let g=this.type;this.render=function(V,l,Q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||V.length===0)return;const he=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(pi),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Y=g!==Zn&&this.type===Zn,fe=g===Zn&&this.type!==Zn;for(let me=0,ae=V.length;me<ae;me++){const pe=V[me],q=pe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Te=q.getFrameExtents();if(s.multiply(Te),a.copy(q.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/Te.x),s.x=a.x*Te.x,q.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/Te.y),s.y=a.y*Te.y,q.mapSize.y=a.y)),q.map===null||Y===!0||fe===!0){const Se=this.type!==Zn?{minFilter:Mn,magFilter:Mn}:{};q.map!==null&&q.map.dispose(),q.map=new zi(s.x,s.y,Se),q.map.texture.name=pe.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const xe=q.getViewportCount();for(let Se=0;Se<xe;Se++){const dt=q.getViewport(Se);u.set(a.x*dt.x,a.y*dt.y,a.x*dt.z,a.y*dt.w),ne.viewport(u),q.updateMatrices(pe,Se),n=q.getFrustum(),N(l,Q,q.camera,pe,this.type)}q.isPointLightShadow!==!0&&this.type===Zn&&O(q,Q),q.needsUpdate=!1}g=this.type,v.needsUpdate=!1,i.setRenderTarget(he,A,P)};function O(V,l){const Q=e.update(C);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new zi(s.x,s.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,i.setRenderTarget(V.mapPass),i.clear(),i.renderBufferDirect(l,null,Q,x,C,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,i.setRenderTarget(V.map),i.clear(),i.renderBufferDirect(l,null,Q,M,C,null)}function L(V,l,Q,he){let A=null;const P=Q.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(P!==void 0)A=P;else if(A=Q.isPointLight===!0?h:c,i.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0){const ne=A.uuid,Y=l.uuid;let fe=p[ne];fe===void 0&&(fe={},p[ne]=fe);let me=fe[Y];me===void 0&&(me=A.clone(),fe[Y]=me,l.addEventListener("dispose",ee)),A=me}if(A.visible=l.visible,A.wireframe=l.wireframe,he===Zn?A.side=l.shadowSide!==null?l.shadowSide:l.side:A.side=l.shadowSide!==null?l.shadowSide:_[l.side],A.alphaMap=l.alphaMap,A.alphaTest=l.alphaTest,A.map=l.map,A.clipShadows=l.clipShadows,A.clippingPlanes=l.clippingPlanes,A.clipIntersection=l.clipIntersection,A.displacementMap=l.displacementMap,A.displacementScale=l.displacementScale,A.displacementBias=l.displacementBias,A.wireframeLinewidth=l.wireframeLinewidth,A.linewidth=l.linewidth,Q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ne=i.properties.get(A);ne.light=Q}return A}function N(V,l,Q,he,A){if(V.visible===!1)return;if(V.layers.test(l.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&A===Zn)&&(!V.frustumCulled||n.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,V.matrixWorld);const Y=e.update(V),fe=V.material;if(Array.isArray(fe)){const me=Y.groups;for(let ae=0,pe=me.length;ae<pe;ae++){const q=me[ae],Te=fe[q.materialIndex];if(Te&&Te.visible){const xe=L(V,Te,he,A);V.onBeforeShadow(i,V,l,Q,Y,xe,q),i.renderBufferDirect(Q,null,Y,xe,V,q),V.onAfterShadow(i,V,l,Q,Y,xe,q)}}}else if(fe.visible){const me=L(V,fe,he,A);V.onBeforeShadow(i,V,l,Q,Y,me,null),i.renderBufferDirect(Q,null,Y,me,V,null),V.onAfterShadow(i,V,l,Q,Y,me,null)}}const ne=V.children;for(let Y=0,fe=ne.length;Y<fe;Y++)N(ne[Y],l,Q,he,A)}function ee(V){V.target.removeEventListener("dispose",ee);for(const Q in p){const he=p[Q],A=V.target.uuid;A in he&&(he[A].dispose(),delete he[A])}}}const sg={[Ua]:Ia,[Na]:Ba,[Fa]:za,[lr]:Oa,[Ia]:Ua,[Ba]:Na,[za]:Fa,[Oa]:lr};function ag(i){function e(){let k=!1;const Ie=new zt;let se=null;const de=new zt(0,0,0,0);return{setMask:function(Ae){se!==Ae&&!k&&(i.colorMask(Ae,Ae,Ae,Ae),se=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,Ne,_t,Et,Dt){Dt===!0&&(Ae*=Et,Ne*=Et,_t*=Et),Ie.set(Ae,Ne,_t,Et),de.equals(Ie)===!1&&(i.clearColor(Ae,Ne,_t,Et),de.copy(Ie))},reset:function(){k=!1,se=null,de.set(-1,0,0,0)}}}function t(){let k=!1,Ie=!1,se=null,de=null,Ae=null;return{setReversed:function(Ne){Ie=Ne},setTest:function(Ne){Ne?Fe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Ne){se!==Ne&&!k&&(i.depthMask(Ne),se=Ne)},setFunc:function(Ne){if(Ie&&(Ne=sg[Ne]),de!==Ne){switch(Ne){case Ua:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Ne}},setLocked:function(Ne){k=Ne},setClear:function(Ne){Ae!==Ne&&(i.clearDepth(Ne),Ae=Ne)},reset:function(){k=!1,se=null,de=null,Ae=null}}}function n(){let k=!1,Ie=null,se=null,de=null,Ae=null,Ne=null,_t=null,Et=null,Dt=null;return{setTest:function(xt){k||(xt?Fe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(xt){Ie!==xt&&!k&&(i.stencilMask(xt),Ie=xt)},setFunc:function(xt,Zt,gn){(se!==xt||de!==Zt||Ae!==gn)&&(i.stencilFunc(xt,Zt,gn),se=xt,de=Zt,Ae=gn)},setOp:function(xt,Zt,gn){(Ne!==xt||_t!==Zt||Et!==gn)&&(i.stencilOp(xt,Zt,gn),Ne=xt,_t=Zt,Et=gn)},setLocked:function(xt){k=xt},setClear:function(xt){Dt!==xt&&(i.clearStencil(xt),Dt=xt)},reset:function(){k=!1,Ie=null,se=null,de=null,Ae=null,Ne=null,_t=null,Et=null,Dt=null}}}const s=new e,a=new t,u=new n,c=new WeakMap,h=new WeakMap;let p={},m={},_=new WeakMap,x=[],M=null,E=!1,C=null,v=null,g=null,O=null,L=null,N=null,ee=null,V=new Pt(0,0,0),l=0,Q=!1,he=null,A=null,P=null,ne=null,Y=null;const fe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,ae=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(pe)[1]),me=ae>=1):pe.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),me=ae>=2);let q=null,Te={};const xe=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),dt=new zt().fromArray(xe),gt=new zt().fromArray(Se);function ce(k,Ie,se,de){const Ae=new Uint8Array(4),Ne=i.createTexture();i.bindTexture(k,Ne),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<se;_t++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Ie+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Ne}const ve={};ve[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),u.setClear(0),Fe(i.DEPTH_TEST),a.setFunc(lr),ot(!1),ht(Wo),Fe(i.CULL_FACE),B(pi);function Fe(k){p[k]!==!0&&(i.enable(k),p[k]=!0)}function be(k){p[k]!==!1&&(i.disable(k),p[k]=!1)}function We(k,Ie){return m[k]!==Ie?(i.bindFramebuffer(k,Ie),m[k]=Ie,k===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ie),k===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function qe(k,Ie){let se=x,de=!1;if(k){se=_.get(Ie),se===void 0&&(se=[],_.set(Ie,se));const Ae=k.textures;if(se.length!==Ae.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Ne=0,_t=Ae.length;Ne<_t;Ne++)se[Ne]=i.COLOR_ATTACHMENT0+Ne;se.length=Ae.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function Qe(k){return M!==k?(i.useProgram(k),M=k,!0):!1}const wt={[Ii]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};wt[su]=i.MIN,wt[au]=i.MAX;const rt={[ou]:i.ZERO,[lu]:i.ONE,[cu]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[mu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[fu]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[La]:i.ONE_MINUS_SRC_ALPHA,[pu]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[gu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[xu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(k,Ie,se,de,Ae,Ne,_t,Et,Dt,xt){if(k===pi){E===!0&&(be(i.BLEND),E=!1);return}if(E===!1&&(Fe(i.BLEND),E=!0),k!==nu){if(k!==C||xt!==Q){if((v!==Ii||L!==Ii)&&(i.blendEquation(i.FUNC_ADD),v=Ii,L=Ii),xt)switch(k){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,O=null,N=null,ee=null,V.set(0,0,0),l=0,C=k,Q=xt}return}Ae=Ae||Ie,Ne=Ne||se,_t=_t||de,(Ie!==v||Ae!==L)&&(i.blendEquationSeparate(wt[Ie],wt[Ae]),v=Ie,L=Ae),(se!==g||de!==O||Ne!==N||_t!==ee)&&(i.blendFuncSeparate(rt[se],rt[de],rt[Ne],rt[_t]),g=se,O=de,N=Ne,ee=_t),(Et.equals(V)===!1||Dt!==l)&&(i.blendColor(Et.r,Et.g,Et.b,Dt),V.copy(Et),l=Dt),C=k,Q=!1}function Vt(k,Ie){k.side===$n?be(i.CULL_FACE):Fe(i.CULL_FACE);let se=k.side===hn;Ie&&(se=!se),ot(se),k.blending===sr&&k.transparent===!1?B(pi):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const de=k.stencilWrite;u.setTest(de),de&&(u.setMask(k.stencilWriteMask),u.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),u.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Fe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(k){he!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),he=k)}function ht(k){k!==Qc?(Fe(i.CULL_FACE),k!==A&&(k===Wo?i.cullFace(i.BACK):k===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),A=k}function Ye(k){k!==P&&(me&&i.lineWidth(k),P=k)}function ft(k,Ie,se){k?(Fe(i.POLYGON_OFFSET_FILL),(ne!==Ie||Y!==se)&&(i.polygonOffset(Ie,se),ne=Ie,Y=se)):be(i.POLYGON_OFFSET_FILL)}function Ze(k){k?Fe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function U(k){k===void 0&&(k=i.TEXTURE0+fe-1),q!==k&&(i.activeTexture(k),q=k)}function w(k,Ie,se){se===void 0&&(q===null?se=i.TEXTURE0+fe-1:se=q);let de=Te[se];de===void 0&&(de={type:void 0,texture:void 0},Te[se]=de),(de.type!==k||de.texture!==Ie)&&(q!==se&&(i.activeTexture(se),q=se),i.bindTexture(k,Ie||ve[k]),de.type=k,de.texture=Ie)}function j(){const k=Te[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(k){dt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),dt.copy(k))}function De(k){gt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),gt.copy(k))}function at(k,Ie){let se=h.get(Ie);se===void 0&&(se=new WeakMap,h.set(Ie,se));let de=se.get(k);de===void 0&&(de=i.getUniformBlockIndex(Ie,k.name),se.set(k,de))}function st(k,Ie){const de=h.get(Ie).get(k);c.get(Ie)!==de&&(i.uniformBlockBinding(Ie,de,k.__bindingPointIndex),c.set(Ie,de))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},q=null,Te={},m={},_=new WeakMap,x=[],M=null,E=!1,C=null,v=null,g=null,O=null,L=null,N=null,ee=null,V=new Pt(0,0,0),l=0,Q=!1,he=null,A=null,P=null,ne=null,Y=null,dt.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),u.reset()}return{buffers:{color:s,depth:a,stencil:u},enable:Fe,disable:be,bindFramebuffer:We,drawBuffers:qe,useProgram:Qe,setBlending:B,setMaterial:Vt,setFlipSided:ot,setCullFace:ht,setLineWidth:Ye,setPolygonOffset:ft,setScissorTest:Ze,activeTexture:U,bindTexture:w,unbindTexture:j,compressedTexImage2D:ue,compressedTexImage3D:ge,texImage2D:Be,texImage3D:Ke,updateUBOMapping:at,uniformBlockBinding:st,texStorage2D:St,texStorage3D:Me,texSubImage2D:X,texSubImage3D:Pe,compressedTexSubImage2D:Re,compressedTexSubImage3D:Oe,scissor:Xe,viewport:De,reset:Ct}}function Bl(i,e,t,n){const s=og(n);switch(t){case Kl:return i*e;case $l:return i*e;case Jl:return i*e*2;case Ql:return i*e/s.components*s.byteLength;case To:return i*e/s.components*s.byteLength;case ec:return i*e*2/s.components*s.byteLength;case bo:return i*e*2/s.components*s.byteLength;case Zl:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case Ao:return i*e*4/s.components*s.byteLength;case ys:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ts:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case ja:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case As:case ho:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tc:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case go:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(i){switch(i){case ei:case ql:return{byteLength:1,components:1};case Fr:case Yl:case zr:return{byteLength:2,components:1};case yo:case Eo:return{byteLength:2,components:4};case Bi:case Mo:case Jn:return{byteLength:4,components:1};case jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lg(i,e,t,n,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new yt,m=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,w){return M?new OffscreenCanvas(U,w):Br("canvas")}function C(U,w,j){let ue=1;const ge=Ze(U);if((ge.width>j||ge.height>j)&&(ue=j/Math.max(ge.width,ge.height)),ue<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const X=Math.floor(ue*ge.width),Pe=Math.floor(ue*ge.height);_===void 0&&(_=E(X,Pe));const Re=w?E(X,Pe):_;return Re.width=X,Re.height=Pe,Re.getContext("2d").drawImage(U,0,0,X,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+X+"x"+Pe+")."),Re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function v(U){return U.generateMipmaps&&U.minFilter!==Mn&&U.minFilter!==Pn}function g(U){i.generateMipmap(U)}function O(U,w,j,ue,ge=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let X=w;if(w===i.RED&&(j===i.FLOAT&&(X=i.R32F),j===i.HALF_FLOAT&&(X=i.R16F),j===i.UNSIGNED_BYTE&&(X=i.R8)),w===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(X=i.R8UI),j===i.UNSIGNED_SHORT&&(X=i.R16UI),j===i.UNSIGNED_INT&&(X=i.R32UI),j===i.BYTE&&(X=i.R8I),j===i.SHORT&&(X=i.R16I),j===i.INT&&(X=i.R32I)),w===i.RG&&(j===i.FLOAT&&(X=i.RG32F),j===i.HALF_FLOAT&&(X=i.RG16F),j===i.UNSIGNED_BYTE&&(X=i.RG8)),w===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(X=i.RG8UI),j===i.UNSIGNED_SHORT&&(X=i.RG16UI),j===i.UNSIGNED_INT&&(X=i.RG32UI),j===i.BYTE&&(X=i.RG8I),j===i.SHORT&&(X=i.RG16I),j===i.INT&&(X=i.RG32I)),w===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(X=i.RGB8UI),j===i.UNSIGNED_SHORT&&(X=i.RGB16UI),j===i.UNSIGNED_INT&&(X=i.RGB32UI),j===i.BYTE&&(X=i.RGB8I),j===i.SHORT&&(X=i.RGB16I),j===i.INT&&(X=i.RGB32I)),w===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),j===i.UNSIGNED_INT&&(X=i.RGBA32UI),j===i.BYTE&&(X=i.RGBA8I),j===i.SHORT&&(X=i.RGBA16I),j===i.INT&&(X=i.RGBA32I)),w===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),w===i.RGBA){const Pe=ge?Rs:Rt.getTransfer(ue);j===i.FLOAT&&(X=i.RGBA32F),j===i.HALF_FLOAT&&(X=i.RGBA16F),j===i.UNSIGNED_BYTE&&(X=Pe===Ft?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function L(U,w){let j;return U?w===null||w===Bi||w===fr?j=i.DEPTH24_STENCIL8:w===Jn?j=i.DEPTH32F_STENCIL8:w===Fr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Bi||w===fr?j=i.DEPTH_COMPONENT24:w===Jn?j=i.DEPTH_COMPONENT32F:w===Fr&&(j=i.DEPTH_COMPONENT16),j}function N(U,w){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==Mn&&U.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function ee(U){const w=U.target;w.removeEventListener("dispose",ee),l(w),w.isVideoTexture&&m.delete(w)}function V(U){const w=U.target;w.removeEventListener("dispose",V),he(w)}function l(U){const w=n.get(U);if(w.__webglInit===void 0)return;const j=U.source,ue=x.get(j);if(ue){const ge=ue[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&Q(U),Object.keys(ue).length===0&&x.delete(j)}n.remove(U)}function Q(U){const w=n.get(U);i.deleteTexture(w.__webglTexture);const j=U.source,ue=x.get(j);delete ue[w.__cacheKey],u.memory.textures--}function he(U){const w=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let ge=0;ge<w.__webglFramebuffer[ue].length;ge++)i.deleteFramebuffer(w.__webglFramebuffer[ue][ge]);else i.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)i.deleteFramebuffer(w.__webglFramebuffer[ue]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=U.textures;for(let ue=0,ge=j.length;ue<ge;ue++){const X=n.get(j[ue]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),u.memory.textures--),n.remove(j[ue])}n.remove(U)}let A=0;function P(){A=0}function ne(){const U=A;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),A+=1,U}function Y(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function fe(U,w){const j=n.get(U);if(U.isVideoTexture&&Ye(U),U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){const ue=U.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(j,U,w);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+w)}function me(U,w){const j=n.get(U);if(U.version>0&&j.__version!==U.version){gt(j,U,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+w)}function ae(U,w){const j=n.get(U);if(U.version>0&&j.__version!==U.version){gt(j,U,w);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+w)}function pe(U,w){const j=n.get(U);if(U.version>0&&j.__version!==U.version){ce(j,U,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+w)}const q={[Ga]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},Te={[Mn]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},xe={[Iu]:i.NEVER,[Hu]:i.ALWAYS,[Nu]:i.LESS,[nc]:i.LEQUAL,[Fu]:i.EQUAL,[zu]:i.GEQUAL,[Ou]:i.GREATER,[Bu]:i.NOTEQUAL};function Se(U,w){if(w.type===Jn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===na||w.magFilter===Jr||w.magFilter===Oi||w.minFilter===Pn||w.minFilter===na||w.minFilter===Jr||w.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,q[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,q[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,q[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Te[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Te[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,xe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mn||w.minFilter!==Jr&&w.minFilter!==Oi||w.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function dt(U,w){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",ee));const ue=w.source;let ge=x.get(ue);ge===void 0&&(ge={},x.set(ue,ge));const X=Y(w);if(X!==U.__cacheKey){ge[X]===void 0&&(ge[X]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,j=!0),ge[X].usedTimes++;const Pe=ge[U.__cacheKey];Pe!==void 0&&(ge[U.__cacheKey].usedTimes--,Pe.usedTimes===0&&Q(w)),U.__cacheKey=X,U.__webglTexture=ge[X].texture}return j}function gt(U,w,j){let ue=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=i.TEXTURE_3D);const ge=dt(U,w),X=w.source;t.bindTexture(ue,U.__webglTexture,i.TEXTURE0+j);const Pe=n.get(X);if(X.version!==Pe.__version||ge===!0){t.activeTexture(i.TEXTURE0+j);const Re=Rt.getPrimaries(Rt.workingColorSpace),Oe=w.colorSpace===di?null:Rt.getPrimaries(w.colorSpace),St=w.colorSpace===di||Re===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Me=C(w.image,!1,s.maxTextureSize);Me=ft(w,Me);const Be=a.convert(w.format,w.colorSpace),Ke=a.convert(w.type);let Xe=O(w.internalFormat,Be,Ke,w.colorSpace,w.isVideoTexture);Se(ue,w);let De;const at=w.mipmaps,st=w.isVideoTexture!==!0,Ct=Pe.__version===void 0||ge===!0,k=X.dataReady,Ie=N(w,Me);if(w.isDepthTexture)Xe=L(w.format===hr,w.type),Ct&&(st?t.texStorage2D(i.TEXTURE_2D,1,Xe,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Be,Ke,null));else if(w.isDataTexture)if(at.length>0){st&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Xe,at[0].width,at[0].height);for(let se=0,de=at.length;se<de;se++)De=at[se],st?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,De.width,De.height,Be,Ke,De.data):t.texImage2D(i.TEXTURE_2D,se,Xe,De.width,De.height,0,Be,Ke,De.data);w.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Xe,Me.width,Me.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,Be,Ke,Me.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Be,Ke,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Xe,at[0].width,at[0].height,Me.depth);for(let se=0,de=at.length;se<de;se++)if(De=at[se],w.format!==Ln)if(Be!==null)if(st){if(k)if(w.layerUpdates.size>0){const Ae=Bl(De.width,De.height,w.format,w.type);for(const Ne of w.layerUpdates){const _t=De.data.subarray(Ne*Ae/De.data.BYTES_PER_ELEMENT,(Ne+1)*Ae/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ne,De.width,De.height,1,Be,_t,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,De.width,De.height,Me.depth,Be,De.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Xe,De.width,De.height,Me.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,De.width,De.height,Me.depth,Be,Ke,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Xe,De.width,De.height,Me.depth,0,Be,Ke,De.data)}else{st&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Xe,at[0].width,at[0].height);for(let se=0,de=at.length;se<de;se++)De=at[se],w.format!==Ln?Be!==null?st?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,De.width,De.height,Be,De.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,De.width,De.height,Be,Ke,De.data):t.texImage2D(i.TEXTURE_2D,se,Xe,De.width,De.height,0,Be,Ke,De.data)}else if(w.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Xe,Me.width,Me.height,Me.depth),k)if(w.layerUpdates.size>0){const se=Bl(Me.width,Me.height,w.format,w.type);for(const de of w.layerUpdates){const Ae=Me.data.subarray(de*se/Me.data.BYTES_PER_ELEMENT,(de+1)*se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,Be,Ke,Ae)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Be,Ke,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,Me.width,Me.height,Me.depth,0,Be,Ke,Me.data);else if(w.isData3DTexture)st?(Ct&&t.texStorage3D(i.TEXTURE_3D,Ie,Xe,Me.width,Me.height,Me.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Be,Ke,Me.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,Me.width,Me.height,Me.depth,0,Be,Ke,Me.data);else if(w.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(i.TEXTURE_2D,Ie,Xe,Me.width,Me.height);else{let se=Me.width,de=Me.height;for(let Ae=0;Ae<Ie;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Xe,se,de,0,Be,Ke,null),se>>=1,de>>=1}}else if(at.length>0){if(st&&Ct){const se=Ze(at[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Xe,se.width,se.height)}for(let se=0,de=at.length;se<de;se++)De=at[se],st?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Be,Ke,De):t.texImage2D(i.TEXTURE_2D,se,Xe,Be,Ke,De);w.generateMipmaps=!1}else if(st){if(Ct){const se=Ze(Me);t.texStorage2D(i.TEXTURE_2D,Ie,Xe,se.width,se.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,Ke,Me)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Be,Ke,Me);v(w)&&g(ue),Pe.__version=X.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ce(U,w,j){if(w.image.length!==6)return;const ue=dt(U,w),ge=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);const X=n.get(ge);if(ge.version!==X.__version||ue===!0){t.activeTexture(i.TEXTURE0+j);const Pe=Rt.getPrimaries(Rt.workingColorSpace),Re=w.colorSpace===di?null:Rt.getPrimaries(w.colorSpace),Oe=w.colorSpace===di||Pe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const St=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let de=0;de<6;de++)!St&&!Me?Be[de]=C(w.image[de],!0,s.maxCubemapSize):Be[de]=Me?w.image[de].image:w.image[de],Be[de]=ft(w,Be[de]);const Ke=Be[0],Xe=a.convert(w.format,w.colorSpace),De=a.convert(w.type),at=O(w.internalFormat,Xe,De,w.colorSpace),st=w.isVideoTexture!==!0,Ct=X.__version===void 0||ue===!0,k=ge.dataReady;let Ie=N(w,Ke);Se(i.TEXTURE_CUBE_MAP,w);let se;if(St){st&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,at,Ke.width,Ke.height);for(let de=0;de<6;de++){se=Be[de].mipmaps;for(let Ae=0;Ae<se.length;Ae++){const Ne=se[Ae];w.format!==Ln?Xe!==null?st?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,0,0,Ne.width,Ne.height,Xe,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,at,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,0,0,Ne.width,Ne.height,Xe,De,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,at,Ne.width,Ne.height,0,Xe,De,Ne.data)}}}else{if(se=w.mipmaps,st&&Ct){se.length>0&&Ie++;const de=Ze(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,at,de.width,de.height)}for(let de=0;de<6;de++)if(Me){st?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Be[de].width,Be[de].height,Xe,De,Be[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,at,Be[de].width,Be[de].height,0,Xe,De,Be[de].data);for(let Ae=0;Ae<se.length;Ae++){const _t=se[Ae].image[de].image;st?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,0,0,_t.width,_t.height,Xe,De,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,at,_t.width,_t.height,0,Xe,De,_t.data)}}else{st?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Xe,De,Be[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,at,Xe,De,Be[de]);for(let Ae=0;Ae<se.length;Ae++){const Ne=se[Ae];st?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,0,0,Xe,De,Ne.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,at,Xe,De,Ne.image[de])}}}v(w)&&g(i.TEXTURE_CUBE_MAP),X.__version=ge.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ve(U,w,j,ue,ge,X){const Pe=a.convert(j.format,j.colorSpace),Re=a.convert(j.type),Oe=O(j.internalFormat,Pe,Re,j.colorSpace);if(!n.get(w).__hasExternalTextures){const Me=Math.max(1,w.width>>X),Be=Math.max(1,w.height>>X);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,X,Oe,Me,Be,w.depth,0,Pe,Re,null):t.texImage2D(ge,X,Oe,Me,Be,0,Pe,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ht(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ge,n.get(j).__webglTexture,0,ot(w)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ge,n.get(j).__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(U,w,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){const ue=w.depthTexture,ge=ue&&ue.isDepthTexture?ue.type:null,X=L(w.stencilBuffer,ge),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=ot(w);ht(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,X,w.width,w.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,X,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,X,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,U)}else{const ue=w.textures;for(let ge=0;ge<ue.length;ge++){const X=ue[ge],Pe=a.convert(X.format,X.colorSpace),Re=a.convert(X.type),Oe=O(X.internalFormat,Pe,Re,X.colorSpace),St=ot(w);j&&ht(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Oe,w.width,w.height):ht(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,Oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const ue=n.get(w.depthTexture).__webglTexture,ge=ot(w);if(w.depthTexture.format===ar)ht(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(w.depthTexture.format===hr)ht(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function We(U){const w=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const ue=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",ge)};ue.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=ue}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");be(w.__webglFramebuffer,U)}else if(j){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=i.createRenderbuffer(),Fe(w.__webglDepthbuffer[ue],U,!1);else{const ge=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Fe(w.__webglDepthbuffer,U,!1);else{const ue=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(U,w,j){const ue=n.get(U);w!==void 0&&ve(ue.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&We(U)}function Qe(U){const w=U.texture,j=n.get(U),ue=n.get(w);U.addEventListener("dispose",V);const ge=U.textures,X=U.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=w.version,u.memory.textures++),X){j.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[Re]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)j.__webglFramebuffer[Re][Oe]=i.createFramebuffer()}else j.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)j.__webglFramebuffer[Re]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let Re=0,Oe=ge.length;Re<Oe;Re++){const St=n.get(ge[Re]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),u.memory.textures++)}if(U.samples>0&&ht(U)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Re=0;Re<ge.length;Re++){const Oe=ge[Re];j.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Re]);const St=a.convert(Oe.format,Oe.colorSpace),Me=a.convert(Oe.type),Be=O(Oe.internalFormat,St,Me,Oe.colorSpace,U.isXRRenderTarget===!0),Ke=ot(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Be,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,j.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Se(i.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ve(j.__webglFramebuffer[Re][Oe],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Oe);else ve(j.__webglFramebuffer[Re],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);v(w)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let Re=0,Oe=ge.length;Re<Oe;Re++){const St=ge[Re],Me=n.get(St);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),Se(i.TEXTURE_2D,St),ve(j.__webglFramebuffer,U,St,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),v(St)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,ue.__webglTexture),Se(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ve(j.__webglFramebuffer[Oe],U,w,i.COLOR_ATTACHMENT0,Re,Oe);else ve(j.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,Re,0);v(w)&&g(Re),t.unbindTexture()}U.depthBuffer&&We(U)}function wt(U){const w=U.textures;for(let j=0,ue=w.length;j<ue;j++){const ge=w[j];if(v(ge)){const X=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(ge).__webglTexture;t.bindTexture(X,Pe),g(X),t.unbindTexture()}}}const rt=[],B=[];function Vt(U){if(U.samples>0){if(ht(U)===!1){const w=U.textures,j=U.width,ue=U.height;let ge=i.COLOR_BUFFER_BIT;const X=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(U),Re=w.length>1;if(Re)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Oe]);const St=n.get(w[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,j,ue,0,0,j,ue,ge,i.NEAREST),h===!0&&(rt.length=0,B.length=0,rt.push(i.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(rt.push(X),B.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Oe]);const St=n.get(w[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,St,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ot(U){return Math.min(s.maxSamples,U.samples)}function ht(U){const w=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(U){const w=u.render.frame;m.get(U)!==w&&(m.set(U,w),U.update())}function ft(U,w){const j=U.colorSpace,ue=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==vi&&j!==di&&(Rt.getTransfer(j)===Ft?(ue!==Ln||ge!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=P,this.setTexture2D=fe,this.setTexture2DArray=me,this.setTexture3D=ae,this.setTextureCube=pe,this.rebindTextures=qe,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ht}function cg(i,e){function t(n,s=di){let a;const u=Rt.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Mo)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===zr)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===Zl)return i.RGB;if(n===Ln)return i.RGBA;if(n===$l)return i.LUMINANCE;if(n===Jl)return i.LUMINANCE_ALPHA;if(n===ar)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===To)return i.RED_INTEGER;if(n===ec)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===ys||n===Es||n===Ts||n===bs)if(u===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ys)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ys)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Ka||n===Za)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ja||n===Ka)return u===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Za)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===uo||n===fo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ja)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===As||n===ho||n===po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===As)return u===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===mo||n===go||n===_o)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===As)return a.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_o)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class ug extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fg={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,u=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const v=t.getJointPose(C,n),g=this._getHandJoint(p,C);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=m.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
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

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new ln,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:hg,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends pr{constructor(e,t){super();const n=this;let s=null,a=1,u=null,c="local-floor",h=1,p=null,m=null,_=null,x=null,M=null,E=null;const C=new pg,v=t.getContextAttributes();let g=null,O=null;const L=[],N=[],ee=new yt;let V=null;const l=new Sn;l.layers.enable(1),l.viewport=new zt;const Q=new Sn;Q.layers.enable(2),Q.viewport=new zt;const he=[l,Q],A=new ug;A.layers.enable(1),A.layers.enable(2);let P=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ve=L[ce];return ve===void 0&&(ve=new Pa,L[ce]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ce){let ve=L[ce];return ve===void 0&&(ve=new Pa,L[ce]=ve),ve.getGripSpace()},this.getHand=function(ce){let ve=L[ce];return ve===void 0&&(ve=new Pa,L[ce]=ve),ve.getHandSpace()};function Y(ce){const ve=N.indexOf(ce.inputSource);if(ve===-1)return;const Fe=L[ve];Fe!==void 0&&(Fe.update(ce.inputSource,ce.frame,p||u),Fe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function fe(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",me);for(let ce=0;ce<L.length;ce++){const ve=N[ce];ve!==null&&(N[ce]=null,L[ce].disconnect(ve))}P=null,ne=null,C.reset(),e.setRenderTarget(g),M=null,x=null,_=null,s=null,O=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(ee.width,ee.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){c=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ce){p=ce},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",me),v.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(ee),s.renderState.layers===void 0){const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new zi(M.framebufferWidth,M.framebufferHeight,{format:Ln,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ve=null,Fe=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?hr:ar,Fe=v.stencil?fr:Bi);const We={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};_=new XRWebGLBinding(s,t),x=_.createProjectionLayer(We),s.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new zi(x.textureWidth,x.textureHeight,{format:Ln,type:ei,depthTexture:new gc(x.textureWidth,x.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await s.requestReferenceSpace(c),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function me(ce){for(let ve=0;ve<ce.removed.length;ve++){const Fe=ce.removed[ve],be=N.indexOf(Fe);be>=0&&(N[be]=null,L[be].disconnect(Fe))}for(let ve=0;ve<ce.added.length;ve++){const Fe=ce.added[ve];let be=N.indexOf(Fe);if(be===-1){for(let qe=0;qe<L.length;qe++)if(qe>=N.length){N.push(Fe),be=qe;break}else if(N[qe]===null){N[qe]=Fe,be=qe;break}if(be===-1)break}const We=L[be];We&&We.connect(Fe)}}const ae=new ie,pe=new ie;function q(ce,ve,Fe){ae.setFromMatrixPosition(ve.matrixWorld),pe.setFromMatrixPosition(Fe.matrixWorld);const be=ae.distanceTo(pe),We=ve.projectionMatrix.elements,qe=Fe.projectionMatrix.elements,Qe=We[14]/(We[10]-1),wt=We[14]/(We[10]+1),rt=(We[9]+1)/We[5],B=(We[9]-1)/We[5],Vt=(We[8]-1)/We[0],ot=(qe[8]+1)/qe[0],ht=Qe*Vt,Ye=Qe*ot,ft=be/(-Vt+ot),Ze=ft*-Vt;if(ve.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Ze),ce.translateZ(ft),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),We[10]===-1)ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const U=Qe+ft,w=wt+ft,j=ht-Ze,ue=Ye+(be-Ze),ge=rt*wt/w*U,X=B*wt/w*U;ce.projectionMatrix.makePerspective(j,ue,ge,X,U,w),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Te(ce,ve){ve===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ve.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let ve=ce.near,Fe=ce.far;C.texture!==null&&(C.depthNear>0&&(ve=C.depthNear),C.depthFar>0&&(Fe=C.depthFar)),A.near=Q.near=l.near=ve,A.far=Q.far=l.far=Fe,(P!==A.near||ne!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,ne=A.far);const be=ce.parent,We=A.cameras;Te(A,be);for(let qe=0;qe<We.length;qe++)Te(We[qe],be);We.length===2?q(A,l,Q):A.projectionMatrix.copy(l.projectionMatrix),xe(ce,A,be)};function xe(ce,ve,Fe){Fe===null?ce.matrix.copy(ve.matrixWorld):(ce.matrix.copy(Fe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ve.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Or*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(ce){h=ce,x!==null&&(x.fixedFoveation=ce),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ce)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let Se=null;function dt(ce,ve){if(m=ve.getViewerPose(p||u),E=ve,m!==null){const Fe=m.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let be=!1;Fe.length!==A.cameras.length&&(A.cameras.length=0,be=!0);for(let qe=0;qe<Fe.length;qe++){const Qe=Fe[qe];let wt=null;if(M!==null)wt=M.getViewport(Qe);else{const B=_.getViewSubImage(x,Qe);wt=B.viewport,qe===0&&(e.setRenderTargetTextures(O,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(O))}let rt=he[qe];rt===void 0&&(rt=new Sn,rt.layers.enable(qe),rt.viewport=new zt,he[qe]=rt),rt.matrix.fromArray(Qe.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Qe.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(wt.x,wt.y,wt.width,wt.height),qe===0&&(A.matrix.copy(rt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),be===!0&&A.cameras.push(rt)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")){const qe=_.getDepthInformation(Fe[0]);qe&&qe.isValid&&qe.texture&&C.init(e,qe,s.renderState)}}for(let Fe=0;Fe<L.length;Fe++){const be=N[Fe],We=L[Fe];be!==null&&We!==void 0&&We.update(be,ve,p||u)}Se&&Se(ce,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),E=null}const gt=new mc;gt.setAnimationLoop(dt),this.setAnimationLoop=function(ce){Se=ce},this.dispose=function(){}}}const Di=new ti,gg=new Ht;function _g(i,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function n(v,g){g.color.getRGB(v.fogColor.value,fc(i)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function s(v,g,O,L,N){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(v,g):g.isMeshToonMaterial?(a(v,g),_(v,g)):g.isMeshPhongMaterial?(a(v,g),m(v,g)):g.isMeshStandardMaterial?(a(v,g),x(v,g),g.isMeshPhysicalMaterial&&M(v,g,N)):g.isMeshMatcapMaterial?(a(v,g),E(v,g)):g.isMeshDepthMaterial?a(v,g):g.isMeshDistanceMaterial?(a(v,g),C(v,g)):g.isMeshNormalMaterial?a(v,g):g.isLineBasicMaterial?(u(v,g),g.isLineDashedMaterial&&c(v,g)):g.isPointsMaterial?h(v,g,O,L):g.isSpriteMaterial?p(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===hn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===hn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const O=e.get(g),L=O.envMap,N=O.envMapRotation;L&&(v.envMap.value=L,Di.copy(N),Di.x*=-1,Di.y*=-1,Di.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),v.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(Di)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function u(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function c(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,O,L){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*O,v.scale.value=L*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function _(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function M(v,g,O){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=O.texture,v.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,g){g.matcap&&(v.matcap.value=g.matcap)}function C(v,g){const O=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(O.matrixWorld),v.nearDistance.value=O.shadow.camera.near,v.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,e,t,n){let s={},a={},u=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,L){const N=L.program;n.uniformBlockBinding(O,N)}function p(O,L){let N=s[O.id];N===void 0&&(E(O),N=m(O),s[O.id]=N,O.addEventListener("dispose",v));const ee=L.program;n.updateUBOMapping(O,ee);const V=e.render.frame;a[O.id]!==V&&(x(O),a[O.id]=V)}function m(O){const L=_();O.__bindingPointIndex=L;const N=i.createBuffer(),ee=O.__size,V=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,ee,V),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,N),N}function _(){for(let O=0;O<c;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const L=s[O.id],N=O.uniforms,ee=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let V=0,l=N.length;V<l;V++){const Q=Array.isArray(N[V])?N[V]:[N[V]];for(let he=0,A=Q.length;he<A;he++){const P=Q[he];if(M(P,V,he,ee)===!0){const ne=P.__offset,Y=Array.isArray(P.value)?P.value:[P.value];let fe=0;for(let me=0;me<Y.length;me++){const ae=Y[me],pe=C(ae);typeof ae=="number"||typeof ae=="boolean"?(P.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,ne+fe,P.__data)):ae.isMatrix3?(P.__data[0]=ae.elements[0],P.__data[1]=ae.elements[1],P.__data[2]=ae.elements[2],P.__data[3]=0,P.__data[4]=ae.elements[3],P.__data[5]=ae.elements[4],P.__data[6]=ae.elements[5],P.__data[7]=0,P.__data[8]=ae.elements[6],P.__data[9]=ae.elements[7],P.__data[10]=ae.elements[8],P.__data[11]=0):(ae.toArray(P.__data,fe),fe+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ne,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(O,L,N,ee){const V=O.value,l=L+"_"+N;if(ee[l]===void 0)return typeof V=="number"||typeof V=="boolean"?ee[l]=V:ee[l]=V.clone(),!0;{const Q=ee[l];if(typeof V=="number"||typeof V=="boolean"){if(Q!==V)return ee[l]=V,!0}else if(Q.equals(V)===!1)return Q.copy(V),!0}return!1}function E(O){const L=O.uniforms;let N=0;const ee=16;for(let l=0,Q=L.length;l<Q;l++){const he=Array.isArray(L[l])?L[l]:[L[l]];for(let A=0,P=he.length;A<P;A++){const ne=he[A],Y=Array.isArray(ne.value)?ne.value:[ne.value];for(let fe=0,me=Y.length;fe<me;fe++){const ae=Y[fe],pe=C(ae),q=N%ee,Te=q%pe.boundary,xe=q+Te;N+=Te,xe!==0&&ee-xe<pe.storage&&(N+=ee-xe),ne.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=N,N+=pe.storage}}}const V=N%ee;return V>0&&(N+=ee-V),O.__size=N,O.__cache={},this}function C(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function v(O){const L=O.target;L.removeEventListener("dispose",v);const N=u.indexOf(L.__bindingPointIndex);u.splice(N,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function g(){for(const O in s)i.deleteBuffer(s[O]);u=[],s={},a={}}return{bind:h,update:p,dispose:g}}class xg{constructor(e={}){const{canvas:t=sf(),context:n=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let C=null,v=null;const g=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=mi,this.toneMappingExposure=1;const L=this;let N=!1,ee=0,V=0,l=null,Q=-1,he=null;const A=new zt,P=new zt;let ne=null;const Y=new Pt(0);let fe=0,me=t.width,ae=t.height,pe=1,q=null,Te=null;const xe=new zt(0,0,me,ae),Se=new zt(0,0,me,ae);let dt=!1;const gt=new pc;let ce=!1,ve=!1;const Fe=new Ht,be=new Ht,We=new ie,qe=new zt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function rt(){return l===null?pe:1}let B=n;function Vt(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${So}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),B===null){const G="webgl2";if(B=Vt(G,R),B===null)throw Vt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ot,ht,Ye,ft,Ze,U,w,j,ue,ge,X,Pe,Re,Oe,St,Me,Be,Ke,Xe,De,at,st,Ct,k;function Ie(){ot=new Tp(B),ot.init(),st=new cg(B,ot),ht=new _p(B,ot,e,st),Ye=new ag(B),ht.reverseDepthBuffer&&Ye.buffers.depth.setReversed(!0),ft=new wp(B),Ze=new Xm,U=new lg(B,ot,Ye,Ze,ht,st,ft),w=new xp(L),j=new Ep(L),ue=new Uf(B),Ct=new mp(B,ue),ge=new bp(B,ue,ft,Ct),X=new Rp(B,ge,ue,ft),Xe=new Cp(B,ht,U),Me=new vp(Ze),Pe=new Wm(L,w,j,ot,ht,Ct,Me),Re=new _g(L,Ze),Oe=new Ym,St=new Qm(ot),Ke=new pp(L,w,j,Ye,X,x,h),Be=new rg(L,X,ht),k=new vg(B,ft,ht,Ye),De=new gp(B,ot,ft),at=new Ap(B,ot,ft),ft.programs=Pe.programs,L.capabilities=ht,L.extensions=ot,L.properties=Ze,L.renderLists=Oe,L.shadowMap=Be,L.state=Ye,L.info=ft}Ie();const se=new mg(L,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(me,ae,!1))},this.getSize=function(R){return R.set(me,ae)},this.setSize=function(R,G,$=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=R,ae=G,t.width=Math.floor(R*pe),t.height=Math.floor(G*pe),$===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(me*pe,ae*pe).floor()},this.setDrawingBufferSize=function(R,G,$){me=R,ae=G,pe=$,t.width=Math.floor(R*$),t.height=Math.floor(G*$),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(xe)},this.setViewport=function(R,G,$,J){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,G,$,J),Ye.viewport(A.copy(xe).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,G,$,J){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,G,$,J),Ye.scissor(P.copy(Se).multiplyScalar(pe).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){Ye.setScissorTest(dt=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){Te=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,G=!0,$=!0){let J=0;if(R){let W=!1;if(l!==null){const ye=l.texture.format;W=ye===Ao||ye===bo||ye===To}if(W){const ye=l.texture.type,we=ye===ei||ye===Bi||ye===Fr||ye===fr||ye===yo||ye===Eo,ze=Ke.getClearColor(),He=Ke.getClearAlpha(),$e=ze.r,Je=ze.g,Ve=ze.b;we?(M[0]=$e,M[1]=Je,M[2]=Ve,M[3]=He,B.clearBufferuiv(B.COLOR,0,M)):(E[0]=$e,E[1]=Je,E[2]=Ve,E[3]=He,B.clearBufferiv(B.COLOR,0,E))}else J|=B.COLOR_BUFFER_BIT}G&&(J|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Oe.dispose(),St.dispose(),Ze.dispose(),w.dispose(),j.dispose(),X.dispose(),Ct.dispose(),k.dispose(),Pe.dispose(),se.dispose(),se.removeEventListener("sessionstart",vr),se.removeEventListener("sessionend",Gn),cn.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=ft.autoReset,G=Be.enabled,$=Be.autoUpdate,J=Be.needsUpdate,W=Be.type;Ie(),ft.autoReset=R,Be.enabled=G,Be.autoUpdate=$,Be.needsUpdate=J,Be.type=W}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const G=R.target;G.removeEventListener("dispose",_t),Et(G)}function Et(R){Dt(R),Ze.remove(R)}function Dt(R){const G=Ze.get(R).programs;G!==void 0&&(G.forEach(function($){Pe.releaseProgram($)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,$,J,W,ye){G===null&&(G=Qe);const we=W.isMesh&&W.matrixWorld.determinant()<0,ze=Yr(R,G,$,J,W);Ye.setMaterial(J,we);let He=$.index,$e=1;if(J.wireframe===!0){if(He=ge.getWireframeAttribute($),He===void 0)return;$e=2}const Je=$.drawRange,Ve=$.attributes.position;let Tt=Je.start*$e,Ut=(Je.start+Je.count)*$e;ye!==null&&(Tt=Math.max(Tt,ye.start*$e),Ut=Math.min(Ut,(ye.start+ye.count)*$e)),He!==null?(Tt=Math.max(Tt,0),Ut=Math.min(Ut,He.count)):Ve!=null&&(Tt=Math.max(Tt,0),Ut=Math.min(Ut,Ve.count));const Ot=Ut-Tt;if(Ot<0||Ot===1/0)return;Ct.setup(W,J,ze,$,He);let $t,bt=De;if(He!==null&&($t=ue.get(He),bt=at,bt.setIndex($t)),W.isMesh)J.wireframe===!0?(Ye.setLineWidth(J.wireframeLinewidth*rt()),bt.setMode(B.LINES)):bt.setMode(B.TRIANGLES);else if(W.isLine){let Ge=J.linewidth;Ge===void 0&&(Ge=1),Ye.setLineWidth(Ge*rt()),W.isLineSegments?bt.setMode(B.LINES):W.isLineLoop?bt.setMode(B.LINE_LOOP):bt.setMode(B.LINE_STRIP)}else W.isPoints?bt.setMode(B.POINTS):W.isSprite&&bt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)bt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))bt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ge=W._multiDrawStarts,kt=W._multiDrawCounts,nt=W._multiDrawCount,Yt=He?ue.get(He).bytesPerElement:1,Tn=Ze.get(J).currentProgram.getUniforms();for(let tn=0;tn<nt;tn++)Tn.setValue(B,"_gl_DrawID",tn),bt.render(Ge[tn]/Yt,kt[tn])}else if(W.isInstancedMesh)bt.renderInstances(Tt,Ot,W.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kt=Math.min($.instanceCount,Ge);bt.renderInstances(Tt,Ot,kt)}else bt.render(Tt,Ot)};function xt(R,G,$){R.transparent===!0&&R.side===$n&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,Mi(R,G,$),R.side=gi,R.needsUpdate=!0,Mi(R,G,$),R.side=$n):Mi(R,G,$)}this.compile=function(R,G,$=null){$===null&&($=R),v=St.get($),v.init(G),O.push(v),$.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),R!==$&&R.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const J=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ye=W.material;if(ye)if(Array.isArray(ye))for(let we=0;we<ye.length;we++){const ze=ye[we];xt(ze,$,W),J.add(ze)}else xt(ye,$,W),J.add(ye)}),O.pop(),v=null,J},this.compileAsync=function(R,G,$=null){const J=this.compile(R,G,$);return new Promise(W=>{function ye(){if(J.forEach(function(we){Ze.get(we).currentProgram.isReady()&&J.delete(we)}),J.size===0){W(R);return}setTimeout(ye,10)}ot.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Zt=null;function gn(R){Zt&&Zt(R)}function vr(){cn.stop()}function Gn(){cn.start()}const cn=new mc;cn.setAnimationLoop(gn),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(R){Zt=R,se.setAnimationLoop(R),R===null?cn.stop():cn.start()},se.addEventListener("sessionstart",vr),se.addEventListener("sessionend",Gn),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,G,l),v=St.get(R,O.length),v.init(G),O.push(v),be.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),gt.setFromProjectionMatrix(be),ve=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,ve),C=Oe.get(R,g.length),C.init(),g.push(C),se.enabled===!0&&se.isPresenting===!0){const ye=L.xr.getDepthSensingMesh();ye!==null&&xi(ye,G,-1/0,L.sortObjects)}xi(R,G,0,L.sortObjects),C.finish(),L.sortObjects===!0&&C.sort(q,Te),wt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,wt&&Ke.addToRenderList(C,R),this.info.render.frame++,ce===!0&&Me.beginShadows();const $=v.state.shadowsArray;Be.render($,R,G),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=C.opaque,W=C.transmissive;if(v.setupLights(),G.isArrayCamera){const ye=G.cameras;if(W.length>0)for(let we=0,ze=ye.length;we<ze;we++){const He=ye[we];Vr(J,W,R,He)}wt&&Ke.render(R);for(let we=0,ze=ye.length;we<ze;we++){const He=ye[we];Si(C,R,He,He.viewport)}}else W.length>0&&Vr(J,W,R,G),wt&&Ke.render(R),Si(C,R,G);l!==null&&(U.updateMultisampleRenderTarget(l),U.updateRenderTargetMipmap(l)),R.isScene===!0&&R.onAfterRender(L,R,G),Ct.resetDefaultState(),Q=-1,he=null,O.pop(),O.length>0?(v=O[O.length-1],ce===!0&&Me.setGlobalState(L.clippingPlanes,v.state.camera)):v=null,g.pop(),g.length>0?C=g[g.length-1]:C=null};function xi(R,G,$,J){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||gt.intersectsSprite(R)){J&&qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const we=X.update(R),ze=R.material;ze.visible&&C.push(R,we,ze,$,qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||gt.intersectsObject(R))){const we=X.update(R),ze=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qe.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),qe.copy(we.boundingSphere.center)),qe.applyMatrix4(R.matrixWorld).applyMatrix4(be)),Array.isArray(ze)){const He=we.groups;for(let $e=0,Je=He.length;$e<Je;$e++){const Ve=He[$e],Tt=ze[Ve.materialIndex];Tt&&Tt.visible&&C.push(R,we,Tt,$,qe.z,Ve)}}else ze.visible&&C.push(R,we,ze,$,qe.z,null)}}const ye=R.children;for(let we=0,ze=ye.length;we<ze;we++)xi(ye[we],G,$,J)}function Si(R,G,$,J){const W=R.opaque,ye=R.transmissive,we=R.transparent;v.setupLightsView($),ce===!0&&Me.setGlobalState(L.clippingPlanes,$),J&&Ye.viewport(A.copy(J)),W.length>0&&Hi(W,G,$),ye.length>0&&Hi(ye,G,$),we.length>0&&Hi(we,G,$),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Vr(R,G,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[J.id]===void 0&&(v.state.transmissionRenderTarget[J.id]=new zi(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?zr:ei,minFilter:Oi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const ye=v.state.transmissionRenderTarget[J.id],we=J.viewport||A;ye.setSize(we.z,we.w);const ze=L.getRenderTarget();L.setRenderTarget(ye),L.getClearColor(Y),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),wt&&Ke.render($);const He=L.toneMapping;L.toneMapping=mi;const $e=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),ce===!0&&Me.setGlobalState(L.clippingPlanes,J),Hi(R,$,J),U.updateMultisampleRenderTarget(ye),U.updateRenderTargetMipmap(ye),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ve=0,Tt=G.length;Ve<Tt;Ve++){const Ut=G[Ve],Ot=Ut.object,$t=Ut.geometry,bt=Ut.material,Ge=Ut.group;if(bt.side===$n&&Ot.layers.test(J.layers)){const kt=bt.side;bt.side=hn,bt.needsUpdate=!0,Wr(Ot,$,J,$t,bt,Ge),bt.side=kt,bt.needsUpdate=!0,Je=!0}}Je===!0&&(U.updateMultisampleRenderTarget(ye),U.updateRenderTargetMipmap(ye))}L.setRenderTarget(ze),L.setClearColor(Y,fe),$e!==void 0&&(J.viewport=$e),L.toneMapping=He}function Hi(R,G,$){const J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ye=R.length;W<ye;W++){const we=R[W],ze=we.object,He=we.geometry,$e=J===null?we.material:J,Je=we.group;ze.layers.test($.layers)&&Wr(ze,G,$,He,$e,Je)}}function Wr(R,G,$,J,W,ye){R.onBeforeRender(L,G,$,J,W,ye),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(L,G,$,J,R,ye),W.transparent===!0&&W.side===$n&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,L.renderBufferDirect($,G,J,W,R,ye),W.side=gi,W.needsUpdate=!0,L.renderBufferDirect($,G,J,W,R,ye),W.side=$n):L.renderBufferDirect($,G,J,W,R,ye),R.onAfterRender(L,G,$,J,W,ye)}function Mi(R,G,$){G.isScene!==!0&&(G=Qe);const J=Ze.get(R),W=v.state.lights,ye=v.state.shadowsArray,we=W.state.version,ze=Pe.getParameters(R,W.state,ye,G,$),He=Pe.getProgramCacheKey(ze);let $e=J.programs;J.environment=R.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(R.isMeshStandardMaterial?j:w).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",_t),$e=new Map,J.programs=$e);let Je=$e.get(He);if(Je!==void 0){if(J.currentProgram===Je&&J.lightsStateVersion===we)return qr(R,ze),Je}else ze.uniforms=Pe.getUniforms(R),R.onBeforeCompile(ze,L),Je=Pe.acquireProgram(ze,He),$e.set(He,Je),J.uniforms=ze.uniforms;const Ve=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),qr(R,ze),J.needsLights=ni(R),J.lightsStateVersion=we,J.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Je,J.uniformsList=null,Je}function Xr(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Cs.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function qr(R,G){const $=Ze.get(R);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Yr(R,G,$,J,W){G.isScene!==!0&&(G=Qe),U.resetTextureUnits();const ye=G.fog,we=J.isMeshStandardMaterial?G.environment:null,ze=l===null?L.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:vi,He=(J.isMeshStandardMaterial?j:w).get(J.envMap||we),$e=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!$.morphAttributes.position,Tt=!!$.morphAttributes.normal,Ut=!!$.morphAttributes.color;let Ot=mi;J.toneMapped&&(l===null||l.isXRRenderTarget===!0)&&(Ot=L.toneMapping);const $t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,bt=$t!==void 0?$t.length:0,Ge=Ze.get(J),kt=v.state.lights;if(ce===!0&&(ve===!0||R!==he)){const nn=R===he&&J.id===Q;Me.setState(J,R,nn)}let nt=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==kt.state.version||Ge.outputColorSpace!==ze||W.isBatchedMesh&&Ge.batching===!1||!W.isBatchedMesh&&Ge.batching===!0||W.isBatchedMesh&&Ge.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ge.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ge.instancing===!1||!W.isInstancedMesh&&Ge.instancing===!0||W.isSkinnedMesh&&Ge.skinning===!1||!W.isSkinnedMesh&&Ge.skinning===!0||W.isInstancedMesh&&Ge.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ge.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ge.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ge.instancingMorph===!1&&W.morphTexture!==null||Ge.envMap!==He||J.fog===!0&&Ge.fog!==ye||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Me.numPlanes||Ge.numIntersection!==Me.numIntersection)||Ge.vertexAlphas!==$e||Ge.vertexTangents!==Je||Ge.morphTargets!==Ve||Ge.morphNormals!==Tt||Ge.morphColors!==Ut||Ge.toneMapping!==Ot||Ge.morphTargetsCount!==bt)&&(nt=!0):(nt=!0,Ge.__version=J.version);let Yt=Ge.currentProgram;nt===!0&&(Yt=Mi(J,G,W));let Tn=!1,tn=!1,xr=!1;const Nt=Yt.getUniforms(),bn=Ge.uniforms;if(Ye.useProgram(Yt.program)&&(Tn=!0,tn=!0,xr=!0),J.id!==Q&&(Q=J.id,tn=!0),Tn||he!==R){ht.reverseDepthBuffer?(Fe.copy(R.projectionMatrix),of(Fe),lf(Fe),Nt.setValue(B,"projectionMatrix",Fe)):Nt.setValue(B,"projectionMatrix",R.projectionMatrix),Nt.setValue(B,"viewMatrix",R.matrixWorldInverse);const nn=Nt.map.cameraPosition;nn!==void 0&&nn.setValue(B,We.setFromMatrixPosition(R.matrixWorld)),ht.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),he!==R&&(he=R,tn=!0,xr=!0)}if(W.isSkinnedMesh){Nt.setOptional(B,W,"bindMatrix"),Nt.setOptional(B,W,"bindMatrixInverse");const nn=W.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Nt.setValue(B,"boneTexture",nn.boneTexture,U))}W.isBatchedMesh&&(Nt.setOptional(B,W,"batchingTexture"),Nt.setValue(B,"batchingTexture",W._matricesTexture,U),Nt.setOptional(B,W,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",W._indirectTexture,U),Nt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",W._colorsTexture,U));const ii=$.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Xe.update(W,$,Yt),(tn||Ge.receiveShadow!==W.receiveShadow)&&(Ge.receiveShadow=W.receiveShadow,Nt.setValue(B,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(bn.envMap.value=He,bn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(bn.envMapIntensity.value=G.environmentIntensity),tn&&(Nt.setValue(B,"toneMappingExposure",L.toneMappingExposure),Ge.needsLights&&Hs(bn,xr),ye&&J.fog===!0&&Re.refreshFogUniforms(bn,ye),Re.refreshMaterialUniforms(bn,J,pe,ae,v.state.transmissionRenderTarget[R.id]),Cs.upload(B,Xr(Ge),bn,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Cs.upload(B,Xr(Ge),bn,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Nt.setValue(B,"center",W.center),Nt.setValue(B,"modelViewMatrix",W.modelViewMatrix),Nt.setValue(B,"normalMatrix",W.normalMatrix),Nt.setValue(B,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const nn=J.uniformsGroups;for(let Sr=0,ks=nn.length;Sr<ks;Sr++){const un=nn[Sr];k.update(un,Yt),k.bind(un,Yt)}}return Yt}function Hs(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function ni(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(R,G,$){Ze.get(R.texture).__webglTexture=G,Ze.get(R.depthTexture).__webglTexture=$;const J=Ze.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const $=Ze.get(R);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,$=0){l=R,ee=G,V=$;let J=!0,W=null,ye=!1,we=!1;if(R){const He=Ze.get(R);if(He.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(He.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(He.__hasExternalTextures)U.rebindTextures(R,Ze.get(R.texture).__webglTexture,Ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(He.__boundDepthTexture!==Ve){if(Ve!==null&&Ze.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(we=!0);const Je=Ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?W=Je[G][$]:W=Je[G],ye=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?W=Ze.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?W=Je[$]:W=Je,A.copy(R.viewport),P.copy(R.scissor),ne=R.scissorTest}else A.copy(xe).multiplyScalar(pe).floor(),P.copy(Se).multiplyScalar(pe).floor(),ne=dt;if(Ye.bindFramebuffer(B.FRAMEBUFFER,W)&&J&&Ye.drawBuffers(R,W),Ye.viewport(A),Ye.scissor(P),Ye.setScissorTest(ne),ye){const He=Ze.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,He.__webglTexture,$)}else if(we){const He=Ze.get(R.texture),$e=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.__webglTexture,$||0,$e)}Q=-1},this.readRenderTargetPixels=function(R,G,$,J,W,ye,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(ze=ze[we]),ze){Ye.bindFramebuffer(B.FRAMEBUFFER,ze);try{const He=R.texture,$e=He.format,Je=He.type;if(!ht.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-J&&$>=0&&$<=R.height-W&&B.readPixels(G,$,J,W,st.convert($e),st.convert(Je),ye)}finally{const He=l!==null?Ze.get(l).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,G,$,J,W,ye,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(ze=ze[we]),ze){const He=R.texture,$e=He.format,Je=He.type;if(!ht.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-J&&$>=0&&$<=R.height-W){Ye.bindFramebuffer(B.FRAMEBUFFER,ze);const Ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ve),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(G,$,J,W,st.convert($e),st.convert(Je),0);const Tt=l!==null?Ze.get(l).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,Tt);const Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await af(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(Ve),B.deleteSync(Ut),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,$=0){R.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const J=Math.pow(2,-$),W=Math.floor(R.image.width*J),ye=Math.floor(R.image.height*J),we=G!==null?G.x:0,ze=G!==null?G.y:0;U.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,we,ze,W,ye),Ye.unbindTexture()},this.copyTextureToTexture=function(R,G,$=null,J=null,W=0){R.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],G=arguments[2],W=arguments[3]||0,$=null);let ye,we,ze,He,$e,Je;$!==null?(ye=$.max.x-$.min.x,we=$.max.y-$.min.y,ze=$.min.x,He=$.min.y):(ye=R.image.width,we=R.image.height,ze=0,He=0),J!==null?($e=J.x,Je=J.y):($e=0,Je=0);const Ve=st.convert(G.format),Tt=st.convert(G.type);U.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const Ut=B.getParameter(B.UNPACK_ROW_LENGTH),Ot=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$t=B.getParameter(B.UNPACK_SKIP_PIXELS),bt=B.getParameter(B.UNPACK_SKIP_ROWS),Ge=B.getParameter(B.UNPACK_SKIP_IMAGES),kt=R.isCompressedTexture?R.mipmaps[W]:R.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,He),R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,$e,Je,ye,we,Ve,Tt,kt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,$e,Je,kt.width,kt.height,Ve,kt.data):B.texSubImage2D(B.TEXTURE_2D,W,$e,Je,ye,we,Ve,Tt,kt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ut),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$t),B.pixelStorei(B.UNPACK_SKIP_ROWS,bt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge),W===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,G,$=null,J=null,W=0){R.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,R=arguments[2],G=arguments[3],W=arguments[4]||0);let ye,we,ze,He,$e,Je,Ve,Tt,Ut;const Ot=R.isCompressedTexture?R.mipmaps[W]:R.image;$!==null?(ye=$.max.x-$.min.x,we=$.max.y-$.min.y,ze=$.max.z-$.min.z,He=$.min.x,$e=$.min.y,Je=$.min.z):(ye=Ot.width,we=Ot.height,ze=Ot.depth,He=0,$e=0,Je=0),J!==null?(Ve=J.x,Tt=J.y,Ut=J.z):(Ve=0,Tt=0,Ut=0);const $t=st.convert(G.format),bt=st.convert(G.type);let Ge;if(G.isData3DTexture)U.setTexture3D(G,0),Ge=B.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)U.setTexture2DArray(G,0),Ge=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const kt=B.getParameter(B.UNPACK_ROW_LENGTH),nt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yt=B.getParameter(B.UNPACK_SKIP_PIXELS),Tn=B.getParameter(B.UNPACK_SKIP_ROWS),tn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,He),B.pixelStorei(B.UNPACK_SKIP_ROWS,$e),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je),R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ge,W,Ve,Tt,Ut,ye,we,ze,$t,bt,Ot.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Ge,W,Ve,Tt,Ut,ye,we,ze,$t,Ot.data):B.texSubImage3D(Ge,W,Ve,Tt,Ut,ye,we,ze,$t,bt,Ot),B.pixelStorei(B.UNPACK_ROW_LENGTH,kt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,nt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Tn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,tn),W===0&&G.generateMipmaps&&B.generateMipmap(Ge),Ye.unbindTexture()},this.initRenderTarget=function(R){Ze.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){ee=0,V=0,l=null,Ye.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wo?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Fs?"display-p3":"srgb"}}class Sg extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mc extends Gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new Ht,xo=new ac,Ss=new Os,Ms=new ie;class Mg extends dn{constructor(e=new kn,t=new Mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),Ss.radius+=a,e.ray.intersectsSphere(Ss)===!1)return;zl.copy(s).invert(),xo.copy(e.ray).applyMatrix4(zl);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=n.index,_=n.attributes.position;if(p!==null){const x=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=x,C=M;E<C;E++){const v=p.getX(E);Ms.fromBufferAttribute(_,v),Hl(Ms,v,h,s,e,t,this)}}else{const x=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=x,C=M;E<C;E++)Ms.fromBufferAttribute(_,E),Hl(Ms,E,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Hl(i,e,t,n,s,a,u){const c=xo.distanceSqToPoint(i);if(c<t){const h=new ie;xo.closestPointToPoint(i,h),h.applyMatrix4(n);const p=s.ray.origin.distanceTo(h);if(p<s.near||p>s.far)return;a.push({distance:p,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Us extends kn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],u=[],c=[],h=[],p=new ie,m=new yt;u.push(0,0,0),c.push(0,0,1),h.push(.5,.5);for(let _=0,x=3;_<=t;_++,x+=3){const M=n+_/t*s;p.x=e*Math.cos(M),p.y=e*Math.sin(M),u.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(u[x]/e+1)/2,m.y=(u[x+1]/e+1)/2,h.push(m.x,m.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new Hn(u,3)),this.setAttribute("normal",new Hn(c,3)),this.setAttribute("uv",new Hn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const kl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yg{constructor(e,t,n){const s=this;let a=!1,u=0,c=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){c++,a===!1&&s.onStart!==void 0&&s.onStart(m,u,c),a=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,c),u===c&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,x=p.length;_<x;_+=2){const M=p[_],E=p[_+1];if(M.global&&(M.lastIndex=0),M.test(m))return E}return null}}}const Eg=new yg;class Po{constructor(e){this.manager=e!==void 0?e:Eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Po.DEFAULT_MATERIAL_NAME="__DEFAULT";class Tg extends Po{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=kl.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u;const c=Br("img");function h(){m(),kl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function p(_){m(),s&&s(_),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){c.removeEventListener("load",h,!1),c.removeEventListener("error",p,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class bg extends Po{constructor(e){super(e)}load(e,t,n,s){const a=new ln,u=new Tg(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);const Ag="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABhmlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TpSoVB4uoOGSo4mAXFXEsVSyChdJWaNXB5KU/QpOGJMXFUXAtOPizWHVwcdbVwVUQBH9AnB2cFF2kxPuSQosYLzzex3n3HN67DxDqZaaaHVFA1SwjFY+J2dyKGHhFN4bgwzgGJGbqifRCBp71dU+dVHcRnuXd92f1KnmTAT6ROMp0wyJeJ57ZtHTO+8QhVpIU4nPiCYMuSPzIddnlN85FhwWeGTIyqTniELFYbGO5jVnJUImnicOKqlG+kHVZ4bzFWS1XWfOe/IXBvLac5jqtEcSxiASSECGjig2UYSFCu0aKiRSdxzz8w44/SS6ZXBtg5JhHBSokxw/+B79naxamJt2kYAzofLHtj1EgsAs0arb9fWzbjRPA/wxcaS1/pQ7MfpJea2nhI6BvG7i4bmnyHnC5Aww+6ZIhOZKfllAoAO9n9E05oP8W6Fl159Y8x+kDkKFZLd0AB4fAWJGy1zze3dU+t397mvP7AbBLcr+wktTtAAAABmJLR0QAPQA9AD3UKf2aAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AkZASs32c17egAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABzSURBVCjPpZO5EYQwDADX7oGG6MA9uD8iMjpgaMQuYi84Au4dRt5MweoZSfCGWtVVbT5pZ1z5hTqrm//Z1PmbeHiP4yXBjYofHVxnjFAzUIhRktqAKSD3pBqsTAZ60O0Z2IPynoElKC9jex6+sKHbjn7VA2BPmuc2MyagAAAAAElFTkSuQmCC";window.jQuery=Is;(i=>{i(window).on("load",function(){const e=i("#top").innerWidth(),t=i("#top").innerHeight(),n=new Sg,s=new Sn(75,e/t,.1,1e3),a=2*Math.tan(rf.degToRad(s.fov/2))*s.near,u=a*(e/t),c=5;s.position.z=c;const h=u/s.near*c,p=a/s.near*c,m=h/2,_=-m,x=p/2,M=-x,E=.8,C=1.3,v=new xg;v.setSize(e,t),i("#top").prepend(v.domElement);let g=new gr(10.3,1,1),O=new Nr({color:16777215});new yn(g,O),g=new Us(.3,32),O=new Nr({color:255});const L=new yn(g,O);L.position.x=1e3,L.position.y=1e3,i("canvas").addClass("mouse-listener"),i("canvas").attr("id","effects");const N=document.getElementById("effects").getBoundingClientRect(),ee=new yt(1e3,1e3);i(".mouse-listener").on("mousemove",q=>V(q));const V=q=>{ee.x=(q.clientX-N.left)/N.width*h-m,ee.y=-((q.clientY-N.top)/N.height)*p+x,L.position.x=ee.x,L.position.y=ee.y};i("canvas").on("mouseleave",q=>{ee.x=1e3,ee.y=1e3}),i(".mouse-listener").on("click",q=>{const Te=(q.clientX-N.left)/N.width*h-m,xe=-((q.clientY-N.top)/N.height)*p+x;console.log("Click: ("+Te+", "+xe+")"),console.log("Mouse: ("+ee.x+", "+ee.y+")"),g=new Us(.05,32),O=new Nr({color:16711680});const Se=new yn(g,O);Se.position.x=Te,Se.position.y=xe,n.add(Se)});const l=800,Q=new kn,he=3,A=new Float32Array(l*he),P=new Float32Array(l*3),ne=new Float32Array(l*he),Y=new Pt;for(let q=0;q<l;q++){const Te=q*he,xe=q*he+1,Se=q*he+2;A[Te]=Math.random()*(m-_)+_,A[xe]=Math.random()*(x-M)+M,A[Se]=0,Y.setHSL(Math.random(),.7,Math.random()),P[q*3]=Y.r,P[q*3+1]=Y.g,P[q*3+2]=Y.b,ne[Te]=Math.random()*(.01-.005)+.005,ne[xe]=Math.random()*(.002- -.002)+-.002,ne[Se]=0}Q.setAttribute("position",new En(A,he)),Q.setAttribute("color",new En(P,3));const fe=new bg().load(Ag),me=new Mc({size:.08,map:fe,vertexColors:!0}),ae=new Mg(Q,me);n.add(ae);const pe=()=>{const q=ae.geometry.attributes.position.array;for(let Te=0;Te<l;Te++){const xe=Te*3,Se=Te*3+1,dt=ee.x,gt=ee.y;if(Math.sqrt((dt-q[xe])**2+(gt-q[Se])**2)<E){q[xe]-=ne[xe],q[Se]-=ne[Se];let ve;const Fe=new yt(dt,gt),be=new yt(ne[xe],ne[Se]),We=new yt(q[xe]-ne[xe],q[Se]-ne[Se]),qe=be.x**2+be.y**2,Qe=2*((We.x-Fe.x)*be.x+(We.y-Fe.y)*be.y),wt=(We.x-Fe.x)**2+(We.y-Fe.y)**2-E**2,rt=Qe**2-4*qe*wt,B=(-Qe+Math.sqrt(rt))/(2*qe),Vt=(-Qe-Math.sqrt(rt))/(2*qe);if(rt>0){const ft=new yt(We.x+B*be.x,We.y+B*be.y),Ze=new yt(We.x+Vt*be.x,We.y+Vt*be.y),U=Math.sqrt((ft.x-q[xe])**2+(ft.y-q[Se])**2),w=Math.sqrt((Ze.x-We.x)**2+(Ze.y-We.y)**2);ve=U-w>0?Ze:ft}else console.log("There are not 2 intersection points");const ot=ve.clone().sub(Fe);ot.normalize();const ht=be.dot(ot),Ye=be.sub(ot.multiplyScalar(2*ht));ne[xe]=Ye.x*C,ne[Se]=Ye.y*C,q[xe]=ve.x+be.x,q[Se]=ve.y+be.y}q[xe]+=ne[xe],q[Se]+=ne[Se],(q[xe]>m||q[xe]<_-1)&&(q[xe]=_-1,ne[xe]=Math.abs(ne[xe])<.02?Math.abs(ne[xe]):Math.random()*(.01-.05)-.05,(ne[Se]>.003||ne[Se]<-.003)&&(ne[Se]=Math.random()*(.002- -.002)+-.002)),(q[Se]>x||q[Se]<M)&&(q[Se]=Math.random()*(x-M)+M,q[xe]=_-1,(ne[Se]>.003||ne[Se]<-.003)&&(ne[Se]=Math.random()*(.002- -.002)+-.002))}ae.geometry.attributes.position.needsUpdate=!0,v.render(n,s)};v.setAnimationLoop(pe)})})(jQuery);
