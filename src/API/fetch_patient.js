import { result } from "lodash";
import { getlocalstroeage } from "../Helper/localstorage";

export const fetchpatient=()=>{
  let token=getlocalstroeage('login2')

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token.token}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
   return fetch("https://jeevan.studiomyraa.com/api/edit_petient/4", requestOptions)
     
      .then((result)=>{
        return result.json()
      })
      .catch(error => console.log('error', error));
}

export const Updatedocter=(docterdetail)=>{
  const{fullname,email,gender,weight,height,age,blood,heart_rate,bp,glucose_level,allergies,pragnent,address,city,state,country,information,img}=docterdetail
console.log(fullname,email,gender,weight,height,age,blood,heart_rate,bp,glucose_level,allergies,pragnent,address,city,state,country,information,img,"jifiehfeeeeeeee");
  let token=getlocalstroeage('login2')
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${token.token}`);

var formdata = new FormData();
formdata.append("fullname", fullname);
formdata.append("email", email);
formdata.append("gender", gender);
formdata.append("weight", weight);
formdata.append("height", height);
formdata.append("age", age);
formdata.append("blood", blood);
formdata.append("heart_rate", heart_rate);
formdata.append("bp", bp);
formdata.append("glucose_level", glucose_level);
formdata.append("allergies", allergies);
formdata.append("pragnenet", pragnent);
formdata.append("address", address);
formdata.append("city", city);
formdata.append("state", state);
formdata.append("country", country);
formdata.append("information", information);
formdata.append("img", img, `/C:/Users/user/Pictures/Screenshots/${img.name}`);


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

return fetch("https://jeevan.studiomyraa.com/api/edit_petient_action", requestOptions)
  
  .then((res)=>{
    return res.json()
  })
  .catch(error => console.log('error', error));
}