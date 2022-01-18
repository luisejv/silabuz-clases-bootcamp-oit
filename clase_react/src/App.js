import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";

const nombre = "Marvelys";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola mi nombre es {nombre}</p>
        <FirstComponent
          name="Yefer"
          lastname="Garcia"
          prueba={{ prueba: "hola" }}
          color="blue"
        ></FirstComponent>
        <FirstComponent
          name="Yhonniel"
          lastname="Suarez"
          color="green"
        ></FirstComponent>
        <FirstComponent name="Carlos" color="magenta"></FirstComponent>
        <FirstComponent name="Miguel" color="hotpink"></FirstComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
