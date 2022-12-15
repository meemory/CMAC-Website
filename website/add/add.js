var form = document.getElementById("form");
let Bearer = localStorage.getItem("token");
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
      "Authorization": Bearer,
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