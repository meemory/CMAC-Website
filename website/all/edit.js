let Bearer= localStorage.getItem("token");

function updatePerson(){ // * edit the person with
        var dict={};
        var allow=[];
        var temp=[];
        if(document.getElementById("name").placeholder == document.getElementById("name").value || document.getElementById("name").value==""){
            dict["name"] = document.getElementById("name").placeholder;
        }
        else{
          dict["name"] = document.getElementById("name").value;
        }
        if(document.getElementById("surname").placeholder == document.getElementById("surname").value  || document.getElementById("surname").value == ""){
            dict["surname"] = document.getElementById("surname").placeholder;
        }
        else{
          dict["surname"] = document.getElementById("surname").value;
        }
        if(document.getElementById("email").placeholder == document.getElementById("email").value || document.getElementById("email").value == ""){
            dict["email"] = document.getElementById("email").placeholder;
        }
        else{
          dict["email"] = document.getElementById("email").value;
        }
        let j=0;
        for(let i = 0; i< localStorage.getItem("amountCheck"); i++){
            temp[i] = document.getElementById(i).checked;
            if(temp[i]){
              allow[j]=i;   
              j++;
            }
        }
        dict["nfc"] = document.getElementById("nfc").value;
        dict["allow"] = allow;
        
        console.log(dict.name);
        console.log(dict.surname);
        console.log(dict.email);
        console.log(dict.nfc);
        console.log(dict.allow);
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
            "Authorization": Bearer,
        },
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
               alert("edited User");
               location.href="../all/allpersons.html"
        })
            .catch((error) => alert());

  }


function updateMachine() { // * edit the machine name
        var name="";
        if(document.getElementById("name").placeholder == document.getElementById("name").value){
          alert("please fill in a name")  
          return;
        }
        else(name = document.getElementById("name").value);
        fetch("https://testapi.robli.at/machine/update/" + localStorage.getItem("id"), {
        method: "PUT",
        body: JSON.stringify({
            name : name,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": Bearer,
        },
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
               alert("edited Machine");
               location.href="../all/allmachines.html";
        })
            .catch((error) => alert());

}
 
 async function showMachineNames(){ 
    let [data, data1] = await Promise.all([
      fetch("https://testapi.robli.at/user/all",{headers: {"Authorization": Bearer}}).then((response) =>
        response.json()
      ),
      fetch("https://testapi.robli.at/machine/all",{headers: {"Authorization": Bearer}}).then((response) =>
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

  async function onloadMachineEdit(){
    let response = await fetch("https://testapi.robli.at/machine/all",{headers: {"Authorization": Bearer}});
    let data = await response.json();

    document.getElementById("name").placeholder=data[localStorage.getItem("update")].name;
    localStorage.setItem("id", data[localStorage.getItem("update")]._id);
  }