<!-- AJ bnayge sbse phele header ko  -->
Abhi hmara isme code bht h script.js file m kya tumhe lgta h ki jb bhi hm company m km krege to ek hi file m code likhaya jayga nhi kyuki code bht heavy ho jayga isme abhi to isme sirf thodi line h agr website bnaoga to line km se km 10k ho jaygi agr hme kuch chnge krna pde to phir kha dhundege hm or Yhi Se introduction hota h hmare module ka

Introduction of  Module jisko hm bar bar use kr rhe hoge 
jse function h mera 
<!-- function Footer(){
  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/11/IwuJRLGq_003414bb3a5a4030bec6aca0d6d8f55a.jpg" className="w-[80%]"/>
    </div>
  )
} --> ye module h isko m bar bar use krta rheoga phir Header funciton h to module ye kheta h ki har ek function ko ek alg javascript file m rkho agr use kisi card m change krna h to phir wo usse arm se dhund lega
jo bhi hm component bna rhe h usko ek alg-2 script file m rkho haina
React m asa kch nhi h ki file alg rkhi but ye apne code ko clean rkhne ke liye h asa ki jise hmara code clean ho bilkul component & module ek hi h 

sbhse phele hm apni scr folder create krge phir usme apni script file dalege html or bhr rkh denge jise har koi smj ske ki code kha se start h or phir mujhe baki file rkhi h to src folder ke andr new file bna skka hu
Jitne bhi hmare component h unka ek seprate folder bnoa unme rkh do clean or acha code likha jayga or jo hmara component h ussi nm se file bna do har jise asani se smj aa jayye

ab hmari script file m main component rhe gya h jisme m bss render kra rha hu baki sb ko mne other file m baadt dia h Ab to hamre pass access hi nhi h ab hme unhe access kse krege component wali file ko 
Import krana pdega main file m or export krna hoga jo file krani h import mtlb(Card wali m export likhna hoga or script m import smj gya ohk)

asa har file m krna hoga or ye hm function ke smen bhi likhe kste h jaruri nhi h ke niche hi likhe 

bht jgah Card.jsx likha hota h file m js bhi likh deneg to koi dikkat nhi h jsx tbhi dale jb hmne apne code m jsx ka use kia vrna js dall kr chod ya jb dale jsx jb company ne bola ho tb 
export default Card

import Card from "./components/Card";

Jo hmara Dummy data h images h isko hm ek main(script) file m nhi rkhege isko hm rhve src folder ke andr ek folder bnaye (utils) koi image h jisko hm har jgha h use kr rhe h usko daal do isme

Jo ye import export wali files hm agr hme koi bhi variable const se create kia h to hm uske sme
<!-- ex : export default const arr = [etc] iss trah se nhi likh skte error dega or ek rule bhi h ek file m sirf ek hi export ho skta h 
export function greet(){  // pr asa likh skte h niche ni likh skte asa likh skte h 
    return <h1>Hello Coder Army</h1>
} suppose men ek ek funciton or creat kia 

function meet(){
    return <h1>Hello Bhaiya</h1>
}
or ab in dono function ki jarurat mujhe script file me h to m unka access kse le paoga m 
script file m asa lege
import {greet,meet} from "./utils/dummy"(jo bhi file name ho) jo hmare normal wale hote h unko hm asa export krate h 

agr koi function access krna or hmne uske agge default kuch nhi lgaya to improt m hme { } ye jarur milege or vse wali unme hoge export default (name)

agr kisi funcition ka nm hme change krna h to uske name ke agge as likh kr dusra nm likh skte ho ye isliye krte h suppose agr uss name ka kuch hua to problem ho jaygi isliye hm iska nm rename kr deta h (as) se 

Question : Why learn React ?
Answer : React most efficient way DOM ko manupulate(HTML file m kuch changes krna ) krta h or mujhe sirf apna UI bnane pr focus krna chiaye

hmne button pr onClick lgaya or usme andr dala ek arraySort callback function or phir wo functio ke andr sort kr dia 
function sortArray(){
    arry.sort((a,b)=>a.Price - b.Price)
    console.log(arry);
}
<button onClick={sortArray}>Sort by Price</button>
ye function to clra h hmara but ye hme UI m abhi show nhi hora console.log m hora h 
UI m update krne ke liye hme useState ka use krna hoga jse class 07 m kia h but ye class 06 h
to useState(arry) current arry dala or uski value dali A m or setA nm ka function bna dia 
or ab Hme Arry ka nm A rkh dia h to map bhi ussi pr lgega or phir mne jse hi mere A m kuch change hoga to setA ko call kr liye asa setA(A) 
but button pr click krne pr ab bhi ye UI m change nhi kra 

Iska rule h jse ki class 07 m useState ne dekha ki count = count + 1 tumhari value change hori h kyuki ye change hoti h isliye iska memory location bhi change hoti h isliye hi change hoti h jbki array m kuch nhi hota
but useState ne dekha ki array(A) to A h ye to jha thi whi h because array hota h heap m store wo bhi as a reference jb wo whi pe h apni location pr to wo change kyu krega phele bhi ussi location pr tha ab bhi whi pe h wo mna kr dega state memory location dekhata h 

isko show kran ke liye mujhe array ka clone bnana pdega tb hoga ye change jiska refererence dusra hoga 
setA(A) iska jgah isne ek dublicate(clone) bna dia jise new memory locatio milge or spread operator se hmne ye bna lia 
setA([...A]) ye location change hui haina isliye A sort ho gya kyuki useState ko chaiye changes wo hua h ab reference se change hokr isliye ab usen change kr dia 

React dobra value ko cahnge nhi krne deta agr koi chez zero h to wo phir se zero nhi krta js asa hi krta h 


jb filterbutton pr click krge to wo hmar sbse phle setA(B) ye execute hoga or phir call krega App wale function ko phir jo bhi value hmari filter hokr ayi wo use state m cli jaygi or useState arry wo filter hua data A ko bhej degi or phir yha pr hmara data update hora h A m wha cla jyga or show hoga phir display pr

jo bhi value hme yha pr update krvani h 
let [A,setA] = useState(arry)
  function sortArray(){
    A.sort((a,b)=>a.Price - b.Price)
    setA([...A])
}
function sortFilter(){
 const B =  arry.filter((value)=>value.Price>699)
  setA(B) // wo yha se bhi ho skti h yha pr pass kr skte ho agli bar wo value ispe hi update hogi ro sbhi lgah B ki hi value change hogi 
}

