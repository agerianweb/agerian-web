(function(){var d=document.documentElement;if(!d.getAttribute('data-theme'))d.setAttribute('data-theme','dark')})();

var RM=matchMedia('(prefers-reduced-motion: reduce)').matches,$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))},cl=function(v){return Math.min(1,Math.max(0,v))};
// smooth scroll with inertia
var SS=(function(){var cur=scrollY,tg=scrollY,run=false,last=0;
function mx(){return Math.max(0,document.documentElement.scrollHeight-innerHeight)}
function go(v){tg=Math.min(mx(),Math.max(0,v));if(!run){run=true;last=performance.now();requestAnimationFrame(st)}}
function st(n){var dt=Math.min(50,n-last);last=n;var d=tg-cur;if(Math.abs(d)<.4){cur=tg;scrollTo(0,cur);run=false;return}cur+=d*(1-Math.exp(-dt/140));scrollTo(0,cur);requestAnimationFrame(st)}
function sync(){if(!run)cur=tg=scrollY}
window.agShift=function(n){cur-=n;tg-=n};
if(!RM){addEventListener('wheel',function(e){if(e.ctrlKey||e.defaultPrevented||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;if(e.target.closest&&e.target.closest('textarea,input,select'))return;e.preventDefault();sync();go(tg+e.deltaY*(e.deltaMode===1?33:e.deltaMode===2?innerHeight:1))},{passive:false});
addEventListener('keydown',function(e){if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.altKey)return;var a=document.activeElement,tn=a?a.tagName:'';if(/INPUT|TEXTAREA|SELECT|BUTTON/.test(tn))return;var k=e.key,h=innerHeight*.85,v=null;if(k==='ArrowDown')v=70;else if(k==='ArrowUp')v=-70;else if(k==='PageDown'||(k===' '&&!e.shiftKey))v=h;else if(k==='PageUp'||(k===' '&&e.shiftKey))v=-h;else if(k==='Home'){e.preventDefault();sync();go(0);return}else if(k==='End'){e.preventDefault();sync();go(mx());return}if(v===null)return;e.preventDefault();sync();go(tg+v)});
addEventListener('scroll',function(){if(!run&&Math.abs(scrollY-cur)>1.5)cur=tg=scrollY},{passive:true})}
return{to:function(y){sync();go(y)}}})();
var mn=document.getElementById('mn'),mb=document.getElementById('mb'),mc=document.getElementById('mc');
$('.ml li',mc).forEach(function(l,i){l.style.setProperty('--i',i)});mc.querySelector('.mv').style.setProperty('--i',6);mc.querySelector('.mf').style.setProperty('--i',7);
function fit(){mn.style.setProperty('--oh',(68+mc.scrollHeight)+'px')}
function om(o){if(o)fit();mn.classList.toggle('on',o);mb.setAttribute('aria-expanded',o)}
function cm(){om(false)}
mb.addEventListener('click',function(e){e.stopPropagation();om(!mn.classList.contains('on'))});
addEventListener('click',function(e){if(!mn.contains(e.target))cm()});addEventListener('keydown',function(e){if(e.key==='Escape')cm()});addEventListener('resize',function(){if(mn.classList.contains('on'))fit()});
$('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(a.getAttribute('href'));if(!t)return;e.preventDefault();cm();var y=a.getAttribute('href')==='#hero'?0:t.getBoundingClientRect().top+scrollY-70;RM?scrollTo(0,y):SS.to(y)})});
(function(){var root=document.documentElement;function set(t){root.dataset.theme=t;try{localStorage.setItem('ag-th',t)}catch(e){}var m=document.querySelector('meta[name=theme-color]');if(m)m.content=t==='dark'?'#151517':'#fafafa'}
try{var st=localStorage.getItem('ag-th');if(st==='light'||st==='dark')set(st)}catch(e){}
document.getElementById('th').addEventListener('click',function(){set(root.dataset.theme==='dark'?'light':'dark')})})();
// text reveals
function sp(n,st){[].slice.call(n.childNodes).forEach(function(c){if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t.trim()){f.appendChild(document.createTextNode(t));return}var w=document.createElement('span');w.className=st.c;w.innerHTML=st.h?'<span style="--i:'+(st.i++)+'">'+t+'</span>':t;st.a.push(w);f.appendChild(w)});c.replaceWith(f)}else sp(c,st)})}
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
$('[data-w]').forEach(function(h){sp(h,{c:'hw',h:1,i:0,a:[]});io.observe(h)});$('[data-r]').forEach(function(e){io.observe(e)});

