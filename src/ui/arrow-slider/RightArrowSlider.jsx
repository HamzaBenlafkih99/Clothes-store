import { ArrowRightOutlined } from '@material-ui/icons';

const RightArrowSlider = ({ nextSlide, arrowStyle }) => {
  return (
    <div className={arrowStyle} onClick={nextSlide}>
      <ArrowRightOutlined style={{ fontSize: '50px' }} />
    </div>
  );
};
export default RightArrowSlider;
