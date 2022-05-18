const ftoc = function(temp) {
  convertedTemp = (temp - 32) * (5/9);
  if(Math.round(convertedTemp) === convertedTemp){
    return convertedTemp;
  }else{
    return parseFloat(convertedTemp.toFixed(1));
  }
};

const ctof = function(temp) {
  convertedTemp = temp * (9/5) + 32;
  if(Math.round(convertedTemp) === convertedTemp){
    return convertedTemp;
  }else{
    return parseFloat(convertedTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
