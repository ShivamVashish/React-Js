import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// {type : "Coin/fetch",payload: } hm type m apni icha se kuch bhi nm de skte h 
const FetchData = createAsyncThunk(
    //Action : type,payload(dispatch wala km createAsyncThunk hi krege usko action chaiye hoge)
    'Coin/fetch',

    async (args,thunkApi)=>{    // ye do argumnet leta h // jo bhi hm fetch(20)call krege wo cla jayaa args ke andr

try{
const response  = await  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)
const data = await response.json()
return data; // ye jo hm return kre h wo jata h mera payload ke andr or phir ye object as a dispatch jatah
                        // {type : "Coin/fetch",payload: }       
    }
catch(error){

    return rejectedWithValue(error.message)
        }
    }
)

const Slice = createSlice({
    name:"shivam",
    initialState:{data:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(FetchData.pending,(state)=>{
            state.loading = true;
            state.error = null; 
        })
        .addCase(FetchData.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(FetchData.rejected,(state,action)=>{
            state.error = action.payload,
            state.loading = false;
        })
    }
})

export default Slice.reducer
export {FetchData};
// Yha pr hme reducers khali chodne pdege kyuki yha pe asynchrnous operation ki baat kre h isliye hme yha pr extraReducer ki jarurat pdti h 
// Kyuki synchronous code jo hota h mera usko handle krta h mera reducers and asynchrnous code ko handle krta mera extraReducers iske andr hota h ek builder (builder ek hmara object h ) ab iske andr mujhe case add krne h kyuki mere pass 3 case hote h to mujhe = 
// .addCase(fetchdata.pending) jbb ye likh reh to hm iss request ko full fill kre h 
// {type : "Coin/Fetch/pending"}
// .addCase(FetchData.fulfilled){type:"Coin/Fetch/fullfilled"} jb wo upr wali baat likh reh to smj lo ye hora h 
//.addCase(FetchData.rejected){type:"Coin/Fetch/rejected"} or asa hi we dono bhi create ho jayga 