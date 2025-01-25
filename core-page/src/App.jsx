/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CardsGrid from "./CardsGrid";
import "./App.css";

function App() {
  const [isViewCardVisible, SetIsViewCardVisible] = useState(false);

  return (
    <>
      <CardsGrid
        isViewCardVisible={isViewCardVisible}
        SetIsViewCardVisible={SetIsViewCardVisible}
      />
    </>
  );
}

export default App;