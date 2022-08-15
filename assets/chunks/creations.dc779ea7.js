import{_ as p,e as u,f as l,o as r,c as d,a as e,u as t,w as s,t as i,g as b,F as h,r as w,d as y,V as v,h as x}from"../app.bf148059.js";const _={id:"braden",title:"Braden",position:"Content Creator",image:"/authors/braden/logo.png"},C={id:"drp",title:"DanRobzProbz",position:"Content Creator",image:"/authors/drp/logo.jpg"},k={id:"kekecreations",title:"KekeCreations",position:"Content Creator",image:"/authors/kekecreations/logo.jpg"},j={id:"mcjiprock",title:"Mcjiprock",position:"Content Creator",image:"/authors/mcjiprock/logo.jpg"},B={id:"xxpoggyislitxx",title:"XxPoggyisLitxX",position:"Content Creator",image:"/authors/xxpoggyislitxx/logo.jpg"};var A={braden:_,"cubed-creations":{id:"cubed-creations",title:"Cubed Creations",position:"Content Creator",themeColor:"#FF8E0C",image:"/authors/cubed-creations/icon.jpg"},drp:C,"gamemode-one":{id:"gamemode-one",title:"Gamemode One",position:"Content Creator",themeColor:"#FF3924",image:"/authors/gamemode-one/icon.png"},kekecreations:k,mcjiprock:j,"spectral-studios":{id:"spectral-studios",title:"Spectral Studios",position:"Content Creator",themeColor:"#404040",image:"/authors/spectral-studios/icon.png"},xxpoggyislitxx:B};const T={class:"card"},D=["srcset"],M=["srcset"],S=["src","alt"],F={class:"content"},N={key:0,class:"author"},P=["srcset"],E=["srcset"],O=["src","alt"],V={class:"author-name"},$={class:"author-position"},I={class:"tag-list"},L={class:"tag"},R={class:"actions"},q=u({name:"CreationCard",props:{creation:null},setup(a){const c=a,o=l(()=>A[c.creation.author]);return(g,n)=>(r(),d("div",T,[e("picture",null,[e("source",{srcset:t(s)(a.creation.image).replace(/\.(jpg|png)$/,".avif"),type:"image/avif"},null,8,D),e("source",{srcset:t(s)(a.creation.image)},null,8,M),e("img",{src:t(s)(a.creation.image),alt:`Thumbnail of ${a.creation.title}`},null,8,S)]),e("div",F,[e("h1",null,i(a.creation.title),1),t(o)?(r(),d("div",N,[e("picture",null,[e("source",{srcset:t(s)(t(o).image).replace(/\.(jpg|png)$/,".avif"),type:"image/avif"},null,8,P),e("source",{srcset:t(s)(t(o).image)},null,8,E),e("img",{class:"author-logo",src:t(s)(t(o).image),alt:`Logo of ${t(o).title}`},null,8,O)]),e("div",V,[e("span",null,i(t(o).title),1),e("span",$,i(t(o).position),1)])])):b("",!0),e("div",I,[(r(!0),d(h,null,w(a.creation.tags,m=>(r(),d("span",L," #"+i(m),1))),256))]),e("p",null,i(a.creation.excerpt),1)]),e("div",R,[y(v,{tag:"a",text:"Download",href:a.creation.download,theme:"brand",size:"medium"},null,8,["href"])])]))}});var H=p(q,[["__scopeId","data-v-8f2ac848"]]);const W={class:"creations"},Y={class:"container"},z=u({name:"Creations",props:{items:null,title:null,description:null},setup(a){const c=a,o=l(()=>{var n;return(n=c.title)!=null?n:"Creations"}),g=l(()=>{var n;return(n=c.description)!=null?n:"bridge. powers some of the most advanced Minecraft Add-ons. Here are some of our favorites..."});return(n,m)=>(r(),d("div",W,[e("h1",null,i(t(o)),1),e("p",null,i(t(g)),1),e("div",Y,[(r(!0),d(h,null,w(a.items,f=>(r(),x(H,{creation:f},null,8,["creation"]))),256))])]))}});var U=p(z,[["__scopeId","data-v-198ff75b"]]),X=[{title:"Planes",image:"/creations/planes/main.jpg",excerpt:"Become a pilot and fly high in the sky!",tags:["flight","simulation","steampunk"],author:"cubed-creations",download:"https://www.minecraft.net/en-us/pdp?id=7e9fd987-5928-4044-bcce-ca03bde1bce0"},{title:"Advanced Mining",image:"/creations/advanced-mining/main.jpg",excerpt:"Mine your heart out with AWESOME new machinery!",tags:["economy","mining","advanced"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=56952d12-3c9c-4597-886d-b62f77202e27"},{title:"Minecraft: Sonic the Hedgehog",image:"/creations/sonic/main.jpg",author:"gamemode-one",excerpt:"Sonic the Hedgehog races into Minecraft at supersonic speeds!",tags:["platformer","retro","racing"],download:"https://www.minecraft.net/en-us/pdp?id=3086206d-62b3-45ff-a0a8-968b8de33082"},{title:"DragonFire 2: Nations",image:"/creations/dragon-fire-2/main.jpg",author:"spectral-studios",excerpt:"The next edition in the DragonFire series is here!",tags:["adventure","dragons"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=d3eb0ce8-6190-483d-9208-356dc209c173"},{title:"Spellcraft",featured:!0,image:"/creations/spellcraft/main.jpg",author:"gamemode-one",excerpt:"Premiering the brand new Scripting API for Bedrock! Combine runes to craft powerful elemental spells!",tags:["magic","spells","adventure"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=f5cc05fc-616a-4963-a02b-5db3fcc9e311"},{title:"HOW TO TRAIN YOUR DRAGON",image:"/creations/httyd/main.jpg",excerpt:"This is Berk, home of Vikings and dragons!",tags:["adventure","dragons"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=4f7cf58b-e6d7-46ea-9f8c-206d97f2bafe"},{title:"Ultimate Dragons",image:"/creations/ultimate-dragons/main.jpg",excerpt:"Breathe devastating fire from dragon-back and become a master of dragon flight with incredible precision and speed.",tags:["dragons","story","adventure"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp/?id=c1c2dddd-9a10-4013-8adb-adf472560ad2"},{title:"Voidlands Dimensions",image:"/creations/voidlands-dimensions/main.jpg",author:"gamemode-one",excerpt:"A skyblock like no other.",tags:["skyblock","hardcore","survival"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=010314fa-71d2-4160-a42b-491fb8a95002"},{title:"PAC-MAN",image:"/creations/pac-man/main.jpg",author:"gamemode-one",excerpt:"The legendary arcade classic PAC-MAN comes to Minecraft!",tags:["minigame"],download:"https://www.minecraft.net/en-us/pdp?id=366e895b-d090-4151-a83a-e86c6b339732"},{title:"DragonFire",image:"/creations/dragon-fire/main.png",author:"spectral-studios",excerpt:"Become a master dragon trainer!",developer:"OutLandishly Crafted",tags:["adventure","dragons"],download:"https://www.minecraft.net/en-us/pdp?id=d8a14066-38ad-4633-bab8-f50ab1817f1c"},{title:"Seaside Story",image:"/creations/seaside-story/main.jpg",author:"gamemode-one",excerpt:"Live out your own peaceful ocean adventure!",tags:["ocean","fishing","relaxing"],download:"https://www.minecraft.net/en-us/marketplace/pdp?id=5c7cd39e-9903-477b-b013-1b6b6d2bd9ab"},{title:"Bloom",image:"/creations/bloom/main.jpg",excerpt:"Enter a tranquil forest and discover a garden long abandoned.",tags:["exploration","nature","flower","relaxing"],author:"gamemode-one",download:"https://www.minecraft.net/en-us/pdp?id=d8604c56-d709-40e1-a286-13dce3b34ac5"},{title:"High and Dry",image:"/creations/high-and-dry/main.png",author:"kekecreations",excerpt:"You crash land on an arid planet, you do not remember who you are or anything from your past life. Now it is time to decide who you want to be on this new hostile world!",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985799216792231997"},{title:"World Against",image:"/creations/world-against/main.jpg",author:"xxpoggyislitxx",excerpt:"You did some horrible things in The End which caused you to be moved to an alternate world where everything is trying to kill you as well as the universe.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985931887484751872"},{title:"The Corruption",image:"/creations/the-corruption/main.png",author:"drp",excerpt:"The Corruption is spreading\u2026 Can you survive in this unique survival challenge where the world is against you?",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985927721035112458"},{title:"The World Is Quite Literally Your Enemy",image:"/creations/world-is-quite-literally-your-enemy/main.jpg",author:"mcjiprock",excerpt:"This addons makes your world quite a bit more alive and you quite a bit less alive.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985936185224482907"},{title:"Blood Rot",image:"/creations/blood-rot/main.png",author:"braden",excerpt:"Infect your world with the Blood Rot, a disgusting new biome that eats away at your world.",tags:["bridge-jam","world-is-your-enemy"],download:"https://discord.com/channels/602097536404160523/961112716863504465/985780948832485417"}];export{U as C,X as c};
