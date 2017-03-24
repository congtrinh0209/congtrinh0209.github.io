
var pra = document.getElementsByClassName('paragraph');

/***************** BÀI 1 ************************/
function changeFontSize(x){
	x = prompt("Nhập kích thước font cho cả 3 đoạn(đv:px):","20");
	for (var i = 0; i < pra.length; i++) {
		pra[i].style.fontSize =x+"px";
	}

}
/***************** BÀI 2 ************************/
function increaseFontSize_p(){
	var x = prompt("Nhập đoạn văn muốn tăng font lên 1px","2");
	var y = parseInt (pra[x-1].style.fontSize.replace("px",""));
	if (y+1>30){
		pra[x-1].style.fontSize = "30px";
	}
	else{pra[x-1].style.fontSize = y+1+"px";}
}
/***************** BÀI 3 ************************/
function decreaseFontSize_p(){
	var x = prompt("Nhập đoạn văn muốn giảm font xuống 1px","1");
	var y = parseInt (pra[x-1].style.fontSize.replace("px",""));
	if (y-1<10){
		pra[x-1].style.fontSize = "10px";
	}
	else{pra[x-1].style.fontSize = y-1+"px";}
}
/***************** BÀI 4 ************************/
function changeColor_p(){
	pra[0].style.color = "blue";
	pra[1].style.color = "yellow";
	pra[2].style.color = "red";
}
/***************** BÀI 5 ************************/
function changeBgColor_p(){
	var color = prompt("Nhập backgroundColor!","blue")
	document.body.style.backgroundColor = color;
}
/***************** BÀI 6 ************************/
function copyContent(){
	var p1=document.getElementById("p1");
	var p2=document.getElementById("p2");
	p1.innerText = p2.innerText;
}