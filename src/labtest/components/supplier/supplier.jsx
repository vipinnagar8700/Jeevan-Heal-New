import React, { Component, useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import SidebarNav from '../sidebar';
import { Modal } from 'react-bootstrap';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Productss, Product1, Product2, Product3, Product4, Product5, Product6 } from "./image"
import FeatherIcon from 'feather-icons-react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { deleteSupplier } from '../../../PharmacyApi\'s/Pharmacy';

const Supplier = (props) => {
  let history = useHistory();
  const[count,setcount] = useState(0);
  const [post, setPost] = useState([])
  const getData = () => {
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://jeevan.studiomyraa.com/api/view_labtest_location", requestOptions)
      .then((res) => res.json())
      .then((json) => { console.log(json,"sxjcbhdnsx "), setPost(json.data) })
      .catch((e) => console.log(e))
  }
  
  // Delete Category
  const [deleteStatus, setDeleteStatus] = useState([]);
  const handleDelete = (id) => {
     fetch('https://jeevan.studiomyraa.com/api/delete_labtest_location/' + id, { method: 'DELETE' })
        .then((res) => res.json())
        .then((json) => setDeleteStatus(json))
        .catch((e) => console.log(e))
  }
  if (deleteStatus.status == 'success') {
     getData()
  }

  useEffect(() => {
    getData()

  }, [count])
  console.log(post)
  const [show1, setShow1] = useState(false);
  const toggleFilterMenu1 = () => {
    console.log(show1)
    setShow1(!show1)
  }

  // Delete Data
  



  // Table Start
  const data = post
  const columns = [
    {
      name: 'ID',
      selector: row => <Media>{row.id}</Media>,
      sortable: true,
      width: "200px",
    },
    {
      name: 'Test ID',
      selector: row => <Media>{row.labtest[0].test_name}</Media>,
      sortable: true,
      width: "200px",
    },
   
    {
      name: 'City',
      selector: row => row.city,
      sortable: true,
      width: "250px",
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true,
      width: "300px",
    },
    
    {
      name: 'Action',
      selector: row => row.action,
      sortable: true,
      cell: row => (<div className="actions">
        <Link to={`/labtest/edit-localization-details/${row.id}`} className="text-black">
          <i className="me-1"><FeatherIcon icon="edit-3" /></i> Edit
        </Link>
        <Link
          className="text-danger"
          data-tag="allowRowEvents"
          to="#"
          onClick={e => handleDelete(row.id)}


        >
          <i className="me-1"><FeatherIcon icon="trash-2" /></i> Delete
        </Link>
      </div>),
      width: "250px",

    },




  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "80px", // override the row height
        borderBottomColor: "#e6e9f4",
        fontWeight: 500,
      },
    },
    headCells: {
      style: {
        paddingLeft: "1.5rem", // override the cell padding for head cells
        paddingRight: "12px",
        fontWeight: 500,
        fontSize: "14px",
        color: "#333333",
        minHeight: "30px",
        backgroundColor: "#E5E7F8",
        borderRadious: "9px",
        "&&:hover": {
          color: "#333333",
        },
      },
    },
    cells: {
      style: {
        paddingLeft: "1.5rem", // override the cell padding for data cells
        paddingRight: "12px",
        paddingBottom: "10px",
      },
    },
  };

  const onRowClicked = (row, event) => { };
  const tableData = {
    columns,
    data,
    customStyles,
  };

  return (
    <>
      <SidebarNav />
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-sm-7 col-auto">
                  <h3 className="page-title mb-0">localization Details</h3>
                </div>
                
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                {/* Recent Orders */}
                <div className="card">
                  <div className="card-header border-bottom-0">
                    <div className="row align-items-center">
                      <div className="col">
                        <h5 className="card-title">localization Details</h5>
                      </div>
                      <div className="col-auto custom-list d-flex">
                        <div className="form-custom me-2">
                          <div id="tableSearch" className="dataTables_wrapper" />
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
                          customStyles={customStyles}
                          noHeader

                          defaultSortField="id"
                          defaultSortAsc={false}
                          pagination
                          highlightOnHover
                        />
                      </DataTableExtensions>
                    </div>
                  </div>
                </div>
                <div id="tablepagination" className="dataTables_wrapper" />
                {/* /Recent Orders */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
        {/* /Main Wrapper */}
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
                  <div className="del-icon"><i><FeatherIcon icon="x-circle" /></i></div>
                </button>
              </div>

            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>

    </>
  )
}


export default Supplier; 