// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item'
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});

$('.filters-button-group').on( 'click', 'button',function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    
  var items = document.querySelectorAll(".realisation__ul_li")

  for(i=1 ; i<items.length ; i+=3){
    position = items[i].offsetLeft
    items[i].style.left = position + 10 + "px"
  }
  for(i=2 ; i<items.length ; i+=3){
    position = items[i].offsetLeft
    items[i].style.left = position + 20 + "px"
  }
});
