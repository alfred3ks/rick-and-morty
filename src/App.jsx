import CharacterList from './components/CharacterList';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="bg-cyan-500 text-white">
      <Header />
      <CharacterList />
      <Footer />
    </div>
  );
};

export default App;
