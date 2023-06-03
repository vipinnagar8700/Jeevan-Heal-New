import React from 'react'
import { Bookingcontext } from './Booking'
import { useContext } from 'react'

const Bookingdata = (Incomingcomp) => {


    const Outgoingcomp=(props)=>{
        const{bookingdata,setbookingdata}=    useContext(Bookingcontext)
              return <Incomingcomp
              {...props}
              bookingdata={bookingdata}  setbookingdata={setbookingdata}
              />
        }
    
        return Outgoingcomp


}

export default Bookingdata