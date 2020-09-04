import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.slidesCount = slides.length;
    this.elem = this.createCarousel(slides);
    this.offset = 0;
    this.carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.initCarousel();
  }

  createCarousel(slides) {
    let curentPath = '/assets/images/carousel/';
    let carousel = document.createElement('div');
    carousel.classList.add('carousel');

    let rightArrow = document.createElement('div');
    rightArrow.classList.add('carousel__arrow', 'carousel__arrow_right');
    carousel.append(rightArrow);

    let rightArrowImage = document.createElement('img');
    rightArrowImage.src = '/assets/images/icons/angle-icon.svg';
    rightArrowImage.alt = 'icon';
    rightArrow.append(rightArrowImage);

    let leftArrow = document.createElement('div');
    leftArrow.classList.add('carousel__arrow', 'carousel__arrow_left');
    carousel.append(leftArrow);

    let leftArrowImage = document.createElement('img');
    leftArrowImage.src = '/assets/images/icons/angle-left-icon.svg';
    leftArrowImage.alt = 'icon';
    leftArrow.append(leftArrowImage);


    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');
    carousel.append(carouselInner);

    for (let slide of slides) {
      let carouselSlide = document.createElement('div');
      carouselSlide.classList.add('carousel__slide');
      carouselSlide.dataset.id = `${slide.id}`;
      carouselInner.append(carouselSlide);

      let image = document.createElement('img');
      image.src = `${curentPath}/${slide.image}`;
      image.classList.add('carousel__img');
      image.alt = 'slide';
      carouselSlide.append(image);

      let carouselCaption = document.createElement('div');
      carouselCaption.classList.add('carousel__caption');
      carouselSlide.append(carouselCaption);

      let carouselPrice = document.createElement('span');
      carouselPrice.classList.add('carousel__price');
      carouselPrice.innerText = `€${slide.price.toFixed(2)}`;
      carouselCaption.append(carouselPrice);

      let carouselTitle = document.createElement('div');
      carouselTitle.classList.add('carousel__title');
      carouselTitle.innerText = `${slide.name}`;
      carouselCaption.append(carouselTitle);

      let carouselButton = document.createElement('button');
      carouselButton.type = 'button';
      carouselButton.classList.add('carousel__button');
      carouselCaption.append(carouselButton);

      let buttonImage = document.createElement('img');
      buttonImage.src = '/assets/images/icons/plus-icon.svg';
      buttonImage.alt = 'icon';
      carouselButton.append(buttonImage);

      let productAdd = new CustomEvent("product-add", {
        detail: slide.id,
        bubbles: true
      });
      
      carouselButton.addEventListener('click', () => carousel.dispatchEvent(productAdd));
    }
    return carousel;
  }

  initCarousel() {
    this.carouselArrowLeft.style.display = 'none';
    this.elem.addEventListener("click", (event) => this.click(event));
  }

click(event) {
  this.slideWidth = this.carouselInner.offsetWidth;
  let target = event.target;
  if (target.closest('.carousel__arrow_right')) {
    this.offset += this.slideWidth;
  }
  if (target.closest('.carousel__arrow_left')) {
    this.offset -= this.slideWidth;
  }
  this.carouselInner.style.transform = `translateX(-${this.offset}px)`;
  this.carouselArrowLeft.style.display = (this.offset === 0 ? 'none' : '');
  this.carouselArrowRight.style.display = (this.offset === this.slideWidth * (this.slidesCount -1) ? 'none' : '');
}
}
