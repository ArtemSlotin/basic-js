const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
if (typeof sampleActivity != 'string') return false;
sampleActivity = Number(sampleActivity);
  if(sampleActivity > 0 && sampleActivity <= 15  ){
    let k = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
      if(age < 0) return false;
      return age;
    } else return false; 
};