import './CardFront.css';
import cardFrontImage from "../../images/bg-card-front.png"

export const CardFront = () => {
  return (
    <div className='card-front'>
      <img src={cardFrontImage} alt="card-front"/>
      <h1 className='card-front-number'>0000 0000 0000 0000</h1>
      <p className="card-front-name">Jane Appleseed</p>
      <p className="card-front-date">00/00</p>
    </div>
  );
}