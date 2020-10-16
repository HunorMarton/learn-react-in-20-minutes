import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.genre}</p>
    </div>
  );
}

export default Card;
