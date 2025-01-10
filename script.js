// Selección de elementos
const circulos = document.querySelectorAll('.circulo');
const boton = document.querySelector('.boton');
const numeroSeleccionado = document.querySelector('.numero');
const pagina1 = document.querySelector('.pagina1');
const pagina2 = document.querySelector('.pagina2');

let seleccion = null; // Almacena el número seleccionado

// Agregar evento a cada círculo
circulos.forEach((circulo) => {
    circulo.addEventListener('click', () => {
      // Limpiar cualquier selección previa
      circulos.forEach((c) => {
        c.style.backgroundColor = ''; // Restablecer fondo
        c.style.color = ''; // Restablecer color
      });
  
      // Aplicar el color de fondo y el color al círculo seleccionado
      circulo.style.backgroundColor = 'hsl(25, 97%, 53%)';
      circulo.style.color = 'hsl(216, 12%, 8%)';
  
      // Guardar el número seleccionado
      seleccion = circulo.textContent.trim();
    });
  });

// Agregar evento al botón
boton.addEventListener('click', (e) => {
  e.preventDefault(); // Evitar el envío del formulario

  if (seleccion) {
    // Mostrar el número seleccionado en la segunda página
    numeroSeleccionado.textContent = seleccion;

    // Cambiar de página
    pagina1.classList.add('hidden');
    pagina2.classList.remove('hidden');
  } else {
    // Mostrar un mensaje en la consola si no se seleccionó un número
    console.error('Selecciona un número del 1 al 5');
  }
});
