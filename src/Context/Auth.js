import React, { createContext, useState } from 'react'

export const Authusera = createContext();

const Authroute = ({children}) => {

    const [auser , setauser]=useState(null)
  return (
    <Authusera.Provider value={{auser , setauser}}>
        {children}
    </Authusera.Provider>    
  )
}

export default Authroute