const btnFill = document.querySelector("#btn-fill");

btnFill.addEventListener("click", () => {
    document.body.classList.toggle('light');//pone la clase dark y la quita
   btnFill.classList.toggle('active');
})