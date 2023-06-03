import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Cookies from "js-cookie";
const SidebarNav = (props) => {
  let history = useHistory();
  let pathname = props.location.pathname;

  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuNew, setSideMenuNew] = useState("");

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };

  const toggleSidebarNew = (value) => {
    console.log(value);
    setSideMenuNew(value);

  };

  const logoutPharmacy = () => {
    let token = Cookies.get("pharmToken")
    console.log(token, "logout Token")

    let logOut = Cookies.remove("pharmToken");
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
              <li className={pathname === '/pharmacyadmin' ? "active" : ""}>
                <Link to="/pharmacyadmin"><i className="fe fe-home" /> <span>Dashboard</span></Link>
              </li>
              <li className="submenu">
                <Link to="#" className={isSideMenu == "Products" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "Products" ? "" : "Products")}><i className="fe fe-document"></i> <span> Products</span> <span className="menu-arrow"></span></Link>
                {isSideMenu == "Products" ?
                  <ul style={{ display: isSideMenu == "Products" ? "block" : "none" }}>
                    <li><Link className={pathname.includes('products') ? "active" : ""} to="/pharmacyadmin/products">Products</Link></li>
                    <li><Link className={pathname.includes('add-product') ? "active" : ""} to="/pharmacyadmin/add-product">Add Product</Link></li>
                    <li><Link className={pathname.includes('outstock') ? "active" : ""} to="/pharmacyadmin/outstock">Out-Stock</Link></li>
                    <li><Link className={pathname.includes('expired') ? "active" : ""} to="/pharmacyadmin/expired">Expired</Link></li>
                  </ul>
                  : ""
                }
              </li>
              <li className="submenu">
                <Link to="#" className={isSideMenu == "Pharmacy" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "Pharmacy" ? "" : "Pharmacy")}><i className="fe fe-document"></i> <span> Pharmacy</span> <span className="menu-arrow"></span></Link>
                {isSideMenu == "Pharmacy" ?
                  <ul style={{ display: isSideMenu == "Pharmacy" ? "block" : "none" }}>
                    <li><Link className={pathname.includes('pharmacylist') ? "active" : ""} to="/pharmacyadmin/pharmacylist">Pharmacy List</Link></li>
                    <li><Link className={pathname.includes('editpharmacy') ? "active" : ""} to="/pharmacyadmin/editpharmacy">Edit Pharmacy</Link></li>
                  </ul>
                  : ""
                }
              </li>
              <li className={pathname.includes('categories') ? "active" : ""}>
                <Link to="/pharmacyadmin/categories"><i className="fe fe-layout" /> <span>Categories</span></Link>
              </li>
              <li className="submenu">
                <Link to="#" className={isSideMenu == "Purchase" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "Purchase" ? "" : "Purchase")}><i className="fe fe-star-o"></i> <span>Purchase</span> <span className="menu-arrow"></span></Link>
                <ul style={{ display: isSideMenu == "Purchase" ? "block" : "none" }}>
                  <li><Link className={pathname.includes('purchase') ? "active" : ""} to="/pharmacyadmin/purchase">Purchase</Link></li>
                  <li><Link className={pathname.includes('add-purchase') ? "active" : ""} to="/pharmacyadmin/add-purchase">Add Purchase</Link></li>
                  <li><Link className={pathname.includes('order') ? "active" : ""} to="/pharmacyadmin/order">Order</Link></li>
                </ul>
              </li>
              <li className={pathname.includes('sales') ? "active" : ""}><Link to="/pharmacyadmin/sales"><i className="fe fe-activity" /> <span>Sales</span></Link></li>
              <li className="submenu">

                <Link to="#" className={isSideMenu == "Supplier" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "Supplier" ? "" : "Supplier")}><i className="fe fe-user"></i> <span>Supplier</span> <span className="menu-arrow"></span></Link>
                <ul style={{ display: isSideMenu == "Supplier" ? "block" : "none" }}>
                  <li><Link className={pathname.includes('supplier') ? "active" : ""} to="/pharmacyadmin/supplier">Supplier</Link></li>
                  <li><Link className={pathname.includes('add-supplier') ? "active" : ""} to="/pharmacyadmin/add-supplier">Add Supplier</Link></li>
                </ul>
              </li>
              <li className={pathname.includes('transactions-list') ? "active" : ""}><Link to="/pharmacyadmin/transactions-list"><i className="fe fe-table" /> <span>Transaction</span></Link></li>
              {/* <li className="submenu">
            <Link to="#" className= {isSideMenu == "Reports" ? "subdrop" : ""} onClick={()=>toggleSidebar(isSideMenu=="Reports" ? "" : "Reports")}><i className="fe fe-document"></i> <span>Reports</span> <span className="menu-arrow"></span></Link>
						<ul style={{ display: isSideMenu== "Reports"? "block" : "none" }}>
              <li><Link className={pathname.includes('invoice') ?"active" :""} to="/pharmacyadmin/reportinvoice">Invoice</Link></li>
              <li><Link className={pathname.includes('invoice-report') ?"active" :""} to="/pharmacyadmin/invoice-report">Invoice Reports</Link></li>
            </ul>
          </li> */}
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className={pathname.includes('profile') ? "active" : ""}>
                <Link to="/pharmacyadmin/profile"><i className="fe fe-user-plus" /> <span>Profile</span></Link>
              </li>
              <li className={pathname.includes('logout') ? "active" : ""}>
                <Link ><i className="fas fa-sign-out-alt" /> <span onClick={logoutPharmacy}>LogOut</span></Link>
              </li>

            </ul>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
}


export default withRouter(SidebarNav);
