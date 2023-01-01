Bearer= localStorage.getItem("token");

async function listAll() { //lists all machines with delete and edit 
  
  let response = await fetch("https://testapi.robli.at/machine/all",{headers: {"Authorization": localStorage.getItem("token")}});

  let data = await response.json();
  let d;
  for (let i = 0; i < data.length; i++) {

    div = document.createElement("div");
    div.className = "p-2 g-3";
    div.id="card" + i;
    col = document.createElement("div");
    col.className = "card shadow-border text-bg-dark border-dark";
    card = document.createElement("div");
    card.className = "card-body";
    cardtitle = document.createElement("h5");
    cardtitle.className = "card-title";
    cardbody = document.createElement("span");
    cardbody.className = "card-text";


    dropdown = document.createElement("button");
    dropdown.className = "btn-close btn-close-white";
    dropdown.style.width = "0.5em";
    dropdown.style.height = "0.5em";
    dropdown.dataset.bsToggle = "modal";
    dropdown.dataset.bsTarget="#staticBackdrop"
    dropdown.ariaLabel="Close";
    dropdown.id=i;
    dropdown.setAttribute("onclick","saveId(true);");
    dropdown.type = "button";

    edit = document.createElement("button");
    edit.className = "btn btn-secondary";
    edit.id=i;
    edit.setAttribute("onclick","updateMachine();");
    edit.type = "button";
    edit.innerHTML="🖊️";

    head = document.createElement("a");
    head.id="name"+i;
    
    headers = document.createTextNode(data[i].name + "    ");
    cardbody.appendChild(
      document.createTextNode("id: " + data[i].idusr)
      
    );
    head.appendChild(headers);
    head.appendChild(dropdown);
    cardtitle.appendChild(head);
    card.appendChild(cardtitle);
    card.appendChild(cardbody);
    card.appendChild(edit);
    cardbody.appendChild(document.createElement("br"));
    d=i;
    col.appendChild(card);
    div.appendChild(col);
    document.getElementById("check").appendChild(div);
  }
}

async function listAllPersons() { //lists all persons 
  let [data, data1] = await Promise.all([
    fetch("https://testapi.robli.at/user/all",{headers: {"Authorization": Bearer}}).then((response) =>
      response.json()
    ),
    fetch("https://testapi.robli.at/machine/all",{headers: {"Authorization": Bearer}}).then((response) =>
      response.json()
    ),
  ]);
  let d;
  for (let i = 0; i < data.length; i++) {
    div = document.createElement("div");
    div.className = "p-2 g-3";
    div.id="card" + i;
    col = document.createElement("div");
    col.className = "card shadow-border text-bg-dark border-dark";
    card = document.createElement("div");
    card.className = "card-body";
    cardtitle = document.createElement("h5");
    cardtitle.className = "card-title";
    cardbody = document.createElement("p");
    cardbody.className = "card-text";
    cardbody1 = document.createElement("p");
    cardbody1.className = "card-text";
    d=i;
    header = document.createTextNode("Person " + (i + 1));
    cardbody.appendChild(document.createTextNode("name: " + data[i].name));
    cardbody.appendChild(document.createElement("br"));
    cardbody.appendChild(
      document.createTextNode("surname: " + data[i].surname)
    );
    cardbody.appendChild(document.createElement("br"));
    cardbody.appendChild(document.createTextNode("email: " + data[i].email));
    cardbody.appendChild(document.createElement("br"));

    dropdown = document.createElement("button");
    dropdown.className = "btn btn-secondary dropdown-toggle";
    dropdown.dataset.bsToggle = "dropdown";
    dropdown.type = "button";
    dropdown.innerHTML="allowed Machines";
    cardbody.appendChild(document.createElement("br"));
    cardbody.appendChild(dropdown);
    ul = document.createElement("ul");
    ul.className = "dropdown-menu";
    for (let j = 0; j < data[i].allow.length; j++) {
          li = document.createElement("li");
          a = document.createElement("a");
          a.className = "dropdown-item";
          li.appendChild(a);
          a.appendChild(document.createTextNode(data1[data[i].allow[j]].name));
          ul.appendChild(li);
        
      }
    

    modal = document.createElement("button");
    modal.className = "btn btn-secondary";
    modal.dataset.bsToggle = "modal";
    modal.dataset.bsTarget="#staticBackdrop";
    modal.id=i;
    modal.setAttribute("onclick","saveId(false);");
    modal.type = "button";
    modal.innerHTML="🗑️";

    logs = document.createElement("button");
    logs.className = "btn btn-secondary";
    logs.id=data[i]._id;
    logs.setAttribute("onclick","saveLogId();");
    logs.type = "button";
    logs.innerHTML="📄";

    edit = document.createElement("button");
    edit.className = "btn btn-secondary";
    edit.id=i;
    edit.setAttribute("onclick","updateUser();");
    edit.type = "button";
    edit.innerHTML="🖊️";

    cardbody.appendChild(ul);
    cardtitle.appendChild(header);
    card.appendChild(cardtitle);
    card.appendChild(cardbody);
    card.appendChild(cardbody1);
    card.appendChild(modal);
    card.appendChild(logs);
    card.appendChild(edit);
    col.appendChild(card);
    div.appendChild(col);
    document.getElementById("check").appendChild(div);
  }
}

