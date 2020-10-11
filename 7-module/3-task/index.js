export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.createSlider();
    this.moveSliderEvent();
  }
  createSlider() {
    let slider = document.createElement('div');
    slider.classList.add('slider');

    let sliderThumb = document.createElement('div');
    sliderThumb.classList.add('slider__thumb');
    slider.append(sliderThumb);

    let sliderValue = document.createElement('span');
    sliderValue.classList.add('slider__value');
    sliderValue.innerText = this.value;
    sliderThumb.append(sliderValue);

    let sliderProgress = document.createElement('div');
    sliderProgress.classList.add('slider__progress');
    slider.append(sliderProgress);

    let sliderSteps = document.createElement('div');
    sliderSteps.classList.add('slider__steps');
    slider.append(sliderSteps);

    for (let i = 0; i < this.steps; i++) {
      let sliderStep = document.createElement('span');
      sliderSteps.append(sliderStep);
    }
    sliderSteps.firstChild.classList.add('slider__step-active');

    return slider;
  }

  moveSliderEvent() {
    this.elem.addEventListener('click', (event) => {

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      let sliderValue = this.elem.querySelector('.slider__value');
      sliderValue.innerText = value;

      let activeStep = this.elem.querySelector('.slider__step-active');
      if (activeStep) {
        activeStep.classList.remove('slider__step-active');
      }
      let sliderSteps = this.elem.querySelector('.slider__steps').querySelectorAll('span');
      sliderSteps[value].classList.add('slider__step-active');

      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: value,
        bubbles: true
      }))
    });
  }
}