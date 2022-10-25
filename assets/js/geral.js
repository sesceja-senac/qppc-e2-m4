window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
      console.log('?!?!?!')
    })
    
    $('.preloader').fadeOut(300);
})
$('.tooltip-link').click(function(e){e.preventDefault()})
$('.cartaMemoria').click(function(){
  if($(this).hasClass('flip')){
    $(this).removeClass('flip')  
  } else {
    $(this).addClass('flip')
  }
  
})