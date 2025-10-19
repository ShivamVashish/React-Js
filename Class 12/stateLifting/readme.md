<!-- State Lifting  -->
<!-- Ek parent component apne do (ya zyada) child components ko ek hi data share kare.

 <Increment counts={count}/> //iss count ko asa a props dusre m bhej rha hu //

 React me data hamesha parent → child direction me flow karta hai.
(Isse “unidirectional data flow” kehte hain.)

Direction	                            Kaise hota hai	Allowed?
Parent → Child	                        Props ke through data send
Child → Parent                          Function props ke through data send
Child → Child                           Common parent ke through (state lifting)
Parent → Parent (same level)            Directly nahi hota

 Agr M(parent) props pass krdu apne children pe to m M apne parent ke jo state variables h unhe bhi access kr skta hu

children se parent ko bhej nhi skta kuch bhi m or same sibling ka agr mere pass sibling ka access hi nhi h to m usko bhejuga kse phir 

 Note
 Agr m parent ke andr state Variables bnata hu to child unhe access kr skta h bss parent ko asa a props pass krna h 

 Situation(child 1) : Agr mne sare State variables apne child component ke andr hi create kre or increment wali functionality mne child m de rkhi h  

Situation(child 2) : Ab mn lo ki ye dusra child h Main container ka apne parent funciton (App ka) component h 
m ye chata hu ki mere iss dusre child m ek function rhe decrement nm ka agr m decrement wali pr click kru to mera increament wala change ho jaye
M ye chahta hu ki increment ke state variables ka access mere decrement wale ke pass bhi jayga 

iska solution ye h ki hm state variables parent m bna de na ki child m to phir as a props dono ko pass kr dega 
Mtlb child wale ne bol dia ki tum create kro state variables phir hm dono ko pass kr dena as a props to dono use kr lege to yhi hota h (state Lifting)



Asa condition hmare sath bht bhr ho skti h 
(Suppose)=> Hme agr kisi bhi child ko access krna h to hm most comman ancesstor ko hi state variable create krege or issi chez ko hm khete h state lifting ki hmara ek jgah variables pda tha hmne wo parent ko de dia ki tum pass kro as a props hme 



