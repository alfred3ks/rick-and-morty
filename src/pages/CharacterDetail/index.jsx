import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
        // Puedes manejar el error aquí (mostrar mensaje al usuario, redirigir, etc.)
      }
    };

    fetchCharacter();
  }, [id]);

  const goBack = () => {
    navigate(-1); // Navega a la página anterior
  };

  if (!character) return <Spinner />;

  return (
    <div className="flex flex-col items-center px-4 py-8 space-y-6 md:flex-row md:space-y-0 md:space-x-8 md:px-8 lg:px-16">
      {/* Imagen */}
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
        <img
          src={character.image}
          alt={`image of ${name}`}
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Información */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
          {character.name}
        </h1>
        <p className="mt-2 text-gray-600 md:text-lg">
          <span className="font-semibold text-gray-800">Status:</span>{' '}
          {character.status}
        </p>
        <p className="mt-1 text-gray-600 md:text-lg">
          <span className="font-semibold text-gray-800">Species:</span>{' '}
          {character.species}
        </p>
        <p className="mt-1 text-gray-600 md:text-lg">
          <span className="font-semibold text-gray-800">Gender:</span>{' '}
          {character.gender}
        </p>

        {/* Botón para volver */}
        <button
          onClick={goBack}
          className="px-4 py-2 mt-6 text-white bg-gray-800 rounded-lg shadow hover:bg-gray-700  md:px-6 md:py-3 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CharacterDetail;
