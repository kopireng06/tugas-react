import { createSlice, current } from "@reduxjs/toolkit";
import validator from "validator";

const initialState = {
    value:{
        name:"",
        email:"",
        phone:"",
        nationality:"Indonesia",
        message:""
    },
    error:{
        name:"",
        email:"",
        phone:""
    }
}

export const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        updateValue: (state,action)=>{
            const {nameValue} = action.payload;
            const {value} = action.payload;
            state.value[nameValue] = value;
        },
        updateError: (state)=>{
            const {name} = current(state.value);
            const {email} = current(state.value);
            const {phone} = current(state.value);
            state.error.email = validator.isEmail(email) ? "" : "Email cannot be empty"
            state.error.name = validator.isAlpha(name) ? "" : "Full name cannot be empty"
            state.error.phone = 
            validator.isNumeric(phone) && validator.isLength(phone,{min:9,max:14}) ?
            "" : "Phone number cannot be empty"
        }
    }
});

export const {updateValue,updateError} = contactSlice.actions;
export default contactSlice.reducer;
