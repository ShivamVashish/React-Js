import { createSlice } from "@reduxjs/toolkit";

    const FoodSlicer = createSlice({
        name:'Shivam',
        initialState:{count:0},
        reducers:{
            addItems:(state)=>{state.count ++},
            removeItems:(state)=>{state.count--}
        }
    })

export default FoodSlicer.reducer
export const {addItems,removeItems} = FoodSlicer.actions