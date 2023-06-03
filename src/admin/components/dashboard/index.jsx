import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09, avatar10, avatar11, avatar12, avatar13, calender, cardio, chart, dental, flag01, flag02, flag03, flag04, flag05, neurology, ortho, urology } from '../imagepath';
import SidebarNav from '../sidebar';

import TodayAppointment from './TodayAppointment/TodayAppointment';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Dashboard = () => { 

	const options = [
		{ value: 'This Week', label: 'This Week' },
		{ value: 'This Month', label: 'This Month' },
	];
	const options1 = [
		{ value: 'Patients', label: 'Patients' },
		{ value: 'Doctors', label: 'Doctors' },
	];
	const [selectedOption, setSelectedOption] = useState(null);

	const settings = {
		loop: true,
		margin: 10,
		dots: false,
		nav: true,
		arrow: "true",
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
		],
		width: 400,
		dots: false,
		autoplay: false,
		infinite: "true",
		speed: 500,
		items: 5,
		slidestoshow: 5,
		slidestoscroll: 1,
		centerpadding: '15px',
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
				margin: 10
			},
			576: {
				items: 2,
				margin: 15
			},
			768: {
				items: 2,
				margin: 15
			},
			992: {
				items: 2,
				margin: 15
			},
			1170: {
				items: 2,
				margin: 15
			},
			1550: {
				items: 5
			}
		}

	};
	
	return (
		<>
			<div className="main-wrapper">
				<SidebarNav />
				{/* Page Wrapper */}
				<div className="page-wrapper">
					<div className="content container-fluid pb-0">
						<h4 className="mb-3">Overview</h4>
						<div className="row">
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card">
									<div className="card-body">
										<div className="dash-widget-header">
											<span className="dash-widget-icon bg-primary">
												<FeatherIcon icon="user-plus" />

											</span>
											<div className="dash-count">
												<h5 className="dash-title">Doctors</h5>
												<div className="dash-counts">
													<p>4505</p>
												</div>
											</div>
										</div>
										<p className="trade-level mb-0">
											<span className="text-danger me-1">
												<i className="fas fa-caret-down me-1" />
												1.15%
											</span>{" "}
											last week
										</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card">
									<div className="card-body">
										<div className="dash-widget-header">
											<span className="dash-widget-icon bg-blue">
												<FeatherIcon icon="users" />

											</span>
											<div className="dash-count">
												<h5 className="dash-title">Patients</h5>
												<div className="dash-counts">
													<p>2000</p>
												</div>
											</div>
										</div>
										<p className="trade-level mb-0">
											<span className="text-success me-1">
												<i className="fas fa-caret-up me-1" />
												4.5%
											</span>{" "}
											last week
										</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card">
									<div className="card-body">
										<div className="dash-widget-header">
											<span className="dash-widget-icon bg-warning">
												<img src={calender} alt="User Image" />
											</span>
											<div className="dash-count">
												<h5 className="dash-title">Appointment</h5>
												<div className="dash-counts">
													<p>4500</p>
												</div>
											</div>
										</div>
										<p className="trade-level mb-0">
											<span className="text-success me-1">
												<i className="fas fa-caret-up me-1" />
												9.65%
											</span>{" "}
											last week
										</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card">
									<div className="card-body">
										<div className="dash-widget-header">
											<span className="dash-widget-icon bg-danger">
												<img src={chart} alt="User Image" />
											</span>
											<div className="dash-count">
												<h5 className="dash-title">Revenue</h5>
												<div className="dash-counts">
													<p>$62523</p>
												</div>
											</div>
										</div>
										<p className="trade-level mb-0">
											<span className="text-danger me-1">
												<i className="fas fa-caret-up me-1" />
												40.5%
											</span>{" "}
											last week
										</p>
									</div>
								</div>
							</div>
						</div>
					
						{/* Today’s  Appointment */}
						<div className="row">
							<TodayAppointment />
						</div>
						{/* /Today’s  Appointment */}
					
						

					</div>
				</div>
				{/* /Page Wrapper */}
			</div>
		</>

	)

}

export default Dashboard; 