// ??

// When the user scrolls the page, execute myFunction
window.onscroll = function() {StickyNavBar()};

// Get the navbar
var navbar = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function StickyNavBar() {
    var scrollPos = window.pageYOffset
  if (scrollPos >= sticky) {
    navbar.classList.add("sticky")
    // if (scrollPos >= top1 && scrollPos < top2) {
    //     document.getElementById("about").classList.add
    // }
  } else {
    navbar.classList.remove("sticky");
  }
  
}


// Mobile Menu
// open mobile menu $ : document.getElementById()
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menuToggle() {
   document.getElementById('nav-wrap').classList.toggle("show");
   document.getElementById('navigation').classList.toggle("open");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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

// var menuclick = document.querySelectorAll('.button-one');

// for (var i = 0; i < menuclick.length; i++) {
//   if (document.getElementById('navigation').classList.contains('open')) {
//     menuclick[i].addEventListener('click', menuToggle, false);
// }}

// if (document.getElementById('navigation').classList.contains('open')&&
// ) {
//         menuclick[0].onclick = menuToggle
//         menuclick[1].onclick = menuToggle
//         menuclick[2].onclick = menuToggle
//         menuclick[3].onclick = menuToggle
// }
