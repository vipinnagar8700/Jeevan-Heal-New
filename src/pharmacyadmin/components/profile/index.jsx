import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { favicon, logo } from '../imagepath';
import SidebarNav from '../sidebar';
import IMG01 from '../../assets/img/profiles/avatar-01.jpg'
import SelectField from '../commoncomponent/selectfield';
import { Tabs, Tab } from 'react-bootstrap';

import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";



import { avatar02 } from "../imagepath"
import { editProfile, updateProfile } from "../../../PharmacyApi's/Pharmacy";

const Profile = () => {
  let history = useHistory();
  const [pro, setpro] = useState(false);
  const { id, name, lname, email, about, address, address1, img, address2, certificate_img, city, clinic_img, company, deliver, dob, gender, mob, photo_id, pincode, state, time_sedule } = pro;
  console.log(id, name, lname, email, about, address, address1, img, address2, certificate_img, city, clinic_img, company, deliver, dob, gender, mob, photo_id, pincode, state, time_sedule,"All Data")
  const [stater, setState] = useState([
    { label: "California", value: 'California' },
    { label: "Tasmania", value: 'Tasmania' },
    { label: "Auckland", value: 'Auckland' },
    { label: "Marlborough", value: 'Marlborough' },
  ]);
  const [options, setOptions] = useState([
    { label: "Select", value: '' },
    { label: "India", value: 'India' },
    { label: "London", value: 'London' },
    { label: "France", value: 'France' },
    { label: "USA", value: 'USA' },
  ]);
  const [stateValue, setStateValue] = useState()
  useEffect(() => {
    editProfile().then((res) => {
      setpro(res.data)
      console.log(res.data, "alkjhgfdshjklkjhgchj")
    })
  }, [])
  console.log(id, name);


  // Update purchase data
  const handleUpdate = (e) => {
    e.preventDefault();

    try {
      const result = updateProfile(id, name, lname, img, email, about, address, address1, address2, certificate_img, city, clinic_img, company, deliver, dob, gender, mob, photo_id, pincode, state, time_sedule
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
    <div>
      <SidebarNav />
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Profile Information */}

            {/* Settings Menu */}
            <div className="row">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-body pt-0">
                    <div className="card-header">
                      <h5 className="card-title">Profile Seting</h5>
                    </div>
                    <form>
                      <div className="settings-form">
                        <div className="form-group">
                          <label>
                            Name <span className="star-red">*</span>
                          </label>
                          <input
                            type="hidden" value={id}
                            className="form-control"
                            placeholder="Enter Full Name"
                          />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Full Name"
                            value={name} onChange={(e) => {
                              setpro({
                                ...pro, name: e.target.value
                              })
                            }}
                          />
                        </div>



                        <div className="settings-form">
                          <div className="form-group">
                            <label>
                              Address Line 1 <span className="star-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address Line 1"
                              value={address1} onChange={(e) => {
                                setpro({
                                  ...pro, address1: e.target.value
                                })
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label>
                              Address Line 2 <span className="star-red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address Line 2" value={address2} onChange={(e) => {
                                setpro({
                                  ...pro, address2: e.target.value
                                })
                              }}
                            />
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  City <span className="star-red">*</span>
                                </label>
                                <input type="text" className="form-control" value={city} onChange={(e) => {
                                  setpro({
                                    ...pro, city: e.target.value
                                  })
                                }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <SelectField
                                options={options}
                                errorMessage={""}
                                error={false}
                                label={"Stater/Province"}
                                placeholder={"select"}
                                isRequired={true}
                                onChangeValue={(value) =>
                                  setStateValue(value?.value)}
                              />
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  Zip/Postal Code <span className="star-red">*</span>
                                </label>
                                <input type="text" className="form-control" value={pincode} onChange={(e) => {
                                  setpro({
                                    ...pro, pincode: e.target.value
                                  })
                                }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  Mobile No <span className="star-red">*</span>
                                </label>
                                <input type="text" className="form-control" value={mob} onChange={(e) => {
                                  setpro({
                                    ...pro, mob: e.target.value
                                  })
                                }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  Deliver <span className="star-red">*</span>
                                </label>
                                <input type="text" className="form-control" value={deliver} onChange={(e) => {
                                  setpro({
                                    ...pro, deliver: e.target.value
                                  })
                                }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  About <span className="star-red">*</span>
                                </label>
                                <input type="text" className="form-control" value={about} onChange={(e) => {
                                  setpro({
                                    ...pro, about: e.target.value
                                  })
                                }} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>
                                  Time Shedule <span className="star-red">*</span>
                                </label>
                                <input type="text" className="form-control" value={time_sedule} onChange={(e) => {
                                  setpro({
                                    ...pro, time_sedule: e.target.value
                                  })
                                }} />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <p className="settings-label">
                              Clinic Image  <span className="star-red">*</span>
                            </p>
                            <div className="settings-btn">
                              <input
                                type="file"
                                  onChange={(e) => {
                                  setpro({
                                    ...pro, clinic_img: e.target.files[0]
                                  })
                                }}
                              />
                              <label htmlFor="file" className="upload">
                                <FeatherIcon icon="upload" />
                              </label>
                            </div>


                          </div>
                          <div className="form-group">
                            <p className="settings-label">
                              Certificate Image  <span className="star-red">*</span>
                            </p>
                            <div className="settings-btn">
                              <input
                                type="file"
                                onChange={(e) => {
                                  setpro({
                                    ...pro, certificate_img: e.target.files[0]
                                  })
                                }}
                              />
                              <label htmlFor="file" className="upload">
                                <FeatherIcon icon="upload" />
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <p className="settings-label">
                              Profile Image  <span className="star-red">*</span>
                            </p>
                            <div className="settings-btn">
                              <input
                                type="file"
                                  onChange={(e) => {
                                  setpro({
                                    ...pro, img: e.target.files[0]
                                  })
                                }}
                              />
                              <label htmlFor="file" className="upload">
                                <FeatherIcon icon="upload" />
                              </label>
                            </div>

                          </div>
                          <div className="form-group">
                            <p className="settings-label">
                              Photo ID  <span className="star-red">*</span>
                            </p>
                            <div className="settings-btn">
                              <input
                                type="file"
                                  onChange={(e) => {
                                  setpro({
                                    ...pro, photo_id: e.target.files[0]
                                  })
                                }}
                              />
                              <label htmlFor="file" className="upload">
                                <FeatherIcon icon="upload" />
                              </label>
                            </div>

                          </div>

                          <div className="form-group mb-0">
                            <div className="settings-btns">
                              <button type="submit" onClick={handleUpdate} className="btn btn-orange">
                                Update
                              </button>
                              <button type="submit" className="btn btn-grey">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>

            {/* /Profile Information */}
          </div>
        </div>
        {/* /Page Wrapper */}
      </>

    </div>

  );
}


export default Profile;