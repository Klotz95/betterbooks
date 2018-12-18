var darkThemeSelected

//make dropup parent clickable
function clickDropdown() {
    if ($('.navbar-toggler').css("display") === "none") {
        $('.dropdown-toggle').click(function () {
            window.location.href = $(this).attr('href');
            return false;
        });
    }
}

$(document).ready(function () {
    clickDropdown();
    $(window).resize(function () {
        clickDropdown();
    });
});


//close quiz when clicked in overlay
$("#modal-wrapper").on('click', function () {
   hideQuiz();
}).children().on('click', function (e) {
    e.stopPropagation();
});

// This method changes the theme
function changeTheme() {
  window.darkThemeSelected = !window.darkThemeSelected
  loadTheme()
}

function loadTheme() {
  if(window.darkThemeSelected)
  {
    alert("Dark")
      // Change title
      document.getElementById("themeButton").innerHTML = "Light-theme"
      // Show dark theme
      document.getElementById("theme").href="style/betterbooks_dark.css";
  }
  else
  {
    alert("Light")
      // Change title
      document.getElementById("themeButton").innerHTML = "Dark-theme"
      // Show dark theme
      document.getElementById("theme").href="style/betterbooks_light.css";
  }
}
