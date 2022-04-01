import './slider.styles.css';

const SlideContent = ({ slide }) => {
  const slideStyle = 'slide flex items-center justify-center h-[100%]';
  return (
    <div
      className={
        `wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
        slide.background
      }
    >
      <div className={slideStyle}>
        <div className='flex-1 flex justify-center items-center h-[100%]'>
          <img className=' h-[100%] object-cover' src={slide.src} alt='man' />
        </div>
        <div className='discription flex flex-col flex-1 place-items-start justify-center ml-11'>
          <h2 className='text-[55px]'>{slide.content.h2}</h2>
          <p className=' text-[30px]'>{slide.content.p}</p>
          <button className='btn'>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
