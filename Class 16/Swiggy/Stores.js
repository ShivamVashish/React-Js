import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slice"; // default reducer ka nm kuch bhi de skte h 
 const Stores = configureStore({

    reducer:{
        Shivam:reducer
    }
    })

    export default Stores;