<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Một cửa điện tử và Nghiệp vụ đảm bảo Chứng thư số Cục Chứng thư số và Bảo mật Thông tin</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	
	<link rel="Shortcut Icon" href="${themeDisplay.getPathThemeRoot()}/images/favicon.ico">
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap&subset=vietnamese" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.1.4/css/bootstrap-datetimepicker.min.css" integrity="sha256-Fl1s8EQCc9mKf/njo8mWr0MPJR8TnOQb0h0rmVKRoP8=" crossorigin="anonymous" />

	<@liferay_util["include"] page=top_head_include />
	
	<base href="/">
	<link href="${themeDisplay.getPathThemeRoot()}/css/base-style.css?t=8888" rel="stylesheet" type="text/css">
	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=8888" rel="stylesheet" type="text/css">
	<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet" type="text/css">
	<link type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/chunk-vendors.css?t=123321" rel="stylesheet">
	<link type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/upgrade.css?t=789987" rel="stylesheet">

	<script>
        window.__define = window.define;
        window.__require = window.require;
        window.define = undefined;
        window.require = undefined;
    </script>
	
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/bootstrap.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/handlebars.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/alpaca.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/moment-with-locales.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/bootstrap-datetimepicker.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/moment.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery-comments.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery.textcomplete.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/svg-pan-zoom.min.js"></script>
	<script src="https://sp.zalo.me/plugins/sdk.js"></script>
	
	<script>
        window.define = window.__define;
        window.require = window.__require;
        window.__define = undefined;
        window.__require = undefined;
    </script>
</head>

