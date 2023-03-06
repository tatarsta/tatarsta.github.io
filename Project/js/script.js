let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('header');
menuBtn.addEventListener('click',function(){
  menu .classList.toggle('open');
})

window.addEventListener('keydown', (e) =>{
  if (e.key === 'Escape') {
    document.querySelector('header').classList.remove('open');
  }
})

document.getElementById('menu').addEventListener('click', (event)=>{
  event._isClickWithInMenu = true;
})

document.getElementBy('burger').addEventListener('click', (event)=>{
  event._isClickWithInMenu = true;
})
document.body.addEventListener('click', (event)=>{
  if (event._isClickWithInMenu) return;
  document.querySelector('header').classList.remove('open');
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
