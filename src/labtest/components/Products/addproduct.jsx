import React, { useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Product1 } from "./image"
import FeatherIcon from 'feather-icons-react';
import { useFormik } from "formik";
import * as yup from 'yup'
import Cookies from "js-cookie";

import { addProduct } from "../../../PharmacyApi's/Pharmacy";
import { Link , useHistory} from 'react-router-dom';





const AddProduct = (props) => {
const history = useHistory();
  const [category, setCategory] = useState([])
  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/medicene_category')
      .then((res) => res.json())
      .then((json) => setCategory(json.data))
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    getData()
  }, [])




  const schema = yup.object().shape({
    productName: yup.string().required(),
    categoryName: yup.string().required(),
    price: yup.string().required(),
    quantity: yup.string().min(1).required(),
    discount: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required(),

  })

  const HandleClick = (values) => {
    console.log("Data That we Add", values.productName, values.categoryName, values.price, values.quantity, values.description, values.image, values.discount);

    let token = Cookies.get('pharmToken');
    console.log(token, "token Mil ga");
    if (token) {
      const productData = addProduct(values);
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
    // if (productData) {
    //   productData.then((data) => {
    //     console.log(data);
    //     const { token, messege } = data;
    //     Cookies.get('pharmToken', token);
    //     alert(`${messege}`);
    //     history.push("/pharmacyadmin");
    //   });
    // } else {
    //   alert("Api's Error OCCUR");
    // }
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
      productName: "",
      price: "",
      categoryName: "",
      quantity: "",
      discount: "",
      description: "",
      image: "null",
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
                <h5 className="mb-3">Add Product</h5>
                <form className="supplier-form" onSubmit={handleSubmit} enctype="multipart/form-data">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.productName} name="productName" onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          Product Name <span className="text-danger">*</span>
                        </label>
                        {
                          touched.productName && errors.productName && <div className='text-danger'>{errors.productName}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-focus">
                        <select
                          className="form-control floating categorySelect"
                          value={values.categoryName}
                          name="categoryName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ paddingTop: "0px", appearance: "auto" }}
                        >
                          <option value="">Category</option>
                          {category &&
                            category.length > 0 &&
                            category.map((userObj) => (
                              <option key={userObj.id} value={userObj.id}>
                                {userObj.name}
                              </option>
                            ))}
                        </select>
                        {touched.categoryName && errors.categoryName && (
                          <div className="text-danger">{errors.categoryName}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" name="price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur} />
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
                        <input type="text" className="form-control floating" name="quantity" value={values.quantity} onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          Quantity <span className="text-danger">*</span>
                        </label>
                        {
                          touched.quantity && errors.quantity && <div className='text-danger'>{errors.quantity}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.discount} name="discount"
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          Discount <span className="text-danger">*</span>
                        </label>
                        {
                          touched.discount && errors.discount && <div className='text-danger'>{errors.discount}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group form-focus">
                        <textarea
                          className="form-control bg-grey floating"
                          defaultValue={""}
                          value={values.description}
                          name="description"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label className="focus-label">
                          Descriptions <span className="text-danger">*</span>
                        </label>
                        {
                          touched.description && errors.description && <div className='text-danger'>{errors.description}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-photo-btn bg-grey">
                          <div>
                            <FeatherIcon icon="upload" />
                            <p>Upload File</p>
                          </div>
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
                          {/* Show error message if needed */}
                          {/* <ErrorMessage name="image" component="div" className="text-danger" /> */}
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


export default AddProduct; 