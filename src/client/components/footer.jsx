import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";



const Footer = (props) => {
  
    //Aos

    useEffect(() => {
      AOS.init({duration: 1200,
        once: true});  
      
    }, []);

    
  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  return (
    <> 
          <footer className="footer">
          <div className="footer-top aos" data-aos="fade-up">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                    <img src={Logo} alt="" className="imgsize" />
              
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna.
                        aliqua.{" "}
                      </p>
                      <div className="social-icon">
                        <ul>
                          <li>
                            <a href="#0">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-twitter"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#0">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">For Patients</h2>
                    <ul>
                      <li>
                        <Link to="/patient/search-doctor">Search for Doctors</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                      <li>
                        <Link to="/patient/booking">Booking</Link>
                      </li>
                      <li>
                        <Link to="/patient/dashboard">Patient Dashboard</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">For Doctors</h2>
                    <ul>
                      <li>
                        <Link to="/doctor/appointments">Appointments</Link>
                      </li>
                     
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/doctor/doctor-register">Register</Link>
                      </li>
                      <li>
                        <Link to="/doctor/doctor-dashboard">Doctor Profile</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">Contact Us</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <span>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </span>
                        <p>
                          {" "}
                          Secter 63 Fn, 4nd floor, GURGAON, HARYANA, 122001., India{" "}
                        </p>
                      </div>
                      <p>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        +91 99999999
                      </p>
                      <p className="mb-0">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        jeevanheal@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom footerbottom">
            <div className="container-fluid">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-text">
                      <p className="mb-0">
                        &copy; 2023 JeevanHeal. All rights reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-menu">
                      <ul className="policy-menu">
                        <li>
                          <Link to="/terms">Terms and Conditions</Link>
                        </li>
                        <li>
                          <Link to="/privacy-policy">Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
};

export default Footer;
