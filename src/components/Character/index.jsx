const Character = ({ character }) => {
  const { name, image } = character;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`imagen de  ${name}`} />
    </div>
  );
};

export default Character;
