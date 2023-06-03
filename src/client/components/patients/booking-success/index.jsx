import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../header"
import Footer from "../../footer"
import Bookingdata from '../../../../Context/Bookingdata';

const BookingSuccess =(props)=>{
    const {bookingdata,setbookingdata}=props
    console.log(bookingdata,"jsiwqeohfuiwqefdi7q3dfiq36yd");
    if(!bookingdata){
        return <h1>Loading....</h1>
    }
    const{booking_id,sucess_doctername,time,date

        
    }=bookingdata
        return(
            <>
        <Header {...props}/>    
        {/* // <!-- Breadcrumb --> */}
        <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Booking</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">Booking</h2>
                    </div>
                </div>
            </div>
        </div>
        {/* // <!-- /Breadcrumb -->       */}
        <div className="content success-page-cont">
            <div className="container-fluid">
            
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                    
                    
                        <div className="card success-card">
                            <div className="card-body">
                                <div className="success-cont">
                                    <i className="fas fa-check"></i>
                                    <h3>Appointment booked Successfully!</h3>
                                    <p>Appointment booked with <strong>{ sucess_doctername && sucess_doctername}</strong><br /> on <strong> {date &&  date} and{time  && time}</strong></p>
                                    <Link to="/pages/invoice-view" className="btn btn-primary view-inv-btn">View Invoice</Link>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
                
            </div>
        </div>
        <Footer {...props}/>
        </>
        )
    }


export default  Bookingdata(BookingSuccess);