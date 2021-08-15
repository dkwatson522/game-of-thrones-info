import './index.css';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import LoadScreen from './components/ui/LoadScreen';
import { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const result = await axios(`https://thronesapi.com/api/v2/Characters`)
      setIsLoading(false);
      setCharacters(result.data)
      console.log(result.data.filter(char => char.name !== ""))
    }

    setTimeout(() => {
      getCharacters()
    }, 2000)
    ;
  },[])

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Header />
      {isLoading && <LoadScreen />}
      <CharacterGrid characters={characters}/>
    </div>
  );
}

export default App;
