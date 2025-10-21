<!-- Redux-Statement -->

<!-- Props Drilling
Jab parent component me koi data/state hoti hai aur wo deeply nested child component me use karni hoti hai, to hume har intermediate component se props pass karni padti hai.
Ye process Props Drilling kehlata hai.
Problem: Agar intermediate components ko data ki zarurat na ho, tab bhi unko props receive karni padti hai, jo code clutter aur maintenance problem create karta hai. -->

<!--useContext
useContext kya krta tha hmara Props Drilling ki problem ko solve kr rha tha Isme kya hora tha ki Hm ek useContext ki wjah se hi hm isko use kr skte h GlobalContext file create krte the or apni main script file m usko import kra dete the or isme hi apne state Varibles ko defined kr dete the ab jis bhi child ko hmara uski need thi to usko hm apne GlobalContext ko ek variables m store kr dete the ab jisko need h usko koi bhi child use kr skta h 

<!-Inhi Problem Ko Solve krti h hmari Redux Liabrary hai Javascript ki jo State management ke liye use hoti h 

State lifting-> agr mujhe apne ek sibling se dusre sibling ko apna data pass krna h to hm undono ke sbse pass wala ancesestor ko hi state variable create kr denge jo hme pass kr dena phir yhi hota h state lifting

Redux-> Ye khete h ki m tumhe state lifting krne hi nhi dunga m khud kr dunga 

<!-- Redux Solve kse krta h 
Redux hm ye kheta h ki agr tumhe koi bhi state ko create krna h to apne component ke create mt kro tum isko create kro ek Global Object ke andr jiska nm hota h redux store iske andr hm Apne Global Object ko ya jo bhi state hme create krni h iss store ke andr create kro ,agr count ko bhi create krna h to apne component ke andr create mt kro isko andr kro Redux ye kheta h ki m tumhe ek Global object lakr dunga jiska access har kisi component ke pass hoga (Ek centralized object create kr dia jo bhi kuch create krna h sb iske andr kro )

Example: Agr m koi counter bna rha increment and decrement wala to wo bhi tumhe apne component ke andr nhi redux store ke andr create kro mujhe koi bhi state lifitng krne ki jaruat nhi jisko need h wo khud bna le store m (asa krne se agr hmara koi sibling ne koi state variables create kia h store m to agr koi uska sibling access krna chahta h to wo direct store se access kr lega )

<!-- suppose mera store ke andr Count = 0(Ye change hoga kyuki ye ek state variables h ) or ab m isko change kse kru ek to ye h ki sbhi component ek andr logic likhu m 
ab mne kya mne change krne ke liye logic to likha dia h Store m but mujhe change krne ke liye do btn create kiye h agr increment or decrement to kya in dono ke andr hi likhu m count = count+-1(done keliye) kya ye sy approach hogi har kisi ke pass ya koi acha logic h iska mtlb ye hi onclick count ko ek se increase ya decrese  kru
AB mn lo hmara Store wala count koi or bhi component bhi use kr rha h suppose 8,10 component usse use kr rhe h 
or use kr rhe h to wo bhi chahte h ki M bhi iss count m changes kru to kya m sbhi ke individual pr jakr likhu ki count-1 ya count + ye kru to hm Store ke andr jo count h hm usko Private bna denge jo koi usse bhr se variables chnges nhi kr skta h kyu wo count multiple jgah use hora h to highly chance h ki koi usme glti changes kr skta h to mne bhi kya kia h store m jo bhi mujhe incremnet krna h uska function likh dia h 

Increment ke liye suppose function bna diye store m 
function Increment(){               function Decrement(){
                                            count = count-1                                         
                                               }
count = count + 1
}

Ab jis bhi component ko increment ya decrement krna h wo bss in function ko call kr dena baki m dekh lunga tumhe khud glt change kr skte ho agr kisi ko reset wala wala bhi chaiye to m store m ek reset wala bhi function bna dunga jikso reset krna hoga bss wo reset function ko call kr dega

Mne apne component ko direct access kyu ni dia count ka isliye nhi kisi methdo ko solve krne ke kitne hi method hote he ab suppose ek ne gnda code likh dia h or dusre ne acha code likha dia to to isliye hi isko private rkha h store wale ku ki tumhe jo bhi krna h function create kro or uss funciton ko call krdo bss 

Or jo function hm Store ke andr create krte h unhe hi khete h hm (Reducer)


Note=>Reducer is a pure function that takes the current state and an action as arguments,and returns a new state 

🔹 Basic Flow of Redux:
Store – jisme sari global state rakhi jati hai.
Reducer – ek function hota hai jo decide karta hai ki state kaise update hogi.
Action – ek object hota hai jo batata hai kya karna hai (for example: "INCREMENT", "DECREMENT")
Dispatch – action ko reducer tak bhejne ka tarika

