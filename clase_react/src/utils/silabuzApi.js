import axios from "axios";

const AuthenticationAPI = axios.create({
  baseURL: "https://silabuz-api-project.herokuapp.com/authentication/",
});

export default AuthenticationAPI;
