import cardBackImage from "../../images/bg-card-back.png";
import "./CardBack.css";
import { FC } from "react";

export interface CardBackProps {
  cvc: string;
}

export const CardBack: FC<CardBackProps> = ({
  cvc,
}: CardBackProps): JSX.Element => {
  return (
    <div className="card-back">
      <img src={cardBackImage} alt="card back" />
      <p className="cvc">{cvc}</p>
    </div>
  );
};
