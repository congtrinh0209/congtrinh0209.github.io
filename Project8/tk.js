
var question10 = {
	question: "Một phút có bao nhiêu giây?",
	ans1: "60",
	ans2: "61",
	ans3: "62",
	result: "ans1"
};

var arrQues = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

var flag;
var score = 0;
var count = 1;
var lastScore = 0;
var numberClick = 0;
var max = 9;
var answer = document.querySelectorAll(".answer span");

function start() {
	window.location.href = "quiz.html";
}

function resetColor() {
	for (var i = 0; i < answer.length; i++) {
		answer[i].style.backgroundColor = "#cccccc";
	}
}

function changeColor(button) {
		resetColor();
		button.style.backgroundColor = "#f1ff92";
		flag = button.id;
}

function correctAns(dapAn) {
	if (dapAn == arrQues[count - 1].result) {
		score += 1;
	}
	return score;
}

function nextQuestion() {
	lastScore = correctAns(flag);
	resetColor();
	numberClick++;
	if (numberClick <= max) {
		document.getElementById("ques").innerHTML = arrQues[count].question;
		document.getElementById("ans1").innerHTML = arrQues[count].ans1;
		document.getElementById("ans2").innerHTML = arrQues[count].ans2;
		document.getElementById("ans3").innerHTML = arrQues[count].ans3;

		if(count == max)
			document.getElementById("next").innerHTML = "Kết quả";
		count++;
	} else {
		if (lastScore == arrQues.length) {
			window.location.href = "win.html";
		} else {
			window.location.href = "lose.html";
		}
	}
}

function backToStart() {
	window.location.href = "index.html";
}