const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 const timeForMove = turnsSpeed/3600;
 const turns = (2 ** disksNumber) - 1;
 const seconds = turns / timeForMove;

 return {
   'turns': turns,
   'seconds' : Math.floor(seconds)
 }
};
