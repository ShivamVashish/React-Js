<!-- Closeure Important or React for Interview kha use hota h or kse use hota h 
imse char cheze change hori h to isme 4 hi state use hoge,jse counter m sirf number change hora tha backgroundColor wale m bhi bss bgColor hi change hora tha to ek hi useState use hora tha 

Sbse phle bar jb mera (Passwordgenerator) ye function run hua hoga render se hua hoga to usne sbse phle andr wali statement pdhna start kia 
1.usne password pdha or initial value usko fix kr dega jo password ki hmne de rkhi h or iske sath setPasswordkrke ek function bna dega ye mera initail km hoga 
2.phir ek length bnayeg or uski initail value(10) ko dega or ek funciton bna dega setLength ki jb bhi mujhe length set krni ho m iss function ko call kr dunga 
3.phir ek variable bnega numberChangeed or uske andr hoga false or ek function bnega setNumberChanged
4,phir ek variable bnega Characterchangeed or uske andr hoga false or ek function bnega setCharacterchanged 

phir return m ye hoga return or ye bolega ki h1 ke andr password dal do jo bhi hmari initial value h wo dall do isliye screen m jo de rkha h wo show hua 

input hua phir usne kha range min(5) max(50) honi chiaye and value={length} phir eventlistener lg gye 
label ko pdha usne phir length ki jo value h (10) wo yha a jaygi 

input bnao checkbox type ke ek defaultChecked(numberChanged) ye h false isliye check nhi hoga 

phir uusse niche wala bhi smae h CharcterChaneg ki m false h isliye ye check nhi hogi 


example 
jse mne input ki range bdhai to uski length bd gyi to usne length ko kse pkda hoga to usne pkda setLength function ki      onChange={(e)=>setLength(e.target.value)} jb bhi hma iss trah se krte h to ye kya krta h function ko dobara se call krta h to phir jo hmari length h 19 h phr paswordGenerator(main) function run hoga or rnage ke andr(19) ho jaygi value jitni bhi hme change krke kia hoga 

ab jse hi mne apne checkbox ki value check krdi to wo phle se hi false h to phir hmare onChange function ne phir dobara se hmare function PasswordGenrator ko call kia hoga or phir checkbox ki value ko update kr dia hoga sbhi lgah

or phir ye hoga ye CharacterChange wala phir hoga 
jo hmara change hora h bss wo hi ayge baki wale apne purani value ko hi lekr ayege

ab jse hi numberwale ko check krege phir ye function re-render hoga 

setNumber,setCharacter,setLength inka km h new value ko update krvana 




<!-- Ab Password Generator Kse hoga  -->




<!-- GeneratepassRandom()
 asa call krne pr hmara loop infinite loop pr cla gya yeisliye hua h ki ye main function clega or ek-2 execute krge phir setPassowrd ko krega phir wo usko dobra krega phir main function phir krega generapassrandom wale ko asa hi infinite ho jayga  m ye chahta hu ki ye ek bar cle bss GeneratepassRandom isliye liye use krege useEffect hooks -->



 <!-- Hmara code ek dm sy h but isko optimize krne ke liye 
 jb sbse phle main function clta h to memory or code exection hota h function ke andr jo bhi sbhi ko memory allocation ho jaygi 

 Why optimization is required 
 setPassword , or jo function h main function call hone pr run hoge or phir ye function re-rendering krege to phir se memory allocation hoti rheye or phir mne dusre funciton ko call krdit ot phir se mere allocte hogi to mujhe bss issi chez se bachna h  ki jo mera generatepassword wala function bn gya h m isko dobara se na bnao usko hi use krlu 

 ab yha pe khel ayega useCallback ka 

 Sbse phle to ye dekhna h ki ye Passwordgenerator(bhr wla ) kis kis chez ka use kr rha h (GeneratepassRandom) ye andr wala function h  ye numberchanged wale ki value ko store krke rkhega ,characterchange,length 
 first wala function dusre function m length ki characterChange ki or NumberChanged value ko use kr rha h or unhi ke basis pr ye hme answer lakr dene wala h (isme bhi andr wala function bhr wale ke length,characterChanged,NumberChanged ka use kr rha h )

 SetPassowrd,SetLength,SetNumberChanged,SetCharacterChanged ye bhi hmra ek bar hi create hote h or ye bhi as a reference store hote h or ye hmesha main function ko hi call krege 

 How to use UseCallback iski help se kra skte h 

 useCallback (hooks) ye cacher krke rkhta h ki phle yha pr funciton tha ab yha pe h to ye purane wale function ko lakr de skta h taki usse phir se create na krta pde ue call back letah or ek dependencies leta h  ye dependencies tb create krge aiss function ko dobara jb isko length change hogi ,or jb mera characterchanged ,or numberchanged hoge tbhi ye iss funciton ko changed krge vrna ye older wala function jo h ussi ko use krega

 Correct Explanation (simple words me):
useCallback React ka ek hook hai jo kisi function ko memoize (yaad) kar leta hai —
taaki har render par naya function na bane, jab tak dependencies change na ho.

