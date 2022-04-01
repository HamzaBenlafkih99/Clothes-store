import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { ApiSlides } from '../../componentApi/SliderApi';
import LeftArrowSlider from '../../ui/arrow-slider/LeftArrowSlider';
import RightArrowSlider from '../../ui/arrow-slider/RightArrowSlider';
import SlideContent from './slider-content/slider.content';

const Slider = () => {
  //styles
  const arrowStyle =
    'rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer';

  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className='slider h-[540px] bg-white flex items-center justify-between mobile:hidden'>
      <LeftArrowSlider arrowStyle={arrowStyle} prevSlide={prevSlide} />

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return <SlideContent key={index} slide={slide} />;
        }
      })}

      <RightArrowSlider arrowStyle={arrowStyle} nextSlide={nextSlide} />
    </div>
  );
};

export default Slider;
