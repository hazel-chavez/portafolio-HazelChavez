$(document).ready(main);/*cuando el elemento este listo la pantalla se cargue completa ejecuta la funcion main $(document).ready*/

var cont = 1; /*iniciamos la variable cont*/

function main(){
    $('.btn-menu').click(function(){/*donde hara click el usuario*/
        // $('nav').toggle();/*nuestra lista forma sencilla*/
        if(cont == 1){/*oculta el menu*/
        $('nav').animate({
            /*se agrega un objeto animando*/
            left: "0"
        });   
        /*volvemos a iniciar a 0*/
        cont = 0;
        }else {
            cont = 1;
            $('nav').animate({
                left: "-100%"
            });
        }

    });
}