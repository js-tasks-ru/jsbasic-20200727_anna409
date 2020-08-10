/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numberArray = str.split(' ')
    .map(item => item.split(','))
    .flat()
    .filter(item => isFinite(item));

  let min = Math.min(...numberArray);
  let max = Math.max(...numberArray);
  let result = {
    min: min,
    max: max
  };
  return result;
}
