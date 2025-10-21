import { configureStore } from "@reduxjs/toolkit";
import reactSlicer from './Slicer1'
const Stores = configureStore({
    reducer:{
      slice1 : reactSlicer, // isse ye pta chl jayga ki slice1 ke pass kon kon se reducer h 
       
    }
})
export default Stores;
