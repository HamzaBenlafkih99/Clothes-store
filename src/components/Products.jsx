import Product from '../ui/product';

const Products = ({ products }) => {
  const items = products.items;
  return (
    <div className='p-5 flex flex-wrap'>
      {items.map((item) => (
        <Product item={item} link={products.title} />
      ))}
    </div>
  );
};

export default Products;
