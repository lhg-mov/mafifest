function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("readCheck");
    var verBaca = document.getElementById("ver-baca");
    // Get the output text
    var showForm = document.getElementById("form");
    var invalid = document.getElementById("invalid");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        showForm.style.display = "block";
        checkBox.style.display = "none";
        verBaca.style.display = "none";
    } else {
        showForm.style.display = "none";
        checkBox.style.display = "block";
        invalid.style.display = "block";
        verBaca.style.display = "block";
    }
    }