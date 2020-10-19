<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Hệ thống thông tin một cửa điện tử</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

	<link rel="Shortcut Icon" href="${themeDisplay.getPathThemeRoot()}/images/color_schemes/${theme_color_id}-theme/favicon.ico">

	<@liferay_util["include"] page=top_head_include />

	<base href="/">
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=vietnamese" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&amp;subset=vietnamese" rel="stylesheet">

	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=8888" rel="stylesheet" type="text/css">
	<link href="${themeDisplay.getPathThemeRoot()}/css/base-style.css?t=8888" rel="stylesheet" type="text/css">
	<link href="${themeDisplay.getPathThemeRoot()}/css/color_schemes/${theme_color_id}.css?t=911" rel="stylesheet" type="text/css">
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
	<script src="${themeDisplay.getPathThemeRoot()}/js/date-time-picker.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/mermaid.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/svg-pan-zoom.min.js"></script>
	
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
			_govaq.push(['setTrackerUrl', 'https://f-emc.ngsp.gov.vn/tracking']);
			_govaq.push(['setSiteId', '60']);
			var d = document,
				g = d.createElement('script'),
				s = d.getElementsByTagName('script')[0];
			g.type = 'text/javascript';
			g.async = true;
			g.defer = true;
			g.src = 'https://f-emc.ngsp.gov.vn/embed/gov-tracking.min.js';
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
	<header id="banner" class="row">
		<div class="mLogo align-middle"> 
			<a href="${site_default_url}"> 
				<img src="${themeDisplay.getPathThemeRoot()}/images/color_schemes/${img_logo}"> 
				<div class="text-logo"> 
					Bộ Giao thông Vận tải
					<br/>
					<span>Hệ thống thông tin một cửa điện tử<!-- - ${system}--></span>
					<!--<span>Hệ thống nghiệp vụ xử lý thủ tục hành chính - ${system}</span>-->
				</div> 
			</a> 
		</div>
		
		<div id="react-root" style="float: right;width: 100%;height: 71px;">
			<div id="app_login"></div>
		</div>

		<#if has_navigation && is_setup_complete>
			<#include "${full_templates_path}/navigation.ftl" />
		</#if>
	</header>
	
	<iframe src="http://sso-bgtvt.fds.vn/auth/realms/sso-demo/protocol/openid-connect/login-status-iframe.html" title="keycloak-session-iframe" style="display: none;"></iframe>

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
	
</div>

	<!-- <footer id="footer" >
		<div class="left">
			<p class="site-name">Trung tâm Công nghệ thông tin Bộ Giao thông Vận tải</p>
			<p class="info-wrapper">
				<span>Địa chỉ: 80 Trần Hưng Đạo, Hoàn kiếm, Hà Nội</span>
				<span>Hotline: 1900 0318 - Điện thoại: (04) 3822 2979 - Fax: 38221066</span>
				<span>Email: bophanhotro@mt.gov.vn</span>
			</p>
		</div>
		<div class="right">
			<p class="copyright">Bản quyền thuộc về Bộ Giao thông vận tải</p>
			<p>
				<span>Hỗ trợ người dùng Cổng DVC Bộ GTVT</span>
				<a target="_blank" href="https://www.facebook.com/groups/1207489822675506/" class="icon-face">
					<i class="fa fa-facebook"></i>
				</a>
			</p>
		</div>
	</footer> -->.
	<footer id="footer">
		<div class="footer">
			<div class="sitename">
				<i class="fa fa-copyright" aria-hidden="true"></i> TRUNG TÂM CÔNG NGHỆ THÔNG TIN - BỘ GTVT
			</div>
			<div>
				<span>Địa chỉ: 80 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội</span>
				<span>Hotline: 1900 0318 - Điện thoại: (024) 3.822.2979</span>
			</div>
			<div>
				<span>Fax: (024) 3.822.1066</span>
				<span>Email: bophanhotro@mt.gov.vn</span>
			</div>
			<a target="_blank" href="https://www.facebook.com/groups/1207489822675506/" class="icon-face">
				<i class="fa fa-facebook"></i>
			</a>
		</div>
	</footer>
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
<script src="https://sp.zalo.me/plugins/sdk.js"></script>

<script type="text/javascript">
	window.PDFJS.workerSrc = '${themeDisplay.getPathThemeRoot()}/js/pdf.worker.js?t=9991';
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
</script>

