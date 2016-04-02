// require('../../node_modules/normalize.css/normalize.css');
require('../../bower_components/looper/src/looper.css');
require('../../node_modules/githubjs/src/github.css');
require('../styles/main.scss');
var Github = require('../../bower_components/githubjs/dist/github.min.js');

/**
 * When you hover over a skills icon it should make the other row disapear behind a cover div with text relating to that icon.
*/

var newSkillItems = document.querySelectorAll('.new-skill-item-js');

const showShit = () => {

  const skillsTextObj = {
    backbone: 'I have experience developing a large tv streaming service application built on Backbone and Marionette. I am responsible for not only maintaining the current application but also continuing to develop new features.',

    angular: 'I have built many applications of my own using Angular 1.X and have experience building Angular applications professionally utilizing the ionic framework.',

    react: 'React combined with Redux is something I began developing on last year and find it very fulfilling. Although I have only built personal applications using this stack I throughly enjoy working within this context and in a functional programming paradigm.',

    webpack: 'All of the applications I build using React are built using the latest ES6/ES7 features as well as Webpack. I replaced Gulp with Webpack as the build tool for this site which I found much more challenging since I do not use a front end framework.',

    node: 'On the server side I enjoy writing nodejs and have built APIs using node with express and hapi. I also have experience writing scripts with node and communicating with third party APIs.',

    css: 'Writing clean css and markup is something I take pride in as css files in large projects tend to turn into messes. I enjoy trying new techniques using transforms and animations to get interesting effects. In fact, the css logo you see here, I made using pure css selectors on a single element.'
  };

  const targetAttribute = event.target.parentElement.dataset.skill;

  let skillDesc = event.target.parentElement.parentElement.lastElementChild;

  skillDesc.firstElementChild.innerHTML = skillDesc.classList.contains('skill-desc-active-js') ? '' : skillsTextObj[targetAttribute];

  skillDesc.classList.toggle('skill-desc-active-js');
};

/**
 * Add mouseenter and mouseleave event listeners to all skill-icon containers
 */
Array.from(newSkillItems, el =>  (
  el.firstElementChild.addEventListener('mouseenter', showShit, false),
  el.firstElementChild.addEventListener('mouseleave', showShit, false)
));

/**
 * Github Profile Activity Widget.
*/
// Github.userActivity({
//   username: "maxehnert",
//   OAuth: 'f0856bc0ec459444238129a1a2bca2cf2e35b8f7',
//   selector: ".github-user",
//   limit: 20
// });

/**
 * Define a few variables that are frequently used so I don't have to do a query each time
*/
const navLinkCollapsed = document.querySelector('.navigation-link-collapsed');
const jsBurger = document.querySelector('.js-burger');
const navLinkCollapsedA = document.querySelectorAll('.navigation-link-collapsed a');

/**
 * Toggle the hamburger icon and display nav links.
*/
const toggleBurger = () => {
  jsBurger.classList.toggle('open');
  navLinkCollapsed.classList.toggle('navigation-link-collapsed-hide');
  overlay();
};
Array.from([jsBurger], el => el.addEventListener('click', toggleBurger, false));

/**
 * Toggle nav links and hamburger after clicking on one.
*/
const toggleNavCollapse = () => {
  navLinkCollapsed.classList.toggle('navigation-link-collapsed-hide');
  jsBurger.classList.toggle('open');
  overlay();
};
Array.from(navLinkCollapsedA, el => el.addEventListener('click', toggleNavCollapse, false));

/**
 * Expand mobile nav height 100% when open.
*/
const overlay = () => {
  let navBar = document.querySelector('.navigation');
  navBar.classList.toggle('navigation-expand')
};


/**
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

/**
 * Display a quote at the end of the Contact section .
*/
const quoteLoop = () => {
  const quoteArray = [
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

  let val = Math.floor( Math.random() * 12 );

  document.querySelector('.quote').textContent = quoteArray[val];
};

window.onload = quoteLoop();
