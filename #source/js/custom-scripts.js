//SHOWCASE FILTER
$('.filter-item').click(function(event) {
  var i=$(this).data('filter');
  if (i=="Watches") {
    $('.product').show();
  }
  else {
    $('.product').hide();
    $('.product.'+i).show();
  }
  $('.filter-item').removeClass('active');
  $(this).addClass('active');

  return false;
})


//Dynamic adaptive
  let move_array=[];
if($('*[data-move]')){
  $.each($('*[data-move]'), function(index, val) {
    if($(this).data('move')!='' && $(this).data('move')!=null){
      $(this).attr('data-move-index',index);
      move_array[index]={
        'parent':$(this).parent(),
        "index":$(this).index()
      };
    }
  });
}
function dynamic_adaptive(){
    let w=$(window).outerWidth();
  $.each($('*[data-move]'), function(index, val) {
    if($(this).data('move')!='' && $(this).data('move')!=null){
        let dat_array=$(this).data('move').split(',');
        let dat_parent=$('.'+dat_array[0]);
        let dat_index=dat_array[1];
        let dat_bp=dat_array[2];
      if(w<dat_bp){
        if(!$(this).hasClass('js-move_done_'+dat_bp)){
          if(dat_index>0){
            $(this).insertAfter(dat_parent.find('*').eq(dat_index-1));
          }else{
            $(this).prependTo(dat_parent);
          }
          $(this).addClass('js-move_done_'+dat_bp);
        }
      }else{
        if($(this).hasClass('js-move_done_'+dat_bp)){
          dynamic_adaptive_back($(this));
          $(this).removeClass('js-move_done_'+dat_bp);
        }
      }
    }
  });
}
function dynamic_adaptive_back(el){
    let index_original=el.data('move-index');
    let move_place=move_array[index_original];
    let parent_place=move_place['parent'];
    let index_place=move_place['index'];
  if(index_place>0){
    el.insertAfter(parent_place.find('*').eq(index_place-1));
  }else{
    el.prependTo(parent_place);
  }
}
$(window).resize(function(event) {
  dynamic_adaptive();
});
  dynamic_adaptive();

//console.log(move_array);

function dynamic_adaptive_back_all(){
  $.each($('*[data-move]'), function(index, val) {
      let index_original=$(this).data('move-index');
      let move_place=move_array[index_original];
      let parent_place=move_place['parent'];
      let index_place=move_place['index'];
    if(index_place>0){
      $(this).insertAfter(parent_place.find('*').eq(index_place-1));
    }else{
      $(this).prependTo(parent_place);
    }
  });
}

/*Burger-active

$(document).ready(function() {
	$('.menu-icon').click(function(event) {
		$('.menu-icon,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
*/


/*magnific-popup initalize
$(document).ready(function() {
  $('.').magnificPopup({
  	delegate: 'a',
  	type:'image',
  	closeOnBgClick: true,
  	gallery: {
    enabled: true,
    tCounter: ''
  	},
  	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		return item.el.attr('title');
		}
	}
  });
});
*/