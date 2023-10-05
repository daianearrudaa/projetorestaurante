$(document).ready(function(){

    $('#tel').mask('(00)00000-0000');

    $('form').validate({
        rules:{
            tel:false
        },
        messages:{
            nome: '<span style="color: red; font-weight: bold;">Por favor, insira o seu nome</span>',
            email: '<span style="color: red; font-weight: bold;">Por favor, insira o seu email</span>'
        }
    })


    
})