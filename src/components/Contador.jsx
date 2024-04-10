import { useState } from "react";

const Contador = () => {
  //aqui agrego la logica del componente
  //aqui creo el state
  const [numero, setNumero] = useState(1);

  return (
    //aqui puedo agregar un poquito de logica
    <section className="text-center">
      {/*aqui va la logca del maquetado*/}

      <h2>Contador</h2>
      <p>{numero}</p>
      
      <button
        className="btn btn-primary me-2"
        onClick={() => setNumero(numero + 1)} //hago asi pq la funcion tiene una unica linea
      >
        +1
      </button>

      <button
        className="btn btn-danger me-2"
        onClick={() => setNumero(numero - 1)} //hago asi pq la funcion tiene una unica linea
      >
        -1
      </button>

    </section>
  );
};
export default Contador;
