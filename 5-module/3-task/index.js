function initCarousel() {
  let container = document.body.querySelector('.container');
  container.addEventListener("click", click);
  let counterRight = 1;
  let counterLeft = 1;
  let carouselArrowRight = document.body.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.body.querySelector('.carousel__arrow_left');
  let carouselInner = document.body.querySelector('.carousel__inner');
  carouselArrowLeft.style.display = 'none';

  function click(event) {
    let target = event.target;
    if (target.closest('.carousel__arrow_right')) {
      let offset = carouselInner.offsetWidth * counterRight;
      carouselInner.style.transform = `translateX(-${offset}px)`;
      counterRight++;
      counterLeft--;
      checkArrows(counterLeft, counterRight);
    }
    if (target.closest('.carousel__arrow_left')) {
      let offset = carouselInner.offsetWidth * counterLeft;
      carouselInner.style.transform = `translateX(${offset}px)`;
      counterLeft++;
      counterRight--;
      checkArrows(counterLeft, counterRight);
    }
  }

  function checkArrows(counterLeft, counterRight) {
    carouselArrowLeft.style.display = (counterLeft === 1 ? 'none' : '');
    carouselArrowRight.style.display = (counterRight === 4 ? 'none' : '');
  }
}