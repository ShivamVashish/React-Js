<!-- Mujhe iska background color krne ke liye lena hota useState kyuki abhi iski state kya h ye abhi black h kuch der baad ye change ho jayga islilye hme lena hoga useState ab lege ek varibles ab mne uska variables m variables ka backgroundColor black kr dia h 

Hmne intially useState('Black') ek color set kia h h black to ab hmara body color hoga black with clicking ohk
or wo black color cla jayga Color variable ke andr or setColor nm ka ek function lia h jo iss color ki value ko propogate kr dega har jgah or jse hi hmne setColor ke andr jo bhi value dali hui h wo cli jayge useState m backgorund color chnage ho jayga

Ye kse cla hoga ye dekho 
Main funciton call hua hoga const [color ,setColor] = useState("black") sbse phle ye execute hogi to iska mtlb hmara ek variables bna h let Color = 'black', phir ye kheta h ki body ke background color ko black krdo 
ab jse hi mne kisi button pr click kia like ornage pe kia to uski backgroundColor orange ho jayga jse hi mne onclick kia to hmne khe dia ki setColor("orange) krte h jb bhi hm use state ke sath const [color ,setColor] = useState("black") function lete h haina to ye function kya krta h hmara hmare main funciton ko re-render krta h means dobra se call krta h jb ye phir se call hoga to phir sbhi line ek ek krke execut hogi to ye kya krta h ki jo hmne previous tym pe setColor('orange) ko bhej rkha h usko ye pkd ke rkhta h or jo argument jo hme setColor('orange') ko dal rkha haina usko wo useState ke andr dal deta h UseState(ornage) ho jata h har bar asa hi hota h or ye varibales [color ,setColor] = useState("black") phir se create hue or color ke andr value gyi orange  iska mtlb ye h ki new memory allocation milgege kyuki const wala isliye hi change hora  ye dobra se create hora h isliye 

ye to tha easy bht 

lekin hme asa lgta h ki dom ko manupulate to m khud krra hu ye (document.body.style.backgroundColor = color)

dekho agr jb mera function call hota h to console.log('render') clegea or jb hm red button pr click kruga to phir render hoga ek bar or phir red pr kruga to phir do only do bar phir iske baad kitna bhi krlo nhi hoga but next button pr krge to ho jayga ye render  ye logically to ek bar call krne pr render hona chaiye but dusri bar nhi hona chaiye but ye logicall krta h uske bad kitna bhi krlo phir render nhi or ye ek khasiyat h react m but ye sirf khayat premitive data type ke liye h object,array walo ko sath nhi krta ye check krta h ki phle bh bgcolor red tha ab bhi red krre ho uske baad kroge to phir ye nhi krne dega kyuki array or object ko ye asa a reference dekhta h right agr ye memory cahnge nhi hoti to ruk jata h ye but premitve wale m change hoti h isliye wo nhi rukta ek bar phir clta h 


Bail out ka matlab hota hai —
“React ne decide kiya ke mujhe re-render nahi karna chahiye,
kyunki previous aur next value same hain.”


ye bhi do bar clri h kyki jb button do bar call krta to previous or current value same h to phir nhi hogi but ye wali line to do bar execute hogi (document.body.style.backgroundColor = color) ye hm nhi chata to iske liye 
ek best hooks h ye jb clege jb sach m hi kuch change hue ho wo h

useEffect(hook) ye leta h ek callback function or ek dege iski dependencies

useEffect(()=>{
        document.body.style.backgroundColor = color
    },[color]) asa hoga use ye ab 

UseEffect button pr click hone pr ek hi bar funciton ko call hone deta h dobara se nhi m bss ye chahta hu ki 
ke useEffect wali observation tbhi run ho jb bss hmara color change ho 

Main Point( UseEffect wala sbhi instruction ke baad execute hota isliye ye dobra run krta nhi h ) useEffect tb clta h jb react ka component render ho gya hoga uske upr wala bhi niche wala bhi tb useEffect callback function ko call krege execution ke liye  agr useEffect ki dependencies khali h to ye kbhi bhi nhi clega  or jse hhi mne isko under [color] dala h to ye kheta h ki jse iss color ki value change hogi to isko cla dena 
agr hmne dependencies array nhi dia to ye phir har bar clega 

ye kheta h ki agr previous or current same h to nhi clega ab 
ye bht important chez h kyu h ye btata hu 


UseEffect itna kyu Important dekho 
Mne ek count bnaya or apne colorful wali file ka code alg file rkh dia but wo mera call hoga meri main file m or or main function ke andr hi call hoga mera colorful wala funciton but wo dusri file m or main funciton ke andr hmne ek counter function bnaya or usme hmne useState banaya h or hme pta h jb bhi useState wla funciton run hota h to wo main funciton ko re-rendering krega to jb main funciton clega to colorful wala bhi clega kyuki wwo bhi to main funciton ke andr h ( means agr parent run hoga to child to automatic khud hi hoga)

ab smjho jse mera counter wale ne main funciton ko run kia h mere or uske child h colorful wala to colorfull wale ke andr sara code chl jta but hme wo code apna useEffect m rkha or jb uspe kuch change hi nhi hua to useEffect wala function kyu hi clega (agr wo bhr hi likha hota to har bar execute krta wo ye wala 
) document.body.style.backgroundColor = color ye ab ye hmen rkha h useEffect m to isliye kuch nhi hua


mujhe to apne pure main ke child(Colorful) ko pura bachana h m nhi chahta ke iski ek bhi instruction cle 
react bola ki m uske liye tumhe ek hook deta hu 
react.memo
jb hm import krte h kisi ko jse hmne apni file COlorful wali ko 
export default React.memo(Colorful) asa krne se wo isko bacha dega  ye kher dega ki tere andr jo bhi change horah main funcitno se mere andr mt lekr aa unhe  or import m react bhi likh dena 

React.memo(ye kheta h ki ye khud smj jayga ki mujhe memorize krdo memory m )or ye kuch bhi ek bar render hone ke baad nhi ayega kuch bhi child wala bilkul safe h  react memo tbhi use kre jb wo hamre parent ke upr bht cahnge ho rhe h 


Agr future m hmare props change hote h to Memo(hooks) hme allow krta h ki iss function ko bhi render krdo
props hmare argument hi to h 
React.memo agr change hora h to render kra dunga nhi hore hoge to nhi kraoga kuch changes nhi ayega