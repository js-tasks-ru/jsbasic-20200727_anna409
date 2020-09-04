function toggleText() {
  let button = document.body.querySelector('.toggle-text-button');
  let text = document.body.querySelector('#text');
  button.onclick = () => text.hasAttribute('hidden') ? text.removeAttribute('hidden') : text.setAttribute('hidden', '');
}
