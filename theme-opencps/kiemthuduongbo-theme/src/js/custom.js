$(document).ready(function(){
	$( "body" ).delegate( 'a[data-toggle="dropdown"]', "click", function() {
		$(this).parent().toggleClass( "open" );
	});
	
	$( "body" ).delegate( 'button[data-toggle="dropdown"]', "click", function() {
		$(this).parent().toggleClass( "open" );
	});

	//Back to top
	var offset = 300,
		scroll_top_duration = 600;
		$back_to_top = $('.btt');
		$back_to_home = $('.bth');
		
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('btt-is-visible') : $back_to_top.removeClass('btt-is-visible');
		( $(this).scrollTop() > offset ) ? $back_to_home.addClass('btt-is-visible') : $back_to_home.removeClass('btt-is-visible');
	});
	//Smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});