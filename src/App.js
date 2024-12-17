import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, getCartData } from './Store/cartActions'
import Notification from './components/UI/Notification';
//gh ' '

let isInitial = true

function App() {
  let dispatch = useDispatch();
  let toggleState = useSelector(state => state.cartState.cartIsVisible)
  let cart = useSelector(state => state.cartItem.state);
  let notification = useSelector(state => state.cartState.notification)
  let didCartChange = useSelector(state => state.cartItem.changed)

   useEffect(() => {
       dispatch(getCartData())
   }, [dispatch])

   useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return
    }

    if(didCartChange) {
      dispatch(sendCartData(cart))
    }
   }, [cart, dispatch, didCartChange]);


  return (
    <Fragment>
      {notification && <Notification 
      status = {notification.status} 
      title = {notification.title}
      message = {notification.message}
      />}
       <Layout>
      {toggleState && <Cart />}
      <Products />
    </Layout>
    </Fragment>
   
  );
}

export default App;
