/* Declaração de Variáveis */

let nomeProduto = 'HeadPhone JBL',
  precoProduto = 699.59,
  descProduto = true,
  descValido = false;

/* Calculo desconto */

if (descValido == true) {
  var precoFinal = precoProduto - 20 / 100;
} else {
  precoFinal = precoProduto;
}

/* Verificação de desconto Preço Final */

if (precoFinal > 1000) {
  precoFinal = precoFinal - 50;
  console.log('O preço final do Produto é R$ ' + precoFinal + ' . ');
} else {
  console.log('O preço final do Produto é R$ ' + precoFinal + ' . ');
}

/* Array de Demandas */

let demandas = [10, 2, 1, 30, 5];
let total = [];
var lucroTotal = 0;

for (let i = 0; i < demandas.length; i++) {
  total[i] = precoProduto * demandas[i];
  lucroTotal = lucroTotal + total[i];
  console.log('O cliente ' + (i + 1) + ' deverá pagar: R$ ' + total[i]);
}

console.log('O total de lucro é de R$ ' + lucroTotal);
