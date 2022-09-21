import{f as h,g as l,o as s,h as f,w as y,b as _,t as r,n as v,u as t,r as C,_ as w,c as d,a as e,i as c,j as k,F as b,k as x,e as j}from"../app.2cdd2a5e.js";const B=h({__name:"VPButton",props:{tag:null,size:null,theme:null,text:null,href:null},setup(a){const o=a,n=/^[a-z]+:/i,m=l(()=>{var p,u;return[(p=o.size)!=null?p:"medium",(u=o.theme)!=null?u:"brand"]}),i=l(()=>o.href&&n.test(o.href)),g=l(()=>o.tag?o.tag:o.href?"a":"button");return(p,u)=>(s(),f(C(t(g)),{class:v(["VPButton",t(m)]),href:a.href?a.href:void 0,target:t(i)?"_blank":void 0,rel:t(i)?"noreferrer":void 0},{default:y(()=>[_(r(a.text),1)]),_:1},8,["class","href","target","rel"]))}});const A=w(B,[["__scopeId","data-v-7248f177"]]),D={id:"arexon",title:"Arexon",position:"Content Creator",image:"/authors/arexon/logo.png"},S={id:"braden",title:"Braden",position:"Content Creator",image:"/authors/braden/logo.png"},T={id:"drp",title:"DanRobzProbz",position:"Content Creator",image:"/authors/drp/logo.jpg"},E={id:"kekecreations",title:"KekeCreations",position:"Content Creator",image:"/authors/kekecreations/logo.jpg"},F={id:"mcjiprock",title:"Mcjiprock",position:"Content Creator",image:"/authors/mcjiprock/logo.jpg"},N={id:"xxpoggyislitxx",title:"XxPoggyisLitxX",position:"Content Creator",image:"/authors/xxpoggyislitxx/logo.jpg"},P={arexon:D,braden:S,"cubed-creations":{id:"cubed-creations",title:"Cubed Creations",position:"Content Creator",themeColor:"#FF8E0C",image:"/authors/cubed-creations/icon.jpg"},drp:T,"gamemode-one":{id:"gamemode-one",title:"Gamemode One",position:"Content Creator",themeColor:"#FF3924",image:"/authors/gamemode-one/icon.png"},kekecreations:E,mcjiprock:F,"spectral-studios":{id:"spectral-studios",title:"Spectral Studios",position:"Content Creator",themeColor:"#404040",image:"/authors/spectral-studios/icon.png"},xxpoggyislitxx:N},M={class:"card"},V=["srcset"],R=["srcset"],q=["src","alt"],L={class:"content"},O={key:0,class:"author"},$=["srcset"],z=["srcset"],I=["src","alt"],W={class:"author-name"},H={class:"author-position"},Y={class:"tag-list"},U={class:"tag"},X={class:"actions"},G=h({__name:"CreationCard",props:{creation:null},setup(a){const o=a,n=l(()=>P[o.creation.author]);return(m,i)=>(s(),d("div",M,[e("picture",null,[e("source",{srcset:t(c)(a.creation.image).replace(/\.(jpg|png)$/,".avif"),type:"image/avif"},null,8,V),e("source",{srcset:t(c)(a.creation.image)},null,8,R),e("img",{src:t(c)(a.creation.image),alt:`Thumbnail of ${a.creation.title}`},null,8,q)]),e("div",L,[e("h1",null,r(a.creation.title),1),t(n)?(s(),d("div",O,[e("picture",null,[e("source",{srcset:t(c)(t(n).image).replace(/\.(jpg|png)$/,".avif"),type:"image/avif"},null,8,$),e("source",{srcset:t(c)(t(n).image)},null,8,z),e("img",{class:"author-logo",src:t(c)(t(n).image),alt:`Logo of ${t(n).title}`},null,8,I)]),e("div",W,[e("span",null,r(t(n).title),1),e("span",H,r(t(n).position),1)])])):k("",!0),e("div",Y,[(s(!0),d(b,null,x(a.creation.tags,g=>(s(),d("span",U," #"+r(g),1))),256))]),e("p",null,r(a.creation.excerpt),1)]),e("div",X,[j(A,{tag:"a",text:"Download",href:a.creation.download,theme:"brand",size:"medium"},null,8,["href"])])]))}});const K=w(G,[["__scopeId","data-v-d17776cc"]]),Q={class:"creations"},J={class:"container"},Z=h({__name:"Creations",props:{items:null,title:null,description:null},setup(a){const o=a,n=l(()=>{var i;return(i=o.title)!=null?i:"Creations"}),m=l(()=>{var i;return(i=o.description)!=null?i:"bridge. powers some of the most advanced Minecraft Add-ons. Here are some of our favorites..."});return(i,g)=>(s(),d("div",Q,[e("h1",null,r(t(n)),1),e("p",null,r(t(m)),1),e("div",J,[(s(!0),d(b,null,x(a.items,p=>(s(),f(K,{creation:p},null,8,["creation"]))),256))])]))}});const te=w(Z,[["__scopeId","data-v-5872bdd4"]]),ae=[{title:"Elemental Weapons",image:"/creations/elemental-weapons/main.jpg",excerpt:"Craft new weapons in this elemental weapons expansion!",tags:["weapons","elemental"],author:"cubed-creations",download:"https://www.minecraft.net/marketplace/pdp?id=83532c00-4240-453e-b035-b061479c89f5"},{title:"DragonFire 2: Nations",image:"/creations/dragon-fire-2/main.jpg",author:"spectral-studios",excerpt:"The next edition in the DragonFire series is here!",tags:["adventure","dragons"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=d3eb0ce8-6190-483d-9208-356dc209c173"},{title:"Ultimate Dragons",image:"/creations/ultimate-dragons/main.jpg",excerpt:"Breathe devastating fire from dragon-back and become a master of dragon flight with incredible precision and speed.",tags:["dragons","story","adventure"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp/?id=c1c2dddd-9a10-4013-8adb-adf472560ad2"},{title:"HOW TO TRAIN YOUR DRAGON",image:"/creations/httyd/main.jpg",excerpt:"This is Berk, home of Vikings and dragons!",tags:["adventure","dragons"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=4f7cf58b-e6d7-46ea-9f8c-206d97f2bafe"},{title:"Advanced Mining",image:"/creations/advanced-mining/main.jpg",excerpt:"Mine your heart out with AWESOME new machinery!",tags:["economy","mining","advanced"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=56952d12-3c9c-4597-886d-b62f77202e27"},{title:"Planes",image:"/creations/planes/main.jpg",excerpt:"Become a pilot and fly high in the sky!",tags:["flight","simulation","steampunk"],author:"cubed-creations",download:"https://www.minecraft.net/en-us/pdp?id=7e9fd987-5928-4044-bcce-ca03bde1bce0"},{title:"DragonFire",image:"/creations/dragon-fire/main.png",author:"spectral-studios",excerpt:"Become a master dragon trainer!",developer:"OutLandishly Crafted",tags:["adventure","dragons"],download:"https://www.minecraft.net/en-us/pdp?id=d8a14066-38ad-4633-bab8-f50ab1817f1c"},{title:"FurniDeco",image:"/creations/furnideco/main.png",excerpt:"FurniDeco adds 25 pieces of functional, decorative and unique-looking furniture that fit with the vanilla style.",tags:["furniture","decoration"],author:"arexon",download:"https://github.com/arexon/furnideco"},{title:"PAC-MAN",image:"/creations/pac-man/main.jpg",author:"gamemode-one",excerpt:"The legendary arcade classic PAC-MAN comes to Minecraft!",tags:["minigame"],download:"https://www.minecraft.net/en-us/pdp?id=366e895b-d090-4151-a83a-e86c6b339732"},{title:"Overpowered Wands",image:"/creations/overpowered-wands/main.jpg",excerpt:"See which crafting recipe you need, collect all the required items and craft overpowered wands!",tags:["wands","craftable","magic"],author:"cubed-creations",download:"https://www.minecraft.net/marketplace/pdp?id=59359292-77d0-4fd1-a802-3f6d855b3174"},{title:"Seaside Story",image:"/creations/seaside-story/main.jpg",author:"gamemode-one",excerpt:"Live out your own peaceful ocean adventure!",tags:["ocean","fishing","relaxing"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=5c7cd39e-9903-477b-b013-1b6b6d2bd9ab"},{title:"Spellrune",image:"/creations/spellrune/main.jpg",author:"gamemode-one",excerpt:"Premiering the brand new Scripting API for Bedrock! Combine runes to craft powerful elemental spells!",tags:["magic","spells","adventure"],download:"https://www.minecraft.net/marketplace/pdp?id=f5cc05fc-616a-4963-a02b-5db3fcc9e311"},{title:"Bloom",image:"/creations/bloom/main.jpg",excerpt:"Enter a tranquil forest and discover a garden long abandoned.",tags:["exploration","nature","flower","relaxing"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=d8604c56-d709-40e1-a286-13dce3b34ac5"},{title:"Sci-Fi Weapons",image:"/creations/scifi-weapons/main.jpg",excerpt:"See which crafting recipe you need, collect all the required items and craft new weapons in this sci-fi weapons expansion!",tags:["weapons","craftable","sci-fi"],author:"cubed-creations",download:"https://www.minecraft.net/marketplace/pdp?id=c5f18417-c1e1-49e6-9218-d18858d1f5c5"},{title:"Voidlands Dimensions",image:"/creations/voidlands-dimensions/main.jpg",author:"gamemode-one",excerpt:"A skyblock like no other.",tags:["skyblock","hardcore","survival"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=010314fa-71d2-4160-a42b-491fb8a95002"},{title:"Minecraft: Sonic the Hedgehog",image:"/creations/sonic/main.jpg",author:"gamemode-one",excerpt:"Sonic the Hedgehog races into Minecraft at supersonic speeds!",tags:["platformer","retro","racing"],download:"https://www.minecraft.net/en-us/pdp?id=3086206d-62b3-45ff-a0a8-968b8de33082"},{title:"World Against",image:"/creations/world-against/main.jpg",author:"xxpoggyislitxx",excerpt:"You did some horrible things in The End which caused you to be moved to an alternate world where everything is trying to kill you as well as the universe.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985931887484751872"},{title:"High and Dry",image:"/creations/high-and-dry/main.png",author:"kekecreations",excerpt:"You crash land on an arid planet, you do not remember who you are or anything from your past life. Now it is time to decide who you want to be on this new hostile world!",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985799216792231997"},{title:"The World Is Quite Literally Your Enemy",image:"/creations/world-is-quite-literally-your-enemy/main.jpg",author:"mcjiprock",excerpt:"This addons makes your world quite a bit more alive and you quite a bit less alive.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985936185224482907"},{title:"The Corruption",image:"/creations/the-corruption/main.png",author:"drp",excerpt:"The Corruption is spreading\u2026 Can you survive in this unique survival challenge where the world is against you?",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985927721035112458"},{title:"Blood Rot",image:"/creations/blood-rot/main.png",author:"braden",excerpt:"Infect your world with the Blood Rot, a disgusting new biome that eats away at your world.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985780948832485417"}];export{te as C,ae as c};
