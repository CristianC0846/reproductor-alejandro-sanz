import "./App.css";

import { cantanteActual } from "./Datos";

import Encabezado from "./components/encabezado";
import BarraProgreso from "./components/barraProgreso";
import SeccionLateral from "./components/seccionLateral";
import Controles from "./components/Controles";
import MuestraCasillas from "./components/MuestraCasillas";
import BarraBusqueda from "./components/barraBusqueda";
import Emojis from "./components/Emojis";
import BarraNavegacion from "./components/barraNavegacion";

// App junta todos los componentes en el orden del mockup.
// El artista, el álbum y la imagen vienen de src/datos.js.
function App() {
  const { artista, album, imagen } = cantanteActual;

  return (
    <main className="stage">
      <section className="phone" aria-label="Reproductor de música">
        <span className="status-time">17:08</span>

        <Encabezado artista={artista} album={album} />
        <BarraProgreso porcentaje={50} />
        <SeccionLateral
          imagen={process.env.PUBLIC_URL + "/" + imagen}
          alt={`${artista} en concierto`}
        />
        <Controles />
        <MuestraCasillas />
        <BarraBusqueda valor={artista} />
        <Emojis />
        <BarraNavegacion />
      </section>
    </main>
  );
}

export default App;