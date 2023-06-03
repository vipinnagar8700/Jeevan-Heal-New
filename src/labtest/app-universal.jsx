import React from 'react';
import config from 'config';
import {  Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import "./assets/js/bootstrap.bundle.min.js";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css";
import Header from  './components/header/index';
import Dashboard from './components/dashboard';
import Products from './components/Products/product';
import AddProduct from './components/Products/addproduct';
import Editpharmacy from './components/Pharmacy/editpharmacy';
import Pharmacylist from './components/Pharmacy/pharmacylist';
import EditProduct from './components/Products/editproduct';
import OutStock from './components/Products/outstock';
import Expired from './components/Products/expired';
import Categories from './components/categories';
import Purchase from './components/purchase/purchase';
import Order from './components/purchase/order';
import AddPurchase from './components/purchase/addpurchase';
import EditPurchase from './components/purchase/editpurchase';
import Sales from './components/Sales';
import Supplier from './components/supplier/supplier';
import AddSupplier from './components/supplier/addsupplier';
import EditSupplier from './components/supplier/editsupplier';
import TransactionList from './components/transaction/transaction-list';
import Invoice from './components/transaction/invoice';
import InvoiceReport from './components/report/invoicelist';
import Profile from './components/profile';
import ReportInvoice from './components/report/reportinvoice'
// import LocalizationDetails from './components/settings/LocalizationDetails';
import RouteProtect from '../RouteProtect.jsx';
const LabtestadminApp = function (props) {
    return (
		
			<Router basename={`${config.publicPath}`}>
				<div className="main-wrapper">					
				
			    <Route render={(props)=> <Header {...props}/>} />
				<Switch>
				{/* <Route path="/labtest">
                <RouteProtect Component={Dashboard} />
              </Route>
			  <Route path="/labtest/categories">
                <RouteProtect Component={Categories} />
              </Route>
			  <Route path="/labtest/products">
                <RouteProtect Component={Products} />
              </Route> */}
			         <Route path="/labtest" exact component={Dashboard} />
			        <Route path="/labtest/DiagnosticTest" exact component={Categories} />    
			         <Route path="/labtest/products" exact component={Products} />
					
					<Route path="/labtest/pharmacylist" exact component={Pharmacylist} />
					<Route path="/labtest/editpharmacy" exact component={Editpharmacy} />
					<Route path="/labtest/edit-product/:p_id" exact component={EditProduct} />
					<Route path="/labtest/outstock" exact component={OutStock} />
					<Route path="/labtest/expired" exact component={Expired} />
					<Route path="/labtest/HealthCheckUpLabtest" exact component={Purchase} />
					<Route path="/labtest/order" exact component={Order} />
					<Route path="/labtest/add-HealthCheckUpLabtest" exact component={AddPurchase} />
					<Route path="/labtest/edit-HealthCheckUpLabtest/:p_id" exact component={EditPurchase} />
					<Route path="/labtest/sales" exact component={Sales} />
					<Route path="/labtest/localization-details" exact component={Supplier} />
					<Route path="/labtest/add-localization-details" exact component={AddSupplier} />
					<Route path="/labtest/edit-localization-details/:p_id" exact component={EditSupplier} />
					<Route path="/labtest/transactions-list" exact component={TransactionList} />
					<Route path="/labtest/invoice" exact component={Invoice} />
					<Route path="/labtest/reportinvoice" exact component={ReportInvoice} />
					<Route path="/labtest/invoice-report" exact component={InvoiceReport} />					
					<Route path="/labtest/profile" exact component={Profile} />
					{/* <Route path="/labtest/localization-details" exact component={LocalizationDetails} />		 */}
				</Switch>
		       </div>
			
			</Router>
    );
}

export default LabtestadminApp;

