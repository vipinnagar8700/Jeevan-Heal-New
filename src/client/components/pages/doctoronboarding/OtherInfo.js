import React from "react";


const OtherInfo = ({formData, setFormData}) => {
    return (
        
            <div className="main">
                <div className="input-section">
                    <input type="text" placeholder="Nationality" value={formData.nationality} onChange={(event) => setFormData({...formData, nationality: event.target.value})}/>
                    <input type="text" placeholder="other" value={formData.other} onChange={(event) => setFormData({...formData, other: event.target.value})}/>
                  
                </div>

            </div>
        
    )
}
export default OtherInfo