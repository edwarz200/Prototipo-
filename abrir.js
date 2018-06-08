$('.menu-bar').on('click', function(){
    $('.contenido').toggleClass('abrir');
    $('.h2').toggleClass('most');
    $('.redu').toggleClass('contenido2');
    $('.contenido').toggleClass('contenido2');
});
// Funciones del slider

var num1 = 0;
var num2 = 0;
var num3 = 0;

$('.bts1').on('click', function(){
    if (num1==0) {
        $('.mano').toggleClass('mana');
        num1=1;
    }
    if (num2==1) {
        $('.mano').toggleClass('mana');      
    }
    if (num3==1) {
        $('.mano').toggleClass('mana');        
    }

    if(num1==2){
            $('.imags1').toggleClass('deslizar');
            $('.des1').toggleClass('deslizar');
            $('.imags2').toggleClass('deslizar');
            $('.des2').toggleClass('gene');
            $('.imags3').toggleClass('deslizar');
            $('.des3').toggleClass('desl3');
            num3=0;
            num2=0;
            num1=0;
    }else if (num1==3) {
                $('.imags1').toggleClass('enviaralfinal');
                $('.des1').toggleClass('enviaralfinal');
                $('.imags2').toggleClass('deslizar2');
                $('.des2').toggleClass('deslizar');
                $('.imags3').toggleClass('deslizar2');
                $('.des3').toggleClass('gene');

                num3=0;
                num2=0;
                num1=0;
    }

});

$('.bts2').on('click', function(){
    if (num2==2) {
        $('.mano').toggleClass('mana');
        num2=1;
    }
    if (num1==1) {
        $('.mano').toggleClass('mana');
        num1=0;        
    }
    if (num3==1) {
        $('.mano').toggleClass('mana'); 
    }

    if(num1==0){
        $('.imags1').toggleClass('deslizar');
        $('.des1').toggleClass('deslizar');
        $('.imags2').toggleClass('deslizar');
        $('.des2').toggleClass('gene');
        $('.imags3').toggleClass('deslizar');
        $('.des3').toggleClass('desl3');
        num3=2;
        num2=2;
        num1=2;
    }
    if (num1==3){
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
        num3=2;
        num2=2;
        num1=2;
    }
});

$('.bts3').on('click', function(){
    if (num3==3) {
        $('.mano').toggleClass('mana');
        num3=1;        
    }else if (num1==1) {
        $('.mano').toggleClass('mana');
        num1=0;   
    }else if (num2==1) {
        $('.mano').toggleClass('mana');
    }

    if (num1==0) {
        $('.imags1').toggleClass('enviaralfinal');
        $('.des1').toggleClass('enviaralfinal');
        $('.imags2').toggleClass('deslizar2');
        $('.des2').toggleClass('deslizar');
        $('.imags3').toggleClass('deslizar2');
        $('.des3').toggleClass('gene');
        num3=3;
        num2=3;
        num1=3;
    }else if   (num1==2){
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
        num3=3;
        num2=3;
        num1=3;
   }
   
});


var num= num1;




// $('.bts1').on('click', function(){
//     if (num1==0) {
//         $('.mano').toggleClass('mana');
//         num1=1;
//     }
//     if(num1==2){
//         if(num2==1){
//             $('.imags1').toggleClass('deslizar');
//             $('.des1').toggleClass('deslizar');
//             $('.imags2').toggleClass('deslizar');
//             $('.des2').toggleClass('gene');
//             $('.imags3').toggleClass('deslizar');
//             $('.des3').toggleClass('desl3');
//             $('.mano').toggleClass('mana');
//             num3=0;
//             num2=0;
//             num1=0;
//         }else{
//             $('.imags1').toggleClass('deslizar');
//             $('.des1').toggleClass('deslizar');
//             $('.imags2').toggleClass('deslizar');
//             $('.des2').toggleClass('gene');
//             $('.imags3').toggleClass('deslizar');
//             $('.des3').toggleClass('desl3');
//             num3=0;
//             num2=0;
//             num1=0;
//         }
//     }else{
//         if (num1==3) {

//             if (num3==1) {
//                 $('.imags1').toggleClass('enviaralfinal');
//                 $('.des1').toggleClass('enviaralfinal');
//                 $('.imags2').toggleClass('deslizar2');
//                 $('.des2').toggleClass('deslizar');
//                 $('.imags3').toggleClass('deslizar2');
//                 $('.des3').toggleClass('delizar');
               
