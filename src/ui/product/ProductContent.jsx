import { ShoppingCartOutlined, AddCircle } from '@material-ui/icons';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductContent = ({
  handleHoverEnter,
  handleHoverExit,
  item,
  link,
  hoverEffects,
}) => {
  const { addItemToCart } = useContext(CartContext);
  const iconStyle =
    'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer';

  return (
    <div
      className='flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative'
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} className='w-full h-full' alt='product' />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle} onClick={() => addItemToCart(item)}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <Link to={`/products/${link}/${item.id}`}>
            <AddCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
