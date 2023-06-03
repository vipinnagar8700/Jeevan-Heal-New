import React, { useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Product1 } from "./image"
import FeatherIcon from 'feather-icons-react';
import { useFormik } from "formik";
import * as yup from 'yup';
import Cookies from "js-cookie";
import { addPurchase } from "../../../PharmacyApi's/Pharmacy";
import { Link, useHistory } from 'react-router-dom';
import { addLabtest } from '../../../LabtestApi/labtest';



const AddPurchase = (props) => {
  const history = useHistory();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/view_labtest_category')
      .then((res) => res.json())
      .then((json) => setCategory(json.data))
      .catch((e) => console.log(e))
  };


  // Validation

  const schema = yup.object().shape({
    name: yup.string().required(),
    report_time: yup.string().required(),
    categoryName: yup.string().required(),
    price: yup.string().required(),
    discount: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required(),
  })

  // end of validation



  const HandleClick = (values) => {
    console.log("Data That we Add", values.categoryName, values.name, values.price, values.image, values.report_time, values.discount, values.description);

    let token = Cookies.get('lab');
    console.log(token, "token Mil ga");
    if (token) {
      const productData = addLabtest(values);
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
      name: "",
      price: "",
      categoryName: "",
      discount: " ",
      report_time: "",
      image: "null",
      report_time: " ",
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
            {/* Add Product */}
            <div className="row">
              <div className="col-md-8">
                <h5 className="mb-3">Add Health Checkup</h5>
                <form className="supplier-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.name} name="name" onChange={handleChange} onBlur={handleBlur} />
                        <label className="focus-label">
                          Labtest Name <span className="text-danger">*</span>
                        </label>
                        {
                          touched.name && errors.name && <div className='text-danger'>{errors.name}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-focus">
                        <select className="form-control floating categorySelect" style={{ paddingTop: "0px", appearance: "auto" }} value={values.categoryName} name="categoryName" onChange={handleChange} onBlur={handleBlur} >
                          <option>Category</option>
                          {category && category.length > 0 && category.map((userObj, index) => (
                            <option key={userObj.id} value={userObj.id}>{userObj.name}</option>
                          ))}
                        </select>
                        {
                          touched.categoryName && errors.categoryName && <div className='text-danger'>{errors.categoryName}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.price} name="price" onChange={handleChange} onBlur={handleBlur} />
                        <label className="focus-label">
                          Price <span className="text-danger">*</span>
                        </label>
                        {
                          touched.price && errors.price && <div className='text-danger'>{errors.price}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" name="report_time" value={values.report_time} onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          Report Time <span className="text-danger">*</span>
                        </label>
                        {
                          touched.report_time && errors.report_time && <div className='text-danger'>{errors.report_time}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.discount} name="discount" onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          discount <span className="text-danger">*</span>
                        </label>
                        {
                          touched.discount && errors.discount && <div className='text-danger'>{errors.discount}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.description} name="description" onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          description <span className="text-danger">*</span>
                        </label>
                        {
                          touched.description && errors.description && <div className='text-danger'>{errors.description}</div>
                        }
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-photo-btn  bg-grey">
                          <div>
                            <FeatherIcon icon="upload" />
                            <p>Upload File</p>
                            {/* {img} */}
                          </div>
                          {/* <input type="file" className="upload" /> */}
                          <input
                            type="file"
                            name="image"
                            className="upload"
                            onChange={(event) => {
                              const file = event.target.files[0];
                              if (file) {
                                setFieldValue("image", file);
                              }
                            }}
                          />
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
          {/* /Add Product */}
        </div>
        {/* /Page Wrapper */}
      </>

    </>
  )
}


export default AddPurchase; 