export const searchDoctorFilterApi = (state,search) => {
    var formdata = new FormData();
    formdata.append("location", state);
    formdata.append("search", search);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://jeevan.studiomyraa.com/api/search_doctor", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))

        .catch(error => console.log('error', error));
}