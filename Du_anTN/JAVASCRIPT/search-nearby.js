window.onload = function(){
    var x = document.getElementById("demo");
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
            x.innerHTML = "Geolocation không hỗ trợ trên trình duyệt này.";
        }
    function showPosition(position) 
    {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        latlon = new google.maps.LatLng(lat, lon)
        mapholder = document.getElementById('mapholder')
        mapholder.style.height = '500px';
        mapholder.style.width = '873px';
        var myOptions = {
            center:latlon,
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            mapTypeControl:true,
            navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
        }
        var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
        var marker = new google.maps.Marker({position:latlon,map:map,title:"Vị trí của bạn!"});

        /**** Circle position center*****/
        var myCity = new google.maps.Circle({
            center: latlon,
            radius: 500,
            strokeColor: "#0000FF",
            strokeOpacity: 0.6,
            strokeWeight: 2,
            fillColor: "#0000FF",
            fillOpacity: 0.3
        });
        myCity.setMap(map);

        /**** Add Marker nearby position*****/
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          library: {
            icon: iconBase + 'library_maps.png'
          },
        };
        var features = [
          {
            position: new google.maps.LatLng(21.014850397782606, 105.84704875946045),
            type: 'library',
            content: '<div class="container-locale"><div class="content-left-locale"><img src="http://chothuesaigon.net/chothuesg_1.20150302184614608.jpg"></div><div class="content-right-locale"><p>NHÀ TÔI CHÍNH CHỦ CHO THUÊ PHÒNG TRỌ TẠI SỐ 131A, NGÕ 105/20 ĐƯỜNG DOÃN KẾ THIỆN, MAI DỊCH, QUẬN CẦU GIẤY</p><p>Diện tích: 45m²</p><p>Giá: 1,5 triệu/tháng</p><p>Ngày đăng: 20/08/2016</p><button class="btn-locale">Xem phòng</button></div><div class="clear"></div></div>'
          },
          {
            position: new google.maps.LatLng(21.01460252052368, 105.8472016453743),
            type: 'library',
            content: '<div class="container-locale"><div class="content-left-locale"><img src="http://chothuesaigon.net/chothuesg_1.20150302184614608.jpg"></div><div class="content-right-locale"><p>NHÀ TÔI CHÍNH CHỦ CHO THUÊ PHÒNG TRỌ TẠI SỐ 131A, NGÕ 105/20 ĐƯỜNG DOÃN KẾ THIỆN, MAI DỊCH, QUẬN CẦU GIẤY</p><p>Diện tích: 45m²</p><p>Giá: 1,5 triệu/tháng</p><p>Ngày đăng: 20/08/2016</p><button class="btn-locale">Xem phòng</button></div><div class="clear"></div></div>'
          },
          {
            position: new google.maps.LatLng(21.014474826017402, 105.84643721580505),
            type: 'library',
            content: '<div class="container-locale"><div class="content-left-locale"><img src="http://chothuesaigon.net/chothuesg_1.20150302184614608.jpg"></div><div class="content-right-locale"><p>NHÀ TÔI CHÍNH CHỦ CHO THUÊ PHÒNG TRỌ TẠI SỐ 131A, NGÕ 105/20 ĐƯỜNG DOÃN KẾ THIỆN, MAI DỊCH, QUẬN CẦU GIẤY</p><p>Diện tích: 45m²</p><p>Giá: 1,5 triệu/tháng</p><p>Ngày đăng: 20/08/2016</p><button class="btn-locale">Xem phòng</button></div><div class="clear"></div></div>'
          }, {
            position: new google.maps.LatLng(21.014019131005732, 105.8461931347847),
            type: 'library',
            content: '<div class="container-locale"><div class="content-left-locale"><img src="http://chothuesaigon.net/chothuesg_1.20150302184614608.jpg"></div><div class="content-right-locale"><p>NHÀ TÔI CHÍNH CHỦ CHO THUÊ PHÒNG TRỌ TẠI SỐ 131A, NGÕ 105/20 ĐƯỜNG DOÃN KẾ THIỆN, MAI DỊCH, QUẬN CẦU GIẤY</p><p>Diện tích: 45m²</p><p>Giá: 1,5 triệu/tháng</p><p>Ngày đăng: 20/08/2016</p><button class="btn-locale">Xem phòng</button></div><div class="clear"></div></div>'
          }, {
            position: new google.maps.LatLng(21.013288013023292, 105.84807872772217),
            type: 'library',
            content: '<div class="container-locale"><div class="content-left-locale"><img src="http://chothuesaigon.net/chothuesg_1.20150302184614608.jpg"></div><div class="content-right-locale"><p>NHÀ TÔI CHÍNH CHỦ CHO THUÊ PHÒNG TRỌ TẠI SỐ 131A, NGÕ 105/20 ĐƯỜNG DOÃN KẾ THIỆN, MAI DỊCH, QUẬN CẦU GIẤY</p><p>Diện tích: 45m²</p><p>Giá: 1,5 triệu/tháng</p><p>Ngày đăng: 20/08/2016</p><button class="btn-locale">Xem phòng</button></div><div class="clear"></div></div>'
          }, {
            position: new google.maps.LatLng(21.01578181167918, 105.84837913513184),
            type: 'library',
            content: '<div class="container-locale"><div class="content-left-locale"><img src="http://chothuesaigon.net/chothuesg_1.20150302184614608.jpg"></div><div class="content-right-locale"><p>NHÀ TÔI CHÍNH CHỦ CHO THUÊ PHÒNG TRỌ TẠI SỐ 131A, NGÕ 105/20 ĐƯỜNG DOÃN KẾ THIỆN, MAI DỊCH, QUẬN CẦU GIẤY</p><p>Diện tích: 45m²</p><p>Giá: 1,5 triệu/tháng</p><p>Ngày đăng: 20/08/2016</p><button class="btn-locale">Xem phòng</button></div><div class="clear"></div></div>'
          }, 
        ];
        /*******Create markers and Content when click marker********/
        features.forEach(function(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map,
            });
            var infowindow = new google.maps.InfoWindow({
              content: feature.content,
            });
            marker.addListener('click', function() {
            infowindow.open(map, marker);/********Hiển thị content**********/
             /***********Chỉ đường*************/
            directionsService = new google.maps.DirectionsService;
            directionsDisplay = new google.maps.DirectionsRenderer({
                map: map
            });
                            // get route from A to B
             var pointB = feature.position;
            calculateAndDisplayRoute(directionsService, directionsDisplay, latlon, pointB);
            function calculateAndDisplayRoute(directionsService, directionsDisplay, latlon, pointB) {
                    directionsService.route({
                        origin: latlon,
                        destination: pointB,
                        avoidTolls: true,
                        avoidHighways: false,
                        travelMode: google.maps.TravelMode.DRIVING
                        },
                         function (response, status) {
                            if (status == google.maps.DirectionsStatus.OK) {
                                directionsDisplay.setDirections(response);
                            } else {
                                window.alert('Directions request failed due to ' + status);
                            }
                    });
                }
            });
        });


    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }
}