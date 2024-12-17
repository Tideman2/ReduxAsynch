import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
//gh ' '

const Cart = (props) => {
  let cartItems = useSelector(state => state.cartItem.state);

  console.log(cartItems);

//   <CartItem
//   item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
// />
// <CartItem 
//   item = {{title: `new`, quantity: 4, total: 10, price: 2}}
//  />
    
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems && cartItems.length > 0 ? <ul>
        {cartItems.map((it) => {
          let { title, quantity, total, price} = it
          return <CartItem key = {title}
          item = {{title, quantity, total, price}} />
        })}
      </ul>: <p>Cart is empty</p>}
    </Card>
  );
};

export default Cart;
