import classes from './CartButton.module.css';
import { toggle } from '../../Store/cartStateSlice'
import { useSelector, useDispatch } from 'react-redux';
//gh ' '

const CartButton = (props) => {
  let dispatch = useDispatch();
  let total = useSelector(state => state.cartItem.totalQuantity);


  return (
    <button className={classes.button} onClick={() => {dispatch(toggle())}}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
