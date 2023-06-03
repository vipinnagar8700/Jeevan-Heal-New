import React, { useState, useEffect } from "react";

import Slider from "react-slick";

import { Slide1, Slide2 } from "./image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Slidersearchdr = (props) => {

  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);

 
  const [getLocation, setGetLocation] = useState();
  const fetchLocation = () => {
    return fetch("https://jeevan.studiomyraa.com/api/doctor_locations")
      .then((response) => response.json())
      .then((data) => setGetLocation(data.city));
  }
  useEffect(() => {
    fetchLocation();
  },[])
  //   console.log(getLocation);
  {
    getLocation && getLocation.length > 0 && getLocation.map((userObj, index) => (
      console.log(userObj)
    ))
  }

  useEffect(() => {
    fetchLocation();
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };

  return (
    <div className="main-wrapper">

      {/* Home Banner */}
      <div className="pharmacy-home-slider pharmacy-home-slider1">
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
          <div className="banner-wrapper">
            <div className="banner-header text-center">
              <h1>Your home for health</h1>
              <p>Find &amp;  Book</p>
            </div>
            {/* Search */}
            <div className="search-box">
              <form action="/patient/search-doctor">
                <div className="form-group search-location">
                  <input type="text" className="form-control" placeholder="Search Location" />
                  <span className="form-text">Based on your Location</span>
                </div>
                <div className="form-group search-info">
                  <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                  <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                </div>
                <button type="submit" className="btn btn-primary search-btn mt-0"><i className="fas fa-search" /> <span>Search</span></button>
              </form>
            </div>
            {/* /Search */}
          </div>
        </div>
        {/* Add Pagination */}
        <div className="swiper-pagination" />
      </div>
      {/* /Home Banner */}


    </div>
  );
}


export default Slidersearchdr;