import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NARUTO_API from "../utils/narutoAPI";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = (event) => {
    event.preventDefault();
    const body = {
      username: username,
      password: password,
      email: email,
      is_staff: false,
    };
    console.log(body);
    NARUTO_API.post("authentication/sign-up/", body)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form>
      <h2 className="text-center">Registro</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={signup}>
        Registro
      </button>
    </form>
  );
};

export default RegisterForm;
