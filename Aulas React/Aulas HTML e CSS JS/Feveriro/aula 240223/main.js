function calcular(valor1, valor2 , operador) {
  let resultado;
  if (operador == "*") {
    resultado = valor1 * valor2;
    console.log(`O resulta entre ${valor1} x ${valor2} = ${resultado}`);
  }else if (operador == "/"){
    resultado = valor1 / valor2;
    console.log(`O resulta entre ${valor1} / ${valor2} = ${resultado}`);
  }else if (operador == "+"){
    resultado = valor1 + valor2;
    console.log(`O resulta entre ${valor1} + ${valor2} = ${resultado}`);
  }else if (operador == "-"){
    resultado = valor1 - valor2;
    console.log(`O resulta entre ${valor1} - ${valor2} = ${resultado}`);
  }else{
    console.log("Operação ínvalida");
  }

}

function conversor(temp) {
  let celsius ;

  celsius = (temp -32) / 1.8;

 
  console.log(`O valor de ${temp}° Fahrenheit é igual a ${Math.cbrt(celsius)}° Celsius`);
  return celsius;

}

conversor (45);
function checkTemp(celsius) {
  if (celsius < 11){
    console.log("Muito Frio!");
  }else if ( celsius > 11 && celsius <= 15){
    console.log("Clima bom!");
  }else if (celsius > 30){
    console.log("Hell!");
  }
}

checkTemp (45);