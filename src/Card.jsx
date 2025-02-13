/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card({ onCardClick }) {
  return (
    <div className="full-card" onClick={onCardClick}>
      <div className="card">
        <div className="card_background">
          <img
            src="https://cdn.sanity.io/images/s695h8ei/production/8e4eb588d5d9d11477b88ec6bd1f2a2d3a220cd6-394x600.jpg?auto=format&fit=max&q=80&w=192"
            alt="Image"
            className="card__image"
          />
          <div className="card__content">
            <p className="card__category">Name</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </div>
      </div>
    </div>
  );
} 