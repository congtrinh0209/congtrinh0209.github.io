<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Bộ Quốc phòng</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	
	<link rel="Shortcut Icon" href="${themeDisplay.getPathThemeRoot()}/images/favicon.ico">
	
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap&subset=vietnamese" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<@liferay_util["include"] page=top_head_include />
	
	<base href="/">
	<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet" type="text/css">
	<link type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/chunk-vendors.css?t=123321" rel="stylesheet">
	<link type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/upgrade.css?t=123456789" rel="stylesheet">
	<!-- <link href="${themeDisplay.getPathThemeRoot()}/css/base-style.css?t=8888" rel="stylesheet" type="text/css"> -->
	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=666" rel="stylesheet" type="text/css">

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
	<script src="${themeDisplay.getPathThemeRoot()}/js/date-time-picker.js?t=8888"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/mermaid.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/vgcaplugin.js"></script>
	
	<script>
        window.define = window.__define;
        window.require = window.__require;
        window.__define = undefined;
        window.__require = undefined;
    </script>
</head>

<body class="${css_class} page-theme mBody">

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
			<div class="container">
				<div class="logo-wrapper">
					<a href="/" class="mLogo">
						<img src="${themeDisplay.getPathThemeRoot()}/images/logo.png">
						<span>
							<label>Bộ Quốc Phòng</label>
							Cổng dịch vụ công trực tuyến
						</span>
					</a>		
					<div id="react-root" style="">
						<div id="app_login"></div>
					</div>
					<div class="btns">
						<a href="/web/bo-quoc-phong/register" class="register"><img src="${themeDisplay.getPathThemeRoot()}/images/icon-register.png">Đăng ký</a>
						<a href="/web/bo-quoc-phong/register#/login-dichvucong" class="login"><img src="${themeDisplay.getPathThemeRoot()}/images/icon-login.png">Đăng nhập</a>
					</div>
				</div>
			</div>
		</header>
		
		<div class="nav-wrapper">
			<div class="container">
				<#if has_navigation && is_setup_complete>
					<#include "${full_templates_path}/navigation.ftl" />
				</#if>
			</div>
		</div>

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
			<div class="container">
				<p class="copyright">© Bản quyền thuộc về Bộ Quốc Phòng</p>
				<p class="address"><img src="${themeDisplay.getPathThemeRoot()}/images/icon-footer-1.jpg">Địa chỉ: Số 1B, Nguyễn Tri Phương, quận Ba Đình, thành phố Hà Nội</p>
				<!--<div class="contact">-->
					<p class="phone"><img src="${themeDisplay.getPathThemeRoot()}/images/icon-footer-2.jpg">Điện thoại: 069.553215</p>
					<p class="mail"><img src="${themeDisplay.getPathThemeRoot()}/images/icon-footer-3.jpg">Thư điện tử: info@mod.gov.vn</p>
				<!--</div>-->
			</div>
		</footer>
	</div>
	
	<a href="" class="btt"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
	<a href="/web/bo-quoc-phong" class="bth"><i class="fa fa-home" aria-hidden="true"></i></a>
		
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
		
			$(".header_login .logo > img").attr("src","o/bo-quocphong-theme/images/logo-login.png");
			
			//$(".body_login .header_login + div").append("<div class='temp-footer'><p>Địa chỉ: Số 1B, Nguyễn Tri Phương, quận Ba Đình, thành phố Hà Nội</p><p>Điện thoại: 069.553215</p><p>Thư điện tử: info@mod.gov.vn</p></div>");
			
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
		
		
		window.PDFJS.workerSrc = '${themeDisplay.getPathThemeRoot()}/js/pdf.worker.js?t=9991';
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
	</script>
	
	<style>
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
			position: relative;
		}
		#react-root .login_wrap_app_panel .v-btn {
			background-color: white;
			width: 31px;
			height: 30px;
			margin-right: 10px !important;
		}
		#react-root .login_wrap_app_panel .v-btn i {
			color: #1573bb !important;
		}
		#react-root .login_wrap_app_panel .v-badge__badge {
			background-color: #ff8400 !important;
			border: 1px solid white !important;
			border-radius: 50% !important;
			width: 18px !important;
			top: -10px !important;
			right: -20px !important;
			padding: 0 !important;
		}
		#react-root .login_wrap_app_panel .v-badge__badge span {
			font-size: 11px !important;
			height: auto !important;
			line-height: 16px;
		}
		#react-root .v-avatar {
			background: url('/o/bo-quocphong-theme/images/bg-avatar.png') center center no-repeat !important;
			background-size: contain !important;
		}
		#react-root .v-avatar span {
			display: none;
		}
		#react-root .login_wrap_app_panel .v-list__tile {
			height: auto;
		}
		#react-root .login_wrap_app_panel > div > div:last-child {
			left: auto !important;
			right: 0;
			top: 110% !important;
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
			/*text-shadow: -1px -1px 0 #000, 
	             1px -1px 0 #000, 
	             -1px 1px 0 #000,  
	             1px 1px 0 #000;*/
		}
		#react-root span > i, #react-root .v-btn__content > .v-icon {
			color: white !important;
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
			background: url("/o/bo-quocphong-theme/images/bg-login.jpg") center center no-repeat;
			background-size: cover;
			min-height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		body.body_login * {
			font-size: 14px;
		}
		.body_login .application--wrap {
			min-height: inherit;
		}
		.body_login #banner, .body_login .nav-wrapper, .body_login #footer {
			display: none;
		}
		.body_login .theme--light.application {
			background-color: transparent;
		}
		.body_login #login_container {
			max-width: 600px;
			margin: auto;
			position: relative;
			padding: 45px 75px 75px;
			display: flex;
			flex-wrap: wrap;
			border-radius: 10px;
			box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
			background-color: white;
		}
		.body_login .logo img {
			margin-bottom: 30px;
			max-width: 100%;
		}
		.body_login nav.primary {
			display: none;
		}
		.body_login nav + div {
			border: 0 !important;
			padding: 0 !important;
		}
		.body_login .v-input__slot {
			border: 1px solid #b9b9b9 !important;
			border-radius: 4px !important;
			overflow: hidden;
			background-color: transparent !important;
			margin: 0 auto 25px;
			padding: 0 !important;
		}
		.body_login .v-text-field__slot input {
			font-size: 14px;
			margin: 0 !important;
			height: 44px;
			max-height: inherit;
			padding: 0 15px;
		}
		.body_login .v-input__slot > .v-input__prepend-inner, .body_login .v-input__slot:after {
			display: none;
		}
		.body_login .v-text-field__slot .v-icon {
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
			/*-webkit-text-fill-color: white !important;*/
			transition: background-color 5000s ease-in-out 0s;
		}
		.body_login .v-text-field__slot input::-webkit-input-placeholder {color: #757575 !important;}
		.body_login .v-text-field__slot input:-moz-placeholder {color:#757575 !important; opacity: 1;}
		.body_login .v-text-field__slot input::-moz-placeholder {color: #757575 !important; opacity: 1;}
		.body_login .v-text-field__slot input:-ms-input-placeholder {color: #757575 !important;}
		/*.body_login .header_login + div .primary--text, .body_login .header_login + div .v-icon, .body_login .header_login + div .v-input--selection-controls__ripple + i {
			color: white !important;
		}*/
		.body_login .v-form > div:nth-child(3) {
			margin: 0 auto 30px	!important;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.body_login .v-form > div:nth-child(3) * {
			font-size: 16px;
			white-space: nowrap;
		}
		.body_login .v-form > div:nth-child(3) > div:last-child {
			padding: 0;
			max-width: inherit !important;
			flex: 0 0 auto;
		}
		.body_login .v-form > div:nth-child(3) > div:last-child .primary--text {
			color: #0058c9 !important;
			boder-bottom: 1px solid #0058c9;
		}
		.body_login .v-form > div:nth-child(3) .v-input--selection-controls__input {
			margin: 0;
		}
		.body_login .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
			background-color: transparent !important;
			border: 0 !important;
			margin: 0;
		}
		.body_login .header_login {
			text-align: center;
			width: 100%;
		}
		.body_login .header_login ~ div {
			flex: 1 1 auto;
		}
		.body_login #login_container > div:nth-child(2) {
			background: url("/o/bo-tttt-theme/images/bg-login-1.jpg") center center no-repeat;
			background-size: cover;
			border-radius: 8px 0 0 8px;
			padding: 0;
			margin-top: 0 !important;
			max-width: 480px !important;
		}		
		.body_login #login_container > div:nth-child(3) {
			width: 100%;
			text-align: center;
			color: #ef9c00;
		}
		.body_login #login_container > div:nth-child(3) p:not(:last-child) {
			margin-bottom: 5px;
		}
		.body_login #login_container > div:nth-child(3) p:last-child {
			font-style: italic;
			color: white;
			margin: 10px 0 0;
		}
		.body_login #login_container .v-form > div:last-child {
			display: flex;
			flex-wrap: wrap;
		}
		.body_login .header_login + div .v-btn {
			border-radius: 6px;
			padding: 10px 15px;
			height: 42px;
			text-transform: uppercase;
			font-weight: bold;
		}
		.body_login .header_login + div .v-btn .v-icon {
			font-size: 24px;
		}
		.body_login .header_login + div .v-btn:nth-child(1) {
			order: 2;
			font-size: 20px;
			background-color: #0392d9 !important;
			color: white;
			flex: 1 1 calc((100% - 30px) / 2);
			margin: 0 0 0 30px !important;
		}
		.body_login .header_login + div .v-btn:nth-child(2) {
			order: 1;
			font-size: 20px;
			background-color: #e8edef !important;
			color: #8c8f90 !important;
			border: 1px solid #8c8f90 !important;
			flex: 1 1 calc((100% - 30px) / 2);
			margin: 0 !important;
		}
		.body_login .header_login + div .v-btn:nth-child(1) .v-icon {
			color: white !important;
		}
		.body_login .header_login + div .v-btn:last-child {
			color: #0058c9 !important;
			border-bottom: 1px solid #0058c9 !important;
			margin: 50px auto 0 !important;
			padding: 2px 0 !important;
			border-radius: 0 !important;
			height: auto;
			background-color: transparent !important;
			order: 3;
			text-transform: normal;
			font-weight: normal;
		}
		.body_login .theme--light.v-sheet {
			background-color: transparent !important;
			border: 0 !important;
		}
		.body_login .temp-footer {
			color: white;
			margin-top: 90px;
			text-align: center;
		}
		.body_login .temp-footer .copyright {
			font-weight: bold;
			text-transform: uppercase;
		}
		.body_login .temp-footer .mail {
			margin-left: 30px;
		}
		.body_login .fogot-pass .v-input__slot {
			max-width: 100%;
			margin-bottom: 15px;
		}
		.body_login .v-form > div:nth-child(3) {
			max-width: 100%;
		}
		.body_login .fogot-pass .v-text-field__slot input {
			border-bottom: 1px solid white;
		}
		.body_login .forgot-pass-wrapper {
			display: block;
		}
		.body_login .forgot-pass-wrapper .header_login {
			margin-top: 10%;
		}
		.body_login .forgot-pass-wrapper main form {
			background: url("/o/bo-tttt-theme/images/bg-forgot-pass.png") center center no-repeat;
			background-size: cover;
			padding: 30px !important;
			border-radius: 20px !important;
		}
		.body_login .forgot-pass-wrapper main form > div:nth-child(3) > div > div:first-child {
			background-color: transparent !important;
			justify-content: flex-start !important;
		}
		.body_login .forgot-pass-wrapper .header_login + div .v-btn:last-child {
			display: inline-block;
		}
		.body_login .forgot-pass-wrapper p {
			text-align: center;
			color: white;
		}
		.body_login .forgot-pass-wrapper img + button {
			border: 0 !important;
			background-color: transparent !important;
			width: auto !important;
			height: auto !important;
			padding: 0 !important;
			min-width: inherit !important;
		}
		#react-root .login_wrap_app_panel > div > div:last-child {
			left: auto !important;
			right: 0;
			top: 110% !important;
		}

		@media screen and (max-width: 1366px) {
			.body_login #login_container {
				padding: 30px 15px 15px; 
			}
			.body_login .logo img {
				margin-bottom: 0;
			}
		}
		
		@media screen and (max-width: 767px) {
			.body_login {
				border-radius: 0;
				/*background: url("/o/bo-quocphong-theme/images/bg-form-login.png") center center no-repeat;*/
				background: rgb(95,5,5);
				background: -moz-linear-gradient(top,  rgba(95,5,5,1) 0%, rgba(198,2,2,1) 100%);
				background: -webkit-linear-gradient(top,  rgba(95,5,5,1) 0%,rgba(198,2,2,1) 100%);
				background: linear-gradient(to bottom,  rgba(95,5,5,1) 0%,rgba(198,2,2,1) 100%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5f0505', endColorstr='#c60202',GradientType=0 );
			}
			.body_login #login_container {
				background: transparent none;
				padding: 15px;
				box-shadow: none;
			}
			.body_login #login_container > div:nth-child(2) {
				padding: 30px 0;
			}
			.body_login #login_container > div:nth-child(3) p:not(:last-child) {
				font-size: 13px;
			}
		}
		
		
		.timeline-item {
			padding-bottom: 5px;
			padding-left: 40px;
			padding-top: 5px;
			position: relative;
		}	
		
		
		.background-triangle-big, .background-triangle-small {
			background-color: #0072bc !important;
		}
		.background-triangle-big:before {
			border-top: 26px solid #0072bc;
		}
		.background-triangle-small:before {
			border-top: 19px solid #0072bc;
		}
		
		
		.application--wrap > aside {
			background-color: #f0f4f7 !important;
		}
		body .v-list__tile, body .v-list__group__items--no-action .v-list__tile {
			height: 50px;
		}
		body .v-list__tile__title {
		    font-size: 14px;
			text-transform: uppercase;
			font-weight: normal;
			height: 50px;
			line-height: 50px;
		}
		.application--wrap > aside .v-icon {
			color: #067ccd !important;
			font-size: 24px !important;
		}
		.application--wrap > aside .v-list__group {
			border-bottom: 1px solid #cdd0d2;
		}
		.application--wrap > aside .status__counter {
			background-color: #b7e7f8;
			color: #1c57ab;
			border-radius: 6px;
			height: 25px;
			line-height: 23px;
			font-size: 14px;
			right: 15px;
		}
		.application--wrap table tr:nth-child(odd) {
			background-color: #f3f6f8;
		}
		
		
		/*.page-theme .primary--text, .page-theme .status__counter, .page-theme h3, .manual-wrapper .manual-content h2 {
			color: #ca0202 !important;
		}
		.page-theme .primary {
			background-color: #ca0202 !important;
			border-color: #ca0202 !important;
		}
		.background-triangle-big, .background-triangle-small, .manual-wrapper .manual-nav .title span, .page-theme .v-card__title, .page-theme .blue.darken-3 {
			background-color: #ca0202 !important;
		}
		.background-triangle-big:before {
			border-top: 26px solid #ca0202;
		}
		.background-triangle-small:before {
			border-top: 19px solid #ca0202;
		}
		.page-theme .v-icon {
			color: #ca0202 !important;
		}
		.page-theme .primary .v-icon, .page-theme .blue.darken-3 .v-icon, .page-theme .background-triangle-small .v-icon {
			color: white !important;
		}
		.manual-wrapper .manual-nav .title span:before {
			border-top: 46px solid #ca0202;
		}
		.manual-wrapper .tocify li:hover, .manual-wrapper .tocify .active {
			background-color: #ca0202 !important;
		}*/
		
		body.page-theme .deactive__btn {
			background-color: #0d7535 !important;
		}		
		body.page-theme .on-hover-btn:hover {
			background-color: #f00 !important;
		}
		.body_login .v-dialog .theme--light.v-sheet {
			background-color: white !important;
		}
		
		#mermaid_dossier #theGraph {
			height: 350px !important;
			min-height: 350px !important;
		}
		
		.row-header .background-triangle-big {
			background-color: white !important;
			color: #0072bc;
			font-weight: bold;
			padding-left: 25px;
		}
		.row-header .background-triangle-big:before {
			border-width: 8px 0 8px 8px;
			left: 5px;
			right: auto;
			top: 15px;
		}
		.row-header {
			background-color: white;
		}
		.row-header .header_tools input {
			border-bottom: 1px solid #ddd;
			max-width: 400px;
			margin-left: auto;
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