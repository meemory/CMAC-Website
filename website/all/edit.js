 function updatePerson(){
        var dict={};
        var allow=[];
        if(document.getElementById("name").placeholder != document.getElementById("name").value){
            dict["name"] = document.getElementById("name").value;
        }
        if(document.getElementById("surname").placeholder != document.getElementById("surname").value){
            dict["surname"] = document.getElementById("surnam").value;
        }
        if(document.getElementById("email").placeholder != document.getElementById("email").value){
            dict["email"] = document.getElementById("email").value;
        }
        for(let i = 0; i< localStorage.getItem("amountCheck"); i++){
            allow[i] = document.getElementById(i).checked;
        }
        dict["nfc"] = document.getElementById("nfc").value;
        
        fetch("https://testapi.robli.at/user/update/" + localStorage.getItem("id"), {
        method: "PUT",
        body: JSON.stringify({
            name : dict.name,
            surname : dict.surname,
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
               alert("WIN WIN")
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
    localStorage.setItem("amountCheck", data[localStorage.getItem("update")].allow.length);
    localStorage.setItem("id", data[localStorage.getItem("update")]._id);
    for(let i = 0; i< data[localStorage.getItem("update")].allow.length; i++){
      document.getElementById(data[localStorage.getItem("update")].allow[i]).checked=true;
    }
  }