import React, { useEffect, useState } from 'react';
import loginBanner from '../../assets/images/login-banner.png';
import Logo from '../../assets/images/logo.png'
import camera from '../../assets/images/icons/camera.svg';
import male from '../../assets/images/icons/male.png'
import female from '../../assets/images/icons/female.png'
import { Link, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { aboutaction, address1action, address2action, certifiedimageaction, clinicimageaction, deliveraction, mobileaction, photoidaction, pincodeaction, timescheduleaction } from '../../../Redux/Action/pharmacy'
import { about, mobile, timeschedule } from '../../../Redux/String/contantstring';
import { pharmacyReg } from "../../../PharmacyApi's/Pharmacy";


const Pharmacyregisterstepthree = ({ alldata, deliveractiona, photoidactiona, address1a, pincodeactiona, address1actiona, address2b, address2actionb, photoIdImga, certificateImga, clinicImga, pincodea, delivera, clinicimageactiona, certifiedimageactiona, abouta, aboutactiona, mobilea, mobileactiona, timeschedulea, timescheduleactiona }) => {
	const history = useHistory();
	const handlefaddress = (e) => {
		address1actiona(e)


	}

	const handlesAddress = (e) => {

		address2actionb(e)
	}

	const handlepin = (e) => {
		pincodeactiona(e)
	}

	const handlecli = (e) => {
		clinicimageactiona(e)
	}

	const handlecer = (e) => {
		certifiedimageactiona(e)
	}

	const handlepho = (e) => {
		photoidactiona(e)
	}
	const handlemob = (e) => {
		mobileactiona(e)
	}
	const handletime = (e) => {
		timescheduleactiona(e)
	}
	const handleabout = (e) => {
		aboutactiona(e)
	}


	useEffect(() => {
		document.body.classList.add("account-page");
		return () => document.body.classList.remove("account-page");
	}, []);


	const handleSubmit = (e) => {
		e.preventDefault();
		let register = pharmacyReg(alldata);
		if (register) {
			register.then((data) => {
				console.log(data);
				const { message } = data;
				alert(`${message}`);
				history.push("/pharmacyadmin");
			});
		} else {
			alert("Api's Error OCCUR");
		}
	}
	return (
		<>
			{/* <!-- Page Content --> */}
			<div className="content login-page pt-0">
				<div className="container-fluid">

					{/* <!-- Register Content --> */}
					<div className="account-content">
						<div className="row align-items-center">
							<div className="login-right">
								<div className="inner-right-login">
									<div className="login-header">
										<div className="logo-icon">
											<img src={Logo} alt="" />
										</div>
										<div className="step-list">
											<ul>
												<li><a href="#" className="active-done">1</a></li>
												<li><a href="#" className="active-done">2</a></li>
												<li><a href="#" className="active">3</a></li>
											</ul>
										</div>
										<form id="personal_details" encType="multipart/form-data">
											<div className="pregnant-col pt-4">
												<div>
													<div className="remember-me-col d-flex justify-content-between">
														<span className="mt-1">Are you Registered</span>
														<label className="custom_check">
															<input type="checkbox" className="" id="is_registered" name="pregnant" defaultValue="1" />
															<span className="checkmark"></span>
														</label>
													</div>
												</div>
											</div>
											<div className="step-process-col mt-4">
												<div className="form-group" id="preg_div" style={{ display: "none" }}>
													<label>How Many Years you have been Registered?</label>
													<select className="form-select form-control" id="preg_term" name="preg_term" tabIndex="-1" aria-hidden="true">
														<option defaultValue="">Tell us Many Years you have been Registered</option>
														<option defaultValue="1">1</option>
														<option defaultValue="2">2</option>
														<option defaultValue="3">3</option>
														<option defaultValue="4">4</option>
														<option defaultValue="5">5</option>
														<option defaultValue="6">6</option>
														<option defaultValue="7">7</option>
														<option defaultValue="8">8</option>
														<option defaultValue="9">9</option>
														<option defaultValue="10">10</option>
													</select>
												</div>
												<div className="form-group">
													<label>Address line 1</label>
													<input type="text" placeholder="Address line 1" onChange={handlefaddress} value={address1a} className="form-control" id="address1" name="address1" />
												</div>
												<div className="form-group">
													<label>Address line 2</label>
													<input type="text" placeholder="Address line 2" onChange={handlesAddress} value={address2b} className="form-control" id="address2" defaultValue="" name="address2" />
												</div>
												<div className="form-group">
													<label>Postal/Zip code</label>
													<input type="text" placeholder="Postal/Zip code" onChange={handlepin} value={pincodea} className="form-control" />
												</div>
												<div className="form-group">
													<label>Time Shedule</label>
													<input type="text" placeholder="Time Shedule" onChange={handletime} value={timeschedulea} className="form-control" />
												</div>
												<div className="form-group">
													<label>Mobile </label>
													<input type="text" placeholder="Mobile" onChange={handlemob} value={mobilea} className="form-control" />
												</div>
												<div className="form-group">
													<label>About</label>
													<input type="text" placeholder="About" onChange={handleabout} value={abouta} className="form-control" />
												</div>
												<div className="form-group">
													<label>Certification and Employer</label>
													<div className="row justify-content-center">
														<div className="profile-pic-upload d-flex flex-wrap  justify-content-center">
															<div className="cam-col">
																<img src={camera} alt="" />
															</div>
															<span className="text-center">Upload Rigth To sell Certigifcate</span>
															<input type="file" id="right_to_sell" onChange={handlecer} value={certificateImga} name="right_to_sell" />
														</div>
														<div className="profile-pic-upload d-flex flex-wrap  justify-content-center">
															<div className="cam-col">
																<img src={camera} alt="" />
															</div>
															<span className="text-center">Upload Photo ID</span>
															<input type="file" id="photo_id" onChange={handlepho} value={photoIdImga} name="photo_id" />
														</div>
														<div className="profile-pic-upload d-flex flex-wrap  justify-content-center">
															<div className="cam-col">
																<img src={camera} alt="" />
															</div>
															<span className="text-center">Upload Clinical employment</span>
															<input type="file" onChange={handlecli} value={clinicImga} id="c_employment" name="c_employment" />
														</div>
													</div>
												</div>
												<div className="checklist-col pregnant-col">
													<div className="remember-me-col d-flex justify-content-between">
														<span className="mt-1">Do you Deliver?</span>
														<label className="custom_check">
															<input type="checkbox" className="" name="deliver" id="deliver" onChange={(e) => {
																deliveractiona(e)
															}} value="yes" />
															<span className="checkmark"></span>
														</label>
													</div>
													<div className="remember-me-col d-flex justify-content-between">
														<span className="mt-1">Do you Offer appoinment?</span>
														<label className="custom_check">
															<input type="checkbox" className="" name="appoinment" id="appoinment" defaultValue="1" />
															<span className="checkmark"></span>
														</label>
													</div>
													<div className="remember-me-col d-flex justify-content-between">
														<span className="mt-1">Do you honour free prescription?</span>
														<label className="custom_check">
															<input type="checkbox" className="" name="prescription" id="prescription" defaultValue="1" />
															<span className="checkmark"></span>
														</label>
													</div>
												</div>
											</div>
											<div className="mt-5">
												<button to="/login" onClick={handleSubmit} className="btn btn-primary w-100 btn-lg login-btn step2_submit" id="step2_button" >continue </button>
											</div>
										</form>
									</div>
								</div>
								<div className="login-bottom-copyright">
									<span>© 2022 Doccure. All rights reserved.</span>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Register Content --> */}

				</div>

			</div>
			{/* <!-- /Page Content --> */}


		</>


	);
}
const mapstatetoprops = (state) => {
	return {
		address1a: state.Pharmacy.address1,
		address2b: state.Pharmacy.address2,
		photoIdImga: state.Pharmacy.photoIdImg,
		certificateImga: state.Pharmacy.certificateImg,
		clinicImga: state.Pharmacy.clinicImg,
		pincodea: state.Pharmacy.pincode,
		delivera: state.Pharmacy.deliver,
		abouta: state.Pharmacy.about,
		timeschedulea: state.Pharmacy.timeschedule,
		mobilea: state.Pharmacy.mobile,
		alldata: state.Pharmacy

	}
}
const mapstatetodispatch = (dispatch) => {
	return {
		address1actiona: (e) => {
			dispatch(address1action(e.target.value))
		},
		address2actionb: (e) => {
			dispatch(address2action(e.target.value))
		},
		pincodeactiona: (e) => {
			dispatch(pincodeaction(e.target.value))
		},
		clinicimageactiona: (e) => {
			dispatch(clinicimageaction(e.target.files[0]))
		},
		photoidactiona: (e) => {
			dispatch(photoidaction(e.target.files[0]))
		},
		certifiedimageactiona: (e) => {
			dispatch(certifiedimageaction(e.target.files[0]))
		},
		deliveractiona: (e) => {
			dispatch(deliveraction(e.target.value))
		},
		aboutactiona: (e) => {
			dispatch(aboutaction(e.target.value))
		},
		timescheduleactiona: (e) => {
			dispatch(timescheduleaction(e.target.value))
		},
		mobileactiona: (e) => {
			dispatch(mobileaction(e.target.value))
		}


	}
}

export default connect(mapstatetoprops, mapstatetodispatch)(Pharmacyregisterstepthree);