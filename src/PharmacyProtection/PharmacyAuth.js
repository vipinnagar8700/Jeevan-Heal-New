import Cookies from 'js-cookie'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const PharmacyAuth = ({ children }) => {

  const history = useHistory()
  let data = Cookies.get('pharmToken')
  console.log(data, "dljhfiylwegfweyfwyifgwfwqeyufqeiyfeqyifyifqeif");

  if (!data) {
    history.push("/login")
  }
  
  return children
}

export default PharmacyAuth