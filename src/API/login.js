import { Phone } from '@material-ui/icons';
import axios from 'axios'  

export const loginaction=(phone,password)=>{
   var formdata = new FormData();
formdata.append("phone", phone);
formdata.append("password", password);

var requestOptions = {
       
    
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

 return fetch("https://jeevan.studiomyraa.com/api/login_action", requestOptions)
  
  .then((data)=>{
    return data.json()
  })
  .catch(error => console.log('error', error));

}