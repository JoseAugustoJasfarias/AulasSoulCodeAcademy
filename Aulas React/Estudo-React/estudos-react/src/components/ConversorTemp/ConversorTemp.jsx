import { useEffect, useState } from "react";
import "./ConversorTemp.css";


// Efeitos = ações secundárias


export function ConversorDistancia() {
  const [distanciaME, setdistanciaME] = useState(0);
  const [distanciaMM, setdistanciaMM] = useState(0);
  const [distanciaCM, setdistanciaCM] = useState(0);
  const [distanciaKM, setdistanciaKM] = useState(0);


  // Exercício: Adicionar conversão para Kelvin no efeito
  // e mostrar no return. K = C - 273


  useEffect(() => {
    // Quando a tempC for alterada essa função/efeito
    // será executado automaticamente
    const convDistMM = Number(distanciaME) * 1000;
    const convDistCM = Number(distanciaME) * 100;
    const convDistKM = Number(distanciaME) / 1000;

    setdistanciaKM(convDistKM);
    setdistanciaMM(convDistMM);
    setdistanciaCM(convDistCM);


  }, [distanciaME]); // array de dependencias


  return (
    <div>
      <h1>Digite a Distância em Metros</h1>
      <input
        type="number"
        placeholder="Distância em Metros M"
        onChange={(evento) => setdistanciaME(evento.target.value)}
      />
      <p>{distanciaME} Metros Convertido em Milimetro é : {distanciaMM} Milimetro</p>
      <p>{distanciaME} Metros Convertido em Centimetros é: {distanciaCM} Centimetro</p>
      <p>{distanciaME} Metros Convertido em Quilometros é: {distanciaKM} Quilometros</p>
    </div>
  );
}



