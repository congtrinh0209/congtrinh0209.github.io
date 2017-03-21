
/****************BÀI 1***************/
function get_result1(){
	var n = prompt("Nhập kích thước tam giác!","5");
	function draw_1(n) {
			for (var i = 1; i <= n; i++) {
				for (var j = 1; j <=i; j++) {
					document.write("*");
				}
			document.write( "</br>");
		}
	}
		return draw_1(n);
}

/****************BÀI 2***************/
function get_result2(){
/* Nhập a */ var a = 7; 
/* Nhập b */ var b = 3;
			for (var i = 1; i <= b; i++)
			{
				for (var j=1; j<=a; j++) 
				{
					if( 1<i && i<b)
					{ 
						if(j==1 || j==a){
						document.write("*");}
						else{document.write("&nbsp;&nbsp;")}
					}
					else{document.write("*");}
				}
			document.write( "</br>");
			}
}
