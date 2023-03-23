/* 
Exercicio 1

let contaBancaria = {
  codigo : 34566,
  saldo : 231545,
  cpf : 41436464221,
  nomeTitular : "UhhuH",

  saque (valor) {
    this.saldo -= valor;
    console.log(`Você sacou ${valor} O seu saldo é ${this.saldo}`);
  },

  deposito (valor){
    this.saldo += valor;
    console.log(`Você depositou ${valor} O seu saldo é ${this.saldo}`);
    
  }
}

contaBancaria.saque(3423);
contaBancaria.deposito(1000000); */
// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto = {
  // Propriedades

  nome : "Saco de Pancada",
  descricao : "Saco de Pancada profissional 80kg",
  qtd : 12,
  precoOriginal : 435.76,
  desconto : 20 ,

  //Métodos

  calcularPrecoDesconto () {
    return console.log(`O desconto dado foi ${this.desconto} o produto saiu por ${this.precoOriginal -= this.desconto}`);
  },

  apresentacao () {
    console.log(`Nome do Produto : ${this.nome} 
                Descrição do Produto : ${this.descricao}
                Quantidade em estoque : ${this.qtd}
                Preço do Produto : ${this.precoOriginal}
                Desconto Aplicado : ${this.desconto} `);
  },

  comprar(total) {
    this.qtd -= total;
    console.log(`A quantidade restante é ${this.qtd}`);
  }


}

produto.apresentacao();
produto.calcularPrecoDesconto();
produto.comprar(3);