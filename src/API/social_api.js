import { result } from "lodash";
import { getlocalstroeage } from "../Helper/localstorage";

export const fetchdsocial=()=>{
  let token=getlocalstroeage('login2')

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token.token}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
   return fetch("https://jeevan.studiomyraa.com/api/edit_doctor", requestOptions)
     
      .then((result)=>{
        return result.json()
      })
      .catch(error => console.log('error', error));
}

export const Updatesocail=(docterdetail)=>{
  const{id, facebook_url,tweeter_url,instagram_url,pinterest_url,linkedin_url,youtube_url}=docterdetail
console.log(id, facebook_url,tweeter_url,instagram_url,pinterest_url,linkedin_url,youtube_url,"hi social m update");
  let token=getlocalstroeage('login2')
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${token.token}`);

var formdata = new FormData();
formdata.append("doctor_id", id);

		formdata.append("facebook_url", facebook_url);
		formdata.append("tweeter_url", tweeter_url);
		formdata.append("instagram_url", instagram_url);
		formdata.append("pinterest_url", pinterest_url);
		formdata.append("linkedin_url", linkedin_url);
		formdata.append("youtube_url", youtube_url);
	

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

return fetch("https://jeevan.studiomyraa.com/api/update_doctor_socialmedia", requestOptions)
  
  .then((res)=>{
    return res.json();
  })
  .catch(error => console.log('error', error));
}