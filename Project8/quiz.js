var question = [ques_1={content: 'Chủ tịch Hồ Chí Minh sinh năm nào?', A: '1895', B:'1890', C:'1900', D:'1893', aright:'1890'},
				ques_2={content: 'Chiến thắng Điện Biên Phủ vào năm nào?', A:'1950', B:'1952', C:'1955', D:'1954', aright:'1954'},
				ques_3={content: 'Giải phóng Miền Nam vào năm nào?', A: '1972', B:'1975', C:'1973', D:'1976', aright:'1975'},
				ques_4={content: 'Ai là Tổng thống Mỹ hiện tại?', A: 'Vladimir Putin', B:'Donal Trump', C:'Hilary Clinton', D:'Obama', aright:'Donal Trump'},
				ques_5={content: '"Kong Skull-Island" là phim nước nào sản xuất?', A: 'Mỹ', B:'Pháp', C:'Anh', D:'Đức', aright:'Mỹ'},
];

function trans_quizpage()
	{window.location.href = 'quiz.html'};
function trans_homepage()
	{window.location.href = 'home.html'};
function trans_rulepage()
	{window.location.href = 'rule.html'};
function trans_victory()
	{}
function trans_playagain()
	{}


function back_color() {
	for (var i = 1; i <= 4; i++){
		document.getElementById("ans_"+i).style.backgroundColor = "#616161";
	}
}
var score = 0;
function choise_color(a) {
	back_color();
	a.style.backgroundColor = "#ff6600";
	/********Score******/
	for (var i = 0; i < question.length; i++)
	{
		if (a.value==question[i].aright){
			score +=1;
		}
	}
	return score;
}
	/********Score******/

document.getElementById("ques_index").value = question[0].content;
document.getElementById("ans_1").value = question[0].A;
document.getElementById("ans_2").value = question[0].B;
document.getElementById("ans_3").value = question[0].C;
document.getElementById("ans_4").value = question[0].D;

var i = 1;
function next_ques()
{
		document.getElementById("ans_1").style.backgroundColor = "#616161";
		document.getElementById("ans_2").style.backgroundColor = "#616161";
		document.getElementById("ans_3").style.backgroundColor = "#616161";
		document.getElementById("ans_4").style.backgroundColor = "#616161";
	 	if (i<=question.length) 
		{
		 	document.getElementById("ques_index").value = question[i].content;
			document.getElementById("ans_1").value = question[i].A;
			document.getElementById("ans_2").value = question[i].B;
			document.getElementById("ans_3").value = question[i].C;
			document.getElementById("ans_4").value = question[i].D;
			if (i==question.length) {
			document.getElementById("next_ques").value = "Finish";
			}
		}
		i++;
}












