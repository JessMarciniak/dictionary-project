import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center mt-5">
          React Dictionary App
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          Coded by Jessica Marciniak
          <br />
          Open-source code available on{" "}
          <a
            href="https://github.com/JessMarciniak/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          {""}
          and hosted on{" "}
          <a
            href="https://trusting-dijkstra-87267a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
