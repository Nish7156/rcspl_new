import React from "react";
import Carousel from "../Slider/Carousel";
import segments from "../../lib/segments";

import Islider from "../../img/slider1.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={0}
        smSlidesToShow={1}
        mdSlidesToShow={1}
        arrow={true}
      >
        {segments.map((category, index) => (
          <div key={index} className="relative">
            <img src={category.img || ''} className=" opacity-90" />
            {/* <div className=" bg">
              <h1 className="md:text-8xl text-2xl font-bold text-white">
                {category.category}
              </h1>
              <ul className="mt-4 font-bold text-white">
                {category.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="mb-2 text-2xl font-medium py-2"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
