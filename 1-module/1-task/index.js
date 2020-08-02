/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    let m = 1;
    for (let i = 1; i <= n; i++){
    m *= i;
  }
  return m;
}
}
