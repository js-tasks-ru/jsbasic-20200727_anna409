function hideSelf() {
  let hiddenButton = document.body.querySelector('.hide-self-button');
  hiddenButton.onclick = () => hiddenButton.setAttribute('hidden', '');
}
