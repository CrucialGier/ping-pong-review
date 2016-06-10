// Front End? //

$(document).ready(function() {
  $("#getResult").click(function(event) {
    event.preventDefault();
    $("#result").empty();
    getResult(input);
  });
});

// Back End? //

var getResult = function(input) {
  var input = parseInt($("#input").val());
  for (var i = 0; i < input; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      $("#result").append("<li>" + "Ping-Pong!!" + "</li>");
    } else if ((i + 1) % 3 === 0) {
      $("#result").append("<li>" + "Ping!" + "</li>");
    } else if ((i + 1) % 5 === 0) {
      $("#result").append("<li>" + "pong!" + "</li>");
    } else {
      $("#result").append("<li>" + (i + 1) + "</li>");
    };
  };
};