async function saveId(checkInp){
    localStorage.setItem("saveId", event.srcElement.id);

    if(checkInp){
    let response = await fetch("https://testapi.robli.at/machine/all",{headers: {"Authorization": Bearer}});
    let data = await response.json();
  
      document.getElementById("machinedel").innerHTML = data[localStorage.getItem("saveId")].name;
      var test = data[localStorage.getItem("saveId")]._id;
      Promise.resolve().then(
        localStorage.setItem("machineId", test));
    }
    else{ 
      let response = await fetch("https://testapi.robli.at/user/all",{headers: {"Authorization": Bearer}});
      let data = await response.json();
    
      document.getElementById("machinedel").innerHTML = data[localStorage.getItem("saveId")].name +" " + data[localStorage.getItem("saveId")].surname;
      var test = data[localStorage.getItem("saveId")]._id;
      Promise.resolve().then(
        localStorage.setItem("machineId", test));
        console.log(test);
    }
}
function saveLogId(){
  localStorage.setItem("log", event.srcElement.id);
  window.open("logs.html");
}

function getID(){
  return localStorage.getItem("machineId");
} 

async function showPersonalLogs(){ // ! test if there are logs for that person if there are logs then start acceslog()
  fetch("https://testapi.robli.at/log/user", {
    method: "POST",
    body: JSON.stringify({
      userID: localStorage.getItem("log"),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": Bearer,
    },
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if(data.length>0){
        accessLog(data);}
      else{
        window.open('','_parent',''); 
        window.close();
        alert("couldnt find logs");
      }return data;
})
}

async function accessLog(data){ // ! creates the log entries for the html page
  let response = await fetch("https://testapi.robli.at/machine/all",{headers: {"Authorization": Bearer}});
  let data1 = await response.json();
  const arr=[];
  for (let i = 0; i < data1.length; i++) {
        arr.push(data1[i].name);
  }
  for (let i = 0; i < data.length; i++) {

    tr = document.createElement("tr");
    
    td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(arr[data[i].machineID]));
    td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(data[i].startT));
    td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(data[i].endT));
    td4 = document.createElement("td");
    td4.appendChild(document.createTextNode(data[i].deltaH + "h " + data[i].deltaM + "m"));
   
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    document.getElementById("tmain").appendChild(tr);
  }

}
  function updateUser(){
    localStorage.setItem("update", event.srcElement.id);
    location.href="../all/edit.html";
  }

  function updateMachine(){
    localStorage.setItem("update", event.srcElement.id);
    location.href="../all/editmachine.html";
  }
 
