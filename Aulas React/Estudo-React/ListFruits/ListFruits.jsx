import { frutas } from "../../data/frutas";
import { useState } from "react";
import "./ListFruits.css"

export function ListFruits() {
  const [resultado, setResultado] = useState([]);
  
  function Pesquisar(event) {
    const input = event.target.value.trim().toLowerCase();
    if (input === "") {
      setResultado([]);
      return;
    }
    const resultadoDaBusca = frutas.filter(fruta => {
      return fruta.nome.toLowerCase().includes(input);
    });
    setResultado(resultadoDaBusca);
  }

  return (
    <>
      <section>
        <h1>Digite sua busca</h1>
        <form action="" className="form">
          <input type="text" placeholder="Pesquisar..." onChange={Pesquisar} />
        </form>
        <div className="resultado">
          <h1>Lista de Resultados</h1>
          <ul>
            {resultado.map((fruta, index) => (
              <li key={index}>
                <img className="fruta-imagem" src={fruta.imagem} alt={fruta.nome} />
                <p>{fruta.nome}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
