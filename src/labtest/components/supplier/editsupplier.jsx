import React, { Component, useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Link, useHistory, useParams } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { edit_supplierData,updateSupplier } from "../../../PharmacyApi's/Pharmacy";
import { editLabtestLocation, updatelabtestLocation } from '../../../LabtestApi/labtest';


const EditSupplier = (props) => {
  const [category, setCategory] = useState([]);


  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/view_labtest')
      .then((res) => res.json())
      .then((json) => { console.log(json), setCategory(json.data) })
      .catch((e) => console.log(e))
  };


  let history = useHistory();
  const { p_id } = useParams();
  console.log(p_id)
  const [editlabtestData, seteditlabtestData] = useState(false);
  const { id,labtestName,city,address} = editlabtestData;
  console.log(id,labtestName,city,address, "sahi ha");
  console.log(editlabtestData, "Ya uppar vala edit profrgedchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhduct ha ");

  useEffect(() => {
    getData();


    let data = editLabtestLocation(p_id);
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
      const result = updatelabtestLocation(editlabtestData
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
      <>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-md-8">
                <h5 className="mb-3">Edit localization Details</h5>
                <form method="post" className="supplier-form">
                  <div className="row">
                  <div className="col-md-6">
                      <div className="form-focus">
                      <input type="hidden" value={id} />
                        <select className="form-control floating categorySelect" style={{ paddingTop: "0px", appearance: "auto" }}  onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData,
                              labtest: [{
                                ...editlabtestData.labtest[0],
                                category_id:e.target.value
                               }
                        
                              ]
                            });
                          }}>
                          <option value="">Labtests</option>
                          {category && category.length > 0 && category.map((userObj, index) => (
                            <option key={userObj.id} value={userObj.id}>{userObj.test_name}</option>
                          ))}
                        </select>
                       

                      </div>
                    </div>
                    

                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={city} onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData, city: e.target.value
                            })
                          }}  />
                        <label className="focus-label">
                          City <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="col-md-12">
                      <div className="form-group form-focus">
                        <textarea
                          className="form-control bg-grey floating"
                          value={address} onChange={(e) => {
                            seteditlabtestData({
                              ...editlabtestData, address: e.target.value
                            })
                          }} 
                        />
                        <label className="focus-label">
                          Address <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    
                    
                    <div className="col-md-4">
                      <button type="submit" onClick={handleUpdate}  className="btn btn-primary save-btn">
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