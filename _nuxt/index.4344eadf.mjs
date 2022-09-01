import{a as w,u as $}from"./useAuth.f5c1cf07.mjs";import{a as f,p as V,r as p,b as A,o,e as r,w as h,v as x,f as e,t as d,h as g,c as b,q as E,s as L,u as C,F as S,x as R}from"./entry.058f9019.mjs";const B=e("h1",{class:"mb-8 text-3xl text-center"},"Sign In ",-1),I={key:0,class:"p-2 font-bold text-center text-red-800"},j=f({__name:"Login",setup(v){const{signIn:s,user:_}=w(),l=V(),c=p(""),t=A({email:"",password:""}),n=async()=>{try{await s({email:t.email,password:t.password}),l.push("/add-note")}catch(u){c.value=u.message}};return(u,a)=>(o(),r("div",null,[B,h(e("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>t.email=i),type:"text",class:"block w-full p-3 mb-4 border rounded border-grey-light",name:"email",placeholder:"Email"},null,512),[[x,t.email]]),h(e("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>t.password=i),type:"password",class:"block w-full p-3 mb-4 border rounded border-grey-light",name:"password",placeholder:"Password"},null,512),[[x,t.password]]),e("button",{type:"submit",onClick:n,class:"w-full py-3 my-1 text-center text-white bg-green-900 rounded hover:bg-green-800 focus:outline-none"}," Login "),c.value?(o(),r("p",I,d(c.value),1)):g("",!0)]))}}),q=e("h1",{class:"mb-8 text-3xl text-center"},"Sign Up",-1),D={key:0,class:"p-2 font-bold text-center text-red-800"},F={key:1,class:"p-2 font-bold text-center text-green-500"},M=f({__name:"Register",setup(v){const{signUp:s,user:_}=w(),l=p(""),c=p(""),t=A({email:"",password:""}),n=async()=>{try{await s({email:t.email,password:t.password}),t.email="",t.password="",c.value="Please Confirm your E-mail."}catch(u){l.value=u.message}};return(u,a)=>(o(),r("div",null,[q,h(e("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>t.email=i),type:"text",class:"block w-full p-3 mb-4 border rounded border-grey-light",name:"email",placeholder:"Email"},null,512),[[x,t.email]]),h(e("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>t.password=i),type:"password",class:"block w-full p-3 mb-4 border rounded border-grey-light",name:"password",placeholder:"Password"},null,512),[[x,t.password]]),e("button",{type:"submit",onClick:n,class:"w-full py-3 my-1 text-center text-white bg-green-900 rounded hover:bg-green-800 focus:outline-none"},"Create Account "),l.value?(o(),r("p",D,d(l.value),1)):g("",!0),c.value?(o(),r("p",F,d(c.value),1)):g("",!0)]))}}),P={class:"mt-10"},U={class:"flex flex-col bg-grey-lighter"},T={class:"container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto"},Y={class:"w-full px-6 py-8 text-black bg-white rounded shadow-md"},z={class:"container flex flex-col items-center justify-center flex-1 my-10"},G=f({__name:"Card",setup(v){const s=p("login"),_=()=>{s.value==="login"?s.value="signup":s.value="login"};return $(),(l,c)=>{const t=j,n=M;return o(),r("div",P,[e("div",U,[e("div",T,[e("div",Y,[s.value==="login"?(o(),b(t,{key:0})):(o(),b(n,{key:1})),e("div",z,[e("span",null,[E(d(s.value==="login"?"Need an account":"You have an account")+" ",1),e("span",{onClick:_,class:"text-blue-700 cursor-pointer"},d(s.value==="login"?"Create new account":"Login now"),1)])])])])])])}}}),H={class:""},J={key:1},K={class:"px-10 py-4"},O=e("h1",{class:"p-4 text-3xl"},"My Notes",-1),Q={key:0,class:"p-2 text-center text-white bg-green-700"},W={class:"bg-white border shadow-md rounded-xl"},X={class:"flex items-center justify-between w-full pb-3 border-b"},Z={class:"flex items-center p-4 space-x-3"},ee=e("div",{class:"h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"},null,-1),te={class:"text-lg font-bold text-slate-700"},se={class:"flex items-center p-4 space-x-8"},oe={class:"text-xs text-neutral-500"},ne=["onClick"],le={class:"w-full p-4 mt-4 mb-6"},ae={class:"mb-3 text-xl font-bold"},re={class:"p-4 text-sm text-neutral-600"},pe=f({__name:"index",async setup(v){let s,_;const l=$(),{user:c}=w(),t=p(),n=l.auth.user(),u=p();t.value=([s,_]=L(()=>l.from("notes").select().eq("user_id",n==null?void 0:n.id).order("created_at",{ascending:!1})),s=await s,_(),s);const a=async i=>{await l.from("notes").delete().match({id:i}),u.value=p("Note has been deleted successfully"),t.value=await l.from("notes").select().eq("user_id",n==null?void 0:n.id).order("created_at",{ascending:!1})};return(i,ce)=>{var y;const N=G;return o(),r("div",H,[C(c)?(o(),r("div",J,[e("div",K,[O,u.value?(o(),r("h6",Q,d(u.value),1)):g("",!0),(o(!0),r(S,null,R((y=t.value)==null?void 0:y.data,m=>{var k;return o(),r("div",{key:m.id,class:"items-center min-w-full mt-4 flex-col-1"},[e("div",W,[e("div",X,[e("div",Z,[ee,e("div",te,d((k=C(n))==null?void 0:k.email),1)]),e("div",se,[e("div",oe,d(m.created_at),1),e("div",null,[e("button",{onClick:ie=>a(m.id),class:"p-2 text-white bg-red-400 rounded-md"},"Delete",8,ne)])])]),e("div",le,[e("div",ae,d(m.title),1),e("div",re,d(m.note)+" lor",1)])])])}),128))])])):(o(),b(N,{key:0}))])}}});export{pe as default};