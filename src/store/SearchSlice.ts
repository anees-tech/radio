import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    searchText:'',
    countryCode:'',
}

export const SearchSlice = createSlice({
    name: "radio",
    initialState,
    reducers:{
        setSearchText: (state, action )=>{
            state.searchText = action.payload;
        },
        setCountryCode: (state, action )=>{
            state.searchText = action.payload;
        },
    },
})

export const {setSearchText,setCountryCode} = SearchSlice.actions
export default SearchSlice.reducer;
