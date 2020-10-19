<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>${site_title}</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	
	<link rel="Shortcut Icon" href="${themeDisplay.getPathThemeRoot()}/images/favicon.ico">

	<@liferay_util["include"] page=top_head_include />
	
	<base href="/">
	<!--<link href="${themeDisplay.getPathThemeRoot()}/css/base-style.css?t=8888" rel="stylesheet" type="text/css">-->
	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=8888" rel="stylesheet" type="text/css">
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
	<script src="${themeDisplay.getPathThemeRoot()}/js/select2-full.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery-comments.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery.textcomplete.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/svg-pan-zoom.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/date-time-picker.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/mermaid.js"></script>
	<!--<script src="https://sp.zalo.me/plugins/sdk.js"></script>-->
	
	<script>
        window.define = window.__define;
        window.require = window.__require;
        window.__define = undefined;
        window.__require = undefined;
    </script>
	
	<script>${tracking_script}</script>
</head>

<body class="${css_class} mBody page-theme">

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

	<div class="" id="wrapper" style="overflow: hidden;">
		<header id="banner">
			<div class="container">
				<a href="${site_default_url}" class="mLogo"> 
					<img src="${themeDisplay.getPathThemeRoot()}/images/${logo_img}">
				</a>
				<div id="react-root" style="">
					<div id="app_login"></div>
				</div>
				<a href="/web/cong-dich-vu-cong-bo-ngoai-giao/dang-ky#/login-dichvucong" class="btn-banner btn-login-motcua">Đăng nhập</a>
				<a href="/web/cong-dich-vu-cong-bo-ngoai-giao/dang-ky#/login-dichvucong" class="btn-banner btn-login-dvc">Đăng nhập</a>
				<a href="/web/cong-dich-vu-cong-bo-ngoai-giao/dang-ky" class="btn-banner btn-register-dvc">Đăng ký</a>
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
			<div class="container">
				<label class="copyright">Bản quyền của Bộ Ngoại giao Việt Nam</label>
				<p><b>Địa chỉ:</b> 40 Trần Phú, Ba Đình, Hà Nội</p>
				<p><b>Điện thoại:</b> (+84 4) 3.7993125 - <b>Fax:</b> (+84 4) 3.8236928</p>
				<p><b>Email:</b>  bpmc@mofa.gov.vn</p>
				<div class="developed">Phát triển trên nền OpenCPS</div>
			</div>
		</footer>
	</div>
	
	<a href="" class="btt"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
	<a href="https://dichvucong.mofa.gov.vn" class="bth"><i class="fa fa-home" aria-hidden="true"></i></a>
		
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
			
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= 76) {
					$("#navigation").addClass("nav-fixed-top");
				} else {
					$("#navigation").removeClass("nav-fixed-top");
				}
			});
		
			$(".header_login .logo > img").attr("src","o/bongoaigiao-theme/images/logo-login-dvc.png");
			
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

		var loginDvcqg = function () {
			event.preventDefault();
		    $.ajaxSetup({
		    headers: {
		      'groupId': window.themeDisplay.getScopeGroupId(),
		      'Token': window.Liferay.authToken
		    }
		  });
		  $.get('/o/rest/v2/dvcqgsso/authurl',{state: "",redirectURL: "https://dichvucong.haugiang.gov.vn/web/cong-dich-vu-cong-tinh-hau-giang"})
		  .done(function(data) {    
		        window.location.href = data
		  })
		  .error(function (){
		    alert("Chức năng đang cập nhật. Thử lại sau")
		  })
		}
		
		
		window.PDFJS.workerSrc = '${themeDisplay.getPathThemeRoot()}/js/pdf.worker.js?t=9991';
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
	</script>
	
	<style>
		.deactive__btn.primary {
			background-color: #fb8c00 !important;
		}
		body .status__counter {
			top: 7px;
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
		#react-root {
			min-width: 300px;
			position: absolute;
			top: 5px;
			right: 15px;
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
			background: url("/o/bongoaigiao-theme/images/bg_login.jpg") center center no-repeat;
			background-size: cover;
		}
		.body_login #banner, .body_login .navbar-container, .body_login .footer_login, .body_login .text-logo, .body_login #navigation {
			display: none !important;
		}
		.body_login .theme--light.application {
			background-color: transparent !important;
		}
		.body_login .application--wrap {
			min-height: inherit !important;
		}
		body.body_login #content {
			min-height: -webkit-calc(100vh - 142px);
			min-height: calc(100vh - 142px);
		}
		.body_login .logo img {
			margin-bottom: 0;
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
		.body_login .theme--dark + div form > div:nth-child(-n+2) .v-input__slot {
			background-color: #d0d0d0 !important;
		}
		.body_login .theme--dark + div form > div:nth-child(-n+2) .v-input--is-focused .v-input__slot {
			background-color: white !important;
		}
		.body_login .theme--dark + div form > div:nth-child(-n+2) .v-input--is-focused .v-input__icon i {
			color: #0b72ba !important;
		}
		.body_login .theme--dark + div form > div:nth-child(-n+2) .v-input__slot input {
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
				top: 49%;
			}
		}

		@media screen and (min-width: 992px) {
			body #navigation ul {
				padding-left: 0;
				padding-right: 0;
			}
		}
		
		.modal-cps-body {
			overflow: hidden;
			clear: both;
		}



		body.signed-out #react-root, .dvc-theme .btn-login-motcua, .motcua-theme .btn-login-dvc, .motcua-theme .btn-register-dvc, body.signed-in .btn-banner {
			display: none !important;
		}
		.btn-banner {
			padding: 10px 15px;
			float: right;
			color: #036edb;
			border: 1px solid #036edb;
			border-radius: 4px;
			font-weight: bold;
			display: inline-block;
			position: absolute;
		    right: 0;
		    top: 50%;
		    transform: translateY(-50%);
		}
		.btn-banner:hover {
			background-color: #036edb;
			cursor: pointer;
			color: white;
		}
		.btn-login-dvc {
			right: 100px;
			background-color: #036edb;			
			color: white;
		}
		@media screen and (max-width: 767px) {
			.btn-banner {
				display: none !important;
			}
		}
		
		
		.log-reg {
			display: none;
			width: 100%;
			padding: 3px 75px 0 15px;
			margin: 0;
			z-index: 5;
		}
		.log-reg a {
			display: block;
			padding: 6px 12px;
			color: #036edb;
			border: 1px solid #036edb;
			width: 100%;
			text-align: center;
		}
		.log-reg a:first-child {
			margin-right: 15px;
			background-color: #036edb;
			color: white;
		}
		@media screen and (max-width: 767px) {
			.log-reg {
				display: flex;
			}
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