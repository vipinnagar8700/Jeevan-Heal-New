import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
 import FeatherIcon from 'feather-icons-react';
import {  product1, product2, product3, product4, product5, product6 } from '../imagepath';
import SidebarNav from '../sidebar';

const ProductList =(props)=>{
  const [post, setPost] = useState([])
   const getData = () => {
       fetch('https://jeevan.studiomyraa.com/api/view_product')
           .then((res) => res.json())
           .then((json) => setPost(json.data))
           .catch((e) => console.log(e))
   }

   useEffect(() => {
       getData()
   }, [])
 console.log(post)
 const [show1, setShow1] =useState(false);
 const toggleFilterMenu1 = () =>{
		console.log(show1)
		setShow1(!show1)
	}
  // Delete Category
  const [deleteStatus, setDeleteStatus] = useState([]);
  const handleDelete = (id) => {
     fetch('https://jeevan.studiomyraa.com/api/delete_product/' + id, { method: 'DELETE' })
        .then((res) => res.json())
        .then((json) => setDeleteStatus(json))
        .catch((e) => console.log(e))
  }
  if (deleteStatus.status == 'success') {
     getData()
  }
   const data = post
 
	const columns = [
        {
			name: 'Category Id',
			selector: row=>row.category_id,
			sortable: true,	
			width:"250px",			
		},
						
        {
			name: 'Product Name',			
			sortable: true,
			cell: row => <Media ><Media.Body className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#editModal" data-bs-toggle="modal"></Link><span 
			data-bs-target="#editModal"
			data-bs-toggle="modal"
			className="user-name">{row.product_name}
           </span></Media.Body></Media>,
			width:"400px",
     
		},																					
    {
			name: 'Category',
			selector: row=>row.price,
			sortable: true,	
			width:"250px",			
		},
    {
			name: 'Images',
      sortable: true,cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#patientlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.img}`} alt="User Image"/></Link></h2><Link to="#"
			data-bs-target="#Patientlist"
			data-bs-toggle="modal"
			><span className="user-name">{row.fullname}</span><br/>
           </Link></Media.Body></Media>,
			width:"300px",	
		},
    {
			name: 'Price',
			selector: row=>row.price,
			sortable: true,	
			width:"250px",			
		},		
    {
			name: 'Quantity',
      cell: row => <Media><span className={`btn btn-sm ${ row.quantity == "THERE ONLY 7" ? 'bg-danger-light' : row.Quantity == "THE ONLY 5" ? 'bg-danger-light' : row.Quantity == "THE ONLY 2" ? 'bg-danger-light':'' }`} >{row.Quantity}</span> <Media.Body> </Media.Body></Media>,
			sortable: true,	
			width:"250px",			
		},	
    {
			name: 'Discount',
			selector: row=>row.discount,
			sortable: true,	
			width:"250px",			
		},
    {
			name: 'created_at',
      cell:row=> <Media><span className="btn btn-sm bg-danger-light">{row.created_at}</span></Media>,
			sortable: true,	
			width:"250px",			
		},
     
    {
			name: 'description',
			selector: row=>row.description,
			sortable: true,	
			width:"250px",			
		},
    		       
    {
      name: 'Action',
      selector: row => row.action,
      sortable: true,
      cell: row => (<div className="actions">
         {/* <a
            className="text-black"
            href={`/pharmacyadmin/edit-product/${row.id}`}
         >
            <i className='me-1'><FeatherIcon icon="edit-3" /></i> Edit
         </a> */}
         <Link
            className="text-danger"
            data-tag="allowRowEvents"
            to="#"
            onClick={e => handleDelete(row.id)}
         >
            <i className='me-1'><FeatherIcon icon="trash-2" /></i> Delete
         </Link>
      </div>),
      width: "450px",
													 
		},
		
		
        
		
	];
	
  const onRowClicked = (row, event) => { };
	
	const tableData = {
		columns,
		data,

	};

  return(
            <>
             <SidebarNav />
             <div className="page-wrapper">
                <div className="content container-fluid">
					
					{/* <!-- Page Header --> */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">ProductNames</h3>
							</div>
						</div>
					</div>
              <div className="card-body p-0">
              <div className="table-responsive">
              <DataTableExtensions
				{...tableData}
			>
				<DataTable
      
					noHeader
					
					defaultSortField="id"
					defaultSortAsc={false}
					pagination
					highlightOnHover
          onRowClicked={onRowClicked}
				/>
			</DataTableExtensions>
                  </div>
              </div>
        </div>
        <>
  {/* Delete Modal */}
  <div
    className="modal fade"
    id="delete_modal"
    aria-hidden="true"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content doctor-profile">
        <div className="modal-header border-bottom-0 justify-content-end">
          <button
            type="button"
            className="close-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
           <div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div>
          </button>
        </div>
        <div className="modal-body">
          <div className="delete-wrap text-center">
            <div className="del-icon">
            <div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle"/></i></div>
            </div>
            <h2>Sure you Want to delete</h2>
            <p>“Products”</p>
            <div className="submit-section">
              <Link to="/pharmacyadmin/products" className="btn btn-success me-2">
                Yes
              </Link>
              <a href="#" className="btn btn-danger" data-bs-dismiss="modal">
                No
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal */}
</>

   </div>
             </>         
        );
     }
  
  
 export default ProductList; 


