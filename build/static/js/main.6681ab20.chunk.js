(this["webpackJsonpiris-color-theory"]=this["webpackJsonpiris-color-theory"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),o=n(31),i=(n(41),n(8)),a=n(3),s=n(12),l=n(1),u=function(e){var t=e.generate,n=e.handleScheme,r=e.scheme,o=Object(c.useState)(!1),i=Object(a.a)(o,2),u=i[0],d=i[1],j=function(e){e.preventDefault(),d(!u)},h=Object(c.useState)(window.innerWidth>=900),b=Object(a.a)(h,2),m=b[0],O=b[1],f=function(){O(window.innerWidth>=900)};return Object(c.useEffect)((function(){return window.addEventListener("resize",f),function(){return window.removeEventListener("resize",f)}})),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsxs)("div",{className:"tools",children:[Object(l.jsx)("div",{onClick:t,id:"generate",children:Object(l.jsx)(s.b,{})}),m?Object(l.jsx)("div",{name:"color scheme",id:"color-scheme",onClick:j,children:r}):Object(l.jsxs)("div",{className:u?"open":"closed",id:"menu",onClick:j,children:[Object(l.jsx)(s.a,{id:"bars"}),Object(l.jsx)("button",{onClick:n,value:"Monochromatic",children:"MonoChromatic"}),Object(l.jsx)("button",{onClick:n,value:"Analogous",children:"Analogous"}),Object(l.jsx)("button",{onClick:n,value:"Complementary",children:"Complementary"}),Object(l.jsx)("button",{onClick:n,value:"Split Complementary",children:"Split Complementary"}),Object(l.jsx)("button",{onClick:n,value:"Triadic",children:"Triadic"}),Object(l.jsx)("button",{onClick:n,value:"Square",children:"Square"})]})]}),m?Object(l.jsxs)("div",{className:u?"open":"closed",id:"menu",onClick:j,children:[Object(l.jsx)("button",{onClick:n,value:"Monochromatic",children:"MonoChromatic"}),Object(l.jsx)("button",{onClick:n,value:"Analogous",children:"Analogous"}),Object(l.jsx)("button",{onClick:n,value:"Complementary",children:"Complementary"}),Object(l.jsx)("button",{onClick:n,value:"Split Complementary",children:"Split Complementary"}),Object(l.jsx)("button",{onClick:n,value:"Triadic",children:"Triadic"}),Object(l.jsx)("button",{onClick:n,value:"Square",children:"Square"})]}):null]})},d=r.a.memo(u),j=function(e){var t=e.h,n=e.s,r=e.l,o=e.i,i=e.hslToHex,s=e.name,u=Object(c.useState)(window.innerWidth>=900),d=Object(a.a)(u,2),j=d[0],h=d[1],b=Object(c.useState)(s||"unknowncolor"),m=Object(a.a)(b,2),O=m[0],f=m[1],v=function(){h(window.innerWidth>=900)};Object(c.useEffect)((function(){return window.addEventListener("resize",v),function(){return window.removeEventListener("resize",v)}}));var p=i(t,n,r).toUpperCase();return Object(l.jsx)("div",{className:"color-block",style:{backgroundColor:"hsl(".concat(t,", ").concat(n,"%, ").concat(r,"%)")},children:Object(l.jsxs)("ul",{className:"color-code",children:[Object(l.jsx)("li",{className:"hex",children:p}),Object(l.jsx)("li",{className:"rgb",children:function(e){var t=(e=e.slice(1)).match(/.{1,2}/g);return"rgb(".concat(parseInt(t[0],16),", ").concat(parseInt(t[1],16),", ").concat(parseInt(t[2],16),")")}(p)}),Object(l.jsx)("li",{value:O,style:O==s?{cursor:"default"}:null,onClick:j?null:function(){f(O==p?s:p)},children:O})]})},o)},h=r.a.memo(j),b=n(32),m=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{className:n?"open-instructions":"instructions",onClick:function(){r(!n)},children:[Object(l.jsx)(b.a,{id:"help"}),Object(l.jsxs)("ul",{className:"instructions-list",children:[Object(l.jsx)("li",{children:"Select color pallete theme."}),Object(l.jsxs)("li",{children:["Press ",Object(l.jsx)(s.b,{style:{display:"inline",position:"relative",top:"3px"}})," or ",Object(l.jsx)("div",{style:{display:"inline",fontStyle:"italic"},children:"enter"})," to generate random color pallete."]}),Object(l.jsx)("li",{children:"Use the mouse scroll or touchpad scroll to increase or decrease color count."}),Object(l.jsx)("li",{children:"If in mobile view, click color name to display hex code."})]})]})},O=r.a.memo(m),f=function(){return Object(l.jsxs)("div",{className:"logo",children:[" iris ",Object(l.jsx)("div",{id:"ct",children:"\xa0 color theory"})]})},v=r.a.memo(f),p=function(){var e=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},t=n(43),r=Object(c.useState)("Monochromatic"),o=Object(a.a)(r,2),s=o[0],u=o[1],j=Object(c.useState)(4),b=Object(a.a)(j,2),m=b[0],f=b[1],p=Object(c.useState)([e(0,359),e(20,80),e(20,80)]),x=Object(a.a)(p,2),C=x[0],k=x[1],S=function(t){for(var n=[],c=e(0,t.length-1),r=c+1;c>=0||r<t.length;)c>=0&&(n.push(t[c]),c--),r<t.length&&(n.push(t[r]),r++);return n},y={Monochromatic:function(t,n){for(var c=0,r=[],o=Object(i.a)(t);c<n;){var a=e(-20,-1),s=e(-20,-1);o[1]=o[1]+a<20?e(20,95):o[1]+a,o[2]=o[2]+s<20?e(20,95):o[2]+s,r.push([o[0],o[1],o[2]]),c++}return S(r)},Analogous:function(t,n){for(var c=0,r=0,o=[],a=Object(i.a)(t),s=[0,-35,-70,35,70];c<n;){var l=e(-20,-1),u=e(-20,-1);a[1]=a[1]+l<20?e(20,95):a[1]+l,a[2]=a[2]+u<20?e(20,95):a[2]+u,r>=5&&(r=0),o.push([a[0]+s[r]<0?a[0]-s[r]+360:a[0]+s[r]>359?a[0]+s[r]-360:a[0]+s[r],a[1],a[2]]),c++,r++}return S(o)},Complementary:function(t,n){for(var c=0,r=[],o=Object(i.a)(t),a=o[0]-180<0?360+o[0]-180:o[0]-180;c<n;){if(c%2==0){var s=e(-20,-1),l=e(-20,-1);o[1]=o[1]+s<20?e(20,95):o[1]+s,o[2]=o[2]+l<20?e(20,95):o[2]+l,r.push([o[0],o[1],o[2]])}else{var u=e(-20,-1),d=e(-20,-1);r.push([a,o[1]+u<20?e(20,95):o[1]+u,o[2]+d<20?e(20,95):o[2]+d])}c++}return S(r)},"Split Complementary":function(t,n){for(var c=0,r=[],o=Object(i.a)(t),a=o[0]-180<0?360+o[0]-180:o[0]-180;c<n;){if(c%2==0)r.push([o[0],o[1],o[2]]);else{r.push([a,o[1],o[2]]);var s=e(-50,-30),l=e(-50,-30);o[1]=o[1]+s<20?e(50,95):o[1]+s,o[2]=o[2]+l<20?e(50,95):o[2]+l}c++}return S(r)},Triadic:function(t,n){for(var c=0,r=0,o=[],a=Object(i.a)(t),s=a[0]-120<0?360+a[0]-120:a[0]-120,l=s-120<0?360+s-120:s-120,u=["first","second","third"];c<n;){if(r>2&&(r=0),"first"==u[r])o.push([a[0],a[1],a[2]]);else if("second"==u[r]){var d=e(-20,1),j=e(-20,1);o.push([s,a[1]+d<20?e(20,95):a[1]+d,a[2]+j<20?e(20,95):a[2]+j])}else if("third"==u[r]){var h=e(-20,1),b=e(-20,1);o.push([l,a[1]+h<20?e(20,95):a[1]+h,a[2]+b<20?e(20,95):a[2]+b]),a[1]=a[1]+h<20?e(20,95):a[1]+h,a[2]=a[2]+b<20?e(20,95):a[2]+b}c++,r++}return S(o)},Square:function(t,n){for(var c=0,r=0,o=[],a=Object(i.a)(t),s=a[0]-90<0?360+a[0]-90:a[0]-90,l=s-90<0?360+s-90:s-90,u=l-90<0?360+l-90:l-90,d=["first","second","third","fourth"];c<n;){if(r>3&&(r=0),"first"==d[r])o.push([a[0],a[1],a[2]]);else if("second"==d[r]){var j=e(-20,1),h=e(-20,1);o.push([s,a[1]+j<20?e(20,95):a[1]+j,a[2]+h<20?e(20,95):a[2]+h])}else if("third"==d[r]){var b=e(-20,1),m=e(-20,1);o.push([l,a[1]+b<20?e(20,95):a[1]+b,a[2]+m<20?e(20,95):a[2]+m])}else if("fourth"==d[r]){var O=e(-20,1),f=e(-20,1);o.push([u,a[1]+O<20?e(20,95):a[1]+O,a[2]+f<20?e(20,95):a[2]+f]),a[1]=a[1]+O<20?e(20,95):a[1]+O,a[2]=a[2]+f<20?e(20,95):a[2]+f}c++,r++}return S(o)}},w=function(e,t,n){n/=100;var c=t*Math.min(n,1-n)/100,r=function(t){var r=(t+e/30)%12,o=n-c*Math.max(Math.min(r-3,9-r,1),-1);return Math.round(255*o).toString(16).padStart(2,"0")};return"#".concat(r(0)).concat(r(8)).concat(r(4))},g=function(){k([e(0,360),e(20,80),e(20,80)])};Object(c.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||(e.preventDefault(),g())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);return Object(l.jsxs)("div",{className:"colors",children:[Object(l.jsx)(v,{}),Object(l.jsxs)("div",{className:"color-blocks",onWheel:function(e){m+1<=8&&e.deltaY<0?f(m+1):m-1>=4&&e.deltaY>0&&f(m-1)},children:[y[s](C,m).map((function(e,n){var c=Object(a.a)(e,3),r=c[0],o=c[1],i=c[2];return Object(l.jsx)(h,{name:t(w(r,o,i),{pick:["ntc"],distance:"deltaE"}).ntc[0].name,h:r,s:o,l:i,i:n,hslToHex:w},n)})),Object(l.jsx)(d,{generate:g,handleScheme:function(e){e.preventDefault(),u(e.target.value)},scheme:s}),Object(l.jsx)(O,{})]})]})};function x(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(p,{})})}var C=document.getElementById("root");Object(o.createRoot)(C).render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(x,{})}))},41:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.6681ab20.chunk.js.map