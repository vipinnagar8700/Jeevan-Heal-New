import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13 } from '../imagepath';

const PatientsTable = () => {
   
		
	const [status, setStatus] = useState('');
    const [post, setPost] = useState([])
    const getData = () => {
        fetch('https://jeevan.studiomyraa.com/api/get_all_petient')
            .then((res) => res.json())
            .then((json) => setPost(json.results))
            .catch((e) => console.log(e))
    }
    console.log(status);
    useEffect(() => {
        getData()
    }, [])
	console.log(post)

    // const handleDelete = (id, user_id) => {
    //     const user =  id+ " " + user_id;
    //     fetch('https://admin.allnuud.com/api/delete_job_post/'+id+'/'+user_id)
    //         .then((res) => res.json())
    //         .then((json) => setStatus(json.data))
    //         .catch((e) => console.log(e))
        
    // }
// Delete Patientstable
const [deleteStatus, setDeleteStatus] = useState([]);
const handleDelete = (id) => {
   fetch('https://jeevan.studiomyraa.com/api/delete_petient/' + id, { method: 'DELETE' })
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
			width:"150px",			
		},
						
        {
			name: 'Patient Name',			
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#patientlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.img}`} alt="User Image"/></Link></h2><Link to="#"
			data-bs-target="#Patientlist"
			data-bs-toggle="modal"
			><span className="user-name">{row.fullname}</span><br/>
           </Link></Media.Body></Media>,
			width:"300px",
     
		},	
        {
			name: 'information',
			selector: row=>row.Date,
			cell: row => <Media ><Media.Body className="d-flex"><div><span className="user-name">{row.information}</span><br/>
            <span className="d-block">{row.time}</span></div></Media.Body></Media>,
			width:"300px",
		},																				
		
		
        
        
		
        {
			name: 'Email Id',
			selector: row=>row.email,
			sortable: true,	
			width:"300px",			
		},
	
    
    {
			name: 'Gender',
			selector: row=>row.gender,
			sortable: true,
			width:"300px",
		},
		{
			name: 'weight',
			selector: row=>row.weight,
			sortable: true,
			width:"300px",
		},
		{
			name: 'height',
			selector: row=>row.height,
			sortable: true,
			width:"300px",
		},
		{
			name: 'age',
			selector: row=>row.age,
			sortable: true,
			width:"300px",
		},
		{
			name: 'blood',
			selector: row=>row.blood,
			sortable: true,
			width:"300px",
		},
		{
			name: 'bp',
			selector: row=>row.bp,
			sortable: true,
			width:"300px",
		},
		{
			name: 'glucose_level',
			selector: row=>row.glucose_level,
			sortable: true,
			width:"300px",
		},
		{
			name: 'pragnent',
			selector: row=>row.pragnent,
			sortable: true,
			width:"300px",
		},
		{
			name: 'address',
			selector: row=>row.address,
			sortable: true,
			width:"300px",
		},
		{
			name: 'city',
			selector: row=>row.city,
			sortable: true,
			width:"300px",
		},
		{
			name: 'state',
			selector: row=>row.state,
			sortable: true,
			width:"300px",
		},
		{
			name: 'country',
			selector: row=>row.country,
			sortable: true,
			width:"300px",
		},
        // {
		// 	name: 'Account status',
		// 	selector: row=>row.status,
		// 	sortable: true,			
		// 	cell: row => <label className="toggle-switch" htmlFor={row.status}>
		// 	<input
		// 	  type="checkbox"
		// 	  className="toggle-switch-input"
		// 	  id={row.status}
		// 	  defaultChecked=""
		// 	/>
		// 	<span className="toggle-switch-label">
		// 	  <span className="toggle-switch-indicator" />
		// 	</span>
		//   </label>,
		// 	width:"300px",
		// },
		
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
				<DataTable className="datatable table table-borderless hover-table"
                  id="data-table"
               
					noHeader
					
					defaultSortField="id"
					defaultSortAsc={false}
					pagination
					highlightOnHover
				/>
			</DataTableExtensions>
                  </div>
              </div>
  )
}

export default PatientsTable;