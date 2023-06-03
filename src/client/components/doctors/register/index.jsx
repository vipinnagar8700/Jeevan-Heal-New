import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import loginBanner from "../../../assets/images/login-banner.png";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import config from "config";

const DoctorRegister = (props) => {
  const history = useHistory();

  useEffect(() => {
		document.body.classList.add("account-page");
	 
		return () => document.body.classList.remove("account-page");
		}, []);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Doctor");
    const signUp = async (e) =>{
      e.preventDefault();
      let userDetails={name, phone, email, password, role};
  
      const res = await fetch("https://jeevan.studiomyraa.com/api/doctor_registration", {
        method: 'POST',
        body:JSON.stringify(userDetails),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      })
      const data = await res.json();
      console.log(data);
      if (data.status === 'Succes') {
        window.alert("Registration Successfully");
        console.log("Registration Successfully");
        localStorage.setItem("RegisterDoctor", JSON.stringify(data));
        history.push("/pages/onboarding-phone-otp");
      } else {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }
    }

  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Login Banner"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 ">
                  <div className="row">
                      <div className="col-md-3">
                      
                  <div className="text-left dont-have  mt-10 mb-8">

                 <Link to="/login">LOGIN</Link>
                      </div>
                     </div>            
                         <div className="col-md-9">
                  <div className="text-left dont-have1 dont-have  mt-10 mb-8">

                  <Link to="/register">SIGNUP</Link>
                   </div>
                   </div>
                   </div>
                   <br></br>
                   <div className="login-right">
                    <div className="login-header">
                      <h3>
                        Doctor Register{" "}
                        <Link to="/register">Not a Doctor?</Link>
                      </h3>
                    </div>

                    <form>
                      <div className="form-group form-focus">
                        <input type="text" name="name" value={name}
                          onChange={(e)=> setName(e.target.value)} className="form-control floating" />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="form-group form-focus">
                        <input  id="mobile" 
                          value={phone}
                          onChange={(e)=> setPhone(e.target.value)} type="text" className="form-control floating" />
                        <label className="focus-label">Mobile Number</label>
                      </div>
                      <div className="form-group form-focus">
                        <input  id="mobile" 
                          value={email}
                          onChange={(e)=> setEmail(e.target.value)} type="text" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"  value={password}
                          onChange={(e)=> setPassword(e.target.value)}
                        />
                        <label className="focus-label">Create Password</label>
                      </div>
                  
                      <input
                          type="hidden"
                          className="form-control floating"  value={role}/>
                     
               
                      <div className="text-end">
                        <Link to="/login" className="forgot-link">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"  onClick={signUp}
                       
                      >
                        Signup
                      </button>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#0" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1"></i> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#0" className="btn btn-google w-100">
                            <i className="fab fa-google me-1"></i> Login
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default DoctorRegister;
