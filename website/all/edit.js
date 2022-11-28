 function updatePerson(){
        var dict={};
        var allow=[];
        var temp=[];
        if(document.getElementById("name").placeholder != document.getElementById("name").value){
            dict["name"] = document.getElementById("name").value;
        }
        if(document.getElementById("surname").placeholder != document.getElementById("surname").value){
            dict["surname"] = document.getElementById("surname").value;
        }
        if(document.getElementById("email").placeholder != document.getElementById("email").value){
            dict["email"] = document.getElementById("email").value;
        }
        let j=0;
        for(let i = 0; i< localStorage.getItem("amountCheck"); i++){
            temp[i] = document.getElementById(i).checked;
            alert("temp");

            if(temp[i]){
              allow[j]=i;   
              j++;
            }
        }
        dict["nfc"] = document.getElementById("nfc").value;
        dict["allow"] = allow;
        fetch("https://testapi.robli.at/user/update/" + localStorage.getItem("id"), {
        method: "PUT",
        body: JSON.stringify({
            name : dict.name,
            surname : dict.surname,
            email: dict.email,
            nfc : dict.nfc,
            allow : dict.allow,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
               alert(dict.allow);
        })
            .catch((error) => alert());

        alert("done");
  }



 
 async function showMachineNames(){
    let [data, data1] = await Promise.all([
      fetch("https://testapi.robli.at/user/all").then((response) =>
        response.json()
      ),
      fetch("https://testapi.robli.at/machine/all").then((response) =>
        response.json()
      ),
    ]);
    for (let i = 0; i < data1.length; i++) {
      td = document.createElement("input");
      td.type="checkbox";
      td.id=i;
      td.name="check"+i;
      label=document.createElement("label");
      label.for="check" +i;
      label.appendChild(td);
      label.appendChild(document.createTextNode(data1[i].name));  
      document.getElementById("form").appendChild(label);
    }
    document.getElementById("name").placeholder=data[localStorage.getItem("update")].name;
    document.getElementById("surname").placeholder=data[localStorage.getItem("update")].surname;
    document.getElementById("email").placeholder=data[localStorage.getItem("update")].email;
    localStorage.setItem("amountCheck", data1.length);
    localStorage.setItem("id", data[localStorage.getItem("update")]._id);
    for(let i = 0; i< data[localStorage.getItem("update")].allow.length; i++){
      document.getElementById(data[localStorage.getItem("update")].allow[i]).checked=true;
    }
  }