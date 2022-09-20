/**
 * 打字效果 byaei
 */
 function typewrite()
 {
     let str="<在青山绿水之间，我想牵着你的手，<走过这座桥，<桥上是绿叶红花，桥下是流水人家，<桥的那头是青丝，桥的这头是白发。<生日快乐！宝贝我爱你!<";//利用<作为换行符 -作为空格
     let strp="";
     let i=0;
     function print1()
     {
         if(str[i]=='<')
         {
             document.getElementById("box1").innerHTML=strp+"<br><br>"+'|';
             strp+="<br><br>";
         }
         else
         if(str[i]=='-')
         {
             document.getElementById("box1").innerHTML=strp+'&nbsp&nbsp&nbsp';
             strp+="&nbsp&nbsp&nbsp";
         }
         else
         {
             strp+=str[i];
             document.getElementById("box1").innerHTML=strp+'|';
         }
         i++;
     }
     function print2()
     {
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'&nbsp';},100);
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'|';},630);
     }
     let printid=setInterval(() => {
         print1();
         if(i==str.length)
         clearInterval(printid);
     },90);  
     setTimeout(() => {
         id=setInterval(print2,1060);//注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
     },(str.length-1)*90);
     //0.53秒闪一次
 }
 



let clickb=false;//判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件
 
 function funclick()
 {
     let x = document.createElement("audio");
     x.setAttribute("src", "./video/55.mp3");
     x.setAttribute("autoplay","autoplay");
     let yinyan=document.getElementById("yinyan");
     yinyan.setAttribute("style","opacity:0");
     setTimeout(function(){
         document.getElementById("fronclick").style.zIndex=-300;
         document.getElementById("box").style.opacity=1;
     },1500);//让播放按钮消失了
     //yinyan.style.opacity=0;
     clickb=true;
 }


 
 
 let k={
     a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25,
     A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25
 } 
 let a=[
     {name:"A",yin:8, str:"<br><br><br>宝贝，你还记得你问过我无数遍我喜欢你什么<br><br>我喜欢你笑的样子，喜欢你撒娇嘟嘴气鼓鼓的样子，<br><br>喜欢你遇见我时张开手小跑扑进我怀里的样子...<br><br>其实你什么样子我都喜欢，<br><br>不是最好的时光里有你在，<br><br>而是你在，我才有了最好的时光。<br><br>（PS：尝试按下其他的键吧~）"},
     {name:"B" ,yin:2, str:`<br><br><br>若逢新雪初霁，满月当空<br></br>下面平铺着皓影，上面流转着亮银，<br><br>而你带笑地向我走来，<br><br>月色和雪色之间 ，是第三种绝色 ，<br><br>与我而言， 日月星辉之中，你是第四种难得。`},
     {name:"C" ,yin:3, str:"<br><br><br><br>想牵你的手，<br><br>一起到一个叫永远的地方，看天长地久的风景，<br><br>尝海枯石烂的味道。"},
     {name:"D" ,yin:4, str:"<br><br><br><br>我想谈一场永不分手的恋爱，<br><br>就算是我们很忙，就算是我们很累，<br><br>只要见到彼此就会温馨一笑。我们会一直走下去。<br><br>直到...我们蹒跚漫步，夕阳西下，<br><br>白头到老，相濡以沫。"},
     {name:"E" ,yin:3, str:"<br><br><br><br>我爱你，<br><br>比昨天多一点，比明天少一点"},
     {name:"F" ,yin:6, str:"<br><br><br><br>春花，秋月，夏日清风，冬日暮雪，<br><br>这些都很美，但唯有你的心里，才是我想去的四季。"},
     {name:"G" ,yin:7, str:"<br><br>在爱情的世界里，<br><br>我一无所有，也一无所知，<br><br>在情感的小站里，<br><br>我愿你是第一位来客，也是永远的主人，<br><br>陪伴着我，一生一世"},
     {name:"H" ,yin:5, str:"<br><br>你的双眸有遥远的冬雪，你的微笑有绚烂的夏阳，<br></br>你一转身便有花开为你，你一低头便有星辰黯然，<br></br>你在我心里，我便拥有全世界。"},
     {name:"I" ,yin:3, str:"<br><br>我见过沧海的云，巫峡的雨。<br></br>我见过一月的雪覆于白山，又渐变于葱茏。<br></br>我在峨眉的林里云兴霞蔚，<br><br>一径之后，雾水成露，沾于衣襟。<br></br>我听过柔橹漂浮，声声入水，又归于沉寂。 <br></br>我看到春风八里十里，衣袖带花。<br><br>无论何时忆起， 它们实在是人生可喜， <br><br>但都不如眼中的你。"},
     {name:"J" ,yin:10, str:"<br><br><br><br>花盛开就是一句，夜漫过就是一篇。<br><br>黄昏开始书写，黎明是无数的扉页。<br><br>全世界拼成首诗。我爱你当作最后一行。"},
     {name:"K" ,yin:11, str:"<br><br>对你的喜欢，<br></br>大抵是燃烧的星星坠落在海底开成珊瑚，<br><br>又或是揉碎的白云环绕着山峦流成大河。<br><br>那种梦幻，不真切，却令人迷醉的心动，<br></br>就像晚风拥抱月亮，海浪亲吻礁石。"},
     {name:"L" ,yin:8, str:"<br><br><br><br>一合一分话别甚苦，一喜一泣黯然神伤，<br></br>一拥一吻残留余温，一笑一哭此情长流。<br></br>我们心同相知，天涯海角共此时，<br></br>明月似我心，此情久久!"},
     {name:"M" ,yin:13, str:"<br><br><br><br>我想陪你看遍世间美景，<br><br>然后告诉你，它们都不及你万分之一。"},
     {name:"N" ,yin:3, str:"<br><br><br><br>月亮照回湖心<br><br>野鹤奔向闲云<br><br>我步入你"},
     {name:"O" ,yin:3, str:"<br><br><br><br>幸福不是珠光宝气，而是阳光灿烂的笑脸，<br><br>悠然自得的笑脸，含苞待放的笑脸。<br></br>祝愿你笑口常开，那样就是你在幸福着。<br><br>你幸福，所以我幸福。"},
     {name:"P" ,yin:16, str:"<br><br><br><br>草在结它的种子，<br><br>风在摇它的叶子，<br><br>我们站着不说话，就十分美好。"},
     {name:"Q" ,yin:17, str:"<br><br><br><br>我喜欢春天的花朵，夏天的树荫，<br></br>秋天的黄昏，冬天的阳光，<br><br>和每天的你。"},
     {name:"R" ,yin:18, str:"<br><br><br><br>如果你是蝴蝶，我愿做花朵，只为你开放。<br><br>如果你是风，我愿做沙，陪你到天涯。<br><br>你需要什么，我愿付出什么。"},
     {name:"S" ,yin:19, str:"<br><br>我的心是亿万光年恒星爆炸后的残骸，<br></br>荒烟蔓草，满目疮痍。<br><br>你来到这里，携着万千欢喜，<br></br>覆在贫瘠之地上。枯木逄春，<br></br>从此我的世界里只有为你而绽的名为爱的绝色。"},
     {name:"T" ,yin:20, str:"<br><br>写信真是一件温柔的事，<br></br>细腻的小心思就藏在横竖撇捺之中，<br><br>像是一只害羞的小兽躲在情意绵绵的字里行间，<br></br>被火漆封印起来，<br><br>等着解封的那一刻窜出来，<br></br>跳进启信人眼底的柔波里。"},
     {name:"U" ,yin:5, str:"<br><br>我想去拥抱你，<br><br>即使间隔春秋，山河阻拦，风雨交加，路遥马远，<br><br>我都可以跨越重重艰险去找到你。"},
     {name:"V" ,yin:8, str:"<br><br><br><br>山河远阔，人问烟火，<br><br>无一是你，无一不是你。"},
     {name:"W" ,yin:3, str:"<br><br><br><br>一生只谈三次恋爱最好，一次懵懂，一次刻骨，一次一生，<br><br>我多希望这三次都是和你，<br></br>多希望你是陪我走一生的那个人。"},
     {name:"X" ,yin:2, str:"<br><br><br><br>纵然万劫不复，<br><br>纵然相思入骨，我也待你眉眼如初，<br><br>岁月如故。"},
     {name:"Y" ,yin:25, str:"<br><br><br><br>我想牵着你的手，走到白头;<br><br>我想扶着你的肩，给你安慰;<br><br>我想看着你的脸，展露笑容;<br><br>我想听着你诉说，生活种种。"},
     {name:"Z" ,yin:26, str:"<br><br><br><br>我用尽所有修辞，遣尽所有字句，<br><br>到最后表达的，仍是我爱你。"}
 ];
 let b=["linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
 "linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
 "linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
 "linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
 "linear-gradient(25deg, #04245a, #652959, #a62557, #e60b55)",
 "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
 "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
 "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
 "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
 "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
 "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
 "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
 "linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
 "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
 "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
 "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
 "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
 "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
 "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
 "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
 "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
 "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
 "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
 "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
 "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
 "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"];
 let s='a';
 let records=0;//记录我已经输入过了，防止出现多个打字function byaei
 
 
 /*键盘事件*/
 function fl(e)
 {
     if(clickb==true)
     {
        let key =e.key;
     if((key<='z'&&key>='a')||(key<='Z'&&key>='A'))//避免大小写的错误
     {
         let p=a[k[key]];
         s=s+p.name;
         let x = document.createElement("audio");
         x.setAttribute("src", `./video/${p.yin}.mp3`);
         x.setAttribute("autoplay","autoplay");
         let box=document.getElementById("box");
         let boxl=document.getElementById("boxl");
         let boxr=document.getElementById("boxr");
         let boxup=document.getElementById("boxup");
         let bac=document.getElementById("bac");
         bac.style.opacity=0;
         box.style.transition="0.5s";
         box.style.opacity=0;
         boxup.style.opacity=0;
         setTimeout(function()
         {
         boxl.innerHTML=`${p.name}`;
         boxr.innerHTML=`${p.str}`;
         console.log(b[k[key]]);
         bac.style.background=`${b[k[key]]}`;
         box.style.opacity=1;
         boxup.style.opacity=1;  
         bac.style.opacity=1;
         },500);
         if(s.indexOf("ILOVEYOUMQILOVEYOU")!=-1&&records==0)
         {
             setTimeout(function()
             {
                 records=1;
                 bac.style.opacity=0;
                 box.style.opacity=0;
                 boxup.style.opacity=0;  
                 bac.style.opacity=0;
                 let box1=document.getElementById("box1");
                 box1.style.zIndex=7;
                 box1.style.opacity=1;
                 let music=document.createElement("audio");
                 x.setAttribute("src", `./video/ndxh.mp3`);
                 x.setAttribute("autoplay","autoplay");
                 x.setAttribute("loop","loop");
             },750);
             setTimeout(typewrite,3000);//进行打字
         }
     }
     }  
 }
 
 
 window.onkeyup=fl;