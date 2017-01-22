var net = new WebTCP('localhost', 9999)

var options = {
  encoding: "utf-8",
  timeout: 0,
  noDelay: true, // disable/enable Nagle algorithm
  keepAlive: false, //default is false
  initialDelay: 0 // for keepAlive. default is 0
}

var socket = net.createSocket("82.197.9.169", 61111, options)

// On connection callback
socket.on('connect', function(){
  console.log('connected');
})

// This gets called every time new data for this socket is received
socket.on('data', function(data) {
  document.getElementById("chat").innerHTML += data + "<br/>";
});

socket.on('end', function(data) {
  console.log("socket is closed ");
});

function sendMessage() {
	socket.write(document.getElementById("message").value + "\r\n");
	document.getElementById("message").value = ""
}
