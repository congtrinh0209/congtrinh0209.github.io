var question = [ques_1={content: 'Chủ tịch Hồ Chí Minh sinh năm nào?', A: '1895', B:'1890', C:'1900', D:'1893', aright:'1890'},
				ques_2={content: 'Chiến tranh thế giới thứ nhất xảy ra năm nào?', A: '1918', B:'1914', C:'1916', D:'1917', aright:'1914'},
				ques_3={content: 'Giải phóng Miền Nam vào năm nào?', A: '1972', B:'1975', C:'1973', D:'1976', aright:'1975'},
				ques_4={content: 'Chiến thắng Điện Biên Phủ vào năm nào?', A: '1950', B:'1952', C:'1955', D:'1954', aright:'1954'},
				ques_5={content: 'Chiến tranh thế giới lần hai xảy ra năm nào?', A: '1939', B:'1936', C:'1940', D:'1938', aright:'1939'},
];
function trans_quizpage()
	{window.location.href = 'quiz.html'};
function trans_homepage()
	{window.location.href = 'home.html'};
function trans_rulepage()
	{window.location.href = 'rule.html'};
function trans_victory()
	{window.location.href = 'victory.html'};
function trans_playagain()
	{window.location.href = 'again.html'};


function back_color() {
	for (var i = 1; i <= 4; i++){
		document.getElementById("ans_"+i).style.backgroundColor = "#616161";
	}
}
var score = 0;
function choise_color(a) {
	back_color();
	a.style.backgroundColor = "#ff6600";
	
	for (var i = 0; i < question.length; i++)
	{
		if (a.value==question[i].aright)
		{
			score +=1;
		}
	}
	return score;
}

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
	 	if (i<question.length) 
		{
		 	document.getElementById("ques_index").value = question[i].content;
			document.getElementById("ans_1").value = question[i].A;
			document.getElementById("ans_2").value = question[i].B;
			document.getElementById("ans_3").value = question[i].C;
			document.getElementById("ans_4").value = question[i].D;
			if (i==(question.length-1)) 
			{
			document.getElementById("next_ques").value = "Finish";
			}
		}	
		if (i==question.length)  {
			if(score==question.length){window.location.href = 'victory.html'}
			else{window.location.href = 'again.html';};
			}
		document.getElementById('result').innerText="Đáng tiếc bạn chỉ trả lời đúng "+score+"/5 câu hỏi. Hãy suy nghĩ kỹ trước khi trả lời!";
		i++;
}












