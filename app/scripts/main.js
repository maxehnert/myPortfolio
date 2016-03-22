// require('../../node_modules/normalize.css/normalize.css');
require('../../bower_components/looper/src/looper.css');
require('../../node_modules/githubjs/src/github.css');
require('../styles/animate.scss');
require('../styles/main.scss');
var Github = require('../../bower_components/githubjs/dist/github.min.js');

/*
*  When you hover over a skills icon it should make the other row disapear behind a cover div with text relating to that icon.
*/

var newSkillItems = document.querySelectorAll('.new-skill-item-js');

const showShit = () => {

  const skillsTextObj = {
    backbone: 'I have experience developing a large tv streaming service application built on Backbone and Marionette. I am responsible for not only maintaining the current application but also continuing to develop new features.',

    angular: 'I have built many applications of my own using Angular 1.X and have experience building Angular applications professionally utilizing the ionic framework.',

    react: 'React combined with Redux is something I began developing on last year and find it very fulfilling. Although I have only built personal applications using this stack I throughly enjoy working within this context and in a functional programming paradigm.',

    webpack: 'All of the applications I build using React are built using the latest ES6/ES7 features as well as Webpack. I replaced Gulp with Webpack as the build tool for this site which I found much more challenging since I do not use a front end framework.',

    node: 'On the server side I enjoy writing nodejs and have built APIs using node with express and hapi. I also have experience writing scripts with node and communicating with third party APIs.',

    css: 'Writing clean css and markup is something I take pride in as css files in large projects tend to turn into messes. I enjoy trying new techniques using transforms and animations to get interesting effects.'
  };

  const targetAttribute = event.target.dataset.skill;

  // let skillDesc = event.target.parentNode.nextElementSibling.lastElementChild;

  // Figure out which row you're on and select the opposite overlay el
  let skillDesc = event.target.parentNode.nextElementSibling ?
    document.querySelector('.skill-desc-2') :
    document.querySelector('.skill-desc-1');

  skillDesc.innerHTML = skillsTextObj[targetAttribute];
  skillDesc.classList.toggle('hide-content');

}

// Add mouseenter and mouseleave event listeners to all skill-icon containers
Array.from(newSkillItems, el =>  (
  el.addEventListener('mouseenter', showShit, false),
  el.addEventListener('mouseleave', showShit, false)
));



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
