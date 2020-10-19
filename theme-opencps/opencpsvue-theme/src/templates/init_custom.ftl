<#assign theme_color_id = theme_display.getColorSchemeId()/>
<#if theme_color_id == "dklr">
	<#assign img_logo = 'dklr-theme/logo.png'/>
	<#assign system = 'Hệ thống dịch vụ công trực tuyến sản xuất, lắp ráp xe cơ giới'/>
	<#assign agency = 'Cục Đăng kiểm Việt Nam'/>
<#elseif theme_color_id == "duongbo">
	<#assign img_logo = 'duongbo-theme/logo.png'/>
	<#assign system = 'Tổng cục Đường bộ Việt Nam - Bộ Giao thông vận tải'/>
	<#assign agency = 'Hệ thống quản lý vận tải đường bộ quốc tế'/>
</#if>