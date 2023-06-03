import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../../assets/images/patient2.jpg';
import Header from "../../header"
import Footer from "../../footer"
import { useFormik } from 'formik';
import * as yup from 'yup'
import Bookingdata from '../../../../Context/Bookingdata';
import { bookingsubmit, singledocter } from '../../../../API/Singledoctor/docter';
import { Loginusercontext } from '../../../../Context/LoginUser';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Registerc } from '../../../../Context/Registerauth';


const Checkout = (props) => {
	const { bookingdata, setbookingdata } = props
	const [checkouta, setCheckouta] = useState([])
	const [count, setCount] = useState(0)
	const history = useHistory();
	let {pat,setpat} = useContext(Registerc);

console.log(pat,"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb sachhh")

const {patient} =pat.User;
const {fullname,email} = patient[0];
console.log("bhgfdxghbjnkml,")
if(!patient){
	return<h1>........Loading</h1>
}


	useEffect(() => {
		singledocter(bookingdata.id).then((data) => {
			console.log(data.results, "data haia");
			setCheckouta(data.results)
		})

		bookingsubmit(bookingdata,patient[0].id
			).then((data) => {
			if (data) {


				console.log(data, "ye data haiiiiiiiiiiiiiiii");


				setbookingdata({ ...bookingdata, sucess_doctername: checkouta.fullname, booking_id: data.booking_id })
				data.booking_id && history.push("/patient/booking-success");
			}
		})

	}, [count])
	console.log(checkouta);

	const HandleClick = (values) => {
		console.log("priyanka", values.email, values.name, values.phone, values.cardname, values.card_number)

		setbookingdata({ ...bookingdata, name: values.name, email: values.email, phone: values.phone, card_number: values.card_number, doctor_id: bookingdata.id, patient_id: 180 })
		setCount(count + 1)
		setbookingdata({ ...bookingdata, sucess_doctername: checkouta.fullname, booking_id: data.booking_id })

	}

	const schema = yup.object().shape({
		email: yup.string().email().required(),
		name: yup.string().required(),
		phone: yup.number().min(10).required(),
		cardname: yup.string().required(),
		card_number: yup.number().min(15).required()

	})
	if (!checkouta) {
		return <h1>Loading...</h1>
	}



	const { handleSubmit, values, handleChange, errors, handleBlur, touched, isValid, dirty } = useFormik({
		initialValues: {
			name: `${fullname}`,
			email: `${email}`,
			cardname: "",
			card_number: "",

		},
		onSubmit: HandleClick,
		validationSchema: schema,
		validateOnMount: true


	});



	const handleChangeUrl = () => {

		props.history.push("/patient/booking-success");
	}



	return (
		<div>
			<Header {...props} />
			<div className="content">
				<div className="container">
					<div className="row">
						<div className="col-md-7 col-lg-8">
							<div className="card">
								<div className="card-body">
									<form onSubmit={handleSubmit}>
										<div className="info-widget">
											<h4 className="card-title">Personal Information</h4>
											<div className="row">
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label htmlFor='name'>First Name</label>
														<input className="form-control" type="text" name="name" value={values.name} placeholder='name' onChange={handleChange} onBlur={handleBlur} />
														{
															touched.name && errors.name && <div className='text-danger'>{errors.name}</div>
														}
													</div>
												</div>
												<div className="col-md-6 col-sm-12 visibility-hidden">
													<div className="form-group card-label">
														<label htmlFor='lastname' >Last Name</label>
														<input className="form-control" type="text" name="lastname" id='lastname' onChange={handleChange} onBlur={handleBlur} value={values.lastname} />
													</div>
												</div>
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label htmlFor='email'>Email</label>
														<input className="form-control" type="email" onChange={handleChange} onBlur={handleBlur} id='email' name="email" value={values.email} />
														{
															touched.email && errors.email && <div className='text-danger'>{errors.email}</div>
														}
													</div>
												</div>
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label htmlFor='phone'>Phone</label>
														<input className="form-control" type="text" onChange={handleChange} onBlur={handleBlur} value={values.phone} id='phone' name='phone' />
														{
															touched.phone && errors.phone && <div className='text-danger'>{errors.phone}</div>
														}
													</div>
												</div>
											</div>
											<div className="exist-customer">Existing Customer?
												<Link to="/patient/checkout">Click here to login</Link></div>
										</div>
										<div className="payment-widget">
											<h4 className="card-title">Payment Method</h4>
											<div className="payment-list">
												<label className="payment-radio credit-card-option">
													<input type="radio" name="radio" defaultChecked />
													<span className="checkmark"></span>
													Credit card
												</label>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group card-label">
															<label htmlFor="cardname">Name on Card</label>
															<input className="form-control" id="cardname" type="text" onChange={handleChange} onBlur={handleBlur} name="cardname" value={values.cardname} />
															{
																touched.cardname && errors.cardname && <div className='text-danger'>{errors.cardname}</div>
															}
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group card-label">
															<label htmlFor="card_number">Card Number</label>
															<input className="form-control" id="card_number"
																placeholder="1234  5678  9876  5432" type="text" onChange={handleChange} name='card_number' onBlur={handleBlur} value={values.card_number} />
															{
																touched.card_number && errors.card_number && <div className='text-danger'>{errors.card_number}</div>
															}
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="expiry_month">Expiry Month</label>
															<input className="form-control" id="expiry_month" placeholder="MM" type="text" />
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="expiry_year">Expiry Year</label>
															<input className="form-control" id="expiry_year" placeholder="YY" type="text" />
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="cvv">CVV</label>
															<input className="form-control" id="cvv" type="text" />
														</div>
													</div>
												</div>
											</div>
											<div className="payment-list">
												<label className="payment-radio paypal-option">
													<input type="radio" name="radio" />
													<span className="checkmark"></span>
													Paypal
												</label>
											</div>

											<div className="terms-accept">
												<div className="custom-checkbox">
													<input type="checkbox" id="terms_accept" />
													<label htmlFor="terms_accept">I have read and accept <a href="#0">Terms &amp; Conditions</a></label>
												</div>
											</div>

											<div className="submit-section mt-4">
												<button type="submit"
													className="btn btn-primary submit-btn"
													disabled={!dirty && !isValid}>Confirm and Pay</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-5 col-lg-4 theiaStickySidebar">
							<div className="card booking-card">
								<div className="card-header">
									<h4 className="card-title">Booking Summary</h4>
								</div>
								<div className="card-body">
									<div className="booking-doc-info">
										<Link to="/patient/doctor-profile" className="booking-doc-img">
											<img src={`https://jeevan.studiomyraa.com/public/uploads/images/${checkouta.img}`} alt="User" />
										</Link>
										<div className="booking-info">
											<h4><Link to="/patient/doctor-profile">{checkouta.fullname}</Link></h4>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">35</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p>
											</div>
										</div>
									</div>
									<div className="booking-summary">
										<div className="booking-item-wrap">
											<ul className="booking-date">
												<li>Date <span>{bookingdata && bookingdata.date}</span></li>
												<li>Time <span>{bookingdata && bookingdata.time}</span></li>
											</ul>
											<ul className="booking-fee">
												<li>Consulting Fee <span>$100</span></li>
												<li>Booking Fee <span>$10</span></li>
												<li>Video Call <span>$50</span></li>
											</ul>
											<div className="booking-total">
												<ul className="booking-total-list">
													<li>
														<span>Total</span>
														<span className="total-cost">$160</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer {...props} />
		</div>
	);
}


export default Bookingdata(Checkout);