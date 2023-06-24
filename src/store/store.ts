import { configureStore } from '@reduxjs/toolkit';
import countryCodeSlice from './countryCodeSlice';
import RadioPLayerSlice from './RadioPLayerSlice';
import SearchSlice from './SearchSlice';



export const store = configureStore({
  reducer: {
    countryCodeSlice,
    RadioPLayerSlice,
    SearchSlice,
  },
})