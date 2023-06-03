import React from "react";
  

const SignUpInfo = ({formData, setFormData}) => {
    return(

        <div className="main">
        <div className="input-section">
           <input type="text" placeholder="Email" value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})} />
           <input type="password" placeholder="password..."  value={formData.password} onChange={(event) => setFormData({...formData, password: event.target.value})} />
           <input type="password" placeholder="confirm password"  value={formData.confirmPassword} onChange={(event) => setFormData({...formData, confirmPassword: event.target.value})}/>
        </div>

        </div>
    )
}
export default SignUpInfo