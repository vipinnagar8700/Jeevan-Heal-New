import React, { createContext } from 'react'
import { useState } from 'react'
export const Bookingcontext=createContext()
const Booking = ({children}) => {
    const [bookingdata,setbookingdata]=useState({
       doctor_id:false,
       id:false,
       time:false,
       date:false,
       payment:false,
       card_number:false,
       phone:false,
       email:false,
       name:false,
       patient_id:false

    
    }
        )
  return (
   <Bookingcontext.Provider value={{bookingdata,setbookingdata}}>
{ children}
   </Bookingcontext.Provider>
  )
}

export default Booking