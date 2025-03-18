import { useEffect, useState } from 'react';
import Character from '../Character';
import Spinner from '../Spinner';
import Pagination from '../Pagination';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchApiRick = async () => {
      try {
        // hacemos la peticion a la API de rick and morty
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApiRick();
  }, [page]);

  // cargamos el spinner
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Pagination page={page} setPage={setPage} />
      <div className="p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => {
          return (
            <div key={`character-${character.id}`}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default CharacterList;
