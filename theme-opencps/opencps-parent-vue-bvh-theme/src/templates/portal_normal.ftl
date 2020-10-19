<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Bộ Văn hóa, Thể thao và Du lịch</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<base href="/">
	
	<link href="${themeDisplay.getPathThemeRoot()}/images/favicon.ico" rel="Shortcut Icon">
	
	<@liferay_util["include"] page=top_head_include />
	
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">
	
	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=8888" rel="stylesheet" type="text/css">

	<link type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/chunk-vendors.css?t=8888" rel="stylesheet">
	<link type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/upgrade.css?t=8888" rel="stylesheet">
	
	<#if permissionChecker.isOmniadmin()>
		<link href="${themeDisplay.getPathThemeRoot()}/css/clay_overide.css?t=8888" rel="stylesheet" type="text/css">
	</#if>

	<script>
        window.__define = window.define;
        window.__require = window.require;
        window.define = undefined;
        window.require = undefined;
    </script>
    
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery.min.js?t=123"></script>
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
	
	<script src="${themeDisplay.getPathThemeRoot()}/js/slick.min.js"></script>

	<script>
        window.define = window.__define;
        window.require = window.__require;
        window.__define = undefined;
        window.__require = undefined;
    </script>

</head>

<body class="${css_class}">

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

<div class="" id="wrapper" style="
    overflow: hidden;
">
	<header id="banner">		
		<div class="container align-middle hide-title">
			<div class="logo align-middle">
				<a href="${site_default_url}">
					<img src="${themeDisplay.getPathThemeRoot()}/images/logo.png">
					<div class="text-logo">
						<span>Bộ văn hoá, thể thao và du lịch</span>
						Cổng dịch vụ công trực tuyến và một cửa điện tử
					</div>
				</a>
			</div>
			
			<div id="react-root" style="float: right;width: 100%;height: 71px;">
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

</div>

	<footer id="footer">
	    <div class="container first align-middle-lg">
	        <div>
	            <div class="site-name">
	            	Cổng dịch vụ công trực tuyến và một cửa điện tử
	            	<span>${sitename}</span>
	            </div>
	        </div>
	        <div class="contact">
	            <p>Địa chỉ cơ quan: <b>${address}</b></p>
	            <p>Điện thoại: <b>${phone}</b></p>
				<p>Di động: <b>${mobile}</b></p>
	            <p>Email: <b>${email}</b></p>
	        </div>
	    </div>
	    <div class="text-center last">
			${copyright}
			<br>
			Phát triển bởi Tập đoàn CMC trên nền <a href="https://opencps.vn" target="_blank">OpenCPS</a>
		</div>
	</footer>
	
	<a href="" class="btt"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
	<a href="/web/bo-van-hoa/" class="bth"><i class="fa fa-home" aria-hidden="true"></i></a>

	<!-- inject:js -->
	<script type="text/javascript" src="/o/opencps-store/js/cli/login/app/js/app.js"></script>
	<script type="text/javascript" src="/o/opencps-store/js/cli/login/app/js/chunk-vendors.js"></script>
	<#if permissionChecker.isOmniadmin()>
		<@liferay_util["include"] page=body_bottom_include />
		<@liferay_util["include"] page=bottom_include />
	</#if>
	
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
			
			$(".header_login .logo").html("<a href='/'><img src='o/opencps-parent-vue-bvh-theme/images/logo-login.png'></a>");
			$(".header_login + div").after("<div class='login-footer'><p><b>Địa chỉ cơ quan:</b> Số 20, ngõ 2, Hoa Lư, Q.Hai Bà Trưng, TP.Hà Nội</p><p><b>Điện thoại:</b> 0243.9745845 - 0243.9745846</p><p><b>Email:</b> ttcntt@cntt.gov.vn</p></div>");
		});
	</script>

<!-- endinject -->

<script type="text/javascript">
    $.ajaxSetup({
		headers: {"Token": Liferay.authToken},
		global: true
	});
</script>

<style>
body .v-dialog .v-toolbar .v-toolbar__content {
    height: 40px !important;
    background-color: #004983;
}
body .primary {
    background-color: #004983 !important;
    border-color: #004983 !important;
}
body .accent--text {
    color: #004983 !important;
    caret-color: #004983 !important;
}

#app_register .radio_register_type .v-label {
    margin-bottom: 0;
}

#app_register .layout > .flex.xs12 > .layout.row.wrap { 
    margin: 0;
}

body #app_login .v-badge .v-icon {
    color: #ffffff !important;
}

#app_login .login-wrapper .login-input a {
    color: #ffffff !important;
}

@media screen and (max-width: 992px) {
	.homepage #column-2 {width:66%;float:left;}
	.homepage #column-3 {width:33%;float:left;}
}
body #wrapper {padding-top: 0;}
body #banner .logo .text-logo span {margin: 0 0 10px;}
.portlet-boundary_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_ .portlet-content .portlet-header {margin-bottom: 0;}

		
		
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



