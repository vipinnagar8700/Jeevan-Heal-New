import React, { createContext, useEffect, useState } from 'react'
import { userlog } from '../API/UserDetails/Userlogin'
import { getlocalstroeage } from '../Helper/localstorage'
export const Registerc=createContext()

const Registerauth = ({children}) => {
    const[loading,setloading]=useState(true)
    const[pat,setpat]=useState("vipin kumar")
    let token=getlocalstroeage('login2')
    useEffect(()=>{
   if(token){
    userlog().then((data)=>{
      
           setpat(data)
           setloading(false)
    
       })
   }else{
    setloading(false)
   }
    },[])
    if(loading){
        return <h1>Loading...........</h1>
    }
    console.log(pat,"utctctyrxnnnnnnnnnnbbbbbbb");
  return (
  
   <Registerc.Provider  value={{pat,setpat}}>
    {children}
   </Registerc.Provider>
  )
}

export default Registerauth