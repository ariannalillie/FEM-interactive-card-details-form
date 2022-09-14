import "./CardFront.css";
import cardFrontImage from "../../images/bg-card-front.png";
import { FC } from "react";

export interface CardFrontProps {
  cardNumber: string;
  cardHolder: string;
  cardExpDate: string;
}

export const CardFront: FC<CardFrontProps> = ({
  cardNumber,
  cardHolder,
  cardExpDate,
}: CardFrontProps): JSX.Element => {
  return (
    <div className="card-front">
      <img src={cardFrontImage} alt="card-front" />
      <div className="circle"></div>
      <div className="open-circle"></div>
      <h1 className="card-front-number">{cardNumber}</h1>
      <p className="card-front-name">{cardHolder}</p>
      <p className="card-front-date">{cardExpDate}</p>
    </div>
  );
};
