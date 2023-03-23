// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
/* let num = [1, 5, 6, 4, 8, 22, 13, 54, 50, 14];
let total = 0;

for (let i = 0; i < num.length; i++) {
  total += num[i];
}
console.log(num);
console.log(total); */

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

/* let array = [22,534,15,66,77];
let soma = 0;

for (let i = 0; i < array.length ; i ++) {
  soma += array[i];
}
console.log(soma);
let media = soma / array.length;

console.log(media); */

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

/* let array7 = [22,43,12,65,787,53,211];

let maiorNumero = array7[0];

array7.sort();
console.log(array7);
console.log(array7[array7.length -1]); */
//================

/* for (let i = 0 ; i < array7.length ; i++) {
  if (array7[i] > maiorNumero){
    maiorNumero = array7[i];
  }

} */
/* console.log(array7);
console.log(maiorNumero); */

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

/* let frutas = ["maça","banana", "abacaxi","goiaba"]

for (let i = 0 ; i < frutas.length ; i++) {
  console.log(`A palavra ${frutas[i]} possui ${frutas[i].length} caracteres`);

}
 */

// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

/* let numeroAleatorio = [
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100)
];
let newArray = [];
let soma = 0;
for (let i = 0; i < numeroAleatorio.length; i++) {
  if (numeroAleatorio[i] % 2 === 0 ) {
    newArray[i] = numeroAleatorio[i];
    soma += numeroAleatorio[i];
  }
}
console.log(` A soma dos pares é ${soma} `);
console.log(numeroAleatorio);
console.log(newArray);
 */

// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)

/* function verificarTipoArquivo(nomeArquivo){
  if( nomeArquivo.endsWith(".mp3") || nomeArquivo.endsWith(".wav") ){
      return true
  } else{
      return false
  }
}
console.log(verificarTipoArquivo("Linkin Park - In The End.mp3")); */


// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.



// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

function inverterString(string) {
  var stringInvertida = '';
  for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
  }
  return stringInvertida;
}

console.log(inverterString('BATATA'));

//exercicio 9

function inverterArray (arr){
  return arr.reverse();
}

console.log(inverterArray([1, 2, 3]));

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]
