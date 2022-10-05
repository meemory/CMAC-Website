
async function listAll() {
  let response = await fetch("https://testapi.robli.at/machine/all");
  let data = await response.json();

  for(let i=0; i<data.length; i++) {
    console.log(data[0].name);

    
    div = document.createElement("div");
    div.className=  "bg-dark   p-2 g-3";
    col = document.createElement("div");
    col.className= "card";
    card = document.createElement("div");
    card.className="card-body";   
    cardtitle = document.createElement("h5");
    cardtitle.className="card-title";
    cardbody = document.createElement("span");
    cardbody.className="card-text";

    header = document.createTextNode("Maschine " + (i+1));
    cardbody.appendChild(document.createTextNode("Name: "+ data[i].name) );
    cardbody.appendChild(document.createElement('br'));
    cardbody.appendChild(document.createTextNode("Machinen ID: " + data[i].idusr));


    cardtitle.appendChild(header);
    card.appendChild(cardtitle);
    card.appendChild(cardbody);
    col.appendChild(card);
    div.appendChild(col);
    document.getElementById("check").appendChild(div);

  }
}

async function listAllPersons() {
  let response = await fetch("https://testapi.robli.at/user/all");
  let data = await response.json();

  let response1 = await fetch("https://testapi.robli.at/machine/all");
  let data1 = await response.json();

  for(let i=0; i<data.length; i++) {
    console.log(data[0].name);

    
    div = document.createElement("div");
    div.className=  "bg-dark   p-2 g-3";
    col = document.createElement("div");
    col.className= "card";
    card = document.createElement("div");
    card.className="card-body";   
    cardtitle = document.createElement("h5");
    cardtitle.className="card-title";
    cardbody = document.createElement("p");
    cardbody.className="card-text";
    cardbody1 = document.createElement("p");
    cardbody1.className="card-text";


    header = document.createTextNode("Person " + (i+1));
    cardbody.appendChild(document.createTextNode("name: "+ data[i].name) );
    cardbody.appendChild(document.createElement('br'));
    cardbody.appendChild(document.createTextNode("surname: " + data[i].surname));
    cardbody.appendChild(document.createElement('br'));
    cardbody.appendChild(document.createTextNode("email: " + data[i].email));
    cardbody.appendChild(document.createElement('br'));


    cardbody1.appendChild(tesxt2);
    cardbody.appendChild(text);
    cardtitle.appendChild(header);
    card.appendChild(cardtitle);
    card.appendChild(cardbody);
    card.appendChild(cardbody1);
    col.appendChild(card);
    div.appendChild(col);
    document.getElementById("check").appendChild(div);

  }
}



