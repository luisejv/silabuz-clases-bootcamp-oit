import React from "react";

const User = ({ image, name, age }) => {
  return (
    <div className="d-flex align-items-center my-3">
      <img src={image} alt="" className="image-rounded" />
      <div className="ms-3">
        <h3>{name}</h3>
        <p>{age} years old</p>
      </div>
    </div>
  );
};

export default User;
