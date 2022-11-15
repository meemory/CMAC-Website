function hello(){
    var getInput = prompt("testing");
    localStorage.setItem("storageName",getInput);
    document.location.href = "hello.html";
}
 
function get(){
    alert(localStorage.getItem("storageName"));  
}   