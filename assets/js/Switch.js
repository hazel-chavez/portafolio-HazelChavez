const Switch = document.querySelector("#switch");

Switch.addEventListener("click", () => {
  document.body.classList.toggle("light"); //pone la clase dark y la quita
  Switch.classList.toggle("active");
});


