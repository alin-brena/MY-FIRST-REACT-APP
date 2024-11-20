import React, { useState } from "react";
import "./contador.css"; // Importa el archivo de estilos

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="container">
      <h1>Contador React</h1>
      <div className="counter-display">Cuenta: {contador}</div>
      <div className="button-group">
        <button className="button" onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
        <button className="button" onClick={() => setContador(contador - 1)}>
          Decrementar
        </button>
        <button className="button reset" onClick={() => setContador(0)}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Contador;
