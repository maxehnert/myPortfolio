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

/* Github Profile Activity Widget*/
Github.userActivity({
  username: "maxehnert",
  selector: ".github-user",
  limit: 20
});

// Display an active state for the selected nav link
$('.navigation-link a').click(function() {
  $('.navigation-link a').removeClass('active-nav');
  $(this).addClass('active-nav');
});

// Toggle the hamburger icon and display nav links
$('.burger').click(function(){
  $(this).toggleClass('open');
  $('.navigation-link-collapsed').toggleClass('navigation-link-collapsed-hide');
});

// Toggle nav links and hamburger after clicking on one
$('.navigation-link-collapsed a').click(function() {
  $('.navigation-link-collapsed').toggleClass('navigation-link-collapsed-hide');
  $('.burger').toggleClass('open');
});

// Display a quote at the end of the Contact section
function quoteLoop() {
  var quoteArray = [
      "Courage is going from failure to failure, and not losing enthusiasm. -Winston Churchill",

      "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",

      "One idea can change your life. One idea can make your life better. -Les Brown",

      "Only those who will risk going too far can possibly find out how far one can go. -T.S. Elliot",

      "Sometimes things become possible if we want them bad enough. -T.S. Elliot",

      "Whatever you think, be sure it is what you think; whatever you want, be sure that is what you want; whatever you feel, be sure that is what you feel. -T.S. Elliot",

      "Unless you try to do something beyond what you have already mastered, you will never grow. -Ralph Waldo Emerson",

      "I have no special talent. I am only passionately curious. -Albert Einstein",

      "With one life to live, you ought to do more than just get by. -Richard Hamming",

      "It has often been said; The struggle to achieve excellence, is worth the struggle. -Richard Hamming",

      "The unexamined life is not worth living. -socrates"
  ];

  var val = Math.floor(Math.random() * (12 - 0 + 1)) + 0;

  console.log(quoteArray[val]);

  $('.quote').text(quoteArray[val]);
};

quoteLoop();
