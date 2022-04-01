import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from '../components/slider';
import { latestProduct } from '../componentApi/TopProductsApi';

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
