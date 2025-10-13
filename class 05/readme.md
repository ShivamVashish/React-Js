<!-- Vite bnayge aj hm ye bhi ek hmara bundler hi h bss ye hota h ye easy to use hota h
Dependencies hmari do trah ki hoti h ek hoti normal dependencies jisko hm production m bhi dalte h dusri hoti h dev dependecies jo jo hme code likhte tym chiye hoti h parcel bhi ussi m hota h or vite bhi

Ab dusri class m add krne liye 
npm init krke phir sb jgah ohk ohk krdo
npm install react
npm install react-dom
npm install

ab parcel download krna h or agr hm chahte h ki ko dev dependencies ki trah aye to yekrod
npm install -D parcel

phir npx parcel build index.html
npx parcel index.html

JSX ke andr JavaScript ke kisi bhi expression ke andr dal skte ho  
lekin jsx ke andr hm statement nhi likh skte like {let x = 2(etc kuch bhi)}

hm direct obj = bhi dalte hme sirf jsx m wo dale h expression means jo hme output lake de kuch
result m string,array,num
ye bhi use nhi kr skte
let obj={
name:'Shiva',
age:23
}
return <h1>Hello {obj}<h1/> ye bhi use nhi krskte ha asa kr skte h {obj.name}
if else conditon nhi dal skte kyuki ye statement hoti h 
jo cheze hmara result produce krke de usko daal skta hu bss m 

//JSX : JS Expression (wo hote h jo koi Ouput lake de)
// Statement (unko app nhi likh skte like {let x = 2})

// let obj = {
//     name:'Shivam Sharma',
//     age:50; direct {obj} asa nhi krega jsx isko accept 
// }


// const arr = [20,40,10,30]{arr} ye array ko asa accept kr lega string bhi iske andr but object ko nhi krega asa array ke sath jsx kya krta h ki ek ek krke element ko bhr niklta h ye bhi hmes result produce krta h but conditon ye h ki iske andr bhi array or string ki form data hona chaiye or kisi m nhi 

function call
const element2 = greet() 
JSX kheta h ki tum asa bhi kr skte ho call
const element = <Greet/> but iska first letter capital hona chiaye ye jsx ka sytanx h hm funciton ko asa call kr kste h 
but asa hai kyu isliye h kyuki HTML m sbhi tag small letter se hote h to wo unko defined kse krega jo user defined tag to uskeliye usne first letter capital kr dia first letter ko dekh kr hi wo smj jayga ki html ka tag h ya user defined h 

react m hmare variavle ka first letter capital ho ya small isse koi frk nhi pdta pr JSX ke variables hmesha first letter capital hona chaiye

 <Greet name="Shivam"  age="23"/>  hm function call m asa attributes likhte skt h phir usko function ke parameter mlikh skta h or phir {} iskel andr objec. anythng kuch bhi jo tumhe jarurat ho usko access kr skege jha bhi krna h 



 Myntra Project 

const arr = [{cloth:"T-Shirt",Offer:"20-80%OFF"},{cloth:"Shoes",Offer:"10-50%OFF"},{cloth:"Jeans",Offer:"20-70%OFF"},{cloth:"Kurta",Offer:"20-40%OFF"},{cloth:"Pajama",Offer:"20-60%OFF"},{cloth:"Shirt",Offer:"20-80%OFF"},{cloth:"Skirt",Offer:"20-80%OFF"},{cloth:"Underwear",Offer:"50-80%OFF"},{cloth:"Jacket",Offer:"40-80%OFF"},{cloth:"Hoodie",Offer:"20-80%OFF"},{cloth:"Caps",Offer:"20-80%OFF"}



 arr.map((value,index)=><Card cloth={value.cloth} Offer={value.Offer}/>)//ye ek array return krke dega map yha pr for loop nhi use krege hm kyuki yha pr loop hme kuch return krke nhi dega map dega return krke result and ye ek ek krke sbhi object ko nikalege sb nikl jane pr ye last m ek array retunr krke dega

 JSX number , array, string , sbko smjhta h bss object ko chod kr 
 or yha to jsx ke andr array 


React ka error h ye react kheta h ki key hmari unique honi chaiye
 Each child in a list should have a unique "key" prop.
Check the render method of `App`. See https://react.dev/link/warning-keys for more information.

arr.map((value,index,array)=><Card key={index} cloth={value.cloth} Offer={value.Offer}/>)
iske andr index daal do error ht jaygi but ye bhi achi habit nhi h