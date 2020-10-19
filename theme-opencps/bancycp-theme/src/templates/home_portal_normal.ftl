<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Cổng Dịch vụ công trực tuyến Cục Chứng thư số và Bảo mật Thông tin</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	
	<link rel="Shortcut Icon" href="${themeDisplay.getPathThemeRoot()}/images/favicon.ico">
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap&subset=vietnamese" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<@liferay_util["include"] page=top_head_include />
	
	<base href="/">
	<link href="${themeDisplay.getPathThemeRoot()}/css/base-style.css?t=8888" rel="stylesheet" type="text/css">
	<link href="${themeDisplay.getPathThemeRoot()}/css/main.css?t=8888" rel="stylesheet" type="text/css">
	
	<script>
        window.__define = window.define;
        window.__require = window.require;
        window.define = undefined;
        window.require = undefined;
    </script>
	
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery.min.js"></script>
	
	<script>
        window.define = window.__define;
        window.require = window.__require;
        window.__define = undefined;
        window.__require = undefined;
    </script>
</head>

<body class="${css_class} home-theme">

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
			<#if has_navigation && is_setup_complete>
				<#include "${full_templates_path}/navigation.ftl" />
			</#if>
			<div class="btns">
				<a href="/web/dich-vu-cong-bcy/login_dichvucong#/" class="login">Đăng nhập</a>
				<a href="/web/dich-vu-cong-bcy/register#/" class="register">Đăng xuất</a>
			</div>
		</header>
		
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
				<div class="statistics">Đang online: <span class="online">3</span> / <span class="total">122</span></div>
				<span>©2017 Bản quyền thuộc về Cục Chứng thực số và Bảo mật thông tin - Ban Cơ yếu Chính phủ</span>
				<span class="divine">|</span>
				<span>Địa chỉ: 23 Ngụy Như Kon Tum, Thanh Xuân, HN</span>
				<span class="divine">|</span>
				<span>Điện thoại: (024) 3773 8668 hay (024) 3222 2665</span>
			</div>
		</footer>
	</div>

	<style>
		html {
			overflow: auto;
		}
		body #wrapper {
			padding-top: 0;
			min-height: 100vh;
		}
		body a, body a:hover, body a:focus {
			text-decoration: none;
			color: inherit;
		}
		
		body {
			font-family: 'Open Sans', sans-serif;
			font-size: 14px;
		}
		.home-theme {
			background: url("/o/bancycp-theme/images/main-bg.jpg") center center no-repeat;
			background-size: cover;
			min-height: 100vh;
		}
		
		@media screen and (max-width: 1300px) {
			#banner, #content {
				padding: 0 30px;
			}
		}
		
		#banner {
			max-width: 1300px;
			position: relative;
			margin: auto;
		}
		#banner .btns {
			position: absolute;
			top: 13px;
			right: 0;
		}
		#banner .btns a {
			padding: 6px 24px 8px;
			color: white;
			border-radius: 50px;
			display: inline-block;
		}
		#banner .btns .login {
			margin-right: 10px;
			background-color: #e00b2d;
		}
		#banner .btns .register {
			background-color: #00a8ec;
		}
		
		#navigation {
			position: relative;
			padding: 10px 0;
			border-bottom: 1px solid #2a85ff;
			max-width: 1300px;
			margin: auto;
		}
		#navigation ul {
			list-style: none;
			display: -webkit-box;
			display: flex;
			max-width: 1300px;
			margin: auto;
		}
		#navigation li a {
			display: block;
			padding: 10px 15px;
			color: white;
		}
		#navigation .selected a, #navigation li:hover a {
			border: 1px solid white;
			border-radius: 50px;
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
			padding: 0 15px;
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
			background: url("/o/bancycp-theme/images/bg.jpg") left top repeat-x;
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
			background: url("/o/bancycp-theme/images/bg-statistics.jpg") left top repeat-y;
			background-size: 100% auto;
			border-radius: 120px 120px 0 0;
			color: white;
		}
		
		@media screen and (max-width: 991px) {
			#footer {
				text-align: center;
			}
			#footer .divine {
				display: none;
			}
			#footer .statistics ~ span {
				display: block;
			}
		}
	</style>
	
	<script>
		$(document).ready(function() {
			$("#navigation .nav-toggle").on('click', function(e) {
				e.preventDefault();
				$(this).next().slideToggle();
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
	</script>

	<@liferay_util["include"] page=body_bottom_include />
	<@liferay_util["include"] page=bottom_include />
</body>

</html>