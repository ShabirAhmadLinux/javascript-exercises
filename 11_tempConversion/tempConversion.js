const convertToCelsius = function(fahrenheit) {
  let tempInCelsius=(fahrenheit-32)/1.8;
  return parseFloat(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let tempInFahrenheit=(celsius*1.8)+32;
  return parseFloat(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
