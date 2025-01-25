/* eslint-disable react/prop-types */
import "react";
import Card from "./Card";
import "./CardsGrid.css";

export default function CardsGrid({ isViewCardVisible, SetIsViewCardVisible }) {
  return (
    <div className="cards-grid" >
      <Card 
        isViewCardVisible={isViewCardVisible} 
        SetIsViewCardVisible={SetIsViewCardVisible} 
      />
      <Card 
        isViewCardVisible={isViewCardVisible} 
        SetIsViewCardVisible={SetIsViewCardVisible} 
      />
      <Card 
        isViewCardVisible={isViewCardVisible} 
        SetIsViewCardVisible={SetIsViewCardVisible} 
      />
    </div>
  );
}