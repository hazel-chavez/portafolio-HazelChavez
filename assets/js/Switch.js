/* Este código agrega un detector de eventos a un elemento HTML con la identificación "cambiar". Cuando
se hace clic en ese elemento, alterna la clase "ligera" en el elemento del cuerpo y alterna la clase
"activa" en el elemento "interruptor". Normalmente se utiliza para cambiar entre temas claros y
oscuros en un sitio web. */
const Switch = document.querySelector("#switch");

/* Este código agrega un detector de eventos al elemento con la identificación "interruptor". Cuando se
hace clic en ese elemento, alterna la clase "luz" en el elemento del cuerpo (agregándola si no está
presente y eliminándola si ya está presente), y también alterna la clase "activa" en el elemento
"interruptor". Normalmente se utiliza para cambiar entre temas claros y oscuros en un sitio web. */
Switch.addEventListener("click", () => {
  document.body.classList.toggle("light"); //pone la clase dark y la quita
  Switch.classList.toggle("active");
});


