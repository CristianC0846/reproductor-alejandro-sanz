import { useState } from "react";
import Emoji from "./Emoji";

const EMOJIS = ["😷", "😄", "🤠", "😈", "🤖"];

// Carrusel de emojis, con el central destacado.
function emojis() {
  const [activo, setActivo] = useState(2);

  return (
    <div className="carousel" role="listbox" aria-label="Carrusel de emojis">
      {EMOJIS.map((e, i) => (
        <Emoji
          key={e}
          simbolo={e}
          distancia={Math.abs(i - activo)}
          onClick={() => setActivo(i)}
        />
      ))}
    </div>
  );
}

export default emojis;