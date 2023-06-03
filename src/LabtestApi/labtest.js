import { Category } from "@material-ui/icons";
import Cookies from "js-cookie";
import axios from 'axios';

import  {Url } from "../../Url/allUrl";
import '../../../jhhhhh/env';
let DataUrl = Url();
// console.log(process.env.URL,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

console.log(DataUrl,"lllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
var rolea = "lab";
export const labRegister = (values) => {
    const { name, email, password } = values;
    console.log(values, "role value goty it");
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("role", "lab");
    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/lab_registration`, requestOptions)

        .then((result) => {
            return result.json();
        })
        .catch(error => console.log('error', error));




}


// Add Product
export const addLabtest = (values) => {

    const { categoryName, name, price, report_time, discount, description, image } = values;
    console.log(image.name);
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    console.log(token);


    var formdata = new FormData();
    formdata.append("category_id", categoryName);
    formdata.append("test_name", name);
    formdata.append("price", price);
    formdata.append("report_time", report_time);
    formdata.append("discount", discount);
    formdata.append("description", description);
    formdata.append("img", image);



    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/add_labtest`, requestOptions)


        .then((result) => {
            console.log(result);
            return result.json();
        })
        .catch(error => console.log('error', error));

};



// edit product

export const editLabtest = (p_id) => {
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/view_single_labtest/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}
// Update  data in the Product

export const updatelabtest = (p_id, test_name, categoryName, price, report_time, discount, description, img) => {
    // Update data 
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("category_id", categoryName);
    formdata.append("test_name", test_name);
    formdata.append("price", price);
    formdata.append("report_time", report_time);
    formdata.append("discount", discount);
    formdata.append("description", description);
    formdata.append("img", img);
    formdata.append("test_id", p_id);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/update_labtest`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));

}



// Add Product
export const addLabtestLocation = (values) => {

    const { labtestName, city, address } = values;
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    console.log(token);


    var formdata = new FormData();
    formdata.append("labtest_id", labtestName);
    formdata.append("city", city);
    formdata.append("address", address);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/add_labtest_location`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
};

// EDditr   lovcation

export const editLabtestLocation = (p_id) => {
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/single_labtest_location/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const updatelabtestLocation = (editlabtestData) => {
    console.log(editlabtestData, "edit");
    const { id, city, address, labtest } = editlabtestData;
    console.log(labtest, city, address, "njkhbvedsmxenwshgb")
    let ida = labtest[0].category_id;
    console.log(id, "hdgecwfsanhsnq");
    // Update data 
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("labtest_id", ida);
    formdata.append("city", city);
    formdata.append("address", address);
    formdata.append("location_id", id);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/update_labtest_location`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));

}


export const updatelabtestcategory = (id, name) => {
    console.log(id, name);
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("category_id", id);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/update_labtest_category`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

// edit profile lab

export const editProfilelab = () => {
    let token = Cookies.get("lab")
    console.log(process.env.url,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/get_lab_profile`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

// update Profile


export const updateProfilelab = (name, lname, img, email, about, address, address1, address2, certificate_img, city, clinic_img, company, deliver, dob, gender, mob, photo_id, pincode, state, time_sedule) => {
    let token = Cookies.get("lab")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    console.log(token);


    const formData = new FormData();
    formData.append("city", city);
    formData.append("state", state);
    formData.append("address1", address1);
    formData.append("address2", address2);
    formData.append("pincode", pincode);
    formData.append("deliver", deliver);
    formData.append("image", img, `/C:/Users/Vipin Nagar/Downloads/${img.name}`);
    formData.append("certificate_img", certificate_img, `/C:/Users/Vipin Nagar/Downloads/${certificate_img.name}`);
    formData.append("photo_id", photo_id, `/C:/Users/Vipin Nagar/Downloads/${photo_id.name}`);
    formData.append("clinic_img", clinic_img, `/C:/Users/Vipin Nagar/Downloads/${clinic_img.name}`);
    formData.append("time_schedule", time_sedule);
    formData.append("mob", mob);
    formData.append("about", about);
    formData.append("name", name);

    // Add other necessary headers
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: formData,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/update_lab_profile`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}


// ncbhvjsdjknm,Lab
export const labReg = (alldata) => {
    const { city, state, deliver, address1, address2, image, clinicimage, pincode, certifiedimage, photoid, timeschedule, mobile, about } = alldata
    console.log(certifiedimage)
    var myHeaders = new Headers();
    let token = Cookies.get("lab")
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();

    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("address1", address1);
    formdata.append("address2", address2);
    formdata.append("pincode", pincode);
    formdata.append("deliver", deliver);
    formdata.append("image", image, `/C:/Users/user/Downloads/${image.name}`);
    formdata.append("certificate_img", certifiedimage, `/C:/Users/user/Downloads/${certifiedimage.name}`);
    formdata.append("photo_id", photoid, `/C:/Users/user/Downloads/${photoid.name}`);
    formdata.append("clinic_img", clinicimage, `/C:/Users/user/Downloads/${clinicimage.name}`);
    formdata.append("time_sedule", timeschedule);
    formdata.append("mob", mobile);
    formdata.append("about", about);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${DataUrl}/api/lab_registration_datails`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));

}