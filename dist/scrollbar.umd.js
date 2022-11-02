!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("zustand"),require("react"),require("@react-three/fiber"),require("debounce"),require("@studio-freight/lenis"),require("react-intersection-observer"),require("vecn")):"function"==typeof define&&define.amd?define(["exports","zustand","react","@react-three/fiber","debounce","@studio-freight/lenis","react-intersection-observer","vecn"],t):t((e||self).r3FScrollRig={},e.zustand,e.react,e["@react-three/fiber"],e.debounce,e["@studio-freight/lenis"],e.reactIntersectionObserver,e.vecn)}(this,function(e,t,n,r,o,i,l,u){function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=/*#__PURE__*/c(t),s=/*#__PURE__*/c(n),d=/*#__PURE__*/c(o),f=/*#__PURE__*/c(i),v=/*#__PURE__*/c(u);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function w(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var g=a.default(function(e){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,n,r){return void 0===r&&(r={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:h({},i,((o={})[t]={mesh:n,props:r,instances:1},o))}})},updateCanvas:function(t,n){return e(function(e){var r,o=e.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:h({},o,((r={})[t]={mesh:i.mesh,props:h({},i.props,n),instances:l},r))}}})},removeFromCanvas:function(t,n){return void 0===n&&(n=!0),e(function(e){var r,o=e.canvasChildren;return(null==(r=o[t])?void 0:r.instances)>1?(o[t].instances-=1,{canvasChildren:o}):n?{canvasChildren:p(o,[t].map(w))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:h({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:""},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),b=function(){return{enabled:g(function(e){return e.hasSmoothScrollbar}),scroll:g(function(e){return e.scroll}),scrollTo:g(function(e){return e.scrollTo}),onScroll:g(function(e){return e.onScroll})}},m="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,y=["children","duration","easing","smooth","direction","config"],S=function(e){return 1===e?1:1-Math.pow(2,-10*e)},R=n.forwardRef(function(e,t){var r=e.children,o=e.duration,i=void 0===o?1:o,l=e.easing,u=void 0===l?S:l,c=e.smooth,a=void 0===c||c,s=e.direction,d=void 0===s?"vertical":s,v=e.config,w=p(e,y),g=n.useRef();return n.useImperativeHandle(t,function(){return{start:function(){var e;return null==(e=g.current)?void 0:e.start()},stop:function(){var e;return null==(e=g.current)?void 0:e.stop()},on:function(e,t){var n;return null==(n=g.current)?void 0:n.on(e,t)},once:function(e,t){var n;return null==(n=g.current)?void 0:n.once(e,t)},off:function(e,t){var n;return null==(n=g.current)?void 0:n.off(e,t)},notify:function(){var e;return null==(e=g.current)?void 0:e.notify()},scrollTo:function(e,t){var n;return null==(n=g.current)?void 0:n.scrollTo(e,t)},raf:function(e){var t;return null==(t=g.current)?void 0:t.raf(e)}}}),n.useEffect(function(){var e=g.current=new f.default(h({duration:i,easing:u,smooth:a,direction:d},v));return function(){e.destroy()}},[i,u,a,d]),r&&r(w)}),C="undefined"!=typeof window;function E(e,t,n,r,o){return r+(e-t)*(o-r)/(n-t)}e.SmoothScrollbar=function(e){var t=e.children,o=e.enabled,i=void 0===o||o,l=e.locked,u=void 0!==l&&l,c=e.scrollRestoration,a=void 0===c?"auto":c,f=e.disablePointerOnScroll,v=void 0===f||f,p=e.horizontal,w=void 0!==p&&p,b=e.scrollInContainer,y=void 0!==b&&b,S=e.updateGlobalState,C=void 0===S||S,E=e.onScroll,x=e.config,T=n.useRef(),L=n.useRef(),j=n.useRef(!1),I=g(function(e){return e.scroll}),O=function(e){v&&T.current&&j.current!==e&&(j.current=e,T.current.style.pointerEvents=e?"none":"auto")},z=n.useCallback(function(){O(!1)},[]),V=n.useCallback(function(e){var t;return null==(t=L.current)||t.on("scroll",e),function(){var t;return null==(t=L.current)?void 0:t.off("scroll",e)}},[]);m(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=a)},[]),n.useEffect(function(){var e,t,n,o=r.addEffect(function(e){var t;return null==(t=L.current)?void 0:t.raf(e)});null==(e=L.current)||e.on("scroll",function(e){var t=e.scroll,n=e.limit,o=e.velocity,i=e.direction,l=e.progress;C&&(I.y="vertical"===i?t:0,I.x="horizontal"===i?t:0,I.limit=n,I.velocity=o,I.direction=i,I.progress=l);var u=d.default.debounce(function(){return O(!0)},100,!0);Math.abs(o)>1.4?u():O(!1),E&&E({scroll:t,limit:n,velocity:o,direction:i,progress:l}),r.invalidate()}),null==(t=L.current)||t.notify(),C&&(g.setState({scrollTo:null==(n=L.current)?void 0:n.scrollTo}),g.setState({onScroll:V}),g.getState().scroll.y=window.scrollY,g.getState().scroll.x=window.scrollX),document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),g.setState({hasSmoothScrollbar:i});var l=function(){return r.invalidate()};return window.addEventListener("pointermove",z),window.addEventListener("wheel",l),function(){o(),window.removeEventListener("pointermove",z),window.removeEventListener("wheel",l)}},[i]),n.useEffect(function(){var e,t;u?null==(e=L.current)||e.stop():null==(t=L.current)||t.start()},[u]);var q=n.useMemo(function(){if("undefined"==typeof document)return{};var e=document.documentElement,t=document.body,n=document.body.firstElementChild;return e.classList.toggle("ScrollRig-scrollHtml",y),t.classList.toggle("ScrollRig-scrollWrapper",y),{wrapper:t,content:n}},[y]);return s.default.createElement(R,{ref:L,smooth:i,direction:w?"horizontal":"vertical",config:h(y?{smoothTouch:!0,wrapper:q.wrapper,content:q.content}:{},x)},function(e){return t(h({},e,{ref:T}))})},e.useScrollbar=b,e.useTracker=function(e,t){var r=function(){var e=n.useState({width:C?window.innerWidth:Infinity,height:C?window.innerHeight:Infinity}),t=e[0],r=e[1];return n.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function t(){r({width:e?e.clientWidth:window.innerWidth,height:e?e.clientHeight:window.innerHeight})}var n,o=d.default.debounce(t,200);return e?(n=new ResizeObserver(o)).observe(e):window.addEventListener("resize",o),t(),function(){var e;window.removeEventListener("resize",o),null==(e=n)||e.disconnect()}},[]),t}(),o=b(),i=o.scroll,u=o.onScroll,c=g(function(e){return e.scaleMultiplier}),a=g(function(e){return e.pageReflow}),s=h({},{rootMargin:"50%",threshold:0,autoUpdate:!0,wrapper:window},t),f=s.autoUpdate,p=s.wrapper,w=l.useInView({rootMargin:s.rootMargin,threshold:s.threshold}),y=w.ref,S=w.inView;m(function(){y(e.current)},[e]);var R=n.useState(),x=R[0],T=R[1],L=n.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,j=n.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,I=n.useState(j),O=I[0],z=I[1],V=n.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,q=n.useRef(v.default.vec3(0,0,0)).current;m(function(){var t,n=null==(t=e.current)?void 0:t.getBoundingClientRect(),r=p===window?p.scrollY:p.scrollTop,o=p===window?p.scrollX:p.scrollLeft;j.top=n.top+r,j.bottom=n.bottom+r,j.left=n.left+o,j.right=n.right+o,j.width=n.width,j.height=n.height,j.x=j.left+.5*n.width,j.y=j.top+.5*n.height,z(h({},j)),T(v.default.vec3((null==j?void 0:j.width)*c,(null==j?void 0:j.height)*c,1))},[e,r,a,c]);var M=n.useCallback(function(t){var n=void 0===t?{}:t,o=n.onlyUpdateInViewport,l=n.scroll,u=void 0===l?i:l;if(e.current&&(void 0!==o&&!o||L.inViewport)){!function(e,t,n,r){e.top=t.top-n.y,e.bottom=t.bottom-n.y,e.left=t.left-n.x,e.right=t.right-n.x,e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*r.width,e.y=e.top+.5*t.height-.5*r.height,e.positiveYUpBottom=r.height-e.bottom}(V,j,u,r),function(e,t,n){e.x=t.x*n,e.y=-1*t.y*n}(q,V,c);var a="horizontal"===u.direction,s=a?"width":"height",d=r[s]-V[a?"left":"top"];L.progress=E(d,0,r[s]+V[s],0,1),L.visibility=E(d,0,V[s],0,1),L.viewport=E(d,0,r[s],0,1)}},[e,r,c,i]);return m(function(){L.inViewport=S,M({onlyUpdateInViewport:!1})},[S]),m(function(){M({onlyUpdateInViewport:!1})},[M]),n.useEffect(function(){if(f)return u(function(e){return M()})},[f,M,u]),{rect:O,bounds:V,scale:x,position:q,scrollState:L,inViewport:S,update:function(e){return M(h({onlyUpdateInViewport:!1},e))}}}});
//# sourceMappingURL=scrollbar.umd.js.map