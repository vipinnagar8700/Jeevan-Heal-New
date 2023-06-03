import React, { useEffect, useState } from "react";
import { IMG01 } from "./img";
import Header from "../../../header";
import Footer from "../../../footer";
import { invoicesubmit } from "../../../../../API/Singledoctor/docter";

import Bookingdata from "../../../../../Context/Bookingdata";
const InvoiceView = (props) => {
  const {bookingdata,setbookingdata}=props
  const[invoice,setinvoice]=useState(false)
  if(!bookingdata){
    return <h1>Loading.....</h1>
  }
  useEffect(()=>{
  invoicesubmit(bookingdata.booking_id).then((data)=>{
    setinvoice(data)
      console.log(data,"m;kdjfsihgirohgreugherou");
    })
   
  
  },[bookingdata])
  console.log(invoice,";kdshguerghrsughroisughwsroihwsighieiieieiei");
 if(!invoice){
  return <h1>Loading......</h1>
 }
 console.log(invoice.data,"sfjlegfiuwegfy");
 const{doctor,payment,patient,date,email,
 }=invoice.data
  const [doctorData]=  doctor;
  const [paymentData] = payment;
  const [patientData]= patient;
  console.log(doctorData,patientData,paymentData);
  
  return (
    <div>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="invoice-content">
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <img src={IMG01} alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="invoice-details">
                        <strong>Order:</strong> #00124
                      </p>
                      <p className="invoice-details">
                        <strong>Issued:</strong> {date && date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <strong className="customer-text">Invoice From</strong>
                        <p className="invoice-details invoice-details-two">
                         { doctorData.fullname  && doctorData.fullname}
                        </p>
                        <p className="invoice-details invoice-details-two">
                        { doctorData.address && doctorData.address}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info invoice-info2">
                        <strong className="customer-text">Invoice To</strong>
                        <p className="invoice-details">
                          {patientData.fullname && patientData.fullname}
                    
                        </p>
                        <p className="invoice-details">
                          {patientData.email && patientData.email}
                    
                        </p>
                        <p className="invoice-details">
                          {paymentData.transaction_id && paymentData.transaction_id}
                    
                        </p>
                        <p className="invoice-details">
                          {paymentData.status && paymentData.status}
                    
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="invoice-info">
                        <strong className="customer-text">
                          Payment Method
                        </strong>
                        <p className="invoice-details invoice-details-two">
                          {paymentData.card_number && paymentData.card_number}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="invoice-item invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table className="invoice-table table table-bordered">
                          <thead>
                            <tr>
                              <th>Description</th>
                              <th className="text-center">Quantity</th>
                              <th className="text-center">VAT</th>
                              <th className="text-end">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>General Consultation</td>
                              <td className="text-center">1</td>
                              <td className="text-center">$0</td>
                              <td className="text-end">$100</td>
                            </tr>
                            <tr>
                              <td>Video Call Booking</td>
                              <td className="text-center">1</td>
                              <td className="text-center">$0</td>
                              <td className="text-end">$250</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 ms-auto">
                      <div className="table-responsive">
                        <table className="invoice-table-two table">
                          <tbody>
                            <tr>
                              <th>Subtotal:</th>
                              <td>
                                <span>$350</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Discount:</th>
                              <td>
                                <span>-10%</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Total Amount:</th>
                              <td>
                                <span>{paymentData.payment && paymentData.payment}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="other-info">
                  <h4>Other information</h4>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sed dictum ligula, cursus blandit risus. Maecenas
                    eget metus non tellus dignissim aliquam ut a ex. Maecenas
                    sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae
                    lorem interdum, eu scelerisque tellus fermentum. Curabitur
                    sit amet lacinia lorem. Nullam finibus pellentesque libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default   Bookingdata( InvoiceView);
