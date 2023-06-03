import React, { useState, useEffect } from "react";
import { IMG01, IMG02, IMG03, IMG04, IMG05 } from './img.jsx';
//slider
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

    const HomeClinic =(props)=>{
        const [posts, setPosts] = useState([])

        const getsurgical = () => {
            fetch('https://jeevan.studiomyraa.com/api/get_surgical_ailment')
                .then((res) => res.json())
                .then((json) => setPosts(json))
                .catch((e) => console.log(e))
        }
        useEffect(() => {
            getsurgical()
        }, [])
         //Aos

   useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);

        const settings = {
            dots: true,
			autoplay:false,
			infinite: true,
			variableWidth: true,
			prevArrow: false,
			nextArrow: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                      
                    }
                }
            ]
          };
        return(
            <>
    <section className="section section-specialities">
    <div className="container-fluid">
       
        <div className="row justify-content-center">
          
            <div className="col-md-12 aos" data-aos="fade-up">
        
										<div className="specialities-slider1 slider1 d-flex">
										
                                                {posts.data ? posts.data.length > 0 && (
                                                     <div>
                                                    {posts.data.map((items, index) => {
                                                        return (
          
                  
                        <div className="speicalitylab-item text-center">
                            <div className="speicalitylab-img">
                            <img src={`https://jeevan.studiomyraa.com/public/uploads/images/${items.img}`} alt="" />
                                  
                                </div>
                                <p>{items.name}</p>
                            </div>	
                               );
                            })}
                
                        </div>
                    ) : <div className="rightSection">No Record match.</div>}
                          
                        </div>
                
                   
                
                        
                
                    </div>
                   
             
            </div>
        </div>
   
</section>
</>	 
        );
    }


export default HomeClinic;