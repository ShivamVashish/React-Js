<!-- Jb bhi hm fetch operation krte h to 3 stage hoti h hmare pass 1.Pending 2.Fullfilled(resolve) 3.Rejected
Ab mn lo mujhe Github se data lana h or usko save krana h ek variables ke andr 
ab isme 3 variables hoge mere pass 

Inhi to hm states khete h (inka koi bhi use kr skta)

1.Data:=> Jb hmara Data aa jayga ya fullfilled ho jayg to isme ayega
2.Status(Loading):=> Jb hmne apni request mari to wo dekha dega hmara status pending m hai 
3.Error:=>Jb hmare data kisi bhi wjha se nhi ayega to ye error aa jaygi

Question : Ye h ki jb m yha pr koi m fetch request maru to wo component(locally) ke andr se maru ya globally maru 
Locally: Mnlo agr mne locally request mar di ab wha pe meri zimmedari hogi ki 3 no states to meri globally hi hogi kyuki hm ye chahte h ki jb koi data ya kuch bhi aye to usse koi bhi access kr ske

// Ek trika to ye h mere pass Component ko locally fetch krna h
function fetchUser(){
    useEffect(async ()=>{
    dispatch(LoadingData(true))
    try{
    const response = await fetch('Getting the user data')
    const data  = await response.json()
    dispatch(Updatedata(data))
    }
    catch(error){
        dispatch(actiondata("Error Occured"))
    }
    
    })
}
dispatch ke sath jo jata h wo as a action jata h store m or wo bhi object form m hi jata h store m or action ek object h or uske andr type or payload hota h 
object:{type: 'name/LoadingData',payload:true}
object:{type: 'name/UpdatedData',payload:true}
object:{type: 'name/UpdatedData',payload:"Error}

// SUppose koi or component h usko bhi fetch request marni h 
// Ek or component bna dia usko bhi phirse same code likhna pdega 
// Jo bhi m data fetch kruga wo hm Globally data fetch kruga jo bhi hm fetch kruga component ke andr fetch nhi kruga

createAsyncThunk (isse hm globally date fetch krte h ) kuch bhi dispatch vgera likhne ki jarurat nhi h 
createAsyncThunk Redux Toolkit ka ek powerful function hai jisse hum asynchronous data (API se) fetch kar sakte hain — globally (poore app me use hone ke liye).
createAsyncThunk:=> EK action creator banata hai jo automatically teen phases handle karta  hai
1.pending => jb request hoti h
2.Fullfilled => jb request successfull hoti h 
3.Rejected =>jb request fail hoti h 

createAsyncThunk ye kheta h ki tum bss mere diye hue function ko call kr dena baki ka km m khud kr dunga tumhe multiple tym code likhne ki jarurat nhi h dispatching vgera jo bhi h m khud handle kr dunga ; data ko load krna ,data ko bhejna ye sb hmara km creatAsynThunk khud handle kr dunga bss mere diye hue funciton ko call kr dena ye type action ,payload vgera bhi khud hi create krta h 


Slicer.js (file bnai)



New code Slicer.js wala M

// Iss wale Async wale ke andr kse km krta h kyuki mne in wale code m dispatch likhahi nhi h ye jo 
// createAsyncThunk hota hain ye khud hi automatic dispatch ko create krta h
// sbse phle action ka nm 

// createAsyncThunk ye in sbko khud be khud dispatch krega 

// Iss kaam ko hmare thunkapi krri h (har bar coin/fetch bhejna h or pending:undefined bhejnah data aa gay to coin/fech/fullfilled dal do  or error ka bhi asa hi h )
// Inko handle yhi krri 
// {type:'coin/fetch/pending',payload:undefined} //pending
//{type:'coin/fetch/fullfilled',payload:data} // data aa gya
// {type:'coin/fetch/rejected',payload:"error.message"}

// ab mujhe sirf fetch(20) ye hi function call krna h bss thunkapi(name kuchbhi de skte h) ye khud handle kr lega


asynchronous code (createAsyncThunk) me slice ka naam manually likhne ki zarurat nahi hoti slice ke andar,
kyunki Redux Toolkit khud hi thunk ke through action types handle kar leta hai.

ye jo extraReducer ke andr jo builder hota h wo dynamic hota h or but iske andr jo bhi hota h wo internally ek object hi hota h 