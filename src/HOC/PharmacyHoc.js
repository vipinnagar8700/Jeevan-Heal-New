import React, { useContext } from 'react'
import { Pharmacyuser } from '../Context/PharmacyUser'

const PharmacyHoc = (Pharmacyinput) => {
  
    const Pharmacyoutput = (props)=>{

        
        const Pdata = {puser , setPuser , pinput , setPinput}=useContext(Pharmacyuser)

        return <Pharmacyinput {...props} {...Pdata}/>
    }

    return Pharmacyoutput
}

export default PharmacyHoc