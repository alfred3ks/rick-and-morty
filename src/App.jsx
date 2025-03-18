import CharacterList from './components/CharacterList';

import './index.css';

const App = () => {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <CharacterList />
    </div>
  );
};

export default App;
