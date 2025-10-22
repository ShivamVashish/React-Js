<!-- React Internally working (Khete haina ki react code ko bht optimize kr deta ,fast etc asa kyu khete h) 
Ek Jb bhi hma child component lete h usme hm keys ko attach krte h kyu krte h
Javascript m asi kya prblm thi ke hm react pdhne ki jarurt pdi hm jsx ko js ke sath bhi likh skte h kya prblem thi dekho 

Mnlo javascript m hmara pass koi buttion h or m ye chahta hu ki jb m iss button ko click kru to ek to puri body ka backgroundColor change ho jayga 
document.body.style.bgColor = 'red'
documnet.body.style.fontSize = '30px'
document.body.style.padding = '10px'
doucmnet.body.style.margin = '10px' 
 mn lo ek button pr click krne pr mujhe ye sb chaiye to isme kya button jb btn pr click to wo inn code ko pdhega sbse phle bg-color clegi iske hone ke baad dusri,phir third,phir fourth asa clti h ye problem h
 but m ye chahta hu ki ye ek sath ek hi bar m execute ho jaye

 Ab ek sath hi kyu execute krana h to dekho(yha pe do chez hoti h )
 1.Reflow = > Iska mtlb hota h ki konsa element konsi position pr ayega koi bhi youtube ka search bar whi pe kyu hoga jha pe wo h asa etc (to har ek element kis position pe ayge ye bhi to calculate krna pdta h or isko hi hm khete h reflow,pr relow ye bhi check krta h ki uska size kitna hoga )
 2.Repaint = > ye h ki jo hme hmari screen dekh rhi h wo ye sare element isme pixel hoge or har ek pixel ke andr hme color ko attach krana h puri screen pixel ki form m hogi na or har ek pixel ko color dena hoga 
 repaint (yhi hota h ki color ko attach krana color ko attach krana)

ye dono cheze calculate krni hoti tbhi to dekha skte h hm Ki dom to h hmare pass lekin ye dom screen m dekhege kse screen m dekhane ke liye konsa elemnet kha hoga uska color kse hog aye sb to ye dono hi manage krte h 

ye dono bht hi expensive operation h khakr ye Reflow wala h 
sbse phle bg-red kr dia to ye dono instruction clegi ki konsi positon kha h uske bad hi scren pr color dekhega
phir font size ko 30px  krdo uski positon nikali jaygi uska size nikala jayga to reflow phir se calculte hoga
phir padding krdo usko positon phir se calculate ho jayg bbar bar calculation clegi jitni bhi instruction hogi

agr m incharo(style wali) ko ek sath hi lakr de dua to ek bar m hi reflow,repaint dono execute ho jayga or ek hi bar m screen pr visible ho jayga ab apko bar bar run krne ki jarurat nhi h ek sath hi code ko pkda or ek bar m hi de dia or ye kaam hmari react krti h inko bundle bnakr ek bar m hi execute kra deta h 

Question ye h ki m in charo instruction ko ek bar dedo bundle bna kr but javascript to hmari single threaded language h wo to ek ek krke hi instruction ko execute krega kyu js ko hme bundle bna kr de bhi dia to wo to single threaded h ek ek krke hi to execute krgea


suppose kro ki hme jo bhi screen dekhti haina wo image hi dekhti h wo dekhti 60fps(frame per second) m agr hm khi mouse bhi scroll kr rhe h to wo bhi hme image hi show hori h ab hme koi ek second m 60 photo dekha to hme asa lgega ki koi chez bhag rhi h same hi km meri screen ke sath bhi hota h  Jo bhi hmari video hoti h wo bhi image hi h but hme asa lgta h usse dekh kr jse wo clri ho but wo sirf images hi change hori h (or isko bolte h illusion ) to yha pr yhi hota h ki mujhe 60 frames dekhani h ek second m apni screen pr 


