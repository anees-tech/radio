import { configureStore } from '@reduxjs/toolkit';
import countryCodeSlice from './countryCodeSlice';
import RadioPLayerSlice from './RadioPLayerSlice';



export const store = configureStore({
  reducer: {
    countryCodeSlice,
    RadioPLayerSlice,
  },
})