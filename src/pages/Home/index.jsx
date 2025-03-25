import image from '../../../public/rick-and-morty-home.webp';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Rick and Morty</h1>
      <p className="max-w-2xl text-lg mb-6">
        *Rick and Morty* is an adult animated series created by Justin Roiland
        and Dan Harmon. The story follows the adventures of Rick Sanchez, an
        eccentric and alcoholic scientist, along with his grandson Morty, a
        nervous but kind-hearted young man. Together they travel through space,
        time, and multiple dimensions, facing dangers, family problems, and
        absurd situations.
      </p>
      <img
        src={image}
        alt="Rick and Morty"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-lg shadow-lg mb-6"
      />
    </div>
  );
};

export default Home;
