!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@react-three/fiber"),require("@juggle/resize-observer"),require("query-string"),require("zustand"),require("three"),require("react-intersection-observer"),require("debounce"),require("vecn"),require("suspend-react"),require("supports-webp"),require("fast-deep-equal"),require("@studio-freight/lenis")):"function"==typeof define&&define.amd?define(["exports","react","@react-three/fiber","@juggle/resize-observer","query-string","zustand","three","react-intersection-observer","debounce","vecn","suspend-react","supports-webp","fast-deep-equal","@studio-freight/lenis"],t):t((e||self).r3FScrollRig={},e.React,e["@react-three/fiber"],e["@juggle/resize-observer"],e.queryString,e.zustand,e.three,e.reactIntersectionObserver,e.debounce,e.vecn,e.suspendReact,e.supportsWebp,e.fastDeepEqual,e["@studio-freight/lenis"])}(this,function(e,t,r,n,o,i,l,a,u,c,s,d,f,v){function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var h=/*#__PURE__*/p(t),g=/*#__PURE__*/p(i),m=/*#__PURE__*/p(u),b=/*#__PURE__*/p(c),w=/*#__PURE__*/p(d),y=/*#__PURE__*/p(f),S=/*#__PURE__*/p(v);function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}function T(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var O="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,I={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},L=g.default(function(e){return{debug:!1,scaleMultiplier:I.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:I.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!1,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,r,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:R({},i,((o={})[t]={mesh:r,props:n,instances:1},o))}})},updateCanvas:function(t,r){return e(function(e){var n,o=e.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:R({},o,((n={})[t]={mesh:i.mesh,props:R({},i.props,r),instances:l},n))}}})},removeFromCanvas:function(t,r){return void 0===r&&(r=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[t])?void 0:n.instances)>1?(o[t].instances-=1,{canvasChildren:o}):r?{canvasChildren:C(o,[t].map(T))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:R({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},__lenis:void 0,scrollTo:function(){},onScroll:function(){return function(){}}}}),M=function(){var e=L(function(e){return e.requestReflow}),r=L(function(e){return e.debug});return t.useEffect(function(){var t=new(window.ResizeObserver||n.ResizeObserver)(function(){e(),r&&console.log("ResizeManager","document.body height changed")});return t.observe(document.body),function(){null==t||t.disconnect()}},[]),null},k=["makeDefault","margin"],x=t.forwardRef(function(e,n){var o=e.makeDefault,i=void 0!==o&&o,l=e.margin,a=void 0===l?0:l,u=C(e,k),c=r.useThree(function(e){return e.set}),s=r.useThree(function(e){return e.camera}),d=r.useThree(function(e){return e.size}),f=r.useThree(function(e){return e.viewport}),v=t.useRef(null);t.useImperativeHandle(n,function(){return v.current});var p=L(function(e){return e.pageReflow}),g=L(function(e){return e.scaleMultiplier}),m=t.useMemo(function(){var e,t=(d.height+2*a)*g,r=(d.width+2*a)*g/t,n=u.fov||50,o=null==u||null==(e=u.position)?void 0:e[2];return o?n=180/Math.PI*2*Math.atan(t/(2*o)):o=t/(2*Math.tan(n/2*Math.PI/180)),{fov:n,distance:o,aspect:r}},[d,g,p]),b=m.fov,w=m.distance,y=m.aspect;return O(function(){v.current.lookAt(0,0,0),v.current.updateProjectionMatrix(),v.current.updateMatrixWorld(),c(function(e){return{viewport:R({},e.viewport,f.getCurrentViewport(s))}})},[d,g,p]),O(function(){if(i){var e=s;return c(function(){return{camera:v.current}}),function(){return c(function(){return{camera:e}})}}},[v,i,c]),h.default.createElement("perspectiveCamera",R({ref:v,position:[0,0,w],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,aspect:y,fov:b,far:2*w},u))}),_=["makeDefault","margin"],P=t.forwardRef(function(e,n){var o=e.makeDefault,i=void 0!==o&&o,l=e.margin,a=void 0===l?0:l,u=C(e,_),c=r.useThree(function(e){return e.set}),s=r.useThree(function(e){return e.camera}),d=r.useThree(function(e){return e.size}),f=L(function(e){return e.pageReflow}),v=L(function(e){return e.scaleMultiplier}),p=t.useMemo(function(){return Math.max(d.width*v,d.height*v)},[d,f,v]),g=t.useRef(null);return t.useImperativeHandle(n,function(){return g.current}),O(function(){g.current.lookAt(0,0,0),g.current.updateProjectionMatrix(),g.current.updateMatrixWorld()},[p,d]),O(function(){if(i){var e=s;return c(function(){return{camera:g.current}}),function(){return c(function(){return{camera:e}})}}},[g,i,c]),h.default.createElement("orthographicCamera",R({left:d.width*v/-2-a*v,right:d.width*v/2+a*v,top:d.height*v/2+a*v,bottom:d.height*v/-2-a*v,far:2*p,position:[0,0,p],near:.001,ref:g,onUpdate:function(e){return e.updateProjectionMatrix()}},u))});function V(e,t){e&&(!1===t?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return V(e,t)}))}var D,j=new l.Vector2,A=function(e){void 0===e&&(e=[0]),L.getState().globalRenderQueue=L.getState().globalRenderQueue||[0],L.getState().globalRenderQueue=[].concat(L.getState().globalRenderQueue||[],e)},q=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,a=e.height,u=e.layer,c=void 0===u?0:u,s=e.autoClear,d=e.clearDepth,f=void 0!==d&&d;r&&n&&(t.autoClear=void 0!==s&&s,t.setScissor(o,i,l,a),t.setScissorTest(!0),n.layers.set(c),f&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1))},z=function(e){var t=e.gl,r=e.scene,n=e.camera,o=e.left,i=e.top,l=e.width,a=e.height,u=e.layer,c=void 0===u?0:u,s=e.scissor,d=void 0===s||s,f=e.autoClear,v=void 0!==f&&f,p=e.clearDepth,h=void 0!==p&&p;r&&n&&(t.getSize(j),t.autoClear=v,t.setViewport(o,i,l,a),t.setScissor(o,i,l,a),t.setScissorTest(d),n.layers.set(c),h&&t.clearDepth(),t.render(r,n),t.setScissorTest(!1),t.setViewport(0,0,j.x,j.y))},F=function(e,t,n,o){void 0===n&&(n=0),I.preloadQueue.push(function(r,i,l){r.setScissorTest(!1),V(e||i,!1),t.layers.set(n),r.render(e||i,t||l),V(e||i,!0),o&&o()}),r.invalidate()},U=function(){var e=L(function(e){return e.isCanvasAvailable}),r=L(function(e){return e.hasSmoothScrollbar}),n=L(function(e){return e.requestReflow}),o=L(function(e){return e.pageReflow}),i=L(function(e){return e.debug}),l=L(function(e){return e.scaleMultiplier});return t.useEffect(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:e,hasSmoothScrollbar:r,scaleMultiplier:l,preloadScene:F,requestRender:A,renderScissor:q,renderViewport:z,reflow:n,reflowCompleted:o}},Y=function(e){var n=e.children,o=r.useThree(function(e){return e.gl}),i=L(function(e){return e.canvasChildren}),l=U();return t.useEffect(function(){Object.keys(i).length||(l.debug&&console.log("GlobalRenderer","auto render empty canvas"),o.clear(),l.requestRender(),r.invalidate())},[i]),l.debug&&console.log("GlobalChildren",Object.keys(i).length),h.default.createElement(h.default.Fragment,null,n,Object.keys(i).map(function(e){var r=i[e],n=r.mesh,o=r.props;return"function"==typeof n?h.default.createElement(t.Fragment,{key:e},n(R({key:e},l,o))):t.cloneElement(n,R({key:e},o))}))},B=function(){var e=r.useThree(function(e){return e.gl}),t=r.useThree(function(e){return e.frameloop}),n=L(function(e){return e.globalClearDepth}),o=L(function(e){return e.globalPriority}),i=U();return O(function(){e.debug.checkShaderErrors=i.debug},[i.debug]),r.useFrame(function(t){var n=t.camera,o=t.scene;I.preloadQueue.length&&(I.preloadQueue.forEach(function(t){return t(e,o,n)}),e.clear(),I.preloadQueue=[],i.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),i.requestRender(),r.invalidate())},I.PRIORITY_PRELOAD),r.useFrame(function(r){var o=r.camera,i=r.scene,l=L.getState().globalRenderQueue;("always"===t||l)&&(o.layers.disableAll(),l?l.forEach(function(e){o.layers.enable(e)}):o.layers.enable(0),n&&e.clearDepth(),e.render(i,o)),L.getState().clearGlobalRenderQueue()},o),null},Q=/*#__PURE__*/function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={error:!1},r.props=t,r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,E(t,r),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(t.Component),W="8.12.3",G=["children","as","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalClearDepth"],H=["children","onError"];"undefined"!=typeof window&&(D=window.ResizeObserver||n.ResizeObserver);var X=function(e){var n=e.children,i=e.as,l=void 0===i?r.Canvas:i,a=e.gl,u=e.style,c=e.orthographic,s=e.camera,d=e.debug,f=e.scaleMultiplier,v=void 0===f?I.DEFAULT_SCALE_MULTIPLIER:f,p=e.globalRender,g=void 0===p||p,m=e.globalPriority,b=void 0===m?I.PRIORITY_GLOBAL:m,w=e.globalClearDepth,y=void 0!==w&&w,S=C(e,G),E=L(function(e){return e.globalRender});return O(function(){"undefined"!=typeof window&&(window.__r3f_scroll_rig=W);var e=o.parse(window.location.search);(d||void 0!==e.debug)&&(L.setState({debug:!0}),console.info("@14islands/r3f-scroll-rig@"+W))},[d]),O(function(){t.startTransition(function(){L.setState({scaleMultiplier:v,globalRender:g,globalPriority:b,globalClearDepth:y})})},[v,b,g,y]),h.default.createElement(l,R({id:"ScrollRig-canvas",camera:{manual:!0},gl:R({failIfMajorPerformanceCaveat:!0},a),resize:{scroll:!1,debounce:0,polyfill:D},style:R({position:"fixed",top:0,left:0,right:0,height:"100vh"},u)},S),!c&&h.default.createElement(x,R({manual:!0,makeDefault:!0},s)),c&&h.default.createElement(P,R({manual:!0,makeDefault:!0},s)),E&&h.default.createElement(B,null),"function"==typeof n?n(h.default.createElement(Y,null)):h.default.createElement(Y,null,n),h.default.createElement(M,null))},N=function(e){return h.default.createElement("mesh",{scale:e.scale},h.default.createElement("planeGeometry",null),h.default.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new l.Color("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},J="undefined"!=typeof window;function K(e){var r=(void 0===e?{}:e).debounce,o=void 0===r?0:r,i=t.useState({width:J?window.innerWidth:Infinity,height:J?window.innerHeight:Infinity}),l=i[0],a=i[1];return t.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function t(){var t=e?e.clientWidth:window.innerWidth,r=e?e.clientHeight:window.innerHeight;t===l.width&&r===l.height||a({width:t,height:r})}var r,i=m.default.debounce(t,o),u=window.ResizeObserver||n.ResizeObserver;return e?(r=new u(i)).observe(e):window.addEventListener("resize",i),t(),function(){var e;window.removeEventListener("resize",i),null==(e=r)||e.disconnect()}},[l,a]),l}function Z(e,t,r,n,o){return n+(e-t)*(o-n)/(r-t)}var $=function(){return{enabled:L(function(e){return e.hasSmoothScrollbar}),scroll:L(function(e){return e.scroll}),scrollTo:L(function(e){return e.scrollTo}),onScroll:L(function(e){return e.onScroll}),__lenis:L(function(e){return e.__lenis})}};function ee(e,r){var n=K(),o=$(),i=o.scroll,l=o.onScroll,u=L(function(e){return e.scaleMultiplier}),c=L(function(e){return e.pageReflow}),s=L(function(e){return e.debug}),d=t.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=r||{};return Object.keys(t).map(function(r,n){void 0!==t[r]&&(e[r]=t[r])}),e},[r]),f=d.autoUpdate,v=d.wrapper,p=a.useInView({rootMargin:d.rootMargin,threshold:d.threshold}),h=p.ref,g=p.inView;O(function(){h(e.current)},[e,null==e?void 0:e.current]);var m=t.useState(b.default.vec3(0,0,0)),w=m[0],y=m[1],S=t.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,E=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,C=t.useState(E),T=C[0],I=C[1],M=t.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,k=t.useRef(b.default.vec3(0,0,0)).current;O(function(){var t,r=null==(t=e.current)?void 0:t.getBoundingClientRect();if(r){var o=v?v.scrollTop:window.scrollY,i=v?v.scrollLeft:window.scrollX;E.top=r.top+o,E.bottom=r.bottom+o,E.left=r.left+i,E.right=r.right+i,E.width=r.width,E.height=r.height,I(R({},E)),y(b.default.vec3((null==E?void 0:E.width)*u,(null==E?void 0:E.height)*u,1)),s&&console.log("useTracker.getBoundingClientRect:",E,"intialScroll:",{initialY:o,initialX:i},"size:",n,"pageReflow:",c)}},[e,n,c,u,s]);var x=t.useCallback(function(t){var r=void 0===t?{}:t,o=r.onlyUpdateInViewport;if(e.current&&(void 0===o||!o||S.inViewport)){var l=r.scroll||i;!function(e,t,r,n){e.top=t.top-(r.y||0),e.bottom=t.bottom-(r.y||0),e.left=t.left-(r.x||0),e.right=t.right-(r.x||0),e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*n.width,e.y=e.top+.5*t.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(M,E,l,n),function(e,t,r){e.x=t.x*r,e.y=-1*t.y*r}(k,M,u);var a="horizontal"===l.scrollDirection,c=a?"width":"height",s=n[c]-M[a?"left":"top"];S.progress=Z(s,0,n[c]+M[c],0,1),S.visibility=Z(s,0,M[c],0,1),S.viewport=Z(s,0,n[c],0,1)}},[e,n,u,i]);return O(function(){S.inViewport=g,x({onlyUpdateInViewport:!1}),s&&console.log("useTracker.inViewport:",g,"update()")},[g]),O(function(){x({onlyUpdateInViewport:!1}),s&&console.log("useTracker.update on resize/reflow")},[x,c]),t.useEffect(function(){if(f)return l(function(e){return x({onlyUpdateInViewport:!0})})},[f,x,l]),{scale:w,inViewport:g,rect:T,bounds:M,position:k,scrollState:S,update:x}}var te=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","priority","scene"],re=["track","children","margin","visible","hideOffscreen","debug","orthographic","priority","inViewport","bounds","scale","scrollState","camera","hud","position","rect"],ne=["track","margin","inViewportMargin","inViewportThreshold","priority"],oe=["bounds"],ie=function(e){var n=e.track,o=e.children,i=e.margin,l=void 0===i?0:i,a=e.visible,u=void 0===a||a,c=e.hideOffscreen,s=void 0===c||c,d=e.debug,f=void 0!==d&&d,v=e.orthographic,p=void 0!==v&&v,g=e.priority,m=void 0===g?I.PRIORITY_VIEWPORTS:g,b=e.inViewport,w=e.bounds,y=e.scale,S=e.scrollState,E=e.camera,T=e.hud,L=C(e,re),M=r.useThree(function(e){return e.scene}),k=r.useThree(function(e){return e.get}),_=r.useThree(function(e){return e.setEvents}),V=U().renderViewport;return O(function(){M.visible=s?b&&u:u},[b,s,u]),t.useEffect(function(){var e=k().events.connected;return _({connected:n.current}),function(){return _({connected:e})}},[]),r.useFrame(function(e){var t=e.scene;t.visible&&V({gl:e.gl,scene:t,camera:e.camera,left:w.left-l,top:w.positiveYUpBottom-l,width:w.width+2*l,height:w.height+2*l,clearDepth:!!T})},m),h.default.createElement(h.default.Fragment,null,!p&&h.default.createElement(x,R({manual:!0,margin:l,makeDefault:!0},E)),p&&h.default.createElement(P,R({manual:!0,margin:l,makeDefault:!0},E)),(!o||f)&&y&&h.default.createElement(N,{scale:y}),o&&y&&o(R({track:n,margin:l,scale:y,scrollState:S,inViewport:b,priority:m},L)))};function le(e,r,n){void 0===r&&(r={});var o=void 0===n?{}:n,i=o.key,a=o.dispose,u=void 0===a||a,c=L(function(e){return e.updateCanvas}),s=L(function(e){return e.renderToCanvas}),d=L(function(e){return e.removeFromCanvas}),f=t.useMemo(function(){return i||l.MathUtils.generateUUID()},[]);O(function(){s(f,e,R({},r,{inactive:!1}))},[f]),t.useEffect(function(){return function(){d(f,u)}},[f]);var v=t.useCallback(function(e){c(f,e)},[c,f]);return t.useEffect(function(){v(r)},[].concat(Object.values(r))),v}var ae=["children","id","dispose"],ue=t.forwardRef(function(e,t){var r=e.children,n=e.id,o=e.dispose,i=void 0===o||o,l=C(e,ae);return r?(le(r,R({},l,{ref:t}),{key:n,dispose:i}),null):null}),ce=!1;w.default.then(function(e){ce=e});var se=t.forwardRef(function(e,r){var n=e.children,o=e.enabled,i=void 0===o||o,l=e.locked,a=void 0!==l&&l,u=e.scrollRestoration,c=void 0===u?"auto":u,s=e.disablePointerOnScroll,d=void 0===s||s,f=e.horizontal,v=void 0!==f&&f,p=e.scrollInContainer,h=void 0!==p&&p,g=e.updateGlobalState,m=void 0===g||g,b=e.onScroll,w=e.config,y=void 0===w?{}:w,E=e.invalidate,C=void 0===E?function(){}:E,T=e.addEffect,I=t.useRef(),M=t.useRef(!1),k=L(function(e){return e.scroll});t.useImperativeHandle(r,function(){return{start:function(){var e;return null==(e=I.current)?void 0:e.start()},stop:function(){var e;return null==(e=I.current)?void 0:e.stop()},on:function(e,t){var r;return null==(r=I.current)?void 0:r.on(e,t)},notify:function(){var e;return null==(e=I.current)?void 0:e.emit()},emit:function(){var e;return null==(e=I.current)?void 0:e.emit()},scrollTo:function(e,t){var r;return null==(r=I.current)?void 0:r.scrollTo(e,t)},raf:function(e){var t;return null==(t=I.current)?void 0:t.raf(e)},__lenis:I.current}});var x=t.useCallback(function(e){d&&M.current!==e&&(M.current=e,document.documentElement.style.pointerEvents=e?"none":"auto")},[d,M]);return O(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=c)},[]),O(function(){var e,t,r=document.documentElement,n=document.body,o=document.body.firstElementChild;return r.classList.toggle("ScrollRig-scrollHtml",h),n.classList.toggle("ScrollRig-scrollWrapper",h),h&&Object.assign(y,{smoothTouch:!0,wrapper:n,content:o}),I.current=new S.default(R({orientation:v?"horizontal":"vertical"},y,i?{}:{smoothWheel:!1,syncTouch:!1,smoothTouch:!1})),T?e=T(function(e){var t;return null==(t=I.current)?void 0:t.raf(e)}):(t=requestAnimationFrame(function e(r){var n;null==(n=I.current)||n.raf(r),t=requestAnimationFrame(e)}),e=function(){return cancelAnimationFrame(t)}),function(){var t;e(),null==(t=I.current)||t.destroy()}},[i]),O(function(){var e=I.current,t=function(e){var t=e.scroll,r=e.limit,n=e.velocity,o=e.direction,i=e.progress,l=v?t:0;m&&(k.y=v?0:t,k.x=l,k.limit=r,k.velocity=n,k.direction=o,k.progress=i||0),Math.abs(n)>1.5&&x(!0),Math.abs(n)<1&&x(!1),b&&b({scroll:t,limit:r,velocity:n,direction:o,progress:i}),C()};return null==e||e.on("scroll",t),m&&(k.scrollDirection=v?"horizontal":"vertical",L.setState({__lenis:e,scrollTo:function(){null==e||e.scrollTo.apply(e,[].slice.call(arguments))},onScroll:function(t){return null==e||e.on("scroll",t),null==e||e.emit(),function(){return null==e?void 0:e.off("scroll",t)}}}),L.getState().scroll.y=window.scrollY,L.getState().scroll.x=window.scrollX),null==e||e.emit(),function(){null==e||e.off("scroll",t),m&&L.setState({__lenis:void 0,onScroll:function(){return function(){}},scrollTo:function(){}})}},[i]),O(function(){var e=function(){return C()},t=function(){return x(!1)};return window.addEventListener("pointermove",t),window.addEventListener("pointerdown",t),window.addEventListener("wheel",e),function(){window.removeEventListener("pointermove",t),window.removeEventListener("pointerdown",t),window.removeEventListener("wheel",e)}},[]),t.useEffect(function(){return m&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),L.setState({hasSmoothScrollbar:i})),function(){document.documentElement.classList.remove("js-smooth-scrollbar-enabled"),document.documentElement.classList.remove("js-smooth-scrollbar-disabled")}},[i]),t.useEffect(function(){var e,t;a?null==(e=I.current)||e.stop():null==(t=I.current)||t.start()},[a]),n?n({}):null}),de=t.forwardRef(function(e,t){var n=L(function(e){return e.isCanvasAvailable});return h.default.createElement(se,R(n?{key:"r3f",ref:t,invalidate:r.invalidate,addEffect:r.addEffect}:{key:"native",ref:t},e))});e.GlobalCanvas=function(e){var t=e.children,r=e.onError,n=C(e,H);return O(function(){document.documentElement.classList.add("js-has-global-canvas"),L.setState({isCanvasAvailable:!0})},[]),h.default.createElement(Q,{onError:function(e){r&&r(e),L.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},h.default.createElement(X,R({},n),t),h.default.createElement("noscript",null,h.default.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},e.ScrollScene=function(e){var n=e.track,o=e.children,i=e.margin,a=void 0===i?0:i,u=e.inViewportMargin,c=e.inViewportThreshold,s=e.visible,d=void 0===s||s,f=e.hideOffscreen,v=void 0===f||f,p=e.scissor,g=void 0!==p&&p,m=e.debug,b=void 0!==m&&m,w=e.as,y=void 0===w?"scene":w,S=e.priority,E=void 0===S?I.PRIORITY_SCISSORS:S,T=e.scene,M=C(e,te),k=t.useCallback(function(e){null!==e&&P(e)},[]),x=t.useState(g?new l.Scene:T||null),_=x[0],P=x[1],V=U(),D=V.requestRender,j=V.renderScissor,A=L(function(e){return e.globalRender}),q=ee(n,{rootMargin:u,threshold:c}),z=q.bounds,F=q.scale,Y=q.position,B=q.scrollState,Q=q.inViewport;O(function(){_&&(_.visible=v?Q&&d:d)},[_,Q,v,d]),t.useEffect(function(){_&&(_.position.y=Y.y,_.position.x=Y.x)},[F,_,Q]),r.useFrame(function(e){var t=e.gl,r=e.camera;_&&_.visible&&(_.position.y=Y.y,_.position.x=Y.x,g?j({gl:t,scene:_,camera:r,left:z.left-a,top:z.positiveYUpBottom-a,width:z.width+2*a,height:z.height+2*a}):D())},A?E:void 0);var W=h.default.createElement(h.default.Fragment,null,(!o||b)&&F&&h.default.createElement(N,{scale:F}),o&&_&&F&&o(R({track:n,margin:a,scene:_,scale:F,scrollState:B,inViewport:Q,priority:E},M))),G=y;return(g||T)&&_?r.createPortal(W,_):h.default.createElement(G,{ref:k},W)},e.SmoothScrollbar=de,e.UseCanvas=ue,e.ViewportScrollScene=function(e){var n=e.track,o=e.margin,i=void 0===o?0:o,a=e.inViewportMargin,u=e.inViewportThreshold,c=e.priority,s=C(e,ne),d=t.useState(function(){return new l.Scene})[0],f=ee(n,{rootMargin:a,threshold:u}),v=f.bounds,p=C(f,oe),g=t.useCallback(function(e,t){n.current&&e.target===n.current&&(t.pointer.set((e.clientX-v.left+i)/(v.width+2*i)*2-1,-(e.clientY-v.top+i)/(v.height+2*i)*2+1),t.raycaster.setFromCamera(t.pointer,t.camera))},[v]);return v&&r.createPortal(h.default.createElement(ie,R({track:n,bounds:v,priority:c,margin:i},s,p)),d,{events:{compute:g,priority:c},size:{width:v.width,height:v.height}})},e.styles={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"},e.useCanvas=le,e.useCanvasStore=L,e.useImageAsTexture=function(e,n){var o,i,a=void 0===n?{}:n,u=a.initTexture,c=void 0===u||u,d=a.premultiplyAlpha,f=void 0===d?"default":d,v=r.useThree(function(e){return e.gl}),p=K(),h=L(function(e){return e.debug}),g=t.useState(null==(o=e.current)?void 0:o.currentSrc),m=g[0],b=g[1];t.useEffect(function(){var t=e.current,r=function(){var t;b(null==(t=e.current)?void 0:t.currentSrc)};return null==t||t.addEventListener("load",r),function(){return null==t?void 0:t.removeEventListener("load",r)}},[e,m,b]);var w,S,R,E=s.suspend(function(){return l.DefaultLoadingManager.itemStart("waiting for DOM image"),new Promise(function(t){var r=e.current;function n(){t(null==r?void 0:r.currentSrc),l.DefaultLoadingManager.itemEnd("waiting for DOM image")}null==r||r.addEventListener("load",n,{once:!0}),null!=r&&r.complete&&(null==r||r.removeEventListener("load",n),n())})},[e,p,null==(i=e.current)?void 0:i.currentSrc,m],{equal:y.default}),C=(w=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),R=(S=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||w||S&&Number(R)<98?l.TextureLoader:l.ImageBitmapLoader),T=r.useLoader(C,E,function(e){e instanceof l.ImageBitmapLoader&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:f,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(ce?"image/webp,":"")+"*/*"}))}),O=t.useMemo(function(){return T instanceof l.Texture?T:T instanceof ImageBitmap?new l.CanvasTexture(T):void 0},[T]);return t.useEffect(function(){c&&v.initTexture(O),h&&console.log("useImageAsTexture","initTexture()")},[v,O,c]),O},e.useScrollRig=U,e.useScrollbar=$,e.useTracker=ee});
//# sourceMappingURL=scrollrig.umd.js.map
