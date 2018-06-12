$('.menu-bar').on('click', function () {
    $('.contenido').toggleClass('abrir');
    $('.h2').toggleClass('most');
    $('.sectionA').toggleClass('ss2');
    $('.contenido').toggleClass('contenido2');
    $('.cdiv').toggleClass('cdiv2');
    $('.sdc').toggleClass('sdmovido');
});
//Funciones del sidebar
$('.abrirul').on('click', function () {
    $('.ulcerrado').toggleClass('ulabierto');
    $('.abrirul').toggleClass('act');
    $('.abrirul').toggleClass('activ');
});

// Funciones del slider

var num1 = 0;
var num2 = 0;
var num3 = 0;
var numero = 2;
var contador = 0;
var psto, ejecutar;

// automatico

(function () {

    pruebaslider = function () {
        if (num1 == 1) {
            clearInterval(psto);
            numero = 1;
        } else if (num2 == 1) {
            clearInterval(psto);
            numero = 1;
        } else if (num3 == 1) {
            clearInterval(psto);
            numero = 1;
        }
        if (numero > 1) {
            if (num1 == 0) {
                    $('.imags1').toggleClass('deslizar');
                    $('.des1').toggleClass('deslizar');
                    $('.imags2').toggleClass('deslizar');
                    $('.des2').toggleClass('gene');
                    $('.imags3').toggleClass('deslizar');
                    $('.des3').toggleClass('desl3');
                    num3 = 2;
                    num2 = 2;
                    num1 = 2;
                } else if (num1 == 2) {
                    $('.imags1').toggleClass('deslizar');
                    $('.des1').toggleClass('deslizar');
                    $('.imags2').toggleClass('deslizar');
                    $('.des2').toggleClass('gene');
                    $('.imags3').toggleClass('deslizar');
                    $('.des3').toggleClass('desl3');

                    $('.imags1').toggleClass('enviaralfinal');
                    $('.des1').toggleClass('enviaralfinal');
                    $('.imags2').toggleClass('deslizar2');
                    $('.des2').toggleClass('deslizar');
                    $('.imags3').toggleClass('deslizar2');
                    $('.des3').toggleClass('gene');
                    num3 = 3;
                    num2 = 3;
                    num1 = 3;
                } else if (num1 == 3) {
                    $('.imags1').toggleClass('enviaralfinal');
                    $('.des1').toggleClass('enviaralfinal');
                    $('.imags2').toggleClass('deslizar2');
                    $('.des2').toggleClass('deslizar');
                    $('.imags3').toggleClass('deslizar2');
                    $('.des3').toggleClass('gene');
                    num3 = 0;
                    num2 = 0;
                    num1 = 0;
                }
            }
    };

    ejecutar = function(){
        psto = setInterval(pruebaslider, 10000);
    };
    ejecutar();

}())

$('.bts1').on('click', function () {
    if (num1 == 0) {
        $('.mano').toggleClass('mana');
        num1 = 1;
        numero = 1;
        clearInterval(psto);
    }
    if (num2 == 1) {
        $('.mano').toggleClass('mana');
        numero = 2;
    }
    if (num3 == 1) {
        $('.mano').toggleClass('mana');
        numero = 2;
    }

    if (num1 == 2) {
        $('.imags1').toggleClass('deslizar');
        $('.des1').toggleClass('deslizar');
        $('.imags2').toggleClass('deslizar');
        $('.des2').toggleClass('gene');
        $('.imags3').toggleClass('deslizar');
        $('.des3').toggleClass('desl3');
        num3 = 0;
        num2 = 0;
        num1 = 0;
        numero = 2;
        clearInterval(psto);
        ejecutar();
    } else if (num1 == 3) {
        $('.imags1').toggleClass('enviaralfinal');
        $('.des1').toggleClass('enviaralfinal');
        $('.imags2').toggleClass('deslizar2');
        $('.des2').toggleClass('deslizar');
        $('.imags3').toggleClass('deslizar2');
        $('.des3').toggleClass('gene');

        num3 = 0;
        num2 = 0;
        num1 = 0;
        numero = 2;
        clearInterval(psto);
        ejecutar();
    }
});

