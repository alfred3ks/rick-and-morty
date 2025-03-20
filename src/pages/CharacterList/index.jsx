import { useEffect, useState } from 'react';
import Character from '../../components/Character';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  // Para saber el total de paginas
  const [totalPages, setTotalPages] = useState(0);

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
        setTotalPages(data.info.pages);
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
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      <div className="min-h-screen p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-start">
        {characters.map((character) => (
          <div key={`character-${character.id}`}>
            <Character character={character} />
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default CharacterList;