//                 $('.imags1').toggleClass('deslizar');
//                 $('.des1').toggleClass('deslizar');
//                 $('.imags2').toggleClass('deslizar');
//                 $('.des2').toggleClass('gene');
//                 $('.imags3').toggleClass('deslizar');
//                 $('.des3').toggleClass('desl3');
//                 $('.mano').toggleClass('mana');
//                 num3=0;
//                 num2=0;
//                 num1=0;
//             }else{
//                 $('.imags1').toggleClass('enviaralfinal');
//                 $('.des1').toggleClass('enviaralfinal');
//                 $('.imags2').toggleClass('deslizar2');
//                 $('.des2').toggleClass('deslizar');
//                 $('.imags3').toggleClass('deslizar2');
//                 $('.des3').toggleClass('delizar');
               
//                 $('.imags1').toggleClass('deslizar');
//                 $('.des1').toggleClass('deslizar');
//                 $('.imags2').toggleClass('deslizar');
//                 $('.des2').toggleClass('gene');
//                 $('.imags3').toggleClass('deslizar');
//                 $('.des3').toggleClass('desl3');
//                 num3=0;
//                 num2=0;
//                 num1=0;
//             }
            
//         }
//     }
// });

// $('.bts2').on('click', function(){
//     if(num1==1){
//             $('.mano').toggleClass('mana');
//             $('.imags1').toggleClass('deslizar');
//             $('.des1').toggleClass('deslizar');
//             $('.imags2').toggleClass('deslizar');
//             $('.des2').toggleClass('gene');
//             $('.imags3').toggleClass('deslizar');
//             $('.des3').toggleClass('desl3');
//             num3=2;
//             num2=2;
//             num1=2;
//     }else{
//         if(num2==0){
//             $('.imags1').toggleClass('deslizar');
//             $('.des1').toggleClass('deslizar');
//             $('.imags2').toggleClass('deslizar');
//             $('.des2').toggleClass('gene');
//             $('.imags3').toggleClass('deslizar');
//             $('.des3').toggleClass('desl3');
//             num3=2;
//             num2=2;
//             num1=2;
//         }else{
//         if(num2==2){
//                 $('.mano').toggleClass('mana');
//                 num2=1;
//             }
//         }
//     }if (num1==3) {

//         if(num3==1){
//             $('.mano').toggleClass('mana');
//             $('.imags1').toggleClass('enviaralfinal');
//             $('.des1').toggleClass('enviaralfinal');
//             $('.imags2').toggleClass('deslizar2');
//             $('.des2').toggleClass('deslizar');
//             $('.imags3').toggleClass('deslizar2');
//             $('.des3').toggleClass('gene');
//             num3=2;
//             num2=2;
//             num1=2;
//         }else{
//             $('.imags1').toggleClass('enviaralfinal');
//             $('.des1').toggleClass('enviaralfinal');
//             $('.imags2').toggleClass('deslizar2');
//             $('.des2').toggleClass('deslizar');
//             $('.imags3').toggleClass('deslizar2');
//             $('.des3').toggleClass('gene');
//             num3=2;
//             num2=2;
//             num1=2;
//         }
//     }
// });

// $('.bts3').on('click', function(){
//     if(num1==0){
//             $('.imags1').toggleClass('enviaralfinal');
//             $('.des1').toggleClass('enviaralfinal');
//             $('.imags2').toggleClass('deslizar2');
//             $('.des2').toggleClass('deslizar');
//             $('.imags3').toggleClass('deslizar2');
//             $('.des3').toggleClass('gene');
//             num3=3;
//             num2=3;
//             num1=3;
//     }
//         if (num1==1) {
//                 $('.mano').toggleClass('mana');
//                 $('.imags1').toggleClass('enviaralfinal');
//                 $('.des1').toggleClass('enviaralfinal');
//                 $('.imags2').toggleClass('deslizar2');
//                 $('.des2').toggleClass('deslizar');
//                 $('.imags3').toggleClass('deslizar2');
//                 $('.des3').toggleClass('gene');
//                 num3=3;
//                 num2=3;
//                 num1=3;
//         }
//             if(num1==2){
//                 $('.imags1').toggleClass('enviaralfinal');
//                 $('.des1').toggleClass('enviaralfinal');
//                 $('.imags2').toggleClass('deslizar2');
//                 $('.des2').toggleClass('deslizar');
//                 $('.imags3').toggleClass('deslizar2');
//                 $('.des3').toggleClass('gene');
//                 num3=3;
//                 num2=3;
//                 num1=3;
//             }else{
//             if(num3==3){
//                     $('.mano').toggleClass('mana');
//                     num3=1;
//                     }
//                 }
            
// });
