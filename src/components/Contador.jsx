import { useState } from "react";

const Contador = () => {
    //aqui agrego la logica del componente
    // let numero = 10;
    //aqui creo el state

    const [numero, setNumero] = useState(1);


    const sumar = ()=>{

        setNumero(numero+1);
          console.log(numero);
    }

        return (
            //aqui puedo agregar un poquito de logica
            <section className="text-center">
               { /*aqui va la logca del maquetado*/}
                <h2>Contador</h2>
                <p>{numero}</p>
                <button className="btn btn-primary me-2" onClick={sumar}>+1</button>
                <button className="btn btn-danger">-1</button>
            </section>
        );
    
}

export default Contador;