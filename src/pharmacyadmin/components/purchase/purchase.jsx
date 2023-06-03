import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import FeatherIcon from 'feather-icons-react';
import { product1, product2, product3, product4, product5, product6 } from '../imagepath';
import SidebarNav from '../sidebar';
import Cookies from 'js-cookie';

const Purchase = (props) => {
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
    
    fetch("https://jeevan.studiomyraa.com/api/view_purchase", requestOptions)
    .then((res) => res.json())
    .then((json) => setPost(json.data))
    .catch((e) => console.log(e))
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(post)
  const [show1, setShow1] = useState(false);
  const toggleFilterMenu1 = () => {
    console.log(show1)
    setShow1(!show1)
  }

  // Delete Category
  const [deleteStatus, setDeleteStatus] = useState([]);
  const handleDelete = (id) => {
     fetch('https://jeevan.studiomyraa.com/api/delete_purchase/' + id, { method: 'DELETE' })
        .then((res) => res.json())
        .then((json) => setDeleteStatus(json))
        .catch((e) => console.log(e))
  }
  if (deleteStatus.status == 'success') {
     getData()
  }



  // Table Start
  const data = post
  const columns = [
    {
      name: 'Category Id',
      selector: row => row.category_id,
      sortable: true,
      width: "250px",
    },

    {
      name: ' Name',
      sortable: true,
      cell: row => <Media ><Media.Body className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#editModal" data-bs-toggle="modal"></Link><span 
			data-bs-target="#editModal"
			data-bs-toggle="modal"
			className="user-name">{row.name}
           </span></Media.Body></Media>,
      width: "400px",

    },
    {
      name: 'Category',
      selector: row => row.category[0].name,
      sortable: true,
      width: "250px",
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
      name: 'Price',
      selector: row => row.price,
      sortable: true,
      width: "250px",
    },
    {
      name: 'quantity',
      cell: row => row.quantity,//<Media><span className={`btn btn-sm ${row.quantity == "THERE ONLY 7" ? 'bg-danger-light' : row.quantity == "THE ONLY 5" ? 'bg-danger-light' : row.quantity == "THE ONLY 2" ? 'bg-danger-light' : ''}`} >{row.quantity}</span></Media>,
      sortable: true,
      width: "250px",
    },
    // {
    //   name: 'Discount',
    //   selector: row => row.discount,
    //   sortable: true,
    //   width: "250px",
    // },
    {
      name: 'created_at',
      cell: row => <Media><span className="btn btn-sm bg-danger-light">{row.created_at}</span></Media>,
      sortable: true,
      width: "250px",
    },



    {
      name: 'Action',
      selector: row => row.action,
      sortable: true,
      cell: row => (<div className="actions">
        <a
          className="text-black"
          href={`/pharmacyadmin/edit-purchase/${row.id}`}
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
      width: "450px",

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
      <div className="page-wrapper">
        <div className="content container-fluid">

          {/* <!-- Page Header --> */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Purchase</h3>
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
                    <div className="del-icon"><i><FeatherIcon icon="x-circle" /></i></div>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="delete-wrap text-center">
                    <div className="del-icon">
                      <div className="del-icon"><i className='delete-icon'><FeatherIcon icon="x-circle" /></i></div>
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


export default Purchase; 