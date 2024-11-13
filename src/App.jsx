import { useState } from "react";
import "./App.css";

import MinusButton from "./components/MinusButton";
import PlusButton from "./components/PlusButton";
import ResetButton from "./components/ResetButton";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <i class="fa-solid fa-calculator"></i>
        <h1>React Counter</h1>
      </header>
      <main>
        <div className="container">
          <div className="count">
            {counter > 0 ? (
              <MinusButton counter={counter} setCounter={setCounter} />
            ) : (
              <button className="display-none">-</button>
            )}
            <p>{counter}</p>
            {counter < 10 ? (
              <PlusButton counter={counter} setCounter={setCounter} />
            ) : (
              <button className="display-none">+</button>
            )}
          </div>
          <div className="reset">
            <ResetButton counter={counter} setCounter={setCounter} />
          </div>
        </div>
      </main>
      <footer>
        <p>
          Made with{" "}
          <span>
            <a href="https://fr.react.dev/">React</a>
          </span>{" "}
          at{" "}
          <span>
            <a href="https://www.lereacteur.io/">Le Reacteur</a>
          </span>{" "}
          By{" "}
          <span>
            <a href="https://github.com/antancelin"> Antoine Ancelin</a>
          </span>
        </p>
      </footer>
    </>
  );
}

export default App;
