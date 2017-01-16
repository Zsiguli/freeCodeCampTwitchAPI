$(document).ready(function () {
  var channelNameArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  for (var i = 0; i < channelNameArr.length; i++) {
    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+channelNameArr[i]+"", function (userData) {
      if (userData.error == "Unprocessable Entity") {
        $('#content').append('<div class="flex-one-channel not-existing"><img src="http://3.bp.blogspot.com/_zN3PS8-IYWU/TMZoFGItazI/AAAAAAAABy8/58j2YEEPaz4/s1600/error.png"><p>' + userData.message + '</p></div>');
      } else {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + userData.name + "",  function (streamData) {
          if (streamData.stream === null) {
            $('#content').append('<div class="flex-one-channel offline"><img src="' + userData.logo + '"><a href="https://www.twitch.tv/' + userData.name + '"><p>' + userData.name + '</p></a><p class="standalone">Offline</p></div>');

          } else {
            $('#content').append('<div class="flex-one-channel online"><img src="' + userData.logo + '"><a href="' + streamData.stream.channel.url + '"><p>' + userData.name + '</p></a><p>' + streamData.stream.channel.status + ' (' + streamData.stream.game + ')</p><p class="standalone">Viewers: ' + streamData.stream.viewers + '</p></div>');

          }
        });

      }

    });
  }
});
