const btnFill = document.querySelector("#btn-fill");

btnFill.addEventListener("click", () => {
    document.body.classList.toggle('dark');//pone la clase dark y la quita
   btnFill.classList.toggle('active');
})