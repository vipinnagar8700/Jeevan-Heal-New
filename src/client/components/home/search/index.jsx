import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { allCitys, countrydata, statedata } from '../../../components/countryState';
import { result } from 'lodash';
import { useHistory } from 'react-router-dom';

const homeSearch = (props) => {
    let history = useHistory();
    //Aos
    const [search, setsearch] = useState(' ');

    const [city, setcity] = useState();

    let newcity;
    const [state, setstate] = useState("");

    console.log(countrydata, "all")
    const handlestate = (e) => {
        const Astate = e.target.value;
        newcity = allCitys[Astate
        ]
        setstate(Astate)
        setcity([...newcity])

        console.log(Astate, "kjhxgcdgvhjm");
    }
    const HanldeData =(e)=>{
     alert(e.target.value)
     newcity = allCitys[Astate
     ]
     setstate(Astate)
     setcity([...newcity])

     console.log(Astate, "kjhxgcdgvhjm");


    }

   const searchDoctor = (e) => {
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("location", state);
        formdata.append("search", search);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://jeevan.studiomyraa.com/api/search_doctor", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            
            .catch(error => console.log('error', error));
            if(result){
                history.push("/patient/search-doctor-filter");
            }
    }

     let filtercity= allCitys.filter((data)=>{
    return data.toLowerCase().includes(state.toLowerCase())
    })
    return (
        <section className="section section-search">
            <div className="container-fluid">
                <div className="banner-wrapper">
                    <div className="banner-header text-center">
                        <h1>Search Doctor, Make an Appointment </h1>
                        <p>Discover the best doctors, clinic & hospital the city nearest to you</p>
                    </div>

                    <div className="search-box">
                        <form >
                            <div className="form-group search-location">
                               <input type="text" className="form-control"  onChange={handlestate} placeholder="Search Location" /> 
                                {/* <select className="form-control" tabindex="-1" aria-hidden="true" placeholder="Search Location"> */}
                                    {/* <option value="">Select Your State</option> */}
                                    <select  type='text' onChange={HanldeData} className='avaa form-control' >
                                    {
                                        filtercity && filtercity.length > 0 && filtercity.map((s) => {
                                            return (
                                                <option value={s}>{s}</option>
                                            )
                                        })
                                    }
                                    </select>
                                    
                                {/* </select> */}
                                <span className="form-text">Based on your Location</span>
                            </div>
                            <div className="form-group search-info">
                                <input type="text" className="form-control" value={search} onChange={(e) => setsearch(e.target.value)} placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                                <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                            </div>
                            <button type="submit" onClick={searchDoctor} className="btn btn-primary search-btn mt-0">
                                <FontAwesomeIcon icon={faSearch} /> <span>Search</span></button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}


export default homeSearch;

