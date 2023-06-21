import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    radioURL: '',
    radioID: '',
    radioName: '',
    radioCurrListners: "",
    radioImageURL: "",
    radioType:'',

}

export const RaioPlayerSlice = createSlice({
    name: "radio",
    initialState,
    reducers:{
        setRadioURL: (state, action )=>{
            state.radioURL = action.payload;
        },
        setRadioName: (state, action )=>{
            state.radioName = action.payload;
        },

        setRadioID: (state, action )=>{
            state.radioID = action.payload;
        },
        
        setRadioCurrListners: (state, action )=>{
            state.radioCurrListners = action.payload;
        },
        setRadioImageURL: (state, action )=>{
            state.radioImageURL = action.payload;
        },
        setRadioType: (state, action )=>{
            state.radioType = action.payload;
        }
    },

})

export const {setRadioURL, setRadioName ,setRadioType, setRadioImageURL, setRadioCurrListners, setRadioID} = RaioPlayerSlice.actions

export default RaioPlayerSlice.reducer