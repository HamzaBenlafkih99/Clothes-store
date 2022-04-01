import { ArrowLeftOutlined } from '@material-ui/icons';

const LeftArrowSlider = ({ prevSlide, arrowStyle }) => {
  return (
    <div className={arrowStyle} onClick={prevSlide}>
      <ArrowLeftOutlined style={{ fontSize: '50px' }} />
    </div>
  );
};

export default LeftArrowSlider;
