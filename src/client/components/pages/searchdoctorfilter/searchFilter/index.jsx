import { DatasetController } from "chart.js";
import React, {useState,useEffect} from "react";
import DatePicker from "react-datepicker";
import { docterfilterpage } from "../../../../../API/Filter/filterpharmacy";
import { useDispatch } from "react-redux";
import { filterdocteraction } from "../../../../../Redux/Action/A";

const SearchFilter =()=> {
    const dispatch=useDispatch()

    const [date, setDate] = useState(new Date());
    const [post, setPost] = useState([])

    const handleChange = (date) => {
        setDate(date)
    } 
    
    useEffect(()=>{
    },[])
   

        
    const [docterfilter,setdocterfilter]=useState({
        gender:'',
        specialist:""
    })

    const handledoctersubmit=()=>{
         docterfilterpage(docterfilter).then((res)=>{
            console.log(res.results,"djdjdjdjdjjdj");
            if(res && res.results){
                dispatch(filterdocteraction(res.results))
            }
           
         })
    }
    console.log(post
        ,"doctersssssssssssss",docterfilter);
        return(
                 <div className="card search-filter">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Search Filter</h4>
                            </div>
                            <div className="card-body">
                            {/* <div className="filter-widget">
                                <div className="cal-icon">                               
                                  <DatePicker
                                    selected={date}
                                    onChange={handleChange}
                                    className="form-control datetimepicker"											
                                />
                                </div>			
                            </div> */}
                            <div className="filter-widget">
                                <h4>Gender</h4>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="gender_type" value='male' onChange={(e)=>setdocterfilter({...docterfilter,gender:e.target.value})} />
                                        <span className="checkmark"></span> Male Doctor
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox"   value='female' name="gender_type"   onChange={(e)=>setdocterfilter({...docterfilter,gender:e.target.value})} />
                                        <span className="checkmark"></span> Female Doctor
                                    </label>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <h4>Select Specialisthjhhh</h4>
                                {
                                  post && post.length>0  &&  post.map((data)=>{
                                    const{special
}=data
                                      return(<div>
                                        <label className="custom_check">
                                            <input type="checkbox"  value={special} onChange={(e)=>setdocterfilter({...docterfilter, specialist:e.target.value})} name="select_specialist" />
                                            <span className="checkmark"></span> {special}
                                        </label>
                                        
                                    </div>)
                                    })
                                }
                                
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist"  />
                                        <span className="checkmark"></span> FREE Appointment
                                    </label>
                                    
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist"  />
                                        <span className="checkmark"></span> Urology
                                    </label>

                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist"  />
                                        <span className="checkmark"></span> Neurology
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span className="checkmark"></span> Dentist
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span className="checkmark"></span> Orthopedic
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span className="checkmark"></span> Cardiologist
                                    </label>
                                </div>
                                <div>
                                    <label className="custom_check">
                                        <input type="checkbox" name="select_specialist" />
                                        <span className="checkmark"></span> Cardiologist
                                    </label>
                                </div>
                            </div>
                                <div className="btn-search">
                                    <button type="button" className="btn w-100"  onClick={handledoctersubmit}>Search</button>
                                </div>	
                            </div>
                        </div>
        );
    }


export default SearchFilter;