// concave carousel of example websites (replace u / src with the real URL and screenshot of each demo)
(function(){if(!document.getElementById('cv'))return;var DEMOS=[
{t:'Okindegia',s:'Demo-webgunea',u:'#kontaktua',src:'',name:'Ogi Berri',nav:['Ogia','Pastelak','Kokapena'],h:'Ogi freskoa, egunero.',cta:'Ikusi menua',bg:'#f6ead9',ink:'#4a2a12',ac:'#b8692a',img:'radial-gradient(circle at 60% 45%,#f2bd78 0,#c9813b 40%,#7a4620 100%)'},
{t:'Ile-apaindegia',s:'Demo-webgunea',u:'#kontaktua',src:'',name:'Ile Studio',nav:['Zerbitzuak','Prezioak','Hitzordua'],h:'Zure estiloa, zure ile-apaindegian.',cta:'Hitzordua hartu',bg:'#f5ece9',ink:'#231a1b',ac:'#b8626d',img:'linear-gradient(140deg,#ecc0b9,#c97b84 55%,#7a3f4b)'},
{t:'Fisioterapia',s:'Demo-webgunea',u:'#kontaktua',src:'',name:'Fisio Zentroa',nav:['Tratamenduak','Taldea','Kontaktua'],h:'Ongizatea zure eskura.',cta:'Hitzordua eskatu',bg:'#eaf4f0',ink:'#15352b',ac:'#2e8b6f',img:'radial-gradient(circle at 42% 32%,#c4e9da,#2e8b6f 60%,#14513f)'},
{t:'Jatetxea',s:'Demo-webgunea',u:'#kontaktua',src:'',name:'Jatetxe Demo',nav:['Karta','Menua','Erreserbak'],h:'Mahaia zuretzat prest.',cta:'Erreserbatu',bg:'#1b1311',ink:'#f4e4d0',ac:'#c0562a',img:'radial-gradient(circle at 55% 45%,#ea8a4d,#8a2f16 55%,#2a0f0a)'},
{t:'Florategia',s:'Demo-webgunea',u:'#kontaktua',src:'',name:'Lore Denda',nav:['Loreak','Ramoak','Bidalketa'],h:'Loreak, zure egunerako.',cta:'Eskatu ramoa',bg:'#f1efe4',ink:'#22301f',ac:'#6f8f35',img:'radial-gradient(circle at 45% 40%,#f5c6d6,#d4789a 45%,#6b2a46)'},
{t:'Tailerra',s:'Demo-webgunea',u:'#kontaktua',src:'',name:'Auto Tailerra',nav:['Zerbitzuak','Prezioak','Hitzordua'],h:'Zure autoa, esku onetan.',cta:'Hitzordua hartu',bg:'#e8edf3',ink:'#101828',ac:'#1d4ed8',img:'linear-gradient(135deg,#a3b8d8,#3b5f9a 55%,#14284a)'},
{t:'Abokatu bulegoa',s:'Demo-webgunea',u:'#kontaktua',src:'',name:'Lege Bulegoa',nav:['Arloak','Taldea','Kontaktua'],h:'Aholkularitza argia eta hurbila.',cta:'Kontsulta eskatu',bg:'#efece6',ink:'#1f1a14',ac:'#7a5a2e',img:'linear-gradient(140deg,#dcc9a6,#a07c45 55%,#3f2c12)'},
{t:'Gimnasioa',s:'Demo-webgunea',u:'#kontaktua',src:'',name:'Gym Zentroa',nav:['Ordutegiak','Klaseak','Tarifak'],h:'Mugitu, zure erritmoan.',cta:'Proba-saioa',bg:'#121316',ink:'#f1f1f3',ac:'#d93a40',img:'radial-gradient(circle at 55% 40%,#ff7a6a,#c1272d 50%,#310b0d)'}];
if(window.AG&&AG.demos)DEMOS.forEach(function(d,i){var o=AG.demos[i];if(o)for(var q in o)d[q]=o[q]});
var cv=document.getElementById('cv'),ring=document.getElementById('cvr'),cn=document.getElementById('cn'),bp=document.getElementById('cp'),bn=document.getElementById('cx'),N=DEMOS.length,cards=[],labs=[];
function mock(d){return'<div class="mk" style="--bg:'+d.bg+';--ink:'+d.ink+';--ac:'+d.ac+'"><div class="mn2"><b>'+d.name+'</b><span>'+d.nav.join('</span><span>')+'</span></div><div class="mh"><div><h4>'+d.h+'</h4><p></p><p class="s"></p><em>'+d.cta+'</em></div><div class="mi" style="background:'+d.img+'"></div></div></div>'}
DEMOS.forEach(function(d){var a=document.createElement('a');a.className='cvc';a.href=d.u;a.draggable=false;a.setAttribute('aria-label',d.t+' — '+d.s);if(d.u.charAt(0)!=='#'){a.target='_blank';a.rel='noopener'}
a.innerHTML='<div class="cvm">'+(d.src?'<img alt="" draggable="false" src="'+d.src+'">':mock(d))+'<span class="gb">Google · 1</span></div><span class="cvl"><b>'+d.t+'</b><span>'+d.s+' →</span></span>';ring.appendChild(a);cards.push(a);labs.push(a.querySelector('.cvl'))});
var cur=RM?0:2.6,tg=0,drag=false,sx0=0,sp0=0,vx=0,lx=0,lt=0,moved=0,cw=0,R3=0,step=0,raf=0,lock=0,acc=0,pc=0,fon=false,fx=document.getElementById('cvbs');
function pad(n){return(n<10?'0':'')+n}
function geo(){cw=cards[0].querySelector('.cvm').offsetWidth;step=(innerWidth<700?36:30)*Math.PI/180;R3=cw*1.03/step;ring.style.transform='translateZ('+R3+'px)'}
function render(){var dv=Math.abs(cur-pc);pc=cur;var MOB=innerWidth<700,bx=RM?0:(MOB?Math.min(2,dv*cw*.08):Math.min(11,dv*cw*.3)),on=bx>(MOB?.45:.6);if(on&&!MOB)fx.setAttribute('stdDeviation',bx.toFixed(2)+' 0');
for(var i=0;i<N;i++){var rel=i-cur;rel-=N*Math.round(rel/N);var a=Math.abs(rel),c=cards[i];c.style.transform='rotateY('+(-rel*step)+'rad) translateZ('+(-R3)+'px)';c.style.opacity=a>2.7?0:a>1.8?(1-(a-1.8)/.9).toFixed(2):1;c.style.pointerEvents=a>2.7?'none':'auto';c.style.visibility=a>2.8?'hidden':'visible';c.style.zIndex=100-Math.round(a*10);labs[i].style.opacity=Math.max(0,1-a*1.15).toFixed(2);var ff=on?(MOB?(a<1.5?'blur('+bx.toFixed(1)+'px)':''):'url(#cvb)'):'';if(c._f!==ff){c.style.filter=ff;c._f=ff}}
cn.textContent=pad((((Math.round(cur)%N)+N)%N)+1)+' / '+pad(N)}
function loop(){if(!drag){cur+=(tg-cur)*.11;if(Math.abs(tg-cur)<.0008)cur=tg}render();raf=(drag||cur!==tg)?requestAnimationFrame(loop):0}
function kick(){if(!raf)raf=requestAnimationFrame(loop)}
function go(i){tg=i;if(RM){cur=tg;render()}else kick()}
cv.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse'&&e.button!==0)return;drag=true;moved=0;sx0=e.clientX;sp0=cur;lx=e.clientX;lt=performance.now();vx=0;cv.classList.add('dg');kick()});
addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-sx0;moved=Math.max(moved,Math.abs(dx));cur=sp0-dx/(cw*.85);tg=cur;var n=performance.now();vx=(e.clientX-lx)/Math.max(1,n-lt);lx=e.clientX;lt=n});
function up(){if(!drag)return;drag=false;cv.classList.remove('dg');go(Math.round(cur-vx*260/(cw*.85)))}
addEventListener('pointerup',up);addEventListener('pointercancel',up);
cards.forEach(function(c,i){c.addEventListener('click',function(e){if(moved>6){e.preventDefault();return}var base=Math.round(tg),dd=((i-base)%N+N)%N;if(dd>N/2)dd-=N;if(dd!==0){e.preventDefault();go(base+dd);return}var u=c.getAttribute('href');if(u.charAt(0)==='#'){e.preventDefault();var t=document.querySelector(u);if(t)SS.to(t.getBoundingClientRect().top+scrollY-70)}});c.addEventListener('dragstart',function(e){e.preventDefault()})});
bp.onclick=function(){go(Math.round(tg)-1)};bn.onclick=function(){go(Math.round(tg)+1)};
cv.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(Math.round(tg)+1)}else if(e.key==='ArrowLeft'){e.preventDefault();go(Math.round(tg)-1)}});
cv.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)>Math.abs(e.deltaY)&&Math.abs(e.deltaX)>3){e.preventDefault();acc+=e.deltaX;var n=performance.now();if(Math.abs(acc)>50&&n>lock){go(Math.round(tg)+(acc>0?1:-1));acc=0;lock=n+380}}},{passive:false});
addEventListener('resize',function(){geo();render()});geo();render();
if(!RM)new IntersectionObserver(function(e,o){if(e[0].isIntersecting){kick();o.disconnect()}},{threshold:.3}).observe(cv)})();
// faq
$('.fb').forEach(function(b){b.addEventListener('click',function(){var it=b.parentNode,o=it.classList.contains('on');$('.fi').forEach(function(x){x.classList.remove('on');x.firstChild.setAttribute('aria-expanded','false')});if(!o){it.classList.add('on');b.setAttribute('aria-expanded','true')}})});
// scroll-linked
var obj=document.getElementById('obj'),mx=0,my=0;
addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var f=e.target;location.href='mailto:info@agerian.eus?subject='+encodeURIComponent(((window.AG&&AG.mail)||'Aurrekontu eskaera - ')+f.n.value)+'&body='+encodeURIComponent(f.p.value+'\n\n'+f.n.value+' · '+f.e.value)});

