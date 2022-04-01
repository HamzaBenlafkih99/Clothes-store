import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);

  const style = 'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';
  return (
    <div className='navbar h-[60px] shadow-md relative z-10 '>
      <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0'>
        <div className=' left flex flex-1  items-center'>
          <div className='cursor-pointer text-[16px] mobile:hidden'>En</div>
          <div className='SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]'>
            <input
              type='text'
              className='border-none mobile:w-[50px]'
              placeholder='Search'
            />
            <Search className='text-[#8a4af3] m' style={{ fontSize: '16px' }} />
          </div>
        </div>
        <div className='center flex-1 text-center  mobile:ml-6'>
          <div className='logo font-bold mobile:text-sm'>
            <Link to='/'>Clothing Shop</Link>
          </div>
        </div>
        <div className='right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]'>
          <div className={style}>Register</div>
          <div className={style}>Sign In</div>
          <div className={style}>
            <Link to='/checkout'>
              <Badge badgeContent={cartCount} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
