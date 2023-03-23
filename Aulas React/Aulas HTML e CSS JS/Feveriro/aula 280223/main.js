let palavras = ["Goiabada", "Macarrão" ,"joia", "padrão","lua"];

let verificado = palavras.map((palavra) => {
   if (palavra.length < 5) {
    return palavra = "Batata";
  }else {
    return palavra.toLocaleUpperCase();

  }
})

console.log(verificado);