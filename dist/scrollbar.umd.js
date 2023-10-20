!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("zustand"),require("react"),require("@studio-freight/lenis"),require("react-intersection-observer"),require("@juggle/resize-observer"),require("debounce"),require("vecn")):"function"==typeof define&&define.amd?define(["exports","zustand","react","@studio-freight/lenis","react-intersection-observer","@juggle/resize-observer","debounce","vecn"],n):n((e||self).r3FScrollRig={},e.zustand,e.React,e["@studio-freight/lenis"],e.reactIntersectionObserver,e["@juggle/resize-observer"],e.debounce,e.vecn)}(this,function(e,n,t,r,o,i,l,u){function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=/*#__PURE__*/c(n),a=/*#__PURE__*/c(r),d=/*#__PURE__*/c(l),f=/*#__PURE__*/c(u);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function h(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof n?n:String(n)}var p=s.default(function(e){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(n,t,r){return void 0===r&&(r={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,n)?(i[n].instances+=1,i[n].props.inactive=!1,{canvasChildren:i}):{canvasChildren:v({},i,((o={})[n]={mesh:t,props:r,instances:1},o))}})},updateCanvas:function(n,t){return e(function(e){var r,o=e.canvasChildren;if(o[n]){var i=o[n],l=i.instances;return{canvasChildren:v({},o,((r={})[n]={mesh:i.mesh,props:v({},i.props,t),instances:l},r))}}})},removeFromCanvas:function(n,t){return void 0===t&&(t=!0),e(function(e){var r,o=e.canvasChildren;return(null==(r=o[n])?void 0:r.instances)>1?(o[n].instances-=1,{canvasChildren:o}):t?{canvasChildren:function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}(o,[n].map(h))}:(o[n].instances=0,o[n].props.inactive=!0,{canvasChildren:v({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},__lenis:void 0,scrollTo:function(){},onScroll:function(){return function(){}}}}),w=function(){return{enabled:p(function(e){return e.hasSmoothScrollbar}),scroll:p(function(e){return e.scroll}),scrollTo:p(function(e){return e.scrollTo}),onScroll:p(function(e){return e.onScroll}),__lenis:p(function(e){return e.__lenis})}},g="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,m=t.forwardRef(function(e,n){var r=e.children,o=e.enabled,i=void 0===o||o,l=e.locked,u=void 0!==l&&l,c=e.scrollRestoration,s=void 0===c?"auto":c,d=e.disablePointerOnScroll,f=void 0===d||d,h=e.horizontal,w=void 0!==h&&h,m=e.scrollInContainer,b=void 0!==m&&m,y=e.updateGlobalState,S=void 0===y||y,R=e.onScroll,E=e.config,C=void 0===E?{}:E,T=e.invalidate,j=void 0===T?function(){}:T,z=e.addEffect,L=t.useRef(),O=t.useRef(!1),x=p(function(e){return e.scroll});t.useImperativeHandle(n,function(){return{start:function(){var e;return null==(e=L.current)?void 0:e.start()},stop:function(){var e;return null==(e=L.current)?void 0:e.stop()},on:function(e,n){var t;return null==(t=L.current)?void 0:t.on(e,n)},notify:function(){var e;return null==(e=L.current)?void 0:e.emit()},emit:function(){var e;return null==(e=L.current)?void 0:e.emit()},scrollTo:function(e,n){var t;return null==(t=L.current)?void 0:t.scrollTo(e,n)},raf:function(e){var n;return null==(n=L.current)?void 0:n.raf(e)},__lenis:L.current}});var _=t.useCallback(function(e){f&&O.current!==e&&(O.current=e,document.documentElement.style.pointerEvents=e?"none":"auto")},[f,O]);return g(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=s)},[]),g(function(){var e,n,t=document.documentElement,r=document.body,o=document.body.firstElementChild;return t.classList.toggle("ScrollRig-scrollHtml",b),r.classList.toggle("ScrollRig-scrollWrapper",b),b&&Object.assign(C,{smoothTouch:!0,wrapper:r,content:o}),L.current=new a.default(v({orientation:w?"horizontal":"vertical"},C,i?{}:{smoothWheel:!1,syncTouch:!1,smoothTouch:!1})),z?e=z(function(e){var n;return null==(n=L.current)?void 0:n.raf(e)}):(n=requestAnimationFrame(function e(t){var r;null==(r=L.current)||r.raf(t),n=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(n)}),function(){var n;e(),null==(n=L.current)||n.destroy()}},[i]),g(function(){var e=L.current,n=function(e){var n=e.scroll,t=e.limit,r=e.velocity,o=e.direction,i=e.progress,l=w?n:0;S&&(x.y=w?0:n,x.x=l,x.limit=t,x.velocity=r,x.direction=o,x.progress=i||0),Math.abs(r)>1.5&&_(!0),Math.abs(r)<1&&_(!1),R&&R({scroll:n,limit:t,velocity:r,direction:o,progress:i}),j()};return null==e||e.on("scroll",n),S&&(x.scrollDirection=w?"horizontal":"vertical",p.setState({__lenis:e,scrollTo:function(){null==e||e.scrollTo.apply(e,[].slice.call(arguments))},onScroll:function(n){return null==e||e.on("scroll",n),null==e||e.emit(),function(){return null==e?void 0:e.off("scroll",n)}}}),p.getState().scroll.y=window.scrollY,p.getState().scroll.x=window.scrollX),null==e||e.emit(),function(){null==e||e.off("scroll",n),S&&p.setState({__lenis:void 0,onScroll:function(){return function(){}},scrollTo:function(){}})}},[i]),g(function(){var e=function(){return j()},n=function(){return _(!1)};return window.addEventListener("pointermove",n),window.addEventListener("pointerdown",n),window.addEventListener("wheel",e),function(){window.removeEventListener("pointermove",n),window.removeEventListener("pointerdown",n),window.removeEventListener("wheel",e)}},[]),t.useEffect(function(){return S&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),p.setState({hasSmoothScrollbar:i})),function(){document.documentElement.classList.remove("js-smooth-scrollbar-enabled"),document.documentElement.classList.remove("js-smooth-scrollbar-disabled")}},[i]),t.useEffect(function(){var e,n;u?null==(e=L.current)||e.stop():null==(n=L.current)||n.start()},[u]),r?r({}):null}),b="undefined"!=typeof window;function y(e,n,t,r,o){return r+(e-n)*(o-r)/(t-n)}e.SmoothScrollbar=m,e.useScrollbar=w,e.useTracker=function(e,n){var r=function(e){var n={}.debounce,r=void 0===n?0:n,o=t.useState({width:b?window.innerWidth:Infinity,height:b?window.innerHeight:Infinity}),l=o[0],u=o[1];return t.useEffect(function(){var e=document.getElementById("root");function n(){var n=e?e.clientWidth:window.innerWidth,t=e?e.clientHeight:window.innerHeight;n===l.width&&t===l.height||u({width:n,height:t})}var t,o=d.default.debounce(n,r),c=window.ResizeObserver||i.ResizeObserver;return e?(t=new c(o)).observe(e):window.addEventListener("resize",o),n(),function(){var e;window.removeEventListener("resize",o),null==(e=t)||e.disconnect()}},[l,u]),l}(),l=w(),u=l.scroll,c=l.onScroll,s=p(function(e){return e.scaleMultiplier}),a=p(function(e){return e.pageReflow}),h=p(function(e){return e.debug}),m=t.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=n||{};return Object.keys(t).map(function(n,r){void 0!==t[n]&&(e[n]=t[n])}),e},[n]),S=m.autoUpdate,R=m.wrapper,E=o.useInView({rootMargin:m.rootMargin,threshold:m.threshold}),C=E.ref,T=E.inView;g(function(){C(e.current)},[e,null==e?void 0:e.current]);var j=t.useState(f.default.vec3(0,0,0)),z=j[0],L=j[1],O=t.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,x=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,_=t.useState(x),I=_[0],V=_[1],q=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,k=t.useRef(f.default.vec3(0,0,0)).current;g(function(){var n,t=null==(n=e.current)?void 0:n.getBoundingClientRect();if(t){var o=R?R.scrollTop:window.scrollY,i=R?R.scrollLeft:window.scrollX;x.top=t.top+o,x.bottom=t.bottom+o,x.left=t.left+i,x.right=t.right+i,x.width=t.width,x.height=t.height,V(v({},x)),L(f.default.vec3((null==x?void 0:x.width)*s,(null==x?void 0:x.height)*s,1)),h&&console.log("useTracker.getBoundingClientRect:",x,"intialScroll:",{initialY:o,initialX:i},"size:",r,"pageReflow:",a)}},[e,r,a,s,h]);var M=t.useCallback(function(n){var t=void 0===n?{}:n,o=t.onlyUpdateInViewport;if(e.current&&(void 0===o||!o||O.inViewport)){var i=t.scroll||u;!function(e,n,t,r){e.top=n.top-(t.y||0),e.bottom=n.bottom-(t.y||0),e.left=n.left-(t.x||0),e.right=n.right-(t.x||0),e.width=n.width,e.height=n.height,e.x=e.left+.5*n.width-.5*r.width,e.y=e.top+.5*n.height-.5*r.height,e.positiveYUpBottom=r.height-e.bottom}(q,x,i,r),function(e,n,t){e.x=n.x*t,e.y=-1*n.y*t}(k,q,s);var l="horizontal"===i.scrollDirection,c=l?"width":"height",a=r[c]-q[l?"left":"top"];O.progress=y(a,0,r[c]+q[c],0,1),O.visibility=y(a,0,q[c],0,1),O.viewport=y(a,0,r[c],0,1)}},[e,r,s,u]);return g(function(){O.inViewport=T,M({onlyUpdateInViewport:!1}),h&&console.log("useTracker.inViewport:",T,"update()")},[T]),g(function(){M({onlyUpdateInViewport:!1}),h&&console.log("useTracker.update on resize/reflow")},[M,a]),t.useEffect(function(){if(S)return c(function(e){return M({onlyUpdateInViewport:!0})})},[S,M,c]),{scale:z,inViewport:T,rect:I,bounds:q,position:k,scrollState:O,update:M}}});
//# sourceMappingURL=scrollbar.umd.js.map