// hero: logo as a 3D particle cloud made of round dots (formation, volume, tilt toward cursor, shimmer, dissolve on scroll)
(function(){var cv=document.getElementById('obj'),c=cv.getContext('2d'),P=[],DPR=Math.min(1.5,devicePixelRatio||1),W=0,H=0,S=1,t0=performance.now()+(document.getElementById('zr')&&!RM&&!document.documentElement.classList.contains('zd')?1e7:0),n=(innerWidth<700||(navigator.hardwareConcurrency||8)<=4)?.55:1,tx=0,ty=0,sx=0,sy=0,stride=1,avg=16,lt=0,cX=0,cY=0,tX=0,tY=0,R_=0,tR=0,seen=0,first=true,coarse=matchMedia('(hover:none)').matches,BR=(innerWidth<700?150:230),hero=document.getElementById('hero');
var spr=document.createElement('canvas');spr.width=spr.height=32;(function(){var g=spr.getContext('2d'),q=g.createRadialGradient(16,16,0,16,16,16);q.addColorStop(0,'rgba(255,255,255,1)');q.addColorStop(.55,'rgba(255,255,255,.95)');q.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=q;g.fillRect(0,0,32,32)})();
var A0=[[958,752],[1181,381],[1255,497],[1174,634],[1341,634],[1416,752]],B0=[[1212,330],[1337,330],[1604,752],[1479,752]],CX=1281,CY=541,D=46;
function rp(p,t,st){var o=[],n=p.length;for(var i=0;i<n;i++){var a=p[(i+n-1)%n],b=p[i],c=p[(i+1)%n],l1=Math.hypot(a[0]-b[0],a[1]-b[1]),l2=Math.hypot(c[0]-b[0],c[1]-b[1]),t1=Math.min(t,l1*.45)/l1,t2=Math.min(t,l2*.45)/l2,s=[b[0]+(a[0]-b[0])*t1,b[1]+(a[1]-b[1])*t1],e=[b[0]+(c[0]-b[0])*t2,b[1]+(c[1]-b[1])*t2];for(var k=0;k<=st;k++){var u=k/st,v=1-u;o.push([v*v*s[0]+2*u*v*b[0]+u*u*e[0],v*v*s[1]+2*u*v*b[1]+u*u*e[1]])}}return o}
var A=rp(A0,30,8),B=rp(B0,30,8),PL=[A,B];
function ins(p,x,y){var o=false;for(var i=0,j=p.length-1;i<p.length;j=i++){var a=p[i],b=p[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])o=!o}return o}
function add(x,y,z,w){var a=Math.random()*6.283,r=450+Math.random()*700;P.push({x:x-CX,y:y-CY,z:z,sx:Math.cos(a)*r,sy:(Math.random()-.5)*900,sz:Math.sin(a)*r,ph:Math.random()*6.283,d:Math.random(),w:w,ox:0,oy:0})}
var E=[],tot=0;PL.forEach(function(p){for(var i=0;i<p.length;i++){var a=p[i],b=p[(i+1)%p.length],l=Math.hypot(b[0]-a[0],b[1]-a[1]);E.push([a,b,l]);tot+=l}});
function edge(){var r=Math.random()*tot,e=E[0];for(var i=0;i<E.length;i++){if(r<E[i][2]){e=E[i];break}r-=E[i][2]}var t=Math.random();return[e[0][0]+(e[1][0]-e[0][0])*t+(Math.random()-.5)*5,e[0][1]+(e[1][1]-e[0][1])*t+(Math.random()-.5)*5]}
var k,q;for(k=0;k<5600*n;k++){q=edge();add(q[0],q[1],(Math.random()*2-1)*D,1)}
for(k=0;k<4800*n;k++){q=edge();add(q[0],q[1],Math.random()<.5?D:-D,.95)}
for(k=0;k<3300*n;){var x=958+Math.random()*646,y=330+Math.random()*422;if(ins(A,x,y)||ins(B,x,y)){add(x,y,Math.random()<.5?D:-D,.5);k++}}
for(k=0;k<1400*n;){var x2=958+Math.random()*646,y2=330+Math.random()*422;if(ins(A,x2,y2)||ins(B,x2,y2)){add(x2,y2,(Math.random()*2-1)*D,.32);k++}}
function rs(){var r={width:cv.offsetWidth,height:cv.offsetHeight};W=cv.width=Math.round(r.width*DPR);H=cv.height=Math.round(r.height*DPR);S=Math.min(Math.min(W*.8,860*DPR)/646,H*.68/422);if(RM)fr(performance.now())}
addEventListener('pointermove',function(e){tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5});
function pm(e){var r=hero.getBoundingClientRect(),k=(hero.offsetWidth/r.width)||1;tX=(e.clientX-r.left)*k*DPR;tY=(e.clientY-r.top)*k*DPR;tR=BR*DPR;seen=performance.now();if(first){cX=tX;cY=tY;first=false}}
hero.addEventListener('pointermove',pm);hero.addEventListener('pointerdown',pm);hero.addEventListener('pointerleave',function(){if(!coarse){tR=0;seen=0}});
function fr(now){if(!cv.offsetParent){if(!RM)requestAnimationFrame(fr);return}var t=(now-t0)/1000,sc=RM?0:cl((scrollY-(window.agOff||0))/(innerHeight*.9));if(lt&&!RM){avg=avg*.96+Math.min(100,now-lt)*.04;if(avg>30&&stride<3&&t>2.5){stride++;avg=16}}lt=now;
if(!RM&&scrollY-(window.agOff||0)>innerHeight*1.3){requestAnimationFrame(fr);return}
if(!RM){sx+=(tx-sx)*.16;sy+=(ty-sy)*.16;
if(coarse&&now-seen>2200){tX=W/2+Math.sin(t*.8)*S*646*.32;tY=H/2+Math.cos(t*.6)*S*422*.28;tR=BR*.9*DPR;if(first){cX=tX;cY=tY;first=false}}
R_+=(tR-R_)*.25;cX+=(tX-cX)*.6;cY+=(tY-cY)*.6}
var ang=RM?.2:Math.sin(t*.3)*.1+sx*.7,tl=RM?.08:.08+Math.sin(t*.22)*.04+sy*.45,ca=Math.cos(ang),sa=Math.sin(ang),ct=Math.cos(tl),st=Math.sin(tl),f=900,hw=W/2,hh=H/2;
c.clearRect(0,0,W,H);
for(var i=0;i<P.length;i+=stride){var p=P[i],e=RM?1:cl((t*.8-p.d*1.1)/1.5);e=1-Math.pow(1-e,3);var m=e*(1-sc*.92);
var x=p.sx+(p.x-p.sx)*m,y=p.sy+(p.y-p.sy)*m,z=p.sz+(p.z-p.sz)*m;
if(!RM){x+=Math.sin(t*2.3+p.ph)*1.4;y+=Math.cos(t*2.1+p.ph*1.3)*1.4}
var x1=x*ca+z*sa,z1=-x*sa+z*ca,y1=y*ct-z1*st,z2=y*st+z1*ct,qq=f/(f+z2),
al=p.w*(RM?.9:.6+.4*Math.sin(t*2+p.ph))*Math.min(1,e*1.6)*(1-sc*.85)*(.55+(qq-.8)*1.7);
var px=hw+x1*qq*S,py=hh+y1*qq*S,tox=0,toy=0,bo=1,sb=1;
if(R_>2&&!RM){var dx=px-cX,dy=py-cY,dd=Math.sqrt(dx*dx+dy*dy)||1,w=1-dd/R_;if(w>0){var push=w*w*R_*(.45+.6*p.d),th=w*w*1.9*(1+.25*Math.sin(t*.9)),cs=Math.cos(th),sn=Math.sin(th);tox=dx*cs-dy*sn-dx+dx/dd*push+Math.sin(t*3+p.ph)*w*10*DPR;toy=dx*sn+dy*cs-dy+dy/dd*push+Math.cos(t*2.6+p.ph)*w*10*DPR;bo=1+w*.9;sb=1+w*.5}}
p.ox+=(tox-p.ox)*.4;p.oy+=(toy-p.oy)*.4;al*=bo;
if(al<.04)continue;if(al>1)al=1;c.globalAlpha=al;var sz=(.9+1.3*qq*p.w)*DPR*(stride>1?1.25:1)*sb;c.drawImage(spr,px+p.ox-sz,py+p.oy-sz,sz*2,sz*2)}
c.globalAlpha=1;if(!RM)requestAnimationFrame(fr)}
window.agStart=function(){t0=performance.now()};rs();addEventListener('resize',rs);if(RM)fr(performance.now());else requestAnimationFrame(fr)})();

