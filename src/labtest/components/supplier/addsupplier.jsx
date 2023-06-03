import React, { Component, useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import FeatherIcon from 'feather-icons-react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { addSupplier } from "../../../PharmacyApi's/Pharmacy";
import { addLabtestLocation } from '../../../LabtestApi/labtest';

const AddSupplier = (props) => {


  const history = useHistory();

  const [category, setCategory] = useState([]);


  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/view_labtest')
      .then((res) => res.json())
      .then((json) => { console.log(json), setCategory(json.data) })
      .catch((e) => console.log(e))
  };

  // Validation
  useEffect(() => {
    getData();


  }, []);
  const schema = yup.object().shape({
    city: yup.string().required(),
    address: yup.string().min(1).required(),
    labtestName: yup.string().required(),
  })

  // end of validation



  const HandleClick = (values) => {
    console.log("Data That we Add", values.address, values.city, values.labtestName);

    let token = Cookies.get('lab');
    console.log(token, "token Mil ga");
    if (token) {
      const productData = addLabtestLocation(values);
      console.log(productData, "Product Data");

      if (productData) {
        productData.then((data) => {
          console.log(data);
          const { message } = data;
          alert(`${message}`);
          history.push("/labtest");
        });
      } else {
        alert("Api's Error OCCUR");
      }
    } else {
      alert("Token is missing");
    }

  };

  const {
    setFieldValue,
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      city: "",
      address: "",
      labtestName: "",
    },
    validationSchema: schema,
    validateOnMount: true,
    onSubmit: HandleClick
  });


  return (
    <>
      <SidebarNav />
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Add Supplier */}
            <div className="row">
              <div className="col-md-8">
                <h5 className="mb-3">Add localization Details</h5>
                <form className="supplier-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-focus">
                        <select className="form-control floating categorySelect" style={{ paddingTop: "0px", appearance: "auto" }} value={values.labtestName} name="labtestName" onChange={handleChange} onBlur={handleBlur}>
                          <option>Labtests</option>
                          {category && category.length > 0 && category.map((userObj, index) => (
                            <option key={userObj.id} value={userObj.id}>{userObj.test_name}</option>
                          ))}
                        </select>
                        {
                          touched.labtestName && errors.labtestName && <div className='text-danger'>{errors.labtestName}</div>
                        }

                      </div>
                    </div>


                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.city} name="city" onChange={handleChange} onBlur={handleBlur} />
                        <label className="focus-label">
                          City <span className="text-danger">*</span>
                        </label>
                        {
                          touched.city && errors.city && <div className='text-danger'>{errors.city}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group form-focus">
                        <textarea
                          className="form-control bg-grey floating"
                          value={values.address} name="address" onChange={handleChange} onBlur={handleBlur}
                        />
                        <label className="focus-label">
                          Address <span className="text-danger">*</span>
                        </label>
                        {
                          touched.address && errors.address && <div className='text-danger'>{errors.address}</div>
                        }
                      </div>
                    </div>

                    <div className="col-md-4">
                      <button type="submit" className="btn btn-primary save-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Add Supplier */}
        </div>
        {/* /Page Wrapper */}
      </>

    </>
  )
}


export default AddSupplier; 