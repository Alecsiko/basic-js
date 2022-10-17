const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator ='|'} = options;

  let repeatString = [];

  for (let i = 0; i < repeatTimes; i++) {
    repeatString.push(str);
  }

  let repeatAddition = [];

  for (let i = 0; i < repeatTimes; i++) {
    repeatAddition.push([]);
    for (let k = 0; k < additionRepeatTimes; k++) {
      if(addition === null) {
        repeatAddition[i].push(`${addition}`);
      } else {
        repeatAddition[i].push(addition);
      }
    }
  }

  let repeatAdditionitem = []

  repeatAddition.map(element => {
    repeatAdditionitem .push(element.join(`${additionSeparator}`))
  });

  for (let i = 0; i < repeatTimes; i++) {
    repeatString[i] = repeatString[i] + repeatAdditionitem[i];
  }

  return repeatString.join(`${separator}`);
}


module.exports = {
  repeater
};
