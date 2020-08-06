/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for (let key in obj) {
    if(key != undefined) {
      return false;
    }
  } return true;
}
