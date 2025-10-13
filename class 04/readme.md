<!-- Bundler ka km kya hota h hmare code ko optimize way m likhna  -->
<!-- Ab mera HTML react se jo render kia tha wo show nhi hora kyu nhi hora kyuki hmne phele cdn link dale hue react ke or react-dom ke the bss ab html wala hi show hora h -->
<!-- ab hme use krege react or react-dom jo hmare node modules ke andr rkha hua h -->
<!-- ye krna hoga bss import React from 'react" or import ReactDOM from 'react-dom/client' -->
<!-- Cannot use import statement outside a module ye error arri h console m  ye isliye arri h import hmari hai to javascript hi but ye modern javascript ka part h-- iss error ko htane ke liye mujhe apne script tag m type="module likhna pdega but ye ab bhi nhi phechan para to hhme ab teriminal m 
npx parcel index.html asa krne se ye ek localhost server create krke de dega>

Note==>
(parcel index.html)ko clane se ab mere folder m (parel-cache),(dist) ye folder add ho gye h 
parcel-cache=> ye kya krta h ek bar sever build hogya phir ye uss sever ke regarding jo hmara catch data hota h usko ye store krke rkhta h delete krne pr phir run krege phir aa jyga but phir isko tym lgta h 

Dist=>
jo bhi code hm apne production ready code likhte h wo jata h hmara iss dist folder ke andr isko andr do js file bnti h ek wo jo hmne likhi h wo ek hoti h map wali wo kya krti h wo usse hm apne original code ko generate kr skte ho jse phele tha vse hi or isliye hi hm production m isse nhi dalte ye kisi ke hath lg gyi to wo hmare code ko dekh skta h chori kr skta h ki phle inka code ksa likha gya h jo map wali wali h usme hamara sara code bhhi hota h
npx parcel build index.html 

✨ Built in 1.61s

dist\index.html                  388 B     36ms
dist\class 04.ff6adbfb.js    192.48 kB    369ms
ye do file create hogi dist folder m or ye ye kheta h ki ye dono file dalo apne production m dalo or apka code ek mast clega iske andr jo hmara html ka code hoga wo bhi milega jo hmari hi file ka or bilkul ek hi line m likha hua bilkul whitespace vgera sb remove kr diye 

ye kia h bundler ne hmara sara code lia or ek bundler m optimize way m daal dia dist m

ab hm sirf dist folder m js wali or html file hi production m hmesha use krge jo bhi code hm apne src folder wali files m likhege wo hmara server run krne pr wo dist folder m jo file h unme cla jayga or jb parcel run hoga to update bhi tbhi ho jyga 

Note // ab hm apna code ke files src folder m rkhege or sb kuch km whi krege jb hmara km ho jayga to hm server create krge parcel se run krkte phir jo bhi hmne code likha h apni files m wo dist folder wali files m cla jayga or phir production m ussi code ko use krege kyuki wo optimize m code h bht or lightweight h

Note =>
jsx code bhi hm apne src folder m rkhege wo wo parcel run krne pr dist folder m cla jayga react.createElement ki form h

Command update or parcel create server 
npx parcel build index.html  (ye dist foler ke liye hi h Production ke liye)
npx parcel index.html (ye hoti h hmari Server ke liye)

Bunder ye kheta h ki Tum jo bhi use krre ho pure code ko optimize krke m tumhe de dunga 
index.html
script.js
react               ===> Phele production ke liye itna bda code dalna pdta or bunder sirf do file m kr dia km h
                    ===> dist folder m wo kse build hua npx parcel build index.html se
react-dom
other depenedency ye sb ko optimize krke de dunga or iske baad usne sirf do file m hi km kr dia hhmar
ek index.html or script.js dist folder wali m

Upload krne h agr koi bhi project to bss wo dist wala folder uploadkrdo

