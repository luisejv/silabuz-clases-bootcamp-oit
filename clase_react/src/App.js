import "./App.css";
import PlanetList from "./components/PlanetList";
import TodoListApp from "./components/TodoListApp";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TodoListApp></TodoListApp> */}
        <PlanetList></PlanetList>
      </header>
    </div>
  );
};

export default App;
