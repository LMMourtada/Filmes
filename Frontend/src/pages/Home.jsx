import Hero from "../components/Hero";
import MovieCards from "../components/MovieCards";
import Pagination from "../components/Pagination";

const Home = ({
  filmes,
  addFavorito,
  pagina,
  totalPaginas,
  mudarPagina
}) => {
  return (
    <>
      <Hero />

      <MovieCards
        filmes={filmes}
        addFavorito={addFavorito}
      />

      <Pagination
        pagina={pagina}
        totalPaginas={totalPaginas}
        mudarPagina={mudarPagina}
      />
    </>
  );
};

export default Home;