/*********Function Bai 1***********/
function baitap1(x){
	return x*x;}
function data_ex1() {
	var n1 = prompt("Please enter one number!", "Number");
	var ketqua = baitap1(n1);
	alert('Kết quả: ' + ketqua);
}

/*********Function Bai 2*********/
function square(a,b,c){
	return (3*a+2*b-c);
}
function result_ex2() {
	var n2 = prompt("Nhập lần lượt 3 tham số:", "a,b,c");
	var n2_ar = n2.split(",");
	arr2 = n2_ar.map(Number);
	var kq=baitap1(square(arr2[0],arr2[1],arr2[2]));
	alert("Kết quả: " + kq );
	}

/*********Function Bai 3*********/

function get_string1(){
	return document.getElementById("string1").value;
}
function cut_st(a){
	return a.substring(0,10);
}
function add_st(b){
	return b.concat("...");
}
function result(){
	return add_st(cut_st(get_string1()));
}
function get_result1(c){
	return document.getElementById("string_cut").value=c;
}

/*********Function Bai 4*********/
function get_string2(){
	return document.getElementById("string2").value;
}
function lc_st(a){
	return a.toLowerCase();
}
function get_char1(a){
	return a.charAt(0);
}
function up_st(a){
	return a.toUpperCase();
}
function get_char2(a){
	return a.substr(1);
}
function result2(){
	return up_st(get_char1(get_string2())) + get_char2(lc_st(get_string2()));
}
function get_result2(c){
	return document.getElementById("string_upcase").value=c;
}

/*********Function Bai 5*********/

function get_ar(){
	return document.getElementById("array1").value;
}
function sort_ar(a,b){
	return a - b;
}
function arranger(a){
	return a.sort(sort_ar);
}
function result3(){
	var n3_ar = get_ar().split(",");
	var arr3 = n3_ar.map(Number);
	var re_3 = arranger(arr3);
	min_num = re_3[0];
	return min_num;
}
function get_result3(c){
	return document.getElementById("min-number").value=c;
}

/*********Function Bai 6*********/
function arranger_list(a){
	return a.sort();
}
var list_student = ['Trình', 'Hiếu', 'Đạt', 'Nam', 'Bách'];
function result4(){
	return arranger_list(list_student);
}
function get_result4(c){
	return document.getElementById("list").value=c;
}

/*********Function Bai 7*********/
var aboutMe = function(a){
	document.write('Xin chào, tôi là '+a.firstName+' '+a.lastName+'. Năm nay tôi '+a.age+' tuổi.');
}

var teacher = {
  firstName: "Bùi",
  lastName: "Huy",
  age: 27,
  say: function(){aboutMe(teacher);}
}
var parent = {
  firstName: "Trịnh",
  lastName: "Minh",
  age: 51,
  say: function(){aboutMe(parent);}
}
var student = {
  firstName: "Công",
  lastName: "Trình",
  age: 26,
  say: function(){aboutMe(student);}
}
