<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Bộ Kế hoạch và Đầu tư</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	
	<link rel="Shortcut Icon" href="${themeDisplay.getPathThemeRoot()}/images/favicon.ico">
	
	<link href="https://fonts.googleapis.com/css?family=Oswald:400,500,700|Roboto:300,400,500,700&amp;subset=vietnamese" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<@liferay_util["include"] page=top_head_include />
	
	<base href="/">
	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=9999" rel="stylesheet" type="text/css">
	<link href="${themeDisplay.getPathThemeRoot()}/css/bootstrap-glyphicons.css" rel="stylesheet" type="text/css">
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
	<script src="${themeDisplay.getPathThemeRoot()}/js/date-time-picker.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/mermaid.js"></script>
	
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
			<div class="container" style="position: relative;">
				<a href="${site_default_url}" class="mLogo">
					<img src="${themeDisplay.getPathThemeRoot()}/images/logo.png" class="">
					<div class="text-logo">
						Cổng dịch vụ công trực tuyến và một cửa điện tử
						<span>Bộ kế hoạch và đầu tư</span>
					</div>
				</a>
				
				<div id="react-root" style="width: 200px;height: 90px; position: absolute; right: 15px; top: -15px;">
					<div id="app_login"></div>
				</div>
			</div>
		</header>
		
		<div class="navbar-container">
			<#if has_navigation && is_setup_complete>
				<#include "${full_templates_path}/navigation.ftl" />
			</#if>
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
				<p class="site-name">
					CỔNG DỊCH VỤ CÔNG TRỰC TUYẾN và một cửa điện tử
					<span>Bộ kế hoạch và đầu tư</span>
				</p>
				<p class="info-wrapper">
					<span><i class="fa fa-map-marker" style="font-size: 16px;"></i> 6B Hoàng Diệu, Ba Đình, Hà Nội</span>
					<span><i class="fa fa-mobile" style="font-size: 18px;"></i> 08.043.109 - Fax: 024.38234453</span>
					<span><i class="fa fa-envelope-o"></i> motcua@mpi.gov.vn</span>
				</p>
				<div class="copyright">
					<span>Phát triển trên nền <b>OpenCPS</b></span>
				</div>
			</div>
		</footer>
	</div>
	
	<a href="" class="btt"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
	<a href="/web/cong-dvc-bkhdt" class="bth"><i class="fa fa-home" aria-hidden="true"></i></a>
		
		
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
	
	<script>
		$(document).ready(function() {
			$("#navigation .nav-toggle").on('click', function(e) {
				e.preventDefault();
				$(this).next().slideToggle();
			});
			
			<!-- //Back to top -->
			var offset = 300,
				scroll_top_duration = 600;
				$back_to_top = $('.btt');
				$back_to_home = $('.bth');
				
			$(window).scroll(function(){
				( $(this).scrollTop() > offset ) ? $back_to_top.addClass('btt-is-visible') : $back_to_top.removeClass('btt-is-visible');
				( $(this).scrollTop() > offset ) ? $back_to_home.addClass('btt-is-visible') : $back_to_home.removeClass('btt-is-visible');
			});
			<!-- //Smooth scroll to top -->
			$back_to_top.on('click', function(event){
				event.preventDefault();
				$('body,html').animate({
					scrollTop: 0 ,
					}, scroll_top_duration
				);
			});
		});
	</script>

	<script type="text/javascript">
		window.PDFJS.workerSrc = '${themeDisplay.getPathThemeRoot()}/js/pdf.worker.js?t=9991';
			$.ajaxSetup({
				headers: {"Token": Liferay.authToken},
				global: true
			});
	</script>

	<@liferay_util["include"] page=body_bottom_include />
	<@liferay_util["include"] page=bottom_include />
	
	<script type="text/javascript">
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
		
		$(".header_login .logo > img").attr("src","o/bokhdt-theme/images/logo2.png");
	</script>
	
	<style>
		body #reAssign {
			display: none;
		}
		body .status__counter {
			top: 7px;
		}
		.navbar-container {
			background-color: #1270be;
		}
		.navbar-container > nav {
			max-width: 1300px;
			padding: 0 15px;
			margin: auto;
		}
		.navbar-container > #navigation ul li.selected a, .navbar-container > #navigation ul li:hover a {
			border-radius: 0;
		}
		body #navigation {
			z-index: 10;
		}
		body.page-theme #app_serviceinfo .v-navigation-drawer .v-tabs__item {
			border-bottom: 1px solid #02acdb;
		}
		body #app_serviceinfo .v-tabs__slider-wrapper {
			display: none;
		}
		body .vue-go-top {
			background-color: #02acdb !important;
		}
		.signed-out #react-root {
			display: none;
		}
		#portlet_npmreactlogin {
			position: absolute;
			right: 15px;
			top: 25px;
		}
		#navigation ul.child-menu {
			display: none;
		}
		#wrapper {
			padding-top: 0 !important;
		}
		body #react-root > div > div {
			width: auto !important;
			float: right;
		}
		.hidden__temp {
			opacity: 0;
		}
		#react-root .navigation-drawer--right>.navigation-drawer__border {
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			background-image: url(http://hanhchinhcong.phutho.gov.vn/o/parent-opencps-vue/images/bg-home.jpg);
			background-size: cover;
			-webkit-filter: blur(200px);
			z-index: -1;
			filter: blur(200px);
		}
		#react-root .navigation-drawer .list {
			background: transparent;
		}
		#react-root .navigation-drawer>.list .list__tile:hover {
			background: transparent !important;
		}
		#react-root .btn-toggle--selected {
			box-shadow: none !important;
		}
		#react-root .theme--light .v-divider {
			border-color: #eee;
		}
		#react-root .theme--light .v-list__tile__content {
			height: 30px;
		}
		#react-root .navigation-drawer>.list .list__tile {
				height: 42px;
				padding: 0 16px !important;
		}
		#react-root .theme--light .btn-toggle {
				width: 100%;
			background: #fff;
			border-radius: 4px;
			height: 20px;
		}
		#react-root .theme--light .btn-toggle .btn {
				height: 20px;
				opacity: 1;
			font-size: 10px;
		}
		#react-root .theme--light .v-list__tile__title {
				font-size: 24px;
			padding-left: 10px;
			color: #383838;
		}
		#react-root .theme--light .btn--small {
			height: 18px !important;
			width: 18px !important;
		}
		body #react-root  .v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close), 
		body #react-root .v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
			-webkit-box-shadow: 0 1px 3px -1px rgba(0,0,0,.2), 1px 1px 5px -5px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
			box-shadow: 0 1px 3px -1px rgba(0,0,0,.2), 1px 1px 5px -5px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
		}
		#react-root .overlay--absolute {
			opacity: 0;
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
			margin-top: 10px;
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
		#react-root .btn-toggle .btn--active .btn__content {
			background: #fff;
			color: inherit;
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
		.v-window__container--is-active {
			height: auto !important;
		}
		.login_wrap_app_panel {
			max-width: 100% !important;
			display: flex;
			align-items: center;
		}
		
		.body_login {
			background: url("/o/bokhdt-theme/images/bg_login.jpg") center center no-repeat;
			background-size: cover;
		}
		.body_login #navigation {
			display: none;
		}
		.body_login #footer {
			background: none transparent;
			padding-bottom: 15px;
		}
		.body_login #login_container > div {
			background-color: rgba(0,0,0,0.3);
		}
		.body_login #login_container .primary--text, .body_login #login_container .v-input--selection-controls__input .v-icon {
			color: white !important;
		}
		.body_login .theme--light.application {
			background-color: transparent !important;
		}
		.body_login .application--wrap {
			min-height: inherit !important;
		}
		body.body_login #content {
			min-height: -webkit-calc(100vh - 195px);
			min-height: calc(100vh - 195px);
		}
		.body_login .logo img {
			margin-bottom: 60px;
		}
		.body_login .v-content__wrap {
			position: fixed;
			width: 100%;
			left: 0;
			top: calc(50% - 100px);
			transform: translateY(-50%);
		}
		.body_login .header_login + div	{
			background-color: rgba(0,44,70,0.7);
			max-width: 450px !important;
		}
		.body_login.signed-in .header_login + div .theme--light.v-sheet	{
			background-color: transparent;
			border: 0 !important;
		}
		.body_login .header_login + div * {
			color: white !important;
		}
		.body_login .theme--dark + div {
			border: 0 !important;
		}
		.body_login .theme--dark + div form > div:nth-child(-n+2) .v-input__slot, 
		.body_login .theme--dark + div form > div:nth-child(5) .v-input__slot {
			background-color: #d0d0d0 !important;
		}
		.body_login .theme--dark + div form > div:nth-child(-n+2) .v-input--is-focused .v-input__slot, 
		.body_login .theme--dark + div form > div:nth-child(5) .v-input--is-focused .v-input__slot {
			background-color: white !important;
		}
		.body_login #login_container .theme--dark + div form > div:nth-child(-n+2) .v-input--is-focused .v-input__icon .v-icon {
			color: #0b72ba !important;
		}
		.body_login .theme--dark + div form > div:nth-child(-n+2) .v-input__slot input, 
		.body_login .theme--dark + div form > div:nth-child(5) .v-input__slot input {
			color: #2a2a2a !important;
		}	
		.body_login .theme--dark + div button:first-child {
			background-color: #f26522;
		}
		.body_login .theme--dark + div button:last-child {
			background-color: #00aeef;
		}

		@media screen and (max-width: 1599px) {
			.body_login .v-content__wrap {
				top: 45%;
			}
		}
		
		
		
		body .btt, body .bth {
			position: fixed;
			bottom: 100px;
			right: 30px;
			background-color: #1c6ac6;
			width: 42px;
			height: 42px;
			border-radius: 50%;
			text-align: center;
			line-height: 40px;
			display: none;
			color: white;
			font-size: 24px;
			z-index: 9999;
		}
		body .btt.btt-is-visible, body .bth.btt-is-visible {
			display: block;
		}
		body .btt:hover, body .bth:hover {
			background-color: #082d86;
			color: white !important;
		}
		body .bth {
			right: auto;
			left: 30px;
		}
		
		
		
		#navigation .nav-toggle {
			display: none;
		}
		
		@media screen and (max-width: 767px) {
			body #banner .mLogo .text-logo {
				font-size: 14px;
			}
			body #banner .mLogo .text-logo span {
				margin-top: 5px;
				font-size: 18px;
			}
			body #footer {
				padding-bottom: 60px;
			}
			body #footer .info-wrapper {
				margin: 15px 0;
			}
			#navigation .nav-toggle {
				display: inline-block;
				color: white;
				border: 1px solid white;
				padding: 3px 10px;
				margin: 8px 0;
				border-radius: 4px;
			}
			body #navigation > ul {
				display: none;
				margin: 0 -15px;
				border-top: 1px solid white;
			}
			body #navigation > ul li {
				float: none;
				width: 100%;
			}
		}
		
		.v-tabs .v-btn:hover {
			background-color: orange !important;
		}
	</style>
</body>

</html>