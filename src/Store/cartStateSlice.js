//gh ' '
import { createSlice } from '@reduxjs/toolkit';

let cartState  = createSlice({
    name: 'cartState',
    initialState: {
        cartIsVisible: true,
        notification: null,
    },
    reducers: {
        toggle(state) {
         state.cartIsVisible = !state.cartIsVisible
         return state
        },
        
        showNotification(state, action) {
            state.notification = { 
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
             };
        }
    }
});

export let { toggle, showNotification } = cartState.actions
export default cartState.reducer