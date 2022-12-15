let Bearer = localStorage.getItem("token");
async function showButtons(){
    let response = await fetch("https://testapi.robli.at/machine/all",{headers: {"Authorization": Bearer}});
    let data = await response.json();
      buttonshow = document.getElementById("show");
      for (let t = 0; t < data.length; t++) {
            a = document.createElement("option");
            a.value = t + 1;
            a.innerHTML = data[t].name;
            buttonshow.appendChild(a);
          }
        
$('#show').selectpicker('refresh');
  }


  function addUsr(){
    var select = document.getElementById('show');
    var selected = [...select.selectedOptions]
                    .map(option => option.value);
                    
    fetch("https://testapi.robli.at/user/add", {
      method: "POST",
      body: JSON.stringify({
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        nfcid:document.getElementById("nfcid").value,
        allow: selected,
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
        alert("worked")
      })
      .catch((error) => alert("not worked"));
  }