import React, { useState } from 'react';
import './NewCard.css';

function NewCard(props) {
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")

  const onTitleChange = (event) => setTitle(event.target.value)
  const onGenreChange = (event) => setGenre(event.target.value)
  const submitCard = () => props.addCard(title, genre)

  return (
    <div className="NewCard">
      <h3>Add Show</h3>
      <label>Title: </label>
      <input value={title} onChange={onTitleChange} />
      <label>Genre: </label>
      <input value={genre} onChange={onGenreChange} />
      <button onClick={submitCard}>Submit</button>
    </div>
  );
}

export default NewCard;
