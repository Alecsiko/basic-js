const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1i, s2i) {

  let s1 = s1i;
  let s2 = s2i;
  let sum = [];

  for (i = 0; i < s2i.length; i++) {
    if (s2.includes(s1[i])) {
      const temp = s2.replace(s1[i], '');
      s2 = temp;
      sum.push(s2.replace(s1[i], ''))
    }

  }


  console.log(s2i.length, s2);
  return (s2i.length - s2.length)
}


module.exports = {
  getCommonCharacterCount
};
