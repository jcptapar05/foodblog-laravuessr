import{p as m,C as f,f as l,a as c,w as d,u as i,F as u,o as s,X as g,b as e,i as x,q as _,k as b,c as h,s as v,n as k,l as y,g as w,O as F}from"./app-d56b5cb4.js";import{_ as C}from"./Cards-14458104.js";import{_ as B}from"./BlogLayout-8a8c282d.js";import"./_plugin-vue_export-helper-c27b6911.js";const T=e("title",null,"Filipino Kitchen: Authentic Recipes & Culinary Adventures",-1),A=e("meta",{"head-key":"description",name:"description",content:"Experience the Best of the Philippines with our Recipes and Travel Guide. Discover Authentic Filipino Cuisine and Amazing Travel Destinations."},null,-1),N={class:"px-4"},O=e("div",{class:"text-center"},[e("h1",{class:"mb-32 font-black text-7xl"},"Filipino Foods recipes")],-1),V={key:1,class:"text-center"},j=e("img",{class:"h-96 w-100 mx-auto",src:"/storage/image/not-found/not-found.png",alt:"404 Not Found Image"},null,-1),D=[j],L={key:2,class:"flex justify-center space-x-4"},I={__name:"Index",props:{blogs:Object,filters:Object},setup(a){let n=m(a.filters.search);return f(n,o=>{F.get("/foods",{search:o},{preserveState:!0,replace:!0})}),(o,r)=>(s(),l(u,null,[c(i(g),null,{default:d(()=>[T,A]),_:1}),c(B,null,{default:d(()=>[e("div",N,[O,e("div",null,[x(e("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>b(n)?n.value=t:n=t),type:"text",class:"rounded-3xl ps-6",placeholder:"Search..."},null,512),[[_,i(n)]])]),a.blogs.data.length>0?(s(),h(C,{key:0,blogs:a.blogs.data,class:"my-16"},null,8,["blogs"])):(s(),l("div",V,D)),a.blogs.links.length>3?(s(),l("div",L,[(s(!0),l(u,null,v(a.blogs.links,(t,p)=>(s(),h(i(y),{key:p,class:k(["px-4 py-3 text-sm leading-4 rounded hover:bg-green-500 hover:text-white",t.active&&"text-white bg-green-600"]),href:t.url,innerHTML:t.label},null,8,["class","href","innerHTML"]))),128))])):w("",!0)])]),_:1})],64))}};export{I as default};