$('.item-mobile:nth-child(5)').click(function(){
	$('.icon1').css('transform','rotateZ(-45deg)');
	$('.icon2').css('transform','rotateZ(45deg)');
	$('.item-mobile:nth-child(6)').css({'opacity':'1','z-index':'3'});
	$('i.fa.fa-bars').css('display','none');
	$('.item-dropdown').css('opacity','1')
	$('.menu-dropdown').css('max-height','360px')
});
$('.item-mobile:nth-child(6)').click(function(){
	$('.icon1').css('transform','rotateZ(0deg)');
	$('.icon2').css('transform','rotateZ(0deg)');
	$('.menu-dropdown').css('max-height','0px')
	$('.item-mobile:nth-child(6)').css({'opacity':'0','z-index':'1'});
	$('i.fa.fa-bars').css('display','block');
	$('.item-dropdown').css('opacity','0')
});
/************menu-fixed*****************/

/*$(window).scroll(function(){
	if ($(this).scrollTop()>500){
					/*show icon-top*/
		$('.search').addClass("search-fixed");
	}
	else{
		$('.search').removeClass("search-fixed");
	}
})