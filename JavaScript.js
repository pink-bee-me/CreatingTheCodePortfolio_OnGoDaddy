
  
  // These functions open and close the contact form 
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  
  }

  function buttonPink() {
    document.getElementById("myForm").style.display="block";
  }

  function whereAreYou() {
  
// Add active class to the current button (highlight it)
var header = document.getElementById("Navbar");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
  }