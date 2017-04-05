var card = ["1", "2", "3", "4", "5", "6", "11", "12", "9"];
var time = 60;

/*function remaining_time(){
	setInterval(function(){
	time--;
	document.getElementById('').value = time;
	},1000)
}*/

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
					prev.css('opacity','0');
					$(a).css('pointer-events', 'auto');
					score++;
					if(score==9)alert('Victory');
					prev = null;
					},200);
			}
	}
}

$(function(){
	card = card.concat(card);
	card = shuffle(card);
	var display = "";
	for (var i = 0; i < card.length; i++) {
		display += '<div class="content">' + '<div class="card" data-name="'+card[i]+'" onclick = "flip(this)">'+'<div class="back-card"><img src="../IMG/'+card[i]+'.jpg"></div>'+'<div class="front-card"><img src="../IMG/card-back2.jpg"></div>'+'</div></div>'};			
	$("#wrapper").html(display);
})
