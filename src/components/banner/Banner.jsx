import React from 'react'
import Carousel from "../Slider/Carousel"
import segments from '../../lib/segments'


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
                dots={true}
            >
                {segments.map((category, index) => (
                    <div key={index} className="px-4 py-6">
                        <h3 className="text-xl font-bold">{category.category}</h3>
                        <ul className="mt-4">
                            {category.services.map((service, serviceIndex) => (
                                <li key={serviceIndex} className="mb-2">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Carousel></div>
    )
}

export default Banner