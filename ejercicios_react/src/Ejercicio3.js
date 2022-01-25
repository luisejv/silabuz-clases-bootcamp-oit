import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonList from "./components/ButtonList";

const Ejercicio3 = () => {
  const [user, setUser] = useState(null);
  const [selected, setSelected] = useState("");

  const fetchUser = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log(res);
      setUser(res.data.results[0]);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const getInfo = () => {
    switch (selected) {
      case "name":
        return user.name.first + " " + user.name.last;
      case "email":
        return user.email;
      case "birthday":
        return new Date(user.dob.date).toLocaleDateString();
      case "country":
        return user.location.country;
      case "phone":
        return user.phone;
      case "gender":
        return user.gender;
      default:
        return;
    }
  };

  if (!user) return <div>Cargando...</div>;

  return (
    <div className="container">
      <div className="carta">
        <img src={user.picture.large} alt=""></img>
        <p className="fixed-height">{getInfo()}</p>
        <ButtonList setSelected={setSelected}></ButtonList>
        <button className="btn btn-info text-white" onClick={fetchUser}>
          random user
        </button>
      </div>
    </div>
  );
};

export default Ejercicio3;
