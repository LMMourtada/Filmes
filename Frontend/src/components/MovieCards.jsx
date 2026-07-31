import { FaHeart, FaTrash } from "react-icons/fa";

function MovieCards({ filmes = [], addFavorito, removerFavorito }) {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 cursor-pointer">
      {filmes.map((filme) => (
        <div
          key={filme.id}
          className="card bg-base-100 shadow-xl overflow-hidden"
        >
          <figure className="relative h-80">
            <img
              src={`${import.meta.env.VITE_IMG}${filme.poster_path}`}
              alt={filme.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-2 flex justify-between items-center">
              <h2>
                {filme.title}
              </h2>

              {addFavorito && (
                <button
                  className="text-red-500 text-xl"
                  onClick={() => addFavorito(filme)}
                >
                  <FaHeart className="cursor-pointer"/>
                </button>
              )}

              {removerFavorito && (
                <button
                  className="text-red-500 text-xl"
                  onClick={() => removerFavorito(filme.id)}
                >
                  <FaTrash className="cursor-pointer" />
                </button>
              )}
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default MovieCards;