// import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
// import FeatherIcon from 'feather-icons-react';
// import { avatar02, product1, product2, product4, product5, sort } from "../imagepath";
// import SidebarNav from "../sidebar";
// import { Modal, Button } from 'react-bootstrap';
// import ProductListTable from './ProductListTable';
// import SelectField from "../commoncomponent/selectfield"

// const ProductList = () => {
//   const [show1, setShow1] =useState(false);
// 	const toggleFilterMenu1 = () =>{
// 		console.log(show1)
// 		setShow1(!show1)
// 	}
// 	const [state, setState] = useState([
// 		{ label: "Select Category", value: 'Select Category' },
// 		{ label: "Pharmacy", value: 'Pharmacy' },
// 		{ label: "Hospital", value: 'Hospital' },		
// 	]);
// 	const [options, setOptions] = useState( [
// 		{ label: "Select", value: '' },
// 		{ label: "Select Category", value: 'Select Category' },
// 		{ label: "surgical systems", value: 'surgical systems' },
// 		{ label: "Neuromodulation", value: 'Neuromodulation' },
// 	  ]);
// 	const [stateValue, setStateValue] = useState()
// 	const [stateOptions, setStateOptions] = useState()
	
// console.log("value", stateValue)
//   return (
//     <>
//      <SidebarNav/>
//      {/* <!-- Page Wrapper --> */}
// 			<div className="page-wrapper">
// 				<div className="content container-fluid">
				
// 					{/* <!-- Page Header --> */}
// 					<div className="page-header">
// 						<div className="row align-items-center">
// 							<div className="col-md-12 d-flex justify-content-end">
// 								<div className="doc-badge me-3">Total Products <span className="ms-1">48</span></div>
// 								<Link to="#" data-bs-toggle="modal" data-bs-target="#addproduct" className="btn btn-primary btn-add"><i className="me-1"><FeatherIcon icon="plus-square"/></i> Add New</Link>
// 							</div>
// 						</div>
// 					</div>
// 					{/* <!-- /Page Header --> */}
					
// 					{/* <!-- Product List --> */}
// 					<div className="row">
// 						<div className="col-sm-12">
// 							<div className="card">
// 								<div className="card-header border-bottom-0">
// 									<div className="row align-items-center">
// 										<div className="col">
// 											<h5 className="card-title">Product List</h5>
// 										</div>
// 										<div className="col-auto d-flex flex-wrap">
// 											<div className="form-custom me-2">
// 												<div id="tableSearch"  className="dataTables_wrapper"></div>
// 											</div>
// 											<div className="SortBy">
// 												<div className="selectBoxes order-by">
// 													<p className="mb-0" onClick={(value)=>toggleFilterMenu1()}><img src={sort} className="me-2" alt="icon"/> Order by </p>
// 													<span className="down-icon"><i> <FeatherIcon icon="chevron-down"/></i></span>
// 												</div>						  
// 												<div id="checkBox"  style={{ display: show1 ? "block" : "none" }}>
// 													<form action="/admin/product-list">
// 														<p className="lab-title">Order By </p>
// 														<label className="custom_radio w-100">
// 															<input type="radio" name="sort"/>
// 															<span className="checkmark"></span> ID
// 														</label>
// 														<label className="custom_radio w-100">
// 															<input type="radio" name="sort"/>
// 															<span className="checkmark"></span> Amount
// 														</label>
// 														<label className="custom_radio w-100 mb-4">
// 															<input type="radio" name="sort"/>
// 															<span className="checkmark"></span> Date Created
// 														</label>
// 														<p className="lab-title">Sort By</p>
// 														<label className="custom_radio w-100">
// 															<input type="radio" name="sort"/>
// 															<span className="checkmark"></span> Ascending
// 														</label>
// 														<label className="custom_radio w-100 mb-4">
// 															<input type="radio" name="sort"/>
// 															<span className="checkmark"></span> Descending
// 														</label>
// 														<button type="submit" className="btn w-100 btn-primary">Apply</button>
// 													</form>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<ProductListTable/>
// 							</div>
							
// 							<div id="tablepagination"  className="dataTables_wrapper"></div>
// 						</div>
// 					</div>
// 					{/* <!-- /Product List --> */}
// 				</div>
// 			</div>
// 			{/* <!-- /Page Wrapper --> */}
			