Dispatch bhi hmara hooks h uske pass power h ye 

Dispatch is a function that helps to send an action to the reducer.
Dispatch => ye hota h ki agr hme kisi componenet(count) ko increment ya decrement krna h to hme ye utha kr store ke pass bhejna pdega to ab ye incremnet or decrement wala uske pass jayge kse to isko le jana m help krta h mera dispatch

Multiple componenet ek hi count ko use kr rhe hote h ya skte h (means ek hi slice hogi multiple component ki)

Bhejna kse hota h suppose decremnt bhejna h to kse bhejege
ki jb m onclick kruga to isko bhej dena 
dispatch(Decrement()) ye h bss asa krne se store m count-1 ho jayga kyuki store ka pass hi sbhi function h 

agr hm ek hi tym pr multiple componet call krege dispatch ke sath wo nhi krega kyuki Redux hmara synchrnous hota h ek tym pr ek hi krta h or baki to queue m  bhej deta 


Slice =>(Slice store ke andar hota hai, lekin slice apne aap store nahi hota.)Slice jo hota h wo hmara chota h part hota h store ka usme hm apne (reducer + state + action) sbhi ko ek jgah store rkhte h (slice store ke andar hota hai — store me hum apne sab slices ko combine karte hain)


Suppose => Hm kya krta h ki hmara koi componet D nm ka unse count nm ka hi state variables create kia h or or unhe bhi need h count ko increment or decrement ki to unhe bhi store m apne reducer(function logic) likhne hoge or suppose agr kisi ne apne ne increment kr dia or D componenet ne bhi increment kr dia to store bhi hmara khud confuse ho jayga to slice hm iska solution provide krta h 

Note => M apne store ko divided kr dunga Slice m suppose mera store ke andr do slice h 
1.Slice = > count = 0, Reducer : Incremnet,Decrement,Reset rkh dia apne phle slice m 
2.Slice => count =0 , Reducer : Incremnet , Decrement rkh dia h apne slice m 
To ab iss chez ka pta kse clega ki konsa to iske Sath m hm jisko bhi call krege to uske Sath m dispatch bhi attach hokr ayega ki ab jo Incremnet ya Decrement funciton khere ho na wo kis slice ka h to wo ussi slice ke pass jayga or bolega increment krna ya decremenet krna h 

Note => Slice ke name hmara Unique hone chaiye 
Ab pta kse clega ki kisko krna h ab jse hme increment krna h 
jb hm kisi reducer(function) ko call krte h to uske sath dispatch ko throw jata h wo or dispatch connnect hoti h hmari slice se

<!-- Slice Unique h ya nhi Pta Kse Clega  
 Slice ka name unique hona chahiye
Store me key unique honi chahiye
 -->

 <!-- Redux sirf react ke sath use nhi hoti or bhi h jinke sath ye use hoti h react m use krne ke liye hme do cheze ko download krna hoga ek to hoga Redux(ye to liabrary h) or dusra Redux Toolkit(cheze ko storek krna iska km h ) Or React-Redux ka km h jo bhi hme store vgera create kiye h unhe hmare Redux Toolkit ke sath attach krna 

 Installation Command
1.npm install react-redux
2.npm install @reduxjs/toolkit




How to create a Slice (iska unique name ,state,reducer dene hoge )
ek file create kro nm kuch bhi rkh do example(Slicer.js)
import { createSlice } from "@reduxjs/toolkit";
const reactSlice =  createSlice({ // ye object return krta h 
    name: "slice1",
    initialState :{count:0}, // hmne iska nm state dia h state ki jgah kuch bhi nm de skte h 
    reducers:{
        Increment: (state)=>{state.count = state.count + 1} // call be andr intialia state cli jayg 
        Decrement:(state)=>{state.count = state.count - 1 } // asa decrement bn jayga 
        Reset    : (state)=>{state.count = 0}
    }
})
isme iski latest value suppose 3 ho gya h to jo hmara callback function h wo latest value ko pass krta h internally or phir count + 1 kr deta h or phir pass kr detah 


Slice ke baad hme ab store create krna hoga kse krege dekho 

Stores.js file create kri or tool kit se acces kra asa
iske reducer ke andr mujhe apni slice or reducer ko match krna hota h bs phir sb kuch handle kr lega 
Slice.js ab hme export krni pdegi 
export default reactSlice.reducer
ab import kr lege Stores.js m 

import reactSlicer from './Slicer1'(reacSlicer jo mne likha h wo hm kuch bhi nm de skte h yha pe )

