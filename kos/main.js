var d = 587.33;
var dh = 587.33 * 2;
var b = 987.77;
var a = 880;
var g = 783.99;
var f = 739.99;
var c = 1046.50;
var e = 659.26;

var notesInOrder = [d, b, a, g, d,   d, d, d, b, a, g, e, e, c, b, a, f, dh, dh, dh, a, b, d, b, a, g, d, d, b, a, g, e,   e, e, c, b, a, dh, dh, dh, dh, e, dh, c, a, g, b, b, b, b, b, b, b, dh, g, a, b, c, c, c, c, c, b, b, b, b, b, a, a, b, a, dh, b, b, b, b, b, b, b, dh, g, a, b, c, c, c, c, c, b, b, b, b, dh, dh, c, a, g];
var lastsInOrder = [4, 4, 4, 4, 1.5, 8, 8, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4,  4,  4,  4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1.5, 4, 4, 4, 4, 4, 4,  4,  3,  8,  4,  4, 4, 4, 1, 4, 4, 2, 4, 4, 2, 4, 4,  3, 8, 1, 4, 4, 3, 8, 4, 4, 4, 8, 8, 4, 4, 4, 4, 2, 2,  4, 4, 2, 4, 4, 2, 4, 4,  3, 8, 1, 4, 4, 3, 8, 4, 4, 4, 8, 8, 4,  4,  4, 4, 1];

var audioCtx = new window.AudioContext;

var oscillator = audioCtx.createOscillator();

var gainNode = audioCtx.createGain();

gainNode.connect(audioCtx.destination);

oscillator.connect(gainNode);

oscillator.frequency.value = d;
oscillator.start();

var i = 0;

changeNote();

var timer;

function changeNote() {
	gainNode.gain.value = 0.165;

	var note = notesInOrder[i];
	var last = lastsInOrder[i];
	
	i++;
	if(i == notesInOrder.length) {
		i = 0;
	}

	oscillator.frequency.value = note;

	setTimeout(changeNote, 1400 / last);
	
	setTimeout(makeQuiter, 50);

}

function makeQuiter() {
	gainNode.gain.value = 0.060;
}