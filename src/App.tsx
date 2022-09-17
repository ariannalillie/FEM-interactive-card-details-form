import React from "react";
import "./App.css";
import { CardFront } from "./components/CardFront";
import { CardBack } from "./components/CardBack";
import { useState } from "react";

function App() {
  // State variables
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("Jane Appleseed");
  const [cardExpDate1, setCardExpDate1] = useState("00");
  const [cardExpDate2, setCardExpDate2] = useState("00");
  const [cardCvc, setCardCvc] = useState("000");


  // Handle card number input
  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardNumber(event.target.value);
  };

  // Handle card holder input
  const handleCardHolderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardHolder(event.target.value);
  };

  // Handle card expiration date input
  const handleCardExpDate1Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardExpDate1(event.target.value);
  };

  // Handle card expiration date input
  const handleCardExpDate2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardExpDate2(event.target.value);
  };

  // Handle card CVC input
  const handleCardCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardCvc(event.target.value);
  };

  return (
    <div className="App">
      <div className="card-front-container">
        <CardFront
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          cardExpDate={`${cardExpDate1} / ${cardExpDate2}`}
        />
      </div>
      <div className="card-back-container">
        <CardBack cvc={cardCvc} />
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
          <input
            className="input-box"
            type="text"
            placeholder="MM"
            onChange={(e) => handleCardExpDate1Change(e)}
          />
          <input
            className="input-box"
            type="text"
            placeholder="YY"
            onChange={(e) => handleCardExpDate2Change(e)}
          />
          <p className="input-title">CVC</p>
          <input className="input-box" type="number" placeholder="e.g. 123" onChange={(e) => handleCardCvcChange(e)}/>
          <button className="confirm-button" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
