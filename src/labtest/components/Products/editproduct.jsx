import React, { useState, useEffect } from "react";
import SidebarNav from '../sidebar';
import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { LoadJobData, updateProduct } from "../../../PharmacyApi's/Pharmacy";

const EditProduct = (props) => {
  let history = useHistory();

  const { p_id } = useParams();
  // alert(`${p_id}`); 
  const [category, setCategory] = useState([]);
  const [editProductData, setEditProductData] = useState(false);
  console.log(editProductData, "Ya uppar vala edit product ha ");
  const { id, category_id, product_name, price, quantity, description, discount, img } = editProductData;
  console.log(id, category_id, product_name, price, quantity, description, discount, img, "sahi ha");

  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/medicene_category')
      .then((res) => res.json())
      .then((json) => setCategory(json.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getData();

    let data = LoadJobData(p_id);
    if (data) {
      data.then((data) => {
        setEditProductData(data);
        console.log(data);
      })
    }
  }, []);
  if (!editProductData) {
    return <h1>...........Loading</h1>
  }



  // Update Category
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const result = await updateProduct(product_name, category_id, price, quantity, discount, description, img,p_id
        );
      console.log(result, "Data Updated Successfully");
      alert("Data Successfully Updated");
      history.push("/pharmacyadmin");
    } catch (error) {
      console.error("Error occurred while updating data:", error);
    }
  };


  return (
    <>
      <SidebarNav />
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Edit Product */}
            <div className="row">
              <div className="col-md-8">
                <h5 className="mb-3">Edit Product</h5>
                <form method="post" className="supplier-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="hidden" value={id} />
                        <input type="text" className="form-control floating" value={product_name} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, product_name: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Product Name <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-focus">
                        <select className="form-control floating categorySelect" style={{ paddingTop: "0px", appearance: "auto" }} value={category_id} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, category_id: e.target.value
                          })
                        }} >
                          <option >Category</option>
                          {category && category.length > 0 && category.map((userObj, index) => (
                            <option key={userObj.id} value={userObj.id}>{userObj.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={price} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, price: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Price <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={quantity} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, quantity: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Quantity <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={discount} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, discount: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Discount <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group form-focus">
                        <textarea
                          className="form-control bg-grey floating"
                          value={description} onChange={(e) => {
                            setEditProductData({
                              ...editProductData, description: e.target.value
                            })
                          }}
                        />
                        <label className="focus-label">
                          Descriptions <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-photo-btn  bg-grey">
                          <div>
                            <FeatherIcon icon="upload" />

                            <p>Upload File</p>
                          </div>
                          <input
                            type="file"
                            className="upload"
                            onChange={(e) => {
                              setEditProductData({
                                ...editProductData,
                                img: e.target.files[0]
                              });
                            }}
                          />


                        </div>
                      </div>
                    </div>
                    <img style={{height:100,width:100,borderRadius:12}} src={`https://jeevan.studiomyraa.com/public/uploads/images/${img}`} alt="" />
                    <div className="col-md-4">
                      <button type="submit" onClick={handleUpdate} className="btn btn-primary save-btn">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Edit Product */}
        </div>
        {/* /Page Wrapper */}
      </>

    </>
  )
}


export default EditProduct; 