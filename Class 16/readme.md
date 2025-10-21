<!-- const count = useSelector((state)=>state.slice1.count) isko khete h bht log subscribes to the event-->

<!-- Dispatch ke sath m slice attach hokr atah kyuki slice ke andr hi hmara sbhi reducer hote h -->
<!-- Aj hme dekhege ki Stores kse hota h Internally Hmne jo stores create kia h to wo at end ek object hi ye stores andr se dekhta kse h 
1.Subscripte( Jb bhi hm kisi data ko fetch krte h store se usko hm subscribe khete h 
jo hm useSelector use kr rhe the na isko bolte h hm subscribe to the event taki jo wha pe slice1 ke count ki value h usko hm fetch kr ske) -->
<!-- 2.Dispatch hmara kya krta h ye ek function h jo hmare action ko store ke reducer tk bhejta h
Example (Increment()) ye ek action hua h dispatch isko lekr jata h store m reducer tk
(actions: hi hmara Increment or Decrement ,Reset ye function hi hmara action(kya krna h ))
(Reducer : hota h In action(function) ka logic (means kse krna h ))
Jo hmara dispatch hota h wo action ko lekr jayga store m or store m slice m dekhega ki ye jo action h konse slice ka or wo lekr jata h hmare Store m 
or Store m jo hmara reducer h wo ye dekhta h ki konse slice ka action h or isme hm apne
slice:reactSlicer h or reactSlicer ke pass hmare sbhi action store asa pta clta h hmara action iss slice ka action h kyu slice ke pass react1Slice hota h or usme sb kuch store hota h

Note-> Jb hm apne Incremnet wala action clate h dispatch ke sath m to wo direct ata h stores m or wha pr dekhta h reducer m slicename(name) or uske andr hoti h reactSlice nm ka variables store uske sath m hote h sbhi action 

or hmne console.log(Increment()) ko check kia tha to iske sath iski slice1/Increment internally attach hoti h 
or ye dono store hoti h hmar type:slice1/Increment

Kisi bhi action ke pass do cheze hoti h 
1.{type :"slice/Increment",payload:undefined } payload ko abhi thodi der m krege (ye argumnet hota h bss or kuch bhi nhi hota )
jb hm increment action ko call krte h dispatch ke sath  to wo jata h hmare store ke pass to wo kheta h acha ye slice1 ka part h phir ye jata (reactSlice) ke reducer ke pass ab yha pe Increment likha h to wo increment wale ko call kr dega

Note => reactSlice ye bhi at the end ek object h iske andr name : slice1 or actions : Increm,Decre,Rest ye sb argumnet present h uska type presetn h(isko dekhne ke liye isko export krna hoga )

Important
reactSlicer.actions kya hote h ye hmare reactSlicer ke andr jo hmara function h (mtlb reducer h ) or mujhe jo bhi function execute krana h wo automatically create ho jata h

Main Important 
Important : dispatch(Increment()) jb = isko call krte h to ye jata h direct store m or store m dispatch ke sath internally ye bhi jata h jise pta clta h ye kiski slice ka konsa reducer h 
(type: "Slice1/Increment" , payload : undefine)
Ab Stores dekhaga ki Slice1: reactSlicer ye ye Slice1 ke andr jayga or wo h hmari reactSlicer m function h increment asa pta clega 

Immer(Redux Toolkit ka engine)
Ye kya krta h ye internally state ko immutable banata h bina humne complex code likhye

Tum state ko direct change nahi kar sakte(ye allow nhi h [state.count = state.count + 1])
kyu redux purana object or new object ka comparision (===) krke btata h ki state badli hai ya nhi 
Agar hum purana object hi change kar denge, Redux ko pata hi nahi chalega


Immer (ye purane object ki draft copy create krta h ) ek proxy object hoti h Means ye ek intermidiate layer h jo har change ko observe krtih hm original state m change nhi krte hm copy m changes krte h  
jse hi reducer function khtm hota h ye Immer apne recorded changes ko original state pr apply krke naya object bana deta h or return kr deta h object form m hi jis form h ussi form m return krna h ya updated krna h
phir ye btao jo hmne original object pe jo content tha wo drapt wale m jo change kia tha wo phir apne orignal wale pr apply kr dia to phir orignal wala ka jo content tha phle se wo changes hokr new wala apply ho jayga haina

Original object delete nahi hota,
🔸 Wo store ke purane state me pada rehta hai,
🔸 Jab tak Redux ko uski zarurat nahi hoti, tab tak wo memory me rehta hai,
🔸 Fir JavaScript ka Garbage Collector usse hata deta hai (automatically)

Immer ye kheta h ki ya to mere new object ko return kro ya mere Original Object ko update kro 

phle states asa changes hoti h thi
Increment(state)=>{
return(...state, count:state.count + 1)
}


Ab new file Bnate h usme new Componenet bna kr hm Count ko dusre component se use krege Agr usme hm kuch number dalege to utne se count increase ho jayga asa kuch 
customcounter.js(file name)=>

ab mne input m CustomCounter wale ke suppose 10 dala to count 10 se increse ho jana chaiye asa krna h dekhte h 

ab handle krne ke liye use state variables create kia h wo global kyu nhi kia isliye kia kyuki agr koi component h usko mujhe multiple state ke sath use krna hota tha isliye hm Slice create krte h or ye sirf mere liye hi use hoga to hme global store m jakr variables bnane ki jarura tnhi h 


ab hme counter wale ki value bhi chaiey kyuki wo global state m h or uske liye use krege hm 
useDispatch() import bhi krreg CustomCounter wale m krna h 

hm slice wale m incre,decre,reset , ke sath ek funciton or bnanahoga Customincrease usko expor tkrge customCounter m import krege or useDispatch ke andr (customincreaser(number)) ye krna h ye jon umber bhej rhe haina hm wo payload kr andr cla jata h 
CustomIncreaser:(state,action)=>{state.count+=action.payload} ye do value leta h ek action or ek payload to mujhe action ke andr mujhe payload wali value chaiye thi ye wali dekho asa hi tha 
type:{Slice1/Increment,payload:undefined(number)} ye undefine ki jjgah number hi jara h  


Problem solve kri (Redux ne)
agr mujhe apne sibling m state varibles use krna hota to phle mujhe state lifiting krni hoti phir wo hme pass krta jb jakr hme access milta h or redux m sb chez globally bna di jisko use krna h kr sktah 


useSelector ke andr jo bhi kuch changes hota wo hmare UI m automatic khud hi changes ho jata h 





Swiggy Project jisme hm kisi bhi items ko add to card krege or wo add hota rhegya or phir remove bhi kr skte h 
