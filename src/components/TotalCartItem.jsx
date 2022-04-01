import { useContext } from 'react';
import { CartContext } from '../context/cart.context';

const TotalCartItem = () => {
  const SummaryItemStyle = 'SummaryItem flex justify-between mt-3 w-[100%]';
  const { cartTotal } = useContext(CartContext);

  return (
    <div className='Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6'>
      <h1 className='text-[2rem]'>SUMMARY : </h1>
      <div className={SummaryItemStyle + ' text-3xl font-bold'}>
        <p>Total:</p>
        <p>$ {cartTotal} </p>
      </div>
    </div>
  );
};

export default TotalCartItem;
