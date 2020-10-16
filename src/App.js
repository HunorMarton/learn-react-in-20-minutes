import React, { useState } from "react";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([
    { title: "Rick & Morty", genre: "Animation" },
    { title: "Peaky Blinders", genre: "Drama" },
  ]);

  return (
    <div>
      <h2>Cards</h2>
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          genre={card.genre}
        />
      ))}
    </div>
  );
}

export default App;
