import "./App.css";

import encabezado from "./components/encabezado";
import barraProgreso from "./components/barraProgreso";
import seccionLateral from "./components/seccionLateral";
import controles from "./components/controles";
import muestraCasillas from "./components/muestraCasillas";
import barraBusqueda from "./components/barraBusqueda";
import emojis from "./components/emojis";
import barraNavegacion from "./components/barraNavegacion";
import BotonRA0 from "./components/BotonRA0";

// App junta todos los componentes en el orden del mockup.
function App() {
  return (
    <main className="stage">
      <section className="phone" aria-label="Reproductor de música">
        <span className="status-time">17:08</span>

        <encabezado artista="Alejandro Sanz" album="Más" />
        <barraProgreso porcentaje={50} />
        <seccionLateral imagen={process.env.PUBLIC_URL + "/alejandro.png"} />
        <controles />
        <muestraCasillas />
        <barraBusqueda valor="Alejandro Sanz" />
        <emojis />
        <barraNavegacion />
      </section>

      <BotonRA0 />
    </main>
  );
}

export default App;