// Datos de los cantantes. Para cambiar de cantante solo hay que
// modificar la última línea de este archivo (cantanteActual).
//
// La imagen debe estar en la carpeta /public (por ejemplo public/bisbal.png).

export const cantantes = {
  alejandroSanz: {
    artista: "Alejandro Sanz",
    album: "Más",
    imagen: "alejandro.png",
  },
  bisbal: {
    artista: "David Bisbal",
    album: "Corazón Latino",
    imagen: "bisbal.png",
  },
};

// Cantante que se muestra en la aplicación:
export const cantanteActual = cantantes.alejandroSanz;