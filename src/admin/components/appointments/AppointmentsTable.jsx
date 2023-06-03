import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import {
  avatar02,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar11,
  avatar12,
  avatar13,
} from "../imagepath";

const AppointmentsTable = () => {
  const [post, setPost] = useState()
useEffect(() => {
  Jobbtn();
}, [])


const Jobbtn = async () => {
  const tokenGet = localStorage.getItem("login2");
  const token = JSON.parse(tokenGet).token;
  // const {doctor_id} = useParams();
  console.log(token)
  const res = await fetch(`https://jeevan.studiomyraa.com/api/doctor_appointments/5`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  setPost(data.data);
  console.log(data);
};
  
// console.log(post)
const data = post
const columns = [

    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      width: "150px",
    },
    {
      name: "Patient",
      sortable: true,
      cell: (row) => (
        <Media>
          <Media.Body className="d-flex">
            <Link to="/admin/profile" className="avatar avatar-sm me-2 user-dt">
              <img src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.patient[0].img}`} className="avatar avatar-img" />
            </Link>
            <div className="text-secondary">
              <span className="user-name">{row.Patient.name}</span>
              <br />
              <span className="d-block text-muted">{row.age}</span>
            </div>
          </Media.Body>
        </Media>
      ),
      width: "250px",
    },
    {
      name: "Doctor",
      sortable: true,
      cell: (row) => (
        <Media>
          <Media.Body className="d-flex">
            <Link
              to="/admin/profile"
              className="avatar avatar-sm me-2 user-dt user-name"
            >
              <img src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.doctor[0].img}`} className="avatar avatar-img" />
            </Link>
            <div className="text-secondary">
              <span className="text-muted">{row.doctor.fullname}</span>
              <br />
              <span className="d-block tab-subtext">{row.Department}</span>
            </div>
          </Media.Body>
        </Media>
      ),
      width: "250px",
    },

    {
      name: "Disease",
      selector: (row) => (
        <Media>
          <span className="disease-name">{row.Disease}</span>
        </Media>
      ),
      sortable: true,
      width: "250px",
    },
    {
      name: "Consultation Type",
      selector: (row) => (
        <Media>
          <Media.Body className="d-flex">
            <a href="#" ></a>
            <div className="text-secondary">
              {row.Consultationtype}
              <br />
              <Link to="#" className="d-block text-primary mt-2">
                <span className="d-flex align-items-center">{row.call}</span>
              </Link>
            </div>
          </Media.Body>
        </Media>
      ),
      sortable: true,
      width: "250px",
    },

    {
      name: "Date & Time",
      selector: (row) => row.Date,
      cell: (row) => (
        <Media>
          <Media.Body className="d-flex">
            <div className="text-secondary">
              <span className="user-name">{row.Date}</span>
              <br />
              <span className="d-block text-muted">{row.time}</span>
            </div>
          </Media.Body>
        </Media>
      ),
      width: "250px",
    },

    {
      name: "Amount",
      selector: (row) => row.Amount,
      sortable: true,
      width: "250px",
    },
  ];

  const tableData = {
    columns,
    data,
  };
  return (
    <div className="card-body">
      <div className="table-responsive">
        <DataTableExtensions {...tableData}>
          <DataTable
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
</div>
  );
};

export default AppointmentsTable;
