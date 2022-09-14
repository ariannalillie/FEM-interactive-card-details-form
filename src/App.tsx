import React from "react";
import "./App.css";
import { CardFront } from "./components/CardFront";
import { useState } from "react";

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("Jane Appleseed");
  const [cardExpDate, setCardExpDate] = useState("00/00");

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardHolder(event.target.value);
  };

  return (
    <div className="App">
      <div className="card-front-container">
        <CardFront
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          cardExpDate={cardExpDate}
        />
      </div>
      <div className="container-left"></div>
      <div className="container-right">
        <form>
          <p className="input-title">Cardholder Name</p>
          <input
            className="input-box"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => handleCardHolderChange(e)}
          />
          <p className="input-title">Card Number</p>
          <input
            className="input-box"
            type="text"
            placeholder="e.g. 1234 5678 9012 3456"
            onChange={(e) => handleCardNumberChange(e)}
          />
          <p className="input-title">Exp. Date (MM/YY)</p>
          <input className="input-box" type="text" placeholder="MM" />
          <input className="input-box" type="text" placeholder="YY" />
          <p className="input-title">CVC</p>
          <input className="input-box" type="number" placeholder="e.g. 123" />
          <button className="confirm-button" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
