import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NARUTO_API from "../utils/narutoAPI";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    const body = { username: username, password: password };

    NARUTO_API.post("authentication/login/", body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((error) => console.log(error));

    //   NARUTO_API.post(url, body, {
    //       headers: {'Authorization' : 'token ' + localStorage.getItem('token')}
    //   })
  };

  return (
    <form>
      <h2 className="text-center">Login</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
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
      <button type="submit" className="btn btn-primary" onClick={login}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
