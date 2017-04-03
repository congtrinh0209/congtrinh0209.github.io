var card = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

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
function flip(a){
	$(a).toggleClass('z');
	






	$(a).children('.back-card').css('transform','rotateY(180deg)');
	$(a).children('.front-card').css('transform','rotateY(0deg)');
	$(a).children('.back-card').css({'transition': 'all 0.5s','backface-visibility':'hidden'});
	$(a).children('.front-card').css({'transition': 'all 0.5s','backface-visibility':'hidden'});

}

$(function(){
	card = card.concat(card);
	card = shuffle(card);
	var display = "";
	for (var i = 0; i < card.length; i++) {
		display += '<div class="content">' + '<div class="card" data-name"'+card[i]+'" onclick = "flip(this)">'+'<div class="front-card"><img src="../IMG/'+card[i]+'.jpg"></div>'+'<div class="back-card"><img src="../IMG/card-back1.jpg"></div>'+'</div></div>'};			
	$("#wrapper").html(display);
})
