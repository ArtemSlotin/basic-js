const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if (!Array.isArray(arr)) throw Error;

let temporary = [...arr];

temporary.forEach((item, i, arr) => {
  switch(item) {
   case '--discard-next':
    arr[i] = arr[i + 1] = undefined;
   break;

   case '--discard-prev':
    arr[i] = arr[i - 1] = undefined;
   break;

   case '--double-next':
    arr[i] = arr[i + 1];
   break;

   case '--double-prev':
    arr[i] = arr[i - 1];
   break;
  }
})

return temporary.filter(x => typeof x !== 'undefined');
};
