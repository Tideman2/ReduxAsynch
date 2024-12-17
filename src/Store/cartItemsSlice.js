//gh ' ' A cart with redux for state management and fireBase Real time data to understand how asynch and side Effects work with redux toolKit
import { createSlice } from '@reduxjs/toolkit';

let cartItems = createSlice({
    name: `cartItems`,
    initialState: {
        state: [],
        totalQuantity: 0,
        changed: false
    }, 
    reducers: {
        replaceCart(state, payload) {
        console.log(payload)
        state.state = payload.payload;
        if(payload.payload.length > 0) {
         let newQuantity = 0;
        payload.payload.forEach(item => {
         newQuantity += item.quantity;
         state.totalQuantity = newQuantity
        });
        }
        state.changed = false;
        },

        addItemToCart(state, action) {
            //check if item has been already added
            let isAlreadyAdded = false
            let indexOfItem = 0
            state.changed = true
            for(let i = 0; i < state.state.length; i++) {
                if(action.payload.title === state.state[i].title) {
                  isAlreadyAdded = true
                  indexOfItem = i
                  break;
                } 
             }

             if(!isAlreadyAdded) { // if item has not been added
                console.log(`first block`)
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                    total: action.payload.price,
                  };
              state.state.push(newItem)
             }else {// if item has been added
              console.log(`second block`)
              let item = state.state[indexOfItem];
              item.quantity = item.quantity + 1;
              item.total = item.price * item.quantity;
             }

             state.totalQuantity++
        },
        
        removeItemFromCart(state, action) {
         let identifier = action.payload.title;
         state.changed = true
         for(let i = 0; i < state.state.length; i++) {
            if(identifier === state.state[i].title) {
                let item = state.state[i]
             if(item.quantity > 1) {
                item.quantity -= 1
                item.total = item.price * item.quantity;
             }else {
              state.state.splice(i,1);
             }
            }
         }
         state.totalQuantity--
        }
    }
});




export let { addItemToCart, removeItemFromCart, replaceCart } = cartItems.actions;
export default cartItems.reducer