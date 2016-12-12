$(document).ready(function() {

	var canvas1 = document.getElementById("canvas1");
	var ctx1 = canvas1.getContext("2d");

	var canvas2 = document.getElementById("canvas2");
	var ctx2 = canvas2.getContext("2d");

	var canvas3 = document.getElementById("canvas3");
	var ctx3 = canvas3.getContext("2d");

	ctx1.moveTo(0, 200);

	for(var i = 0; i < 1000; i++) {
		ctx1.lineTo(i, 75 * Math.sin(i * Math.PI / 20) + 75 * Math.sin(i * Math.PI / 40) + 200);
	}

	ctx1.stroke();

	ctx2.moveTo(0, 200);

	for(var i = 0; i < 1000; i++) {
		ctx2.lineTo(i, 75 * Math.sin(i * Math.PI / 20) + 200);
	}

	ctx2.strokeStyle="#00ff00";

	ctx2.stroke();

	ctx3.moveTo(0, 200);

	for(var i = 0; i < 1000; i++) {
		ctx3.lineTo(i, 75 * Math.sin(i * Math.PI / 40) + 200);
	}

	ctx3.strokeStyle="#ff0000";

	ctx3.stroke();
});