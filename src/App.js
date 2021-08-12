import './index.css';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'
import { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const results = await axios(`https://www.anapioficeandfire.com/api/characters?pageSize=50`)

      setCharacters(results.data)
      console.log(results.data.filter(char => char.name !== ""))
    }

    getCharacters();
  },[])

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Header />
      <CharacterGrid characters={characters}/>
    </div>
  );
}

export default App;
