import React, { useEffect, useState } from 'react';
import loginBanner from '../../assets/images/login-banner.png';
import Logo from '../../assets/images/logo.png'
import camera from '../../assets/images/icons/camera.svg';
import male from '../../assets/images/icons/male.png'
import female from '../../assets/images/icons/female.png'
import { countrydata, statedata } from '../countryState';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cityaction, stateaction } from '../../../Redux/Action/labtest';


const Pharmacyregistersteptwo = () => {
	const [city, setcity] = useState(null);
	const [state, setstate] = useState(" ");
	let dispatch = useDispatch()
	console.log(state, "lkjhsgcxvbdcxvcx wdx")
	let newcity;
	const handlestate = (e) => {

		const Astate = e.target.value;
		newcity = statedata[Astate
		]
		setstate(Astate)
		setcity([...newcity])
		console.log(city, "djjdjdjdjjd");
		console.log(Astate, "kjhxgcdgvhjm");
		dispatch(stateaction(Astate))
	}
	const handlecity = (e) => {
		const Acity = e.target.value;

		dispatch(cityaction(Acity))
	}
	console.log(state, "kojihuegcdxhjkhgv")

	useEffect(() => {


		document.body.classList.add("account-page");

		return () => document.body.classList.remove("account-page");
	}, []);

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
												<li><a href="#" className="active">2</a></li>
												<li><a href="#">3</a></li>
											</ul>
										</div>
										<form method="post">
											<h3 className="my-4">Your Location</h3>
											<div className="form-group">
												<label>Select State</label>
												<select className="form-select form-control" onChange={handlestate} id="bp" name="bp" tabindex="-1" aria-hidden="true">
													<option value="">Select Your State</option>
													{
														countrydata && countrydata.length > 0 && countrydata.map((s) => {
															return (
																<option value={s}>{s}</option>
															)
														})
													}
												</select>
											</div>
											<div className="form-group">
												<label>Select City</label>
												<select className="form-select form-control" onChange={handlecity} id="heart_rate" name="heart_rate" tabindex="-1" aria-hidden="true">
													<option value="">Select Your City</option>
													{
														city && city.length > 0 && city.map((c) => {
															return (
																<option value={c}>{c}</option>
															)
														})
													}
												</select>
											</div>

											<div className="mt-5">
												<Link to="/Labtest/labtest-registerstep-3" className="btn btn-primary w-100 btn-lg login-btn step5_submit">Continue</Link>
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


export default Pharmacyregistersteptwo;