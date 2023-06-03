import React, { createContext, useState } from 'react'

export const Pharmacyuser = createContext()

const PharmacyUser = ({children}) => {
    const [pinput , setPinput]=useState()
    const [puser , setPuser] = useState()
  return (
    <Pharmacyuser.Provider value={{puser , setPuser , pinput , setPinput}}>{children}</Pharmacyuser.Provider>
  )
}

export default PharmacyUser