
let Bearer= localStorage.getItem("token");
function deleteMachine(){
    fetch('https://testapi.robli.at/machine/delete/' + getID(), { method: 'DELETE',headers: {"Authorization": Bearer}})
      .then(() => location.reload());
    
  }

function deleteUser(){
  console.log(getID());
    fetch('https://testapi.robli.at/user/delete/' + getID(), { method: 'DELETE' ,headers: {"Authorization": Bearer}})
      .then(
         location.reload()
      )
  }
  