import React, { Component } from 'react';
import { IMG01, IMG02, IMG03, IMG04,IMG05, IMG06, IMG07, IMG08 } from './img.jsx';
//slider
import { Link } from 'react-router-dom';
import Slider from "react-slick";

    const HomeBookDoctor =()=> {
    
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

                <h3 className=''>COVID RT-PCR</h3>

                <p className=''>Known as covid-19 virus Quaitative Pcr throat Swab</p>
                <p className=''>E-Report next Day</p>

                <hr></hr>

                <h4 className="text-center text-primary">ADD</h4>




                  
                   
                </div>
                </div>


              


                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">


                  
                 <h3 className=''>COVID RT-PCR</h3>

                 <p className=''>Known as covid-19 virus Quaitative Pcr throat Swab</p>
                 <p className=''>E-Report next Day</p>

                  <hr></hr>

                  <h4 className="text-center text-primary">ADD</h4>
                  
                    
                   
                        
                  </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}



                  <div>
                  <div className="profile-widget">


                   
                 <h3 className=''>COVID RT-PCR</h3>

                 <p className=''>Known as covid-19 virus Quaitative Pcr throat Swab</p>
                  <p className=''>E-Report next Day</p>

                  <hr></hr>

                   <h4 className="text-center text-primary">ADD</h4>
 


                  
                     
                  </div>
                  </div>


                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">

                   
                 <h3 className=''>COVID RT-PCR</h3>

<p className=''>Known as covid-19 virus Quaitative Pcr throat Swab</p>
<p className=''>E-Report next Day</p>

 <hr></hr>

 <h4 className="text-center text-primary">ADD</h4>
 
                 
                    
                  </div>
                  </div>


                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">


                   
                 <h3 className=''>COVID RT-PCR</h3>

<p className=''>Known as covid-19 virus Quaitative Pcr throat Swab</p>
<p className=''>E-Report next Day</p>

 <hr></hr>

 <h4 className="text-center text-primary">ADD</h4>
 
                  
                      </div>
                    </div>
                    
                    {/* </div> */}
                  {/* </div> */}
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}


                  <div>
                  <div className="profile-widget">
                  
                  <h3 className=''>COVID RT-PCR</h3>

<p className=''>Known as covid-19 virus Quaitative Pcr throat Swab</p>
<p className=''>E-Report next Day</p>

 <hr></hr>

 <h4 className="text-center text-primary">ADD</h4>
 
                    </div>
                    </div>
                  {/* </div> */}
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">
                  
                   
                 <h3 className=''>COVID RT-PCR</h3>

<p className=''>Known as covid-19 virus Quaitative Pcr throat Swab</p>
<p className=''>E-Report next Day</p>

 <hr></hr>

 <h4 className="text-center text-primary">ADD</h4>
 
                    </div>
                  </div>


                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div>
                  <div className="profile-widget">
                  
                   
                 <h3 className=''>COVID RT-PCR</h3>

<p className=''>Known as covid-19 virus Quaitative Pcr throat Swab</p>
<p className=''>E-Report next Day</p>

 <hr></hr>

 <h4 className="text-center text-primary">ADD</h4>
 
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
  
export default HomeBookDoctor;