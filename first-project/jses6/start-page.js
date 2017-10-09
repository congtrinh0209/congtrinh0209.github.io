let url = decodeURIComponent($(location).attr('href'));
let data_url = url.substring(url.search('html')+5);
function transition(selector) {
	$(selector).css({"transform":"translateX(0)", "opacity":"1"})
}
$(window).scroll( () => {
	const window_width = $(window).width();
	let a = $(window).scrollTop();
	let b = $(".ad-audio").innerHeight();
	let c = $(".content2").innerHeight();
	let d = $(".content6").innerHeight();
	let e = $(".content3").innerHeight();
	if (window_width >= 769) {
		if (a>250){
			transition(".wr1");
		}
		if (a>1000){
			transition(".wr2");
		}
		if (a>1700){
			transition(".wr3");
		}
		if (a>2700){
			transition(".wr4");
		}
	} else {
			if (a> b+250){
				transition(".wr1");
			}
			if (a> b+c+50){
				transition(".wr2");
			}
			if (a> b+c+d+400){
				transition(".wr3");
			}
			if (a> b+c+d+e+400){
				transition(".wr4");
			}
	}
});
$(window).ready( () => {
	// $(".logo>img").css({"transform":"translateY(0)", "opacity":"0.6"});
	// $(".slogan h1").css({"transform":"translateX(0)", "opacity":"0.6"});
	$(".hn").hover(function() {
		$(".first").css({"display": "block","visibility": "visible"})
	},function(){$(".first").css({"display": "none","visibility": "hidden"})});

	$(".dn").hover(function() {
		$(".second").css({"display": "block","visibility": "visible"})
	},function(){$(".second").css({"display": "none","visibility": "hidden"})});

	$(".hcm").hover(function() {
		$(".third").css({"display": "block","visibility": "visible"})
	},function(){$(".third").css({"display": "none","visibility": "hidden"})});

	$(".container-popover").hover(function() {
		$(this).css({"display": "block","visibility": "visible"})
	},function(){$(this).css({"display": "none","visibility": "hidden"})});
	/******Request-locale*******/
	switch (data_url)
	{
		case "locale=hanoi" : {
			$(".locale-item").val($(".locale-item>option:nth-child(2)").val());
			break;
		}
		case "locale=danang" : {
			$(".locale-item").val($(".locale-item>option:nth-child(3)").val());
			break;
		}
		case "locale=hochiminh" : {
			$(".locale-item").val($(".locale-item>option:nth-child(4)").val());
			break;
		}
		default: {$(".locale-item").val("Tỉnh, TP")}
	}
});
