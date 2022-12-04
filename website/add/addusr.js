async function showButtons(){
    let response = await fetch("https://testapi.robli.at/machine/all");
    let data = await response.json();
      buttonshow = document.getElementById("show");
      for (let t = 0; t < data.length; t++) {
            a = document.createElement("option");
            a.value = t + 1;
            a.appendChild(document.createTextNode(data[t].name));
            buttonshow.appendChild(a);
          }
  }