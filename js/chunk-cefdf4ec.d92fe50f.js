(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cefdf4ec"],{3574:function(e,t,r){"use strict";r("35db")},"35db":function(e,t,r){},"474c":function(e,t,r){"use strict";r.r(t);var n=r("7a23");Object(n["z"])("data-v-40434a38");var o={key:0},i={key:0,class:"pb-10"},a={class:"py-4 text-center"},c={class:"text-2xl font-bold dark:text-white poppins"},d={class:"mx-2 md:w-2/3 md:mx-auto"},s=["innerHTML"],b={class:"mt-3"},l=["innerHTML"],u=["innerHTML"],g=["innerHTML"],h=["innerHTML"],f={key:0,class:"my-2 poppins"},j=["innerHTML"],p={key:1},O=Object(n["h"])("h2",{class:"mt-10 text-2xl text-center dark:text-white"}," You must participate in the exam or you will not be able to view this solution untill time ends. ",-1),m=[O],w={key:1,class:"flex items-center justify-center w-full h-screen"},k=Object(n["h"])("div",{class:"\r\n        flex\r\n        items-center\r\n        justify-center\r\n        -mt-24\r\n        space-x-1\r\n        text-sm text-gray-700\r\n        dark:text-white\r\n      "},[Object(n["h"])("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[Object(n["h"])("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),Object(n["h"])("div",{class:"text-lg"},"Loading ...")],-1),v=[k];function x(e,t,r,O,k,x){return k.solution.length>0?(Object(n["w"])(),Object(n["g"])("div",o,[k.unknown?(Object(n["w"])(),Object(n["g"])("div",p,m)):(Object(n["w"])(),Object(n["g"])("div",i,[Object(n["h"])("div",a,[Object(n["h"])("h1",c," Solution for Exam - "+Object(n["H"])(this.$route.params.id),1)]),Object(n["h"])("div",d,[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(k.solution,(function(e,t){return Object(n["w"])(),Object(n["g"])("div",{key:t,class:"\r\n            p-5\r\n            mx-auto\r\n            my-3\r\n            text-lg\r\n            border border-gray-300\r\n            rounded-md\r\n            shadow-lg\r\n            bg-gray-50\r\n            dark:bg-black dark:text-white\r\n            kalpurush\r\n          "},[Object(n["h"])("div",{innerHTML:e.question},null,8,s),Object(n["h"])("div",b,[e.a?(Object(n["w"])(),Object(n["g"])("div",{key:0,innerHTML:e.a,class:Object(n["q"])("cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded  ".concat(e.a==e.correct?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"))},null,10,l)):Object(n["f"])("",!0),e.b?(Object(n["w"])(),Object(n["g"])("div",{key:1,innerHTML:e.b,class:Object(n["q"])("cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ".concat(e.b==e.correct?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"))},null,10,u)):Object(n["f"])("",!0),e.c?(Object(n["w"])(),Object(n["g"])("div",{key:2,innerHTML:e.c,class:Object(n["q"])("cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ".concat(e.c==e.correct?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"))},null,10,g)):Object(n["f"])("",!0),e.d?(Object(n["w"])(),Object(n["g"])("div",{key:3,innerHTML:e.d,class:Object(n["q"])("cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ".concat(e.d==e.correct?"border-2 border-green-500 bg-green-300 dark:bg-indigo-400 dark:border-indigo-500 ":"dark:bg-gray-600 bg-gray-200 dark:text-white"))},null,10,h)):Object(n["f"])("",!0)]),e.explain?(Object(n["w"])(),Object(n["g"])("h2",f,"Explain:")):Object(n["f"])("",!0),e.explain?(Object(n["w"])(),Object(n["g"])("div",{key:1,class:"\r\n              p-3\r\n              my-3\r\n              bg-gray-200\r\n              border border-green-500\r\n              rounded\r\n              dark:bg-gray-600\r\n            ",innerHTML:e.explain},null,8,j)):Object(n["f"])("",!0)])})),128))])]))])):(Object(n["w"])(),Object(n["g"])("div",w,v))}Object(n["x"])();r("d3b7"),r("99af");var y=r("dce4"),L={data:function(){return{solution:[],loading:!1,unknown:!1}},beforeRouteEnter:function(e,t,r){var n=JSON.parse(localStorage.getItem("ssrb")).roll;n?r():r({path:"/login"})},methods:{endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink:function(){var e=this;fetch("".concat(y["c"],"?type=").concat(this.$route.params.type,"&id=").concat(this.$route.params.id)).then((function(e){return e.json()})).then((function(t){e.url=y["b"]+t.exam.examsheetid;var r=JSON.parse(localStorage.getItem("ssrb")).roll;fetch(e.url+"&type=check&phone="+r).then((function(e){return e.json()})).then((function(r){"exists"==r.message||new Date(t.exam.exmend).getTime()<Date.now()?(fetch(e.url+"&type=question").then((function(e){return e.json()})).then((function(t){e.solution=t})),e.loading=!1):e.unknown=!0}))}))}},created:function(){this.getQuestionLink()}};r("3574");L.render=x,L.__scopeId="data-v-40434a38";t["default"]=L},"99af":function(e,t,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),a=r("861d"),c=r("7b0b"),d=r("50c4"),s=r("8418"),b=r("65f0"),l=r("1dde"),u=r("b622"),g=r("2d00"),h=u("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",p=g>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),O=l("concat"),m=function(e){if(!a(e))return!1;var t=e[h];return void 0!==t?!!t:i(e)},w=!p||!O;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,o,i,a=c(this),l=b(a,0),u=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?a:arguments[t],m(i)){if(o=d(i.length),u+o>f)throw TypeError(j);for(r=0;r<o;r++,u++)r in i&&s(l,u,i[r])}else{if(u>=f)throw TypeError(j);s(l,u++,i)}return l.length=u,l}})}}]);