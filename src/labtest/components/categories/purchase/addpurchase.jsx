import React, { useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Product1 } from "./image"
import FeatherIcon from 'feather-icons-react';
import { useFormik } from "formik";
import * as yup from 'yup';
import Cookies from "js-cookie";
import { addPurchase } from "../../../PharmacyApi's/Pharmacy";
import { Link, useHistory } from 'react-router-dom';



const AddPurchase = (props) => {
  const history = useHistory();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/medicene_category')
      .then((res) => res.json())
      .then((json) => setCategory(json.data))
      .catch((e) => console.log(e))
  };
  

  // Validation
  
  const schema = yup.object().shape({
   name: yup.string().required(),
    categoryName: yup.string().required(),
    price: yup.string().required(),
    quantity: yup.string().min(1).required(),
    image: yup.string().required(),
    exp_date: yup.string().required('Expiration date is required'),

  })

  // end of validation


  
  const HandleClick = (values) => {
    console.log("Data That we Add", values.categoryName, values.name, values.price, values.quantity,  values.image, values.exp_date);

    let token = Cookies.get('pharmToken');
    console.log(token, "token Mil ga");
    if (token) {
      const productData = addPurchase(values);
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
      price: "",
      categoryName: "",
      quantity: "",
      image: "null",
      exp_date:" ",
    },
    validationSchema: schema,
    validateOnMount: true,
    onSubmit: HandleClick
  });



  // const [category_id, setCategory_id] = useState();
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [exp_date, setExp_date] = useState("");
  //  const [selectedImg, setSelectedImg] = useState();

  // const Jobbtn = async (e) => {
  //   e.preventDefault();
  //   const tokenGet = localStorage.getItem("login2");
  //   const token = JSON.parse(tokenGet).token;
  //   console.log(token)

  //   const formData = new FormData();
  //   formData.append("img", selectedImg);
  //   formData.append("category_id", category_id);
  //   formData.append("name", name);
  //   formData.append("price", price);
  //   formData.append("quantity", quantity);
  //   formData.append("exp_date", exp_date);

  //   const res = await fetch("https://jeevan.studiomyraa.com/api/add_purchase", {
  //     method: 'POST',
  //     body: formData,
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   })
  //   const data = await res.json();
  //   if (data.status === 'success') {
  //     window.alert(data.message);
  //     navigate("/");
  //   } else {
  //     window.alert("Invalid Registration");
  //   }
  // }

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
                <form  className="supplier-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={values.name} name="name" onChange={handleChange}  onBlur={handleBlur} />
                        <label className="focus-label">
                          Product Name <span className="text-danger">*</span>
                        </label>
                        {
                          touched.name && errors.name && <div className='text-danger'>{errors.name}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-focus">
                        <select className="form-control floating categorySelect" style={{paddingTop: "0px", appearance: "auto"}} value={values.categoryName} name="categoryName" onChange={handleChange}  onBlur={handleBlur} >
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
                        <input type="text" className="form-control floating" value={values.price} name="price" onChange={handleChange}  onBlur={handleBlur} />
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
                          onBlur={handleBlur}/>
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
                        <input type="text" className="form-control floating" value={values.exp_date} name="exp_date" onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                        Expire Date <span className="text-danger">*</span>
                        </label>
                        {
                          touched.exp_date && errors.exp_date && <div className='text-danger'>{errors.exp_date}</div>
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
                      <button type="submit"  className="btn btn-primary save-btn">
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