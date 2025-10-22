<!-- Ye krege aj
Javascript code hota hai ,wo dobara se re-render krta h poore code ko,React sirf kisi particular components ko karta hai render'
Key=> Key kbhi bhi array ka index nhi bnana chaiye 

Note=> Kisi bhi child componenet ki jo state hoti h wo uski key se attach hoti h 


// TS = 3 js = 2 ,Java = 7 m chahta hu ki new add ho c++ but ye sb same rhe changes na ho 
// Add krne pr new  ( ye changes isliye hora h kyuki key ko as a index krne se ye prblem face hogi )
// C++ = 3 ,TS = 2,Js = 7,Java = 0

Diffiing Algorithm(Asa hi Key ke concept se change krti h isliye hi index ki value use nhi krni chiaye)

jb mne phle wale ye pass kiye the to inka index ts = 0 ,Js = 1,Java = 2 hoga but
jb hm isme kuch add kr denge to inka index change ho jayga ab jse hmne isme C++ add krdi to
C++ ka index = 0 , TS = 1, JS = 2,Java = 3 gho jayga or Index ke according 0(index) wale m kitne the
3,first wale = 2,second = 7 , or jb C++ add ho jaygi to C++ hoga 0(index pr) = 3,Ts hoga 1(index) = 2, JS hoga 2(index pr) = 7 , 3 index hmara tha hi nhi to wo hoga(0) = Java
or hmara sbhi state variable apni key ke sath m attach hote h

Agr hm apne element ko key nhi deta h to react khud se inhe apne ap key dena start kr deti h kiske bases pr index ke bases pe isliye hi wo kheta h ki key ko pass kre vrna wo glt output lakr de skta h 

ab isko unique kse bnaye to m inka data hi bhej deta hu like ts,js,c++ ; 
ab jo new add hogi wo 0 hogi or phle wali changes nhi hogi koi bhi 