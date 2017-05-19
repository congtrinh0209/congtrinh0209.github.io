$('.item-mobile:nth-child(4)').click(function(){
	$('.icon1').css('transform','rotateZ(-45deg)');
	$('.icon2').css('transform','rotateZ(45deg)');
	$('.item-mobile:nth-child(5)').css({'opacity':'1','z-index':'3'});
	$('i.fa.fa-bars').css('display','none');
	$('.item-dropdown').css('opacity','1');
	$('.menu-dropdown').css('max-height','360px')
});
$('.item-mobile:nth-child(5)').click(function(){
	$('.icon1').css('transform','rotateZ(0deg)');
	$('.icon2').css('transform','rotateZ(0deg)');
	$('.menu-dropdown').css('max-height','0px');
	$('.item-mobile:nth-child(5)').css({'opacity':'0','z-index':'1'});
	$('i.fa.fa-bars').css('display','block');
	$('.item-dropdown').css('opacity','0')
});
/************Trang Start-Page*****************/
$(document).ready(function(){
	$('.slogan-img').css('opacity','1');
	$('.slogan-text').css('opacity','1');
	$('.logo1').css('opacity','1');
	$('.logo2').css('opacity','1');
	$('.logo3').css('opacity','1');
	$('.logo4').css('opacity','1');
	$('.logo5').css('opacity','1');
	$('.logo6').css('opacity','1');
	$('.nav-bar').css('opacity','1');
	$('.content-right').css('opacity','1');
});

/************banner-mobile*********************/
var window_width = window.innerWidth;
if (window_width < 769) {
	$(".sign-mobile").html($(".sign").html());
	$(".info-acc-mobile").html($(".info-acc").html());
}
/************banner-mobile*********************/
$(document).ready(function(){
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

	$(".item-mobile:nth-child(1)").on("click",function() {
		window.location.href='#menu-search';
	});
	$(".item-mobile:nth-child(2)").on("click",function() {
		window.location.href='search-nearby.html';
	});
	/************menu-fixed*****************/
	
	if (window_width > 768) {
		$(window).scroll(function(){
			if ($(this).scrollTop()>$(".banner").height()){
				$('.header').addClass("header-fixed");
				$('.wrap-content').addClass("wrap-content-fixed");
			}
			else{
			$('.header').removeClass("header-fixed");
			$('.wrap-content').removeClass("wrap-content-fixed");
			}	
		})
	}
});
/************locale menu search****************/
	var district_hn = ['Quận Ba Đình','Quận Hoàn Kiếm','Quận Hai Bà Trưng','Quận Đống Đa','Quận Tây Hồ','Quận Cầu Giấy','Quận Thanh Xuân','Quận Hoàng Mai','Quận Long Biên','Huyện Từ Liêm','Huyện Thanh Trì','Huyện Gia Lâm','Huyện Đông Anh','Huyện Sóc Sơn','Quận Hà Đông','Thị xã Sơn Tây','Huyện Ba Vì','Huyện Phúc Thọ','Huyện Thạch Thất','Huyện Quốc Oai','Huyện Chương Mỹ','Huyện Đan Phượng','Huyện Hoài Đức','Huyện Thanh Oai','Huyện Mỹ Đức','Huyện Ứng Hoà','Huyện Thường Tín','Huyện Phú Xuyên','Huyện Mê Linh'];
	var district_hcm = ['Quận 1','Quận 2','Quận 3','Quận 4','Quận 5','Quận 6','Quận 7','Quận 8','Quận 9','Quận 10','Quận 11','Quận 12','Quận Thủ Đức','Quận Gò Vấp','Quận Bình Thạnh','Quận Tân Bình','Quận Tân Phú','Quận Phú Nhuận','Quận Bình Tân','Huyện Củ Chi','Huyện Hóc Môn','Huyện Bình Chánh','Huyện Nhà Bè','Huyện Cần Giờ'];
	var district_dn = ['Quận Hải Châu','Quận Thanh Khê','Quận Sơn Trà','Quận Ngũ Hành Sơn','Quận Liên Chiểu','Huyện Hòa Vang','Quận Cẩm Lệ','Huyện Hoàng Sa'];
