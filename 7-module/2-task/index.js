import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = this.createModal();
    this.initCloseEvent();
  }
  
  createModal() {
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal__overlay');
    modal.append(modalOverlay);

    let modalInner = document.createElement('div');
    modalInner.classList.add('modal__inner');
    modal.append(modalInner);

    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal__header');
    modalInner.append(modalHeader);

    let modalCloseButton = document.createElement('button');
    modalCloseButton.type = 'button';
    modalCloseButton.classList.add('modal__close');
    modalHeader.append(modalCloseButton);

    let closeIcon = document.createElement('img');
    closeIcon.src = '/assets/images/icons/cross-icon.svg';
    closeIcon.alt = 'close-icon';
    modalCloseButton.append(closeIcon);

    let modalTitle = document.createElement('h3');
    modalTitle.classList.add('modal__title');
    modalHeader.append(modalTitle);

    let modalBody = document.createElement('div');
    modalBody.classList.add('modal__body');
    modalInner.append(modalBody);

    return modal;
  }

  open() {
    document.body.append(this.modal);
    document.body.classList.add('is-modal-open');
  }

  setTitle(modalTitle) {
    let title = this.modal.querySelector('.modal__title');
    title.innerText = modalTitle;
  }

  setBody(node) {
    let modalBody = this.modal.querySelector('.modal__body');
    let child = modalBody.firstChild;
    if (child) {
      modalBody.removeChild(child);
    }
    modalBody.append(node);
  }

  close() {
    let modalWindow = document.body.querySelector('.modal');
    if (modalWindow) {
      modalWindow.remove();
    }
    document.body.classList.remove('is-modal-open');
  }

  initCloseEvent() {
    let closeButton = this.modal.querySelector('.modal__close');
    closeButton.addEventListener('click', this.close);
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    });
  }
}
