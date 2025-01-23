import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
// import list from "../../../list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Unpaid = () => {
    
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
        const getBook = async () => {
        try {
            // use axios to get data from backend
            const res = await axios.get("https://k-books-rl2y.onrender.com/book");
            const data = res.data.filter((data) => data.price === 0)
            setBooks(data);
        } catch (error) {
            console.log("error:", error);
        }
        };
        getBook(); 
    }, []);
    // const filterData = list.filter((data) => data.price === 0);
    // console.log(filterData);
    
         
    const slides = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
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
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
              }
            }
          ]
      };
    
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mb-6 md:mb-8">
            <h1 className="text-2xl font-semibold pb-3">
                Read for Free
            </h1>
            <p className="text-lg md:text-xl">
                "Every free book is an opportunity—a chance to learn, grow, and escape into new realities. 
                In a world where knowledge should be accessible to all, we believe that every story deserves to be shared."
            </p>
        </div>
        <div className="slider-container max-w-screen-xl m-2 px-6 rounded-lg md:px-10 mx-auto">
            <Slider {...slides}>
                {
                    books.map((item) => (
                        <Cards item = {item} key={item.id}/>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Unpaid