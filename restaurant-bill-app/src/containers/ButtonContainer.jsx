import React, { useState } from "react";
import ButtonList from "../components/ButtonList";

const ButtonContainer = () => {
  // Stateful data (container handles logic)
  const [items] = useState([
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    { id: 3, label: "Button 3" },
  ]);

  // Event handler (container logic)
  const handleButtonClick = (item) => {
    console.log(`Clicked: ${item.label}`);
  };

  // Pass state + handlers down to the presentational component
  return <ButtonList items={items} onButtonClick={ handleButtonClick}/>;
};

export default ButtonContainer;
