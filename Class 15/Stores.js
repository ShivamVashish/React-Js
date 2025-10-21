import { configureStore } from "@reduxjs/toolkit";
import react1Slicer from './Slicer1'
const Stores = configureStore({
    reducer:{
      slice1 : react1Slicer, // isse ye pta chl jayga ki slice1 ke pass kon kon se reducer h 
       
    }
})

export default Stores;
// Dispatch ke sath m slice attach hokr atah kyuki slice ke andr hi hmara sbhi reducer hote h 