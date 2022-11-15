async function listAll() {
  let response = await fetch("https://testapi.robli.at/machine/all");
  let data = await response.json();

  for (let i = 0; i < data.length; i++) {

    div = document.createElement("div");
    div.className = "bg-dark p-2 g-3";
    col = document.createElement("div");
    col.className = "card";
    card = document.createElement("div");
    card.className = "card-body";
    cardtitle = document.createElement("h5");
    cardtitle.className = "card-title";
    cardbody = document.createElement("span");
    cardbody.className = "card-text";


    dropdown = document.createElement("button");
    dropdown.className = "btn btn-secondary";
    dropdown.id=data[i]._id;
    dropdown.setAttribute("onclick","saveId();");
    dropdown.type = "button";
    dropdown.innerHTML="🗑️";

    header = document.createTextNode("machine " + (i + 1));
    cardbody.appendChild(document.createTextNode("name: " + data[i].name));
    cardbody.appendChild(document.createElement("br"));
    cardbody.appendChild(
      document.createTextNode("id: " + data[i].idusr)
      
    );
    
    cardtitle.appendChild(header);
    card.appendChild(cardtitle);
    card.appendChild(cardbody);
    cardbody.appendChild(document.createElement("br"));
    card.appendChild(dropdown);
    col.appendChild(card);
    div.appendChild(col);
    document.getElementById("check").appendChild(div);
  }
}

async function listAllPersons() {
  let [data, data1] = await Promise.all([
    fetch("https://testapi.robli.at/user/all").then((response) =>
      response.json()
    ),
    fetch("https://testapi.robli.at/machine/all").then((response) =>
      response.json()
    ),
  ]);

  for (let i = 0; i < data.length; i++) {
    console.log(data[0].name);

    div = document.createElement("div");
    div.className = "bg-dark p-2 g-3";
    col = document.createElement("div");
    col.className = "card";
    card = document.createElement("div");
    card.className = "card-body";
    cardtitle = document.createElement("h5");
    cardtitle.className = "card-title";
    cardbody = document.createElement("p");
    cardbody.className = "card-text";
    cardbody1 = document.createElement("p");
    cardbody1.className = "card-text";

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
    cardbody.appendChild(dropdown);
    ul = document.createElement("ul");
    ul.className = "dropdown-menu";
    for (let j = 0; j < data[i].allow.length; j++) {
      for (let t = 0; t < data1.length; t++) {
        if (data1[t].idusr == data[i].allow[j]) {
          li = document.createElement("li");
          a = document.createElement("a");
          a.className = "dropdown-item";
          li.appendChild(a);
          a.appendChild(document.createTextNode(data1[t].name));
          ul.appendChild(li);
        }
      }
    }

    cardbody.appendChild(ul);
    cardtitle.appendChild(header);
    card.appendChild(cardtitle);
    card.appendChild(cardbody);
    card.appendChild(cardbody1);
    col.appendChild(card);
    div.appendChild(col);
    document.getElementById("check").appendChild(div);
  }
}

function saveId(){
  localStorage.setItem("saveId", event.srcElement.id);
  alert(localStorage.getItem("saveId"));
} 

function getID(){
  return localStorage.getItem("saveId");
} 