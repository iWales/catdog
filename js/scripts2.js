$(document).ready(function() {
  $("button#speak").click(function() {
    $("ul#cat").append("<li>Meow</li>");
    $("img").toggle();
  });

  $("button#bark").click(function() {
    $("ul#dog").append("<li>WOOF</li>");
      $("img").toggle();


    // $("ul#bark").children("li").first().click(function();
  });
  //
  // $("button#stop").click(function() {
  //   $("ol").append("<li>Stop copying me!</li>");
  //   $("#talk").remove();
  // });
  //
  // $("button#salad").click(function() {
  //   $("ul").prepend("<li>MORE MONEY</li>");
  //   $('li').css('background-color', 'green');
  // });
  //
  // $("ul#webpage").children("li").first().click(function() {
  //   alert('hi');
  //     });

});
