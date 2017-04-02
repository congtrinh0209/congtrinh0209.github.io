function reset(x){
	document.getElementById('result').value = x;
}
function display(parameter) {
	document.getElementById('result').value += parameter;
}
function math(){
	reset(eval(document.getElementById('result').value));
}
function sqrt(){
	var b = document.getElementById('result').value;
	var sq = b;
	if(b<0){sq = "Data Erro"}
		else{
	sq = Math.sqrt(parseFloat(document.getElementById('result').value))}
	document.getElementById('result').value = sq;
}
function sqr(){
	document.getElementById('result').value = (parseFloat(document.getElementById('result').value))*(parseFloat(document.getElementById('result').value))
}
function factorial(){
	var a = document.getElementById('result').value;
	var factory = a;
	if(a==0){ factory =1}
	if (a<0||a%1!=0) {factory = "Data Erro";}
	else
		{for (var i = 1; i < a; i++) 
			{
			factory = factory*i;
			}
		}
	document.getElementById('result').value = factory;
}