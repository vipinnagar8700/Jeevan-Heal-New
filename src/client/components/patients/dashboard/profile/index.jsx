import React, { Component, useEffect, useState } from 'react';
import DashboardSidebar from '../sidebar/sidebar.jsx';
import IMG01 from '../../../../assets/images/patient.jpg';
import StickyBox from "react-sticky-box";
import Header from '../header.jsx';
import Footer from '../../../footer.jsx';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Updatedocter, fetchpatient } from '../../../../../API/fetch_patient.js';


const Profile = (props) => {



    const { userId, id } = useParams();
    // const navigate = useNavigate();



    let [docterdetail, setdoterdetail] = useState(false)


    const [fullname, setFullname] = useState(docterdetail.fullname);
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [blood, setBlood] = useState("");
    const [heart_rate, setHeart_rate] = useState("");
    const [bp, setBp] = useState("");
    const [glucose_level, setGlucose_level] = useState("");
    const [allergies, setAllergies] = useState("");
    const [pragnent, setPragnent] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [information, setInformation] = useState("");
    const [img, setImg] = useState("");
    const [url, seturl] = ('')

    useEffect(() => {
        fetchpatient().then((data) => {
            setdoterdetail(data.results
            )
        })
    }, [])
    const handlesubmit = (e) => {
        e.preventDefault()
        setdoterdetail({ ...docterdetail, id:docterdetail.id })
        Updatedocter(docterdetail).then((data) => {
            alert(data.messege)
        })
    }

    if (!docterdetail) {
        return <h1>Loading.....</h1>
    }

    console.log(docterdetail, "dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");





    const handledob = (e) => {
        const { name, value } = e.target
        setdoterdetail({ ...docterdetail, [name]: e.target.value })


    }

    const handlefile = (e) => {
        alert(name)
        const { name } = e.target


        setdoterdetail({ ...docterdetail, [name]: e.target.files[0] })

    }

    console.log(docterdetail.img, "efnewjfhu\we");














    return (
        <div>
            <Header {...props} />
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Profile Settings</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                < DashboardSidebar />
                            </StickyBox>
                        </div>

                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="card">
                                <div className="card-body">


                                    <form>
                                        <div className="row form-row">
                                            <div className="col-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="change-avatar">
                                                        <div className="profile-img">
                                                        <img className="avatar avatar-img" src={`https://jeevan.studiomyraa.com/public/uploads/images/${docterdetail.img}`} alt="User Image"/>
                                                        </div>
                                                        <div className="upload-img">
                                                            <div className="change-photo-btn">
                                                                <span><i className="fa fa-upload"></i> Upload Photo</span>
                                                                <input type="file" className="upload" name='img' onClick={handlefile} />
                                                            </div>
                                                            <small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" className="form-control" defaultValue="Richard"

                                                        name="fullname"
                                                        value={docterdetail.fullname}
                                                        onChange={handledob}


                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-control" defaultValue="Wilson" />
                                                </div>
                                            </div> */}
                                            {/* <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Date of Birth</label>
                                                    <div className="cal-icon">
                                                        <input type="text" className="form-control datetimepicker" defaultValue="24-07-1983" />
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Blood Group</label>

                                                    <input type="text" className="form-control"

                                                        name="blood"
                                                        value={docterdetail.blood}
                                                        onChange={handledob}
                                                        />
                                                    
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Email ID</label>
                                                    <input type="email" className="form-control" defaultValue="richard@example.com"

                                                        name="email"
                                                        value={docterdetail.email}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Gender</label>

                                                    <input type="text" className="form-control"
                                                        name="gender"
                                                        value={docterdetail.gender}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Weight</label>
                                                    <input type="text" className="form-control" defaultValue="806 Twin Willow Lane"
                                                        name="weight"
                                                        value={docterdetail.weight}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Height</label>
                                                    <input type="text" className="form-control" defaultValue="806 Twin Willow Lane"
                                                        name="height"
                                                        value={docterdetail.height}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>



                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Age</label>
                                                    <input type="text" className="form-control" defaultValue="806 Twin Willow Lane"
                                                        name="age"
                                                        value={docterdetail.age}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Heart_rate</label>
                                                    <input type="text" className="form-control"
                                                        name="heart_rate"
                                                        value={docterdetail.heart_rate}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Bp</label>
                                                    <input type="text" className="form-control"
                                                        name="bp"
                                                        value={docterdetail.bp}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Glucose_level</label>
                                                    <input type="text" className="form-control"
                                                        name="glucose_level"
                                                        value={docterdetail.glucose_level}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Allegeries</label>
                                                    <input type="text" className="form-control"
                                                        name="allergies"
                                                        value={docterdetail.allergies}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>



                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Pragnent</label>
                                                    <input type="text" className="form-control"
                                                        name="pragnent"
                                                        value={docterdetail.pragnent}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>



                                            
                                            


                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control"
                                                        name="address"
                                                        value={docterdetail.address}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>








                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <input type="text" className="form-control"
                                                        name="city"
                                                        value={docterdetail.city}
                                                        onChange={handledob}
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>State</label>
                                                    <input type="text" className="form-control"

                                                        name="state"
                                                        value={docterdetail.state}
                                                        onChange={handledob}

                                                    />
                                                </div>
                                            </div>


                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Country</label>
                                                    <input type="text" className="form-control"
                                                        name="country"
                                                        value={docterdetail.country}
                                                        onChange={handledob}



                                                    />
                                                </div>
                                            </div>




                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Information</label>
                                                    <input type="text" className="form-control"

                                                        name="information"
                                                        value={docterdetail.information}
                                                        onChange={handledob}


                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="submit-section">
                                            <button type="submit" className="btn btn-primary submit-btn" onClick={handlesubmit}>Save Changes</button>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer {...props} />
        </div>


    );
}

export default Profile;


