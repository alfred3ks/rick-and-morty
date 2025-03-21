import { Link, NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-6 px-6">
      <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
        {/* Título centrado en móviles y alineado a la izquierda en pantallas grandes */}
        <h1 className="text-4xl sm:text-3xl font-bold hover:text-green-400">
          <Link to={'/'}>Rick and Morty</Link>
        </h1>
        {/* Menú debajo del título en móviles, con los enlaces en línea */}
        <nav className="mt-4 sm:mt-0">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to={'/home'}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-red-200 text-lg pb-0.5' // Resaltado cuando está activo
                    : 'text-lg hover:text-green-400'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/character'}
                // className="text-lg hover:text-green-400"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-red-200 text-lg pb-0.5' // Resaltado cuando está activo
                    : 'text-lg hover:text-green-400'
                }
              >
                Character
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
