var d = 587.33;
var b = 987.77;
var a = 880;
var g = 783.99;
var f = 739.99;
var c = 1046.50;
var e = 659.26;

var notesInOrder = [d, b, a, g, d,   d, d, d, b, a, g, e, e, c, b, a, f];
var lastsInOrder = [4, 4, 4, 4, 1.5, 8, 8, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1];

var audioCtx = new window.AudioContext;

var oscillator = audioCtx.createOscillator();
var oscillator2 = audioCtx.createOscillator();
var oscillator3 = audioCtx.createOscillator();

var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.017;

gainNode.connect(audioCtx.destination);

oscillator.connect(gainNode);

oscillator.frequency.value = 0;

oscillator.start();

var i = 0;

changeNote();

//var

function changeNote() {
	
	gainNode.gain.value = 0.027;

	var note = notesInOrder[i];
	var last = lastsInOrder[i];
	i++;

	oscillator.frequency.value = note;
	setTimeout(changeNote, 1400 / last)
}

//function 
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