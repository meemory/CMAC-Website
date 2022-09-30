

async function listAll() {
    const xmlhttp = new XMLHttpRequest();
    const url = "https://testapi.robli.at/machine/all";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onload = (res) => {
  
        console.log(res['target']['response']);
        message = res['target']['response'];
        const arr = message.split(',')
        let i=0, j=0, a=0;
        const len=arr.length;
        arr.slice(0,1);
        while(j<=len){
        do{
          i++;
          a++
        }while(i<= 2);
        arr.splice(a, 1);
        i=1;
        j++;
        }
        const newlen=arr.length;
        let l=0,t=0;
        var node, testnode;
        while(l<=newlen){
          node=document.createElement("p");
          testnode=document.createTextNode(arr[l]);
          node.appendChild(testnode);
          document.getElementById("enter").appendChild(node);
          l++;
        }

    }
}
