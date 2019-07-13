import React from "react";
import "./App.css";
import Routes from "./directory/Routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
