import { useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import EjercicioAxios1 from "./components/EjercicioAxios1";
import ListaRobots from "./components/ListaRobots";
import Login from "./components/Login";
import PlanetList from "./components/PlanetList";
import TodoListApp from "./components/TodoListApp";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {/* <TodoListApp></TodoListApp> */}
        {/* <PlanetList></PlanetList> */}
        {/* <EjercicioAxios1></EjercicioAxios1> */}
        {/* <Login></Login> */}
        <Buscador query={query} setQuery={setQuery}></Buscador>
        <ListaRobots query={query}></ListaRobots>
      </header>
    </div>
  );
};

export default App;
