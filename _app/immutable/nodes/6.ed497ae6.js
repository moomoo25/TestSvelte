import{S as A,i as F,s as G,k as g,q,l as b,m as y,r as R,h as p,p as te,b as T,E as c,u as x,G as K,y as C,z as P,A as V,F as S,N as le,g as M,d as z,B as j,o as ae,w as ne,a as D,c as I,n as E,C as oe,O as Q,v as ie,f as ue,H as ce}from"../chunks/index.823f8282.js";import"../chunks/paths.4335c379.js";let X=["January","February","March","June","October"];function fe(){const l=Math.floor(Math.random()*6)+1,e=Math.floor(Math.random()*X.length);let r={label:"",number:0};return r.label=X[e],r.number=l,r}function re(){return 2}function me(l,e,r){return[re]}class se extends A{constructor(e){super(),F(this,e,me,null,G,{b:0})}get b(){return re}}function de(l){let e,r,t;return{c(){e=g("h1"),r=q('Good name "E" to random number: '),t=q(l[0]),this.h()},l(n){e=b(n,"H1",{style:!0});var s=y(e);r=R(s,'Good name "E" to random number: '),t=R(s,l[0]),s.forEach(p),this.h()},h(){te(e,"text-align","center")},m(n,s){T(n,e,s),c(e,r),c(e,t)},p(n,[s]){s&1&&x(t,n[0])},i:K,o:K,d(n){n&&p(e)}}}function pe(l,e,r){var t=0;function n(){console.log("changing number");const s=Math.floor(Math.random()*100)+1;r(0,t=s)}return[t,n]}class he extends A{constructor(e){super(),F(this,e,pe,de,G,{changeNumber:1})}get changeNumber(){return this.$$.ctx[1]}}function _e(l){let e,r,t,n,s={};return e=new he({props:s}),l[2](e),{c(){C(e.$$.fragment)},l(a){P(e.$$.fragment,a)},m(a,m){V(e,a,m),r=!0,t||(n=S(window,"keydown",le(l[1])),t=!0)},p(a,[m]){const u={};e.$set(u)},i(a){r||(M(e.$$.fragment,a),r=!0)},o(a){z(e.$$.fragment,a),r=!1},d(a){l[2](null),j(e,a),t=!1,n()}}}function $e(l,e,r){let t;function n(a){switch(a.keyCode){case 69:t.changeNumber();break}}ae(()=>{t.changeNumber()});function s(a){ne[a?"unshift":"push"](()=>{t=a,r(0,t)})}return[t,n,s]}class ge extends A{constructor(e){super(),F(this,e,$e,_e,G,{})}}function Z(l){let e,r,t=l[0].label+"",n,s,a,m,u=l[0].number+"",_;return{c(){e=g("p"),r=q("You name is "),n=q(t),s=D(),a=g("p"),m=q("You rolled a "),_=q(u),this.h()},l(f){e=b(f,"P",{class:!0});var i=y(e);r=R(i,"You name is "),n=R(i,t),i.forEach(p),s=I(f),a=b(f,"P",{class:!0});var o=y(a);m=R(o,"You rolled a "),_=R(o,u),o.forEach(p),this.h()},h(){E(e,"class","text svelte-1bezjqs"),E(a,"class","text svelte-1bezjqs")},m(f,i){T(f,e,i),c(e,r),c(e,n),T(f,s,i),T(f,a,i),c(a,m),c(a,_)},p(f,i){i&1&&t!==(t=f[0].label+"")&&x(n,t),i&1&&u!==(u=f[0].number+"")&&x(_,u)},d(f){f&&p(e),f&&p(s),f&&p(a)}}}function be(l){let e,r,t,n,s,a,m,u,_,f={};e=new se({props:f}),l[4](e);let i=l[0]!==void 0&&Z(l);return{c(){C(e.$$.fragment),r=D(),t=g("div"),n=g("button"),s=q("Roll the dice"),a=D(),i&&i.c(),this.h()},l(o){P(e.$$.fragment,o),r=I(o),t=b(o,"DIV",{class:!0});var $=y(t);n=b($,"BUTTON",{class:!0});var v=y(n);s=R(v,"Roll the dice"),v.forEach(p),a=I($),i&&i.l($),$.forEach(p),this.h()},h(){E(n,"class","roll-btn svelte-1bezjqs"),E(t,"class","show svelte-1bezjqs")},m(o,$){V(e,o,$),T(o,r,$),T(o,t,$),c(t,n),c(n,s),c(t,a),i&&i.m(t,null),m=!0,u||(_=S(n,"click",l[2]),u=!0)},p(o,[$]){const v={};e.$set(v),o[0]!==void 0?i?i.p(o,$):(i=Z(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i(o){m||(M(e.$$.fragment,o),m=!0)},o(o){z(e.$$.fragment,o),m=!1},d(o){l[4](null),j(e,o),o&&p(r),o&&p(t),i&&i.d(),u=!1,_()}}}function ve(l,e,r){let t,{name:n}=e,s;async function a(){r(0,t={label:"",number:0}),r(0,t=fe()),r(0,t.label=n,t)}function m(u){ne[u?"unshift":"push"](()=>{s=u,r(1,s)})}return l.$$set=u=>{"name"in u&&r(3,n=u.name)},[t,s,a,n,m]}class ye extends A{constructor(e){super(),F(this,e,ve,be,G,{name:3})}}const we=""+new URL("../assets/Irys.ecc46d3d.gif",import.meta.url).href;function ee(l){let e,r;return e=new ge({}),{c(){C(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,n){V(e,t,n),r=!0},i(t){r||(M(e.$$.fragment,t),r=!0)},o(t){z(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function ke(l){let e,r,t,n,s,a,m,u,_,f,i,o,$,v,U,N,B,O,J,L;v=new se({}),N=new ye({props:{name:l[0]}});let d=l[1]==!0&&ee();return{c(){e=g("div"),r=g("script"),t=D(),n=g("div"),s=g("img"),m=D(),u=g("div"),_=g("h2"),f=q("Enter your name"),i=D(),o=g("input"),$=D(),C(v.$$.fragment),U=D(),C(N.$$.fragment),B=D(),d&&d.c(),this.h()},l(h){e=b(h,"DIV",{});var w=y(e);r=b(w,"SCRIPT",{});var Y=y(r);Y.forEach(p),t=I(w),n=b(w,"DIV",{class:!0});var k=y(n);s=b(k,"IMG",{class:!0,src:!0,alt:!0}),m=I(k),u=b(k,"DIV",{class:!0});var H=y(u);_=b(H,"H2",{style:!0});var W=y(_);f=R(W,"Enter your name"),W.forEach(p),i=I(H),o=b(H,"INPUT",{class:!0}),H.forEach(p),$=I(k),P(v.$$.fragment,k),U=I(k),P(N.$$.fragment,k),B=I(k),d&&d.l(k),k.forEach(p),w.forEach(p),this.h()},h(){E(s,"class","avatar svelte-ikk12m"),oe(s.src,a=we)||E(s,"src",a),E(s,"alt","Avatar"),te(_,"margin-left","1vw"),E(o,"class","input-text svelte-ikk12m"),E(u,"class","input svelte-ikk12m"),E(n,"class","main svelte-ikk12m")},m(h,w){T(h,e,w),c(e,r),c(e,t),c(e,n),c(n,s),c(n,m),c(n,u),c(u,_),c(_,f),c(u,i),c(u,o),Q(o,l[0]),c(n,$),V(v,n,null),c(n,U),V(N,n,null),c(n,B),d&&d.m(n,null),O=!0,J||(L=[S(o,"change",l[3]),S(o,"input",l[4])],J=!0)},p(h,[w]){w&1&&o.value!==h[0]&&Q(o,h[0]);const Y={};w&1&&(Y.name=h[0]),N.$set(Y),h[1]==!0?d?w&2&&M(d,1):(d=ee(),d.c(),M(d,1),d.m(n,null)):d&&(ie(),z(d,1,1,()=>{d=null}),ue())},i(h){O||(M(v.$$.fragment,h),M(N.$$.fragment,h),M(d),O=!0)},o(h){z(v.$$.fragment,h),z(N.$$.fragment,h),z(d),O=!1},d(h){h&&p(e),j(v),j(N),d&&d.d(),J=!1,ce(L)}}}function Ee(l,e,r){let t="world",n=!1;function s(){r(1,n=!0),console.log("Done edit text")}const a=()=>s();function m(){t=this.value,r(0,t)}return[t,n,s,a,m]}class De extends A{constructor(e){super(),F(this,e,Ee,ke,G,{})}}function Ie(l){let e,r,t;return r=new De({}),{c(){e=g("div"),C(r.$$.fragment)},l(n){e=b(n,"DIV",{});var s=y(e);P(r.$$.fragment,s),s.forEach(p)},m(n,s){T(n,e,s),V(r,e,null),t=!0},p:K,i(n){t||(M(r.$$.fragment,n),t=!0)},o(n){z(r.$$.fragment,n),t=!1},d(n){n&&p(e),j(r)}}}class qe extends A{constructor(e){super(),F(this,e,null,Ie,G,{})}}export{qe as component};
