import { Link } from "react-router-dom";

const Header = ({ search, setSearch }) => {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-red-900 h-14 px-8">

      <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
        Filmes<span className="text-yellow-400">.com</span>
      </h1>

      <nav className="flex gap-32 ml-40">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>

        <Link to="/favorites" className="hover:text-yellow-400">
          Favoritos
        </Link>
      </nav>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input ml-auto"
        type="text"
        placeholder="Pesquisar um filme"
      />

    </div>
  );
};

export default Header;