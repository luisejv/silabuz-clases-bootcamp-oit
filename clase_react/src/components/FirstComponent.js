import React from "react";

const FirstComponent = ({ name, lastname, color }) => {
  return (
    <div style={{ color: name.includes("e") ? "blue" : "red" }}>
      Hola y yo soy {name} {lastname ? `y mi apellido es ${lastname}` : ""}
    </div>
  );
};

export default FirstComponent;
