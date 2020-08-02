/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let length = str.length;
  if (length > maxlength) {
    return (str.substr(0, (maxlength - 1)) + "…");
  } 
  return str;
}
