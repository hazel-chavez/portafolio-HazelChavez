/* Este código agrega un detector de eventos a un elemento HTML con la identificación "cambiar". Cuando
se hace clic en ese elemento, alterna la clase "ligera" en el elemento del cuerpo y alterna la clase
"activa" en el elemento "interruptor". Normalmente se utiliza para cambiar entre temas claros y
oscuros en un sitio web. */
const Switch = document.querySelector("#switch");

Switch.addEventListener("click", () => {
  document.body.classList.toggle("light"); //pone la clase dark y la quita
  Switch.classList.toggle("active");
});


