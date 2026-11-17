import Casilla from "./Casilla";

function Columna() {
  return (
    <div className="checks__col">
      <Casilla texto="not selected" />
      <Casilla texto="selected" marcada />
      <Casilla texto="indeterminate" indeterminada />
    </div>
  );
}

// Muestra de casillas (dos columnas): desmarcada, marcada e indeterminada.
function muestraCasillas() {
  return (
    <div className="checks">
      <Columna />
      <Columna />
    </div>
  );
}

export default muestraCasillas;