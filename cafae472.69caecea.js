(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{247:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(9),b=(a(0),a(269)),c={id:"_loaders_github_src_index_.githubloader",title:"GithubLoader",sidebar_label:"GithubLoader"},l={id:"api/classes/_loaders_github_src_index_.githubloader",isDocsHomePage:!1,title:"GithubLoader",description:"This loader loads a file from GitHub.",source:"@site/docs/api/classes/_loaders_github_src_index_.githubloader.md",permalink:"/docs/api/classes/_loaders_github_src_index_.githubloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/_loaders_github_src_index_.githubloader.md",sidebar_label:"GithubLoader",sidebar:"someSidebar",previous:{title:"FilterTypes",permalink:"/docs/api/classes/_wrap_src_index_.filtertypes"},next:{title:"GitLoader",permalink:"/docs/api/classes/_loaders_git_src_index_.gitloader"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]}]}],o={rightToc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This loader loads a file from GitHub."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const typeDefs = await loadTypedefs('github:githubUser/githubRepo#branchName:path/to/file.ts', {\n  loaders: [new GithubLoader()],\n  token: YOUR_GITHUB_TOKEN,\n})\n")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"GithubLoader"))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"../interfaces/_utils_src_index_.loader"}),"Loader"),"\u2039",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"../interfaces/_loaders_github_src_index_.githubloaderoptions"}),"GithubLoaderOptions"),"\u203a")),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_github_src_index_.githubloader#canload"}),"canLoad")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_github_src_index_.githubloader#canloadsync"}),"canLoadSync")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_github_src_index_.githubloader#load"}),"load")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_github_src_index_.githubloader#loadsync"}),"loadSync")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/classes/_loaders_github_src_index_.githubloader#loaderid"}),"loaderId"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"canload"},"canLoad"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"canLoad"),"(",Object(b.b)("inlineCode",{parentName:"p"},"pointer"),": string): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039boolean\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/github/src/index.ts#L55"}),"packages/loaders/github/src/index.ts:55"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"pointer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039boolean\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"canloadsync"},"canLoadSync"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"canLoadSync"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/github/src/index.ts#L59"}),"packages/loaders/github/src/index.ts:59"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"load"},"load"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"load"),"(",Object(b.b)("inlineCode",{parentName:"p"},"pointer"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"../interfaces/_loaders_github_src_index_.githubloaderoptions"}),"GithubLoaderOptions"),"): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"../interfaces/_utils_src_index_.source"}),"Source")," | object\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/github/src/index.ts#L63"}),"packages/loaders/github/src/index.ts:63"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"pointer")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"../interfaces/_loaders_github_src_index_.githubloaderoptions"}),"GithubLoaderOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"../interfaces/_utils_src_index_.source"}),"Source")," | object\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loadsync"},"loadSync"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loadSync"),"(): ",Object(b.b)("em",{parentName:"p"},"never")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/github/src/index.ts#L126"}),"packages/loaders/github/src/index.ts:126"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"never")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loaderid"},"loaderId"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loaderId"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"../interfaces/_utils_src_index_.loader"}),"Loader"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/github/src/index.ts#L51"}),"packages/loaders/github/src/index.ts:51"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")))}s.isMDXComponent=!0},269:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,O=d["".concat(c,".").concat(u)]||d[u]||p[u]||b;return a?n.a.createElement(O,l({ref:t},o,{components:a})):n.a.createElement(O,l({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);