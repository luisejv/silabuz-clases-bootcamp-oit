import React from "react";
import IconButton from "./IconButton";

const botones = ["name", "email", "birthday", "country", "phone", "gender"];

const ButtonList = ({ setSelected }) => {
  return (
    <div className="d-flex">
      {botones.map((boton) => {
        return (
          <IconButton
            key={boton}
            boton={boton}
            setSelected={setSelected}
          ></IconButton>
        );
      })}
    </div>
  );
};

export default ButtonList;
