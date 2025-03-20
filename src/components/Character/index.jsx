const Character = ({ character }) => {
  const { name, image, origin } = character;
  return (
    <div>
      <h2 className="py-3 text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-center">
        {name}
      </h2>
      <img
        className="w-50 h-50 object-cover rounded-full shadow-lg mx-auto"
        src={image}
        alt={`imagen de ${name}`}
      />
      <p className="text-center py-1 text-sm">{origin.name}</p>
    </div>
  );
};

export default Character;
