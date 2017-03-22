
/****************BÀI 1***************/
function get_result1(){
	var n = prompt("Nhập kích thước tam giác(>2)!","5");
	function draw_1(n) {
			for (var i = 1; i <= n; i++) {
				for (var j = 1; j <=i; j++) {
					document.write("*&nbsp;");
				}
			document.write( "</br>");
		}
	}
		return draw_1(n);
}

/****************BÀI 2***************/
function get_result2(){
			var para = prompt("Nhập lần lượt chiều dài cạnh a,b(>3)!","6,4");
			var arr2 = para.split(",");
			var arr2_1 = arr2.map(Number);	
			for (var i = 1; i <= arr2_1[1]; i++)
			{
				for (var j=1; j<=arr2_1[0]; j++) 
				{
					if( 1<i && i<arr2_1[1])
					{ 
						if(j==1 || j==arr2_1[0])
						{
						document.write("*");
						}
						else{document.write("&nbsp;&nbsp;")}
					}
					else{document.write("*");}
				}
			document.write( "</br>");
			}
}

/****************BÀI 3***************/
function get_result3(){
	var n1 = prompt("Nhập kích thước tam giác(>1)!","4");
	function draw_3() {
			for (var i = 1; i <= n1; i++)
			{
				for (var j = 1; j <= 2*n1-1 ; j++)
				{
					if(i>1)
					{
						if (i<=j && j<=2*n1-i)
						{
						document.write("*&nbsp;");
						}
						else{document.write("&nbsp;&nbsp;&nbsp;")}
					}
					else{document.write("*&nbsp;");}
				}
			document.write( "</br>");
			}
	}
	return draw_3(n1);
}

/****************BÀI 4***************/

function get_result4(){
	var n2 = prompt("Nhập vào số nguyên lẻ(>3)!","7");
	function draw_4()
	{
		for (var i=1; i<=n2; i++)
		{
			for (var j = 1; j <=n2; j++)
			{
				if (j==i || j==n2-i+1)
				{
					document.write("*&nbsp;");
				}
				else{document.write("&nbsp;&nbsp;&nbsp;")}
			}
			document.write("</br>")
		}
	}
	return draw_4(n2);
}

/****************BÀI 5***************/
function get_result5(){
	var n3 = prompt("Nhập vào số nguyên lẻ(>3)!","7");
	function draw_5()
	{
		/* vòng lặp 1*/	
		for (var i = 1; i < n3/2+1/2; i++) 
		{
			for (var j = 1; j <=n3; j++) 
			{
				if(j<=i || j>=n3-i+1)
					{
					document.write("*&nbsp;");
					}
				else{document.write("&nbsp;&nbsp;&nbsp;");}
			}
		document.write("</br>")
		}
		/* vòng lặp 2*/		
		for (var i = n3/2+1/2; i <= n3; i++) 
		{
			for (var j = 1; j <=n3; j++) 
			{
				if(j>=i || j<=n3-i+1)
					{
					document.write("*&nbsp;");
					}
				else{document.write("&nbsp;&nbsp;&nbsp;");}
			}
		document.write("</br>")
		}
	}
	return draw_5(n3);
}
