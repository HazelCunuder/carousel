"use strict"

let slideIndex = 1;
showSlides(slideIndex);

function switchSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll("#carousel .img");
  const totalSlides = slides.length;

  slideIndex = ((n - 1 + totalSlides) % totalSlides) + 1;

  slides.forEach(slide => (slide.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}