//gh ' '
import { showNotification } from './cartStateSlice'
import { replaceCart } from './cartItemsSlice'


//thunk function to handle sendin data to base
export let sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data', 
          }))

        let sendRequest = async () => {
            let response = await fetch('https://myfirstbase-85974-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
              });
        
              if(!response.ok) {
                throw new Error(`sending cart data failed`)
              }
        }

        try {
            await sendRequest();
             dispatch(showNotification({
                status: 'success',
                title: 'Succedded!',
                message: 'Sent cart data successfully', 
              }))
        } catch (error) {
            dispatch(showNotification({
                status: 'Error',
                title: 'Error!',
                message: 'Senin cart data failed', 
              }))
        } 
    }
}


export let getCartData = () => {
    return async (dispatch) => {
      let fetchData = async () => {
        let response = await fetch('https://myfirstbase-85974-default-rtdb.firebaseio.com/cart.json');
         if(!response.ok) {
            throw new Error(`bad res`)
         }
        let data = await response.json();
        return data
      }
      
      try {
       let cartData = await fetchData();
       console.log(cartData);
         if(!cartData) {
            cartData = []
         }
        dispatch(replaceCart(cartData));
      } catch (error) {
        dispatch(showNotification({
            status: 'Error',
            title: 'Error!',
            message: 'fetching cart data failed', 
          }))
      }
    }
}