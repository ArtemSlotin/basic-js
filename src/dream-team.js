const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = [];
  for (let item of members) {
    if (typeof item !== 'string') continue;
      result.push(item.trim()[0].toUpperCase());
  }; return result.sort().join('');
};
