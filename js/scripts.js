var input;
var pingPong = [];

var getResult = function(input) {
  pingPong = [];
  for (var i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      pingPong.push("ping-pong");
    } else if (i % 3 === 0) {
      pingPong.push("ping");
    } else if (i % 5 === 0) {
      pingPong.push("pong");
    } else {
      pingPong.push(i);
    };
  };
};

$(document).ready(function() {
  $("#getResult").click(function(event) {
    event.preventDefault();
    input = parseInt($("#input").val());
    $("#result").empty();
    getResult(input);
    pingPong.forEach(function(current) {
      $("#result").append("<li>" + current + "</li>");
    });
  });
});
