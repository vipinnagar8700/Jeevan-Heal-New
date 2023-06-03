import React, { useState,useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Product1 } from "./image"
import FeatherIcon from 'feather-icons-react';
import SelectField from '../commoncomponent/selectfield';
import { Link,useHistory,useParams } from "react-router-dom";
import { edit_PurchaseData,updatePurchase } from "../../../PharmacyApi's/Pharmacy";
const EditPurchase = (props) => {

  const [category, setCategory] = useState([]);

  
  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/medicene_category')
      .then((res) => res.json())
      .then((json) => setCategory(json.data))
      .catch((e) => console.log(e))
  };
  

  let history = useHistory();
  const { p_id } = useParams();
  console.log(p_id)
  const [editProductData, setEditProductData] = useState(false);
  const { id, name,category_id,price,quantity,exp_date, img } = editProductData;
  console.log(id, name,category_id,price,quantity,exp_date, img, "sahi ha");
  console.log(editProductData, "Ya uppar vala edit profrgedchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhduct ha ");

  useEffect(() => {
  getData();


    let data = edit_PurchaseData(p_id);
    console.log(data)
    if (data) {
      data.then((data) => {
        setEditProductData(data.data);
        console.log(data,"Data Mil gaya111111111111");
      })
    }
  }, []);
  if (!editProductData) {
    return <h1>...........Loading</h1>
  }


  
  // Update purchase data
  const handleUpdate =  (e) => {
    e.preventDefault();

    try {
      const result = updatePurchase(name, category_id, price, quantity,exp_date, img, p_id
        );
   result.then((data)=>{
    console.log(data,"r;,mgfoirhusegisufiyfi");
    alert("Data Successfully Updated");
   })
      console.log(result, "Data Updated Successfully");
    
      history.push("/pharmacyadmin");
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
                <h3 className="page-title">Edit Purchase</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/pharmacyadmin">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Edit Purchase</li>
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
                  <form  className="supplier-form" >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                      <input type="hidden" value={id} />
                        <input type="text" className="form-control floating"  value={name} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, name: e.target.value
                          })
                        }}  />
                        <label className="focus-label">
                          Product Name <span className="text-danger">*</span>
                        </label>
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-focus">
                        <select className="form-control floating categorySelect" style={{paddingTop: "0px", appearance: "auto"}} value={category_id} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, category_id: e.target.value
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
                          setEditProductData({
                            ...editProductData, price: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                          Price <span className="text-danger">*</span>
                        </label>
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" name="quantity" value={quantity} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, quantity: e.target.value
                          })
                        }}  />
                        <label className="focus-label">
                          Quantity <span className="text-danger">*</span>
                        </label>
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={exp_date} onChange={(e) => {
                          setEditProductData({
                            ...editProductData, exp_date: e.target.value
                          })
                        }} />
                        <label className="focus-label">
                        Expire Date <span className="text-danger">*</span>
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
                              setEditProductData({
                                ...editProductData,
                                img: e.target.files[0]
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <img style={{height:100,width:100,borderRadius:12}} src={`/C:/Users/Vipin Nagar/Pictures/${img}`} alt="" />
                    <div className="col-md-4">

                      <button type="submit" onClick={handleUpdate}  className="btn btn-primary save-btn">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
                  {/* /Add Medicine */}
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