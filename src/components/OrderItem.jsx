import Counter from './Counter';

const OrderItem = ({ item }) => {
  const ProductDivStyle = 'flex w-[100%] h-auto items-center mobile:flex-col';
  const PriceQuantityStyle =
    'flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7';

  return (
    <>
      <div className={ProductDivStyle}>
        <div className=' product flex pl-5 self-start'>
          <img
            className='product_img w-[7rem]'
            src={item.src}
            alt='product_img'
          />

          <div className='disc flex items-start justify-between h-auto flex-col ml-6'>
            <p>
              <b className='mr-2'>ID:</b> {item.id}
            </p>
            <p>
              <b className='mr-2'>Product:</b> {item.name}
            </p>
            <p>
              <b className='mr-2'>Price :</b>${item.price}
            </p>
          </div>
        </div>

        {/*Price and Quantity Div*/}
        <div className={PriceQuantityStyle}>
          <Counter quantity={item.quantity} item={item} />
          <p className='flex items-center justify-center text-4xl mt-3'>
            <b>{item.price}$</b>
          </p>
        </div>
      </div>
      <hr className='mb-7 mt-7 mobile:mt-0' />
    </>
  );
};

export default OrderItem;
