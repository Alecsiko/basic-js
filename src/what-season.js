const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) { return 'Unable to determine the time of year!' };
  if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  const otherDate = new Date(date);
  const seasonDate = otherDate.getMonth();

  if (seasonDate >= 2 && seasonDate < 5) {
    return 'spring'
  } else if (seasonDate >= 5 && seasonDate < 8) {
    return 'summer'
  } else if (seasonDate >= 8 && seasonDate < 11) {
    return 'autumn'
  } else {
    return 'winter'
  }

}

module.exports = {
  getSeason
};
