import React from "react";
import ReactDOM from "react-dom";

import Reel from "./components/reel";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Reel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
