(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{35:function(A){A.exports=JSON.parse('[{"id":3081368,"city":"Wroc\u0142aw"},{"id":3083829,"city":"Szczecin"},{"id":3095049,"city":"Koszalin"},{"id":3099424,"city":"Gdynia"},{"id":3099434,"city":"Gda\u0144sk"},{"id":763166,"city":"Olsztyn"},{"id":7530941,"city":"Suwa\u0142ki"},{"id":3098722,"city":"Gorz\xf3w Wielkopolski"},{"id":7530858,"city":"Pozna\u0144"},{"id":7531378,"city":"Bydgoszcz"},{"id":7533188,"city":"Sob\xf3tka"},{"id":3083271,"city":"Toru\u0144"},{"id":6695624,"city":"Warszawa"},{"id":776069,"city":"Bia\u0142ystok"},{"id":765876,"city":"Lublin"},{"id":7531370,"city":"Sanok"},{"id":3094802,"city":"Krak\xf3w"},{"id":7530819,"city":"Rzesz\xf3w"},{"id":7532505,"city":"Lubin"},{"id":769250,"city":"Kielce"},{"id":3100946,"city":"Cz\u0119stochowa"},{"id":3096472,"city":"Katowice"},{"id":3090048,"city":"Opole"},{"id":3093133,"city":"\u0141\xf3d\u017a"},{"id":7531513,"city":"Zakopane"},{"id":6455259,"city":"Pary\u017c"},{"id":701824,"city":"Mariupol"}]')},41:function(A,e,c){},42:function(A,e,c){},61:function(A,e,c){},63:function(A,e,c){},69:function(A,e,c){"use strict";c.r(e);var t=c(0),n=c.n(t),i=c(12),s=c.n(i),r=(c(41),c(8)),a=(c(42),c(22)),d=c(32),o=c.n(d),l=function(A){var e=new Date(1e3*A);console.log(e.getHours());var c=e.getHours()<10?"0"+e.getHours():e.getHours(),t="0"+e.getMinutes(),n="0"+e.getSeconds();return c+":"+t.substr(-2)+":"+n.substr(-2)},j=function(A,e){var c;"N"===e?c=A>=0?e:"S":"E"===e&&(c=A>=0?e:"W"),A=Math.abs(A);var t=Math.floor(A),n=60*(A-t),i=Math.floor(n).toString(),s=Math.floor(n-i).toString();return i=1===i.length?"0"+i:i,s=1===s.length?"0"+s:s,"".concat(t,"\xb0").concat(i,"'").concat(s,'" ').concat(c)},g=c(33),u=c.n(g),b=(c(61),c.p+"static/media/sunrise.dfc26d98.png"),h=c.p+"static/media/sunset.5f82843c.png",w=(c.p,c(21)),C=c(1);var O=function(A){var e=Object(w.b)({id:"google-map-script",googleMapsApiKey:"".concat("AIzaSyCm1OcBmR14B5rHEYQCpm2w6zvJCCebBdk")}).isLoaded,c={width:"100%",height:Object(t.useContext)(Q)?"300px":"590px"},i=n.a.useState(null),s=Object(r.a)(i,2),a=(s[0],s[1]),d=n.a.useCallback((function(e){var c=new window.google.maps.LatLngBounds;e.fitBounds(c),a(e),this.forceUpdate(),console.log("force"),console.log(A.lat,A.lon)}),[A.lat,A.lon]),o=n.a.useCallback((function(A){a(null)}),[]);return e?Object(C.jsx)("div",{id:"mapWrapper",children:Object(C.jsx)(w.a,{className:"map",mapContainerStyle:c,center:{lat:A.lat,lng:A.lon},zoom:11,onLoad:d,onUnmount:o,style:{borderRadius:"100px"},children:Object(C.jsx)(C.Fragment,{})})}):Object(C.jsx)(C.Fragment,{})};var m=function(A){var e=Object(t.useState)(!0),c=Object(r.a)(e,2),i=c[0],s=c[1],d=Object(t.useState)(!1),g=Object(r.a)(d,2),w=(g[0],g[1]),m=Object(t.useState)({name:"City",dt:0,coord:{lon:0,lat:0},sys:{country:"World",sunrise:0,sunset:0},weather:[{main:"Clear",description:"clear sky",icon:"01d"}],wind:{speed:1,deg:0},clouds:{all:1},main:{temp:0,feels_like:0,temp_min:0,temp_max:0,pressure:0}}),x=Object(r.a)(m,2),v=x[0],f=x[1],p=function(){s(!1),w(!1)},I=A.currentSelectedId;return Object(t.useEffect)((function(){return o.a.get("https://api.openweathermap.org/data/2.5/weather?id=".concat(I,"&lang=").concat("pl","&appid=").concat("c1e7782de6f05ad9962f8946d6f491f3")).then((function(A){s(!0),f(A.data),f((function(A){return Object(a.a)(Object(a.a)({},A),{},{main:{temp:Math.floor(A.main.temp-273),feels_like:Math.floor(A.main.feels_like-273),temp_min:Math.floor(A.main.temp_min-273),temp_max:Math.floor(A.main.temp_max-273)}})})),setTimeout(p,1e3)})).catch((function(A){console.log(A),w(!0),s(!1)})),function(){clearTimeout(p)}}),[I]),console.log(v),Object(C.jsxs)(n.a.Fragment,{children:[i&&Object(C.jsx)("div",{className:"boxLoader",children:Object(C.jsx)(u.a,{className:"pageLoader",type:"spinningBubbles",color:"#4269f5",height:667,width:375})}),!i&&Object(C.jsxs)("div",{className:"current",children:[Object(C.jsxs)("div",{className:"left",children:[Object(C.jsx)(O,{lat:v.coord.lat,lon:v.coord.lon}),Object(C.jsxs)("div",{className:"place",children:[Object(C.jsx)("h1",{children:v.sys.country}),Object(C.jsx)("div",{children:v.name})]}),Object(C.jsx)("div",{className:"coord",children:Object(C.jsxs)("div",{children:[j(v.coord.lat,"N")," ",j(v.coord.lon,"E")]})})]}),Object(C.jsxs)("div",{className:"right",children:[Object(C.jsxs)("div",{className:"sys",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("img",{src:b,alt:"sunrise-icon"}),l(v.sys.sunrise)]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("img",{src:h,alt:"sunset-icon"}),l(v.sys.sunset)]})]}),Object(C.jsxs)("div",{className:"weather",children:[Object(C.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(v.weather[0].icon,"@2x.png")}),Object(C.jsx)("div",{children:v.weather[0].description},v.weather[0].description.id)]}),Object(C.jsxs)("div",{className:"windClouds",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:"Wiatr:"}),Object(C.jsxs)("p",{children:[v.wind.speed," m/s ",Object(C.jsx)("img",{id:"windArrow",src:"data:image/png;base64,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",alt:"arrow-wind",style:{transform:"rotate(".concat(v.wind.deg,"deg)")}})]})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:"Zachmurzenie: "}),Object(C.jsxs)("p",{children:[v.clouds.all," %"]})]})]}),Object(C.jsxs)("div",{className:"main",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:"Temperatura:"}),Object(C.jsxs)("p",{children:[v.main.temp,"\xb0C"]})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:"Temperatura odczuwalna:"}),Object(C.jsxs)("p",{children:[v.main.feels_like,"\xb0C"]})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:"Temperatura maksymalna:"}),Object(C.jsxs)("p",{children:[v.main.temp_max,"\xb0C"]})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:"Temperatura minimalna:"}),Object(C.jsxs)("p",{children:[v.main.temp_min,"\xb0C"]})]})]}),Object(C.jsxs)("div",{className:"dt",children:["Czas pomiaru ",l(v.dt)]})]})]})]})},x=(c(63),c(9)),v=c(2);var f=function(){return Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:"simea"})})};var p=function(){return Object(C.jsx)("footer",{children:Object(C.jsxs)("div",{className:"responsive",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Kontakt"}),Object(C.jsx)("h3",{children:"Jakub Radzik"}),Object(C.jsx)("h3",{children:"792 265 888"}),Object(C.jsx)("h3",{children:"jradzik4@gmail.com"})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Pomiary dostarcza:"}),Object(C.jsx)("h2",{children:"open weathermap.org"}),Object(C.jsx)("h1",{children:"Mapy dostarcza:"}),Object(C.jsx)("h2",{children:"google.com"})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Ikony"}),Object(C.jsxs)("div",{style:{width:"100%",display:"inline"},children:["Icons made by ",Object(C.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(C.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})]})})},I=c(36),y=c.p+"static/media/cloudy.9a5b54f5.png";var K=function(){return Object(C.jsxs)("div",{className:"logo",children:[Object(C.jsx)("img",{src:y,alt:"icon-logo"}),Object(C.jsx)("h1",{children:"radzik.weather"})]})};var B=function(){return Object(C.jsxs)(n.a.Fragment,{children:[Object(C.jsx)(x.b,{to:"/currentWeather",children:Object(C.jsx)("button",{children:"Aktualna pogoda"})}),Object(C.jsx)(x.b,{to:"/minuteWeather",children:Object(C.jsx)("button",{children:"Prognoza minutowa"})}),Object(C.jsx)(x.b,{to:"/twoDaysWeather",children:Object(C.jsx)("button",{children:"Prognoza dwudniowa"})}),Object(C.jsx)(x.b,{to:"/weekWeather",children:Object(C.jsx)("button",{children:"Prognoza tygodniowa"})})]})};function z(A){return Object(C.jsxs)("form",{children:[Object(C.jsx)(B,{}),Object(C.jsx)("select",{value:A.currentSelectedId,onChange:A.changeHandler,children:A.sortedCities.map((function(A){return Object(C.jsx)("option",{value:A.id,children:A.city},A.id)}))})]})}var N=n.a.memo(z),H=c(35),M=c(20),k=c.n(M);function F(A){return Object(t.useEffect)((function(){window.addEventListener("scroll",(function(){console.log("scrollHideHandler"),k()(".menu").slideUp(300)}))}),[]),Object(C.jsxs)("form",{children:[Object(C.jsx)("select",{value:A.currentSelectedId,onChange:A.changeHandler,children:A.sortedCities.map((function(A){return Object(C.jsx)("option",{value:A.id,children:A.city},A.id)}))}),Object(C.jsx)("div",{className:"toggle",onClick:function(){k()(".menu").slideToggle(300)},children:" MENU "})]})}var D=n.a.memo(F);var P=function(){return Object(C.jsxs)("div",{className:"menu",children:[Object(C.jsx)(x.b,{to:"/currentWeather",children:Object(C.jsx)("div",{className:"menu-item",children:"Aktualna pogoda"})}),Object(C.jsx)(x.b,{to:"/minuteWeather",children:Object(C.jsx)("div",{className:"menu-item",children:"Prognoza minutowa"})}),Object(C.jsx)(x.b,{to:"/twoDaysWeather",children:Object(C.jsx)("div",{className:"menu-item",children:"Prognoza dwudniowa"})}),Object(C.jsx)(x.b,{to:"/weekWeather",children:Object(C.jsx)("div",{className:"menu-item",children:"Prognoza tygodniowa"})})]})};var S=function(A){var e=Object(t.useState)([]),c=Object(r.a)(e,2),i=c[0],s=c[1],a=Object(t.useState)([]),d=Object(r.a)(a,2),o=d[0],l=d[1];Object(t.useEffect)((function(){H.map((function(A){s((function(e){return[].concat(Object(I.a)(e),[{id:A.id,city:A.city}])}))}))}),[]),Object(t.useEffect)((function(){i.sort((function(A,e){return A.city<e.city?-1:A.city>e.city?1:0}))}),[i]),Object(t.useEffect)((function(){l(i)}),[i]);var j=Object(t.useContext)(Q);return Object(C.jsxs)(n.a.Fragment,{children:[!j&&Object(C.jsx)("nav",{className:"desktop",children:Object(C.jsxs)("div",{className:"responsive",children:[Object(C.jsx)(K,{}),Object(C.jsx)(N,{currentSelectedId:A.currentSelectedId,changeHandler:A.changeHandler,sortedCities:o})]})}),j&&Object(C.jsxs)(n.a.Fragment,{children:[Object(C.jsxs)("nav",{className:"mobile",children:[Object(C.jsx)(K,{}),Object(C.jsx)(D,{currentSelectedId:A.currentSelectedId,changeHandler:A.changeHandler,sortedCities:o})]}),Object(C.jsx)(P,{})]})]})},Q=n.a.createContext(!1);var L=function(){var A=Object(t.useState)(6695624),e=Object(r.a)(A,2),c=e[0],n=e[1],i="(max-width: 1024px)",s=Object(t.useState)({mobile:window.matchMedia(i).matches}),a=Object(r.a)(s,2),d=a[0],o=a[1];return Object(t.useEffect)((function(){var A=function(){o({mobile:window.matchMedia(i).matches}),console.log(d)};return window.addEventListener("resize",A),function(){window.removeEventListener("resize",A)}})),Object(C.jsx)(x.a,{className:"App",children:Object(C.jsxs)(Q.Provider,{value:d.mobile,children:[Object(C.jsx)(S,{currentSelectedId:c,changeHandler:function(A){n(A.target.value)}}),Object(C.jsxs)(v.c,{children:[Object(C.jsx)(v.a,{path:"/",children:Object(C.jsx)(m,{currentSelectedId:c})}),Object(C.jsx)(v.a,{path:"/currentWeather",children:Object(C.jsx)(m,{currentSelectedId:c})}),Object(C.jsx)(v.a,{path:"/minuteWeather",disabled:!0,children:Object(C.jsx)(f,{})})]}),Object(C.jsx)(p,{})]})})},V=function(A){A&&A instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(e){var c=e.getCLS,t=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;c(A),t(A),n(A),i(A),s(A)}))};s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(L,{})}),document.getElementById("root")),V()}},[[69,1,2]]]);
//# sourceMappingURL=main.92adca55.chunk.js.map