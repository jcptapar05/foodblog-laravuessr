import{f as s,b as e,F as u,s as h,o as a,t as o,a as r,w as d,d as n,u as c,l as _}from"./app-10798b36.js";const p={class:"w-full"},g={class:"w-full mt-10 text-center border"},y=e("thead",null,[e("tr",null,[e("th",{class:"py-6 bg-slate-200"},"Name"),e("th",{class:"py-6 bg-slate-200"},"Image"),e("th",{class:"py-6 bg-slate-200"},"Video link"),e("th",{class:"py-6 bg-slate-200"},"Actions")])],-1),b={class:"py-2 border"},m={class:"py-2 border"},f=["src","alt"],x={class:"py-2 border text-center"},w=["href"],v={class:"py-2 border"},N={__name:"BlogLists",props:{blogs:Object},setup(i){return(l,k)=>(a(),s("div",p,[e("table",g,[y,e("tbody",null,[(a(!0),s(u,null,h(i.blogs,t=>(a(),s("tr",{key:t.id},[e("td",b,o(t.name),1),e("td",m,[e("img",{src:`/storage/${t.image}`,class:"h-16 mx-auto",alt:t.name},null,8,f)]),e("td",x,[e("a",{href:t.video,target:"_blank",class:"turncate-1 mx-auto text-blue-400"},o(t.video),9,w)]),e("td",v,[r(c(_),{href:l.route("blogs.edit",t.slug),class:"rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 me-4"},{default:d(()=>[n(" Edit ")]),_:2},1032,["href"]),r(c(_),{href:l.route("blogs.destroy",t.slug),method:"delete",as:"button",class:"rounded-lg bg-red-600 hover:bg-red-700 text-white py-3 px-4"},{default:d(()=>[n(" Delete ")]),_:2},1032,["href"])])]))),128))])])]))}};export{N as default};