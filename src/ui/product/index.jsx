import { useState } from 'react';
import ProductContent from './ProductContent';

const Product = ({ item, link }) => {
  const [hoverEffects, setHoverEffects] = useState(' opacity-0');

  function handleHoverEnter() {
    setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]');
  }

  function handleHoverExit() {
    setHoverEffects(' opacity-0');
  }
  return (
    <ProductContent
      item={item}
      handleHoverExit={handleHoverExit}
      handleHoverEnter={handleHoverEnter}
      hoverEffects={hoverEffects}
      link={link}
    />
  );
};

export default Product;
