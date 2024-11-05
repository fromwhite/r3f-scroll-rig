!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@react-three/fiber"),require("@react-three/drei"),require("r3f-scroll-rig"),require("three")):"function"==typeof define&&define.amd?define(["exports","react","@react-three/fiber","@react-three/drei","r3f-scroll-rig","three"],t):t((e||self).r3FScrollRig={},e.React,e["@react-three/fiber"],e["@react-three/drei"],e["r3f-scroll-rig"],e.three)}(this,function(e,t,r,i,n,o){function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=/*#__PURE__*/l(t);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(r=o[i])>=0||(n[r]=e[r]);return n}var c=["el","children","material","scale","font","fontOffsetY","fontOffsetX","overrideEmissive","color"],h=["el","scale","scrollState","vertexShader","fragmentShader","invalidateFrameLoop","widthSegments","heightSegments"],m=t.forwardRef(function(e,i){var l=e.el,c=e.scale,m=e.scrollState,f=e.vertexShader,d=e.fragmentShader,p=e.invalidateFrameLoop,v=void 0!==p&&p,g=e.widthSegments,y=void 0===g?128:g,w=e.heightSegments,b=void 0===w?128:w,S=a(e,h),E=t.useRef(null),x=t.useRef(null);t.useImperativeHandle(i,function(){return x.current});var A=r.useThree(),T=A.invalidate,M=A.gl,R=A.size,_=r.useThree(function(e){return e.viewport.dpr}),N=n.useScrollbar().scroll,z=n.useScrollRig().scaleMultiplier,k=n.useImageAsTexture(l),V=t.useMemo(function(){return{u_color:{value:new o.Color("black")},u_time:{value:0},u_pixelRatio:{value:_},u_progress:{value:0},u_visibility:{value:0},u_viewport:{value:0},u_velocity:{value:0},u_res:{value:new o.Vector2},u_rect:{value:new o.Vector2},u_size:{value:new o.Vector2},u_texture:{value:null},u_loaded:{value:!1},u_scaleMultiplier:{value:z}}},[_]);t.useEffect(function(){k&&E.current&&(E.current.uniforms.u_texture.value=k,E.current.uniforms.u_size.value.set(k.image.width,k.image.height),E.current.uniforms.u_loaded.value=!0)},[k,M]),t.useEffect(function(){E.current&&(E.current.uniforms.u_res.value.set(R.width,R.height),E.current.uniforms.u_rect.value.set(null==c?void 0:c[0],null==c?void 0:c[1]))},[R,c]),r.useFrame(function(e,t){m.inViewport&&x.current&&E.current&&E.current.uniforms.u_loaded.value&&(E.current.uniforms.u_time.value+=t,E.current.uniforms.u_rect.value.set(x.current.scale.x,x.current.scale.y),E.current.uniforms.u_velocity.value=N.velocity,E.current.uniforms.u_progress.value=m.progress,E.current.uniforms.u_visibility.value=m.visibility,E.current.uniforms.u_viewport.value=m.viewport,v&&T())});var F=t.useMemo(function(){return[{vertexShader:f,fragmentShader:d}]},[f,d]);return u.default.createElement(u.default.Fragment,null,u.default.createElement("mesh",s({ref:x},S),u.default.createElement("planeGeometry",{attach:"geometry",args:[1,1,y,b]}),u.default.createElement("shaderMaterial",{ref:E,args:F,transparent:!0,uniforms:V})))}),f=["children","speed"],d=function(e){var i=e.children,o=e.scrollState,l=e.parallax,s=t.useRef(null),a=r.useThree(function(e){return e.size}),c=n.useScrollRig().scaleMultiplier;return r.useFrame(function(){o.inViewport&&(s.current.position.y=l*(2*o.progress-1)*c*a.height)}),u.default.createElement("mesh",{ref:s},i)};let p=new Proxy({},{get:function(e,t){return e.hasOwnProperty(t)||(e[t]=y(t)),e[t]}});class v extends Array{constructor(e,t){if(!(t=E(t)).every(e=>"Number"===A(e)))throw new TypeError("All arguments must be numbers.");if(t.length>1&&t.length!==e)throw new Error("Argument list must be empty, have a single number, or have a length equal to the dimension.");0===t.length&&(t=[0]),1===t.length&&"Number"===A(t[0])&&(t=Array(e).fill(t[0])),e>1?super(...t):(super(1),this[0]=t[0]),Reflect.defineProperty(this,"pop",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"push",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"shift",{value:void 0,enumerable:!1}),Reflect.defineProperty(this,"unshift",{value:void 0,enumerable:!1})}get magnitude(){return this.pnorm(2)}div(e){S(e,this.dim,!0),"Number"===A(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.length;++r)t[r]=this[r]/e[r];return p[this.dim](t)}minus(e){S(e,this.dim,!0),"Number"===A(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]-e[r];return p[this.dim](t)}neg(){return p[this.dim](this.times(-1))}plus(e){S(e,this.dim,!0),"Number"===A(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]+e[r];return p[this.dim](t)}pow(e){let t=[];for(let r=0;r<this.dim;++r)t[r]=Math.pow(this[r],e);return p[this.dim](t)}times(e){S(e,this.dim,!0),"Number"===A(e)&&(e=new Array(this.dim).fill(e));let t=[];for(let r=0;r<this.dim;++r)t[r]=this[r]*e[r];return p[this.dim](t)}dot(e){S(e,this.dim);let t=0;for(let r=0;r<this.dim;++r)t+=this[r]*e[r];return t}normalize(){return this.div(this.magnitude)}pnorm(e){let t=0;for(let r=0;r<this.dim;++r)t+=Math.pow(Math.abs(this[r]),e);return Math.pow(t,1/e)}reflect(e){const t=e.normalize();return this.minus(t.times(2*this.dot(t)))}argmax(){const e=this.max();return this.reduce((t,r,i)=>r===e?t.concat([i]):t,[])}argmin(){const e=this.min();return this.reduce((t,r,i)=>r===e?t.concat([i]):t,[])}choose(e){if(!Array.isArray(e))throw new TypeError("Argument must be a list of indices.");if(!e.every(e=>e<this.dim&&x(e.toString())))throw new RangeError("All elements of argument must be valid indices.");let t=[];return e.forEach(e=>t.push(this[e])),p[t.length](t)}copy(){return p[this.dim](this)}equals(e){return e.length===this.dim&&e.every((e,t)=>this[t]===e)}approximatelyEquals(e,t=1e-8){return e.length===this.dim&&e.every((e,r)=>Math.abs(this[r]-e)<t)}max(){return Math.max(...this)}min(){return Math.min(...this)}sum(){return this.reduce((e,t)=>e+t,0)}toArray(){return Array.from(this)}concat(...e){const t=super.concat.apply(this.toArray(),e);return p[t.length](t)}filter(...e){const t=super.filter.apply(this.toArray(),e);return t.length>0?p[t.length](t):t}map(...e){const t=super.map(...e);return t.every(e=>"Number"===A(e))?t:t.toArray()}slice(...e){const t=super.slice.apply(this.toArray(),e);return t.length>0?p[t.length](t):t}splice(...e){let t=this.toArray();if(t.splice(...e),t.length!==this.dim)throw new Error("All removed elements must be replaced.");if(!t.every(e=>"Number"===A(e)))throw new TypeError("All elements must be numbers.");t.forEach((e,t)=>{this[t]=e})}toString(){return this.reduce((e,t,r)=>e+t+(r===this.dim-1?" ":", "),"[ ")+"]"}}const g={set:function(e,t,r){if("length"===t)return!1;if(x(t)){if(Number(t)>=e.dim)throw new RangeError("Vector may not have more elements than dimension.");if("Number"!==A(r))throw new TypeError("Vectors may only contain numbers.");return e[t]=r,!0}const i=b(t.toString());return!!(e.dim<=4&&i)&&(function(e,t,r,i){if(1===t.length){if("Number"!==A(i))throw new TypeError("Must set to a number");return void(e[r[t]]=i)}if(!Array.isArray(i))throw new TypeError("Right-hand side must be an array.");if(t.length!==i.length)throw new TypeError("Right-hand side must have matching length.");if(!i.every(e=>"Number"===A(e)))throw new TypeError("All new values must be numbers.");if(t.split("").some(t=>r[t]>=e.dim))return;let n=!0;for(let e=0,r={};e<t.length;++e){if(r.hasOwnProperty(t[e])){n=!1;break}r[t[e]]=!0}if(!n)throw new SyntaxError("Swizzle assignment does not allow symbols to be repeated.");t.split("").map(e=>r[e]).forEach((t,r)=>{e[t]=i[r]})}(e,t.toString(),i,r),!0)},get:function(e,t){const r=b(t.toString());return e.dim<=4&&r?function(e,t,r){const i=t.length;if(1===i)return e[r[t]];let n=t.split("").reduce((t,i)=>{let n=r[i];return t&&n<e.dim?t.concat([e[n]]):void 0},[]);return n?new p[i](...n):void 0}(e,t,r):e[t]}};function y(e){if(!((e=Number(e))in p)){if(isNaN(e))throw new TypeError("Dimension must be coercible to a number.");if(e<=0)throw new RangeError("Dimension must be positive.");if(!Number.isInteger(e))throw new RangeError("Dimension must be positive.");let t="vec"+e,r={[t]:class extends v{constructor(...t){if(1===t.length&&t[0]instanceof v){if(t[0].dim>e)throw new TypeError("Cannot demote vectors.");t=function(e,t){return[...Array(t)].map((t,r)=>r<e.length?e[r]:0)}(t[0].toArray(),e)}super(e,t),Reflect.defineProperty(this,"dim",{value:e,writable:!1,enumerable:!1})}}}[t];p[e]=function(...e){let t=new r(...e);return Object.preventExtensions(t),new Proxy(t,g)}}return p[e]}const w=[{x:0,y:1,z:2,w:3},{r:0,g:1,b:2,a:3},{s:0,t:1,p:2,q:3}];function b(e){return w.find(t=>e.split("").every(e=>e in t))}function S(e,t,r=!1){if(!(r&&"Number"===A(e)||e.length&&e.length===t))throw new TypeError(`Invalid argument. Input must have matching dimension${r?"or be a scalar":""}.`)}function E(e){return e instanceof Array&&1===e.length&&e[0]instanceof Array?E(e[0]):e}function x(e){return!isNaN(e)&&Number(e).toString()===e&&Number.isInteger(Number(e))&&Number(e)>=0}function A(e){return Object.prototype.toString.call(e).slice(8,-1)}var T={getVecType:y,isVec:function(e){return e instanceof v},vec2:p[2],vec3:p[3],vec4:p[4],add:function(...e){const t=e[0].dim;if(!e.every(e=>e.dim===t))throw new TypeError("All vectors must have the same dimension.");return e.reduce((e,t)=>e.plus(t),p[t]())},multiply:function(...e){const t=e[0].dim;if(!e.every(e=>e.dim===t))throw new TypeError("All vectors must have the same dimension.");return e.reduce((e,t)=>e.times(t),p[t](1))},lerp:function(e,t,r){if(e.dim!==t.dim)throw new TypeError("Vectors must have the same dimension.");return r=r<0?0:r>1?1:r,e.plus(t.minus(e).times(r))},slerp:function(e,t,r){if(e.dim!==t.dim)throw new TypeError("Vectors must have the same dimension.");r=r<0?0:r>1?1:r;let i=e.normalize().dot(t.normalize());i=i<-1?-1:i>1?1:i;const n=Math.acos(i)*r,o=t.minus(e.times(i)).normalize(),l=e.magnitude+(t.magnitude-e.magnitude)*r;return e.times(Math.cos(n)).plus(o.times(Math.sin(n))).normalize().times(l)}},M=["scale"],R=["children","track","stickyLerp","fillViewport"],_=function(e){var i=e.children,n=e.childTop,o=e.childBottom,l=e.scrollState,s=e.parentScale,a=e.childScale,c=e.scaleMultiplier,h=e.priority,m=e.stickyLerp,f=void 0===m?1:m,d=e.offsetTop,p=void 0===d?0:d,v=t.useRef(null),g=r.useThree(function(e){return e.size});return r.useFrame(function(e,t){if(l.inViewport){var r=.5*s[1]-.5*a[1]-p*c;v.current.position.y=function(e,t,r,i,n=60){return o=t,e*(1-(l=void 0===i?r:1-Math.pow(1-r,i/(1/n))))+o*l;var o,l}(v.current.position.y,l.viewport+(n-p)/g.height<1?r:l.visibility-o/s[1]*c<1?-n*c+r-(l.viewport-1)*g.height*c+p*c:.5*-s[1]+.5*a[1],f,t)}},h),u.default.createElement("group",{ref:v},i)};e.ParallaxScrollScene=function(e){var t=e.children,r=e.speed,i=void 0===r?1:r,o=a(e,f),l=i-1;return u.default.createElement(n.ScrollScene,s({scissor:!1,inViewportMargin:200*Math.max(0,.5)+50+"%"},o),function(e){return u.default.createElement(d,s({parallax:l},e),t(e))})},e.StickyScrollScene=function(e){var i=e.children,o=e.track,l=e.stickyLerp,c=e.fillViewport,h=a(e,R),m=r.useThree(function(e){return e.size}),f=n.useScrollRig().scaleMultiplier,d=t.useRef(o.current),p=t.useMemo(function(){var e=getComputedStyle(o.current);return"sticky"===e.position?(d.current=o.current.parentElement,"static"===getComputedStyle(d.current).position&&console.error("StickyScrollScene: parent of position:sticky needs to be position:relative or position:absolute (currently set to position:static)")):console.error("StickyScrollScene: tracked element is not position:sticky"),e},[o]);return u.default.createElement(n.ScrollScene,s({track:d},h),function(e,r,i,n,o,l){var c=l.stickyLerp,h=l.fillViewport;return function(l){var m=l.scale,f=a(l,M),d=T.vec3(parseFloat(n.width),parseFloat(n.height),1),p=parseFloat(n.top),v=i.height-p-d[1];h&&(d=T.vec3(i.width,i.height,1),p=0,v=0);var g=t.useRef(e.current.offsetTop).current;return u.default.createElement(_,s({offsetTop:g,parentScale:m,childScale:d.times(o),stickyLerp:c,childTop:p,childBottom:v,scaleMultiplier:o},f),r(s({scale:d.times(o),parentScale:m},f)))}}(o,i,m,p,f,{stickyLerp:l,fillViewport:c}))},e.WebGLImage=m,e.WebGLText=function(e){var o=e.el,l=e.children,h=e.material,m=e.scale,f=e.font,d=e.fontOffsetY,p=void 0===d?0:d,v=e.fontOffsetX,g=void 0===v?0:v,y=e.overrideEmissive,w=void 0!==y&&y,b=e.color,S=a(e,c),E=r.useThree().size,x=n.useScrollRig().scaleMultiplier,A=t.useMemo(function(){if(!o.current)return{};var e=window.getComputedStyle(o.current),t=b||e.color;return!b&&"rgba(0, 0, 0, 0)"===e.color&&o.current.parentElement&&(t=window.getComputedStyle(o.current.parentElement).color),{letterSpacing:(parseFloat(e.letterSpacing)||0)/parseFloat(e.fontSize),lineHeight:(parseFloat(e.lineHeight)||0)/parseFloat(e.fontSize),textColor:t,fontSize:parseFloat(e.fontSize)*x,textAlign:e.textAlign}},[o,E,m,b,x]),T=A.textColor,M=A.fontSize,R=A.textAlign,_=A.lineHeight,N=A.letterSpacing;t.useEffect(function(){h&&w&&(h.emissive=b)},[h,b,w]);var z=0;return"left"===R||"start"===R?z=-.5*m[0]:"right"!==R&&"end"!==R||(z=.5*m[0]),u.default.createElement(i.Text,s({fontSize:M,maxWidth:m?m[0]:E.width,lineHeight:_,textAlign:R,letterSpacing:N,overflowWrap:"break-word",font:f,color:T,anchorX:R,anchorY:"top",position:[z+M*g,(m?.5*m[1]:.5*E.height)+M*p,0],material:h},S),l)}});
//# sourceMappingURL=powerups.umd.js.map
