/* eslint-disable react/prop-types */
import  { useState } from "react";
import Card from "./Card";
import "./CardsGrid.css";

export default function CardsGrid() {
  const [isViewCardVisible, SetIsViewCardVisible] = useState(null);

  const cardsData = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    name: `Card ${i + 1}`,
  }));

  return (
    <div className="cards-grid">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          isViewCardVisible={isViewCardVisible}
          SetIsViewCardVisible={SetIsViewCardVisible}
        />
      ))}

    </div>
  );
}