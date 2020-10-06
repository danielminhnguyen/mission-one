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
    if (scrollPos >= top1 && scrollPos < top2) {
        document.getElementById("about").classList.add
    }
  } else {
    navbar.classList.remove("sticky");
  }
  
}


// Mobile Menu

function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "topnav") {
  x.className += " responsive"; 
  } else {
    x.className = "topnav";
  }
}


// var top1 = $('#home').offset().top;
// var top2 = $('#about').offset().top;
// var top3 = $('#portfolio').offset().top;

// $(document).scroll(function() {
//   var scrollPos = $(document).scrollTop();
//   if (scrollPos >= top1 && scrollPos < top2) {
//     $('#change').css('background-color', '#f00');
//   } else if (scrollPos >= top2 && scrollPos < top3) {
//     $('#change').css('background-color', '#0f0');
//   } else if (scrollPos >= top3) {
//     $('#change').css('background-color', '#00f');
//   }
// });