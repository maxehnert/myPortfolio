//tooltip function
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//scrolls to targeted id
$('body').scrollspy({ target: '.navbar-fixed-top' });

//waypoint for animation
$('.cd-color-2').waypoint(function(direction) {
  $('.img-skill').removeClass('imgnone');
  $('.imgleft').addClass('animated bounceInLeft');
  $('.imgcenter').addClass('animated bounceIn');
  $('.imgright').addClass('animated bounceInRight');
}, {
  offset: '50%'
});
