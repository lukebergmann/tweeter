$(document).ready(function() {
  $("#tweet-text").on("input", function(event) {
    let startCount = 140;
    let userInput =  $(this);
    let totalCount = userInput.val().length
    let charRemaining = startCount - totalCount;
    // $(".counter").text(charRemaining);
    let counter = $(this).parent().next().children(".counter");
    counter.text(charRemaining);
    if (charRemaining < 0){
      counter.addClass("redCounter");
    } else {
      counter.removeClass("redCounter");
    }
  })
});