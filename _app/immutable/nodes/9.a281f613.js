import{S as R,i as O,s as P,k as _,q as T,l as v,m as y,r as N,h as f,p as C,b as E,E as m,u as B,G as H,y as A,z as F,A as G,F as U,N as te,g as M,d as V,B as Y,o as ne,w as X,a as k,c as D,n as w,H as Z,C as le,v as se,f as re,O as J}from"../chunks/index.823f8282.js";import"../chunks/paths.32936cd5.js";function ae(o){let e,s,t;return{c(){e=_("h1"),s=T('Good name "E" to random number: '),t=T(o[0]),this.h()},l(n){e=v(n,"H1",{style:!0});var r=y(e);s=N(r,'Good name "E" to random number: '),t=N(r,o[0]),r.forEach(f),this.h()},h(){C(e,"text-align","center")},m(n,r){E(n,e,r),m(e,s),m(e,t)},p(n,[r]){r&1&&B(t,n[0])},i:H,o:H,d(n){n&&f(e)}}}function oe(o,e,s){var t=0;function n(){console.log("changing number");const r=Math.floor(Math.random()*100)+1;s(0,t=r)}return[t,n]}class ie extends R{constructor(e){super(),O(this,e,oe,ae,P,{changeNumber:1})}get changeNumber(){return this.$$.ctx[1]}}function ue(o){let e,s,t,n,r={};return e=new ie({props:r}),o[2](e),{c(){A(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,u){G(e,l,u),s=!0,t||(n=U(window,"keydown",te(o[1])),t=!0)},p(l,[u]){const c={};e.$set(c)},i(l){s||(M(e.$$.fragment,l),s=!0)},o(l){V(e.$$.fragment,l),s=!1},d(l){o[2](null),Y(e,l),t=!1,n()}}}function ce(o,e,s){let t;function n(l){switch(l.keyCode){case 69:t.changeNumber();break}}ne(()=>{t.changeNumber()});function r(l){X[l?"unshift":"push"](()=>{t=l,s(0,t)})}return[t,n,r]}class fe extends R{constructor(e){super(),O(this,e,ce,ue,P,{})}}let K=["January","February","March","June","October"];function me(){const o=Math.floor(Math.random()*6)+1,e=Math.floor(Math.random()*K.length);let s={label:"",number:0};return s.label=K[e],s.number=o,s}function x(){return 2}function he(o,e,s){return[x]}class de extends R{constructor(e){super(),O(this,e,he,null,P,{b:0})}get b(){return x}}function L(o){let e,s,t=o[0].label+"",n,r,l,u,c=o[0].number+"",h;return{c(){e=_("p"),s=T("You name is "),n=T(t),r=k(),l=_("p"),u=T("You rolled a "),h=T(c),this.h()},l(a){e=v(a,"P",{class:!0,style:!0});var i=y(e);s=N(i,"You name is "),n=N(i,t),i.forEach(f),r=D(a),l=v(a,"P",{class:!0});var d=y(l);u=N(d,"You rolled a "),h=N(d,c),d.forEach(f),this.h()},h(){w(e,"class","text svelte-1y787oy"),C(e,"margin-top","10px"),w(l,"class","text svelte-1y787oy")},m(a,i){E(a,e,i),m(e,s),m(e,n),E(a,r,i),E(a,l,i),m(l,u),m(l,h)},p(a,i){i&1&&t!==(t=a[0].label+"")&&B(n,t),i&1&&c!==(c=a[0].number+"")&&B(h,c)},d(a){a&&f(e),a&&f(r),a&&f(l)}}}function pe(o){let e,s,t,n,r,l,u,c,h,a,i,d,g,j,I,ee={};e=new de({props:ee}),o[6](e);let $=o[0]!==void 0&&L(o);return{c(){A(e.$$.fragment),s=k(),t=_("div"),n=_("button"),r=T("Change Theme"),l=k(),u=_("div"),c=_("div"),h=k(),a=_("button"),i=T("Roll the dice"),d=k(),$&&$.c(),this.h()},l(p){F(e.$$.fragment,p),s=D(p),t=v(p,"DIV",{class:!0});var b=y(t);n=v(b,"BUTTON",{class:!0});var q=y(n);r=N(q,"Change Theme"),q.forEach(f),l=D(b),u=v(b,"DIV",{style:!0});var S=y(u);c=v(S,"DIV",{class:!0}),y(c).forEach(f),S.forEach(f),h=D(b),a=v(b,"BUTTON",{class:!0});var z=y(a);i=N(z,"Roll the dice"),z.forEach(f),d=D(b),$&&$.l(b),b.forEach(f),this.h()},h(){w(n,"class","roll-btn svelte-1y787oy"),w(c,"class","circle svelte-1y787oy"),C(u,"--theme-color",o[2]),w(a,"class","roll-btn svelte-1y787oy"),w(t,"class","show svelte-1y787oy")},m(p,b){G(e,p,b),E(p,s,b),E(p,t,b),m(t,n),m(n,r),m(t,l),m(t,u),m(u,c),m(t,h),m(t,a),m(a,i),m(t,d),$&&$.m(t,null),g=!0,j||(I=[U(n,"click",o[4]),U(a,"click",o[3])],j=!0)},p(p,[b]){const q={};e.$set(q),(!g||b&4)&&C(u,"--theme-color",p[2]),p[0]!==void 0?$?$.p(p,b):($=L(p),$.c(),$.m(t,null)):$&&($.d(1),$=null)},i(p){g||(M(e.$$.fragment,p),g=!0)},o(p){V(e.$$.fragment,p),g=!1},d(p){o[6](null),Y(e,p),p&&f(s),p&&f(t),$&&$.d(),j=!1,Z(I)}}}function _e(o,e,s){let t,{name:n}=e,r,l="black";async function u(){n!=""&&(s(0,t={label:"",number:0}),s(0,t=me()),s(0,t.label=n,t))}function c(){l=="black"?s(2,l="white"):l=="white"&&s(2,l="black")}function h(a){X[a?"unshift":"push"](()=>{r=a,s(1,r)})}return o.$$set=a=>{"name"in a&&s(5,n=a.name)},[t,r,l,u,c,n,h]}class ve extends R{constructor(e){super(),O(this,e,_e,pe,P,{name:5})}}const ge=""+new URL("../assets/Irys.ecc46d3d.gif",import.meta.url).href;function W(o){let e,s,t,n,r,l,u;return{c(){e=_("div"),s=_("h2"),t=T("Enter your name"),n=k(),r=_("input"),this.h()},l(c){e=v(c,"DIV",{class:!0});var h=y(e);s=v(h,"H2",{style:!0});var a=y(s);t=N(a,"Enter your name"),a.forEach(f),n=D(h),r=v(h,"INPUT",{class:!0}),h.forEach(f),this.h()},h(){C(s,"margin-left","1vw"),w(r,"class","input-text svelte-ef2cjg"),w(e,"class","input svelte-ef2cjg")},m(c,h){E(c,e,h),m(e,s),m(s,t),m(e,n),m(e,r),J(r,o[0]),l||(u=[U(r,"change",o[4]),U(r,"input",o[5])],l=!0)},p(c,h){h&1&&r.value!==c[0]&&J(r,c[0])},d(c){c&&f(e),l=!1,Z(u)}}}function Q(o){let e,s,t,n,r;return e=new ve({props:{name:o[0]}}),n=new fe({}),{c(){A(e.$$.fragment),s=k(),t=_("div"),A(n.$$.fragment),this.h()},l(l){F(e.$$.fragment,l),s=D(l),t=v(l,"DIV",{style:!0});var u=y(t);F(n.$$.fragment,u),u.forEach(f),this.h()},h(){C(t,"margin-top","2vw")},m(l,u){G(e,l,u),E(l,s,u),E(l,t,u),G(n,t,null),r=!0},p(l,u){const c={};u&1&&(c.name=l[0]),e.$set(c)},i(l){r||(M(e.$$.fragment,l),M(n.$$.fragment,l),r=!0)},o(l){V(e.$$.fragment,l),V(n.$$.fragment,l),r=!1},d(l){Y(e,l),l&&f(s),l&&f(t),Y(n)}}}function $e(o){let e,s,t,n,r,l,u,c,h,a=o[2]==!1&&W(o),i=o[2]==!0&&o[1]!=""&&Q(o);return{c(){e=_("div"),s=_("script"),t=k(),n=_("div"),r=_("img"),u=k(),a&&a.c(),c=k(),i&&i.c(),this.h()},l(d){e=v(d,"DIV",{});var g=y(e);s=v(g,"SCRIPT",{});var j=y(s);j.forEach(f),t=D(g),n=v(g,"DIV",{class:!0});var I=y(n);r=v(I,"IMG",{class:!0,src:!0,alt:!0}),u=D(I),a&&a.l(I),c=D(I),i&&i.l(I),I.forEach(f),g.forEach(f),this.h()},h(){w(r,"class","avatar svelte-ef2cjg"),le(r.src,l=ge)||w(r,"src",l),w(r,"alt","Avatar"),w(n,"class","main svelte-ef2cjg")},m(d,g){E(d,e,g),m(e,s),m(e,t),m(e,n),m(n,r),m(n,u),a&&a.m(n,null),m(n,c),i&&i.m(n,null),h=!0},p(d,[g]){d[2]==!1?a?a.p(d,g):(a=W(d),a.c(),a.m(n,c)):a&&(a.d(1),a=null),d[2]==!0&&d[1]!=""?i?(i.p(d,g),g&6&&M(i,1)):(i=Q(d),i.c(),M(i,1),i.m(n,null)):i&&(se(),V(i,1,1,()=>{i=null}),re())},i(d){h||(M(i),h=!0)},o(d){V(i),h=!1},d(d){d&&f(e),a&&a.d(),i&&i.d()}}}function be(o,e,s){let t="",n="",r=!1;function l(){s(2,r=!0),s(1,n=t),console.log("Done edit text")}const u=()=>l();function c(){t=this.value,s(0,t)}return[t,n,r,l,u,c]}class ye extends R{constructor(e){super(),O(this,e,be,$e,P,{})}}function we(o){let e,s,t;return s=new ye({}),{c(){e=_("div"),A(s.$$.fragment)},l(n){e=v(n,"DIV",{});var r=y(e);F(s.$$.fragment,r),r.forEach(f)},m(n,r){E(n,e,r),G(s,e,null),t=!0},p:H,i(n){t||(M(s.$$.fragment,n),t=!0)},o(n){V(s.$$.fragment,n),t=!1},d(n){n&&f(e),Y(s)}}}class De extends R{constructor(e){super(),O(this,e,null,we,P,{})}}export{De as component};
