import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import FeatherIcon from 'feather-icons-react';

import { Modal } from 'react-bootstrap';
import { icon01, icon02, icon03, product1, product2, product3, product4, product5, sort } from "../imagepath";

import SidebarNav from '../sidebar';
import { updatelabtest, updatelabtestcategory } from '../../../LabtestApi/labtest';


const Categories = (props) => {

   const [count, setCount] = useState(0);

   const [show1, setShow1] = useState(false);
   const toggleFilterMenu1 = () => {
      console.log(show1)
      setShow1(!show1)
   }

   const history = useHistory();

   // Add Category
   const [id, setId] = useState('');
   const [name, setName] = useState("");
   const[testName,settestName] = useState(" ");
   const [price,setprice] = useState(' ');
   const [discount,setdiscount] = useState(' ');
   const [des,setdes] = useState(' ');


   
   const Jobbtn = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("id", id);
      const res = await fetch("https://jeevan.studiomyraa.com/api/add_labtest_category", {
         method: 'POST',
         body: formData
      })
      const data = await res.json();
      if (data.status === 'success') {
         window.alert(data.message);
         setCount(count + 1)
         //   getData()

      } else {
         window.alert("Invalid Registration");
      }
   }

   // View Category

   useEffect(() => {
      getData()
   }, [count])
   const [post, setPost] = useState([])
   const getData = () => {
      fetch('https://jeevan.studiomyraa.com/api/view_labtest_category')
        .then((res) => res.json())
        .then((json) => {
          console.log(json.data,"anjkhgdchjm");
          setPost(json.data);
        })
        .catch((e) => console.log(e));
    }
    

   // Edit Category
   const handleEdit = async (category_id) => {
      console.log(category_id,"Id mil gi jkbvsdbes")
      const res = await axios.get(`https://jeevan.studiomyraa.com/api/edit_labtest_category/${category_id}`)
      setId(res.data.data.id);
      setName(res.data.data.name);
      
      console.log(res,"fagsgs")
   }

   // Update Category
   const handleUpdate = (id, e) => {
      e.preventDefault();
      updatelabtestcategory(id, name).then((result) => {
         console.log(result, "jlllllllllllllrjjjjjjjjjjjjjjjjjjjjjjjj");
         setCount(count + 1)
      })

      console.log(count, "vipin ka count");
   }
   // Delete Category
   const [deleteStatus, setDeleteStatus] = useState([]);
   const handleDelete = (id) => {
      setCount(count + 1)
      fetch('https://jeevan.studiomyraa.com/api/delete_labtest_category/' + id, { method: 'DELETE' })
         
   }
   if (deleteStatus.status == 'success') {
      getData()
   }

   const data = post
   const columns = [
      {
         name: 'id',
         selector: row => row.id,
         sortable: true,
         width: "250px",
      },

      {
         name: 'name',
         sortable: true,
         selector: row => row.name,
         width: "400px",

      },
      
      {
         name: 'created_at',
         sortable: true,
         selector: row => row.created_at,
         width: "400px",

      },

      {
         name: 'Action',
         selector: row => row.action,
         sortable: true,
         cell: row => (<div className="actions">
            <a
               className="text-black"
               href="#edit_specialities_details"
               data-bs-toggle="modal"
               onClick={e => handleEdit(row.id)}
            >
               <i className='me-1'><FeatherIcon icon="edit-3" /></i> Edit
            </a>
            <Link
               className="text-danger"
               data-tag="allowRowEvents"
               to="#"
               onClick={e => handleDelete(row.id)}
            >
               <i className='me-1'><FeatherIcon icon="trash-2" /></i> Delete
            </Link>
         </div>),
         width: "250px",

      },
   ];

   const onRowClicked = (row, event) => { };

   const tableData = {
      columns,
      data,

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
                     <div className="col-sm-7 col-auto">
                        <h3 className="page-title">Diagnostic Test</h3>
                     </div>
                     <div className="col-sm-5 col">
                        <a
                          href="#Add_Specialities_details"
                           data-bs-toggle="modal"
                           className="btn btn-primary float-end d-flex justify-content-between align-items-center"
                        >
                           {/* <FeatherIcon icon="plus-square" /> */}
                           <i className="me-1"><FeatherIcon icon="plus-square" /> </i>Add New
                        </a>
                     </div>
                  </div>
               </div>
               {/* /Page Header */}
               <div className="row">
                  <div className="col-sm-12">
                     <div className="card">
                        <div className="card-header border-bottom-0">
                           <div className="row align-items-center">
                              <div className="col">
                                 <h5 className="card-title">Diagnostic Test List</h5>
                              </div>
                              <div className="col-auto custom-list d-flex">
                                 <div className="form-custom me-2">
                                    <div id="tableSearch" className="dataTables_wrapper" />
                                 </div>
                                 <div className="SortBy">
                                    <div className="selectBoxes order-by">
                                       <p className="mb-0" onClick={(value) => toggleFilterMenu1()}><img src={sort} className="me-2" alt="icon" /> Order by </p>
                                       <span className="down-icon">
                                          <FeatherIcon icon="chevron-down" />
                                          {/* <i className="feather-chevron-down" /> */}
                                       </span>
                                    </div>
                                    <div id="checkBox" style={{ display: show1 ? "block" : "none" }}>
                                       <form action="/labtest/categories">
                                          <p className="lab-title">Order By </p>
                                          <label className="custom_radio w-100">
                                             <input type="radio" name="sort" />
                                             <span className="checkmark" /> ID
                                          </label>
                                          <label className="custom_radio w-100">
                                             <input type="radio" name="sort" />
                                             <span className="checkmark" /> Amount
                                          </label>
                                          <label className="custom_radio w-100">
                                             <input type="radio" name="sort" />
                                             <span className="checkmark" /> Date Created
                                          </label>
                                          <p className="lab-title">Sort By</p>
                                          <label className="custom_radio w-100">
                                             <input type="radio" name="sort" />
                                             <span className="checkmark" /> Ascending
                                          </label>
                                          <label className="custom_radio w-100">
                                             <input type="radio" name="sort" />
                                             <span className="checkmark" /> Descending
                                          </label>
                                          <button type="submit" className="btn w-100 btn-primary">
                                             Apply
                                          </button>
                                       </form>
                                    </div>
                                 </div>
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
                     <div id="tablepagination" className="dataTables_wrapper" />
                  </div>
               </div>
            </div>
         </div>
         {/* /Page Wrapper */}
         {/* Add Modal */}
         <div
            className="modal fade"
            id="Add_Specialities_details"
            aria-hidden="true"
            role="dialog"
         >
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content doctor-profile">
                  <div className="modal-header">
                     <h3 className="mb-0">Add Diagnostic Test</h3>
                     <button
                        type="button"
                        className="close-btn"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     >
                        <div className="del-icon"><i><FeatherIcon icon="x-circle" /></i></div>
                     </button>
                  </div>
                  <div className="modal-body">
                     <form>
                        <div className="row form-row">
                           <div className="col-12">
                              <div className="form-group">
                                 <label>Category</label>
                                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                              </div>
                           </div>
                        </div>
                        <button type="submit"
                           data-bs-dismiss="modal"
                           aria-label="Close" onClick={Jobbtn} className="btn btn-primary w-100">
                           Save Changes
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* /ADD Modal */}
         {/* Edit Details Modal */}
         <div
            className="modal fade"
            id="edit_specialities_details"
            aria-hidden="true"
            role="dialog"
         >
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content doctor-profile">
                  <div className="modal-header">
                     <h5 className="modal-title">Edit Diagnostic Test</h5>
                     <button
                        type="button"
                        className="close-btn"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     >
                        <i className=''><FeatherIcon icon="x-circle" /></i>
                     </button>
                  </div>
                  <div className="modal-body">
                     <form>
                        <div className="row form-row">
                           <div className="col-12">
                              <div className="form-group">
                                 <label>Category</label>
                                 <input type="hidden" value={id} onChange={(e) => setId(e.target.value)} />
                                 <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Cardiology"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                 />
                              </div>
                           </div>
                        </div>
                        <button type="submit" onClick={(e) => handleUpdate(id, e)}
                           data-bs-dismiss="modal"
                           aria-label="Close" className="btn btn-primary w-100">
                           Save Changes
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* /Edit Details Modal */}
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
                        <i className='del-icon'><FeatherIcon icon="x-circle" /></i>
                     </button>
                  </div>
                  <div className="modal-body">
                     <div className="delete-wrap text-center">
                        <div className="del-icon">
                           <i className='delete-icon'><FeatherIcon icon="x-circle" /></i>
                        </div>
                        <h2>Sure you Want to delete</h2>
                        <p>“Category”</p>
                        <div className="submit-section">
                           <Link to="/labtest/categories" className="btn btn-success me-2">
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
   )
}


export default Categories; 