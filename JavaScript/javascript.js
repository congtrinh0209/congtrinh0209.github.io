/*********Function Bai 1***********/
function baitap1(x){
	return x*x;}
function data_ex1() {
	var n1 = prompt("Please enter one number!", "Number");
	var ketqua = baitap1(n1);
	alert('Kết quả: ' + ketqua);
}

/*********Function Bai 2*********/
function getpara_a(){return document.getElementById('para_a').value;}
function getpara_b(){return document.getElementById('para_b').value;} 
function getpara_c(){return document.getElementById('para_c').value;}
function square(a,b,c){
	return (3*a+2*b-c);
}
function result_ex2() {
	var kq=baitap1(square(getpara_a(), getpara_b(), getpara_c()))
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