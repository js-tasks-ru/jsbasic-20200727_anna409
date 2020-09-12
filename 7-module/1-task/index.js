import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.createRibbon(categories);
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.rightArrow = this.elem.querySelector('.ribbon__arrow_right');
    this.leftArrow = this.elem.querySelector('.ribbon__arrow_left');
    this.scrollRibbon();
  }
  createRibbon(categories) {
    let ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');

    let ribbonArrowLeft = document.createElement('button');
    ribbonArrowLeft.classList.add('ribbon__arrow', 'ribbon__arrow_left');
    ribbon.append(ribbonArrowLeft);

    let leftArrowImage = document.createElement('img');
    leftArrowImage.src = '/assets/images/icons/angle-icon.svg';
    leftArrowImage.alt = 'icon';
    ribbonArrowLeft.append(leftArrowImage);

    let ribbonInner = document.createElement('nav');
    ribbonInner.classList.add('ribbon__inner');
    ribbon.append(ribbonInner);

    for (let category of categories) {
      let ribbonItem = document.createElement('a');
      ribbonItem.href = '#';
      ribbonItem.classList.add('ribbon__item');
      ribbonItem.dataset.id = `${category.id}`;
      ribbonItem.innerText = category.name;
      ribbonInner.append(ribbonItem);

      let ribbonSelectEvent = new CustomEvent('ribbon-select', { detail: category.id, bubbles: true });

      ribbonItem.addEventListener('click', function (event) {
        let target = event.target;
        if (ribbonInner.querySelector('.ribbon__item_active')) {
          ribbonInner.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');
        }
        if (target.closest('.ribbon__item')) {
          event.preventDefault();
          ribbonItem.classList.add('ribbon__item_active');
        }
        ribbon.dispatchEvent(ribbonSelectEvent);
      });

    }

    let ribbonArrowRight = document.createElement('button');
    ribbonArrowRight.classList.add('ribbon__arrow', 'ribbon__arrow_right');
    ribbon.append(ribbonArrowRight);

    let rightArrowImage = document.createElement('img');
    rightArrowImage.src = '/assets/images/icons/angle-icon.svg';
    rightArrowImage.alt = 'icon';
    ribbonArrowRight.append(rightArrowImage);

    return ribbon;
  }
  scrollRibbon() {
    this.rightArrow.classList.add('ribbon__arrow_visible');
    this.elem.addEventListener("click", (event) => this.scroll(event));
  }
  scroll(event) {
    let target = event.target;
    let scrollLeft = this.ribbonInner.scrollLeft;
    let scrollWidth = this.ribbonInner.scrollWidth;
    let clientWidth = this.ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (target.closest('.ribbon__arrow_right')) {
      // scrollRight < 1 ? this.rightArrow.classList.remove('ribbon__arrow_visible') : this.ribbonInner.scrollBy(350, 0);
      this.ribbonInner.scrollBy(350, 0);
      if (scrollRight < 1) {
        this.rightArrow.classList.remove('ribbon__arrow_visible');
      }
      this.leftArrow.classList.add('ribbon__arrow_visible');
    }
    if (target.closest('.ribbon__arrow_left')) {      
      // scrollLeft === 0 ? this.leftArrow.classList.remove('ribbon__arrow_visible') : this.ribbonInner.scrollBy(-350, 0);
      this.ribbonInner.scrollBy(-350, 0);
      if (scrollLeft === 0) {
        this.leftArrow.classList.remove('ribbon__arrow_visible');
      }
      this.rightArrow.classList.add('ribbon__arrow_visible');
    }
  }
}
