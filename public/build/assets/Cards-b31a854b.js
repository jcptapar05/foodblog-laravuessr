import{o as t,f as a,F as o,s as n,c as d,w as g,b as e,t as r,u as m,l as u}from"./app-d6f38387.js";const _={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"},h=["src","alt"],x={class:"p-5 grid grid-cols-1 gap-4 content-around"},p={class:"mb-2 text-3xl font-bold tracking-tight text-gray-900"},f={class:"mb-3 font-normal text-gray-700 truncate"},w={class:"w-full"},b={class:"px-3 py-2 bg-green-600 rounded-2xl text-white me-3 inline-block mb-3"},y={__name:"Cards",props:{blogs:Object},setup(l){return(c,v)=>(t(),a("div",_,[(t(!0),a(o,null,n(l.blogs,s=>(t(),d(m(u),{key:s.id,href:c.route("blog.single",s.slug),class:"max-w-sm bg-white rounded-2xl shadow hover:-translate-y-1 hover:shadow-md transition duration-150 ease-out mx-auto sm:mx-0"},{default:g(()=>[e("img",{class:"rounded-t-2xl h-60 w-screen object-cover",src:"/storage/image/"+s.image,alt:"/storage/image/"+s.name+"image"},null,8,h),e("div",x,[e("div",null,[e("h2",p,r(s.name),1),e("p",f,r(s.description),1)]),e("div",w,[(t(!0),a(o,null,n(s.categories,i=>(t(),a("small",b,r(i),1))),256))])])]),_:2},1032,["href"]))),128))]))}};export{y as _};
