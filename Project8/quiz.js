var question = [ques_1={content: 'Chủ tịch Hồ Chí Minh sinh năm nào?', A: '1895', B:'1890', C:'1900', D:'1893'},
				ques_2={content: 'Chiến thắng Điện Biên Phủ vào năm nào?', A:'1950', B:'1952', C:'1955', D:'1954'},
				ques_3={content: 'Giải phóng Miền Nam vào năm nào?', A: '1972', B:'1975', C:'1973', D:'1976'},
				ques_4={content: 'Ai là Tổng thống Mỹ hiện tại?', A: 'Vladimir Putin', B:'Donal Trump', C:'Hilary Clinton', D:'Obama'},
				ques_5={content: '"Kong Skull-Island" là phim nước nào sản xuất?', A: 'Mỹ', B:'Pháp', C:'Anh', D:'Đức'},
];
function trans_quizpage()
	{window.location.href = 'quiz.html'};
function trans_homepage()
	{window.location.href = 'home.html'};
function trans_rulepage()
	{window.location.href = 'rule.html'};

var true_ans = ['A','B','C','D','A'];
	document.getElementById("ques_index").value = question[0].content;
	document.getElementById("ans_A").value = question[0].A;
	document.getElementById("ans_B").value = question[0].B;
	document.getElementById("ans_C").value = question[0].C;
	document.getElementById("ans_D").value = question[0].D;

var i = 1;
function next_ques(){
	 	if (i<question.length) 
		{
		 	document.getElementById("ques_index").value = question[i].content;
			document.getElementById("ans_A").value = question[i].A;
			document.getElementById("ans_B").value = question[i].B;
			document.getElementById("ans_C").value = question[i].C;
			document.getElementById("ans_D").value = question[i].D;
			i++;
		}
		else{
			document.getElementById("next_ques").value = "Finish";
		
		}
}