$('.bts2').on('click', function () {
    if (num1 == 1) {
        $('.mano').toggleClass('mana');
        num1 = 0;
        numero = 2;
    }
    if (num2 == 2) {
        $('.mano').toggleClass('mana');
        num2 = 1;
        numero = 1;
        clearInterval(psto);
    }
    if (num3 == 1) {
        $('.mano').toggleClass('mana');
        numero = 2;
    }
    if (num1 == 0) {
        $('.imags1').toggleClass('deslizar');
        $('.des1').toggleClass('deslizar');
        $('.imags2').toggleClass('deslizar');
        $('.des2').toggleClass('gene');
        $('.imags3').toggleClass('deslizar');
        $('.des3').toggleClass('desl3');
        num3 = 2;
        num2 = 2;
        num1 = 2;
        numero = 2;
        clearInterval(psto);
        ejecutar();
    }
    if (num1 == 3) {
        $('.imags1').toggleClass('enviaralfinal');
        $('.des1').toggleClass('enviaralfinal');
        $('.imags2').toggleClass('deslizar2');
        $('.des2').toggleClass('deslizar');
        $('.imags3').toggleClass('deslizar2');
        $('.des3').toggleClass('gene');

        $('.imags1').toggleClass('deslizar');
        $('.des1').toggleClass('deslizar');
        $('.imags2').toggleClass('deslizar');
        $('.des2').toggleClass('gene');
        $('.imags3').toggleClass('deslizar');
        $('.des3').toggleClass('desl3');
        num3 = 2;
        num2 = 2;
        num1 = 2;
        numero = 2;
        clearInterval(psto);
        ejecutar();
    }
});
$('.bts3').on('click', function () {
    if (num3 == 3) {
        $('.mano').toggleClass('mana');
        num3 = 1;
        numero = 1;
        clearInterval(psto);
    } else if (num1 == 1) {
        $('.mano').toggleClass('mana');
        num1 = 0;
        numero = 2;
    } else if (num2 == 1) {
        $('.mano').toggleClass('mana');
        numero = 2;
    }

    if (num1 == 0) {
        $('.imags1').toggleClass('enviaralfinal');
        $('.des1').toggleClass('enviaralfinal');
        $('.imags2').toggleClass('deslizar2');
        $('.des2').toggleClass('deslizar');
        $('.imags3').toggleClass('deslizar2');
        $('.des3').toggleClass('gene');
        num3 = 3;
        num2 = 3;
        num1 = 3;
        numero = 2;
        clearInterval(psto);
        ejecutar();
    } else if (num1 == 2) {
        $('.imags1').toggleClass('enviaralfinal');
        $('.des1').toggleClass('enviaralfinal');
        $('.imags2').toggleClass('deslizar2');
        $('.des2').toggleClass('deslizar');
        $('.imags3').toggleClass('deslizar2');
        $('.des3').toggleClass('gene');

        $('.imags1').toggleClass('deslizar');
        $('.des1').toggleClass('deslizar');
        $('.imags2').toggleClass('deslizar');
        $('.des2').toggleClass('gene');
        $('.imags3').toggleClass('deslizar');
        $('.des3').toggleClass('desl3');
        num3 = 3;
        num2 = 3;
        num1 = 3;
        numero = 2;
        clearInterval(psto);
        ejecutar();
    }
});


// Funciones de botones
btnumero = 0;

$('.btback').on('click', function () {

    if (btnumero == 0) {
        $('.mover').toggleClass('moverback');
        var moverb = function () {
            $('.mover').toggleClass('moverback');
            btnumero = 0;
        };
        setTimeout(moverb, 1500);
        btnumero = 1;
    }
});

$('.btnext').on('click', function () {
    if (btnumero == 0) {
        $('.mover').toggleClass('movernext');
        var moverb = function () {
            $('.mover').toggleClass('movernext');
            btnumero = 0;
        };
        setTimeout(moverb, 1500);
        btnumero = 1;
    }
});