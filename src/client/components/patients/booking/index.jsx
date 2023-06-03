import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../../assets/images/doctor-thumb-02.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Header from "../../header"
import Footer from "../../footer"
import Bookingdata from '../../../../Context/Bookingdata';
import axios from 'axios';
import { singledocter } from '../../../../API/Singledoctor/docter';
import { event } from 'jquery';
import { Appcontext } from '../../../../approuter';


const Booking = (props) => {
	
	const [singled, setsingled] = useState([])
	const { bookingdata, setbookingdata } = props
	console.log(bookingdata, "booking datatatt");
   let{isAuth, setIsAuth}=useContext(Appcontext )

   console.log(isAuth,"rimkiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
	const handleDateChange = (event) => {
		const { value } = event.target;
		setbookingdata({ ...bookingdata, date: value })
	}
const handleTimeChange=(event)=>{
	const { value } = event.target;
	setbookingdata({...bookingdata,time:value})
}
console.log(bookingdata.time);

	useEffect(() => {
		singledocter(bookingdata.id).then((data) => {
			setsingled(data.results)
			console.log(data.results
			);
		})
	}, [])
	if (!singled) {
		return <h1>Loading.......</h1>
	}
	console.log(singled, "sssss");
	return (
		<div>
			<Header {...props} />
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/home">
											Home</Link>
									</li>
									<li className="breadcrumb-item active" aria-current="page">Booking</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Booking</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<div className="booking-doc-info">
										<Link to="/patient/doctor-profile" className="booking-doc-img">
											<img src={`https://jeevan.studiomyraa.com/public/uploads/images/${singled.img}`} alt="User" />
										</Link>
										<div className="booking-info">
											<h4>
												<Link to="/patient/doctor-profile">
													{singled.fullname
													}</Link>
											</h4>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">35</span>
											</div>
											<p className="text-muted mb-0"><i className="fas fa-map-marker-alt"></i> {singled.city
											}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-4 col-md-6">
									<h4 className="mb-1">11 November 2019</h4>
									<p className="text-muted">Monday</p>
								</div>
								<div className="col-12 col-sm-8 col-md-6 text-sm-end">
									<div className="datepicker-icon">
										<i className="far fa-calendar-alt me-2"></i>
										<DateRangePicker
											initialSettings={{
												endDate: new Date('2020-08-11T12:30:00.000Z'),
												ranges: {
													'Last 30 Days': [
														new Date('2020-07-12T04:57:17.076Z'),
														new Date('2020-08-10T04:57:17.076Z')
													],
													'Last 7 Days': [
														new Date('2020-08-04T04:57:17.076Z'),
														new Date('2020-08-10T04:57:17.076Z')
													],
													'Last Month': [
														new Date('2020-06-30T18:30:00.000Z'),
														new Date('2020-07-31T18:29:59.999Z')
													],
													'This Month': [
														new Date('2020-07-31T18:30:00.000Z'),
														new Date('2020-08-31T18:29:59.999Z')
													],
													Today: [
														new Date('2020-08-10T04:57:17.076Z'),
														new Date('2020-08-10T04:57:17.076Z')
													],
													Yesterday: [
														new Date('2020-08-09T04:57:17.076Z'),
														new Date('2020-08-09T04:57:17.076Z')
													]
												},
												startDate: new Date('2020-08-10T04:30:00.000Z'),
												timePicker: false
											}}
										>
											<input
												className="form-control col-4 input-range"
												type="text"
												custom="input-range"
											/>
										</DateRangePicker>
										<i className="fas fa-chevron-down ms-2"></i>
									</div>
									{/* 
					  <div className="bookingrange btn btn-white btn-sm mb-3">
						 <i className="far fa-calendar-alt me-2"></i>
						 <span></span>
						 <i className="fas fa-chevron-down ms-2"></i>
					  </div>
					  */}
								</div>
							</div>
							<div className="card booking-schedule schedule-widget">
								<div className="schedule-header">
									<div className="row">
										<div className="col-md-12">
											<div className="day-slot">
											<label className='fw-bold' htmlFor='date'>Select Date</label>
												<input
												className='form-control'
												type='date'
													id="date-input"
													value={bookingdata.date}
													onChange={handleDateChange} />
												{/* <ul>
								  <li className="left-arrow">
									 <Link to="#0">
									 <i className="fa fa-chevron-left"></i>
									 </Link>
								  </li>
								  <li>
									 <span>Mon</span>
									 <span className="slot-date">11 Nov <small className="slot-year">2019</small></span>
								  </li>
								  <li>
									 <span>Tue</span>
									 <span className="slot-date">12 Nov <small className="slot-year">2019</small></span>
								  </li>
								  <li>
									 <span>Wed</span>
									 <span className="slot-date">13 Nov <small className="slot-year">2019</small></span>
								  </li>
								  <li>
									 <span>Thu</span>
									 <span className="slot-date">14 Nov <small className="slot-year">2019</small></span>
								  </li>
								  <li>
									 <span>Fri</span>
									 <span className="slot-date">15 Nov <small className="slot-year">2019</small></span>
								  </li>
								  <li>
									 <span>Sat</span>
									 <span className="slot-date">16 Nov <small className="slot-year">2019</small></span>
								  </li>
								  <li>
									 <span>Sun</span>
									 <span className="slot-date">17 Nov <small className="slot-year">2019</small></span>
								  </li>
								  <li className="right-arrow">
									 <Link to="#0">
									 <i className="fa fa-chevron-right"></i>
									 </Link>
								  </li>
							   </ul> */}
											</div>
										</div>
									</div>
								</div>
								<div className="schedule-cont">
									<div className="row">
										<div className="col-md-12">
											<div className="time-slot">
												<label  className='fw-bold' htmlFor='time'>Select Time</label>
												<input
												className='form-control'
												 type='time'
													id="date-input"
													value={bookingdata.time}
													onChange={handleTimeChange} />
												{/* <ul className="clearfix">
								  <li>
									 <Link className="timing" to="#0">
									 <span>9:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>10:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>11:00</span> <span>AM</span>
									 </Link>
								  </li>
								  <li>
									 <Link className="timing" to="#0">
									 <span>9:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>10:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>11:00</span> <span>AM</span>
									 </Link>
								  </li>
								  <li>
									 <Link className="timing" to="#0">
									 <span>9:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>10:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>11:00</span> <span>AM</span>
									 </Link>
								  </li>
								  <li>
									 <Link className="timing" to="#0">
									 <span>9:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>10:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>11:00</span> <span>AM</span>
									 </Link>
								  </li>
								  <li>
									 <Link className="timing" to="#0">
									 <span>9:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing selected" to="#0">
									 <span>10:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>11:00</span> <span>AM</span>
									 </Link>
								  </li>
								  <li>
									 <Link className="timing" to="#0">
									 <span>9:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>10:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>11:00</span> <span>AM</span>
									 </Link>
								  </li>
								  <li>
									 <Link className="timing" to="#0">
									 <span>9:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>10:00</span> <span>AM</span>
									 </Link>
									 <Link className="timing" to="#0">
									 <span>11:00</span> <span>AM</span>
									 </Link>
								  </li>
							   </ul> */}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
							</div>
							<div className="submit-section proceed-btn text-end">
								<Link to="/patient/checkout" className="btn btn-primary submit-btn">
									Proceed to Pay</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer {...props} />
		</div>
	);

}


export default Bookingdata(Booking);