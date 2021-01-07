(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),r=(n(0),n(91)),c={id:"callbacks-vs-methods",title:"Callbacks vs Methods"},l={unversionedId:"guides/callbacks-vs-methods",id:"guides/callbacks-vs-methods",isDocsHomePage:!1,title:"Callbacks vs Methods",description:"To begin, let's quickly define two Luau terms:",source:"@site/docs/guides/callbacks-vs-methods.mdx",slug:"/guides/callbacks-vs-methods",permalink:"/docs/guides/callbacks-vs-methods",editUrl:"https://github.com/roblox-ts/roblox-ts.github.io/blob/master/docs/guides/callbacks-vs-methods.mdx",version:"current",sidebar:"docs",previous:{title:"LuaTuple<T>",permalink:"/docs/guides/lua-tuple"},next:{title:"Lua Packages",permalink:"/docs/guides/lua-packages"}},i=[{value:"Callbacks",id:"callbacks",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Overrides",id:"overrides",children:[]}],b={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To begin, let's quickly define two Luau terms:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'A "callback" is a function that is called in the form of ',Object(r.b)("inlineCode",{parentName:"li"},"foo.bar()"),"."),Object(r.b)("li",{parentName:"ol"},'A "method" is a function that is called in the form of ',Object(r.b)("inlineCode",{parentName:"li"},"foo:bar()"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The parameter ",Object(r.b)("inlineCode",{parentName:"li"},"self")," is implicitly passed as the value of ",Object(r.b)("inlineCode",{parentName:"li"},"foo"),".")))),Object(r.b)("p",null,"However, in TypeScript, all functions inside of objects are called as simply ",Object(r.b)("inlineCode",{parentName:"p"},"foo.bar()"),". To decide whether or not a function call should compile using ",Object(r.b)("inlineCode",{parentName:"p"},".")," or ",Object(r.b)("inlineCode",{parentName:"p"},":"),", roblox-ts follows a simple set of rules:"),Object(r.b)("h2",{id:"callbacks"},"Callbacks"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Function declarations are considered ",Object(r.b)("strong",{parentName:"li"},"callbacks"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"function foo(bar: number) {}\nconst obj = { foo: foo };\nobj.foo(123); // obj.foo(123)\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Arrow function expressions are considered ",Object(r.b)("strong",{parentName:"li"},"callbacks"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"const obj = {\n    foo: (bar: number) => {}\n}\nobj.foo(123); // obj.foo(123)\n")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Method declarations are considered ",Object(r.b)("strong",{parentName:"li"},"methods"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"const obj = {\n    foo(bar: number) {}\n}\nobj.foo(123); // obj:foo(123)\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Function expressions inside of object literals are considered ",Object(r.b)("strong",{parentName:"li"},"methods"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"const obj = {\n    foo: function (bar: number) {}\n}\nobj.foo(123); // obj:foo(123)\n")),Object(r.b)("h2",{id:"overrides"},"Overrides"),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"If a function has a parameter ",Object(r.b)("inlineCode",{parentName:"li"},"this: void"),", it is ",Object(r.b)("em",{parentName:"li"},"always")," considered to be a ",Object(r.b)("strong",{parentName:"li"},"callback"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"const obj = {\n    foo(this: void, bar: number) {}\n}\nobj.foo(123); // obj.foo(123)\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"If a function has a parameter ",Object(r.b)("inlineCode",{parentName:"li"},"this")," which is typed as anything except ",Object(r.b)("inlineCode",{parentName:"li"},"void"),", it is ",Object(r.b)("em",{parentName:"li"},"always")," considered to be a ",Object(r.b)("strong",{parentName:"li"},"method"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"declare const obj: {\n    foo: (this: typeof obj, bar: number) => void;\n}\nobj.foo(123); // obj:foo(123)\n")))}s.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var b=2;b<r;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);