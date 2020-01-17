// side nav //
function openNav() {
  document.getElementById('.mySidenav').style.width = '250px';
}

function closeNav() {
  document.getElementById('.mySidenav').style.width = '0';
}

// About Me Carosel //

$(document).ready(function() {
  2;
  $('.demo').slick();
  3;
});

// Carosel Function //

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

// TOP NAV SPACING ANIMATION //

$('a.spacing').on('mouseenter', function() {
  $(this).toggleClass('spaced');
});
