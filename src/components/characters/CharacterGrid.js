import React from 'react';

const CharacterGrid = ({characters}) => {
  return (
    <section>
      {characters.map(character => (
        <div>{character.name}</div>
      ))}
    </section>
  );
}


export default CharacterGrid
