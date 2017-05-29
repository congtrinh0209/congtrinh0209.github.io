var card = ["1", "2", "3", "4", "5", "6", "11", "12", "9"];
var time = 60;
/********     Đảo mảng     **********/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
/********    Gán dữ liệu    **********/
$(function(){
	card = card.concat(card);
	card = shuffle(card);
	var display = "";
	for (var i = 0; i < card.length; i++) {
		display += '<li class="sp">'+'<div class="content">' + '<div class="card" data-name="'+card[i]+'" onclick = "flip(this)">'+'<div class="back-card"><img src="../IMG/'+card[i]+'.jpg"></div>'+'<div class="front-card"><img src="../IMG/card-back2.jpg"></div>'+'</div></div>'};			
	$("#wrapper").html(display);
	$('.card').css('pointer-events', 'none');
});
/********   Click Start-bắt đầu chạy thời gian    **********/
var run_time;
$('.time_number').children('h3').html(time);
$('.start').click(function(){
	document.getElementById('open-music').pause();
	document.getElementById('start-music').play();
	document.getElementById('ost').play();
	$('.time').css('display','block');
	$('.start').css('display','none');
	$('.card').css({'pointer-events':'auto','opacity':'1'});
	run_time = setInterval(function(){	/*********LOSE********/
		time--;
		$('.time_number').children('h3').html(time);    /* màu thời gian */
		if(time<30){$('.time_number').children('h3').css('color','yellow')};
		if(time<10){$('.time_number').children('h3').css('color','red');};
		if(time==10){document.getElementById('time-end').play();};
		if(time==0){clearInterval(run_time);
					$('.card').css({'pointer-events':'none','opacity':'0.6'});
					document.getElementById('ost').pause();
					document.getElementById('lose-music').play();
					$('.lose_page').css('display','block');
				};
		},1000);
});
/***********  Logic trò chơi   ************/
var prev = null;
var score = 0;
function flip(a){
	$(a).children('.back-card').css('transform','rotateY(0deg)');
	$(a).children('.front-card').css('transform','rotateY(180deg)');
	$(a).css('pointer-events', 'none');
if(!prev){
		prev = $(a);
	}
	else{
		if (prev.attr('data-name')!=$(a).attr('data-name'))
			{	
				setTimeout(
					function(){
						$(a).children('.back-card').css('transform','rotateY(180deg)');
						$(a).children('.front-card').css('transform','rotateY(0deg)');
						prev.children('.back-card').css('transform','rotateY(180deg)');
						prev.children('.front-card').css('transform','rotateY(0deg)');
						prev.css('pointer-events', 'auto');
						$(a).css('pointer-events', 'auto');	
						prev = null;
						},500);
			}
		else{
			setTimeout(
				function(){
					document.getElementById('true').play();
					$(a).css('opacity','0');
					prev.css('opacity','0');					/*********VICOTRY********/
					$(a).css('pointer-events', 'auto');
					score++;
					if(score==9){
						clearInterval(run_time);
						document.getElementById('time-end').pause();
						document.getElementById('ost').pause();
						document.getElementById('victory-music').play();
						$('.victory_page').css('display','block');
					};
					prev = null;
					},200);
			}
	}
}

$('.home').click(function(){
	window.location.href = 'memorycard.html';
});
$('.again').click(function(){
	window.location.href = 'memorycard.html';
});
