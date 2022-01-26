import axios from "axios";

const NARUTO_API = axios.create({
  baseURL: "https://silabuz-naruto-api.herokuapp.com/",
});

export default NARUTO_API;
