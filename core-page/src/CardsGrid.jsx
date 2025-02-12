import { useState } from "react";
import Card from "./Card";
import ModalCard from "./ModalCard"; 
import "./CardsGrid.css";

export default function CardsGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cardsData = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    name: `Card ${i + 1}`,
  }));

  return (
    <div className="cards-grid">
      {cardsData.map((card) => (
        <Card key={card.id} id={card.id} onClick={handleCardClick} />
      ))}

      {isModalOpen && <ModalCard closeModal={closeModal} />}
    </div>
  );
}