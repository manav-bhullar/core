/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import "./Card.css";

function ViewCard({ SetIsViewCardVisible }) {
  return (
    <div className="big-card">
      <div className="big-card-pic">
      <img src="https://cdn.sanity.io/images/s695h8ei/production/8e4eb588d5d9d11477b88ec6bd1f2a2d3a220cd6-394x600.jpg?auto=format&fit=max&q=80&w=192" alt="Designer" />
      </div>

      <div className="about">
        <h1>Name</h1>
      </div>

      <div className="information">
        <p>About</p>
      </div>
      <div className="close-button">
        <button onClick={ () => SetIsViewCardVisible(false)}> close</button>
      </div>
    </div>
  )
}
export default function Card({ isViewCardVisible, SetIsViewCardVisible }) {

  

  return (
    <div className="full-card">
      {isViewCardVisible && <ViewCard SetIsViewCardVisible={SetIsViewCardVisible} />
    }
      <div className="card" onClick={ () => SetIsViewCardVisible(true)} >
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

