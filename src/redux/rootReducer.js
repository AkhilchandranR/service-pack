import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name:'modalSlice',
    initialState:{
        open: false,
    },
    reducers:{
        openModal:(state)=>{
            state.open=true
        },
        closeModal:(state)=>{
            state.open=false
        }
    },
})

export const { openModal,closeModal } = modalSlice.actions;
export default modalSlice.reducer;