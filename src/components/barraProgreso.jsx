// Barras finas de progreso bajo el encabezado.
function barraProgreso({ porcentaje }) {
  return (
    <div className="progress" role="progressbar" aria-valuenow={porcentaje}>
      <div className="progress__track" />
      <div
        className="progress__track progress__track--fill"
        style={{ width: `${porcentaje}%` }}
      />
    </div>
  );
}

export default barraProgreso;