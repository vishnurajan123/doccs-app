import { createSlice } from "@reduxjs/toolkit";

const docSlice = createSlice({
    name:`doccc`,
    initialState:{
        docId:""
    },
    reducers:{
      
        cardClick:(state,action)=>{
            state.count+=action.payload
        }
    }
})

export const { cardClick }=docSlice.actions
export default docSlice.reducer