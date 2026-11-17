// Barra de búsqueda con texto inicial.
function barraBusqueda({ valor }) {
  return (
    <div className="search">
      <input className="search__input" type="search" defaultValue={valor} aria-label="Buscar" />
    </div>
  );
}

export default barraBusqueda;