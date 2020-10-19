<#assign theme_type = theme_display.getThemeSetting('theme_type')/>
<#assign theme_color_id = theme_display.getColorSchemeId()/>


<#if theme_color_id == "dvc">
	<#assign site_title = 'Cổng DVC trực tuyến Tỉnh Sơn La'/>
	<#assign logo_img = 'logo-dvc.png'/>
	<#assign tracking_script = 'var _govaq=window._govaq||[];_govaq.push(["trackPageView"]),_govaq.push(["enableLinkTracking"]),function(){_govaq.push(["setTrackerUrl","https://f-emc.ngsp.gov.vn/tracking"]),_govaq.push(["setSiteId","205"]);var e=document,t=e.createElement("script"),a=e.getElementsByTagName("script")[0];t.type="text/javascript",t.async=!0,t.defer=!0,t.src="https://f-emc.ngsp.gov.vn/embed/gov-tracking.min.js",a.parentNode.insertBefore(t,a)}();'/>
<#elseif theme_color_id == "motcua">
	<#assign site_title = 'Hệ thống thông tin MCĐT Tỉnh Sơn La'/>
	<#assign logo_img = 'logo-motcua.png'/>
	<#assign tracking_script = ''/>
</#if>