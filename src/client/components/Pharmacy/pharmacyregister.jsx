import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";
import config from "config";
import { useFormik } from "formik";
import * as yup from 'yup'
import { object } from "prop-types";
import Cookies from "js-cookie";
import axios from "axios";
import { phar } from "../../../PharmacyApi's/Pharmacy";


const Pharmacyregister = (props) => {

  // pp 

  // const HandleClick = (values)=>{
  //   console.log(values);
  // }

  // pp 

  const history = useHistory();

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);


  const schema = yup.object().shape({
    password: yup.string().min(8).required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
   
  })


  const HandleClick = (values) => {

    console.log("priyanka regi pharmacy", values.phone, values.password, values.name, values.email,values.role)

    // let role = "pharmacy";
    let pharData = phar(values);
    if (pharData) {
      pharData.then((data) => {
        console.log(data)
        const { token, messege } = data;
        Cookies.set('pharmToken', token);
        alert(`${messege}`);
        history.push("/login");
      })

    } else {
      alert("Api's Error OCCUR");
    }

    // let userDetails = { name, email, phone, password, role };

    // const res = await fetch("https://jeevan.studiomyraa.com/api/pharmacy_registration", {
    //   method: 'POST',
    //   body: values,
    //   headers: {
    //     "Content-Type": 'application/json',
    //     "Accept": 'application/json'
    //   }
    // })
    // const data = await res.json();


    // if (data.status === 'Succes') {

    //   window.alert("Registration Successfully");
    //   Cookies.set('token', token, { expires: 7 })
    //   console.log("Registration Successfully");
    //   history.push("/login");
    // } else {
    //   window.alert("Invalid Registration");
    //   console.log("Invalid Registration");
    // }
  }


  const { handleSubmit, values, handleChange, errors, handleBlur, touched, isValid, dirty } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      role: "pharmacy"
    },
    onSubmit: HandleClick,
    validationSchema: schema,
    validateOnMount: true
  });




  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7  col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 ">
                    <div className="row">
                      <div className="col-md-3">

                        <div className="text-left dont-have  mt-10 mb-8">

                          <Link to="/login">LOGIN</Link>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="text-left dont-have1 dont-have  mt-10 mb-8">

                          <Link to="/register">SIGNUP</Link>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div className="login-right">
                      <div className="login-header">
                        <h3>

                          Pharmacy Register
                          <Link to="/doctor/doctor-register">
                            Are you a Doctor?
                          </Link>
                        </h3>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="form-group form-focus">
                          <input
                            className="form-control floating"
                            id="name"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="focus-label" htmlFor="name">
                            Name
                          </label>
                          {
                            touched.name && errors.name && <div className='text-danger'>{errors.name}</div>
                          }
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                            id="mobile"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="focus-label" htmlFor="mobile">
                            Email
                          </label>
                          {
                            touched.email && errors.email && <div className='text-danger'>{errors.email}</div>
                          }
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="number"
                            className="form-control floating"
                            id="numbers"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="focus-label" htmlFor="numbers">
                            Phone
                          </label>
                         
                        </div>


                        <input
                          type="hidden"
                          className="form-control floating"
                          name="role"


                        />






                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}

                          />
                          <label className="focus-label" htmlFor="password">
                            Create Password
                          </label>
                          {
                            touched.password && errors.password && <div className='text-danger'>{errors.password}</div>
                          }
                        </div>
                        <div className="text-end">
                          <Link to="/login" className="forgot-link">
                            Already have an account?
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Signup
                        </button>


                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default Pharmacyregister;