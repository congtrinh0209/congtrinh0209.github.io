
/**********BÀI 1***************/
function get_result1() {
	var n= prompt("Input one number!","3")
	var result=n;
	for (i = 1; i<n ; i++){
		result = result*i;
		}
	document.write(n+'! = '+result);
}

/**********BÀI 2***************/

function get_result2(){
	var str1= prompt("Input a String!","abcd");
	var arr = str1.split("");
	for (var i = arr.length-1; i >= 0; i--) {
		document.write(arr[i])
	}
}

/**********BÀI 3***************/

function get_result3(){
	var str2= prompt("Input a String!","abcd");
	var str_dup = str2;
	for (var i = 1; i < 10; i++) {
		str_dup = str_dup+'-'+str2;
	}
	document.write(str_dup);
}

/**********BÀI 4***************/

function arrange(a){
	return a.sort();
}
function get_result4(){
	var str3 = prompt("Input list-student!","Nam,Bắc,An");
	var arr3 = str3.split(",");
	var arrange_arr3 = arrange(arr3);
	for (var i = 1; i <= arrange_arr3.length; i++) {
		document.write('<p>'+i+'.'+arrange_arr3[i-1]+'</p>');
	}
}

/**********BÀI 5***************/

function get_result5(){
	var arr5=[];
	var str4 = prompt("Input array number","1,2,3");
	var arr4 = str4.split(",");
	var arr4_1=arr4.map(Number);
	for (var i = 0; i < arr4_1.length; i++) {
		arr5[i]=arr4_1[i]*2;
	}
	document.write(arr5);
}

/**********BÀI 6***************/

function get_result6(){
	var arr7=[];
	var str6 = prompt("Input array number","5,6,7");
	var arr6 = str6.split(",");
	var arr6_1=arr6.map(Number);
	for (var i = 0; i < arr6_1.length; i++) {
		arr7[i]=arr6_1[i]%2;
	}
	document.write(arr7);
}