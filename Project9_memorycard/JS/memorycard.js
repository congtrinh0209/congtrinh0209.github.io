var card = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
function flip(a){
	$(a).children('.back-card').css({'transform':'rotateY(0deg)','transition': 'all 0.5s','backface-visibility':'hidden'});
	$(a).children('.front-card').css({'transform':'rotateY(180deg)','transition': 'all 0.5s','backface-visibility':'hidden'});
if(!prev){
		prev = $(a);
	}
	else{
		if (prev.attr('data-name')!=$(a).attr('data-name'))
			{
				setTimeout(
					function(){
						$(a).children('.back-card').css({'transform':'rotateY(180deg)','transition': 'all 0.5s'});
						$(a).children('.front-card').css({'transform':'rotateY(0deg)','transition': 'all 0.5s'});
						prev.children('.back-card').css({'transform':'rotateY(180deg)','transition': 'all 0.5s'});
						prev.children('.front-card').css({'transform':'rotateY(0deg)','transition': 'all 0.5s'});
						prev = null;
						},500);
			}
		else{
			setTimeout(
				function(){
					$(a).css('opacity','0');
					prev.css('opacity','0');
					prev = null;
				},200)
			}
	}
}

$(function(){
	card = card.concat(card);
	card = shuffle(card);
	var display = "";
	for (var i = 0; i < card.length; i++) {
		display += '<div class="content">' + '<div class="card" data-name="'+card[i]+'" onclick = "flip(this)">'+'<div class="back-card"><img src="../IMG/'+card[i]+'.jpg"></div>'+'<div class="front-card"><img src="../IMG/card-back1.jpg"></div>'+'</div></div>'};			
	$("#wrapper").html(display);
})
