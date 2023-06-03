import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG010,
  IMG011,
} from "./img";
import DoctorSidebar from "../sidebar";
import Header from "../../patients/dashboard/header";
import Footer from "../../footer";
import { patient } from "../dashboard/img";

const Appointments = (props) => {
  const [post, setPost] = useState()
  const [show, setshow] = useState();

  const constructor = (props) => {
    show = {
      show: false,
    };
  };

  const handleClose = () => {
    setshow(false);
  };

  const handleShow = () => {
    setshow(true);
  };

  useEffect(() => {
    Jobbtn();
  }, [])


  const Jobbtn = async () => {
    const tokenGet = localStorage.getItem("login2");
    const token = JSON.parse(tokenGet).token;
    // const {doctor_id} = useParams();
    console.log(token)
    const res = await fetch(`https://jeevan.studiomyraa.com/api/doctor_appointments/5`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    setPost(data.data);
    console.log(data);
  };

  const Jobbtnaccept = async (booking_id, patient_id, doctor_id ) => {
    // e.preventDefault();

    const tokenGet = localStorage.getItem("login2");
    const token = JSON.parse(tokenGet).token;
    console.log(token)
    const formData = new FormData();
    formData.append("booking_id", booking_id);
    formData.append("patient_id", patient_id);
    formData.append("doctor_id", doctor_id);
    formData.append("status", "accepted");
    const res = await fetch("https://jeevan.studiomyraa.com/api/update_appointment_status", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "Success") {
      window.alert("Accept Successfully");
      console.log("Accept Successfully");
      navigate("/doctor/appointments");
    } else {
      window.alert("Accept Successfully");
      console.log("Accept Successfully");
    }
  };
  const Jobbtncancel = async (booking_id, patient_id, doctor_id ) => {
    // e.preventDefault();

    const tokenGet = localStorage.getItem("login2");
    const token = JSON.parse(tokenGet).token;
    console.log(token)
    const formData = new FormData();
    formData.append("booking_id", booking_id);
    formData.append("patient_id", patient_id);
    formData.append("doctor_id", doctor_id);
    formData.append("status", "cancel");
    const res = await fetch("https://jeevan.studiomyraa.com/api/update_appointment_status", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "Success") {
      window.alert("cancel Successfully");
      console.log("cancel Successfully");
      navigate("/doctor/appointments");
    } else {
      window.alert("cancel Successfully");
      console.log("cancel Successfully");
    }
  };

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
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Appointments
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Appointments</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="appointments">
                  <DoctorSidebar />
                </div>
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="appointments">
                {post && post.length > 0 && post.map((user, index) => (
                  <div className="appointment-list" key={index}>
                    <div className="profile-info-widget">
                      <Link
                        to="/doctor/patient-profile"
                        className="booking-doc-img"
                      >
                        <img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${user.patient[0].img}`} alt="User Image" />
                      </Link>
                      <div className="profile-det-info">
                        <h3>
                          <Link to="/doctor/patient-profile">
                            {user.name}
                          </Link>
                        </h3>
                        <div className="patient-details">
                          <h5>
                            <i className="far fa-clock"></i> {user.date}, {user.time}
                          </h5>
                          <h5>
                            <i className="fas fa-map-marker-alt"></i> {user.address}
                          </h5>
                          <h5>
                            <i className="fas fa-envelope"></i>{" "}
                            {user.email}
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-phone"></i> {user.phone}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="appointment-action">
                      <Link
                        to="#0"
                        className="btn btn-sm bg-info-light"
                        onClick={handleShow}
                      >
                        <i className="far fa-eye"></i> View
                      </Link>
                      <Link to="#0" onClick={() => Jobbtnaccept(user.booking_id, user.patient_id, user.doctor_id)} className="btn btn-sm bg-success-light">
                        <i className="fas fa-check"></i> Accept
                      </Link>
                      <Link to="#0" onClick={() => Jobbtncancel(user.booking_id, user.patient_id, user.doctor_id)} className="btn btn-sm bg-danger-light">
                        <i className="fas fa-times"></i> Cancel
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/*view modal*/}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h5 className="modal-title">Appointment Details</h5>
        </Modal.Header>
        <Modal.Body>
          <ul className="info-details">
            <li>
              <div className="details-header">
                <div className="row">
                  <div className="col-md-6">
                    <span className="title">#APT0001</span>
                    <span className="text">21 Oct 2019 10:00 AM</span>
                  </div>
                  <div className="col-md-6">
                    <div className="text-end">
                      <button
                        type="button"
                        className="btn bg-success-light btn-sm"
                        id="topup_status"
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span className="title">Status:</span>
              <span className="text">Completed</span>
            </li>
            <li>
              <span className="title">Confirm Date:</span>
              <span className="text">29 Jun 2019</span>
            </li>
            <li>
              <span className="title">Paid Amount</span>
              <span className="text">$450</span>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
      <Footer {...props} />
    </div>
  );
};

export default Appointments;
