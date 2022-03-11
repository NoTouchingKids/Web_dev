// function openCity(evt, cityName) {
//       // Declare all variables
//       var i, tabcontent, tablinks;

//       // Get all elements with class="tabcontent" and hide them
//       tabcontent = document.getElementsByClassName("tabcontent");
//       for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//       }

//       // Get all elements with class="tablinks" and remove the class "active"
//       tablinks = document.getElementsByClassName("tablinks");
//       for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//       }

//       // Show the current tab, and add an "active" class to the link that opened the tab
//       document.getElementById(cityName).style.display = "block";
//       evt.currentTarget.className += " active";
// }

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();
// For page 
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();