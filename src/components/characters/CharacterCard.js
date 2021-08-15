import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterCard = ({character}) => {
  const [additionalInfo, setAdditionalInfo] = useState([]);

  useEffect(() => {
    const getBookForCharacter = async () => {
      const result = await axios(`https://anapioficeandfire.com/api/characters?name=${character.fullName}`)

      setAdditionalInfo(result.data);
    }

    getBookForCharacter();
  },[character])

  return (
    <div className="flex flex-wrap relative bg-indigo-900 rounded-lg p-2 text-center content-between">
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img src={character.imageUrl} alt="" className="object-cover w-auto h-auto flex-shrink-0 mx-auto rounded-lg" />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">
            View details for {character.fullName}
          </span>
        </button>
      </div>
      <div className="mx-auto text-center">
        <p className="mt-2 block text-sm font-medium text-gray-500 truncate pointer-events-none">
          {character.family}
        </p>
        <p className="block text-sm font-medium text-gray-300 pointer-events-none">
          {character.fullName} - {character.title}
        </p>
      </div>
    </div>
  );
}


export default CharacterCard;
