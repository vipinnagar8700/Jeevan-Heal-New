import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG_sp_02, IMG_sp_03, IMG_sp_04, IMG_sp_05, IMG_fe_01, IMG_fe_02, IMG_fe_03, IMG_fe_04 } from './img';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import img1 from "../../../../assets/images/feature-01.jpg";
import img2 from "../../../../assets/images/feature-02.jpg";
import img3 from "../../../../assets/images/feature-03.jpg";
import img4 from "../../../../assets/images/feature-04.jpg";
import MyComponent from "./mycomponent"

import { slice } from 'lodash'
import Bookingdata from '../../../../../Context/Bookingdata';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { filterselector } from '../../../../../Redux/Action/A';

const SearchList = ({ bookingdata, setbookingdata }) => {
    let history = useHistory();
    const [post, setPost] = useState([])
    let filterdata = useSelector(filterselector)

    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(5)
    const initialOnline = slice(post, 0, index)
    function handleClick() {
        history.push("/patient/booking");
    }


    useEffect(() => {

        setPost(filterdata)

    }, [filterdata])
    const getData = () => {
        fetch('https://jeevan.studiomyraa.com/api/get_all_doctors')
            .then((res) => res.json())
            .then((json) => {
                console.log(json, "DoctorDate")
                setPost(json.results)
            })

            .catch((e) => console.log(e))
    }

    const loadMore = () => {
        setIndex(index + 5)
        console.log(index)
        if (index >= post.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }
    useEffect(() => {
        getData()

    }, [])
    console.log(bookingdata);

    return (
        <>
            <div>
                {post ? post.length > 0 && (
                    <div>
                        {post.map((items, index) => {
                            return (
                                <div className="card" key={index}>
                                    <div className="card-body">
                                        <div className="doctor-widget">
                                            <div className="doc-info-left">
                                                <div className="doctor-img">
                                                    <Link to={"/patient/doctor-profile/" + items.id}>
                                                        <img src={`https://jeevan.studiomyraa.com/public/uploads/images/${items.img}`} className="img-fluid" alt="User" />
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name">
                                                        <Link to={"/patient/doctor-profile/" + items.id}>
                                                            {items.fullname}</Link>
                                                    </h4>
                                                    <p className="doc-speciality">{items.digree} - {items.holder_name} </p>
                                                    <h5 className="doc-department"><img src={`https://jeevan.studiomyraa.com/public/uploads/images/${items.reg_img}`} className="img-fluid" alt="User" />{items.special}</h5>
                                                    <div className="rating">
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span className="d-inline-block average-rating">(17)</span>
                                                    </div>
                                                    <div className="clinic-details">
                                                        <p className="doc-location"><i className="fas fa-map-marker-alt"></i> {items.address}, {items.city}, {items.state}</p>
                                                        <div>
                                                        </div>

                                                    </div>
                                                    {/* <div className="clinic-services">
                                    <span>Dental Fillings</span>
                                    <span> Whitneing</span>
                                </div> */}
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clini-infos">
                                                    <ul>
                                                        <li><i className="far fa-thumbs-up"></i> 98%</li>
                                                        <li><i className="far fa-comment"></i> 17 Feedback</li>
                                                        <li><i className="fas fa-map-marker-alt"></i> Florida, USA</li>
                                                        <li>
                                                            <i className="far fa-money-bill-alt">
                                                            </i> $300 - $1000 <OverlayTrigger overlay={
                                                                <Tooltip id="tooltip-disabled">Lorem Ipsum</Tooltip>
                                                            }>
                                                                <span className="d-inline-block">
                                                                    <i className="fas fa-info-circle"></i>
                                                                </span>
                                                            </OverlayTrigger>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="clinic-booking">
                                                    <Link to={"/patient/doctor-profile/"} className="view-pro-btn">
                                                        View Profile</Link>
                                                    <Link className="apt-btn" onClick={() => {

                                                        setbookingdata({ ...bookingdata, id: items.id })
                                                        handleClick()

                                                    }}
                                                    > Book Appointment</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                ) : <div className="rightSection">No Record match.</div>}
                {isCompleted ? (
                    <div class="loadBtn">
                        <button
                            onClick={loadMore}
                            type="button"

                        >
                            That's It
                        </button>
                    </div>
                ) : (
                    <div class="loadBtn mb-5">
                        <button className='load-more text-center "btn btn-primary btn-sm' onClick={loadMore} type="button" >
                            Load More +
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}


export default Bookingdata(SearchList);