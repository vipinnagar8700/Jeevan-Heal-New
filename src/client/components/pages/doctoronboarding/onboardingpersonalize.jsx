import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnboardingSidebar from './onboardingsidebar';
import { onelogo, oneslide, edit, up_img } from "./img"
import OnboardingPayments from "./onboardingpayments";
import OnboardingIdentity from "./onboardingidentity";
import OnboardingEmailOtp from "./onboardingemail-otp";

const onboardingpersonalize = (props) => {

  const [page, setPage] = useState(0);

 


  const FormTitles = ["Upload Identity", "Peronal Details", "Payment Details"];

  const PageDisplay = () => {
   if(page === 0) {
    return <OnboardingIdentity/>;
   }else if(page ===1){

    return <OnboardingEmailOtp /> 
    
   }else{
    return  <OnboardingPayments />
   }
  }






  return (
    <>
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

            <div className="row">
              <h3 className="mb-5 ">Registration</h3>
              <div className="col-lg-12 p-0">
                <div className="onboarding-content-box">
                  <div className="onboarding-title profile-title">

                    <h2>
                      Personalize Your Profile <span>*</span>
                    </h2>
                  </div>
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">

<div className="progressbar">
  <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}}></div>
</div>


                    <div className="header">
                    <h1>{FormTitles[page]}</h1>
                    </div>

                    <div className="body">{PageDisplay()}</div>









                      {/* <div className="col-lg-12">
                        <div className="form-group">
                          <div className="upload-pic">
                           <img src={up_img} alt="img" id="blah" />
                            <div className="upload-pics">
                              <a className="btn-profile">
                                <img src={edit} alt="" /> 
                              </a>
                              <input type="file" id="imgInp" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="photo-norms">
                            <h5>
                              Logo Should be minimum 152 * 152 Supported File
                              format JPG,PNG,SVG
                            </h5>
                          </div>
                        </div>
                      </div> */}

{/* 
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Fullname <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Fullname"
                            className="placeholder-style form-control"
                            required=""
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            id_no<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Id no"
                            className="placeholder-style form-control"
                            required=""
                            value={id_no}
                            onChange={(e) => setId_no(e.target.value)}
                          />
                        </div>
                      </div>




                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            dob <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Dob"
                            className="placeholder-style form-control"
                            required=""
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            address<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Address"
                            className="placeholder-style form-control"
                            required=""
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>






                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            City <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter City"
                            className="placeholder-style form-control"
                            required=""
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            State<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter City"
                            className="placeholder-style form-control"
                            required=""
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          />
                        </div>
                      </div>






                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Reg_no <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Reg_no"
                            className="placeholder-style form-control"
                            required=""
                            value={reg_no}
                            onChange={(e) => setReg_no(e.target.value)}

                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Holder_name<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Holder name"
                            className="placeholder-style form-control"
                            required=""
                            value={holder_name}
                            onChange={(e) => setHolder_name(e.target.value)}
                          />
                        </div>
                      </div>









                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Exp_month<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Exp month"
                            className="placeholder-style form-control"
                            required=""
                            value={exp_month}
                            onChange={(e) => setExp_month(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Exp_year<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Exp year"
                            className="placeholder-style form-control"
                            required=""
                            value={exp_year}
                            onChange={(e) => setExp_year(e.target.value
                            )}
                          />
                        </div>
                      </div>





                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            cvv<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter cvv"
                            className="placeholder-style form-control"
                            required=""
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Card_number<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Card number"
                            className="placeholder-style form-control"
                            required=""
                            value={card_number}
                            onChange={(e) => setCard_number(e.target.value)}
                          />
                        </div>
                      </div>



                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Digree<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Digree"
                            className="placeholder-style form-control"
                            required=""
                            value={digree}
                            onChange={(e) => setDigree(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            special<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter special"
                            className="placeholder-style form-control"
                            required=""
                            value={special}
                            onChange={(e) => setSpecial(e.target.value)}
                          />
                        </div>
                      </div>




                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            Prize<span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Prize"
                            className="placeholder-style form-control"
                            required=""
                            value={prize}
                            onChange={(e) => setPrize(e.target.value)}
                          />
                        </div>
                      </div> */}











                    </div>
                    {/* <div className="col-lg-12">
                        <div className="form-group">
                          <label className="onboarding-lable">
                            About you <span>*</span>
                          </label>
                          <textarea defaultValue={""} 
                            
                          />
                          
                        </div>
                      </div> */}


                    {/* <div className="col-lg-6">
                      <div className="form-group">
                        <div className="upload-pic">
                          <img src={up_img} alt="img" id="blah" />
                          <div className="upload-pics">
                            <a className="btn-profile">
                              <img src={edit} alt="" />
                            </a>
                            <input type="file" id="imgInp" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="photo-norms">
                          <h5>
                            Logo Should be minimum 152 * 152 Supported File
                            format JPG,PNG,SVG
                          </h5>
                        </div>
                      </div>
                    </div> */}




                    {/* <div className="col-lg-6">
                      <div className="form-group">
                        <div className="upload-pic">
                          <img src={up_img} alt="img" id="blah" />
                          <div className="upload-pics">
                            <a className="btn-profile">
                              <img src={edit} alt="" />
                            </a>
                            <input type="file" id="imgInp" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="photo-norms">
                          <h5>
                            Logo Should be minimum 152 * 152 Supported File
                            format JPG,PNG,SVG
                          </h5>
                        </div>
                      </div>
                    </div> */}




                  </div>
                  <div className="onboarding-btn Personalize-btn">
                    {/* <button onClick={Jobbtn}>Submit</button> */}
                    <button
                    style={{padding:" 10px 30px", outline:"none", border:"none", backgroundColor:"blue", color:"#fff", marginRight:"10PX"}}
                    disabled={page== 0}
                     onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                    >prev</button>


                    <button 
                    style={{padding:" 10px 30px", outline:"none", border:"none", backgroundColor:"blue", color:"#fff"}}
                    
                    onClick={() => {
                      if(page ==FormTitles.length -1){
                        alert("Form submitted")
                      }else{
                        setPage((currPage) => currPage + 1);
                      }
                      
                    }}
                    >{ page ==FormTitles.length -1 ? "submit" : "Next"}</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default onboardingpersonalize;
