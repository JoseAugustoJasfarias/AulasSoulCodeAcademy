/* const contaNumero = palavras => {
  let qtdLetras = palavras.length;
  console.log(qtdLetras);

  return qtdLetras;
};

contaNumero('Jose Augusto');
console.log(contaNumero('marcinho'));
 */
/* function letrasMaiusculas  (texto)  {
  
  texto = texto.toUpperCase();
  return  console.log(texto);
};

letrasMaiusculas("Lores fasdfghjkhkhsgsf  G GFGSDGASGLKJKGS");

const letrasMinusculas = (texto) =>  {
  
  texto = texto.toLowerCase();
  return  console.log(texto);
};

letrasMinusculas("Lores fasdfghjkhkhsgsf  G GFGSDGASGLKJKGS");


const verificar = (palavra1, palavra2) => {

  if (palavra1 === palavra2) {
    return true;
  }else {
    return false;
  }

}


console.log(verificar("joao","Joao"));


const finalTexto = (palavra, numero) => {

  let final = palavra.slice(numero);

  return console.log(final);

}

finalTexto("é bom ser verdade isso que você me falou", 4);

const correcao = (texto,palavra) =>{
  let alterar = texto.replaceAll("Lorem", palavra);

  return console.log(alterar);

}

correcao("Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur" , "UHuuhH"); */

const contarCaracter = (texto, caracter) => {
  let qtdCaracter = 0;

  for (let i = 0; i < texto.lenght; i++) {
    if (texto[i] === caracter) {
      qtdCaracter++;
    }
  }
  return qtdCaracter;
};

console.log(
  contarCaracter(
    'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur',
    'm'
  )
);

function contarCaractere(str, caractere) {
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === caractere) {
      contador++;
    }
  }
  return contador;
}
console.log(
  contarCaractere(
    'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur',
    'a'
  )
);

/* const dobrar  = (valor) => {
  console.log(`O dobro de ${valor} é ${valor * 2}`);
}

console.log(dobrar(33));
const quadrado  = (valor) => {
  console.log(`O Quadrado de ${valor} é ${valor * valor}`);
}

quadrado(55);

const criarNomeCompleto = (nome, sobrenome) => {
  return nome + " " + sobrenome;
}

;
console.log(criarNomeCompleto ("José Augusto", "da Silva Farias"));
const contar = (maximo) => {
  for (let i = 1; i <= maximo; i++) {
    console.log(i);
  }
} */
/* contar (59);
 */
/* const imc = (peso, altura)  => {
  let calculo = peso / (altura * altura);
  console.log(`O IMC é ${calculo}`);

  return calculo;
}

imc(101, 1.65);

const fullName = (nome,idade,endereco) => `Olá, eu sou ${nome}, tenho ${idade} ano(s) e moro em ${endereco}. `

console.log(fullName("Rosa", 56,"Rio de Janeiro"));

const calculoDesconto = (valor, percentual) => {
  let desconto = valor * (percentual/100);
  return desconto;
}

console.log(calculoDesconto(165,74));

const repetirNome = (nome , repetir) => {
  let resultado ="";

  for (let i =0 ; i <= repetir ; i++){
    resultado += nome;
  }

  return resultado;
}

console.log(repetirNome("jose", 5));

const funcaoDaFuncao = (repetirNome) => {

  return funcaoDaFuncao;
}

function invocarFuncao(funcao) {
  funcao();
  }
  function minhaFuncao() {
  console.log("Essa é a minha função!");
  }

  console.log(minhaFuncao); */
