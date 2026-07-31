import FavoriteList from "../components/FavoriteList";

const Favorites = ({ favoritos, removerFavorito}) => {
  return (
    <>
      <FavoriteList favoritos={favoritos}
        removerFavorito={removerFavorito}
      />
    </>
  );
};

export default Favorites;