// footer wordmark: fits full width, letters rise in
(function(){var w=document.getElementById('wmk');if(!w)return;w.innerHTML='AGERIAN'.split('').map(function(ch,i){return'<span style="--i:'+i+'">'+ch+'</span>'}).join('');
function fit(){var cs=getComputedStyle(w.parentNode),box=w.parentNode.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);w.style.fontSize='100px';var sw=w.getBoundingClientRect().width||1;w.style.fontSize=(100*box/sw*.995)+'px'}
fit();addEventListener('resize',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
if(RM){w.classList.add('in','done')}else new IntersectionObserver(function(e,o){if(e[0].isIntersecting){w.classList.add('in');setTimeout(function(){w.classList.add('done')},1700);o.disconnect()}},{threshold:.3}).observe(w)})();

// Nor gara: AGERIAN logo (from the .glb, compacted) in own WebGL renderer; passes in front of / behind the headline on scroll


// onurak accordion: hover/click expands, autoplay with progress line
(function(){var box=document.getElementById('fxs');if(!box)return;var ps=[].slice.call(box.querySelectorAll('.acp')),N=ps.length,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,ht=0;
function set(i){ps.forEach(function(p,k){var on=k===i;p.classList.toggle('on',on);p.setAttribute('aria-expanded',on?'true':'false')})}
ps.forEach(function(p,i){p.querySelector('.aco').addEventListener('click',function(){set(i)});
if(fine)p.addEventListener('pointerenter',function(){clearTimeout(ht);ht=setTimeout(function(){set(i)},130)});p.addEventListener('pointerleave',function(){clearTimeout(ht)});
p.querySelector('.acbar').addEventListener('animationend',function(){if(!RM)set((i+1)%N)})});
new IntersectionObserver(function(e){box.classList.toggle('off',!e[0].isIntersecting)},{threshold:.25}).observe(box);
})();

