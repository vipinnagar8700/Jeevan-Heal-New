import React, { Component } from 'react';
import SidebarNav from '../sidebar';
import FeatherIcon from 'feather-icons-react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { addSupplier } from "../../../PharmacyApi's/Pharmacy";

const AddSupplier = (props) => {


  const history = useHistory();


  // Validation

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    company: yup.string().required(),
    address: yup.string().min(1).required(),
    img: yup.string().required(),

  })

  // end of validation



  const HandleClick = (values) => {
    console.log("Data That we Add", values.name, values.phone, values.email, values.address, values.company, values.img);

    let token = Cookies.get('pharmToken');
    console.log(token, "token Mil ga");
    if (token) {
      const productData = addSupplier(values);
      console.log(productData, "Product Data");

      if (productData) {
        productData.then((data) => {
          console.log(data);
          const { message } = data;
          alert(`${message}`);
          history.push("/pharmacyadmin");
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
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      img: "null",
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
                <h5 className="mb-3">Add Supplier</h5>
                <form className="supplier-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.name} name="name" onChange={handleChange} onBlur={handleBlur} />
                        <label className="focus-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        {
                          touched.name && errors.name && <div className='text-danger'>{errors.name}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} />
                        <label className="focus-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        {
                          touched.email && errors.email && <div className='text-danger'>{errors.email}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.phone} name="phone" onChange={handleChange} onBlur={handleBlur} />
                        <label className="focus-label">
                          Phone <span className="text-danger">*</span>
                        </label>
                        {
                          touched.phone && errors.phone && <div className='text-danger'>{errors.phone}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.company} name="company" onChange={handleChange} onBlur={handleBlur} />
                        <label className="focus-label">
                          Company <span className="text-danger">*</span>
                        </label>
                        {
                          touched.company && errors.company && <div className='text-danger'>{errors.company}</div>
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
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-photo-btn  bg-grey">
                          <div>
                            <i><FeatherIcon icon="upload" /></i>
                            <p>Upload File</p>
                          </div>
                          <input type="file"
                            name="img"
                            className="upload"
                            onChange={(event) => {
                              const file = event.target.files[0];
                              if (file) {
                                setFieldValue("img", file);
                              }
                            }} />
                        </div>
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