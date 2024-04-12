// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,y,"e-0$1"),r.alternate&&(t=l.call(t,d,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=isNaN,N=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,y,d,g;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,_(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,d=t.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),c+=t.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function S(r){var e,n;if("string"!=typeof r)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}function R(r){return Math.abs(r)}var M,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",B=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return X.call(r);n=r[q],a=q,e=null!=(i=r)&&Y.call(i,a);try{r[q]=void 0}catch(e){return X.call(r)}return t=X.call(r),e?r[q]=n:delete r[q],t}:function(r){return X.call(r)},D="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,e,n;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(D&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=M,er="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,tr="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,NaN]),n=e,r=(er&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir,ar=Q,or="function"==typeof Uint8Array,ur="function"==typeof Uint8Array?Uint8Array:null,cr="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,256,257]),n=e,r=(or&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,sr=ir,lr="function"==typeof Uint16Array,pr="function"==typeof Uint16Array?Uint16Array:null,yr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(lr&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,gr={uint16:fr,uint8:sr};(dr=new gr.uint16(1))[0]=4660;var vr=52===new gr.uint8(dr.buffer)[0],hr=!0===vr?1:0,wr=new ar(1),br=new rr(wr.buffer);function mr(r){return wr[0]=r,br[hr]}var Ar=!0===vr?1:0,_r=new ar(1),Nr=new rr(_r.buffer),Er=1023,Ur=.6931471803691238,kr=1.9082149292705877e-10,xr=0x40000000000000,Ir=.3333333333333333,Sr=1048575,Fr=2146435072,jr=1048576,Tr=1072693248;function Or(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?L:W(r)||r<0?NaN:(a=0,(n=mr(r))<jr&&(a-=54,n=mr(r*=xr)),n>=Fr?r+r:(a+=(n>>20)-Er|0,a+=(c=614244+(n&=Sr)&1048576|0)>>20|0,u=(r=function(r,e){return _r[0]=r,Nr[Ar]=e>>>0,_r[0]}(r,n|c^Tr))-1,(Sr&2+n)<3?0===u?0===a?0:a*Ur+a*kr:(o=u*u*(.5-Ir*u),0===a?u-o:a*Ur-(o-a*kr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ur-(e-(s*(e+o)+a*kr)-u)):0===a?u-s*(u-o):a*Ur-(s*(u-o)-a*kr-u))))}var Vr=Math.floor,$r=Math.ceil;function Gr(r){return r<0?$r(r):Vr(r)}function Hr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Wr=-.16666666666666632,Cr=.00833333333332249,Lr=-.0001984126982985795,Pr=27557313707070068e-22,Rr=-2.5050760253406863e-8,Mr=1.58969099521155e-10;function Zr(r,e){var n,t,i;return n=Cr+(i=r*r)*(Lr+i*Pr)+i*(i*i)*(Rr+i*Mr),t=i*r,0===e?r+t*(Wr+i*n):r-(i*(.5*e-t*n)-e-t*Wr)}var Xr,Yr,zr=2147483647,qr=2146435072,Br=1048575,Dr=!0===vr?0:1,Jr=new ar(1),Kr=new rr(Jr.buffer);!0===vr?(Xr=1,Yr=0):(Xr=0,Yr=1);var Qr={HIGH:Xr,LOW:Yr},re=new ar(1),ee=new rr(re.buffer),ne=Qr.HIGH,te=Qr.LOW;function ie(r,e){return ee[ne]=r,ee[te]=e,re[0]}var ae,oe,ue=1023,ce=-1023,fe=-1074,se=2147483648;!0===vr?(ae=1,oe=0):(ae=0,oe=1);var le={HIGH:ae,LOW:oe},pe=new ar(1),ye=new rr(pe.buffer),de=le.HIGH,ge=le.LOW;function ve(r,e,n,t){return pe[0]=r,e[t]=ye[de],e[t+n]=ye[ge],e}function he(r){return ve(r,[0,0],1,0)}H(he,"assign",ve);var we=[0,0];function be(r,e){var n,t;return he.assign(r,we,1,0),n=we[0],n&=zr,t=mr(e),ie(n|=t&=se,we[1])}var me=22250738585072014e-324,Ae=4503599627370496;function _e(r,e,n,t){return W(r)||P(r)?(e[t]=r,e[t+n]=0,e):0!==r&&R(r)<me?(e[t]=r*Ae,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return _e(r,[0,0],1,0)}),"assign",_e);var Ne=2220446049250313e-31,Ee=2148532223,Ue=[0,0],ke=[0,0];function xe(r,e){var n,t;return 0===e||0===r||W(r)||P(r)?r:(_e(r,Ue,1,0),r=Ue[0],e+=Ue[1],e+=function(r){var e=mr(r);return(e=(e&qr)>>>20)-Er|0}(r),e<fe?be(0,r):e>ue?r<0?L:C:(e<=ce?(e+=52,t=Ne):t=1,he.assign(r,ke,1,0),n=ke[0],n&=Ee,t*ie(n|=e+Er<<20,ke[1])))}function Ie(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Se=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Fe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],je=16777216,Te=5.960464477539063e-8,Oe=Ie(20),Ve=Ie(20),$e=Ie(20),Ge=Ie(20);function He(r,e,n,t,i,a,o,u,c){var f,s,l,p,y,d,g,v,h;for(p=a,h=t[n],v=n,y=0;v>0;y++)s=Te*h|0,Ge[y]=h-je*s|0,h=t[v-1]+s,v-=1;if(h=xe(h,i),h-=8*Vr(.125*h),h-=g=0|h,l=0,i>0?(g+=y=Ge[n-1]>>24-i,Ge[n-1]-=y<<24-i,l=Ge[n-1]>>23-i):0===i?l=Ge[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,y=0;y<n;y++)v=Ge[y],0===f?0!==v&&(f=1,Ge[y]=16777216-v):Ge[y]=16777215-v;if(i>0)switch(i){case 1:Ge[n-1]&=8388607;break;case 2:Ge[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=xe(1,i)))}if(0===h){for(v=0,y=n-1;y>=a;y--)v|=Ge[y];if(0===v){for(d=1;0===Ge[a-d];d++);for(y=n+1;y<=n+d;y++){for(c[u+y]=Se[o+y],s=0,v=0;v<=u;v++)s+=r[v]*c[u+(y-v)];t[y]=s}return He(r,e,n+=d,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===Ge[n];)n-=1,i-=24;else(h=xe(h,-i))>=je?(s=Te*h|0,Ge[n]=h-je*s|0,i+=24,Ge[n+=1]=s):Ge[n]=0|h;for(s=xe(1,i),y=n;y>=0;y--)t[y]=s*Ge[y],s*=Te;for(y=n;y>=0;y--){for(s=0,d=0;d<=p&&d<=n-y;d++)s+=Fe[d]*t[y+d];$e[n-y]=s}for(s=0,y=n;y>=0;y--)s+=$e[y];for(e[0]=0===l?s:-s,s=$e[0]-s,y=1;y<=n;y++)s+=$e[y];return e[1]=0===l?s:-s,7&g}function We(r,e,n,t){var i,a,o,u,c,f,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)Oe[c]=f<0?0:Se[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*Oe[o+(c-f)];Ve[c]=i}return He(r,e,4,Ve,u,4,a,o,Oe)}var Ce=Math.round,Le=.6366197723675814,Pe=1.5707963267341256,Re=6077100506506192e-26,Me=6077100506303966e-26,Ze=20222662487959506e-37,Xe=20222662487111665e-37,Ye=84784276603689e-45,ze=2047;function qe(r,e,n){var t,i,a,o,u;return a=r-(t=Ce(r*Le))*Pe,o=t*Re,u=e>>20|0,n[0]=a-o,u-(mr(n[0])>>20&ze)>16&&(o=t*Ze-((i=a)-(a=i-(o=t*Me))-o),n[0]=a-o,u-(mr(n[0])>>20&ze)>49&&(o=t*Ye-((i=a)-(a=i-(o=t*Xe))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Be=0,De=16777216,Je=1.5707963267341256,Ke=6077100506506192e-26,Qe=2*Ke,rn=3*Ke,en=4*Ke,nn=598523,tn=1072243195,an=1073928572,on=1074752122,un=1074977148,cn=1075183036,fn=1075388923,sn=1075594811,ln=1094263291,pn=[0,0,0],yn=[0,0];function dn(r,e){var n,t,i,a,o,u,c;if((i=mr(r)&zr|0)<=tn)return e[0]=r,e[1]=0,0;if(i<=on)return(i&Br)===nn?qe(r,i,e):i<=an?r>0?(c=r-Je,e[0]=c-Ke,e[1]=c-e[0]-Ke,1):(c=r+Je,e[0]=c+Ke,e[1]=c-e[0]+Ke,-1):r>0?(c=r-2*Je,e[0]=c-Qe,e[1]=c-e[0]-Qe,2):(c=r+2*Je,e[0]=c+Qe,e[1]=c-e[0]+Qe,-2);if(i<=sn)return i<=cn?i===un?qe(r,i,e):r>0?(c=r-3*Je,e[0]=c-rn,e[1]=c-e[0]-rn,3):(c=r+3*Je,e[0]=c+rn,e[1]=c-e[0]+rn,-3):i===fn?qe(r,i,e):r>0?(c=r-4*Je,e[0]=c-en,e[1]=c-e[0]-en,4):(c=r+4*Je,e[0]=c+en,e[1]=c-e[0]+en,-4);if(i<ln)return qe(r,i,e);if(i>=qr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Jr[0]=r,Kr[Dr]}(r),c=ie(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)pn[o]=0|c,c=(c-pn[o])*De;for(pn[2]=c,a=3;pn[a-1]===Be;)a-=1;return u=We(pn,yn,t,a),r<0?(e[0]=-yn[0],e[1]=-yn[1],-u):(e[0]=yn[0],e[1]=yn[1],u)}var gn=[0,0],vn=2147483647,hn=1072243195,wn=1044381696,bn=2146435072;function mn(r){var e;if(e=mr(r),(e&=vn)<=hn)return e<wn?1:Hr(r,0);if(e>=bn)return NaN;switch(3&dn(r,gn)){case 0:return Hr(gn[0],gn[1]);case 1:return-Zr(gn[0],gn[1]);case 2:return-Hr(gn[0],gn[1]);default:return Zr(gn[0],gn[1])}}var An=1072243195,_n=1045430272,Nn=[0,0];function En(r){var e;if(e=mr(r),(e&=zr)<=An)return e<_n?r:Zr(r,0);if(e>=qr)return NaN;switch(3&dn(r,Nn)){case 0:return Zr(Nn[0],Nn[1]);case 1:return Hr(Nn[0],Nn[1]);case 2:return-Zr(Nn[0],Nn[1]);default:return-Hr(Nn[0],Nn[1])}}var Un=3.141592653589793,kn=.07721566490153287,xn=.3224670334241136,In=1,Sn=-.07721566490153287,Fn=.48383612272381005,jn=-.1475877229945939,Tn=.06462494023913339,On=-.07721566490153287,Vn=1,$n=.4189385332046727,Gn=1.4616321449683622,Hn=4503599627370496,Wn=0x400000000000000,Cn=8470329472543003e-37,Ln=1.4616321449683622,Pn=-.12148629053584961,Rn=-3638676997039505e-33;function Mn(r){var e,n,t,i,a,o,u,c,f,s,l,p,y;if(W(r)||P(r))return r;if(0===r)return C;if(r<0?(e=!0,r=-r):e=!1,r<Cn)return-Or(r);if(e){if(r>=Hn)return C;if(f=function(r){var e,n;return W(r)||P(r)?NaN:0===(e=R(n=r%2))||1===e?be(0,n):e<.25?En(Un*n):e<.75?be(mn(Un*(e=.5-e)),n):e<1.25?(n=be(1,n)-n,En(Un*n)):e<1.75?-be(mn(Un*(e-=1.5)),n):(n-=be(2,n),En(Un*n))}(r),0===f)return C;n=Or(Un/R(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(y=-Or(r),r>=Gn-1+.27?(l=1-r,t=0):r>=Gn-1-.27?(l=r-(Ln-1),t=1):(l=r,t=2)):(y=0,r>=Gn+.27?(l=2-r,t=0):r>=Gn-.27?(l=r-Ln,t=1):(l=r-1,t=2)),t){case 0:o=kn+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(xn+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),y+=(u=l*o+a)-.5*l;break;case 1:o=Fn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=jn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Tn+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),y+=Pn+(u=p*o-(Rn-s*(a+l*i)));break;case 2:o=l*(On+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=Vn+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),y+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=Gr(r)))*(Sn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),c=In+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),y=.5*l+u/c,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:y+=Or(p*=l+2)}else r<Wn?(f=Or(r),s=$n+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),y=(r-.5)*(f-1)+s):y=r*(Or(r)-1);return e&&(y=n-y),y}var Zn=.6931471803691238,Xn=1.9082149292705877e-10,Yn=1.4426950408889634,zn=709.782712893384,qn=-745.1332191019411,Bn=1/(1<<28),Dn=-Bn;function Jn(r){var e;return W(r)||r===C?r:r===L?0:r>zn?C:r<qn?0:r>Dn&&r<Bn?1+r:function(r,e,n){var t,i,a,o;return xe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=Gr(r<0?Yn*r-.5:Yn*r+.5))*Zn,e*Xn,e)}function Kn(r,e,n){var t;return W(r)||W(e)||W(n)||e<=0||n<=0?NaN:r<=0?0:(t=e*Or(n)-Mn(e),t-=(e+1)*Or(r),Jn(t-=n/r))}return H(Kn,"factory",(function(r,e){var n,t;return W(r)||W(e)||r<=0||e<=0?(t=NaN,function(){return t}):(n=r*Or(e)-Mn(r),function(t){return W(t)?NaN:t<=0?0:Jn(n-(r+1)*Or(t)-e/t)})})),Kn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e();
//# sourceMappingURL=browser.js.map
