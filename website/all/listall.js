async function listAll() {
  // while(l<=newlen){
  //   node=document.createElement("p");
  //   testnode=document.createTextNode(arr[l]);
  //   node.appendChild(testnode);
  //   document.getElementById("enter").appendChild(node);
  // //   l++;}
  //   }
  let response = await fetch("https://testapi.robli.at/machine/all");
  let data = await response.json();

  let arr;
  let i = 0;
  while (i < data.length) {
    arr = JSON.stringify(data[i]).split(",");
    arr.shift();
    console.log(arr);
    
    
    div = document.createElement("div");
    div.className= "col-md";
    col = document.createElement("div");
    col.className= "p-3 border bg-light";

    text = document.createTextNode(arr.join(" "));
    col.appendChild(text);
    div.appendChild(col);
    document.getElementById("check").appendChild(div);

    i++;
  }
}
