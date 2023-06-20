import { configureStore } from '@reduxjs/toolkit';
import countryCodeSlice from './countryCodeSlice';





 //Redux extension


export const store = configureStore({
    
  reducer: {
    countryCodeSlice,
    
  },
})