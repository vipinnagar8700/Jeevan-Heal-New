import React, { useContext, useEffect } from "react";
import config from "config";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Header from "./client/components/header.jsx";
// import Footer from "./client/components/footer.jsx";
import TopHeader from "./client/components/topheader.jsx";
import LoginContainer from "./client/components/login/login.jsx";
import Register from "./client/components/register/register.jsx";
import ForgotPassword from "./client/components/forgot-password";
import Home from "./client/components/home/index";
//blog
import BlogList from "./client/components/blog/bloglist";
import BlogGrid from "./client/components/blog/bloggrid";
import BlogDetails from "./client/components/blog/blogdetails";
//pages
import SearchDoctor from "./client/components/pages/searchdoctor";
import Videoconsult from "./client/components/pages/videoconsult";
import Labtest from "./client/components/pages/labtest";
import Surgeries from "./client/components/pages/surgeries";
import Medicines from "./client/components/pages/medicines";
import Calendar from "./client/components/pages/calender";
import Invoice from "./client/components/pages/invoices/invoices";
import InvoiceView from "./client/components/pages/invoices/view";
import DoctorGrid from "./client/components/patients/doctorgrid";
import DoctorList from "./client/components/patients/doctorlist";
import DoctorProfile from "./client/components/patients/doctorprofile";
import DoctorChat from "./client/components/doctors/chat";
import PatientChat from "./client/components/patients/chat";
import MyPatient from "./client/components/doctors/mypatient";
import Booking from "./client/components/patients/booking";
import Checkout from "./client/components/patients/checkout";
import BookingSuccess from "./client/components/patients/booking-success";
import Dashboard from "./client/components/patients/dashboard";
import PatientDependent from "./client/components/patients/dependent";
import PatientAccounts from "./client/components/patients/accounts";
import Orders from "./client/components/patients/orders";
import MedicalRecords from "./client/components/patients/medicalrecords";
import MedicalDetails from "./client/components/patients/medicaldetails";
import Favourties from "./client/components/patients/dashboard/favourties";
import Profile from "./client/components/patients/dashboard/profile";
import Password from "./client/components/patients/dashboard/password";
import DoctorDashboard from "./client/components/doctors/dashboard";
import SocialMedia from "./client/components/doctors/socialmedia";
import ScheduleTiming from "./client/components/doctors/scheduletimings";
import DoctorPassword from "./client/components/doctors/password";
import Appointments from "./client/components/doctors/appointments";
import PatientProfile from "./client/components/doctors/patientprofile";
import AddPescription from "./client/components/doctors/addpescription";
import AddBilling from "./client/components/doctors/addbilling";
import ProfileSetting from "./client/components/doctors/profilesetting";
import Review from "./client/components/doctors/reviews";
import DoctorRegister from "./client/components/doctors/register";
import Registerstepone from "./client/components/doctors/register/registerstepone";
import Registersteptwo from "./client/components/doctors/register/registersteptwo";
import Registerstepthree from "./client/components/doctors/register/registerstepthree";
import Terms from "./client/components/pages/terms";
import Policy from "./client/components/pages/policy";
import Aboutus from "./client/components/pages/aboutus/aboutus";
import Contactus from "./client/components/pages/contactus/contactus";
import Patientregisterstepone from "./client/components/register/patientregisterstepone";
import Patientregistersteptwo from "./client/components/register/patientregistersteptwo";
import Patientregisterstepthree from "./client/components/register/patientregisterstepthree";
import Patientregisterstepfour from "./client/components/register/patientregisterstepfour";
import Patientregisterstepfive from "./client/components/register/patientregisterstepfive";
//pharmacy
import Pharmacy from "./client/components/Pharmacy/pharmacy";
import pharmacydetail from "./client/components/Pharmacy/pharmactdetail";
import PharmacySearch from "./client/components/Pharmacy/pharmacysearch";
import Cart from "./client/components/Pharmacy/cart";
import Product from "./client/components/Pharmacy/product";
import ProductDescription from "./client/components/Pharmacy/productdescription";
import ProductCheckout from "./client/components/Pharmacy/productcheckout";
import PayoutSuccess from "./client/components/Pharmacy/payoutsuccess";
import AppUniversal from "./admin/app-universal";
import PharmacyadminApp from "./pharmacyadmin/app-universal";
import LabtestadminApp from "./labtest/app-universal";
import BlankPage from "./client/components/pages/blankpage/";
import Pharmacyregister from "./client/components/Pharmacy/pharmacyregister";
import labtestregisterationOne from "./client/components/Labtest/labtestregisterationOne"
import labtestregisterationSecond from "./client/components/Labtest/labtestregisterationsecond"
import labtestregisterationthree from "./client/components/Labtest/labtestthree"
import Pharmacyregisterstepone from "./client/components/Pharmacy/pharmacyregisterstepone";
import Pharmacyregistersteptwo from "./client/components/Pharmacy/pharmacyregistersteptwo";
import Pharmacyregisterstepthree from "./client/components/Pharmacy/pharmacyregisterstepthree";
import Doctorblog from "./client/components/blog/doctorblog/doctorblog";
import Doctoraddblog from "./client/components/blog/doctorblog/doctoraddblog";
import Doctorpendingblog from "./client/components/blog/doctorblog/doctorpendingblog";
import Doctoreditblog from "./client/components/blog/doctorblog/doctoreditblog";
import EditPrescription from "./client/components/doctors/patientprofile/edit-prescription";
import EditBilling from "./client/components/doctors/editbilling/index";
import MapList from "./client/components/patients/map-list/index";
import OnboardingEmail from "./client/components/pages/doctoronboarding/onboardingemail";
import OnboardingPersonalize from "./client/components/pages/doctoronboarding/onboardingpersonalize";
import OnboardingIdentity from "./client/components/pages/doctoronboarding/onboardingidentity";
import Form from "./client/components/pages/doctoronboarding/form";
import OnboardingPayments from "./client/components/pages/doctoronboarding/onboardingpayments";
import onboardingpersonalize from "./client/components/pages/doctoronboarding/onboardingpayments";
import OnboardingPreferences from "./client/components/pages/doctoronboarding/onboardingpreferences";
import Onboardingverification from "./client/components/pages/doctoronboarding/onboardingverification";
import PatientOnboardingEmail from "./client/components/pages/patientonboarding/Email";
import PatientOnboardingPersonalize from "./client/components/pages/patientonboarding/Personalize";
import PatientOnboardingDetails from "./client/components/pages/patientonboarding/Details";
import PatientFamilyDetails from "./client/components/pages/patientonboarding/FamilyDetails";
import DependantDetails from "./client/components/pages/patientonboarding/DependantDetails";
import OtherDetails from "./client/components/pages/patientonboarding/OtherDetails";
import OnboardingEmailOtp from "./client/components/pages/doctoronboarding/onboardingemail-otp"
import Onboardingphone from "./client/components/pages/doctoronboarding/onboardingphone"
import  Onboardingphoneotp from "./client/components/pages/doctoronboarding/onboardingphoneotp"
import Onboardingpassword from "./client/components/pages/doctoronboarding/onboardingpassword"
import PatientEmailOtp from "./client/components/pages/patientonboarding/PatientEmailOtp"
import PatientPhone from "./client/components/pages/patientonboarding/Patientphone"
import patientphoneotp from "./client/components/pages/patientonboarding/patientphoneotp"
import patientpassword from "./client/components/pages/patientonboarding/patientpassword"
import PhoneOtp from "./client/components/pages/patientonboarding/phoneotp"
import Producthealthcare from "./client/components/pages/producthealthcare/index"
// import Authroute from "./Authroute.jsx"
import RouteProtect from "./RouteProtect.jsx"

