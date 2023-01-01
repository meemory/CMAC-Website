let Bearer= localStorage.getItem("token");

function deleteMachine(){ // ! deleting the machine with the getID() method
    fetch('https://testapi.robli.at/machine/delete/' + getID(), { method: 'DELETE',headers: {"Authorization": Bearer}})
      .then(() => location.reload());
  }

function deleteUser(){  // ! deleting the user with the getID() method
    fetch('https://testapi.robli.at/user/delete/' + getID(), { method: 'DELETE' ,headers: {"Authorization": Bearer}})
      .then(() =>  location.reload());
  }
  