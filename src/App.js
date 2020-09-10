import React from "react";
import "./App.css";
import LoginDispaly from "./component/LoginDispaly";

function App() {
  return (
    <div className="container">
      <div id="imageDiv">
       <h1 id="welcome">WELCOME</h1>
      </div>
      <div id="regForm">
        <LoginDispaly/>
      </div>
    </div>
  );
}

export default App;
