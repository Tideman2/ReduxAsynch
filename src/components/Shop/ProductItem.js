import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Store/cartItemsSlice'

//gh ' '

const ProductItem = (props) => {
  let dispatch = useDispatch();
  const { title, price, description } = props;
  let item = {title, price};

  function handleAddToCart() {
    dispatch(addItemToCart(item));
  }
   
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
