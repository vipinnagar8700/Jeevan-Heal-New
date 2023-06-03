import React, { useEffect, useState } from "react";
import SidebarNav from "../sidebar";
import Select2 from "react-select2-wrapper";
import FeatherIcon from "feather-icons-react";
import SelectField from "../commoncomponent/selectfield";

const Addbanner = () => {
    const [selectedImg, setSelectedImg] = useState();
    const Jobbtn = async (e) => {
        e.preventDefault();
        // let jobData = { category_id, product_name, price, quantity, discount, description, img };
        const formData = new FormData();
        formData.append("img", selectedImg);
      
        const res = await fetch("https://jeevan.studiomyraa.com/api/add_banner", {
          method: 'POST',
          body: formData
        })
        const data = await res.json();
        if (data.status === 'success') {
          window.alert(data.message);
          navigate("/");
        } else {
          window.alert("Invalid Registration");
        }
      }
    
  const [stateValue, setStateValue] = useState();

  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Add Blog */}
          <div className="row">
            <div className="col-md-12">
              <h5 className="mb-3">Add Banner</h5>
              <div className="row">
                <div className="col-md-6">
                  {/* <div className="form-group form-focus">
                  <div class="input-placeholder passcode-wrap mail-box">
                  <label className="focus-label">
                      Blog Title <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control floating" />

                    </div>
                  </div> */}
                 
                
                  <div className="form-group">
                    <div className="change-photo-btn  bg-grey">
                      <div>
                        <FeatherIcon icon="upload" />
                        <p>Upload File</p>
                      </div>
                      <input  type="file"
                            name="img"
                            className="upload"
                            onChange={(e) => setSelectedImg(e.target.files[0])}  />
                    </div>
                  </div>
                
                  <button type="submit"  onClick={Jobbtn} className="btn btn-primary save-btn">
                    Save 
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Blog */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default Addbanner;
