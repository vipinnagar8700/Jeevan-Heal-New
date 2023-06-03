import React, { useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Product1 } from "./image"
import FeatherIcon from 'feather-icons-react';
import SelectField from '../commoncomponent/selectfield';
import { Link, useHistory, useParams } from "react-router-dom";
import { edit_PurchaseData, updatePurchase } from "../../../PharmacyApi's/Pharmacy";
import { editLabtest, updatelabtest } from '../../../LabtestApi/labtest';
const EditPurchase = (props) => {

  const [category, setCategory] = useState([]);


  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/view_labtest_category')
      .then((res) => res.json())
      .then((json) => setCategory(json.data))
      .catch((e) => console.log(e))
  };


  let history = useHistory();
  const { p_id } = useParams();
  console.log(p_id)
  const [editlabtestData, seteditlabtestData] = useState(false);
  const { id, test_name, category_id, price, report_time, description, img, discount } = editlabtestData;
  console.log(id, test_name, category_id, price, report_time, description, img, discount, "sahi ha");
  console.log(editlabtestData, "Ya uppar vala edit profrgedchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhduct ha ");

  useEffect(() => {
    getData();


    let data = editLabtest(p_id);
    console.log(data, "all edit data ");
    if (data) {
      data.then((data) => {
        seteditlabtestData(data.data);
        console.log(data, "Data Mil gaya111111111111");
      })
    }
  }, []);
  if (!editlabtestData) {
    return <h1>...........Loading</h1>
  }



  // Update purchase data
  const handleUpdate = (e) => {
    e.preventDefault();

    try {
      const result = updatelabtest(p_id, test_name, category_id, price, report_time, discount, description, img
      );
      result.then((data) => {
        console.log(data, "r;,mgfoirhusegisufiyfi");
        alert("Data Successfully Updated");
      })
      console.log(result, "Data Updated Successfully");

      history.push("/labtest");
    } catch (error) {
      console.error("Error occurred while updating data:", error);
    }
  };

  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Edit Health Checkup</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/labtest">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Edit Health Checkup</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body custom-edit-service">
                  {/* Add Medicine */}
                  <form className="supplier-form" >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input type="hidden" value={id} />
                          <input type="text" className="form-control floating" value={test_name} onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData, test_name: e.target.value
                            })
                          }} />
                          <label className="focus-label">
                            Labtest Name <span className="text-danger">*</span>
                          </label>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-focus">
                          <select className="form-control floating categorySelect" style={{ paddingTop: "0px", appearance: "auto" }} value={category_id} onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData, category_id: e.target.value
                            })
                          }}>
                            <option>Category</option>
                            {category && category.length > 0 && category.map((userObj, index) => (
                              <option key={userObj.id} value={userObj.id}>{userObj.name}</option>
                            ))}
                          </select>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input type="text" className="form-control floating" value={price} onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData, price: e.target.value
                            })
                          }} />
                          <label className="focus-label">
                            Price <span className="text-danger">*</span>
                          </label>

                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input type="text" className="form-control floating" name="discount" value={discount} onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData, discount: e.target.value
                            })
                          }} />
                          <label className="focus-label">
                            Discount <span className="text-danger">*</span>
                          </label>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input type="text" className="form-control floating" value={description} onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData, description: e.target.value
                            })
                          }} />
                          <label className="focus-label">
                            Description <span className="text-danger">*</span>
                          </label>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-focus">
                          <input type="text" className="form-control floating" name="report_time" value={report_time} onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData, report_time: e.target.value
                            })
                          }} />
                          <label className="focus-label">
                            Report Time<span className="text-danger">*</span>
                          </label>

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
                              className="upload"
                              onChange={(e) => {
                                seteditlabtestData({
                                  ...editlabtestData,
                                  img: e.target.files[0]
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <img style={{ height: 100, width: 100, borderRadius: 12 }} src={`/C:/Users/Vipin Nagar/Pictures/${img}`} alt="" />
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
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  )
}


export default EditPurchase; 