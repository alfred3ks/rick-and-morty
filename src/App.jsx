import { Navigate, Route, Routes } from 'react-router';
import CharacterList from './components/CharacterList';
import Layout from './components/Layout';
import NotFound from './components/NotFount';

const App = () => {
  return (
    <div className="bg-cyan-500 text-white">
      <Routes>
        <Route path="/" element={<Navigate to="/characters" />} />
        <Route path="/characters" element={<Layout />}>
          <Route index element={<CharacterList />} />
        </Route>

        {/* Ruta 404 con layout */}
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<Layout />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
