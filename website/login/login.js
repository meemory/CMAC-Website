function generateToken(){
    let data = new FormData();
    data.append("username", document.getElementById("user").value);
    data.append("password", document.getElementById("password").value);
    
    fetch("https://testapi.robli.at/user/admin/login", {
        method: "POST", 
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        },
        body: data, 
        mode: "no-cors",
        credentials: 'include',
       
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        // .catch((error) => alert(error));
}