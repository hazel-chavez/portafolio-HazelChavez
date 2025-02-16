/**
 * El código JavaScript anterior agrega un detector de eventos de clic a un elemento específico y,
 * cuando se hace clic, la ventana se desplaza hacia la parte superior sin problemas.
 */
document.querySelector('.fa.fa-arrow-circle-up.fa-lg').addEventListener('click',scrollToTop)
function scrollToTop ()  {
    window.scrollTo({ top: 0, behavior:'smooth' });
  }
  



// When the user scrolls down, hide the arrow icon

