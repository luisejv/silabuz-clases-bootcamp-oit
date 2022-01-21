import React from "react";

const animales = ["Perro", "Gato", "Conejo", "Raton", "Elefante", "Leon"];

const Ejercicio3 = () => {
  return (
    <div>
      {animales.sort().map((animal) => {
        return (
          <div key={animal} style={{ textAlign: "center", padding: "10px" }}>
            {animal}
          </div>
        );
      })}
    </div>
  );
};

export default Ejercicio3;
