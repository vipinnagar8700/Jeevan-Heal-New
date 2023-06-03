
import React, { Component, useEffect, useState } from 'react';
import { Medicalimg1, Medicalimg2, Medicalimg3 } from "./image"
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Header from '../header';
import Footer from '../footer'
import { countrydata, statedata } from '../countryState';
import { pharmacyfilter } from '../../../API/Filter/filterpharmacy';

const PharmacySearch = (props) => {

  const [post, setPost] = useState([])
  const [city, setcity] = useState(null);
  const [state, setstate] = useState("");
  const [selectedcitya, setselectedcitya] = useState('')
  const [del, setdel] = useState("")
  const [hour, sethour] = useState('')
  const [popular, setpopular] = useState('')
  const [latest, setlatest] = useState("")
  const [rating, setrating] = useState("")
  let newcity;
  const handlestate = (e) => {
    const Astate = e.target.value;
    newcity = statedata[Astate
    ]
    setstate(Astate)
    setcity([...newcity])

    console.log(Astate, "kjhxgcdgvhjm");
  }
  const handlecity = (e) => {
    const Acity = e.target.value;
    alert(Acity)
    setselectedcitya(Acity)

  }


  console.log(state, selectedcitya, del, hour, popular, rating, latest, "jdjdjdjdjdjdjd")
  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/get_pharmacy')
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "dxjdfjfdj");
        setPost(json.results)
      })
      .catch((e) => console.log(e))
  }
  const handlefiltersubmit = () => {
    pharmacyfilter(state, selectedcitya, del, hour, popular, rating, latest).then((res) => {
      console.log(res.results, "fjkfjfjfjfjfjfjfjfjhhh");
      if (res) {
        setPost(res.results)
      }


    })
  }
  useEffect(() => {
    getData()

  }, [])

  return (
    <div className="main-wrapper">
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Search</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">2245 matches found for : Pharmacy In United States</h2>
            </div>
            <div className="col-md-4 col-12 d-md-block d-none">
              <div className="sort-by">
                <span className="sort-title">Sort by</span>
                <span className="sortby-fliter">
                  <select className="select form-select"  >
                    <option>Select</option>
                    <option className="sorting" value='1'>Rating</option>
                    <option className="sorting" value='1'>Popular</option>
                    <option className="sorting" value='1'>Latest</option>
                    <option className="sorting" value='1'>Free</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Search Filter */}
                <div className="card search-filter">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Search Filter</h4>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      <label>Location</label>
                      <input type="text" className="form-control" placeholder="Select Location" />
                    </div>

                    <h3 className="my-4">Your Location</h3>
                    <div className="form-group">
                      <label>Select State</label>
                      <select className="form-select form-control" onChange={handlestate} id="bp" name="bp" tabindex="-1" aria-hidden="true">
                        <option value="">Select Your State</option>
                        {
                          countrydata && countrydata.length > 0 && countrydata.map((s) => {
                            return (
                              <option value={s}>{s}</option>
                            )
                          })
                        }
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Select City</label>
                      <select className="form-select form-control" onChange={handlecity} id="heart_rate" name="heart_rate" tabindex="-1" aria-hidden="true">
                        <option value="">Select Your City</option>
                        {
                          city && city.length > 0 && city.map((c) => {
                            return (
                              <option value={c}>{c}</option>
                            )
                          })
                        }

                      </select>
                    </div>



                    <div className="filter-widget">
                      <h4>Categories</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" value='yes' onChange={(e) => {
                            setdel(e.target.value)
                          }} />
                          <span className="checkmark" /> Popular
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="one" value='yes' onChange={(e) => {
                            setrating(e.target.value)
                          }} />
                          <span className="checkmark" /> Latest
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="two" value='yes' onChange={(e) => {
                            setpopular(e.target.value)
                          }} />
                          <span className="checkmark" /> Ratings
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="three" value='yes' onChange={(e) => {
                            sethour(e.target.value)
                          }} />
                          <span className="checkmark" /> Availability
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="four" value='yes' onChange={(e) => {
                            setlatest(e.target.value)
                          }} />
                          <span className="checkmark" /> Open 24 Hrs
                        </label>
                      </div>



                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Home Delivery
                        </label>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="btn btn-primary w-100 btn-lg login-btn step5_submit" onClick={handlefiltersubmit}>submit</div>
                    </div>
                    <div className="btn-search">
                      <button type="button" className="btn w-100">Search</button>
                    </div>
                  </div>
                </div>
                {/* /Search Filter */}
              </StickyBox>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              {/* Doctor Widget */}

              {/* /Doctor Widget */}
              {/* Doctor Widget */}
              {post ? post.length > 0 && (
                <div>
                  {post.map((items, index) => {
                    return (
                      <div className="card" key={index}>
                        <div className="card-body">
                          <div className="doctor-widget">
                            <div className="doc-info-left">
                              <div className="doctor-img1">
                                <Link to="/Pharmacy/pharmacy-details">
                                  {/* <img src={Medicalimg1} className="img-fluid" alt="User Image" /> */}
                                  <img src={`https://jeevan.studiomyraa.com/public/uploads/images/${items.image}`} className="img-fluid1" alt="User" />

                                </Link>
                              </div>
                              <div className="doc-info-cont">
                                <h4 className="doc-name mb-2"><Link to="/Pharmacy/pharmacy-details">{items.name}</Link></h4>
                                <div className="rating mb-2">
                                  <span className="badge badge-primary">4.0</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <span className="d-inline-block average-rating">(17)</span>
                                </div>
                                <div className="clinic-details">
                                  <div className="clini-infos pt-3">
                                    <p className="doc-location mb-2"><i className="fas fa-phone-volume me-1" /> 320-795-8815</p>
                                    <p className="doc-location mb-2 text-ellipse"><i className="fas fa-map-marker-alt me-1" /> 96 Red Hawk Road Cyrus, MN 56323 </p>
                                    <p className="doc-location mb-2"><i className="fas fa-chevron-right me-1" /> Chemists, Surgical Equipment Dealer</p>
                                    <p className="doc-location mb-2"><i className="fas fa-chevron-right me-1" /> Opens at 08.00 AM</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="doc-info-right">
                              <div className="clinic-booking">
                                <Link className="view-pro-btn" to={"/Pharmacy/pharmacy-details/" + items.id}>View Details</Link>
                                <Link className="apt-btn" to="/Pharmacy/product-all">Browse Products</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      // <div className="load-more text-center">
                      //   <a className="btn btn-primary btn-md" href="">Load More</a>	
                      // </div>	

                    );
                  })}

                </div>

              ) : <div className="rightSection">No Record match.</div>}

              {/* /Doctor Widget */}
              {/* Doctor Widget */}

              {/* /Doctor Widget */}
              <div className="load-more text-center">
                <a className="btn btn-primary btn-md" href="">Load More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </div>
  );
}


export default PharmacySearch;