JSX(JavaScript)
Jo hmne apna code likha script.js file m usse acha method h hmara pass code likhne ke liye konsa h wo h hmara JSX (JavaScript XML = HTML jsa code direct JavaScript ke andr likh skte ho)

agr hmar purana hi code show hora h browser m to wo hoga hmara parcel-cache or dist folder ki wjah se unhe delte kro phir build krne pr ho jayga thk phir

// Note-- Ab hme apne code m react.createElement ka use nhi krne wale react.createElement wala bht lmba method ho rha tha isliye ab hm usko use nhi krege thk h

React.createElement se react element create hota tha wo ek object hi return krta h but jb wo render hmare object ko html element m convert krta h krta h tb wo html m hmare bnaye hue content ko add krta deta h means html m create kr deta h 

JSX
// JSX is not a part of react of isko developer ne build kia h JSX hmari HTML like syntax not HTML
Jb m jsx m code likh dunga to koi to hoga hi jo isko usme convert krega wo hoga Babel or wo hota h hmara node modules bundler ke andr hi 

Babel//
Babel ek JavaScript compiler hota hai jo JSX code ko React.createElement() ke form me convert karta hai.
React.createElement() hume ek React element (JavaScript object) return karta hai, jo HTML ka virtual representation hota hai.
Jab hum ReactDOM.render() (ya root.render()) use karte hain, to ye React element ko actual HTML (Real DOM) me convert karke browser me render kar deta hai

JSX Code(HTML like Syntax)
   ↓ (Babel)
React.createElement()
   ↓
React Element (JS Object)
   ↓ (ReactDOM)
Actual HTML (DOM)

JavaScript XML ke bare NOte
jb hm apne js code likhte to sbse phle hm usko bracket() ke andr ek div m rkhte h without use bracket code chl jayga but wo readable nhi hota or agr tum ye nhi chate ki tumhara extra div ye to uske liye tum bss empty tag dedo <></> asa because doono sibling ko m ek sath nhi rkh skta ya to m un dono sibling ko ek sath rkhu kyuki new element ko chaiye single element 


JSX m hm html element ke andr javascript ke expression ko bhi add kr skta hu
<h2 id="Second">Frontend Developer {names}</h2> const names = 'Shiva' asa kr skte h 
Object ko bhi use kr skte h asa hi or yhi difference h html or jsx m html ke andr hm javascript use nhi kr skte noramlly

Agr mujhe koi apna attribute create krna h apne tag m to wo normally h ke string ki form m jata h but agr hm chahte h ki hmara tag sirf number jay to hm name="23" => name={23} asa bhej skte h but code m wo dekhega hmara string ki hi form m hi ab hm iski jgah koi object bhi bhej{obj.age} skte h jha pr bhi hume jsx ke andr currybracies dekh gye uska mtlb hota h ki hm iske andr javascript ka koi expression likhne wale h 

style{{background:"black,fontSize:'30px'}} agr do h ek sath to ek to ye javascript expression h or dusra hmara object h jisme style properites h Style wala bhi expect krta h ki hm usse koi object lakr de


React Components 
Two type ke hote h 
1. Class Based Component (less Important / old way) isko chod dia 
2. functional Based Components(Most Important / Current time)

React M jo function Likhte h wo hi react m Functional Based Component h

**React me jo bhi function JSX return karta hai, ya HTML-like UI return karta hai, wo functional component kehlata hai.

functional component hmesha return krta h JSX / react element

A component in React is a reusable piece of User Interface (UI). Components are of two types: functional and class-based. A functional component is a function that returns JSX or a React element.


agr khi bhi mujhe do element ko ek sath dalna h to empty tag lga hi pdega or phir wo hoge javascript ka kuch bhi ho currly bracies lgane pdege hi jsx ke andr lgane ppdege jarur {} ye

React m jb bhi hm function name dekhege component ka rule h ye ki iska nm capital letter m ho pascal case m ho
Browser hmar jsx nhi smjhta 