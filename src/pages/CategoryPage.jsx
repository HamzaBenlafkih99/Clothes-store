import Products from '../components/Products';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../componentApi/TopProductsApi';

const ProductsPage = () => {
  const { category } = useParams();
  const productsByCategory = getProductsByCategory(category);
  return (
    <>
      <h1 className='p-8 font-medium leading-tight text-5xl'>
        {productsByCategory.title} Products
      </h1>
      <Products products={productsByCategory} />
    </>
  );
};

export default ProductsPage;
