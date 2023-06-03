import React, { Component } from 'react';
import { IMG01, IMG02, IMG03, IMG04,IMG05, IMG06, IMG07, IMG08 } from './img.jsx';
//slider
import { Link } from 'react-router-dom';
import Slider from "react-slick";

    const HomeBookDoctors =()=> {
    
        const settings = {
            width:400,
            dots:false,
          
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerPadding: '0px',
            arrows: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                      
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                      
                    }
                }
              
            ]

          };
        return(
            <section className="section section-doctor">
          <div className="container-fluid">
            <div className="section-header text-center">
              <h2>Popular Health Checkup Packages</h2>
              
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="doctor-slider slider">
                    
                <Slider {...settings}>
                <div>
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="">
                        <img className="img-fluid" alt="User Image" src={IMG01} />
                      </Link>
                    
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="">Vitamin Deficiency Health Cheackup</Link> 
                        
                      </h3>
                      <p className="speciality">Idial individual aged 11-80 years</p>

                      <p>85 tests included</p>
                     
                     
                      <div className="row row-sm">
                        <div className="col-6 ">	<Link to="" className="">$1099    <del>$1400</del></Link>
                        </div>
                        <div className="col-6">	<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>


                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">
                  <div className="doc-img">
                      <Link to="">
                        <img className="img-fluid" alt="User Image" src={IMG01} />
                      </Link>
                    
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="">Vitamin Deficiency Health Cheackup</Link> 
                        
                      </h3>
                      <p className="speciality">Idial individual aged 11-80 years</p>

                      <p>85 tests included</p>
                     
                     
                      <div className="row row-sm">
                        <div className="col-6 ">	<Link to="" className="">$1099    <del>$1400</del></Link>
                        </div>
                        <div className="col-6">	<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                        
                  </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}



                  <div>
                  <div className="profile-widget">
                  <div className="doc-img">
                      <Link to="">
                        <img className="img-fluid" alt="User Image" src={IMG01} />
                      </Link>
                    
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="">Vitamin Deficiency Health Cheackup</Link> 
                        
                      </h3>
                      <p className="speciality">Idial individual aged 11-80 years</p>

                      <p>85 tests included</p>
                     
                     
                      <div className="row row-sm">
                        <div className="col-6 ">	<Link to="" className="">$1099    <del>$1400</del></Link>
                        </div>
                        <div className="col-6">	<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>


                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">
                  <div className="doc-img">
                      <Link to="">
                        <img className="img-fluid" alt="User Image" src={IMG01} />
                      </Link>
                    
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="">Vitamin Deficiency Health Cheackup</Link> 
                        
                      </h3>
                      <p className="speciality">Idial individual aged 11-80 years</p>

                      <p>85 tests included</p>
                     
                     
                      <div className="row row-sm">
                        <div className="col-6 ">	<Link to="" className="">$1099    <del>$1400</del></Link>
                        </div>
                        <div className="col-6">	<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>


                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">
                  <div className="doc-img">
                      <Link to="">
                        <img className="img-fluid" alt="User Image" src={IMG01} />
                      </Link>
                    
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="">Vitamin Deficiency Health Cheackup</Link> 
                        
                      </h3>
                      <p className="speciality">Idial individual aged 11-80 years</p>

                      <p>85 tests included</p>
                     
                     
                      <div className="row row-sm">
                        <div className="col-6 ">	<Link to="" className="">$1099    <del>$1400</del></Link>
                        </div>
                        <div className="col-6">	<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                    
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}


                  <div>
                  <div className="profile-widget">
                  <div className="doc-img">
                      <Link to="">
                        <img className="img-fluid" alt="User Image" src={IMG01} />
                      </Link>
                    
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="">Vitamin Deficiency Health Cheackup</Link> 
                        
                      </h3>
                      <p className="speciality">Idial individual aged 11-80 years</p>

                      <p>85 tests included</p>
                     
                     
                      <div className="row row-sm">
                        <div className="col-6 ">	<Link to="" className="">$1099    <del>$1400</del></Link>
                        </div>
                        <div className="col-6">	<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">
                  <div className="doc-img">
                      <Link to="">
                        <img className="img-fluid" alt="User Image" src={IMG01} />
                      </Link>
                    
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="">Vitamin Deficiency Health Cheackup</Link> 
                        
                      </h3>
                      <p className="speciality">Idial individual aged 11-80 years</p>

                      <p>85 tests included</p>
                     
                     
                      <div className="row row-sm">
                        <div className="col-6 ">	<Link to="" className="">$1099    <del>$1400</del></Link>
                        </div>
                        <div className="col-6">	<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>


                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">
                  <div className="doc-img">
                      <Link to="">
                        <img className="img-fluid" alt="User Image" src={IMG01} />
                      </Link>
                    
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="">Vitamin Deficiency Health Cheackup</Link> 
                        
                      </h3>
                      <p className="speciality">Idial individual aged 11-80 years</p>

                      <p>85 tests included</p>
                     
                     
                      <div className="row row-sm">
                        <div className="col-6 ">	<Link to="" className="">$1099    <del>$1400</del></Link>
                        </div>
                        <div className="col-6">	<Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  {/* Doctor Widget */}
                
                </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
    }
  
export default HomeBookDoctors;