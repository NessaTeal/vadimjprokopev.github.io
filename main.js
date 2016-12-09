var frequencies = [587.33, 659.26, 698.46, 783.99, 880, 987.77]
var used = [587.33, 698.46]

var audioCtx = new window.AudioContext;

var oscillator = audioCtx.createOscillator();
var oscillator2 = audioCtx.createOscillator();
var oscillator3 = audioCtx.createOscillator();

var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.017;

gainNode.connect(audioCtx.destination);

oscillator.connect(gainNode);
oscillator2.connect(gainNode);
oscillator3.connect(gainNode);

oscillator.frequency.value = 523.25;
oscillator2.frequency.value = 587.33;
oscillator3.frequency.value = 698.46;

oscillator.start();
oscillator2.start();
oscillator3.start();

setInterval(changeNote, 900);

function changeNote() {
	
	var newNote;
	do {
		newNote = Math.round(Math.random() * 5);
	} while(frequencies[newNote] == used[0] || frequencies[newNote] == used[1])

	if(Math.random() < 0.5) {
		oscillator2.frequency.value = frequencies[newNote];
		used[0] = frequencies[newNote];
	}
	else {
		oscillator3.frequency.value = frequencies[newNote];
		used[1] = frequencies[newNote];
	}

}
// // var ans;

// function calc() {

// 	var opr = Math.round(Math.random() * 2);

// 	var a = Math.round(Math.random() * 49 + 1);
// 	var b = Math.round(Math.random() * 49 + 1);

// 	var oprsmb = "";

// 	if(opr == 0) {
// 		ans = a + b;
// 		oprsmb = "+";
// 	}
// 	else if(opr == 1) {
// 		ans = a - b;
// 		oprsmb = "-";
// 	}
// 	else {
// 		if(a > 25) {
// 			a = 50 - a;
// 		}
// 		if (b > 25) {
// 			b = 50 - 25;
// 		}
// 		ans = a * b;
// 		oprsmb = "*";
// 	}

// 		document.getElementById("text").innerHTML = a + " " + oprsmb + " " + b + " = ";
// }

// function click1() {
// 	if(document.getElementById("answer").value == ans) {
// 		document.getElementById("result").innerHTML = "correct";
// 		calc();
// 	}
// 	else {
// 		document.getElementById("result").innerHTML = "incorrect";
// 	}
// 	document.getElementById("answer").value = "";
// }

// 	calc()
// 	document.getElementById("answer")
// 	.addEventListener("keyup", function(event) {
// 	    event.preventDefault();
// 	    if (event.keyCode == 13) {
// 	        document.getElementById("check").click();
//     	}});
// 	}