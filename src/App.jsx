import CharacterList from './components/CharacterList';
import Header from './components/Header';

const App = () => {
  return (
    <div className="bg-cyan-500 text-white">
      <Header />
      <CharacterList />
    </div>
  );
};

export default App;
