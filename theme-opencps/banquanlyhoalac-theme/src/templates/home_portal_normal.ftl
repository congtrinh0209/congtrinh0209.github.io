<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Bộ Quốc phòng</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	
	<link rel="Shortcut Icon" href="${themeDisplay.getPathThemeRoot()}/images/favicon.ico">
	
	<link href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Serif:wght@700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/chunk-vendors.css?t=123321" rel="stylesheet">
	<link type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/upgrade.css?t=123456789" rel="stylesheet">

	<@liferay_util["include"] page=top_head_include />
	
	<base href="/">
	<!-- <link href="${themeDisplay.getPathThemeRoot()}/css/base-style.css?t=8888" rel="stylesheet" type="text/css"> -->
	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=666" rel="stylesheet" type="text/css">
	
	<script>
        window.__define = window.define;
        window.__require = window.require;
        window.define = undefined;
        window.require = undefined;
    </script>
	
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/slick.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/vgcaplugin.js"></script>
	
	<script>
        window.define = window.__define;
        window.require = window.__require;
        window.__define = undefined;
        window.__require = undefined;
    </script>
</head>

<body class="${css_class} home-theme mBody">

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

	<div class="" id="wrapper">
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
						<a href="/web/dich-vu-cong-hoa-lac/register" class="register"><img src="${themeDisplay.getPathThemeRoot()}/images/icon-register.png">Đăng ký</a>
						<a href="/web/dich-vu-cong-hoa-lac/register#/login-dichvucong" class="login"><img src="${themeDisplay.getPathThemeRoot()}/images/icon-login.png">Đăng nhập</a>
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
	
	<script type="text/javascript" src="/o/opencps-store/js/cli/login/app/js/app.js"></script>
	<script type="text/javascript" src="/o/opencps-store/js/cli/login/app/js/chunk-vendors.js"></script>

	<style>
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
		
		#mermaid_dossier #theGraph {
			height: 350px !important;
			min-height: 350px !important;
		}
	</style>
	
	<script>
		$(document).ready(function() {
			$("#navigation .nav-toggle").on('click', function(e) {
				e.preventDefault();
				$(this).next().slideToggle();
			});
		});
	</script>

	<@liferay_util["include"] page=body_bottom_include />
	<@liferay_util["include"] page=bottom_include />
</body>

</html>