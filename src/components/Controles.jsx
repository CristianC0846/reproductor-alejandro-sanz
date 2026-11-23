import { useState } from "react";

// Controles tipo reproductor: play, pausa, avance, barra de progreso y volumen.
function Controles() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [volumen, setVolumen] = useState(40);

  return (
    <>
      {}
      <div className="mediabar">
        <button className="icon-btn" aria-label="Detener">
          <span className="stop-icon" />
        </button>
        <div className="mediabar__track">
          <div className="mediabar__fill" style={{ width: "44%" }} />
        </div>
        <button className="icon-btn icon-btn--muted" aria-label="Volumen">
          🔉
        </button>
      </div>

      {}
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
        <button className="ctrl-btn" aria-label="Retroceder">⏪</button>
        <button
          className={`ctrl-btn ${reproduciendo ? "" : "ctrl-btn--play"}`}
          aria-label="Play"
          onClick={() => setReproduciendo(true)}
        >
          ▶️
        </button>
        <button
          className={`ctrl-btn ${reproduciendo ? "ctrl-btn--play" : ""}`}
          aria-label="Pausa"
          onClick={() => setReproduciendo(false)}
        >
          ⏸️
        </button>
        <button className="ctrl-btn" aria-label="Avanzar">⏩</button>
        <span className="controls__speaker" aria-hidden="true">🔉</span>
      </div>
    </>
  );
}

export default Controles;