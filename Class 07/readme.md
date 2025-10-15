<!-- Props kya hote h jo hmara parameter argument hote h or Hooks kuch nhi h bss ek function h bs -->
<!-- Counter App bnega aj increase Decrese 
Hm direct hi button pr hi event listener lga skte h 
function incrementnumber(){
    count ++  asa bhi call back function de skte h or asa bhi 
}
onclick={incrementnumber}(ye asa a reference de diya h jise acha lge bs) jb hm iss button pr click krge to iss onclick wale ko pta chl jayga or iske bracket m denge hm ej call back function jb hm iss button pr click krge to iss button pr jo call back funciton hoga wo execute ho jayga or ye line krna achi habit nhi h kr skte pr
document.querySelector('h1').innerText = `Count is : ${count}` nhi krega achi habit nhi ye isliye

onclick = {()=>{  asa hi increment ke liye or asa hi decrement ke liye
count ++ 
}}

ab ye click hone pr chl nhi rha isliye hm check krege phle console.log(count)
<button onClick={incrementnumber} className="border-2 p-2 mr-2 font-bold bg-black text-white rounded-lg">Increment {count}</button>( agr button ke andr count h to ye achi habit nhi h react kheta h ki dom manupulation tum khudse nhi kroge)
<button onClick={decrementnumber}>Decrement {count}</button>

Dom ye khete h ki tum dom ko manupulate mt kro m khud manage kruga usko bss tum UI pr dhyan do 
document.querySelector('h1').innerText = `Count is : ${count}` jse ye krre h ye nhi krna jse m chata tha ki counter wala function root ke andr cla jayae ye hi dom manupulation h react kheta h ki tumhe dom ko manupulate khudse nhi krna tumko dom ko ache trike se dom ko manupulate krna nhi ata or next problem ye h ki mujhe bar bar
inhe bhi update krna pdega (<button onClick={decrementnumber}>Decrement {count}</button>)dom ko bar bar manupulate kia jara h  react ache trike se dom ko manupulate krta h isliye ye sb hmne react ko ye de di h ke khud manage kro inhe 

React DOM Manupulation Kse krega Phir
Yhi se Intro hota h (Hooks ) ka ye ek function h bss  or Hooks hmara pass bht type h but jo famous h wo 

useState,useReference h bht sare h sbse jayda hota h useState hooks ka

State : Jb bhi hmara kuch bhi change hora h to hm ye khete h ki hmari state change hori h
document.querySelector('h1').innerText = `Count is : ${count}`// ye htane ke baad hmari console m count ki value change hori mtlb state change hori pr wo UI m visible nhi hora to react ye kha ki UI m m kkhud usse show kra dunga hooks ki help se ye ek special function dega lakr usse problem resolve ho jayga

Usko sbse phle lekr aoo import kro wo h react ke andr kse layge dekhe
import React,{useState} from "react"; ye bracket m isliye h kyuki ye export krke aya hoga nhi export default
usestate ek special function h jisko react provide krta h 

Use krne ka Method dekho 

let count = 0 kra jse hmne to wo ye kheta h ki m kruga iski value ko intialize 
let count = useState(0) ye thoda alg trah se work krta h ye return krke deta h hme ek array uss array m do value hogi ek to phle useState(0) to cli jaygi count ke andr or dusra m ek function lake dunga uska nm ap kuch bhi rkh skte h h 

let [count , setCount] = useState(0)

function lakr kyu dia usne kha ki jb bhi variables(count) m change ho jayye to uss function(setCount) ko call kr dena  ab jse hi usne dekha ki ye 
let [count , setCount] = useState(0)
    function Increment(){
    count = count + 1  ye count ki value change ho gyi h call kr dena 
    setCount(count) or jo new value ayi h count ki wo iske andr daal dena h bss 
    console.log(count);  
}
call isliye krna h kyuki mujhe apni UI m render krna h isliye to wo handle ye (setCount) krega
asa krne se khi bhi count ki value hogi jse button m hi (<button onClick={decrementnumber}>Decrement {count}</button>) iske liye bhi alg se code likhna pdta lekin ab isko easily ye setCount khud handle kr lega sbko update kr deta jgah bhi tune de rkha hoga 

How its Works 
jb bhi hm setCount(count) function ko call krege to ye kya krta h ki apne main function Counter ko phir se call krega 
jse globally mere count ki value 0 thi jse hi mne increament wali button ko click kia count ki value 1 hogi to count = count + 1 cla hoga or jse hi setCount wala clta h ye kheta ki h ki mujhe Counter function ko dobarq call krna h to use or sbhi jo bhi statement hoga usko execute kra dega phir Counter ko call kr dega jo bhi h
hme count ki value increase huii h wo automatically useState(1) ke andr cli jaygi  ab count = 1 se initailize hoga or wo ande dekhega jha bhi value hogi count ki dynamically wha pe update kr dega 

sbse phle seCount(count) jb clta h wo dekhta h ki count = 0 to wo jha bhi count dynamically define h wha like 
useState(0) or button pr bhi sbhi jgah zero kr dega or phir jse hi hmne increamnet wale button pr click kia to usse value ho gyi increate meri phir se or phir setCount functino phir cla or usen jo value increment hui h wo sbhi jgah update krdi 

Use state ko hm conditional statement m nhi dal skte 

kitne hi log
count = count -1
    setCount(count) ye na krke ye kr deta h setCount(count -1)