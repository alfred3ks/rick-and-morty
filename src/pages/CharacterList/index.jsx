import { useEffect, useState } from 'react';
import Character from '../../components/Character';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import { Link, useSearchParams } from 'react-router';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    const fetchApiRick = async () => {
      try {
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
    setLoading(true);
    fetchApiRick();
  }, [page]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  // Nueva función para cambiar la página usando URL
  const goToPage = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <>
      <Pagination page={page} goToPage={goToPage} totalPages={totalPages} />
      <div className="min-h-screen p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-start">
        {characters.map((character) => (
          <div key={`character-${character.id}`}>
            <Link to={`/character/${character.id}`}>
              <Character character={character} />
            </Link>
          </div>
        ))}
      </div>
      <Pagination page={page} goToPage={goToPage} totalPages={totalPages} />
    </>
  );
};

export default CharacterList;
