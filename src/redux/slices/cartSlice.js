import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0,
        totalItems: 0,
        filter: 'all',
    },
    reducers: {
        addToCart: (state, action) => {
            const cartItem = state.cartItems.find((item)=> {
                return item.id === action.payload.id;
            })
            if (cartItem) {
                cartItem.count++;
                state.totalItems++;
                state.totalPrice += action.payload.price;
            } else {
                state.cartItems.push(action.payload);
                state.totalItems++
                state.totalPrice += action.payload.price;
            }
        },
        increament: (state, action) => {
            const cartItem = state.cartItems.find((item) => {
              return item.id === action.payload.id;
            });
            cartItem.count++;
            state.totalItems++;
            state.totalPrice += action.payload.price;
          },
      
          decreament: (state, action) => {
            const cartItem = state.cartItems.find((item) => {
              return item.id === action.payload.id;
            });
            if (cartItem.count > 1) {
              cartItem.count--;
              state.totalItems--;
              state.totalPrice -= action.payload.price;
            }
          },
      
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id!== action.payload.id);
            state.totalItems = state.totalItems - action.payload.count;
            state.totalPrice = state.totalPrice - (action.payload.price * action.payload.count);
        },
        setFilter: (state, action) => {
          state.filter = action.payload;
        }
    }
})

export const { addToCart, removeFromCart, increament, decreament, setFilter } = cartSlice.actions;

export default cartSlice.reducer;