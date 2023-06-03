import React from 'react'
import { getlocalstroeage } from '../../Helper/localstorage';

export const userlog = () => {
    let token=getlocalstroeage('login2')

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token.token}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
   return fetch("https://jeevan.studiomyraa.com/api/me", requestOptions)
     
      .then((result)=>{
        return result.json()
      })
      .catch(error => console.log('error', error));
}