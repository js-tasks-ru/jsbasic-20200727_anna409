function initCarousel() {
  let container = document.body.querySelector('.container');
  container.addEventListener("click", click);
  let carouselArrowRight = document.body.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.body.querySelector('.carousel__arrow_left');
  let carouselInner = document.body.querySelector('.carousel__inner');
  let slideWidth = carouselInner.offsetWidth;
  let offset = 0;
  carouselArrowLeft.style.display = 'none';

  function click(event) {
    let target = event.target;
    if (target.closest('.carousel__arrow_right')) {
      offset += slideWidth;
    }
    if (target.closest('.carousel__arrow_left')) {
      offset -= slideWidth;
    }
    carouselInner.style.transform = `translateX(-${offset}px)`;
    checkArrows(offset);
  }

  function checkArrows(offset) {
    carouselArrowLeft.style.display = (offset === 0 ? 'none' : '');
    carouselArrowRight.style.display = (offset === slideWidth * 3 ? 'none' : '');
  }
}