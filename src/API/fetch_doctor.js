import { result } from "lodash";
import { getlocalstroeage } from "../Helper/localstorage";

export const fetchdoctor=()=>{
  let token=getlocalstroeage('login2')

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token.token}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
   return fetch("https://jeevan.studiomyraa.com/api/edit_doctor/4", requestOptions)
     
      .then((result)=>{
        return result.json()
      })
      .catch(error => console.log('error', error));
}

export const Updatedocter=(docterdetail)=>{
  const{fullname,id_no,gender,dob,address,city,state,about,reg_no,holder_name,exp_month,exp_year,cvv,card_number,digree,special,prize,id,img,reg_img,id_img}=docterdetail
console.log(fullname,id_no,gender,dob,address,city,state,about,reg_no,holder_name,exp_month,exp_year,cvv,card_number,digree,special,prize,id,img,reg_img,id_img,"jifiehfeeeeeeee");
  let token=getlocalstroeage('login2')
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${token.token}`);

var formdata = new FormData();
formdata.append("fullname", fullname);
formdata.append("id_no", id_no);
formdata.append("gender", gender);
formdata.append("dob", dob);
formdata.append("address", address);
formdata.append("city", city);
formdata.append("state", state);
formdata.append("about", about);
formdata.append("reg_no", reg_no);
formdata.append("holder_name", holder_name);
formdata.append("exp_month", exp_month);
formdata.append("exp_year", exp_year);
formdata.append("cvv", cvv);
formdata.append("card_number", card_number);
formdata.append("digree", digree);
formdata.append("special", special);
formdata.append("prize", prize);
formdata.append("doctor_id",id);
formdata.append("img", img, `/C:/Users/user/Pictures/Screenshots/${img.name}`);
formdata.append("reg_img", reg_img, `/C:/Users/user/Pictures/Screenshots/${reg_img.name}`);
formdata.append("id_img",id_img, `/C:/Users/user/Pictures/Screenshots/${id_img}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

return fetch("https://jeevan.studiomyraa.com/api/edit_doctor_action", requestOptions)
  
  .then((res)=>{
    return res.json()
  })
  .catch(error => console.log('error', error));
}