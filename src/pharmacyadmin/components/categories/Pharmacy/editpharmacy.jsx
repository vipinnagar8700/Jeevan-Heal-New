import React, { useState, useEffect } from "react";
import SidebarNav from '../sidebar';
import FeatherIcon from 'feather-icons-react';
import axios from 'axios';
import { useParams, useHistory   } from "react-router-dom";

const Editpharmacy =(props)=>{
  let history = useHistory();
  const [category, setCategory] = useState([])
  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/medicene_category')
      .then((res) => res.json())
      .then((json) => setCategory(json.data))
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    getData()
  }, [])
  const [id, setId] = useState('');
  const [product_id, setProduct_id] = useState();
  const [product_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState();

   // Edit Category
   useEffect(() => {
    LoadJobData();
  },[])
  const {p_id} = useParams();
  const LoadJobData = async () => {
    const res = await axios.get(`https://jeevan.studiomyraa.com/api/edit_product/` +p_id)
    setProduct_id(res.data.results.id);
    setProduct_name(res.data.results.product_name);
    setPrice(res.data.results.price);
    setQuantity(res.data.results.quantity);
    setDiscount(res.data.results.discount);
    setDescription(res.data.results.description);
    setSelectedImg(res.data.results.img);
  }

 // Update Category
 const handleUpdate = async (e) => {
  e.preventDefault()
    const formData = new FormData();
    formData.append("product_id", product_id);
    formData.append("product_name", product_name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("discount", discount);
    formData.append("description", description);
    formData.append("img", img);
    const res = await fetch("https://jeevan.studiomyraa.com/api/edit_product_action", {
       method: 'POST',
       body: formData
    })
    const data = await res.json();
    console.log(data)
    if(data.status == "success") {
      alert(data.messege)
      history.push("/pharmacyadmin/products");
    }
 }

        return(
            <>
             <SidebarNav />
             <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <div className="content container-fluid">
                {/* Edit Product */}
                <div className="row">
                  <div className="col-md-8">
                    <h5 className="mb-3">Edit Product</h5>
                    <form method="post" className="supplier-form">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                          <input type="hidden" value={id} onChange={(e) => setId(e.target.value)}  />
                            <input type="text" className="form-control floating" value={product_name} onChange={(e) => setProduct_name(e.target.value)} />
                            <label className="focus-label">
                              Product Name <span className="text-danger">*</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-focus">
                          <select className="form-control floating categorySelect" style={{paddingTop: "0px", appearance: "auto"}} onChange={(e) => setCategory_id(e.target.value)} >
                          <option value="Category">Category</option>
                          {category && category.length > 0 && category.map((userObj, index) => (
                            <option key={userObj.id} value={userObj.id}>{userObj.name}</option>
                          ))}
                        </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating"  value={price} onChange={(e) => setPrice(e.target.value)} />
                            <label className="focus-label">
                              Price <span className="text-danger">*</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            <label className="focus-label">
                              Quantity <span className="text-danger">*</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                            <label className="focus-label">
                              Discount <span className="text-danger">*</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group form-focus">
                            <textarea
                              className="form-control bg-grey floating"
                              defaultValue={""}
                              value={description}
                          onChange={(e) => setDescription(e.target.value)}
                            />
                            <label className="focus-label">
                              Descriptions <span className="text-danger">*</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="change-photo-btn  bg-grey">
                              <div>
                                <FeatherIcon icon="upload"/>
                                <p>Upload File</p>
                              </div>
                              <input  onChange={(e) => setImg(e.target.files[0])} type="file" className="upload" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <button type="submit" onClick={handleUpdate} className="btn btn-primary save-btn">
                          Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Edit Product */}
            </div>
            {/* /Page Wrapper */}
          </>

             </>         
        )
     }
  
  
 export default Editpharmacy; 