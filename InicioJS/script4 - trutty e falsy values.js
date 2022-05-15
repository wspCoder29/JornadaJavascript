
//TRUTTY E FALSY VALUES

//falsy values: 0, '', undefined, null, NaN

//Todos os exemplos abaixo ao serem convertidos para boolean são
//conventidos em false.

//Todos as outras conversões são atribuídas true, como o objeto vazio no fim

console.log(Boolean(0));

console.log(Boolean(undefined));

console.log(Boolean(null));

console.log(Boolean(NaN));

console.log(Boolean({}));

const money = 100;
if (money) {
    console.log("Teste 1");
} else {
    console.log("Teste 2");
}

let altura;
if (altura) {
    console.log('Ok teste 1');
} else {
    console.log('Teste 2');
}





