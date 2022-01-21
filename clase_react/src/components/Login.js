import React, { useState } from "react";
import AuthenticationAPI from "../utils/silabuzApi";

const Login = () => {
  const [body, setBody] = useState({
    username: "test10",
    email: "test10@gmail.com",
    password: "123456",
  });

  const login = async () => {
    const response = await AuthenticationAPI.post("login/", body);
    console.log(response);
    localStorage.setItem("token", response.data.token);
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
