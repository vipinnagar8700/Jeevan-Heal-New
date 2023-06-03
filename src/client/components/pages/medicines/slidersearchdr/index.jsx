import React, { useState,useEffect  } from "react";

import Slider from "react-slick";

import { Slide1,Slide2 } from "./image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Slidersearchdr =(props)=> { 

  //Aos

  useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);
  
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
      };   
              
      return(
        <div className="main-wrapper">
      
             {/* Home Banner */}
      <div className="pharmacy-home-slider1 pharmacy-home-slider ">
        <div className="swiper-container">
          <div className="swiper-wrapper">
          <Slider {...settings}>
          <div className="swiper-slide">
              <img src={Slide1} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={Slide2} alt="" />
            </div>
            </Slider>
            
          </div>
          {/* Add Arrows */}
          {/* <div className="swiper-button-next" />
          <div className="swiper-button-prev" /> */}

        </div>
        {/* Add Pagination */}
        <div className="swiper-pagination" />
      </div>
      {/* /Home Banner */}

 
        </div>
      );
    }


export default Slidersearchdr;