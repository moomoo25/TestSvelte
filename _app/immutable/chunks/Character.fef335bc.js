import{S as M,i as P,s as F,k as d,q,a as w,l as m,m as v,r as H,h as n,c as D,n as _,C as k,p as E,b as T,E as i,u as x,G as B}from"./index.823f8282.js";import"./paths.2d930056.js";function J(o){let a,c,f,u,s,e,b,R,h,g,p,C,S,l,y;return{c(){a=d("div"),c=d("h1"),f=q("CHARACTER"),u=w(),s=d("div"),e=d("img"),R=w(),h=d("div"),g=d("h4"),p=d("b"),C=q(o[1]),S=w(),l=d("p"),y=q(o[2]),this.h()},l(t){a=m(t,"DIV",{class:!0});var r=v(a);c=m(r,"H1",{});var V=v(c);f=H(V,"CHARACTER"),V.forEach(n),r.forEach(n),u=D(t),s=m(t,"DIV",{class:!0});var A=v(s);e=m(A,"IMG",{class:!0,src:!0,alt:!0}),R=D(A),h=m(A,"DIV",{class:!0});var I=v(h);g=m(I,"H4",{style:!0});var z=v(g);p=m(z,"B",{});var G=v(p);C=H(G,o[1]),G.forEach(n),z.forEach(n),S=D(I),l=m(I,"P",{style:!0});var j=v(l);y=H(j,o[2]),j.forEach(n),I.forEach(n),A.forEach(n),this.h()},h(){_(a,"class","title svelte-1tlgems"),_(e,"class","avatar svelte-1tlgems"),k(e.src,b=o[0])||_(e,"src",b),_(e,"alt","Avatar"),E(g,"text-align","center"),E(l,"text-align","center"),E(l,"padding-bottom","5vw"),E(l,"width","60%"),E(l,"margin","0 auto"),E(l,"margin-top","20px"),_(h,"class","container svelte-1tlgems"),_(s,"class","card svelte-1tlgems")},m(t,r){T(t,a,r),i(a,c),i(c,f),T(t,u,r),T(t,s,r),i(s,e),i(s,R),i(s,h),i(h,g),i(g,p),i(p,C),i(h,S),i(h,l),i(l,y)},p(t,[r]){r&1&&!k(e.src,b=t[0])&&_(e,"src",b),r&2&&x(C,t[1]),r&4&&x(y,t[2])},i:B,o:B,d(t){t&&n(a),t&&n(u),t&&n(s)}}}function K(o,a,c){let{raiden:f="$lib/assets/images/raiden-pic.jpg"}=a,{name:u="Raiden Shogun"}=a,{detail:s="The Raiden Shogun is unique as she is comprised of two beings in one body: Ei, the current Electro Archon of Inazuma; and the Shogun, the puppet created by Ei to act as the ruler of Inazuma in her stead, which also serves as her vessel."}=a;return o.$$set=e=>{"raiden"in e&&c(0,f=e.raiden),"name"in e&&c(1,u=e.name),"detail"in e&&c(2,s=e.detail)},[f,u,s]}class O extends M{constructor(a){super(),P(this,a,K,J,F,{raiden:0,name:1,detail:2})}}export{O as C};
