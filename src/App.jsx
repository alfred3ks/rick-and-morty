import { Navigate, Route, Routes } from 'react-router';
import CharacterList from './pages/CharacterList';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './components/NotFount';
import CharacterDetail from './pages/CharacterDetail';

const App = () => {
  return (
    <div className="bg-cyan-500 text-white">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/character" element={<Layout />}>
          <Route index element={<CharacterList />} />
          {/* Ruta dinamica */}
          <Route path=":id" element={<CharacterDetail />} />
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
