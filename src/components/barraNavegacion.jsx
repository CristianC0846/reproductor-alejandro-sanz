import Boton from "./Boton";

// Barra de navegación inferior con tres iconos.
function barraNavegacion() {
  return (
    <nav className="bottomnav" aria-label="Navegación principal">
      <Boton etiqueta="Inicio" className="bottomnav__btn">🏠</Boton>
      <Boton etiqueta="Biblioteca" className="bottomnav__btn">🟪</Boton>
      <Boton etiqueta="Menú" className="bottomnav__btn">☰</Boton>
    </nav>
  );
}

export default barraNavegacion;