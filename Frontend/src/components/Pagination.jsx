const Pagination = ({ pagina, totalPaginas, mudarPagina }) => {
  const paginasVisiveis = 5;

  let inicio = pagina - 2;
  let fim = pagina + 2;

  if (inicio < 1) {
    inicio = 1;
    fim = paginasVisiveis;
  }

  if (fim > totalPaginas) {
    fim = totalPaginas;
    inicio = totalPaginas - paginasVisiveis + 1;
  }

  const paginas = [];

  for (let i = inicio; i <= fim; i++) {
    paginas.push(i);
  }

  return (
    <div className="flex justify-center gap-3 mt-8">
      {paginas.map((numero) => (
        <button
          key={numero}
          className={`btn ${pagina === numero ? "btn-primary" : ""}`}
          onClick={() => mudarPagina(numero)}
        >
          {numero}
        </button>
      ))}
    </div>
  );
};

export default Pagination;