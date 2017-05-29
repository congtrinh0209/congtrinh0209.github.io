var imgs = [
	img_1 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-1'},
	img_2 = {name: 'deluxe.png' , alt: 'deluxe', title: 'DELUXE', description: 'DELUXE'},
	img_3 = {name: 'janus.png' , alt: 'janus', title: 'JANUS', description: 'JANUS'},
	img_4 = {name: 'NVX155Standard.png' , alt: 'NVX155Standard', title: 'NVX155Standard', description: 'NVX155-Standard'},
	img_5 = {name: 'TFX150.png' , alt: 'TFX150', title: 'TFX150', description: 'TFX-150'},
	img_6 = {name: 'exciter150gp.jpg' , alt: 'exciter150gp', title: 'exciter150gp', description: 'EXCITER-150GP'},
	img_7 = {name: 'movitar150.jpg' , alt: 'movitar150', title: 'movitar150', description: 'MOVISTAR-150'},
	img_8 = {name: 'YZF-R3.jpg' , alt: 'YZF-R3', title: 'YZF-R3', description: 'YZF-R3'},
	img_9 = {name: 'granderpremium.jpg' , alt: 'granderpremium', title: 'granderpremium', description: 'GRANDER-PREMIUM'},
	img_10 = {name: 'deluxe.png' , alt: 'deluxe', title: 'deluxe', description: 'DELUXE'},
];
var imgs_per_page;
var number_page;
var display = "";
var display2 = "";
function load_page(a) {
		if (a == number_page) {
			for (var i = (a-1)*imgs_per_page; i < imgs.length; i++) {
			display += '<li class="sp">'+'<a href="#" class="wrap-img">'+'<img src="../IMG/'+imgs[i].name+' " '+' alt="'+imgs[i].alt+' " '+' title=" '+imgs[i].title+' " ></a><a href="#"><p>'+imgs[i].description+'</p></a></li>';
			}
			$(".list_sp").html(display);
			display = "";
		}
		else{
			for (var i = (a-1)*imgs_per_page; i < a*imgs_per_page; i++) {
			display += '<li class="sp">'+'<a href="#" class="wrap-img">'+'<img src="../IMG/'+imgs[i].name+' " '+' alt="'+imgs[i].alt+' " '+' title=" '+imgs[i].title+' " ></a><a href="#"><p>'+imgs[i].description+'</p></a></li>';
			}
			$(".list_sp").html(display);
			display = "";
		}
	}
function pagination() {
	imgs_per_page = $("#ipp").val();
	number_page = Math.ceil(imgs.length / imgs_per_page);
	//***************
	for (var i = 0; i < imgs_per_page; i++) {
		display += '<li class="sp">'+'<a href="#" class="wrap-img">'+'<img src="../IMG/'+imgs[i].name+' " '+' alt="'+imgs[i].alt+' " '+' title=" '+imgs[i].title+' " ></a><a href="#"><p>'+imgs[i].description+'</p></a></li>';
	}
	for (var i = 1; i <= number_page; i++) {
		display2 += '<li><a onclick="load_page('+i+')">'+i+'</a></li>';
	}
	$(".list_sp").html(display);
	$(".pagination").html(display2);
	display = "";
	display2 = "";
	$(".pagination>li:nth-child(1)").addClass("active");
	$(".pagination>li").click(function() {
		$(".pagination>li").removeClass("active");
		$(this).addClass("active");
	});
};
$(document).ready(pagination());


