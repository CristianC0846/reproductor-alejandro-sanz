import { useEffect, useRef } from "react";

// Muestra de casillas: desmarcada, marcada e indeterminada (dos columnas).
function MuestraCasillas() {
  const indeterminadas = useRef([]);

  // "indeterminate" solo se puede fijar por propiedad del DOM, no por atributo.
  useEffect(() => {
    indeterminadas.current.forEach((el) => {
      if (el) el.indeterminate = true;
    });
  }, []);

  const columna = (clave) => (
    <div className="checks__col" key={clave}>
      <label className="check">
        <input type="checkbox" />
        <span>not selected</span>
      </label>
      <label className="check">
        <input type="checkbox" defaultChecked />
        <span>selected</span>
      </label>
      <label className="check">
        <input
          type="checkbox"
          ref={(el) => (indeterminadas.current[clave] = el)}
        />
        <span>indeterminate</span>
      </label>
    </div>
  );

  return <div className="checks">{[0, 1].map(columna)}</div>;
}

export default MuestraCasillas;