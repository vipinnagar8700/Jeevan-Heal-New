import { getlocalstroeage } from "../../Helper/localstorage";

export const singledocter=(id)=>{
    let token=getlocalstroeage('login2')

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token.token}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

 return fetch(`https://jeevan.studiomyraa.com/api/get_single_doctor/${id}`, requestOptions)
 
  .then((result)=>{
    return result.json()
  })
  .catch(error => console.log('error', error));
}

export const bookingsubmit=(bookingdata,id)=>{
  const{card_number,date,doctor_id,email,name,patient_id,phone,time}=bookingdata

  let token=getlocalstroeage('login2')

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token.token}`);
var formdata = new FormData();
formdata.append("name", name);
formdata.append("email", email);
formdata.append("phone", phone);
formdata.append("card_number", card_number);
formdata.append("payment", "150");
formdata.append("date","05/04/2023");
formdata.append("time", "12:00 AM");
formdata.append("patient_id",id);
formdata.append("doctor_id", doctor_id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

 return fetch("https://jeevan.studiomyraa.com/api/appointment_booking", requestOptions)
 
  .then((result)=>{
    return result.json()
  })
  .catch(error => console.log('error', error));
}

export const invoicesubmit=(id)=>{
  let token=getlocalstroeage('login2')

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token.token}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

 return fetch(`https://jeevan.studiomyraa.com/api/invoice/${id}`, requestOptions)
  .then((result)=>{
     return result.json()
  })
  .catch(error => console.log('error', error));
}