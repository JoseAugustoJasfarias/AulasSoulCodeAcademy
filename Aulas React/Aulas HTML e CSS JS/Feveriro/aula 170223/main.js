/* Exe 1 */
/* let tempFahrenheit = 55;

let tempCelsius;

tempCelsius = (tempFahrenheit - 32) / 1.8;

console.log(
  `Á temperatura de ${tempFahrenheit}° é igual á ${tempCelsius.toFixed()}° `
);
 */
/* Exe2 */
/* let nome, sobrenome, nomeCompleto;
nome = 'Rafael';
sobrenome = 'da Silva';
nomeCompleto = nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

console.log('===================='); */

/* Exe3 */

/* let num1 = 7;
let num2 = 10;
let num3 = 3;
let num4 = 9;
let num5 = 5;

let p1 = 3;
let p2 = 2;
let p3 = 1;
let p4 = 5;
let p5 = 5;

let mediaPonderada =
  (num1 * p1 + num2 * p2 + num3 * p3 + num4 * p4 + num5 * p5) /
  (p1 + p2 + p3 + p4 + p5);

console.log(`Á media pondera é ${mediaPonderada}`);

console.log('===================='); */

/* Exe4 */ /* 
let comprimento = 49;
let largura = 20;

let areaTerreno = comprimento * largura;

let hectares = areaTerreno * 100;

console.log(
  `Á área do terreno é ${areaTerreno} km² que é a mesma coisa que ${hectares} Hectares. `
); */

/* Exe5 */ /* 
let kelvin = 102;
let Celsius = kelvin - 273;

console.log(
  `A temperatura de ${kelvin} ° Kelvins é a mesma que ${Celsius} ° Celsius`
);
console.log("");
console.log("Estrutura condicionais"); */
/* Exe 1 */
/* 
let a =4;
let b =24;
let c =34;

if (a > b && a >c){
  console.log("O maior número é " + a);

}else if (b > a && b > c){
  console.log("O maior número é " + b);

}else {
  console.log("O maior número é " + c)

} */
/* Exe 2 */ /* 
console.log('====================');

let l1 = 23;
let l2 =88;
let l3=44;

if ((l1+l2) > l3 ) {
  console.log("O triângo é possível.");
}else {
  console.log("O triângo não é possível.");

} */

/* Exe3 */
/* console.log("");
console.log('====================');

let idade = 22;

if ((idade < 0) || (idade > 130) ){
console.log("Aviso ! Você não pode estar aqui.");
}else {
  console.log("Tá tudo ok com sua idade.")
} */

/* Exe4 */
/* console.log('===================='); */

/* let salario = 1500;
let qtdDependentes =5;
let salarioAtual;

if ( qtdDependentes === 0){
  console.log("Não é possível realizar aumento salarial .")
}else if( qtdDependentes > 0 || qtdDependentes <= 5){
   salarioAtual = salario * 1.3;
  console.log("Houve aumento de  30%  seu sálario passou de " + salario + " para " + salarioAtual);
}else {
  salarioAtual = salario * 1.4;
  console.log("Houve aumento de  30%  seu sálario passou de " + salario + " para " + salarioAtual);
} */
/* Exe5 */ /* 
let diaSemana = 9;

switch (diaSemana) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6: 
    console.log("Dia da Semana");
    break;

  case 7 :
  case 1 :
    console.log("Final de Semana");
    break;
  
  default :
    console.log("Não é um dia valido!");
  
}
 */
/* Exe6 */ /* 
let ano = 400;

if ((ano % 4 == 0) && (ano % 100 == 0) && (ano % 400 == 0)){
  console.log(ano + " é um ano bisexto");
} else {
  console.log(ano + " não é um ano bisexto");
} */

/* Exe1  Estrutura de Seleção*/
/* 
let caracter = 10;



switch (caracter.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log('É uma vogal');
    break;


  default:
    console.log('É uma consoante');
} */

/* Exe2 */
/* 
let mesAno = 8;

switch (mesAno) {
  case 1:
    console.log('Janeiro');
    break;
  case 2:
    console.log('Fevereiro');
    break;
  case 3:
    console.log('Março');
    break;
  case 4:
    console.log('Abril');
    break;
  case 5:
    console.log('Maio');
    break;
  case 6:
    console.log('Junho');
    break;
  case 7:
    console.log('Julho');
    break;

  case 8:
    console.log('Agosto');
    break;

  case 9:
    console.log('Setembro');
    break;
  case 10:
    console.log('Outubro');
    break;
  case 11:
    console.log('Novembro');
    break;
  case 12:
    console.log('Dezembro');
    break;
}  */

/* Exe3 */
/* 
let nDia = 2;

switch (nDia) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log('31 Dias');
    break;
  case 2:
    console.log('28 Dias');
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log('30 Dias');
    break;
  default:
    console.log("Não é um mês valido");

} */

/* Exe4 */

/* let estacao = 4;

switch (estacao) {
  case 1 :
    console.log("Verão");
  case 2 :
  console.log("Outono");

  case 3 : 
  console.log("Inverno");

  case 4 : 
  console.log("Primavera");

} */

/* Exe5 */

/* let nota = 5;

switch (nota) {
  case 1 :
  case 2 :
  case 3 :
  case 4 :
  console.log("Insuficiente");
  break;

  case 5 :
  case 6 :
  console.log("Regular");
  break;
  
  case 7 :
  case 8 :
    console.log("Bom");
    break;

  case 9 :
  case 10 :
    console.log("Excelente");
    break;

  default :
    console.log("Inválido");

} */

/* Exe 1 loop */
/* let n = 5;
let cont = 0;

while (cont < 10) {
  cont++;
  console.log(`${cont} x ${n} = ${cont * n}`);
}  */
/*
/* Exe 2 loop */
/* console.log('====================');
let i = 0;

while (i < 99) {
  i++;
  if (i % 2 === 1) {
    console.log(i);
  }
}

console.log('===================='); */
/*
/* Exe 3 loop */

/* let contador = 50;

while (contador <= 75) {
  console.log(contador);
  contador++;
}
console.log('========Usando For ============');

for (let coont = 50; coont <= 75; coont++) {
  console.log(coont);
}

console.log('========Usando For ============');  */
/* 
for (let i = 0; i <= 99; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

console.log('========Usando For ============');

for (let o = 0; o <= 10; o++) {
  console.log(` ${o} x 5 = ${o * 5}`);
}
 */

/* let primeiroTermo = 0;
let segundoTermo = 1;
for (let i = 1; i <= 10; i++) {
const proximoTermo = primeiroTermo + segundoTermo;
primeiroTermo = segundoTermo;
segundoTermo = proximoTermo;
console.log(primeiroTermo);
} */



let text = "";
for (let i = 0; i < 5; i++) {
for (let j = 0; j <= i; j++) {
  text += "*";
  }
  text += "\n"
  }
  console.log(text);