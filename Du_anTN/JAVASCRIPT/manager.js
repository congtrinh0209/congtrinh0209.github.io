
	/********** Load ảnh đại diện trang Manager  **********/
			window.onload = function() {
			var fileInput = document.getElementById('fileInput');
			var fileDisplayArea = document.getElementById('fileDisplayArea');
			fileInput.addEventListener('change', function(e) {
				var file = fileInput.files[0];
				var imageType = /image.*/;
				if (file.type.match(imageType)) {
					var reader = new FileReader();
					reader.onload = function(e) {
						fileDisplayArea.innerHTML = "";
						var img = new Image();
						img.src = reader.result;
						fileDisplayArea.appendChild(img);
					}
					reader.readAsDataURL(file);	
				} else {
					fileDisplayArea.innerHTML = "File not supported!"
				}
			});	
	}
	/********** Trạng thái bài đăng DEMO CHO 2 BÀI ĐĂNG**********/
		var date_current = new Date();
		var msec_date_current = Date.parse(date_current);
		//demo date 1
		var date_st1 = new Date("2017-05-19");
		function date_status(date_st1){
			var msec_dateup1 = Date.parse(date_st1);
			var msec_datedead1 = msec_dateup1 + (5*86400000);//Date_dead = date_up + 5days
			var date_dead1 = new Date(msec_datedead1);
			$(".date-up.item1").html(date_st1.getDate()+"-"+(date_st1.getMonth()+1)+"-"+date_st1.getFullYear());
			$(".date-dead.item1").html(date_dead1.getDate()+"-"+(date_dead1.getMonth()+1)+"-"+date_dead1.getFullYear());
			//So sánh ngày hết hạn và thời gian hiện tại
			if (msec_datedead1 < msec_date_current) {
				$('#status').html("Tin đã hết hạn")
			};
		}
		//demo date 2
		var date_st2 = new Date("2017-04-28");
		function date_status2(date_st2){
			var msec_dateup2 = Date.parse(date_st2);
			var msec_datedead2 = msec_dateup2 + (5*86400000);//Date_dead = date_up + 5days
			var date_dead2 = new Date(msec_datedead2);
			$(".date-up.item2").html(date_st2.getDate()+"-"+(date_st2.getMonth()+1)+"-"+date_st2.getFullYear());
			$(".date-dead.item2").html(date_dead2.getDate()+"-"+(date_dead2.getMonth()+1)+"-"+date_dead2.getFullYear())
			//So sánh ngày hết hạn và thời gian hiện tại
			if (msec_datedead2 < msec_date_current) {
				$('#status2').html("Tin đã hết hạn")
			};
		}
		window.onload = date_status2(date_st2);
		window.onload = date_status(date_st1)
		//Thao tác dừng đăng tin và đăng lại tin
		$("#st1").click(function(){
			$('#status').html("Tin đã ngừng đăng");
			$('#status').css("color","#ED2327");
			$(".date-up.item1").html("");
			$(".date-dead.item1").html("")
		});
		
		$("#st2").click(function(){
			date_st1 = date_current;//cập nhật ngày đăng theo ngày gia hạn
			date_status(date_st1);
			$('#status').html("Tin đang được đăng");
			$('#status').css("color","#4CAF50");
		});

		$("#st1-2").click(function(){
			$('#status2').html("Tin đã ngừng đăng");
			$('#status2').css("color","#ED2327");
			$(".date-up.item2").html("");
			$(".date-dead.item2").html("")
		});
		$("#st2-2").click(function(){
			date_st2 = date_current;//cập nhật ngày đăng theo ngày gia hạn
			date_status2(date_st2);
			$('#status2').html("Tin đang được đăng");
			$('#status2').css("color","#4CAF50");
		})
