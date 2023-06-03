import React, { useEffect, useState } from "react";
import SidebarNav from "../sidebar";
import Select2 from "react-select2-wrapper";
import FeatherIcon from "feather-icons-react";
import axios from 'axios';
import { useParams } from "react-router-dom";
const Editbanner = () => {


// Edit Category
useEffect(() => {
    LoadJobData();
  },[])
  const {b_id} = useParams();
  const [img, setImg] = useState();
  const LoadJobData = async () => {
    const res = await axios.get(`https://jeevan.studiomyraa.com/api/edit_banner/` +b_id)
    setBanner_id(res.data.results.id);

    setImg(res.data.results.img);
  }

 // Update Category
 const handleUpdate = async (e) => {
  e.preventDefault()
    const formData = new FormData();
    formData.append("banner_id", banner_id);

    formData.append("img", img);
    const res = await fetch("https://jeevan.studiomyraa.com/api/edit_banner_action", {
       method: 'POST',
       body: formData
    })
    const data = await res.json();
    console.log(data)
    if(data.status == "success") {
      alert(data.messege)
      history.push("/admin/banner");
    }
 }


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
                            onChange={(e) => setImg(e.target.files[0])}  />
                    </div>
                   
                  </div>
                
                  <button type="submit"  onClick={handleUpdate} className="btn btn-primary save-btn">
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

export default Editbanner;
