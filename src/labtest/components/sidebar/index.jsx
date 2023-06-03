import React, { useEffect,useState} from 'react';
import { Link, withRouter , useHistory} from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Cookies from "js-cookie";
const SidebarNav=(props)=> {
  let history = useHistory();
  let pathname = props.location.pathname;

	const [isSideMenu, setSideMenu] =useState("");
    const [isSideMenuNew, setSideMenuNew] =useState("");
    
    const toggleSidebar = (value) =>{
        console.log(value);
        setSideMenu(value);
    };

    const toggleSidebarNew = (value) =>{
        console.log(value);
        setSideMenuNew(value);
        
    };

    const logoutlab = () => {
      let token = Cookies.get("lab")
      console.log(token, "logout Token")
  
      let logOut = Cookies.remove("lab");
      if (!logOut) {
        console.log("User Successfully LogOut!")
        const confirmLogout = window.confirm("Are you sure you want to log out of your account?");
  
        if (confirmLogout) {
          // Redirect to the login page
          window.location.href = "/login";
        }
      }
      else {
        console.log("There Is a Error to LogOut User!")
      }
    }
   return (
    <div className="sidebar" id="sidebar">
      <Scrollbars      
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
          >
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title"> 
            <span>Main</span>
          </li>
          <li className={pathname === '/labtest' ?"active" :""}> 
            <Link to="/labtest"><i className="fe fe-home" /> <span>Dashboard</span></Link>
          </li>
          <li className="submenu">           
            <Link to="#" className= {isSideMenu == "Products" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="Products" ? "" : "Products")}><i className="fe fe-document"></i> <span> Products</span> <span className="menu-arrow"></span></Link>
								{isSideMenu == "Products" ?
            <ul style={{ display: isSideMenu== "Products"? "block" : "none" }}>
              <li><Link className={pathname.includes('products') ?"active" :""} to="/labtest/products">Products</Link></li>
              <li><Link className={pathname.includes('add-product') ?"active" :""} to="/labtest/add-product">Add Product</Link></li>
              <li><Link className={pathname.includes('outstock') ?"active" :""} to="/labtest/outstock">Out-Stock</Link></li>
              <li><Link className={pathname.includes('expired') ?"active" :""} to="/labtest/expired">Expired</Link></li>
            </ul>
            :""
          }
          </li>
          <li className="submenu">           
            <Link to="#" className= {isSideMenu == "Pharmacy" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="Pharmacy" ? "" : "Pharmacy")}><i className="fe fe-document"></i> <span> Pharmacy</span> <span className="menu-arrow"></span></Link>
								{isSideMenu == "Pharmacy" ?
            <ul style={{ display: isSideMenu== "Pharmacy"? "block" : "none" }}>
              <li><Link className={pathname.includes('pharmacylist') ?"active" :""} to="/labtest/pharmacylist">Pharmacy List</Link></li>
              <li><Link className={pathname.includes('editpharmacy') ?"active" :""} to="/labtest/editpharmacy">Edit Pharmacy</Link></li>
                   </ul>
            :""
          }
          </li>
          <li className={pathname.includes('categories') ?"active" :""}> 
            <Link to="/labtest/DiagnosticTest"><i className="fe fe-layout" /> <span>Diagnostic Test</span></Link>
          </li>
          <li className="submenu">            
            <Link to="#" className= {isSideMenu == "Purchase" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="Purchase" ? "" : "Purchase")}><i className="fe fe-star-o"></i> <span> Health Checkup</span> <span className="menu-arrow"></span></Link>
								<ul style={{ display: isSideMenu== "Purchase"? "block" : "none" }}>
              <li><Link className={pathname.includes('purchase') ?"active" :""} to="/labtest/HealthCheckUpLabtest"> Health Checkup</Link></li>
              <li><Link className={pathname.includes('add-purchase') ?"active" :""} to="/labtest/add-HealthCheckUpLabtest">Add  Health Checkup</Link></li>
              <li><Link className={pathname.includes('order') ?"active" :""} to="/labtest/order">Order</Link></li>
            </ul>
          </li>
          <li className={pathname.includes('sales') ?"active" :""}><Link to="/labtest/sales"><i className="fe fe-activity" /> <span>Sales</span></Link></li>
          <li className="submenu">
           
            <Link to="#" className= {isSideMenu == "Supplier" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="Supplier" ? "" : "Supplier")}><i className="fe fe-user"></i> <span>localization Details</span> <span className="menu-arrow"></span></Link>
								<ul style={{ display: isSideMenu== "Supplier"? "block" : "none" }}>            
              <li><Link className={pathname.includes('supplier') ?"active" :""} to="/labtest/localization-details">localization Details</Link></li>
              <li><Link className={pathname.includes('add-supplier') ?"active" :""} to="/labtest/add-localization-details">Add localization Details</Link></li>
            </ul>
          </li>
          <li className={pathname.includes('transactions-list') ?"active" :""}><Link to="/labtest/transactions-list"><i className="fe fe-table" /> <span>Transaction</span></Link></li>
          {/* <li className="submenu">
            <Link to="#" className= {isSideMenu == "Reports" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="Reports" ? "" : "Reports")}><i className="fe fe-document"></i> <span>Reports</span> <span className="menu-arrow"></span></Link>
						<ul style={{ display: isSideMenu== "Reports"? "block" : "none" }}>
              <li><Link className={pathname.includes('invoice') ?"active" :""} to="/labtest/reportinvoice">Invoice</Link></li>
              <li><Link className={pathname.includes('invoice-report') ?"active" :""} to="/labtest/invoice-report">Invoice Reports</Link></li>
            </ul>
          </li> */}
          <li className="menu-title"> 
            <span>Pages</span>
          </li>
          <li className={pathname.includes('profile') ?"active" :""}> 
            <Link to="/labtest/profile"><i className="fe fe-user-plus" /> <span>Profile</span></Link>
          </li>
          {/* <li className={pathname.includes('settings') ?"active" :""}> 
            <Link to="/labtest/settings"><i className="fe fe-vector" /> <span>Settings</span></Link>
          </li> */}
          <li className={pathname.includes('logout') ? "active" : ""}>
                <Link ><i className="fas fa-sign-out-alt" /> <span onClick={logoutlab}>LogOut</span></Link>
              </li>
        </ul>
      </div>
    </div>
    </Scrollbars>
  </div>
  );
}


export default withRouter(SidebarNav);