import axios from "axios";
import PharmacyAuth from "./PharmacyProtection/PharmacyAuth.js";
import labtestregister from "./client/components/Labtest/labtestregister.jsx";
import SearchDoctorfilter from "./client/components/pages/searchdoctorfilter/index.jsx";

const AppContainer = function (props) {
  // const {setauser}=useContext(Authusera)


  // useEffect(()=>{
  //   if(token){
  //     axios.get("https://jeevan.studiomyraa.com/api/login_action").then((user)=>{
  //       console.log("pppppp" , user)
  //       setauser(user.user)
  //     })
  //   }
  //   else{
  //     return <div>Loading.....</div>
  //   }
  // },[])


  if (props) {
    const url = props.location.pathname.split("/")[1];

    

    

    return (
      <Router basename={`${config.publicPath}`}>
         <Switch>

         <Route path="/login" exact component={LoginContainer} />
           

           {/* purchase */}

           
            <Route path="/admin">
                <RouteProtect Component={AppUniversal} />
              </Route>
            </Switch>
        {url === "admin" ? (
          <div>
            {/* <Authroute> */}
            {/* <Switch>
            <Route path="/admin" component={AppUniversal} />
            
            </Switch> */}
            {/* </Authroute> */}
          </div>
        ) : url === "pharmacyadmin" ? (
          <div>
            <Switch>
              <Route path="/pharmacyadmin">
                 {PharmacyadminApp}
              </Route>
             
            </Switch>
          </div>
        ) : url === "labtest" ? (
          <div>
            <Switch>
              <Route path="/labtest">
                 {LabtestadminApp}
              </Route>
             
            </Switch>
          </div>
        ):
        
        
        
        (
          <div>
            <Switch>
              <Route path="/patient/doctor-grid" exact component={DoctorGrid} />
              <Route path="/patient/doctor-list" exact component={DoctorList} />
           
              <Route path="/doctor/chat-doctor" exact component={DoctorChat} />

             
              <Route path="/register" exact component={Register} />
              <Route path="/forgot-password" exact component={ForgotPassword} />

              {/* home */}
              <Route path="(/|/home)" exact component={Home} />
             

              {/* blog */}
              <Route path="/blog/blog-list" exact component={BlogList} />
              <Route path="/blog/blog-grid" exact component={BlogGrid} />
              <Route path="/blog/blog-details" exact component={BlogDetails} />
              <Route path="/doctor-blog" exact component={Doctorblog} />
              <Route
                path="/blog/doctor-add-blog"
                exact
                component={Doctoraddblog}
              />
              <Route
                path="/blog/doctor-pending-blog"
                exact
                component={Doctorpendingblog}
              />
              <Route
                path="/blog/doctor-edit-blog"
                exact
                component={Doctoreditblog}
              />
              {/* pages */}

              <Route
                path="/patient/search-doctor"
                exact
                component={SearchDoctor}
              />
              <Route
                path="/patient/search-doctor-filter"
                exact
                component={SearchDoctorfilter}
              />
               <Route path="/pages/videoconsult" exact component={Videoconsult} />
              <Route path="/pages/medicines" exact component={Medicines} />
             <Route path="/pages/labtest" exact component={Labtest} />
             <Route path="/pages/surgeries" exact component={Surgeries} />
              <Route path="/pages/blank-page" exact component={BlankPage} />
              <Route path="/pages/calendar" exact component={Calendar} />
              <Route path="/pages/invoice" exact component={Invoice} />
              <Route path="/doctor/invoice" exact component={Invoice} />
              <Route path="/pages/invoice-view" exact component={InvoiceView} />
              <Route path="/aboutus" exact component={Aboutus} />
              {/* <Route path="/contactus" exact component={Contactus} /> */}
              <Route path="/contactus">
                <RouteProtect Component={Contactus} />
              </Route>
              <Route
                path="/patient/patientregisterstep-1"
                exact
                component={Patientregisterstepone}
              />
              <Route
                path="/patient/patientregisterstep-2"
                exact
                component={Patientregistersteptwo}
              />
              <Route
                path="/patient/patientregisterstep-3"
                exact
                component={Patientregisterstepthree}
              />
              <Route
                path="/patient/patientregisterstep-4"
                exact
                component={Patientregisterstepfour}
              />
              <Route
                path="/patient/patientregisterstep-5"
                exact
                component={Patientregisterstepfive}
              />
              <Route
                path="/patient/doctor-profile/:id"
                exact
                component={DoctorProfile}
              />
              <Route path="/doctor/my-patients" exact component={MyPatient} />
              
              
              <Route path="/patient/booking/">
                <RouteProtect Component={Booking} />
              </Route>
              <Route
                path="/patient/patient-chat"
                exact
                component={PatientChat}
              />
              <Route path="/patient/checkout" exact component={Checkout} />
              <Route
                path="/patient/booking-success"
                exact
                component={BookingSuccess}
              />
              <Route path="/patient/dashboard" exact component={Dashboard} />
              <Route
                path="/patient/dependent"
                exact
                component={PatientDependent}
              />
              <Route
                path="/patient/accounts"
                exact
                component={PatientAccounts}
              />
              <Route path="/patient/orders" exact component={Orders} />
              <Route
                path="/patient/medicalrecords"
                exact
                component={MedicalRecords}
              />
              <Route
                path="/patient/medicaldetails"
                exact
                component={MedicalDetails}
              />
              <Route path="/patient/favourites" exact component={Favourties} />
              <Route path="/patient/profile" exact component={Profile} />
              <Route
                path="/patient/change-password"
                exact
                component={Password}
              />
             
              <Route path="/doctor/doctor-dashboard">
                <RouteProtect Component={DoctorDashboard} />
              </Route>
              <Route path="/social-media" exact component={SocialMedia} />
              <Route
                path="/doctor/schedule-timing"
                exact
                component={ScheduleTiming}
              />
              <Route
                path="/doctor-change-password"
                exact
                component={DoctorPassword}
              />
              
              <Route path="/doctor/appointments">
                <RouteProtect Component={Appointments} />
              </Route>
              <Route
                path="/doctor/patient-profile"
                exact
                component={PatientProfile}
              />
              <Route
                path="/add-prescription"
                exact
                component={AddPescription}
              />
              <Route path="/add-billing" exact component={AddBilling} />
              <Route
                path="/doctor/profile-setting"
                exact
                component={ProfileSetting}
              />
              <Route path="/doctor/review" exact component={Review} />
              <Route
                path="/doctor/doctor-register"
                exact
                component={DoctorRegister}
              />
              <Route
                path="/registerstepone"
                exact
                component={Registerstepone}
              />
              <Route
                path="/register-step-2"
                exact
                component={Registersteptwo}
              />
              <Route
                path="/register-step- 3"
                exact
                component={Registerstepthree}
              />
              <Route path="/terms" exact component={Terms} />
              <Route path="/privacy-policy" exact component={Policy} />

              {/* Pharmacy */}
              <Route
                path="/Pharmacy/Pharmacy-index"
                exact
                component={Pharmacy}
              />
              <Route
                path="/Pharmacy/Pharmacy-details"
                exact
                component={pharmacydetail}
              />
              <Route
                path="/Pharmacy/pharmacy-search"
                exact
                component={PharmacySearch}
              />
              <Route path="/Pharmacy/product-all" exact component={Product} />
              <Route
                path="/Pharmacy/product-description/:id"
                exact
                component={ProductDescription}
              />
              <Route path="/Pharmacy/cart" exact component={Cart} />
              <Route
                path="/Pharmacy/product-checkout"
                exact
                component={ProductCheckout}
              />
              <Route
                path="/Pharmacy/payment-success"
                exact
                component={PayoutSuccess}
              />
              <Route
                path="/Pharmacy/pharmacy-register"
                exact
                component={Pharmacyregister}
              />
              <Route
                path="/labtest/labtest-register"
                exact
                component={labtestregister}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-1"
                exact
                component={Pharmacyregisterstepone}
              />
              <Route
                path="/Labtest/labtest-registerstep-1"
                exact
                component={labtestregisterationOne}
              />
               <Route
                path="/Labtest/labtest-registerstep-2"
                exact
                component={labtestregisterationSecond}
              />
              <Route
                path="/Labtest/labtest-registerstep-3"
                exact
                component={labtestregisterationthree}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-2"
                exact
                component={Pharmacyregistersteptwo}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-3"
                exact
                component={Pharmacyregisterstepthree}
              />
              <Route
                path="/editprescription"
                exact
                component={EditPrescription}
              />
              <Route path="/editbilling" exact component={EditBilling} />
              <Route path="/patient/map-list" exact component={MapList} />
              <Route
                path="/pages/onboarding-email"
                exact
                component={OnboardingEmail}
              />
              <Route
                path="/pages/onboarding-identity"
                exact
                component={OnboardingIdentity}
              />
                <Route
                path="/pages/form"
                exact
                component={Form}
              />
              <Route
                path="/pages/onboarding-payments"
                exact
                component={OnboardingPayments}
              />
              <Route
                path="/pages/onboarding-personalize"
                exact
                component={OnboardingPersonalize}
              />
              <Route
                path="/pages/onboarding-preferences"
                exact
                component={OnboardingPreferences}
              />
              <Route
                path="/pages/onboarding-verification"
                exact
                component={Onboardingverification}
              />
              <Route
                path="/pages/patient-email"
                exact
                component={PatientOnboardingEmail}
              />
              <Route
                path="/pages/patient-personalize"
                exact
                component={PatientOnboardingPersonalize}
              />
              <Route
                path="/pages/patient-details"
                exact
                component={PatientOnboardingDetails}
              />
              <Route
                path="/pages/patient-family-details"
                exact
                component={PatientFamilyDetails}
              />
              <Route
                path="/pages/patient-dependant-details"
                exact
                component={DependantDetails}
              />
              <Route
                path="/pages/patient-other-details"
                exact
                component={OtherDetails}
              />
              <Route path="/pages/onboarding-email-otp" exact component={OnboardingEmailOtp}/>
              <Route path="/pages/onboarding-phone" exact component={Onboardingphone}/>
              <Route path="/pages/onboarding-phone-otp" exact component={Onboardingphoneotp}/>
              <Route path="/pages/onboarding-password" exact component={Onboardingpassword}/>
              <Route path="/pages/patient-email-otp" exact component={PatientEmailOtp}/>
              <Route path="/pages/patient-phone" exact component={PatientPhone}/>
              <Route path="/pages/patient-phone-otp" exact component={patientphoneotp}/>
              <Route path="/pages/patient-password" exact component={patientpassword}/>
              <Route path="/pages/product-healthcare" exact component={Producthealthcare}/>
              <Route path="/pages/patient-phone-otp" exact component={PhoneOtp}/>
              
            </Switch>
          </div>
        )}
      </Router>
    );
  }
  return null;
};

export default AppContainer;
