import "./App.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather app

        <Weather />
        <p>
          This website is coded by Tory Sigmond and is{" "}
          <a
            href="https://github.com/tesigmond/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </p>
      </div>
    </div>
  );
}
