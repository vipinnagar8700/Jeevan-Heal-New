import React, { useState, useEffect } from "react";
import { Link, useHistory   } from "react-router-dom";
import OnboardingSidebar from "./onboardingsidebar";
import { onelogo, oneslide , edit, up_img } from "./img";
const onboardingphoneotp = (props) => {
  const [fullname, setFullname] = useState("");
  const [id_no, setId_no] = useState("");
  // const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  // const [about, setAbout] = useState("");
  const [reg_no, setReg_no] = useState("");
  const [holder_name, setHolder_name] = useState("");
  const [exp_month, setExp_month] = useState("");
  const [exp_year, setExp_year] = useState("");
  const [cvv, setCvv] = useState("");
  const [card_number, setCard_number] = useState("");
  const [digree, setDigree] = useState("");
  const [prize, setPrize] = useState("");
  const [special, setSpecial] = useState("");
  const [img, setSelectedImg] = useState();
  const [id_img, setSelectedId_img] = useState();
  const [reg_img, setSelectedReg_img] = useState();
  let history = useHistory();
  // const [token, setToken] = useState("");
  // const [img, setImg] = useState("");
  // const [id_img, setId_img] = useState("");
  // const [reg_img, setReg_img] = useState("");
  const Jobbtn = async (e) => {
    e.preventDefault();

   
    const tokenGet = localStorage.getItem("RegisterDoctor");
    const token = JSON.parse(tokenGet).token;
    console.log(token)

    const formData = new FormData();
    formData.append("img", img);
    formData.append("id_img", id_img);
    formData.append("reg_img", reg_img);
    formData.append("fullname", fullname);
    formData.append("id_no", id_no);
    formData.append("dob", dob);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("reg_no", reg_no);
    formData.append("holder_name", holder_name);
    formData.append("exp_month", exp_month);
    formData.append("exp_year", exp_year);
    formData.append("cvv", cvv);
    formData.append("card_number", card_number);
    formData.append("digree", digree);
    formData.append("prize", prize);
    formData.append("special", special);
    
    const res = await fetch("https://jeevan.studiomyraa.com/api/add_doctor", {
      
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "Success") {
      window.alert("Form Successfully");
      console.log("Form Successfully");
   
       history.push("/login");
    } else {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
  };

  return (
    <>
      <div className="onboard-wrapper">
        <div className="left-panel">
          <div className="onboarding-logo text-center">
            <Link to="/home">
              <img src={onelogo} className="img-fluid" alt="" />
            </Link>
          </div>
          <div className="onboard-img">
            <img src={oneslide} className="img-fluid" alt="" />
          </div>
          <OnboardingSidebar></OnboardingSidebar>
        </div>

        <div className="right-panel">
          <div className="container">
            <div className="row">
              <h3 className="mt-5 ">Registration</h3>
              <div className="col-lg-12 p-0">
                <div className="onboarding-content-box">
                  <div className="onboarding-title profile-title">
                    <h2>
                      Personalize Your Profile <span>*</span>
                    </h2>
                  </div>
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                   
                          <div className="upload-pic">
                         <img src={up_img} alt="img" id="blah" /> 
                            <div className="upload-pics">
                            <a className="btn-profile">
                              <img src={edit} alt="" />
                            </a>
                            
                              {img && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(img)}
          />
          <br />
          <button onClick={() => setSelectedImg(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImg(event.target.files[0]);
        }}
      />
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
                      </div>

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
                      </div>
                      <div className="col-lg-6">
                    <label className="onboarding-lable">
                            Upload your Post images <span>*</span>
                          </label>
                      <div className="form-group">
                        <div className="upload-pic">
                          <img src={up_img} alt="img" id="blah" /> 
                          <div className="upload-pics">
                         
                            <a className="btn-profile">
                              <img src={edit} alt="" /> 
                            </a>
                            {reg_img && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(reg_img)}
          />
          <br />
          <button onClick={() => setSelectedReg_img(null)}>Remove</button>
        </div>
      )}
                            <input type="file" id="imgInp" name="reg_img"  onChange={(e) => setSelectedReg_img(e.target.files[0])} />
                          </div>
                        </div>
                      </div>
                   
                    </div>

                    <div className="col-lg-6">
                    <label className="onboarding-lable">
                            Upload your IdProfe or Dacoment  <span>*</span>
                          </label>
                      <div className="form-group">
                        <div className="upload-pic">
                         <img src={up_img} alt="img" id="blah" /> 
                          <div className="upload-pics">
                            <a className="btn-profile">
                              <img src={edit} alt="" /> 
                            </a>
                           
                            {id_img && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(id_img)}
          />
          <br />
          <button onClick={() => setSelectedId_img(null)}>Remove</button>
        </div>
      )}
           
                            <input type="file" id="imgInp"  name="id_img"  onChange={(e) => setSelectedId_img(e.target.files[0])} />
                          </div>
                        </div>
                      </div>
                      
                    </div>
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

           
                  </div>
                 
                </div>
              </div>
            </div>
         




        
            <div className="row">
              <h3 className="mt-5 ">Payment Details</h3>
              <div className="col-lg-12 p-0">
                <div className="onboarding-content-box">
                 
                  <div className="onboarding-content passcode-wrap mail-box">
                    <div className="row">
                    

                   
                    
                    

                    
                     

                    
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
                            onChange={(e) => setExp_year(e.target.value)}
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

                 

          
                  </div>
                  <div className="onboarding-btn Personalize-btn">
                    <button onClick={Jobbtn}>Submit</button>
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

export default onboardingphoneotp;
