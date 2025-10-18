<!-- Hook ke bare m janege 
1.UseMemo hooks (useMemo is a React hook that remembers a value and only recalculates it when its dependencies change, helping to avoid unnecessary work during re-renders.) ye re-rendering tbhi krta h jb hmare code m kuch changes hota h otherwise nhi bss
Project bnayeg 
1.Counter Button : increase
2.Input field : Fibonacci Number 0 1 1 2 3 5 8 13 21 34

ye ab fibbonaci numbe assa 35 tk niklate h nikl jata h pr jse dhere dhere number bdhate h to hmara page hang or unresponsive hone lgta h or page pr kuch bhi click nhi hota asa kyu hora h 

useMemo leta h ek callbackfunciton (or wo ye kheta h ki jb kuch number m change hoga tbhi ye callback run hoga)
useEffect leta h ek callback funciton 
useCallback leta h ke callback function


UseMemo or useEffect m difference

UseEffect m ek to hme useState bnana pda
useEffect ka use kia or mne input m 40 dala to setNumber(40) ko call krega ye main function(app) ko call krega or sbko clayga number ke andr 40 update krega bolge ki dependecneis change but useEffect khe dega ki m to last m clta hu ap mere se niche walo ka result display kra do phle wala hi ab last m clega useEffect ab fibbonaci of 40 aya phir se hme setResult wala re-render krna pdega kyuki usko display ki value ko result krna h tb jakr display hoga useEffect hook se ek render jayda krna pd rha h useEffect wala to last m clega sbse baad m 
useState isliye bnana hota h isme jisse hmara ui m dekhe render ho

useMemo (wale ki baat kre to)
wo ek bar m hi sara km kr de rha tha or na hi koi useState bnane ki jarurat pd rhi thi isme to jse hi hmne
40 dala to useMemo wala isko calculate krge or phir uski value ko store kr dega result m or phir usko show kra denge useMemo ka use krke jo ek render cycle haina m usko bacha paa rha hu  maxiumum case m useMemo ka use nhi krta khte h ki ek clra h clne do hm useEffect ka hi use krte h 

useMemo ka use hm tb krte h jb hme apni calculation ko bachana hota h 






 // hm isse globally hi bna skta hu phir ye ek hi bar create hogi app function se bhr Fibbonacci function ko
// const result = useMemo(() => Fibbonacci(Number(number)), [number]) kya yha pe useEffect use nhi kr skta tha m






<!-- Second Hooks  -->
<!-- useRef(hooks)` -->
<!-- Isme kya hora h ki Count ki value 0 pe set h or wo run hora h jb hm count ki value setCounter se increase krte h or phir money ki value pr click krte h to phir wo bhi increase hoti h phir jb hm apne count ki value increase krege to phir kya hoga ki hmara function re-render hoga main function kyuki setCount wala call krege value change ke liye jb main funciton clega to hmari money ki value 5 thi suppose ab function cla to phir se money 0 ho gyi 

Ab m ye chahta hu ki Jo value meri previous thi money wo hi stable rhe pichle wali se aggi ki hi cle suppose phele 6 thi to ab nxt 7 aye previous wali hold krke rkhe to ye hoga mera pass money ka reference aa jay to hm use krege useRef(hooks)

 const money = useRef(0)// isse ye hoga jha se value khtm hui thi usse agge se start hogi 
 console.log(money) Ab money jo arri h wo ek object arra h console m or uske andr jo current wala hoga uske andr wo value hoti h jo hm useRef m set krte h

useRef Hme ek object object create krke deta h or jo value hm dete h wo uske ek key ke andr jiska nm h current usme hoti h or agr wo value hme access krani h to hm likhege console.log(money.current) asa krnse jo hmari previous value thi money ki or phir hmne counter pr click kia to automatic wo previous value disply kr show ho jaygi

UseRef kbhi bhi tumhare funciton ko re-render (function call) nhi hone dega wo apni value ko hold krke rkhega or jb hm count re-render krega function ko to phir wo jo value money wale ne hold krke rkhi hui thi wo bhi show ho jaygi

Important Note
useRef hmare function ko kbhi re-render nhi krta kyuki wo hmesha apna previous reference ko hold krke rkhta h 





<!-- Stop watch Using useRef -->
<!-- <button onClick={()=>Start()}></button> asa bhi likh skta hu  -->
<!-- <button onClick={Start}</button> or asa bhi as a reference bhi bhej skta hu  -->

<!-- setInterval function hmesha clta rheyga jb tk usse clera nhi kia jayga -->
<!-- setInterval = 
// ye function hmesha previous wale ko hi call krega jayda 0+1 ,0+1,etc isliye hi iski value 1 se agge nhi bd rhi kyuki ye updated ko nhi lega previous wali ko hi lega  -->

<!-- m ye chahta hu ki setInterval wala updated value le ki previous wali  -->
<!-- ye hogi jo function hmara setInterval ke andr h uske pass bhi callback function hota h usme value kuch bhi dedo or call krdo jo bhi update value hogi wo callback ke andr wali value ke andr cli jaygi phir jo value callback m di h + 1 krdo 

Agr m button pr do do bar click krdu to wo rukega ni or na hi stop hoga asa kyu hoga because ye do do setInterval clre h har ko value ko update marega agr 4 bar click kia to 4 setInterval update krege or har koi latest value ko update krega iss case ko handle krne ke liye 
 