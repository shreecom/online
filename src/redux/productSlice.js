import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts =createAsyncThunk("products/fetch",async()=>{
    const response =await axios.get("https://fakestoreapi.com/products");
    return response.data;
})

const productSlice =createSlice({
    name: "products",
    initialState:{products: [],status:"idle"},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.status ="loading";
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.status ="succeeded";
        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.status="failed";
        }
        
        );
    },
});
export default productSlice.reducer;