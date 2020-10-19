<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>Hệ thống Dịch vụ công trực tuyến</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />

	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">	
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css" rel="stylesheet" />
	
	<@liferay_util["include"] page=top_head_include />
	<script>
         window.__define = window.define;
         window.__require = window.require;
         window.define = undefined;
         window.require = undefined;
     </script>
	
	<script src="https://cdn.jsdelivr.net/lodash/4.13.1/lodash.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/axios.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/vue.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/vue-uploader.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/vuejx_dev.js?t=1232134343991111123299"></script>
	
	<script src="${themeDisplay.getPathThemeRoot()}/js/orgin.js"></script>
		
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.textcomplete/1.8.0/jquery.textcomplete.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery-comments.js"></script>
	
	<script src="${themeDisplay.getPathThemeRoot()}/js/handlebars.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/alpaca.min.js"></script>
	
	<script src="${themeDisplay.getPathThemeRoot()}/js/moment-with-locales.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/bootstrap-datetimepicker.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/moment.min.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery-ui.js"></script>
	<script src="${themeDisplay.getPathThemeRoot()}/js/jquery.jexcel.js"></script>
	<script src="https://unpkg.com/popper.js@1.15.0/dist/umd/popper.js"></script>
	<script src="https://unpkg.com/tooltip.js@1.3.2/dist/umd/tooltip.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>

	<link rel="stylesheet" type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/tooltipster.bundle.min.css">
	<link rel="stylesheet" type="text/css" href="${themeDisplay.getPathThemeRoot()}/css/tooltipster-sideTip-shadow.min.css">
	<script type="text/javascript" src="${themeDisplay.getPathThemeRoot()}/js/tooltipster.bundle.js"></script>
	
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.0.0-alpha.4/fullcalendar.css">

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.0.0-alpha.4/fullcalendar.js"></script>
	
	<link href="http://dev.mobilink.vn/o/mentions-web/css/mentions.css" rel="stylesheet" type="text/css">

	<script>
         window.define = window.__define;
         window.require = window.__require;
         window.__define = undefined;
         window.__require = undefined;
     </script>

</head>

<body class="${css_class}">

<@liferay_ui["quick-access"] contentId="#main-content" />

<@liferay_util["include"] page=body_top_include />

<#if permissionChecker.isOmniadmin()>
   <@liferay.control_menu />
<#else>

	<style type="text/css" media="screen">
		#wrapper {
		    margin-top: 0 !important;
		}
	</style>

</#if>

<div class="container-fluid" id="wrapper">
	<header id="banner">
		<div class="container-fluid align-middle-lg">
			<div class="mLogo">
				<a href="${site_default_url}" class="align-middle">
					<img src="${themeDisplay.getPathThemeRoot()}/images/color_schemes/${img_logo}">
					<div>
						<span class="text-bold">${system}</span>
						<span>${agency}</span>
					</div>
				</a>
			</div>
			<@liferay_portlet["runtime"]
              defaultPreferences="${freeMarkerPortletPreferences}"
              portletProviderAction=portletProviderAction.VIEW
              instanceId="FrontendWebPortal_LoginPortlet_1"
              portletName="FrontendWebPortal_LoginPortlet"/>
		</div>

		<#if has_navigation && is_setup_complete>
			<#include "${full_templates_path}/navigation.ftl" />
		</#if>
	</header>

	<section id="content">
		<div class="container-fluid">
	
			<#if selectable>
				<@liferay_util["include"] page=content_include />
			<#else>
				${portletDisplay.recycle()}
	
				${portletDisplay.setTitle(the_title)}
	
				<@liferay_theme["wrap-portlet"] page="portlet.ftl">
					<@liferay_util["include"] page=content_include />
				</@>
			</#if>
		
		</div>
	</section>

	<footer id="footer">
        <div class="container-fluid align-middle-lg flex-break">
            <div class="site-name">
				<div class="dklr toggle">
					<span>Bộ Giao thông vận tải</span>
					<span class="text-bold">Cục Đăng kiểm Việt Nam</span>
					<span class="version">Phiên bản 1.0 - © Bản quyền thuộc về Bộ Giao thông vận tải</span>
				</div>
				<div class="duongbo toggle version">
					Tổng cục Đường bộ Việt Nam - Bộ Giao thông Vận tải
				</div>
            </div>
            <div class="contact align-middle-lg">
				<div class="address">
					<div class="dklr toggle">
						18 Đường Phạm Hùng, Phường Mỹ Đình 2, <br class="hidden-xs"> Quận Nam Từ Liêm, Hà Nội
					</div>
					<div class="duongbo toggle">
						D20 Tôn Thất Thuyết, KDT mới Cầu Giấy, Hà Nội
					</div>
				</div>
				<div class="phone">
					<div class="dklr toggle">
						<span>T: (+84).24.3.7684719 - 3.7684716</span>
						<span>F: (+84).24.3.7684779 - 3.7684727</span>
					</div>
					<div class="duongbo toggle">
						<span>024 3857 1444</span>
					</div>
				</div>
                <div class="mail">
					<div class="dklr toggle">
						<span>vr@vr.org.vn</span>
						<span>http://www.vr.org.vn​</span>
					</div>
					<div class="duongbo toggle">
						<a href="/web/guest/huong-dan-cong-xu-ly" class="manual">Hướng dẫn sử dụng</a>
					</div>
				</div>
            </div>
        </div>
    </footer>
</div>

<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />

<!-- inject:js -->
<!-- endinject -->

</body>

</html>