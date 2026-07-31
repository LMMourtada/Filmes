import MovieCards from "./MovieCards"

const FavoriteList = ({ favoritos, removerFavorito }) => {
  return (
    <div>
      <MovieCards
        filmes={favoritos}
        removerFavorito={removerFavorito}
      />
    </div>
  )
}

export default FavoriteList
