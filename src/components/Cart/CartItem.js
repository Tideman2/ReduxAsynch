import classes from './CartItem.module.css';
import { addItemToCart, removeItemFromCart} from '../../Store/cartItemsSlice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  let dispatch = useDispatch()
  const { title, quantity, total, price } = props.item;
  let item = {
    title,
    quantity,
    total,
    price
  }
  console.log(title, quantity)

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => {dispatch(removeItemFromCart(item))}}>-</button>
          <button onClick={() => {dispatch(addItemToCart(item))}}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
