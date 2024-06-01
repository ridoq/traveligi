const menuToggle = document.querySelector('.menu-toggle input')
const ol = document.querySelector('header ol')
var nav = document.querySelector("header")
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')



menuToggle.addEventListener('click', function() {
  ol.classList.toggle('slide');
  nav.classList.toggle('drop')
});

window.addEventListener("scroll", function () {
  
  nav.classList.toggle("navscroll", window.scrollY > 750);
  nav.classList.toggle("navscroll2", window.scrollY > 650);
  nav.classList.toggle("navscroll4", window.scrollY > 300);
  
});

next.addEventListener('click', function() {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function() {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1])
})
