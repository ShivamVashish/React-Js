// let b =10
// function greet(){
//     let a = 20;
//     console.log(a)   
//     console.log(b); // iske scope m nhi h to bhr wale scope m dekhege phir print kra dega
// }
// greet()
// // console.log(a); // lekin hm andr wale ko bhr console.log nhi kra skte andr wale ko bhr kra skte h 

let b = 20
function greet(){
    let a = 10
    
    function meet(){
        console.log(a); // ye function jo bhi use krta h unka refernce bhi store krke rkhta h 
        console.log(b);
    }
   return meet // meet ka reference cla gya greet() ke andr 
}
const num = greet() 
num(); // ye kr skte h // ye funciton call isliye hi hora h kyuki iska heap ke andr reference store h chahe stacke ke andr se value delte ho gyi ho but heap ke andr memory ki location h as a reference sbhi ka refernce store krke rkhta variable ki bhi jb bhi hm value ko future m tumhe chaiye to to m reference store to h hi ki jb tumhe jarurat hogi to m tumhe lakr de dunga outer walo ka reference lakr dunga 