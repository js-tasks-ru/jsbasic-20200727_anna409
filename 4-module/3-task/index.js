/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tbodyElement = table.querySelector('tbody');
    let trElements = tbodyElement.querySelectorAll('tr');
    for (let trElement of trElements) {
        let tdElements = trElement.querySelectorAll('td');
        if (tdElements[1].innerHTML < 18) {
            trElement.style.textDecoration = 'line-through';
        }
        if (tdElements[2].innerHTML === 'm') {
            trElement.classList.add('male');
        }
        if (tdElements[2].innerHTML === 'f') {
            trElement.classList.add('female');
        }
        if (tdElements[3].getAttribute('data-available') === 'true') {
            trElement.classList.add('available');
        }
        if (tdElements[3].getAttribute('data-available') === 'false') {
            trElement.classList.add('unavailable');
        }
        if (!tdElements[3].hasAttribute('data-available')) {
            trElement.setAttribute('hidden', '');
        }
    }
}
