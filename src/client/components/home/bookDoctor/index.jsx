import React, { useState, useEffect } from "react";
import { IMG01, IMG02, IMG03, IMG04 } from './img.jsx';
//slider
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeBookDoctor = (props) => {
    const [post, setPost] = useState([])
    const getData = () => {
        fetch('https://jeevan.studiomyraa.com/api/get_all_doctors')
            .then((res) => res.json())
            .then((json) => setPost(json.results))
            .catch((e) => console.log(e))
    }
 
    useEffect(() => {
        getData()
    }, [])
     //Aos

   useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);

   
        const settings = {
            width:400,
            dots:false,
          
            infinite: true,
            speed: 500,
            slidesToShow: 3,
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
       <div className="row">
            <div className="col-lg-4">
                <div className="section-header aos" data-aos="fade-up">
                    <h2>Book Our Doctor</h2>
                    <p>Lorem Ipsum is simply dummy text </p>
                </div>
                <div className="about-content aos" data-aos="fade-up">
                    <p>It is a long established fact that a reader will be distracted by the readable 
                        content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                    <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>					
                    <Link to="" >Read More..</Link>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="doctor-slider slider aos" data-aos="fade-up">
                
                <Slider {...settings}>
                {post.map((items, index) => {
                                return (
                <div  key={index}>
             
                <div className="profile-widget">
                        <div className="doc-img">
                            <Link to="/patient/doctor-profile">
                                <img className="img-fluid" alt="User" src={`https://jeevan.studiomyraa.com/public/uploads/images/${items.img}`} />
                            </Link>
                            <Link to="" className="fav-btn">
                            <i className="far fa-bookmark"></i>
                            </Link>
                        </div>
                        <div className="pro-content">
                            <h3 className="title">
                            <Link to="/patient/doctor-profile">{items.fullname}</Link> 
                                <i className="fas fa-check-circle verified"></i>
                            </h3>
                            <p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                            <div className="rating">
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <span className="d-inline-block average-rating">(17)</span>
                            </div>
                            <ul className="available-info">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i> Florida, USA
                                </li>
                                <li>
                                    <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                </li>
                                <li>
                                    <i className="far fa-money-bill-alt"></i> $300 - $1000 
                                    <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                </li>
                            </ul>
                            <div className="row row-sm">
                                <div className="col-6">
                                <Link to={"/patient/doctor-profile/" + items.id} className="btn view-btn">View Profile</Link>
                                </div>
                                <div className="col-6">
                                    <Link to="/patient/booking" className="btn book-btn">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                   </div>

                </div>
                
                );
            })}
               
               
              
              
                </Slider>    
                </div>
            </div>
       </div>
    </div>
</section>
        );
    }

export default HomeBookDoctor;