</body>
	<style>
		#reAssign {
			display: none !important;
		}
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
		.page-theme #banner {
			background: url("/o/hethongxulynghiepvu-theme/images/color_schemes/${theme_color_id}-theme/bg_header.png") right center no-repeat;
		}
		
		/* .page-theme .v-textarea.v-text-field--enclosed textarea {
			margin-top: 0;
		} */
		
		.page-theme #navigation li {
		  display: block;
		}

		.signed-out #app_login {
			display: none;
		}
		/* .page-theme #navigation {
			overflow: hidden;
			margin-bottom: 10px;
		} */
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
	#react-root span i {
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
	<!-- .page-theme #banner img {
		margin-right: unset;
		float: left;
	} -->
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
	body .background-triangle-big, body .background-triangle-small {
		background-color: #004b94 !important;
	}
	body .background-triangle-big:before, body .background-triangle-small:before {
		border-top-color: #004b94 !important;
	}


	.body_login {
		background: url("/o/hethongxulynghiepvu-theme/images/bg_login.jpg") center center no-repeat;
		background-size: cover;
	}
	.body_login #banner, .body_login #footer {
		display: none;
	}
	.body_login .theme--light.application {
	    background-color: transparent;
	}
	.body_login #login_container {
	    position: absolute;
	    top: 50%;
	    left: 16.5%;
	    transform: translateY(-50%);
	}
	.body_login #login_container nav + div {
	    background-color: transparent;
	    border: 0 !important;
	    padding: 0 !important;
	}
	.body_login #login_container nav {
	    background-color: transparent !important;
	    font-size: 18px;
	    padding: 0 !important;
	}
	.body_login #login_container nav > div {
		color: #0072bc !important;
	}
	.body_login #login_container nav > div {
	    justify-content: flex-start !important;
	}
	.body_login #login_container .header_login + div .v-input__slot {
	    background-color: transparent;
	    position: relative;
	    padding: 0;
	    margin-bottom: 8px;
	}
	.body_login #login_container .header_login + div input {
	    background-color: white;
	    width: 550px;
	    height: 44px;
	    margin: 0;
	    max-height: inherit;
	    border: 1px solid #0054a6;
	    border-radius: 2px;
	    padding-left: 45px;
	}
	.body_login #login_container .header_login + div .v-input__prepend-inner {
	    position: absolute;
	    top: 2px;
	    left: 10px;
	    z-index: 1;
	}
	.body_login #login_container .header_login + div .v-input__prepend-inner .v-icon {
	    font-size: 24px
	}
	.body_login #login_container .header_login + div button {
		height: 36px;
		margin-top: -10px !important;
	}
	.body_login #login_container .header_login + div form {
	    display: flex;
	    flex-wrap: wrap;
	}
	.body_login #login_container .header_login + div div:nth-child(3) .v-label, 
	.body_login #login_container .header_login + div div:nth-child(3) .primary--text {
		font-size: 14px;
	}
	.body_login #login_container .header_login + div div:nth-child(3) > div:last-child {
	    padding: 5px 0 0 30px !important;
	    white-space: nowrap;
	}
	.body_login #login_container .header_login + div .v-input--selection-controls__ripple {
		margin: 0;
		top: 0;
		left: 0;
		width: auto;
	}
	.body_login #login_container .header_login + div .v-input--selection-controls__input {
		margin: 0 0 0 15px;
	}
	.body_login #login_container .footer_login {
	    color: #b7b7b7;
	    font-size: 14px;
	    margin-top: 135px;
	}
	.body_login #login_container .footer_login .site-name {
	    font-weight: bold;
	    text-transform: uppercase;
	    font-size: 18px;
	}
	.body_login #login_container .header_login {
		margin-bottom: 125px;
		font-size: 30px;
		color: #0072bc;
		text-transform: uppercase;
		overflow: hidden;
	}
	.body_login #login_container .header_login a {
		display: -webkit-box;
		display: flex;
		-webkit-align-items: center;
		align-items: center;
	}
	.body_login #login_container .header_login span {
		font-size: 22px;
		color: #f20123;
		font-family: "Roboto", sans-serif;
	    font-weight: 500;
	    margin-top: 10px;
	    display: block;
	}
	.body_login #login_container .header_login img {
		margin-right: 20px;
		height: 80px;
		display: inline-block;
	}
	.body_login #login_container .header_login .text-logo {
		display: inline-block;
		font-family: 'Roboto Slab', serif;
		font-weight: bold;
	}
	.body_login #login_container .header_login + div {
		margin: 0 !important;
	}

	.timeline-item {
	    padding-bottom: 5px;
	    padding-left: 40px;
	    padding-top: 5px;
	    position: relative;
	}

	@media screen and (max-width: 1366px) {
		.body_login #login_container {
		    left: 60px;
		}		
		.body_login #login_container .footer_login {
		    margin-top: 45px;
		    margin-left: 130px;
		}
		.body_login #login_container .header_login {
			margin-bottom: 45px;
		}
	}

	body .bootstrap-datetimepicker-widget {
		background-color: white !important;
	}
	body .bootstrap-datetimepicker-widget table {
		border-collapse: collapse;
	}
	body .bootstrap-datetimepicker-widget table, body .bootstrap-datetimepicker-widget table th, body .bootstrap-datetimepicker-widget table td {
		border: 1px solid #ccc;
	}
	body .bootstrap-datetimepicker-widget table th, body .bootstrap-datetimepicker-widget table td {
		padding: 5px;
	}
	</style>

	<script type="text/javascript">
	    $.ajaxSetup({
			headers: {"Token": Liferay.authToken},
			global: true
		});
	</script>
	
</html>