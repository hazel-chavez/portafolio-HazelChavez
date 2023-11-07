
// const form = document.getElementById("form")

// form = (e) =>{
// e.preventEventDefault
// }
// document.getElementById("form").addEventListener("submit", function(event) {
//     // Evitar el envío predeterminado del formulario
//     event.preventDefault();

//     var inpust = document.querySelectorAll("input");

//   inpust.forEach(function(input){
//       input.value = "";
//    })
//    document.querySelector("textarea").value = ""
// //    // Muestra el mensaje de "Mensaje enviado con éxito"
//     document.getElementById("mensajeEnviado").style.display = "block";

// //    // Puedes realizar aquí cualquier otra acción necesaria, como enviar el formulario al servidor.
//  });

// document.getElementById("form").addEventListener("submit", showMessaje,function(e) {
//    e.preventDefault();
   
// })
   



 function showMessaje  () {
    document.getElementById("form").addEventListener("submit", function(event) {
        //     // Evitar el envío predeterminado del formulario
            event.preventDefault();
        
   alert("Thanks for me");
    })
}




