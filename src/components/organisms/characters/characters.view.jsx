import React from 'react';

const Characters = ({ characters }) => (
  <>
    <h1>All Characters</h1>
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  </>
);

export default Characters;
