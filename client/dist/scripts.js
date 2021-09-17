/*! https://github.com/leeoniya/uPlot (v1.6.7) */
var uPlot=function(){"use strict";function n(n,r,e,t){var l;e=e||0;for(var i=2147483647>=(t=t||r.length-1);t-e>1;)n>r[l=i?e+t>>1:m((e+t)/2)]?e=l:t=l;return n-r[e]>r[t]-n?t:e}function r(n,r,e,t){for(var l=1==t?r:e;l>=r&&e>=l;l+=t)if(null!=n[l])return l;return-1}var e=[0,0];function t(n,r,t,l){return e[0]=0>t?C(n,-t):n,e[1]=0>l?C(r,-l):r,e}function l(n,r,e,l){var i,a,o,s=10==e?k:y;return n==r&&(n/=e,r*=e),l?(i=m(s(n)),a=g(s(r)),n=(o=t(b(e,i),b(e,a),i,a))[0],r=o[1]):(i=m(s(d(n))),a=m(s(d(r))),n=Y(n,(o=t(b(e,i),b(e,a),i,a))[0]),r=W(r,o[1])),[n,r]}function i(n,r,e,t){var i=l(n,r,e,t);return 0==n&&(i[0]=0),0==r&&(i[1]=0),i}var a={pad:0,soft:null,mode:0},o={min:a,max:a};function s(n,r,e,t){return O(e)?f(n,r,e):(a.pad=e,a.soft=t?0:null,a.mode=t?3:0,f(n,r,o))}function u(n,r){return null==n?r:n}function f(n,r,e){var t=e.min,l=e.max,i=u(t.pad,0),a=u(l.pad,0),o=u(t.hard,-S),s=u(l.hard,S),f=u(t.soft,S),c=u(l.soft,-S),v=u(t.mode,0),h=u(l.mode,0),p=r-n,g=p||d(r)||1e3,_=k(g),y=b(10,m(_)),M=C(Y(n-g*(0==p?0==n?.1:1:i),y/10),6),T=f>n||1!=v&&(3!=v||M>f)&&(2!=v||f>M)?S:f,z=x(o,T>M&&n>=T?T:w(T,M)),D=C(W(r+g*(0==p?0==r?.1:1:a),y/10),6),E=r>c||1!=h&&(3!=h||c>D)&&(2!=h||D>c)?-S:c,P=w(s,D>E&&E>=r?E:x(E,D));return z==P&&0==z&&(P=100),[z,P]}var c=new Intl.NumberFormat(navigator.language).format,v=Math,h=v.PI,d=v.abs,m=v.floor,p=v.round,g=v.ceil,w=v.min,x=v.max,b=v.pow,_=v.sqrt,k=v.log10,y=v.log2,M=(n,r)=>(void 0===r&&(r=1),v.asinh(n/r)),S=1/0;function T(n,r){return p(n/r)*r}function z(n,r,e){return w(x(n,r),e)}function D(n){return"function"==typeof n?n:()=>n}var E=(n,r)=>r,P=()=>null,A=()=>!0;function W(n,r){return g(n/r)*r}function Y(n,r){return m(n/r)*r}function C(n,r){return p(n*(r=Math.pow(10,r)))/r}var H=new Map;function F(n){return((""+n).split(".")[1]||"").length}function N(n,r,e,t){for(var l=[],i=t.map(F),a=r;e>a;a++)for(var o=d(a),s=C(b(n,a),o),u=0;t.length>u;u++){var f=t[u]*s,c=(0>f||0>a?o:0)+(i[u]>a?i[u]:0),v=C(f,c);l.push(v),H.set(v,c)}return l}var I={},L=Array.isArray;function V(n){return"string"==typeof n}function O(n){var r=!1;if(null!=n){var e=n.constructor;r=null==e||e==Object}return r}function j(n){return null!=n&&"object"==typeof n}function G(n,r){var e;if(r=r||O,L(n))e=n.map((n=>G(n,r)));else if(r(n))for(var t in e={},n)e[t]=G(n[t],r);else e=n;return e}function U(n){for(var r=arguments,e=1;r.length>e;e++){var t=r[e];for(var l in t)O(n[l])?U(n[l],G(t[l])):n[l]=G(t[l])}return n}function B(n,r,e){for(var t=0,l=void 0,i=-1;r.length>t;t++){var a=r[t];if(a>i){for(l=a-1;l>=0&&null==n[l];)n[l--]=null;for(l=a+1;e>l&&null==n[l];)n[i=l++]=null}}}var R="undefined"==typeof queueMicrotask?n=>Promise.resolve().then(n):queueMicrotask,J="width",q="height",Z="top",X="bottom",K="left",Q="right",$="#000",nn="#0000",rn="mousemove",en="mousedown",tn="mouseup",ln="mouseenter",an="mouseleave",on="dblclick",sn="resize",un="scroll",fn="u-off",cn="u-label",vn=document,hn=window,dn=devicePixelRatio;function mn(n,r){if(null!=r){var e=n.classList;!e.contains(r)&&e.add(r)}}function pn(n,r){var e=n.classList;e.contains(r)&&e.remove(r)}function gn(n,r,e){n.style[r]=e+"px"}function wn(n,r,e,t){var l=vn.createElement(n);return null!=r&&mn(l,r),null!=e&&e.insertBefore(l,t),l}function xn(n,r){return wn("div",n,r)}function bn(n,r,e,t,l){n.style.transform="translate("+r+"px,"+e+"px)",0>r||0>e||r>t||e>l?mn(n,fn):pn(n,fn)}var _n={passive:!0};function kn(n,r,e){r.addEventListener(n,e,_n)}function yn(n,r,e){r.removeEventListener(n,e,_n)}var Mn=["January","February","March","April","May","June","July","August","September","October","November","December"],Sn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function Tn(n){return n.slice(0,3)}var zn=Sn.map(Tn),Dn=Mn.map(Tn),En={MMMM:Mn,MMM:Dn,WWWW:Sn,WWW:zn};function Pn(n){return(10>n?"0":"")+n}var An={YYYY:n=>n.getFullYear(),YY:n=>(n.getFullYear()+"").slice(2),MMMM:(n,r)=>r.MMMM[n.getMonth()],MMM:(n,r)=>r.MMM[n.getMonth()],MM:n=>Pn(n.getMonth()+1),M:n=>n.getMonth()+1,DD:n=>Pn(n.getDate()),D:n=>n.getDate(),WWWW:(n,r)=>r.WWWW[n.getDay()],WWW:(n,r)=>r.WWW[n.getDay()],HH:n=>Pn(n.getHours()),H:n=>n.getHours(),h:n=>{var r=n.getHours();return 0==r?12:r>12?r-12:r},AA:n=>12>n.getHours()?"AM":"PM",aa:n=>12>n.getHours()?"am":"pm",a:n=>12>n.getHours()?"a":"p",mm:n=>Pn(n.getMinutes()),m:n=>n.getMinutes(),ss:n=>Pn(n.getSeconds()),s:n=>n.getSeconds(),fff:n=>function(n){return(10>n?"00":100>n?"0":"")+n}(n.getMilliseconds())};function Wn(n,r){r=r||En;for(var e,t=[],l=/\{([a-z]+)\}|[^{]+/gi;e=l.exec(n);)t.push("{"==e[0][0]?An[e[1]]:e[0]);return n=>{for(var e="",l=0;t.length>l;l++)e+="string"==typeof t[l]?t[l]:t[l](n,r);return e}}var Yn=(new Intl.DateTimeFormat).resolvedOptions().timeZone,Cn=n=>n%1==0,Hn=[1,2,2.5,5],Fn=N(10,-16,0,Hn),Nn=N(10,0,16,Hn),In=Nn.filter(Cn),Ln=Fn.concat(Nn),Vn="{YYYY}",On="\n"+Vn,jn="{M}/{D}",Gn="\n"+jn,Un=Gn+"/{YY}",Bn="{aa}",Rn="{h}:{mm}"+Bn,Jn="\n"+Rn,qn=":{ss}",Zn=null;function Xn(n){var r=1e3*n,e=60*r,t=60*e,l=24*t,i=30*l,a=365*l;return[(1==n?N(10,0,3,Hn).filter(Cn):N(10,-3,0,Hn)).concat([r,5*r,10*r,15*r,30*r,e,5*e,10*e,15*e,30*e,t,2*t,3*t,4*t,6*t,8*t,12*t,l,2*l,3*l,4*l,5*l,6*l,7*l,8*l,9*l,10*l,15*l,i,2*i,3*i,4*i,6*i,a,2*a,5*a,10*a,25*a,50*a,100*a]),[[a,Vn,Zn,Zn,Zn,Zn,Zn,Zn,1],[28*l,"{MMM}",On,Zn,Zn,Zn,Zn,Zn,1],[l,jn,On,Zn,Zn,Zn,Zn,Zn,1],[t,"{h}"+Bn,Un,Zn,Gn,Zn,Zn,Zn,1],[e,Rn,Un,Zn,Gn,Zn,Zn,Zn,1],[r,qn,Un+" "+Rn,Zn,Gn+" "+Rn,Zn,Jn,Zn,1],[n,qn+".{fff}",Un+" "+Rn,Zn,Gn+" "+Rn,Zn,Jn,Zn,1]],function(r){return(o,s,u,f,c,v)=>{var h=[],d=c>=a,p=c>=i&&a>c,g=r(u),w=g*n,x=or(g.getFullYear(),d?0:g.getMonth(),p||d?1:g.getDate()),b=x*n;if(p||d)for(var _=p?c/i:0,k=d?c/a:0,y=w==b?w:or(x.getFullYear()+k,x.getMonth()+_,1)*n,M=new Date(y/n),S=M.getFullYear(),T=M.getMonth(),z=0;f>=y;z++){var D=or(S+k*z,T+_*z,1);(y=(+D+(D-r(D*n)))*n)>f||h.push(y)}else{var E=l>c?c:l,P=b+(m(u)-m(w))+W(w-b,E);h.push(P);for(var A=r(P),Y=A.getHours()+A.getMinutes()/e+A.getSeconds()/t,H=c/t,F=v/o.axes[s]._space;(P=C(P+c,1==n?0:3))<=f;)if(H>1){var N=m(C(Y+H,6))%24,I=r(P).getHours()-N;I>1&&(I=-1),Y=(Y+H)%24,.7>C(((P-=I*t)-h[h.length-1])/c,3)*F||h.push(P)}else h.push(P)}return h}}]}var Kn=Xn(1),Qn=Kn[0],$n=Kn[1],nr=Kn[2],rr=Xn(.001),er=rr[0],tr=rr[1],lr=rr[2];function ir(n,r){return n.map((n=>n.map(((e,t)=>0==t||8==t||null==e?e:r(1==t||0==n[8]?e:n[1]+e)))))}function ar(n,r){return(e,t,l,i,a)=>{var o,s,u,f,c,v,h=r.find((n=>a>=n[0]))||r[r.length-1];return t.map((r=>{var e=n(r),t=e.getFullYear(),l=e.getMonth(),i=e.getDate(),a=e.getHours(),d=e.getMinutes(),m=e.getSeconds(),p=t!=o&&h[2]||l!=s&&h[3]||i!=u&&h[4]||a!=f&&h[5]||d!=c&&h[6]||m!=v&&h[7]||h[1];return o=t,s=l,u=i,f=a,c=d,v=m,p(e)}))}}function or(n,r,e){return new Date(n,r,e)}function sr(n,r){return r(n)}function ur(n,r){return(e,t)=>r(n(t))}function fr(n,r){var e=n.series[r];return e.width?e.stroke(n,r):e.points.width?e.points.stroke(n,r):null}function cr(n,r){return n.series[r].fill(n,r)}N(2,-53,53,[1]);var vr=[0,0];function hr(n,r,e){return n=>{0==n.button&&e(n)}}function dr(n,r,e){return e}var mr={show:!0,x:!0,y:!0,lock:!1,move:function(n,r,e){return vr[0]=r,vr[1]=e,vr},points:{show:function(n,r){var e=n.cursor.points,t=xn(),l=e.stroke(n,r),i=e.fill(n,r);t.style.background=i||l;var a=e.size(n,r),o=e.width(n,r,a);o&&(t.style.border=o+"px solid "+l);var s=a/-2;return gn(t,J,a),gn(t,q,a),gn(t,"marginLeft",s),gn(t,"marginTop",s),t},size:function(n,r){return Yr(n.series[r].width,1)},width:0,stroke:function(n,r){return n.series[r].stroke(n,r)},fill:function(n,r){return n.series[r].stroke(n,r)}},bind:{mousedown:hr,mouseup:hr,click:hr,dblclick:hr,mousemove:dr,mouseleave:dr,mouseenter:dr},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,_x:!1,_y:!1},focus:{prox:-1},left:-10,top:-10,idx:null,dataIdx:function(n,r,e){return e}},pr={show:!0,stroke:"rgba(0,0,0,0.07)",width:2,filter:E},gr=U({},pr,{size:10}),wr='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',xr="bold "+wr,br={show:!0,scale:"x",stroke:$,space:50,gap:5,size:50,labelSize:30,labelFont:xr,side:2,grid:pr,ticks:gr,font:wr,rotate:0},_r={show:!0,scale:"x",auto:!1,sorted:1,min:S,max:-S,idxs:[]};function kr(n,r){return r.map((n=>null==n?"":c(n)))}function yr(n,r,e,t,l,i,a){for(var o=[],s=H.get(l)||0,u=e=a?e:C(W(e,l),s);t>=u;u=C(u+l,s))o.push(Object.is(u,-0)?0:u);return o}function Mr(n,r,e,t,l){var i=[],a=n.scales[n.axes[r].scale].log,o=m((10==a?k:y)(e));l=b(a,o),0>o&&(l=C(l,-o));var s=e;do{i.push(s),l*a>(s=C(s+l,H.get(l)))||(l=s)}while(t>=s);return i}function Sr(n,r,e,t,l){var i=n.scales[n.axes[r].scale].asinh,a=t>i?Mr(n,r,x(i,e),t,l):[i],o=0>t||e>0?[]:[0];return(-i>e?Mr(n,r,x(i,-t),-e,l):[i]).reverse().map((n=>-n)).concat(o,a)}var Tr=/./,zr=/[12357]/,Dr=/[125]/,Er=/1/;function Pr(n,r,e){var t=n.axes[e],l=t.scale,i=n.scales[l];if(3==i.distr&&2==i.log)return r;var a=n.valToPos,o=t._space,s=a(10,l),u=a(9,l)-s<o?a(7,l)-s<o?a(5,l)-s<o?Er:Dr:zr:Tr;return r.map((n=>4==i.distr&&0==n||u.test(n)?n:null))}function Ar(n,r){return null==r?"":c(r)}var Wr={show:!0,scale:"y",stroke:$,space:30,gap:5,size:50,labelSize:30,labelFont:xr,side:3,grid:pr,ticks:gr,font:wr,rotate:0};function Yr(n,r){return C((3+2*(n||1))*r,3)}function Cr(n,r){var e=n.scales[n.series[r].scale],t=n.bands&&n.bands.some((n=>n.series[0]==r));return 3==e.distr||t?e.min:0}var Hr={scale:"y",auto:!0,sorted:0,show:!0,band:!1,spanGaps:!1,alpha:1,points:{show:function(n,r){var e=n.series[0].idxs;return(0==n.scales[n.series[0].scale].ori?n.bbox.width:n.bbox.height)/(n.series[r].points.space*dn)>=e[1]-e[0]}},values:null,min:S,max:-S,idxs:[],path:null,clip:null};function Fr(n,r,e){return e/10}var Nr={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},Ir=U({},Nr,{time:!1,ori:1}),Lr={};function Vr(n){var r=Lr[n];if(!r){var e=[];r={key:n,sub:function(n){e.push(n)},unsub:function(n){e=e.filter((r=>r!=n))},pub:function(n,r,t,l,i,a){for(var o=0;e.length>o;o++)e[o]!=r&&e[o].pub(n,r,t,l,i,a,o)}},null!=n&&(Lr[n]=r)}return r}function Or(n,r,e){var t=n.series[r],l=n.scales,i=n.bbox,a=n._data[0],o=n._data[r],s=l[n.series[0].scale],u=l[t.scale],f=i.left,c=i.top,v=i.width,h=i.height,d=n.valToPosH,m=n.valToPosV;return 0==s.ori?e(t,a,o,s,u,d,m,f,c,v,h,Br,Jr,Zr,Kr,$r):e(t,a,o,s,u,m,d,c,f,h,v,Rr,qr,Xr,Qr,ne)}function jr(n,r,e,t,l){return Or(n,r,((n,r,i,a,o,s,u,f,c,v,h)=>{var d,m,p=0==a.ori?Jr:qr;1==a.dir*(0==a.ori?1:-1)?(d=e,m=t):(d=t,m=e);var g=T(s(r[d],a,v,f),.5),w=T(u(i[d],o,h,c),.5),x=T(s(r[m],a,v,f),.5),b=T(u(o.max,o,h,c),.5),_=new Path2D(l);return p(_,x,b),p(_,g,b),p(_,g,w),_}))}function Gr(n,r,e,t,l,i){var a=null;if(n.length>0){a=new Path2D;for(var o=0==r?Zr:Xr,s=e,u=0;n.length>u;u++){var f=n[u];o(a,s,t,f[0]-s,t+i),s=f[1]}o(a,s,t,e+l-s,t+i)}return a}function Ur(n,r,e){if(e>r){var t=n[n.length-1];t&&t[0]==r?t[1]=e:n.push([r,e])}}function Br(n,r,e){n.moveTo(r,e)}function Rr(n,r,e){n.moveTo(e,r)}function Jr(n,r,e){n.lineTo(r,e)}function qr(n,r,e){n.lineTo(e,r)}function Zr(n,r,e,t,l){n.rect(r,e,t,l)}function Xr(n,r,e,t,l){n.rect(e,r,l,t)}function Kr(n,r,e,t,l,i){n.arc(r,e,t,l,i)}function Qr(n,r,e,t,l,i){n.arc(e,r,t,l,i)}function $r(n,r,e,t,l,i,a){n.bezierCurveTo(r,e,t,l,i,a)}function ne(n,r,e,t,l,i,a){n.bezierCurveTo(e,r,l,t,a,i)}function re(n){return(r,e,t,l,i)=>{t!=l&&(n(r,e,t),n(r,e,l),n(r,e,i))}}var ee=re(Jr),te=re(qr);function le(){return(n,e,t,l)=>Or(n,e,((i,a,o,s,u,f,c,v,h,d,m)=>{var g,b;0==s.ori?(g=Jr,b=ee):(g=qr,b=te);var _,k,y,M=s.dir*(0==s.ori?1:-1),z={stroke:new Path2D,fill:null,clip:null,band:null},D=z.stroke,E=S,P=-S,A=[],W=p(f(a[1==M?t:l],s,d,v)),Y=!1,C=r(o,t,l,1*M),H=r(o,t,l,-1*M),F=T(f(a[C],s,d,v),.5),N=T(f(a[H],s,d,v),.5);F>v&&Ur(A,v,F);for(var I=1==M?t:l;I>=t&&l>=I;I+=M){var L=p(f(a[I],s,d,v));if(L==W)null!=o[I]?(_=p(c(o[I],u,m,h)),E==S&&g(D,L,_),E=w(_,E),P=x(_,P)):Y||null!==o[I]||(Y=!0);else{var V=!1;E!=S?(b(D,W,E,P,_),k=y=W):Y&&(V=!0,Y=!1),null!=o[I]?(g(D,L,_=p(c(o[I],u,m,h))),E=P=_,L-W>1&&null===o[I-M]&&(V=!0)):(E=S,P=-S,Y||null!==o[I]||(Y=!0)),V&&Ur(A,k,L),W=L}}if(E!=S&&E!=P&&y!=W&&b(D,W,E,P,_),v+d>N&&Ur(A,N,v+d),null!=i.fill){var O=z.fill=new Path2D(D),j=p(c(i.fillTo(n,e,i.min,i.max),u,m,h));g(O,N,j),g(O,F,j)}return i.spanGaps||(z.clip=Gr(A,s.ori,v,h,d,m)),n.bands.length>0&&(z.band=jr(n,e,t,l,D)),z}))}function ie(n,r,e,t,l){var i,a,o,s,u,f,c,v,h,d,m,g,w,x,k,y,M,S,T,z,D,E,P,A,W,Y=new Path2D,C=n.length;t(Y,p(n[0]),p(r[0]));for(var H=0;C-1>H;H++){var F=0==H?0:H-1;a=r[F],s=r[H],u=n[H+1],f=r[H+1],C>H+2?(c=n[H+2],v=r[H+2]):(c=u,v=f),w=_(b((i=n[F])-(o=n[H]),2)+b(a-s,2)),x=_(b(o-u,2)+b(s-f,2)),k=_(b(u-c,2)+b(f-v,2)),z=b(k,e),E=b(k,2*e),D=b(x,e),P=b(x,2*e),(S=3*(W=b(w,e))*(W+D))>0&&(S=1/S),(T=3*z*(z+D))>0&&(T=1/T),d=(-P*a+(y=2*(A=b(w,2*e))+3*W*D+P)*s+A*f)*S,g=(E*s+(M=2*E+3*z*D+P)*f-P*v)*T,0==(h=(-P*i+y*o+A*u)*S)&&0==d&&(h=o,d=s),0==(m=(E*o+M*u-P*c)*T)&&0==g&&(m=u,g=f),l(Y,h,d,m,g,u,f)}return Y}var ae=le();function oe(n,r,e,t){return(t?[n[0],n[1]].concat(n.slice(2)):[n[0]].concat(n.slice(1))).map(((n,t)=>se(n,t,r,e)))}function se(n,r,e,t){return U({},0==r?e:t,n)}var ue=[null,null];function fe(n,r,e){return null==r?ue:[r,e]}var ce=fe;function ve(n,r,e){return null==r?ue:s(r,e,.1,!0)}function he(n,r,e,t){return null==r?ue:l(r,e,n.scales[t].log,!1)}var de=he;function me(n,r,e,t){return null==r?ue:i(r,e,n.scales[t].log,!1)}var pe=me;function ge(n){var r;return[n=n.replace(/(\d+)px/,((n,e)=>(r=p(e*dn))+"px")),r]}function we(r,e,t){var a={};function o(n,r){return((3==r.distr?k(n>0?n:r.clamp(a,n,r.min,r.max,r.key)):4==r.distr?M(n,r.asinh):n)-r._min)/(r._max-r._min)}function f(n,r,e,t){var l=o(n,r);return t+e*(-1==r.dir?1-l:l)}function c(n,r,e,t){var l=o(n,r);return t+e*(-1==r.dir?l:1-l)}function _(n,r,e,t){return 0==r.ori?f(n,r,e,t):c(n,r,e,t)}a.valToPosH=f,a.valToPosV=c;var y=!1;a.status=0;var Y=a.root=xn("uplot");null!=r.id&&(Y.id=r.id),mn(Y,r.class),r.title&&(xn("u-title",Y).textContent=r.title);var F=wn("canvas"),N=a.ctx=F.getContext("2d"),B=xn("u-wrap",Y),$=xn("u-under",B);B.appendChild(F);var _n=xn("u-over",B),Mn=u((r=G(r)).pxAlign,!0);(r.plugins||[]).forEach((n=>{n.opts&&(r=n.opts(a,r)||r)}));var Sn=r.ms||.001,Tn=a.series=oe(r.series||[],_r,Hr,!1),zn=a.axes=oe(r.axes||[],br,Wr,!0),Dn=a.scales={},En=a.bands=r.bands||[];En.forEach((n=>{n.fill=D(n.fill||null)}));var Pn=Tn[0].scale,An={axes:function(){zn.forEach(((n,r)=>{if(n.show&&n._show){var e=Dn[n.scale],t=n.side,l=t%2,i=0==l?qr:Zr,o=0==l?Ur:Jr,s=p(n.gap*dn),u=n.ticks,f=u.show?p(u.size*dn):0,c=n._found,v=c[0],d=c[1],m=n._splits,g=2==e.distr?m.map((n=>Ae[n])):m,w=2==e.distr?Ae[m[1]]-Ae[m[0]]:v,x=n._rotate*-h/180,b=p(n._pos*dn),k=b+(f+s)*(0==l&&0==t||1==l&&3==t?-1:1),y=0==l?k:0,M=1==l?k:0;N.font=n.font[0],N.fillStyle=n.stroke(a,r),N.textAlign=1==n.align?K:2==n.align?Q:x>0?K:0>x?Q:0==l?"center":3==t?Q:K,N.textBaseline=x||1==l?"middle":2==t?Z:X;var S=1.5*n.font[1],T=m.map((n=>p(_(n,e,i,o))));if(n._values.forEach(((n,r)=>{null!=n&&(0==l?M=T[r]:y=T[r],(""+n).split(/\n/gm).forEach(((n,r)=>{x?(N.save(),N.translate(M,y+r*S),N.rotate(x),N.fillText(n,0,0),N.restore()):N.fillText(n,M,y+r*S)})))})),n.label){N.save();var z=p(n._lpos*dn);1==l?(M=y=0,N.translate(z,p(Jr+Zr/2)),N.rotate((3==t?-h:h)/2)):(M=p(Ur+qr/2),y=z),N.font=n.labelFont[0],N.textAlign="center",N.textBaseline=2==t?Z:X,N.fillText(n.label,M,y),N.restore()}u.show&&Ne(T,u.filter(a,g,r,d,w),l,t,b,f,C(u.width*dn,3),u.stroke(a,r),u.dash,u.cap);var D=n.grid;D.show&&Ne(T,D.filter(a,g,r,d,w),l,0==l?2:1,0==l?Jr:Ur,0==l?Zr:qr,C(D.width*dn,3),D.stroke(a,r),D.dash,D.cap)}})),Ct("drawAxes")},series:function(){Se>0&&(Tn.forEach(((n,r)=>{if(r>0&&n.show&&null==n._paths){var t=function(n){for(var r=z(De-1,0,Se-1),e=z(Ee+1,0,Se-1);null==n[r]&&r>0;)r--;for(;null==n[e]&&Se-1>e;)e++;return[r,e]}(e[r]);n._paths=n.paths(a,r,t[0],t[1])}})),Tn.forEach(((n,r)=>{r>0&&n.show&&(n._paths&&function(n){var r=Tn[n],e=r._paths,t=e.stroke,l=e.fill,i=e.clip,o=C(r.width*dn,3),s=o%2/2,u=r._stroke=r.stroke(a,n),f=r._fill=r.fill(a,n);N.globalAlpha=r.alpha;var c=Mn&&r.pxAlign;c&&N.translate(s,s),N.save();var v=Ur,h=Jr,d=qr,m=Zr,p=o*dn/2;0==r.min&&(m+=p),0==r.max&&(h-=p,m+=p),N.beginPath(),N.rect(v,h,d,m),N.clip(),i&&N.clip(i),function(n,r,e,t,l,i,o,s){var u=!1;En.forEach(((f,c)=>{if(f.series[0]==n){var v=Tn[f.series[1]],h=(v._paths||I).band;N.save();var d=null;v.show&&h&&(d=f.fill(a,c)||i,N.clip(h)),Fe(r,e,t,l,d,o,s),N.restore(),u=!0}})),u||Fe(r,e,t,l,i,o,s)}(n,u,o,r.dash,r.cap,f,t,l),N.restore(),c&&N.translate(-s,-s),N.globalAlpha=1}(r),n.points.show(a,r,De,Ee)&&function(n){var r=Tn[n],t=r.points,l=C(t.width*dn,3),i=l%2/2,o=t.width>0,s=(t.size-t.width)/2*dn,u=C(2*s,3),f=Mn&&r.pxAlign;f&&N.translate(i,i),N.save(),N.beginPath(),N.rect(Ur-u,Jr-u,qr+2*u,Zr+2*u),N.clip(),N.globalAlpha=r.alpha;var c,v,d,m,g=new Path2D,w=Dn[r.scale];0==jn.ori?(c=qr,v=Ur,d=Zr,m=Jr):(c=Zr,v=Jr,d=qr,m=Ur);for(var x=De;Ee>=x;x++)if(null!=e[n][x]){var b=p(Fn(e[0][x],jn,c,v)),_=p(Nn(e[n][x],w,d,m));Vn(g,b+s,_),On(g,b,_,s,0,2*h)}var k=t._stroke=t.stroke(a,n),y=t._fill=t.fill(a,n);He(k,l,t.dash,t.cap,y||(o?"#fff":r._stroke)),N.fill(g),o&&N.stroke(g),N.globalAlpha=1,N.restore(),f&&N.translate(-i,-i)}(r),Ct("drawSeries",r))})))}},Yn=(r.drawOrder||["axes","series"]).map((n=>An[n]));function Cn(n){var e=Dn[n];if(null==e){var t=(r.scales||I)[n]||I;if(null!=t.from)Cn(t.from),Dn[n]=U({},Dn[t.from],t);else{(e=Dn[n]=U({},n==Pn?Nr:Ir,t)).key=n;var l=e.time,i=e.range,a=L(i);if(n!=Pn&&!a&&O(i)){var o=i;i=(n,r,e)=>null==r?ue:s(r,e,o)}e.range=D(i||(l?ce:n==Pn?3==e.distr?de:4==e.distr?pe:fe:3==e.distr?he:4==e.distr?me:ve)),e.auto=D(!a&&e.auto),e.clamp=D(e.clamp||Fr),e._min=e._max=null}}}for(var Hn in Cn("x"),Cn("y"),Tn.forEach((n=>{Cn(n.scale)})),zn.forEach((n=>{Cn(n.scale)})),r.scales)Cn(Hn);var Fn,Nn,Vn,On,jn=Dn[Pn],Gn=jn.distr;0==jn.ori?(mn(Y,"u-hz"),Fn=f,Nn=c,Vn=Br,On=Kr):(mn(Y,"u-vt"),Fn=c,Nn=f,Vn=Rr,On=Qr);var Un={};for(var Bn in Dn){var Rn=Dn[Bn];null==Rn.min&&null==Rn.max||(Un[Bn]={min:Rn.min,max:Rn.max},Rn.min=Rn.max=null)}var Jn,qn=r.tzDate||(n=>new Date(n/Sn)),Zn=r.fmtDate||Wn,Xn=1==Sn?nr(qn):lr(qn),Kn=ar(qn,ir(1==Sn?$n:tr,Zn)),rr=ur(qn,sr("{YYYY}-{MM}-{DD} {h}:{mm}{aa}",Zn)),or=U({show:!0,live:!0},r.legend),vr=or.show;or.width=D(u(or.width,2)),or.dash=D(or.dash||"solid"),or.stroke=D(or.stroke||fr),or.fill=D(or.fill||cr);var hr,dr=[],pr=!1;if(vr){Jn=wn("table","u-legend",Y);var gr=Tn[1]?Tn[1].values:null;if(pr=null!=gr){var wr=wn("tr","u-thead",Jn);for(var xr in wn("th",null,wr),hr=gr(a,1,0))wn("th",cn,wr).textContent=xr}else hr={_:0},mn(Jn,"u-inline"),or.live&&mn(Jn,"u-live")}var Tr=new Map;function zr(n,r,e){var t=Tr.get(r)||{},l=ie.bind[n](a,r,e);l&&(kn(n,r,t[n]=l),Tr.set(r,t))}var Dr=0,Er=0,Lr=0,Or=0,jr=0,Gr=0,Ur=0,Jr=0,qr=0,Zr=0;a.bbox={};var Xr=!1,$r=!1,ne=!1,re=!1,ee=!1;function te(n,r){n==a.width&&r==a.height||le(n,r),Ve(!1),ne=!0,$r=!0,re=!0,ee=!0,nt()}function le(n,r){a.width=Dr=Lr=n,a.height=Er=Or=r,jr=Gr=0,function(){var n=!1,r=!1,e=!1,t=!1;zn.forEach((l=>{if(l.show&&l._show){var i=l.side,a=i%2,o=l._size+(l.labelSize=null!=l.label?l.labelSize||30:0);o>0&&(a?(Lr-=o,3==i?(jr+=o,t=!0):e=!0):(Or-=o,0==i?(Gr+=o,n=!0):r=!0))}})),ye[0]=n,ye[1]=e,ye[2]=r,ye[3]=t,Lr-=ze[1]+ze[3],jr+=ze[3],Or-=ze[2]+ze[0],Gr+=ze[0]}(),function(){var n=jr+Lr,r=Gr+Or,e=jr,t=Gr;function l(l,i){switch(l){case 1:return(n+=i)-i;case 2:return(r+=i)-i;case 3:return(e-=i)+i;case 0:return(t-=i)+i}}zn.forEach((n=>{if(n.show&&n._show){var r=n.side;n._pos=l(r,n._size),null!=n.label&&(n._lpos=l(r,n.labelSize))}}))}();var e=a.bbox;Ur=e.left=T(jr*dn,.5),Jr=e.top=T(Gr*dn,.5),qr=e.width=T(Lr*dn,.5),Zr=e.height=T(Or*dn,.5)}a.setSize=function(n){te(n.width,n.height)};var ie=a.cursor=U({},mr,r.cursor);ie._lock=!1;var we=ie.points;we.show=D(we.show),we.size=D(we.size),we.stroke=D(we.stroke),we.width=D(we.width),we.fill=D(we.fill);var xe=a.focus=U({},r.focus||{alpha:.3},ie.focus),be=xe.prox>=0,_e=[null];function ke(n,r){var e=Dn[n.scale].time,t=n.value;if(n.value=e?V(t)?ur(qn,sr(t,Zn)):t||rr:t||Ar,n.label=n.label||(e?"Time":"Value"),r>0){n.width=null==n.width?1:n.width,n.paths=n.paths||ae||P,n.fillTo=D(n.fillTo||Cr),n.pxAlign=u(n.pxAlign,!0),n.stroke=D(n.stroke||null),n.fill=D(n.fill||null),n._stroke=n._fill=n._paths=n._focus=null;var l=Yr(n.width,1),i=n.points=U({},{size:l,width:x(1,.2*l),stroke:n.stroke,space:2*l,_stroke:null,_fill:null},n.points);i.show=D(i.show),i.fill=D(i.fill),i.stroke=D(i.stroke)}if(vr&&dr.splice(r,0,function(n,r){if(0==r&&(pr||!or.live))return null;var e=[],t=wn("tr","u-series",Jn,Jn.childNodes[r]);mn(t,n.class),n.show||mn(t,fn);var l=wn("th",null,t),i=xn("u-marker",l);if(r>0){var o=or.width(a,r);o&&(i.style.border=o+"px "+or.dash(a,r)+" "+or.stroke(a,r)),i.style.background=or.fill(a,r)}var s=xn(cn,l);for(var u in s.textContent=n.label,r>0&&(zr("click",l,(()=>{ie._lock||dt(Tn.indexOf(n),{show:!n.show},Ht.setSeries)})),be&&zr(ln,l,(()=>{ie._lock||dt(Tn.indexOf(n),mt,Ht.setSeries)}))),hr){var f=wn("td","u-value",t);f.textContent="--",e.push(f)}return e}(n,r)),ie.show){var o=function(n,r){if(r>0){var e=ie.points.show(a,r);if(e)return mn(e,"u-cursor-pt"),mn(e,n.class),bn(e,-10,-10,Lr,Or),_n.insertBefore(e,_e[r]),e}}(n,r);o&&_e.splice(r,0,o)}}a.addSeries=function(n,r){n=se(n,r=null==r?Tn.length:r,_r,Hr),Tn.splice(r,0,n),ke(Tn[r],r)},a.delSeries=function(n){Tn.splice(n,1),vr&&dr.splice(n,1)[0][0].parentNode.remove(),_e.length>1&&_e.splice(n,1)[0].remove()},Tn.forEach(ke);var ye=[!1,!1,!1,!1];function Me(n,r,e){var t=e[0],l=e[1],i=e[2],a=e[3],o=r%2,s=0;return 0==o&&(a||l)&&(s=0==r&&!t||2==r&&!i?p(br.size/3):0),1==o&&(t||i)&&(s=1==r&&!l||3==r&&!a?p(Wr.size/2):0),s}zn.forEach((function(n,r){if(n._show=n.show,n.show){var e=Dn[n.scale];null==e&&(n.scale=n.side%2?Tn[1].scale:Pn,e=Dn[n.scale]);var t=e.time;n.size=D(n.size),n.space=D(n.space),n.rotate=D(n.rotate),n.incrs=D(n.incrs||(2==e.distr?In:t?1==Sn?Qn:er:Ln)),n.splits=D(n.splits||(t&&1==e.distr?Xn:3==e.distr?Mr:4==e.distr?Sr:yr)),n.stroke=D(n.stroke),n.grid.stroke=D(n.grid.stroke),n.ticks.stroke=D(n.ticks.stroke);var l=n.values;n.values=t?L(l)?ar(qn,ir(l,Zn)):V(l)?function(n,r){var e=Wn(r);return(r,t)=>t.map((r=>e(n(r))))}(qn,l):l||Kn:l||kr,n.filter=D(n.filter||(3>e.distr?E:Pr)),n.font=ge(n.font),n.labelFont=ge(n.labelFont),n._size=n.size(a,null,r,0),n._space=n._rotate=n._incrs=n._found=n._splits=n._values=null,n._size>0&&(ye[r]=!0)}}));var Se,Te=a.padding=(r.padding||[Me,Me,Me,Me]).map((n=>D(u(n,Me)))),ze=a._padding=Te.map(((n,r)=>n(a,r,ye,0))),De=null,Ee=null,Pe=Tn[0].idxs,Ae=null,We=!1;function Ye(n,r){if((n=n||[])[0]=n[0]||[],a.data=n,e=n.slice(),Se=(Ae=e[0]).length,2==Gn&&(e[0]=Ae.map(((n,r)=>r))),a._data=e,Ve(!0),Ct("setData"),!1!==r){var t=jn;t.auto(a,We)?Ce():ht(Pn,t.min,t.max),re=ie.left>=0,ee=!0,nt()}}function Ce(){var n,r,t,a,o;We=!0,Se>0?(De=Pe[0]=0,Ee=Pe[1]=Se-1,a=e[0][De],o=e[0][Ee],2==Gn?(a=De,o=Ee):1==Se&&(3==Gn?(a=(n=l(a,a,jn.log,!1))[0],o=n[1]):4==Gn?(a=(r=i(a,a,jn.log,!1))[0],o=r[1]):jn.time?o=a+86400/Sn:(a=(t=s(a,o,.1,!0))[0],o=t[1]))):(De=Pe[0]=a=null,Ee=Pe[1]=o=null),ht(Pn,a,o)}function He(n,r,e,t,l){N.strokeStyle=n||nn,N.lineWidth=r,N.lineJoin="round",N.lineCap=t||"butt",N.setLineDash(e||[]),N.fillStyle=l||nn}function Fe(n,r,e,t,l,i,a){He(n,r,e,t,l),l&&a&&N.fill(a),n&&i&&r&&N.stroke(i)}function Ne(n,r,e,t,l,i,a,o,s,u){var f=a%2/2;Mn&&N.translate(f,f),He(o,a,s,u),N.beginPath();var c,v,h,d,m=l+(0==t||3==t?-i:i);0==e?(v=l,d=m):(c=l,h=m),n.forEach(((n,t)=>{null!=r[t]&&(0==e?c=h=n:v=d=n,N.moveTo(c,v),N.lineTo(h,d))})),N.stroke(),Mn&&N.translate(-f,-f)}function Ie(n){var r=!0;return zn.forEach(((e,t)=>{if(e.show){var l=Dn[e.scale];if(null!=l.min){e._show||(r=!1,e._show=!0,Ve(!1));var i=e.side,o=l.min,s=l.max,u=function(n,r,e,t){var l,i=zn[n];if(t>0){var o=i._space=i.space(a,n,r,e,t),s=i._incrs=i.incrs(a,n,r,e,t,o);l=i._found=function(n,r,e,t,l){for(var i=t/(r-n),a=(""+m(n)).length,o=0;e.length>o;o++){var s=e[o]*i,u=10>e[o]?H.get(e[o]):0;if(s>=l&&17>a+u)return[e[o],s]}return[0,0]}(r,e,s,t,o)}else l=[0,0];return l}(t,o,s,0==i%2?Lr:Or),f=u[0],c=u[1];if(0!=c){var v=e._splits=e.splits(a,t,o,s,f,c,2==l.distr),h=2==l.distr?v.map((n=>Ae[n])):v,d=2==l.distr?Ae[v[1]]-Ae[v[0]]:f,p=e._values=e.values(a,e.filter(a,h,t,c,d),t,c,d);e._rotate=2==i?e.rotate(a,p,t,c):0;var w=e._size;e._size=g(e.size(a,p,t,n)),null!=w&&e._size!=w&&(r=!1)}}else e._show&&(r=!1,e._show=!1,Ve(!1))}})),r}function Le(n){var r=!0;return Te.forEach(((e,t)=>{var l=e(a,t,ye,n);l!=ze[t]&&(r=!1),ze[t]=l})),r}function Ve(n){Tn.forEach(((r,e)=>{e>0&&(r._paths=null,n&&(r.min=null,r.max=null))}))}a.setData=Ye;var Oe,je,Ge,Ue,Be,Re,Je,qe,Ze,Xe,Ke,Qe,$e=!1;function nt(){$e||(R(rt),$e=!0)}function rt(){Xr&&(function(){var r=G(Dn,j);for(var t in r){var l=r[t],i=Un[t];if(null!=i&&null!=i.min)U(l,i),t==Pn&&Ve(!0);else if(t!=Pn)if(0==Se&&null==l.from){var o=l.range(a,null,null,t);l.min=o[0],l.max=o[1]}else l.min=S,l.max=-S}if(Se>0)for(var s in Tn.forEach(((t,l)=>{var i=t.scale,o=r[i],s=Un[i];if(0==l){var u=o.range(a,o.min,o.max,i);o.min=u[0],o.max=u[1],De=n(o.min,e[0]),Ee=n(o.max,e[0]),o.min>e[0][De]&&De++,e[0][Ee]>o.max&&Ee--,t.min=Ae[De],t.max=Ae[Ee]}else if(t.show&&t.auto&&o.auto(a,We)&&(null==s||null==s.min)){var f=null==t.min?3==o.distr?function(n,r,e){for(var t=S,l=-S,i=r;e>=i;i++)n[i]>0&&(t=w(t,n[i]),l=x(l,n[i]));return[t==S?1:t,l==-S?10:l]}(e[l],De,Ee):function(n,r,e,t){var l=S,i=-S;if(1==t)l=n[r],i=n[e];else if(-1==t)l=n[e],i=n[r];else for(var a=r;e>=a;a++)null!=n[a]&&(l=w(l,n[a]),i=x(i,n[a]));return[l,i]}(e[l],De,Ee,t.sorted):[t.min,t.max];o.min=w(o.min,t.min=f[0]),o.max=x(o.max,t.max=f[1])}t.idxs[0]=De,t.idxs[1]=Ee})),r){var u=r[s],f=Un[s];if(null==u.from&&(null==f||null==f.min)){var c=u.range(a,u.min==S?null:u.min,u.max==-S?null:u.max,s);u.min=c[0],u.max=c[1]}}for(var v in r){var h=r[v];if(null!=h.from){var d=r[h.from],m=h.range(a,d.min,d.max,v);h.min=m[0],h.max=m[1]}}var p={},g=!1;for(var b in r){var _=r[b],y=Dn[b];if(y.min!=_.min||y.max!=_.max){y.min=_.min,y.max=_.max;var T=y.distr;y._min=3==T?k(y.min):4==T?M(y.min,y.asinh):y.min,y._max=3==T?k(y.max):4==T?M(y.max,y.asinh):y.max,p[b]=g=!0}}if(g){for(var z in Tn.forEach((n=>{p[n.scale]&&(n._paths=null)})),p)ne=!0,Ct("setScale",z);ie.show&&(re=ie.left>=0)}for(var D in Un)Un[D]=null}(),Xr=!1),ne&&(function(){for(var n=!1,r=0;!n;){var e=Ie(++r),t=Le(r);(n=e&&t)||(le(a.width,a.height),$r=!0)}}(),ne=!1),$r&&(gn($,K,jr),gn($,Z,Gr),gn($,J,Lr),gn($,q,Or),gn(_n,K,jr),gn(_n,Z,Gr),gn(_n,J,Lr),gn(_n,q,Or),gn(B,J,Dr),gn(B,q,Er),F.width=p(Dr*dn),F.height=p(Er*dn),Mt(),Ct("setSize"),$r=!1),Dr>0&&Er>0&&(N.clearRect(0,0,F.width,F.height),Ct("drawClear"),Yn.forEach((n=>n())),Ct("draw")),ie.show&&re&&(kt(),re=!1),y||(y=!0,a.status=1,Ct("ready")),We=!1,$e=!1}function et(r,t){var l=Dn[r];if(null==l.from){if(0==Se){var i=l.range(a,t.min,t.max,r);t.min=i[0],t.max=i[1]}if(t.min>t.max){var o=t.min;t.min=t.max,t.max=o}if(Se>1&&null!=t.min&&null!=t.max&&1e-16>t.max-t.min)return;r==Pn&&2==l.distr&&Se>0&&(t.min=n(t.min,e[0]),t.max=n(t.max,e[0])),Un[r]=t,Xr=!0,nt()}}a.redraw=(n,r)=>{ne=r||!1,!1!==n?ht(Pn,jn.min,jn.max):nt()},a.setScale=et;var tt=!1,lt=ie.drag,it=lt.x,at=lt.y;ie.show&&(ie.x&&(Oe=xn("u-cursor-x",_n)),ie.y&&(je=xn("u-cursor-y",_n)),0==jn.ori?(Ge=Oe,Ue=je):(Ge=je,Ue=Oe),Ke=ie.left,Qe=ie.top);var ot,st,ut,ft=a.select=U({show:!0,over:!0,left:0,width:0,top:0,height:0},r.select),ct=ft.show?xn("u-select",ft.over?_n:$):null;function vt(n,r){if(ft.show){for(var e in n)gn(ct,e,ft[e]=n[e]);!1!==r&&Ct("setSelect")}}function ht(n,r,e){et(n,{min:r,max:e})}function dt(n,r,e){var t=Tn[n];null!=r.focus&&function(n){if(n!=ut){var r=null==n,e=1!=xe.alpha;Tn.forEach(((t,l)=>{var i=r||0==l||l==n;t._focus=r?null:i,e&&function(n,r){Tn[n].alpha=r,ie.show&&_e[n]&&(_e[n].style.opacity=r),vr&&dr[n]&&(dr[n][0].parentNode.style.opacity=r)}(l,i?1:xe.alpha)})),ut=n,e&&nt()}}(n),null!=r.show&&(t.show=r.show,function(n){var r=vr?dr[n][0].parentNode:null;Tn[n].show?r&&pn(r,fn):(r&&mn(r,fn),_e.length>1&&bn(_e[n],-10,-10,Lr,Or))}(n),ht(t.scale,null,null),nt()),Ct("setSeries",n,r),e&&Nt("setSeries",a,n,r)}a.setSelect=vt,a.setSeries=dt;var mt={focus:!0},pt={focus:!1};function gt(n,r){var e=Dn[r],t=Lr;1==e.ori&&(n=(t=Or)-n),-1==e.dir&&(n=t-n);var l=e._min,i=l+n/t*(e._max-l),a=e.distr;return 3==a?b(10,i):4==a?((n,r)=>(void 0===r&&(r=1),v.sinh(n/r)))(i,e.asinh):i}function wt(n,r){gn(ct,K,ft.left=n),gn(ct,J,ft.width=r)}function xt(n,r){gn(ct,Z,ft.top=n),gn(ct,q,ft.height=r)}vr&&be&&kn(an,Jn,(()=>{ie._lock||(dt(null,pt,Ht.setSeries),kt())})),a.valToIdx=r=>n(r,e[0]),a.posToIdx=function(r){return n(gt(r,Pn),e[0],De,Ee)},a.posToVal=gt,a.valToPos=(n,r,e)=>0==Dn[r].ori?f(n,Dn[r],e?qr:Lr,e?Ur:0):c(n,Dn[r],e?Zr:Or,e?Jr:0),a.batch=function(n){n(a),nt()},a.setCursor=n=>{Ke=n.left,Qe=n.top,kt()};var bt=0==jn.ori?wt:xt,_t=1==jn.ori?wt:xt;function kt(r,t){var l,i;Ze=Ke,Xe=Qe,l=ie.move(a,Ke,Qe),Ke=l[0],Qe=l[1],ie.show&&(Ge&&bn(Ge,p(Ke),0,Lr,Or),Ue&&bn(Ue,0,p(Qe),Lr,Or)),ot=S;var o=0==jn.ori?Lr:Or,s=1==jn.ori?Lr:Or;if(0>Ke||0==Se||De>Ee){i=null;for(var u=0;Tn.length>u;u++)if(u>0&&_e.length>1&&bn(_e[u],-10,-10,Lr,Or),vr&&or.live){if(0==u&&pr)continue;for(var f=0;dr[u].length>f;f++)dr[u][f].firstChild.nodeValue="--"}be&&dt(null,mt,Ht.setSeries)}else{var c=gt(0==jn.ori?Ke:Qe,Pn);i=n(c,e[0],De,Ee);for(var v=W(Fn(e[0][i],jn,o,0),.5),h=0;Tn.length>h;h++){var m=Tn[h],g=ie.dataIdx(a,h,i,c),x=g==i?v:W(Fn(e[0][g],jn,o,0),.5);if(h>0&&m.show){var b=e[h][g],_=null==b?-10:W(Nn(b,Dn[m.scale],s,0),.5);if(_>0){var k=d(_-Qe);k>ot||(ot=k,st=h)}var M=void 0,T=void 0;0==jn.ori?(M=x,T=_):(M=_,T=x),_e.length>1&&bn(_e[h],M,T,Lr,Or)}if(vr&&or.live){if(g==ie.idx&&!ee||0==h&&pr)continue;var z=0==h&&2==Gn?Ae:e[h],D=pr?m.values(a,h,g):{_:m.value(a,z[g],h,g)},E=0;for(var P in D)dr[h][E++].firstChild.nodeValue=D[P]}}ee=!1}if(ft.show&&tt)if(null!=t){var A=Ht.scales,Y=A[0],C=A[1],H=t.cursor.drag;it=H._x,at=H._y;var F,N,I,L,V,O=t.select,j=O.left,G=O.top,U=O.width,B=O.height,R=t.scales[Y].ori,J=t.posToVal;Y&&(0==R?(F=j,N=U):(F=G,N=B),I=Dn[Y],L=Fn(J(F,Y),I,o,0),V=Fn(J(F+N,Y),I,o,0),bt(w(L,V),d(V-L)),C||_t(0,s)),C&&(1==R?(F=j,N=U):(F=G,N=B),I=Dn[C],L=Nn(J(F,C),I,s,0),V=Nn(J(F+N,C),I,s,0),_t(w(L,V),d(V-L)),Y||bt(0,o))}else{var q=d(Ze-Be),Z=d(Xe-Re);if(1==jn.ori){var X=q;q=Z,Z=X}it=lt.x&&q>=lt.dist,at=lt.y&&Z>=lt.dist;var K,Q,$=lt.uni;null!=$?it&&at&&(at=Z>=$,(it=q>=$)||at||(Z>q?at=!0:it=!0)):lt.x&&lt.y&&(it||at)&&(it=at=!0),it&&(0==jn.ori?(K=Je,Q=Ke):(K=qe,Q=Qe),bt(w(K,Q),d(Q-K)),at||_t(0,s)),at&&(1==jn.ori?(K=Je,Q=Ke):(K=qe,Q=Qe),_t(w(K,Q),d(Q-K)),it||bt(0,o)),it||at||(bt(0,0),_t(0,0))}if(ie.idx=i,ie.left=Ke,ie.top=Qe,lt._x=it,lt._y=at,null!=r&&(Nt(rn,a,Ke,Qe,o,s,i),be)){var nn=Ht.setSeries,en=xe.prox;null==ut?ot>en||dt(st,mt,nn):ot>en?dt(null,mt,nn):st!=ut&&dt(st,mt,nn)}y&&Ct("setCursor")}var yt=null;function Mt(){yt=_n.getBoundingClientRect()}function St(n,r,e,t,l,i){ie._lock||(Tt(n,r,e,t,l,i,0,!1,null!=n),null!=n?kt(1):kt(null,r))}function Tt(n,r,e,t,l,i,o,s,u){var f;if(null!=n)e=n.clientX-yt.left,t=n.clientY-yt.top;else{if(0>e||0>t)return Ke=-10,void(Qe=-10);var c=Lr,v=Or,h=l,d=i,m=e,p=t;1==jn.ori&&(c=Or,v=Lr);var g=Ht.scales,w=g[0],x=g[1];if(1==r.scales[w].ori&&(h=i,d=l,m=t,p=e),e=null!=w?_(r.posToVal(m,w),Dn[w],c,0):c*(m/h),t=null!=x?_(r.posToVal(p,x),Dn[x],v,0):v*(p/d),1==jn.ori){var b=e;e=t,t=b}}u&&(e>1&&Lr-1>e||(e=T(e,Lr)),t>1&&Or-1>t||(t=T(t,Or))),s?(Be=e,Re=t,f=ie.move(a,e,t),Je=f[0],qe=f[1]):(Ke=e,Qe=t)}function zt(){vt({width:0,height:0},!1)}function Dt(n,r,e,t,l,i){tt=!0,it=at=lt._x=lt._y=!1,Tt(n,r,e,t,l,i,0,!0,!1),null!=n&&(zr(tn,vn,Et),Nt(en,a,Je,qe,Lr,Or,null))}function Et(n,r,e,t,l,i){tt=lt._x=lt._y=!1,Tt(n,r,e,t,l,i,0,!1,!0);var o=ft.left,s=ft.top,u=ft.width,f=ft.height,c=u>0||f>0;if(c&&vt(ft),lt.setScale&&c){var v=o,h=u,d=s,m=f;if(1==jn.ori&&(v=s,h=f,d=o,m=u),it&&ht(Pn,gt(v,Pn),gt(v+h,Pn)),at)for(var p in Dn){var g=Dn[p];p!=Pn&&null==g.from&&g.min!=S&&ht(p,gt(d+m,p),gt(d,p))}zt()}else ie.lock&&(ie._lock=!ie._lock,ie._lock||kt());null!=n&&(function(n,r){var e=Tr.get(r)||{};yn(n,r,e[n]),e[n]=null}(tn,vn),Nt(tn,a,Ke,Qe,Lr,Or,null))}function Pt(n){Ce(),zt(),null!=n&&Nt(on,a,Ke,Qe,Lr,Or,null)}var At,Wt={};Wt.mousedown=Dt,Wt.mousemove=St,Wt.mouseup=Et,Wt.dblclick=Pt,Wt.setSeries=(n,r,e,t)=>{dt(e,t)},ie.show&&(zr(en,_n,Dt),zr(rn,_n,St),zr(ln,_n,Mt),zr(an,_n,(function(){if(!ie._lock){var n=tt;if(tt){var r,e,t=!0,l=!0;0==jn.ori?(r=it,e=at):(r=at,e=it),r&&e&&(t=10>=Ke||Ke>=Lr-10,l=10>=Qe||Qe>=Or-10),r&&t&&(Ke=Je>Ke?0:Lr),e&&l&&(Qe=qe>Qe?0:Or),kt(1),tt=!1}Ke=-10,Qe=-10,kt(1),n&&(tt=n)}})),zr(on,_n,Pt),At=function(n){var r=null;function e(){r=null,n()}return function(){clearTimeout(r),r=setTimeout(e,100)}}(Mt),kn(sn,hn,At),kn(un,hn,At),a.syncRect=Mt);var Yt=a.hooks=r.hooks||{};function Ct(n,r,e){n in Yt&&Yt[n].forEach((n=>{n.call(null,a,r,e)}))}(r.plugins||[]).forEach((n=>{for(var r in n.hooks)Yt[r]=(Yt[r]||[]).concat(n.hooks[r])}));var Ht=U({key:null,setSeries:!1,filters:{pub:A,sub:A},scales:[Pn,null]},ie.sync),Ft=Vr(Ht.key);function Nt(n,r,e,t,l,i,a){Ht.filters.pub(n,r,e,t,l,i,a)&&Ft.pub(n,r,e,t,l,i,a)}function It(){Ct("init",r,e),Ye(e||r.data,!1),Un[Pn]?et(Pn,Un[Pn]):Ce(),te(r.width,r.height),kt(),vt(ft,!1)}return Ft.sub(a),a.pub=function(n,r,e,t,l,i,a){Ht.filters.sub(n,r,e,t,l,i,a)&&Wt[n](null,r,e,t,l,i,a)},a.destroy=function(){Ft.unsub(a),yn(sn,hn,At),yn(un,hn,At),Y.remove(),Ct("destroy")},t?t instanceof HTMLElement?(t.appendChild(Y),It()):t(a,It):It(),a}we.assign=U,we.fmtNum=c,we.rangeNum=s,we.rangeLog=l,we.rangeAsinh=i,we.orient=Or,we.join=function(n,r){for(var e=new Set,t=0;n.length>t;t++)for(var l=n[t][0],i=l.length,a=0;i>a;a++)e.add(l[a]);for(var o=[Array.from(e).sort(((n,r)=>n-r))],s=o[0].length,u=new Map,f=0;s>f;f++)u.set(o[0][f],f);for(var c=0;n.length>c;c++)for(var v=n[c],h=v[0],d=1;v.length>d;d++){for(var m=v[d],p=Array(s).fill(void 0),g=r?r[c][d]:1,w=[],x=0;m.length>x;x++){var b=m[x],_=u.get(h[x]);null==b?0!=g&&(p[_]=b,2==g&&w.push(_)):p[_]=b}B(p,w,s),o.push(p)}return o},we.fmtDate=Wn,we.tzDate=function(n,r){var e;return"UTC"==r||"Etc/UTC"==r?e=new Date(+n+6e4*n.getTimezoneOffset()):r==Yn?e=n:(e=new Date(n.toLocaleString("en-US",{timeZone:r}))).setMilliseconds(n.getMilliseconds()),e},we.sync=Vr,we.addGap=Ur,we.clipGaps=Gr;var xe=we.paths={};return xe.linear=le,xe.spline=function(){return(n,e,t,l)=>Or(n,e,((i,a,o,s,u,f,c,v,h,d,m)=>{var g,w,x;0==s.ori?(g=Br,x=Jr,w=$r):(g=Rr,x=qr,w=ne);var b=1*s.dir*(0==s.ori?1:-1);t=r(o,t,l,1),l=r(o,t,l,-1);for(var _=[],k=!1,y=p(f(a[1==b?t:l],s,d,v)),M=y,S=[],T=[],z=1==b?t:l;z>=t&&l>=z;z+=b){var D=o[z],E=f(a[z],s,d,v);null!=D?(k&&(Ur(_,M,E),k=!1),S.push(M=E),T.push(c(o[z],u,m,h))):null===D&&(Ur(_,M,E),k=!0)}var P={stroke:ie(S,T,.5,g,w),fill:null,clip:null,band:null},A=P.stroke;if(null!=i.fill){var W=P.fill=new Path2D(A),Y=i.fillTo(n,e,i.min,i.max),C=p(c(Y,u,m,h));x(W,M,C),x(W,y,C)}return i.spanGaps||(P.clip=Gr(_,s.ori,v,h,d,m)),n.bands.length>0&&(P.band=jr(n,e,t,l,A)),P}))},xe.stepped=function(n){var e=u(n.align,1),t=u(n.ascDesc,!1);return(n,l,i,a)=>Or(n,l,((o,s,u,f,c,v,h,d,m,g,w)=>{var x=0==f.ori?Jr:qr,b={stroke:new Path2D,fill:null,clip:null,band:null},_=b.stroke,k=1*f.dir*(0==f.ori?1:-1);i=r(u,i,a,1),a=r(u,i,a,-1);var y=[],M=!1,S=p(h(u[1==k?i:a],c,w,m)),T=p(v(s[1==k?i:a],f,g,d)),z=T;x(_,T,S);for(var D=1==k?i:a;D>=i&&a>=D;D+=k){var E=u[D],P=p(v(s[D],f,g,d));if(null!=E){var A=p(h(E,c,w,m));if(M){if(Ur(y,z,P),S!=A){var W=o.width*dn/2,Y=y[y.length-1];Y[0]+=t||1==e?W:-W,Y[1]-=t||-1==e?W:-W}M=!1}1==e?x(_,P,S):x(_,z,A),x(_,P,A),S=A,z=P}else null===E&&(Ur(y,z,P),M=!0)}if(null!=o.fill){var C=b.fill=new Path2D(_),H=o.fillTo(n,l,o.min,o.max),F=p(h(H,c,w,m));x(C,z,F),x(C,T,F)}return o.spanGaps||(b.clip=Gr(y,f.ori,d,m,g,w)),n.bands.length>0&&(b.band=jr(n,l,i,a,_)),b}))},xe.bars=function(n){var e=u((n=n||I).size,[.6,S]),t=n.align||0,l=1-e[0],i=u(e[1],S)*dn;return(n,e,a,o)=>Or(n,e,((s,u,f,c,v,h,d,m,g,b,_)=>{var k,y=0==c.ori?Zr:Xr,M=h(u[1],c,b,m)-h(u[0],c,b,m),S=M*l,z=d(s.fillTo(n,e,s.min,s.max),v,_,g),D=p(s.width*dn),E=p(w(i,M-S)-D),P=1==t?0:-1==t?E:E/2,A={stroke:new Path2D,fill:null,clip:null,band:null},W=n.bands.length>0;W&&(A.band=new Path2D,k=T(d(v.max,v,_,g),.5));for(var Y=A.stroke,C=A.band,H=c.dir*(0==c.ori?1:-1),F=1==H?a:o;F>=a&&o>=F;F+=H){var N=f[F];if(null==N){if(!W)continue;var I=r(f,1==H?a:o,F,-H),L=r(f,F,1==H?o:a,H),V=f[I];N=V+(F-I)/(L-I)*(f[L]-V)}var O=h(2==c.distr?F:u[F],c,b,m),j=d(N,v,_,g),G=p(O-P),U=p(x(j,z)),B=p(w(j,z)),R=U-B;null!=f[F]&&y(Y,G,B,E,R),W&&(U=B,y(C,G,B=k,E,R=U-B))}return null!=s.fill&&(A.fill=new Path2D(Y)),A}))},we}();

