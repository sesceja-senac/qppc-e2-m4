$('.texto-erro').fadeOut()
function checkResultado(resultado){
    if(resultado>5000){
        $('#money').addClass('error')
        $('.texto-erro').fadeIn()
        $('.row-select:not(.selected)').addClass('disabled')
    } else if(resultado<=5000){
        $('.texto-erro').fadeOut()
        $('.row-select:not(.selected)').removeClass('disabled')
        $('#money').removeClass('error')
    }
}
$('#row-1').click(function(){
    var resultado = parseInt($('#resultado').html())    
    if($(this).hasClass('selected')){
        resultado = resultado-500
        $('#resultado').html(resultado)
        $('#row-1').removeClass('selected')
    } else {
        resultado = resultado+500
        $('#resultado').html(resultado)
        $('#row-1').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-2').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-200
        $('#resultado').html(resultado)
        $('#row-2').removeClass('selected')
    } else {
        resultado = resultado+200
        $('#resultado').html(resultado)
        $('#row-2').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-3').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-1000
        $('#resultado').html(resultado)
        $('#row-3').removeClass('selected')
    } else {
        resultado = resultado+1000
        $('#resultado').html(resultado)
        $('#row-3').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-4').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-300
        $('#resultado').html(resultado)
        $('#row-4').removeClass('selected')
    } else {
        resultado = resultado+300
        $('#resultado').html(resultado)
        $('#row-4').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-5').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-1000
        $('#resultado').html(resultado)
        $('#row-5').removeClass('selected')
    } else {
        resultado = resultado+1000
        $('#resultado').html(resultado)
        $('#row-5').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-6').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-2500
        $('#resultado').html(resultado)
        $('#row-6').removeClass('selected')
    } else {
        resultado = resultado+2500
        $('#resultado').html(resultado)
        $('#row-6').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-7').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-300
        $('#resultado').html(resultado)
        $('#row-7').removeClass('selected')
    } else {
        resultado = resultado+300
        $('#resultado').html(resultado)
        $('#row-7').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-8').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-200
        $('#resultado').html(resultado)
        $('#row-8').removeClass('selected')
    } else {
        resultado = resultado+200
        $('#resultado').html(resultado)
        $('#row-8').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-9').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-200
        $('#resultado').html(resultado)
        $('#row-9').removeClass('selected')
    } else {
        resultado = resultado+200
        $('#resultado').html(resultado)
        $('#row-9').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-10').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-500
        $('#resultado').html(resultado)
        $('#row-10').removeClass('selected')
    } else {
        resultado = resultado+500
        $('#resultado').html(resultado)
        $('#row-10').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-11').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-1000
        $('#resultado').html(resultado)
        $('#row-11').removeClass('selected')
    } else {
        resultado = resultado+1000
        $('#resultado').html(resultado)
        $('#row-11').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-12').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-800
        $('#resultado').html(resultado)
        $('#row-12').removeClass('selected')
    } else {
        resultado = resultado+800
        $('#resultado').html(resultado)
        $('#row-12').addClass('selected')
    }
    checkResultado(resultado)
})
$('#row-13').click(function(){
    var resultado = parseInt($('#resultado').html())
    checkResultado()
    if($(this).hasClass('selected')){
        resultado = resultado-600
        $('#resultado').html(resultado)
        $('#row-13').removeClass('selected')
    } else {
        resultado = resultado+600
        $('#resultado').html(resultado)
        $('#row-13').addClass('selected')
    }
    checkResultado(resultado)
})