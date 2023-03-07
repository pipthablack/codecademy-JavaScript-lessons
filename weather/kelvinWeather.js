// kelvin cal
const Kelvin = 0;

//celsius cal
const Celsius = Kelvin - 273;
// fahrenheit
let fahrenheit = Celsius *(9/5) + 32 ;
// fah floor
fahrenheit = Math.floor(fahrenheit);
// temp
console.log (`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// extra 
let newton = Celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperatue is ${newton} degrees Newton.`);