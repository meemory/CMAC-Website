var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  p = document.createElement("p");

  var name = document.getElementById("inp").value;
  if(name!=""){
  fetch("https://testapi.robli.at/machine/add", {
    method: "POST",
    body: JSON.stringify({
      name: name,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      p.appendChild(document.createTextNode("added succesfully!"));
      document.getElementById("inp").value=" ";
      p.className="text-success"; 
    })
    .catch((error) => alert());
  }
  else{
  }
  document.getElementById("form").appendChild(p);
});


async function showButtons(){
  let response = await fetch("https://testapi.robli.at/machine/all");
  let data = await response.json();
    buttonshow = document.getElementById("show");
    dropdown = document.createElement("button");
    dropdown.className = "btn btn-secondary dropdown-toggle";
    dropdown.dataset.bsToggle = "collapse";
    dropdown.dataset.bsTarget="#collapseExample";
    dropdown.
    dropdown.type = "button";
    dropdown.innerHTML="allowed Machines";
    buttonshow.appendChild(dropdown)
    ul = document.createElement("ul");
      for (let t = 0; t < data.length; t++) {
          li = document.createElement("li");
          a = document.createElement("label");
          a.htmlFor="check" + t;
          a.className="dropdown-item";
          b = document.createElement("input");
          b.type = "checkbox";
          b.name="check" + t;
          b.className="dropdown-item";
          li.append(a);
          li.append(b);
          a.appendChild(document.createTextNode(data[t].name));
          ul.appendChild(li);
        }
    buttonshow.appendChild(ul);
}