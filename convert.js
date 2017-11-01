const convert = require("convert-units");

//const result = convert(20).from('tsp').to('Tbs'); //teaspoon to tablespoon
//const result = convert(20).from('l').to('qt'); //liter to quart
//const result = convert(20).from('l').to('gal'); //liter to gallon
//const result = convert(20).from('fl-oz').to('cup'); //fl-oz to cups
//const result = convert(20).from('g').to('oz'); //gram to oz
//const result = convert(2.5).from('l').to('ml');
const result = convert(1).from('lb').to('oz'); //lb to ounces
console.log(`2.5 tsp is ${result} tbsp`)