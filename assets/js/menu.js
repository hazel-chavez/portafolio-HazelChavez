/* `$(document).ready(main);` es una función jQuery que se utiliza para garantizar que la función
`main` se ejecute solo después de que el DOM (modelo de objetos de documento) haya terminado de
cargarse. Es una forma de asegurarse de que el código JavaScript dentro de `main` se ejecute solo
cuando el documento HTML esté listo y se hayan cargado todos los elementos. */
$(document).ready(
	main
); /*cuando el elemento este listo la pantalla se cargue completa ejecuta la funcion main $(document).ready*/

/**
 * La función principal alterna la visibilidad de un menú de navegación cuando se hace clic en un botón
 * con la clase "btn-menu".
 */
var cont = 1; /*iniciamos la variable cont*/

/**
 * La función principal se activa cuando se hace clic en un botón con la clase "btn-menu" y alterna la
 * visibilidad de un menú de navegación animando su posición izquierda.
 */
function main() {
	$('.btn-menu').click(function () {
		/*donde hara click el usuario*/ // $('nav').toggle();/*nuestra lista forma sencilla*/
		if (cont == 1) {
			/*oculta el menu*/
			$('nav').animate({
				/*se agrega un objeto animando*/
				left: '0',
			});
			/*volvemos a iniciar a 0*/
			cont = 0;
		} else {
			cont = 1;
			$('nav').animate({
				left: '-100%',
			});
		}
	});
}
