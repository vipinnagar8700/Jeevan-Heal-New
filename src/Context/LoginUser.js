import React, { createContext,useEffect } from "react";
import { useState } from "react";

import { getlocalstroeage } from "../Helper/localstorage";
import { userlog } from "../API/UserDetails/Userlogin";



export const Loginusercontext = createContext();


const Loginuser = ({ children }) => {
    let token=getlocalstroeage('login2')
  const [loading, setloading] = useState(true);
  const [auser, setauser] = useState(null);
  
  useEffect(() => {
    if (token.token) {
        userlog().then((user) => {
       console.log(user,"user data");
       setauser(user)
       setloading(false)
      });
    } else {
     setloading(false);
    }
  }, []);
  if (loading) {
    return  <h1>Loading....</h1>
  }

  return (
    <Loginusercontext.Provider value={{ auser, setauser }}>
      {children}
    </Loginusercontext.Provider>
  );
};

export default Loginuser;
