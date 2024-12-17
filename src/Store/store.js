import { configureStore } from '@reduxjs/toolkit';
import cartStateSlice from './cartStateSlice';
import cartItems from './cartItemsSlice' 
// import { enableMapSet } from 'immer';

// // Enable MapSet plugin

const store = configureStore({
  reducer: { 
    cartState: cartStateSlice,
    cartItem: cartItems,
   }, // Add slices here
});

export default store;
