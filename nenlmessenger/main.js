var socket = new WebSocket("ws://34.248.239.43");

socket.onerror = function () {

	alert("Error connecting to server, please try later.")
}

socket.onmessage = function (event) {

	var response = JSON.parse(event.data);

	if(response.type == "chatroomList") {
		$("#chatrooms").html("");
		var chatroomFirstPart  = '<a class="list-group-item list-group-item-action flex-column align-items-start" id="chatroom';
		var chatroomSecondPart = '"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">';
		var chatroomThirdPart  = '</h5><small>';
		var chatroomFourthPart = '</small></div></a>';

		for (var i = response.chatrooms.length - 1; i >= 0; i--) {

			var chatroomName = response.chatrooms[i].chatroomName;

			var oneChatroom = chatroomFirstPart + i + chatroomSecondPart + chatroomName + chatroomThirdPart + response.chatrooms[i].chatroomSize + chatroomFourthPart;

			$("#chatrooms").append(oneChatroom);

			$("#chatroom" + i).click(function(){
				chooseChatroom(chatroomName);
				return false;
			});
		}

	} else {
		var messageFirstPart  = '<div class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">';
		var messageSecondPart = '</h5><small>';
		var messageThirdPart  = '</small></div><p class="mb-1">';
		var messageFourthPart = '</p></div>';

		$("#chat").append(messageFirstPart + response.origin + messageSecondPart + response.date + messageThirdPart + response.message + messageFourthPart);
	}
}

function sendMessage() {

	var message = {};

	message.type = "message";

	message.message = $("#message").val();

	$("#message").val("");

	socket.send(JSON.stringify(message));
}

function goToChooseChatPageFromLoginPage() {

	$("#chooseNicknamePage").css("display", "none");

	$("#chooseNicknameBtn").prop("onclick", null);
	$("#chooseNicknameBtn").click(function(e) {
		goToChatPageFromChooseNicknamePage();
	});

	var message = {};

	message.type = "chooseNickname";

	message.nickname = $("#nickname").val();

	socket.send(JSON.stringify(message));

	goToChooseChatPage();
}

function goToChooseChatPageFromChatPage() {

	$("#chatPage").css("display", "none");

	var message = {};

	message.type = "quitChatroom";

	socket.send(JSON.stringify(message));

	goToChooseChatPage();
}

function goToChooseChatPage() {

	$("#chooseChatPage").css("display", "block");

	var message = {};

	message.type = "getChatroomList";

	socket.send(JSON.stringify(message));
}

function goToChooseNicknamePage() {

	$("#chatPage").css("display", "none");

	$("#chooseNicknamePage").css("display", "block");	
}

function chooseChatroom(chatroomName) {

	message = {};

	message.type = "joinChatroom";

	message.chatroomName = chatroomName;

	socket.send(JSON.stringify(message));

	$("#chooseChatPage").css("display", "none");

	goToChatPage();
}

function goToChatPageFromChooseNicknamePage() {

	$("#chooseNicknamePage").css("display", "none");

	var message = {};

	message.type = "chooseNickname";

	message.nickname = $("#nickname").val();

	socket.send(JSON.stringify(message));

	goToChatPage();
}

function goToChatPage() {

	$("#chatPage").css("display", "block");
}

function createNewChatroom() {

	$("#chooseChatPage").css("display", "none");

	var message = {};

	message.type = "createChatroom";

	message.chatroomName = $("#newChatroomName").val();

	socket.send(JSON.stringify(message));

	goToChatPage();
}

$(document).ready(function() {
	$("#nickname").keydown(function(e) {
		var keyCode = e.which;

		if(keyCode == 13) {
			$("#chooseNicknameBtn").trigger("click");
		}
	});

	$("#newChatroomName").keydown(function(e) {
		var keyCode = e.which;

		if(keyCode == 13) {
			createNewChatroom();
		}
	});

	$("#message").keydown(function(e) {
		var keyCode = e.which;

		if(keyCode == 13) {
			e.preventDefault();
			sendMessage();
		}
	});
});