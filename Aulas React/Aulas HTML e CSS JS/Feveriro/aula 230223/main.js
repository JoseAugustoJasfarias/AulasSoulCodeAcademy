function media(nota1, nota2, nota3) {
  let resultado = (nota1 + nota2 + nota3) / 3;
  console.log(`A media é ${resultado.toFixed(2)}`);
}

//media (8,7.5,6);

function imc(peso, altura) {
  let imc = peso / (altura * altura);

  console.log(`Seu Imc é ${imc.toFixed(2)}`);
}

//imc (101,1.65);

function porcentagem(numero) {
  let porcentagem = numero * 100;

  return `${porcentagem.toFixed(1)} %`;
}
/*

let percent = porcentagem(0.85);
console.log(percent);
*/

function numeroNegativo (numero){
  if ( numero >=0){
    return false;
  }else {
    return true;
  }
  
}

let isNegative = numeroNegativo(-2);

/* console.log(isNegative);

console.log(numeroNegativo(3)); */


function formatarValor(valor) {
  const reais = console.log(new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(valor));

  return reais;
}

/* formatarValor(1234433233); */

function contarAte(numero) {
  for (let i = 1 ; i <=numero ; i ++ ){
    console.log(i);
  }

}

//contarAte(10);

function juntarNome(nome,sobrenome) {
  let concatenar = ` ${nome} ${sobrenome}`
  return concatenar;
}

//console.log(juntarNome("Jose","Farias"));

function calcularArea(raio) {
  let pi = 3.14;
  let area = pi * (raio * raio);

  return area;
}

function nivelDiametro(area) {

  if ( area >=1 && area <=20){
    return "Nivel 1";
  }else if (area >=21 && area <=40){
    return "Nível 2";
  }else {
    return "Nível Inválido";
  }
  
}

let area = calcularArea(3);

console.log(nivelDiametro(area));

function areaCirculo(raio) {
  return Math.PI * (raio * raio);
}

function nivelCirculo(area) {
  if (area >= 1 && area <= 20) {
    return "Nível I";
  } else if (area >= 21 && area <= 40) {
    return "Nivel II";
  } else {
    return "Nivel Inválido";
  }
}

console.log(nivelCirculo(areaCirculo(3)));