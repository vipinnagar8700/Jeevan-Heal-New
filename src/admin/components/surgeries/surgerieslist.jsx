import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
const Surgerieslist = () => {
    const [status, setStatus] = useState('');
    const [post, setPost] = useState([])
    const getData = () => {
        fetch('https://jeevan.studiomyraa.com/api/get_surgical_ailment')
            .then((res) => res.json())
            .then((json) => setPost(json.data))
            .catch((e) => console.log(e))
    }
    console.log(status);
    useEffect(() => {
        getData()
    }, [])
	console.log(post)

    // Delete Patientstable
const [deleteStatus, setDeleteStatus] = useState([]);
const handleDelete = (id) => {
   fetch('https://jeevan.studiomyraa.com/api/get_surgical_ailment' + id, { method: 'DELETE' })
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
			name: 'Id',
			selector: row=>row.id,
			sortable: true,	
			width:"150px",			
		},

		{
			name: 'Name',
			selector: row=>row.name,
			sortable: true,	
			width:"250px",			
		},
		
		{
			name: 'img',	
			sortable: true,		
			cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#patientlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.img}`} alt="User Image"/></Link></h2><Link to="#"
			data-bs-target="#Patientlist"
			data-bs-toggle="modal"
			>
           </Link></Media.Body></Media>,
			width:"300px",	
     
		},	
		




		


		


		
	
						
       

		{
			name: 'Action',
      selector: row => row.action,
      sortable: true,
      cell: row => (<div className="actions">
        
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
  )
}

export default Surgerieslist;