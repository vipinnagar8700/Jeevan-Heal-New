import React, { useEffect, useState } from 'react';
import HomeSearch from './search';
import HomeClinic from './clinic';
import HomeBookDoctor from './bookDoctor';
import HomeFeatures from './features';
import HomeBlog from './blog';
import { Doctor07, ImgPharmacy1, LabImage } from "./image.jsx";
import Header from '../header';
import Footer from '../footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = (props) => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);

    let pathnames = window.location.pathname
    return (
        <div>
            <div className="main-wrapper">
                <Header {...props} />
                <HomeSearch />
                <section className="section home-tile-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-9 m-auto">
                                <div className="section-header text-center">
                                    <h2>What are you looking for?</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 mb-3">
                                        <div className='profile-widget'>
                                            <div className="card text-center doctor-book-card">
                                                <img src={Doctor07} alt="" className="img-fluid" />

                                            </div>
                                            <div className="text-center">
                                                <div>
                                                    <h3 className="card-title mb-0 mt-4">Visit a Doctor</h3>
                                                    <Link to="/patient/search-doctor" className="btn book-btn1 px-3 py-2 mt-3" tabIndex={0}>Book Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4 mb-3 ">
                                        <div className='profile-widget'>
                                            <div className="card text-center doctor-book-card">
                                                <img src={ImgPharmacy1} alt="" className="img-fluid" />

                                            </div>
                                            <div className="text-center">
                                                <div>
                                                    <h3 className="card-title mb-0 mt-4">Find a Pharmacy</h3>
                                                    <Link to="/Pharmacy/pharmacy-search" className="btn book-btn1 px-3 py-2 mt-3" tabIndex={0}>Find Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mb-3 ">
                                        <div className='profile-widget'>
                                            <div className="card text-center doctor-book-card">
                                                <img src={LabImage} alt="" className="img-fluid" />

                                            </div>
                                            <div >
                                                <div className='text-center'>
                                                    <h3 className="card-title mb-0 mt-4">Find a Medicines</h3>
                                                    <a href="pages/medicines" className="btn book-btn1 px-3 py-2 mt-3" tabIndex={0}>Find Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <HomeClinic />
                <HomeBookDoctor />
                <HomeFeatures />
                <HomeBlog />
            </div>
            <Footer {...props} />
        </div>
    );
}

export default Home;