import CharacterList from './components/CharacterList';

const App = () => {
  return (
    <div className="bg-cyan-500 text-white">
      <h1 className="text-center py-4 text-5xl">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
};

export default App;
