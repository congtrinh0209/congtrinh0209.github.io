var imgs = [
	img_1 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-1'},
	img_2 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-2'},
	img_3 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-3'},
	img_4 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-4'},
	img_5 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-5'},
	img_6 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-6'},
	img_7 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-7'},
	img_8 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-8'},
	img_9 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-9'},
	img_10 = {name: 'acruzo.png' , alt: 'acruzo', title: 'ACUZO', description: 'ACUZO-10'},
];
var imgs_per_page;
var number_page;
var display = "";
var display2 = "";
function load_page(a) {
		for (var i = a*imgs_per_page; i < (a+1)*imgs_per_page; i++) {
		display += '<li class="sp">'+'<a href="#" class="wrap-img">'+'<img src="../IMG/'+imgs[i].name+' " '+' alt="'+imgs[i].alt+' " '+' title=" '+imgs[i].title+' " ></a><a href="#"><p>'+imgs[i].description+'</p></a></li>';
		}
		$(".list_sp").html(display);
		display = "";
	}
function chiatrang() {
	imgs_per_page = $("#ipp").val();
	number_page = Math.ceil(imgs.length / imgs_per_page);
	//***************
	for (var i = 0; i < imgs_per_page; i++) {
		display += '<li class="sp">'+'<a href="#" class="wrap-img">'+'<img src="../IMG/'+imgs[i].name+' " '+' alt="'+imgs[i].alt+' " '+' title=" '+imgs[i].title+' " ></a><a href="#"><p>'+imgs[i].description+'</p></a></li>';
	}
	for (var i = 0; i < number_page; i++) {
		display2 += '<li><a onclick="load_page('+i+')">'+(i+1)+'</a></li>';
	}
	$(".list_sp").html(display);
	$(".pagination").html(display2);
	display = "";
	display2 = "";
};
$(document).ready(chiatrang());


