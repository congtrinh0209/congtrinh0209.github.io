var imgs = [
	img_1 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO'},
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
var imgs_per_page;	// Số ảnh trên 1 trang
var number_page;	// Số trang
var display = "";	// html nội dung trang
var display2 = "";	// html pagination
var bf_pagination = '<li class="first"><a>First</a></li>';
var af_pagination = '<li class="last "><a>Last</a></li>';
function load_page(a) {					// hàm load trang khi click page
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
function add_content(b,c){ 	// hàm đổ dữ liệu trang và pagination
	for (var i = 0; i < imgs_per_page; i++) {	// vòng lặp add nội dung trang
		display += '<li class="sp">'+'<a href="#" class="wrap-img">'+'<img src="../IMG/'+imgs[i].name+' " '+' alt="'+imgs[i].alt+' " '+' title=" '+imgs[i].title+' " ></a><a href="#"><p>'+imgs[i].description+'</p></a></li>';
	}
	for (var i = b; i <= c; i++) {	// vòng lặp cho pagination
		display2 += '<li><a onclick="load_page('+i+')">'+i+'</a></li>';
	}
	$(".list_sp").html(display);
	$(".pagination").html(display2);
	display = "";
	display2 = "";
	$(".pagination li:first").addClass("active");
	$(".pagination>li").click(function() {
		$(".pagination>li").removeClass("active");
		$(this).addClass("active");

	});
}
function pagination() {
	imgs_per_page = $("#ipp").val();
	number_page = Math.ceil(imgs.length / imgs_per_page);
	var b;
	var c;
	//*************
	if (number_page <= 5) {
		b = 1;
		c = number_page;
		add_content(b,c)
	}
	else {
		b = 1;
		c = 5;
		add_content(b,c);
		$(".pagination li:first").before(bf_pagination);
    	$(".pagination li:last").after(af_pagination);
    	$(".first").css("display","none");
	}

};
$(document).ready(pagination());


