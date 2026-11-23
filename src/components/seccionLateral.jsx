// Sección lateral: imagen del cantante con bloques que simulan texto.
function SeccionLateral({ imagen, alt }) {
  const anchos = ["92%", "70%", "98%", "82%"];

  return (
    <div className="artist">
      <img className="artist__photo" src={imagen} alt={alt} />
      <div className="artist__text" aria-hidden="true">
        {anchos.map((ancho, i) => (
          <span key={i} className="artist__line" style={{ width: ancho }} />
        ))}
      </div>
    </div>
  );
}

export default SeccionLateral;