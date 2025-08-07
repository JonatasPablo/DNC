let height = 170;
let weight = 70;
const conversionFactor = 0.01;

height *= conversionFactor;

let imc = weight / (height * height);
console.log(imc);