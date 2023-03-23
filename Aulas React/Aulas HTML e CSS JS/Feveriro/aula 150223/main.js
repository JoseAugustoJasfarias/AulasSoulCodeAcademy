/* Exercicio 1 */
let n1 = 5;
let n2 = 8;
let n3 = 9;

let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
  console.log('Aprovado');
} else if (media >= 5 && media < 7) {
  console.log('Reforço');
} else {
  console.log('Reprovado');
}

/* Exercicio 2 */

let peso = 101;

let altura = 1.65;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc < 24.9) {
  console.log('Peso Normal');
} else if (imc >= 25 && imc < 29.9) {
  console.log('SobrePeso');
} else if (imc >= 30 && imc < 34.9) {
  console.log('Obesidade Grau I');
} else if (imc >= 35 && imc < 39.9) {
  console.log('Obesidade Grau II');
} else {
  console.log("Obesidade Mórbida");
}

/* Exercicio 3 */

let numA = 6;
let numB = 2;

if (numA > numB){

  console.log(`Número ${numA} é Maior que ${numB} `);

} else if (numA === numB){

  console.log (`Número ${numA} é igual a o Número ${numB}`);

} else {
  console.log(`Número ${numA} é Menor que ${numB} `);
}