;// https://tobyzerner.github.io/placement.js/dist/index.js
var placement = function () { "use strict"; var e = { size: ["height", "width"], clientSize: ["clientHeight", "clientWidth"], offsetSize: ["offsetHeight", "offsetWidth"], maxSize: ["maxHeight", "maxWidth"], before: ["top", "left"], marginBefore: ["marginTop", "marginLeft"], after: ["bottom", "right"], marginAfter: ["marginBottom", "marginRight"], scrollOffset: ["pageYOffset", "pageXOffset"] }; function t(e) { return { top: e.top, bottom: e.bottom, left: e.left, right: e.right } } return function (o, r, f, a, i) { void 0 === f && (f = "bottom"), void 0 === a && (a = "center"), void 0 === i && (i = {}), (r instanceof Element || r instanceof Range) && (r = t(r.getBoundingClientRect())); var n = Object.assign({ top: r.bottom, bottom: r.top, left: r.right, right: r.left }, r), s = { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth }; i.bound && ((i.bound instanceof Element || i.bound instanceof Range) && (i.bound = t(i.bound.getBoundingClientRect())), Object.assign(s, i.bound)); var l = getComputedStyle(o), m = {}, b = {}; for (var g in e) m[g] = e[g]["top" === f || "bottom" === f ? 0 : 1], b[g] = e[g]["top" === f || "bottom" === f ? 1 : 0]; o.style.position = "absolute", o.style.maxWidth = "", o.style.maxHeight = ""; var d = parseInt(l[b.marginBefore]), c = parseInt(l[b.marginAfter]), u = d + c, p = s[b.after] - s[b.before] - u, h = parseInt(l[b.maxSize]); (!h || p < h) && (o.style[b.maxSize] = p + "px"); var x = parseInt(l[m.marginBefore]) + parseInt(l[m.marginAfter]), y = n[m.before] - s[m.before] - x, z = s[m.after] - n[m.after] - x; (f === m.before && o[m.offsetSize] > y || f === m.after && o[m.offsetSize] > z) && (f = y > z ? m.before : m.after); var S = f === m.before ? y : z, v = parseInt(l[m.maxSize]); (!v || S < v) && (o.style[m.maxSize] = S + "px"); var w = window[m.scrollOffset], O = function (e) { return Math.max(s[m.before], Math.min(e, s[m.after] - o[m.offsetSize] - x)) }; f === m.before ? (o.style[m.before] = w + O(n[m.before] - o[m.offsetSize] - x) + "px", o.style[m.after] = "auto") : (o.style[m.before] = w + O(n[m.after]) + "px", o.style[m.after] = "auto"); var B = window[b.scrollOffset], I = function (e) { return Math.max(s[b.before], Math.min(e, s[b.after] - o[b.offsetSize] - u)) }; switch (a) { case "start": o.style[b.before] = B + I(n[b.before] - d) + "px", o.style[b.after] = "auto"; break; case "end": o.style[b.before] = "auto", o.style[b.after] = B + I(document.documentElement[b.clientSize] - n[b.after] - c) + "px"; break; default: var H = n[b.after] - n[b.before]; o.style[b.before] = B + I(n[b.before] + H / 2 - o[b.offsetSize] / 2 - d) + "px", o.style[b.after] = "auto" }o.dataset.side = f, o.dataset.align = a } }();

;