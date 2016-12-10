var frequencies = [523.25/2, 587.33/2, 659.26/2, 698.46/2, 783.99/2, 880/2, 987.77/2, 523.25, 587.33, 659.26, 698.46, 783.99, 880, 987.77];
var indexes = [7, 8, 10];

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
	
	var choice = Math.random();

	if(choice < 0.33) {
		if(indexes[0] == 0) {
			if(indexes[1] != 1) {
				oscillator.frequency.value = frequencies[1];
				indexes[0] = 1;
			}
			else {
				changeNote();
			}
		}
		else if(indexes[1] - 1 != indexes[0]) {
			var direction = Math.random();
			if(direction < 0.5) {
				indexes[0]++;
			}
			else {
				indexes[0]--;
			}
			oscillator.frequency.value = frequencies[indexes[0]];
		}
	}
	else if(choice < 0.66) {
		if(indexes[1] - 1 == indexes[0]) {

			if(indexes[1] + 1 == indexes[2]) {
				changeNote();
			}

			indexes[1]++;
			oscillator2.frequency.value = frequencies[indexes[1]];
		}
		else if(indexes[1] + 1 == indexes[2]) {
			indexes[1]--;
			oscillator2.frequency.value = frequencies[indexes[1]];
		}
		else {
			var direction = Math.random();

			if(direction < 0.5) {
				indexes[1]++;
			}
			else {
				indexes[1]--;
			}
			oscillator2.frequency.value = frequencies[indexes[1]];
		}
	}
	else {
		if(indexes[2] == 13) {
			if(indexes[1] != 12) {
				oscillator3.frequency.value = frequencies[12];
				indexes[2] = 12;
			}
			else {
				changeNote();
			}
		}
		else if(indexes[1] + 1 != indexes[2]) {
			var direction = Math.random();
			if(direction < 0.5) {
				indexes[2]++;
			}
			else {
				indexes[2]--;
			}
			oscillator3.frequency.value = frequencies[indexes[2]];
		}
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