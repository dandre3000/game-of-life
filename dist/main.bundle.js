(()=>{"use strict";var e={375:(e,t,n)=>{n.d(t,{Et:()=>v,s:()=>f,Xl:()=>m,Jz:()=>w,jR:()=>p,dp:()=>y});const o=["purple","indigo","blue","cyan","green","lightgreen","yellow","gold","orange","orangered","red"];class r{constructor(e,t){this.row=e,this.col=t,this.x=t*y,this.y=e*y,this.value=0}toggle(){return 0==this.value?this.value=1:this.value=0}update(){let e=0;for(let t=this.row-1;t<this.row+2;t++)for(let n=this.col-1;n<this.col+2;n++)t==this.row&&n==this.col||1==a[t<0?a.length-1:t>a.length-1?0:t][n>a[0].length-1?0:n<0?a[0].length-1:n].value&&e++;this.value>0?(({S:e},t)=>{for(let n in e)if(t==e[n])return!0;return!1})(p,e)||(a.shadow[this.row][this.col].value=this.value+1):a.shadow[this.row][this.col].value=(({B:e},t)=>{for(let n in e)if(t==e[n])return!0;return!1})(p,e),a.shadow[this.row][this.col].value>=p.G&&(a.shadow[this.row][this.col].value=0)}draw(e){e.fillStyle=this.value?o[this.value-1]:"white",e.fillRect(a.x+this.x+.5,a.y+this.y+.5,y-1,y-1)}}const a=window.matrix=[];a.x=16,a.y=16,a.shadow=[],a.init=()=>{for(let e=0;e<36;e++){a.push([]),a.shadow.push([]);for(let t=0;t<48;t++)a[e].push(new r(e,t)),a.shadow[e].push(new r(e,t))}},a.clear=()=>{a.forEach(((e,t)=>{e.forEach(((e,n)=>{e.value=0,a.shadow[t][n].value=0}))}))},a.random=()=>{a.forEach(((e,t)=>{e.forEach(((e,n)=>{e.value=Math.round(Math.random()),a.shadow[t][n].value=0}))}))},a.update=()=>{a.forEach(((e,t)=>{e.forEach(((e,t)=>{e.update()}))})),a.forEach(((e,t)=>{e.forEach(((e,n)=>{e.value=a.shadow[t][n].value}))}))},a.draw=()=>{a.forEach(((e,t)=>{e.forEach(((e,t)=>{e.draw(f.getContext("2d"))}))}))};const i={Life:{B:[3],S:[2,3],G:2},"Day & Night":{B:[3,6,7,8],S:[3,4,6,7,8],G:2},Seeds:{B:[2],S:[],G:2},Lines:{B:[4,5,8],S:[0,1,2,3,4,5],G:7},"Star Wars":{B:[2],S:[3,4,5],G:4}};let s=0,l=0,d=0,c=!1,u=!1;const h=()=>{const e=1e3/v;let t=window.performance.now(),n=0==l?0:t-l;for(l=t,s+=n;c&&s>=e;)u&&a.update(),s-=e;m.fillStyle="black",m.fillRect(0,0,f.width,f.height),a.draw(m),m.fillStyle="red",m.fillRect(w.x,w.y,1,1),c?d=requestAnimationFrame(h):cancelAnimationFrame(d)};var f,m,v=30,p={...i.Life};const w={x:0,y:0},y=16;window.addEventListener("DOMContentLoaded",(e=>{(f=document.querySelector("canvas")).width=800,f.height=600,m=f.getContext("2d"),f.addEventListener("mousemove",(e=>{w.x=e.offsetX,w.y=e.offsetY})),f.addEventListener("mousedown",(e=>{for(let t in a)for(let n in a[t])e.offsetX>=a.x+a[t][n].x&&e.offsetX<=a.x+a[t][n].x+y-1&&e.offsetY>=a.y+a[t][n].y&&e.offsetY<=a.y+a[t][n].y+y-1&&(a.shadow[t][n].toggle(),a[t][n].toggle())}));const t=document.getElementById("play");t.addEventListener("click",(e=>{t.innerText=(u=!u)?"Play":"Pause"})),document.getElementById("clear").addEventListener("click",(e=>{a.clear()})),document.getElementById("random").addEventListener("click",(e=>{a.random()}));const n=document.querySelector("#rules ~ .dropdown-content");Object.getOwnPropertyNames(i).forEach((e=>{const t=document.createElement("li");t.innerText=e,t.addEventListener("click",(t=>{name=e,p={...i[name]},o.value=p.B,r.value=p.S,s.value=p.G})),n.appendChild(t)}));const o=document.getElementById("B-input");o.addEventListener("input",(e=>{const t=[],n=o.value.replace(/,*/g,"");for(let e in n){const o=Number(n[e]);if(isNaN(o))return!1;t.push(o)}p.B=t}));const r=document.getElementById("S-input");r.addEventListener("input",(e=>{const t=[],n=r.value.replace(/,*/g,"");for(let e in n){const o=Number(n[e]);if(isNaN(o))return!1;t.push(o)}p.S=t}));const s=document.getElementById("G-input");s.addEventListener("input",(e=>{p.G=s.value}));const g=document.getElementById("fps");document.querySelector("#fps+span").innerText=v=g.value,g.addEventListener("input",(e=>{document.querySelector("#fps+span").innerText=v=g.value})),a.init(),(()=>{if(c)throw new Error("timeStep is already running: cannot start another animation frame request");l=0,c=!0,d=requestAnimationFrame(h)})()}))}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(375)})();
//# sourceMappingURL=main.bundle.js.map