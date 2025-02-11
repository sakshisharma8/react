import React from "react";
import "./App.css";  
import Background from "./components/Background";
import Front from "./components/Front";

function App() {
  return (
    <div className="container">
      <Background/>
      <Front/>
    </div>
  );
}

export default App;
