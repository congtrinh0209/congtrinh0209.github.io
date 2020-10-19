<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Cổng Dịch vụ công trực tuyến Tỉnh Đồng Tháp</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	
	<link rel="Shortcut Icon" href="${themeDisplay.getPathThemeRoot()}/images/favicon.ico">
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap&subset=vietnamese" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="${themeDisplay.getPathThemeRoot()}/css/font-awesome.min.css">

	<@liferay_util["include"] page=top_head_include />
	
	<base href="/">
	<link href="${themeDisplay.getPathThemeRoot()}/css/base-style.css?t=8888" rel="stylesheet" type="text/css">
	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=8888" rel="stylesheet" type="text/css">
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
	
	<script>
        window.define = window.__define;
        window.require = window.__require;
        window.__define = undefined;
        window.__require = undefined;
    </script>
	
	<!-- Begin Gov Tracking Code -->
	<script type="text/javascript">
		var _govaq = window._govaq || [];
	_govaq.push(['trackPageView']);
	_govaq.push(['enableLinkTracking']);
	(function () {
		_govaq.push(['setTrackerUrl', 'http://f-emc.ngsp.gov.vn/tracking']);
		_govaq.push(['setSiteId', '33']);
		var d = document,
			g = d.createElement('script'),
			s = d.getElementsByTagName('script')[0];
		g.type = 'text/javascript';
		g.async = true;
		g.defer = true;
		g.src = 'http://f-emc.ngsp.gov.vn/embed/gov-tracking.min.js';
		s.parentNode.insertBefore(g, s);
	})();
	</script>
	<!-- End Gov Tracking Code -->
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
			<!--<div class="statistics">Đang online: <span class="online">3</span> / <span class="total">122</span></div>-->
			<p class="owner">Đơn vị quản lý: <b>ỦY BAN NHÂN DÂN TỈNH ĐỒNG THÁP</b></p>
			<p class="info">
				<span>Địa chỉ: Số 12, đường 30/4, phường 1, thành phố Cao Lãnh, tỉnh Đồng Tháp</span>
				<span class="hid">|</span>
				<span>Hỗ trợ sử dụng phần mềm: 024.668.22443</span>
				<span class="hid">|</span>
				<span>Email: motcuadichvucong@gmail.com</span>
			</p>
			<p>Hỗ trợ và tiếp nhận phản ánh kiến nghị về giải quyết thủ tục hành chính: (0277) 3 851 149</p>
		</footer>
		
	</div>
	
	<a href="" class="btt"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
	<!--<a href="/web/cong-dich-vu-cong-tinh-dong-thap" class="bth"><i class="fa fa-home" aria-hidden="true"></i></a>-->
		
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
			$(".header_login .logo > img").attr("src","o/tinhdongthap-theme/images/logo-login.png");
		});
		
		
		window.PDFJS.workerSrc = '${themeDisplay.getPathThemeRoot()}/js/pdf.worker.js?t=9991';
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
	</script>
	
	<style>
		.body_login {
			background: url("/o/tinhdongthap-theme/images/bg-login.jpg") center center no-repeat;
			background-size: cover;
			font-size: 14px;
		}
		.body_login #banner, .body_login #navigation {
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
		.body_login .logo img {
			margin-bottom: 0;
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
			border: 1px solid #243e04 !important;
			border-radius: 4px !important;
			overflow: hidden;
			background-color: white !important;
			max-width: 340px;
			margin: 0 auto 5px;
		}
		.body_login .v-text-field__slot input {
			font-size: 14px;
		}
		.body_login .v-text-field__slot .v-icon {
			color: #243e04 !important;
		}
		.body_login .v-text-field__details {
			display: none;
		}
		.body_login .v-text-field__slot input:-webkit-autofill,
		.body_login .v-text-field__slot input:-webkit-autofill:hover, 
		.body_login .v-text-field__slot input:-webkit-autofill:focus
		.body_login .v-text-field__slot input:-webkit-autofill {
			border:none !important;
			-webkit-text-fill-color: inherit !important;
			transition: background-color 5000s ease-in-out 0s;
		}
		.body_login .v-text-field__slot input::-webkit-input-placeholder {color: #939393 !important; font-style: italic;}
		.body_login .v-text-field__slot input:-moz-placeholder {color:#939393 !important; opacity: 1; font-style: italic;}
		.body_login .v-text-field__slot input::-moz-placeholder {color: #939393 !important; opacity: 1; font-style: italic;}
		.body_login .v-text-field__slot input:-ms-input-placeholder {color: #939393 !important; font-style: italic;}
		.body_login .header_login + div .primary--text, .body_login .header_login + div .v-input--selection-controls__ripple + i {
			color: white !important;
		}
		.body_login .v-form > div:nth-child(3) {
			max-width: 340px;
			margin: auto !important;
		}
		.body_login .v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
			background-color: transparent !important;
			border: 0 !important;
		}
		.body_login .header_login + div .v-btn {
			width: 160px;
			border-radius: 4px;
			padding: 8px 12px;
			height: 40px;
			color: #f8f400 !important;
		}
		.body_login .header_login + div .v-btn:first-child {
			background: url("/o/tinhdongthap-theme/images/bg-btn2.jpg") left center repeat-x !important;
			background-size: auto 100% !important;
		}
		.body_login .header_login + div .v-btn:last-child {
			border: 1px solid #f8f400 !important;
			background-color: transparent !important;
		}
		.body_login .header_login + div .v-btn .v-icon {
			color: #f8f400 !important;
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
	</style>
	
	<script type="text/javascript">
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
	</script>
</body>

</html>