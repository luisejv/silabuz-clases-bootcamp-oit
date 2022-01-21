import axios from "axios";

const API = axios.create({
  baseURL: "https://handlers.education.launchcode.org/static/",
  //   headers: { Authorization: "Token asdfasdfghajsdfghadjhf" },
});

export default API;
