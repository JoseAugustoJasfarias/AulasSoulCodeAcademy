import { useEffect, useState } from 'react';

export function CalculadoraPorcentagem() {
  const [valor, setValor] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [res , setRes] = useState(0)

  useEffect(() => {
    const resultado = valor * (porcentagem / 100);
    setRes(resultado);
  }, [valor, porcentagem]);

  return (
    <>
      <div>
        <h1>Digite o Valor e a Porcentagem para realizar o calculo</h1>
        <span>Digite o Valor </span>
        <input
          type="number"
          placeholder="Digite o Valor..."
          onChange={evento => setValor(evento.target.value)}
        /><br/>
        <span>Digite a Porcentagem </span>
        <input
          type="number"
          placeholder="Digite a Porcentagem..."
          onChange={evento => setPorcentagem(evento.target.value)}
        />
        <p>
            {porcentagem} % {valor} é ={res.toFixed(2)}
        </p>
        
      </div>
    </>
  );
}
