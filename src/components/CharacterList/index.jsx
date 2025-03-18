import { useEffect, useState } from 'react';
import Character from '../Character';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchApiRick = async () => {
      try {
        // hacemos la peticion a la API de rick and morty
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        // console.log(data);
        // console.log(data.results);
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiRick();
  }, []);
  return (
    <div>
      {characters.map((character) => {
        return (
          <Character key={`character-${character.id}`} character={character} />
        );
      })}
    </div>
  );
};

export default CharacterList;
