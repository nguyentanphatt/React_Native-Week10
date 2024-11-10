import { configureStore } from '@reduxjs/toolkit'
import bikeReducer from './bikeSlice'

const store = configureStore({
  reducer:{
    bike: bikeReducer,
  }
})

export default store;