.nav-toggle {
	display: none;
	color: white !important;
	font-size: 22px;
	width: 34px;
    height: 34px;
    text-align: center;
    margin: 5px 20px;
}
.homepage .pager {
	display: none;
}
.homepage.signed-out .portlet-column-content.empty {
	padding: 0;
}

.dvc34 .panel-content {
	max-height: 346px !important;
}
.signed-in .dvc34 .panel-content {
	max-height: 363px !important;
}

@media screen and (max-width: 767px) {
	.nav-toggle {
		display: inline-block;
	}
	.nav-toggle + ul {
		display: none;
	}
	body #navigation ul li {
		float: none;
	}
	#react-root {
		display: none;
	}
	#banner .logo img {
		margin-left: 15px;
		margin-right: 10px;
	}
	#banner .logo .text-logo {
		font-size: 10px;
	}
	#banner .logo .text-logo span {
		font-size: 14px;
	}
	.dvcbvh .row-1 {
		padding-top: 15px;
		padding-bottom: 0;
	}
	.dvcbvh .row-1 .xs8, .dvcbvh .row-1 .xs4 {
		max-width: 100%;
		flex-basis: 100%;
	}
	.tracuu .title-search {
		font-size: 20px;
		margin-bottom: 15px;
	}
	.tracuu .search-wrapper {
		width: 80%;
	}
	.tracuu .search-wrapper input {
		min-width: inherit;
		width: 100%;
		height: 34px;
	}
	.tracuu .search-wrapper button {
		top: 0;
		padding: 0;
		right: 15px;
	}
	.tracuu .text {
		font-size: 13px !important;
		margin-top: 15px;
	}
	.dvcbvh .row-1 .tracuu + div {
		display: flex;
		flex-wrap: nowrap;
		border-radius: 30px !important;
	}
	.dvcbvh .row-1 .tracuu + div .flex {
		flex: 0 0 33.333333%;
	}
	.dvcbvh .row-1 .tracuu + div .flex img {
		width: 50px !important;
		display: block;
		margin: 0 auto 10px;
		padding: 0 !important;
	}
	.title-slider {
		margin: 15px 0;
		font-size: 16px;
	}
	.links-group {
		padding: 0 20px;
	}
	.homepage #column-2, .homepage #column-3 {
		width: 100%;
		float: none;
	}
	.dvc34:last-child .panel-content > div:first-child {
		display: block;
		margin-bottom: 10px;
		position: relative;
	}
	.dvc34:last-child .panel-content > div:first-child:before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: #ccc;
	}
	.dvc34:last-child .panel-content > div:first-child > div {
		max-width: 100%;
	}
	.dvc34:last-child .panel-content > div:first-child > div .input-group__details {
		height: 5px;
	}
	.homepage .dvcbvh {
		margin-right: 0 !important;
		float: none !important;
		width: 100% !important;
		padding: 0 !important;
	}
	.homepage #column-3 .dvcbvh {
		padding-top: 15px !important;
	}
	.homepage #column-3 > div > div {
		padding: 0;
		margin-bottom: 15px;
	}
	.homepage #column-4 {
		display: none;
	}
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
body .deactive__btn {
	background-color: #0d7535 !important;
}

.signed-in #react-root {
	display: block !important;
}

html {
	overflow: auto !important;
}
.body_login {
	background: url("/o/opencps-parent-vue-bvh-theme/images/bg_login.png") center center no-repeat;
	background-size: cover;
}
.body_login #banner, .body_login #navigation, .body_login #footer {
	display: none;
}
.body_login .application--wrap > main > div {
	display: flex;
    align-items: center;
}
.body_login #login_container {
	width: 100%;
	padding: 15px;
}
.body_login #login_container img {
	max-width: 100%;
}
.body_login #app_register {
	background-color: transparent;
}
.body_login #app_register nav {
	display: none;
}
.body_login #app_register nav + div {
	background-color: rgba(25,97,171,0.4);
	border: 0 !important;
	border-radius: 20px;
	padding: 20px !important;
	max-width: 470px;
	margin: auto;
}
.body_login .v-text-field .v-input__slot {
	background-color: white !important;
}
.body_login .v-text-field .v-input__slot .v-icon {
	color: #0054a6 !important;
}
.body_login #app_register button:last-child {
	display: none;
}
.body_login #app_register button:first-child {
    float: right;
    margin: -40px 0 0 !important;
	height: 34px;
	background-color: #1961ab !important;
}
.body_login #app_register .v-input--selection-controls__input {
	margin: 0 0 0 -10px;
}
.body_login .login-footer {
	color: #1961ab;
	text-align: center;
}
.body_login .login-footer p {
	margin: 10px 0 0;
}
.body_login .login-footer p:first-child {
	margin-top: 20px;
}
</style>

</body>

</html>