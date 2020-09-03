import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.createCard(product);
  }
  createCard(product) {
    let curentsrc = '/assets/images/products';

    let generalDiv = document.createElement('div');
    generalDiv.classList.add('card');

    let cardTop = document.createElement('div');
    cardTop.classList.add('card__top');
    generalDiv.append(cardTop);

    let cardBody = document.createElement('div');
    cardBody.classList.add('card__body');
    generalDiv.append(cardBody);

    let img = document.createElement('img');
    img.src = `${curentsrc}/${product.image}`;
    img.classList.add('card__image');
    img.alt = 'product';
    cardTop.append(img);

    let span = document.createElement('span');
    span.classList.add('card__price');
    span.innerText = `€${product.price.toFixed(2)}`;
    cardTop.append(span);

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card__title');
    cardTitle.innerText = product.name;
    cardBody.append(cardTitle);

    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add('card__button');
    cardBody.append(button);

    let buttonImg = document.createElement('img');
    buttonImg.src = '/assets/images/icons/plus-icon.svg';
    buttonImg.alt = 'icon';
    button.append(buttonImg);

    let productAdd = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    });

    button.addEventListener('click', (event) => generalDiv.dispatchEvent(productAdd));

    return generalDiv;
  }
}