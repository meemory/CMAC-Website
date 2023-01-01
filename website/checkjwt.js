if (localStorage.getItem("token") == null) {
  window.location = "../login/login.html";
} else {
  fetch("https://testapi.robli.at/user/admin/me", {
    headers: { Authorization: localStorage.getItem("token") },
  })
    .then(function (response) {
      if (response.status == 401) {
        window.location = "../login/login.html";
      }
    })
    .catch(function (error) {
      window.location = "../login/login.html";
    });
}
