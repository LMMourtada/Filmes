import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const Router = ({
    filmes,
    favoritos,
    addFavorito,
    removerFavorito,
    pagina,
    totalPaginas,
    mudarPagina
}) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        filmes={filmes}
                        addFavorito={addFavorito}
                        pagina={pagina}
                        totalPaginas={totalPaginas}
                        mudarPagina={mudarPagina}
                    />
                }
            />
            <Route
                path="/favorites"
                element={
                    <Favorites
                        favoritos={favoritos}
                        removerFavorito={removerFavorito}
                    />
                }
            />
        </Routes>
    )
}

export default Router