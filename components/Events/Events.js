import React from 'react';
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleEvent from '../SingleEvent/SingleEvent';


const Events = () => {

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

  const [events, setEvents] = useState([]);

  useEffect(() => {
    let url = "/Events.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="container mx-auto px-6 bg-stone-200">
    <h1>Events</h1>
    <h6 className="mt-4">
      {" "}
      Dive in to some new exciting Topics or learn about what our software has
      to offer. Oh, and please let use know if you'd like us to cover anything
      else.
    </h6>
    <div>
     
      <div className="mt-5 mb-10 ">
      <Slider {...settings}>
       
        {events.map((event) => (
       <SingleEvent event={event} key={event.id}></SingleEvent>
      ))}
       
      </Slider>

      </div>
    </div>
    <div className='flex  justify-center items-center'>
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">View all Events</button>
    </div>
  </div>
  );
};

export default Events;