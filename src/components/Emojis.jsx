import { useState } from "react";

const EMOJIS = ["😷", "😄", "🤠", "😈", "🤖"];

// Carrusel de emojis, con el central destacado.
function Emojis() {
  const [activo, setActivo] = useState(2);

  return (
    <div className="carousel" role="listbox" aria-label="Carrusel de emojis">
      {EMOJIS.map((emoji, i) => {
        const distancia = Math.abs(i - activo);
        const tipo = distancia === 0 ? "active" : distancia === 1 ? "near" : "far";
        return (
          <button
            key={emoji}
            className={`carousel__item carousel__item--${tipo}`}
            aria-selected={distancia === 0}
            onClick={() => setActivo(i)}
          >
            {emoji}
          </button>
        );
      })}
    </div>
  );
}

export default Emojis;