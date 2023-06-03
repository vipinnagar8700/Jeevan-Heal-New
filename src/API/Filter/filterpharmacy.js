export const  pharmacyfilter=(state,city,del,hour,popular,rating,latest)=>{
    console.log(state,city,"valuecheck");
    var formdata = new FormData();
    if(state){
        formdata.append("state",state);
    }
     if(city){
        formdata.append("city",city);
    }
    if(del){
        formdata.append("deliver",del);
    }
    if(hour){
        formdata.append("hour",hour);
    }
    if(popular){
        formdata.append("popular",popular);
    }
    if(rating){
        formdata.append("rating",rating);
    }
    if(latest){
        formdata.append("latest", latest);
    }
   
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
   return   fetch("https://jeevan.studiomyraa.com/api/get_pharmacy_filter", requestOptions)
   .then((result)=>{
    return result.json()
  })
  .catch(error => console.log('error', error));
}

export const mediciene=(mediciencefilter)=>{
    const{product,categoryid}=mediciencefilter
    var formdata = new FormData();
formdata.append("product_name",product);
formdata.append("category_id",categoryid);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

  return fetch("https://jeevan.studiomyraa.com/api/get_product_filter", requestOptions)
  .then((result)=>{
    return result.json()
  })
  .catch(error => console.log('error', error));


}

   export const docterfilterpage=(docter)=>{
    const{gender,
    specialist}=docter
    var formdata = new FormData();
formdata.append("gender",gender);
formdata.append("special", specialist);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

  return fetch("https://jeevan.studiomyraa.com/api/get_doctor_filter", requestOptions)
  .then((result)=>{
    return result.json()
  })
  .catch(error => console.log('error', error));
}