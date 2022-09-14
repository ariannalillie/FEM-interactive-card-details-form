import './CardFront.css';
import cardFrontImage from "../../images/bg-card-front.png"

export const CardFront = () => {
  return (
    <div className='card-front'>
      <img src={cardFrontImage} alt="card-front"/>
      <h1 className='card-front-number'>0000 0000 0000 0000</h1>
    </div>
  );
}