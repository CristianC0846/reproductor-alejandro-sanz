import { useState } from "react";
import Boton from "./Boton";

// Controles tipo reproductor: play, pausa, avance, barra de progreso y volumen.
function controles() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [volumen, setVolumen] = useState(40);

  return (
    <>
      {/* Barra multimedia: stop + progreso + volumen */}
      <div className="mediabar">
        <Boton etiqueta="Detener" className="icon-btn">
          <span className="stop-icon" />
        </Boton>
        <div className="mediabar__track">
          <div className="mediabar__fill" style={{ width: "44%" }} />
        </div>
        <Boton etiqueta="Volumen" className="icon-btn icon-btn--muted">
          🔉
        </Boton>
      </div>

      {/* Botones y deslizador de volumen */}
      <div className="controls">
        <input
          className="controls__volume"
          type="range"
          min="0"
          max="100"
          value={volumen}
          onChange={(e) => setVolumen(Number(e.target.value))}
          aria-label="Volumen"
          style={{ "--fill": `${volumen}%` }}
        />
        <Boton etiqueta="Retroceder">⏪</Boton>
        <Boton
          etiqueta="Play"
          className={`ctrl-btn ${reproduciendo ? "" : "ctrl-btn--play"}`}
          onClick={() => setReproduciendo(true)}
        >
          ▶️
        </Boton>
        <Boton
          etiqueta="Pausa"
          className={`ctrl-btn ${reproduciendo ? "ctrl-btn--play" : ""}`}
          onClick={() => setReproduciendo(false)}
        >
          ⏸️
        </Boton>
        <Boton etiqueta="Avanzar">⏩</Boton>
        <span className="controls__speaker" aria-hidden="true">🔉</span>
      </div>
    </>
  );
}

export default controles;