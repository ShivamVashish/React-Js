<!-- React Routing 
HTML m hi code likhege abhi hme script file ki jarurat nhi h 
HTML m multiple file attach krri h or jis file pr bhi hmne click kia h wo reload hori ek page se dusre page pr jne pr kch bhi chnage krne pr page reload hora h jbki react ki website pr asa kuch bhi nhi hora chahe khi pr bhi cle jao website reload nhi hori content change hora h pr ye change nhi hora 


Note
Jb hm kisi hm website ko visit krre ho or umse 4 index file rkhi ho to sbse phle hme html wali file hi milti h home wali phir jse hme contact button pr click krge to ye hmari html file ko htayga or phir dusri file lekr ayega database se isliye hi ye reload hora h asa hi hoga same about,or details bhi 

React m asa isliye nhi hora h kyuki inke pass sirf ek hi html file h or ye jo content change krer h ye usko javascript ki help se change kre h or isliye hi ye reload nhi hora kyuki ek hi page h reload wo tb marta jb kisi dusri file ko run krna hota h tb nhi jb same file m javascript run krni ho jb dom manupulate krta h to dom reaload nhi hora hoga 

React Rounter (ek liabrary asa diii hui h jo ye km accurately kr deti h easy way m jb hm react m ek page se dusre page pr jate h to wo paper relaod nhi hota uske main page  ke link pr hi dusre page ka url updated hora wo bhi bina reload hue or content bhi change hora h automtically )

example 
<div id="root">
        <nav>
            <a href="./index.html">Home</a>
            <a href="./contact.html">Contact</a>
            <a href="./about.html">About</a>
            <a href="./details.html">Details</a>
        </nav>

        <h1>My Home Page</h1>
    </div>



Install React Router Command
npm i react-router

Ab hmne html page npx parcel index.html se open kr lia uska url arra h localhost:1234, or react website pr react.dev h pr agr dusre page pr click krta hu to wo hora suppose community pagr pr click kiya h to uska
url hoga (react.dev/community) ye kya khera h ki community wale ko download krdo or community ke andr bhi agr koi page h uspr click krege to phir ayega example : (react.dev/community/meetups) or asa hi hota rheyga asa hm apne page m kse kre

Iska mtlb h ki jo m apko command du wo wala page open ho jayye iska nm hi h (React Routing) ye page ko route kr rha h ki ab ap iss page ko open krdo ye sbhi km hmare page m react rounting krta h ye btata h iis page ap apne display m dekhao 


<!-- krege kse  -->
<!-- https://reactrouter.com/start/declarative/routing -ye h iska URL 

localhost:1234/Home => likhu to home show ho
localhost:1234/About => likhu to home show ho
localhost:1234/Contact => likhu to home show ho
localhost:1234/Dashboard => likhu to home show ho

to m in sb ko show kse kruga hm router help krte h ki iss link pr click kroge to wha jaog but sbse phle hme import krna pdta h

import { BrowserRouter,Route,Router,Link } from "react-router";

sbse phle script file m 
return krna kreg 
return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
    )
    / btata h ki mera localhost:123 iisi page pr rhena h
    /Contact btata h ki agr asa ho to Contact pr cle jana iska data load kr dena 
    /About btata h ki agr asa ho to About pr cle jana iska data load kr dena 
    /Dashboard btata h ki agr asa ho to Dashboard pr cle jana iska data load kr dena 


    but or website pr to click krne pr jate h pages pr but isme to hme url yad krne pd rhe to nav bar bnao but usme hm anchor tag ka use nhi krte react router hme ek super power deta h uska nm (Link) 
    click krne pr open hoga page ek hi or /,/contact etc inse select hoga


    <BrowserRouter>
        <nav className="flex justify-center gap-4  bg-black text-white p-4 font-bold text-2xl">
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            <Link to="/Dashboard">Dashboard</Link>
        </nav>
Routes ke bhr wale hme sbhi page pr visible hoge or BrowserRouter wala bss ek hi clege 
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter> 

Page ek hi show hoga because route wala ek hi page clega but nav (Link) wale sbhi page pr show hoge or route wala ek hi clega and hme pta h ki HTML file jo h wo ek hi h or wo file khali h usme file show hogi ek hi koi si bhi ho or route wali ayegi bhi ek hi smj gya

Inspect krne kr Link tag convert ho jayga anchor tag m kyuki react library h method change kr dia bss kuch addition funcitonality h isme kyuki at the end browser HTML,CSS,JavaScript hi smjhta h browser hmara 


Nested Routing kse kr skta hu Means Suppose example : Home ek andr koi page hai uspe jayge click krne pr 
Hme asa krna h ki hmara Nav or footer section change nhi hoga or routes wala hi change hoga 


How to created a Nested Path
localhost:1234/Details/hi => Mujhe ye asa url chaiye nested to kse kruga dekho 

Jb hm root level se routing start krte h to /Detailnested asa krte agr hme iske andr chaiye to direct path="Hello" file asa de skte h 

asa krne se DetailsNested wala to aa jayg but usek andr jo Hii,Hello file h wo wo nhi ayegi wo isliye nhi ayegi kyu DetailNested ke andr hme import krvali hogi ye


 <Route index element={<Zero/>}></Route> index wali file hmesha hi show hogi 

import {Outlet} from "react-router"


Nested wale ke sath m (http://localhost:1234/DetailNested) iss url pr aygea zero bhi 
Welcome to Details Nested Page (iss page zero wala index kr rkha h means sath hoga)
I am Zero
http://localhost:1234/DetailNested/Hello  
Welcome to Details Nested Page
Welcome to Hello Page
http://localhost:1234/DetailNested/Hii
Welcome to Details Nested Page
Welcome to Hii Page

Sir DetailNested wale ke sath hi ayega zero wala jse hi change hoga hello ya hii ayega phir zero wale ki jgah ye ayeg 

Abosulute path hm /DetailsNested asa dete h
Relative path hm "Hello"
localhost:123/DetailsNested/Hello asa pr hoga but iska path dia jayga asa
<Route path="Hello elemet={<Hello/>}/><Route/> asa 


/ se ye root level se path dekhta h agr hello ko / se access krege to phir wo ye sochega ki root se dhundega hmare component ko 



Outlet kya h or ye yha pr ku likha h DetailNested
Outlet sirf nested child ke liye hi use hota h 
import {Outlet} from "react-router"
return(
        <div>
            <h1 className="bold text-2xl">Welcome to Details Nested Page</h1>
            <Outlet></Outlet>
        </div>
    )
DetailsNested wale ke andr 3 option h zero,Hello,Hii to mujhe kisko show krana h or kha pr krana h to Outlet kay krta h ye hmare usse catch kr leta h catch krne ke baad jha isko show krana h wha likh denge to isme hm 
h1 ke niche show krana tha jo bhi chaiye isliye likha 

Ab ye hm asa URL krke to jayge nhi hello or hii to uske liye detailnested wali file m bnayeg nav or usme likhege Link m khud pr wo show jb hoga jb hm apni file m jayge nested pr jne pr wo show ho ajyga 

DetailNested ke andr wale Link ko hm BroweserRouter ke bina bhi likh skte h kyuki DetailNested ye to h hi uske
andr hi child to khud hi hoge 


Agr m ye chata hu ki nav m mujhe DetailsNested pr click krne pr sirf ye khud hi dekhe or nahi dekhai to mujhe script file m se nav ko hta sbhi file m hardcoded krna hoga or details wali m nhi krna kyuki umse show nhi kran 