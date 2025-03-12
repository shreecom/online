import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice(
    {
        name:"cart",
        initialState:{cartItem: []},
        reducers:{
            addToCart:(state,action)=>{
                
                const item =state.cartItem.find((p)=>p.id === action.payload.id);
                if(item){
                    item.quantity +=1;
                }
                else{
                    state.cartItem.push({...action.payload,quantity:1});
                }
            },
            removeFromCart:(state,action)=>{
                state.cartItem=state.cartItem.filter((item)=>item.id !== action.payload);
            },
        },
    }
);
export const{addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;