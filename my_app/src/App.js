import React from "react";
import "./index.css";
import Button from "./Button";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Hello World</h1>
      <Button title="PlayStore" />
      <Button title="App Store" />
      <Button />
    </div>
  );
}
export default App;