// four steps: number rolls and titles swap as you scroll through the pinned section
(function(){var sec=document.getElementById('urratsak');if(!sec)return;var its=[].slice.call(sec.querySelectorAll('.sp5i')),rl=document.getElementById('sp5r'),N=its.length,cur=-1;
if(RM){sec.classList.add('static');return}
function upd(){var r=sec.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/Math.max(1,r.height-innerHeight))),k=Math.min(N-1,Math.floor(p*N));if(k===cur)return;cur=k;its.forEach(function(it,i){it.classList.toggle('on',i===k);it.classList.toggle('past',i<k)});rl.style.setProperty('--k',k)}
addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd()})();

;(function(){var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var cc=document.querySelector('.cta .cc');if(!cc)return;cc.classList.add('pf');var cv=document.createElement('canvas');cc.insertBefore(cv,cc.firstChild);var c=cv.getContext('2d'),P=[],W=0,H=0,D=Math.min(2,devicePixelRatio||1),vis=true;
function rs(){var b=cc.getBoundingClientRect();W=cv.width=Math.round((b.width+68)*D);H=cv.height=Math.round((b.height+68)*D);P=[];var n=Math.min(5200,Math.round(b.width*b.height/70)),m=34*D,w=W-2*m,h=H-2*m,th=30*D;for(var i=0;i<n;i++){var u=Math.random(),per=2*(w+h),q=Math.random()*per,px,py;if(q<w){px=q;py=0}else if(q<w+h){px=w;py=q-w}else if(q<2*w+h){px=2*w+h-q;py=h}else{px=0;py=per-q}var o=Math.pow(Math.random(),1.6)*th*(Math.random()<.5?-1:1);var nx=px<1?-1:px>w-1?1:0,ny=py<1?-1:py>h-1?1:0;P.push({x:m+px+(nx?nx*o:(Math.random()-.5)*th*.6),y:m+py+(ny?ny*o:(Math.random()-.5)*th*.6),r:(.6+Math.random()*1.1)*D,a:.4+Math.random()*.6,ph:Math.random()*6.28})}if(RM)dr(0)}
function dr(t){c.clearRect(0,0,W,H);var col=document.documentElement.getAttribute('data-theme')==='light'?'20,20,22':'255,255,255';for(var i=0;i<P.length;i++){var p=P[i],tw=RM?1:.6+.4*Math.sin(t*1.6+p.ph);c.fillStyle='rgba('+col+','+(p.a*tw).toFixed(2)+')';c.fillRect(p.x+(RM?0:Math.sin(t*.7+p.ph)*1.2*D),p.y,p.r,p.r)}}
new IntersectionObserver(function(e){vis=e[0].isIntersecting},{threshold:0}).observe(cc);rs();addEventListener('resize',rs);if(!RM)(function f(now){if(vis)dr(now/1000);requestAnimationFrame(f)})(performance.now())})();

