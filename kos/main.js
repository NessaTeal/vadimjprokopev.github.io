var d0 = 587.33;
var e0 = 659.26;
var f0 = 739.99;
var g0 = 783.99;
var a0 = 880;
var b0 = 987.77;
var c1 = 1046.50;
var d1 = d0 * 2;
var e1 = e0 * 2;

var notesInOrder = [d0, b0, a0, g0, d0,  d0, d0, d0, b0, a0, g0, e0, e0, c1, b0, a0, f0, d1, d1, c1, a0, b0, d0, b0, a0, g0, d0, d0, b0, a0, g0, e0,  e0, e0, c1, b0, a0, d1, d1, d1,   d1, e1, d1, c1, a0, g0, b0, b0, b0, b0, b0, b0, b0, d1, g0,   a0, b0, c1, c1, c1, c1, c1, b0, b0, b0, b0, b0, a0, a0, b0, a0, d1, b0, b0, b0, b0, b0, b0, b0, d1, g0,   a0, b0, c1, c1, c1,   c1, c1, b0, b0, b0, b0, d1, d1, c1, a0, g0];
var lastsInOrder = [4,  4,  4,  4,  1.5, 8,  8,  4,  4,  4,  4,  1,  4,  4,  4,  4,  1,  4,  4,  4,  4,  1,  4,  4,  4,  4,  1,  4,  4,  4,  4,  1.5, 4,  4,  4,  4,  4,  4,  4,  8/3,  8,  4,  4,  4,  4,  1,  4,  4,  2,  4,  4,  2,  4,  4,  8/3,  8,  1,  4,  4,  3,  8,  4,  4,  4,  8,  8,  4,  4,  4,  4,  2,  2,  4,  4,  2,  4,  4,  2,  4,  4,  8/3,  8,  1,  4,  4,  8/3,  8,  4,  4,  4,  8,  8,  4,  4,  4,  4,  1];

var audioCtx = new window.AudioContext;

var oscillator = audioCtx.createOscillator();

var gainNode = audioCtx.createGain();

gainNode.connect(audioCtx.destination);

oscillator.connect(gainNode);

oscillator.frequency.value = d0;
oscillator.start();

var i = 0;

changeNote();

var timer;

function changeNote() {
	gainNode.gain.value = 0.165;

	var note = notesInOrder[i];
	var last = lastsInOrder[i];
	
	karaoke_highlight(i);
	i++;
	if (i == notesInOrder.length) {
		i = 0;
	}

	oscillator.frequency.value = note;

	setTimeout(changeNote, 1400 / last);
	
	setTimeout(makeQuiter, 50);

}

function makeQuiter() {
	gainNode.gain.value = 0.12;
}

function karaoke_init() {
	var output = "";
	for (var i = 0; i < notesInOrder.length; i++) {
		var style = "style='width: " + (1 / lastsInOrder[i]) * 150 + "'";
		var div = "<div " + style + "class='karaokeFloater' id='karaoke_" + i + "'>";
		var convert = "wut";

		if (notesInOrder[i] == d0) convert = 'd0';
		if (notesInOrder[i] == e0) convert = 'e0';
		if (notesInOrder[i] == f0) convert = 'f0';
		if (notesInOrder[i] == g0) convert = 'g0';
		if (notesInOrder[i] == a0) convert = 'a0';
		if (notesInOrder[i] == b0) convert = 'b0';
		if (notesInOrder[i] == c1) convert = 'c1';
		if (notesInOrder[i] == d1) convert = 'd1';
		if (notesInOrder[i] == e1) convert = 'e1';

		div += convert;
		div += "</div>";
		output += div;
	}
	document.getElementById('karaoke').innerHTML = output;
	document.getElementById('karaoke_0').classList.add('karaokeRed');
}

function karaoke_highlight(i) {
	var element;
	if (i == 0) { element = document.getElementById("karaoke_" + (notesInOrder.length - 1)); }
	else { element = document.getElementById("karaoke_" + (i - 1)); }
	if (element != null) {
		element.classList.remove('karaokeRed');
	}

	element = document.getElementById("karaoke_" + (i - 0));
	if (element != null) {
		element.classList.add('karaokeRed');
	}
}