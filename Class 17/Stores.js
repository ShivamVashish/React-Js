import {configureStore} from '@reduxjs/toolkit'
import reducer from './Slicer' // kisi bhi nm se reducer ko import kr skte h 
const Stores = configureStore({
     reducer:{
        Slice:reducer
     }
})

export default Stores;