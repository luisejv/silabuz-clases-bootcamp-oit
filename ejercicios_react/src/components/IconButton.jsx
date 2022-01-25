import React from "react";

const IconButton = ({ boton, setSelected }) => {
  const getClase = () => {
    switch (boton) {
      case "name":
        return "fas fa-user";
      case "email":
        return "fas fa-envelope-open";
      case "birthday":
        return "fas fa-birthday-cake";
      case "country":
        return "fas fa-flag";
      case "phone":
        return "fas fa-phone";
      case "gender":
        return "fas fa-venus-mars";
      default:
        break;
    }
  };

  return (
    <div className="m-1 btn-icon" onMouseOver={() => setSelected(boton)}>
      <i className={getClase()}></i>
    </div>
  );
};

export default IconButton;
