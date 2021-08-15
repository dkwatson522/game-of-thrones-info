import React from 'react';
import CharacterCard from './CharacterCard'

const CharacterGrid = ({characters}) => {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {characters.map((character) => (
          <CharacterCard
            character={character}
            key={character.id}
          />
        ))}
      </ul>
    </section>
  );
}


export default CharacterGrid
