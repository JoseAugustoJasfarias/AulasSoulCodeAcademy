import "../ListaProdutos/ListaProdutos.css";

export function Produto({ nome, descricao, preco, imagem }) {
  return (
    <>
      <section className='card'>
        <h1>{nome}</h1>
        <img src={imagem} alt="Produto" />
        <p>{descricao}</p>
        <h5>{preco}</h5>
      </section>
    </>
  );
}
