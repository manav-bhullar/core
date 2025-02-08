/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import CardsGrid from "./CardsGrid";
import "./App.css";

function App() {
  const [activeCard, setActiveCard] = useState(null); // Track which card is open

  return (
    <>
      <Header />
      <CardsGrid activeCard={activeCard} setActiveCard={setActiveCard} />

      <div className="modal-card">
        <div className="modal-content">
          <div className="modal-image">
            <img
              src="https://cdn.sanity.io/images/s695h8ei/production/8e4eb588d5d9d11477b88ec6bd1f2a2d3a220cd6-394x600.jpg?auto=format&fit=max&q=80&w=192"
              alt="Designer"
            />
          </div>
          <div className="modal-details">
            <div className="modal-title">
              <h1>Name</h1>
            </div>

            <div className="modal-description">
              <p className="role">role</p>
              <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda aspernatur nihil deleniti placeat doloribus soluta asperiores rerum, laboriosam, velit reprehenderit deserunt, esse hic tempora voluptas numquam? Cum, dolore id!</p>
            </div>
          </div>
        </div>
        <button className="close-button">
          <span className="button">Close</span>
          <div className="icon-container">
            <div className="border-circle"></div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </div>
        </button>
      </div>
    </>
  );
}

export default App;