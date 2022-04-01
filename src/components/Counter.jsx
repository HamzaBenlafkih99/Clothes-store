import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';

function Counter({ quantity, item }) {
  const { addItemToCart, removeItemToCart } = useContext(CartContext);
  const addItem = () => {
    addItemToCart(item);
  };
  const removeItem = () => {
    removeItemToCart(item);
  };
  return (
    <div>
      <div className='counter flex items-center text-2xl justify-start'>
        Quantity
        <div className='ml-5 shadow-md flex'>
          <div
            className='bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer'
            onClick={removeItem}
          >
            -
          </div>
          <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>
            {quantity}
          </div>
          <div
            className='bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer'
            onClick={addItem}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
