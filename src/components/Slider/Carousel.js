import React,{useEffect,useRef,useState} from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  const prevArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const prevArrowElement = document.querySelector('.slick-prev');
      if (prevArrowElement) {
        prevArrowElement.classList.add('slick-disable');
      }
    }, 0);
  }, []);

  return (
    <div onClick={onClick} className={`${className}`} ref={prevArrowRef}>
      <FaAngleLeft />
    </div>
  );
}


function SampleNextArrow(props) {
  const { className, onClick } = props;
  const nextArrowRef = useRef<HTMLDivElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    setIsDisabled(true);
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (isDisabled) {
        const prevArrowElement = document.querySelector('.slick-prev');
        if (prevArrowElement) {
          prevArrowElement.classList.remove('slick-disable');
        }
      }
    }, 0);
  }, [isDisabled]);

  return (
    <div onClick={handleClick} className={`${className}`} ref={nextArrowRef}>
      <FaAngleRight />
    </div>
  );
}

function Carousel({
  children,
  slidesToShow,
  slidesToScroll,
  initialSlide,
  smSlidesToShow,
  mdSlidesToShow,
  arrow,
  dots,
}) {
  const settings = {
    dots: dots ? dots : false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: initialSlide,
    arrows: arrow ? arrow : false,
    nextArrow:  <FaAngleRight />,
    prevArrow:  <FaAngleLeft />,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: mdSlidesToShow,
          slidesToScroll: slidesToScroll,
          infinite: false,
          arrows: arrow ? arrow : false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: smSlidesToShow,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          arrows: arrow ? arrow : false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: smSlidesToShow,
          slidesToScroll: 1,
          infinite: false,
          arrows: arrow ? arrow : false,
        },
      },
    ],
  };
  return (
    <div>
        <Slider {...settings}>{children}</Slider>
    </div>
  );
}
export default Carousel;