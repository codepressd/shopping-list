$(document).ready(function(){

	$('#shop-item').keydown(function(e){
		if(event.keyCode==13){
			$('#submit').trigger('click');
		}
	});


	$('#submit').click(function(){

		var shopItem = $('#shop-item').val();
		$('#shop-item').val(' ');

		$('ul.needed-items')
		.append('<li id="item-contain">'+
					'<span class="check"><i class="fa fa-check-square-o" aria-hidden="true"></i></span>'+
					'<span class="items">'+ shopItem +'</span>'+
					'<span class="remove"><i class="fa fa-times" aria-hidden="true"></i></span>'+
				'</li>');
	});

	//$('#item-contain').mouseenter(function(){
	//	$('#item-contain>span').removeClass('hidden');
	//});

/*Function to move from "what you need" --> "What you have" */

	$('body').on('click', 'span.check',function(){

		var curShopItem = $(this).siblings('.items').text();
	
		$('ul.purchased-items')
		.append('<li id="item-contain">'+
					'<span class="back"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>'+
					'<span class="items">'+ curShopItem +'</span>'+
					'<span class="remove"><i class="fa fa-times" aria-hidden="true"></i></span>'+
				'</li>');
		$(this).parent().remove();
		
	});



/*Function to move from "what you have" --> "What you need" */

	$('body').on('click', 'span.back', function(){

		var curShopItem = $(this).siblings('.items').text();

		$('ul.needed-items')
		.append('<li id="item-contain">'+
					'<span class="check"><i class="fa fa-check-square-o" aria-hidden="true"></i></span>'+
					'<span class="items">'+ curShopItem +'</span>'+
					'<span class="remove"><i class="fa fa-times" aria-hidden="true"></i></span>'+
				'</li>');
		$(this).parent().remove();

	});

	$('body').on('click', 'span.remove', function(){
		$(this).parent().remove();
	});
});

