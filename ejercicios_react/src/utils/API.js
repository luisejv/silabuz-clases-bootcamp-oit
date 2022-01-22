import axios from "axios";

const jsonPlaceholderAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default jsonPlaceholderAPI;
