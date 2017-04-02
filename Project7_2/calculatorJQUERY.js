
var a = $('#result').val();
$('#clear').click(function(){
	$('#result').val("");
	a = $('#result').val()});
function display(parameter) {
	$('#result').val(a+= parameter);
}
$('#bang').click(function(){$('#result').val(eval(a))});
function sqrt(){
	if(a<0){$('#result').val("Data Erro")}
	else{
		$('#result').val(Math.sqrt(a))
	};
}
function sqr(){
	$('#result').val(a*a);
}
function factorial(){
	var f = 1;
	if(f==0){ $('#result').val("1")}
	if (f<0||f%1!=0) {$('#result').val("Data Erro");}
	else
		{for (var i = 1; i < f; i++) 
			{f = f*i;}
		}
	$('#result').val(f);
}
var i =0 ;
$('#change_theme').click(function(){
	if (i%2==0) {
	$('.wrapper').css('background-color','#993300');
	$('#result').css('background-color','#ccffff');
	$('#result').css('color','black');
	$('.button').css('background-color','#006600');
	}
	else{
	$('.wrapper').css('background-color','#5f5f5f');
	$('#result').css('background-color','#599593');
	$('#result').css('color','white');
	$('.button').css('background-color','#737a89');}
	i++;
})