;(function(){var d=document.documentElement,RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!d.classList.contains('ig')||!window.Element||!Element.prototype.animate){d.classList.remove('ig');return}
var it=document.getElementById('intro'),wm=document.getElementById('wm'),fin=false;if(!it||!wm){d.classList.remove('ig');return}
try{sessionStorage.setItem('ag-i','1')}catch(e){}
var dot=it.querySelector('.d'),bar=it.querySelector('.b'),w=it.querySelector('.w'),L=[].slice.call(w.children),E='cubic-bezier(.23,1,.32,1)';
function A(el,k,o){return el.animate(k,Object.assign({fill:'forwards',easing:E},o))}
function end(){if(fin)return;fin=true;d.classList.add('go');d.classList.remove('ig');it.style.display='none';if(window.agStart)window.agStart()}
it.addEventListener('click',function(){end()});
A(dot,[{opacity:0,transform:'translateY(-30vh) scale(.4)'},{opacity:1,transform:'none'}],{duration:700});
A(bar,[{opacity:0,transform:'translateY(-40vh)'},{opacity:1,transform:'none'}],{duration:650,delay:420});
A(bar,[{opacity:1,transform:'none'},{opacity:0,transform:'translate(0,10px) rotate(70deg)'}],{duration:380,delay:1250});
A(dot,[{opacity:1},{opacity:0,transform:'scale(.2)'}],{duration:380,delay:1250});
L.forEach(function(s,i){var r=(Math.random()<.5?-1:1)*(40+Math.random()*80);A(s,[{opacity:0,transform:'translate('+((Math.random()-.5)*160)+'px,'+(-60-Math.random()*90)+'px) rotate('+r+'deg)'},{opacity:1,transform:'none'}],{duration:900,delay:1300+i*70})});
setTimeout(function(){if(fin)return;var a=w.getBoundingClientRect(),b=wm.getBoundingClientRect();
var k=b.width/a.width,dx=b.left+b.width/2-(a.left+a.width/2),dy=b.top+b.height/2-(a.top+a.height/2);
A(w,[{transform:'none'},{transform:'translate('+dx+'px,'+dy+'px) scale('+k+')'}],{duration:1000,easing:'cubic-bezier(.77,0,.175,1)'});
it.style.background='transparent';
d.classList.add('go');if(window.agStart)window.agStart();
setTimeout(end,1050)},2900)})();
;(function(){var d=document.documentElement,t=document.querySelector('.hero .ir .tw');if(!t||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var s=t.getAttribute('data-t'),i=0,dir=1;function step(){i+=dir;t.textContent=s.slice(0,i);var w=dir>0?(i>=s.length?(dir=-1,2600):75):(i<=0?(dir=1,600):38);setTimeout(step,w)}
function start(){d.classList.add('tw-on');t.textContent='';setTimeout(step,300)}
(function w(){if(!document.getElementById('zr')||d.classList.contains('go'))start();else setTimeout(w,150)})()})();

;(function(){var zr=document.getElementById('zr'),d0=document.documentElement;if(!zr||d0.classList.contains('zd')||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var zs=zr.firstChild,zh=document.getElementById('zh'),hero=zh.firstChild,l=zr.querySelector('.zl'),r=zr.querySelector('.zr2'),cue=zr.querySelector('.zc'),d=document.documentElement,W,H,Z,w0,h0,lw,rw,started=false,ticking=false,gap;
function cl(v){return Math.min(1,Math.max(0,v))}function eo(x){return 1-Math.pow(1-x,3)}
function meas(){W=innerWidth;H=innerHeight;Z=zr.offsetHeight-H;window.agOff=Z;wm=hero.querySelector('.wm');var ww=wm.offsetWidth,wh=wm.offsetHeight,hw=hero.offsetWidth,hh=hero.offsetHeight;w0=W<700?W*.5:Math.min(300,Math.max(190,W*.19));var pd=w0*.1,fs=parseFloat(getComputedStyle(wm).fontSize)||100;s0=(w0-2*pd)/ww;h0=.72*fs*s0+2*pd;var cx=wm.offsetLeft+ww/2,cy=wm.offsetTop+wh/2;tx0=W/2-hw/2-s0*(cx-hw/2);ty0=H/2-hh/2-s0*(cy-hh/2+(window.agDy||0)*fs);gap=Math.max(10,W*.012);lw=l.offsetWidth;rw=r.offsetWidth;upd()}
var cp=-1,tp=0,locked=false,wm,s0=.1,tx0=0,ty0=0;function lock(){locked=true;try{sessionStorage.setItem('ag-z','1')}catch(e){}var sy=scrollY;d.classList.add('zd','go');window.agOff=0;var ns=Math.max(0,sy-Z);scrollTo(0,ns);if(window.agShift)window.agShift(sy-ns);removeEventListener('scroll',rq);removeEventListener('resize',meas)}function upd(){ticking=false;tp=cl(-zr.getBoundingClientRect().top/Z);if(cp<0)cp=tp;cp+=(tp-cp)*.12;if(Math.abs(tp-cp)<.0004)cp=tp;else rq();var p=cp,e=eo(cl(p/.92));if(p>=.96&&!locked){lock();return}
var sx=(W-w0)/2*(1-e),sy=(H-h0)/2*(1-e);zh.style.setProperty('--zx',sx+'px');zh.style.setProperty('--zt',sy+'px');zh.style.setProperty('--zr',(26*(1-e))+'px');zh.style.setProperty('--zs',(s0+(1-s0)*e).toFixed(4));zh.style.setProperty('--zx2',(tx0*(1-e)).toFixed(1)+'px');zh.style.setProperty('--zy2',(ty0*(1-e)).toFixed(1)+'px');zh.style.setProperty('--zo',cl((e-.3)/.45).toFixed(3));
if(W<700){var dy=(h0/2*(1-e)+34)+e*H*.5;l.style.transform='translate('+((W-lw)/2)+'px,calc(-50% - '+dy+'px))';r.style.transform='translate('+((W-rw)/2)+'px,calc(-50% + '+dy+'px))';l.style.opacity=r.style.opacity=1-cl(e*1.6)}else{var L=sx;l.style.transform='translate('+(L-gap-lw)+'px,-50%)';r.style.transform='translate('+(W-sx+gap)+'px,-50%)'}
cue.style.opacity=p>.03?0:1;
if(p>.5&&!d.classList.contains('go'))d.classList.add('go')}
function rq(){if(!ticking){ticking=true;requestAnimationFrame(upd)}}
addEventListener('scroll',rq,{passive:true});addEventListener('resize',meas);meas();
function st(){if(started)return;started=true;if(window.agStart)window.agStart()}
if(document.readyState==='complete')setTimeout(st,500);else addEventListener('load',function(){setTimeout(st,500)});setTimeout(st,3500);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(meas)})();

;(function(){var U=[].slice.call(document.querySelectorAll('.ey u'));if(!U.length||matchMedia('(prefers-reduced-motion: reduce)').matches)return;var mx=innerWidth/2,my=innerHeight/2,tk=false;
function upd(){tk=false;U.forEach(function(u){var r=u.parentNode.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=mx-cx,dy=my-cy,d=Math.hypot(dx,dy)||1,k=Math.min(1,d/90),px=dx/d*5*k,py=dy/d*7*k;u.style.transform='translate('+px.toFixed(2)+'px,'+py.toFixed(2)+'px)'})}
function mv(e){var t=e.touches?e.touches[0]:e;mx=t.clientX;my=t.clientY;if(!tk){tk=true;requestAnimationFrame(upd)}}
addEventListener('pointermove',mv,{passive:true});addEventListener('touchmove',mv,{passive:true});addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});upd()})();
;(function(){var sec=document.getElementById('ag-list');if(!sec||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var L=[].slice.call(sec.querySelectorAll('li')),N=L.length,f=0,tf=0,run=false,lh=0,mob=false;
function meas(){lh=sec.querySelector('.agw').offsetHeight;mob=innerWidth<761}
function cl(v){return Math.min(1,Math.max(0,v))}
function draw(){var d=sec.getBoundingClientRect();tf=cl(-d.top/Math.max(1,d.height-innerHeight))*(N-1);f+=(tf-f)*.14;if(Math.abs(tf-f)<.002)f=tf;
for(var i=0;i<N;i++){var x=i-f,a=Math.abs(x),op=a<.5?1-a*.9:Math.max(0,.55-(a-.5)*.2-(a>2.5?(a-2.5)*.2:0));if(mob&&x<-.3)op*=Math.max(0,1+x*1.4);var s=L[i].style;s.transform='translateY('+(x*lh).toFixed(1)+'px)';s.opacity=Math.max(0,a<.5?1-a*.5:.2*Math.max(0,1-(a-.5)*.25)).toFixed(3);s.filter=a<.08?'none':'blur('+Math.min(a*1.2,4).toFixed(2)+'px)'}
if(f!==tf)requestAnimationFrame(draw);else run=false}
function rq(){if(!run){run=true;requestAnimationFrame(draw)}}
addEventListener('scroll',rq,{passive:true});addEventListener('resize',function(){meas();rq()});meas();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){meas();rq()});rq()})();

;(function(){var s=document.getElementById('ag-list'),n=document.getElementById('nbc');if(!s||!n||!window.IntersectionObserver)return;n.style.transition='opacity .45s';new IntersectionObserver(function(e){n.style.opacity=e[0].isIntersecting?'0':''},{threshold:0}).observe(s)})();
;(function(){var f=document.getElementById('fqf');if(!f)return;f.addEventListener('submit',function(e){e.preventDefault();var q=f.q.value.trim();if(!q)return;location.href='mailto:info@agerian.eus?subject='+encodeURIComponent(((window.AG&&AG.mail)||'Galdera - ')+'FAQ')+'&body='+encodeURIComponent(q)})})();
