const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = n >= 10 ? n.toString().split('').reduce((acc,numSum) => acc+=Number(numSum),0) : n;
  let sumTw = Number(sum) >= 10 ? sum.toString().split('').reduce((acc,numSum) => acc+=Number(numSum),0) : sum;
  return sumTw;
}

module.exports = {
  getSumOfDigits
};