React kya krta h ki hamri jo style(charo instruction) h unhe kisi  particular frame m hi attack kr dega har frame ke liye kuch tym hoga bilkul thoda sa ek second m agr 60fps dekhane h to 1/60fps per frame unko execute kran h ek ek krke kruga to wo hmne 1 second ke andr hi ek frame m dall di to asa lgega ki ek sath hi hmne sari daal di kyuki 1/60 second mil rha h to frame m attach kra denge or jb fram ui m attach hoga to phir wo screen pr visible hoga 
har frame m 1/60 second m in charo ko attach kra dega  har fram m itna hi tym lega or ye sb javascript ne hi kia at the end krta to wo hi h 
kr to wo bhi ek ek krke hi rha h but wo 1/60 second ke andr complete kr rha h 
example => Suppose mere pass multiple code h ek jgha kuch h ek jgah kuch to ek jgah button pr click rkne pr wo sb run hona chiaye jo mera styles ab jse hi usne btn pr click kia to uske pass bs 1/60fps second h change krne ek liye wo changes usse age click honr pr hi to show hoga or ye style properteis 1/60ps m appply ho jaygi

agr hm javascript se krayeg to wo ek ek krke hi execute krge but react m  hm iska bundle bna kr denge iska react isko khud handle kr leta h ki in sbko ek sath execute krao (batch update bhi bolte h hm react m ) but javascript m agr isko bhejta hu to wo ek ek krke jayga or ala alg frame m jaygi but react m ye ek hi frame m charo instruction jaygi 1/60fps second  m react bundle(batch) krke deta h or javascript ko de deta h ki isko execute kra do ek bar m to phir reflow repaint ek bar m hi cla dega
React styles Instruction ka automatic batch bna deta h or js ko de deta h ki inka execute kra do frame m 

but hm javascript m bhi asa kr skte but hme uske liye fragmentation ka code likhna hota h js m or wo react khud krti h bss  React yhi kheta h ki tum bss km kro or mere pr chod to

<!-- Virtual DOM  
Jb hm code likhege ek to hmara RealDOm bnta h or RealDOM ke andr jb bhi changes hoga wo hme hamri UI m dekhega
Virtual DOM initially real DOM ka exact copy create karta hai, lekin ye without any changes hota hai.
Matlab, jab React first time render karta hai, Virtual DOM me real DOM ka snapshot banta hai, bas ye JS object ke form me hota hai, browser ka actual DOM nahi hota.
Ye lightweight hota hai, sirf structure aur data ka representation rakhta hai, extra browser info nahi. 

React aur Virtual DOM ka kaam =>
React apna ek Virtual DOM create karta hai, jo real DOM ka lightweight copy hota hai.
Ye lightweight isliye hota hai kyunki ye sirf JS objects hota hai aur unnecessary browser-specific data store nahi karta. 

Update hone ka process =>
Jab koi state ya props change hoti hai, React new Virtual DOM (NVDOM) create karta hai.
Is NVDOM ko old Virtual DOM (OVDOM) se compare karta hai using diffing algorithm.
Diffing algorithm check karta hai ki sirf kaunse parts me changes hue hain.

Important =>Notes
Note =>React hmari Jse hi hm DOM m kuch tag add krte h to react uska snapshot lekr uski copy create kr leta h bina changes ke phir jb hm kuch changes krte h to phir wo har changes pr copy phir se create krta h phir wo OVDOM or NVDOM dono comparsion hota h phir compare krti h hmari diffing algorithm phir OVDOM or NVDOM batch bnta h jo bhi changes hota h wo phir react uss batch m jo bhi changes hote h wo Real DOM ko bhejega phir real DOM unhe ek bar m hi ek frame m dalega or unhe ek bar m hi apply kr dega agr hm kuch or change krege to phir wo new wala hoga or usko previous wale se compare krega asa hi clta rheyga

Hm JO bhi changes krte h wo NVDOM ke andr krte or phir usko compare krte h OVDM se phir usko real DOM m apply hota h bss

Note=> Real DOM ke andr hm direct change nhi kre agr asa krege to krege to batch updates ko pkd nhi paoga 

jo ye code bhej rha h realdom ke pass to at the end wo segment bna kr hi bhej rha h javascript m ek ek krke bhejna pdta h or react unka ek batch bna kr ek sath bhej dega 

react hmara agr koi instruction jo phle se h agr usko koi dobara se re-render krta h to usko wo leta hi ni h

example =>count = 2
setCount(count + 1),setCount(count + 1),setCount(count + 1) = > agr ye 3 bar likha h to ye thodi h ke ye isko 5 kr dega isko reject kr dega react ki kya h ye do ko hta dega ki ek hi km 3 bar kse kra rhe ho ye kyu krega asa kyuki yha pr ye count ki previous value hi lakr de rha new nhi 
but agr asa kre