import { configureStore } from "@reduxjs/toolkit";
const Stores = configureStore({
    reducer:{
        slice1:reactSlicer(jo bhi nm diye the wo add krna import ke tym pe)
      ab store ko pta chl jayga ki slice ke pass kon kon se reducer h 
        yha mujhhe apni slice ka nme or 
    }
})

Dispatch(function) ke andr hi hm call krte(function ko) kyuki wo hi lekr jata h store m and dispatch ke sath m slice attach hokr atah kyuki slice ke andr hi hmara sbhi reducer hote h 

Agr hme Slice or bhi bnai h to dusri file m bnao or export import krdo Stores wali filem or likhu du bss

Ye jo Stores.js bnai h iska access sbke pass hota h ek sirf ek hi bnegi but hm Apne mulitple slices create kro or iske sath m attach krdo or iske corressponding jo reducer function hoga usko

Ab hme Stores.js ko krege Export 

Ab hm Slice1 ke andr jo count likha h ye wala (initialState :{count:0}) isko read kse or Counting.js wali file
m isko show kse kru Slice ke andr jo value likhi h ussko access kse kru Access krne ke liye 
Counting.js m use krege Hook(useSelector) ye hmara callback funciton leta h jo bhi hmari state hogi wo hme lakr dega

asa hoga counting m 
import { useSelector } from "react-redux"
export default function Counting(){
   const count =  useSelector((state)=> state.slice1.count) ab hm apne reactjs ki baat krva rhe h redux se 
    return(
        <div>
            <h1>Count is : {count}</h1>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}

ye jo isme state wo internally asa dekht ah 

// Jo Hm data la rhe useSelector ke throw wo hmara ek Redux ki state h or uske ander hmari slice h 

// store = {  state m ye arra h 
//     slice1: { count: 0 }
// }

jb bhi hm useSelector ka use krte h to wo hme Global state lakr de deta h uske andr sb kuch h 
multiple slice ke andr multiple state hoti h jse hmari h slice ke andr hmari ek hi state h wo h count


Redux store me multiple slices ho sakte hain, aur har slice ke andar multiple state variables ho sakte hain:

store = {
    slice1: { count: 0, step: 1 },
    slice2: { name: "Shivam", age: 25 },
    slice3: { cart: [], total: 0 }
}

Store Redux ka object h ((yha kuch bhi likh skte h (state) jaruri nhi h))
state jo h wo hme redux ki global state lakr deta h or phir hm koi bhi slice ka state use kr skte h 


UseDispatch(hooks) bhi hmara react-redux se ata h 

hm counting m state ke niche rkhege or button pr onclick krne pr cla denga asa 
import { useDispatch, useSelector } from "react-redux"
export default function Counting(){
   const count =  useSelector((state)=> state.slice1.count)
   const dispatch = useDispatch()
    return(
        <div>
            <h1>Count is : {count}</h1>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>
            <button onClick={()=>dispatch(Reset())}>Reset</button>
        </div>
    )
}
.actions jo h ye hmne sare function lakr de deta h
or ab ye puchega ki Increment kya to hm in sb reducer(function ko) export krege Slicer.js se asa or phir hm counting file m isko import kra lenge
import { Increment,Decrement,Reset } from "../Slicer1"
export const {Increment,Decrement,Reset} =  reactSlice.actions


ab sbse baad m apni script file m 
import {Provider} from "react-redux" ye ayega hmara react-redux se or yhi hm hm apni main file m Stores ko bhi import krege
import Stores from "./Stores"

ab jo hm main file m counting function(file) ko run kr rhe the wo provider ke andr rkh denga provider isliye bnaya taki ye global store  ho iska access har kisi ke pass ho asa

<div>
<Provider store={Stores}> // store ke andr daal denege stores funciton(files)
<Counting></Counting> iis trah har koi stores ko access kr skta h 
</Provider>
</div>

Hm counting file m Increment function ,decrement funciton hi kraya hme pta kse clega ki kiska h ye to kitno ke part ho skta h mujhe kse pta clega ki konsi slice h Incremnet function ek object h or uske andr sb kuch information slice1/Increment iss trah se information h 

JO mne export const {Increment,Decrement,Reset} =  reactSlice.actions iss trah se export kraya h isko m kisi or trah bhi bhi export kra skta h but 
butye jo .actions  and reacSlice.actions ye h ki iss reactSlice object ke pass koi actions propertiy h jo ye sb mujhe deri h 

Redux Toolkit kya krta h hmara pass
Jb bhi hme kuch create krna h stores create krna h slice create krna h to redux toolkit
Hooks use krne h react-redux se lekr aoga kyuki hm react-redux ko communicate kra rha hu  redux toolkit ka km h kuch create krne ka simple hmara store ko bhi create kr rha or slices ko bhi create kr rha h 