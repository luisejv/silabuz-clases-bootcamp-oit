import React, { useState } from "react";
import AuthenticationAPI from "../utils/silabuzApi";

const Signup = () => {
  const [body, setBody] = useState({
    username: "test10",
    email: "test10@gmail.com",
    password: "123456",
  });

  const signup = async () => {
    const response = await AuthenticationAPI.post("sign-up/", body);
    console.log(response);
  };

  return (
    <div>
      <button onClick={signup}>Sign up</button>
    </div>
  );
};

export default Signup;
