<!-- Note : Mera ek parent h uske do child h or un child ka bhi ek ek child or mujhe apne parent ko state Variables create kia hua h or wo mujhe use krna h child ke child pr to m usse kse use kr skta hu to m asa bhi kr skta hu parent apne child element ko as a props pass krde phir child bhi apne child ko as a props pass kr de to asa bhi access kr skta h  -->

<!-- parent ne state variables apne child ko pass kiye as a props or child ne phir apne child ko pass kiye as a props or phir access kr dia  -->

<!-- Props Drilling => isko hi bolte h hm ki props ko bhej hi jara hu  -->
<!-- Agr suppose ye line parent => child => child => child => child => asa krna ho to bht lmbi file ho jaygi or bht hi sari files create ho jayga ye krna to sy nhi rheyga  -->

<!-- Note But imse second wala lera h jbki usse ye use nhi krne as hi third asa hi fourth or suppose fifth ko use krne h to ye problem bn jaygi ki state variables to bht parent pr bna rkah to bich ke sbhi file m jakr change krna hoga to isliye liye ek methd h easy jo directly hm parent se access kr skte h jisko use krna h m or kisi ko disturb hi nhi krna chahta yha pr hmra use hoga useContext (hooks ka ) -->

useContext(hooks) 
<!-- Agr m ek asi file bna du jisme sare state varibles ko store krke rkha jaye or iss file har koi directly access kr skta h or jo bhi change hmare child m reflect hore ho wo global file m bhi ho or agr fifth wale ko count chaiye to wo directly global se dekh le or phir mujhe props pass krna hi na pde phir mujhe asa krne se props drilling wali problem dekhni nhi pdegi -->



<!-- createContext ke andr hm koi bhi data rkh skte h string,object kuch bhi rkh skte h  -->
<!-- suppose mujhe ab third.js ke andr use krna h to kse krege  

import { createContext } from "react";
const GlobalContext = createContext("Shivam")       ye create krge 
export default GlobalContext-->

<!-- ab jha pr use krna h 
import GlobalContext from "./Globalfile" // import krege phir useContext ki help se isko use kreg 
import { useContext } from "react" //  const data =useContext(GlobalContext) //kisi bhi nm m store kr lenege

<h1>I am Printing {data} </h1> phir use krlnege (shivam aa jayga)


Notice(Important)=> Ab suppose mujhe apne state variable ko bhi globally krna to umse kya hoga hmara hme apni global file bnani h or phir apni first.js(parent file) me import krna Global file phir useContext import krna h h
or phir return m <Globalcontext.provide value={{couts:count,setCounts:setCounte}}>
or iske biche ka bhi 
</Globalcontext>

jb hmara key value ka nm same hota h to direct wo hi likh skte hm jo data hmne globalcontexnt ke andr dia h wo purana data ht jayga or new data aa jayga or wo bss hmare children ke liye h 





Main Important(Note)
Sbse phele hmne ek file bnai globalContext 

import { createContext } from "react";
const GlobalContext = createContext()
export default GlobalContext

Ab ye file hmne apne parent m globally import krani h jisse koi bhi component access kr ske

(parent file m )
import GlobalContext from "./Globalfile"


return(
<div>
<GlobalContext.Provider value={{count:count,setCount:setCount}}>// value update kregi globalcontext ko 
<h1>Hello Coder Army</h1>
<Second/>
</GlobalContext.Provider> /// jis-2 child ko dena h unko apne andr repap kr dunga 
</div>
    )
Imse kya hora h ye hmara globally h or isko use kra h second wala phir second wale se third menas isko koi bhi use kr skta h ye Global provide bna dia h hmne 

asa krne se hm hm koi acess kr skta h koi nhi apni wish h jisko use krna h kro vrna mt kro pr isko access sirf uske child or grand child hi kr skte h 

<!-- Agr m fourth wale ke globalContext.provider ke bhr use krta h to jo meri value globalcontext ki phle thi wo hi milegi kyku phle rohit thi value uski phir hme count or setCount se usko change kr dia tha or agr mujhe count or setcount chaiye fourth walo ko to usko globalcontext ke andr hi call krna hoga phir usse count or setcount ka access mil jayga  -->






<!-- First Create a create Context -->
<!-- Provide data ko uske andr : parnet ke child ke child ke child etc inke liye h ye data access bss -->
<!-- const {count,setcount} = useContext(GlobalContext) ye h consume krna  -->

<!-- asa krge to hme props pass nhi krne pdgea apne child ko  -->