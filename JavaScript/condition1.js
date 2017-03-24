
/************BÀI 1***************/
function get_result1(){
	var para = prompt("Nhập 2 tham số bất kỳ!","1,2");
	var arr = para.split(",");
	var arr1 = arr.map(Number);
	for (var i = 0; i < arr1.length; i++) {
		if (isNaN(arr1[i])) {
			document.write('Tham số: '+arr[i]+' không phải là 1 số.')
			} 
		else if(arr1[i]>arr1[i+1]){
				document.write('Số lớn nhất là '+arr1[i])
			}
		else if(arr1[i]<arr1[i+1]){
				document.write('Số lớn nhất là '+arr1[i+1])
			}
		else if(arr1[i]==arr1[i+1]){
				document.write('Hai số có giá trị bằng nhau')
			}
		}
	}

/************BÀI 2***************/
function get_result2(){
	var para2 = prompt("Nhập số bất kỳ","3");
	var arr2 = para2.split(",");
	var arr2_1 = arr2.map(Number);
	if (arr2_1[0]<=0 || arr2_1[0]%1 != 0) {
		document.write('Tham số: '+para2+' không phải là số nguyên dương')
	} 
	else{
		var result=arr2_1[0];
		for (var i = 1; i < arr2_1[0]; i++) {
			result=result*i
		}
		document.write(arr2_1[0]+'! = '+result)
	}
}

/************BÀI 3***************/
function sort_ar(a,b){
	return b - a;
}
function get_result3(){
	var get_arr3 = prompt("Nhập dãy số bất kỳ!","1,2,3,4,6,7,8");
	var arr4 =[];
	var arr3 = get_arr3.split(",");
	var arr3_1 = arr3.map(Number);
	for (var i = 0; i < arr3_1.length; i++) {
		if (arr3_1[i]%2==0){
			arr4.push(arr3_1[i]);
		}
	};
	var arranger_arr4 = arr4.sort(sort_ar);
	document.write('Chuỗi số chẵn đã sắp xếp: '+arranger_arr4);
}

/************BÀI 4***************/
function get_result4(){
	var user = {
		name: "TrinhCongTrinh",
		password: "congtrinh",
		confirm_password: "congtrinh",
	}
	var ifom1 = user.name.split("");
	var ifom2 = user.password.split("");
	var ifom3 = user.confirm_password.split("");

	if (user.name == ""|| ifom1.length>20) {
		document.write("Nhập sai tên đăng nhập!");
	}
	else {
		if(ifom2.length<6||ifom2.length>32){
			document.write("Nhập sai mật khẩu!")
		}
		else{
			if (user.password!=user.confirm_password) {
				document.write("Nhập lại mật khẩu không khớp!")
			}
			else{
				document.write("Đăng nhập thành công!")
			}
		}
	}
}