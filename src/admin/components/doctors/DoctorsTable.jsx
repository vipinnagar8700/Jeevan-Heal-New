import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
 import DataTableExtensions from 'react-data-table-component-extensions';
 import 'react-data-table-component-extensions/dist/index.css';
// import { avatar02, avatar04, avatar05, avatar06, avatar07, avatar10, avatar11, avatar12, avatar13 } from '../imagepath';

const DoctorsTable = () => {
    const [status, setStatus] = useState('');
    const [post, setPost] = useState([])
    const getData = () => {
        fetch('https://jeevan.studiomyraa.com/api/get_all_doctors')
            .then((res) => res.json())
            .then((json) => setPost(json.results))
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
   fetch('https://jeevan.studiomyraa.com/api/delete_doctor/' + id, { method: 'DELETE' })
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
			name: 'fullname',
			selector: row=>row.fullname,
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
			name: 'reg_img',	
			sortable: true,		
			cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#patientlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.reg_img}`} alt="User Image"/></Link></h2><Link to="#"
			data-bs-target="#Patientlist"
			data-bs-toggle="modal"
			>
           </Link></Media.Body></Media>,
			width:"300px",	
     
		},	

		



		{
			name: 'id_img',
			sortable: true,
			cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#patientlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${row.id_img}`} alt="User Image"/></Link></h2><Link to="#"
			data-bs-target="#Patientlist"
			data-bs-toggle="modal"
			>
           </Link></Media.Body></Media>,
			width:"300px",	
		},

		{
			name: 'id_no',
			selector: row=>row.id_no,
			sortable: true,	
			width:"250px",			
		},

		{
			name: 'dob',
			selector: row=>row.dob,
			sortable: true,	
			width:"250px",			
		},

		{
			name: 'Address',
			selector: row=>row.address,
			sortable: true,	
			width:"250px",			
		},

		
		{
			name:'city',
			selector: row=>row.city,
			sortable: true,	
			width:"250px",			
		},

		{
			name: 'state',
			selector: row=>row.state,
			sortable: true,	
			width:"250px",			
		},

		{
			name: 'About',
			selector: row=>row.bbout,
			sortable: true,	
			width:"250px",			
		},




		


		


		
	
						
        // {
		// 	name: 'Doctor',			
		// 	sortable: true,
		// 	cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#doctorlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={row.img_url2} alt="User Image"/></Link></h2><Link to="#"
		// 	data-bs-target="#doctorlist"
		// 	data-bs-toggle="modal"
		// 	>
        //    </Link><span className="user-name">{row.Doctor}</span></Media.Body></Media>,
		// 	width:"250px",
     
		// },		
		
		// {
		// 	name: 'Img',			
		// 	sortable: true,
		// 	cell: row => <Media ><Media.Body className="d-flex"><h2 className="table-avatar"><Link className="avatar avatar-sm me-2 user-dt" to="#" data-bs-target="#doctorlist" data-bs-toggle="modal"><img className="avatar avatar-img" src={row.img_url2} alt="User Image"/></Link></h2><Link to="#"
		// 	data-bs-target="#doctorlist"
		// 	data-bs-toggle="modal"
		// 	>
        //    </Link><span className="user-name">{row.Doctor}</span></Media.Body></Media>,
		// 	width:"250px",
     
		// },		
		
	

		{
			name: 'Specialities',
			selector: row=>row.Specialities,
			sortable: true,	
			width:"250px",			
		},
        
        
		
        {
			name: 'holder_name',
			selector: row=>row.holder_name,
			sortable: true,	
			width:"250px",			
		},



		{
			name: 'exp_month',
			selector: row=>row.exp_month,
			
			width:"250px",
		},





	
	
	
    
        {
			name: 'exp_year',
			selector: row=>row.exp_year,
			sortable: true,
			width:"250px",
		},


		
        {
			name: 'cvv',
			selector: row=>row.cvv,
			sortable: true,
			width:"250px",
		},
		{
			name: 'card_number',
			selector: row=>row.card_number,
			sortable: true,
			width:"250px",
		},
		{
			name: 'digree',
			selector: row=>row.digree,
			sortable: true,
			width:"250px",
		},
		{
			name: 'special',
			selector: row=>row.special,
			sortable: true,
			width:"250px",
		},
		{
			name: 'rating',
			selector: row=>row.rating,
			sortable: true,
			width:"250px",
		},
		{
			name: 'location',
			selector: row=>row.location,
			sortable: true,
			width:"250px",
		},
		{
			name: 'prize',
			selector: row=>row.prize,
			sortable: true,
			width:"250px",
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
		// 	width:"250px",
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

export default DoctorsTable;