setCount((state)=>state.count + 1),setCount((state)=>state.count + 1),setCount((state)=>state.count + 1),
asa krnse jo bhi hmari value ayegi new updated value ayega or ye 2 se 5 kr degi  isliye isme hme latest value dekhti thi 

Diffing Algorithm is a part of the Reconciliation process in React.
Reconciliation = >Reconciliation React ka wo process hota hai jisme Old Virtual DOM aur New Virtual DOM ka comparison hota hai.React dekhta hai ki kya changes hue hain, aur sirf wahi changes Real DOM me apply karta hai — poora DOM re-render nahi hota.

Reconciliation is a process in React that compares the Old Virtual DOM (OVDOM) and the New Virtual DOM (NVDOM).
After comparing both, React identifies the differences and updates only the changed parts in the Real DOM, making the application faster and more efficient.

Reconciliation is the process in React where the Old and New Virtual DOMs are compared using a Diffing Algorithm, and only the changed parts are updated in the Real DOM for better performance.



Key Concept : (Code iska hi h file m )
Imortant Point(question):=> Mn lo mera ek parent h or uske ke 4 child h or unme se mne ek pr click kia ki add funciton ko call krdo but add function ko charo m h to konse add funciton ko call krna h kse pta clega iss liye hi hme key ki jarurat hoti h jise mujhe uniquely identify krna pde sbhi child ko mne key degi 0,1,2,3 krke ab jb bhi m click kruga to key bta degi konse wali add function ko run krna h  or kise ke nhi jo hmari state hoti h wo hmare key ke attach ho jatih key hmari unique hoti h


example =2 
<li>Milk<li/>
<li>Sugur<li/>
<li>Coffee<li/> ye purane wale virtual dom ke nadr hoga(OVDOM)
mn lo hmne yha pe mention nhi kia h key ko ab hmne apne purane code m new element add kr dia Smosa
<li>Smosa<li/> // ye hoga new Virtual dom ke andr(NVDOM)
<li>Milk<li/>
<li>Sugur<li/>
<li>Coffee<li/>
ab differ algorithm kse check krega wo dekhega ki phle wale m phle Milk h or dusre wale ke phle m smosa phir second ko second se third ku third se or phir last NVDOM ke pass ek bach jayga Coffee 


Note=> agr key nhi dalege to ye asa update krga ki phle wale ko dekhege or second wale ko bolge ki phle wale ko destroy kro or uski lgah smosa dala asa hi phir 2,third ,or phir last m add kro chai or ye sari  updates RealDOM ko bhejega (OVDOM) ke element ko destroy kro or new wale ke create kro or RealDOM pr updated kro  but ye to glt h bss mne to ek new add kia h or sbko piche htaya ye hua h real to yha pe kyuki diffing algorithm asa hi km krta h wo dekhega ki (OVDOM) ki first node or NVDOM ki first alg alg syd old wala delete kr dia h new create kia h 

Diffing algo ye nhi dekhta ki kya hua kse hua agr use same nhi mili to purane walo delete krdega or new wale ko updated kr dega 

agr ye wala wo updated bhi bhej dega old delete or new Updated wala to kya hi frk pdta h km to mera hora hi h 
key kijaruat phir pdi ku
usko ye bhejna tha ideal update
ideal Update : Samose wala node create kro ,starting m or add krdo or baki nodes ko ek ek piche krva do ye chahta tha m (yha pe bss ek hi memory allocation hua h  yha pe ye km hmara key krke deta h )jb hm sbko key denge agr wo phle element dono ka nhi milega to wo smj jayga ki ye alg node h new wale ki alg h kyuki key alg phir dusre se compare krega phir usko mil h jygi aggee bhi asa hi krgea wo 

or phle wali m kya hora h ek milk wale ko delete kia memorry realease kri or phir dusra smose ke liye create kia memory phir allocation kraya or hm pichle wale m kya kiah 3 kimemory release ki h or 4 ko allocate kri h 


agr key denge to wo phir problem solve ho jaygi
key ko kbhi index nhi bnana jo array ka index hoga wo array ke index ke according nhi bnana chaiye 