/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (!!str == false) {
    return str;
  }
  if (str.length == 1) {
    return str.toUpperCase();
  } 
  firstSymbol = str[0].toUpperCase();
  subString = str.slice(1);
  return (firstSymbol + subString);
}
