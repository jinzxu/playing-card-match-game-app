(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(5),r=c.n(n),i=(c(10),c(3)),d=c(2),l=(c(11),c(12),c(0));function u(e){var t=e.card,c=e.handleChoice,a=e.flipped,s=e.disabled;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:a?"flipped":"",children:[Object(l.jsx)("img",{className:"front",src:t.src,alt:"card front"}),Object(l.jsx)("img",{className:"back",src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/blue2.svg",onClick:function(){s||c(t)},alt:"cover"})]})})}var o=[{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_ace.svg",matched:!1},{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/joker_black.svg",matched:!1},{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/joker_red.svg",matched:!1},{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_king.svg",matched:!1},{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_jack.svg",matched:!1},{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_queen.svg",matched:!1}];var j=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(0),r=Object(d.a)(n,2),j=r[0],g=r[1],h=Object(a.useState)(null),p=Object(d.a)(h,2),b=p[0],m=p[1],f=Object(a.useState)(null),O=Object(d.a)(f,2),_=O[0],v=O[1],y=Object(a.useState)(!1),k=Object(d.a)(y,2),x=k[0],N=k[1],S=function(){var e=[].concat(o,o).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));m(null),v(null),s(e),g(0)},C=function(e){console.log(e),b?v(e):m(e)};Object(a.useEffect)((function(){b&&_&&(N(!0),b.src===_.src?(s((function(e){return e.map((function(e){return e.src===b.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),M()):setTimeout((function(){return M()}),1e3))}),[b,_]);var M=function(){m(null),v(null),g((function(e){return e+1})),N(!1)};return Object(a.useEffect)((function(){S()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Playing Card Match"}),Object(l.jsx)("p",{children:"Jason Xu (jinzxu@ucalgary.ca)"}),Object(l.jsx)("button",{onClick:S,children:"New Game"}),Object(l.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(l.jsx)(u,{card:e,handleChoice:C,flipped:e===b||e===_||e.matched,disabled:x},e.id)}))}),Object(l.jsxs)("p",{children:["Turns: ",j]})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.bb51aa57.chunk.js.map