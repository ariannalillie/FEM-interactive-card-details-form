import './CardFront.css';
import cardFrontImage from "../../images/bg-card-front.png"
import { useState } from 'react';

export const CardFront = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("Jane Appleseed");
  const [cardExpDate, setCardExpDate] = useState("00/00");

  return (
    <div className='card-front'>
      <img src={cardFrontImage} alt="card-front"/>
      <h1 className='card-front-number'>{cardNumber}</h1>
      <p className="card-front-name">{cardHolder}</p>
      <p className="card-front-date">{cardExpDate}</p>
    </div>
  );
}