const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let newArr = members.filter(elem => (typeof elem) == "string");
  console.log(newArr );
  let strTrim = newArr.map(value => value.trim().toUpperCase()).sort();
  console.log(strTrim);
  let codNAme = strTrim.map(value => value[0]).join('')
  console.log(codNAme);
  return codNAme
}

module.exports = {
  createDreamTeam
};
