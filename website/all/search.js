function myFunction() {
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('searchFeld');
      filter = input.value.toUpperCase();

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < localStorage.getItem("lengthMachine"); i++) {
        document.getElementById("name" + i);
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {    
          li[i].style.display = "none";
        }
      }
    }