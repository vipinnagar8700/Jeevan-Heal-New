import React, {Component} from 'react';
import {urology1,
  urology2,  
  urology3, 
  urology4, 
  urology5, 
  urology6, 
  urology7, 
  urology8, 
  urology9,
   urology10,
   speci1,
   speci2,
   speci3,
   speci4,
   speci5,
   speci6,
   speci7,
   speci8,
   ourd1,
   ourd2,
   ourd3,
   ourd4,
   download,
   sticker1,
   sticker2,} from './img';

import Header from "../../header"
import Footer from '../../footer';


const Videoconsult =(props)=>{
   
 
        return(
            <>
{/* Breadcrumb */}
<Header {...props}/>
<>



  <section className="container-fluid video ps-5 pe-5">
    <div className=" container video-heading py-5">
      <h3 className="fw-bold mt-5">Skip the travel!</h3>
      <h2 className="fw-bold mt-3">Take Online Doctor Consultation</h2>
      <p className="fw-bold mt-3">
        Private consultation + Audio call · Starts at just ₹199
      </p>
      <p>
        <i className="fa-solid fa-user-doctor" /> +181 Doctors are online
      </p>
      <button
        type="button"
        id="btncol"
        className="btn btn-light border border-1  border-dark"
      >
        <a className="nav-link p-0  text-secondary "> Consult Now</a>
      </button>
      <div className="d-flex mt-5">
        <p className="pe-3 ">
          <i className="fa-solid fa-medal" /> Verified Doctors
        </p>
        <p className="pe-3">
          <i className="fa-solid fa-file" /> Digital Prescription
        </p>
        <p className="pe-3">
          <i className="fa-regular fa-message" /> Free Followup
        </p>
      </div>
    </div>
  </section>
  <section className="container ">
    <div className="button-prblm my-5">
      <div className="">
        <h4>25+ Specialitie</h4>
        <p className="mb-4">Consult with top doctors across specialities</p>
      </div>
      <div className=" ">
        {/* <button type="button"><a class="nav-link p-0 px-2 py-2 "> View All Doctors</a></button> */}
        <button
          type="button"
          id="btncol"
          className="btn btn-light border border-1 rounded-1 "
        >
          <a className="nav-link p-0  text-secondary ">See All specialities</a>
        </button>
      </div>
    </div>
  </section>
  <section className="user container ms-auto">
    <div className="row">
      <div className="col-md-12">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className=" specilization text-center ">
                <div className=" speci-1  px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology1}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology2}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology3}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology4}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology5}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className=" specilization text-center ">
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology6}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology7}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology8}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology9}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" speci-1   px-5 py-5 shadow-sm border">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src={urology10}
                        className="rounded-5"
                        width="100px"
                      />
                    </div>
                    <div className="text-area">
                      <h5 className="mt-2">Urology</h5>
                      <p>$499</p>
                      <a href="#" className="nav-link fw-bold text-primary">
                        Consult <i className="fa-solid fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container ">
    <div className="button-prblm my-5">
      <div className=" ">
        <h4>Common Health Concerns</h4>
        <p className="mb-4">Consult a doctor online for any health issue</p>
      </div>
      <div className="  ">
        {/* <button type="button"><a class="nav-link p-0 px-2 py-2 "> View All Doctors</a></button> */}
        <button
          type="button"
          id="btncol"
          className="btn btn-light border border-1 rounded-1 "
        >
          <a className="nav-link p-0  text-secondary ">See All specialities</a>
        </button>
      </div>
    </div>
  </section>
  <section className="user container ms-auto">
    <div className="row">
      <div className="col-md-12">
        <div
          id="carouselExampleCaption"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className=" specilization text-start">
                <div className="border border-2 ms-2 shadow-sm ">
                  <img src={speci1} className="img-fluid" />
                  <h4 className="mt-2 ps-3">cought &amp; cold</h4>
                  <p className="ps-3"> $399</p>{" "}
                  <a
                    href="#"
                    className="nav-link fw-bold text-primary mb-3 ms-3"
                  >
                    Consult Now <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
                <div className="border border-2 ms-2 shadow-sm ">
                  <img
                    src={speci2}
                    className="img-fluid"
                  />
                  <h4 className="mt-2 ps-3"> Depression</h4>
                  <p className=" ps-3">$199</p>{" "}
                  <a
                    href="#"
                    className="nav-link fw-bold text-primary mb-3 ms-3"
                  >
                    Consult Now <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
                <div className="border border-2 ms-2 shadow-sm ">
                  <img src={speci3} className="img-fluid" />
                  <h4 className="mt-2 ps-3"> Lose weight</h4>
                  <p className=" ps-3">$499</p>{" "}
                  <a
                    href="#"
                    className="nav-link fw-bold text-primary mb-3 ms-3"
                  >
                    Consult Now <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
                <div className="border border-2 ms-2 shadow-sm ">
                  <img
                    src={speci4}
                    className="img-fluid"
                  />
                  <h4 className="mt-2 ps-3">Skin Problem</h4>
                  <p className=" ps-3">$399</p>{" "}
                  <a
                    href="#"
                    className="nav-link fw-bold text-primary mb-3 ms-3"
                  >
                    Consult Now <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className=" specilization text-start ">
                <div className="border border-2 ms-2 shadow-sm ">
                  <img
                    src={speci5}
                    className="img-fluid"
                  />
                  <h4 className="mt-2 ps-3">Skin Problem</h4>
                  <p className=" ps-3">$399</p>{" "}
                  <a
                    href="#"
                    className="nav-link fw-bold text-primary mb-3 ms-3"
                  >
                    Consult Now <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
                <div className="border border-2 ms-2 shadow-sm ">
                  <img
                    src={speci6}
                    className="img-fluid"
                  />
                  <h4 className="mt-2 ps-3"> Want to lose weight</h4>
                  <p className=" ps-3">$499</p>{" "}
                  <a
                    href="#"
                    className="nav-link fw-bold text-primary mb-3 ms-3"
                  >
                    Consult Now <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
                <div className="border border-2 ms-2 shadow-sm ">
                  <img src={speci7} className="img-fluid" />
                  <h4 className="mt-2 ps-3"> Depression</h4>
                  <p className=" ps-3">$199</p>{" "}
                  <a
                    href="#"
                    className="nav-link fw-bold text-primary mb-3 ms-3"
                  >
                    Consult Now <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
                <div className="border border-2 ms-2 shadow-sm ">
                  <img src={speci8} className="img-fluid" />
                  <h4 className="mt-2 ps-3">cought &amp; cold</h4>
                  <p className=" ps-3"> $399</p>{" "}
                  <a
                    href="#"
                    className="nav-link fw-bold text-primary mb-3 ms-3"
                  >
                    Consult Now <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container">
    <h3 className="pb-5 fw-bold">Offer's</h3>
  </section>
  <section className="container mb-5 main-banner">
    <div className="mini-banner py-5">
      <h4 className="mt-5 ms-4 fw-bold"> Download the App &amp; get</h4>
      <h4 className=" ms-4 fw-bold">$200 HealthCase </h4>
      <a href="#" className="nav-link fs-5 fw-bold mt-5 ms-4">
        Download Now <i className="fa-solid fa-arrow-right text-center" />
      </a>
    </div>
    <div className="mini-banner1 py-5">
      <h4 className="mt-5 ms-4 fw-bold"> Free Online consulation</h4>
      <h4 className=" ms-4 fw-bold">Starting at $799/month </h4>
      <a href="#" className="nav-link fs-5 fw-bold mt-5 ms-4">
        Get Membership <i className="fa-solid fa-arrow-right text-center" />
      </a>
    </div>
  </section>
  <section className="container">
    <h3 className="pb-5 fw-bold">Our Doctors</h3>
  </section>
  <section className="container">
  <div class=" user">

  <div class="user1  border border-1   ">
  <img src={ourd1} class="rounded-5" width="70px"/>
  <h6>Dr. Shelly</h6>
  <p>Dermologist 6 year Experience</p>
  <p> 4511 consults done</p>
   </div>
      <div className="user1 border border-1   ">
        <img src={ourd2} className="rounded-5" width="70px" />
        <h6>Dr. Mohit</h6>
        <p>Dermologist 6 year Experience</p>
        <p> 4511 consults done</p>
      </div>
      <div className="user1 border border-1  ">
        <img src={ourd3} className="rounded-5" width="70px" />
        <h6>Dr. Faizan</h6>
        <p>Dermologist 6 year Experience</p>
        <p> 4511 consults done</p>
      </div>
      <div className="user1 border border-1 ">
        <img src={ourd4} className="rounded-5" width="70px" />
        <h6>Dr. Shelly</h6>
        <p>Dermologist 6 year Experience</p>
        <p> 4511 consults done</p>
      </div>
    </div>
  </section>
  <section className="container-fluid work bg-dark mb-5 py-3 px-5">
    <div className="work1">
      <h2>2,00,000+</h2>
      <p>Happy Users</p>
    </div>
    <div className="work1">
      <h2>20,000+</h2>
      <p>verified doctor</p>
    </div>
    <div className="work1">
      <h2>25+</h2>
      <p>specialists</p>
    </div>
    <div className="work1">
      <h2>4.5/5</h2>
      <p>Rating</p>
    </div>
  </section>
  <section className="container">
    <h3 className="pb-5 fw-bold">Experience online doctor consultations </h3>
  </section>
  <section className="container border border-2 mb-5">
    <div className="benefit py-5">
      <div>
        <h5 className="fw-bold" />
        <h5> Top Doctors 24x7</h5>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
      </div>
      <div>
        <h5 className="fw-bold">Consult Top Doctors 24x7</h5>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
      </div>
      <div>
        <h5 className="fw-bold">Consult Top Doctors 24x7</h5>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
      </div>
    </div>
    <div className="benefit py-5">
      <div>
        <h5 className="fw-bold">Consult Top Doctors 24x7</h5>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor
        </p>
      </div>
      <div>
        <h5 className="fw-bold">Consult Top Doctors 24x7</h5>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
      </div>
      <div>
        <h5 className="fw-bold">Consult Top Doctors 24x7</h5>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
      </div>
    </div>
  </section>
  <section className="container">
    <h3 className="pb-5 fw-bold">
      What our users say about their online consultation experience
    </h3>
  </section>
  {/* <section className=" container second-user mb-5">
    <div className=" main-user border border-2 py-2 px-2 p-3 mb-5 bg-light rounded">
      <div className="d-flex user-2">
        <img src="pic/user-1.png" className="" width="70px" />
        <p className="mt-4 ms-2">
          {" "}
          <span className="fw-bold">Abay</span>
        </p>
      </div>
      <p className="mt-3">
        Access video consultation with Indias top doctorsAccess video
        consultation with Indias top doctors.
      </p>
    </div>
    <div className=" main-user border border-2 py-2 px-2  p-3 mb-5 bg-light rounded ">
      <div className="d-flex user-2">
        <img src="pic/user-2.png" className="rounded-5" width="70px" />
        <p className="mt-4 ms-2">
          {" "}
          <span className="fw-bold">faizan</span>
        </p>
      </div>
      <p className="mt-3">
        Access video consultation with Indias top doctorsAccess video
        consultation with Indias top doctors.
      </p>
    </div>
    <div className=" main-user border border-2 py-2 px-2  p-3 mb-5 bg-light rounded">
      <div className="d-flex user-2">
        <img src="pic/user-3.png" className="rounded-5" width="70px" />
        <p className="mt-4 ms-2">
          {" "}
          <span className="fw-bold">Mohit</span>
        </p>
      </div>
      <p className="mt-3">
        Access video consultation with Indias top doctorsAccess video
        consultation with Indias top doctors.
      </p>
    </div>
  </section>
  <section className="container">
    <h3 className="pb-5 fw-bold">FAQs</h3>
  </section> */}
  <section className="container mt-5">
    <div className="faq mb-5">
      <div className="faq1">
        <h5>What is online doctor consultation?</h5>
        <p>
          Online doctor consultation or online medical consultation is a method
          to connect patients and doctors virtually. It is a convenient and easy
          way to get online doctor advice using doctor apps or telemedicine apps
          or platforms, and the internet.
        </p>
      </div>
      <div className="faq1">
        <h5>What is online doctor consultation?</h5>
        <p>
          Online doctor consultation or online medical consultation is a method
          to connect patients and doctors virtually. It is a convenient and easy
          way to get online doctor advice using doctor apps or telemedicine apps
          or platforms, and the internet.
        </p>
      </div>
    </div>
    <div className="faq">
      <div className="faq1">
        <h5>What is online doctor consultation?</h5>
        <p>
          Online doctor consultation or online medical consultation is a method
          to connect patients and doctors virtually. It is a convenient and easy
          way to get online doctor advice using doctor apps or telemedicine apps
          or platforms, and the internet.
        </p>
      </div>
      <div className="faq1">
        <h5>What is online doctor consultation?</h5>
        <p>
          Online doctor consultation or online medical consultation is a method
          to connect patients and doctors virtually. It is a convenient and easy
          way to get online doctor advice using doctor apps or telemedicine apps
          or platforms, and the internet.
        </p>
      </div>
    </div>
    <div className="faq mt-5">
      <div className="faq1">
        <h5>What is online doctor consultation?</h5>
        <p>
          Online doctor consultation or online medical consultation is a method
          to connect patients and doctors virtually. It is a convenient and easy
          way to get online doctor advice using doctor apps or telemedicine apps
          or platforms, and the internet.
        </p>
      </div>
      <div className="faq1">
        <h5>What is online doctor consultation?</h5>
        <p>
          Online doctor consultation or online medical consultation is a method
          to connect patients and doctors virtually. It is a convenient and easy
          way to get online doctor advice using doctor apps or telemedicine apps
          or platforms, and the internet.
        </p>
      </div>
    </div>
  </section>
  <section className="container-fluid work bg-dark mb-5 py-5 ps-1 ">
    <div className="work1 ">
      <h2>Still delaying your health concerns ?</h2>
      <p className="text-start">Connect with India's top doctors online</p>
    </div>
    <div className="work1">
      <button
        type="button"
        id="btncol"
        className="btn btn-light border border-1 rounded-1 "
      >
        <a className="nav-link p-0 px-5  text-secondary "> View All Doctor</a>
      </button>
    </div>
  </section>
  <section className="container">
    <div className=" row download-prblm  mx-auto mt-5 px-5">
      <div className="col-12 col-lg-6 col-md-6 ">
        <img
          src={download}
          className="img-fluid w-75 "
        />
      </div>
      <div className="download  col-12 col-lg-6 col-md-6 ">
        <h2 className="fw-bold fs-3  ms-2">
          Download the<span className="text-indigo"> Jeevan Heal</span> app
        </h2>
        <h5 className="ms-2">Get $200 Health Case</h5>
        <ul className="mb-4 mt-4">
          <li className="mb-3">
            <i className="fa-solid fa-check" /> Video consult with Doctors
          </li>
          <li className="mb-3">
            <i className="fa-solid fa-check" /> Live medicine order tracking
          </li>
          <li className="mb-3">
            <i className="fa-solid fa-check" /> Exclusive healthcare packages
          </li>
          <li className="mb-3">
            <i className="fa-solid fa-check" /> Ask free questions
          </li>
        </ul>
        <div className=" btn">
          <input
            type="text"
            className="px-5 py-2 text-start mb-3"
            name="location"
            placeholder="Enter Phone number"
          />
          <button className="bg-purple mx-2 px-3 py-2 mb-3">
            Send App Link
          </button>
        </div>
        <img src={sticker1} className="img-fluid w-25 my-3 ms-3" />
        <img src={sticker2} className="img-fluid w-25 my-3 ms-3" />
      </div>
    </div>
  </section>
  <section className="container mb-5 fs-6 last">
    <p>Looking for a trusted &amp; secured online dr consultation in India?</p>
    <p>
      Consult a doctor online on Practo for any health concern. Our pool of over
      20,000 trusted doctors across 25+ specialties will ensure all your health
      queries are answered. You can get online dr advice from a Psychiatrist,
      Dermatologist, Gynecologist, Sexologist, Pediatrician, Cardiologist,
      Neurologist, Gastroenterologist, Urologist, Endocrinologist, Dentist,
      Psychologist, and many more. Video consultation with a doctor is available
      only on Practo's online doctor app.
    </p>
    <p>
      Practo serves customers in the following cities: Bangalore, Mumbai, Delhi,
      Kolkata, Hyderabad, Chennai, Pune, Ahmedabad, Gurgaon and Ghaziabad.
    </p>
    <p>
      Recently Answered Questions: Melotinin or Tryptomer 10 mg | Period issue |
      Best Anti dandruff shampoo | Vagina astrophy / clitoris atrophy | Gained
      Weight | Receding gums | Back pain | Mild mitral regurgitation
    </p>
    <p>
      Topics: Looking for weight gain tips? | Worried about chest pain? | Want
      to get rid of dark circles? | How to use prega news kit? | Need some
      weight loss advice? | Work, family or relationship stress? | Looking to
      improve digestion? | Painful kidney stones? | Need some sexual advice? |
      Want to learn how to last longer? | Seek help for lower back pain | Need
      some advice for irregular periods? | Ask how you can relieve throat pain |
      Need help with frequent urination? | Have trouble breathing? | Need some
      dental advice? | Want to get rid of acne scars? | Stomach pain bothering
      you? | Doubts about periods?
    </p>
    <p>
      Specialities: Ask A Psychiatrist | Ask A Dermatologist | Ask A Sexologist
      | Ask A Gynecologist | Ask A General Physician Doctor | Ask A Pediatrician
      Doctor | Ask An Ear Nose Throat Doctor | Ask A Kidney Urine Doctor | Ask
      An Orthopedic Doctor | Ask A Neurologist Doctor
    </p>
  </section>
</>

        {/* /Page Content */}
        <Footer {...props}/>
            </>
        );
    }


export default Videoconsult;