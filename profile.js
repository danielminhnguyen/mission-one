// Get the navbar
var navbar = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Get the offset poistion of all section
var pos_home = document.getElementById("home").offsetTop
var pos_about = document.getElementById("about").offsetTop
var pos_portfolio = document.getElementById("portfolio").offsetTop
var pos_contact = document.getElementById("contact").offsetTop


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function StickyNavBar() {
  var scrollPos = window.pageYOffset
if (scrollPos >= sticky) {
  navbar.classList.add("sticky")
} else {
  navbar.classList.remove("sticky");
}
if (scrollPos >= pos_home && scrollPos < pos_about) {
    document.querySelectorAll('.linkfocus').forEach(function(a){
    a.classList.remove('linkfocus')})
    document.getElementById("header-home").classList.add("linkfocus")
}
if (scrollPos >= pos_about && scrollPos < pos_portfolio) {
  document.querySelectorAll('.linkfocus').forEach(function(a){
    a.classList.remove('linkfocus')})
    document.getElementById("header-about").classList.add("linkfocus")
}
if (scrollPos >= pos_portfolio && scrollPos < pos_contact) {
  document.querySelectorAll('.linkfocus').forEach(function(a){
    a.classList.remove('linkfocus')})
    document.getElementById("header-portfolio").classList.add("linkfocus")
}
if (scrollPos >= pos_contact) {
  document.querySelectorAll('.linkfocus').forEach(function(a){
    a.classList.remove('linkfocus')})
    document.getElementById("header-contact").classList.add("linkfocus")
}



}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {StickyNavBar()};

// Mobile Menu
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menuToggle() {
   document.getElementById('nav-wrap').classList.toggle("show");
   document.getElementById('navigation').classList.toggle("open");
}

// Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
  var buttonone = document.querySelectorAll(".button-one");

  if (document.getElementById('navigation').classList.contains('open')) {
    console.log("navigation true")
    console.log(buttonone.length)
    // Add listening event to close menu upon click when menu open
    for (var i = 0; i < buttonone.length; i++) {
      console.log(i)
      buttonone[i].addEventListener('click', menuToggle, false);
    }
  } else {
    // Remove listening event to close menu upon click when menu close
    //  Incase mobile menu is not load
    for (var i = 0; i < buttonone.length; i++) {
      buttonone[i].removeEventListener('click', menuToggle, false);
    }
  }

  if (!event.target.matches('js-toggle-menu')) {
    var dropdowns = document.getElementById('nav-wrap');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
