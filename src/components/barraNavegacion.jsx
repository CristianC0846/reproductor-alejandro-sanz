// Barra de navegación inferior con tres iconos.
function barraNavegacion() {
  return (
    <nav className="bottomnav" aria-label="Navegación principal">
      <button className="bottomnav__btn" aria-label="Inicio">🏠</button>
      <button className="bottomnav__btn" aria-label="Biblioteca">🟪</button>
      <button className="bottomnav__btn" aria-label="Menú">☰</button>
    </nav>
  );
}

export default barraNavegacion;