<body class="${css_class} page-theme">

	<!-- <@liferay_ui["quick-access"] contentId="#main-content" /> -->

	<#if permissionChecker.isOmniadmin()>
		<@liferay_util["include"] page=body_top_include />
		<@liferay.control_menu />
	<#else>
		<style>
			html .has-control-menu #wrapper {
				margin-top: 0 !important;
			}
			html body.open #wrapper {
				padding-left: 0 !important;
			}
		</style>
	</#if>

	<div class="container-fluid" id="wrapper" style="overflow: hidden;">
		<header id="banner">
			<div class="cont">
				<div class="mLogo align-middle"> 
					<a href="${site_default_url}"> 
						<img src="${themeDisplay.getPathThemeRoot()}/images/logo-header.png"> 
					</a>
				</div>
				<div id="react-root" style="">
					<div id="app_login"></div>
				</div>
			</div>
		</header>

		<#if has_navigation && is_setup_complete>
			<#include "${full_templates_path}/navigation.ftl" />
		</#if>

		<section id="content">
			<#if selectable>
				<@liferay_util["include"] page=content_include />
			<#else>
				${portletDisplay.recycle()}

				${portletDisplay.setTitle(the_title)}

				<@liferay_theme["wrap-portlet"] page="portlet.ftl">
					<@liferay_util["include"] page=content_include />
				</@>
			</#if>
		</section>

		<footer id="footer">
			<div class="cont">
				<div class="statistics"><b>Lượt truy cập</b>: <span class="online">3</span> / <span class="total">122</span></div>
				<span>©2017 Bản quyền thuộc về Cục Chứng thực số và Bảo mật thông tin - Ban Cơ yếu Chính phủ</span>
				<span class="divine">|</span>
				<span>Địa chỉ: 23 Ngụy Như Kon Tum, Thanh Xuân, HN</span>
				<span class="divine">|</span>
				<span>Điện thoại: (024) 3773 8668 hay (024) 3222 2665</span>
			</div>
		</footer>
		
	</div>
	
	<a href="" class="btt"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
	<a href="/web/dich-vu-cong-bcy" class="bth"><i class="fa fa-home" aria-hidden="true"></i></a>
		
	<!-- inject:js -->
	<script type="text/javascript" src="/o/opencps-store/js/cli/login/app/js/app.js"></script>
	<script type="text/javascript" src="/o/opencps-store/js/cli/login/app/js/chunk-vendors.js"></script>
	<#if permissionChecker.isOmniadmin()>
		<@liferay_util["include"] page=body_bottom_include />
		<@liferay_util["include"] page=bottom_include />
	</#if>
	<!-- endinject -->
	<script type="text/javascript" src="${themeDisplay.getPathThemeRoot()}/js/pdf.js?t=9991"></script>
	<script type="text/javascript" src="${themeDisplay.getPathThemeRoot()}/js/pdf-table-extractor.js?t=9991"></script>

	<script type="text/javascript">		
		$(document).ready(function() {
			$("#navigation .nav-toggle").on('click', function(e) {
				e.preventDefault();
				$(this).next().slideToggle();
			});
		
			$(".header_login .logo img").attr("src","o/bancycp-motcua-theme/images/logo-login.png");
			
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
			
			//Currently Online
			setInterval(function() {
				var number = 1 + Math.floor(Math.random() * 5);
				$('.online').text(number);
			},1000*60*5);
			
			
			//Total Visited
			var $badge = $('.total');
			setInterval(function() {
				var value = parseInt($badge.html());
				value = value + Math.floor(Math.random() * 15);
				$badge.html(value);
			},5000*60*15);
		});
		
		
		window.PDFJS.workerSrc = '${themeDisplay.getPathThemeRoot()}/js/pdf.worker.js?t=9991';
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
	</script>
	
	<style>
		.counter-up-down {
			width: 100px;
			display: inline-block;
		}
		.counter-up-down input[type=number] {
			text-align: center;
			border-left: 1px solid #dedede;
			border-right: 1px solid #dedede;
		}
		.counter-up-down input[type=number]::-webkit-inner-spin-button, .counter-up-down input[type=number]::-webkit-outer-spin-button { 
		  -webkit-appearance: none; 
		  margin: 0; 
		}
		.counter-up-down .v-text-field.v-text-field--solo .v-input__control {
			min-height: 0px;
			border: 1px solid #dedede;
			border-radius: 3px;
		}
		.group__thanh_phan .v-text-field__details {
			display: none
		}
		.counter-up-down .v-input__slot {
			border: 1px solid #dedede;
			padding: 0 4px !important;
			margin: 0px;
		}
		.group__thanh_phan .v-input__slot {
			height: 32px !important;
			margin: 0px;
			border: 1px solid #dedede;
			border-radius: 3px;
			padding: 0 4px !important;
		}
		.group__thanh_phan .v-text-field__details {
			display: none !important
		}
		#wrapper {
			padding-top: 0 !important;
		}
		body #react-root .v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close), 
		body #react-root .v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
			-webkit-box-shadow: 0 1px 3px -1px rgba(0,0,0,.2), 1px 1px 5px -5px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
			box-shadow: 0 1px 3px -1px rgba(0,0,0,.2), 1px 1px 5px -5px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
		}
		
		.login-wrapper {
			float: right;
		}
		.forgetten-password-input {
			width: 100%;
			line-height: 31px;
			font-size: 13px;
			padding-left: 10px;
			text-decoration: underline;
			color: #fff;
		}
		.action-btn-login-input {
			width: 100%;
			text-align: right;
		}
		.login-wrapper .login-input {
			display: -webkit-box;
			display: flex;
		}
		.login-wrapper .login-input .ico {
			position: relative;
			margin-left: 10px;
		}
		.login-wrapper .login-input .ico:first-child {
			margin-left: 0;
		}
		.login-wrapper .login-input .ico:before {
			content: "";
			font-family: FontAwesome;
			position: absolute;
			color: #005792;
			width: 30px;
			height: 100%;
			display: -webkit-box;
			display: flex;
			-webkit-align-items: center;
			align-items: center;
			-webkit-justify-content: center;
			justify-content: center;
		}
		.login-wrapper .login-input .ico-user:before {
			content: "\f007";
		}
		.login-wrapper .login-input .ico-pass:before {
			content: "\f023";
		}
		.login-wrapper .login-input .ico:after {
			content: "";
			position: absolute;
			top: 20%;
			left: 30px;
			width: 1px;
			height: 60%;
			background-color: #005792;
		}
		.login-wrapper .login-input input {
			height: 26px;
			width: 200px;
			border: 1px solid #005792;
			border-radius: 30px;
			padding-left: 35px;
			font-size: 12px;
			background: #fff;
		}
		.login-wrapper .login-input input:focus {
			outline: none;
		}
		.login-wrapper .btn-action {
			text-align: right;
		}
		.login-wrapper button {
			margin: 5px 0 0 5px;
			height: 26px;
			line-height: 26px;
			padding: 0 12px;
			color: white;
			-webkit-box-shadow: none;
			box-shadow: none;
			border: 0;
			border-radius: 30px;
			background-color: #005792;
			font-size: 12px;
			font-weight: bold;
			will-change: box-shadow;
			box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
		}
		.login-wrapper .btn-register {
			background-color: #fdb44b;
		}
		.login-wrapper button:hover {
			background-color: #00204a;
			cursor: pointer;
		}
		.login-wrapper .btn-register:hover {
			background-color: #0072bc;
			cursor: pointer;
		}
		#react-root .application--wrap {
			min-height: unset;
		}
		#react-root .application.theme--light {
			background: transparent !important;
			width: 100%;
		}
		#react-root .application--wrap {
			border-top: none !important;
		}
		#react-root .login-wrapper input {
			background-color: #fff;
		}
		#react-root .navigation-drawer{
			height: 100vh !important;
			z-index: 11;
		}
		#react-root .badge__badge {
			font-size: 10px;
			border-radius: 4px;
			height: 16px;
			width: auto;
			padding: 0 4px;
			right: -6px;
			top: -2px;
			min-width: 18px;
			z-index: 10;
		}
		#react-root {
			min-width: 300px;
			width: 100%;
			position: absolute;
			top: 15px;
			right: 15px;
		}
		body #banner__content {
			padding: 0!important;
			height: 66px !important;
		}
		#banner #banner__content .logo {
			position: absolute;
		}
		body #banner .navigation-drawer--fixed {
			position: fixed !important;
		}
		#react-root .btn-toggle .btn__content {
			text-transform: none;
			background: #929292;
			color: #fff;
			font-size: 10px !important;
		}
		#react-root span {
			font-size: 13px;
			color: white;
		}
		#react-root span > i, #react-root .v-icon {
			color: white !important;
		}
		#react-root .login_wrap_app_panel {
			max-width: 100% !important;
		}
		#react-root .btn-toggle .btn--active .btn__content {
			background: #fff;
			color: inherit;
		}
		#react-root .btn-toggle .btn--active .btn__content::before {
			opacity: 0;
		}
		#react-root .theme--light.chip,
		#react-root .theme--light .chip {
			background: transparent !important;
		}
		#react-root .menu__content {
			margin-top: 0;
		}
		#react-root .menu__content .list {
			margin-bottom: 0;
			padding: 0;
		}
		#react-root .menu__content .list>div > .list__tile {
			height: 32px;
			font-size: 13px;
			cursor: pointer;
		}
		#react-root .menu__content .list>div:hover {
			background-color: #eee !important;
		}
		#react-root .menu__content .list>div {
			border-bottom: 1px dashed #ddd;
			display: block;
			padding: 0;
			font-size: 13px;
			height: auto;
			color: rgba(0,0,0,.87);
			position: relative;
		}
		#react-root .chip .avatar {
			margin-right: 2px;
		}
		#react-root .chip .avatar img {
			width: 24px;
			height: 24px;
			margin-right: 0px !important;
		}
		#react-root .list__tile__action {
			min-width: 25px;
		}
		.user-profile-menu-react > div[class*='MuiPopover-paper'] {
			top: 5px !important;
			right: 0 !important;
			left: unset !important;
			position: absolute !important;
		}
		.user-profile-menu-react > div > ul > li {
			border-bottom: 1px dashed #adabab !important;
			padding: 5px 10px !important;
			font-size: 13px !important;
		}
		.user-profile-menu-react > div > ul {
			padding: 0 !important;
		}
		body .page-theme #navigation {
			border-top: 1px solid #ebebeb !important;
		}
		.v-window__container--is-active {
			height: auto !important;
		}
		
		
		.body_login {
			background: url("/o/bancycp-motcua-theme/images/bg-login.jpg") center center no-repeat;
			background-size: cover;
			font-size: 14px;
		}
		.body_login #banner, .body_login #navigation, .body_login .statistics {
			display: none;
		}
		.body_login .theme--light.application {
			background-color: transparent;
		}
		.body_login #login_container {
			max-width: 1300px;
			margin: auto;
			position: relative;
			top: 40%;
			left: 0;
			-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
			padding: 0 15px;
		}
		.body_login .logo {
			display: block;
		}
		.body_login .logo img {
			margin: 0 auto 60px;
			max-width: 100%;
			display: block;
		}
		.body_login nav.primary {
			display: none;
		}
		.body_login nav + div {
			border: 0 !important;
			padding: 0 !important;
		}
		.body_login .container-login {
			background: -moz-linear-gradient(top,  rgba(2,20,44,0.7) 0%, rgba(4,52,117,0) 100%);
			background: -webkit-linear-gradient(top,  rgba(2,20,44,0.7) 0%,rgba(4,52,117,0) 100%);
			background: linear-gradient(to bottom,  rgba(2,20,44,0.7) 0%,rgba(4,52,117,0) 100%);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b302142c', endColorstr='#00043475',GradientType=0 );
			border-radius: 10px;
			padding: 10px 30px;
			max-width: 400px;
			margin: auto;
		}
		.body_login .v-form > div:last-child {
			margin: 0 !important;
		}
		.body_login .v-form > div:nth-child(3) > div:last-child, 
		.body_login .v-form > div:last-child .v-btn:last-child {
			display: none !important;
		}
		.body_login .v-form > div:nth-child(2) {
			margin-bottom: 30px !important;
		}
		.body_login .v-form > div:nth-child(3) {
			float: right;
			width: 50%;
		}
		.body_login .v-form > div:nth-child(4) {
			width: 50%;
		}
		.body_login .v-input__slot {
			border: 1px solid white !important;
			overflow: hidden;
			max-width: 340px;
			margin: 0 auto 5px;
			border-width: 0 0 1px !important;
			background-color: transparent !important;
		}
		.body_login .v-text-field__slot input {
			font-size: 14px;
			color: white !important;
		}
		.body_login .v-input__prepend-inner .v-icon {
			color: white !important;
		}
		.body_login .v-text-field__details {
			display: none;
		}
		.body_login .v-text-field__slot input:-webkit-autofill,
		.body_login .v-text-field__slot input:-webkit-autofill:hover, 
		.body_login .v-text-field__slot input:-webkit-autofill:focus
		.body_login .v-text-field__slot input:-webkit-autofill {
			border:none !important;
			-webkit-text-fill-color: white !important;
			transition: background-color 5000s ease-in-out 0s;
		}
		.body_login .v-text-field__slot input::-webkit-input-placeholder {color: #8dcff4 !important; font-style: italic;}
		.body_login .v-text-field__slot input:-moz-placeholder {color:#8dcff4 !important; opacity: 1; font-style: italic;}
		.body_login .v-text-field__slot input::-moz-placeholder {color: #8dcff4 !important; opacity: 1; font-style: italic;}
		.body_login .v-text-field__slot input:-ms-input-placeholder {color: #8dcff4 !important; font-style: italic;}
		.body_login .header_login + div .primary--text, .body_login .header_login + div .v-input--selection-controls__ripple + i {
			color: white !important;
		}
		.body_login .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
			background-color: transparent !important;
			border: 0 !important;
		}
		.body_login .header_login + div .v-btn {
			width: 160px;
			border-radius: 50px;
			padding: 8px 12px;
			height: 40px;
			color: white !important;
		}
		.body_login .header_login + div .v-btn:first-child {
			background-color: #e00b2d !important;
		}
		.body_login .header_login + div .v-btn:last-child {
			border: 1px solid #e00b2d !important;
			background-color: transparent !important;
		}
		.body_login .header_login + div .v-btn .v-icon {
			color: white !important;
		}
		.body_login .theme--light.v-sheet {
			background-color: transparent !important;
			border: 0 !important;
		}
		.body_login #footer {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
		}
		
		@media screen and (max-width: 767px) {
			.body_login .header_login + div .v-btn {
				width: 45%;
			}
			.body_login #footer {
				position: relative;
			}
		}
		
		
		body .btt, body .bth {
			position: fixed;
			bottom: 100px;
			right: 30px;
			background-color: #0064c7;
			width: 42px;
			height: 42px;
			border-radius: 50%;
			text-align: center;
			line-height: 40px;
			display: none;
			color: white;
			font-size: 24px;
		}
		body .btt.btt-is-visible, body .bth.btt-is-visible {
			display: block;
		}
		body .btt:hover, body .bth:hover {
			background-color: #204b03;
			color: white !important;
		}
		body .bth {
			right: auto;
			left: 30px;
		}
		
		
		<!-- .page-theme .primary--text, .page-theme .status__counter, .page-theme h3, .manual-wrapper .manual-content h2 { -->
			<!-- color: #658a04 !important; -->
		<!-- } -->
		<!-- .page-theme .primary { -->
			<!-- background-color: #658a04 !important; -->
			<!-- border-color: #658a04 !important; -->
		<!-- } -->
		<!-- .background-triangle-big, .background-triangle-small, .manual-wrapper .manual-nav .title span, .page-theme .v-card__title, .page-theme .blue.darken-3 { -->
			<!-- background-color: #204b03 !important; -->
		<!-- } -->
		<!-- .background-triangle-big:before { -->
			<!-- border-top: 26px solid #204b03; -->
		<!-- } -->
		<!-- .background-triangle-small:before { -->
			<!-- border-top: 19px solid #204b03; -->
		<!-- } -->
		<!-- .page-theme .v-icon { -->
			<!-- color: #658a04 !important; -->
		<!-- } -->
		<!-- .page-theme .primary .v-icon, .page-theme .blue.darken-3 .v-icon, .page-theme .background-triangle-small .v-icon { -->
			<!-- color: white !important; -->
		<!-- } -->
		<!-- .manual-wrapper .manual-nav .title span:before { -->
			<!-- border-top: 46px solid #204b03; -->
		<!-- } -->
		<!-- .manual-wrapper .tocify li:hover, .manual-wrapper .tocify .active { -->
			<!-- background-color: #658a04 !important; -->
		<!-- } -->
		
		
		
		html {
			overflow: auto;
		}
		body #wrapper {
			padding: 0 !important;
		}
		body a, body a:hover, body a:focus {
			text-decoration: none;
			color: inherit;
		}
		
		body {
			font-family: 'Open Sans', sans-serif;
			font-size: 14px;
		}
		
		.page-theme #banner {
			background: url("/o/bancycp-motcua-theme/images/bg-header.jpg") left top no-repeat;
			background-size: cover;
			padding-top: 15px;
			padding-bottom: 15px;
		}
		.page-theme #banner .cont {
			max-width: 1300px;
			padding: 0 15px;
			margin: auto;
		}
		.page-theme #banner .mLogo > a {
			display: inline-block;
			position: relative;
			z-index: 100;
		}
		.page-theme #banner img {
			max-width: 100%;
		}
		
		@media screen and (max-width: 767px) {
			.page-theme #banner #react-root {
				display: none;
			}
		}
		body .bootstrap-datetimepicker-widget {
			background-color: white !important;
		}
		
		#navigation {
			background: url("/o/bancycp-motcua-theme/images/bg.jpg") left top repeat-x;
			background-size: auto 100%;
			position: relative;
		}
		#navigation ul {
			list-style: none;
			display: -webkit-box;
			display: flex;
			max-width: 1300px;
			margin: auto;
			padding: 0 15px;
			z-index: 9999;
		}
		#navigation li a {
			display: block;
			padding: 10px 15px;
			color: white;
			text-transform: uppercase;
		}
		#navigation .selected a, #navigation li:hover a {
			font-weight: bold;
		}
		#navigation li > ul, #navigation .nav-toggle {
			display: none;
		}
		#navigation .nav-toggle {
			display: none;
			width: 40px;
			text-align: center;
			line-height: 28px;
			border: 1px solid white;
			border-radius: 4px;
			color: white;
			font-size: 20px;
			font-size: 18px;
			margin: 10px 15px;
		}
		
		@media screen and (max-width: 991px) {
			#navigation .nav-toggle {
				display: inline-block;
			}
			body #navigation > ul {
				display: none;
				width: 100%;
				position: absolute;
				background-color: white;
				left: 0;
				top: 100%;
				border: 1px solid #ccc;
				padding: 0;
				max-height: 200px;
				overflow: auto;
			}
			body #navigation > ul a {
				color: #204b03;
			}
			#navigation .selected a, #navigation li:hover a {
				color: white;
			}
		}
		
		#footer {
			text-align: center;
			background: url("/o/bancycp-motcua-theme/images/bg.jpg") left top repeat-x;
			background-size: auto 100%;
			color: #8dcff4;
			padding: 0 15px;
			position: relative;
		}
		#footer .cont {
			max-width: 1300px;
			margin: auto;
			position: relative;
			padding: 10px 0;
		}
		#footer .divine {
			margin: 0 10px;
		}
		#footer .statistics {
			position: absolute;
			bottom: 100%;
			right: 0;
			padding: 8px 60px;
			background: url("/o/bancycp-motcua-theme/images/bg-statistics.jpg") left top repeat-y;
			background-size: 100% auto;
			border-radius: 120px 120px 0 0;
			color: white;
		}
	</style>
	
	<script type="text/javascript">
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
	</script>
</body>

</html>