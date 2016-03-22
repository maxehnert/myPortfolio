// require('../../node_modules/normalize.css/normalize.css');
require('../../bower_components/looper/src/looper.css');
require('../../node_modules/githubjs/src/github.css');
require('../styles/animate.scss');
require('../styles/main.scss');
var Github = require('../../bower_components/githubjs/dist/github.min.js');

/*
*  When you hover over a skills icon it should make the other row disapear behind a cover div with text relating to that icon.

var newSkillsContainers = document.querySelectorAll('.new-skills-container-js');
newSkillsContainers

var newSkillItems = document.querySelectorAll('.new-skill-item-js');

const showShit = () => {
  make the other container show the overlay and put your text in therrrr.
}
Array.from(newSkillItems, el => el.addEventListener('hover', showShit, false));

iconEl.addEventListener(hover, fnDoShit)

function fndoShit() {

iconEl.parentNode.sibling.overlayContainer toggleClass(visibile) && insertAdjacentHTML(the string of shit I wrote)
}
*/

/*
 * Click handler because it wasn't responding correctly with ad blockers for some reason.
*/
$('.js-burger').click( function() {
  return false;
});

/*
 * Waypoint for animation.
*/
var waypoint = new Waypoint({
  element: $('.cd-color-2'),
  handler: function(direction) {
    $('.js-img-skill').removeClass('imgnone');
    $('.js-imgleft').addClass('animated bounceInLeft');
    $('.js-imgcenter').addClass('animated bounceIn');
    $('.js-imgright').addClass('animated bounceInRight');
  },
  offset: '50%'
});

/*
 * Github Profile Activity Widget.
*/

// Github.userActivity({
//   username: "maxehnert",
//   OAuth: 'f0856bc0ec459444238129a1a2bca2cf2e35b8f7',
//   selector: ".github-user",
//   limit: 20
// });

/*
 * Display an active state for the selected nav link.
*/
$('.navigation-link a').click( function() {

  $('.navigation-link a').removeClass('active-nav');
  $(this).addClass('active-nav');

  overlay();
});

/*
 * Toggle the hamburger icon and display nav links.
*/
$('.js-burger').click( function() {

  $(this).toggleClass('open');
  $('.navigation-link-collapsed').toggleClass('navigation-link-collapsed-hide');

  overlay();
});

/*
 * Toggle nav links and hamburger after clicking on one.
*/
$('.navigation-link-collapsed a').click( function() {

  $('.navigation-link-collapsed').toggleClass('navigation-link-collapsed-hide');
  $('.js-burger').toggleClass('open');
});

/*
 * Show opaque overlay over the site when the mobile nav is open.
*/
function overlay() {

  var bod = document.querySelector('body');

  $('.overlay').toggleClass('overlay_flash');

  // Only show the overlay if the mobile nav is open
  if ( document.querySelector('.overlay').scrollHeight > 0 ||
       document.querySelector('.navigation-link-collapsed-hide') ) {
        $('.overlay_flash').css( 'height', '0px' );
        $('.overlay').css( 'height', '0px' );
  } else {
    $('.overlay_flash').css( 'height', bod.scrollHeight + 'px' );
  }
};


/*
 * Scrolls to targeted id.
*/
var last_known_scroll_position = 0;
var ticking = false;

function scrollSpyFunction(scroll_pos) {
  var topBody = document.getElementById('top');
  var about = document.getElementById('about');
  var skills = document.getElementById('skills');
  var work = document.getElementById('work');
  var contact = document.querySelector('.flex-container-contact');

  var homeLink = document.querySelector('.home-link');
  var aboutLink = document.querySelector('.about-link');
  var skillsLink = document.querySelector('.skills-link');
  var workLink = document.querySelector('.work-link');
  var contactLink = document.querySelector('.contact-link');
  var navLinks =  Array.from(document.querySelectorAll('.navigation-link a'));

  function removeActiveClass() {
    navLinks.forEach(function(e) {
      if (e.classList.contains('active-nav')) {
        e.classList.remove('active-nav');
      }
    });
  }

  if (scroll_pos < about.offsetTop) {
    homeLink.classList.contains('active-nav') ? null : (removeActiveClass(), homeLink.classList.add('active-nav'));

  } else if (scroll_pos < skills.offsetTop) {
    aboutLink.classList.contains('active-nav') ? null : (removeActiveClass(), aboutLink.classList.add('active-nav'));

  } else if (scroll_pos < work.offsetTop) {
    skillsLink.classList.contains('active-nav') ? null : (removeActiveClass(), skillsLink.classList.add('active-nav'));

  } else if (scroll_pos < contact.offsetTop) {
    workLink.classList.contains('active-nav') ? null : (removeActiveClass(), workLink.classList.add('active-nav'));
  } else if (scroll_pos >= contact.offsetTop) {
    contactLink.classList.contains('active-nav') ? null : (removeActiveClass(), contactLink.classList.add('active-nav'));
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      scrollSpyFunction(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});

/*
 * Display a quote at the end of the Contact section .
*/
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

  var val = Math.floor( Math.random() * 12 );

  $('.quote').text(quoteArray[val]);

};

window.onload = quoteLoop();
