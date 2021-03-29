const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const mainStr = '' + str;
  const mainSequence = [];
  const addSequence = [];
  const [repeatTimes, separator, additionSeparator] = [
    options.repeatTimes || 1,
    options.separator || '+',
    options.additionSeparator || '|',
  ];

  if ('addition' in options) {
    const [addition, additionRepeatTimes] = [options.addition, options.additionRepeatTimes || 1];
    for (let i = 0; i < additionRepeatTimes; i++) {
      addSequence.push('' + addition);
    }

    if (repeatTimes === 1) return mainStr + addSequence.join(additionSeparator);
  }

  for (let i = 0; i < repeatTimes; i++) {
    mainSequence.push(mainStr + addSequence.join(additionSeparator));
  }

  return mainSequence.join(separator);
};


// const CustomError = require("../extensions/custom-error");

// module.exports = function repeater(str, options) {
//   let result = str;
//   let {
//     repeatTimes  = 0,
//     separator = '+',
//     additionSeparator  = '|',
//     additionRepeatTimes,
//     addition
//   } = options;
  
//   if (typeof str !== 'string' && typeof addition !== 'string' && typeof addition == 'number') {
//     str = str.toString();   
//     addition = addition.toString();
//   }
    
//   if (repeatTimes === undefined || additionRepeatTimes === undefined) {
//     if (typeof addition == 'object' && addition == null) {
//        addition = '' + addition;
//     }
//     if (addition) {
//       result += `${addition}`;
//     }
//   }
  
//   for (let i = 1; i <= repeatTimes; i++) {
//     for (let k = 1; k <= additionRepeatTimes; k++) {
//       if (k == additionRepeatTimes) {
//         result += `${addition}`;
//       } else result =`${result}${addition}${additionSeparator}`;
//     }
//           console.log(i == repeatTimes)

//     if (i == repeatTimes) {
//       null;
//     } else result += `${separator}${str}`;
//   }
//   console.log(result)
//   return result;
// };