import React from "react";


const PersonalInfo = ({formData, setFormData}) => {
    return (
        <div className="main">
            <div className="input-section">
                <input type="text" placeholder="First name" value={formData.firstName} onChange={(event) => setFormData({...formData, firstName: event.target.value})}/>
                <input type="text" placeholder="Last name" value={formData.lastName} onChange={(event) => setFormData({...formData, lastName: event.target.value})}/>
                <input type="text" placeholder="username"  value={formData.userName} onChange={(event) => setFormData({...formData, userName: event.target.value})} />
            </div>

        </div>
    )
}
export default PersonalInfo