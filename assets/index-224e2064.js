import{j as e,a,F as P,T as O}from"./react-tilt-075b1849.js";import{r as f,R as E}from"./react-998f5f97.js";import{a as B}from"./react-dom-5c1ee2f3.js";import{B as V}from"./react-router-dom-6c2c3db3.js";import{m as i,A as D}from"./framer-motion-a389c6f3.js";import{M as G,T as W,F as K,a as J,P as Y,b as Q,B as T}from"./react-icons-fde30b70.js";import{r as X}from"./react-responsive-a8e99525.js";import{P as S}from"./prop-types-2b174748.js";import{S as U}from"./react-slick-52ca8c24.js";/* empty css                       */import{u as Z,H as ee,C as te,P as ne,a as ae,b as se,c as ie}from"./@react-three-2eeffc39.js";import{i as oe}from"./maath-59d1875d.js";import"./@chevrotain-042e6b4d.js";import"./scheduler-765c72db.js";import"./react-router-27ef4e60.js";import"./@remix-run-f6ce9322.js";import"./lodash.debounce-722a99f9.js";import"./classnames-63c61219.js";import"./resize-observer-polyfill-ad7c6df4.js";import"./json2mq-d3ccca5e.js";import"./string-convert-c60507dd.js";import"./enquire.js-33edb58f.js";import"./@babel-98964cd2.js";import"./three-c749621b.js";import"./react-use-measure-735f6528.js";import"./debounce-c0f6f7f0.js";import"./its-fine-a27100c8.js";import"./react-reconciler-55eb1256.js";import"./zustand-8b3f56a5.js";import"./react-merge-refs-239dbb3c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&m(_)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const $=n=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:n}}}),p=(n,s,c,m)=>{let t,o;return n==="left"?t=100:n==="right"?t=-100:t=0,n==="up"?o=100:n==="down"?o=-100:o=0,{hidden:{x:t,y:o,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:s,delay:c,duration:m,ease:"easeOut"}},exit:{x:0,y:10,opacity:0}}},ce=(n,s)=>({hidden:{scale:0,opacity:0},show:{scale:1,opacity:1,transition:{type:"tween",delay:n,duration:s,ease:"easeOut"}}}),C=(n,s,c,m)=>{let t,o;return n==="left"?t="-100%":n==="right"?t="100%":t=0,n==="up"?o="100%":n==="down"?o="-100%":o=0,{hidden:{x:t,y:o},show:{x:0,y:0,transition:{type:s,delay:c,duration:m,ease:"easeOut"}}}},L=(n,s)=>({hidden:{},show:{transition:{staggerChildren:n,delayChildren:s||0}}}),re="/assets/logo-78bc6653.png",le="/assets/facebook-52917ccc.png",de="/assets/facebook (1)-2b95e18b.png",me="/assets/github-c9477c30.png",_e="/assets/github (1)-a11c3607.png",he="/assets/linkedin-c485396a.png",pe="/assets/linkedin (1)-e61db1d1.png",ue="/assets/twitter-5805b2d2.png",ge="/assets/twitter (1)-d5d22e96.png",fe="/assets/instagram-090853cb.png",ve="/assets/instagram (1)-88a6c759.png",be="/assets/info-52ac1b06.png",we="/assets/cafe-378f2252.png",ye="/assets/ambo1-17c5c462.png",ke="/assets/aimfit-bad20155.png",Ne="/assets/help-8cd2b3a9.png",xe="/assets/product-1c53b10e.png",$e="/assets/gas-62d85e3f.png",Ie="/assets/parkpro-a490afc7.png",Se="/assets/login-8a351b81.png",Ce="/assets/info1-63116bee.png",qe="/assets/info2-4b53fc99.png",je="/assets/info3-6d5f956b.png",Pe="/assets/cafe1-5b33f2a3.png",Le="/assets/cafe2-80a4153e.png",Te="/assets/cafe3-596cd33a.png",Ae="/assets/ambo1-ea11f7c0.png",Fe="/assets/ambo2-0606ec75.png",ze="/assets/ambo3-a6c4c4ec.png",He="/assets/ambo4-116fe6ca.png",Me="/assets/aimfit1-efd18875.png",Re="/assets/aimfit2-47ffea7c.png",Oe="/assets/aimfit3-198e46bc.png",Ee="/assets/help1-a3eca309.png",Be="/assets/help2-8b6833eb.png",Ve="/assets/help3-6bc83406.png",De="/assets/p1-4373fce9.png",Ge="/assets/p2-1b290410.png",We="/assets/p3-6621db92.png",Ke="/assets/gas1-a5647433.png",Je="/assets/gas2-8da8b03b.png",Ye="/assets/gas3-239067fc.png",Qe="/assets/parkpro1-c7d9f29f.png",Xe="/assets/parkpro2-632b7c2f.png",Ue="/assets/parkpro3-a9509a0c.png",Ze="/assets/parkpro4-985d6c4a.png",et="/assets/parkpro5-b1564b5a.png",tt="/assets/responsive-35cb8557.gif",nt="/assets/react-23c4d31a.gif",at="/assets/fullstack-36c09759.gif",st=[{id:1,name:"LinkedIn",url:"",icon:he,icon1:pe},{id:2,name:"Facebook",url:"",icon:le,icon1:de},{id:3,name:"Instagram",url:"",icon:fe,icon1:ve},{id:4,name:"Twitter",url:"",icon:ue,icon1:ge},{id:5,name:"Github",url:"https://github.com/griffin-k",icon:me,icon1:_e}],it=[{stack:["languages","all"],name:"HTML 5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"},{stack:["languages","all"],name:"CSS 3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"},{stack:["languages","all"],name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"},{stack:["languages","all"],name:"Java",icon:"https://www.vectorlogo.zone/logos/java/java-icon.svg"},{stack:["languages","all"],name:"C++",icon:"https://i.redd.it/31b2ii8hchi31.jpg"},{stack:["languages","all"],name:"Sql",icon:"https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"},{stack:["languages","all"],name:"Json",icon:"https://www.vectorlogo.zone/logos/json/json-icon.svg"},{stack:["frameworks","all"],name:"React JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{stack:["frameworks","all"],name:"Bootstrap",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"},{stack:["tools","all"],name:"Git",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"},{stack:["tools","all"],name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{stack:["tools","all"],name:"Webpack",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg"},{stack:["tools","all"],name:"Linux",icon:"https://www.vectorlogo.zone/logos/linux/linux-icon.svg"},{stack:["tools","all"],name:"Android Studio",icon:"https://www.vectorlogo.zone/logos/android/android-official.svg"},{stack:["tools","all"],name:"Firebase",icon:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"},{stack:["tools","all"],name:"Canva",icon:"https://www.vectorlogo.zone/logos/canva/canva-icon.svg"}],ot=[{id:1,name:"Infogator",desc:"Infogator is your ultimate travel companion app. Discover tailored tourist attractions, get in-depth info about each place, including local foods. Experience the best of every location you visit with ease.",tech:["Java","Xml","Firebase","Canva"],img:be,carousel:[Ce,qe,je],source_link:"https://github.com/griffin-k/INFOGATOR",live_link:""},{id:6,name:"Giving Hands",desc:" GIVING HANDS, we empower transparent giving. Donate clothes, food, money, and blood directly to those in need, ensuring your donations reach the intended recipients transparently.",tech:["Sql","Canva","Vb.Net"],img:Ne,carousel:[Ee,Be,Ve],source_link:"https://github.com/griffin-k",live_link:""},{id:2,name:"Online Cafe",desc:"Cafe Bloom is an app that simplifies cafe dining. It lets you order from a selection of cafes, view cafe info, menus, and prices. You can choose between delivery or pickup. Theres an Android app for customers and a web-based admin interface for cafe owners.",tech:["Java","Kotlin","Firebase","Xml"],img:we,carousel:[Pe,Le,Te],source_link:"https://github.com/griffin-k",live_link:""},{id:3,name:"Ambulance Booking App",desc:"Our Ambulance Booking App simplifies the emergency response process for both drivers and customers. Log in with ease using your Google account, choose your preferred hospital, and quickly book an ambulance. Keep tabs on your booking history and track the ambulances real-time location as it rushes to your aid. Multiple payment methods are integrated for a seamless and efficient experience during critical moments.",tech:["HTML5","CSS3","JavaScript","Java","Firebase"],img:ye,carousel:[Ae,Fe,ze,He],source_link:"https://github.com/griffin-k",live_link:""},{id:4,name:"Aim Fit",desc:"AimFit brings precision to your yoga practice with cutting-edge TensorFlow pose estimation technology. It captures live video feeds from the web and overlays landmarks to guide your exercises flawlessly. Get real-time feedback for safer and more effective yoga sessions, making it accessible and enjoyable for practitioners of all levels.",tech:["React","TensorFlow","Pose-Estimation"],img:ke,carousel:[Me,Re,Oe],source_link:"https://github.com/griffin-k",live_link:"https://64d59bb38e0cde19c9aa22ae--papaya-kelpie-ff9f62.netlify.app/"},{id:6,name:"Tasty cookies",desc:"Explore the world of mouthwatering cookies from Teasty Cookies, where each treat is crafted with premium ingredients for a truly divine taste. Indulge in the joy of our delightful selection and satisfy your sweet cravings.",tech:["Html","CSS","JavaScript"],img:xe,carousel:[De,Ge,We],source_link:"https://github.com/griffin-k",live_link:""},{id:4,name:"Gas Leakage Detector",desc:"real-time gas leak detection system.Bot Car Equipped with sensors, this car detects gas leaks and sends instant notifications to a web page for swift response. It provides complete control and peace of mind through a user-friendly interface and pinpoints the exact location of gas leaks for rapid response.",tech:["Javascript","Firebase","Css","Html","Canva"],img:$e,carousel:[Ke,Je,Ye],source_link:"https://github.com/griffin-k",live_link:""},{id:4,name:"Parking System",desc:"Parking Pro is a smart IoT-based parking solution that tracks slot availability and parking door status in real-time, making parking easy.",tech:["Html","JavaScript","FireBase","Canva"],img:Ie,carousel:[Qe,Xe,Ue,Ze,et],source_link:"https://github.com/griffin-k",live_link:""},{id:4,name:"Scary Login Page",desc:"",tech:["Html","JavaScript","Css"],img:Se,carousel:[],source_link:"https://github.com/griffin-k",live_link:""}],j=[{id:1,name:"Muhammad Talha",image:"https://avatars.githubusercontent.com/u/47237123?v=4",text:"I highly recommend Karimullah for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic.",country:"Pakistan",linkedIn:""},{id:2,name:"Shariq Habib",image:"https://avatars.githubusercontent.com/u/26686673?v=4",text:"Throughout our collaboration, I was consistently impressed by Karimullah professionalism, attention to detail, and ability to adapt to changing requirements.",country:"Bangladash",linkedIn:""},{id:3,name:"Muhammad Ali Hanif",image:"https://avatars.githubusercontent.com/u/52717891?v=4",text:"One of Karimullah greatest strengths is his impressive technical expertise. He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.",country:"Pakistan",linkedIn:""},{id:4,name:"Ahmed Hasan Rony",image:"https://avatars.githubusercontent.com/u/77187003?v=4",text:"I really am comfortable with collaborating and coding with karimullah. His ingenious ideas give me a lot of ideas solving a problem multiple ways.",country:"India",linkedIn:""},{id:5,name:"Malaikah",image:"https://avatars.githubusercontent.com/u/38559635?v=4",text:"Communication was another strength that Karimullah brought to the table. He actively listened, communicated ideas clearly, and collaborated effectively with team members.",country:"Pakistan",linkedIn:""},{id:6,name:"Hachemi",image:"https://avatars.githubusercontent.com/u/12778013?v=4",text:"I learned too much from you and I can say that you are fantastic . Working with you is always a pleasure, hope that we can work on some project asap.",country:"Russia",linkedIn:""}],ct=[{id:1,icon:tt,title:"Responsive Design",text:"I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size."},{id:2,icon:nt,title:"Front-end Development",text:"I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression."},{id:3,icon:at,title:"Android Development",text:"I transform your innovative concepts into dynamic Android experiences. With expertise in cutting-edge mobile development technologies and a commitment to excellence, I engineer captivating and intuitive apps that stand out."}],A=[{id:1,name:"About",url:"/#about"},{id:2,name:"Service",url:"/#service"},{id:3,name:"Work",url:"/#work"},{id:4,name:"Testimonial",url:"/#testimonial"},{id:5,name:"Contact",url:"/#contact"}],rt="_navbar_container_f6o93_1",lt="_progress_bar_f6o93_6",dt="_navbar_f6o93_1",mt="_fixed_f6o93_31",_t="_logo_btn_f6o93_35",ht="_logo_f6o93_35",pt="_navlink_f6o93_45",ut="_font_f6o93_54",gt="_resume_container_f6o93_63",ft="_resume_f6o93_63",vt="_resume_hover_f6o93_73",bt="_mobilemenu_f6o93_105",wt="_mobile_font_f6o93_122",yt="_mobile_resume_container_f6o93_128",kt="_mobile_active_f6o93_134",Nt="_hamburger_f6o93_150",xt="_line_f6o93_158",$t="_open_f6o93_186",r={navbar_container:rt,progress_bar:lt,navbar:dt,fixed:mt,logo_btn:_t,logo:ht,navlink:pt,font:ut,resume_container:gt,resume:ft,resume_hover:vt,mobilemenu:bt,mobile_font:wt,mobile_resume_container:yt,mobile_active:kt,hamburger:Nt,line:xt,open:$t},It=()=>{const[n,s]=f.useState(""),[c,m]=f.useState(!1),[t,o]=f.useState(!1),_=()=>{o(!t)};return f.useEffect(()=>{const l=()=>{window.pageYOffset>780?m(!0):m(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),e("div",{className:r.navbar_container,children:a("nav",{className:`${r.navbar} ${c?"fixed":""}`,children:[e(i.button,{type:"button",onClick:()=>{window.scrollTo(0,0)},whileHover:{scale:1.12,backgroundColor:"#020716",transition:{type:"spring",damping:20,stiffness:300}},className:r.logo_btn,children:e("img",{src:re,alt:"My logo",className:r.logo})}),a("ul",{className:r.navlink,children:[A.map(l=>e("li",{className:n===l.name?"text-cyan":"text-grey",children:e("a",{href:l.url,className:r.font,onClick:()=>s(l.name),children:l.name})},l.id)),e("li",{children:a("a",{href:"",target:" blank",className:r.resume_container,children:[e("span",{className:r.resume_hover,children:"Resume"}),e("span",{className:r.resume,children:"Resume"})]})})]}),a("div",{className:r.hamburger,onClick:_,onKeyDown:l=>{l.key==="Enter"&&_()},role:"button",tabIndex:0,children:[e("span",{className:`${r.line} ${t?r.open:""}`}),e("span",{className:`${r.line} ${t?r.open:""}`}),e("span",{className:`${r.line} ${t?r.open:""}`})]}),a("ul",{variants:L(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${r.mobilemenu} ${t?"h-screen opacity-100":"h-0"}`,children:[A.map((l,k)=>e("li",{className:`${n===l.name?r.mobile_active:"text-grey"} ${k===0?"mt-32":""}`,children:e(i.a,{href:l.url,className:r.mobile_font,variants:p("right","",k*.2,1),initial:"hidden",whileInView:"show",onClick:()=>{s(l.name),_()},children:l.name})},l.id)),e("li",{children:a(i.a,{variants:p("right","",1,1),initial:"hidden",whileInView:"show",href:"",target:" blank",className:`${r.resume_container} ${r.mobile_resume_container}`,children:[e("span",{className:`${r.resume_hover} ${r.font}`,children:"Resume"}),e("span",{className:`${r.resume} ${r.font}`,children:"Resume"})]})})]})]})})},St="_container_xsvpf_1",Ct="_intro_xsvpf_14",qt="_name_xsvpf_27",jt="_desc_xsvpf_33",Pt="_btn_container_xsvpf_42",Lt="_btn_hover_xsvpf_53",Tt="_btn_xsvpf_42",At="_arrow_xsvpf_66",y={container:St,intro:Ct,name:qt,desc:jt,btn_container:Pt,btn_hover:Lt,btn:Tt,arrow:At},Ft=()=>e(i.section,{variants:L(),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},children:a("div",{className:y.container,children:[a("p",{className:y.intro,children:["Hi, I'm"," ",e(i.span,{variants:p("","",.1,1),className:y.name,children:"Karimullah"})]}),a("p",{className:y.intro,children:["But you can call me"," ",e(i.span,{variants:p("","",.3,1),className:y.name,children:"Griffin"})]}),e(i.p,{variants:p("","",.5,1),className:y.desc}),a(i.button,{variants:p("","",.6,1),className:y.btn_container,onClick:()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},children:[e("span",{className:y.btn_hover,children:"Check out my work"}),e("span",{className:y.btn,children:"Check out my work"}),e(G,{className:y.arrow})]})]})}),I=(n,s,c)=>function(){const t=X.useMediaQuery({minWidth:768});return a(i.section,{variants:L(),initial:"hidden",whileInView:"show",viewport:{once:!t,amount:.25},className:`max-w-[90%] mx-auto ${c}`,children:[e("span",{id:s,children:" "}),e(n,{})]})},zt="_title_pp7v6_1",Ht="_para_pp7v6_22",Mt="_text_pp7v6_28",Rt="_link_pp7v6_36",Ot="_img_container_pp7v6_58",Et="_img_pp7v6_58",Bt="_pulse_pp7v6_1",N={title:zt,para:Ht,text:Mt,link:Rt,img_container:Ot,img:Et,pulse:Bt},Vt=()=>a(P,{children:[e(i.h1,{variants:$(),className:N.title,children:"About Me"}),a("div",{className:N.para,children:[a(i.p,{variants:p("","",.5,1),className:N.text,children:["Hello! I'm"," ",e("a",{href:"",target:"_blank",className:N.link,rel:"noreferrer",children:"Karimullah"})," ",", a dedicated and enthusiastic 3rd-year BSCS student at Lahore Garrison University in Lahore, Pakistan. My journey into the world of coding began back in 8th grade when I first dabbled in modifying APKs. Little did I know that this initial curiosity would ignite a passion that continues to burn brightly to this day."]}),e(i.p,{variants:p("","",.75,1),className:N.text,children:"Over the years, I've embarked on a relentless quest for knowledge and growth in the field of software development. Today, I proudly consider myself an intermediate-level Android and web developer. I've honed my skills, learned from challenges, and embraced the ever-evolving technologies that shape our digital landscape."}),a(i.p,{variants:p("","",1,1),className:N.text,children:["My commitment to excellence drives me to create clean, efficient, and user-friendly applications that solve real-world problems. With each project, I strive not only to meet the technical requirements but also to exceed user expectations."," ",e("a",{href:"https://github.com/griffin-k",target:"_blank",className:N.link,rel:"noreferrer",children:" "})," "]}),a(i.p,{variants:p("","",.75,1),className:N.text,children:["As I continue on this exciting journey, I look forward to taking on new challenges, collaborating with fellow developers, and contributing to the ever-expanding world of technology."," "]})]})]}),Dt=I(Vt,"about",""),Gt="_title_1jhqf_1",Wt="_subtitle_1jhqf_23",Kt="_card_container_1jhqf_30",Jt="_tilt_1jhqf_41",Yt="_card_shadow_1jhqf_45",Qt="_card_overlay_1jhqf_49",Xt="_card_1jhqf_30",Ut="_img_container_1jhqf_80",Zt="_img_1jhqf_80",en="_name_1jhqf_94",tn="_text_1jhqf_101",nn="_container_1jhqf_208",w={title:Gt,subtitle:Wt,card_container:Kt,tilt:Jt,card_shadow:Yt,card_overlay:Qt,card:Xt,img_container:Ut,img:Zt,name:en,text:tn,container:nn},an=()=>a("div",{className:w.container,children:[e(i.h1,{variants:$(),className:w.title,children:"My Services"}),e(i.p,{variants:p("","",.15,1),className:w.subtitle,children:"What I can do for you -"}),e("div",{className:w.card_container,children:ct.map((n,s)=>e(O,{className:w.tilt,children:a(i.div,{variants:p("right","tween",s*.8,.5),className:w.card_shadow,children:[e("div",{className:w.card_overlay,children:e("p",{className:w.text,children:n.text})}),a("div",{className:w.card,children:[e("div",{className:w.img_container,children:e("img",{className:`${w.img} ${s===2?"w-28 h-28 lg:w-24 lg:h-24 lg:mb-4 xl:w-[5.5rem] xl:h-[5.5rem] xl:mb-4 xl:mt-4":""}`,src:n.icon,alt:n.title,loading:"lazy"})}),e("p",{className:w.name,children:n.title})]})]})},n.id))})]}),sn=I(an,"service","my-0"),on="_title_109l1_1",cn="_btn_container_109l1_10",rn="_btn_active_109l1_26",ln="_tech_container_109l1_32",dn="_tech_109l1_32",mn="_tech_img_109l1_50",x={title:on,btn_container:cn,btn_active:rn,tech_container:ln,tech:dn,tech_img:mn},_n=()=>{const[n,s]=f.useState("all"),c=t=>{s(t)},m=["all","languages","frameworks","tools"];return a(P,{children:[e(i.p,{variants:p("","",.5,1),className:x.title,children:"Here are a few technologies I`ve been working with recently:"}),e(i.div,{variants:$(),className:x.btn_container,children:m.map(t=>e("button",{type:"button",className:t===n?x.btn_active:x.btn,onClick:()=>c(t),children:t},t.name))}),e("div",{className:x.tech_container,children:it.filter(t=>t.stack.includes(n)).map((t,o)=>e(i.abbr,{initial:"hidden",whileInView:"show",variants:p("up","",o*.15,.5),title:t.name,className:x.tech,children:e("img",{className:x.tech_img,src:t.icon,alt:t.name,loading:"lazy"})},t.name))})]})},hn=I(_n,"",""),pn="_title_1wia3_1",un="_project_container_1wia3_22",gn="_card_1wia3_29",fn="_img_1wia3_35",vn="_card_overlay_1wia3_45",bn="_card_text_1wia3_62",wn="_text_1wia3_99",yn="_name_1wia3_121",kn="_tech_1wia3_127",Nn="_tech_list_1wia3_132",xn="_btn_container_1wia3_178",$n="_btn_hover_1wia3_189",In="_btn_1wia3_178",b={title:pn,project_container:un,card:gn,img:fn,card_overlay:vn,card_text:bn,"fade-in":"_fade-in_1wia3_1",text:wn,"slide-down":"_slide-down_1wia3_1",name:yn,tech:kn,tech_list:Nn,btn_container:xn,btn_hover:$n,btn:In,"slide-up":"_slide-up_1wia3_1"},Sn="_overlay_c3v1m_1",Cn="_container_c3v1m_12",qn="_close_btn_c3v1m_19",jn="_img_c3v1m_36",Pn="_content_c3v1m_42",Ln="_name_c3v1m_47",Tn="_tech_c3v1m_52",An="_tech_list_c3v1m_57",Fn="_description_c3v1m_103",zn="_link_c3v1m_108",Hn="_btn_container_c3v1m_114",Mn="_btn_hover_c3v1m_123",Rn="_btn_c3v1m_114",u={overlay:Sn,container:Cn,close_btn:qn,img:jn,content:Pn,name:Ln,tech:Tn,tech_list:An,description:Fn,link:zn,btn_container:Hn,btn_hover:Mn,btn:Rn};const F=({carousel:n})=>e(U,{...{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1},children:n.map(c=>e("div",{className:"carousel-img",children:e("img",{src:c,alt:"project sample img",loading:"lazy"})},c))});F.propTypes={carousel:S.arrayOf(S.string).isRequired};const z=({handleClose:n,project:s})=>e(i.div,{className:u.overlay,initial:"hidden",animate:"show",exit:{opacity:0,scale:0,transition:{type:"tween",duration:.5}},variants:ce(0,.5),children:a("div",{className:u.container,children:[e(W,{className:u.close_btn,onClick:n}),e(F,{carousel:s.carousel}),a("div",{className:u.content,children:[e("h2",{className:u.name,children:s.name}),e("p",{className:u.tech,children:s.tech.map(c=>e("span",{className:u.tech_list,children:`#${c}`},c))}),e("p",{className:u.description,children:s.desc}),a("div",{className:u.link,children:[a("a",{href:s.source_link,target:"_blank",className:`${u.source_link} ${u.btn_container}`,rel:"noreferrer",children:[e("span",{className:u.btn_hover,children:"View Source"}),e("span",{className:u.btn,children:"View Source"})]}),a("a",{href:s.live_link,target:"_blank",className:`${u.live_link} ${u.btn_container}`,rel:"noreferrer",children:[e("span",{className:u.btn_hover,children:"View Live"}),e("span",{className:u.btn,children:"View Live"})]})]})]})]})});z.propTypes={handleClose:S.func.isRequired,project:S.objectOf(S.string).isRequired};const On=()=>{const[n,s]=f.useState(!1),[c,m]=f.useState(null),t=_=>{m(_),s(!0)},o=()=>{m(null),s(!1)};return a("div",{className:"relative",children:[e(i.h1,{variants:$(),className:b.title,children:"My Recent Works"}),e("div",{className:b.project_container,children:ot.map((_,l)=>a(i.div,{variants:p("up","",l*.4,.5),index:l,className:b.card,children:[e("img",{className:b.img,src:_.img,alt:"project sample",loading:"lazy"}),e("div",{className:b.card_overlay,children:a("div",{className:b.card_text,children:[a("div",{className:b.text,children:[e("h2",{className:b.name,children:_.name}),e("p",{className:b.tech,children:_.tech.map(k=>e("span",{className:b.tech_list,children:`#${k}`},k))})]}),a("button",{type:"button",className:b.btn_container,onClick:()=>t(_),children:[e("span",{className:b.btn_hover,children:"Learn more"}),e("span",{className:b.btn,children:"Learn more"})]})]})})]},_.id))}),e(D,{children:n&&e(z,{handleClose:o,project:c})})]})},En=I(On,"work","my-8"),Bn="_title_lcg6o_1",Vn="_subtitle_lcg6o_23",Dn="_carousel_container_lcg6o_30",Gn="_btn_container_lcg6o_34",Wn="_button_lcg6o_40",Kn="_prev_lcg6o_46",Jn="_next_lcg6o_59",Yn="_card_container_lcg6o_72",Qn="_card_shadow_lcg6o_81",Xn="_card_lcg6o_72",Un="_header_lcg6o_105",Zn="_img_lcg6o_112",ea="_openquote_lcg6o_119",ta="_para_lcg6o_127",na="_label_lcg6o_135",aa="_name_lcg6o_142",sa="_country_lcg6o_148",ia="_icon_lcg6o_155",oa="_a_lcg6o_184",h={title:Bn,subtitle:Vn,carousel_container:Dn,btn_container:Gn,button:Wn,prev:Kn,next:Jn,card_container:Yn,card_shadow:Qn,card:Xn,header:Un,img:Zn,openquote:ea,para:ta,label:na,name:aa,country:sa,icon:ia,a:oa},ca=()=>{const[n,s]=f.useState(1),[c,m]=f.useState(1),[t,o]=f.useState(!1),_=n*c,l=_-c,k=j.slice(l,_),H=()=>{s(t?d=>d===2?d-1:1:d=>d===1?j.length:d-1)},M=()=>{s(t?d=>d===1?d+1:2:d=>d===j.length?1:d+1)};return f.useEffect(()=>{const d=window.matchMedia("(min-width: 1200px)"),q=R=>{R.matches?(m(3),o(!0)):(m(1),o(!1))};return q(d),d.addEventListener("change",q),()=>{d.removeEventListener("change",q)}},[]),a("div",{className:h.container,children:[e(i.h1,{variants:$(),className:h.title,children:"Testimonials"}),e(i.p,{variants:p("","",.15,1),className:h.subtitle,children:"What my coding partners say about me -"}),a("div",{className:h.carousel_container,children:[e(i.div,{variants:p("","",.5,1),className:h.card_container,children:k.map(d=>e(i.div,{initial:"hidden",animate:"show",variants:p("","",.15,1),className:h.card_shadow,children:a("div",{className:h.card,children:[a("div",{className:h.header,children:[e(i.div,{variants:$(),children:e(K,{className:h.openquote})}),e("img",{className:h.img,src:d.image,alt:"profile"})]}),e("p",{className:h.para,children:d.text}),a("div",{className:`${h.label} ${h.firstlabel}`,children:[a(i.p,{variants:C("left","",.3,.75),className:h.name,children:[d.name," ",a("span",{className:h.country,children:["(",d.country,")"]})]}),e(i.abbr,{variants:C("right","",.3,.75),title:"LinkedIn Profile",children:e("a",{href:d.linkedIn,target:"_blank",className:h.icon,rel:"noreferrer","aria-label":"LinkedIn Profile",children:e(J,{})})})]})]})},d.id))}),a("div",{className:h.btn_container,children:[e("button",{className:t&&n===1?"hidden":`${h.button} ${h.prev}`,type:"button",onClick:H,children:e(Y,{})}),e("button",{className:t&&n===2?"hidden":`${h.button} ${h.next}`,type:"button",onClick:M,children:e(Q,{})})]})]})]})},ra=I(ca,"testimonial","my-0"),la="/assets/contact-e9a8509a.svg",da="_title_yeem0_1",ma="_subtitle_yeem0_22",_a="_container_yeem0_29",ha="_form_container_yeem0_39",pa="_form_yeem0_39",ua="_form_title_yeem0_57",ga="_input_yeem0_64",fa="_textarea_yeem0_81",va="_btn_container_yeem0_85",ba="_btn_hover_yeem0_99",wa="_btn_yeem0_85",ya="_error_yeem0_133",ka="_img_container_yeem0_137",Na="_img_yeem0_137",v={title:da,subtitle:ma,container:_a,form_container:ha,form:pa,form_title:ua,input:ga,textarea:fa,btn_container:va,btn_hover:ba,btn:wa,error:ya,img_container:ka,img:Na},xa=()=>{const[n,s]=f.useState({name:"",email:"",message:""}),c=t=>{const{target:o}=t,{name:_,value:l}=o;s({...n,[_]:l})},m=t=>{t.preventDefault();const o=t.target;o.checkValidity()&&(o.submit(),s({name:"",email:"",message:""}))};return a(P,{children:[e(i.h1,{variants:$(),className:v.title,children:"Get in Touch!"}),e(i.p,{variants:p("","",.15,1),className:v.subtitle,children:"I'm always excited to hear about new opportunities and collaborations. Don't hesitate to reach out and let's make something great."}),a("div",{className:v.container,children:[e(i.form,{variants:C("left","",0,1),onSubmit:m,action:"https://formspree.io/f/xgejzoag",method:"post",className:v.form_container,children:a("div",{className:v.form,children:[e("h4",{className:v.form_title,children:"Contact Me"}),e("input",{type:"text",placeholder:"Name",required:!0,maxLength:"30",name:"name",value:n.name,onChange:c,className:v.input}),e("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:n.email,onChange:c,className:v.input}),e("textarea",{cols:"30",rows:"10",placeholder:"Your message",required:!0,maxLength:"500",name:"message",value:n.message,onChange:c,className:`${v.input} ${v.textarea}`}),a("button",{type:"submit",className:v.btn_container,children:[e("span",{className:v.btn_hover,children:"Get in touch"}),e("span",{className:v.btn,children:"Get in touch"})]})]})}),e(i.div,{variants:C("right","",0,1),className:v.img_container,children:e("img",{src:la,alt:"contact",className:v.img,loading:"lazy"})})]})]})},$a=I(xa,"contact","my-0"),Ia="_footer_w8qdr_1",Sa="_up_icon_container_w8qdr_11",Ca="_floating_w8qdr_1",qa="_title_w8qdr_26",ja="_text_w8qdr_31",Pa="_icon_container_w8qdr_53",La="_overlay_w8qdr_60",Ta="_up_overlay_w8qdr_65",Aa="_icon_w8qdr_53",Fa="_icon_hover_w8qdr_80",za="_up_icon_w8qdr_11",Ha="_up_icon_hover_w8qdr_88",Ma="_p_w8qdr_122",Ra="_a_w8qdr_129",Oa="_span_w8qdr_173",g={footer:Ia,up_icon_container:Sa,floating:Ca,title:qa,text:ja,icon_container:Pa,overlay:La,up_overlay:Ta,icon:Aa,icon_hover:Fa,up_icon:za,up_icon_hover:Ha,p:Ma,a:Ra,span:Oa},Ea=()=>a(i.section,{id:g.footer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},children:[e(i.div,{variants:p("","",1,1),className:g.up_icon_container,children:e("abbr",{title:"back to home page",children:a("button",{type:"button",className:`${g.overlay} ${g.up_overlay}`,onClick:()=>{window.scrollTo(0,0)},children:[e(T,{className:`${g.icon_hover} ${g.up_icon_hover}`}),e(T,{className:`${g.icon} ${g.up_icon}`})]})})}),e("p",{className:g.title,children:e("span",{className:g.text,children:"My Social Networks"})}),e("div",{className:g.icon_container,children:st.map(n=>a("a",{href:n.url,target:"_blank",className:g.overlay,rel:"noreferrer",children:[e("img",{className:g.icon_hover,src:n.icon,alt:n.name,loading:"lazy"}),e("img",{className:g.icon,src:n.icon1,alt:n.name,loading:"lazy"})]},n.id))}),e("abbr",{title:"Source Code",className:g.p,children:a("a",{href:"https://github.com/griffin-k",target:"_blank",className:g.a,rel:"noreferrer",children:["Brought into being by"," ",e("span",{className:g.span,children:"©"})," ","Karimullah Khan"]})})]}),Ba=()=>{const{progress:n}=Z();return a(ee,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e("span",{className:"canvas-loader"}),a("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[n.toFixed(2),"%"]})]})},Va=n=>{const s=f.useRef(),[c]=f.useState(()=>oe(new Float32Array(5200),{radius:1.2}));return ae((m,t)=>{s.current.rotation.x-=t/10,s.current.rotation.y-=t/15}),e("group",{rotation:[0,0,Math.PI/4],children:e(se,{ref:s,positions:c,stride:3,frustumCulled:!0,...n,children:e(ie,{transparent:!0,color:"#ffffff",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},Da=()=>{const[n,s]=f.useState(1);return f.useEffect(()=>{const c=()=>{s(window.innerWidth/window.innerHeight)};return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),e("div",{className:"absolute left-0 top-0 z-[-1]",children:a(te,{camera:{position:[0,0,1]},gl:{antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"},style:{width:"100vw",height:"100vh"},pixelratio:window.devicePixelRatio,aspectratio:n,className:"bg-dark_blue",children:[e(f.Suspense,{fallback:e(Ba,{}),children:e(Va,{})}),e(ne,{all:!0})]})})};function Ga(){return a(V,{children:[a("div",{className:"relative w-screen h-screen z-10",children:[e(Ft,{}),e(Da,{})]}),a("div",{className:"relative z-0 bg-navy",children:[e(It,{}),e(Dt,{}),e(hn,{}),e(sn,{}),e(En,{}),e("div",{className:"relative mt-24 pb-28",children:e(ra,{})}),e("div",{className:"contact mb-80",children:e($a,{})})]}),e(Ea,{})]})}B.createRoot(document.getElementById("root")).render(e(E.StrictMode,{children:e(Ga,{})}));
