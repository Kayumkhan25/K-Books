import React from "react";
import list from "../../../list.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";

const Unpaid = () => {
    
    var slides = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
     
    const filterData = list.filter((data) => data.price === 0);
    // console.log(filterData);
    
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mb-6 md:mb-8">
            <h1 className="text-xl font-semibold pb-2">
                Read for Free
            </h1>
            <p>
                Every free book is an opportunity—a chance to learn, grow, and escape into new realities. 
                In a world where knowledge should be accessible to all, we believe that every story deserves to be shared.
            </p>
        </div>
        <div className="slider-container max-w-screen-xl mx-auto">
            <Slider {...slides}>
                {
                    filterData.map((item) => (
                        <Cards item = {item} key={item.id}/>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Unpaid