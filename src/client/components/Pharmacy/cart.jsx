import React, { Component, useContext } from 'react';
import { Product, Product1, Product2, Product3, Product4 } from "./image"
import Header from "../header"
import Footer from "../footer"
import { Link } from "react-router-dom";
import { CartContext } from '../../../Context/AddToCart';
const Cart = (props) => {


  let { addToCart, cartItems } = useContext(CartContext)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="main-wrapper">
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Cart</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Cart</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>SKU</th>
                      <th>Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.length > 0 && cartItems.map((item, index) => {
                        return (
                          <tr key={item.id}>
                            <td>
                              <h2 className="table-avatar">
                                <Link to="/Pharmacy/product-description" className="avatar avatar-sm me-2"><img className="avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${item.img}`} alt="User Image" /></Link>
                              </h2>
                              <Link to="/Pharmacy/product-description">{item.ProductName}</Link>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.price}</td>
                            <td className="text-center">
                              <div className="custom-increment cart">
                                <div className="input-group1">
                                  <span className="input-group-btn">
                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field>
                                      <span><i className="fas fa-minus" /></span>
                                    </button>
                                  </span>
                                  <input type="text" id="quantity1" name="quantity1" className=" input-number" defaultValue={item.quantity} />
                                  <span className="input-group-btn">
                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field>
                                      <span><i className="fas fa-plus" /></span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">{item.price}</td>
                            <td className="text-end">
                              <div className="table-action">
                                <a href="" className="btn btn-sm bg-danger-light">
                                  <i className="fas fa-times" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }


                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-lg-8">
            </div>
            <div className="col-md-5 col-lg-4">
              {/* Booking Summary */}
              <div className="card booking-card">
                <div className="card-header">
                  <h4 className="card-title">Cart Totals</h4>
                </div>
                <div className="card-body">
                  <div className="booking-summary">
                    <div className="booking-item-wrap">
                      <ul className="booking-date">
                        <li>Subtotal <span>$5,877.00</span></li>
                        <li>Shipping <span>$25.00<a href="#">Calculate shipping</a></span></li>
                      </ul>
                      <ul className="booking-fee pt-4">
                        <li>Tax <span>$0.00</span></li>
                      </ul>
                      <div className="booking-total">
                        <ul className="booking-total-list">
                          <li>
                            <span>Total</span>
                            <span className="total-cost">{totalPrice}</span>
                          </li>
                          <li>
                            <div className="clinic-booking pt-4">
                              <Link className="apt-btn" to="/Pharmacy/product-checkout">Proceed to checkout</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Booking Summary */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </div>
  );
}


export default Cart;