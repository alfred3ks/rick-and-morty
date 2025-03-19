import { Link } from 'react-router';
const Header = () => {
  return (
    <header className="flex justify-center items-center py-6">
      <h1>
        <Link to={'/'} className="text-center text-5xl">
          Rick and Morty
        </Link>
      </h1>
    </header>
  );
};

export default Header;
