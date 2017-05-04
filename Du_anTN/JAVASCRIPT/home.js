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

/************Start-page*****************/
$(document).ready(function(){
	$('.slogan-img').css('opacity','1');
	$('.slogan-text').css('opacity','1');
	$('.logo1').css('opacity','1');
	$('.logo2').css('opacity','1');
	$('.logo3').css('opacity','1');
	$('.logo4').css('opacity','1');
	$('.logo5').css('opacity','1');
	$('.logo6').css('opacity','1');
	$('.content-right').css('opacity','1');
});
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



