const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function activeSlide(i) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function activeDot(i) {
  dots.forEach((dot) => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

let index = 0;

function nextSlide() {
  if (index !== slides.length - 1) {
    index++;
    activeSlide(index);
    activeDot(index);
  } else {
    index = 0;
    activeSlide(index);
    activeDot(index);
  }
}

function prevSlide() {
  if (index !== 0) {
    index--;
    activeSlide(index);
    activeDot(index);
  } else {
    index = slides.length - 1;
    activeSlide(index);
    activeDot(index);
  }
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', function () {
    index = dotIndex;
    activeSlide(index);
    activeDot(index);
  });
});

const timeInterval = setInterval(nextSlide, 2500);
