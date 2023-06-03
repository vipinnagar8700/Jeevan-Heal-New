import React from 'react';
import Slidersearchdr from './slidersearchdr';
import Header from '../../header';
import Footer from '../../footer';
import { product8, product9, product10, product11, product12, product13, product14, product15,ourd1,
	 ourd2,
	 ourd3,
	 ourd4,
	 download,
	 sticker1,
	 sticker2 } from './img'
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

const Producthealthcare = (props) => {

	return (


		<>
			<Header {...props} />
			<Slidersearchdr></Slidersearchdr>
			{/* Page Content */}
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
							{/* Search Filter */}
							<StickyBox offsetTop={20} offsetBottom={20}>
							<div className="card search-filter">
								<div className="card-header">
									<h4 className="card-title mb-0">Filter</h4>
								</div>
								<div className="card-body">

									<div className="filter-widget">
										<h4>Categories</h4>
										<div>
											<label className="custom_check">
												<input
													type="checkbox"
													name="gender_type"
													defaultChecked=""
												/>
												<span className="checkmark" /> Family Care
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="gender_type" />
												<span className="checkmark" /> Skin Care
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="gender_type" />
												<span className="checkmark" /> Hair Care
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="gender_type" />
												<span className="checkmark" /> Lip Care
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="gender_type" />
												<span className="checkmark" /> Men's Care
											</label>
										</div>
										<div>
											<label className="custom_check">
												<input type="checkbox" name="gender_type" />
												<span className="checkmark" /> Women's Care
											</label>
										</div>
									</div>
									<div className="btn-search">
										<button type="button" className="btn w-100">
											Search
										</button>
									</div>
								</div>
							</div>
							</StickyBox>
							{/* /Search Filter */}
						</div>
						<div className="col-md-7 col-lg-9 col-xl-9">
							<div className="row align-items-center pb-3">
								<div className="col-md-4 col-12 d-md-block d-none custom-short-by">
									<span className="sort-title">Showing 6 of 98 products</span>
								</div>
								<div className="col-md-8 col-12 d-md-block d-none custom-short-by">
									
									
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 col-lg-4 col-xl-4 product-custom">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/Pharmacy/product-description" tabIndex={-1}>
												<img
													className="img-fluid"
													alt="Product image"
													src={product8}
												/>
											</Link>
											<a
												href="#"
												className="fav-btn"
												tabIndex={-1}
											>
												<i className="far fa-bookmark" />
												</a>
										</div>
										<div className="pro-content">
											<h3 className="title pb-1">
												<Link to="/Pharmacy/product-description" tabIndex={-1}>
													Antatriene Drospiletra
												</Link>
											</h3>
											<div className="rating pb-3">
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star" />
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<div className="row align-items-center">
												<div className="col-lg-6">
													<span className="price">$10.00</span>
													<span className="price-strike">$20.00</span>
												</div>
												<div className="col-lg-6 text-end">
													<Link to="/Pharmacy/cart" className="cart-icon">
														<i className="fas fa-shopping-cart" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 product-custom">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/Pharmacy/product-description" tabIndex={-1}>
												<img
													className="img-fluid"
													alt="Product image"
													src={product9}
												/>
											</Link>
											<a
												href="#"
												className="fav-btn"
												tabIndex={-1}
											>
												<i className="far fa-bookmark" />
												</a>
										</div>
										<div className="pro-content">
											<h3 className="title pb-1">
												<Link to="/Pharmacy/product-description" tabIndex={-1}>
													Zolpimid Tramatrigine
												</Link>
											</h3>
											<div className="rating pb-3">
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star" />
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<div className="row align-items-center">
												<div className="col-lg-6">
													<span className="price">$22.00</span>
												</div>
												<div className="col-lg-6 text-end">
													<Link to="/Pharmacy/cart" className="cart-icon">
														<i className="fas fa-shopping-cart" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 product-custom">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/Pharmacy/product-description" tabIndex={-1}>
												<img
													className="img-fluid"
													alt="Product image"
													src={product10}
												/>
											</Link>
											<a
												href="#"
												className="fav-btn"
												tabIndex={-1}
											>
												<i className="far fa-bookmark" />
												</a>
										</div>
										<div className="pro-content">
											<h3 className="title pb-1">
												<Link to="/Pharmacy/product-description" tabIndex={-1}>
													Lysofranil Dorzostin
												</Link>
											</h3>
											<div className="rating pb-3">
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<span className="d-inline-block average-rating">(15)</span>
											</div>
											<div className="row align-items-center">
												<div className="col-lg-6">
													<span className="price">$10.00</span>
													<span className="price-strike">$12.00</span>
												</div>
												<div className="col-lg-6 text-end">
													<Link to="/Pharmacy/cart" className="cart-icon">
														<i className="fas fa-shopping-cart" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 product-custom">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/Pharmacy/product-description" tabIndex={-1}>
												<img
													className="img-fluid"
													alt="Product image"
													src={product11}
												/>
											</Link>
											<a
												href="#"
												className="fav-btn"
												tabIndex={-1}
											>
												<i className="far fa-bookmark" />
												</a>
										</div>
										<div className="pro-content">
											<h3 className="title pb-1">
												<Link to="/Pharmacy/product-description" tabIndex={-1}>
													Ergorinex Caffeigestin
												</Link>
											</h3>
											<div className="rating pb-3">
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<span className="d-inline-block average-rating">(15)</span>
											</div>
											<div className="row align-items-center">
												<div className="col-lg-6">
													<span className="price">$15.00</span>
												</div>
												<div className="col-lg-6 text-end">
													<Link to="/Pharmacy/cart" className="cart-icon">
														<i className="fas fa-shopping-cart" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 product-custom">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/Pharmacy/product-description" tabIndex={-1}>
												<img
													className="img-fluid"
													alt="Product image"
													src={product12}
												/>
											</Link>
											<a
												href="#"
												className="fav-btn"
												tabIndex={-1}
											>
												<i className="far fa-bookmark" />
												</a>
										</div>
										<div className="pro-content">
											<h3 className="title pb-1">
												<Link to="/Pharmacy/product-description" tabIndex={-1}>
													Acetrace Amionel
												</Link>
											</h3>
											<div className="rating pb-3">
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<span className="d-inline-block average-rating">(15)</span>
											</div>
											<div className="row align-items-center">
												<div className="col-lg-6">
													<span className="price">$7.00</span>
												</div>
												<div className="col-lg-6 text-end">
													<Link to="/Pharmacy/cart" className="cart-icon">
														<i className="fas fa-shopping-cart" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 product-custom">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/Pharmacy/product-description" tabIndex={-1}>
												<img
													className="img-fluid"
													alt="Product image"
													src={product13}
												/>
											</Link>
											<a
												href="#"
												className="fav-btn"
												tabIndex={-1}
											>
												<i className="far fa-bookmark" />
												</a>
										</div>
										<div className="pro-content">
											<h3 className="title pb-1">
												<Link to="/Pharmacy/product-description" tabIndex={-1}>
													Rapalac Neuronium
												</Link>
											</h3>
											<div className="rating pb-3">
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<span className="d-inline-block average-rating">(15)</span>
											</div>
											<div className="row align-items-center">
												<div className="col-lg-6">
													<span className="price">$16.00</span>
												</div>
												<div className="col-lg-6 text-end">
													<Link to="/Pharmacy/cart" className="cart-icon">
														<i className="fas fa-shopping-cart" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 product-custom">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/Pharmacy/product-description" tabIndex={-1}>
												<img
													className="img-fluid"
													alt="Product image"
													src={product14}
												/>
											</Link>
											<a
												href="#"
												className="fav-btn"
												tabIndex={-1}
											>
												<i className="far fa-bookmark" />
												</a>
										</div>
										<div className="pro-content">
											<h3 className="title pb-1">
												<Link to="/Pharmacy/product-description" tabIndex={-1}>
													Cordacriptine Mardipine
												</Link>
											</h3>
											<div className="rating pb-3">
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<span className="d-inline-block average-rating">(15)</span>
											</div>
											<div className="row align-items-center">
												<div className="col-lg-6">
													<span className="price">$9.00</span>
												</div>
												<div className="col-lg-6 text-end">
													<Link to="/Pharmacy/cart" className="cart-icon">
														<i className="fas fa-shopping-cart" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 product-custom">
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/Pharmacy/product-description" tabIndex={-1}>
												<img
													className="img-fluid"
													alt="Product image"
													src={product15}
												/>
											</Link>
											<a
												href="#"
												className="fav-btn"
												tabIndex={-1}
											>
												<i className="far fa-bookmark" />
												</a>
										</div>
										<div className="pro-content">
											<h3 className="title pb-1">
												<Link to="/Pharmacy/product-description" tabIndex={-1}>
													Neubide Aborase
												</Link>
											</h3>
											<div className="rating pb-3">
												<i className="fas fa-star filled" />
												<i className="fas fa-star filled" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<i className="fas fa-star" />
												<span className="d-inline-block average-rating">(15)</span>
											</div>
											<div className="row align-items-center">
												<div className="col-lg-6">
													<span className="price">$30.00</span>
												</div>
												<div className="col-lg-6 text-end">
													<Link to="/Pharmacy/cart" className="cart-icon">
														<i className="fas fa-shopping-cart" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12 text-center">
								<Link to="#" className="btn book-btn1 mb-4">
									Load More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
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
			<Footer {...props} />
		</>


	);
}

export default Producthealthcare;