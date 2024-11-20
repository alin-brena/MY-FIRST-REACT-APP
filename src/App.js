import React from "react";
import Contador from "./componentes/contador"; // Importa el componente Contador

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        ¡Bienvenido al Contador de Alin!
      </h1>
      <Contador /> {/* Llamada al componente Contador */}
    </div>
  );
}

export default App;




