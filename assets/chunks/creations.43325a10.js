import{e as h,f as l,o as s,g as f,w as y,b as x,t as r,n as v,u as t,r as C,_ as w,c,a as e,h as d,i as k,F as b,j as _,d as j}from"../app.c2f4aed5.js";const B=h({__name:"VPButton",props:{tag:null,size:null,theme:null,text:null,href:null},setup(a){const o=a,n=/^[a-z]+:/i,g=l(()=>{var m,u;return[(m=o.size)!=null?m:"medium",(u=o.theme)!=null?u:"brand"]}),i=l(()=>o.href&&n.test(o.href)),p=l(()=>o.tag?o.tag:o.href?"a":"button");return(m,u)=>(s(),f(C(t(p)),{class:v(["VPButton",t(g)]),href:a.href?a.href:void 0,target:t(i)?"_blank":void 0,rel:t(i)?"noreferrer":void 0},{default:y(()=>[x(r(a.text),1)]),_:1},8,["class","href","target","rel"]))}});const A=w(B,[["__scopeId","data-v-7248f177"]]),T={id:"braden",title:"Braden",position:"Content Creator",image:"/authors/braden/logo.png"},E={id:"drp",title:"DanRobzProbz",position:"Content Creator",image:"/authors/drp/logo.jpg"},D={id:"kekecreations",title:"KekeCreations",position:"Content Creator",image:"/authors/kekecreations/logo.jpg"},N={id:"mcjiprock",title:"Mcjiprock",position:"Content Creator",image:"/authors/mcjiprock/logo.jpg"},P={id:"xxpoggyislitxx",title:"XxPoggyisLitxX",position:"Content Creator",image:"/authors/xxpoggyislitxx/logo.jpg"},M={braden:T,"cubed-creations":{id:"cubed-creations",title:"Cubed Creations",position:"Content Creator",themeColor:"#FF8E0C",image:"/authors/cubed-creations/icon.jpg"},drp:E,"gamemode-one":{id:"gamemode-one",title:"Gamemode One",position:"Content Creator",themeColor:"#FF3924",image:"/authors/gamemode-one/icon.png"},kekecreations:D,mcjiprock:N,"spectral-studios":{id:"spectral-studios",title:"Spectral Studios",position:"Content Creator",themeColor:"#404040",image:"/authors/spectral-studios/icon.png"},xxpoggyislitxx:P},S={class:"card"},V=["srcset"],F=["srcset"],R=["src","alt"],L={class:"content"},$={key:0,class:"author"},z=["srcset"],I=["srcset"],O=["src","alt"],q={class:"author-name"},H={class:"author-position"},W={class:"tag-list"},Y={class:"tag"},U={class:"actions"},X=h({__name:"CreationCard",props:{creation:null},setup(a){const o=a,n=l(()=>M[o.creation.author]);return(g,i)=>(s(),c("div",S,[e("picture",null,[e("source",{srcset:t(d)(a.creation.image).replace(/\.(jpg|png)$/,".avif"),type:"image/avif"},null,8,V),e("source",{srcset:t(d)(a.creation.image)},null,8,F),e("img",{src:t(d)(a.creation.image),alt:`Thumbnail of ${a.creation.title}`},null,8,R)]),e("div",L,[e("h1",null,r(a.creation.title),1),t(n)?(s(),c("div",$,[e("picture",null,[e("source",{srcset:t(d)(t(n).image).replace(/\.(jpg|png)$/,".avif"),type:"image/avif"},null,8,z),e("source",{srcset:t(d)(t(n).image)},null,8,I),e("img",{class:"author-logo",src:t(d)(t(n).image),alt:`Logo of ${t(n).title}`},null,8,O)]),e("div",q,[e("span",null,r(t(n).title),1),e("span",H,r(t(n).position),1)])])):k("",!0),e("div",W,[(s(!0),c(b,null,_(a.creation.tags,p=>(s(),c("span",Y," #"+r(p),1))),256))]),e("p",null,r(a.creation.excerpt),1)]),e("div",U,[j(A,{tag:"a",text:"Download",href:a.creation.download,theme:"brand",size:"medium"},null,8,["href"])])]))}});const G=w(X,[["__scopeId","data-v-d17776cc"]]),K={class:"creations"},Q={class:"container"},J=h({__name:"Creations",props:{items:null,title:null,description:null},setup(a){const o=a,n=l(()=>{var i;return(i=o.title)!=null?i:"Creations"}),g=l(()=>{var i;return(i=o.description)!=null?i:"bridge. powers some of the most advanced Minecraft Add-ons. Here are some of our favorites..."});return(i,p)=>(s(),c("div",K,[e("h1",null,r(t(n)),1),e("p",null,r(t(g)),1),e("div",Q,[(s(!0),c(b,null,_(a.items,m=>(s(),f(G,{creation:m},null,8,["creation"]))),256))])]))}});const ee=w(J,[["__scopeId","data-v-5872bdd4"]]),te=[{title:"Bloom",image:"/creations/bloom/main.jpg",excerpt:"Enter a tranquil forest and discover a garden long abandoned.",tags:["exploration","nature","flower","relaxing"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=d8604c56-d709-40e1-a286-13dce3b34ac5"},{title:"Advanced Mining",image:"/creations/advanced-mining/main.jpg",excerpt:"Mine your heart out with AWESOME new machinery!",tags:["economy","mining","advanced"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=56952d12-3c9c-4597-886d-b62f77202e27"},{title:"HOW TO TRAIN YOUR DRAGON",image:"/creations/httyd/main.jpg",excerpt:"This is Berk, home of Vikings and dragons!",tags:["adventure","dragons"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=4f7cf58b-e6d7-46ea-9f8c-206d97f2bafe"},{title:"Voidlands Dimensions",image:"/creations/voidlands-dimensions/main.jpg",author:"gamemode-one",excerpt:"A skyblock like no other.",tags:["skyblock","hardcore","survival"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=010314fa-71d2-4160-a42b-491fb8a95002"},{title:"Minecraft: Sonic the Hedgehog",image:"/creations/sonic/main.jpg",author:"gamemode-one",excerpt:"Sonic the Hedgehog races into Minecraft at supersonic speeds!",tags:["platformer","retro","racing"],download:"https://www.minecraft.net/en-us/pdp?id=3086206d-62b3-45ff-a0a8-968b8de33082"},{title:"Elemental Weapons",image:"/creations/elemental-weapons/main.jpg",excerpt:"Craft new weapons in this elemental weapons expansion!",tags:["weapons","elemental"],author:"cubed-creations",download:"https://www.minecraft.net/en-us/marketplace/pdp?id=83532c00-4240-453e-b035-b061479c89f5"},{title:"DragonFire",image:"/creations/dragon-fire/main.png",author:"spectral-studios",excerpt:"Become a master dragon trainer!",developer:"OutLandishly Crafted",tags:["adventure","dragons"],download:"https://www.minecraft.net/en-us/pdp?id=d8a14066-38ad-4633-bab8-f50ab1817f1c"},{title:"Ultimate Dragons",image:"/creations/ultimate-dragons/main.jpg",excerpt:"Breathe devastating fire from dragon-back and become a master of dragon flight with incredible precision and speed.",tags:["dragons","story","adventure"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp/?id=c1c2dddd-9a10-4013-8adb-adf472560ad2"},{title:"Spellcraft",featured:!0,image:"/creations/spellcraft/main.jpg",author:"gamemode-one",excerpt:"Premiering the brand new Scripting API for Bedrock! Combine runes to craft powerful elemental spells!",tags:["magic","spells","adventure"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=f5cc05fc-616a-4963-a02b-5db3fcc9e311"},{title:"Seaside Story",image:"/creations/seaside-story/main.jpg",author:"gamemode-one",excerpt:"Live out your own peaceful ocean adventure!",tags:["ocean","fishing","relaxing"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=5c7cd39e-9903-477b-b013-1b6b6d2bd9ab"},{title:"PAC-MAN",image:"/creations/pac-man/main.jpg",author:"gamemode-one",excerpt:"The legendary arcade classic PAC-MAN comes to Minecraft!",tags:["minigame"],download:"https://www.minecraft.net/en-us/pdp?id=366e895b-d090-4151-a83a-e86c6b339732"},{title:"DragonFire 2: Nations",image:"/creations/dragon-fire-2/main.jpg",author:"spectral-studios",excerpt:"The next edition in the DragonFire series is here!",tags:["adventure","dragons"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=d3eb0ce8-6190-483d-9208-356dc209c173"},{title:"Planes",image:"/creations/planes/main.jpg",excerpt:"Become a pilot and fly high in the sky!",tags:["flight","simulation","steampunk"],author:"cubed-creations",download:"https://www.minecraft.net/en-us/pdp?id=7e9fd987-5928-4044-bcce-ca03bde1bce0"},{title:"High and Dry",image:"/creations/high-and-dry/main.png",author:"kekecreations",excerpt:"You crash land on an arid planet, you do not remember who you are or anything from your past life. Now it is time to decide who you want to be on this new hostile world!",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985799216792231997"},{title:"The World Is Quite Literally Your Enemy",image:"/creations/world-is-quite-literally-your-enemy/main.jpg",author:"mcjiprock",excerpt:"This addons makes your world quite a bit more alive and you quite a bit less alive.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985936185224482907"},{title:"Blood Rot",image:"/creations/blood-rot/main.png",author:"braden",excerpt:"Infect your world with the Blood Rot, a disgusting new biome that eats away at your world.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985780948832485417"},{title:"The Corruption",image:"/creations/the-corruption/main.png",author:"drp",excerpt:"The Corruption is spreading\u2026 Can you survive in this unique survival challenge where the world is against you?",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985927721035112458"},{title:"World Against",image:"/creations/world-against/main.jpg",author:"xxpoggyislitxx",excerpt:"You did some horrible things in The End which caused you to be moved to an alternate world where everything is trying to kill you as well as the universe.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985931887484751872"}];export{ee as C,te as c};
