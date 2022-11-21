function deleteMachine(){
    fetch('https://testapi.robli.at/machine/delete/' + getID(), { method: 'DELETE' })
      .then(() => location.reload());
    
  }
  
function deleteUser(){
    fetch('https://testapi.robli.at/user/delete/' + getID(), { method: 'DELETE' })
      .then(() => location.reload());
  }
  