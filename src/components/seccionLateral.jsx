import LineaTexto from "./LineaTexto";

// Imagen del cantante con bloques que simulan texto descriptivo.
function seccionLateral({ imagen }) {
  return (
    <div className="artist">
      <img className="artist__photo" src={imagen} alt="Alejandro Sanz en concierto" />
      <div className="artist__text" aria-hidden="true">
        <LineaTexto ancho="92%" />
        <LineaTexto ancho="70%" />
        <LineaTexto ancho="98%" />
        <LineaTexto ancho="82%" />
      </div>
    </div>
  );
}

export default seccionLateral;