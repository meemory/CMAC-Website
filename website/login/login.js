async function  generateToken(){
    // let data = new FormData();
    // data.append("username", document.getElementById("user").value);
    // data.append("password", document.getElementById("password").value);
    
    // print(data);

    await fetch("http://testapi.robli.at/user/admin/login", {
        method: "POST", 
        headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({
            'username': document.getElementById("user").value,
            'password': document.getElementById("password").value,
        }), 
       
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.access_token);
            if(data.access_token!=null){
                localStorage.setItem("token", "Bearer " + data.access_token);
                window.location="../main/index.html";
            }
        })
        // .catch((error) => alert(error))  ;
}