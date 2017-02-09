$(document).ready(function() {
  $("button#hello").click(function() {
    $("ol").append("<li>Hello!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul").append("<li>Goodbye!</li>");
  });

  $("button#stop").click(function() {
    $("ol").append("<li>Stop copying me!</li>");
    $("#talk").remove();
  });

  $("button#salad").click(function() {
    $("ul").prepend("<li>MORE MONEY</li>");
    $('li').css('background-color', 'green');
  });

  $("ul#webpage").children("li").first().click(function() {
    alert('hi');
      });

});
