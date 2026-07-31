import { useEffect, useState } from "react";

import api from "./services/api";
import Header from "./components/Header";
import Router from "./Routes";
import backend from "./services/backend";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [search, setSearch] = useState("");
  const [favoritos, setFavoritos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    async function loadMovies() {
      if (!search.trim()) {
        const response = await api.get("/discover/movie", {
          params: {
            page: pagina,
          },
        });

        setFilmes(response.data.results);
        setTotalPaginas(Math.min(response.data.total_pages, 500));
        return;
      }

      const response = await api.get("/search/movie", {
        params: {
          query: search,
          page: pagina,
        },
      });

      setFilmes(response.data.results);
      setTotalPaginas(response.data.total_pages);
    }

    loadMovies();
  }, [search, pagina]);

  const addFavorito = async (filme) => {

    const existe = favoritos.some(
      (item) => item.id === filme.id
    );

    if (existe) {
      return;
    }

    await backend.post("/favoritos", filme);

    setFavoritos((prev) => [
      ...prev,
      filme
    ]);

  };

  const removerFavorito = async (id) => {

    await backend.delete(`/favoritos/${id}`);

    setFavoritos((prev) =>
      prev.filter((filme) => filme.id !== id)
    );

  };


  useEffect(() => {

    async function carregarFavoritos() {
      const response = await backend.get("/favoritos");
      setFavoritos(response.data);
    }

    carregarFavoritos();

  }, []);

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
      />
      <Router
        filmes={filmes}
        favoritos={favoritos}
        addFavorito={addFavorito}
        removerFavorito={removerFavorito}
        pagina={pagina}
        totalPaginas={totalPaginas}
        mudarPagina={setPagina}
      />
    </>
  );
}

export default App;