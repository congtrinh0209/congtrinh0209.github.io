/**************BÀI 1**************/
function get_result1(){
	var now = new Date();
	var date = now.getDate();
	var month = now.getMonth() + 1;
	var year = now.getFullYear();
	if (1<= month&&month <=3) {
		document.write("Xin thông báo hôm nay là: "+date+"/"+month+"/"+year+ ". Thời tiết mùa Xuân rất đẹp.");
	}
	else if(4<= month&&month <=6){
		document.write("Xin thông báo hôm nay là: "+date+"/"+month+"/"+year+ ". Thời tiết mùa Hè rất nóng.")
	}
	else if(7<= month&&month <=9){
		document.write("Xin thông báo hôm nay là: "+date+"/"+month+"/"+year+ ". Thời tiết mùa Thu rất mát mẻ.")
	}
	else {
		document.write("Xin thông báo hôm nay là: "+date+"/"+month+"/"+year+ ". Thời tiết mùa Đông rất lạnh.")
	}
}

/**************BÀI 2**************/
function get_result2(){
var str2 = "123456789012345";
if (typeof str2 !== "string" && typeof str2 !== "number") {
	document.write("Tham số nhập vào không đúng kiểu dữ liệu!");
}
else if(typeof str2 == "string" || typeof str2 == "number"){
	str3 = str2.toString();
	if (str3.length < 10) {document.write("str3");};
	if (str3.length > 10) {
		str3_1 = str3.substring(0,10);
		str3_2 = str3_1.concat('...');
		document.write(str3_2);
		}
	}
}

/**************BÀI 3**************/
function get_result3(){
	var score = 3.5;
	if (0<=score&& score <=3.9){
		document.write("Điểm môn lập trình web: Hệ 10: "+score+", Loại: F");
	}
	else if (4<=score&& score <=5.4){
		document.write("Điểm môn lập trình web: Hệ 10: "+score+", Loại: D")
	}
	else if (5.5<=score&& score <=6.9){
		document.write("Điểm môn lập trình web: Hệ 10: "+score+", Loại: C")
	}
	else if (7<=score&& score <=8.4){
		document.write("Điểm môn lập trình web: Hệ 10: "+score+", Loại: C")
	}
	else if (8.5<= score <=10){
		document.write("Điểm môn lập trình web: Hệ 10: "+score+", Loại: C")
	}
}

/**************BÀI 4**************/
function get_result4(){
	var id = 83;
	switch(id){
		case 80 : document.write('"Hello" bằng tiếng Bồ Đào Nha: "Olá"');
		break;
		case 81 : document.write('"Hello" bằng tiếng Nga: "Здравствуйте"');
		break;
		case 82 : document.write('"Hello" bằng tiếng Thái Lan: "สวัสด"');
		break;
		case 83 : document.write('"Hello" bằng tiếng Hàn: "안녕하세요"');
		break;
		case 84 : document.write('"Hello" bằng tiếng Nhật: "こんにちは"');
		break;
		default: document.write('"Hello" bằng tiếng Việt: "Xin chào"')
	}
}

/**************BÀI 5**************/
function get_result5(){
	var arr = [false,false,false,true,false,true,false];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==true){
		break;
		}
	}
	document.write("Giá trị 'true' xuất hiện lần đầu tiên ở vị trí thứ "+i+" trong mảng.")
}

/**************BÀI 6**************/
function get_result6(){
	for (var i = 1; i <= 100; i+=2) {
		document.write('<span style="color:red">' +i+ '</span>');
		document.write('<span style="color:blue">'+(i+1)+'</span>')
		}
	
}