import React from 'react';

import SearchFilter from './searchFilter';
import Slidersearchdr from './slidersearchdr';
import SearchList from './searchList';
import StickyBox from "react-sticky-box";
import Header from "../../header"
import Footer from "../../footer"


const SearchDoctor =(props)=>{


		return (
			<div>
				<Header {...props}/>
				
				<Slidersearchdr></Slidersearchdr>
				
				<div className="content">
					<div className="container-fluid">

						<div className="row">
							<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
								<StickyBox offsetTop={20} offsetBottom={20}>
									<SearchFilter />
								</StickyBox>
							</div>

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

export default SearchDoctor;