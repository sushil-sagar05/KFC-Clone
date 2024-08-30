import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart :[],
    },
    reducers: {
        addToCart: (state,action) => {
            const exitingItem = state.cart.find((item)=> item.id === action.payload.id);
            if(exitingItem){
                state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty +1} : item)
             } else(state.cart.push(action.payload));
        },
        removeFromCart: (state,action) => {
           state.cart = state.cart.filter((item) => item.id != action.payload.id);
        },
        clearCart: (state,action) => {
            state.cart = []
        },
        increament: (state,action)=> {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty:item.qty +1}: item)
        },
        decrement: (state,action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty -1} : item)
        },
    }
})
export const{addToCart,removeFromCart,clearCart,increament,decrement} = CartSlice.actions;
export default CartSlice.reducer;