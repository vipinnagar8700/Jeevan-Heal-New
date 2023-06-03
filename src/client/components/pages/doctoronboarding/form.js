
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./personalinfo";
import OtherInfo from "./OtherInfo";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OnboardingSidebar from './onboardingsidebar';
import { onelogo, oneslide,file, success_tick } from "./img"





const Form = () => {
  const options = [
    { value: " Select Document Type", label: " Select Document Type" },
    { value: "PDF", label: "PDF" },
    { value: "TXT", label: "TXT" },
    { value: "JPEC", label: "JPEC" },
  ];
  const [select, setSelect] = useState(false);
  console.log(select, "select");
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      paddingBottom: 20,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#fff" : "#F5F6FA",
      height: "50px",
      borderRadius: 4,
      border: 0,
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      outline: state.isFocused && "none",
    }),
    container: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "0.5px solid #F5F6FA " : 0,
      height: "50px",
      borderRadius: 4,
    }),
    placeholder: () => ({
      marginBottom: "20px",
      paddingLeft: "10px",
    }),
    dropdownIndicator: () => ({
      marginBottom: "20px",
      paddingRight: "10px",
    }),
    input: () => ({
      marginBottom: "20px",
    }),
    singleValue: () => ({
      marginBottom: "20px",
      paddingLeft: "10px",
    }),
  };

    const [page, setPage] =useState(0)
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName:"",
        lastName:"",
        userName:"",
        nationality:"",
        other:"",
    });

    const FormTitles = ["sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
      if(page === 0){
        return <SignUpInfo formData={formData} setFormData={setFormData}/>;
      } else if(page === 1){
        return <PersonalInfo formData={formData} setFormData={setFormData}/>;
      } else {
        return <OtherInfo formData={formData} setFormData={setFormData}/>
      }
    };




    return (
      <div className="onboard-wrapper">
      <div className="left-panel">
            <div className="onboarding-logo text-center">
              <Link to="/home">
                <img
                  src={onelogo}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="onboard-img">
              <img
                src={oneslide}
                className="img-fluid"
                alt=""
              />
            </div>
            <OnboardingSidebar></OnboardingSidebar>
          </div>
    
      
      <div className="right-panel">
            <div className="container">
        <div className="form">
        <div className="onboarding-content-box">
                  <div className="onboarding-title">
                    <h2>
                      Upload identification<span>*</span>
                    </h2>
                    <h6>
                      We need to determine if an identity document is authentic
                      and belongs to you. You just need to go through some steps
                      which will help us to build a secure system together
                    </h6>
                  </div>
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">
                      {/* <div className="col-lg-12">
                        <div className="form-group">
                          <Select
                            styles={customStyles}
                            options={options}
                            placeholder="Select Document Type"
                          />
                        </div>
                      </div> */}
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Document Number"
                            className="form-control placeholder-style"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="call-option file-option ">
                            <input
                              type="file"
                              id="radio1"
                              name="selector"
                              className="option-radio"
                            />
                            <label
                              htmlFor="radio1"
                              className="call-lable verify-lable verify-file"
                            >
                              {" "}
                              <img src={file} alt="" />
                              Upload Document
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="onboarding-btn Personalize-btn">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#id-verified"
                    >
                      Continue
                    </Link>
                  </div>
                  {/* Modal */}
                  <div
                    className="modal fade fade-custom"
                    id="id-verified"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog id-upload modal-dialog-centered">
                      <div className="modal-content id-pop-content">
                        <div className="modal-header id-pop-header justify-content-center">
                          <img src={success_tick} alt="" />
                        </div>
                        <div className="modal-body id-pop-body text-center">
                          <h2>Your ID uploaded Successfully</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                    
                      </div>
                    </div>
                  </div>
                </div>
            <div className="progressbar">
                <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}}></div>
            </div>
            <div className="form-contaier">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
              
                <button className="onboarding-btn pop-btn" disabled = {page == 0} onClick={() => {setPage((currPage) => currPage - 1)}}>Prev</button>
                 
                          <button className="onboarding-btn pop-btn" onClick={() => { if (page === FormTitles.length -1){ alert("form submitted") }else {setPage((currPage) => currPage + 1)}}}>{page === FormTitles.length - 1 ? "submit": "Next"} 
                           Next
                          </button>
                    




            </div>

        </div>
        </div>
      </div>
      </div>
    )
}
export default Form