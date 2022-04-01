import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategoryAndProductId } from '../componentApi/TopProductsApi';
import { CartContext } from '../context/cart.context';

const ProductPage = () => {
  const { addItemToCart } = useContext(CartContext);
  const { category, productId } = useParams();
  const product = getProductByCategoryAndProductId(
    category,
    parseInt(productId)
  );
  return (
    <div>
      <div className='flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3'>
        <div className='flex-1 flex items-center justify-center'>
          <img src={product.src} className='product_img' alt='product_image' />
        </div>
        <div className='flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center'>
          <h1 className='title text-[40px] mobile:text-[30px]'>
            {product.name}
          </h1>
          <p className='disription pr-[4rem] text-justify mt-4 mobile:pr-0'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            accusamus, culpa neque ex sunt placeat. Vitae quia qui quo,
            doloribus dolore aliquam veniam. Natus totam odit consequatur
            consectetur delectus nihil!
          </p>
          <div className='flex flex-col place-self-start'>
            <p className='mt-7 text-3xl'>
              Price: $<b>{product.price}</b>
            </p>

            <div className='colors flex mt-7 text-2xl'>
              Colors
              <div className='colorSelect bg-red-600 '></div>
              <div className='colorSelect bg-blue-600 '></div>
              <div className='colorSelect bg-yellow-400 '></div>
            </div>

            <div className='mt-7 text-2xl'>
              Size
              <select className='border-[2px] border-silver rounded-md ml-5'>
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          <button
            className='text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3'
            onClick={() => addItemToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
