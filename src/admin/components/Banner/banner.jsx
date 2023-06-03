import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SidebarNav from "../sidebar";
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
// import {  product1, product2, product3, product4, product5, product6 } from '../imagepath';

const Banner = () => {
	const [status, setStatus] = useState('');
    const [post, setPost] = useState([])
    const getData = () => {
        fetch('https://jeevan.studiomyraa.com/api/get_banner')
            .then((res) => res.json())
            .then((json) => setPost(json.results))
            .catch((e) => console.log(e))
    }
    useEffect(() => {
        getData()
    }, [])
	
    const [deleteStatus, setDeleteStatus] = useState([]);
    const handleDelete = (id) => {
       fetch('https://jeevan.studiomyraa.com/api/delete_banner/' + id, { method: 'DELETE' })
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
			name: 'id',
			selector: row=>row.id,
			sortable: true,	
			width:"250px",			
		},
						
        {
			name: 'img',			
			sortable: true,
            
            cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#patientlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.img}`} alt="User Image"/></Link></h2><Link to="#"
			data-bs-target="#Patientlist"
			data-bs-toggle="modal"
			><span className="user-name">{row.fullname}</span><br/>
           </Link></Media.Body></Media>,
			width:"300px",
  
     
		},																					
	
    {
			name: 'Date',
			selector: row=>row.created_at,
			sortable: true,	
			width:"250px",			
		},
        

    {
			name: 'Action',
      selector: row => row.action,
      sortable: true,
      cell: row => (<div className="actions">
         <a
            className="text-black"
            href={`/admin/edit-banner/${row.id}`}
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
    
    <div className="card-body p-0">
           <SidebarNav />
              <div className="table-responsive">
              <DataTableExtensions
				{...tableData}
			>
				<DataTable
                
					noHeaderfalse
					
					defaultSortField="id"
					defaultSortAsc={false}
					pagination
					highlightOnHover
          onRowClicked={onRowClicked}
				/>
			</DataTableExtensions>
                  </div>
              </div>
  )
}

export default Banner;