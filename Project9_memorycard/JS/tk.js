$(document).ready( function() {
	document.getElementById('bg-music').play();
	//Whenever reload page, shuffle cards
	var arr = [];
	var box = $('.front');
	for(var i = 0; i < box.length; i++) {
		arr.push(box[i].innerHTML);
	}

	var newArr = shuffle(arr);
	for(var i = 0; i < newArr.length; i++) {
		$('.front')[i].innerHTML = newArr[i];
	}

	$('.card').css('pointer-events', 'none');

	document.getElementById('success').style.visibility = "hidden";
	document.getElementById('defeat').style.visibility = "hidden";
	//document.getElementById('start').style.visibility = "hidden";

	$('#start').click( function() {
		$('.card').css('pointer-events', 'auto');
		document.getElementById("start").style.visibility = "hidden";
		//Create animation rotate card when clicking on them
		var obj;
		var state = "";
		var rightAnswer = 0;
		var remainTime = 45;
		$('.card').click( function() {
			var card = this;
			var address = $(this).children('.front').html();
			if(state != "") {
				flipUp(card);
				$('.card').css('pointer-events', 'none');
				if(address == state) {
					setTimeout( function() {
						$(card).css({'opacity': '0', 'animation': 'zoomOut 0.3s linear'});
						$(obj).css({'opacity': '0', 'animation': 'zoomOut 0.3s linear'});
						state = "";
						rightAnswer++;
						if(rightAnswer == 8) {
							setTimeout( function() {
								//document.getElementById('bg-music').pause();
								document.getElementById('success').style.visibility = "visible";
								document.getElementById('victory-music').play();
								document.getElementById('clock').style.visibility = "hidden";
							}, 1000);
							clearInterval(run);
						}
					}, 500);
					$('.card').css('pointer-events', 'auto');
				} else {
					setTimeout( function() {
						flipDown(card);
						flipDown(obj);
						state = "";
					}, 500);
					$('.card').css('pointer-events', 'auto');
				}
			} else {
				flipUp(card);
				state = address;
				obj = card;
			}
		});

		var run = setInterval( function() {
			if(remainTime >= 10) $('#clock').html("<h1>00:"+remainTime+"</h1>");
			else $('#clock').html("<h1>00:0"+remainTime+"</h1>");
			remainTime--;
			if(remainTime < 0) {
				clearInterval(run);
				setTimeout( function() {
					document.getElementById('defeat').style.visibility = "visible";
					//document.getElementById('bg-music').pause();
					document.getElementById('defeat-music').play();
					document.getElementById('clock').style.visibility = "hidden";
					document.getElementById('content').style.visibility = "hidden";
				}, 2000);
			}
		}, 1000);
	});
});