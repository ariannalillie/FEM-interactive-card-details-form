import React from "react";
import "./App.css";
import { CardFront } from "./components/CardFront";

function App() {
  return (
    <div className="App">
      <div className="container-left"></div>
      <div className="container-right">
      <CardFront />
        <form>
          <p className="input-title">Cardholder Name</p>
          <input type="text" placeholder="e.g. Jane Appleseed" />
          <p className="input-title">Card Number</p>
          <input type="number" placeholder="e.g. 1234 5678 9012 3456" />
          <p className="input-title">Exp. Date (MM/YY)</p>
          <input type="text" placeholder="MM" />
          <input type="text" placeholder="YY" />
          <p className="input-title">CVC</p>
          <input type="number" placeholder="e.g. 123" />
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default App;
