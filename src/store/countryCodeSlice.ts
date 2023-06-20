import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countryCode: "",
    countryName: "",
}

export const countryCodeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCountryCode: (state ,action) => {
      state.countryCode = action.payload;
    },
    setCountryName: (state ,action) => {
      state.countryName = action.payload;
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { setCountryCode, setCountryName } = countryCodeSlice.actions;

export default countryCodeSlice.reducer