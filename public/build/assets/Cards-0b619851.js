import{f as a,F as o,s as l,o as e,c as d,w as u,b as t,t as r,u as m,l as g}from"./app-9fa8ae5e.js";const h={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"},_=["src","alt"],x={class:"p-5 grid grid-cols-1 gap-4 content-around"},p={class:"mb-2 text-3xl font-bold tracking-tight text-gray-900"},f={class:"mb-3 font-normal text-gray-700 truncate"},w={class:"w-full"},b={class:"px-3 py-2 bg-green-600 rounded-2xl text-white me-3 inline-block mb-3"},y={__name:"Cards",props:{blogs:Object},setup(n){return(c,v)=>(e(),a("div",h,[(e(!0),a(o,null,l(n.blogs,s=>(e(),d(m(g),{key:s.id,href:c.route("blog.single",s.slug),class:"max-w-sm bg-white rounded-2xl shadow hover:-translate-y-1 hover:shadow-md transition duration-150 ease-out mx-auto sm:mx-0"},{default:u(()=>[t("img",{class:"rounded-t-2xl h-60 w-full object-cover",src:"/storage/"+s.image,alt:s.name+"image"},null,8,_),t("div",x,[t("div",null,[t("h2",p,r(s.name),1),t("p",f,r(s.description),1)]),t("div",w,[(e(!0),a(o,null,l(s.categories,i=>(e(),a("small",b,r(i),1))),256))])])]),_:2},1032,["href"]))),128))]))}};export{y as default};
