import { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import TotalCartItem from '../components/TotalCartItem';
import { CartContext } from '../context/cart.context';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div className='p-3'>
        <div className='flex flex-row mt-7 mobile:flex-col'>
          <div className='flex flex-col flex-1'>
            {cartItems.map((item) => (
              <OrderItem item={item} />
            ))}
          </div>
          <TotalCartItem />
        </div>
      </div>
    </div>
  );
};

export default Cart;
