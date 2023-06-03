import React from 'react';

import Slidersearchdr from './slidersearchdr';
import SearchList from './searchList';
import StickyBox from "react-sticky-box";
import Header from "../../header"
import Footer from "../../footer"


const SearchDoctorfilter =(props,data)=>{




console.log(data,"alllllllllllllllllllllllllllllllll");
		return (
			<div>
				<Header {...props}/>
				
				<Slidersearchdr></Slidersearchdr>
				
				<div className="content">
					<div className="container-fluid">

						<div className="row">
							

							<div className="col-md-12 col-lg-8 col-xl-9">
								<SearchList />
								
							</div>
						</div>

					</div>

				</div>
				<Footer {...props} />
			</div>
		);
	}

export default SearchDoctorfilter;