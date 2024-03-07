$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000',{ // "0" para numeros e "s" para letras
        placeholder: '+ DDD'
    })

    $('form').validade({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            },
            veiculoInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        subimithandler: function(form){
            console.log(form)
        },
        invalidhandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrolltop: destino.offset().top
        },1000)
    })
})