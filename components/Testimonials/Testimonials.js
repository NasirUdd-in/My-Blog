import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleBook from "../SingleBook/SingleBook";


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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

  const [books, setBooks] = useState([]);

  useEffect(() => {
    let url = "/books.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container mx-auto px-6 ">
      <h1 className="text-4xl font-semibold ">Books & Downloads</h1>
      <h6 className="mt-4">
        {" "}
        Dive in to some new exciting Topics or learn about what our software has
        to offer. Oh, and please let use know if youd like us to cover anything
        else.
      </h6>
      <div>
  
        <div className="mt-10 mb-10 ">
        <Slider {...settings}>
         
          {books.map((book) => (
         <SingleBook book={book} key={book.id}></SingleBook>
        ))}
         
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
