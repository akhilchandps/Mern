import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    
    reducers:{
        //actions to be defined here

      incrementCounter:(state)=>{
        state.count+=1
      },
      decrementCounter:(state)=>{
        if(state.count!=0){
          state.count-=1
        }
   
      },
      reset:(state)=>{
        state.count=0
      }

    }


})

export const {incrementCounter,decrementCounter,reset} = counterSlice.actions

export default counterSlice.reducer