const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // let sum =[];
  // for (i = 0; i < matrix.length; i++){
  //   if(matrix[i].includes('^^')){
  //     sum.push(1)
  //   }
  // }
  // return sum.length
//  let newArr = matrix.flat()
  return matrix.flat().filter(i => i === '^^').length

}

module.exports = {
  countCats
};
