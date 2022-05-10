
// type convertion and type coertion

//type convertion - explicit convertion
let inputYear = '1991';

console.log("Concatenado: " + inputYear + 20);

//conversão explícita
console.log("Converted: " + Number(inputYear) + 20);

//NaN
console.log(Number('aaaa'));

//NaN avaliado como Number
console.log(typeof NaN);

console.log(String(23), 23);
//js pode converter para: number, to string ou to boolean

//Type coercion
console.log('I am ' + 23 + 'years old');

//strings foram convertidos para number pois - foi usado
console.log('23' - '10' - 3);

//strings foram concatenadas pois + foi usado
console.log('23' + '10' + 3);

//strings foram convertidos para number pois * foi usado
console.log('23' * '2');


//type convertion
let n = '1' + 1;
n = n - 1;
console.log(n);


