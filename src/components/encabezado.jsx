// Encabezado con nombre del artista y título del álbum en dos líneas.
function encabezado({ artista, album }) {
  return (
    <header className="header">
      <h1 className="header__artist">{artista}</h1>
      <h2 className="header__album">- {album} -</h2>
    </header>
  );
}

export default encabezado;