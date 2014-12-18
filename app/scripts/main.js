//Navbar change color
// $('.navbar').waypoint(function() {
//   $('.navbar').addClass('newColor')
// }, {
//   offset: function() {
//     return -$(this).height();
//   }
// });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('body').scrollspy({ target: '.navbar-fixed-top' });
