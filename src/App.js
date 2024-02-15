import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This page was coded by Thomas Jennifer and it is{" "}
          <a href="https://github.com/ogechi3/react-weather-app" target="_blank" rel="noopener noreferrer">
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
