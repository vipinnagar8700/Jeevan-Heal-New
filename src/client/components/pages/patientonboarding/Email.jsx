import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from "../../header";
import Footer from "../../footer";
import { onelogo, oneslide, edit, up_img  } from "./img";

const OnboardingEmail = (props) => {
  const [fullname, setFullname] = useState("");
  const [blood, setBlood] = useState("");

  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [age, setAge] = useState("");
  const [heart_rate, setHeart_rate] = useState("");
  const [bp, setBp] = useState("");
  const [glucose_level, setGlucose_level] = useState("");
  const [allergies, setAllergies] = useState("");
  const [pragnent, setPragnent] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [information, setInformation] = useState("");
  const [img, setSelectedImg] = useState();

  const Jobbtn = async (e) => {
    e.preventDefault();

    const tokenGet = localStorage.getItem("RegisterDoctor");
    const token = JSON.parse(tokenGet).token;
    console.log(token)

    const formData = new FormData();
    formData.append("img", img);
    formData.append("fullname", fullname);
    formData.append("blood", blood);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("age", age);
    formData.append("heart_rate", heart_rate);
    formData.append("bp", bp);
    formData.append("glucose_level", glucose_level);
    formData.append("allergies", allergies);
    formData.append("pragnent", pragnent);
    formData.append("address", address);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("information", information);
    const res = await fetch("https://jeevan.studiomyraa.com/api/add_petient", {
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
      window.alert("Form Successfully");
      console.log("Form Successfully");
      history.push("/login");
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

        </div>
        <div className="right-panel">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-0">

                <div className="right-panel-title text-center">
                  <Link to="/home">
                    {" "}
                    <img src={onelogo} alt="" />
                  </Link>
                </div>
              </div>
            
  
              <div className="col-lg-12 col-md-12">
                <div className="onboarding-content-box content-wrap">
                  <div className="onborad-set">
                    <div className="onboarding-title">
                      <h2>
                      What are your personal details? *

                       <span>*</span>
                      </h2>
                      <h6>
                      Please provide your personal information
                      </h6>
                    </div>
                    <div className="onboarding-content">
                      <div className="row">





                        <form>
                          <div className="row form-row">
                            <div className="col-12 col-md-12">
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
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" defaultValue="Richard"


                                  value={fullname}
                                  onChange={(e) => setFullname(e.target.value)}


                                />
                              </div>
                            </div>
                            {/* <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-control" defaultValue="Wilson" />
                                                </div>
                                            </div> */}
                            {/* <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Date of Birth</label>
                                                    <div className="cal-icon">
                                                        <input type="text" className="form-control datetimepicker" defaultValue="24-07-1983" />
                                                    </div>
                                                </div>
                                            </div> */}
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Blood Group</label>

                                <input type="text" className="form-control"


                                  value={blood}
                                  onChange={(e) => setBlood(e.target.value)}
                                />

                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Email ID</label>
                                <input type="email" className="form-control" defaultValue="richard@example.com"


                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Gender</label>

                                <input type="text" className="form-control"

                                  value={gender}
                                  onChange={(e) => setGender(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Weight</label>
                                <input type="text" className="form-control" defaultValue="806 Twin Willow Lane"

                                  value={weight}
                                  onChange={(e) => setWeight(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Height</label>
                                <input type="text" className="form-control" defaultValue="806 Twin Willow Lane"

                                  value={height}
                                  onChange={(e) => setHeight(e.target.value)}
                                />
                              </div>
                            </div>



                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Age</label>
                                <input type="text" className="form-control" defaultValue="806 Twin Willow Lane"

                                  value={age}
                                  onChange={(e) => setAge(e.target.value)}
                                />
                              </div>
                            </div>


                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Heart_rate</label>
                                <input type="text" className="form-control"

                                  value={heart_rate}
                                  onChange={(e) => setHeart_rate(e.target.value)}
                                />
                              </div>
                            </div>


                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Bp</label>
                                <input type="text" className="form-control"

                                  value={bp}
                                  onChange={(e) => setBp(e.target.value)}
                                />
                              </div>
                            </div>


                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Glucose_level</label>
                                <input type="text" className="form-control"

                                  value={glucose_level}
                                  onChange={(e) => setGlucose_level(e.target.value)}
                                />
                              </div>
                            </div>


                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Allegeries</label>
                                <input type="text" className="form-control"

                                  value={allergies}
                                  onChange={(e) => setAllergies(e.target.value)}
                                />
                              </div>
                            </div>



                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Pragnent</label>
                                <input type="text" className="form-control"

                                  value={pragnent}
                                  onChange={(e) => setPragnent(e.target.value)}
                                />
                              </div>
                            </div>







                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control"

                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                />
                              </div>
                            </div>








                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control"

                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                />
                              </div>
                            </div>


                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>State</label>
                                <input type="text" className="form-control"


                                  value={state}
                                  onChange={(e) => setState(e.target.value)}

                                />
                              </div>
                            </div>


                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Country</label>
                                <input type="text" className="form-control"

                                  value={country}
                                  onChange={(e) => setCountry(e.target.value)}



                                />
                              </div>
                            </div>




                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Information</label>
                                <input type="text" className="form-control"


                                  value={information}
                                  onChange={(e) => setInformation(e.target.value)}


                                />
                              </div>
                            </div>

                          </div>
                          <div className="onboarding-btn Personalize-btn">
                            <button onClick={Jobbtn}>Submit</button>
                          </div>
                        </form>







                      </div>
                    </div>
                  </div>
                  {/* <div className="onboarding-btn">
                    <Link to="/pages/patient-email-otp">Continue</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingEmail;