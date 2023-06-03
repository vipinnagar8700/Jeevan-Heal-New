import React, { Component, useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Link, useHistory, useParams } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { edit_supplierData,updateSupplier } from "../../../PharmacyApi's/Pharmacy";


const EditSupplier = (props) => {
  let history = useHistory();
  let { p_id } = useParams();
  console.log(p_id);

  const [editProductData, setEditProductData] = useState(false);
  console.log(editProductData, "Ya uppar vala edit product ha ");
  const { id, name, email,phone, company, address, img } = editProductData;
  console.log(id, name, email,phone, company, address, img, "DAta Got it");

  useEffect(() => {

    let data = edit_supplierData(p_id);
    if (data) {
      data.then((data) => {
        setEditProductData(data.data);
        console.log(data, "rvckjewdsvbhj");
      })
    }
  }, []);
  // if (!editProductData) {
  //   return <h1>...........Loading</h1>
  // }



  // Update purchase data
  const handleUpdate = (e) => {
    e.preventDefault();

    try {
      const result = updateSupplier(id, name, email,phone, company, address, img
      );
      result.then((data) => {
        console.log(data, "r;,mgfoirhusegisufiyfi");
        alert("Data Successfully Updated");
      })
      console.log(result, "Data Updated Successfully");

      history.push("/pharmacyadmin");
    } catch (error) {
      console.error("Error occurred while updating data:", error);
    }
  };

  return (
    <>
      <SidebarNav />
      <>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-md-8">
                <h5 className="mb-3">Edit Supplier</h5>
                <form method="post" className="supplier-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" hidden className="form-control floating" value={id} />
                        <input type="text" className="form-control floating" value={name} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, name: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Name <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" value={email} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, email: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Email <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={company} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, company: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Company <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={phone} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, phone: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Phone <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group form-focus">
                        <textarea
                          className="form-control bg-grey floating"
                          value={address} onChange={(e) => {
                            setEditProductData({
                              ...editProductData, address: e.target.value
                            })
                          }}
                        />
                        <label className="focus-label">
                          Address <span className="text-danger">*</span>
                        </label>
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
                            className="upload"
                            onChange={(e) => {
                              setEditProductData({
                                ...editProductData,
                                img: e.target.files[0]
                              });
                            }} />
                        </div>
                      </div>
                      <img style={{ height: 100, width: 100, borderRadius: 12 }} src={`/C:/Users/Vipin Nagar/Pictures/${img}`} alt="" />

                    </div>
                    <div className="col-md-4">
                      <button type="submit" onClick={handleUpdate} className="btn btn-primary save-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  )
}


export default EditSupplier; 