// 			{/* <!-- Modal --> */}
// 			<div className="modal fade contentmodal" id="addproduct" tabIndex="-1" aria-hidden="true">
// 				<div className="modal-dialog modal-dialog-centered">
// 					<div className="modal-content doctor-profile">
// 						<div className="modal-header">
// 							<h3 className="mb-0">Add Product</h3>
// 							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><i><FeatherIcon icon="x-circle"/></i></button>
// 						</div>
// 						<div className="modal-body">
// 							<form action="/admin/pharmacy-list">
// 								<div className="add-wrap">
// 									<div className="form-group form-focus">
// 										<input type="text" className="form-control floating"/>
// 										<label className="focus-label">Product Name <span className="text-danger">*</span></label>
// 									</div>
// 									<SelectField 
										
// 										options={state}
// 										errorMessage={""}
// 										error={false}
// 										label={false}
// 										placeholder={"select Category"}
// 										isRequired={true}
// 									    onChangeValue={(value) => setStateValue(value?.value) }
// 									/>

// 									<div className="form-group form-focus">
// 										<input type="text" className="form-control floating"/>
// 										<label className="focus-label">Price <span className="text-danger">*</span></label>
// 									</div>
// 									<div className="change-photo-btn">
// 										<div>
// 											<i><FeatherIcon icon= "upload"/></i>
										
// 										<p>Upload File</p></div>
// 										<input type="file" className="upload"/>
// 										<span className="file-upload-text"></span>
// 									</div>
// 									<p className="file-name text-success">Successfully Product image.jpg uploaded <Link to="#" className="text-danger"><i className="feather-x"></i></Link></p>
// 									<div className="submit-section">
// 										<button type="submit" className="btn btn-primary btn-save">Save Changes</button>
// 									</div>								
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* <!-- /Modal --> */}
			
// 			{/* <!-- Modal --> */}
// 			<div className="modal fade contentmodal" id="editModal" tabIndex="-1" aria-hidden="true">
// 				<div className="modal-dialog modal-dialog-centered">
// 					<div className="modal-content doctor-profile">
// 						<div className="modal-header">
// 							<h3 className="mb-0">Edit Product</h3>
// 							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><i><FeatherIcon icon="x-circle"/></i></button>
// 						</div>
// 						<div className="modal-body">
// 							<form action="/admin/pharmacy-list">
// 								<div className="add-wrap">
// 									<div className="form-group form-focus">
// 										<input type="text" className="form-control floating" defaultValue="Safi Natural"/>
// 										<label className="focus-label">Product Name <span className="text-danger">*</span></label>
// 									</div>
// 									<SelectField 
// 									options={options}
// 									errorMessage={""}
// 									error={false}
// 									label={false}
// 									defaultValue={{ label: "Neuromodulation", value: 'Neuromodulation' }}
// 									placeholder={"Select Category"}
// 									// isRequired={true}
// 									onChangeValue={(value) => setStateOptions(value?.value)
// 									 }
// 								/>
// 									<div className="form-group form-focus">
// 										<input type="text" className="form-control floating" defaultValue="$330.00"/>
// 										<label className="focus-label">Price <span className="text-danger">*</span></label>
// 									</div>
// 									<div className="change-photo-btn">
// 										<div>
// 											<i><FeatherIcon icon="upload"/></i>
// 										<p>Upload File</p></div>
// 										<input type="file" className="upload"/>
// 										<span className="file-upload-text"></span>
// 									</div>
// 									<p className="file-name text-success">Successfully Product image.jpg uploaded <Link to="#" className="text-danger"><i className="feather-x"></i></Link></p>
// 									<div className="submit-section">
// 										<button type="submit" className="btn btn-primary btn-save">Save Changes</button>
// 									</div>								
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* <!-- /Modal --> */}
			
// 			{/* <!-- Modal --> */}
// 			<div className="modal fade contentmodal" id="deleteModal" tabIndex="-1" aria-hidden="true">
// 				<div className="modal-dialog modal-dialog-centered">
// 					<div className="modal-content doctor-profile">
// 						<div className="modal-header border-bottom-0 justify-content-end">
// 							<button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close"><div className="del-icon"><i><FeatherIcon icon="x-circle"/></i></div></button>
// 						</div>
// 						<div className="modal-body">
// 							<div className="delete-wrap text-center">
// 								<div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle"/></i></div>
// 								<h2>Sure you Want to delete</h2>
// 								<p>“Product”</p>
// 								<div className="submit-section">
// 									<Link to="/admin/pharmacy-list" className="btn btn-success me-2">Yes</Link>
// 									<Link to="#" className="btn btn-danger" data-bs-dismiss="modal">No</Link>
// 								</div>								
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* <!-- /Modal --> */}
//    );
//    </>
//   )
// }

// export default ProductList