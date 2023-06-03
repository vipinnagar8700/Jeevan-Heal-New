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
    let token = Cookies.get("pharmToken")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://jeevan.studiomyraa.com/api/all_supplier", requestOptions)
      .then((res) => res.json())
      .then((json) => setPost(json.data))
      .catch((e) => console.log(e))
  }
  const handleDelete = (id) => {
    setcount(count+1);
    const data = deleteSupplier(id);
    if (data) {
      data.then((data) => {
        setEditProductData(data.data);
      
        console.log(data, "rvckjewdsvbhj");
      })
    }

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
      name: 'Images',
      sortable: true, cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#patientlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.img}`} alt="User Image" /></Link></h2><Link to="#"
        data-bs-target="#Patientlist"
        data-bs-toggle="modal"
      >
      </Link></Media.Body></Media>,
      width: "300px",
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      width: "250px",
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
      width: "300px",
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
      width: "300px",
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true,
      width: "300px",
    },
    {
      name: 'Company',
      selector: row => row.company,
      sortable: true,
      width: "300px",
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: true,
      cell: row => (<div className="actions">
        <Link to={`/pharmacyadmin/edit-supplier/${row.id}`} className="text-black">
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
                  <h3 className="page-title mb-0">Supplier</h3>
                </div>
                <div className="col-sm-5 col">
                  <Link to="/pharmacyadmin/add-supplier" className="btn btn-primary float-end d-flex justify-content-between align-items-center">
                    <i className="me-1"><FeatherIcon icon="plus-square" /></i>
                    Add New
                  </Link>
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
                        <h5 className="card-title">Supplier</h5>
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