window.onload = function select_locale() {
	var display_locale = "<option>Quận, Huyện</option>";
	if ($(".locale-item").val() == "Hà Nội"){
		for (var i = 0; i < district_hn.length; i++) {
			display_locale += "<option>"+district_hn[i]+"</option>"
		};
	}
	else if ($(".locale-item").val() == "Đà Nẵng"){
		for (var i = 0; i < district_dn.length; i++) {
			display_locale += "<option>"+district_dn[i]+"</option>"
		};
	}
	else if ($(".locale-item").val() == "TP.Hồ Chí Minh"){
		for (var i = 0; i < district_hcm.length; i++) {
			display_locale += "<option>"+district_hcm[i]+"</option>"
		};
	}
	else {display_locale += ""}
	$(".locale_district").html(display_locale);

	$(".locale-item").click(function() {
		var display_locale = "<option>Quận, Huyện</option>";
		if ($(".locale-item").val() == "Hà Nội"){
			for (var i = 0; i < district_hn.length; i++) {
				display_locale += "<option>"+district_hn[i]+"</option>"
			};
		}
		else if ($(".locale-item").val() == "Đà Nẵng"){
			for (var i = 0; i < district_dn.length; i++) {
				display_locale += "<option>"+district_dn[i]+"</option>"
			};
		}
		else if ($(".locale-item").val() == "TP.Hồ Chí Minh"){
			for (var i = 0; i < district_hcm.length; i++) {
				display_locale += "<option>"+district_hcm[i]+"</option>"
			};
		}
		$(".locale_district").html(display_locale)
	})
}
/************************************/
/************Đăng nhập*****************/
var user = [
			user_1={fullname: 'Trịnh Công Trình', mobile: '0868979193', email:'congtrinh0209@gmail.com', pass:'02092008'},
			];
$('#sign-in').on('submit',function() {   /******Login*******/
	var error = true;
	if ($('#uname').val()!= user[0].mobile && $('#uname').val()!= user[0].email){
			$('#uname').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Email hoặc số điện thoại không đúng</br>');
			error = false;
		}
		else{
			$('#uname').next('span').text(''); $('.error1').css('padding', '0px');
		}
	if ($('#psw').val()!= user[0].pass){
			$('#psw').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Mật khẩu không chính xác</br>');
			error = false;
		}
		else{
			$('#psw').next('span').text(''); $('.error3').css('padding', '0px');
		}
	return error;
});

var a;
$(document).ready(function(){
	/******Hiển thị sign-in, sign-up*******/
	if ($(location).attr('href').search('psw')>0){
		$('.sign').css('display','none');
		$('.info-acc').css('display','block');
		$('.sign-mobile').css('display','none');
		$('.info-acc-mobile').css('display','block');
	}
	$(".sign-out").on("click",function() {
	window.location.href='home.html';
	})
	/********** Gán dữ liệu vào menu search khi click logo **********/
	$(".room").on('click',function(){
		$(".loaihinh").val($(".loaihinh>option:nth-child(2)").val());
	})
	$(".house").on('click',function(){
		$(".loaihinh").val($(".loaihinh>option:nth-child(3)").val());
	})
	$(".flat").on('click',function(){
		$(".loaihinh").val($(".loaihinh>option:nth-child(4)").val());
	})
	$(".store").on('click',function(){
		$(".loaihinh").val($(".loaihinh>option:nth-child(5)").val());
	})
	/********** Điều kiện truy cập các trang quản lý, đăng tin, nạp tiền**********/
	a = $(".info-acc").css("display");
	if (a == "block"){
			$(".menu-1024>ul>li:nth-child(7)>a").attr("href","../HTML/post2.html")}
		
		else {
			$(".menu-1024>ul>li:nth-child(7)>a").on("click",function(){$(".alert-danger").css("display","block")});}

	i = $(".info-acc-mobile").css("display");
	if (i == "block"){
			$(".menu-mobile>ul>.item-mobile:nth-child(3)").on("click",function(){window.location.href = '../HTML/post2.html'})}
		
		else {
			$(".menu-mobile>ul>.item-mobile:nth-child(3)").on("click",function(){$(".alert-danger").css("display","block")});}
});


/******Request-pass*******/
$('#request-pass').on('submit',function() { 
	var error = true;
	if ($('#send-mobile').val()!= user[0].mobile){
			$('#send-mobile').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Số điện thoại không tồn tại trên hệ thống!</br>');
			error = false;
		}
		else{
			$('#send-mobile').next('span').text(''); $('.error3').css('padding', '0px');}
	return error;
})
/******Đăng ký*******/
$('#login-form').on('submit',function() { 
	var error = true;
	if ($('#psw1').val()!= $('#psw2').val()){
			$('#psw2').next('span').html('<i class="fa fa-exclamation-circle"></i>'+' Mật khẩu nhập lại không chính xác!</br>');
			error = false;
		}
		else{
			$('#psw2').next('span').text(''); $('.error4').css('padding', '0px');}
	return error;
})

/********** Lấy dữ liệu vào trang đăng ký thành công  **********/
var url = decodeURIComponent($(location).attr('href'));
var data_url = url.substring(url.search('html')+5);
var arr_data = data_url.split('&'); /****Mảng dữ liệu từ URL****/
var name = arr_data[0].substring(arr_data[0].search('=')+1).split('+').join(' ');
var mobile = arr_data[1].substring(arr_data[1].search('=')+1);
var email = arr_data[2].substring(arr_data[2].search('=')+1);
var pass_word = arr_data[3].substring(arr_data[3].search('=')+1);
/***** Gán dữ liệu****/
$(".home").click(function(){
    window.location.href = 'home.html';
});
$('.user-name').val(name);
$('.your-email').val(email);
$('.your-mobile').val(mobile);
$('.pass').val(pass_word);



