import React, { useState } from 'react';
import './NewCard.css';

function NewCard() {
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")

  const onTitleChange = (event) => setTitle(event.target.value)
  const onGenreChange = (event) => setGenre(event.target.value)

  return (
    <div className="NewCard">
      <h3>Add Show</h3>
      <label>Title: </label>
      <input value={title} onChange={onTitleChange} />
      <label>Genre: </label>
      <input value={genre} onChange={onGenreChange} />
      <button>Submit</button>
    </div>
  );
}

export default NewCard;
