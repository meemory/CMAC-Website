var form = document.getElementById("form");
let Bearer = localStorage.getItem("token");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("inp").value;
  fetch("https://testapi.robli.at/machine/add", {
    method: "POST",
    body: JSON.stringify({
      name: name,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: Bearer,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      alert("added '" + name + "'");
      window.location = "../all/allmachines.html";
    })
    .catch((error) => alert(error));
});
