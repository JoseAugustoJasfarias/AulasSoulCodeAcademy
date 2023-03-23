// Objetos

// 1 1. Crie um objeto que representa uma pessoa. Propriedades: nome, idade,peso, altura. Métodos: calcular o IMC com base no peso e altura.

/* let pessoa = {
  nome: 'Raul',
  idade: 34,
  peso: 74,
  altura: 1.78,

  calcularImc() {
    let imc = this.peso / (this.altura * this.altura);
    return Math.round(imc);
  }
};

console.log(pessoa.calcularImc());
 */
//2. Crie um objeto que representa uma partida de futebol. Propriedades:mandante e visitante (representa o time com seu nome, cidade, estado e uma lista com os nomes dos 11 titulares), placar (por exemplo "5x1")

let partidaFutebol = {
  mandante: {
    nome: 'Arizona Coyotes',
    cidade: 'Tempe',
    estado: 'Arizona, EUA',
    atletas: [
      'C. Keller',
      'N. Schmaltz',
      'L. Crouse ',
      'S. Gostisbehere',
      'M. Maccelli',
      'C. Keller',
      'N. Schmaltz',
      'L. Crouse ',
      'S. Gostisbehere',
      'M. Maccelli',
      'T. Boyd '
    ],
    placar: '7 x 5'
  },

  visitante: {
    nome: 'Dallas Stars',
    cidade: 'Dallas',
    estado: 'Texas, EUA',
    atletas: [
      'Ty Dellandrea',
      'Radek Faksa',
      'Luke Glendening',
      'Roope Hintz',
      '	Wyatt Johnston',
      'Ty Dellandrea',
      'Radek Faksa',
      'Luke Glendening',
      'Roope Hintz',
      '	Wyatt Johnston',
      '	Wyatt Johnston'
    ]
  }
};

/* console.log(partidaFutebol); */

//3. Crie um array de objetos pet com as propriedades: nome, idade, peso.Crie um objeto que representa uma pessoa com as propriedades: nome,cpf, pets (um array de pets). Em seguida, defina um método em pessoa que cuida de todos os pets no array.

let pets = [
  {nome :"Jeffin",idade : 12, peso : 5.5},
  {nome :"Nicole",idade : 5, peso : 6.5},
  {nome :"Jerry",idade : 11, peso : 3.5},
  {nome :"Barbie",idade : 13, peso : 5.5},
  {nome :"Thunder",idade : 16, peso : 21.5} 
];

let pessoaa = {
  nome : "Marcelo",
  cpf : "323.554.332-54",
  pets :  [
    {nome :"Jerry",idade : 11, peso : 3.5},
    {nome :"Jeffin",idade : 12, peso : 5.5},
    {nome :"Nicole",idade : 5, peso : 6.5},
    {nome :"Thunder",idade : 16, peso : 21.5}, 
    {nome :"Barbie",idade : 13, peso : 5.5}
  ],

  cuidarPets () {
    console.log( `${this.nome} está cuidado de todos os Pets : `);
   
    for (const pet of this.pets) {
     console.log(pet);
    }
    
  }
}

console.log(pessoaa.cuidarPets());