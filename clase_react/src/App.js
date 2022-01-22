import { useEffect, useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import EjercicioAxios1 from "./components/EjercicioAxios1";
import ListaRobots from "./components/ListaRobots";
import Login from "./components/Login";
import PlanetList from "./components/PlanetList";
import TodoListApp from "./components/TodoListApp";
import QueryContext from "./context/queryContext";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [query, setQuery] = useState("");

  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      <div className="App">
        <header className="App-header">
          {/* <TodoListApp></TodoListApp> */}
          {/* <PlanetList></PlanetList> */}
          {/* <EjercicioAxios1></EjercicioAxios1> */}
          {/* <Login></Login> */}
          <Buscador></Buscador>
          <ListaRobots></ListaRobots>
        </header>
      </div>
    </QueryContext.Provider>
  );
};

export default App;
