import React, { useState } from "react";
import Card from "./Card";
import NewCard from "./NewCard";

function App() {
  const [cards, setCards] = useState([
    { title: "Rick & Morty", genre: "Animation" },
    { title: "Peaky Blinders", genre: "Drama" },
  ]);

  const addCard = (title, genre) => {
    setCards([ ...cards, { title, genre }])
  }

  return (
    <div>
      <h2>TV Shows</h2>
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          genre={card.genre}
        />
      ))}
      <NewCard addCard={addCard} />
    </div>
  );
}

export default App;
